/**
 * 30 Authentic Hadiths on Morals & Character
 *
 * Sources: Sahih Bukhari, Sahih Muslim, Abu Dawud, Tirmidhi, Ibn Majah
 * All hadiths are graded Sahih or Hasan by classical hadith scholars.
 * Hadiths graded Hasan by Imam Tirmidhi and confirmed Sahih by Shaykh Albani
 * are marked Sahih. Pure Hasan narrations are marked Hasan.
 *
 * Arabic text verified against Sunnah.com and Dar al-Ifta references.
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
      "The strong person is not the one who overpowers others in wrestling. The strong person is the one who controls himself when angry.",
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
    arabic: "إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
    transliteration:
      "Innallāha rafīqun yuhibbur-rifqa fil-amri kullihi",
    translation:
      "Allah is gentle and loves gentleness in all matters.",
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
      "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    transliteration:
      "Innamal-a'mālu bin-niyyāt, wa innamā likulli-mri'in mā nawā",
    translation:
      "Actions are judged only by intentions, and every person will have only what they intended.",
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
      "عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    transliteration:
      "Alaykum bis-sidq, fa-innas-sidqa yahdi ilal-birr, wa innal-birra yahdi ilal-jannah",
    translation:
      "Be truthful. Truthfulness leads to righteousness, and righteousness leads to Paradise.",
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
      "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    transliteration:
      "Laysal-ghinā 'an kathratil-'arad, walākinnal-ghinā ghinan-nafs",
    translation:
      "Richness is not about having many possessions. True richness is the richness of the soul — contentment.",
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
      "أَثْقَلُ شَيْءٍ يُوضَعُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ الْخُلُقُ الْحَسَنُ",
    transliteration:
      "Athqalu shay'in yūda'u fī mīzānil-mu'mini yawmal-qiyāmati al-khuluqul-hasan",
    translation:
      "The heaviest thing placed on a believer's scale on the Day of Judgement is good character.",
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
      "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    transliteration:
      "Al-Muslimu man salimaL-Muslimūna min lisānihi wa yadihi",
    translation:
      "A Muslim is one from whose tongue and hands other Muslims are safe.",
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
      "وَاللَّهِ لاَ يُؤْمِنُ، وَاللَّهِ لاَ يُؤْمِنُ، وَاللَّهِ لاَ يُؤْمِنُ — الَّذِي لاَ يَأْمَنُ جَارُهُ بَوَائِقَهُ",
    transliteration:
      "Wallāhi lā yu'min, wallāhi lā yu'min, wallāhi lā yu'min — alladhī lā ya'manu jāruhu bawā'iqah",
    translation:
      "By Allah, he does not truly believe — he whose neighbor is not safe from his harm.",
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
      "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    transliteration:
      "Man kāna yu'minu billāhi wal-yawmil-ākhiri falyaqul khayran aw liyasmut",
    translation:
      "Whoever believes in Allah and the Last Day, let him say what is good or remain silent.",
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
      "None of you truly believes until he loves for his brother what he loves for himself.",
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
      "أَفْشُوا السَّلاَمَ بَيْنَكُمْ",
    transliteration: "Afshūs-salāma baynakum",
    translation:
      "Spread the greeting of peace among yourselves — and you will love one another.",
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
      "Do not belittle any act of kindness, even if it is meeting your brother with a cheerful face.",
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
      "Protect yourself from the Fire, even if only by giving half a date in charity.",
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
    arabic: "الْحَيَاءُ لاَ يَأْتِي إِلاَّ بِخَيْرٍ",
    transliteration: "Al-hayā'u lā ya'tī illā bi-khayr",
    translation: "Modesty brings nothing but good.",
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
      "ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    transliteration:
      "Irhamū man fil-ardi yarhamkum man fis-samā'",
    translation:
      "Show mercy to those on earth, and the One above the heavens will show mercy to you.",
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
      "خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي",
    transliteration:
      "Khayrukum khayrukum li-ahlihi wa ana khayrukum li-ahli",
    translation:
      "The best of you is the one who is best to his family, and I am the best of you to my family.",
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
      "الْغِيبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ",
    transliteration:
      "Al-ghībatu dhikruka akhāka bimā yakrah",
    translation:
      "Backbiting is mentioning about your brother something he would dislike.",
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
      "He has not thanked Allah who has not thanked people.",
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
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    transliteration: "At-tuhūru shatrul-īmān",
    translation: "Purification is half of faith.",
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
    title: "Removing Harm from the Road is Charity",
    arabic:
      "وَإِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
    transliteration:
      "Wa imātatul-adhā 'anit-tarīqi sadaqah",
    translation:
      "Removing something harmful from the road is an act of charity.",
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
      "Make things easy, do not make them difficult. Give glad tidings, do not drive people away.",
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
      "كُلُّ بَنِي آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
    transliteration:
      "Kullu banī Ādama khattā'un wa khayrul-khattā'īna at-tawwābūn",
    translation:
      "Every son of Adam makes mistakes, and the best of those who make mistakes are those who repent.",
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
    translation: "Supplication is the essence of worship.",
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
      "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    transliteration:
      "Talabul-'ilmi farīdatun 'alā kulli Muslim",
    translation:
      "Seeking knowledge is an obligation upon every Muslim.",
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
      "Part of a person's excellence in Islam is leaving alone what does not concern him.",
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
      "One who severs the ties of kinship will not enter Paradise.",
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
      "Fulfill the trust of the one who trusted you, and do not betray one who has betrayed you.",
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
      "Fear Allah wherever you are. Follow a bad deed with a good one to erase it. And treat people with good character.",
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
      "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    transliteration:
      "Tabasumuka fī wajhi akhīka laka sadaqah",
    translation:
      "Your smile in the face of your brother is an act of charity for you.",
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
      "Feed the hungry, visit the sick, and free those who are in hardship.",
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
