import type { Metadata } from "next";
import Link from "next/link";
import { Star, BookOpen, ChevronRight, Calendar } from "lucide-react";
import { getDailyDua } from "@/lib/duas";
import { AuthenticityBadge } from "@/components/dua/AuthenticityBadge";
import { ShareButtons } from "@/components/dua/ShareButtons";
import { getCategoryMeta, SITE_NAME } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Daily Dua – Today's Islamic Supplication",
  description:
    "A new authentic Islamic supplication every day. Start your morning with a verified dua from Quran and Sunnah.",
  alternates: { canonical: "/daily-dua" },
};

export const revalidate = 3600; // Revalidate every hour

export default async function DailyDuaPage() {
  const dua = await getDailyDua();
  const category = getCategoryMeta(dua.category);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Daily Dua – ${dua.title}`,
    description: dua.translation,
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
        <nav className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-500">Daily Dua</span>
        </nav>

        {/* Date header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-emerald-50 dark:bg-emerald-900/50 rounded-xl">
            <Calendar className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
              Daily Dua
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-400">{today}</p>
          </div>
        </div>

        {/* Main dua card */}
        <div className="bg-white dark:bg-emerald-950/40 rounded-3xl border border-stone-100 dark:border-emerald-900 shadow-sm overflow-hidden">
          {/* Gold top bar */}
          <div className="h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500" />

          <div className="px-6 sm:px-10 pt-8 pb-4">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Star
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
                    Today's Supplication
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100">
                  {dua.title}
                </h1>
              </div>
              <AuthenticityBadge grade={dua.authenticity_grade} size="lg" />
            </div>

            <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mt-3">
              <BookOpen className="w-4 h-4" />
              <span>{dua.source_book}</span>
              {dua.hadith_number && (
                <span className="text-stone-300 dark:text-stone-600">· {dua.hadith_number}</span>
              )}
            </div>
          </div>

          {/* Arabic */}
          <div className="px-6 sm:px-10 py-10">
            <div className="ornament mb-8">
              <span className="text-xs text-stone-400 dark:text-stone-600 font-medium uppercase tracking-widest px-4">
                Arabic
              </span>
            </div>
            <p
              className="arabic text-center text-arabic-lg sm:text-arabic-xl text-stone-800 dark:text-stone-100 leading-[2.2]"
              dir="rtl"
              lang="ar"
            >
              {dua.arabic_text}
            </p>
          </div>

          {/* Transliteration */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Transliteration
            </p>
            <p className="text-stone-600 dark:text-stone-300 italic text-base sm:text-lg leading-relaxed">
              {dua.transliteration}
            </p>
          </div>

          {/* Translation */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Translation
            </p>
            <p className="text-stone-700 dark:text-stone-200 text-base sm:text-lg leading-relaxed">
              {dua.translation}
            </p>
          </div>

          {/* Share */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50 bg-stone-50/50 dark:bg-emerald-950/30">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Share Today's Dua
            </p>
            <ShareButtons dua={dua} />
          </div>
        </div>

        {/* CTA to full dua page */}
        <div className="mt-6 text-center">
          <Link
            href={`/duas/${dua.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-emerald-700 dark:text-emerald-400 hover:underline font-medium"
          >
            View full dua details & related supplications
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category link */}
        {category && (
          <div className="mt-4 text-center">
            <Link
              href={`/category/${dua.category}`}
              className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400 hover:underline"
            >
              {category.icon} Browse more {category.title} duas
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
