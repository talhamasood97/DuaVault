import type { Dua } from "@/types";
import { dayOfYearIST } from "@/lib/utils";

export const DUAS: Dua[] = [
  // ─── DAILY LIFE ──────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "dua-before-sleeping",
    title: "Dua Before Sleeping",
    arabic_text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation:
      "In Your name, O Allah, I die and I live.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6324",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful", "lonely"],
    situation_tags: ["before-sleep", "night", "bedtime", "sleep", "sleeping"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 2,
    slug: "dua-upon-waking",
    title: "Dua Upon Waking Up",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration:
      "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translation:
      "All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6325",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful", "lonely"],
    situation_tags: ["morning", "waking-up"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 3,
    slug: "dua-before-eating",
    title: "Dua Before Eating",
    arabic_text: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "5376",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["eating", "food", "meal", "water", "drink"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 4,
    slug: "dua-after-eating",
    title: "Dua After Eating",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration:
      "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah",
    translation:
      "All praise is for Allah Who fed me this and provided it for me without any power or might on my part.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "4023",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["after-eating", "food", "gratitude", "water", "drink", "drinking", "eating", "meal", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 6,
    slug: "dua-leaving-home",
    title: "Dua When Leaving Home",
    arabic_text:
      "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration:
      "Bismillahi, tawakkaltu 'ala Allah, wa la hawla wa la quwwata illa billah",
    translation:
      "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5095",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["hopeful"],
    situation_tags: ["leaving-home", "door", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 7,
    slug: "dua-entering-bathroom",
    title: "Dua Entering the Bathroom",
    arabic_text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith",
    translation:
      "O Allah, I seek refuge in You from the male and female evil ones (devils).",
    source_book: "Sahih al-Bukhari",
    hadith_number: "142",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["afraid"],
    situation_tags: ["bathroom", "toilet", "entering", "protection", "daily", "etiquette"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 8,
    slug: "dua-after-wudu",
    title: "Dua After Wudu (Ablution)",
    arabic_text:
      "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "Ashhadu an la ilaha illallahu wahdahu la sharika lah, wa ashhadu anna Muhammadan 'abduhu wa rasuluh",
    translation:
      "I bear witness that there is no deity worthy of worship except Allah, alone, without partner, and I bear witness that Muhammad is His slave and messenger.",
    source_book: "Sahih Muslim",
    hadith_number: "234",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["wudu", "ablution", "purification", "wudhu", "water"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 9,
    slug: "dua-entering-mosque",
    title: "Dua When Entering the Mosque",
    arabic_text:
      "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma iftah li abwaba rahmatik",
    translation: "O Allah, open the gates of Your mercy for me.",
    source_book: "Sahih Muslim",
    hadith_number: "713",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["mosque", "masjid", "entering", "prayer"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 10,
    slug: "dua-leaving-mosque",
    title: "Dua When Leaving the Mosque",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "O Allah, I ask You of Your bounty.",
    source_book: "Sahih Muslim",
    hadith_number: "713",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["mosque", "masjid", "leaving", "prayer"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── MORNING & EVENING ADHKAR ────────────────────────────────────────────────
  {
    id: 11,
    slug: "dua-morning-protection",
    title: "Morning Dua for Protection",
    arabic_text:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilayka n-nushur",
    translation:
      "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3391",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["grateful", "hopeful", "lonely"],
    situation_tags: ["morning", "adhkar", "protection"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 12,
    slug: "dua-evening-protection",
    title: "Evening Dua for Protection",
    arabic_text:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykal-masir",
    translation:
      "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final return.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3391",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["grateful", "lonely"],
    situation_tags: ["evening", "adhkar"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 13,
    slug: "sayyidul-istighfar",
    title: "Sayyidul Istighfar – Master Dua of Forgiveness",
    arabic_text:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration:
      "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa anta",
    translation:
      "O Allah, You are my Lord. There is no god but You. You created me and I am Your slave. I am keeping my covenant and my promise to You as much as I am able. I seek refuge in You from the evil that I have done. I acknowledge Your favor upon me and I acknowledge my sin. Forgive me, for there is none who forgives sins except You.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6306",
    authenticity_grade: "SAHIH",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful"],
    situation_tags: ["forgiveness", "morning", "evening", "sins", "repentance"],
    featured: true,
    daily_dua_eligible: true,
  },

  // ─── PROTECTION ──────────────────────────────────────────────────────────────
  {
    id: 14,
    slug: "dua-for-anxiety-and-grief",
    title: "Dua for Anxiety and Grief",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-hammi wal-hazani, wal-'ajzi wal-kasali, wal-bukhli wal-jubni, wa dhala'id-dayni wa ghalabatir-rijal",
    translation:
      "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6369",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["stressed", "sad", "afraid", "lonely"],
    situation_tags: ["anxiety", "stress", "grief", "worry", "depression", "debt", "poverty", "hardship", "financial", "morning"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 15,
    slug: "dua-for-protection-morning",
    title: "Dua for Complete Protection (3x Morning)",
    arabic_text:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
    translation:
      "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5088",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["protection", "morning", "evening", "ruqyah", "evil-eye", "hasad", "envy", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 16,
    slug: "dua-against-evil-eye",
    title: "Dua Against the Evil Eye (Al-Ayn)",
    arabic_text:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'udhu bi kalimatillahit-tammati min sharri ma khalaq",
    translation:
      "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    source_book: "Sahih Muslim",
    hadith_number: "2708",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["evil-eye", "protection", "ruqyah", "harm", "magic", "sihr", "jinn", "evening", "evil", "creation", "refuge", "safety", "morning", "night", "travel"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 17,
    slug: "dua-when-afraid",
    title: "Dua When Afraid or in Fear",
    arabic_text:
      "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni'mal-wakil",
    translation: "Allah is sufficient for us, and He is the best disposer of affairs.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "4563",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "stressed", "hopeful", "angry"],
    situation_tags: ["fear", "worry", "trust-in-allah", "hardship", "trust", "daily", "difficulty", "reliance", "tawakkul"],
    featured: true,
    daily_dua_eligible: true,
  },

  // ─── FORGIVENESS ─────────────────────────────────────────────────────────────
  {
    id: 18,
    slug: "dua-for-forgiveness-simple",
    title: "Dua for Forgiveness",
    arabic_text:
      "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    transliteration:
      "Rabbighfir li wa tub 'alayya innaka antat-tawwabur-rahim",
    translation:
      "My Lord, forgive me and accept my repentance. Indeed You are the Oft-Returning, the Most Merciful.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3434",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful"],
    situation_tags: ["forgiveness", "repentance", "sins"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 19,
    slug: "dua-laylatul-qadr",
    title: "Dua for Laylatul Qadr (Night of Power)",
    arabic_text:
      "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni",
    translation:
      "O Allah, You are Pardoning and love pardon, so pardon me.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3513",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "lonely"],
    situation_tags: ["laylatul-qadr", "ramadan", "forgiveness", "night-of-power", "last-10-nights"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 20,
    slug: "dua-for-parents",
    title: "Dua for Parents",
    arabic_text:
      "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir hamhuma kama rabbayani saghira",
    translation:
      "My Lord, have mercy upon them as they raised me when I was young.",
    source_book: "Quran",
    hadith_number: "17:24",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["grateful", "hopeful", "sad"],
    situation_tags: ["parents", "family", "mercy", "quranic", "mother", "father", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },

  // ─── TRAVEL ──────────────────────────────────────────────────────────────────
  {
    id: 21,
    slug: "dua-for-travel",
    title: "Dua for Travelling",
    arabic_text:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ",
    transliteration:
      "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun",
    translation:
      "Glory be to the One who has subjected this to us, and we were not capable of doing so ourselves. And indeed, to our Lord we will surely return.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2602",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "travel",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["travel", "vehicle", "journey", "car", "plane", "umrah", "hajj", "pilgrimage", "driving", "riding", "transport", "bus", "mount"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 22,
    slug: "dua-returning-from-travel",
    title: "Dua When Returning From Travel",
    arabic_text:
      "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
    transliteration: "Ayibuna, ta'ibuna, 'abiduna, lirabbina hamidun",
    translation:
      "We are returning, repenting, worshipping, and praising our Lord.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3085",
    authenticity_grade: "SAHIH",
    category: "travel",
    emotion_tags: ["grateful"],
    situation_tags: ["travel", "returning", "journey", "umrah", "hajj", "pilgrimage"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── QURANIC DUAS ────────────────────────────────────────────────────────────
  {
    id: 23,
    slug: "dua-rabbana-atina",
    title: "Rabbana Atina – The Complete Dua",
    arabic_text:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    translation:
      "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    source_book: "Quran",
    hadith_number: "2:201",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["general", "dunya", "akhirah", "protection", "quranic", "business", "trade", "income", "work", "blessing", "financial", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 24,
    slug: "dua-of-prophet-yunus",
    title: "Dua of Prophet Yunus (Jonah)",
    arabic_text:
      "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation:
      "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    source_book: "Quran",
    hadith_number: "21:87",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful", "stressed", "angry", "lonely"],
    situation_tags: ["distress", "hardship", "forgiveness", "prophets", "quranic", "anxiety", "panic", "fear", "dua-of-yunus", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 25,
    slug: "dua-of-prophet-ibrahim",
    title: "Dua of Prophet Ibrahim (Abraham)",
    arabic_text:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    transliteration:
      "Rabbi j'alni muqimas-salati wa min dhurriyyati rabbana wa taqabbal du'a",
    translation:
      "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.",
    source_book: "Quran",
    hadith_number: "14:40",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["prayer", "family", "children", "quranic", "salah", "offspring", "descendants", "prophet-ibrahim", "steadfastness"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 26,
    slug: "dua-of-prophet-ayyub",
    title: "Dua of Prophet Ayyub (Job)",
    arabic_text:
      "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration: "Anni massaniyad-durru wa anta arhamur-rahimin",
    translation:
      "Indeed, adversity has touched me, and you are the Most Merciful of the merciful.",
    source_book: "Quran",
    hadith_number: "21:83",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["sad", "stressed", "hopeful", "afraid", "angry", "lonely"],
    situation_tags: ["illness", "hardship", "suffering", "patience", "quranic"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 27,
    slug: "dua-hasbi-allah",
    title: "Dua of Reliance – Hasbiyallah",
    arabic_text:
      "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Hasbiyallahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa rabbul-'arshil-'azim",
    translation:
      "Allah is sufficient for me. There is no deity except Him. Upon Him I rely and He is the Lord of the Great Throne.",
    source_book: "Quran",
    hadith_number: "9:129",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["afraid", "stressed", "hopeful", "angry", "lonely"],
    situation_tags: ["reliance", "trust", "difficulty", "anxiety", "quranic"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── HEALTH ──────────────────────────────────────────────────────────────────
  {
    id: 28,
    slug: "dua-when-ill",
    title: "Dua When Sick or Ill",
    arabic_text:
      "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا",
    transliteration:
      "Allahumma Rabban-nasi, adhhibil-ba'sa, ishfi antash-shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqama",
    translation:
      "O Allah, Lord of mankind, remove the harm. Heal, for You are the Healer. There is no healing except Your healing, a healing that leaves no illness.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "5743",
    authenticity_grade: "SAHIH",
    category: "health",
    emotion_tags: ["sad", "afraid", "hopeful"],
    situation_tags: ["illness", "sickness", "healing", "ruqyah"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 29,
    slug: "dua-visiting-sick",
    title: "Dua When Visiting a Sick Person",
    arabic_text:
      "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
    transliteration: "La ba'sa tahurun in sha Allah",
    translation:
      "No harm will come to you. It will be a purification, if Allah wills.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "5656",
    authenticity_grade: "SAHIH",
    category: "health",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["visiting-sick", "hospital", "illness", "sick", "visiting", "ruqyah"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 30,
    slug: "dua-ruqyah-self",
    title: "Dua for Self-Ruqyah (Healing Recitation)",
    arabic_text:
      "بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنٍ حَاسِدٍ اللَّهُ يَشْفِيكَ بِسْمِ اللَّهِ أَرْقِيكَ",
    transliteration:
      "Bismillahi arqika min kulli shay'in yu'dhika, min sharri kulli nafsin aw 'aynin hasidin, Allahu yashfika, bismillahi arqika",
    translation:
      "In the name of Allah I perform ruqyah for you, from everything that harms you, from the evil of every soul or envious eye. Allah heals you; in the name of Allah I perform ruqyah for you.",
    source_book: "Sahih Muslim",
    hadith_number: "2186",
    authenticity_grade: "SAHIH",
    category: "health",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["ruqyah", "healing", "evil-eye", "protection"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── WORSHIP ─────────────────────────────────────────────────────────────────
  {
    id: 31,
    slug: "dua-after-adhan",
    title: "Dua After the Adhan (Call to Prayer)",
    arabic_text:
      "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    transliteration:
      "Allahumma rabba hadhihid-da'watit-tammati was-salatil-qa'imati, ati Muhammadanil-wasilata wal-fadilata, wab'athhu maqaman mahmudanil-ladhi wa'adtah",
    translation:
      "O Allah, Lord of this perfect call and established prayer, grant Muhammad the intercession and the favor, and raise him to the praiseworthy position You have promised him.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "614",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["adhan", "prayer", "salah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 32,
    slug: "dua-istikhara",
    title: "Dua al-Istikhara (Seeking Guidance)",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
    transliteration:
      "Allahumma inni astakhiruka bi'ilmika wa astaqdiruka biqudratika wa as'aluka min fadlikal-'azim, fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta 'allamul-ghuyub. Allahumma in kunta ta'lamu anna hadhal-amra khayrun li fi dini wa ma'ashi wa 'aqibati amri faqdurhu li wa yassirhu li thumma barik li fihi, wa in kunta ta'lamu anna hadhal-amra sharrun li fi dini wa ma'ashi wa 'aqibati amri fasrifhu 'anni wasrifni 'anhu waqdur liyal-khayra haythu kana thumma ardini bih",
    translation:
      "O Allah, I seek Your guidance through Your knowledge, and I seek Your capability through Your power, and I ask You from Your great bounty. For surely You have power and I do not, and You know and I do not, and You know the unseen. O Allah, if You know that this matter is good for me in my religion, my livelihood, and the outcome of my affair, then decree it for me, facilitate it for me, and bless me in it. And if You know that this matter is bad for me in my religion, my livelihood, and the outcome of my affair, then turn it away from me and turn me away from it, and decree for me what is good wherever it may be, then make me pleased with it.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1166",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["istikhara", "decision", "guidance", "marriage", "job"],
    featured: true,
    daily_dua_eligible: false,
  },
  {
    id: 33,
    slug: "dua-breaking-fast",
    title: "Dua for Breaking the Fast (Iftar)",
    arabic_text:
      "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    transliteration:
      "Dhahaba al-zama'u wabtallatil-'uruqu wa thabatal-ajru in sha'Allah",
    translation:
      "The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2357",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["iftar", "ramadan", "fasting", "breaking-fast", "food"],
    featured: true,
    daily_dua_eligible: false,
  },

  // ─── FAMILY ──────────────────────────────────────────────────────────────────
  {
    id: 35,
    slug: "dua-for-righteous-children",
    title: "Dua for Righteous Children",
    arabic_text:
      "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    transliteration: "Rabbi hab li minas-salihin",
    translation: "My Lord, grant me from among the righteous.",
    source_book: "Quran",
    hadith_number: "37:100",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful"],
    situation_tags: ["children", "family", "offspring", "quranic", "righteous", "dua-for-children"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 36,
    slug: "dua-for-righteous-spouse",
    title: "Dua for a Righteous Spouse",
    arabic_text:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration:
      "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama",
    translation:
      "Our Lord, grant us from among our wives and offspring comfort to our eyes, and make us a leader for the righteous.",
    source_book: "Quran",
    hadith_number: "25:74",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "lonely", "grateful"],
    situation_tags: ["marriage", "spouse", "husband", "wife", "family", "children", "quranic", "offspring", "righteous", "leadership"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 37,
    slug: "dua-for-deceased",
    title: "Dua for the Deceased",
    arabic_text:
      "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ",
    transliteration:
      "Allahummaghfir lahu warhamhu wa 'afihi wa'fu 'anhu",
    translation:
      "O Allah, forgive him, have mercy on him, pardon him, and excuse him.",
    source_book: "Sahih Muslim",
    hadith_number: "963",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["funeral", "deceased", "death", "janazah"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── EMOTIONAL DUAS ──────────────────────────────────────────────────────────
  {
    id: 38,
    slug: "dua-for-depression-and-sadness",
    title: "Dua for Depression and Sadness",
    arabic_text:
      "اللَّهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي",
    transliteration:
      "Allahumma inni 'abduka, wabnu 'abdika, wabnu amatika, nasiyati biyadika, madin fiyya hukmuka, 'adlun fiyya qada'uka, as'aluka bi kulli ismin huwa laka, sammayta bihi nafsaka, aw anzaltahu fi kitabika, aw 'allamtahu ahadan min khalqika, awista'tharta bihi fi 'ilmil-ghaybi 'indaka, an taj'alal-Qur'ana rabi'a qalbi, wa nura sadri, wa jala'a huzni, wa dhahaba hammi",
    translation:
      "O Allah, I am Your slave, son of Your slave and son of Your maidservant. My forelock is in Your hand, Your judgment is executed upon me, Your decree is just. I ask You by every name which belongs to You, by which You named Yourself, or revealed in Your Book, or taught to anyone of Your creation, or kept to Yourself in the knowledge of the unseen with You, to make the Quran the spring of my heart, the light of my chest, the remover of my sadness and the reliever of my distress.",
    source_book: "Musnad Ahmad",
    hadith_number: "3712",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["sad", "stressed", "lonely", "hopeful", "angry"],
    situation_tags: ["depression", "sadness", "distress", "anxiety", "healing", "grief", "worry", "quran", "sorrow", "relief", "heart", "overwhelmed"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 39,
    slug: "dua-for-gratitude",
    title: "Dua of Gratitude (Shukr)",
    arabic_text:
      "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration:
      "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
    translation:
      "O Allah, help me to remember You, to be grateful to You, and to worship You well.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1522",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful", "seeking-forgiveness"],
    situation_tags: ["gratitude", "dhikr", "worship", "zikr", "shukr", "ibadah", "after-prayer", "salah", "remembrance", "excellence", "husn"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 40,
    slug: "dua-when-angry",
    title: "Dua When Feeling Angry",
    arabic_text:
      "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi minash-shaytanir-rajim",
    translation:
      "I seek refuge in Allah from the accursed Satan.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6115",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["angry"],
    situation_tags: ["anger", "conflict", "shaytan"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 41,
    slug: "dua-for-knowledge",
    title: "Dua for Knowledge and Wisdom",
    arabic_text:
      "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    translation: "My Lord, increase me in knowledge.",
    source_book: "Quran",
    hadith_number: "20:114",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful"],
    situation_tags: ["knowledge", "studying", "wisdom", "exam", "quranic", "study", "learning", "education", "daily", "ilm", "students", "seeking-knowledge"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 42,
    slug: "dua-for-ease-in-hardship",
    title: "Dua for Ease in Difficulty",
    arabic_text:
      "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
    transliteration:
      "Allahumma la sahla illa ma ja'altahu sahlan, wa anta taj'alul-hazna idha shi'ta sahla",
    translation:
      "O Allah, there is no ease except that which You make easy, and You make the difficult easy if You wish.",
    source_book: "Ibn Hibban",
    hadith_number: "2427",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["stressed", "sad", "afraid", "hopeful", "angry", "lonely"],
    situation_tags: ["hardship", "ease", "difficulty", "problem", "challenge", "exam", "interview", "obstacle", "help", "relief"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 44,
    slug: "dua-when-it-rains",
    title: "Dua When It Rains",
    arabic_text:
      "اللَّهُمَّ صَيِّبًا نَافِعًا",
    transliteration: "Allahumma sayyiban nafi'a",
    translation: "O Allah, let it be a beneficial rain.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1032",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["rain", "weather", "daily", "nature"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 45,
    slug: "dua-for-guidance",
    title: "Dua for Guidance on the Straight Path",
    arabic_text:
      "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration:
      "Ihdinas-siratal-mustaqim, siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin",
    translation:
      "Guide us to the straight path – the path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.",
    source_book: "Quran",
    hadith_number: "1:6-7",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["guidance", "straight-path", "daily", "quranic", "fatiha"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 46,
    slug: "dua-for-steadfastness",
    title: "Dua for Steadfastness in Faith",
    arabic_text:
      "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Ya muqallibal-qulub, thabbit qalbi 'ala dinik",
    translation:
      "O Turner of hearts, keep my heart firm on Your religion.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "2140",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "seeking-forgiveness"],
    situation_tags: ["faith", "steadfastness", "heart", "iman", "steadfast", "daily", "dhikr", "istiqamah", "doubt", "wavering", "thabaat", "deen", "guidance"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 47,
    slug: "dua-when-in-debt",
    title: "Dua When in Debt or Financial Hardship",
    arabic_text:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration:
      "Allahumma-kfini bihalilika 'an haramika wa aghnini bifadlika 'amman siwak",
    translation:
      "O Allah, suffice me with Your lawful against Your prohibited, and make me independent of all others by Your grace.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3563",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["stressed", "sad", "hopeful", "grateful"],
    situation_tags: ["debt", "financial", "poverty", "money", "rizq", "provision", "halal", "income", "wealth", "employment", "career", "job", "sufficiency"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 48,
    slug: "dua-for-patience",
    title: "Dua for Patience",
    arabic_text:
      "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
    translation:
      "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
    source_book: "Quran",
    hadith_number: "2:250",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "afraid", "hopeful", "angry"],
    situation_tags: ["patience", "sabr", "difficulty", "steadfastness", "quranic", "firmness", "victory", "strength", "battle", "trial", "thabaat", "courage"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 49,
    slug: "dua-for-good-health",
    title: "Dua for Good Health and Wellbeing",
    arabic_text:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي لَا إِلَهَ إِلَّا أَنْتَ",
    transliteration:
      "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari, la ilaha illa ant",
    translation:
      "O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight. There is no god but You.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5090",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["health", "body", "wellbeing", "healing", "morning", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 50,
    slug: "dua-tawakkul-reliance",
    title: "Dua of Complete Reliance on Allah",
    arabic_text:
      "تَوَكَّلْتُ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ",
    transliteration: "Tawakkaltu 'alal-hayyil-ladhi la yamut",
    translation: "I place my trust in the Ever-Living who does not die.",
    source_book: "Mustadrak al-Hakim",
    hadith_number: "1/689",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["reliance", "trust", "tawakkul", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── NEW: WORSHIP ─────────────────────────────────────────────────────────────
  {
    id: 51,
    slug: "dua-istiftah-opening-prayer",
    title: "Dua al-Istiftah – Opening Supplication of Prayer",
    arabic_text:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
    transliteration:
      "Subhanakallahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghairuk",
    translation:
      "Glory and praise be to You, O Allah. Blessed is Your name and exalted is Your majesty. There is no deity worthy of worship except You.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "775",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["prayer", "salah", "opening", "istiftah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 52,
    slug: "dua-in-ruku",
    title: "Dua in Ruku (Bowing in Prayer)",
    arabic_text: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal-Azim",
    translation: "How perfect is my Lord, the Most Great.",
    source_book: "Sahih Muslim",
    hadith_number: "772",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["prayer", "salah", "ruku", "bowing"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 53,
    slug: "dua-in-sujood",
    title: "Dua in Sujood (Prostration)",
    arabic_text: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "Subhana Rabbiyal-A'la",
    translation: "How perfect is my Lord, the Most High.",
    source_book: "Sahih Muslim",
    hadith_number: "772",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["prayer", "salah", "sujood", "prostration"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 54,
    slug: "dua-qunoot-witr",
    title: "Dua Qunoot for Witr Prayer",
    arabic_text:
      "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ",
    transliteration:
      "Allahumma-hdini fiman hadayt, wa 'afini fiman 'afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda 'alayk, wa innahu la yadhillu man walayt, tabarakta Rabbana wa ta'alayt",
    translation:
      "O Allah, guide me among those You have guided, pardon me among those You have pardoned, befriend me among those You have befriended, bless me in what You have given, and protect me from the evil of what You have decreed. Surely You decree and none can decree over You. Truly the one whom You support is not humbled. Blessed and exalted are You, our Lord.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "464",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "grateful", "lonely"],
    situation_tags: ["witr", "qunoot", "night-prayer", "prayer"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 55,
    slug: "dua-on-day-of-arafah",
    title: "Best Dua on the Day of Arafah",
    arabic_text:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu yuhyi wa yumitu wa huwa 'ala kulli shay'in qadir",
    translation:
      "There is no deity worthy of worship except Allah, alone, without any partner. To Him belongs all dominion and all praise. He gives life and causes death, and He has power over all things.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3585",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["arafah", "hajj", "dhul-hijjah", "dhikr", "umrah", "pilgrimage", "arafat"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 56,
    slug: "dua-after-prayer-dhikr",
    title: "Dhikr After Every Prayer",
    arabic_text:
      "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ",
    transliteration: "Subhanallahi walhamdu lillahi wallahu akbar",
    translation:
      "How perfect is Allah, all praise is for Allah, and Allah is the Greatest. (Recited 33 times each after every prayer.)",
    source_book: "Sahih Muslim",
    hadith_number: "597",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["after-prayer", "salah", "tasbih", "dhikr", "zikr"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 57,
    slug: "dua-seeking-allahs-love",
    title: "Dua for Allah's Love",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ",
    transliteration:
      "Allahumma inni as'aluka hubbak, wa hubba man yuhibbuk, wa hubba 'amalin yuqarribuni ila hubbik",
    translation:
      "O Allah, I ask You for Your love, and the love of those who love You, and love of deeds that bring me closer to Your love.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3490",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["love", "closeness-to-allah", "dhikr", "worship", "zikr"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 58,
    slug: "dua-for-jannah",
    title: "Dua Asking for Jannah (Paradise)",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    transliteration:
      "Allahumma inni as'alukal-jannah wa a'udhu bika minan-nar",
    translation:
      "O Allah, I ask You for Paradise and I seek refuge in You from the Fire.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "792",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "afraid"],
    situation_tags: ["jannah", "paradise", "hellfire", "akhirah", "prayer", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── NEW: QURANIC ─────────────────────────────────────────────────────────────
  {
    id: 59,
    slug: "ayatul-kursi",
    title: "Ayatul Kursi – The Throne Verse",
    arabic_text:
      "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration:
      "Allahu la ilaha illa huwal-hayyul-qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi shay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma wa huwal-'aliyyul-'azim",
    translation:
      "Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    source_book: "Quran",
    hadith_number: "2:255",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["afraid", "hopeful", "grateful"],
    situation_tags: ["protection", "morning", "evening", "sleep", "ruqyah", "quranic"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 60,
    slug: "dua-musa-ease-and-speech",
    title: "Dua of Prophet Musa for Ease and Clarity",
    arabic_text:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    transliteration:
      "Rabbi ishrah li sadri wa yassir li amri wahlul 'uqdatan min lisani yafqahu qawli",
    translation:
      "My Lord, expand for me my chest, ease for me my task, and untie the knot from my tongue, that they may understand my speech.",
    source_book: "Quran",
    hadith_number: "20:25-28",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "hopeful"],
    situation_tags: ["exam", "speech", "confidence", "ease", "presentation", "quranic", "study", "test", "knowledge", "speaking", "education"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 61,
    slug: "dua-of-zakariyya-for-offspring",
    title: "Dua of Prophet Zakariyya for Offspring",
    arabic_text:
      "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
    transliteration: "Rabbi la tadharni fardan wa anta khayrul-waritheen",
    translation:
      "My Lord, do not leave me alone, and You are the best of inheritors.",
    source_book: "Quran",
    hadith_number: "21:89",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["lonely", "hopeful"],
    situation_tags: ["children", "family", "loneliness", "offspring", "quranic"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 62,
    slug: "dua-rabbana-la-tuzigh",
    title: "Dua Against Deviation of the Heart",
    arabic_text:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    transliteration:
      "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka antal-wahhab",
    translation:
      "Our Lord, do not let our hearts deviate after You have guided us, and grant us from Yourself mercy. Indeed, You are the Bestower.",
    source_book: "Quran",
    hadith_number: "3:8",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["afraid", "hopeful", "seeking-forgiveness"],
    situation_tags: ["guidance", "heart", "iman", "faith", "quranic"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 63,
    slug: "dua-rabbana-la-tu-akhidhna",
    title: "Dua of Forgiveness – Last Verse of Al-Baqarah",
    arabic_text:
      "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbana la tu'akhidhna in nasina aw akhta'na, rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina, rabbana wa la tuhammilna ma la taqata lana bih, wa'fu 'anna waghfir lana warhamna, anta mawlana fansurna 'alal-qawmil-kafirin",
    translation:
      "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, lay not upon us a burden like that which You laid upon those before us. Our Lord, burden us not with what we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our Protector, so give us victory over the disbelieving people.",
    source_book: "Quran",
    hadith_number: "2:286",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["seeking-forgiveness", "stressed", "hopeful", "lonely"],
    situation_tags: ["forgiveness", "hardship", "burden", "daily", "quranic"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 64,
    slug: "dua-rabbana-ghfir-li-walidayya",
    title: "Dua of Ibrahim for Parents and Believers",
    arabic_text:
      "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration:
      "Rabbana-ghfir li wa li walidayya wa lil-mu'minina yawma yaqumul-hisab",
    translation:
      "Our Lord, forgive me and my parents and the believers on the Day when the reckoning will take place.",
    source_book: "Quran",
    hadith_number: "14:41",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["parents", "family", "forgiveness", "judgment-day", "quranic", "mother", "father"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── NEW: DAILY LIFE ──────────────────────────────────────────────────────────
  {
    id: 65,
    slug: "dua-when-wearing-new-clothes",
    title: "Dua When Wearing New Clothes",
    arabic_text:
      "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
    transliteration:
      "Allahumma lakal-hamdu anta kasawtanihi, as'aluka min khayrihi wa khayri ma suni'a lahu, wa a'udhu bika min sharrihi wa sharri ma suni'a lahu",
    translation:
      "O Allah, all praise is for You. You have dressed me with it. I ask You for the good of it and the good for which it was made, and I seek refuge in You from its evil and the evil for which it was made.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "4020",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["clothes", "dressing", "new-clothes", "morning"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 66,
    slug: "dua-when-sneezing",
    title: "Dua When Sneezing",
    arabic_text: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation:
      "All praise is for Allah. (The one who hears it responds: Yarhamukallah — May Allah have mercy on you.)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6224",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["sneezing", "daily", "health", "sneeze", "gratitude"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 67,
    slug: "dua-looking-in-mirror",
    title: "Dua When Looking in the Mirror",
    arabic_text:
      "اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    transliteration: "Allahumma anta hassanta khalqi fahassin khuluqi",
    translation:
      "O Allah, just as You made my physical form beautiful, make my character beautiful too.",
    source_book: "Musnad Ahmad",
    hadith_number: "3823",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["mirror", "character", "morning", "appearance", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 68,
    slug: "dua-entering-market",
    title: "Dua When Entering the Market",
    arabic_text:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu yuhyi wa yumitu wa huwa hayyun la yamut, biyadihil-khayr wa huwa 'ala kulli shay'in qadir",
    translation:
      "There is no deity worthy of worship except Allah, alone, without any partner. To Him belongs all dominion and all praise. He gives life and causes death, and He is Ever-Living and will not die. In His hand is all good and He has power over all things.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3428",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["market", "shopping", "business", "bazaar"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 69,
    slug: "dua-seeing-crescent-moon",
    title: "Dua When Seeing the New Crescent Moon",
    arabic_text:
      "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ",
    transliteration:
      "Allahumma ahillahu 'alayna bil-amni wal-iman was-salamati wal-islam, rabbi wa rabbukallah",
    translation:
      "O Allah, let this moon appear on us with security, faith, safety, and Islam. My Lord and your Lord is Allah.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3451",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["moon", "new-month", "ramadan", "dhul-hijjah", "chand-raat", "crescent-moon", "moon-sighting", "eid", "new-moon", "eid-al-fitr"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 70,
    slug: "dua-leaving-bathroom",
    title: "Dua When Leaving the Bathroom",
    arabic_text: "غُفْرَانَكَ",
    transliteration: "Ghufranaka",
    translation: "I seek Your forgiveness.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "30",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["seeking-forgiveness"],
    situation_tags: ["bathroom", "toilet", "leaving", "daily", "forgiveness", "etiquette"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 71,
    slug: "dua-for-rizq-and-good-deeds",
    title: "Dua for Rizq, Knowledge, and Accepted Deeds",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    transliteration:
      "Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbala",
    translation:
      "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "925",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["hopeful", "grateful", "stressed"],
    situation_tags: ["rizq", "provision", "knowledge", "work", "morning", "job", "employment", "career", "income", "daily", "deeds", "fajr", "prayer", "ilm", "acceptance"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 72,
    slug: "dua-for-host-after-meal",
    title: "Dua for the Host After Being Hosted",
    arabic_text:
      "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ",
    transliteration:
      "Allahumma barik lahum fima razaqtahum waghfir lahum warhamhum",
    translation:
      "O Allah, bless them in what You have provided for them, forgive them, and have mercy on them.",
    source_book: "Sahih Muslim",
    hadith_number: "2042",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["food", "guest", "hospitality", "blessing", "water", "drink"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 73,
    slug: "dua-jazakallahu-khayran",
    title: "Dua of Gratitude to Others – Jazakallahu Khayran",
    arabic_text: "جَزَاكَ اللَّهُ خَيْرًا",
    transliteration: "Jazakallahu khayran",
    translation: "May Allah reward you with good.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "2035",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["gratitude", "thanking", "daily", "social"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 74,
    slug: "dua-when-it-thunders",
    title: "Dua When Hearing Thunder",
    arabic_text:
      "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    transliteration:
      "Subhanal-ladhi yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih",
    translation:
      "How perfect is He whom the thunder glorifies with His praise, as do the angels out of fear of Him.",
    source_book: "Muwatta Imam Malik",
    hadith_number: "3/154",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["afraid", "grateful", "hopeful"],
    situation_tags: ["thunder", "lightning", "storm", "weather", "rain", "fear", "natural-disaster"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 75,
    slug: "dua-when-wind-blows",
    title: "Dua When the Wind Blows",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ",
    transliteration:
      "Allahumma inni as'aluka khayriha wa khayra ma fiha wa khayra ma ursilat bih, wa a'udhu bika min sharriha wa sharri ma fiha wa sharri ma ursilat bih",
    translation:
      "O Allah, I ask You for the good of it, the good within it, and the good it was sent with. And I seek refuge in You from its evil, the evil within it, and the evil it was sent with.",
    source_book: "Sahih Muslim",
    hadith_number: "899",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["afraid"],
    situation_tags: ["wind", "storm", "weather", "protection"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── NEW: MORNING & EVENING ───────────────────────────────────────────────────
  {
    id: 76,
    slug: "dua-morning-asbahna",
    title: "Morning Adhkar – Entering the Morning",
    arabic_text:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
    translation:
      "We have entered the morning and the whole kingdom belongs to Allah. All praise is for Allah. There is no deity worthy of worship except Allah, alone, without partner. To Him belongs all dominion and all praise, and He has power over all things.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5077",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["grateful"],
    situation_tags: ["morning", "adhkar", "waking-up"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 77,
    slug: "dua-subhanallahi-wa-bihamdihi",
    title: "Best Dhikr – Subhanallahi wa Bihamdihi",
    arabic_text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhanallahi wa bihamdihi",
    translation:
      "How perfect is Allah and all praise is for Him. (Recited 100 times in the morning and evening wipes away sins even if they were like foam on the sea.)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6405",
    authenticity_grade: "SAHIH",
    category: "morning-evening",
    emotion_tags: ["grateful", "seeking-forgiveness"],
    situation_tags: ["morning", "evening", "dhikr", "100-times", "forgiveness", "zikr"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── NEW: PROTECTION ──────────────────────────────────────────────────────────
  {
    id: 79,
    slug: "dua-inna-lillahi-upon-calamity",
    title: "Dua of Patience Upon Calamity (Inna Lillahi)",
    arabic_text:
      "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
    transliteration:
      "Inna lillahi wa inna ilayhi raji'un, Allahumma ajurni fi musibati wa akhlif li khayran minha",
    translation:
      "Verily we belong to Allah, and truly to Him we shall return. O Allah, reward me for my affliction and replace it for me with something better.",
    source_book: "Sahih Muslim",
    hadith_number: "918",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["sad", "afraid", "hopeful", "angry"],
    situation_tags: ["death", "calamity", "loss", "grief", "patience"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 80,
    slug: "dua-for-guidance-and-righteousness",
    title: "Dua for Guidance and Righteousness",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration:
      "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina",
    translation:
      "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
    source_book: "Sahih Muslim",
    hadith_number: "2721",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["hopeful", "seeking-forgiveness", "angry", "lonely"],
    situation_tags: ["guidance", "piety", "protection", "daily", "hidayah", "righteous", "morning"],
    featured: true,
    daily_dua_eligible: true,
  },

  // ─── NEW: HEALTH ──────────────────────────────────────────────────────────────
  {
    id: 82,
    slug: "dua-pain-relief-hand-placement",
    title: "Dua for Pain Relief (Hand on Affected Area)",
    arabic_text:
      "بِسْمِ اللَّهِ بِسْمِ اللَّهِ بِسْمِ اللَّهِ أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ",
    transliteration:
      "Bismillah, bismillah, bismillah, a'udhu billahi wa qudratihi min sharri ma ajidu wa uhadhir",
    translation:
      "In the name of Allah (×3). I seek refuge in Allah and in His power from the evil of what I feel and what I fear.",
    source_book: "Sahih Muslim",
    hadith_number: "2202",
    authenticity_grade: "SAHIH",
    category: "health",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["pain", "illness", "healing", "ruqyah"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 83,
    slug: "dua-for-sick-person-seven-times",
    title: "Dua for a Sick Person – Recited 7 Times",
    arabic_text:
      "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
    transliteration:
      "As'alullaha-l-'azima rabba-l-'arshi-l-'azimi an yashfiyak",
    translation:
      "I ask Allah the Almighty, Lord of the Magnificent Throne, to cure you. (Recited 7 times when visiting a sick Muslim.)",
    source_book: "Sunan Abu Dawud",
    hadith_number: "3106",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["visiting-sick", "illness", "healing", "shifa"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── NEW: FAMILY ──────────────────────────────────────────────────────────────
  {
    id: 84,
    slug: "dua-for-newborn-protection",
    title: "Dua of Protection for a Newborn Baby",
    arabic_text:
      "أُعِيذُكَ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    transliteration:
      "U'idhuka bi kalimatillahit-tammati min kulli shaytanin wa hammatin wa min kulli 'aynin lammah",
    translation:
      "I seek protection for you in the perfect words of Allah from every devil, every harmful creature, and every evil eye.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3371",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["afraid", "hopeful", "grateful"],
    situation_tags: ["newborn", "baby", "children", "protection", "family", "child", "evil-eye", "ruqyah"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 85,
    slug: "dua-before-marital-intimacy",
    title: "Dua Before Marital Intimacy",
    arabic_text:
      "بِسْمِ اللَّهِ اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",
    transliteration:
      "Bismillah, Allahumma jannibna ash-shaytana wa jannibish-shaytana ma razaqtana",
    translation:
      "In the name of Allah. O Allah, keep Satan away from us and keep Satan away from whatever You bless us with.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "141",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["marriage", "husband-wife", "protection", "family", "spouse", "intimacy"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 86,
    slug: "dua-blessing-at-nikah",
    title: "Dua for Blessing at a Wedding (Nikah)",
    arabic_text:
      "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration:
      "Barakallahu laka wa baraka 'alayk wa jama'a baynakuma fi khayr",
    translation:
      "May Allah bless you, and shower His blessings upon you, and join you together in goodness.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2130",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["nikah", "wedding", "marriage", "family", "blessing", "spouse", "congratulations", "newlyweds", "eid", "celebration"],
    featured: true,
    daily_dua_eligible: false,
  },
  {
    id: 87,
    slug: "dua-visiting-graves",
    title: "Dua When Visiting the Graveyard",
    arabic_text:
      "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
    transliteration:
      "Assalamu 'alaykum ahla ad-diyari minal-mu'minina wal-muslimin, wa inna in sha'a Allahu bikum lahiqun, nas'alullaha lana wa lakumul-'afiyah",
    translation:
      "Peace be upon you, O people of these dwellings, from among the believers and Muslims. We will, if Allah wills, be joining you. We ask Allah for well-being for us and for you.",
    source_book: "Sahih Muslim",
    hadith_number: "974",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["graves", "cemetery", "deceased", "death", "graveyard"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 88,
    slug: "dua-janazah-prayer",
    title: "Dua for the Deceased in Janazah Prayer",
    arabic_text:
      "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا",
    transliteration:
      "Allahummaghfir lihayyina wa mayyitina wa shahidina wa gha'ibina wa saghirina wa kabirina wa dhakarana wa unthana",
    translation:
      "O Allah, forgive our living and our dead, those who are present and those who are absent, our young and our old, our males and our females.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "3201",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "family",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["janazah", "funeral", "deceased", "death"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── NEW: TRAVEL ──────────────────────────────────────────────────────────────
  {
    id: 89,
    slug: "dua-to-make-journey-easy",
    title: "Dua to Make the Journey Easy",
    arabic_text:
      "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
    transliteration:
      "Allahumma hawwin 'alayna safarana hadha wattwi 'anna bu'dah",
    translation:
      "O Allah, make this journey of ours easy for us and fold up its distance for us.",
    source_book: "Sahih Muslim",
    hadith_number: "1342",
    authenticity_grade: "SAHIH",
    category: "travel",
    emotion_tags: ["hopeful"],
    situation_tags: ["travel", "journey", "car", "plane", "easy", "umrah", "hajj", "pilgrimage"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 90,
    slug: "dua-entering-new-town",
    title: "Dua When Entering a New City or Town",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيهَا",
    transliteration:
      "Allahumma inni as'aluka khayriha wa khayra ahliha wa khayra ma fiha, wa a'udhu bika min sharriha wa sharri ahliha wa sharri ma fiha",
    translation:
      "O Allah, I ask You for the good of it, the good of its people, and the good of what is in it. And I seek refuge in You from its evil, the evil of its people, and the evil of what is in it.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "2893",
    authenticity_grade: "SAHIH",
    category: "travel",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["travel", "new-place", "city", "town", "protection", "umrah", "hajj", "new-city"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── NEW: FORGIVENESS ─────────────────────────────────────────────────────────
  {
    id: 91,
    slug: "dua-seeking-forgiveness-100-times",
    title: "Dua of Istighfar – Seeking Forgiveness",
    arabic_text:
      "اللَّهُمَّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ",
    transliteration:
      "Allahumma aghfir li wa tub 'alayya innaka antat-tawwabul-ghafur",
    translation:
      "O Allah, forgive me and accept my repentance. Indeed You are the Oft-Returning, the Most Forgiving. (The Prophet (SAW) recited this 100 times per day.)",
    source_book: "Sunan Ibn Majah",
    hadith_number: "3814",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["istighfar", "forgiveness", "repentance", "100-times"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 92,
    slug: "dua-when-fasting-provoked",
    title: "What to Say When Fasting and Provoked",
    arabic_text: "إِنِّي صَائِمٌ إِنِّي صَائِمٌ",
    transliteration: "Inni sa'im, inni sa'im",
    translation:
      "I am fasting, I am fasting. (Said aloud or to oneself when someone provokes you while fasting.)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1904",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["angry"],
    situation_tags: ["fasting", "ramadan", "anger", "provoked"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 93,
    slug: "dua-seeking-rain-istisqa",
    title: "Dua for Rain (Istisqa – Seeking Rainfall)",
    arabic_text:
      "اللَّهُمَّ أَسْقِنَا غَيْثًا مُغِيثًا مَرِيئًا مَرِيعًا نَافِعًا غَيْرَ ضَارٍّ عَاجِلًا غَيْرَ آجِلٍ",
    transliteration:
      "Allahumma asqina ghayathan mughithan mari'an mari'an nafi'an ghayra darrin 'ajilan ghayra ajil",
    translation:
      "O Allah, send upon us rain that is beneficial, wholesome, abundant, and nourishing — not harmful — and soon, not delayed.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1169",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["hopeful"],
    situation_tags: ["rain", "drought", "istisqa", "weather"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 94,
    slug: "dua-salawat-ibrahim",
    title: "Salawat Ibrahimiyyah – Full Blessings on the Prophet",
    arabic_text:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid. Wa barik 'ala Muhammadin wa 'ala ali Muhammadin kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid",
    translation:
      "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy and Glorious. And send peace upon Muhammad and upon the family of Muhammad, as You sent peace upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3370",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["salawat", "prophet", "prayer", "friday", "tashahhud", "jummah", "darood", "daily", "jumu'ah", "jumah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 95,
    slug: "dua-seeing-someone-in-difficulty",
    title: "Dua When Seeing Someone in Affliction",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاهُ بِهِ وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا",
    transliteration:
      "Alhamdu lillahil-ladhi 'afani mimma-btalahu bihi wa fadddalani 'ala kathirin mimman khalaqa tafdhila",
    translation:
      "All praise is for Allah who saved me from that which He has afflicted you with, and Who has truly favoured me over many of those He has created.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3431",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["affliction", "gratitude", "illness", "hardship", "blessing", "trial", "disabled", "sick", "calamity"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 96,
    slug: "dua-for-strong-faith-completion",
    title: "Dua for Firm Faith and Good End",
    arabic_text:
      "اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ وَالْأَبْصَارِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration:
      "Allahumma ya muqallibal-qulubi wal-absar, thabbit qalbi 'ala dinik",
    translation:
      "O Allah, O Turner of hearts and sight, make my heart firm upon Your religion.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "2066",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "lonely"],
    situation_tags: ["faith", "iman", "heart", "steadfastness", "death"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 97,
    slug: "dua-for-sleep-protection-night",
    title: "Dua Before Sleep for Nightly Protection",
    arabic_text:
      "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    transliteration:
      "Allahumma qini 'adhabaka yawma tab'athu 'ibadak",
    translation:
      "O Allah, protect me from Your punishment on the Day You resurrect Your servants.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5045",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["afraid", "hopeful", "lonely"],
    situation_tags: ["before-sleep", "night", "bedtime", "protection", "akhirah", "sleep", "sleeping", "punishment", "judgment-day", "qiyamah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 98,
    slug: "dua-for-complete-wellbeing-afiyah",
    title: "Dua for Complete Wellbeing ('Afiyah)",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    transliteration:
      "Allahumma inni as'alukal-'afwa wal-'afiyata fid-dunya wal-akhirah",
    translation:
      "O Allah, I ask You for pardon and well-being in this world and in the Hereafter.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "3871",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["wellbeing", "health", "pardon", "daily", "morning"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 100,
    slug: "dua-for-seeking-allahs-pleasure",
    title: "Dua for Allah's Pleasure and Refuge from His Anger",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَأَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ",
    transliteration:
      "Allahumma inni as'aluka ridaka wal-jannah, wa a'udhu bika min sakhatika wan-nar",
    translation:
      "O Allah, I ask You for Your pleasure and Paradise, and I seek refuge in You from Your anger and the Fire.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "3846",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "afraid", "seeking-forgiveness"],
    situation_tags: ["jannah", "paradise", "akhirah", "pleasure", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── High-traffic additions (IDs 101-150) ───────────────────────────────────

  {
    id: 105,
    slug: "dua-la-hawla-wa-la-quwwata",
    title: "La Hawla Wa La Quwwata – The Treasure of Paradise",
    arabic_text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "La hawla wa la quwwata illa billah",
    translation:
      "There is no power and no strength except with Allah.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6409",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["stressed", "afraid"],
    situation_tags: ["hardship", "daily", "dhikr", "power", "strength", "paradise"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 107,
    slug: "dua-for-deceased-parents",
    title: "Dua for Deceased Parents",
    arabic_text:
      "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration:
      "Rabbighfir li wa liwalidayya warhamhuma kama rabbayani saghira",
    translation:
      "My Lord, forgive me and my parents, and have mercy on them as they raised me when I was small.",
    source_book: "Quran",
    hadith_number: "71:28 & 17:24",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["sad", "seeking-forgiveness", "hopeful"],
    situation_tags: ["parents", "deceased", "death", "mother", "father", "mercy"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 110,
    slug: "dua-for-tahajjud-night-prayer",
    title: "Dua at the Start of Tahajjud Night Prayer",
    arabic_text:
      "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ",
    transliteration:
      "Allahumma lakal-hamdu anta qayyimus-samawati wal-ardi wa man fihinna, wa lakal-hamdu laka mulkus-samawati wal-ardi wa man fihinna",
    translation:
      "O Allah, all praise is for You; You are the Sustainer of the heavens and the earth and all that is in them. Praise be to You; Yours is the dominion of the heavens and the earth and all that is in them.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1120",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["tahajjud", "qiyam", "night-prayer", "night", "praise"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 112,
    slug: "dua-for-protection-from-laziness",
    title: "Dua for Protection from Laziness and Cowardice",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَالْهَرَمِ وَعَذَابِ الْقَبْرِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-'ajzi wal-kasali wal-jubni wal-bukhli wal-harami wa 'adhabil-qabr",
    translation:
      "O Allah, I seek refuge in You from incapacity, laziness, cowardice, miserliness, old age, and the punishment of the grave.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6367",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["stressed"],
    situation_tags: ["laziness", "productivity", "morning", "motivation", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 113,
    slug: "dua-when-feeling-overwhelmed-distressed",
    title: "Dua When Feeling Overwhelmed and Distressed",
    arabic_text:
      "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ وَأَصْلِحْ لِي شَأْنِي كُلَّهُ لا إِلَهَ إِلا أَنْتَ",
    transliteration:
      "Allahumma rahmataka arju fala takilni ila nafsi tarfata 'aynin wa aslih li sha'ni kullahu la ilaha illa ant",
    translation:
      "O Allah, I hope for Your mercy; do not leave me to myself for even the blink of an eye. Set right all my affairs. There is no god but You.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5090",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["stressed", "sad"],
    situation_tags: ["stressed", "distress", "hardship", "mercy", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 125,
    slug: "dua-before-wudu-ablution",
    title: "Dua Before Performing Wudu (Ablution)",
    arabic_text: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "101",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["wudu", "ablution", "purification", "prayer", "daily"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 126,
    slug: "dua-after-wudu-ablution",
    title: "Dua After Completing Wudu (Ablution)",
    arabic_text:
      "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    transliteration:
      "Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh. Allahumma-j'alni minat-tawwabina waj'alni minal-mutatahhirin",
    translation:
      "I bear witness that there is no god but Allah alone with no partner, and I bear witness that Muhammad is His slave and messenger. O Allah, make me of those who repent and make me of those who purify themselves.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "55",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["wudu", "ablution", "purification", "tawbah", "daily"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 127,
    slug: "dua-for-someone-who-sneezes",
    title: "Response When Someone Sneezes – Yarhamukallah",
    arabic_text: "يَرْحَمُكَ اللَّهُ",
    transliteration: "Yarhamukallah",
    translation: "May Allah have mercy on you.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6224",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["sneeze", "sneezing", "response", "etiquette", "daily"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 134,
    slug: "dua-for-students-before-studying",
    title: "Dua for Students Before Studying",
    arabic_text:
      "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا",
    transliteration:
      "Allahumma-nfa'ni bima 'allamtani wa 'allimni ma yanfa'uni wa zidni 'ilma",
    translation:
      "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "251",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["study", "student", "exam", "learning", "knowledge", "education", "ilm", "studying", "memory", "understanding", "school", "university", "students", "quran"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 135,
    slug: "dua-for-difficulty-hardship",
    title: "Dua in Times of Great Difficulty and Hardship",
    arabic_text:
      "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَوَاتِ وَرَبُّ الأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
    transliteration:
      "La ilaha illallahul-'Adhimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Adhim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-'Arshil-Karim",
    translation:
      "There is no god but Allah, the Mighty, the Forbearing; there is no god but Allah, Lord of the Magnificent Throne; there is no god but Allah, Lord of the heavens, Lord of the earth, and Lord of the Glorious Throne.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6346",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["afraid", "stressed", "sad", "hopeful", "angry"],
    situation_tags: ["hardship", "difficulty", "distress", "crisis", "daily", "anxiety"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 137,
    slug: "dua-for-rain-istisqa",
    title: "Dua for Rain (Salat al-Istisqa)",
    arabic_text:
      "اللَّهُمَّ أَسْقِنَا اللَّهُمَّ أَسْقِنَا اللَّهُمَّ أَسْقِنَا",
    transliteration:
      "Allahumma asqina, Allahumma asqina, Allahumma asqina",
    translation:
      "O Allah, send us rain. O Allah, send us rain. O Allah, send us rain.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1014",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful"],
    situation_tags: ["rain", "drought", "istisqa", "weather"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 139,
    slug: "dua-for-newly-married-couple",
    title: "Dua on Wedding Night – Blessing for Newlyweds",
    arabic_text:
      "اللَّهُمَّ بَارِكْ لِي فِيهَا وَبَارِكْ لَهَا فِيَّ",
    transliteration:
      "Allahumma barik li fiha wa barik laha fiyy",
    translation:
      "O Allah, bless me in her and bless her in me.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2160",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["marriage", "wedding", "nikah", "spouse", "newlywed"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 146,
    slug: "dua-when-in-need-of-allah",
    title: "Dua of Musa When in Desperate Need of Allah's Help",
    arabic_text:
      "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration:
      "Rabbi inni lima anzalta ilayya min khairin faqir",
    translation:
      "My Lord, indeed I am in need of whatever good You send down to me.",
    source_book: "Quran",
    hadith_number: "28:24",
    authenticity_grade: "QURAN",
    category: "daily-life",
    emotion_tags: ["hopeful", "sad", "stressed"],
    situation_tags: ["need", "provision", "rizq", "hardship", "help", "poverty", "daily", "helpless", "prophet-musa", "dependence-on-allah"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 147,
    slug: "dua-for-acceptance-of-deeds",
    title: "Dua for Acceptance of Good Deeds",
    arabic_text:
      "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Rabbana taqabbal minna innaka antas-sami'ul-'alim",
    translation:
      "Our Lord, accept from us. Indeed, You are the All-Hearing, the All-Knowing.",
    source_book: "Quran",
    hadith_number: "2:127",
    authenticity_grade: "QURAN",
    category: "worship",
    emotion_tags: ["hopeful", "seeking-forgiveness", "grateful"],
    situation_tags: ["deeds", "acceptance", "ibadah", "ramadan", "prayer", "daily", "worship", "dua", "fasting", "charity", "dhul-hijjah"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── EID & SPECIAL OCCASIONS ─────────────────────────────────────────────────
  {
    id: 151,
    slug: "eid-takbeer",
    title: "Eid Takbeer – Allahu Akbar Allahu Akbar",
    arabic_text:
      "اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ",
    transliteration:
      "Allahu Akbar, Allahu Akbar, La ilaha illallah, Wallahu Akbar, Allahu Akbar, Wa lillahil hamd",
    translation:
      "Allah is the Greatest, Allah is the Greatest. There is no deity worthy of worship except Allah. Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.",
    source_book: "Musannaf Ibn Abi Shaybah",
    hadith_number: "2/166",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["eid", "eid-al-fitr", "eid-al-adha", "takbeer", "eid-prayer", "celebration", "morning"],
    featured: true,
    daily_dua_eligible: false,
  },
  {
    id: 152,
    slug: "eid-greeting-taqabbalallahu",
    title: "Eid Greeting – Taqabbalallahu Minna wa Minkum",
    arabic_text:
      "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ",
    transliteration:
      "Taqabbalallahu minna wa minkum",
    translation:
      "May Allah accept (good deeds) from us and from you.",
    source_book: "Fath al-Bari",
    hadith_number: "2/446",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["eid", "eid-al-fitr", "eid-al-adha", "greeting", "eid-mubarak", "celebration", "ramadan"],
    featured: true,
    daily_dua_eligible: false,
  },

  // ─── PRAYER & WORSHIP ────────────────────────────────────────────────────────
  {
    id: 154,
    slug: "kaffaratul-majlis-end-of-gathering",
    title: "Kaffaratul Majlis – Dua at the End of a Gathering",
    arabic_text:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    transliteration:
      "Subhanaka Allahumma wa bihamdika, ashhadu alla ilaha illa anta, astaghfiruka wa atubu ilayk",
    translation:
      "Glory is to You, O Allah, and praise. I bear witness that there is none worthy of worship but You. I seek Your forgiveness and repent to You.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3433",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["seeking-forgiveness", "grateful"],
    situation_tags: ["gathering", "meeting", "end-of-meeting", "kaffaratul-majlis", "expiation", "majlis", "class", "halaqah"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 155,
    slug: "talbiyah-hajj-umrah",
    title: "Talbiyah – The Call of Hajj and Umrah",
    arabic_text:
      "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيكَ لَكَ",
    transliteration:
      "Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak",
    translation:
      "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1549",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["hajj", "umrah", "ihram", "talbiyah", "labbayk", "pilgrimage", "makkah"],
    featured: true,
    daily_dua_eligible: false,
  },
  {
    id: 156,
    slug: "dua-between-two-sajdahs",
    title: "Dua Between the Two Sajdahs (Prostrations)",
    arabic_text:
      "رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي",
    transliteration:
      "Rabbighfir li, Rabbighfir li",
    translation:
      "My Lord, forgive me. My Lord, forgive me.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "874",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["salah", "prayer", "sajdah", "prostration", "sujood", "forgiveness", "between-sajdahs"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 157,
    slug: "dua-protection-grave-fire-dajjal",
    title: "Dua for Protection from the Grave, Fire, and Dajjal",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    transliteration:
      "Allahumma inni a'udhu bika min 'adhabil-qabri, wa min 'adhabin-nar, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-Dajjal",
    translation:
      "O Allah, I seek refuge in You from the punishment of the grave, the punishment of the Fire, the trials of life and death, and from the evil of the trial of the False Messiah (Dajjal).",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1377",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["dajjal", "grave", "hellfire", "tashahud", "salah", "prayer", "protection", "death", "end-times"],
    featured: true,
    daily_dua_eligible: true,
  },

  // ─── DEATH & BEREAVEMENT ─────────────────────────────────────────────────────
  {
    id: 158,
    slug: "dua-closing-eyes-of-deceased",
    title: "Dua When Closing the Eyes of the Deceased",
    arabic_text:
      "اللَّهُمَّ اغْفِرْ لَهُ وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ وَأَفْسِحْ لَهُ فِي قَبْرِهِ وَنَوِّرْ لَهُ فِيهِ",
    transliteration:
      "Allahummaghfir lahu warfa' darajatahu fil-mahdiyyeen, wakhlufhu fi 'aqibihi fil-ghaabireen, waghfir lana wa lahu ya Rabbal-'alameen, wafshah lahu fi qabrihi wa nawwir lahu feeh",
    translation:
      "O Allah, forgive him and elevate his station among the guided. Grant him a successor among those he leaves behind. Forgive us and him, O Lord of the worlds. Expand his grave for him and illuminate it.",
    source_book: "Sahih Muslim",
    hadith_number: "920",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["death", "deceased", "dying", "inna-lillahi", "closing-eyes", "janazah", "loss", "grief"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── FOOD & HOSPITALITY ──────────────────────────────────────────────────────
  {
    id: 159,
    slug: "dua-for-iftar-host",
    title: "Dua for the Host Who Provides Iftar",
    arabic_text:
      "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ",
    transliteration:
      "Aftara 'indakumus-sa'imun, wa akala ta'amakumul-abrar, wa sallat 'alaykumul-mala'ikah",
    translation:
      "May those who are fasting break their fast with you, may the righteous eat from your food, and may the angels send their prayers upon you.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "3854",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["iftar", "host", "ramadan", "food", "hospitality", "breaking-fast", "eid"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 160,
    slug: "dua-when-eating-at-someone-home",
    title: "Dua When Eating at Someone's Home",
    arabic_text:
      "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي",
    transliteration:
      "Allahumma at'im man at'amani wasqi man saqani",
    translation:
      "O Allah, feed the one who has fed me and give drink to the one who has given me drink.",
    source_book: "Sahih Muslim",
    hadith_number: "2055",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["food", "eating", "host", "guest", "hospitality", "meal", "drink"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── HAJJ & UMRAH ────────────────────────────────────────────────────────────
  {
    id: 161,
    slug: "dua-at-mount-safa-hajj-umrah",
    title: "Dua at Mount Safa During Hajj and Umrah",
    arabic_text:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ أَنْجَزَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. La ilaha illallahu wahdah, anjaza wa'dahu, wa nasara 'abdahu, wa hazamal-ahzaba wahdah",
    translation:
      "There is no deity worthy of worship except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things capable. There is no deity worthy of worship except Allah alone — He fulfilled His promise, supported His servant, and defeated the confederates alone.",
    source_book: "Sahih Muslim",
    hadith_number: "1218",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["hajj", "umrah", "safa", "marwa", "sa'ee", "pilgrimage", "makkah"],
    featured: false,
    daily_dua_eligible: false,
  },

  // ─── SOCIAL & RELATIONSHIPS ──────────────────────────────────────────────────
  {
    id: 163,
    slug: "dua-when-saying-farewell",
    title: "Dua When Saying Farewell or Goodbye",
    arabic_text:
      "أَسْتَوْدِعُكَ اللَّهَ الَّذِي لَا تَضِيعُ وَدَائِعُهُ",
    transliteration:
      "Astawdi'ukallaha alladhi la tadi'u wada'i'uh",
    translation:
      "I entrust you to Allah, Whose trusts are never lost.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3443",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "travel",
    emotion_tags: ["sad", "hopeful", "lonely"],
    situation_tags: ["farewell", "goodbye", "travel", "separation", "leaving", "parting"],
    featured: false,
    daily_dua_eligible: true,
  },
  // ─── NEW HIGH-TRAFFIC DUAS ────────────────────────────────────────────────
  {
    id: 165,
    slug: "dua-upon-bad-dream-nightmare",
    title: "Dua Upon Waking from a Bad Dream",
    arabic_text:
      "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ وَمِنْ شَرِّ هَذِهِ الرُّؤْيَا",
    transliteration:
      "A'udhu billahi min ash-shaytanir-rajim wa min sharri hadhihi ar-ru'ya",
    translation:
      "I seek refuge in Allah from the accursed Shaytan, and from the evil of this dream.",
    source_book: "Sahih Muslim",
    hadith_number: "2262",
    authenticity_grade: "SAHIH",
    graded_by: "Imam Muslim",
    category: "daily-life",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["bad-dream", "nightmare", "sleep", "waking-up", "fear", "shaytan", "night"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 167,
    slug: "dua-al-masura-abu-bakr",
    title: "Dua al-Masura – The Prophet's Gift to Abu Bakr",
    arabic_text:
      "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    transliteration:
      "Allahumma inni zalamtu nafsi zulman kathiran, wa la yaghfirudh-dhunuba illa anta, faghfir li maghfiratan min 'indika warhamni, innaka antal-Ghafurur-Rahim",
    translation:
      "O Allah, I have greatly wronged myself and no one forgives sins except You. So grant me forgiveness from Yourself and have mercy on me. Indeed, You are the Forgiving, the Most Merciful.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "834",
    authenticity_grade: "SAHIH",
    graded_by: "Imam Bukhari",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "sad"],
    situation_tags: ["prayer", "salah", "in-prayer", "forgiveness", "repentance", "sins", "tawbah", "tashahhud"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 168,
    slug: "dua-waking-at-night",
    title: "Dua Upon Waking Up in the Night",
    arabic_text:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، الْحَمْدُ لِلَّهِ وَسُبْحَانَ اللَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Alhamdu lillahi wa subhanallahi wa la ilaha illallahu wallahu akbaru wa la hawla wa la quwwata illa billah",
    translation:
      "There is no god but Allah alone, He has no partner; to Him belongs all dominion and all praise, and He is over all things capable. All praise is for Allah, glory be to Allah, there is no god but Allah, Allah is the Greatest, and there is no power nor might except with Allah.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1154",
    authenticity_grade: "SAHIH",
    graded_by: "Imam Bukhari",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["waking-up", "night", "tahajjud", "night-prayer", "dhikr", "middle-of-night", "sleep"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 169,
    slug: "dua-tawbah-hayy-qayyum",
    title: "Dua of Sincere Repentance – Al-Hayy Al-Qayyum",
    arabic_text:
      "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    transliteration:
      "Astaghfirullahal-ladhi la ilaha illa huwal-Hayyul-Qayyumu wa atubu ilayh",
    translation:
      "I seek forgiveness from Allah, besides Whom there is no god, the Ever-Living, the Self-Sustaining, and I turn to Him in repentance.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3577",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["repentance", "tawbah", "sins", "forgiveness", "morning", "evening", "daily", "dhikr"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 170,
    slug: "dua-attahiyyatu-tashahud",
    title: "At-Tahiyyatu – The Tashahud Recited in Every Prayer",
    arabic_text:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ashhadu an la ilaha illallahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh",
    translation:
      "All greetings, prayers, and good words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "831",
    authenticity_grade: "SAHIH",
    graded_by: "Imam Bukhari",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["salah", "prayer", "tashahud", "tashahhud", "sitting-in-prayer", "attahiyyat", "five-prayers", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 171,
    slug: "dua-for-zamzam-water",
    title: "Dua When Drinking Zamzam Water",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ",
    transliteration:
      "Allahumma inni as'aluka 'ilman nafi'an wa rizqan wasi'an wa shifa'an min kulli da'",
    translation:
      "O Allah, I ask You for beneficial knowledge, abundant provision, and a cure from every disease.",
    source_book: "Mustadrak al-Hakim",
    hadith_number: "1739",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Hakim",
    category: "health",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["zamzam", "hajj", "umrah", "mecca", "water", "healing", "knowledge", "rizq", "pilgrimage"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 172,
    slug: "dua-for-one-who-gifts-you",
    title: "Dua for Someone Who Has Given You a Gift",
    arabic_text: "بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ",
    transliteration: "Barakallahu laka fi ahlika wa malik",
    translation:
      "May Allah bless your family and your wealth for you.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1672",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["gift", "generosity", "gratitude", "hospitality", "thanking", "favour", "kindness"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 173,
    slug: "three-quls-protection",
    title: "The Three Quls – Protection Morning, Evening, and Before Sleep",
    arabic_text:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ۞ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    transliteration:
      "Qul huwal-Allahu ahad [Surah Al-Ikhlas] | Qul a'udhu bi-rabbil-falaq [Surah Al-Falaq] | Qul a'udhu bi-rabbin-nas [Surah An-Nas]",
    translation:
      "Recite Surah Al-Ikhlas (112), Surah Al-Falaq (113), and Surah An-Nas (114) in full — three times each. The Prophet (SAW) said: 'Reciting them three times morning and evening will suffice you against everything.' After each recitation, blow into your cupped hands and wipe over your body.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5082",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["afraid", "hopeful", "grateful"],
    situation_tags: ["morning", "evening", "before-sleep", "protection", "evil-eye", "shaytan", "ruqyah", "three-quls"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 174,
    slug: "dua-protection-from-shaytan-whispers",
    title: "Dua for Protection from the Whispers of Shaytan (Waswasa)",
    arabic_text:
      "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
    transliteration:
      "Rabbi a'udhu bika min hamazatish-shayatini wa a'udhu bika rabbi an yahdurun",
    translation:
      "My Lord, I seek refuge in You from the promptings of the devils, and I seek refuge in You, my Lord, lest they come near me.",
    source_book: "Quran",
    hadith_number: "23:97-98",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "stressed"],
    situation_tags: ["waswasa", "shaytan", "whispers", "ocd", "doubts", "prayer", "distraction", "evil-thoughts", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 164,
    slug: "dua-masha-allah-la-quwwata-illa-billah",
    title: "Masha Allah – La Quwwata Illa Billah",
    arabic_text:
      "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration:
      "Ma sha'Allahu la quwwata illa billah",
    translation:
      "What Allah wills — there is no power except with Allah.",
    source_book: "Quran",
    hadith_number: "18:39",
    authenticity_grade: "QURAN",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["masha-allah", "gratitude", "evil-eye", "blessing", "appreciation", "protection", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── BATCH 2: 30 NEW DUAS (IDs 175–204) ──────────────────────────────────────
  {
    id: 176,
    slug: "dua-when-rooster-crows",
    title: "Dua When Hearing a Rooster Crow",
    arabic_text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "O Allah, I ask You of Your bounty.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3303",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["rooster", "crow", "morning", "night", "angels", "dawn", "bird"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 177,
    slug: "dua-when-donkey-brays",
    title: "Dua When Hearing a Donkey Bray",
    arabic_text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi min ash-shaytanir-rajim",
    translation: "I seek refuge in Allah from Satan, the accursed.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3303",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid"],
    situation_tags: ["donkey", "bray", "night", "shaytan", "devil", "protection", "evil"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 178,
    slug: "dua-placing-deceased-in-grave",
    title: "Dua When Placing the Deceased in the Grave",
    arabic_text:
      "بِسْمِ اللَّهِ وَعَلَى سُنَّةِ رَسُولِ اللَّهِ",
    transliteration: "Bismillahi wa 'ala sunnati rasulillah",
    translation:
      "In the name of Allah and upon the sunnah of the Messenger of Allah.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "3213",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["burial", "grave", "janazah", "death", "deceased", "funeral", "cemetery"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 179,
    slug: "dua-of-sulayman-for-gratitude",
    title: "Dua of Prophet Sulayman for Gratitude and Righteousness",
    arabic_text:
      "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
    transliteration:
      "Rabbi awzi'ni an ashkura ni'mataka allati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa adkhilni birahmatika fi 'ibadika as-salihin",
    translation:
      "My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents, and to do good deeds that You approve. And admit me by Your mercy into Your righteous servants.",
    source_book: "Quran",
    hadith_number: "27:19",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "seeking-forgiveness"],
    situation_tags: ["gratitude", "parents", "righteousness", "good-deeds", "prophet-sulayman", "jannah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 180,
    slug: "dua-of-ibrahim-for-city-safety",
    title: "Dua of Ibrahim for a Safe and Blessed City",
    arabic_text:
      "رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ مَنْ آمَنَ مِنْهُم بِاللَّهِ وَالْيَوْمِ الْآخِرِ",
    transliteration:
      "Rabbij'al hadha baladan aminan warzuq ahlahu min ath-thamarati man amana minhum billahi wal-yawmil-akhir",
    translation:
      "My Lord, make this a secure city and provide its people with fruits — those among them who believe in Allah and the Last Day.",
    source_book: "Quran",
    hadith_number: "2:126",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["city", "safety", "provision", "rizq", "peace", "prophet-ibrahim", "makkah", "community"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 184,
    slug: "dua-for-khushu-and-beneficial-knowledge",
    title: "Dua for a Humble Heart and Beneficial Knowledge",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا",
    transliteration:
      "Allahumma inni a'udhu bika min 'ilmin la yanfa', wa min qalbin la yakhsha', wa min nafsin la tashba', wa min da'watin la yustajabu laha",
    translation:
      "O Allah, I seek refuge in You from knowledge that does not benefit, a heart that does not fear You, a soul that is never satisfied, and a supplication that is not answered.",
    source_book: "Sahih Muslim",
    hadith_number: "2722",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "seeking-forgiveness", "stressed"],
    situation_tags: ["knowledge", "khushu", "focus", "prayer", "heart", "concentration", "worship", "ilm"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 186,
    slug: "dua-for-purification-of-soul",
    title: "Dua for a Pure Soul and Taqwa",
    arabic_text:
      "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
    transliteration:
      "Allahumma ati nafsi taqwaha wa zakkiha anta khayru man zakkaha anta waliyyuha wa mawlaha",
    translation:
      "O Allah, grant my soul its piety and purify it — You are the best of those who can purify it. You are its Guardian and Master.",
    source_book: "Sahih Muslim",
    hadith_number: "2722",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful", "grateful"],
    situation_tags: ["taqwa", "piety", "purification", "soul", "heart", "nafs", "spiritual", "worship", "character"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 187,
    slug: "dua-when-receiving-good-news",
    title: "Dua When Receiving Good News or a Blessing",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    transliteration:
      "Alhamdu lillahil-ladhi bi ni'matihi tatimmus-salihat",
    translation:
      "All praise is for Allah, by Whose blessing all good things are completed.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "3803",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["good-news", "blessing", "gratitude", "happiness", "praise", "achievement", "success"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 188,
    slug: "dua-seeking-refuge-from-bad-character",
    title: "Dua Seeking Refuge from Evil Character and Vices",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ وَالْأَعْمَالِ وَالْأَهْوَاءِ وَالْأَدْوَاءِ",
    transliteration:
      "Allahumma inni a'udhu bika min munkarat il-akhlaq wal-a'mal wal-ahwa' wal-adwa'",
    translation:
      "O Allah, I seek refuge in You from evil character, evil deeds, evil desires, and evil diseases.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3591",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "afraid"],
    situation_tags: ["character", "akhlaq", "sins", "vices", "bad-habits", "protection", "morality", "evil-desires"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 192,
    slug: "dua-for-protection-from-cowardice-miserliness",
    title: "Dua for Protection from Cowardice, Miserliness and Worldly Trials",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ وَأَعُوذُ بِكَ مِنَ الْبُخْلِ وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-jubni, wa a'udhu bika minal-bukhl, wa a'udhu bika min an uradda ila ardhalil-'umur, wa a'udhu bika min fitnatid-dunya, wa a'udhu bika min 'adhabil-qabr",
    translation:
      "O Allah, I seek refuge in You from cowardice, from miserliness, from being reduced to a feeble old age, from the trials of this world, and from the punishment of the grave.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6374",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["cowardice", "miserliness", "old-age", "fitnah", "grave", "protection", "character", "courage"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 193,
    slug: "dua-of-adam-and-hawa-seeking-forgiveness",
    title: "Dua of Prophet Adam and Hawwa Seeking Forgiveness",
    arabic_text:
      "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration:
      "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasirin",
    translation:
      "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
    source_book: "Quran",
    hadith_number: "7:23",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful"],
    situation_tags: ["repentance", "forgiveness", "tawbah", "sin", "mercy", "prophet-adam", "regret", "loss"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 196,
    slug: "dua-for-protection-from-kufr-and-faqr",
    title: "Dua for Protection from Disbelief and Poverty",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ",
    transliteration: "Allahumma inni a'udhu bika minal-kufri wal-faqr",
    translation:
      "O Allah, I seek refuge in You from disbelief and poverty.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5090",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "stressed"],
    situation_tags: ["disbelief", "kufr", "poverty", "faqr", "financial", "iman", "faith", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 197,
    slug: "dua-rabbana-wasi-rahma",
    title: "The Angels' Dua for Those Who Repent",
    arabic_text:
      "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
    transliteration:
      "Rabbana wasi'ta kulla shay'in rahmatan wa 'ilman faghfir lilladhina tabu wattaba'u sabilaka waqihim 'adhaba al-jahim",
    translation:
      "Our Lord, You encompass all things in mercy and knowledge. So forgive those who have repented and followed Your way, and protect them from the punishment of Hellfire.",
    source_book: "Quran",
    hadith_number: "40:7",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["mercy", "forgiveness", "tawbah", "hellfire", "angels", "repentance", "rahma", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 199,
    slug: "dua-of-ibrahim-for-wisdom-and-jannah",
    title: "Dua of Ibrahim for Wisdom, Honour and Entry into Paradise",
    arabic_text:
      "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ وَاجْعَل لِّي لِسَانَ صِدْقٍ فِي الْآخِرِينَ وَاجْعَلْنِي مِن وَرَثَةِ جَنَّةِ النَّعِيمِ",
    transliteration:
      "Rabbi hab li hukman wa alhiqni bis-salihin, waj'al li lisana sidqin fil-akhirin, waj'alni min warathati jannatin-na'im",
    translation:
      "My Lord, grant me wisdom and join me with the righteous. And grant me an honourable reputation among later generations. And place me among the inheritors of the Garden of Bliss.",
    source_book: "Quran",
    hadith_number: "26:83-85",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["wisdom", "jannah", "paradise", "righteous", "honour", "prophet-ibrahim", "legacy", "knowledge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 200,
    slug: "dua-walking-seeking-light-noor",
    title: "Dua for Allah's Light in Every Limb and Direction",
    arabic_text:
      "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا وَفِي سَمْعِي نُورًا وَفِي بَصَرِي نُورًا وَمِنْ فَوْقِي نُورًا وَمِنْ تَحْتِي نُورًا وَعَنْ يَمِينِي نُورًا وَعَنْ شِمَالِي نُورًا وَمِنْ أَمَامِي نُورًا وَمِنْ خَلْفِي نُورًا وَاجْعَلْ فِي نَفْسِي نُورًا وَأَعْظِمْ لِي نُورًا",
    transliteration:
      "Allahumma ij'al fi qalbi nuran wa fi lisani nuran wa fi sam'i nuran wa fi basari nuran wa min fawqi nuran wa min tahti nuran wa 'an yamini nuran wa 'an shimali nuran wa min amami nuran wa min khalfi nuran waj'al fi nafsi nuran wa a'zhim li nuran",
    translation:
      "O Allah, place light in my heart, light in my tongue, light in my hearing, light in my sight, light above me, light below me, light to my right, light to my left, light ahead of me, light behind me — place light in my soul, and magnify light for me.",
    source_book: "Sahih Muslim",
    hadith_number: "763",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["noor", "light", "heart", "walking", "mosque", "masjid", "morning", "guidance", "spiritual", "prayer"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 201,
    slug: "dua-for-forgiveness-of-all-sins",
    title: "Comprehensive Dua for Forgiveness of All Sins",
    arabic_text:
      "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ",
    transliteration:
      "Allahumma ighfir li dhambi kullahu diqqahu wa jillahu wa awwalahu wa akhirahu wa 'alaniyatahu wa sirrahu",
    translation:
      "O Allah, forgive all of my sins: the small and the great, the first and the last, the open and the hidden.",
    source_book: "Sahih Muslim",
    hadith_number: "483",
    authenticity_grade: "SAHIH",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful"],
    situation_tags: ["forgiveness", "sins", "repentance", "tawbah", "istighfar", "comprehensive", "all-sins", "mercy"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 202,
    slug: "dua-after-rainfall-gratitude",
    title: "Dua of Gratitude Said After Rainfall",
    arabic_text: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
    transliteration: "Mutirna bifadlillahi wa rahmatihi",
    translation:
      "We have been given rain by the grace of Allah and His mercy.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "846",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["rain", "rainfall", "after-rain", "gratitude", "weather", "blessing", "nature"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 203,
    slug: "dua-of-nuh-for-believers",
    title: "Dua of Prophet Nuh for His Household and All Believers",
    arabic_text:
      "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
    transliteration:
      "Rabbi ighfir li wa liwalidayya wa liman dakhala bayti mu'minan wa lil-mu'minina wal-mu'minat",
    translation:
      "My Lord, forgive me and my parents and whoever enters my house as a believer, and the believing men and believing women.",
    source_book: "Quran",
    hadith_number: "71:28",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["parents", "family", "household", "believers", "forgiveness", "prophet-nuh", "ummah", "mercy"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── BATCH 3: 15 NEW DUAS (IDs 205–219) ──────────────────────────────────────
  {
    id: 206,
    slug: "dua-of-ashab-al-kahf-for-mercy-and-guidance",
    title: "Dua of the People of the Cave for Mercy and Guidance",
    arabic_text:
      "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    transliteration:
      "Rabbana atina min ladunka rahmatan wa hayyi' lana min amrina rashada",
    translation:
      "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
    source_book: "Quran",
    hadith_number: "18:10",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "afraid", "stressed"],
    situation_tags: ["mercy", "guidance", "refuge", "difficulty", "fear", "trial", "cave", "ashab-al-kahf", "protection", "rashad"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 207,
    slug: "dua-after-salah-tasbih-and-salam",
    title: "Dhikr and Dua Said Immediately After Every Salah",
    arabic_text:
      "أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللَّهَ اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration:
      "Astaghfirullah, Astaghfirullah, Astaghfirullah. Allahumma antas-salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram",
    translation:
      "I seek forgiveness from Allah (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Glory and Honour.",
    source_book: "Sahih Muslim",
    hadith_number: "591",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "seeking-forgiveness", "hopeful"],
    situation_tags: ["after-prayer", "post-salah", "dhikr", "tasbih", "istighfar", "prayer", "salam", "fard", "salah", "worship"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 210,
    slug: "dua-for-protection-from-riya-and-shirk",
    title: "Dua for Protection from Showing Off and Hidden Shirk",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ",
    transliteration:
      "Allahumma inni a'udhu bika an ushrika bika wa ana a'lam, wa astaghfiruka lima la a'lam",
    translation:
      "O Allah, I seek refuge in You from knowingly associating partners with You, and I seek Your forgiveness for what I do not know.",
    source_book: "Musnad Ahmad",
    hadith_number: "19606",
    authenticity_grade: "SAHIH",
    graded_by: "Ibn Hibban",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "afraid", "hopeful"],
    situation_tags: ["riya", "showing-off", "shirk", "sincerity", "ikhlas", "hidden-shirk", "niyyah", "heart", "worship", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 211,
    slug: "dua-for-travel-by-sea-bismillah-majraha",
    title: "Dua When Travelling by Sea, River or Air",
    arabic_text:
      "بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا إِنَّ رَبِّي لَغَفُورٌ رَّحِيمٌ",
    transliteration:
      "Bismillahi majraha wa mursaha inna rabbi laghafurun rahim",
    translation:
      "In the name of Allah is its sailing and its anchoring. Indeed, my Lord is Forgiving and Merciful.",
    source_book: "Quran",
    hadith_number: "11:41",
    authenticity_grade: "QURAN",
    category: "travel",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["sea", "ship", "boat", "ocean", "river", "travel", "cruise", "ferry", "flight", "plane", "air", "journey"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 213,
    slug: "dua-rabbi-najjini-from-oppressors",
    title: "Dua of Prophet Musa — Save Me from the Wrongdoers",
    arabic_text:
      "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
    transliteration:
      "Rabbi najjini minal-qawmiz-zalimin",
    translation:
      "My Lord, save me from the wrongdoing people.",
    source_book: "Quran",
    hadith_number: "28:21",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "stressed"],
    situation_tags: ["oppression", "zulm", "wrongdoers", "injustice", "escape", "rescue", "enemies", "abuse", "prophet-musa", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 214,
    slug: "dua-morning-fitra-of-islam",
    title: "Morning Dua — We Have Awoken Upon the Fitrah of Islam",
    arabic_text:
      "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ وَعَلَى كَلِمَةِ الْإِخْلَاصِ وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
    transliteration:
      "Asbahna 'ala fitratil-Islam wa 'ala kalimatil-ikhlas wa 'ala dini nabiyyina Muhammadin wa 'ala millati abina Ibrahima hanifan wa ma kana minal-mushrikin",
    translation:
      "We have awoken upon the natural disposition of Islam, upon the word of sincerity, upon the religion of our Prophet Muhammad, and upon the way of our father Ibrahim — as a true monotheist — and he was not among the polytheists.",
    source_book: "Musnad Ahmad",
    hadith_number: "14718",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["morning", "waking-up", "fitrah", "islam", "iman", "ibrahim", "ikhlas", "dawn", "adhkar", "day-start"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 215,
    slug: "dua-for-good-in-this-day-and-after",
    title: "Dua for Good in This Day and Everything That Follows",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ",
    transliteration:
      "Allahumma inni as'aluka khayra hadhal-yawmi wa khayra ma ba'dahu wa a'udhu bika min sharri hadhal-yawmi wa sharri ma ba'dahu",
    translation:
      "O Allah, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it.",
    source_book: "Sahih Muslim",
    hadith_number: "2723",
    authenticity_grade: "SAHIH",
    category: "morning-evening",
    emotion_tags: ["hopeful", "grateful", "afraid"],
    situation_tags: ["morning", "day", "daily", "protection", "good-day", "evening", "future", "adhkar", "new-day", "safety"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 216,
    slug: "dua-for-protection-from-enemies",
    title: "Dua for Protection When Facing an Enemy or Threat",
    arabic_text:
      "اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِمْ وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ",
    transliteration:
      "Allahumma inna naj'aluka fi nuhurihim wa na'udhu bika min shururihim",
    translation:
      "O Allah, we place You before them and seek refuge in You from their evil.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1537",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["enemy", "threat", "danger", "harm", "evil-people", "confrontation", "oppressor", "crisis", "fear", "protection"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 218,
    slug: "dua-of-ibrahim-and-ismail-for-ummah",
    title: "Dua of Ibrahim and Ismail for a Muslim Ummah",
    arabic_text:
      "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
    transliteration:
      "Rabbana waj'alna muslimayni laka wa min dhurriyyatina ummatan muslimatan laka wa arina manasikana wa tub 'alayna innaka antat-tawwabur-rahim",
    translation:
      "Our Lord, make us both submissive to You, and from our descendants a community submissive to You. Show us our rites of worship and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.",
    source_book: "Quran",
    hadith_number: "2:128",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "seeking-forgiveness", "grateful"],
    situation_tags: ["ummah", "offspring", "family", "descendants", "islam", "hajj", "submission", "tawbah", "prophet-ibrahim", "ismail"],
    featured: false,
    daily_dua_eligible: true,
  },
  // ─── BATCH 4 (IDs 220–279) — Qur'an: Quran.com (Sahih International) · Hadith duas: Sunnah.com ───
  {
    id: 220,
    slug: "dua-rabbana-innana-amanna-faghfir-lana",
    title: "Dua of the Believers for Forgiveness and Safety from the Fire",
    arabic_text:
      "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana innana amanna faghfir lana dhunubana wa qina 'adhaban-nar",
    translation:
      "Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire.",
    source_book: "Quran",
    hadith_number: "3:16",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "afraid", "hopeful"],
    situation_tags: ["forgiveness", "maghfirah", "iman", "belief", "hellfire", "protection", "rabbana", "istighfar", "sins"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 221,
    slug: "dua-rabbana-amanna-bima-anzalta",
    title: "Dua of the Disciples to Be Counted Among the Witnesses",
    arabic_text:
      "رَبَّنَا آمَنَّا بِمَا أَنزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
    transliteration:
      "Rabbana amanna bima anzalta wattaba'nar-rasula faktubna ma'ash-shahidin",
    translation:
      "Our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses [to truth].",
    source_book: "Quran",
    hadith_number: "3:53",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["iman", "belief", "following-the-messenger", "witnesses", "hawariyyun", "isa", "steadfastness", "rabbana"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 222,
    slug: "dua-rabbanaghfir-lana-dhunubana-wa-israfana",
    title: "Dua for Forgiveness of Sins and Excesses in Our Affairs",
    arabic_text:
      "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbanaghfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
    translation:
      "Our Lord, forgive us our sins and the excess [committed] in our affairs, and plant firmly our feet and give us victory over the disbelieving people.",
    source_book: "Quran",
    hadith_number: "3:147",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "stressed", "hopeful"],
    situation_tags: ["forgiveness", "excess", "israf", "firmness", "victory", "steadfastness", "istighfar", "rabbana", "mistakes"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 223,
    slug: "dua-rabbana-ma-khalaqta-hadha-batilan",
    title: "Dua When Reflecting on the Creation of the Heavens and Earth",
    arabic_text:
      "رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana ma khalaqta hadha batilan subhanaka faqina 'adhaban-nar",
    translation:
      "Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire.",
    source_book: "Quran",
    hadith_number: "3:191",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "afraid", "hopeful"],
    situation_tags: ["reflection", "tafakkur", "creation", "night-sky", "nature", "hellfire", "tasbih", "ulul-albab", "stars"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 224,
    slug: "dua-rabbana-innana-samina-munadiyan",
    title: "Dua to Die Among the Righteous",
    arabic_text:
      "رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ",
    transliteration:
      "Rabbana innana sami'na munadiyan yunadi lil-imani an aminu birabbikum fa-amanna. Rabbana faghfir lana dhunubana wa kaffir 'anna sayyi'atina wa tawaffana ma'al-abrar",
    translation:
      "Our Lord, indeed we have heard a caller calling to faith, [saying], 'Believe in your Lord,' and we have believed. Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die among the righteous.",
    source_book: "Quran",
    hadith_number: "3:193",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["good-ending", "husn-al-khatimah", "death", "righteous", "abrar", "forgiveness", "sins", "iman", "rabbana"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 225,
    slug: "dua-rabbana-wa-atina-ma-waadtana",
    title: "Dua Not to Be Disgraced on the Day of Resurrection",
    arabic_text:
      "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ",
    transliteration:
      "Rabbana wa atina ma wa'adtana 'ala rusulika wa la tukhzina yawmal-qiyamah, innaka la tukhliful-mi'ad",
    translation:
      "Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in [Your] promise.",
    source_book: "Quran",
    hadith_number: "3:194",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "afraid"],
    situation_tags: ["day-of-judgement", "qiyamah", "akhirah", "promise", "jannah", "honour", "rabbana", "hereafter"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 226,
    slug: "dua-rabbi-hab-li-min-ladunka-dhurriyyatan-tayyibah",
    title: "Dua for Pure and Righteous Offspring (Rabbi Hab Li Min Ladunka)",
    arabic_text:
      "رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ",
    transliteration:
      "Rabbi hab li min ladunka dhurriyyatan tayyibatan innaka sami'ud-du'a",
    translation:
      "My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.",
    source_book: "Quran",
    hadith_number: "3:38",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "lonely"],
    situation_tags: ["children", "offspring", "pregnancy", "fertility", "conceive", "baby", "zakariyya", "family", "righteous-children"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 227,
    slug: "dua-rabbana-afrigh-alayna-sabran-wa-tawaffana-muslimin",
    title: "Dua for Patience and to Die as a Muslim",
    arabic_text:
      "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
    transliteration:
      "Rabbana afrigh 'alayna sabran wa tawaffana muslimin",
    translation:
      "Our Lord, pour upon us patience and let us die as Muslims [in submission to You].",
    source_book: "Quran",
    hadith_number: "7:126",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "afraid", "hopeful"],
    situation_tags: ["patience", "sabr", "good-ending", "death", "muslim", "persecution", "trial", "steadfastness", "firaun"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 228,
    slug: "dua-of-musa-for-himself-and-his-brother",
    title: "Dua of Prophet Musa for Himself and His Brother",
    arabic_text:
      "رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration:
      "Rabbighfir li wa li-akhi wa adkhilna fi rahmatika wa anta arhamur-rahimin",
    translation:
      "My Lord, forgive me and my brother and admit us into Your mercy, for You are the most merciful of the merciful.",
    source_book: "Quran",
    hadith_number: "7:151",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["brother", "sibling", "forgiveness", "mercy", "rahmah", "musa", "harun", "family", "istighfar"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 229,
    slug: "dua-anta-waliyyuna-faghfir-lana",
    title: "Dua — You Are Our Protector, So Forgive Us",
    arabic_text:
      "أَنتَ وَلِيُّنَا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الْغَافِرِينَ",
    transliteration:
      "Anta waliyyuna faghfir lana warhamna wa anta khayrul-ghafirin",
    translation:
      "You are our Protector, so forgive us and have mercy upon us; and You are the best of forgivers.",
    source_book: "Quran",
    hadith_number: "7:155",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "afraid"],
    situation_tags: ["forgiveness", "mercy", "protector", "wali", "musa", "istighfar", "rahmah", "maghfirah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 230,
    slug: "dua-rabbana-la-tajalna-maal-qawmidh-dhalimin",
    title: "Dua Not to Be Placed With the Wrongdoers",
    arabic_text:
      "رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
    transliteration:
      "Rabbana la taj'alna ma'al-qawmidh-dhalimin",
    translation:
      "Our Lord, do not place us with the wrongdoing people.",
    source_book: "Quran",
    hadith_number: "7:47",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "seeking-forgiveness"],
    situation_tags: ["wrongdoers", "dhalimin", "hellfire", "company", "akhirah", "protection", "rabbana", "araf"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 231,
    slug: "dua-rabbanaftah-baynana-bil-haqq",
    title: "Dua of Shu'ayb for Judgement in Truth",
    arabic_text:
      "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
    transliteration:
      "Rabbanaftah baynana wa bayna qawmina bil-haqqi wa anta khayrul-fatihin",
    translation:
      "Our Lord, decide between us and our people in truth, and You are the best of those who give decision.",
    source_book: "Quran",
    hadith_number: "7:89",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "hopeful"],
    situation_tags: ["dispute", "conflict", "justice", "truth", "haqq", "shuayb", "opposition", "decision", "rabbana"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 232,
    slug: "dua-rabbana-la-tajalna-fitnatan-lil-qawmidh-dhalimin",
    title: "Dua for Rescue From Oppressive People",
    arabic_text:
      "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbana la taj'alna fitnatan lil-qawmidh-dhalimin, wa najjina birahmatika minal-qawmil-kafirin",
    translation:
      "Our Lord, make us not [objects of] trial for the wrongdoing people, and save us by Your mercy from the disbelieving people.",
    source_book: "Quran",
    hadith_number: "10:85-86",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["oppression", "persecution", "injustice", "rescue", "fitnah", "mercy", "musa", "bani-israil", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 233,
    slug: "dua-of-nuh-for-forgiveness-and-mercy",
    title: "Dua of Prophet Nuh for Forgiveness and Mercy",
    arabic_text:
      "رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُن مِّنَ الْخَاسِرِينَ",
    transliteration:
      "Rabbi inni a'udhu bika an as'alaka ma laysa li bihi 'ilm, wa illa taghfir li wa tarhamni akun minal-khasirin",
    translation:
      "My Lord, I seek refuge in You from asking that of which I have no knowledge. And unless You forgive me and have mercy upon me, I will be among the losers.",
    source_book: "Quran",
    hadith_number: "11:47",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad", "afraid"],
    situation_tags: ["nuh", "forgiveness", "mercy", "humility", "loss", "grief", "son", "istighfar", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 234,
    slug: "dua-of-yusuf-to-die-as-a-muslim",
    title: "Dua of Prophet Yusuf to Die as a Muslim and Join the Righteous",
    arabic_text:
      "رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِن تَأْوِيلِ الْأَحَادِيثِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
    transliteration:
      "Rabbi qad ataytani minal-mulki wa 'allamtani min ta'wilil-ahadith, fatiras-samawati wal-ard, anta waliyyi fid-dunya wal-akhirah, tawaffani musliman wa alhiqni bis-salihin",
    translation:
      "My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous.",
    source_book: "Quran",
    hadith_number: "12:101",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["yusuf", "good-ending", "death", "righteous", "gratitude", "success", "dreams", "wali", "akhirah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 235,
    slug: "dua-rabbi-adkhilni-mudkhala-sidq",
    title: "Dua for a Truthful Entrance and Exit",
    arabic_text:
      "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا",
    transliteration:
      "Rabbi adkhilni mudkhala sidqin wa akhrijni mukhraja sidqin waj'al li min ladunka sultanan nasira",
    translation:
      "My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority.",
    source_book: "Quran",
    hadith_number: "17:80",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["new-beginning", "new-job", "moving", "hijrah", "truthfulness", "support", "success", "transition", "interview"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 236,
    slug: "dua-rabbi-anzilni-munzalan-mubarakan",
    title: "Dua for a Blessed Place to Settle",
    arabic_text:
      "رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ",
    transliteration:
      "Rabbi anzilni munzalan mubarakan wa anta khayrul-munzilin",
    translation:
      "My Lord, let me land at a blessed landing place, and You are the best to accommodate [us].",
    source_book: "Quran",
    hadith_number: "23:29",
    authenticity_grade: "QURAN",
    category: "travel",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["new-home", "moving-house", "arrival", "landing", "flight", "nuh", "barakah", "settling", "relocation"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 237,
    slug: "dua-rabbighfir-warham-wa-anta-khayrur-rahimin",
    title: "Dua for Forgiveness and Mercy — Rabbighfir Warham",
    arabic_text:
      "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
    transliteration:
      "Rabbighfir warham wa anta khayrur-rahimin",
    translation:
      "My Lord, forgive and have mercy, and You are the best of the merciful.",
    source_book: "Quran",
    hadith_number: "23:118",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "sad"],
    situation_tags: ["forgiveness", "mercy", "rahmah", "istighfar", "short-dua", "al-muminun", "maghfirah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 238,
    slug: "dua-rabbanasrif-anna-adhaba-jahannam",
    title: "Dua of the Servants of the Most Merciful Against Hellfire",
    arabic_text:
      "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا",
    transliteration:
      "Rabbanasrif 'anna 'adhaba jahannam, inna 'adhabaha kana gharama, innaha sa'at mustaqarran wa muqama",
    translation:
      "Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering; indeed, it is evil as a settlement and residence.",
    source_book: "Quran",
    hadith_number: "25:65-66",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "seeking-forgiveness"],
    situation_tags: ["hellfire", "jahannam", "protection", "ibad-ur-rahman", "night-prayer", "akhirah", "punishment", "rabbana"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 239,
    slug: "dua-of-musa-rabbi-inni-zalamtu-nafsi",
    title: "Dua of Prophet Musa — I Have Wronged Myself, So Forgive Me",
    arabic_text:
      "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
    transliteration:
      "Rabbi inni zalamtu nafsi faghfir li",
    translation:
      "My Lord, indeed I have wronged myself, so forgive me.",
    source_book: "Quran",
    hadith_number: "28:16",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad"],
    situation_tags: ["musa", "forgiveness", "mistake", "regret", "guilt", "tawbah", "istighfar", "short-dua", "sin"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 240,
    slug: "dua-of-lut-for-support-against-corruption",
    title: "Dua of Prophet Lut for Support Against Corruption",
    arabic_text:
      "رَبِّ انصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ",
    transliteration:
      "Rabbinsurni 'alal-qawmil-mufsidin",
    translation:
      "My Lord, support me against the corrupting people.",
    source_book: "Quran",
    hadith_number: "29:30",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["stressed", "afraid"],
    situation_tags: ["lut", "corruption", "evil", "support", "victory", "injustice", "help", "short-dua", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 241,
    slug: "dua-of-angels-for-believers-and-their-families",
    title: "The Angels' Dua for Believers and Their Families to Enter Paradise",
    arabic_text:
      "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدتَّهُمْ وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ وَقِهِمُ السَّيِّئَاتِ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ وَذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
    transliteration:
      "Rabbana wa adkhilhum jannati 'adninil-lati wa'adtahum wa man salaha min aba'ihim wa azwajihim wa dhurriyyatihim, innaka antal-'azizul-hakim. Wa qihimus-sayyi'at, wa man taqis-sayyi'ati yawma'idhin faqad rahimtah, wa dhalika huwal-fawzul-'azim",
    translation:
      "Our Lord, and admit them to gardens of perpetual residence which You have promised them and whoever was righteous among their forefathers, their spouses and their offspring. Indeed, it is You who is the Exalted in Might, the Wise. And protect them from the evil consequences [of their deeds]. And he whom You protect from evil consequences that Day — You will have given him mercy. And that is the great attainment.",
    source_book: "Quran",
    hadith_number: "40:8-9",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["family", "jannah", "paradise", "spouses", "children", "parents", "angels", "mercy", "reunion"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 242,
    slug: "dua-for-believers-who-came-before-us",
    title: "Dua for Our Brothers in Faith and a Heart Free of Resentment",
    arabic_text:
      "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ",
    transliteration:
      "Rabbanaghfir lana wa li-ikhwaninal-ladhina sabaquna bil-imani wa la taj'al fi qulubina ghillan lilladhina amanu, rabbana innaka ra'ufur-rahim",
    translation:
      "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.",
    source_book: "Quran",
    hadith_number: "59:10",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["angry", "seeking-forgiveness", "hopeful"],
    situation_tags: ["ummah", "brotherhood", "resentment", "grudge", "ghill", "pure-heart", "deceased", "forgiveness", "sahabah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 243,
    slug: "dua-rabbana-alayka-tawakkalna",
    title: "Dua of Reliance — Our Lord, Upon You We Rely",
    arabic_text:
      "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Rabbana 'alayka tawakkalna wa ilayka anabna wa ilaykal-masir",
    translation:
      "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.",
    source_book: "Quran",
    hadith_number: "60:4",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "hopeful"],
    situation_tags: ["tawakkul", "reliance", "trust", "ibrahim", "return", "inabah", "rabbana", "anxiety", "uncertainty"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 244,
    slug: "dua-rabbana-atmim-lana-nurana",
    title: "Dua for Perfected Light on the Day of Judgement",
    arabic_text:
      "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Rabbana atmim lana nurana waghfir lana, innaka 'ala kulli shay'in qadir",
    translation:
      "Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.",
    source_book: "Quran",
    hadith_number: "66:8",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["light", "nur", "day-of-judgement", "sirat", "tawbah", "forgiveness", "akhirah", "rabbana"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 245,
    slug: "dua-of-asiya-for-a-house-in-jannah",
    title: "Dua of Asiya for a House Near Allah in Paradise",
    arabic_text:
      "رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِن فِرْعَوْنَ وَعَمَلِهِ وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
    transliteration:
      "Rabbibni li 'indaka baytan fil-jannati wa najjini min Fir'awna wa 'amalihi wa najjini minal-qawmidh-dhalimin",
    translation:
      "My Lord, build for me near You a house in Paradise and save me from Pharaoh and his deeds and save me from the wrongdoing people.",
    source_book: "Quran",
    hadith_number: "66:11",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["afraid", "hopeful", "lonely"],
    situation_tags: ["asiya", "women", "jannah", "house-in-paradise", "oppression", "abuse", "patience", "firaun", "rescue"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 246,
    slug: "dua-samina-wa-atana-ghufranaka-rabbana",
    title: "Sami'na wa Ata'na — We Hear and Obey, Your Forgiveness Our Lord",
    arabic_text:
      "سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Sami'na wa ata'na ghufranaka rabbana wa ilaykal-masir",
    translation:
      "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.",
    source_book: "Quran",
    hadith_number: "2:285",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["obedience", "submission", "forgiveness", "al-baqarah", "ghufranak", "iman", "rabbana", "night"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 247,
    slug: "dua-allahumma-malikal-mulk",
    title: "Allahumma Malikal-Mulk — Dua Affirming Allah's Sovereignty",
    arabic_text:
      "اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Allahumma malikal-mulki tu'til-mulka man tasha'u wa tanzi'ul-mulka mimman tasha'u wa tu'izzu man tasha'u wa tudhillu man tasha', biyadikal-khayr, innaka 'ala kulli shay'in qadir",
    translation:
      "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honour whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.",
    source_book: "Quran",
    hadith_number: "3:26",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "stressed", "grateful"],
    situation_tags: ["sovereignty", "power", "honour", "success", "career", "authority", "qadr", "praise", "tawakkul"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 248,
    slug: "dua-for-rectifying-religion-world-and-hereafter",
    title: "Dua for Rectifying Your Religion, Worldly Life and Hereafter",
    arabic_text:
      "اللَّهُمَّ أَصْلِحْ لِي دِينِيَ الَّذِي هُوَ عِصْمَةُ أَمْرِي وَأَصْلِحْ لِي دُنْيَاىَ الَّتِي فِيهَا مَعَاشِي وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ",
    transliteration:
      "Allahumma aslih li diniyal-ladhi huwa 'ismatu amri, wa aslih li dunyayal-lati fiha ma'ashi, wa aslih li akhiratiyal-lati fiha ma'adi, waj'alil-hayata ziyadatan li fi kulli khayr, waj'alil-mawta rahatan li min kulli sharr",
    translation:
      "O Allah, set right for me my religion, which is the safeguard of my affairs; set right for me my worldly life, wherein is my livelihood; and set right for me my Hereafter, to which is my return. Make life an increase for me in every good, and make death a relief for me from every evil.",
    source_book: "Sahih Muslim",
    hadith_number: "2720",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["deen", "dunya", "akhirah", "life", "death", "comprehensive-dua", "balance", "islah", "wellbeing"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 249,
    slug: "dua-against-loss-of-allahs-blessings",
    title: "Dua Against the Loss of Allah's Blessings",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ",
    transliteration:
      "Allahumma inni a'udhu bika min zawali ni'matika, wa tahawwuli 'afiyatika, wa fuja'ati niqmatika, wa jami'i sakhatik",
    translation:
      "O Allah, I seek refuge in You from the withdrawal of Your blessing, from the change of Your protection, from the suddenness of Your punishment, and from all of Your displeasure.",
    source_book: "Sahih Muslim",
    hadith_number: "2739",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "grateful"],
    situation_tags: ["blessings", "nimah", "afiyah", "wellbeing", "sudden-calamity", "gratitude", "refuge", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 250,
    slug: "dua-refuge-from-evil-of-what-i-did-and-did-not-do",
    title: "Dua Seeking Refuge From the Evil of One's Own Deeds",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ",
    transliteration:
      "Allahumma inni a'udhu bika min sharri ma 'amiltu wa min sharri ma lam a'mal",
    translation:
      "O Allah, I seek refuge in You from the evil of what I have done and from the evil of what I have not done.",
    source_book: "Sahih Muslim",
    hadith_number: "2716",
    authenticity_grade: "SAHIH",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "afraid"],
    situation_tags: ["deeds", "consequences", "refuge", "sins", "accountability", "aisha", "short-dua", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 251,
    slug: "dua-allahummahdini-wa-saddidni",
    title: "Allahummahdini wa Saddidni — Dua for Guidance and Staying on Course",
    arabic_text:
      "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
    transliteration:
      "Allahummahdini wa saddidni",
    translation:
      "O Allah, guide me and keep me on the right course.",
    source_book: "Sahih Muslim",
    hadith_number: "2725",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["guidance", "hidayah", "decision", "direction", "short-dua", "ali", "sadad", "straight-path"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 252,
    slug: "dua-rabbighfir-li-khatiati-wa-jahli",
    title: "Dua for Forgiveness of Mistakes, Ignorance and Excess",
    arabic_text:
      "رَبِّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي وَإِسْرَافِي فِي أَمْرِي كُلِّهِ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، اللَّهُمَّ اغْفِرْ لِي خَطَايَاىَ وَعَمْدِي وَجَهْلِي وَهَزْلِي، وَكُلُّ ذَلِكَ عِنْدِي، اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ، وَأَنْتَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ",
    transliteration:
      "Rabbighfir li khati'ati wa jahli wa israfi fi amri kullihi, wa ma anta a'lamu bihi minni. Allahummaghfir li khatayaya wa 'amdi wa jahli wa hazli, wa kullu dhalika 'indi. Allahummaghfir li ma qaddamtu wa ma akhkhartu wa ma asrartu wa ma a'lantu, antal-muqaddimu wa antal-mu'akhkhiru wa anta 'ala kulli shay'in qadir",
    translation:
      "My Lord, forgive me my sins, my ignorance and my excess in all my affairs, and what You know better than I. O Allah, forgive me my mistakes, what I did deliberately, my ignorance and my jesting — all of that is in me. O Allah, forgive me what I have done before and what I have left for later, what I have concealed and what I have done openly. You are the One who brings forward and the One who puts back, and You are over all things competent.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6398",
    authenticity_grade: "SAHIH",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad"],
    situation_tags: ["forgiveness", "mistakes", "ignorance", "excess", "istighfar", "comprehensive", "sins", "tawbah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 253,
    slug: "dua-allahummaqsim-lana-min-khashyatik",
    title: "Dua for Fear of Allah, Obedience and Certainty",
    arabic_text:
      "اللَّهُمَّ اقْسِمْ لَنَا مِنْ خَشْيَتِكَ مَا يَحُولُ بَيْنَنَا وَبَيْنَ مَعَاصِيكَ وَمِنْ طَاعَتِكَ مَا تُبَلِّغُنَا بِهِ جَنَّتَكَ وَمِنَ الْيَقِينِ مَا تُهَوِّنُ بِهِ عَلَيْنَا مُصِيبَاتِ الدُّنْيَا وَمَتِّعْنَا بِأَسْمَاعِنَا وَأَبْصَارِنَا وَقُوَّتِنَا مَا أَحْيَيْتَنَا وَاجْعَلْهُ الْوَارِثَ مِنَّا وَاجْعَلْ ثَأْرَنَا عَلَى مَنْ ظَلَمَنَا وَانْصُرْنَا عَلَى مَنْ عَادَانَا وَلاَ تَجْعَلْ مُصِيبَتَنَا فِي دِينِنَا وَلاَ تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا وَلاَ مَبْلَغَ عِلْمِنَا وَلاَ تُسَلِّطْ عَلَيْنَا مَنْ لاَ يَرْحَمُنَا",
    transliteration:
      "Allahummaqsim lana min khashyatika ma yahulu baynana wa bayna ma'asika, wa min ta'atika ma tuballighuna bihi jannatak, wa minal-yaqini ma tuhawwinu bihi 'alayna musibatid-dunya, wa matti'na bi-asma'ina wa absarina wa quwwatina ma ahyaytana, waj'alhul-waritha minna, waj'al tha'rana 'ala man zalamana, wansurna 'ala man 'adana, wa la taj'al musibatana fi dinina, wa la taj'alid-dunya akbara hammina wa la mablagha 'ilmina, wa la tusallit 'alayna man la yarhamuna",
    translation:
      "O Allah, apportion for us such fear of You as will come between us and disobedience to You; such obedience to You as will bring us to Your Paradise; and such certainty as will make the calamities of this world easy for us. Let us enjoy our hearing, our sight and our strength for as long as You keep us alive, and make that the inheritor from us. Let our vengeance be upon those who wronged us, and aid us against those who show enmity to us. Do not let our calamity be in our religion, do not make this world our greatest concern nor the limit of our knowledge, and do not give power over us to those who will not have mercy on us.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3502",
    authenticity_grade: "SAHIH",
    graded_by: "Darussalam",
    category: "worship",
    emotion_tags: ["afraid", "hopeful", "stressed"],
    situation_tags: ["taqwa", "khashyah", "yaqin", "certainty", "health", "end-of-gathering", "dunya", "calamity", "comprehensive-dua"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 254,
    slug: "dua-allahumma-fatiras-samawati-morning-evening",
    title: "Morning, Evening and Bedtime Dua Taught to Abu Bakr",
    arabic_text:
      "اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ رَبَّ كُلِّ شَىْءٍ وَمَلِيكَهُ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ",
    transliteration:
      "Allahumma fatiras-samawati wal-ard, 'alimal-ghaybi wash-shahadah, rabba kulli shay'in wa malikah, ash-hadu an la ilaha illa ant, a'udhu bika min sharri nafsi wa sharrish-shaytani wa shirkih",
    translation:
      "O Allah, Creator of the heavens and the earth, Knower of the unseen and the seen, Lord and Sovereign of everything: I bear witness that there is no god but You. I seek refuge in You from the evil of my own self, and from the evil of Shaytan and his call to associate partners [with You].",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5067",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["morning-adhkar", "evening-adhkar", "before-sleep", "abu-bakr", "nafs", "shaytan", "shirk", "refuge", "adhkar"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 255,
    slug: "dua-bismika-rabbi-wadatu-janbi",
    title: "Bedtime Dua — In Your Name, My Lord, I Lay Down My Side",
    arabic_text:
      "بِاسْمِكَ رَبِّ وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
    transliteration:
      "Bismika Rabbi wada'tu janbi wa bika arfa'uh, in amsakta nafsi farhamha, wa in arsaltaha fahfazha bima tahfazu bihi 'ibadakas-salihin",
    translation:
      "In Your name, my Lord, I lay down my side, and by You I raise it. If You take my soul, have mercy on it; and if You send it back, protect it with that by which You protect Your righteous servants.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6320",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["lonely", "afraid", "hopeful"],
    situation_tags: ["before-sleep", "bedtime", "night", "sleep", "soul", "protection", "mercy", "sleeping"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 256,
    slug: "dua-before-sleep-relief-from-debt-and-poverty",
    title: "Bedtime Dua to the Lord of the Heavens for Relief From Debt and Poverty",
    arabic_text:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ رَبَّنَا وَرَبَّ كُلِّ شَىْءٍ فَالِقَ الْحَبِّ وَالنَّوَى وَمُنْزِلَ التَّوْرَاةِ وَالإِنْجِيلِ وَالْفُرْقَانِ أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَىْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ اللَّهُمَّ أَنْتَ الأَوَّلُ فَلَيْسَ قَبْلَكَ شَىْءٌ وَأَنْتَ الآخِرُ فَلَيْسَ بَعْدَكَ شَىْءٌ وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَىْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَىْءٌ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ",
    transliteration:
      "Allahumma rabbas-samawati wa rabbal-ardi wa rabbal-'arshil-'azim, rabbana wa rabba kulli shay', faliqal-habbi wan-nawa, wa munzilat-tawrati wal-injili wal-furqan, a'udhu bika min sharri kulli shay'in anta akhidhun binasiyatih. Allahumma antal-awwalu falaysa qablaka shay', wa antal-akhiru falaysa ba'daka shay', wa antaz-zahiru falaysa fawqaka shay', wa antal-batinu falaysa dunaka shay', iqdi 'annad-dayna wa aghnina minal-faqr",
    translation:
      "O Allah, Lord of the heavens, Lord of the earth and Lord of the Magnificent Throne, our Lord and Lord of everything; Splitter of the seed and the date-stone; Revealer of the Torah, the Injil and the Furqan: I seek refuge in You from the evil of everything whose forelock You hold. O Allah, You are the First, there is nothing before You; You are the Last, there is nothing after You; You are the Manifest, there is nothing above You; You are the Hidden, there is nothing beyond You. Settle our debt for us and free us from poverty.",
    source_book: "Sahih Muslim",
    hadith_number: "2713",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["stressed", "afraid", "hopeful"],
    situation_tags: ["before-sleep", "debt", "poverty", "financial-hardship", "names-of-allah", "al-awwal", "al-akhir", "bedtime", "rizq"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 257,
    slug: "dua-alhamdulillahil-ladhi-atamana-before-sleep",
    title: "Bedtime Dua of Gratitude for Food, Drink and Shelter",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَكَفَانَا وَآوَانَا فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَلاَ مُئْوِيَ",
    transliteration:
      "Alhamdu lillahil-ladhi at'amana wa saqana wa kafana wa awana, fakam mimman la kafiya lahu wa la mu'wi",
    translation:
      "All praise is for Allah who fed us, gave us drink, sufficed us and gave us shelter — for how many are there who have no one to suffice them and no one to give them shelter.",
    source_book: "Sahih Muslim",
    hadith_number: "2715",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["before-sleep", "gratitude", "shukr", "food", "shelter", "home", "alhamdulillah", "bedtime", "blessings"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 258,
    slug: "dua-rabbi-ainni-wa-la-tuin-alayya",
    title: "The Prophet's Comprehensive Dua for Help, Guidance and a Pure Heart",
    arabic_text:
      "رَبِّ أَعِنِّي وَلاَ تُعِنْ عَلَىَّ وَانْصُرْنِي وَلاَ تَنْصُرْ عَلَىَّ وَامْكُرْ لِي وَلاَ تَمْكُرْ عَلَىَّ وَاهْدِنِي وَيَسِّرِ الْهُدَى لِي وَانْصُرْنِي عَلَى مَنْ بَغَى عَلَىَّ رَبِّ اجْعَلْنِي لَكَ شَكَّارًا لَكَ ذَكَّارًا لَكَ رَهَّابًا لَكَ مِطْوَاعًا لَكَ مُخْبِتًا إِلَيْكَ أَوَّاهًا مُنِيبًا رَبِّ تَقَبَّلْ تَوْبَتِي وَاغْسِلْ حَوْبَتِي وَأَجِبْ دَعْوَتِي وَثَبِّتْ حُجَّتِي وَسَدِّدْ لِسَانِي وَاهْدِ قَلْبِي وَاسْلُلْ سَخِيمَةَ صَدْرِي",
    transliteration:
      "Rabbi a'inni wa la tu'in 'alayya, wansurni wa la tansur 'alayya, wamkur li wa la tamkur 'alayya, wahdini wa yassiril-huda li, wansurni 'ala man bagha 'alayya. Rabbij'alni laka shakkaran, laka dhakkaran, laka rahhaban, laka mitwa'an, laka mukhbitan, ilayka awwahan muniba. Rabbi taqabbal tawbati, waghsil hawbati, wa ajib da'wati, wa thabbit hujjati, wa saddid lisani, wahdi qalbi, waslul sakhimata sadri",
    translation:
      "My Lord, help me and do not help others against me; grant me victory and do not grant others victory over me; plan for me and do not plan against me; guide me and make guidance easy for me; and grant me victory over those who transgress against me. My Lord, make me ever-grateful to You, ever-remembering of You, ever-fearful of You, ever-obedient to You, humble before You, and oft-turning to You in repentance. My Lord, accept my repentance, wash away my sin, answer my supplication, make firm my proof, set right my tongue, guide my heart, and remove the rancour from my chest.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3551",
    authenticity_grade: "SAHIH",
    graded_by: "Darussalam",
    category: "worship",
    emotion_tags: ["hopeful", "stressed", "seeking-forgiveness"],
    situation_tags: ["comprehensive-dua", "guidance", "victory", "gratitude", "dhikr", "tawbah", "pure-heart", "help", "sincerity"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 259,
    slug: "dua-allahumma-bi-ilmikal-ghayb",
    title: "Dua for Life When Life Is Good and Death When Death Is Better",
    arabic_text:
      "اللَّهُمَّ بِعِلْمِكَ الْغَيْبَ وَقُدْرَتِكَ عَلَى الْخَلْقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْرًا لِي وَتَوَفَّنِي إِذَا عَلِمْتَ الْوَفَاةَ خَيْرًا لِي اللَّهُمَّ وَأَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ وَأَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الرِّضَا وَالْغَضَبِ وَأَسْأَلُكَ الْقَصْدَ فِي الْفَقْرِ وَالْغِنَى وَأَسْأَلُكَ نَعِيمًا لاَ يَنْفَدُ وَأَسْأَلُكَ قُرَّةَ عَيْنٍ لاَ تَنْقَطِعُ وَأَسْأَلُكَ الرِّضَاءَ بَعْدَ الْقَضَاءِ وَأَسْأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ وَأَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ وَالشَّوْقَ إِلَى لِقَائِكَ فِي غَيْرِ ضَرَّاءَ مُضِرَّةٍ وَلاَ فِتْنَةٍ مُضِلَّةٍ اللَّهُمَّ زَيِّنَّا بِزِينَةِ الإِيمَانِ وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ",
    transliteration:
      "Allahumma bi-'ilmikal-ghayba wa qudratika 'alal-khalqi ahyini ma 'alimtal-hayata khayran li, wa tawaffani idha 'alimtal-wafata khayran li. Allahumma wa as'aluka khashyataka fil-ghaybi wash-shahadah, wa as'aluka kalimatal-haqqi fir-rida wal-ghadab, wa as'alukal-qasda fil-faqri wal-ghina, wa as'aluka na'iman la yanfad, wa as'aluka qurrata 'aynin la tanqati', wa as'alukar-rida ba'dal-qada', wa as'aluka bardal-'ayshi ba'dal-mawt, wa as'aluka ladhdhatan-nazari ila wajhik, wash-shawqa ila liqa'ik, fi ghayri darra'a mudirratin wa la fitnatin mudillah. Allahumma zayyinna bi-zinatil-iman, waj'alna hudatan muhtadin",
    translation:
      "O Allah, by Your knowledge of the unseen and Your power over creation, keep me alive as long as You know life is good for me, and take me when You know death is better for me. O Allah, I ask You for fear of You in private and in public; I ask You for the word of truth in contentment and in anger; I ask You for moderation in poverty and in wealth; I ask You for a blessing that never ends and a joy that never ceases; I ask You for contentment after Your decree, and for a pleasant life after death; and I ask You for the delight of looking upon Your Face and longing to meet You, without harmful adversity or misguiding trial. O Allah, adorn us with the beauty of faith, and make us guides who are rightly guided.",
    source_book: "Sunan an-Nasa'i",
    hadith_number: "1305",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "worship",
    emotion_tags: ["hopeful", "stressed", "afraid"],
    situation_tags: ["life-and-death", "qadr", "contentment", "rida", "moderation", "truthfulness", "meeting-allah", "iman", "after-tashahhud"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 260,
    slug: "dua-by-allahs-greatest-name-al-ahad-as-samad",
    title: "Dua by Allah's Greatest Name — Al-Ahad, As-Samad",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنِّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ الأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    transliteration:
      "Allahumma inni as'aluka anni ash-hadu annaka antallahu la ilaha illa antal-ahadus-samad, alladhi lam yalid wa lam yulad wa lam yakun lahu kufuwan ahad",
    translation:
      "O Allah, I ask You, as I bear witness that You are Allah — there is no god but You — the One, the Self-Sufficient Master, who neither begets nor was begotten, and to whom no one is equal.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1493",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["ism-al-azam", "greatest-name", "names-of-allah", "al-ahad", "as-samad", "accepted-dua", "tawhid", "surah-ikhlas"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 261,
    slug: "dua-by-allahs-greatest-name-al-mannan",
    title: "Dua by Allah's Greatest Name — Al-Mannan, Dhul-Jalali wal-Ikram",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لاَ إِلَهَ إِلاَّ أَنْتَ الْمَنَّانُ بَدِيعُ السَّمَوَاتِ وَالأَرْضِ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ يَا حَىُّ يَا قَيُّومُ",
    transliteration:
      "Allahumma inni as'aluka bi-anna lakal-hamd, la ilaha illa antal-mannan, badi'us-samawati wal-ard, ya dhal-jalali wal-ikram, ya hayyu ya qayyum",
    translation:
      "O Allah, I ask You by virtue of the fact that all praise is Yours; there is no god but You, the Bestower of favours, Originator of the heavens and the earth. O Possessor of Majesty and Honour, O Ever-Living, O Self-Sustaining.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1495",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["ism-al-azam", "greatest-name", "names-of-allah", "al-mannan", "al-hayy", "al-qayyum", "accepted-dua", "praise"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 262,
    slug: "dua-allahu-allahu-rabbi-in-distress",
    title: "Dua in Distress — Allah, Allah Is My Lord",
    arabic_text:
      "اللَّهُ اللَّهُ رَبِّي لاَ أُشْرِكُ بِهِ شَيْئًا",
    transliteration:
      "Allahu Allahu rabbi la ushriku bihi shay'a",
    translation:
      "Allah, Allah is my Lord; I do not associate anything with Him.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1525",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["stressed", "sad", "afraid"],
    situation_tags: ["distress", "karb", "anxiety", "hardship", "tawhid", "short-dua", "asma-bint-umays", "grief", "panic"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 263,
    slug: "dua-allahumma-baid-bayni-wa-bayna-khatayaya",
    title: "Opening Prayer Dua — Distance Me From My Sins",
    arabic_text:
      "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَاىَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَاىَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
    transliteration:
      "Allahumma ba'id bayni wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib. Allahumma naqqini minal-khataya kama yunaqqath-thawbul-abyadu minad-danas. Allahummaghsil khatayaya bil-ma'i wath-thalji wal-barad",
    translation:
      "O Allah, distance me from my sins as You have distanced the East from the West. O Allah, cleanse me of sins as a white garment is cleansed of dirt. O Allah, wash away my sins with water, snow and hail.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "744",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["salah", "opening-dua", "istiftah", "purification", "sins", "forgiveness", "takbir", "prayer"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 264,
    slug: "dua-rising-from-ruku-mil-as-samawat",
    title: "Dua When Rising From Ruku — Praise Filling the Heavens and Earth",
    arabic_text:
      "اللَّهُمَّ رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَمِلْءَ الأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَىْءٍ بَعْدُ",
    transliteration:
      "Allahumma rabbana lakal-hamdu mil'as-samawati wa mil'al-ardi wa mil'a ma shi'ta min shay'in ba'd",
    translation:
      "O Allah, our Lord, to You belongs all praise — filling the heavens, filling the earth, and filling whatever else You will.",
    source_book: "Sahih Muslim",
    hadith_number: "476",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["salah", "ruku", "rising-from-ruku", "praise", "hamd", "prayer", "itidal", "alhamdulillah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 265,
    slug: "dua-rabbana-wa-lakal-hamd-hamdan-kathiran",
    title: "Rabbana wa Lakal-Hamd — The Praise the Angels Raced to Record",
    arabic_text:
      "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
    transliteration:
      "Rabbana wa lakal-hamdu hamdan kathiran tayyiban mubarakan fih",
    translation:
      "Our Lord, and to You belongs all praise — abundant, pure and blessed praise.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "799",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["salah", "rising-from-ruku", "praise", "hamd", "angels", "prayer", "alhamdulillah", "itidal"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 266,
    slug: "dhikr-subhanallahi-wa-bihamdihi-adada-khalqihi",
    title: "Subhanallahi wa Bihamdihi 'Adada Khalqihi — Dhikr That Outweighs Hours",
    arabic_text:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
    transliteration:
      "Subhanallahi wa bihamdihi 'adada khalqihi, wa rida nafsihi, wa zinata 'arshihi, wa midada kalimatih",
    translation:
      "Glory be to Allah and praise be to Him — as many times as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.",
    source_book: "Sahih Muslim",
    hadith_number: "2726",
    authenticity_grade: "SAHIH",
    category: "morning-evening",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["morning-adhkar", "tasbih", "dhikr", "juwayriyah", "after-fajr", "subhanallah", "reward", "remembrance"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 267,
    slug: "dua-refuge-from-overwhelming-debt-and-enemies",
    title: "Dua for Refuge From Overwhelming Debt and Enemies",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَغَلَبَةِ الْعَدُوِّ وَشَمَاتَةِ الأَعْدَاءِ",
    transliteration:
      "Allahumma inni a'udhu bika min ghalabatid-dayni wa ghalabatil-'aduwwi wa shamatatil-a'da'",
    translation:
      "O Allah, I seek refuge in You from being overwhelmed by debt, from being overpowered by an enemy, and from the gloating of enemies over my misfortune.",
    source_book: "Sunan an-Nasa'i",
    hadith_number: "5475",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "protection",
    emotion_tags: ["stressed", "afraid", "sad"],
    situation_tags: ["debt", "loans", "financial-stress", "enemies", "gloating", "oppression", "refuge", "rizq", "hardship"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 268,
    slug: "dua-refuge-from-poverty-and-humiliation",
    title: "Dua for Refuge From Poverty, Scarcity and Humiliation",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
    transliteration:
      "Allahumma inni a'udhu bika minal-faqri wal-qillati wadh-dhillah, wa a'udhu bika min an azlima aw uzlam",
    translation:
      "O Allah, I seek refuge in You from poverty, scarcity and humiliation, and I seek refuge in You from wronging others or being wronged.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1544",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["stressed", "afraid"],
    situation_tags: ["poverty", "financial-hardship", "humiliation", "injustice", "oppression", "rizq", "refuge", "dignity"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 269,
    slug: "dua-refuge-from-hunger-and-betrayal",
    title: "Dua for Refuge From Hunger and Betrayal",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُوعِ فَإِنَّهُ بِئْسَ الضَّجِيعُ وَأَعُوذُ بِكَ مِنَ الْخِيَانَةِ فَإِنَّهَا بِئْسَتِ الْبِطَانَةُ",
    transliteration:
      "Allahumma inni a'udhu bika minal-ju'i fa-innahu bi'sad-daji', wa a'udhu bika minal-khiyanati fa-innaha bi'satil-bitanah",
    translation:
      "O Allah, I seek refuge in You from hunger, for it is an evil bedfellow, and I seek refuge in You from betrayal, for it is an evil inner trait.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1547",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["hunger", "poverty", "betrayal", "treachery", "trust", "amanah", "refuge", "character"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 270,
    slug: "dua-refuge-from-evil-of-senses-and-heart",
    title: "Dua for Protection From the Evil of the Ears, Eyes, Tongue and Heart",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ سَمْعِي وَمِنْ شَرِّ بَصَرِي وَمِنْ شَرِّ لِسَانِي وَمِنْ شَرِّ قَلْبِي وَمِنْ شَرِّ مَنِيِّي",
    transliteration:
      "Allahumma inni a'udhu bika min sharri sam'i, wa min sharri basari, wa min sharri lisani, wa min sharri qalbi, wa min sharri maniyyi",
    translation:
      "O Allah, I seek refuge in You from the evil of my hearing, the evil of my sight, the evil of my tongue, the evil of my heart, and the evil of my desire.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1551",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["seeking-forgiveness", "afraid"],
    situation_tags: ["desires", "lust", "gaze", "tongue", "heart", "chastity", "self-control", "refuge", "temptation"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 271,
    slug: "dua-protection-from-serious-diseases",
    title: "Dua for Protection From Serious Diseases",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الأَسْقَامِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-barasi wal-jununi wal-judhami wa min sayyi'il-asqam",
    translation:
      "O Allah, I seek refuge in You from leprosy, madness, elephantiasis and from all evil diseases.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1554",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["illness", "disease", "health", "sickness", "mental-health", "protection", "shifa", "wellbeing", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 272,
    slug: "dua-allahumma-inni-asaluka-filal-khayrat",
    title: "Dua for Doing Good, Leaving Evil and Loving the Poor",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ وَتَرْكَ الْمُنْكَرَاتِ وَحُبَّ الْمَسَاكِينِ وَأَنْ تَغْفِرَ لِي وَتَرْحَمَنِي وَإِذَا أَرَدْتَ فِتْنَةَ قَوْمٍ فَتَوَفَّنِي غَيْرَ مَفْتُونٍ",
    transliteration:
      "Allahumma inni as'aluka fi'lal-khayrati wa tarkal-munkarati wa hubbal-masakin, wa an taghfira li wa tarhamani, wa idha aradta fitnata qawmin fatawaffani ghayra maftun",
    translation:
      "O Allah, I ask You for the doing of good deeds, the leaving of evil deeds, and love of the poor; and that You forgive me and have mercy on me. And if You intend a trial for people, take me [in death] without my being put to trial.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3235",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "worship",
    emotion_tags: ["hopeful", "afraid", "seeking-forgiveness"],
    situation_tags: ["good-deeds", "khayrat", "poor", "masakin", "fitnah", "trials", "forgiveness", "mercy", "righteousness"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 273,
    slug: "dhikr-taught-to-bedouin-allahu-akbar-kabira",
    title: "Words of Dhikr the Prophet Taught a Bedouin — Allahu Akbar Kabira",
    arabic_text:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا سُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَزِيزِ الْحَكِيمِ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lah, Allahu akbaru kabira, walhamdu lillahi kathira, subhanallahi rabbil-'alamin, la hawla wa la quwwata illa billahil-'azizil-hakim",
    translation:
      "There is no god but Allah, alone, without partner. Allah is the Greatest, most great; abundant praise be to Allah; glory be to Allah, Lord of the worlds; there is no might nor power except through Allah, the Almighty, the All-Wise.",
    source_book: "Sahih Muslim",
    hadith_number: "2696",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["dhikr", "takbir", "tahmid", "tasbih", "tahlil", "new-muslim", "remembrance", "praise"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 274,
    slug: "dua-ya-hayyu-ya-qayyum-birahmatika-astaghith",
    title: "Dua in Times of Distress — Ya Hayyu Ya Qayyum",
    arabic_text:
      "يَا حَىُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration:
      "Ya Hayyu ya Qayyum, bi-rahmatika astaghith",
    translation:
      "O Ever-Living, O Self-Sustaining, in Your mercy I seek relief.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3524",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "protection",
    emotion_tags: ["stressed", "sad", "afraid"],
    situation_tags: ["distress", "anxiety", "grief", "help", "al-hayy", "al-qayyum", "mercy", "short-dua", "istighathah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 275,
    slug: "dua-wajjahtu-wajhiya-opening-prayer",
    title: "Dua al-Istiftah — Wajjahtu Wajhiya (Opening of the Night Prayer)",
    arabic_text:
      "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِي وَنُسُكِي وَمَحْيَاىَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ اللَّهُمَّ أَنْتَ الْمَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ. أَنْتَ رَبِّي وَأَنَا عَبْدُكَ ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبِي جَمِيعًا إِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ وَاهْدِنِي لأَحْسَنِ الأَخْلاَقِ لاَ يَهْدِي لأَحْسَنِهَا إِلاَّ أَنْتَ وَاصْرِفْ عَنِّي سَيِّئَهَا لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ لَبَّيْكَ وَسَعْدَيْكَ وَالْخَيْرُ كُلُّهُ فِي يَدَيْكَ وَالشَّرُّ لَيْسَ إِلَيْكَ أَنَا بِكَ وَإِلَيْكَ تَبَارَكْتَ وَتَعَالَيْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    transliteration:
      "Wajjahtu wajhiya lilladhi fataras-samawati wal-arda hanifan wa ma ana minal-mushrikin. Inna salati wa nusuki wa mahyaya wa mamati lillahi rabbil-'alamin, la sharika lahu wa bidhalika umirtu wa ana minal-muslimin. Allahumma antal-maliku la ilaha illa ant, anta rabbi wa ana 'abduk, zalamtu nafsi wa'taraftu bidhanbi faghfir li dhunubi jami'an innahu la yaghfirudh-dhunuba illa ant, wahdini li-ahsanil-akhlaqi la yahdi li-ahsaniha illa ant, wasrif 'anni sayyi'aha la yasrifu 'anni sayyi'aha illa ant, labbayka wa sa'dayk, wal-khayru kulluhu fi yadayk, wash-sharru laysa ilayk, ana bika wa ilayk, tabarakta wa ta'alayt, astaghfiruka wa atubu ilayk",
    translation:
      "I have turned my face sincerely to the One who originated the heavens and the earth, and I am not of the polytheists. Indeed my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds; He has no partner. With this I have been commanded, and I am of the Muslims. O Allah, You are the King; there is no god but You. You are my Lord and I am Your servant. I have wronged myself and I acknowledge my sin, so forgive me all my sins, for none forgives sins but You. Guide me to the best of character — none guides to the best of it but You — and turn away from me its bad — none can turn away its bad from me but You. Here I am at Your service, at Your call; all good is in Your hands, and evil is not attributed to You. I exist by You and I turn to You. Blessed and Exalted are You. I seek Your forgiveness and I repent to You.",
    source_book: "Sahih Muslim",
    hadith_number: "771",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["salah", "istiftah", "opening-dua", "tahajjud", "night-prayer", "good-character", "forgiveness", "tawbah", "prayer"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 276,
    slug: "dua-protection-from-accidents-and-an-evil-death",
    title: "Dua for Protection From Accidents and an Evil Death",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَدْمِ وَأَعُوذُ بِكَ مِنَ التَّرَدِّي وَأَعُوذُ بِكَ مِنَ الْغَرَقِ وَالْحَرَقِ وَالْهَرَمِ وَأَعُوذُ بِكَ أَنْ يَتَخَبَّطَنِي الشَّيْطَانُ عِنْدَ الْمَوْتِ وَأَعُوذُ بِكَ أَنْ أَمُوتَ فِي سَبِيلِكَ مُدْبِرًا وَأَعُوذُ بِكَ أَنْ أَمُوتَ لَدِيغًا",
    transliteration:
      "Allahumma inni a'udhu bika minal-hadmi, wa a'udhu bika minat-taraddi, wa a'udhu bika minal-gharaqi wal-haraqi wal-haram, wa a'udhu bika an yatakhabbatanish-shaytanu 'indal-mawt, wa a'udhu bika an amuta fi sabilika mudbiran, wa a'udhu bika an amuta ladigha",
    translation:
      "O Allah, I seek refuge in You from being crushed by a collapsing building, and I seek refuge in You from falling from a height, and I seek refuge in You from drowning, burning and decrepit old age. I seek refuge in You from Shaytan confusing me at the time of death, I seek refuge in You from dying while fleeing from Your path, and I seek refuge in You from dying of a poisonous sting.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1552",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid"],
    situation_tags: ["accidents", "safety", "drowning", "fire", "old-age", "death", "good-ending", "shaytan", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 277,
    slug: "dua-for-a-traveller-zawwadakallahut-taqwa",
    title: "Dua for Someone Setting Out on a Journey — Zawwadakallahut-Taqwa",
    arabic_text:
      "زَوَّدَكَ اللَّهُ التَّقْوَى وَغَفَرَ ذَنْبَكَ وَيَسَّرَ لَكَ الْخَيْرَ حَيْثُمَا كُنْتَ",
    transliteration:
      "Zawwadakallahut-taqwa, wa ghafara dhanbak, wa yassara lakal-khayra haythuma kunt",
    translation:
      "May Allah give you taqwa as your provision, forgive your sins, and make good easy for you wherever you are.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3444",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "travel",
    emotion_tags: ["hopeful"],
    situation_tags: ["travel", "journey", "farewell", "traveller", "taqwa", "goodbye", "safar", "dua-for-others"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 278,
    slug: "dua-raditu-billahi-rabban",
    title: "Raditu Billahi Rabban — The Words That Make Paradise Due",
    arabic_text:
      "رَضِيتُ بِاللَّهِ رَبًّا وَبِالإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ رَسُولاً",
    transliteration:
      "Raditu billahi rabban, wa bil-islami dinan, wa bi-Muhammadin rasula",
    translation:
      "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad as my Messenger.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1529",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "morning-evening",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["morning-adhkar", "evening-adhkar", "contentment", "rida", "iman", "jannah", "shahada", "identity"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 279,
    slug: "dua-allahumma-khalaqta-nafsi-before-sleep",
    title: "Bedtime Dua — O Allah, You Created My Soul",
    arabic_text:
      "اللَّهُمَّ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا لَكَ مَمَاتُهَا وَمَحْيَاهَا إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
    transliteration:
      "Allahumma khalaqta nafsi wa anta tawaffaha, laka mamatuha wa mahyaha, in ahyaytaha fahfazha, wa in amattaha faghfir laha. Allahumma inni as'alukal-'afiyah",
    translation:
      "O Allah, You created my soul and You take it back. Its death and its life belong to You. If You keep it alive, protect it; and if You cause it to die, forgive it. O Allah, I ask You for well-being.",
    source_book: "Sahih Muslim",
    hadith_number: "2712",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["hopeful", "afraid", "lonely"],
    situation_tags: ["before-sleep", "bedtime", "soul", "afiyah", "wellbeing", "night", "death", "forgiveness", "sleep"],
    featured: false,
    daily_dua_eligible: true,
  },
  // ─── BATCH 5 (IDs 280–339) — Qur'an: Quran.com (Sahih International) · Hadith duas: Sunnah.com ───
  {
    id: 280,
    slug: "dua-rabbana-akhrijna-for-the-oppressed",
    title: "Dua of the Oppressed for Rescue and a Protector",
    arabic_text:
      "رَبَّنَا أَخْرِجْنَا مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا وَاجْعَل لَّنَا مِن لَّدُنكَ وَلِيًّا وَاجْعَل لَّنَا مِن لَّدُنكَ نَصِيرًا",
    transliteration:
      "Rabbana akhrijna min hadhihil-qaryatidh-dhalimi ahluha, waj'al lana min ladunka waliyya, waj'al lana min ladunka nasira",
    translation:
      "Our Lord, take us out of this city of oppressive people and appoint for us from Yourself a protector and appoint for us from Yourself a helper.",
    source_book: "Quran",
    hadith_number: "4:75",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["oppression", "persecution", "refugees", "rescue", "protector", "helper", "injustice", "rabbana"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 281,
    slug: "dua-rabbihkum-bil-haqq",
    title: "Dua — My Lord, Judge in Truth",
    arabic_text:
      "رَبِّ احْكُم بِالْحَقِّ وَرَبُّنَا الرَّحْمَٰنُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ",
    transliteration:
      "Rabbihkum bil-haqq, wa rabbunar-rahmanul-musta'anu 'ala ma tasifun",
    translation:
      "My Lord, judge [between us] in truth. And our Lord is the Most Merciful, the one whose help is sought against that which you describe.",
    source_book: "Quran",
    hadith_number: "21:112",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "angry"],
    situation_tags: ["justice", "truth", "false-accusation", "slander", "patience", "al-mustaan", "help", "dispute"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 282,
    slug: "dua-rabbi-fala-tajalni-fil-qawmidh-dhalimin",
    title: "Dua Not to Be Counted Among the Wrongdoers",
    arabic_text:
      "رَبِّ إِمَّا تُرِيَنِّي مَا يُوعَدُونَ رَبِّ فَلَا تَجْعَلْنِي فِي الْقَوْمِ الظَّالِمِينَ",
    transliteration:
      "Rabbi imma turiyanni ma yu'adun, rabbi fala taj'alni fil-qawmidh-dhalimin",
    translation:
      "My Lord, if You should show me that which they are promised, my Lord, then do not place me among the wrongdoing people.",
    source_book: "Quran",
    hadith_number: "23:93-94",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "seeking-forgiveness"],
    situation_tags: ["wrongdoers", "punishment", "protection", "righteous-company", "akhirah", "dhalimin"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 283,
    slug: "dua-of-lut-rabbi-najjini-wa-ahli",
    title: "Dua of Prophet Lut to Save Him and His Family",
    arabic_text:
      "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ",
    transliteration:
      "Rabbi najjini wa ahli mimma ya'malun",
    translation:
      "My Lord, save me and my family from [the consequence of] what they do.",
    source_book: "Quran",
    hadith_number: "26:169",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["family", "protection", "evil-environment", "children", "lut", "rescue", "corruption"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 284,
    slug: "dua-of-musa-never-to-support-criminals",
    title: "Dua of Prophet Musa — I Will Never Support the Wrongdoers",
    arabic_text:
      "رَبِّ بِمَا أَنْعَمْتَ عَلَيَّ فَلَنْ أَكُونَ ظَهِيرًا لِّلْمُجْرِمِينَ",
    transliteration:
      "Rabbi bima an'amta 'alayya falan akuna zahiran lil-mujrimin",
    translation:
      "My Lord, for the favour You bestowed upon me, I will never be an assistant to the criminals.",
    source_book: "Quran",
    hadith_number: "28:17",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "seeking-forgiveness"],
    situation_tags: ["gratitude", "integrity", "work", "injustice", "musa", "promise", "resolve"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 285,
    slug: "dua-of-musa-asa-rabbi-an-yahdiyani",
    title: "Dua of Prophet Musa Setting Out — Perhaps My Lord Will Guide Me",
    arabic_text:
      "عَسَىٰ رَبِّي أَن يَهْدِيَنِي سَوَاءَ السَّبِيلِ",
    transliteration:
      "'Asa rabbi an yahdiyani sawa'as-sabil",
    translation:
      "Perhaps my Lord will guide me to the sound way.",
    source_book: "Quran",
    hadith_number: "28:22",
    authenticity_grade: "QURAN",
    category: "travel",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["journey", "new-path", "guidance", "uncertainty", "musa", "career", "relocation", "hope"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 286,
    slug: "dua-wa-ufawwidu-amri-ilallah",
    title: "Wa Ufawwidu Amri Ilallah — I Entrust My Affair to Allah",
    arabic_text:
      "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ",
    transliteration:
      "Wa ufawwidu amri ilallah, innallaha basirun bil-'ibad",
    translation:
      "And I entrust my affair to Allah. Indeed, Allah is Seeing of [His] servants.",
    source_book: "Quran",
    hadith_number: "40:44",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "afraid", "hopeful"],
    situation_tags: ["tawakkul", "tafwid", "trust", "anxiety", "believer-of-firaun", "surrender", "reliance"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 287,
    slug: "dua-of-nuh-anni-maghlubun-fantasir",
    title: "Dua of Prophet Nuh — I Am Overpowered, So Help",
    arabic_text:
      "أَنِّي مَغْلُوبٌ فَانتَصِرْ",
    transliteration:
      "Anni maghlubun fantasir",
    translation:
      "Indeed, I am overpowered, so help.",
    source_book: "Quran",
    hadith_number: "54:10",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "sad", "afraid"],
    situation_tags: ["overwhelmed", "defeat", "help", "victory", "nuh", "short-dua", "hardship"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 288,
    slug: "dua-of-musa-subhanaka-tubtu-ilayk",
    title: "Dua of Prophet Musa — Glory Be to You, I Repent to You",
    arabic_text:
      "سُبْحَانَكَ تُبْتُ إِلَيْكَ وَأَنَا أَوَّلُ الْمُؤْمِنِينَ",
    transliteration:
      "Subhanaka tubtu ilayka wa ana awwalul-mu'minin",
    translation:
      "Exalted are You! I have repented to You, and I am the first of the believers.",
    source_book: "Quran",
    hadith_number: "7:143",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["tawbah", "repentance", "tasbih", "musa", "iman", "returning-to-allah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 289,
    slug: "dua-wa-ma-tawfiqi-illa-billah",
    title: "Wa Ma Tawfiqi Illa Billah — My Success Is Only Through Allah",
    arabic_text:
      "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
    transliteration:
      "Wa ma tawfiqi illa billah, 'alayhi tawakkaltu wa ilayhi unib",
    translation:
      "And my success is not but through Allah. Upon Him I have relied, and to Him I return.",
    source_book: "Quran",
    hadith_number: "11:88",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["tawfiq", "success", "exams", "work", "tawakkul", "shuayb", "humility", "inabah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 290,
    slug: "dua-fallahu-khayrun-hafiza",
    title: "Fallahu Khayrun Hafiza — Allah Is the Best Guardian",
    arabic_text:
      "فَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration:
      "Fallahu khayrun hafiza, wa huwa arhamur-rahimin",
    translation:
      "But Allah is the best guardian, and He is the most merciful of the merciful.",
    source_book: "Quran",
    hadith_number: "12:64",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["protection", "children", "travel", "guardian", "yaqub", "entrusting", "family", "safety"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 291,
    slug: "dua-innama-ashku-bathi-wa-huzni-ilallah",
    title: "Dua of Prophet Yaqub — I Complain of My Grief Only to Allah",
    arabic_text:
      "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ",
    transliteration:
      "Innama ashku bathi wa huzni ilallah",
    translation:
      "I only complain of my suffering and my grief to Allah.",
    source_book: "Quran",
    hadith_number: "12:86",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["sad", "lonely", "stressed"],
    situation_tags: ["grief", "sadness", "depression", "loss", "yaqub", "complaint", "sabr", "heartbreak"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 292,
    slug: "dua-fasabrun-jamil",
    title: "Fasabrun Jamil — Beautiful Patience",
    arabic_text:
      "فَصَبْرٌ جَمِيلٌ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ",
    transliteration:
      "Fasabrun jamil, wallahul-musta'anu 'ala ma tasifun",
    translation:
      "So patience is most fitting. And Allah is the one sought for help against that which you describe.",
    source_book: "Quran",
    hadith_number: "12:18",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["sad", "stressed", "angry"],
    situation_tags: ["sabr", "patience", "betrayal", "lies", "yaqub", "grief", "al-mustaan", "trial"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 293,
    slug: "dua-subhanaka-la-ilma-lana",
    title: "Dua of the Angels — We Have No Knowledge Except What You Taught Us",
    arabic_text:
      "سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ",
    transliteration:
      "Subhanaka la 'ilma lana illa ma 'allamtana, innaka antal-'alimul-hakim",
    translation:
      "Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise.",
    source_book: "Quran",
    hadith_number: "2:32",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["knowledge", "students", "exams", "humility", "angels", "learning", "study"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 294,
    slug: "dua-asa-an-yahdiyani-rabbi-rashada",
    title: "Dua for Guidance to What Is Nearer to Right Conduct",
    arabic_text:
      "عَسَىٰ أَن يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَٰذَا رَشَدًا",
    transliteration:
      "'Asa an yahdiyani rabbi li-aqraba min hadha rashada",
    translation:
      "Perhaps my Lord will guide me to what is nearer than this to right conduct.",
    source_book: "Quran",
    hadith_number: "18:24",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["guidance", "rushd", "decision", "forgetfulness", "in-sha-allah", "plans", "improvement"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 295,
    slug: "dua-alhamdulillahil-ladhi-lam-yattakhidh-walada",
    title: "Praise to Allah Who Has No Son and No Partner",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ وَلَمْ يَكُن لَّهُ وَلِيٌّ مِّنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيرًا",
    transliteration:
      "Alhamdu lillahil-ladhi lam yattakhidh waladan wa lam yakun lahu sharikun fil-mulki wa lam yakun lahu waliyyun minadh-dhulli wa kabbirhu takbira",
    translation:
      "Praise to Allah, who has not taken a son and has had no partner in [His] dominion and has no [need of a] protector out of weakness; and glorify Him with [great] glorification.",
    source_book: "Quran",
    hadith_number: "17:111",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["praise", "tawhid", "takbir", "hamd", "dhikr", "al-isra"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 296,
    slug: "dua-rabbana-innaka-talamu-ma-nukhfi",
    title: "Dua of Ibrahim — Our Lord, You Know What We Conceal",
    arabic_text:
      "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَىٰ عَلَى اللَّهِ مِن شَيْءٍ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
    transliteration:
      "Rabbana innaka ta'lamu ma nukhfi wa ma nu'lin, wa ma yakhfa 'alallahi min shay'in fil-ardi wa la fis-sama'",
    translation:
      "Our Lord, indeed You know what we conceal and what we declare, and nothing is hidden from Allah on the earth or in the heaven.",
    source_book: "Quran",
    hadith_number: "14:38",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "lonely", "stressed"],
    situation_tags: ["secrets", "sincerity", "ikhlas", "private-struggles", "ibrahim", "allah-knows"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 297,
    slug: "dua-of-yusuf-against-temptation",
    title: "Dua of Prophet Yusuf for Protection From Temptation",
    arabic_text:
      "رَبِّ السِّجْنُ أَحَبُّ إِلَيَّ مِمَّا يَدْعُونَنِي إِلَيْهِ وَإِلَّا تَصْرِفْ عَنِّي كَيْدَهُنَّ أَصْبُ إِلَيْهِنَّ وَأَكُن مِّنَ الْجَاهِلِينَ",
    transliteration:
      "Rabbis-sijnu ahabbu ilayya mimma yad'unani ilayh, wa illa tasrif 'anni kaydahunna asbu ilayhinna wa akun minal-jahilin",
    translation:
      "My Lord, prison is more to my liking than that to which they invite me. And if You do not avert from me their plan, I might incline toward them and [thus] be of the ignorant.",
    source_book: "Quran",
    hadith_number: "12:33",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "seeking-forgiveness"],
    situation_tags: ["temptation", "chastity", "haya", "youth", "yusuf", "desires", "self-control", "zina"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 298,
    slug: "dua-of-zakariyya-never-disappointed",
    title: "Dua of Prophet Zakariyya — I Have Never Been Disappointed in Calling You",
    arabic_text:
      "رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا",
    transliteration:
      "Rabbi inni wahanal-'azmu minni washta'alar-ra'su shayba, wa lam akun bidu'a'ika rabbi shaqiyya",
    translation:
      "My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, disappointed.",
    source_book: "Quran",
    hadith_number: "19:4",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "lonely"],
    situation_tags: ["old-age", "hope", "dua-accepted", "zakariyya", "weakness", "trust", "persistence"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 299,
    slug: "dua-waktub-lana-fi-hadhihid-dunya-hasanah",
    title: "Dua of Prophet Musa for Good in This World and the Hereafter",
    arabic_text:
      "وَاكْتُبْ لَنَا فِي هَٰذِهِ الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ إِنَّا هُدْنَا إِلَيْكَ",
    transliteration:
      "Waktub lana fi hadhihid-dunya hasanatan wa fil-akhirati inna hudna ilayk",
    translation:
      "And decree for us in this world [that which is] good and [also] in the Hereafter; indeed, we have turned back to You.",
    source_book: "Quran",
    hadith_number: "7:156",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["dunya", "akhirah", "goodness", "tawbah", "musa", "hasanah", "comprehensive"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 300,
    slug: "dua-of-ibrahim-for-his-family-at-the-kabah",
    title: "Dua of Ibrahim for His Family's Prayer and Provision",
    arabic_text:
      "رَبَّنَا إِنِّي أَسْكَنتُ مِن ذُرِّيَّتِي بِوَادٍ غَيْرِ ذِي زَرْعٍ عِندَ بَيْتِكَ الْمُحَرَّمِ رَبَّنَا لِيُقِيمُوا الصَّلَاةَ فَاجْعَلْ أَفْئِدَةً مِّنَ النَّاسِ تَهْوِي إِلَيْهِمْ وَارْزُقْهُم مِّنَ الثَّمَرَاتِ لَعَلَّهُمْ يَشْكُرُونَ",
    transliteration:
      "Rabbana inni askantu min dhurriyyati biwadin ghayri dhi zar'in 'inda baytikal-muharram, rabbana liyuqimus-salata faj'al af'idatan minan-nasi tahwi ilayhim warzuqhum minath-thamarati la'allahum yashkurun",
    translation:
      "Our Lord, I have settled some of my descendants in an uncultivated valley near Your sacred House, our Lord, that they may establish prayer. So make hearts among the people incline toward them and provide for them from the fruits that they might be grateful.",
    source_book: "Quran",
    hadith_number: "14:37",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["family", "children", "provision", "rizq", "ibrahim", "salah", "makkah", "love"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 301,
    slug: "dua-alhamdulillahil-ladhi-wahaba-li",
    title: "Ibrahim's Praise for the Gift of Children",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ",
    transliteration:
      "Alhamdu lillahil-ladhi wahaba li 'alal-kibari Isma'ila wa Ishaq, inna rabbi lasami'ud-du'a",
    translation:
      "Praise to Allah, who has granted to me in old age Ishmael and Isaac. Indeed, my Lord is the Hearer of supplication.",
    source_book: "Quran",
    hadith_number: "14:39",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["children", "gratitude", "new-baby", "ibrahim", "dua-answered", "parenthood"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 302,
    slug: "dua-hasbunallahu-sayutinallahu-min-fadlih",
    title: "Hasbunallah — Allah Will Give Us of His Bounty",
    arabic_text:
      "حَسْبُنَا اللَّهُ سَيُؤْتِينَا اللَّهُ مِن فَضْلِهِ وَرَسُولُهُ إِنَّا إِلَى اللَّهِ رَاغِبُونَ",
    transliteration:
      "Hasbunallahu sayu'tinallahu min fadlihi wa rasuluhu inna ilallahi raghibun",
    translation:
      "Sufficient for us is Allah; Allah will give us of His bounty, and [so will] His Messenger; indeed, we are desirous toward Allah.",
    source_book: "Quran",
    hadith_number: "9:59",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["rizq", "contentment", "rida", "sufficiency", "provision", "tawakkul", "hope"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 303,
    slug: "dua-of-hud-inni-tawakkaltu-alallah",
    title: "Dua of Prophet Hud — I Have Relied Upon Allah",
    arabic_text:
      "إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
    transliteration:
      "Inni tawakkaltu 'alallahi rabbi wa rabbikum, ma min dabbatin illa huwa akhidhun binasiyatiha, inna rabbi 'ala siratin mustaqim",
    translation:
      "Indeed, I have relied upon Allah, my Lord and your Lord. There is no creature but that He holds it by its forelock. Indeed, my Lord is on a path [that is] straight.",
    source_book: "Quran",
    hadith_number: "11:56",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["tawakkul", "courage", "fear", "hud", "opposition", "control", "reliance"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 304,
    slug: "dua-inil-hukmu-illa-lillah-alayhi-tawakkaltu",
    title: "Dua of Prophet Yaqub — Upon Him I Rely",
    arabic_text:
      "إِنِ الْحُكْمُ إِلَّا لِلَّهِ عَلَيْهِ تَوَكَّلْتُ وَعَلَيْهِ فَلْيَتَوَكَّلِ الْمُتَوَكِّلُونَ",
    transliteration:
      "Inil-hukmu illa lillah, 'alayhi tawakkaltu wa 'alayhi falyatawakkalil-mutawakkilun",
    translation:
      "The decision is only for Allah; upon Him I have relied, and upon Him let those who would rely [indeed] rely.",
    source_book: "Quran",
    hadith_number: "12:67",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["stressed", "afraid"],
    situation_tags: ["tawakkul", "qadr", "decree", "precautions", "yaqub", "children", "reliance"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 305,
    slug: "dua-huwa-rabbi-la-ilaha-illa-huwa",
    title: "Huwa Rabbi — He Is My Lord, Upon Him I Rely",
    arabic_text:
      "هُوَ رَبِّي لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ مَتَابِ",
    transliteration:
      "Huwa rabbi la ilaha illa huwa, 'alayhi tawakkaltu wa ilayhi matab",
    translation:
      "He is my Lord; there is no deity except Him. Upon Him I rely, and to Him is my return.",
    source_book: "Quran",
    hadith_number: "13:30",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["tawhid", "tawakkul", "tawbah", "return", "rabb", "faith", "reliance"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 306,
    slug: "dua-wa-ajiltu-ilayka-rabbi-litarda",
    title: "Wa 'Ajiltu Ilayka Rabbi Litarda — I Hastened to You to Please You",
    arabic_text:
      "وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ",
    transliteration:
      "Wa 'ajiltu ilayka rabbi litarda",
    translation:
      "And I hastened to You, my Lord, that You be pleased.",
    source_book: "Quran",
    hadith_number: "20:84",
    authenticity_grade: "QURAN",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["love-of-allah", "rida", "eagerness", "salah", "musa", "devotion", "short-dua"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 307,
    slug: "dua-of-ibrahim-he-who-created-me-guides-me",
    title: "Ibrahim's Words of Trust — He Who Created Me, Guides, Feeds and Heals Me",
    arabic_text:
      "الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ وَالَّذِي يُمِيتُنِي ثُمَّ يُحْيِينِ وَالَّذِي أَطْمَعُ أَن يَغْفِرَ لِي خَطِيئَتِي يَوْمَ الدِّينِ",
    transliteration:
      "Alladhi khalaqani fahuwa yahdin, walladhi huwa yut'imuni wa yasqin, wa idha maridtu fahuwa yashfin, walladhi yumituni thumma yuhyin, walladhi atma'u an yaghfira li khati'ati yawmad-din",
    translation:
      "Who created me, and He [it is who] guides me; and it is He who feeds me and gives me drink; and when I am ill, it is He who cures me; and who will cause me to die and then bring me to life; and who I aspire that He will forgive me my sin on the Day of Recompense.",
    source_book: "Quran",
    hadith_number: "26:78-82",
    authenticity_grade: "QURAN",
    category: "health",
    emotion_tags: ["grateful", "hopeful", "afraid"],
    situation_tags: ["illness", "healing", "shifa", "provision", "guidance", "ibrahim", "tawakkul", "sickness"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 308,
    slug: "dua-hadha-min-fadli-rabbi",
    title: "Hadha Min Fadli Rabbi — This Is From the Favour of My Lord",
    arabic_text:
      "هَٰذَا مِن فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ",
    transliteration:
      "Hadha min fadli rabbi liyabluwani a-ashkuru am akfur",
    translation:
      "This is from the favour of my Lord to test me whether I will be grateful or ungrateful.",
    source_book: "Quran",
    hadith_number: "27:40",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful"],
    situation_tags: ["gratitude", "success", "blessings", "test", "sulayman", "humility", "achievement"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 309,
    slug: "dua-alhamdulillahi-wa-salamun-ala-ibadihi",
    title: "Praise Be to Allah and Peace Upon His Chosen Servants",
    arabic_text:
      "الْحَمْدُ لِلَّهِ وَسَلَامٌ عَلَىٰ عِبَادِهِ الَّذِينَ اصْطَفَىٰ",
    transliteration:
      "Alhamdu lillahi wa salamun 'ala 'ibadihil-ladhinas-tafa",
    translation:
      "Praise be to Allah, and peace upon His servants whom He has chosen.",
    source_book: "Quran",
    hadith_number: "27:59",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful"],
    situation_tags: ["praise", "hamd", "salam", "prophets", "khutbah", "opening", "dhikr"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 310,
    slug: "dua-subhana-rabbina-inna-kunna-zalimin",
    title: "Subhana Rabbina — Exalted Is Our Lord, We Were Wrongdoers",
    arabic_text:
      "سُبْحَانَ رَبِّنَا إِنَّا كُنَّا ظَالِمِينَ",
    transliteration:
      "Subhana rabbina inna kunna zalimin",
    translation:
      "Exalted is our Lord! Indeed, we were wrongdoers.",
    source_book: "Quran",
    hadith_number: "68:29",
    authenticity_grade: "QURAN",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad"],
    situation_tags: ["repentance", "admission", "mistakes", "tawbah", "ashab-al-jannah", "greed", "regret"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 311,
    slug: "dua-asa-rabbuna-an-yubdilana-khayran-minha",
    title: "Dua After a Loss — Perhaps Our Lord Will Give Us Better",
    arabic_text:
      "عَسَىٰ رَبُّنَا أَن يُبْدِلَنَا خَيْرًا مِّنْهَا إِنَّا إِلَىٰ رَبِّنَا رَاغِبُونَ",
    transliteration:
      "'Asa rabbuna an yubdilana khayran minha inna ila rabbina raghibun",
    translation:
      "Perhaps our Lord will substitute for us [one] better than it. Indeed, we are toward our Lord desirous.",
    source_book: "Quran",
    hadith_number: "68:32",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["loss", "business-loss", "hope", "replacement", "sabr", "ashab-al-jannah", "optimism"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 312,
    slug: "dua-of-imrans-wife-during-pregnancy",
    title: "Dua of the Wife of 'Imran During Pregnancy",
    arabic_text:
      "رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Rabbi inni nadhartu laka ma fi batni muharraran fataqabbal minni, innaka antas-sami'ul-'alim",
    translation:
      "My Lord, indeed I have pledged to You what is in my womb, consecrated [for Your service], so accept this from me. Indeed, You are the Hearing, the Knowing.",
    source_book: "Quran",
    hadith_number: "3:35",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["pregnancy", "unborn-child", "mother", "dedication", "maryam", "family", "parenting"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 313,
    slug: "dua-for-protecting-a-newborn-from-shaytan",
    title: "Dua of Maryam's Mother for Her Child's Protection From Shaytan",
    arabic_text:
      "وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration:
      "Wa inni u'idhuha bika wa dhurriyyataha minash-shaytanir-rajim",
    translation:
      "And I seek refuge for her in You and [for] her descendants from Satan, the expelled [from the mercy of Allah].",
    source_book: "Quran",
    hadith_number: "3:36",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["newborn", "children", "protection", "shaytan", "maryam", "mother", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 314,
    slug: "dua-lan-yusibana-illa-ma-kataballahu-lana",
    title: "Nothing Will Befall Us Except What Allah Has Decreed",
    arabic_text:
      "لَن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    transliteration:
      "Lan yusibana illa ma katabAllahu lana, huwa mawlana, wa 'alallahi falyatawakkalil-mu'minun",
    translation:
      "Never will we be struck except by what Allah has decreed for us; He is our protector. And upon Allah let the believers rely.",
    source_book: "Quran",
    hadith_number: "9:51",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["qadr", "fear", "anxiety", "tawakkul", "decree", "protection", "courage"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 315,
    slug: "dhikr-fasubhanallahi-hina-tumsuna",
    title: "Fasubhanallahi Hina Tumsuna — Qur'anic Dhikr for Morning and Evening",
    arabic_text:
      "فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ وَلَهُ الْحَمْدُ فِي السَّمَاوَاتِ وَالْأَرْضِ وَعَشِيًّا وَحِينَ تُظْهِرُونَ",
    transliteration:
      "Fasubhanallahi hina tumsuna wa hina tusbihun, wa lahul-hamdu fis-samawati wal-ardi wa 'ashiyyan wa hina tuzhirun",
    translation:
      "So exalted is Allah when you reach the evening and when you reach the morning. And to Him is [due all] praise throughout the heavens and the earth. And [exalted is He] at night and when you are at noon.",
    source_book: "Quran",
    hadith_number: "30:17-18",
    authenticity_grade: "QURAN",
    category: "morning-evening",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["morning-adhkar", "evening-adhkar", "tasbih", "hamd", "dhikr", "ar-rum"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 316,
    slug: "dhikr-subhana-rabbika-rabbil-izzah",
    title: "Subhana Rabbika Rabbil-'Izzah — Glorifying Allah at the End of a Gathering",
    arabic_text:
      "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration:
      "Subhana rabbika rabbil-'izzati 'amma yasifun, wa salamun 'alal-mursalin, walhamdu lillahi rabbil-'alamin",
    translation:
      "Exalted is your Lord, the Lord of might, above what they describe. And peace upon the messengers. And praise to Allah, Lord of the worlds.",
    source_book: "Quran",
    hadith_number: "37:180-182",
    authenticity_grade: "QURAN",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["tasbih", "salam", "hamd", "ending", "gathering", "dhikr", "as-saffat"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 317,
    slug: "dua-alhamdulillahil-ladhi-najjana",
    title: "Praise to Allah Who Saved Us From the Wrongdoers",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي نَجَّانَا مِنَ الْقَوْمِ الظَّالِمِينَ",
    transliteration:
      "Alhamdu lillahil-ladhi najjana minal-qawmidh-dhalimin",
    translation:
      "Praise to Allah who has saved us from the wrongdoing people.",
    source_book: "Quran",
    hadith_number: "23:28",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful"],
    situation_tags: ["rescue", "gratitude", "nuh", "safety", "escape", "hamd", "relief"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 318,
    slug: "dua-alhamdulillahil-ladhi-adhhaba-annal-hazan",
    title: "Praise to Allah Who Removed Our Sorrow",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ",
    transliteration:
      "Alhamdu lillahil-ladhi adhhaba 'annal-hazan, inna rabbana laghafurun shakur",
    translation:
      "Praise to Allah, who has removed from us [all] sorrow. Indeed, our Lord is Forgiving and Appreciative.",
    source_book: "Quran",
    hadith_number: "35:34",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["sad", "grateful", "hopeful"],
    situation_tags: ["grief", "relief", "sadness", "jannah", "hamd", "healing", "hope"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 319,
    slug: "dua-alhamdulillahil-ladhi-hadana-lihadha",
    title: "Praise to Allah Who Guided Us to This",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ",
    transliteration:
      "Alhamdu lillahil-ladhi hadana lihadha wa ma kunna linahtadiya lawla an hadanallah",
    translation:
      "Praise to Allah, who has guided us to this; and we would never have been guided if Allah had not guided us.",
    source_book: "Quran",
    hadith_number: "7:43",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["guidance", "hidayah", "gratitude", "new-muslim", "jannah", "hamd", "revert"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 320,
    slug: "dhikr-huwallahul-ladhi-la-ilaha-illa-huw",
    title: "Huwallahul-Ladhi La Ilaha Illa Huw — The Names at the End of Al-Hashr",
    arabic_text:
      "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    transliteration:
      "Huwallahul-ladhi la ilaha illa huw, 'alimul-ghaybi wash-shahadah, huwar-rahmanur-rahim",
    translation:
      "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.",
    source_book: "Quran",
    hadith_number: "59:22",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["names-of-allah", "tawhid", "al-hashr", "ar-rahman", "dhikr", "morning-evening"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 321,
    slug: "dhikr-shahidallahu-annahu-la-ilaha-illa-huw",
    title: "Shahidallah — The Testimony of Tawhid",
    arabic_text:
      "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ",
    transliteration:
      "Shahidallahu annahu la ilaha illa huwa wal-mala'ikatu wa ulul-'ilmi qa'iman bil-qist, la ilaha illa huwal-'azizul-hakim",
    translation:
      "Allah witnesses that there is no deity except Him, and [so do] the angels and those of knowledge — [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
    source_book: "Quran",
    hadith_number: "3:18",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["tawhid", "shahada", "testimony", "knowledge", "justice", "dhikr", "al-imran"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 322,
    slug: "dua-subhanakallahumma-rabbana-wa-bihamdika-allahummaghfir-li",
    title: "Ruku and Sujood Dua — Subhanakallahumma Rabbana wa Bihamdik, Allahummaghfir Li",
    arabic_text:
      "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
    transliteration:
      "Subhanakallahumma rabbana wa bihamdika, Allahummaghfir li",
    translation:
      "Glory be to You, O Allah, our Lord, and praise be to You. O Allah, forgive me.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "794",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "grateful"],
    situation_tags: ["salah", "ruku", "sujood", "tasbih", "istighfar", "prayer", "an-nasr"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 323,
    slug: "dua-in-sujood-audhu-biridaka-min-sakhatik",
    title: "Sujood Dua — I Seek Refuge in Your Pleasure From Your Anger",
    arabic_text:
      "اللَّهُمَّ أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لاَ أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
    transliteration:
      "Allahumma a'udhu biridaka min sakhatika, wa bimu'afatika min 'uqubatika, wa a'udhu bika minka, la uhsi thana'an 'alayka, anta kama athnayta 'ala nafsik",
    translation:
      "O Allah, I seek refuge in Your pleasure from Your anger, in Your pardon from Your punishment, and I seek refuge in You from You. I cannot fully praise You; You are as You have praised Yourself.",
    source_book: "Sahih Muslim",
    hadith_number: "486",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "afraid", "hopeful"],
    situation_tags: ["sujood", "night-prayer", "witr", "refuge", "rida", "praise", "tahajjud"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 324,
    slug: "dua-entering-mosque-audhu-billahil-azim",
    title: "Entering the Mosque — Protection From Shaytan for the Whole Day",
    arabic_text:
      "أَعُوذُ بِاللَّهِ الْعَظِيمِ وَبِوَجْهِهِ الْكَرِيمِ وَسُلْطَانِهِ الْقَدِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration:
      "A'udhu billahil-'azim, wa biwajhihil-karim, wa sultanihil-qadim, minash-shaytanir-rajim",
    translation:
      "I seek refuge in Allah the Magnificent, in His Noble Face, and in His eternal authority, from Shaytan the accursed.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "466",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["mosque", "masjid", "shaytan", "protection", "entering-mosque", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 325,
    slug: "dua-subhana-dhil-jabaruti-wal-malakut",
    title: "Subhana Dhil-Jabaruti wal-Malakut — Dhikr in Ruku and Sujood",
    arabic_text:
      "سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ",
    transliteration:
      "Subhana dhil-jabaruti wal-malakuti wal-kibriya'i wal-'azamah",
    translation:
      "Glory be to the Possessor of might, dominion, grandeur and majesty.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "873",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["salah", "ruku", "sujood", "night-prayer", "tasbih", "majesty", "tahajjud"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 326,
    slug: "dua-refuge-from-shaytan-hamzihi-wa-nafkhihi",
    title: "Refuge From Shaytan's Whispers, Pride and Evil Suggestions",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الشَّيْطَانِ الرَّجِيمِ وَهَمْزِهِ وَنَفْخِهِ وَنَفْثِهِ",
    transliteration:
      "Allahumma inni a'udhu bika minash-shaytanir-rajim, wa hamzihi wa nafkhihi wa nafthihi",
    translation:
      "O Allah, I seek refuge in You from Shaytan the accursed — from his madness, his pride, and his poetry.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "808",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "protection",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["shaytan", "waswasa", "pride", "salah", "opening-prayer", "refuge", "ocd"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 327,
    slug: "dua-night-prayer-rabba-jibrail-wa-mikail",
    title: "Night Prayer Dua — O Lord of Jibril, Mika'il and Israfil, Guide Me",
    arabic_text:
      "اللَّهُمَّ رَبَّ جِبْرَئِيلَ وَمِيكَائِيلَ وَإِسْرَافِيلَ فَاطِرَ السَّمَوَاتِ وَالأَرْضِ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ",
    transliteration:
      "Allahumma rabba Jibra'ila wa Mika'ila wa Israfil, fatiras-samawati wal-ard, 'alimal-ghaybi wash-shahadah, anta tahkumu bayna 'ibadika fima kanu fihi yakhtalifun, ihdini limakhtulifa fihi minal-haqqi bi-idhnik, innaka latahdi ila siratin mustaqim",
    translation:
      "O Allah, Lord of Jibril, Mika'il and Israfil, Creator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants concerning that in which they differ. Guide me to the truth in matters of dispute by Your permission, for You guide to a straight path.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "1357",
    authenticity_grade: "SAHIH",
    graded_by: "Darussalam",
    category: "worship",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["tahajjud", "night-prayer", "guidance", "truth", "disputes", "angels", "confusion"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 328,
    slug: "dua-allahumma-akthir-malahu-wa-waladahu",
    title: "The Prophet's Dua for Anas — Increase His Wealth and Children and Bless Him",
    arabic_text:
      "اللَّهُمَّ أَكْثِرْ مَالَهُ وَوَلَدَهُ، وَبَارِكْ لَهُ فِيمَا أَعْطَيْتَهُ",
    transliteration:
      "Allahumma akthir malahu wa waladahu, wa barik lahu fima a'taytahu",
    translation:
      "O Allah, increase his wealth and his children, and bless him in what You have given him.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6380",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["dua-for-others", "children", "wealth", "barakah", "anas", "blessing", "family"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 329,
    slug: "dua-allahumma-laka-aslamtu-audhu-biizzatik",
    title: "Dua of Surrender and Refuge in Allah's Might From Misguidance",
    arabic_text:
      "اللَّهُمَّ لَكَ أَسْلَمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَإِلَيْكَ أَنَبْتُ وَبِكَ خَاصَمْتُ اللَّهُمَّ إِنِّي أَعُوذُ بِعِزَّتِكَ لاَ إِلَهَ إِلاَّ أَنْتَ أَنْ تُضِلَّنِي أَنْتَ الْحَىُّ الَّذِي لاَ يَمُوتُ وَالْجِنُّ وَالإِنْسُ يَمُوتُونَ",
    transliteration:
      "Allahumma laka aslamtu, wa bika amantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khasamt. Allahumma inni a'udhu bi'izzatika, la ilaha illa ant, an tudillani, antal-hayyul-ladhi la yamut, wal-jinnu wal-insu yamutun",
    translation:
      "O Allah, to You I have submitted, in You I believe, upon You I rely, to You I turn, and for You I dispute. O Allah, I seek refuge in Your might — there is no god but You — from Your letting me go astray. You are the Ever-Living who does not die, while jinn and mankind die.",
    source_book: "Sahih Muslim",
    hadith_number: "2717",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["guidance", "misguidance", "tawakkul", "islam", "al-hayy", "steadfastness", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 330,
    slug: "dua-refuge-from-a-prayer-that-does-not-benefit",
    title: "Dua for Refuge From a Prayer That Does Not Benefit",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ صَلاَةٍ لاَ تَنْفَعُ",
    transliteration:
      "Allahumma inni a'udhu bika min salatin la tanfa'",
    translation:
      "O Allah, I seek refuge in You from a prayer that does not benefit.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1549",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "afraid"],
    situation_tags: ["salah", "khushu", "sincerity", "quality-of-prayer", "short-dua", "refuge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 331,
    slug: "dua-leaving-home-an-adilla-aw-udalla",
    title: "Leaving Home — Refuge From Going Astray, Slipping and Injustice",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ أَوْ أَزِلَّ أَوْ أُزَلَّ أَوْ أَظْلِمَ أَوْ أُظْلَمَ أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَىَّ",
    transliteration:
      "Allahumma inni a'udhu bika an adilla aw udalla, aw azilla aw uzalla, aw azlima aw uzlama, aw ajhala aw yujhala 'alayy",
    translation:
      "O Allah, I seek refuge in You lest I go astray or be led astray, slip or be made to slip, wrong others or be wronged, or behave foolishly or be treated foolishly.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5094",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["leaving-home", "going-out", "work", "commute", "protection", "injustice", "manners"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 332,
    slug: "dua-rabba-jibrail-refuge-from-heat-of-fire",
    title: "O Lord of Jibril, Mika'il and Israfil — Refuge From the Fire and the Grave",
    arabic_text:
      "اللَّهُمَّ رَبَّ جِبْرَائِيلَ وَمِيكَائِيلَ وَرَبَّ إِسْرَافِيلَ أَعُوذُ بِكَ مِنْ حَرِّ النَّارِ وَمِنْ عَذَابِ الْقَبْرِ",
    transliteration:
      "Allahumma rabba Jibra'ila wa Mika'ila wa rabba Israfil, a'udhu bika min harrin-nari wa min 'adhabil-qabr",
    translation:
      "O Allah, Lord of Jibril and Mika'il and Lord of Israfil, I seek refuge in You from the heat of the Fire and from the punishment of the grave.",
    source_book: "Sunan an-Nasa'i",
    hadith_number: "5519",
    authenticity_grade: "HASAN",
    graded_by: "Darussalam",
    category: "protection",
    emotion_tags: ["afraid"],
    situation_tags: ["hellfire", "grave", "angels", "refuge", "akhirah", "protection"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 333,
    slug: "dua-refuge-from-constriction-of-dunya-and-qiyamah",
    title: "Refuge From the Hardship of This World and the Day of Resurrection",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ ضِيقِ الدُّنْيَا وَضِيقِ يَوْمِ الْقِيَامَةِ",
    transliteration:
      "Allahumma inni a'udhu bika min diqid-dunya wa diqi yawmil-qiyamah",
    translation:
      "O Allah, I seek refuge in You from the hardship of this world and the hardship of the Day of Resurrection.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5085",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["stressed", "afraid"],
    situation_tags: ["night-prayer", "tahajjud", "hardship", "anxiety", "qiyamah", "refuge", "constriction"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 334,
    slug: "dhikr-subhanal-malikil-quddus-after-witr",
    title: "Subhanal-Malikil-Quddus — Dhikr After Witr",
    arabic_text:
      "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ",
    transliteration:
      "Subhanal-Malikil-Quddus",
    translation:
      "Glory be to the King, the Most Holy.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1430",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["witr", "night-prayer", "tasbih", "al-malik", "al-quddus", "after-salah"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 335,
    slug: "dua-allahummaghfir-li-warhamni-wa-alhiqni-bir-rafiqil-ala",
    title: "The Prophet's Final Dua — Join Me With the Highest Companions",
    arabic_text:
      "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَأَلْحِقْنِي بِالرَّفِيقِ الأَعْلَى",
    transliteration:
      "Allahummaghfir li warhamni wa alhiqni bir-rafiqil-a'la",
    translation:
      "O Allah, forgive me, have mercy on me, and join me with the highest companions.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "5674",
    authenticity_grade: "SAHIH",
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "sad"],
    situation_tags: ["good-ending", "death", "forgiveness", "mercy", "jannah", "illness", "rafiq-al-ala"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 336,
    slug: "dhikr-allahu-akbar-kabira-walhamdulillahi-kathira",
    title: "Allahu Akbar Kabira — Words for Which the Gates of Heaven Opened",
    arabic_text:
      "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً",
    transliteration:
      "Allahu akbaru kabira, walhamdu lillahi kathira, wa subhanallahi bukratan wa asila",
    translation:
      "Allah is the Greatest, most great; abundant praise is for Allah; and glory be to Allah morning and evening.",
    source_book: "Sahih Muslim",
    hadith_number: "601",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["opening-prayer", "takbir", "tahmid", "tasbih", "dhikr", "gates-of-heaven"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 337,
    slug: "dua-allahumma-thabbithu-wajalhu-hadiyan-mahdiyya",
    title: "Dua for Someone's Steadfastness — Make Him a Guide, Rightly Guided",
    arabic_text:
      "اللَّهُمَّ ثَبِّتْهُ وَاجْعَلْهُ هَادِيًا مَهْدِيًّا",
    transliteration:
      "Allahumma thabbithu waj'alhu hadiyan mahdiyya",
    translation:
      "O Allah, make him firm and make him one who guides others and is rightly guided.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6089",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["hopeful"],
    situation_tags: ["dua-for-others", "children", "steadfastness", "guidance", "confidence", "jarir", "parenting"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 338,
    slug: "dua-when-visiting-the-sick-allahummashfi-abdak",
    title: "Dua When Visiting the Sick — O Allah, Heal Your Servant",
    arabic_text:
      "اللَّهُمَّ اشْفِ عَبْدَكَ يَنْكَأُ لَكَ عَدُوًّا أَوْ يَمْشِي لَكَ إِلَى جَنَازَةٍ",
    transliteration:
      "Allahummashfi 'abdaka yanka'u laka 'aduwwan aw yamshi laka ila janazah",
    translation:
      "O Allah, heal Your servant, so that he may strive against an enemy for Your sake or walk to a funeral for Your sake.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "3107",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["hopeful", "sad"],
    situation_tags: ["visiting-sick", "illness", "healing", "shifa", "hospital", "dua-for-others"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 339,
    slug: "condolence-inna-lillahi-ma-akhadha",
    title: "Words of Condolence — To Allah Belongs What He Took",
    arabic_text:
      "إِنَّ لِلَّهِ مَا أَخَذَ وَلَهُ مَا أَعْطَى وَكُلٌّ عِنْدَهُ بِأَجَلٍ مُسَمًّى",
    transliteration:
      "Inna lillahi ma akhadha wa lahu ma a'ta, wa kullun 'indahu bi-ajalin musamma",
    translation:
      "To Allah belongs what He took and to Him belongs what He gave, and everything with Him has an appointed term.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1284",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["sad", "lonely"],
    situation_tags: ["condolence", "death", "grief", "loss-of-child", "janazah", "patience", "bereavement"],
    featured: false,
    daily_dua_eligible: false,
  },
];

export const FEATURED_DUAS = DUAS.filter((d) => d.featured);
export const DAILY_DUA_POOL = DUAS.filter((d) => d.daily_dua_eligible);

export function getDuaBySlug(slug: string): Dua | undefined {
  return DUAS.find((d) => d.slug === slug);
}

export function getDuasByCategory(category: string): Dua[] {
  return DUAS.filter((d) => d.category === category);
}

export function getDuasByEmotion(emotion: string): Dua[] {
  return DUAS.filter((d) => d.emotion_tags.includes(emotion as never));
}

// ─── Search engine ────────────────────────────────────────────────────────────
//
// Improvements over the old substring filter:
//   1. Arabic text is searched (with tashkeel stripped)
//   2. Transliteration diacritics are normalised (ā→a, ḥ→h, ū→u …)
//   3. CamelCase splitting: "SubhanAllah" → searches "subhan" + "allah"
//   4. Levenshtein fuzzy matching: "forgivness" still finds forgiveness duas
//   5. Relevance scoring: title matches rank above translation matches
//   6. Expanded Islamic synonym dictionary
//

// ── Normalisation helpers ─────────────────────────────────────────────────────

/** Strip Arabic tashkeel/diacritics so بِسْمِ الله == بسم الله in search. */
function normalizeArabic(text: string): string {
  return text.replace(/[\u064B-\u065F\u0610-\u061A\u06D6-\u06DC\u0640]/g, "");
}

/**
 * Normalise Latin text for search:
 *   - lowercase
 *   - NFD decompose → strip combining diacritics (ā→a, ḥ→h, ū→u …)
 *   - collapse apostrophes/hamzas to ASCII '
 */
function normalizeLatin(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[''ʿʾ`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/** Split camelCase so "SubhanAllah" → ["subhanallah", "subhan", "allah"]. */
function splitCamel(word: string): string[] {
  const lower = word.toLowerCase();
  const parts = word
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(" ")
    .filter(Boolean);
  return parts.length > 1 ? [lower, ...parts] : [lower];
}

/** Tokenise a string into normalised words (≥2 chars). */
function tokenize(text: string): string[] {
  return normalizeLatin(text)
    .split(/[\s\-_,.'"]+/)
    .filter((w) => w.length >= 2);
}

/** Levenshtein edit distance (space-optimised single-row). */
function editDistance(a: string, b: string): number {
  const m = a.length, n = b.length;
  const row = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = row[j];
      row[j] =
        a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, row[j], row[j - 1]);
      prev = tmp;
    }
  }
  return row[n];
}

/**
 * Returns true if `qWord` is a likely typo of `targetWord`.
 * Allows distance 1 for words ≥5 chars, distance 2 for ≥9 chars.
 */
function isTypoOf(qWord: string, targetWord: string): boolean {
  if (qWord.length < 5 || targetWord.length < 3) return false;
  const maxDist = qWord.length >= 9 ? 2 : 1;
  if (Math.abs(qWord.length - targetWord.length) > maxDist) return false;
  return editDistance(qWord, targetWord) <= maxDist;
}

// ── Synonym / alias dictionary ────────────────────────────────────────────────

const SEARCH_SYNONYMS: Record<string, string[]> = {
  // ── Islamic phrases in transliteration ────────────────────────────────────
  subhan:           ["glory", "glorification", "tasbih"],
  subhanallah:      ["subhan", "glory", "tasbih", "glorification"],
  alhamdu:          ["praise", "hamd", "gratitude"],
  alhamdulillah:    ["alhamdu", "praise", "hamd", "gratitude"],
  bismillah:        ["bismika", "eating", "name", "start"],
  bismika:          ["bismillah", "name", "eating"],
  allahu:           ["allah", "prayer"],
  akbar:            ["great", "greatness"],
  "allahu akbar":   ["takbeer", "prayer", "greatness"],
  astaghfir:        ["forgiveness", "istighfar", "repentance"],
  astaghfirullah:   ["astaghfir", "forgiveness", "istighfar", "repentance"],
  istighfar:        ["forgiveness", "repentance", "astaghfir"],
  inna:             ["innalillahi", "calamity", "loss"],
  innalillahi:      ["inna", "lillah", "calamity", "grief", "death", "loss"],
  lillah:           ["innalillahi", "calamity"],
  rabb:             ["lord", "allah", "prayer"],
  rabbi:            ["rabb", "lord"],
  allahumma:        ["allah", "prayer"],
  inshallah:        ["hope", "future"],
  mashallah:        ["praise", "blessing"],
  dhikr:            ["remembrance", "zikr", "glorification"],
  zikr:             ["dhikr", "remembrance"],
  tasbih:           ["subhan", "glorification", "dhikr"],
  takbeer:          ["allahu akbar", "greatness", "prayer"],
  hamd:             ["alhamdu", "praise", "gratitude"],
  shukr:            ["gratitude", "thanks", "praise"],
  salah:            ["prayer", "namaz", "worship"],
  salat:            ["prayer", "salah", "worship"],
  ruqyah:           ["healing", "protection", "evil"],
  shifa:            ["healing", "cure", "illness"],
  rizq:             ["provision", "money", "sustenance", "income"],
  // ── English aliases ────────────────────────────────────────────────────────
  water:            ["drink", "drinking"],
  umrah:            ["travel", "hajj", "pilgrimage"],
  jummah:           ["friday", "jumah"],
  jumah:            ["friday", "jummah"],
  namaz:            ["prayer", "salah"],
  wudhu:            ["wudu", "ablution"],
  wuzu:             ["wudu", "ablution"],
  wudu:             ["ablution", "purification"],
  mother:           ["parents"],
  father:           ["parents"],
  mecca:            ["hajj", "travel", "pilgrimage"],
  makkah:           ["hajj", "travel", "pilgrimage"],
  kaaba:            ["hajj", "travel"],
  medina:           ["travel", "journey"],
  madinah:          ["travel", "journey"],
  pilgrimage:       ["hajj", "umrah", "travel"],
  sunnah:           ["prayer", "hadith", "worship"],
  mosque:           ["masjid", "prayer", "worship"],
  masjid:           ["mosque", "prayer", "worship"],
  anger:            ["angry", "conflict", "shaytan"],
  loneliness:       ["lonely", "depression", "sadness"],
  lonely:           ["loneliness", "depression"],
  anxious:          ["anxiety", "stress", "worry"],
  anxiousness:      ["anxiety", "stress", "worry"],
  worry:            ["anxiety", "stress", "worried"],
  depressed:        ["depression", "sadness", "grief"],
  grief:            ["sadness", "deceased", "death"],
  sick:             ["illness", "sickness", "healing"],
  heal:             ["healing", "illness", "ruqyah"],
  cure:             ["healing", "illness", "ruqyah", "shifa"],
  death:            ["deceased", "funeral", "janazah"],
  baby:             ["newborn", "children", "family"],
  child:            ["children", "family", "offspring"],
  exam:             ["studying", "knowledge", "wisdom"],
  study:            ["exam", "knowledge", "studying"],
  job:              ["rizq", "provision", "work"],
  work:             ["rizq", "job", "provision"],
  money:            ["rizq", "provision", "debt"],
  debt:             ["financial", "poverty", "rizq"],
  sleep:            ["before-sleep", "bedtime", "night"],
  night:            ["before-sleep", "bedtime", "sleep", "evening"],
  morning:          ["adhkar", "waking-up"],
  evening:          ["adhkar", "night"],
  friday:           ["jummah", "jumah", "salawat"],
  rain:             ["mercy", "weather", "sky"],
  thunder:          ["fear", "protection", "weather"],
  sneeze:           ["daily-life", "manners"],
  mirror:           ["daily-life", "appearance"],
  market:           ["daily-life", "trade"],
  // ── Urdu / Hindi words people search with (South Asian audience) ─────────
  nazar:            ["evil-eye", "evil", "eye", "ayn"],
  bimari:           ["sick", "illness", "healing"],
  sehat:            ["health", "wellbeing"],
  safar:            ["travel", "journey"],
  roza:             ["fasting", "iftar", "ramadan"],
  sehri:            ["fasting", "ramadan"],
  janaza:           ["janazah", "deceased", "funeral"],
  janazah:          ["deceased", "funeral", "death"],
  nikah:            ["marriage", "wedding", "spouse"],
  shaadi:           ["marriage", "wedding"],
  rishta:           ["spouse", "marriage"],
  aulad:            ["children", "offspring"],
  walidain:         ["parents"],
  maa:              ["mother", "parents"],
  qarz:             ["debt"],
  karz:             ["debt"],
  rozi:             ["rizq", "provision"],
  naukri:           ["job", "work", "rizq"],
  tension:          ["stress", "anxiety", "worry"],
  pareshani:        ["distress", "anxiety", "hardship"],
  khauf:            ["fear", "afraid"],
  gussa:            ["anger", "angry"],
  dukh:             ["sadness", "grief"],
  maafi:            ["forgiveness", "repentance"],
  tauba:            ["repentance", "tawbah", "forgiveness"],
  tawbah:           ["repentance", "forgiveness"],
  darood:           ["salawat", "blessings", "prophet"],
  durood:           ["salawat", "blessings", "prophet"],
  kursi:            ["ayatul", "kursi", "throne"],
  qul:              ["ikhlas", "falaq", "nas", "three-quls"],
};

// ── Scoring weights ───────────────────────────────────────────────────────────

const W = {
  TITLE_PHRASE:        12,
  TITLE_WORD:           7,
  TITLE_FUZZY:          4,
  TRANSLIT_PHRASE:     10,
  TRANSLIT_WORD:        5,
  TRANSLIT_FUZZY:       3,
  ARABIC_PHRASE:        9,
  ARABIC_WORD:          5,
  TRANSLATION_PHRASE:   6,
  TRANSLATION_WORD:     3,
  TRANSLATION_FUZZY:    2,
  TAG_PHRASE:           8,
  TAG_WORD:             4,
  SOURCE:               2,
};

function scoreDua(
  dua: Dua,
  phrases: string[],  // normalised full-phrase candidates (query + synonyms)
  words: string[],    // normalised meaningful individual words
  arabicQ: string,    // Arabic-normalised query (empty if no Arabic in input)
): number {
  let score = 0;

  const title       = normalizeLatin(dua.title);
  const translit    = normalizeLatin(dua.transliteration);
  const translation = normalizeLatin(dua.translation);
  const arabic      = normalizeArabic(dua.arabic_text);
  const tags        = [...dua.situation_tags, ...dua.emotion_tags, dua.category]
    .map(normalizeLatin)
    .join(" ");

  // ── Phrase-level scoring ──────────────────────────────────────────────────
  for (const phrase of phrases) {
    if (title.includes(phrase))       score += W.TITLE_PHRASE;
    if (translit.includes(phrase))    score += W.TRANSLIT_PHRASE;
    if (translation.includes(phrase)) score += W.TRANSLATION_PHRASE;
    if (tags.includes(phrase))        score += W.TAG_PHRASE;
  }
  if (arabicQ && arabic.includes(arabicQ)) score += W.ARABIC_PHRASE;

  // ── Word-level scoring ────────────────────────────────────────────────────
  const titleToks   = tokenize(dua.title);
  const translToks  = tokenize(dua.transliteration);
  const transToks   = tokenize(dua.translation);

  for (const word of words) {
    // Exact substring presence
    if (title.includes(word))       score += W.TITLE_WORD;
    if (translit.includes(word))    score += W.TRANSLIT_WORD;
    if (translation.includes(word)) score += W.TRANSLATION_WORD;
    if (arabic.includes(word))      score += W.ARABIC_WORD;
    if (tags.includes(word))        score += W.TAG_WORD;

    // Fuzzy (typo-tolerant) matching on tokenised fields
    if (word.length >= 5) {
      if (!title.includes(word) && titleToks.some((t) => isTypoOf(word, t)))
        score += W.TITLE_FUZZY;
      if (!translit.includes(word) && translToks.some((t) => isTypoOf(word, t)))
        score += W.TRANSLIT_FUZZY;
      if (!translation.includes(word) && transToks.some((t) => isTypoOf(word, t)))
        score += W.TRANSLATION_FUZZY;
    }
  }

  return score;
}

// ── Stop-words ────────────────────────────────────────────────────────────────

const STOPWORDS = new Set([
  "dua", "for", "the", "when", "before", "after", "and",
  "in", "a", "of", "to", "from", "upon", "with", "at",
  "is", "be", "an", "on", "my", "your",
]);

// ── Main search function ──────────────────────────────────────────────────────

export function searchDuas(query: string): Dua[] {
  const q = normalizeLatin(query);
  if (!q) return [];

  // Arabic input → normalise separately for Arabic field matching
  const hasArabic = /[\u0600-\u06FF]/.test(query);
  const arabicQ   = hasArabic ? normalizeArabic(query) : "";

  // CamelCase splitting: "SubhanAllah" → ["subhanallah", "subhan", "allah"]
  const rawTokens    = q.split(/[\s\-_]+/).filter(Boolean);
  const camelExpanded = rawTokens.flatMap(splitCamel);

  // Full-phrase synonym expansion
  const phraseSynonyms = SEARCH_SYNONYMS[q] ?? [];

  // Meaningful individual words, expanded through synonym dictionary
  const meaningfulWords = Array.from(
    new Set([
      ...camelExpanded.filter((w) => w.length > 2 && !STOPWORDS.has(w)),
      ...camelExpanded.flatMap((w) => SEARCH_SYNONYMS[w] ?? []),
    ])
  );

  // All full-phrase candidates (original query + synonyms)
  const phrases = Array.from(new Set([q, ...phraseSynonyms]));

  // Score all duas and discard zero-score entries
  const scored = DUAS
    .map((dua) => ({
      dua,
      score: scoreDua(dua, phrases, meaningfulWords, arabicQ),
    }))
    .filter(({ score }) => score > 0);

  // Return sorted by relevance (highest score first)
  // Well-known (featured) duas win ties, e.g. Sayyidul Istighfar for "forgiveness".
  scored.sort((a, b) => b.score - a.score || Number(!!b.dua.featured) - Number(!!a.dua.featured));
  return scored.map(({ dua }) => dua);
}

export function getDailyDua(date?: Date): Dua {
  // Guard: fall back to full DUAS list if no eligible duas are marked
  const pool = DAILY_DUA_POOL.length > 0 ? DAILY_DUA_POOL : DUAS;
  return pool[dayOfYearIST(date) % pool.length];
}

// Ranks by shared situation tags, category and emotions. Ties go to the duas
// that follow this one by id (wrapping round), so links spread across the
// whole collection instead of always pointing at the first few entries.
export function getRelatedDuas(dua: Dua, limit = 4): Dua[] {
  const maxId = DUAS.reduce((m, d) => Math.max(m, d.id), 0) + 1;
  const score = (d: Dua) =>
    d.situation_tags.filter((t) => dua.situation_tags.includes(t)).length * 2 +
    (d.category === dua.category ? 3 : 0) +
    d.emotion_tags.filter((e) => dua.emotion_tags.includes(e)).length;
  const distance = (d: Dua) => (d.id - dua.id + maxId) % maxId;
  return DUAS.filter((d) => d.id !== dua.id)
    .map((d) => ({ d, s: score(d) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s || distance(a.d) - distance(b.d))
    .slice(0, limit)
    .map(({ d }) => d);
}
