import type { getDailyHadith } from "@/data/hadiths";
import type { getDailyDua } from "@/data/duas";

type Hadith = ReturnType<typeof getDailyHadith>;
type Dua = ReturnType<typeof getDailyDua>;

function formatDuaSource(dua: Dua): string {
  if (dua.authenticity_grade === "QURAN") {
    return dua.hadith_number ? `Quran ${dua.hadith_number}` : "Quran";
  }
  const grade = dua.authenticity_grade === "SAHIH" ? "Sahih" : "Hasan";
  return dua.hadith_number
    ? `${dua.source_book} • #${dua.hadith_number} • ${grade}`
    : `${dua.source_book} • ${grade}`;
}

export function buildHadithCaption(hadith: Hadith): string {
  return [
    "📚 Hadith of the Day",
    "",
    `"${hadith.translation}"`,
    "",
    `— ${hadith.narrator}`,
    `📖 ${hadith.source_book} • #${hadith.hadith_number} • ${hadith.grade}`,
    "",
    "🌐 Read more duas & hadith at duavault.com",
    "",
    "#hadith #islamicquotes #prophetmuhammad #sunnah #islam #muslimlifestyle #islamicreminder #duavault",
  ].join("\n");
}

export function buildDuaCaption(dua: Dua): string {
  const translit = dua.transliteration.length > 200
    ? dua.transliteration.slice(0, 200).trimEnd() + "…"
    : dua.transliteration;
  const translation = dua.translation.length > 300
    ? dua.translation.slice(0, 300).trimEnd() + "…"
    : dua.translation;

  return [
    `🌙 Dua of the Day: ${dua.title}`,
    "",
    translit,
    "",
    `"${translation}"`,
    "",
    `📖 ${formatDuaSource(dua)}`,
    "",
    "🌐 Learn more duas at duavault.com",
    "",
    "#dua #islamicdua #quran #islam #muslimlifestyle #dailydua #islamicreminder #duavault",
  ].join("\n");
}
