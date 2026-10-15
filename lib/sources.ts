/**
 * Links a dua/hadith reference to the original on Sunnah.com or Quran.com so
 * readers can check it themselves. Returns null for collections those sites
 * don't host (Musnad Ahmad, al-Hakim, Ibn Hibban, …) — those stay plain text.
 */

const SUNNAH_COLLECTIONS: Record<string, string> = {
  "Sahih al-Bukhari": "bukhari",
  "Sahih Muslim": "muslim",
  "Sunan Abu Dawud": "abudawud",
  "Sunan al-Tirmidhi": "tirmidhi",
  "Sunan an-Nasa'i": "nasai",
  "Sunan Ibn Majah": "ibnmajah",
  "Al-Adab al-Mufrad": "adab",
};

// Sunnah.com splits some Muslim hadiths into lettered parts (2759a, 2759b…)
// and the bare number has no page. Checked against Sunnah.com, Oct 2026.
const SUNNAH_SUFFIX: Record<string, string> = {
  "muslim:233": "a",
  "muslim:234": "a",
  "muslim:251": "a",
  "muslim:963": "a",
  "muslim:2759": "a",
};

export function sourceUrl(sourceBook: string, reference?: string | null): string | null {
  if (!reference) return null;

  if (sourceBook === "Quran") {
    // "20:25-28", "17:24", "71:28 & 17:24" → link the first passage
    const m = reference.match(/(\d+):(\d+)(?:-(\d+))?/);
    if (!m) return null;
    return `https://quran.com/${m[1]}/${m[2]}${m[3] ? `-${m[3]}` : ""}`;
  }

  const collection = SUNNAH_COLLECTIONS[sourceBook];
  if (!collection || !/^\d+$/.test(reference)) return null;
  const key = `${collection}:${reference}`;
  return `https://sunnah.com/${key}${SUNNAH_SUFFIX[key] ?? ""}`;
}
