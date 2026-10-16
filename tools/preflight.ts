/**
 * Pre-publish checks for things that have broken silently before.
 * Run from the repo root:  npx tsx tools/preflight.ts
 * Exits 1 if anything fails. See CLAUDE.md → "Release checklist".
 */
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { execSync } from "child_process";
import { join } from "path";
import { DUAS } from "@/data/duas";
import { HADITHS } from "@/data/hadiths";
import { COLLECTIONS } from "@/lib/collections";
import { SEO_TITLES } from "@/lib/seo-titles";

const problems: string[] = [];
const warn: string[] = [];
const fail = (m: string) => problems.push(m);

// 1. Every env read must be trimmed — Vercel values carry a trailing newline,
//    which broke Google Analytics for months.
function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === "dedupe-duas" ? [] : walk(p);
    return /\.(ts|tsx)$/.test(f) ? [p] : [];
  });
}
for (const file of ["app", "lib", "components"].flatMap(walk)) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (/^\s*(\/\/|\*)/.test(line)) return;
    for (const m of line.matchAll(/process\.env\.([A-Z0-9_]+)(\??\.trim\(\)|!\.trim\(\))?/g)) {
      if (!m[2] && !["NODE_ENV", "NEXT_RUNTIME"].includes(m[1]) && !/!!process\.env|\?\?\s*""/.test(line))
        fail(`${file}:${i + 1} reads process.env.${m[1]} without .trim()`);
    }
  });
}

// 2. Collections only point at real duas.
const slugs = new Set(DUAS.map((d) => d.slug));
for (const c of COLLECTIONS) {
  for (const s of c.duas) if (!slugs.has(s)) fail(`collection "${c.slug}" lists missing dua "${s}"`);
  if (c.duas.length < 3) warn.push(`collection "${c.slug}" has only ${c.duas.length} duas`);
}

// 3. Search-title overrides point at real duas and fit Google's ~60 chars.
for (const [slug, t] of Object.entries(SEO_TITLES)) {
  if (!slugs.has(slug)) fail(`SEO_TITLES has unknown slug "${slug}"`);
  if (t.length > 49) fail(`SEO_TITLES["${slug}"] is ${t.length} chars (max 49 before " | DuaVault")`);
}

// 4. Redirects for removed pages: source gone, destination alive.
const nextConfig = readFileSync("next.config.js", "utf8");
const hadithSlugs = new Set(HADITHS.map((h) => h.slug));
const collectionSlugs = new Set(COLLECTIONS.map((c) => c.slug));
for (const [, src, dest] of nextConfig.matchAll(/\["(\/[^"]+)",\s*"(\/[^"]+)"\]/g)) {
  const live = (p: string) => {
    const [, kind, s] = p.split("/");
    if (kind === "duas") return slugs.has(s);
    if (kind === "hadith") return !s || hadithSlugs.has(s);
    if (kind === "duas-for") return !s || collectionSlugs.has(s);
    return true; // category / emotion pages
  };
  if (live(src) && src.split("/").length > 2) fail(`redirect source ${src} is still a live page`);
  if (!live(dest)) fail(`redirect ${src} → ${dest} points at a page that no longer exists`);
}

// 5. Files search engines rely on.
for (const f of ["public/google80842bb7c72773cb.html", "public/7407844c6631af6428ce3b88a62107ae.txt"]) {
  if (!existsSync(f)) fail(`${f} is missing (Search Console / IndexNow verification)`);
}

// 6. Sitemap date must not be older than the last content change.
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const contentUpdated = (sitemap.match(/CONTENT_UPDATED = new Date\("([\d-]+)"\)/) || [])[1];
try {
  const lastData = execSync("git log -1 --format=%cs -- data/duas.ts data/hadiths.ts lib/collections.ts").toString().trim();
  const dirty = execSync("git status --porcelain -- data/duas.ts data/hadiths.ts lib/collections.ts").toString().trim();
  const today = new Date().toISOString().slice(0, 10);
  const newest = dirty ? today : lastData;
  if (contentUpdated && newest && contentUpdated < newest)
    warn.push(`CONTENT_UPDATED (${contentUpdated}) is older than the last content change (${newest}) — bump it in app/sitemap.ts`);
} catch {
  /* not a git checkout */
}

// 7. Every dua belongs somewhere findable.
const inCollection = new Set(COLLECTIONS.flatMap((c) => c.duas));
const orphans = DUAS.filter((d) => !inCollection.has(d.slug)).length;
console.log(`Duas ${DUAS.length} · hadiths ${HADITHS.length} · collections ${COLLECTIONS.length} (${DUAS.length - orphans} duas in a collection)`);

warn.forEach((w) => console.log(`⚠️  ${w}`));
if (problems.length) {
  problems.forEach((p) => console.log(`❌ ${p}`));
  console.log(`\n${problems.length} problem(s). Fix before publishing.`);
  process.exit(1);
}
console.log("✅ Preflight passed.");
