import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ChevronRight, Calendar } from "lucide-react";
import { HADITHS } from "@/data/hadiths";
import { HadithCard } from "@/components/hadith/HadithCard";
import { SITE_NAME, SITE_URL , safeJsonLd } from "@/lib/utils";
import { HADITH_CATEGORIES, TOPIC_TO_CATEGORY, getHadithCategory } from "@/lib/hadith-categories";

export const revalidate = 86400;

interface Props {
  searchParams: { cat?: string };
}

export function generateMetadata({ searchParams }: Props): Metadata {
  const cat = searchParams.cat;
  const category = cat ? getHadithCategory(cat) : null;

  const base: Metadata = {
    title: `Hadith Archive – Authentic Hadith with Arabic & Translation | DuaVault`,
    description: `Browse authenticated hadith from Sahih Bukhari, Sahih Muslim, Abu Dawud, and Tirmidhi. Arabic text, transliteration, English translation, and daily practice — organised by theme.`,
    alternates: { canonical: "/hadith" },
    openGraph: {
      title: "Hadith Archive – DuaVault",
      description: `Authentic hadith with Arabic, transliteration, and English translation. Verified from Sahih Bukhari and Sahih Muslim.`,
      url: `${SITE_URL}/hadith`,
      siteName: SITE_NAME,
    },
    twitter: { card: "summary_large_image" },
  };

  if (category) {
    return {
      ...base,
      title: `${category.label} Hadith – DuaVault`,
      description: `${category.description}. Authentic hadith from Sahih Bukhari, Sahih Muslim and other major collections — Arabic, transliteration, translation and daily practice.`,
      robots: { index: false, follow: true },
    };
  }

  return base;
}

export default function HadithArchivePage({ searchParams }: Props) {
  const activeCategory = searchParams.cat ?? "";
  const activeCategoryMeta = activeCategory ? getHadithCategory(activeCategory) : null;

  // Count hadiths per category
  const categoryCounts = HADITHS.reduce<Record<string, number>>((acc, h) => {
    const cat = TOPIC_TO_CATEGORY[h.topic] ?? "other";
    acc[cat] = (acc[cat] ?? 0) + 1;
    return acc;
  }, {});

  // Filter hadiths for active category
  const filteredHadiths = activeCategory
    ? HADITHS.filter((h) => TOPIC_TO_CATEGORY[h.topic] === activeCategory)
    : HADITHS;

  // Group all hadiths by category (for the "All" grouped view)
  const grouped = HADITH_CATEGORIES.map((cat) => ({
    category: cat,
    hadiths: HADITHS.filter((h) => TOPIC_TO_CATEGORY[h.topic] === cat.slug),
  })).filter((g) => g.hadiths.length > 0);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Hadith Archive – DuaVault",
        description: `Authenticated hadith from Sahih Bukhari, Sahih Muslim, Abu Dawud, and Tirmidhi.`,
        url: `${SITE_URL}/hadith`,
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Hadith Archive", item: `${SITE_URL}/hadith` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8"
        >
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-500">Hadith Archive</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
              <BookOpen className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100">
              Hadith Archive
            </h1>
          </div>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed">
            Authenticated hadith from Sahih Bukhari, Sahih Muslim, Abu Dawud, and Tirmidhi —
            each with Arabic text, transliteration, translation, and a daily practice.
          </p>
        </div>

        {/* Daily hadith CTA banner */}
        <Link
          href="/daily-hadith"
          className="flex items-center justify-between gap-4 px-5 py-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl mb-10 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                Hadith of the Day
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                A new hadith every morning — subscribe for daily email delivery
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-amber-700 dark:text-amber-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Category filter buttons */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
            Browse by theme
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {/* All button */}
            <Link
              href="/hadith"
              className={`flex flex-col items-center gap-1 px-3 py-3 rounded-2xl border text-center transition-all ${
                !activeCategory
                  ? "bg-amber-700 text-white border-amber-700 shadow-sm"
                  : "bg-white dark:bg-emerald-950/40 border-stone-200 dark:border-emerald-800 text-stone-600 dark:text-stone-400 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
              }`}
            >
              <span className="text-xl">📖</span>
              <span className="text-xs font-semibold leading-tight">All</span>
              <span className={`text-xs ${!activeCategory ? "text-amber-200" : "text-stone-400 dark:text-stone-500"}`}>
                {HADITHS.length}
              </span>
            </Link>

            {/* Category buttons */}
            {HADITH_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.slug] ?? 0;
              const isActive = activeCategory === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/hadith?cat=${cat.slug}`}
                  className={`flex flex-col items-center gap-1 px-3 py-3 rounded-2xl border text-center transition-all ${
                    isActive
                      ? "bg-amber-700 text-white border-amber-700 shadow-sm"
                      : "bg-white dark:bg-emerald-950/40 border-stone-200 dark:border-emerald-800 text-stone-600 dark:text-stone-400 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-xs font-semibold leading-tight line-clamp-2">{cat.label}</span>
                  <span className={`text-xs ${isActive ? "text-amber-200" : "text-stone-400 dark:text-stone-500"}`}>
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hadith list */}
        {activeCategory ? (
          /* Filtered view — single category */
          <>
            {activeCategoryMeta && (
              <div className="mb-6">
                <h2 className="text-lg font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
                  <span>{activeCategoryMeta.icon}</span>
                  {activeCategoryMeta.label}
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  {activeCategoryMeta.description} · {filteredHadiths.length} hadiths
                </p>
              </div>
            )}
            {filteredHadiths.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredHadiths.map((hadith) => (
                  <HadithCard key={hadith.id} hadith={hadith} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-stone-500 dark:text-stone-400">
                <p className="text-5xl mb-4">📖</p>
                <p className="font-medium">No hadiths found in this category</p>
                <Link href="/hadith" className="mt-3 text-sm text-amber-700 dark:text-amber-400 hover:underline inline-block">
                  ← View all hadiths
                </Link>
              </div>
            )}
          </>
        ) : (
          /* All view — grouped by category with section headers */
          <div className="space-y-12">
            {grouped.map(({ category, hadiths }) => (
              <section key={category.slug}>
                {/* Section header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h2 className="text-base font-bold text-stone-800 dark:text-stone-100">
                        {category.label}
                      </h2>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/hadith?cat=${category.slug}`}
                    className="text-xs text-amber-700 dark:text-amber-400 hover:underline whitespace-nowrap flex-shrink-0"
                  >
                    See all ({hadiths.length})
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hadiths.map((hadith) => (
                    <HadithCard key={hadith.id} hadith={hadith} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
