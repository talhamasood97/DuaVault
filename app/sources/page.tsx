import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Sources – DuaVault",
  description:
    "All duas in DuaVault are sourced from Sahih al-Bukhari, Sahih Muslim, Hisn al-Muslim, and other authentic Islamic collections.",
  alternates: { canonical: "/sources" },
};

const SOURCES = [
  {
    name: "Sahih al-Bukhari",
    author: "Imam Muhammad ibn Ismail al-Bukhari (d. 256 AH)",
    desc: "The most authentic book after the Quran, according to the consensus of Muslim scholars. Contains over 7,000 carefully graded hadiths.",
    grade: "Highest Authenticity",
    color: "emerald",
  },
  {
    name: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajjaj (d. 261 AH)",
    desc: "The second most authoritative hadith collection. Imam Muslim was known for his rigorous methodology in verifying chains of transmission.",
    grade: "Highest Authenticity",
    color: "emerald",
  },
  {
    name: "Hisn al-Muslim",
    author: "Sheikh Sa'id ibn 'Ali ibn Wahf al-Qahtani",
    desc: "Fortress of the Muslim — a comprehensive compilation of Prophetic supplications for every situation in a Muslim's daily life.",
    grade: "Compiled Reference",
    color: "blue",
  },
  {
    name: "Riyad as-Salihin",
    author: "Imam Yahya ibn Sharaf al-Nawawi (d. 676 AH)",
    desc: "Gardens of the Righteous — a renowned collection covering all aspects of Islamic practice with hadiths graded to the highest standards.",
    grade: "High Authenticity",
    color: "blue",
  },
  {
    name: "Sunan Abu Dawud",
    author: "Imam Abu Dawud al-Sijistani (d. 275 AH)",
    desc: "One of the six canonical hadith collections (Kutub al-Sittah), focused on legal hadiths and daily practices.",
    grade: "High Authenticity",
    color: "purple",
  },
  {
    name: "Sunan al-Tirmidhi",
    author: "Imam Abu Isa Muhammad al-Tirmidhi (d. 279 AH)",
    desc: "Known for its unique grading system, this collection contains many supplications and adhkar with detailed scholarly commentary.",
    grade: "High Authenticity",
    color: "purple",
  },
  {
    name: "The Holy Quran",
    author: "Direct word of Allah ﷻ",
    desc: "Quranic duas are the highest level of supplication — direct words of Allah revealed to Prophet Muhammad ﷺ.",
    grade: "Divine Revelation",
    color: "gold",
  },
];

export default function SourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">
          Our Sources
        </h1>
        <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
          Every dua on this platform is sourced from authenticated Islamic
          scholarship. We cite exact book names and hadith numbers for full
          traceability.
        </p>
      </div>

      <div className="space-y-4">
        {SOURCES.map((source) => (
          <div
            key={source.name}
            className="bg-white dark:bg-emerald-950/40 rounded-2xl p-6 border border-stone-100 dark:border-emerald-900"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2.5 bg-emerald-50 dark:bg-emerald-900/50 rounded-xl">
                <BookOpen className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
                  <h2 className="font-semibold text-stone-800 dark:text-stone-100">
                    {source.name}
                  </h2>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 font-medium">
                    {source.grade}
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-2 italic">
                  {source.author}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {source.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-100 dark:border-emerald-900 text-center">
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <strong className="text-stone-800 dark:text-stone-200">
            Our commitment to authenticity:
          </strong>{" "}
          If you find any dua that appears to be incorrectly attributed or
          graded, please contact us. Accuracy is our highest priority.
        </p>
      </div>
    </div>
  );
}
