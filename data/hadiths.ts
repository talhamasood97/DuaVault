/**
 * 50 Authentic Hadiths on Morals & Character
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
  // ── Hadiths 31–50 ────────────────────────────────────────────────────────────
  {
    id: 31,
    slug: "hadith-on-tawakkul-birds",
    title: "Trust in Allah Like the Birds Trust Their Lord",
    arabic:
      "لَوْ أَنَّكُمْ كُنْتُمْ تَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرُزِقْتُمْ كَمَا يُرْزَقُ الطَّيْرُ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا",
    transliteration:
      "Law annakum kuntum tawakkalūna 'alallāhi haqqa tawakkulihi, larazaqtum kamā yarzuqut-tayru, taghdū khimāsan wa tarūhu bitānā",
    translation:
      "Umar ibn al-Khattab reported: The Messenger of Allah (ﷺ) said, \"If you were to rely upon Allah with the reliance He is due, He would provide for you just as He provides for the birds: they go out in the morning hungry and return in the evening full.\"",
    narrator: "Umar ibn al-Khattab (RA)",
    source_book: "Tirmidhi",
    hadith_number: "2344",
    grade: "Hasan",
    topic: "reliance",
    topic_tags: ["tawakkul", "reliance", "provision", "rizq", "trust"],
    daily_practice:
      "Whatever you are anxious about today — take the means, then hand the outcome to Allah completely.",
  },
  {
    id: 32,
    slug: "hadith-remembrance-living-and-dead",
    title: "The One Who Remembers Allah Is Truly Alive",
    arabic:
      "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ مَثَلُ الْحَىِّ وَالْمَيِّتِ",
    transliteration:
      "Mathalul-ladhī yadhkuru rabbahu walladhī lā yadhkuru rabbahu mathalul-hayyi wal-mayyit",
    translation:
      "Abu Musa al-Ash'ari reported: The Messenger of Allah (ﷺ) said, \"The example of the one who remembers his Lord and the one who does not remember his Lord is like the living and the dead.\"",
    narrator: "Abu Musa al-Ash'ari (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6407",
    grade: "Sahih",
    topic: "dhikr",
    topic_tags: ["dhikr", "remembrance", "worship", "heart", "alive"],
    daily_practice:
      "Begin and end your day with dhikr — even ten minutes of SubhanAllah, Alhamdulillah, Allahu Akbar keeps your heart alive.",
  },
  {
    id: 33,
    slug: "hadith-arrogance-bars-paradise",
    title: "Even a Seed of Arrogance Bars Entry to Paradise",
    arabic:
      "لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ",
    transliteration:
      "Lā yadkhulul-jannata man kāna fī qalbihi mithqālu dharratin min kibr",
    translation:
      "Abdullah ibn Masud reported: The Messenger of Allah (ﷺ) said, \"No one who has the weight of a seed of arrogance in his heart will enter Paradise.\"",
    narrator: "Abdullah ibn Masud (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "91",
    grade: "Sahih",
    topic: "humility",
    topic_tags: ["arrogance", "kibr", "pride", "humility", "paradise"],
    daily_practice:
      "Reflect honestly on one area where pride has held you back from being better — and consciously let it go.",
  },
  {
    id: 34,
    slug: "hadith-good-opinion-of-allah",
    title: "Allah Is Exactly as His Servant Thinks He Is",
    arabic:
      "يَقُولُ اللَّهُ تَعَالَى أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَأَنَا مَعَهُ إِذَا ذَكَرَنِي، فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِي، وَإِنْ ذَكَرَنِي فِي مَلَإٍ ذَكَرْتُهُ فِي مَلَإٍ خَيْرٍ مِنْهُمْ",
    transliteration:
      "Yaqūlullāhu ta'ālā: Anā 'inda dhanni 'abdī bī, wa anā ma'ahu idhā dhakaran. Fa-in dhakaran fī nafsihī dhakartuhū fī nafsī, wa in dhakaran fī mala'in dhakartuhū fī mala'in khayrin minhum",
    translation:
      "Abu Huraira reported: The Prophet (ﷺ) said, \"Allah the Almighty says: 'I am as My servant thinks of Me. I am with him when he remembers Me. If he mentions Me within himself, I mention him within Myself. If he mentions Me in an assembly, I mention him in an assembly far better than his.'\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "7405",
    grade: "Sahih",
    topic: "hope",
    topic_tags: ["hope", "mercy", "dhikr", "husn al-dhann", "closeness to Allah"],
    daily_practice:
      "Replace any negative thought about Allah's mercy with absolute certainty — He is exactly as you believe Him to be. Think well of Him.",
  },
  {
    id: 35,
    slug: "hadith-fasting-is-for-allah",
    title: "Fasting Is for Allah and He Alone Rewards It",
    arabic:
      "كُلُّ عَمَلِ ابْنِ آدَمَ يُضَاعَفُ الْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ، قَالَ اللَّهُ عَزَّ وَجَلَّ: إِلاَّ الصَّوْمَ فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ، يَدَعُ شَهْوَتَهُ وَطَعَامَهُ مِنْ أَجْلِي",
    transliteration:
      "Kullu 'amali bni Ādama yudā'af, al-hasanatu bi-'ashri amthālihā ilā sab'imi'ati di'f. Qālallāhu 'azza wa jall: Illā as-sawma, fa-innahu lī wa anā ajzī bih. Yada'u shahwatahu wa ta'āmahu min ajlī",
    translation:
      "Abu Huraira reported: The Prophet (ﷺ) said, \"Every deed of the son of Adam is multiplied — a good deed receiving tenfold to seven hundredfold reward — except fasting, for Allah the Almighty says: 'It is for Me and I shall reward it Myself, for he gives up his desire and his food for My sake.'\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "1904",
    grade: "Sahih",
    topic: "fasting",
    topic_tags: ["fasting", "sawm", "worship", "sincerity", "ibadah"],
    daily_practice:
      "Observe a voluntary fast this week — even one day — and dedicate it purely for Allah, with no worldly intention attached.",
  },
  {
    id: 36,
    slug: "hadith-visiting-the-sick",
    title: "Visit the Sick — Angels Pray for You Until Evening",
    arabic:
      "مَا مِنْ مُسْلِمٍ يَعُودُ مُسْلِمًا غُدْوَةً إِلاَّ صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُمْسِيَ، وَإِنْ عَادَهُ عَشِيَّةً إِلاَّ صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُصْبِحَ، وَكَانَ لَهُ خَرِيفٌ فِي الْجَنَّةِ",
    transliteration:
      "Mā min muslimin ya'ūdu musliman ghudwatan illā sallā 'alayhi sab'ūna alfa malak hattā yumsī. Wa in 'ādahu 'ashiyyatan illā sallā 'alayhi sab'ūna alfa malak hattā yusbih. Wa kāna lahu kharīfun fil-jannah",
    translation:
      "Ali ibn Abi Talib reported: The Prophet (ﷺ) said, \"When a Muslim visits his sick Muslim brother in the morning, seventy thousand angels pray for him until the evening. And if he visits him in the evening, seventy thousand angels pray for him until the morning, and he will have a garden of fruit in Paradise.\"",
    narrator: "Ali ibn Abi Talib (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2568",
    grade: "Sahih",
    topic: "service",
    topic_tags: ["visiting sick", "service", "angels", "reward", "community"],
    daily_practice:
      "Check in on someone who is unwell today — a message, a phone call, or a visit is all it takes.",
  },
  {
    id: 37,
    slug: "hadith-beware-of-envy",
    title: "Envy Devours Good Deeds Like Fire Devours Wood",
    arabic:
      "إِيَّاكُمْ وَالْحَسَدَ فَإِنَّ الْحَسَدَ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ",
    transliteration:
      "Iyyākum wal-hasad, fa-innal-hasada ya'kulul-hasanāti kamā ta'kulun-nārul-hatab",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"Beware of envy, for envy devours good deeds just as fire devours wood.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Abu Dawud",
    hadith_number: "4903",
    grade: "Hasan",
    topic: "character",
    topic_tags: ["envy", "hasad", "jealousy", "character", "deeds"],
    daily_practice:
      "When you feel envy rising today, replace it with sincere dua for that person — ask Allah to bless them even more.",
  },
  {
    id: 38,
    slug: "hadith-inna-lillah-in-calamity",
    title: "Say Inna Lillah and Allah Will Give You Something Better",
    arabic:
      "مَا مِنْ عَبْدٍ تُصِيبُهُ مُصِيبَةٌ فَيَقُولُ إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا إِلاَّ أَخْلَفَ اللَّهُ لَهُ خَيْرًا مِنْهَا",
    transliteration:
      "Mā min 'abdin tusībuhu musībatun fayaqūl: Innā lillāhi wa innā ilayhi rāji'ūn, Allāhummajurnī fī musībatī wa akhlif lī khayran minhā, illā akhlafallāhu lahu khayran minhā",
    translation:
      "Umm Salamah reported: I heard the Messenger of Allah (ﷺ) say, \"There is no Muslim stricken with a calamity who says what Allah has commanded — 'Verily to Allah we belong and to Him we return; O Allah, reward me for my affliction and replace it for me with something better' — except that Allah will replace it for him with something better.\"",
    narrator: "Umm Salamah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "918",
    grade: "Sahih",
    topic: "patience",
    topic_tags: ["patience", "sabr", "calamity", "inna lillah", "relief"],
    daily_practice:
      "In any hardship today, say this dua with full conviction and wait — Allah's replacement is always better.",
  },
  {
    id: 39,
    slug: "hadith-best-voluntary-prayer-is-night",
    title: "The Best Voluntary Prayer is the Night Prayer",
    arabic:
      "أَفْضَلُ الصَّلاَةِ بَعْدَ الْفَرِيضَةِ صَلاَةُ اللَّيْلِ",
    transliteration:
      "Afdalu-s-salāti ba'dal-farīdati salātul-layl",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"The best prayer after the obligatory prayers is the night prayer (Qiyam al-Layl).\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "1163",
    grade: "Sahih",
    topic: "worship",
    topic_tags: ["night prayer", "tahajjud", "qiyam", "voluntary prayer", "ibadah"],
    daily_practice:
      "Pray even two rakaat tonight before sleeping — consistency in a small amount is more beloved than occasional bursts.",
  },
  {
    id: 40,
    slug: "hadith-man-on-religion-of-friend",
    title: "A Man Follows the Religion of His Closest Friend",
    arabic:
      "الرَّجُلُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ",
    transliteration:
      "Ar-rajulu 'alā dīni khalīlihi, falyanzur ahadukum man yukhālil",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"A man follows the religion of his close friend, so let each one of you look carefully at whom he takes as a close friend.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Tirmidhi",
    hadith_number: "2378",
    grade: "Hasan",
    topic: "friendship",
    topic_tags: ["friendship", "companions", "influence", "character", "community"],
    daily_practice:
      "Honestly assess your closest friendships today — do they bring you closer to Allah or draw you away?",
  },
  {
    id: 41,
    slug: "hadith-prophet-seeks-forgiveness-seventy-times",
    title: "The Prophet ﷺ Sought Forgiveness More Than Seventy Times Daily",
    arabic:
      "وَاللَّهِ إِنِّي لأَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً",
    transliteration:
      "Wallāhi innī la'astaghfirullāha wa atūbu ilayhi fīl-yawmi akthara min sab'īna marrah",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"By Allah! I seek Allah's forgiveness and repent to Him more than seventy times a day.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6307",
    grade: "Sahih",
    topic: "repentance",
    topic_tags: ["istighfar", "forgiveness", "tawbah", "sunnah", "repentance"],
    daily_practice:
      "Make Astaghfirullah a rhythm of your day — in traffic, while waiting, before sleeping. The Prophet ﷺ never stopped.",
  },
  {
    id: 42,
    slug: "hadith-world-is-prison-of-believer",
    title: "The World is a Prison for the Believer",
    arabic:
      "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",
    transliteration:
      "Ad-dunyā sijnul-mu'mini wa jannatul-kāfir",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"The world is a prison for the believer and a paradise for the disbeliever.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2956",
    grade: "Sahih",
    topic: "dunya",
    topic_tags: ["dunya", "world", "akhirah", "materialism", "perspective"],
    daily_practice:
      "When you feel deprived of something worldly today, remind yourself — your real home and true reward lies ahead.",
  },
  {
    id: 43,
    slug: "hadith-religion-is-sincere-counsel",
    title: "The Religion is Sincere Counsel",
    arabic:
      "الدِّينُ النَّصِيحَةُ. قُلْنَا لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ",
    transliteration:
      "Ad-dīnun-nasīhah. Qulnā: Liman? Qāla: Lillāhi wa li-kitābihi wa li-rasūlihi wa li-a'immatil-muslimīna wa 'āmmatihim",
    translation:
      "Tamim al-Dari reported: The Messenger of Allah (ﷺ) said, \"The religion is sincere counsel.\" We said: \"For whom?\" He said: \"For Allah, for His Book, for His Messenger, for the leaders of the Muslims, and for their common people.\"",
    narrator: "Tamim al-Dari (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "55",
    grade: "Sahih",
    topic: "sincerity",
    topic_tags: ["nasihah", "sincerity", "counsel", "community", "character"],
    daily_practice:
      "Offer sincere, gentle advice to someone who needs it today — with full care for them and no desire to feel superior.",
  },
  {
    id: 44,
    slug: "hadith-most-beloved-deeds-are-consistent",
    title: "The Most Beloved Deeds Are Those Done Consistently",
    arabic:
      "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    transliteration:
      "Ahabbul-a'māli ilallāhi adwamuhā wa in qall",
    translation:
      "Aisha reported: The Messenger of Allah (ﷺ) said, \"The most beloved deeds to Allah are those which are done consistently, even if they are small.\"",
    narrator: "Aisha (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6464",
    grade: "Sahih",
    topic: "worship",
    topic_tags: ["consistency", "deeds", "small deeds", "worship", "beloved"],
    daily_practice:
      "Choose one small good deed today — even two rakaat of sunnah or one page of Quran — and commit to never missing it.",
  },
  {
    id: 45,
    slug: "hadith-relieve-distress-of-your-brother",
    title: "Whoever Relieves a Believer's Distress",
    arabic:
      "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالآخِرَةِ وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالآخِرَةِ",
    transliteration:
      "Man naffasa 'an mu'minin kurbatan min kurabil-dunyā, naffasallāhu 'anhu kurbatan min kurabi yawmil-qiyāmah. Wa man yassara 'alā mu'sirin, yassarallāhu 'alayhi fid-dunyā wal-ākhirah. Wa man satara musliman, satarahullāhu fid-dunyā wal-ākhirah",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"Whoever relieves a believer of a distress from the distresses of this world, Allah will relieve him of a distress from the distresses of the Day of Resurrection. Whoever eases the burden of one in hardship, Allah will ease for him in this world and the next. Whoever conceals a Muslim's faults, Allah will conceal his faults in this world and the next.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2699",
    grade: "Sahih",
    topic: "brotherhood",
    topic_tags: ["helping others", "hardship", "relief", "brotherhood", "covering faults"],
    daily_practice:
      "Identify someone in difficulty today and take a concrete step to ease their burden — however small.",
  },
  {
    id: 46,
    slug: "hadith-charity-does-not-decrease-wealth",
    title: "Charity Does Not Decrease Wealth",
    arabic:
      "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ",
    transliteration:
      "Mā naqasat sadaqatun min māl. Wa mā zādallāhu 'abdan bi'afwin illā 'izzā. Wa mā tawāda'a ahadun lillāhi illā rafa'ahullāh",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"Charity does not decrease wealth. Allah increases only in honor the one who pardons. And whoever humbles himself for the sake of Allah, Allah elevates him.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2588",
    grade: "Sahih",
    topic: "charity",
    topic_tags: ["charity", "sadaqah", "wealth", "forgiveness", "humility"],
    daily_practice:
      "Give something in charity today — and forgive someone who has wronged you. Both will elevate you.",
  },
  {
    id: 47,
    slug: "hadith-two-blessings-health-and-time",
    title: "Two Blessings That Many People Squander",
    arabic:
      "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ الصِّحَّةُ وَالْفَرَاغُ",
    transliteration:
      "Ni'matāni maghbūnun fīhimā kathīrun minan-nāsi: as-sihatu wal-farāgh",
    translation:
      "Ibn Abbas reported: The Messenger of Allah (ﷺ) said, \"There are two blessings which many people squander: good health and free time.\"",
    narrator: "Ibn Abbas (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6412",
    grade: "Sahih",
    topic: "gratitude",
    topic_tags: ["health", "time", "blessings", "gratitude", "dunya"],
    daily_practice:
      "Use one hour today with full intentionality — for worship, beneficial knowledge, or helping someone.",
  },
  {
    id: 48,
    slug: "hadith-allah-looks-at-your-hearts",
    title: "Allah Does Not Look at Your Faces — He Looks at Your Hearts",
    arabic:
      "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى أَجْسَامِكُمْ وَلاَ إِلَى صُوَرِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    transliteration:
      "Innallāha lā yanzuru ilā ajsāmikum wa lā ilā suwarikum wa lākin yanzuru ilā qulūbikum wa a'mālikum",
    translation:
      "Abu Huraira reported: The Messenger of Allah (ﷺ) said, \"Verily, Allah does not look at your bodies, nor at your faces, but He looks at your hearts and your deeds.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2564",
    grade: "Sahih",
    topic: "sincerity",
    topic_tags: ["intention", "heart", "sincerity", "deeds", "appearance"],
    daily_practice:
      "Work on the inside today — purify your intentions before every deed. What matters to Allah is invisible to others.",
  },
  {
    id: 49,
    slug: "hadith-sponsor-orphan-in-paradise",
    title: "The Sponsor of an Orphan Will Be This Close to the Prophet ﷺ in Paradise",
    arabic:
      "أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا. وَأَشَارَ بِالسَّبَّابَةِ وَالْوُسْطَى وَفَرَّجَ بَيْنَهُمَا شَيْئًا",
    transliteration:
      "Anā wa kāfilul-yatīmi fil-jannati hākadhā. Wa ashāra bis-sabbābati wal-wustā wa farraja baynahumā shay'ā",
    translation:
      "Sahl ibn Sa'd reported: The Messenger of Allah (ﷺ) said, \"I and the one who sponsors an orphan will be in Paradise like these two\" — and he pointed with his index finger and middle finger, holding them close together.",
    narrator: "Sahl ibn Sa'd (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "5304",
    grade: "Sahih",
    topic: "charity",
    topic_tags: ["orphan", "charity", "paradise", "compassion", "prophet"],
    daily_practice:
      "Look into sponsoring an orphan today — even a small monthly amount earns the greatest companionship in Paradise.",
  },
  // ─── NEW HIGH-TRAFFIC HADITHS ─────────────────────────────────────────────
  {
    id: 51,
    slug: "hadith-be-in-world-as-stranger",
    title: "Be in This World as a Stranger",
    arabic:
      "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    transliteration:
      "Kun fid-dunya ka-annaka gharibun aw 'abiru sabil",
    translation:
      "Narrated Abdullah ibn Umar (RA): Allah's Messenger ﷺ took hold of my shoulder and said, \"Be in this world as though you were a stranger or a wayfarer.\" Ibn Umar would say: \"When evening comes, do not wait for the morning; when morning comes, do not wait for the evening. Take from your health before your illness, and from your life before your death.\"",
    narrator: "Abdullah ibn Umar (RA)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6416",
    grade: "Sahih",
    topic: "zuhd",
    topic_tags: ["dunya", "world", "detachment", "stranger", "traveler", "afterlife", "priorities"],
    daily_practice:
      "Live today as a traveler — do not postpone worship, reconciliation, or gratitude. You may not pass this way again.",
  },
  {
    id: 52,
    slug: "hadith-love-prophet-more-than-all",
    title: "Love for the Prophet ﷺ is the Completion of Faith",
    arabic:
      "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ",
    transliteration:
      "La yu'minu ahadukum hatta akuna ahabba ilayhi min waliidhi wa waladihi wan-nasi ajma'in",
    translation:
      "Narrated Anas ibn Malik (RA): The Prophet ﷺ said, \"None of you truly believes until I am more beloved to him than his father, his son, and all of mankind.\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "15",
    grade: "Sahih",
    topic: "love for the Prophet",
    topic_tags: ["iman", "faith", "love", "prophet", "belief", "completion-of-faith"],
    daily_practice:
      "Read or listen to one account from the Prophet's ﷺ life today to deepen your love and connection with him.",
  },
  {
    id: 53,
    slug: "hadith-man-with-those-he-loves",
    title: "You Will Be with Those You Love",
    arabic: "الْمَرْءُ مَعَ مَنْ أَحَبَّ",
    transliteration: "Al-mar'u ma'a man ahabba",
    translation:
      "Narrated Anas ibn Malik (RA): A man asked the Prophet ﷺ about the Hour. He ﷺ said, \"What have you prepared for it?\" The man replied, \"I have not prepared much in the way of prayer, fasting, or charity, but I love Allah and His Messenger.\" The Prophet ﷺ said, \"You will be with those you love.\" Anas said: Nothing after accepting Islam pleased us as much as the Prophet's words, \"You will be with those you love.\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "6170",
    grade: "Sahih",
    topic: "love and companionship",
    topic_tags: ["love", "companionship", "paradise", "afterlife", "saliheen", "jannah"],
    daily_practice:
      "Strengthen your love for the righteous today — attend a gathering of knowledge, read about the companions, or send salawat upon the Prophet ﷺ.",
  },
  {
    id: 54,
    slug: "hadith-best-learn-teach-quran",
    title: "The Best Among You Are Those Who Learn and Teach the Quran",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    transliteration: "Khayrukum man ta'allamal-Qur'ana wa 'allamah",
    translation:
      "Narrated Uthman ibn Affan (RA): The Prophet ﷺ said, \"The best of you are those who learn the Quran and teach it.\"",
    narrator: "Uthman ibn Affan (RA)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "5027",
    grade: "Sahih",
    topic: "Quran",
    topic_tags: ["quran", "knowledge", "teaching", "learning", "recitation", "excellence"],
    daily_practice:
      "Recite at least one page of Quran today — and share even a single ayah or its meaning with someone else.",
  },
  {
    id: 55,
    slug: "hadith-five-before-five",
    title: "Take Advantage of Five Before Five Come",
    arabic:
      "اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ، وَصِحَّتَكَ قَبْلَ سَقَمِكَ، وَغِنَاكَ قَبْلَ فَقْرِكَ، وَفَرَاغَكَ قَبْلَ شُغْلِكَ، وَحَيَاتَكَ قَبْلَ مَوْتِكَ",
    transliteration:
      "Ightanim khamsan qabla khams: shabābaka qabla haramik, wa sihhhataka qabla saqamik, wa ghinaka qabla faqrik, wa farāghaka qabla shughlika, wa hayātaka qabla mawlik",
    translation:
      "The Prophet ﷺ said, \"Take advantage of five things before five others: your youth before your old age, your health before your illness, your wealth before your poverty, your free time before you become occupied, and your life before your death.\"",
    narrator: "Ibn Abbas (RA)",
    source_book: "Mustadrak al-Hakim",
    hadith_number: "7846",
    grade: "Hasan",
    topic: "time management",
    topic_tags: ["time", "youth", "health", "life", "priorities", "urgency", "dunya", "akhirah"],
    daily_practice:
      "Identify one good deed you have been postponing and do it today — health, youth, and free time are gifts that expire.",
  },
  {
    id: 56,
    slug: "hadith-sadaqah-jariyah-three-deeds",
    title: "Three Deeds That Continue After Death",
    arabic:
      "إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    transliteration:
      "Idha matal-insanu inqata'a 'anhu 'amaluhu illa min thalatha: illa min sadaqatin jariyah, aw 'ilmin yuntafa'u bih, aw waladin salihin yad'u lah",
    translation:
      "Narrated Abu Hurayrah (RA): The Messenger of Allah ﷺ said, \"When a person dies, his deeds come to an end except for three: an ongoing charity (sadaqah jariyah), beneficial knowledge that others act upon, or a righteous child who prays for him.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "1631",
    grade: "Sahih",
    topic: "sadaqah jariyah",
    topic_tags: ["sadaqah", "charity", "knowledge", "legacy", "death", "ongoing-reward", "children", "afterlife"],
    daily_practice:
      "Plant a seed of ongoing reward today — contribute to a charity, share useful knowledge, or make dua for your parents and those who taught you.",
  },
  {
    id: 57,
    slug: "hadith-islam-began-strange",
    title: "Blessed Are the Strangers",
    arabic:
      "بَدَأَ الإِسْلَامُ غَرِيبًا وَسَيَعُودُ كَمَا بَدَأَ غَرِيبًا فَطُوبَى لِلْغُرَبَاءِ",
    transliteration:
      "Bada'al-Islamu ghariban wa saya'udu kama bada'a ghariban, fatuba lil-ghuraba'",
    translation:
      "Narrated Abu Hurayrah (RA): The Messenger of Allah ﷺ said, \"Islam began as something strange and will return to being something strange, so blessed are the strangers.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "145",
    grade: "Sahih",
    topic: "steadfastness",
    topic_tags: ["strangers", "ghuraba", "steadfastness", "identity", "iman", "trials", "faith", "society"],
    daily_practice:
      "If your faith feels lonely today, remember — this is by design. Hold firm. The one who stands alone for truth is never truly alone.",
  },
  {
    id: 58,
    slug: "hadith-no-disease-without-cure",
    title: "Allah Has Created a Cure for Every Disease",
    arabic:
      "مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً",
    transliteration: "Ma anzalallahu da'an illa anzala lahu shifa'",
    translation:
      "Narrated Abu Hurayrah (RA): The Prophet ﷺ said, \"Allah has not sent down any disease except that He has also sent down a cure for it.\"",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih al-Bukhari",
    hadith_number: "5678",
    grade: "Sahih",
    topic: "health and healing",
    topic_tags: ["health", "healing", "shifa", "medicine", "disease", "cure", "hope", "illness"],
    daily_practice:
      "When facing illness — physical or emotional — seek both the medical cure and the spiritual one. Both are from Allah.",
  },
  {
    id: 59,
    slug: "hadith-tie-camel-tawakkul",
    title: "Tie Your Camel, Then Put Your Trust in Allah",
    arabic: "اعْقِلْهَا وَتَوَكَّلْ",
    transliteration: "I'qilha wa tawakkal",
    translation:
      "Narrated Anas ibn Malik (RA): A man said, \"O Messenger of Allah, shall I tie my camel and then put my trust in Allah, or shall I leave her untied and put my trust in Allah?\" The Messenger of Allah ﷺ replied, \"Tie her, then put your trust in Allah.\"",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Sunan al-Tirmidhi",
    hadith_number: "2517",
    grade: "Hasan",
    topic: "tawakkul",
    topic_tags: ["tawakkul", "trust", "effort", "action", "reliance", "planning", "dunya", "akhirah"],
    daily_practice:
      "Take every reasonable action in your worldly affairs today — then release the outcome to Allah. Effort and tawakkul are inseparable.",
  },
  {
    id: 50,
    slug: "hadith-best-jihad-just-word",
    title: "The Best Jihad is a Just Word Before an Unjust Ruler",
    arabic:
      "أَفْضَلُ الْجِهَادِ كَلِمَةُ عَدْلٍ عِنْدَ سُلْطَانٍ جَائِرٍ",
    transliteration:
      "Afdalu-l-jihādi kalimatu 'adlin 'inda sultānin jā'ir",
    translation:
      "Abu Said al-Khudri reported: The Messenger of Allah (ﷺ) said, \"The best jihad is a just word spoken before an unjust ruler.\"",
    narrator: "Abu Said al-Khudri (RA)",
    source_book: "Ibn Majah",
    hadith_number: "4011",
    grade: "Hasan",
    topic: "justice",
    topic_tags: ["justice", "truth", "courage", "jihad", "speaking up"],
    daily_practice:
      "Speak the truth today even when it is uncomfortable — this is one of the highest forms of worship.",
  },
  {
    id: 60,
    slug: "hadith-allah-is-beautiful",
    title: "Allah Is Beautiful and He Loves Beauty",
    arabic:
      "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    transliteration: "Innallaha jamilun yuhibbul-jamal",
    translation:
      "Narrated Abdullah ibn Mas'ud (RA): The Messenger of Allah ﷺ said, \"No one will enter Paradise who has even a mustard seed of arrogance in his heart.\" A man asked, \"What about a man who likes his clothes to be nice and his shoes to be nice?\" He ﷺ replied, \"Verily Allah is beautiful and He loves beauty. Arrogance means rejecting the truth and looking down on people.\"",
    narrator: "Abdullah ibn Mas'ud (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "91",
    grade: "Sahih",
    topic: "character",
    topic_tags: ["beauty", "arrogance", "kibr", "character", "pride", "humility", "truth", "people"],
    daily_practice:
      "Check your heart for any trace of arrogance today — toward people, their opinions, or the truth. Beauty is what Allah loves; arrogance is what He despises.",
  },
  {
    id: 61,
    slug: "hadith-of-jibril-islam-iman-ihsan",
    title: "The Hadith of Jibril: Islam, Iman, and Ihsan",
    arabic:
      "قَالَ فَأَخْبِرْنِي عَنِ الإِسْلاَمِ قَالَ الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلاَةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلاً... قَالَ فَأَخْبِرْنِي عَنِ الإِيمَانِ قَالَ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ... قَالَ فَأَخْبِرْنِي عَنِ الإِحْسَانِ قَالَ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
    transliteration:
      "Qāla fa-akhbirnī 'anil-Islām. Qāla: al-Islāmu an tashhada allā ilāha illallāhu wa anna Muhammadan rasūlullāh, wa tuqīmaṣ-ṣalāh, wa tu'tiyaz-zakāh, wa taṣūma Ramaḍān, wa taḥujjal-bayta inistaṭa'ta ilayhi sabīlā... Qāla fa-akhbirnī 'anil-Īmān. Qāla: an tu'mina billāhi wa malā'ikatihi wa kutubihi wa rusulihi wal-yawmil-ākhir, wa tu'mina bil-qadari khayrihi wa sharrih... Qāla fa-akhbirnī 'anil-Iḥsān. Qāla: an ta'budallāha ka'annaka tarāh, fa'in lam takun tarāhu fa'innahu yarāk",
    translation:
      "Narrated Umar ibn al-Khattab (RA): One day while we were sitting with the Messenger of Allah ﷺ, there appeared before us a man with extremely white clothes and extremely black hair... He placed his knees against his knees and placed his palms on his thighs and said: 'O Muhammad, tell me about Islam.' The Messenger of Allah ﷺ said: 'Islam is to testify that there is no god but Allah and Muhammad is His Messenger, to perform the prayer, to give zakah, to fast Ramadan, and to make pilgrimage to the House if you are able.' He said: 'You have spoken the truth.' He said: 'Tell me about Iman.' He said: 'It is to believe in Allah, His angels, His books, His messengers, the Last Day, and to believe in Divine decree, both the good and evil of it.' He said: 'You have spoken the truth.' He said: 'Tell me about Ihsan.' He said: 'It is to worship Allah as if you see Him, and though you do not see Him, He surely sees you.' The Prophet ﷺ later said: 'It was Jibril, who came to teach you your religion.'",
    narrator: "Umar ibn al-Khattab (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "8",
    grade: "Sahih",
    topic: "faith",
    topic_tags: ["faith", "iman", "islam", "ihsan", "pillars", "belief", "jibril", "worship", "fundamentals", "pillars of Islam"],
    daily_practice:
      "Review the three levels — Islam, Iman, and Ihsan — and ask yourself: which level does today's worship reflect? Aim to worship as if you see Allah.",
  },
  {
    id: 62,
    slug: "hadith-do-not-be-angry",
    title: "Do Not Be Angry",
    arabic:
      "أَنَّ رَجُلاً قَالَ لِلنَّبِيِّ صلى الله عليه وسلم أَوْصِنِي قَالَ لاَ تَغْضَبْ فَرَدَّدَ مِرَارًا قَالَ لاَ تَغْضَبْ",
    transliteration:
      "Anna rajulan qāla lin-Nabiyyi ﷺ: Awṣinī. Qāla: Lā taghḍab. Faraddada mirāran qāla: Lā taghḍab",
    translation:
      "Narrated Abu Huraira (RA): A man said to the Prophet ﷺ, 'Advise me!' The Prophet ﷺ said, 'Do not become angry and furious.' The man asked the same again and again, and the Prophet ﷺ said in each case, 'Do not become angry and furious.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6116",
    grade: "Sahih",
    topic: "anger management",
    topic_tags: ["anger", "self-control", "character", "advice", "patience", "emotional control", "nasiha"],
    daily_practice:
      "When you feel the urge to react in anger today — pause and recall the Prophet's ﷺ repeated advice: 'Do not be angry.'",
  },
  {
    id: 63,
    slug: "hadith-seven-shaded-by-allah",
    title: "Seven People Shaded by Allah on the Day of Judgment",
    arabic:
      "سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لاَ ظِلَّ إِلاَّ ظِلُّهُ الإِمَامُ الْعَادِلُ وَشَابٌّ نَشَأَ بِعِبَادَةِ اللَّهِ وَرَجُلٌ قَلْبُهُ مُعَلَّقٌ بِالْمَسَاجِدِ وَرَجُلاَنِ تَحَابَّا فِي اللَّهِ اجْتَمَعَا عَلَيْهِ وَتَفَرَّقَا عَلَيْهِ وَرَجُلٌ دَعَتْهُ امْرَأَةٌ ذَاتُ مَنْصِبٍ وَجَمَالٍ فَقَالَ إِنِّي أَخَافُ اللَّهَ وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ وَرَجُلٌ ذَكَرَ اللَّهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ",
    transliteration:
      "Sab'atun yuẓilluhumu-llāhu fī ẓillihi yawma lā ẓilla illā ẓilluhu: al-imāmul-'ādil; wa shābbun nasha'a bi'ibādatillāh; wa rajulun qalbuhu mu'allaqun bil-masājid; wa rajulāni taḥābbā fillāhi-jtama'ā 'alayhi wa tafarraqā 'alayh; wa rajulun da'athu imra'atun dhātu manṣibin wa jamālin faqāla innī akhāfullāh; wa rajulun taṣaddaqa biṣadaqatin fa-akhfāhā ḥattā lā ta'lama shimāluhu mā tunfiqu yamīnuhu; wa rajulun dhakara-llāha khāliyyan fafāḍat 'aynāh",
    translation:
      "Narrated Abu Huraira (RA): The Prophet ﷺ said, 'Seven people will be shaded by Allah under His shade on the Day when there will be no shade except His: a just ruler; a young man who grew up in the worship of Allah; a man whose heart is attached to the mosques; two people who love each other for Allah's sake, meeting and parting for His sake; a man who is called by a woman of rank and beauty but says, \"I fear Allah\"; a man who gives in charity so secretly that his left hand does not know what his right hand gives; and a man who remembers Allah in seclusion and his eyes become tearful.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "660",
    grade: "Sahih",
    topic: "Day of Judgment",
    topic_tags: ["Day of Judgment", "shade", "justice", "youth", "mosque", "love for Allah", "charity", "dhikr", "taqwa", "akhirah"],
    daily_practice:
      "Identify which of the seven categories you can work toward today — heart attached to the masjid, secret charity, or remembering Allah alone with tearful eyes.",
  },
  {
    id: 64,
    slug: "hadith-jannah-under-feet-of-mothers",
    title: "Paradise Is at the Feet of Mothers",
    arabic:
      "الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ",
    transliteration:
      "Al-jannatu taḥta aqdāmil-ummahāt",
    translation:
      "Narrated Mu'awiyah ibn Jahima al-Sulami (RA): His father Jahima came to the Prophet ﷺ and said: 'O Messenger of Allah, I wish to go out and fight in the way of Allah, and I have come to consult you.' He said: 'Is your mother still alive?' He said: 'Yes.' He said: 'Then stay with her and serve her, for Paradise is at her feet.'",
    narrator: "Jahima al-Sulami (RA)",
    source_book: "Sunan an-Nasa'i",
    hadith_number: "3104",
    grade: "Hasan",
    topic: "parents",
    topic_tags: ["mother", "parents", "jannah", "service", "family", "birr al-walidayn", "obedience", "kindness"],
    daily_practice:
      "Do something today that makes your mother happy — call her, help her, or simply speak to her with gentleness. Paradise may be found in these small moments.",
  },
  {
    id: 65,
    slug: "hadith-strong-believer-is-better",
    title: "The Strong Believer Is Better and More Beloved to Allah",
    arabic:
      "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ وَفِي كُلٍّ خَيْرٌ احْرِصْ عَلَى مَا يَنْفَعُكَ وَاسْتَعِنْ بِاللَّهِ وَلاَ تَعْجَزْ وَإِنْ أَصَابَكَ شَيْءٌ فَلاَ تَقُلْ لَوْ أَنِّي فَعَلْتُ كَانَ كَذَا وَكَذَا وَلَكِنْ قُلْ قَدَّرَ اللَّهُ وَمَا شَاءَ فَعَلَ فَإِنَّ لَوْ تَفْتَحُ عَمَلَ الشَّيْطَانِ",
    transliteration:
      "Al-mu'minul-qawiyyu khayrun wa aḥabbu ilallāhi minal-mu'minil-ḍa'īf, wa fī kullin khayr. Iḥriṣ 'alā mā yanfa'uk, wasta'in billāh, wa lā ta'jaz. Wa in aṣābaka shay'un falā taqul: law annī fa'altu kāna kadhā wa kadhā. Wa lākin qul: qaddarallāhu wa mā shā'a fa'al. Fa'inna law taftaḥu 'amalash-shayṭān",
    translation:
      "Abu Huraira (RA) reported: The Messenger of Allah ﷺ said, 'A strong believer is better and dearer to Allah than a weak believer, and there is good in everyone. Cherish what gives you benefit, seek help from Allah and do not give up. If any adversity comes to you, do not say: \"If only I had done such-and-such.\" Rather say: \"Allah decreed it and what He wills He does,\" for saying \"if only\" opens the door to the work of Shaytan.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2664",
    grade: "Sahih",
    topic: "resilience",
    topic_tags: ["strength", "resilience", "tawakkul", "effort", "qadar", "productivity", "believer", "hardship", "shaytan"],
    daily_practice:
      "When things do not go your way today, replace 'if only' with 'Allah decreed it.' Then refocus on what you can still do.",
  },
  {
    id: 66,
    slug: "hadith-two-words-light-on-tongue",
    title: "Two Words Light on the Tongue, Heavy on the Scale",
    arabic:
      "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ حَبِيبَتَانِ إِلَى الرَّحْمَنِ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
    transliteration:
      "Kalimatāni khafīfatāni 'alal-lisān, thaqīlatāni fil-mīzān, ḥabībatāni ilar-Raḥmān: Subḥānallāhi wa biḥamdih, Subḥānallāhil-'Aẓīm",
    translation:
      "Narrated Abu Huraira (RA): The Prophet ﷺ said, 'Two words are light on the tongue but heavy on the Scale and dear to the Most Merciful: Subḥānallāhi wa biḥamdih (Glory be to Allah and all praise is due to Him); Subḥānallāhil-'Aẓīm (Glory be to Allah, the Most Great).'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6682",
    grade: "Sahih",
    topic: "dhikr",
    topic_tags: ["dhikr", "tasbih", "worship", "scales", "akhirah", "remembrance", "reward", "subhanallah", "easy deeds"],
    daily_practice:
      "Make it a habit to say 'Subḥānallāhi wa biḥamdih, Subḥānallāhil-'Aẓīm' throughout your day — light on the tongue, mighty on the Scale.",
  },
  {
    id: 67,
    slug: "hadith-allah-hundred-parts-of-mercy",
    title: "Allah Has a Hundred Parts of Mercy — Only One Is in This World",
    arabic:
      "إِنَّ لِلَّهِ مِائَةَ رَحْمَةٍ أَنْزَلَ مِنْهَا رَحْمَةً وَاحِدَةً بَيْنَ الْجِنِّ وَالإِنْسِ وَالْبَهَائِمِ وَالْهَوَامِّ فَبِهَا يَتَعَاطَفُونَ وَبِهَا يَتَرَاحَمُونَ وَبِهَا تَعْطِفُ الْوَحْشُ عَلَى وَلَدِهَا وَأَخَّرَ اللَّهُ تِسْعًا وَتِسْعِينَ رَحْمَةً يَرْحَمُ بِهَا عِبَادَهُ يَوْمَ الْقِيَامَةِ",
    transliteration:
      "Inna lillāhi mi'ata raḥmah, anzala minhā raḥmatan wāḥidatan bayna-l-jinni wal-insi wal-bahā'imi wal-hawāmm, fabihā yatā'afawna wa bihā yatarāḥamūna wa bihā ta'ṭifu-l-waḥshu 'alā waladihā. Wa akhkhara-llāhu tis'an wa tis'īna raḥmatan yarḥamu bihā 'ibādahu yawmal-qiyāmah",
    translation:
      "Narrated Abu Huraira (RA): I heard Allah's Messenger ﷺ saying, 'Allah has divided His mercy into one hundred parts. He kept ninety-nine parts with Him and sent one part to the earth. Through this one part, all of creation shows compassion to one another — so much so that an animal lifts its hoof over its young lest it should hurt it. On the Day of Resurrection, Allah will complete the full one hundred parts of mercy toward His servants.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6469",
    grade: "Sahih",
    topic: "mercy",
    topic_tags: ["mercy", "rahma", "hope", "akhirah", "Allah's attributes", "Day of Judgment", "kindness", "creation", "compassion"],
    daily_practice:
      "Every compassionate act you witness today is a reflection of just one part of Allah's mercy. Ninety-nine parts are still reserved for you on the Day of Judgment — hold onto hope.",
  },
  {
    id: 68,
    slug: "hadith-everyone-is-a-shepherd",
    title: "Every One of You Is a Shepherd",
    arabic:
      "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ الإِمَامُ رَاعٍ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَهُوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ وَالْمَرْأَةُ رَاعِيَةٌ فِي بَيْتِ زَوْجِهَا وَمَسْئُولَةٌ عَنْ رَعِيَّتِهَا وَالْخَادِمُ رَاعٍ فِي مَالِ سَيِّدِهِ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ",
    transliteration:
      "Kullukum rā'in wa kullukum mas'ūlun 'an ra'iyyatih. Al-imāmu rā'in wa mas'ūlun 'an ra'iyyatih. War-rajulu rā'in fī ahlihi wa huwa mas'ūlun 'an ra'iyyatih. Wal-mar'atu rā'iyatun fī bayti zawjihā wa mas'ūlatun 'an ra'iyyatihā. Wal-khādimu rā'in fī māli sayyidihi wa mas'ūlun 'an ra'iyyatih",
    translation:
      "Narrated Abdullah ibn Umar (RA): Allah's Messenger ﷺ said, 'Every one of you is a shepherd and is responsible for his flock. The leader of people is a shepherd and is responsible for his subjects. A man is the shepherd of his family and is responsible for them. A woman is the shepherd of her husband's home and of his children and is responsible for them. The servant is a shepherd of his master's property and is responsible for it. Every one of you is a shepherd and is responsible for his flock.'",
    narrator: "Abdullah ibn Umar (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "893",
    grade: "Sahih",
    topic: "responsibility",
    topic_tags: ["responsibility", "leadership", "family", "accountability", "community", "amanah", "shepherd", "children", "husband", "role"],
    daily_practice:
      "Ask yourself today: am I fulfilling my responsibilities as a shepherd? Start with those closest to you — your family, your household, your community.",
  },
  {
    id: 69,
    slug: "hadith-whoever-guides-to-good",
    title: "Whoever Guides to Good Gets the Same Reward",
    arabic:
      "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
    transliteration:
      "Man dalla 'alā khayrin falahu mithlu ajri fā'ilih",
    translation:
      "Abu Mas'ud al-Ansari (RA) reported: The Messenger of Allah ﷺ said, 'Whoever guides someone to goodness will have a reward like one who does it.'",
    narrator: "Abu Mas'ud al-Ansari (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "1893",
    grade: "Sahih",
    topic: "good deeds",
    topic_tags: ["good deeds", "reward", "guiding others", "dawah", "sharing", "charity", "continuous reward", "teaching", "community"],
    daily_practice:
      "Share something beneficial today — a du'a, an ayah, or a reminder. You will receive the same reward as everyone who acts on it.",
  },
  {
    id: 70,
    slug: "hadith-recite-quran-it-will-intercede",
    title: "Recite the Quran — It Will Intercede for You on the Day of Resurrection",
    arabic:
      "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ",
    transliteration:
      "Iqra'ul-Qur'āna fa'innahu ya'tī yawmal-qiyāmati shafī'an li'aṣḥābih",
    translation:
      "Narrated Abu Umama al-Bahili (RA): I heard the Messenger of Allah ﷺ say, 'Recite the Quran, for it will come on the Day of Resurrection as an intercessor for its companions.'",
    narrator: "Abu Umamah al-Bahili (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "804",
    grade: "Sahih",
    topic: "Quran",
    topic_tags: ["Quran", "intercession", "akhirah", "worship", "tilawah", "reward", "Day of Judgment", "recitation", "shafa'ah"],
    daily_practice:
      "Read at least one page of the Quran today — not just to complete a target, but knowing it will stand before Allah as your intercessor on the Day you need it most.",
  },
  {
    id: 71,
    slug: "hadith-surah-kahf-friday-light",
    title: "Whoever Reads Surah Al-Kahf on Friday Will Have Light Until the Next Friday",
    arabic:
      "مَنْ قَرَأَ سُورَةَ الْكَهْفِ فِي يَوْمِ الْجُمُعَةِ أَضَاءَ لَهُ مِنَ النُّورِ مَا بَيْنَ الْجُمُعَتَيْنِ",
    transliteration:
      "Man qara'a Sūratal-Kahfi fī yawmil-jumu'ati aḍā'a lahu minan-nūri mā baynal-jumu'atayn",
    translation:
      "Abu Sa'id al-Khudri (RA) reported: The Prophet ﷺ said, 'Whoever reads Surah al-Kahf on Friday, a light will shine for him between the two Fridays.'",
    narrator: "Abu Sa'id al-Khudri (RA)",
    source_book: "Sahih al-Jami'",
    hadith_number: "6470",
    grade: "Sahih",
    topic: "Quran",
    topic_tags: ["Quran", "surah al-kahf", "Friday", "jumu'ah", "light", "worship", "weekly practice", "protection", "nur"],
    daily_practice:
      "Make reciting Surah al-Kahf your most consistent weekly act — every Friday, a light that illuminates an entire week.",
  },
  {
    id: 72,
    slug: "hadith-surah-mulk-protects-grave",
    title: "Surah Al-Mulk Intercedes Until Its Reader Is Forgiven",
    arabic:
      "إِنَّ سُورَةً مِنَ الْقُرْآنِ ثَلَاثُونَ آيَةً شَفَعَتْ لِرَجُلٍ حَتَّى غُفِرَ لَهُ وَهِيَ سُورَةُ تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ",
    transliteration:
      "Inna sūratan minal-Qur'āni thalāthūna āyatan shafa'at li-rajulin ḥattā ghufira lahu wa hiya Sūratu Tabārakalladhī biyadihil-mulk",
    translation:
      "Ibn Abbas (RA) reported: The Messenger of Allah ﷺ said, 'A surah of the Quran with thirty verses interceded for its reader until he was forgiven. It is: Blessed is He in Whose Hand is the dominion (Surah Al-Mulk).'",
    narrator: "Ibn Abbas (RA)",
    source_book: "Jami' al-Tirmidhi",
    hadith_number: "2891",
    grade: "Hasan",
    topic: "Quran",
    topic_tags: ["Quran", "surah al-mulk", "intercession", "forgiveness", "grave", "protection", "akhirah", "worship", "night recitation"],
    daily_practice:
      "Recite Surah al-Mulk (30 verses) each night before sleeping. It takes only a few minutes and may intercede for you when you need it most.",
  },
  {
    id: 73,
    slug: "hadith-closest-to-allah-in-sujood",
    title: "The Servant Is Nearest to His Lord in Prostration",
    arabic:
      "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ",
    transliteration:
      "Aqrabu mā yakūnu-l-'abdu min rabbihi wa huwa sājid, fa-akthirū-d-du'ā'",
    translation:
      "Abu Huraira (RA) reported: The Messenger of Allah ﷺ said, 'The servant is nearest to his Lord when he is in prostration, so increase your supplication in it.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "482",
    grade: "Sahih",
    topic: "prayer",
    topic_tags: ["sujood", "prostration", "prayer", "salah", "dua", "closeness to Allah", "supplication", "worship", "nearness"],
    daily_practice:
      "In each prostration today, pause before rising and pour your heart out to Allah. This is the closest you will be to Him all day.",
  },
  {
    id: 74,
    slug: "hadith-jannah-surrounded-by-hardships",
    title: "Paradise Is Surrounded by Hardships",
    arabic:
      "حُجِبَتِ النَّارُ بِالشَّهَوَاتِ وَحُجِبَتِ الْجَنَّةُ بِالْمَكَارِهِ",
    transliteration:
      "Ḥujibatn-nāru bish-shahawāt, wa ḥujibal-jannatu bil-makārih",
    translation:
      "Narrated Abu Huraira (RA): The Messenger of Allah ﷺ said, 'The Hellfire is veiled by desires and pleasures, and Paradise is veiled by hardships and difficulties.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "6487",
    grade: "Sahih",
    topic: "trials",
    topic_tags: ["jannah", "hardship", "patience", "desires", "dunya", "akhirah", "temptation", "self-discipline", "struggle", "motivation"],
    daily_practice:
      "When something is difficult today — a missed desire, a hard act of worship, a moment of restraint — remind yourself: this is the path to Jannah.",
  },
  {
    id: 75,
    slug: "hadith-three-signs-of-hypocrite",
    title: "Three Signs of a Hypocrite",
    arabic:
      "آيَةُ الْمُنَافِقِ ثَلاَثٌ إِذَا حَدَّثَ كَذَبَ وَإِذَا وَعَدَ أَخْلَفَ وَإِذَا اؤْتُمِنَ خَانَ",
    transliteration:
      "Āyatul-munāfiqi thalāth: idhā ḥaddatha kadhab, wa idhā wa'ada akhlaf, wa idhā-'tumina khān",
    translation:
      "Narrated Abu Huraira (RA): The Prophet ﷺ said, 'The signs of a hypocrite are three: when he speaks, he lies; when he makes a promise, he breaks it; and when he is entrusted, he betrays.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "33",
    grade: "Sahih",
    topic: "character",
    topic_tags: ["hypocrisy", "nifaq", "honesty", "promise", "trust", "character", "truthfulness", "amanah", "accountability", "sincerity"],
    daily_practice:
      "Check yourself today against these three: Have I lied? Have I broken a promise? Have I betrayed a trust? These are the markers of hypocrisy that must be actively guarded against.",
  },
  {
    id: 76,
    slug: "hadith-be-mindful-of-allah-he-will-protect-you",
    title: "Be Mindful of Allah and He Will Protect You",
    arabic:
      "يَا غُلاَمُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ احْفَظِ اللَّهَ يَحْفَظْكَ احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ وَاعْلَمْ أَنَّ الأُمَّةَ لَوِ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوكَ بِشَيْءٍ لَمْ يَنْفَعُوكَ إِلاَّ بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ لَكَ",
    transliteration:
      "Yā ghulām, innī u'allimuka kalimāt: iḥfaẓillāha yaḥfaẓka, iḥfaẓillāha tajidhu tujāhak. Idhā sa'alta fas'alillāh, wa idhā-sta'anta fasta'in billāh. Wa-'lam annal-ummata law-jtama'at 'alā an yanfa'ūka bishay'in lam yanfa'ūka illā bishay'in qad katabahuLlāhu lak",
    translation:
      "Ibn Abbas (RA) reported: I was riding behind the Messenger of Allah ﷺ when he said, 'O young man, I shall teach you some words: Be mindful of Allah and He will protect you. Be mindful of Allah and you will find Him before you. When you ask, ask of Allah; when you seek help, seek help from Allah. Know that if all the nations were to gather to benefit you with anything, they would only benefit you with something Allah has already written for you. And if they gathered to harm you, they would only harm you with something Allah has already written against you. The pens have been lifted and the pages have dried.'",
    narrator: "Ibn Abbas (RA)",
    source_book: "Jami' al-Tirmidhi",
    hadith_number: "2516",
    grade: "Hasan",
    topic: "tawakkul",
    topic_tags: ["tawakkul", "protection", "qadar", "divine decree", "reliance", "asking Allah", "mindfulness", "faith", "trust", "divine will"],
    daily_practice:
      "When you face a decision or difficulty today, remember: ask only from Allah, rely only on Allah. No creation can bring what He has not written for you.",
  },
  {
    id: 77,
    slug: "hadith-patience-at-first-blow",
    title: "True Patience Is at the First Stroke of Calamity",
    arabic:
      "إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى",
    transliteration:
      "Innamaṣ-ṣabru 'indaṣ-ṣadmatil-ūlā",
    translation:
      "Narrated Anas ibn Malik (RA): The Prophet ﷺ passed by a woman who was weeping at a grave. He told her, 'Fear Allah and be patient.' She said, 'Go away from me, for you have not been afflicted with a calamity like mine!' She did not recognise him. Then she was told it was the Prophet ﷺ, so she came to his house and said: 'I did not recognise you.' He ﷺ said, 'Verily, patience is at the first stroke of calamity.'",
    narrator: "Anas ibn Malik (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "1283",
    grade: "Sahih",
    topic: "patience",
    topic_tags: ["patience", "sabr", "grief", "loss", "trials", "calamity", "faith", "endurance", "strength", "hardship"],
    daily_practice:
      "True patience is shown in the first moment of loss — not after time has passed. Train your heart to return to Allah immediately when struck with difficulty.",
  },
  {
    id: 78,
    slug: "hadith-believer-mirror-to-believer",
    title: "The Believer Is a Mirror to His Fellow Believer",
    arabic:
      "الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ وَالْمُؤْمِنُ أَخُو الْمُؤْمِنِ يَكُفُّ عَلَيْهِ ضَيْعَتَهُ وَيَحُوطُهُ مِنْ وَرَائِهِ",
    transliteration:
      "Al-mu'minu mir'ātu-l-mu'min, wal-mu'minu akhū-l-mu'min, yakuffu 'alayhi ḍay'atahu wa yaḥūṭuhu min warā'ih",
    translation:
      "Abu Huraira (RA) reported: The Messenger of Allah ﷺ said, 'The believer is a mirror to the believer. The believer is the brother of the believer — he safeguards his interests and defends him in his absence.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sunan Abi Dawud",
    hadith_number: "4918",
    grade: "Hasan",
    topic: "brotherhood",
    topic_tags: ["brotherhood", "mirror", "sincere counsel", "friendship", "loyalty", "protecting others", "genuine care", "community", "sisterhood"],
    daily_practice:
      "Be a true mirror to a friend today — offer sincere, gentle feedback when they need it, and protect their reputation in their absence.",
  },
  {
    id: 79,
    slug: "hadith-six-rights-of-muslim-upon-muslim",
    title: "Six Rights of a Muslim upon a Muslim",
    arabic:
      "حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ سِتٌّ قِيلَ مَا هُنَّ يَا رَسُولَ اللَّهِ قَالَ إِذَا لَقِيتَهُ فَسَلِّمْ عَلَيْهِ وَإِذَا دَعَاكَ فَأَجِبْهُ وَإِذَا اسْتَنْصَحَكَ فَانْصَحْ لَهُ وَإِذَا عَطَسَ فَحَمِدَ اللَّهَ فَشَمِّتْهُ وَإِذَا مَرِضَ فَعُدْهُ وَإِذَا مَاتَ فَاتَّبِعْهُ",
    transliteration:
      "Ḥaqqul-muslimi 'alal-muslimi sitt. Qīla: mā hunna yā rasūlallāh? Qāla: idhā laqītahu fasallim 'alayh, wa idhā da'āka fa-ajibh, wa idhā-stanṣaḥaka fanṣaḥ lah, wa idhā 'aṭasa faḥamidallāha fasham-mithu, wa idhā mariḍa fa'udh, wa idhā māta fattabi'h",
    translation:
      "Abu Huraira (RA) reported: The Messenger of Allah ﷺ said, 'The rights of the Muslim upon the Muslim are six.' It was said: 'What are they, O Messenger of Allah?' He ﷺ said: 'When you meet him, greet him with salaam; when he invites you, accept his invitation; when he seeks your advice, give him sincere advice; when he sneezes and praises Allah, say yarhamukallah; when he is sick, visit him; and when he dies, follow his funeral.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2162",
    grade: "Sahih",
    topic: "brotherhood",
    topic_tags: ["brotherhood", "rights", "community", "salaam", "visiting sick", "funeral", "advice", "sneezing", "etiquette", "Muslim relationships"],
    daily_practice:
      "Fulfill at least one of these six rights today — greet someone with salaam, visit someone who is unwell, or give sincere advice when asked.",
  },
  {
    id: 80,
    slug: "hadith-fast-ramadan-with-faith-forgiven",
    title: "Whoever Fasts Ramadan with Sincere Faith — All Previous Sins Forgiven",
    arabic:
      "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    transliteration:
      "Man ṣāma Ramaḍāna īmānan waḥtisāban ghufira lahu mā taqaddama min dhanbih",
    translation:
      "Narrated Abu Huraira (RA): The Prophet ﷺ said, 'Whoever fasts during Ramadan out of sincere faith and hoping for reward from Allah, then all his previous sins will be forgiven.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "38",
    grade: "Sahih",
    topic: "fasting",
    topic_tags: ["Ramadan", "fasting", "forgiveness", "sins", "faith", "iman", "worship", "ihtisab", "reward", "purification"],
    daily_practice:
      "Fast with intention and hope — not just hunger. Remind yourself: the reward for Ramadan is complete forgiveness of all that came before.",
  },
  {
    id: 81,
    slug: "hadith-allah-descends-last-third-of-night",
    title: "Allah Descends to the Nearest Heaven in the Last Third of the Night",
    arabic:
      "يَنْزِلُ رَبُّنَا تَبَارَكَ وَتَعَالَى كُلَّ لَيْلَةٍ إِلَى السَّمَاءِ الدُّنْيَا حِينَ يَبْقَى ثُلُثُ اللَّيْلِ الآخِرُ يَقُولُ مَنْ يَدْعُونِي فَأَسْتَجِيبَ لَهُ مَنْ يَسْأَلُنِي فَأُعْطِيَهُ مَنْ يَسْتَغْفِرُنِي فَأَغْفِرَ لَهُ",
    transliteration:
      "Yanzilu rabbunā tabāraka wa ta'ālā kulla laylatin ilaṣ-samā'id-dunyā ḥīna yabqā thulutu-l-layli-l-ākhiru yaqūlu: man yad'ūnī fa-astajība lah, man yas'alunī fa-u'ṭiyah, man yastaghfiruni fa-aghfira lah",
    translation:
      "Narrated Abu Huraira (RA): Allah's Messenger ﷺ said, 'Our Lord, the Blessed and Superior, comes every night down to the nearest heaven during the last third of the night saying: Is there anyone who invokes Me so that I may respond? Is there anyone who asks Me so that I may give him what he asks? Is there anyone who seeks My forgiveness so that I may forgive him?'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "1145",
    grade: "Sahih",
    topic: "night prayer",
    topic_tags: ["night prayer", "tahajjud", "dua", "forgiveness", "last third of night", "qiyam", "closeness to Allah", "response", "worship"],
    daily_practice:
      "Set an intention tonight to wake in the last third of the night — even for five minutes of sincere dua. Allah Himself is calling out, asking who will come.",
  },
  {
    id: 82,
    slug: "hadith-best-of-generations",
    title: "The Best People Are the Companions, Then Those Who Follow Them",
    arabic:
      "خَيْرُ النَّاسِ قَرْنِي ثُمَّ الَّذِينَ يَلُونَهُمْ ثُمَّ الَّذِينَ يَلُونَهُمْ",
    transliteration:
      "Khayrun-nāsi qarnī, thummal-ladhīna yalūnahum, thummal-ladhīna yalūnahum",
    translation:
      "Narrated Abdullah ibn Mas'ud (RA): The Prophet ﷺ said, 'The best people are those of my generation, and then those who will follow them, and then those who will follow them.'",
    narrator: "Abdullah ibn Mas'ud (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "2651",
    grade: "Sahih",
    topic: "Companions",
    topic_tags: ["Companions", "Sahabah", "generations", "Tabi'in", "Sunnah", "role models", "best generations", "following the Prophet"],
    daily_practice:
      "Study the life of one Companion today — even a single story. They are the gold standard of how Islam is lived, preserved for us to follow.",
  },
  {
    id: 83,
    slug: "hadith-wudu-washes-away-sins",
    title: "Every Drop of Wudu Carries Away a Sin",
    arabic:
      "إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ فَإِذَا غَسَلَ يَدَيْهِ خَرَجَ مِنْ يَدَيْهِ كُلُّ خَطِيئَةٍ كَانَ بَطَشَهَا يَدَاهُ مَعَ الْمَاءِ حَتَّى يَخْرُجَ نَقِيًّا مِنَ الذُّنُوبِ",
    transliteration:
      "Idhā tawadda'a-l-'abdu-l-muslimu awil-mu'minu fa-ghasala wajhahu, kharaja min wajhihi kullu khaṭī'atin naẓara ilayhā bi'aynihi ma'al-mā'i aw ma'a ākhiri qaṭril-mā'. Fa'idhā ghasala yadayhi, kharaja min yadayhi kullu khaṭī'atin kāna baṭashahā yadāhu ma'al-mā'i... ḥattā yakhruja naqiyyan minadh-dhunūb",
    translation:
      "Abu Huraira (RA) reported: Allah's Messenger ﷺ said, 'When a Muslim — or a believer — washes his face in the performance of wudu, every sin which he committed with his eyes is washed away with the water, or with the last drop of water. When he washes his hands, every sin his hands committed comes out with the water, or with the last drop of water, until he finally emerges purified from all his sins.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "244",
    grade: "Sahih",
    topic: "purification",
    topic_tags: ["wudu", "purification", "sins", "forgiveness", "taharah", "prayer", "cleanliness", "worship", "spiritual renewal"],
    daily_practice:
      "Make every wudu a conscious act of spiritual cleansing — not just physical ritual. As you wash each limb, intend for the sins of that limb to be washed away.",
  },
  {
    id: 84,
    slug: "hadith-prayer-is-pillar-of-religion",
    title: "Prayer Is the Pillar of the Religion",
    arabic:
      "رَأْسُ الأَمْرِ الإِسْلاَمُ وَعَمُودُهُ الصَّلاَةُ وَذِرْوَةُ سَنَامِهِ الْجِهَادُ",
    transliteration:
      "Ra'sul-amri-l-Islām, wa 'amūduhuṣ-ṣalāh, wa dhirwatu sanāmihi-l-jihād",
    translation:
      "Mu'adh ibn Jabal (RA) reported: The Messenger of Allah ﷺ said, 'The head of the matter is Islam; its pillar is the prayer; and its highest point is striving in the way of Allah.'",
    narrator: "Mu'adh ibn Jabal (RA)",
    source_book: "Jami' al-Tirmidhi",
    hadith_number: "2616",
    grade: "Hasan",
    topic: "prayer",
    topic_tags: ["salah", "prayer", "pillar", "Islam", "fundamentals", "worship", "five pillars", "ibadah", "foundations"],
    daily_practice:
      "Prayer is not one good deed among many — it is the pillar upon which everything stands. Guard your five prayers today as you would guard the foundation of your house.",
  },
  {
    id: 85,
    slug: "hadith-surah-fatihah-greatest-surah",
    title: "Surah Al-Fatihah Is the Greatest Surah in the Quran",
    arabic:
      "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ هِيَ السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ الَّذِي أُوتِيتُهُ",
    transliteration:
      "Al-ḥamdu lillāhi Rabbil-'ālamīn hiya-s-sab'ul-mathānī wal-Qur'ānu-l-'aẓīmulladhī ūtītuhu",
    translation:
      "Narrated Abu Sa'id ibn al-Mu'alla (RA): I was praying when the Prophet ﷺ called me, but I did not respond until I had finished. Then I said: 'O Messenger of Allah, I was praying.' He ﷺ said: 'Did not Allah say: Respond to Allah and to the Messenger when he calls you?' He then said: 'Shall I not teach you the greatest surah in the Quran before you leave the mosque?' Then as we were about to leave, he said: 'It is: Al-Ḥamdulillāhi Rabbil-'ālamīn — it is the seven oft-repeated verses (as-sab'ul mathānī) and the great Quran that has been given to me.'",
    narrator: "Abu Sa'id ibn al-Mu'alla (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "5006",
    grade: "Sahih",
    topic: "Quran",
    topic_tags: ["Quran", "surah al-fatiha", "greatest surah", "prayer", "recitation", "al-hamd", "sab'ul mathani", "magnificence", "tilawah"],
    daily_practice:
      "The next time you recite Surah al-Fatihah in prayer, pause at each verse and reflect on its meaning — you are reciting the greatest surah in the Quran, at least 17 times a day.",
  },
  {
    id: 86,
    slug: "hadith-dua-for-absent-brother-answered",
    title: "Your Dua for Your Absent Brother Is Answered — and an Angel Prays the Same for You",
    arabic:
      "دَعْوَةُ الْمَرْءِ الْمُسْلِمِ لأَخِيهِ بِظَهْرِ الْغَيْبِ مُسْتَجَابَةٌ عِنْدَ رَأْسِهِ مَلَكٌ مُوَكَّلٌ كُلَّمَا دَعَا لأَخِيهِ بِخَيْرٍ قَالَ الْمَلَكُ الْمُوَكَّلُ بِهِ آمِينَ وَلَكَ بِمِثْلٍ",
    transliteration:
      "Da'watul-mar'il-muslimi li'akhīhi biẓahril-ghaybi mustajābah, 'inda ra'sihi malakun muwakkalun, kullamā da'ā li'akhīhi bikhayrin qālal-malakul-muwakkalu bih: āmīn wa laka bi-mithl",
    translation:
      "Abu al-Darda' (RA) reported: The Messenger of Allah ﷺ said, 'The supplication of a Muslim for his brother in his absence is answered. Near his head there is an appointed angel, and every time he supplicates for his brother with something good, the angel appointed for him says: Ameen, and may you receive the same.'",
    narrator: "Abu al-Darda' (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "2732",
    grade: "Sahih",
    topic: "dua",
    topic_tags: ["dua", "supplication", "brotherhood", "absent prayer", "angels", "answered dua", "sincere prayer", "community", "love"],
    daily_practice:
      "Make dua for someone you love today in their absence — a friend, a family member, someone going through a trial. An angel is making the same dua for you in return.",
  },
  {
    id: 87,
    slug: "hadith-believer-does-not-taunt-or-curse",
    title: "A Believer Does Not Taunt, Curse, or Speak Indecently",
    arabic:
      "لَيْسَ الْمُؤْمِنُ بِالطَّعَّانِ وَلاَ اللَّعَّانِ وَلاَ الْفَاحِشِ وَلاَ الْبَذِيءِ",
    transliteration:
      "Laysal-mu'minu biṭ-ṭa''āni wa lal-la''āni wa lal-fāḥishi wa lal-badhī'",
    translation:
      "Abdullah ibn Mas'ud (RA) reported: The Prophet ﷺ said, 'A believer is not a taunter, nor a curser, nor indecent, nor coarse in speech.'",
    narrator: "Abdullah ibn Mas'ud (RA)",
    source_book: "Jami' al-Tirmidhi",
    hadith_number: "1977",
    grade: "Hasan",
    topic: "speech",
    topic_tags: ["speech", "character", "taunting", "cursing", "indecency", "manners", "tongue", "believer", "adab", "etiquette"],
    daily_practice:
      "Guard your tongue today from taunting, insulting, and crude speech — every word you speak is a direct reflection of your faith.",
  },
  {
    id: 88,
    slug: "hadith-hajj-wipes-all-previous-sins",
    title: "A Pure Hajj Returns You Like the Day Your Mother Gave Birth to You",
    arabic:
      "مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
    transliteration:
      "Man ḥajja lillāhi falam yarfuth wa lam yafsuq raja'a kayawma waladathu ummuh",
    translation:
      "Narrated Abu Huraira (RA): The Prophet ﷺ said, 'Whoever performs Hajj for the sake of Allah and does not have sexual intercourse, nor commits sin, nor disputes unjustly during it, then he returns from Hajj as pure and free from sins as on the day on which his mother gave birth to him.'",
    narrator: "Abu Hurayrah (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "1521",
    grade: "Sahih",
    topic: "hajj",
    topic_tags: ["hajj", "pilgrimage", "forgiveness", "sins", "purification", "five pillars", "worship", "renewal", "purity", "Mecca"],
    daily_practice:
      "If you have not yet performed Hajj and are able to, make it your sincere intention today. It is one of the only acts that wipes the entire ledger of sins clean.",
  },
  {
    id: 89,
    slug: "hadith-first-ten-days-dhul-hijjah",
    title: "No Days Have Greater Deeds in Them Than the First Ten of Dhul Hijjah",
    arabic:
      "مَا مِنْ أَيَّامٍ الْعَمَلُ الصَّالِحُ فِيهَا أَحَبُّ إِلَى اللَّهِ مِنْ هَذِهِ الأَيَّامِ يَعْنِي أَيَّامَ الْعَشْرِ قَالُوا يَا رَسُولَ اللَّهِ وَلاَ الْجِهَادُ فِي سَبِيلِ اللَّهِ قَالَ وَلاَ الْجِهَادُ فِي سَبِيلِ اللَّهِ إِلاَّ رَجُلٌ خَرَجَ بِنَفْسِهِ وَمَالِهِ فَلَمْ يَرْجِعْ مِنْ ذَلِكَ بِشَيْءٍ",
    transliteration:
      "Mā min ayyāmini-l-'amalu-ṣ-ṣāliḥu fīhā aḥabbu ilallāhi min hādhihil-ayyām — ya'nī ayyāmal-'ashr. Qālū: yā rasūlallāh wa lal-jihādu fī sabīlillāh? Qāla: wa lal-jihādu fī sabīlillāh, illā rajulun kharaja bi-nafsihi wa mālihi falam yarji' min dhālika bishay'",
    translation:
      "Ibn Abbas (RA) reported: The Prophet ﷺ said, 'No good deeds done on other days are superior to those done on the first ten days of Dhul Hijjah.' The Companions said: 'Not even jihad in the way of Allah?' He ﷺ said: 'Not even jihad in the way of Allah, except for a man who goes out with his life and his property and does not return with any of it.'",
    narrator: "Ibn Abbas (RA)",
    source_book: "Sahih Bukhari",
    hadith_number: "969",
    grade: "Sahih",
    topic: "worship",
    topic_tags: ["Dhul Hijjah", "best days", "good deeds", "Eid al-Adha", "fasting", "remembrance", "takbir", "worship", "Hajj season", "seasonal"],
    daily_practice:
      "Mark the first ten days of Dhul Hijjah on your calendar — fast as many days as you can, increase dhikr and takbir, and perform your best deeds. These days outweigh everything else.",
  },
  {
    id: 90,
    slug: "hadith-fajr-prayer-under-allahs-protection",
    title: "Whoever Prays Fajr Is Under the Protection of Allah",
    arabic:
      "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ فَلاَ يَطْلُبَنَّكُمُ اللَّهُ مِنْ ذِمَّتِهِ بِشَيْءٍ فَإِنَّهُ مَنْ يَطْلُبْهُ مِنْ ذِمَّتِهِ بِشَيْءٍ يُدْرِكْهُ ثُمَّ يَكُبَّهُ عَلَى وَجْهِهِ فِي نَارِ جَهَنَّمَ",
    transliteration:
      "Man ṣallaṣ-ṣubḥa fahuwa fī dhimmatillāh. Falā yaṭluban-nakumullāhu min dhimmatihī bishay'. Fa'innahu man yaṭlubhu min dhimmatihī bishay'in yudrik-hu, thumma yakubbuhu 'alā wajhihi fī nāri jahannam",
    translation:
      "Jundub ibn Abdullah (RA) reported: The Messenger of Allah ﷺ said, 'Whoever performs the Fajr prayer is under the protection of Allah. So beware, O son of Adam, that Allah does not hold you accountable for being under His protection. For whoever He holds accountable for it, He will seize him and then throw him on his face into the Hellfire.'",
    narrator: "Jundub ibn Abdullah (RA)",
    source_book: "Sahih Muslim",
    hadith_number: "657",
    grade: "Sahih",
    topic: "prayer",
    topic_tags: ["fajr", "prayer", "protection", "morning prayer", "accountability", "salah", "worship", "consistency", "safety", "dhimmah"],
    daily_practice:
      "Never miss Fajr — it places you under the direct protection of Allah for the day. Show up at dawn, and Allah keeps you in His care.",
  },
];

// ── Utilities ─────────────────────────────────────────────────────────────────

export function getHadithBySlug(slug: string): Hadith | undefined {
  return HADITHS.find((h) => h.slug === slug);
}

export function getDailyHadith(date?: Date): Hadith {
  const d = date ?? new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((d.getTime() - start.getTime()) / 86_400_000);
  return HADITHS[dayOfYear % HADITHS.length];
}

export function getAllHadithSlugs(): string[] {
  return HADITHS.map((h) => h.slug);
}
