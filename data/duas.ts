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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["after-eating", "food", "gratitude", "water", "drink", "drinking"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["home", "entering", "door"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["hopeful"],
    situation_tags: ["leaving-home", "door", "protection"],
    scholar_verified: true,
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
    situation_tags: ["bathroom", "toilet", "entering"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "morning-evening",
    emotion_tags: ["grateful", "hopeful", "lonely"],
    situation_tags: ["morning", "adhkar", "protection"],
    scholar_verified: true,
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
    category: "morning-evening",
    emotion_tags: ["grateful", "lonely"],
    situation_tags: ["evening", "adhkar"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    situation_tags: ["anxiety", "stress", "grief", "worry", "depression"],
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["protection", "morning", "evening", "ruqyah"],
    scholar_verified: true,
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
    emotion_tags: ["afraid"],
    situation_tags: ["evil-eye", "protection", "ruqyah", "harm"],
    scholar_verified: true,
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
    situation_tags: ["fear", "worry", "trust-in-allah"],
    scholar_verified: true,
    featured: false,
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
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful"],
    situation_tags: ["forgiveness", "repentance", "sins"],
    scholar_verified: true,
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
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful", "lonely"],
    situation_tags: ["laylatul-qadr", "ramadan", "forgiveness", "night-of-power"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "travel",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["travel", "vehicle", "journey", "car", "plane", "umrah", "hajj", "pilgrimage"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    situation_tags: ["general", "dunya", "akhirah", "protection", "quranic"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    situation_tags: ["visiting-sick", "hospital", "illness"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 32,
    slug: "dua-istikhara",
    title: "Dua al-Istikhara (Seeking Guidance)",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ",
    transliteration:
      "Allahumma inni astakhiruka bi'ilmika wa astaqdiruka biqudratika wa as'aluka min fadlikal-'azim, fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta 'allamul-ghuyub",
    translation:
      "O Allah, I seek Your guidance through Your knowledge, and I seek Your capability through Your power, and I ask You from Your great bounty. For surely You have power and I do not, and You know and I do not, and You know the unseen.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1166",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["istikhara", "decision", "guidance", "marriage", "job"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["iftar", "ramadan", "fasting", "breaking-fast"],
    scholar_verified: true,
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
    situation_tags: ["children", "family", "offspring", "quranic"],
    scholar_verified: true,
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
    emotion_tags: ["hopeful", "lonely"],
    situation_tags: ["marriage", "spouse", "family", "children", "quranic"],
    scholar_verified: true,
    featured: false,
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
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["sad", "stressed", "lonely", "hopeful", "angry"],
    situation_tags: ["depression", "sadness", "distress", "anxiety", "healing"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["gratitude", "dhikr", "worship", "zikr"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["stressed", "sad", "afraid", "hopeful", "angry", "lonely"],
    situation_tags: ["hardship", "ease", "difficulty", "problem"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    emotion_tags: ["grateful"],
    situation_tags: ["rain", "weather"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "seeking-forgiveness"],
    situation_tags: ["faith", "steadfastness", "heart", "iman"],
    scholar_verified: true,
    featured: false,
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
    category: "daily-life",
    emotion_tags: ["stressed", "sad", "hopeful"],
    situation_tags: ["debt", "financial", "poverty", "money", "rizq"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "health",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["health", "body", "wellbeing", "healing"],
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["reliance", "trust", "tawakkul", "protection"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["prayer", "salah", "opening", "istiftah"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["hopeful", "grateful", "lonely"],
    situation_tags: ["witr", "qunoot", "night-prayer", "prayer"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["arafah", "hajj", "dhul-hijjah", "dhikr", "umrah", "pilgrimage", "arafat"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["love", "closeness-to-allah", "dhikr", "worship", "zikr"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["hopeful", "afraid"],
    situation_tags: ["jannah", "paradise", "hellfire", "akhirah", "prayer"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["clothes", "dressing", "new-clothes", "morning"],
    scholar_verified: true,
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
    situation_tags: ["sneezing", "daily", "health"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["mirror", "character", "morning", "appearance"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["market", "shopping", "business", "bazaar"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["moon", "new-month", "ramadan", "dhul-hijjah"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["seeking-forgiveness"],
    situation_tags: ["bathroom", "toilet", "leaving", "daily"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["rizq", "provision", "knowledge", "work", "morning"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["gratitude", "thanking", "daily", "social"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["afraid", "grateful"],
    situation_tags: ["thunder", "lightning", "storm", "weather"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "morning-evening",
    emotion_tags: ["grateful"],
    situation_tags: ["morning", "adhkar", "waking-up"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "seeking-forgiveness"],
    situation_tags: ["hellfire", "protection", "morning", "evening", "akhirah"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    situation_tags: ["guidance", "piety", "protection", "daily"],
    scholar_verified: true,
    featured: false,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "health",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["visiting-sick", "illness", "healing", "shifa"],
    scholar_verified: true,
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
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["newborn", "baby", "children", "protection", "family"],
    scholar_verified: true,
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
    situation_tags: ["marriage", "husband-wife", "protection", "family"],
    scholar_verified: true,
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
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["nikah", "wedding", "marriage", "family", "blessing"],
    scholar_verified: true,
    featured: false,
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
    scholar_verified: true,
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
    category: "family",
    emotion_tags: ["sad", "hopeful"],
    situation_tags: ["janazah", "funeral", "deceased", "death"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "forgiveness",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["istighfar", "forgiveness", "repentance", "100-times"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["hopeful"],
    situation_tags: ["rain", "drought", "istisqa", "weather"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["affliction", "gratitude", "illness", "hardship"],
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["afraid", "hopeful", "lonely"],
    situation_tags: ["faith", "iman", "heart", "steadfastness", "death"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["afraid", "hopeful", "lonely"],
    situation_tags: ["before-sleep", "night", "bedtime", "protection", "akhirah", "sleep", "sleeping"],
    scholar_verified: true,
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
    category: "health",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["wellbeing", "health", "pardon", "daily", "morning"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["hopeful", "afraid", "seeking-forgiveness"],
    situation_tags: ["jannah", "paradise", "akhirah", "pleasure", "daily"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "travel",
    emotion_tags: ["grateful"],
    situation_tags: ["car", "vehicle", "driving", "riding", "travel", "transport"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 104,
    slug: "dua-for-marriage-nikah",
    title: "Dua for a Blessed Marriage (Nikah)",
    arabic_text:
      "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration:
      "Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fi khayr",
    translation:
      "May Allah bless you and bestow blessings upon you, and may He join you together in goodness.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2130",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["marriage", "nikah", "wedding", "spouse", "congratulations"],
    scholar_verified: true,
    featured: true,
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
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 106,
    slug: "dua-hasbunallah-wa-nimal-wakeel",
    title: "Hasbunallah wa Ni'mal Wakeel – Allah is Sufficient for Us",
    arabic_text: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni'mal wakeel",
    translation:
      "Allah is sufficient for us, and He is the best Disposer of affairs.",
    source_book: "Quran",
    hadith_number: "3:173",
    authenticity_grade: "QURAN",
    category: "worship",
    emotion_tags: ["afraid", "stressed", "hopeful"],
    situation_tags: ["hardship", "trust", "daily", "difficulty", "reliance", "tawakkul"],
    scholar_verified: true,
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
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 108,
    slug: "dua-for-newborn-baby-protection",
    title: "Dua for Protection of a Newborn Baby",
    arabic_text:
      "أُعِيذُكَ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    transliteration:
      "U'idhuka bikalimati-llahit-tammati min kulli shaytanin wa hammah, wa min kulli 'aynin lammah",
    translation:
      "I seek refuge for you in the perfect words of Allah from every devil and every poisonous creature, and from every evil eye.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3371",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["baby", "newborn", "child", "protection", "evil-eye", "ruqyah"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 109,
    slug: "dua-for-protection-from-magic-sihr",
    title: "Dua for Protection from Magic and Sihr",
    arabic_text:
      "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'udhu bikalimati-llahit-tammati min sharri ma khalaq",
    translation:
      "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    source_book: "Sahih Muslim",
    hadith_number: "2709",
    authenticity_grade: "SAHIH",
    category: "protection",
    emotion_tags: ["afraid", "stressed"],
    situation_tags: ["magic", "sihr", "jinn", "evil-eye", "protection", "ruqyah", "evening"],
    scholar_verified: true,
    featured: false,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["rizq", "provision", "halal", "money", "income", "wealth", "employment"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["stressed", "sad"],
    situation_tags: ["stressed", "distress", "hardship", "mercy", "daily"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 114,
    slug: "dua-for-finding-a-job",
    title: "Dua for Beneficial Knowledge, Good Provision, and a Job",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    transliteration:
      "Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbala",
    translation:
      "O Allah, I ask You for beneficial knowledge, good and lawful provision, and accepted deeds.",
    source_book: "Sunan Ibn Majah",
    hadith_number: "925",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["hopeful", "stressed"],
    situation_tags: ["job", "employment", "work", "career", "rizq", "income", "morning", "daily"],
    scholar_verified: true,
    featured: false,
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
    category: "health",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["health", "wellbeing", "body", "morning", "daily"],
    scholar_verified: true,
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
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 117,
    slug: "dua-for-guidance-hidayah",
    title: "Dua for Guidance (Hidayah) and the Straight Path",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration:
      "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina",
    translation:
      "O Allah, I ask You for guidance, righteousness, chastity, and self-sufficiency.",
    source_book: "Sahih Muslim",
    hadith_number: "2721",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful"],
    situation_tags: ["guidance", "hidayah", "righteous", "daily", "morning"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 118,
    slug: "dua-when-entering-mosque",
    title: "Dua When Entering the Mosque",
    arabic_text:
      "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration:
      "Allahumma-ftah li abwaba rahmatik",
    translation:
      "O Allah, open for me the doors of Your mercy.",
    source_book: "Sahih Muslim",
    hadith_number: "713",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["mosque", "masjid", "entering", "prayer"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 119,
    slug: "dua-when-leaving-mosque",
    title: "Dua When Leaving the Mosque",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration:
      "Allahumma inni as'aluka min fadlik",
    translation:
      "O Allah, I ask You for Your grace and bounty.",
    source_book: "Sahih Muslim",
    hadith_number: "713",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["mosque", "masjid", "leaving", "prayer"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 120,
    slug: "dua-for-protection-from-debt",
    title: "Dua for Protection from Debt and Poverty",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-hammi wal-hazani wal-'ajzi wal-kasali wal-bukhli wal-jubni wa dhala'id-dayni wa ghalabatir-rijal",
    translation:
      "O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from miserliness and cowardice, from the burden of debt and from being overpowered by men.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6369",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["stressed", "sad"],
    situation_tags: ["debt", "poverty", "worry", "stress", "hardship", "financial", "morning"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 121,
    slug: "dua-for-strong-iman-faith",
    title: "Dua for Strong Iman and Firm Faith",
    arabic_text:
      "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration:
      "Ya muqallibal-qulubi thabbit qalbi 'ala dinik",
    translation:
      "O Turner of Hearts, make my heart firm upon Your religion.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "2140",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["hopeful", "afraid"],
    situation_tags: ["iman", "faith", "steadfast", "heart", "daily", "dhikr"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 122,
    slug: "dua-for-spouse-husband-wife",
    title: "Dua for a Righteous Spouse",
    arabic_text:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    transliteration:
      "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama",
    translation:
      "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us a leader for the righteous.",
    source_book: "Quran",
    hadith_number: "25:74",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["spouse", "husband", "wife", "marriage", "children", "family"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 123,
    slug: "dua-for-children-righteous-offspring",
    title: "Dua for Righteous Children and Offspring",
    arabic_text:
      "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    transliteration:
      "Rabbi hab li minas-salihin",
    translation:
      "My Lord, grant me a child from the righteous.",
    source_book: "Quran",
    hadith_number: "37:100",
    authenticity_grade: "QURAN",
    category: "family",
    emotion_tags: ["hopeful"],
    situation_tags: ["children", "offspring", "family", "righteous", "dua-for-children"],
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["food", "eating", "meal", "after-eating", "gratitude", "daily"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["wudu", "ablution", "purification", "prayer", "daily"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["wudu", "ablution", "purification", "tawbah", "daily"],
    scholar_verified: true,
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
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 128,
    slug: "dua-when-sneezing-alhamdulillah",
    title: "Dua When Sneezing – Alhamdulillah",
    arabic_text: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation: "All praise is for Allah.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6224",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["sneeze", "sneezing", "gratitude", "daily"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 129,
    slug: "dua-for-entering-toilet-bathroom",
    title: "Dua Before Entering the Toilet or Bathroom",
    arabic_text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-khubuth wal-khaba'ith",
    translation:
      "O Allah, I seek refuge in You from male and female devils.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "142",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: [],
    situation_tags: ["toilet", "bathroom", "protection", "daily", "etiquette"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 130,
    slug: "dua-for-leaving-toilet-bathroom",
    title: "Dua When Leaving the Toilet or Bathroom",
    arabic_text: "غُفْرَانَكَ",
    transliteration: "Ghufranaka",
    translation: "I seek Your forgiveness.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "30",
    authenticity_grade: "SAHIH",
    category: "daily-life",
    emotion_tags: ["seeking-forgiveness"],
    situation_tags: ["toilet", "bathroom", "forgiveness", "daily", "etiquette"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    category: "daily-life",
    emotion_tags: ["sad", "stressed"],
    situation_tags: ["depression", "sadness", "grief", "worry", "quran", "healing"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 133,
    slug: "dua-for-success-in-business",
    title: "Dua for Good in This World and Success in Business",
    arabic_text:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    translation:
      "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    source_book: "Quran",
    hadith_number: "2:201",
    authenticity_grade: "QURAN",
    category: "daily-life",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["business", "trade", "income", "work", "blessing", "financial", "dunya", "akhirah", "daily"],
    scholar_verified: true,
    featured: false,
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
    category: "daily-life",
    emotion_tags: ["hopeful"],
    situation_tags: ["study", "student", "exam", "learning", "knowledge", "education"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 138,
    slug: "dua-when-seeing-rain",
    title: "Dua When It Rains",
    arabic_text:
      "اللَّهُمَّ صَيِّبًا نَافِعًا",
    transliteration: "Allahumma sayyiban nafi'a",
    translation: "O Allah, make it a beneficial rain.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "1032",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["rain", "weather", "daily", "nature"],
    scholar_verified: true,
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
    category: "family",
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["marriage", "wedding", "nikah", "spouse", "newlywed"],
    scholar_verified: true,
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
    category: "protection",
    emotion_tags: ["afraid"],
    situation_tags: ["evil-eye", "hasad", "envy", "protection", "morning", "evening", "daily"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 141,
    slug: "dua-when-visiting-sick-person",
    title: "Dua When Visiting a Sick Person",
    arabic_text:
      "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
    transliteration: "La ba'sa tahurun in sha'Allah",
    translation:
      "No harm, it is a purification, if Allah wills.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "3616",
    authenticity_grade: "SAHIH",
    category: "health",
    emotion_tags: ["hopeful", "sad"],
    situation_tags: ["sick", "illness", "visiting", "hospital", "ruqyah"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
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
    category: "daily-life",
    emotion_tags: ["grateful"],
    situation_tags: ["mirror", "appearance", "character", "daily", "morning"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: true,
  },
  {
    id: 143,
    slug: "dua-for-protection-from-hellfire",
    title: "Dua for Protection from Hellfire (Jahannam)",
    arabic_text:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    transliteration:
      "Allahumma inni as'alukal-jannata wa a'udhu bika minan-nar",
    translation:
      "O Allah, I ask You for Paradise and seek refuge in You from the Fire.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "792",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["afraid", "hopeful"],
    situation_tags: ["jannah", "paradise", "hellfire", "akhirah", "daily"],
    scholar_verified: true,
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
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["forgiveness", "tawbah", "repentance", "daily", "dhikr", "morning"],
    scholar_verified: true,
    featured: true,
    daily_dua_eligible: true,
  },
  {
    id: 145,
    slug: "dua-before-intercourse",
    title: "Dua Before Intimacy Between Spouses",
    arabic_text:
      "بِسْمِ اللَّهِ اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",
    transliteration:
      "Bismillah, Allahumma jannibnas-shaytana wa jannibish-shaytana ma razaqtana",
    translation:
      "In the name of Allah. O Allah, keep the Shaytan away from us, and keep the Shaytan away from what You have blessed us with.",
    source_book: "Sahih al-Bukhari",
    hadith_number: "141",
    authenticity_grade: "SAHIH",
    category: "family",
    emotion_tags: ["grateful"],
    situation_tags: ["marriage", "spouse", "intimacy", "protection", "family"],
    scholar_verified: true,
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
    emotion_tags: ["hopeful", "sad"],
    situation_tags: ["need", "provision", "rizq", "hardship", "help", "poverty", "daily"],
    scholar_verified: true,
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
    scholar_verified: true,
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
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 149,
    slug: "dua-on-laylatul-qadr",
    title: "Dua for Laylatul Qadr (Night of Power)",
    arabic_text:
      "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration:
      "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni",
    translation:
      "O Allah, You are the Pardoner, You love to pardon, so pardon me.",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "3513",
    authenticity_grade: "SAHIH",
    category: "worship",
    emotion_tags: ["seeking-forgiveness", "hopeful"],
    situation_tags: ["laylatul-qadr", "ramadan", "night-of-power", "forgiveness", "last-10-nights"],
    scholar_verified: true,
    featured: true,
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
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["iftar", "fasting", "ramadan", "breaking-fast", "food"],
    scholar_verified: true,
    featured: true,
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

// Common Arabic/Islamic synonym expansions so searches like "zikr", "umrah",
// "mother", "wudhu" etc. still surface relevant results.
const SEARCH_SYNONYMS: Record<string, string[]> = {
  water:       ["drink", "drinking"],
  umrah:       ["travel", "hajj", "pilgrimage"],
  zikr:        ["dhikr", "remembrance"],
  jummah:      ["friday", "jumah"],
  jumah:       ["friday", "jummah"],
  namaz:       ["prayer", "salah"],
  wudhu:       ["wudu", "ablution"],
  wuzu:        ["wudu", "ablution"],
  mother:      ["parents", "mother"],
  father:      ["parents", "father"],
  mecca:       ["hajj", "travel", "pilgrimage"],
  makkah:      ["hajj", "travel", "pilgrimage"],
  kaaba:       ["hajj", "travel"],
  medina:      ["travel", "journey"],
  madinah:     ["travel", "journey"],
  pilgrimage:  ["hajj", "umrah", "travel"],
  sunnah:      ["prayer", "hadith", "worship"],
  subhanallah: ["glory", "glorification", "tasbih"],
  alhamdulillah: ["praise", "gratitude"],
  bismillah:   ["eating", "daily"],
  anger:       ["angry", "conflict", "shaytan"],
  loneliness:  ["lonely", "depression", "sadness"],
  lonely:      ["loneliness", "depression"],
  anxious:     ["anxiety", "stress", "worry"],
  anxiousness: ["anxiety", "stress", "worry"],
  worry:       ["anxiety", "stress", "worried"],
  depressed:   ["depression", "sadness", "grief"],
  grief:       ["sadness", "deceased", "death"],
  sick:        ["illness", "sickness", "healing"],
  heal:        ["healing", "illness", "ruqyah"],
  cure:        ["healing", "illness", "ruqyah", "shifa"],
  death:       ["deceased", "funeral", "janazah"],
  baby:        ["newborn", "children", "family"],
  child:       ["children", "family", "offspring"],
  exam:        ["studying", "knowledge", "wisdom"],
  study:       ["exam", "knowledge", "studying"],
  job:         ["rizq", "provision", "work"],
  money:       ["rizq", "provision", "debt"],
  debt:        ["financial", "poverty", "rizq"],
  sleep:       ["before-sleep", "bedtime", "night"],
  night:       ["before-sleep", "bedtime", "sleep"],
  morning:     ["adhkar", "waking-up"],
  evening:     ["adhkar", "night"],
  friday:      ["jummah", "jumah", "salawat"],
};

export function searchDuas(query: string): Dua[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  // Build expanded set of terms from synonyms (full-phrase lookup)
  const terms = Array.from(new Set([q, ...(SEARCH_SYNONYMS[q] ?? [])]));

  // Extract meaningful individual words — skip Islamic/search stopwords
  const STOPWORDS = new Set([
    "dua", "for", "the", "when", "before", "after", "and",
    "in", "a", "of", "to", "from", "upon", "with", "at",
  ]);
  const words = q.split(/\s+/).filter(
    (w) => w.length > 2 && !STOPWORDS.has(w)
  );

  // Expand individual words through synonyms too
  const expandedWords = Array.from(
    new Set([...words, ...words.flatMap((w) => SEARCH_SYNONYMS[w] ?? [])])
  );

  const fieldMatch = (d: Dua, t: string): boolean =>
    d.title.toLowerCase().includes(t) ||
    d.translation.toLowerCase().includes(t) ||
    d.transliteration.toLowerCase().includes(t) ||
    d.situation_tags.some((tag) => tag.includes(t)) ||
    d.emotion_tags.some((tag) => tag.includes(t)) ||
    d.category.includes(t) ||
    d.source_book.toLowerCase().includes(t);

  return DUAS.filter(
    (d) =>
      // 1. Full-phrase / synonym match (original behaviour, zero regressions)
      terms.some((t) => fieldMatch(d, t)) ||
      // 2. Word-level match — every meaningful word must appear somewhere
      (expandedWords.length > 0 && expandedWords.every((w) => fieldMatch(d, w)))
  );
}

export function getDailyDua(): Dua {
  // Guard: fall back to full DUAS list if no eligible duas are marked
  const pool = DAILY_DUA_POOL.length > 0 ? DAILY_DUA_POOL : DUAS;
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
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
