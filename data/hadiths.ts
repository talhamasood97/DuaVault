/**
 * 30 Authentic Hadiths on Morals & Character
 *
 * Sources: Sahih Bukhari, Sahih Muslim, Abu Dawud, Tirmidhi, Ibn Majah
 * All hadiths are graded Sahih or Hasan by classical hadith scholars.
 *
 * Arabic text and English translations sourced verbatim from Sunnah.com.
 * Full narration texts preserved, including narrator introductions and complete matn.
 */

import type { Hadith } from "@/types";

export const HADITHS: Hadith[] = [
  {
    id: 1,
    slug: "hadith-on-controlling-anger",
    title: "The True Meaning of Strength",
    arabic:
      "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    transliteration:
      "Laysa ash-shadīdu bis-sur'ah, innamal-shadīdu alladhī yamliku nafsahu 'indal-ghadab",
    translation:
      "Narrated Abu Huraira: Allah's Messenger (ﷺ) said, \"The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6114",
    grade: "Sahih",
    topic: "anger",
    topic_tags: ["anger", "self-control", "strength", "character"],
    daily_practice:
      "When you feel anger rising today, pause, breathe deeply, and choose your response deliberately.",
  },
  {
    id: 2,
    slug: "hadith-allah-loves-gentleness",
    title: "Allah Loves Gentleness",
    arabic:
      "اسْتَأْذَنَ رَهْطٌ مِنَ الْيَهُودِ عَلَى النَّبِيِّ صلى الله عليه وسلم فَقَالُوا السَّامُ عَلَيْكَ. فَقُلْتُ بَلْ عَلَيْكُمُ السَّامُ وَاللَّعْنَةُ. فَقَالَ: يَا عَائِشَةُ إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ. قُلْتُ: أَوَلَمْ تَسْمَعْ مَا قَالُوا؟ قَالَ: قُلْتُ وَعَلَيْكُمْ",
    transliteration:
      "Ista'dhana rahtun minal-Yahūdi 'alan-Nabiyyi ﷺ faqālūs-Sāmu 'alaik. Faqultu bal 'alaykumus-sāmu wal-la'nah. Faqāla: Yā 'Ā'isha, innallāha rafīqun yuhibbur-rifqa fil-amri kullihi. Qultu: Awa lam tasma' mā qālū? Qāla: Qultu wa 'alaykum",
    translation:
      "Narrated 'Aisha: A group of Jews asked permission to visit the Prophet (ﷺ) and when they were admitted they said, 'As-Samu 'Alaika (death be upon you).' I said (to them), 'But death and the curse of Allah be upon you!' The Prophet (ﷺ) said, 'O 'Aisha! Allah is kind and lenient and likes that one should be kind and lenient in all matters.' I said, 'Haven't you heard what they said?' He said, 'I said (to them), Wa 'Alaikum (and upon you).'",
    narrator: "Aisha (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6927",
    grade: "Sahih",
    topic: "gentleness",
    topic_tags: ["gentleness", "character", "kindness", "manners"],
    daily_practice:
      "Choose the gentle response in every interaction today — at home, at work, online.",
  },
  {
    id: 3,
    slug: "hadith-actions-by-intentions",
    title: "Actions Are Judged by Intentions",
    arabic:
      "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    transliteration:
      "Innamal-a'mālu bin-niyyāt, wa innamā likulli-mri'in mā nawā. Faman kānat hijratuhu ilā dunyā yusībuhā aw ilā imra'atin yankihuhā, fahijratuhu ilā mā hājara ilayh",
    translation:
      "Narrated 'Umar bin Al-Khattab: I heard Allah's Messenger (ﷺ) saying, \"The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for.\"",
    narrator: "Umar ibn al-Khattab (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "1",
    grade: "Sahih",
    topic: "intention",
    topic_tags: ["intention", "sincerity", "niyyah", "deeds"],
    daily_practice:
      "Before starting any task today, set a clear, sincere intention to please Allah.",
  },
  {
    id: 4,
    slug: "hadith-on-truthfulness",
    title: "Truthfulness Leads to Paradise",
    arabic:
      "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ وَإِنَّ الرَّجُلَ لَيَصْدُقُ حَتَّى يَكُونَ صِدِّيقًا وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ وَإِنَّ الرَّجُلَ لَيَكْذِبُ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا",
    transliteration:
      "Innas-sidqa yahdi ilal-birr, wa innal-birra yahdi ilal-jannah, wa innar-rajula layasduqu hattā yakūna siddīqā. Wa innal-kadhiba yahdi ilal-fujūr, wa innal-fujūra yahdi ilan-nār, wa innar-rajula layakdhibu hattā yuktaba 'indallāhi kadhdhābā",
    translation:
      "Narrated 'Abdullah: The Prophet (ﷺ) said, \"Truthfulness leads to righteousness, and righteousness leads to Paradise. And a man keeps on telling the truth until he becomes a truthful person. Falsehood leads to wickedness (Al-Fajur), and wickedness leads to the (Hell) Fire, and a man may keep on telling lies till he is written before Allah as a liar.\"",
    narrator: "Abdullah ibn Masud (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6094",
    grade: "Sahih",
    topic: "honesty",
    topic_tags: ["honesty", "truthfulness", "character", "paradise"],
    daily_practice:
      "Speak only the truth today, even when it is inconvenient or difficult.",
  },
  {
    id: 5,
    slug: "hadith-on-contentment",
    title: "True Richness is Contentment of the Soul",
    arabic:
      "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    transliteration:
      "Laysal-ghinā 'an kathratil-'arad, walākinnal-ghinā ghinan-nafs",
    translation:
      "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Wealth is not in having many possessions, but rather (true) wealth is feeling sufficiency in the soul.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6446",
    grade: "Sahih",
    topic: "contentment",
    topic_tags: ["contentment", "gratitude", "wealth", "materialism"],
    daily_practice:
      "List three things you already have that you are genuinely grateful for today.",
  },
  {
    id: 6,
    slug: "hadith-on-good-character",
    title: "Good Character on the Scale of Deeds",
    arabic:
      "مَا مِنْ شَىْءٍ أَثْقَلُ فِي الْمِيزَانِ مِنْ حُسْنِ الْخُلُقِ",
    transliteration:
      "Mā min shay'in athqalu fil-mīzāni min husnil-khuluq",
    translation:
      "Narrated AbudDarda': The Prophet (ﷺ) said, \"There is nothing heavier than good character put in the scale of a believer on the Day of Resurrection.\"",
    narrator: "Abu Darda (RA)",
    source_book: "Abu Dawud",
    hadith_number: "4799",
    grade: "Sahih",
    topic: "character",
    topic_tags: ["character", "akhlaq", "good manners", "judgement day"],
    daily_practice:
      "Let good manners guide every interaction you have today — one person at a time.",
  },
  {
    id: 7,
    slug: "hadith-muslim-safe-from-tongue-and-hands",
    title: "A True Muslim Does Not Harm Others",
    arabic:
      "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ",
    transliteration:
      "Al-Muslimu man salimaL-Muslimūna min lisānihi wa yadihi, wal-muhājiru man hajara mā nahal-lāhu 'anh",
    translation:
      "Narrated 'Abdullah bin 'Amr: The Prophet (ﷺ) said, \"A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden.\"",
    narrator: "Abdullah ibn Amr (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "10",
    grade: "Sahih",
    topic: "character",
    topic_tags: ["tongue", "harm", "character", "muslims", "community"],
    daily_practice:
      "Be conscious today — let no one around you be hurt by your words or actions.",
  },
  {
    id: 8,
    slug: "hadith-on-neighbors",
    title: "Your Neighbor's Safety is Your Responsibility",
    arabic:
      "وَاللَّهِ لاَ يُؤْمِنُ، وَاللَّهِ لاَ يُؤْمِنُ، وَاللَّهِ لاَ يُؤْمِنُ. قِيلَ: وَمَنْ يَا رَسُولَ اللَّهِ؟ قَالَ: الَّذِي لاَ يَأْمَنُ جَارُهُ بَوَايِقَهُ",
    transliteration:
      "Wallāhi lā yu'min, wallāhi lā yu'min, wallāhi lā yu'min. Qīla: Wa man yā rasūlallāh? Qāla: Alladhī lā ya'manu jāruhu bawā'iqah",
    translation:
      "Narrated Abu Shuraih: The Prophet (ﷺ) said, \"By Allah, he does not believe! By Allah, he does not believe! By Allah, he does not believe!\" It was said, \"Who is that, O Allah's Messenger (ﷺ)?\" He said, \"That person whose neighbor does not feel safe from his evil.\"",
    narrator: "Abu Shurayh al-Khuza'i (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6016",
    grade: "Sahih",
    topic: "neighbors",
    topic_tags: ["neighbors", "community", "rights", "character"],
    daily_practice:
      "Do something kind or at least harmless for a neighbor today — even a greeting counts.",
  },
  {
    id: 9,
    slug: "hadith-speak-good-or-stay-silent",
    title: "Speak Good or Stay Silent",
    arabic:
      "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلاَ يُؤْذِ جَارَهُ وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    transliteration:
      "Man kāna yu'minu billāhi wal-yawmil-ākhiri falā yu'dhi jārahu. Wa man kāna yu'minu billāhi wal-yawmil-ākhiri falyukrim dayfahu. Wa man kāna yu'minu billāhi wal-yawmil-ākhiri falyaqul khayran aw liyasmut",
    translation:
      "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Whoever believes in Allah and the Last Day, should not hurt his neighbor; and whoever believes in Allah and the Last Day, should serve his guest generously; and whoever believes in Allah and the Last Day, should speak what is good or keep silent.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6136",
    grade: "Sahih",
    topic: "speech",
    topic_tags: ["speech", "silence", "tongue", "character", "faith"],
    daily_practice:
      "Before speaking today, ask yourself: is this good, necessary, or kind? If not, stay silent.",
  },
  {
    id: 10,
    slug: "hadith-love-for-your-brother",
    title: "Love for Your Brother What You Love for Yourself",
    arabic:
      "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    transliteration:
      "Lā yu'minu ahadukum hattā yuhibba li-akhīhi mā yuhibbu li-nafsih",
    translation:
      "Narrated Anas: The Prophet (ﷺ) said, \"None of you will have faith till he wishes for his (Muslim) brother what he likes for himself.\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "13",
    grade: "Sahih",
    topic: "brotherhood",
    topic_tags: ["brotherhood", "empathy", "faith", "love", "community"],
    daily_practice:
      "Genuinely wish something good for someone today — and mean it.",
  },
  {
    id: 11,
    slug: "hadith-on-spreading-salaam",
    title: "Spread Peace Among Yourselves",
    arabic:
      "لاَ تَدْخُلُونَ الْجَنَّةَ حَتَّى تُؤْمِنُوا وَلاَ تُؤْمِنُوا حَتَّى تَحَابُّوا. أَوَلاَ أَدُلُّكُمْ عَلَى شَىْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُمْ؟ أَفْشُوا السَّلاَمَ بَيْنَكُمْ",
    transliteration:
      "Lā tadkhulūnal-jannata hattā tu'minū, wa lā tu'minū hattā tahābbū. Awa lā adullukum 'alā shay'in idhā fa'altumūhu tahābabtum? Afshūs-salāma baynakum",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"You shall not enter Paradise so long as you do not affirm belief, and you will not believe as long as you do not love one another. Should I not direct you to a thing which, if you do, will foster love amongst you: give currency to the practice of paying salutation to one another by saying As-salamu Alaikum.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "54",
    grade: "Sahih",
    topic: "community",
    topic_tags: ["salaam", "greeting", "love", "community", "brotherhood"],
    daily_practice:
      "Greet everyone you meet today with a warm salaam — it builds love.",
  },
  {
    id: 12,
    slug: "hadith-small-acts-of-kindness",
    title: "Never Belittle a Small Act of Kindness",
    arabic:
      "لاَ تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا وَلَوْ أَنْ تَلْقَى أَخَاكَ بِوَجْهٍ طَلْقٍ",
    transliteration:
      "Lā tahqiranna minal-ma'rūfi shay'an wa law an talqā akhāka bi-wajhin talq",
    translation:
      "Abu Dharr reported: Allah's Apostle (ﷺ) said to me, \"Don't consider anything insignificant out of good things even if it is that you meet your brother with a cheerful countenance.\"",
    narrator: "Abu Dharr (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2626",
    grade: "Sahih",
    topic: "kindness",
    topic_tags: ["kindness", "charity", "small deeds", "character"],
    daily_practice:
      "Do one small, overlooked act of kindness today — smile, hold a door, say a kind word.",
  },
  {
    id: 13,
    slug: "hadith-protect-yourself-with-charity",
    title: "Protect Yourself from the Fire with Charity",
    arabic: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ",
    transliteration: "Ittaqun-nāra wa law bishiqqi tamra",
    translation:
      "Narrated 'Adi bin Hatim: I heard the Prophet (ﷺ) saying, \"Save yourself from Hell-fire even by giving half a date-fruit in charity.\"",
    narrator: "Adiyy ibn Hatim (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "1417",
    grade: "Sahih",
    topic: "charity",
    topic_tags: ["charity", "sadaqah", "generosity", "hellfire"],
    daily_practice:
      "Give something in charity today, no matter how small — it protects you more than you know.",
  },
  {
    id: 14,
    slug: "hadith-modesty-brings-good",
    title: "Modesty Brings Nothing But Good",
    arabic:
      "الْحَيَاءُ لاَ يَأْتِي إِلاَّ بِخَيْرٍ. فَقَالَ بُشَيْرُ بْنُ كَعْبٍ: مَكْتُوبٌ فِي الْحِكْمَةِ إِنَّ مِنَ الْحَيَاءِ وَقَارًا وَإِنَّ مِنَ الْحَيَاءِ سَكِينَةً. فَقَالَ لَهُ عِمْرَانُ: أُحَدِّثُكَ عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم وَتُحَدِّثُنِي عَنْ صَحِيفَتِكَ",
    transliteration:
      "Al-hayā'u lā ya'tī illā bi-khayr. Faqāla Bushayr ibnu Ka'b: Maktūbun fil-hikmati inna minal-hayā'i waqāran wa inna minal-hayā'i sakīnah. Faqāla lahu 'Imrān: Uhaddithuka 'an rasūlillāhi ﷺ wa tuhaddithunī 'an sahīfatik",
    translation:
      "Narrated Abu As-Sawar Al-Adawi: 'Imran bin Husain said, the Prophet (ﷺ) said, \"Haya' (pious shyness) does not bring anything except good.\" Thereupon Bashir bin Ka'b said, \"It is written in the wisdom paper: Haya' leads to solemnity; Haya' leads to tranquility (peace of mind).\" 'Imran said to him, \"I am narrating to you the saying of Allah's Messenger (ﷺ) and you are speaking about your paper (wisdom book)?\"",
    narrator: "Imran ibn Husayn (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6117",
    grade: "Sahih",
    topic: "modesty",
    topic_tags: ["modesty", "hayaa", "character", "virtue"],
    daily_practice:
      "Let modesty guide your words, dress, and actions today — it is always the better choice.",
  },
  {
    id: 15,
    slug: "hadith-show-mercy-receive-mercy",
    title: "Show Mercy to Those on Earth",
    arabic:
      "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ. ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ. الرَّحِمُ شُجْنَةٌ مِنَ الرَّحْمَنِ فَمَنْ وَصَلَهَا وَصَلَهُ اللَّهُ وَمَنْ قَطَعَهَا قَطَعَهُ اللَّهُ",
    transliteration:
      "Ar-rāhimūna yarhamuhumu-r-Rahmān. Irhamū man fil-ardi yarhamkum man fis-samā'. Ar-rahimu shujnatun minar-Rahmān, faman wasalahā wasalahullāh, wa man qata'ahā qata'ahullāh",
    translation:
      "Abdullah bin 'Amr narrated that the Messenger of Allah (ﷺ) said, \"The merciful are shown mercy by Ar-Rahman. Be merciful on the earth, and you will be shown mercy from Who is above the heavens. The womb is named after Ar-Rahman, so whoever connects it, Allah connects him, and whoever severs it, Allah severs him.\"",
    narrator: "Abdullah ibn Amr (RA)",
    source_book: "Tirmidhi",
    hadith_number: "1924",
    grade: "Sahih",
    topic: "mercy",
    topic_tags: ["mercy", "rahma", "compassion", "character"],
    daily_practice:
      "Show patience and genuine compassion to someone who is difficult to deal with today.",
  },
  {
    id: 16,
    slug: "hadith-best-to-family",
    title: "The Best of You is Best to His Family",
    arabic:
      "خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي وَإِذَا مَاتَ صَاحِبُكُمْ فَدَعُوهُ",
    transliteration:
      "Khayrukum khayrukum li-ahlihi wa ana khayrukum li-ahli, wa idhā māta sāhibukum fada'ūh",
    translation:
      "Narrated 'Aishah: that the Messenger of Allah (ﷺ) said, \"The best of you is the best to his wives, and I am the best of you to my wives, and when your companion dies, leave him alone.\"",
    narrator: "Aisha (RA)",
    source_book: "Tirmidhi",
    hadith_number: "3895",
    grade: "Sahih",
    topic: "family",
    topic_tags: ["family", "marriage", "kindness", "character", "husband"],
    daily_practice:
      "Do something genuinely kind for a family member today — without being asked.",
  },
  {
    id: 17,
    slug: "hadith-on-backbiting",
    title: "What is Backbiting?",
    arabic:
      "أَتَدْرُونَ مَا الْغِيبَةُ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ. قِيلَ: أَفَرَأَيْتَ إِنْ كَانَ فِي أَخِي مَا أَقُولُ؟ قَالَ: إِنْ كَانَ فِيهِ مَا تَقُولُ فَقَدِ اغْتَبْتَهُ وَإِنْ لَمْ يَكُنْ فِيهِ فَقَدْ بَهَتَّهُ",
    transliteration:
      "Atadūna mal-ghība? Qālū: Allāhu wa rasūluhu a'lam. Qāla: Dhikruka akhāka bimā yakrah. Qīla: Afara'ayta in kāna fī akhī mā aqūl? Qāla: In kāna fīhi mā taqūlu faqad ightabtahu, wa in lam yakun fīhi faqad bahattah",
    translation:
      "Abu Huraira reported Allah's Messenger (ﷺ) as saying: \"Do you know what is backbiting?\" They (the Companions) said: Allah and His Messenger know best. Thereupon he (the Holy Prophet) said: \"Backbiting implies your talking about your brother in a manner which he does not like.\" It was said to him: What is your opinion if I actually find (that failing) in my brother which I made mention of? He said: \"If (that failing) is actually found (in him) what you assert, you in fact backbited him, and if that is not in him it is a slander.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2589",
    grade: "Sahih",
    topic: "speech",
    topic_tags: ["backbiting", "gheebah", "tongue", "speech", "character"],
    daily_practice:
      "If a conversation turns to criticising someone absent, gently change the subject.",
  },
  {
    id: 18,
    slug: "hadith-thank-people-to-thank-allah",
    title: "Thank People to Thank Allah",
    arabic:
      "لاَ يَشْكُرُ اللَّهَ مَنْ لاَ يَشْكُرُ النَّاسَ",
    transliteration:
      "Lā yashkurullāha man lā yashkurun-nās",
    translation:
      "Narrated Abu Hurayrah: The Prophet (ﷺ) said, \"He who does not thank the people is not thankful to Allah.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Abu Dawud",
    hadith_number: "4811",
    grade: "Sahih",
    topic: "gratitude",
    topic_tags: ["gratitude", "shukr", "thankfulness", "character"],
    daily_practice:
      "Thank at least one person sincerely today — tell them specifically what you appreciate.",
  },
  {
    id: 19,
    slug: "hadith-purification-half-of-faith",
    title: "Purification is Half of Faith",
    arabic:
      "الطُّهُورُ شَطْرُ الإِيمَانِ وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ مَا بَيْنَ السَّمَوَاتِ وَالأَرْضِ وَالصَّلاَةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ وَالصَّبْرُ ضِيَاءٌ وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ كُلُّ النَّاسِ يَغْدُو فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوبِقُهَا",
    transliteration:
      "At-tuhūru shatrul-īmān. Wal-hamdu lillāhi tamla'ul-mīzān. Wa subhānallāhi wal-hamdu lillāhi tamla'āni mā baynas-samawāti wal-ard. Was-salātu nūr. Was-sadaqatu burhān. Was-sabru diyā'. Wal-qur'ānu hujjatun laka aw 'alayk. Kullun-nāsi yaghdū fabā'i'un nafsahu famu'tiquhā aw mūbiquhā",
    translation:
      "Abu Malik at-Ash'ari reported: The Messenger of Allah (ﷺ) said, \"Cleanliness is half of faith and al-Hamdu Lillah fills the scale, and Subhan Allah and al-Hamdu Lillah fill up what is between the heavens and the earth, and prayer is a light, and charity is proof (of one's faith) and endurance is a brightness and the Holy Qur'an is a proof on your behalf or against you. All men go out early in the morning and sell themselves, thereby setting themselves free or destroying themselves.\"",
    narrator: "Abu Malik al-Ash'ari (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "223",
    grade: "Sahih",
    topic: "cleanliness",
    topic_tags: ["cleanliness", "purity", "taharah", "faith", "hygiene"],
    daily_practice:
      "Maintain your physical cleanliness today as a conscious act of faith, not just habit.",
  },
  {
    id: 20,
    slug: "hadith-removing-harm-is-charity",
    title: "Every Good Deed is Charity",
    arabic:
      "كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ يَعْدِلُ بَيْنَ الاِثْنَيْنِ صَدَقَةٌ وَيُعِينُ الرَّجُلَ عَلَى دَابَّتِهِ فَيَحْمِلُ عَلَيْهَا أَوْ يَرْفَعُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ وَكُلُّ خَطْوَةٍ يَخْطُوهَا إِلَى الصَّلاَةِ صَدَقَةٌ وَيُمِيطُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
    transliteration:
      "Kullu sulāmy minan-nāsi 'alayhi sadaqatun kulla yawmin tatlu'u fīhish-shams. Ya'dilu baynal-ithnayn sadaqah. Wa yu'īnur-rajula 'alā dābbatihi fayahmilu 'alayhā aw yarfa'u 'alayhā matā'ahu sadaqah. Wal-kalimatu-t-tayyibatu sadaqah. Wa kullu khutwa yakhtūhā ilas-salāti sadaqah. Wa yumītul-adhā 'anit-tarīqi sadaqah",
    translation:
      "Narrated Abu Huraira: Allah's Messenger (ﷺ) said, \"There is a (compulsory) Sadaqa (charity) to be given for every joint of the human body every day the sun rises. To judge justly between two persons is regarded as Sadaqa, and to help a man concerning his riding animal by helping him to ride it or by lifting his luggage on to it is also regarded as Sadaqa, and (saying) a good word is also Sadaqa, and every step taken on one's way to offer the compulsory prayer is also Sadaqa, and to remove a harmful thing from the way is also Sadaqa.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "2989",
    grade: "Sahih",
    topic: "service",
    topic_tags: ["charity", "sadaqah", "community", "service", "small deeds"],
    daily_practice:
      "Remove or fix something today that could cause inconvenience or harm to others.",
  },
  {
    id: 21,
    slug: "hadith-make-things-easy",
    title: "Make Things Easy, Not Difficult",
    arabic:
      "يَسِّرُوا وَلاَ تُعَسِّرُوا وَبَشِّرُوا وَلاَ تُنَفِّرُوا",
    transliteration:
      "Yassirū wa lā tu'assirū wa bashshirū wa lā tunaffirū",
    translation:
      "Narrated Anas bin Malik: The Prophet (ﷺ) said, \"Facilitate things to people (concerning religious matters), and do not make it hard for them and give them good tidings and do not make them run away (from Islam).\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "69",
    grade: "Sahih",
    topic: "ease",
    topic_tags: ["ease", "facilitation", "positivity", "character", "da'wah"],
    daily_practice:
      "When you can make something easier for someone today — do it without hesitation.",
  },
  {
    id: 22,
    slug: "hadith-the-best-repent",
    title: "The Best of Those Who Sin Are Those Who Repent",
    arabic:
      "كُلُّ ابْنِ آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
    transliteration:
      "Kullu banī Ādama khattā'un wa khayrul-khattā'īna at-tawwābūn",
    translation:
      "Anas reported that the Messenger of Allah (ﷺ) said, \"Every son of Adam sins, and the best of the sinners are the repentant.\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Tirmidhi",
    hadith_number: "2499",
    grade: "Sahih",
    topic: "repentance",
    topic_tags: ["repentance", "tawbah", "forgiveness", "hope", "mistakes"],
    daily_practice:
      "If you made a mistake today, follow it immediately with sincere repentance and a good deed.",
  },
  {
    id: 23,
    slug: "hadith-supplication-is-worship",
    title: "Supplication is the Essence of Worship",
    arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    transliteration: "Ad-du'ā'u huwal-'ibādah",
    translation:
      "Narrated An-Nu'man bin Bashir: from the Prophet (ﷺ) regarding Allah's saying, \"Your Lord said: Invoke Me, I shall respond to you\" — he said, \"The supplication is the worship,\" then he recited: \"Indeed, those who disdain My worship will enter Hell in humiliation.\" (Ghafir 40:60)",
    narrator: "Al-Nu'man ibn Bashir (RA)",
    source_book: "Tirmidhi",
    hadith_number: "2969",
    grade: "Sahih",
    topic: "worship",
    topic_tags: ["dua", "supplication", "worship", "prayer", "ibadah"],
    daily_practice:
      "Turn to Allah in sincere supplication today — even for something small.",
  },
  {
    id: 24,
    slug: "hadith-seeking-knowledge-is-obligatory",
    title: "Seeking Knowledge is Obligatory",
    arabic:
      "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ وَوَاضِعُ الْعِلْمِ عِنْدَ غَيْرِ أَهْلِهِ كَمُقَلِّدِ الْخَنَازِيرِ الْجَوْهَرَ وَاللُّؤْلُؤَ وَالذَّهَبَ",
    transliteration:
      "Talabul-'ilmi farīdatun 'alā kulli Muslim. Wa wādi'ul-'ilmi 'inda ghayri ahlihi kammuqallidil-khanāzīri-l-jawhar wal-lu'lu'a wadh-dhahab",
    translation:
      "It was narrated from Anas bin Malik that the Messenger of Allah (ﷺ) said, \"Seeking knowledge is a duty upon every Muslim, and he who imparts knowledge to those who do not deserve it, is like one who puts a necklace of jewels, pearls and gold around the neck of swine.\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Ibn Majah",
    hadith_number: "224",
    grade: "Sahih",
    topic: "knowledge",
    topic_tags: ["knowledge", "'ilm", "learning", "education", "obligation"],
    daily_practice:
      "Learn one piece of beneficial Islamic or worldly knowledge today and act on it.",
  },
  {
    id: 25,
    slug: "hadith-leave-what-does-not-concern-you",
    title: "Leave What Does Not Concern You",
    arabic:
      "مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ",
    transliteration:
      "Min husni islāmil-mar'i tarkuhu mā lā ya'nīhi",
    translation:
      "Abu Hurairah narrated that the Messenger of Allah (ﷺ) said, \"Indeed among the excellence of a person's Islam is that he leaves what does not concern him.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Tirmidhi",
    hadith_number: "2317",
    grade: "Hasan",
    topic: "mindfulness",
    topic_tags: ["focus", "mindfulness", "character", "boundaries", "wisdom"],
    daily_practice:
      "Let go of one thing today that is none of your concern — and find peace in that release.",
  },
  {
    id: 26,
    slug: "hadith-on-severing-kinship",
    title: "Do Not Sever the Ties of Kinship",
    arabic:
      "لاَ يَدْخُلُ الْجَنَّةَ قَاطِعٌ",
    transliteration: "Lā yadkhulul-jannata qāti'",
    translation:
      "Narrated Jubair bin Mut'im: That he heard the Prophet (ﷺ) saying, \"The person who severs the bond of kinship will not enter Paradise.\"",
    narrator: "Jubayr ibn Mut'im (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "5984",
    grade: "Sahih",
    topic: "family",
    topic_tags: ["family", "kinship", "silatur-rahim", "relationships"],
    daily_practice:
      "Reach out to a family member you have not spoken to in a while — today.",
  },
  {
    id: 27,
    slug: "hadith-fulfill-the-trust",
    title: "Fulfill the Trust Placed in You",
    arabic:
      "أَدِّ الأَمَانَةَ إِلَى مَنِ ائْتَمَنَكَ وَلاَ تَخُنْ مَنْ خَانَكَ",
    transliteration:
      "Addil-amānata ilā man a'tamanaka wa lā takhun man khānaka",
    translation:
      "Narrated Abu Huraira: The Messenger of Allah (ﷺ) said, \"Pay the deposit to him who deposited it with you, and do not betray him who betrays you.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Abu Dawud",
    hadith_number: "3534",
    grade: "Sahih",
    topic: "trustworthiness",
    topic_tags: ["amanah", "trust", "integrity", "honesty", "character"],
    daily_practice:
      "Honour every commitment and word you have given today — no matter how small.",
  },
  {
    id: 28,
    slug: "hadith-fear-allah-and-good-character",
    title: "Fear Allah and Treat People Well",
    arabic:
      "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    transliteration:
      "Ittaqillāha haythuma kunta, wa atbi'is-sayyi'atal-hasanata tamhuhā, wa khāliqin-nāsa bi-khuluqin hasan",
    translation:
      "Abu Dharr said: The Messenger of Allah (ﷺ) said to me, \"Have Taqwa of Allah wherever you are, and follow an evil deed with a good one to wipe it out, and treat the people with good behavior.\"",
    narrator: "Abu Dharr (RA)",
    source_book: "Tirmidhi",
    hadith_number: "1987",
    grade: "Hasan",
    topic: "character",
    topic_tags: ["taqwa", "character", "repentance", "people", "good deeds"],
    daily_practice:
      "If you fall short today, follow it immediately with a good deed — and smile at someone.",
  },
  {
    id: 29,
    slug: "hadith-smile-is-charity",
    title: "Your Smile is an Act of Charity",
    arabic:
      "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ وَأَمْرُكَ بِالْمَعْرُوفِ وَنَهْيُكَ عَنِ الْمُنْكَرِ صَدَقَةٌ وَإِرْشَادُكَ الرَّجُلَ فِي أَرْضِ الضَّلاَلِ لَكَ صَدَقَةٌ وَبَصَرُكَ لِلرَّجُلِ الرَّدِيءِ الْبَصَرِ لَكَ صَدَقَةٌ وَإِمَاطَتُكَ الْحَجَرَ وَالشَّوْكَةَ وَالْعَظْمَ عَنِ الطَّرِيقِ لَكَ صَدَقَةٌ وَإِفْرَاغُكَ مِنْ دَلْوِكَ فِي دَلْوِ أَخِيكَ لَكَ صَدَقَةٌ",
    transliteration:
      "Tabasumuka fī wajhi akhīka laka sadaqah. Wa amruka bil-ma'rūfi wa nahyuka 'anil-munkari sadaqah. Wa irshāduka-r-rajula fī ardid-dalāli laka sadaqah. Wa basaruka lir-rajulir-radī'il-basari laka sadaqah. Wa imātatukal-hajara wash-shawkata wal-'azma 'anit-tarīqi laka sadaqah. Wa ifrāghuka min dalwika fī dalwi akhīka laka sadaqah",
    translation:
      "Abu Dharr reported that the Messenger of Allah (ﷺ) said, \"Your smiling in the face of your brother is charity, commanding good and forbidding evil is charity, your giving directions to a man lost in the land is charity for you, your seeing for a man with bad sight is a charity for you, your removal of a rock, a thorn or a bone from the road is charity for you, and your pouring what remains from your bucket into the bucket of your brother is charity for you.\"",
    narrator: "Abu Dharr (RA)",
    source_book: "Tirmidhi",
    hadith_number: "1956",
    grade: "Hasan",
    topic: "kindness",
    topic_tags: ["smile", "charity", "sadaqah", "kindness", "interaction"],
    daily_practice:
      "Let your face carry warmth today — your smile is a form of worship and a gift to others.",
  },
  {
    id: 30,
    slug: "hadith-feed-visit-free",
    title: "Feed, Visit, and Help",
    arabic:
      "أَطْعِمُوا الْجَائِعَ وَعُودُوا الْمَرِيضَ وَفُكُّوا الْعَانِيَ",
    transliteration:
      "At'imul-jā'i'a, wa 'ūdul-marīd, wa fukkul-'āni",
    translation:
      "Narrated Abu Musa Al-Ash'ari: The Prophet (ﷺ) said, \"Give food to the hungry, pay a visit to the sick and release (set free) the one in captivity (by paying his ransom).\"",
    narrator: "Abu Musa al-Ash'ari (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "5373",
    grade: "Sahih",
    topic: "service",
    topic_tags: ["service", "community", "charity", "visiting sick", "kindness"],
    daily_practice:
      "Do one act of service today — share food, check on someone unwell, or lighten someone's burden.",
  },
];

// ── Utilities ─────────────────────────────────────────────────────────────────

export function getHadithBySlug(slug: string): Hadith | undefined {
  return HADITHS.find((h) => h.slug === slug);
}

export function getDailyHadith(): Hadith {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = Date.now() - start.getTime();
  const dayOfYear = Math.floor(diff / 86_400_000);
  return HADITHS[dayOfYear % HADITHS.length];
}

export function getAllHadithSlugs(): string[] {
  return HADITHS.map((h) => h.slug);
}
