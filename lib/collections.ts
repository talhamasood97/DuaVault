/**
 * Topic collections — one page that gathers every authentic dua for a common
 * search ("dua for sick person", "dua after waking up"). Built only from duas
 * already in data/duas.ts, so no new religious content is introduced here.
 * Chosen from Search Console queries that showed impressions (Oct 2026).
 */

export interface DuaCollection {
  slug: string;
  /** H1 and base of the <title> */
  title: string;
  /** Short line used in links and the footer */
  label: string;
  description: string;
  intro: string;
  /** Dua slugs, in reading order */
  duas: string[];
}

export const COLLECTIONS: DuaCollection[] = [
  {
    slug: "the-sick",
    title: "Duas for the Sick",
    label: "Duas for the Sick",
    description:
      "Authentic duas for a sick person and for visiting the sick — Arabic, transliteration, meaning and hadith reference for each.",
    intro:
      "These are the duas the Prophet (SAW) taught for illness: words to recite for someone who is unwell, what to say when visiting them, and what to say for your own pain. Each one is shown with its Arabic text, transliteration, meaning and the hadith it comes from.",
    duas: [
      "dua-when-ill",
      "dua-for-sick-person-seven-times",
      "dua-visiting-sick",
      "dua-when-visiting-the-sick-allahummashfi-abdak",
      "dua-pain-relief-hand-placement",
    ],
  },
  {
    slug: "waking-up",
    title: "Duas for Waking Up",
    label: "Duas for Waking Up",
    description:
      "The authentic dua after waking up in the morning, upon waking in the night, and after a bad dream — Arabic, transliteration and meaning.",
    intro:
      "The Sunnah begins the day with remembrance of Allah. Below are the duas for waking up in the morning, for waking up during the night, and for waking from a bad dream, each with its Arabic text, transliteration, meaning and source.",
    duas: ["dua-upon-waking", "dua-waking-at-night", "dua-upon-bad-dream-nightmare"],
  },
  {
    slug: "rain",
    title: "Duas for Rain",
    label: "Duas for Rain",
    description:
      "Authentic duas when it rains, after rainfall, for seeking rain (Istisqa) and on hearing thunder — Arabic, transliteration and meaning.",
    intro:
      "Rain is a mercy from Allah, and there are authentic words for each moment of it: when it falls, after it stops, when asking Allah for rain (Istisqa), and on hearing thunder. Each dua below includes its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-when-it-rains",
      "dua-after-rainfall-gratitude",
      "dua-seeking-rain-istisqa",
      "dua-for-rain-istisqa",
      "dua-when-it-thunders",
    ],
  },
  {
    slug: "protection-from-hellfire",
    title: "Duas for Protection from Hellfire",
    label: "Protection from Hellfire",
    description:
      "Authentic duas asking Allah for protection from the Fire (Jahannam), from the Quran and Sunnah — Arabic, transliteration and meaning.",
    intro:
      "The Quran and Sunnah contain many duas asking Allah to save us from the punishment of the Fire. These are the authentic ones, each with its Arabic text, transliteration, meaning and the verse or hadith it comes from.",
    duas: [
      "dua-rabbana-atina",
      "dua-rabbanasrif-anna-adhaba-jahannam",
      "dua-rabbana-innana-amanna-faghfir-lana",
      "dua-rabbana-ma-khalaqta-hadha-batilan",
      "dua-protection-grave-fire-dajjal",
      "dua-rabba-jibrail-refuge-from-heat-of-fire",
    ],
  },
  {
    slug: "the-mosque",
    title: "Duas for Entering and Leaving the Mosque",
    label: "Mosque Duas",
    description:
      "Authentic duas for entering the mosque and leaving the mosque, with Arabic, transliteration, meaning and hadith reference.",
    intro:
      "The Prophet (SAW) taught specific words to say when entering and leaving the masjid. Each dua below includes its Arabic text, transliteration, meaning and the hadith it comes from.",
    duas: ["dua-entering-mosque", "dua-entering-mosque-audhu-billahil-azim", "dua-leaving-mosque"],
  },
];

export function getCollection(slug: string): DuaCollection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getCollectionsForDua(duaSlug: string): DuaCollection[] {
  return COLLECTIONS.filter((c) => c.duas.includes(duaSlug));
}
