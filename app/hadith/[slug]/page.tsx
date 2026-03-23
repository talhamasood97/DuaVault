import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, ChevronRight, CheckCircle } from "lucide-react";
import { getHadithBySlug, getAllHadithSlugs, HADITHS } from "@/data/hadiths";
import { SubscribeForm } from "@/components/hadith/SubscribeForm";
import { SITE_NAME, SITE_URL , safeJsonLd } from "@/lib/utils";
import { HadithViewTracker } from "@/components/analytics/HadithViewTracker";

export const revalidate = 86400;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllHadithSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hadith = getHadithBySlug(params.slug);
  if (!hadith) return {};
  return {
    title: `${hadith.title} – Hadith on ${hadith.topic}`,
    description: `${hadith.translation} — ${hadith.source_book} ${hadith.hadith_number}. Grade: ${hadith.grade}. Narrated by ${hadith.narrator}.`,
    alternates: { canonical: `/hadith/${hadith.slug}` },
    openGraph: {
      title: hadith.title,
      description: hadith.translation,
      url: `${SITE_URL}/hadith/${hadith.slug}`,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${hadith.title} – DuaVault` }],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

const GRADE_COLORS = {
  Sahih: "bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  Hasan: "bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
};

export default function HadithPage({ params }: Props) {
  const hadith = getHadithBySlug(params.slug);
  if (!hadith) notFound();

  // Related hadiths — same topic, excluding current
  const related = HADITHS.filter(
    (h) =>
      h.slug !== hadith.slug &&
      h.topic_tags.some((t) => hadith.topic_tags.includes(t))
  ).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: hadith.title,
        description: hadith.translation,
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME },
        url: `${SITE_URL}/hadith/${hadith.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Hadiths", item: `${SITE_URL}/hadith` },
          { "@type": "ListItem", position: 3, name: hadith.title, item: `${SITE_URL}/hadith/${hadith.slug}` },
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
      <HadithViewTracker
        slug={hadith.slug}
        topic={hadith.topic}
        sourceBook={hadith.source_book}
        grade={hadith.grade}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href="/hadith"
            className="hover:text-emerald-600 transition-colors"
          >
            Hadiths
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-500 truncate max-w-[160px]">
            {hadith.title}
          </span>
        </nav>

        {/* Main card */}
        <div className="bg-white dark:bg-emerald-950/40 rounded-3xl border border-stone-100 dark:border-emerald-900 shadow-sm overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-amber-400" />

          {/* Header */}
          <div className="px-6 sm:px-10 pt-8 pb-4">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2 capitalize">
                  {hadith.topic}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Transliteration
            </p>
            <p className="text-stone-600 dark:text-stone-300 italic text-base sm:text-lg leading-relaxed">
              {hadith.transliteration}
            </p>
          </div>

          {/* Translation */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Translation
            </p>
            <p className="text-stone-700 dark:text-stone-200 text-base sm:text-lg leading-relaxed">
              {hadith.translation}
            </p>
          </div>

          {/* Today's practice */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50 bg-amber-50/40 dark:bg-amber-900/10">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-1.5">
                  Practice This Today
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

        {/* Related hadiths */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-stone-700 dark:text-stone-200 mb-4">
              Related Hadiths
            </h2>
            <div className="space-y-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/hadith/${r.slug}`}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-emerald-950/40 rounded-2xl border border-stone-100 dark:border-emerald-900 hover:border-amber-200 dark:hover:border-amber-800 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-stone-700 dark:text-stone-200 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors text-sm leading-snug mb-1">
                      {r.title}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                      {r.source_book} · {r.hadith_number}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-300 dark:text-stone-600 flex-shrink-0 mt-0.5" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Subscription */}
        <div className="mt-12">
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}
