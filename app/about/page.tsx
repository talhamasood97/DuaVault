import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, BookOpen, Search, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Authentic Duas, Verified Sources",
  description:
    "Our mission is to be the most complete and trusted vault of authentic Islamic supplications, with every dua verified against scholarly sources.",
  alternates: { canonical: "/about" },
};

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Scholar-Verified Content",
    desc: "Every supplication is cross-referenced against classical Islamic scholarship and authentic hadith collections.",
  },
  {
    icon: BookOpen,
    title: "Primary Sources Only",
    desc: "Duas sourced exclusively from Sahih al-Bukhari, Sahih Muslim, Hisn al-Muslim, Riyad as-Salihin, and the Holy Quran.",
  },
  {
    icon: Search,
    title: "Instant Discovery",
    desc: "Find any dua within seconds, whether by keyword, emotional state, life situation, or Islamic practice.",
  },
  {
    icon: Heart,
    title: "Built for the Ummah",
    desc: "A spiritual resource designed with peace, clarity, and accessibility for Muslims worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <p className="arabic text-3xl text-emerald-700 dark:text-emerald-400 mb-6 leading-loose" dir="rtl" lang="ar">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          About DuaVault
        </h1>
        <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
          DuaVault exists to be the most complete, trusted, and accessible vault
          of authentic Islamic supplications — for every Muslim, everywhere.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white dark:bg-emerald-950/40 rounded-3xl p-8 border border-stone-100 dark:border-emerald-900 mb-8">
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          Our Mission
        </h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          Millions of Muslims search every day for duas — before sleeping, when
          feeling anxious, before entering a mosque. Yet the results they find
          are often fragmented, unverified, or poorly formatted.
        </p>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
          DuaVault solves this. Every supplication in this vault comes with its
          Arabic text, transliteration, translation, and full hadith reference —
          verified against classical Islamic scholarship.
        </p>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="bg-white dark:bg-emerald-950/40 rounded-2xl p-6 border border-stone-100 dark:border-emerald-900"
          >
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/50 rounded-xl w-fit mb-4">
              <f.icon className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-xl transition-colors"
        >
          Explore Duas
        </Link>
      </div>
    </div>
  );
}
