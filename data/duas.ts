import type { Dua } from "@/types";

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
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    transliteration:
      "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimin",
    translation:
      "All praise is for Allah who fed us and gave us drink, and made us Muslims.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "3850",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["after-eating", "food", "gratitude", "water", "drink", "drinking"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 5,
    slug: "dua-entering-home",
    title: "Dua When Entering Home",
    arabic_text:
      "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration:
      "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Allahi rabbina tawakkalna",
    translation:
      "In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5096",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["home", "entering", "door"],
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
    situation_tags: ["protection", "morning", "evening", "ruqyah"],
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
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["evil-eye", "protection", "ruqyah", "harm", "magic", "sihr", "jinn", "evening"],
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
      "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir hamhuma kama rabbayani saghira",
    translation:
      "My Lord, have mercy upon them as they raised me when I was young.",
    source_book: "Quran",
    hadith_number: "17:24",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["grateful", "hopeful", "sad"],
    situation_tags: ["parents", "family", "mercy", "quranic", "mother", "father"],
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
    situation_tags: ["travel", "vehicle", "journey", "car", "plane", "umrah", "hajj", "pilgrimage"],
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
      "لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation:
      "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    source_book: "Quran",
    hadith_number: "21:87",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful", "stressed", "angry", "lonely"],
    situation_tags: ["distress", "hardship", "forgiveness", "prophets", "quranic"],
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
    situation_tags: ["prayer", "family", "children", "quranic"],
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
    situation_tags: ["iftar", "ramadan", "fasting", "breaking-fast"],
    featured: false,
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
    situation_tags: ["marriage", "spouse", "husband", "wife", "family", "children", "quranic"],
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
    situation_tags: ["depression", "sadness", "distress", "anxiety", "healing"],
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
    emotion_tags: ["grateful"],
    situation_tags: ["gratitude", "dhikr", "worship", "zikr"],
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
      "رَّبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    translation: "My Lord, increase me in knowledge.",
    source_book: "Quran",
    hadith_number: "20:114",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful"],
    situation_tags: ["knowledge", "studying", "wisdom", "exam", "quranic"],
    featured: false,
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
    situation_tags: ["hardship", "ease", "difficulty", "problem"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 43,
    slug: "dua-for-the-night-of-jumu-ah",
    title: "Dua for Friday (Jumu'ah)",
    arabic_text:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad",
    translation:
      "O Allah, send blessings upon Muhammad and upon the family of Muhammad.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3370",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["friday", "jumu'ah", "salawat", "prophet", "jummah", "jumah"],
    featured: false,
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
    situation_tags: ["faith", "steadfastness", "heart", "iman", "steadfast", "daily", "dhikr"],
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
    emotion_tags: ["stressed", "sad", "hopeful"],
    situation_tags: ["debt", "financial", "poverty", "money", "rizq"],
    featured: false,
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
    situation_tags: ["patience", "sabr", "difficulty", "steadfastness", "quranic"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 49,
    slug: "dua-for-good-health",
    title: "Dua for Good Health and Wellbeing",
    arabic_text:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي",
    transliteration:
      "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari",
    translation:
      "O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5090",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["health", "body", "wellbeing", "healing"],
    featured: false,
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
    situation_tags: ["exam", "speech", "confidence", "ease", "presentation", "quranic"],
    featured: false,
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
    situation_tags: ["mirror", "character", "morning", "appearance"],
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
    situation_tags: ["moon", "new-month", "ramadan", "dhul-hijjah"],
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
    situation_tags: ["rizq", "provision", "knowledge", "work", "morning", "job", "employment", "career", "income", "daily"],
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
    emotion_tags: ["afraid", "grateful"],
    situation_tags: ["thunder", "lightning", "storm", "weather"],
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
    id: 78,
    slug: "dua-protection-from-hellfire",
    title: "Dua for Protection from Hellfire",
    arabic_text: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
    transliteration: "Allahumma ajirni minan-nar",
    translation: "O Allah, protect me from the Fire.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5079",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "seeking-forgiveness"],
    situation_tags: ["hellfire", "protection", "morning", "evening", "akhirah"],
    featured: false,
    daily_dua_eligible: true,
  },
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
  {
    id: 81,
    slug: "dua-severe-hardship-distress",
    title: "Dua in Times of Severe Hardship",
    arabic_text:
      "لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration:
      "La ilaha illallahul-halimul-karim, subhanallahi rabbil-'arshil-'azim, alhamdu lillahi rabbil-'alamin",
    translation:
      "There is no deity worthy of worship except Allah, the Forbearing, the Generous. How perfect is Allah, the Lord of the Magnificent Throne. All praise is for Allah, the Lord of all the worlds.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6346",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["stressed", "sad", "afraid", "hopeful", "angry"],
    situation_tags: ["hardship", "distress", "difficulty", "anxiety"],
    featured: false,
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
    situation_tags: ["graves", "cemetery", "deceased", "death"],
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
      "O Allah, forgive me and accept my repentance. Indeed You are the Oft-Returning, the Most Forgiving. (The Prophet ﷺ recited this 100 times per day.)",
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
    situation_tags: ["salawat", "prophet", "prayer", "friday", "tashahhud", "jummah"],
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
    emotion_tags: ["grateful"],
    situation_tags: ["affliction", "gratitude", "illness", "hardship"],
    featured: false,
    daily_dua_eligible: false,
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
    situation_tags: ["before-sleep", "night", "bedtime", "protection", "akhirah", "sleep", "sleeping"],
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
    id: 101,
    slug: "dua-for-exam-success",
    title: "Dua for Exam Success and Good Results",
    arabic_text:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
    transliteration:
      "Rabbish-rahli sadri wa yassir li amri wahlul 'uqdatan min lisani yafqahu qawli",
    translation:
      "My Lord, expand for me my chest and ease for me my task, and untie the knot from my tongue that they may understand my speech.",
    source_book: "Quran",
    hadith_number: "20:25-28",
    authenticity_grade: "QURAN",
    category: "daily-life",
    emotion_tags: ["stressed", "hopeful"],
    situation_tags: ["exam", "study", "test", "knowledge", "speaking", "education"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 102,
    slug: "dua-for-knowledge",
    title: "Dua for Increase in Knowledge",
    arabic_text: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    translation: "My Lord, increase me in knowledge.",
    source_book: "Quran",
    hadith_number: "20:114",
    authenticity_grade: "QURAN",
    category: "daily-life",
    emotion_tags: ["hopeful"],
    situation_tags: ["knowledge", "study", "learning", "exam", "education", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 103,
    slug: "dua-before-driving-car",
    title: "Dua Before Entering and Riding a Vehicle",
    arabic_text:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration:
      "Subhanal-ladhi sakhkhara lana hadha wama kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun",
    translation:
      "Glory be to the One who has subjected this to us, and we were not able to subdue it; and verily, to our Lord we shall return.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2602",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "travel",
    emotion_tags: ["grateful"],
    situation_tags: ["car", "vehicle", "driving", "riding", "travel", "transport"],
    featured: false,
    daily_dua_eligible: false,
  },
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
    id: 111,
    slug: "dua-for-rizq-lawful-provision",
    title: "Dua for Halal Rizq and Lawful Provision",
    arabic_text:
      "اللَّهُمَّ اكْفِنِي بِحَلالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration:
      "Allahumma-kfini bihalalika 'an haramika wa aghnini bifadlika 'amman siwak",
    translation:
      "O Allah, suffice me with what You have made halal so I have no need for what You have made haram, and enrich me by Your grace so I have no need of anyone other than You.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3563",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["rizq", "provision", "halal", "money", "income", "wealth", "employment"],
    featured: true,
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
    id: 115,
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
    situation_tags: ["health", "wellbeing", "body", "morning", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 116,
    slug: "dua-for-parents-health",
    title: "Dua for the Health and Wellbeing of Parents",
    arabic_text:
      "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration:
      "Rabbir hamhuma kama rabbayani saghira",
    translation:
      "My Lord, have mercy on them as they raised me when I was young.",
    source_book: "Quran",
    hadith_number: "17:24",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["parents", "mother", "father", "family", "mercy", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 124,
    slug: "dua-after-eating-food",
    title: "Dua After Eating Food",
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
    situation_tags: ["food", "eating", "meal", "after-eating", "gratitude", "daily"],
    featured: false,
    daily_dua_eligible: false,
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
    id: 131,
    slug: "dua-for-anxiety-panic-attack",
    title: "Dua for Anxiety and Overwhelming Panic",
    arabic_text:
      "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "La ilaha illa anta subhanaka inni kuntu minadh-dhalimin",
    translation:
      "There is no god but You; glory be to You. Indeed, I have been of the wrongdoers.",
    source_book: "Quran",
    hadith_number: "21:87",
    authenticity_grade: "QURAN",
    category: "daily-life",
    emotion_tags: ["stressed", "seeking-forgiveness"],
    situation_tags: ["anxiety", "panic", "distress", "fear", "dua-of-yunus", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 132,
    slug: "dua-for-depression-sadness",
    title: "Dua for Depression and Overcoming Sadness",
    arabic_text:
      "اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلاَءَ حُزْنِي وَذَهَابَ هَمِّي",
    transliteration:
      "Allahumma inni 'abduka ibnu 'abdika ibnu amatika nasiyati biyadika madin fiyya hukmuka 'adlun fiyya qada'uka as'aluka bikulli ismin huwa laka sammayta bihi nafsaka aw 'allamtahu ahadan min khalqika aw anzaltahu fi kitabika aw ista'tharta bihi fi 'ilmil-ghaybi 'indaka an taj'alal-Qurana rabi'a qalbi wa nura sadri wa jala'a huzni wa dhahaba hammi",
    translation:
      "O Allah, I am Your slave, son of Your slave, son of Your female slave. My forelock is in Your hand, Your command over me prevails, and Your judgment is just. I ask You by every name belonging to You which You named Yourself with, or taught to any of Your creation, or revealed in Your Book, or kept with Yourself in the knowledge of the Unseen, to make the Quran the spring of my heart, the light of my chest, and the remover of my sadness and worry.",
    source_book: "Musnad Ahmad",
    hadith_number: "3704",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["sad", "stressed"],
    situation_tags: ["depression", "sadness", "grief", "worry", "quran", "healing"],
    featured: true,
    daily_dua_eligible: true,
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
    emotion_tags: ["hopeful"],
    situation_tags: ["study", "student", "exam", "learning", "knowledge", "education"],
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
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["hardship", "difficulty", "distress", "crisis", "daily"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 136,
    slug: "dua-before-jummah-friday-prayer",
    title: "Salawat Ibrahim – Darood Recited on Jumu'ah and in Prayer",
    arabic_text:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima innaka Hamidun Majid. Wa barik 'ala Muhammadin wa 'ala ali Muhammadin kama barakta 'ala Ibrahima wa 'ala ali Ibrahima innaka Hamidun Majid",
    translation:
      "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim; indeed You are Praiseworthy, Glorious. And send blessings upon Muhammad and upon the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; indeed You are Praiseworthy, Glorious.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3370",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["jummah", "friday", "salawat", "darood", "prayer", "daily", "prophet"],
    featured: false,
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
    id: 140,
    slug: "dua-for-protection-evil-eye-hasad",
    title: "Dua for Protection from Evil Eye and Envy (Hasad)",
    arabic_text:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
    translation:
      "In the name of Allah, with Whose name nothing on earth or in the sky can cause harm, and He is the All-Hearing, All-Knowing.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "5088",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid"],
    situation_tags: ["evil-eye", "hasad", "envy", "protection", "morning", "evening", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 142,
    slug: "dua-for-seeing-yourself-in-mirror",
    title: "Dua When Looking in the Mirror",
    arabic_text:
      "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    transliteration:
      "Allahumma kama hassanta khalqi fahassin khuluqi",
    translation:
      "O Allah, just as You have made my physical form good, make my character good as well.",
    source_book: "Musnad Ahmad",
    hadith_number: "3823",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["mirror", "appearance", "character", "daily", "morning"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 144,
    slug: "dua-astaghfirullah-seeking-forgiveness",
    title: "Astaghfirullah – Seeking Allah's Forgiveness",
    arabic_text:
      "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    transliteration:
      "Astaghfirullahal-'Adhimal-ladhi la ilaha illa Huwal-Hayyul-Qayyumu wa atubu ilayh",
    translation:
      "I seek forgiveness from Allah the Mighty, there is no god but Him, the Ever-Living, the Sustainer, and I repent to Him.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3577",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["forgiveness", "tawbah", "repentance", "daily", "dhikr", "morning"],
    featured: true,
    daily_dua_eligible: true,
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
    emotion_tags: ["hopeful", "sad"],
    situation_tags: ["need", "provision", "rizq", "hardship", "help", "poverty", "daily"],
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
    emotion_tags: ["hopeful", "seeking-forgiveness"],
    situation_tags: ["deeds", "acceptance", "ibadah", "ramadan", "prayer", "daily"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 148,
    slug: "dua-for-passing-by-graveyard",
    title: "Dua When Passing by a Graveyard",
    arabic_text:
      "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ لَلَاحِقُونَ أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
    transliteration:
      "As-salamu 'alaykum ahlad-diyari minal-mu'minina wal-muslimin, wa inna in sha'Allaha la-lahiqun, as'alullaha lana wa lakumul-'afiyah",
    translation:
      "Peace be upon you, O people of the dwellings, among the believers and Muslims. Indeed, if Allah wills, we will be joining you. I ask Allah for well-being for us and for you.",
    source_book: "Sahih Muslim",
    hadith_number: "975",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["graveyard", "cemetery", "death", "deceased"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 150,
    slug: "dua-for-breaking-fast-iftar",
    title: "Dua for Breaking the Fast (Iftar)",
    arabic_text:
      "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    transliteration:
      "Allahumma laka sumtu wa 'ala rizqika aftartu",
    translation:
      "O Allah, for You I fasted, and with Your provision I break my fast.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2358",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["iftar", "fasting", "ramadan", "breaking-fast", "food"],
    featured: true,
    daily_dua_eligible: false,
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
  {
    id: 153,
    slug: "dua-sighting-ramadan-crescent-chand-raat",
    title: "Dua for Sighting the Ramadan Crescent (Chand Raat)",
    arabic_text:
      "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ",
    transliteration:
      "Allahumma ahillahu alayna bil-yumni wal-iman, was-salamati wal-Islam, Rabbi wa Rabbuk Allah",
    translation:
      "O Allah, bring this crescent upon us with blessing, faith, safety and Islam. My Lord and your Lord is Allah.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3451",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["chand-raat", "ramadan", "crescent-moon", "moon-sighting", "eid", "new-moon", "eid-al-fitr"],
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
  {
    id: 162,
    slug: "dua-at-qurbani-slaughter",
    title: "Dua at the Time of Qurbani (Eid al-Adha Sacrifice)",
    arabic_text:
      "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ اللَّهُمَّ هَذَا مِنْكَ وَلَكَ اللَّهُمَّ تَقَبَّلْ مِنِّي",
    transliteration:
      "Bismillahi wallahu Akbar, Allahumma hadha minka wa lak, Allahumma taqabbal minni",
    translation:
      "In the name of Allah, and Allah is the Greatest. O Allah, this is from You and for You. O Allah, accept this from me.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2795",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["qurbani", "sacrifice", "eid-al-adha", "slaughter", "dhul-hijjah", "eid", "animal-sacrifice"],
    featured: true,
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
    id: 166,
    slug: "dua-when-seeing-lightning",
    title: "Dua When Seeing Lightning",
    arabic_text:
      "اللَّهُمَّ لَا تَقْتُلْنَا بِغَضَبِكَ وَلَا تُهْلِكْنَا بِعَذَابِكَ وَعَافِنَا قَبْلَ ذَلِكَ",
    transliteration:
      "Allahumma la taqtulna bi-ghadabika wa la tuhlikna bi-'adhabika wa 'afina qabla dhalik",
    translation:
      "O Allah, do not kill us with Your wrath, do not destroy us with Your punishment, and grant us wellbeing before that.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3450",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["lightning", "thunder", "storm", "rain", "fear", "weather", "natural-disaster"],
    featured: false,
    daily_dua_eligible: false,
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
    situation_tags: ["repentance", "tawbah", "sins", "forgiveness", "morning", "evening", "daily"],
    featured: false,
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
      "Recite Surah Al-Ikhlas (112), Surah Al-Falaq (113), and Surah An-Nas (114) in full — three times each. The Prophet ﷺ said: 'Reciting them three times morning and evening will suffice you against everything.' After each recitation, blow into your cupped hands and wipe over your body.",
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
      "رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
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
    id: 175,
    slug: "dua-upon-riding-vehicle-mount",
    title: "Dua Upon Riding a Vehicle or Mount",
    arabic_text:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
    transliteration:
      "Subhanal-ladhee sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina la-munqalibun",
    translation:
      "Glory be to Him Who has subjected this to us, and we ourselves would not have been capable of it. And verily, to our Lord we shall return.",
    source_book: "Quran",
    hadith_number: "43:13-14",
    authenticity_grade: "QURAN",
    category: "travel",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["travel", "riding", "vehicle", "car", "plane", "bus", "transport", "journey", "mount"],
    featured: false,
    daily_dua_eligible: true,
  },
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
    id: 181,
    slug: "dua-rabbana-hab-lana-min-azwajina",
    title: "Dua for Righteous Spouses and Offspring",
    arabic_text:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration:
      "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama",
    translation:
      "Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous.",
    source_book: "Quran",
    hadith_number: "25:74",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["family", "spouse", "children", "offspring", "marriage", "righteous", "leadership"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 182,
    slug: "dua-rabbi-zidni-ilma",
    title: "Dua for Increase in Knowledge",
    arabic_text: "رَّبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    translation: "My Lord, increase me in knowledge.",
    source_book: "Quran",
    hadith_number: "20:114",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["hopeful"],
    situation_tags: ["knowledge", "learning", "study", "ilm", "education", "students", "seeking-knowledge"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 183,
    slug: "dua-of-musa-at-the-well",
    title: "Dua of Prophet Musa in Times of Need",
    arabic_text:
      "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration:
      "Rabbi inni lima anzalta ilayya min khayrin faqir",
    translation:
      "My Lord, I am in absolute need of whatever good You may send down to me.",
    source_book: "Quran",
    hadith_number: "28:24",
    authenticity_grade: "QURAN",
    category: "quranic",
    emotion_tags: ["sad", "hopeful", "stressed"],
    situation_tags: ["need", "helpless", "hardship", "provision", "rizq", "prophet-musa", "dependence-on-allah"],
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
    id: 185,
    slug: "dua-seeking-refuge-in-allahs-words",
    title: "Dua Seeking Refuge in Allah's Perfect Words",
    arabic_text:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    translation:
      "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    source_book: "Sahih Muslim",
    hadith_number: "2708",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["protection", "evil", "creation", "refuge", "safety", "harm", "evening", "morning", "night", "travel"],
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
    id: 189,
    slug: "dua-allahumma-inni-abduka-distress",
    title: "The Great Dua for Relief from Grief and Distress",
    arabic_text:
      "اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي",
    transliteration:
      "Allahumma inni 'abduka ibnu 'abdika ibnu amatik, nasiyati biyadik, madin fiyya hukmuk, 'adlun fiyya qada'uk, as'aluka bikulli ismin huwa lak, sammayta bihi nafsak, aw anzaltahu fi kitabik, aw 'allamtahu ahadan min khalqik, aw ista'tharta bihi fi 'ilmil-ghaybi 'indak, an taj'alal-Qur'ana rabi'a qalbi wa nura sadri wa jala'a huzni wa dhahaba hammi",
    translation:
      "O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand. Your command over me is forever executed and Your decree is just. I ask You by every name belonging to You which You have named Yourself, or revealed in Your Book, or taught any of Your creation, or kept in the knowledge of the unseen — that You make the Quran the spring of my heart, the light of my chest, the banisher of my sadness, and the reliever of my distress.",
    source_book: "Musnad Ahmad",
    hadith_number: "3704",
    authenticity_grade: "SAHIH",
    graded_by: "Ibn Hibban",
    category: "health",
    emotion_tags: ["sad", "stressed", "hopeful"],
    situation_tags: ["grief", "sorrow", "distress", "depression", "anxiety", "quran", "relief", "heart", "worry", "sadness", "overwhelmed"],
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 190,
    slug: "dua-upon-hearing-iqamah",
    title: "Dua Upon Hearing the Iqamah",
    arabic_text: "أَقَامَهَا اللَّهُ وَأَدَامَهَا",
    transliteration: "Aqamahallahu wa adamaha",
    translation: "May Allah establish it and maintain it.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "528",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["iqamah", "prayer", "salah", "masjid", "mosque", "adhan", "call-to-prayer"],
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 191,
    slug: "dua-upon-seeing-afflicted-person",
    title: "Dua Upon Seeing Someone Afflicted with Hardship",
    arabic_text:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاكَ بِهِ وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا",
    transliteration:
      "Alhamdu lillahil-ladhi 'afani mimma ibtalaka bihi wa faddalani 'ala kathirin mimman khalaqa tafdhila",
    translation:
      "All praise is for Allah Who spared me from what He has afflicted you with, and Who has blessed me greatly over many of His creation.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3431",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["affliction", "hardship", "gratitude", "blessing", "trial", "disabled", "sick", "calamity"],
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
    id: 194,
    slug: "dua-of-ibrahim-for-righteous-offspring",
    title: "Dua of Ibrahim for Steadfastness in Prayer and Righteous Descendants",
    arabic_text:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    transliteration:
      "Rabbij'alni muqimas-salati wa min dhurriyyati, Rabbana wa taqabbal du'a'",
    translation:
      "My Lord, make me an establisher of prayer, and from my descendants as well. Our Lord, and accept my supplication.",
    source_book: "Quran",
    hadith_number: "14:40",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["prayer", "salah", "children", "offspring", "descendants", "prophet-ibrahim", "steadfastness", "family"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 195,
    slug: "dua-rabbana-taqabbal-minna",
    title: "Dua for the Acceptance of Good Deeds",
    arabic_text:
      "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Rabbana taqabbal minna innaka antas-Sami'ul-'Alim",
    translation:
      "Our Lord, accept this from us. Indeed, You are the All-Hearing, the All-Knowing.",
    source_book: "Quran",
    hadith_number: "2:127",
    authenticity_grade: "QURAN",
    category: "worship",
    emotion_tags: ["hopeful", "grateful", "seeking-forgiveness"],
    situation_tags: ["acceptance", "deeds", "ibadah", "worship", "dua", "prayer", "fasting", "charity", "ramadan", "dhul-hijjah"],
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
    id: 198,
    slug: "dua-for-beneficial-knowledge",
    title: "Dua for Beneficial Knowledge, Good Provision and Accepted Deeds",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    transliteration:
      "Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbala",
    translation:
      "O Allah, I ask You for beneficial knowledge, good lawful provision, and accepted deeds.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "925",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["knowledge", "rizq", "deeds", "morning", "fajr", "prayer", "ilm", "provision", "acceptance"],
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
      "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
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
  {
    id: 204,
    slug: "dua-protection-from-punishment-at-night",
    title: "Dua Before Sleep for Protection from Allah's Punishment",
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
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["sleep", "night", "bedtime", "punishment", "judgment-day", "qiyamah", "protection", "before-sleep"],
    featured: false,
    daily_dua_eligible: true,
  },

  // ─── BATCH 3: 15 NEW DUAS (IDs 205–219) ──────────────────────────────────────
  {
    id: 205,
    slug: "dua-for-increase-and-benefit-in-knowledge",
    title: "Dua for Beneficial Knowledge and Increased Understanding",
    arabic_text:
      "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا",
    transliteration:
      "Allahumma infa'ni bima 'allamtani wa 'allimni ma yanfa'uni wa zidni 'ilma",
    translation:
      "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3599",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["knowledge", "ilm", "studying", "learning", "memory", "understanding", "school", "university", "students", "quran"],
    featured: false,
    daily_dua_eligible: true,
  },
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
    id: 208,
    slug: "dua-for-financial-sufficiency-and-halal",
    title: "Dua for Halal Sufficiency and Freedom from Need",
    arabic_text:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration:
      "Allahumma akfini bihalâlika 'an harâmika wa aghnini bifadlika 'amman siwak",
    translation:
      "O Allah, make Your lawful provisions sufficient for me so I have no need of what is forbidden, and make me independent of all besides You through Your bounty.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3563",
    authenticity_grade: "HASAN",
    graded_by: "Al-Albani",
    category: "health",
    emotion_tags: ["stressed", "hopeful", "grateful"],
    situation_tags: ["money", "financial", "halal", "rizq", "provision", "debt", "career", "job", "income", "wealth", "sufficiency"],
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 209,
    slug: "dua-ya-muqallibal-qulub-steadfast-heart",
    title: "Dua for a Steadfast Heart — Ya Muqallibal Qulub",
    arabic_text:
      "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration:
      "Ya muqallibal-qulubi thabbit qalbi 'ala dinik",
    translation:
      "O Turner of hearts, keep my heart steadfast upon Your religion.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "2140",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["afraid", "hopeful", "seeking-forgiveness"],
    situation_tags: ["heart", "iman", "faith", "steadfastness", "istiqamah", "doubt", "wavering", "thabaat", "deen", "guidance"],
    featured: true,
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
    id: 212,
    slug: "dua-allahumma-la-sahla-ease",
    title: "Dua for Making the Difficult Easy — La Sahla",
    arabic_text:
      "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
    transliteration:
      "Allahumma la sahla illa ma ja'altahu sahlan wa anta taj'alul-hazna idha shi'ta sahla",
    translation:
      "O Allah, there is no ease except what You make easy, and You can make hardship easy whenever You will.",
    source_book: "Sahih Ibn Hibban",
    hadith_number: "974",
    authenticity_grade: "SAHIH",
    graded_by: "Ibn Hibban",
    category: "health",
    emotion_tags: ["stressed", "hopeful", "afraid"],
    situation_tags: ["ease", "difficulty", "hardship", "challenge", "exam", "interview", "obstacle", "problem", "help", "relief"],
    featured: true,
    daily_dua_eligible: true,
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
    id: 217,
    slug: "dua-for-dhikr-shukr-and-good-worship",
    title: "Dua for Remembrance, Gratitude and Excellence in Worship",
    arabic_text:
      "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration:
      "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
    translation:
      "O Allah, help me to remember You, to be grateful to You, and to worship You in the best manner.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "1522",
    authenticity_grade: "SAHIH",
    graded_by: "Al-Albani",
    category: "worship",
    emotion_tags: ["grateful", "hopeful", "seeking-forgiveness"],
    situation_tags: ["dhikr", "shukr", "gratitude", "ibadah", "worship", "after-prayer", "salah", "remembrance", "excellence", "husn"],
    featured: false,
    daily_dua_eligible: true,
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
  {
    id: 219,
    slug: "dua-rabbana-afrigh-alayna-sabran",
    title: "Dua for Patience, Firmness and Victory",
    arabic_text:
      "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
    translation:
      "Our Lord, pour upon us patience, plant our feet firmly, and give us victory over the disbelieving people.",
    source_book: "Quran",
    hadith_number: "2:250",
    authenticity_grade: "QURAN",
    category: "protection",
    emotion_tags: ["hopeful", "afraid", "stressed"],
    situation_tags: ["patience", "sabr", "firmness", "victory", "strength", "battle", "trial", "steadfastness", "thabaat", "courage"],
    featured: false,
    daily_dua_eligible: true,
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
  scored.sort((a, b) => b.score - a.score);
  return scored.map(({ dua }) => dua);
}

export function getDailyDua(date?: Date): Dua {
  // Guard: fall back to full DUAS list if no eligible duas are marked
  const pool = DAILY_DUA_POOL.length > 0 ? DAILY_DUA_POOL : DUAS;
  const d = date ?? new Date();
  const dayOfYear = Math.floor(
    (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return pool[dayOfYear % pool.length];
}

export function getRelatedDuas(dua: Dua, limit = 4): Dua[] {
  return DUAS.filter(
    (d) =>
      d.id !== dua.id &&
      (d.category === dua.category ||
        d.emotion_tags.some((e) => dua.emotion_tags.includes(e)))
  ).slice(0, limit);
}
