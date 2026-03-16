import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ChevronRight, Calendar, CheckCircle } from "lucide-react";
import { getDailyHadith } from "@/data/hadiths";
import { SubscribeForm } from "@/components/hadith/SubscribeForm";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hadith of the Day – Daily Islamic Wisdom on Morals & Character",
  description:
    "A new authentic hadith every day on character, kindness, honesty and life improvement. Verified from Sahih Bukhari and Sahih Muslim.",
  alternates: { canonical: "/daily-hadith" },
  openGraph: {
    title: "Hadith of the Day – DuaVault",
    description:
      "Start every morning with an authentic hadith on morals and character. Verified. Short. Actionable.",
    url: `${SITE_URL}/daily-hadith`,
  },
};

export const revalidate = 3600;

const GRADE_COLORS = {
  Sahih: "bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  Hasan: "bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
};

export default function DailyHadithPage() {
  const hadith = getDailyHadith();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Hadith of the Day – ${hadith.title}`,
    description: hadith.translation,
    datePublished: new Date().toISOString().split("T")[0],
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-500">Hadith of the Day</span>
        </nav>

        {/* Date header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
            <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Hadith of the Day
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-400">{today}</p>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white dark:bg-emerald-950/40 rounded-3xl border border-stone-100 dark:border-emerald-900 shadow-sm overflow-hidden">
          {/* Amber top bar */}
          <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-amber-400" />

          {/* Header */}
          <div className="px-6 sm:px-10 pt-8 pb-4">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
                  Today&apos;s Hadith
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 leading-snug">
                  {hadith.title}
                </h1>
              </div>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${GRADE_COLORS[hadith.grade]}`}
              >
                ✓ {hadith.grade}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mt-3">
              <BookOpen className="w-4 h-4" />
              <span>
                {hadith.source_book} · {hadith.hadith_number}
              </span>
              <span className="text-stone-300 dark:text-stone-600">·</span>
              <span>Narrated by {hadith.narrator}</span>
            </div>
          </div>

          {/* Arabic */}
          <div className="px-6 sm:px-10 py-10 bg-stone-50/60 dark:bg-emerald-950/30">
            <p
              className="arabic text-center text-arabic-lg sm:text-arabic-xl text-stone-800 dark:text-stone-100 leading-[2.2]"
              dir="rtl"
              lang="ar"
            >
              {hadith.arabic}
            </p>
          </div>

          {/* Transliteration */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
              Transliteration
            </p>
            <p className="text-stone-600 dark:text-stone-300 italic text-base sm:text-lg leading-relaxed">
              {hadith.transliteration}
            </p>
          </div>

          {/* Translation */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
              Translation
            </p>
            <p className="text-stone-700 dark:text-stone-200 text-base sm:text-lg leading-relaxed">
              {hadith.translation}
            </p>
          </div>

          {/* Today's practice */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50 bg-amber-50/40 dark:bg-amber-900/10">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-1.5">
                  Today&apos;s Practice
                </p>
                <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                  {hadith.daily_practice}
                </p>
              </div>
            </div>
          </div>

          {/* Topic tags */}
          <div className="px-6 sm:px-10 py-4 border-t border-stone-50 dark:border-emerald-900/50">
            <div className="flex flex-wrap gap-2">
              {hadith.topic_tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-stone-100 dark:bg-emerald-900 text-stone-500 dark:text-stone-400 rounded-full capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA: full hadith page */}
        <div className="mt-6 text-center">
          <Link
            href={`/hadith/${hadith.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-amber-700 dark:text-amber-400 hover:underline font-medium"
          >
            View full details & archive
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Email subscription */}
        <div className="mt-10">
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}
