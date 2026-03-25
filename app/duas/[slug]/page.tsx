import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Tag, ChevronRight } from "lucide-react";
import { getDuaBySlug, getAllSlugs, getRelatedDuas } from "@/lib/duas";
import { AuthenticityBadge } from "@/components/dua/AuthenticityBadge";
import { ShareButtons } from "@/components/dua/ShareButtons";
import { SaveButton } from "@/components/dua/SaveButton";
import { RelatedDuas } from "@/components/dua/RelatedDuas";
import { SocialFollowStrip } from "@/components/layout/SocialFollowStrip";
import { getCategoryMeta, getEmotionMeta, SITE_URL, SITE_NAME , safeJsonLd } from "@/lib/utils";
import { DuaViewTracker } from "@/components/analytics/DuaViewTracker";

export const revalidate = 86400;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dua = await getDuaBySlug(params.slug);
  if (!dua) return {};

  const title = `${dua.title} – Arabic, Translation & Source`;
  const description = `${dua.title}: "${dua.arabic_text.slice(0, 60)}…" — ${dua.translation.slice(0, 120)}. Source: ${dua.source_book}${dua.hadith_number ? ` ${dua.hadith_number}` : ""}. ${dua.authenticity_grade} grading.`;
  const url = `/duas/${dua.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function DuaPage({ params }: Props) {
  const dua = await getDuaBySlug(params.slug);
  if (!dua) notFound();

  const [related, categoryMeta] = await Promise.all([
    getRelatedDuas(dua, 4),
    Promise.resolve(getCategoryMeta(dua.category)),
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dua.title,
    description: dua.translation,
    url: `${SITE_URL}/duas/${dua.slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: "Islamic Supplication (Dua)",
    },
    inLanguage: ["en", "ar"],
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    citation: dua.authenticity_grade === "QURAN"
      ? `${dua.source_book}${dua.hadith_number ? ` ${dua.hadith_number}` : ""}`
      : `${dua.source_book}${dua.hadith_number ? `, Hadith ${dua.hadith_number}` : ""}`,
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryMeta?.title ?? dua.category,
        item: `${SITE_URL}/category/${dua.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dua.title,
        item: `${SITE_URL}/duas/${dua.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }}
      />
      <DuaViewTracker
        slug={dua.slug}
        category={dua.category}
        sourceBook={dua.source_book}
        grade={dua.authenticity_grade}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8"
        >
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={`/category/${dua.category}`}
            className="hover:text-emerald-600 transition-colors capitalize"
          >
            {categoryMeta?.title || dua.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-500 dark:text-stone-400 line-clamp-1">
            {dua.title}
          </span>
        </nav>

        {/* Main card */}
        <article className="bg-white dark:bg-emerald-950/40 rounded-3xl border border-stone-100 dark:border-emerald-900 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-stone-50 dark:border-emerald-900">
            {/* Title row — stacks on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 leading-tight">
                {dua.title}
              </h1>
              <div className="flex items-center gap-2 flex-shrink-0">
                <AuthenticityBadge grade={dua.authenticity_grade} size="lg" />
                <SaveButton slug={dua.slug} title={dua.title} size="lg" />
              </div>
            </div>

            {/* Source reference — groups so it wraps cleanly */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{dua.source_book}</span>
                {dua.hadith_number && (
                  <>
                    <span className="text-stone-300 dark:text-stone-600">·</span>
                    <span>
                      {dua.authenticity_grade === "QURAN"
                        ? dua.hadith_number
                        : `Hadith ${dua.hadith_number}`}
                    </span>
                  </>
                )}
              </div>
              {dua.graded_by && (
                <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
                  ✓ Graded by {dua.graded_by}
                </span>
              )}
            </div>
          </div>

          {/* Arabic text — primary element */}
          <div className="px-6 sm:px-10 py-10 bg-gradient-to-b from-sand-50/50 to-transparent dark:from-emerald-950/50">
            <div className="ornament mb-8">
              <span className="text-xs text-stone-400 dark:text-stone-600 font-medium uppercase tracking-widest px-4">
                Arabic
              </span>
            </div>
            <p
              className="arabic text-center text-arabic-lg sm:text-arabic-xl text-stone-800 dark:text-stone-100 leading-[2.2] mb-2"
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
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed italic text-base sm:text-lg">
              {dua.transliteration}
            </p>
          </div>

          {/* Translation */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Translation
            </p>
            <p className="text-stone-700 dark:text-stone-200 leading-relaxed text-base sm:text-lg">
              {dua.translation}
            </p>
          </div>

          {/* Share buttons */}
          <div className="px-6 sm:px-10 py-6 border-t border-stone-50 dark:border-emerald-900/50 bg-stone-50/50 dark:bg-emerald-950/30">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Share this Dua
            </p>
            <ShareButtons dua={dua} />
          </div>
        </article>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categoryMeta && (
            <Link
              href={`/category/${dua.category}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-emerald-950/40 border border-stone-200 dark:border-emerald-800 text-sm text-stone-600 dark:text-stone-400 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all"
            >
              <Tag className="w-3.5 h-3.5" />
              {categoryMeta.title}
            </Link>
          )}
          {dua.emotion_tags.map((emotion) => {
            const em = getEmotionMeta(emotion);
            return em ? (
              <Link
                key={emotion}
                href={`/emotion/${emotion}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-emerald-950/40 border border-stone-200 dark:border-emerald-800 text-sm text-stone-600 dark:text-stone-400 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all"
              >
                <span>{em.icon}</span>
                {em.title}
              </Link>
            ) : null;
          })}
        </div>

        {/* Follow us */}
        <SocialFollowStrip variant="dua" />

        {/* Related duas */}
        <div className="mt-12">
          <RelatedDuas duas={related} />
        </div>
      </div>
    </>
  );
}
