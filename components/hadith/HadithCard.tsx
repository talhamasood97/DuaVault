import Link from "next/link";
import { BookOpen } from "lucide-react";
import type { Hadith, HadithGrade } from "@/types";

const GRADE_COLORS: Record<HadithGrade, string> = {
  Sahih:
    "bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  Hasan:
    "bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
};

export function HadithCard({ hadith }: { hadith: Hadith }) {
  return (
    <article className="relative group flex flex-col bg-white dark:bg-emerald-950/40 rounded-2xl p-5 border border-stone-100 dark:border-emerald-900 hover:border-amber-200 dark:hover:border-amber-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-100/50 dark:hover:shadow-amber-900/20">
      {/* Stretched invisible link for mouse clicks */}
      <Link
        href={`/hadith/${hadith.slug}`}
        className="absolute inset-0 rounded-2xl focus:outline-none"
        tabIndex={-1}
        aria-label={`Open: ${hadith.title}`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <Link
          href={`/hadith/${hadith.slug}`}
          className="font-semibold text-stone-800 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug flex-1 focus:outline-none focus-visible:underline"
        >
          {hadith.title}
        </Link>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${GRADE_COLORS[hadith.grade]}`}
        >
          ✓ {hadith.grade}
        </span>
      </div>

      {/* Arabic snippet */}
      <p
        className="arabic text-right text-xl text-stone-600 dark:text-stone-300 mb-3 leading-loose line-clamp-2"
        dir="rtl"
        lang="ar"
      >
        {hadith.arabic}
      </p>

      {/* Translation preview */}
      <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed flex-1">
        {hadith.translation}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-stone-50 dark:border-emerald-900/50">
        <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 min-w-0">
          <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{hadith.source_book}</span>
          <span className="text-stone-300 dark:text-stone-600 flex-shrink-0">·</span>
          <span className="flex-shrink-0">{hadith.hadith_number}</span>
        </div>
        <span className="text-xs font-medium text-amber-700 dark:text-amber-400 capitalize flex-shrink-0">
          {hadith.topic}
        </span>
      </div>
    </article>
  );
}
