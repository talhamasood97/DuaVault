import { COLLECTIONS } from "@/lib/collections";
import { CATEGORIES, SITE_URL } from "@/lib/utils";

// llms.txt — a plain-text map of the site for AI assistants and AI search
// (https://llmstxt.org). Generated from the same data as the pages.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# DuaVault",
    "",
    "> Authentic Islamic duas (supplications) and hadith with Arabic text, transliteration, English meaning and an exact source for every entry — a Quran verse or a hadith number with its grading.",
    "",
    "Sources: duas come from the Quran and the major hadith collections (Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami' at-Tirmidhi, Sunan an-Nasa'i, Sunan Ibn Majah). Only narrations graded Sahih or Hasan are included; each reference links to Sunnah.com or Quran.com.",
    "",
    "## Dua collections",
    ...COLLECTIONS.map((c) => `- [${c.title}](${SITE_URL}/duas-for/${c.slug}): ${c.description}`),
    "",
    "## Browse",
    ...CATEGORIES.map((c) => `- [${c.title} Duas](${SITE_URL}/category/${c.slug}): ${c.description}`),
    `- [Hadith Archive](${SITE_URL}/hadith): authentic hadith by theme`,
    `- [Dua of the Day](${SITE_URL}/daily-dua)`,
    `- [Hadith of the Day](${SITE_URL}/daily-hadith)`,
    "",
    "## Optional",
    `- [Sitemap](${SITE_URL}/sitemap.xml): every dua and hadith page`,
    `- [Our Sources](${SITE_URL}/sources)`,
    `- [About](${SITE_URL}/about)`,
  ];
  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
