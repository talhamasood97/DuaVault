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
    emotion_tags: ["grateful", "hopeful"],
    situation_tags: ["before-sleep", "night", "bedtime"],
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
    emotion_tags: ["grateful"],
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
    situation_tags: ["eating", "food", "meal"],
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
    situation_tags: ["after-eating", "food", "gratitude"],
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
    situation_tags: ["wudu", "ablution", "purification"],
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
    emotion_tags: ["grateful", "hopeful"],
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
    emotion_tags: ["grateful"],
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
    emotion_tags: ["afraid", "stressed", "hopeful"],
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
    emotion_tags: ["seeking-forgiveness", "hopeful"],
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
    category: "quranic",
    emotion_tags: ["grateful", "hopeful", "sad"],
    situation_tags: ["parents", "family", "mercy", "quranic"],
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
    situation_tags: ["travel", "vehicle", "journey", "car", "plane"],
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
    situation_tags: ["travel", "returning", "journey"],
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
    emotion_tags: ["seeking-forgiveness", "sad", "hopeful", "stressed"],
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
    emotion_tags: ["sad", "stressed", "hopeful", "afraid"],
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
    emotion_tags: ["afraid", "stressed", "hopeful"],
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
    hadith_number: "3616",
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
      "اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    transliteration:
      "Allahumma laka sumtu wa bika amantu wa 'alayka tawakkaltu wa 'ala rizqika aftartu",
    translation:
      "O Allah, for You I fasted, and in You I believe, and upon You I rely, and with Your provision I break my fast.",
    source_book: "Sunan Abu Dawud",
    hadith_number: "2358",
    authenticity_grade: "HASAN",
    category: "worship",
    emotion_tags: ["grateful"],
    situation_tags: ["iftar", "ramadan", "fasting", "breaking-fast"],
    scholar_verified: true,
    featured: false,
    daily_dua_eligible: false,
  },
  {
    id: 34,
    slug: "dua-entering-ramadan",
    title: "Dua for Welcoming Ramadan",
    arabic_text:
      "اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبٍ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ",
    transliteration:
      "Allahumma barik lana fi Rajaba wa Sha'bana wa ballighna Ramadan",
    translation:
      "O Allah, bless us in Rajab and Sha'ban, and allow us to reach Ramadan.",
    source_book: "Musnad Ahmad",
    hadith_number: "2346",
    authenticity_grade: "HASAN",
    category: "worship",
    emotion_tags: ["hopeful", "grateful"],
    situation_tags: ["ramadan", "rajab", "shaban", "months"],
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
    category: "quranic",
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
    category: "quranic",
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
    emotion_tags: ["sad", "stressed", "lonely", "hopeful"],
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
    situation_tags: ["gratitude", "dhikr", "worship"],
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
    emotion_tags: ["stressed", "sad", "afraid", "hopeful"],
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
    situation_tags: ["friday", "jumu'ah", "salawat", "prophet"],
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
    emotion_tags: ["stressed", "afraid", "hopeful"],
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

export function searchDuas(query: string): Dua[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return DUAS.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.translation.toLowerCase().includes(q) ||
      d.transliteration.toLowerCase().includes(q) ||
      d.situation_tags.some((t) => t.includes(q)) ||
      d.source_book.toLowerCase().includes(q)
  );
}

export function getDailyDua(): Dua {
  const pool = DAILY_DUA_POOL;
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
