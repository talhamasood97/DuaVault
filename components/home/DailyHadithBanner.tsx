import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Hadith } from "@/types";

export function DailyHadithBanner({ hadith }: { hadith: Hadith }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const arabicPreview = (() => {
    const words = (hadith.arabic || "").split(" ");
    return words.length > 6 ? words.slice(0, 6).join(" ") + "…" : hadith.arabic;
  })();

  return (
    <section className="pb-6 sm:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link href="/daily-hadith" className="block group">
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-700 to-amber-800 dark:from-amber-900 dark:to-stone-900 rounded-3xl p-5 sm:p-8 border border-amber-600 dark:border-amber-800 shadow-lg hover:shadow-xl transition-shadow">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 80%, white 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* Left content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <BookOpen className="w-4 h-4 flex-shrink-0 text-amber-300" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                    Hadith of the Day
                  </span>
                  <span className="text-xs text-amber-500 ml-1 hidden sm:inline">
                    · {today}
                  </span>
                </div>
                <h2 className="text-base sm:text-xl font-bold text-white mb-2 leading-snug">
                  {hadith.title}
                </h2>
                <p
                  className="arabic text-right text-xl sm:text-3xl text-amber-100 leading-loose"
                  dir="rtl"
                  lang="ar"
                >
                  {arabicPreview}
                </p>
                {/* Translation on mobile */}
                <p className="text-xs text-amber-300/80 mt-2 line-clamp-2 sm:hidden leading-relaxed italic">
                  {hadith.translation}
                </p>
              </div>

              {/* Right CTA */}
              <div className="flex sm:flex-col items-center justify-end sm:items-end gap-3">
                <p className="text-sm text-amber-200 hidden sm:block max-w-xs text-right line-clamp-2">
                  {hadith.translation}
                </p>
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/15 hover:bg-white/25 group-hover:bg-white/25 text-white text-sm font-medium rounded-xl transition-colors whitespace-nowrap border border-white/10">
                  Read hadith <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
