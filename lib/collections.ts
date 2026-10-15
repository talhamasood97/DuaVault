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
    slug: "before-sleeping",
    title: "Duas Before Sleeping",
    label: "Duas Before Sleeping",
    description:
      "Authentic duas and verses to recite before sleeping, from the Quran and Sunnah — Arabic, transliteration, meaning and source for each.",
    intro:
      "These are the duas and verses the Sunnah teaches for bedtime — from the short dua said on lying down to Ayatul Kursi and the last three surahs. Each one is shown with its Arabic text, transliteration, meaning and the hadith or verse it comes from.",
    duas: [
      "dua-before-sleeping",
      "dua-bismika-rabbi-wadatu-janbi",
      "dua-allahumma-khalaqta-nafsi-before-sleep",
      "dua-for-sleep-protection-night",
      "dua-alhamdulillahil-ladhi-atamana-before-sleep",
      "dua-before-sleep-relief-from-debt-and-poverty",
      "dua-allahumma-fatiras-samawati-morning-evening",
      "ayatul-kursi",
      "three-quls-protection",
    ],
  },
  {
    slug: "morning-and-evening",
    title: "Morning and Evening Adhkar",
    label: "Morning & Evening Adhkar",
    description:
      "Authentic morning and evening adhkar from the Quran and Sunnah — Arabic, transliteration, meaning and hadith reference for each.",
    intro:
      "The morning and evening adhkar are remembrances the Prophet (SAW) taught to be said at the start and end of each day. Below are the authentic ones, each with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-morning-protection",
      "dua-evening-protection",
      "dua-morning-asbahna",
      "sayyidul-istighfar",
      "dua-for-protection-morning",
      "dua-allahumma-fatiras-samawati-morning-evening",
      "dua-raditu-billahi-rabban",
      "dua-for-good-in-this-day-and-after",
      "dua-morning-fitra-of-islam",
      "dua-subhanallahi-wa-bihamdihi",
      "dhikr-subhanallahi-wa-bihamdihi-adada-khalqihi",
      "dhikr-fasubhanallahi-hina-tumsuna",
      "three-quls-protection",
      "ayatul-kursi",
    ],
  },
  {
    slug: "anxiety-and-stress",
    title: "Duas for Anxiety and Stress",
    label: "Anxiety & Stress",
    description:
      "Authentic duas for anxiety, stress, worry and distress from the Quran and Sunnah — Arabic, transliteration, meaning and source.",
    intro:
      "When worry, grief or distress weighs on the heart, the Quran and Sunnah give us words to turn to Allah with. These are the authentic duas for anxiety and stress, each with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-for-anxiety-and-grief",
      "dua-for-depression-and-sadness",
      "dua-of-prophet-yunus",
      "dua-for-difficulty-hardship",
      "dua-ya-hayyu-ya-qayyum-birahmatika-astaghith",
      "dua-allahu-allahu-rabbi-in-distress",
      "dua-when-feeling-overwhelmed-distressed",
      "dua-hasbi-allah",
      "dua-wa-ufawwidu-amri-ilallah",
      "dua-lan-yusibana-illa-ma-kataballahu-lana",
      "dua-innama-ashku-bathi-wa-huzni-ilallah",
    ],
  },
  {
    slug: "rabbana-from-the-quran",
    title: "Rabbana Duas from the Quran",
    label: "Rabbana Duas",
    description:
      "Every \"Rabbana\" (Our Lord) dua from the Quran on DuaVault, in order of surah — Arabic, transliteration, meaning and verse reference.",
    intro:
      "\"Rabbana\" means \"Our Lord\". Many of the most loved duas in the Quran begin with it — the supplications of the prophets, the believers and the angels. Here they are in the order they appear in the Quran, each with its Arabic text, transliteration, meaning and verse reference.",
    duas: [
      "dua-for-acceptance-of-deeds",
      "dua-of-ibrahim-and-ismail-for-ummah",
      "dua-rabbana-atina",
      "dua-for-patience",
      "dua-rabbana-la-tu-akhidhna",
      "dua-rabbana-la-tuzigh",
      "dua-rabbana-innana-amanna-faghfir-lana",
      "dua-rabbana-amanna-bima-anzalta",
      "dua-rabbanaghfir-lana-dhunubana-wa-israfana",
      "dua-rabbana-ma-khalaqta-hadha-batilan",
      "dua-rabbana-innana-samina-munadiyan",
      "dua-rabbana-wa-atina-ma-waadtana",
      "dua-rabbana-akhrijna-for-the-oppressed",
      "dua-of-adam-and-hawa-seeking-forgiveness",
      "dua-rabbana-la-tajalna-maal-qawmidh-dhalimin",
      "dua-rabbanaftah-baynana-bil-haqq",
      "dua-rabbana-afrigh-alayna-sabran-wa-tawaffana-muslimin",
      "dua-rabbana-la-tajalna-fitnatan-lil-qawmidh-dhalimin",
      "dua-of-ibrahim-for-his-family-at-the-kabah",
      "dua-rabbana-innaka-talamu-ma-nukhfi",
      "dua-rabbana-ghfir-li-walidayya",
      "dua-of-ashab-al-kahf-for-mercy-and-guidance",
      "dua-rabbanasrif-anna-adhaba-jahannam",
      "dua-for-righteous-spouse",
      "dua-rabbana-wasi-rahma",
      "dua-of-angels-for-believers-and-their-families",
      "dua-for-believers-who-came-before-us",
      "dua-rabbana-alayka-tawakkalna",
      "dua-rabbana-atmim-lana-nurana",
    ],
  },
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
    slug: "parents",
    title: "Duas for Parents",
    label: "Duas for Parents",
    description:
      "Authentic duas for your parents from the Quran — for their mercy, forgiveness and for parents who have passed away. Arabic, transliteration and meaning.",
    intro:
      "The Quran teaches us to pray for our parents, in their lifetime and after they have passed away. These are the duas for parents from the Quran, each with its Arabic text, transliteration, meaning and verse reference.",
    duas: [
      "dua-for-parents",
      "dua-rabbana-ghfir-li-walidayya",
      "dua-of-nuh-for-believers",
      "dua-for-deceased-parents",
      "dua-of-sulayman-for-gratitude",
    ],
  },
  {
    slug: "exams-and-studying",
    title: "Duas for Exams and Studying",
    label: "Exams & Studying",
    description:
      "Authentic duas for exams, studying, knowledge and success from the Quran and Sunnah — Arabic, transliteration, meaning and source.",
    intro:
      "Before an exam, a presentation or a long study session, these are the authentic duas for knowledge, clear speech and success. Each one is shown with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-musa-ease-and-speech",
      "dua-for-knowledge",
      "dua-for-students-before-studying",
      "dua-subhanaka-la-ilma-lana",
      "dua-wa-ma-tawfiqi-illa-billah",
      "dua-for-khushu-and-beneficial-knowledge",
      "dua-for-rizq-and-good-deeds",
    ],
  },
  {
    slug: "debt-and-rizq",
    title: "Duas for Debt and Rizq",
    label: "Debt & Rizq",
    description:
      "Authentic duas for paying off debt, relief from poverty and halal rizq (provision) from the Quran and Sunnah — Arabic, transliteration and meaning.",
    intro:
      "Debt and financial worry are heavy burdens, and the Prophet (SAW) taught duas for relief from them and for lawful provision. These are the authentic ones, each with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-when-in-debt",
      "dua-before-sleep-relief-from-debt-and-poverty",
      "dua-refuge-from-overwhelming-debt-and-enemies",
      "dua-for-anxiety-and-grief",
      "dua-refuge-from-poverty-and-humiliation",
      "dua-when-in-need-of-allah",
      "dua-hasbunallahu-sayutinallahu-min-fadlih",
      "dua-for-rizq-and-good-deeds",
    ],
  },
  {
    slug: "the-deceased",
    title: "Duas for the Deceased",
    label: "Duas for the Deceased",
    description:
      "Authentic duas for someone who has passed away — at the time of death, in the Janazah prayer, at burial and when visiting graves — with Arabic and meaning.",
    intro:
      "When someone passes away, the Sunnah teaches words for each moment: on hearing the news, when closing their eyes, in the Janazah prayer, at burial and when visiting the graves. Each dua below includes its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-inna-lillahi-upon-calamity",
      "dua-closing-eyes-of-deceased",
      "dua-for-deceased",
      "dua-janazah-prayer",
      "dua-placing-deceased-in-grave",
      "dua-visiting-graves",
      "dua-for-deceased-parents",
      "condolence-inna-lillahi-ma-akhadha",
    ],
  },
  {
    slug: "children-and-pregnancy",
    title: "Duas for Children and Pregnancy",
    label: "Children & Pregnancy",
    description:
      "Authentic duas for righteous children, for having a child, during pregnancy and for a newborn, from the Quran and Sunnah.",
    intro:
      "These are the duas of the prophets and the righteous for children — asking Allah for offspring, praying during pregnancy, protecting a newborn and thanking Allah for a child. Each is shown with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-for-righteous-children",
      "dua-rabbi-hab-li-min-ladunka-dhurriyyatan-tayyibah",
      "dua-of-zakariyya-for-offspring",
      "dua-for-righteous-spouse",
      "dua-of-imrans-wife-during-pregnancy",
      "dua-for-protecting-a-newborn-from-shaytan",
      "dua-for-newborn-protection",
      "dua-alhamdulillahil-ladhi-wahaba-li",
      "dua-of-ibrahim-for-his-family-at-the-kabah",
    ],
  },
  {
    slug: "marriage",
    title: "Duas for Marriage",
    label: "Duas for Marriage",
    description:
      "Authentic duas for marriage — for a righteous spouse, Istikhara, the nikah blessing and the wedding night — with Arabic, transliteration and meaning.",
    intro:
      "From asking Allah for a righteous spouse to the blessing said at a nikah, these are the authentic duas connected to marriage. Each one is shown with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-for-righteous-spouse",
      "dua-istikhara",
      "dua-blessing-at-nikah",
      "dua-for-newly-married-couple",
      "dua-before-marital-intimacy",
    ],
  },
  {
    slug: "salah",
    title: "Duas in Salah (Prayer)",
    label: "Duas in Salah",
    description:
      "The authentic duas said in each part of salah — opening, ruku, sujood, between the two sajdahs, tashahud and after the prayer — with Arabic and meaning.",
    intro:
      "These are the authentic words said in each position of the prayer, in the order they come: the opening dua, ruku, rising from ruku, sujood, between the two sajdahs, the tashahud and salawat, the duas before salam, and the remembrance after the prayer. Each includes its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-istiftah-opening-prayer",
      "dua-allahumma-baid-bayni-wa-bayna-khatayaya",
      "dua-in-ruku",
      "dua-rabbana-wa-lakal-hamd-hamdan-kathiran",
      "dua-in-sujood",
      "dua-between-two-sajdahs",
      "dua-attahiyyatu-tashahud",
      "dua-salawat-ibrahim",
      "dua-protection-grave-fire-dajjal",
      "dua-al-masura-abu-bakr",
      "dua-after-salah-tasbih-and-salam",
      "dua-after-prayer-dhikr",
    ],
  },
  {
    slug: "ramadan",
    title: "Ramadan Duas",
    label: "Ramadan Duas",
    description:
      "Authentic Ramadan duas — on sighting the moon, breaking the fast, for the iftar host and for Laylatul Qadr — with Arabic, transliteration and meaning.",
    intro:
      "These are the authentic duas for Ramadan: on sighting the new moon, when breaking the fast, for the one who gives you iftar, when provoked while fasting, and for Laylatul Qadr. Each is shown with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-seeing-crescent-moon",
      "dua-breaking-fast",
      "dua-for-iftar-host",
      "dua-when-fasting-provoked",
      "dua-laylatul-qadr",
      "dua-for-acceptance-of-deeds",
    ],
  },
  {
    slug: "the-evil-eye",
    title: "Duas for Protection from the Evil Eye",
    label: "Evil Eye",
    description:
      "Authentic duas and verses for protection from the evil eye (nazar) and harm, from the Quran and Sunnah — Arabic, transliteration and meaning.",
    intro:
      "The Prophet (SAW) taught words of protection from the evil eye and every kind of harm, along with verses of the Quran to recite. These are the authentic ones, each with its Arabic text, transliteration, meaning and source.",
    duas: [
      "dua-against-evil-eye",
      "dua-for-protection-morning",
      "dua-masha-allah-la-quwwata-illa-billah",
      "dua-ruqyah-self",
      "three-quls-protection",
      "ayatul-kursi",
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
    slug: "the-mosque",
    title: "Duas for Entering and Leaving the Mosque",
    label: "Mosque Duas",
    description:
      "Authentic duas for entering the mosque and leaving the mosque, with Arabic, transliteration, meaning and hadith reference.",
    intro:
      "The Prophet (SAW) taught specific words to say when entering and leaving the masjid. Each dua below includes its Arabic text, transliteration, meaning and the hadith it comes from.",
    duas: ["dua-entering-mosque", "dua-entering-mosque-audhu-billahil-azim", "dua-leaving-mosque"],
  },
  {
    slug: "hajj-and-umrah",
    title: "Duas for Hajj and Umrah",
    label: "Hajj & Umrah",
    description:
      "Authentic duas for Hajj and Umrah — the Talbiyah, at Safa, on the Day of Arafah and on returning — with Arabic, transliteration and meaning.",
    intro:
      "These are the authentic words said during Hajj and Umrah: the travel dua for the journey, the Talbiyah, the dhikr at Mount Safa, the best dua on the Day of Arafah, and the dua on returning home. Each includes its Arabic text, transliteration, meaning and source.",
    duas: [
      "talbiyah-hajj-umrah",
      "dua-at-mount-safa-hajj-umrah",
      "dua-on-day-of-arafah",
      "dua-for-travel",
      "dua-returning-from-travel",
    ],
  },
];

/** Shown in the site footer (all collections are listed on /duas-for). */
export const FOOTER_COLLECTIONS = [
  "before-sleeping",
  "morning-and-evening",
  "anxiety-and-stress",
  "rabbana-from-the-quran",
  "the-sick",
  "parents",
];

export function getCollection(slug: string): DuaCollection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getCollectionsForDua(duaSlug: string): DuaCollection[] {
  return COLLECTIONS.filter((c) => c.duas.includes(duaSlug));
}
