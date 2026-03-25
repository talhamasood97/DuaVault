/**
 * Content Validator — DuaVault
 *
 * Checks for duplicates and guideline violations before adding new duas/hadiths.
 * Run: PATH="$HOME/.nvm/versions/node/v20.20.1/bin:$PATH" npx ts-node data/validate.ts
 *
 * Catches:
 *  - Duplicate slugs, IDs, titles, arabic text, translations
 *  - Duplicate source_book + hadith_number combinations
 *  - DA'IF/MAWDU' marked as daily_dua_eligible
 *  - Missing graded_by on duas
 *  - Insufficient emotion_tags (< 2) or situation_tags (< 3)
 *  - Hadith grade outside Sahih/Hasan
 */

import { DUAS } from "./duas";
import { HADITHS } from "./hadiths";

type Issue = { type: "ERROR" | "WARN"; item: string; message: string };
const issues: Issue[] = [];

function error(item: string, message: string) {
  issues.push({ type: "ERROR", item, message });
}

function warn(item: string, message: string) {
  issues.push({ type: "WARN", item, message });
}

// ─── Normalize helpers ────────────────────────────────────────────────────────

function normalizeArabic(text: string) {
  // Strip all Arabic diacritics (harakat) for comparison — two texts differing
  // only by vowelling are the same dua.
  return text
    .replace(/[\u064B-\u065F\u0670]/g, "") // tashkeel
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeText(text: string) {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

// ─── DUA VALIDATION ───────────────────────────────────────────────────────────

const duaSlugs = new Map<string, number>();
const duaIds = new Map<number, string>();
const duaTitles = new Map<string, string>();
const duaArabic = new Map<string, string>();
const duaTranslations = new Map<string, string>();
const duaSources = new Map<string, string>(); // source_book:hadith_number → slug

console.log(`\nValidating ${DUAS.length} duas…\n`);

for (const dua of DUAS) {
  const ref = `Dua [${dua.id}] "${dua.slug}"`;

  // ── Duplicate ID ──────────────────────────────────────────────────────────
  if (duaIds.has(dua.id)) {
    error(ref, `Duplicate ID ${dua.id} — already used by "${duaIds.get(dua.id)}"`);
  } else {
    duaIds.set(dua.id, dua.slug);
  }

  // ── Duplicate slug ────────────────────────────────────────────────────────
  if (duaSlugs.has(dua.slug)) {
    error(ref, `Duplicate slug "${dua.slug}" — already used at ID ${duaSlugs.get(dua.slug)}`);
  } else {
    duaSlugs.set(dua.slug, dua.id);
  }

  // ── Duplicate title ───────────────────────────────────────────────────────
  const normTitle = normalizeText(dua.title);
  if (duaTitles.has(normTitle)) {
    error(ref, `Duplicate title "${dua.title}" — already used by "${duaTitles.get(normTitle)}"`);
  } else {
    duaTitles.set(normTitle, dua.slug);
  }

  // ── Duplicate arabic text ─────────────────────────────────────────────────
  const normArabic = normalizeArabic(dua.arabic_text);
  if (duaArabic.has(normArabic)) {
    error(ref, `Duplicate Arabic text — already used by "${duaArabic.get(normArabic)}"`);
  } else {
    duaArabic.set(normArabic, dua.slug);
  }

  // ── Duplicate translation ─────────────────────────────────────────────────
  const normTranslation = normalizeText(dua.translation);
  if (duaTranslations.has(normTranslation)) {
    error(ref, `Duplicate translation — already used by "${duaTranslations.get(normTranslation)}"`);
  } else {
    duaTranslations.set(normTranslation, dua.slug);
  }

  // ── Duplicate source reference ────────────────────────────────────────────
  if (dua.hadith_number) {
    const sourceKey = `${dua.source_book.toLowerCase()}:${dua.hadith_number}`;
    if (duaSources.has(sourceKey)) {
      error(ref, `Duplicate source reference "${dua.source_book} #${dua.hadith_number}" — already used by "${duaSources.get(sourceKey)}"`);
    } else {
      duaSources.set(sourceKey, dua.slug);
    }
  }

  // ── DA'IF / MAWDU' must not be daily_dua_eligible ────────────────────────
  if (
    (dua.authenticity_grade === "DA'IF" || dua.authenticity_grade === "MAWDU'") &&
    dua.daily_dua_eligible
  ) {
    error(ref, `daily_dua_eligible: true on a ${dua.authenticity_grade} dua — only SAHIH/HASAN allowed in daily rotation`);
  }

  // ── graded_by should be present ───────────────────────────────────────────
  if (!dua.graded_by) {
    warn(ref, `Missing graded_by — cite the scholar who authenticated this dua (e.g. "Al-Albani", "Ibn Hajar")`);
  }

  // ── Minimum emotion_tags ──────────────────────────────────────────────────
  if (dua.emotion_tags.length < 2) {
    warn(ref, `Only ${dua.emotion_tags.length} emotion_tag(s) — add at least 2 for discoverability`);
  }

  // ── Minimum situation_tags ────────────────────────────────────────────────
  if (dua.situation_tags.length < 3) {
    warn(ref, `Only ${dua.situation_tags.length} situation_tag(s) — add at least 3 for discoverability`);
  }

  // ── Arabic text must not be empty ─────────────────────────────────────────
  if (!dua.arabic_text.trim()) {
    error(ref, `Empty arabic_text`);
  }

  // ── Transliteration must not be empty ────────────────────────────────────
  if (!dua.transliteration.trim()) {
    error(ref, `Empty transliteration`);
  }
}

// ─── HADITH VALIDATION ────────────────────────────────────────────────────────

const hadithSlugs = new Map<string, number>();
const hadithIds = new Map<number, string>();
const hadithTitles = new Map<string, string>();
const hadithArabic = new Map<string, string>();
const hadithTranslations = new Map<string, string>();
const hadithSources = new Map<string, string>();

console.log(`Validating ${HADITHS.length} hadiths…\n`);

for (const hadith of HADITHS) {
  const ref = `Hadith [${hadith.id}] "${hadith.slug}"`;

  // ── Duplicate ID ──────────────────────────────────────────────────────────
  if (hadithIds.has(hadith.id)) {
    error(ref, `Duplicate ID ${hadith.id} — already used by "${hadithIds.get(hadith.id)}"`);
  } else {
    hadithIds.set(hadith.id, hadith.slug);
  }

  // ── Duplicate slug ────────────────────────────────────────────────────────
  if (hadithSlugs.has(hadith.slug)) {
    error(ref, `Duplicate slug "${hadith.slug}" — already used at ID ${hadithSlugs.get(hadith.slug)}`);
  } else {
    hadithSlugs.set(hadith.slug, hadith.id);
  }

  // ── Duplicate title ───────────────────────────────────────────────────────
  const normTitle = normalizeText(hadith.title);
  if (hadithTitles.has(normTitle)) {
    error(ref, `Duplicate title "${hadith.title}" — already used by "${hadithTitles.get(normTitle)}"`);
  } else {
    hadithTitles.set(normTitle, hadith.slug);
  }

  // ── Duplicate arabic text ─────────────────────────────────────────────────
  const normArabic = normalizeArabic(hadith.arabic);
  if (hadithArabic.has(normArabic)) {
    error(ref, `Duplicate Arabic text — already used by "${hadithArabic.get(normArabic)}"`);
  } else {
    hadithArabic.set(normArabic, hadith.slug);
  }

  // ── Duplicate translation ─────────────────────────────────────────────────
  const normTranslation = normalizeText(hadith.translation);
  if (hadithTranslations.has(normTranslation)) {
    error(ref, `Duplicate translation — already used by "${hadithTranslations.get(normTranslation)}"`);
  } else {
    hadithTranslations.set(normTranslation, hadith.slug);
  }

  // ── Duplicate source reference ────────────────────────────────────────────
  const sourceKey = `${hadith.source_book.toLowerCase()}:${hadith.hadith_number}`;
  if (hadithSources.has(sourceKey)) {
    error(ref, `Duplicate source reference "${hadith.source_book} #${hadith.hadith_number}" — already used by "${hadithSources.get(sourceKey)}"`);
  } else {
    hadithSources.set(sourceKey, hadith.slug);
  }

  // ── Grade must be Sahih or Hasan ──────────────────────────────────────────
  if (hadith.grade !== "Sahih" && hadith.grade !== "Hasan") {
    error(ref, `Invalid grade "${hadith.grade}" — only "Sahih" or "Hasan" permitted`);
  }

  // ── Narrator must be present ──────────────────────────────────────────────
  if (!hadith.narrator.trim()) {
    error(ref, `Missing narrator`);
  }

  // ── daily_practice must be a non-empty action sentence ────────────────────
  if (!hadith.daily_practice.trim()) {
    warn(ref, `Empty daily_practice — add a short actionable sentence for the daily post`);
  }

  // ── Arabic text must not be empty ─────────────────────────────────────────
  if (!hadith.arabic.trim()) {
    error(ref, `Empty arabic text`);
  }

  // ── Transliteration must not be empty ────────────────────────────────────
  if (!hadith.transliteration.trim()) {
    error(ref, `Empty transliteration`);
  }

  // ── topic_tags minimum ────────────────────────────────────────────────────
  if (hadith.topic_tags.length < 2) {
    warn(ref, `Only ${hadith.topic_tags.length} topic_tag(s) — add at least 2 for discoverability`);
  }
}

// ─── SUMMARY ─────────────────────────────────────────────────────────────────

const errors = issues.filter((i) => i.type === "ERROR");
const warnings = issues.filter((i) => i.type === "WARN");

if (errors.length > 0) {
  console.log("─── ERRORS (must fix before merging) ───────────────────────\n");
  for (const e of errors) {
    console.log(`  ❌  ${e.item}`);
    console.log(`      ${e.message}\n`);
  }
}

if (warnings.length > 0) {
  console.log("─── WARNINGS (strongly recommended to fix) ─────────────────\n");
  for (const w of warnings) {
    console.log(`  ⚠️   ${w.item}`);
    console.log(`      ${w.message}\n`);
  }
}

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅  All content passed validation — no duplicates, no violations.\n");
} else {
  console.log(
    `\nResult: ${errors.length} error(s), ${warnings.length} warning(s) across ${DUAS.length + HADITHS.length} entries.\n`
  );
  if (errors.length > 0) process.exit(1);
}
