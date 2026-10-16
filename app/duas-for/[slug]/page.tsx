import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, ChevronRight, ArrowRight } from "lucide-react";
import { getDuaBySlug } from "@/data/duas";
import { AuthenticityBadge } from "@/components/dua/AuthenticityBadge";
import { SourceLink } from "@/components/ui/SourceLink";
import { COLLECTIONS, getCollection } from "@/lib/collections";
import { sourceUrl } from "@/lib/sources";
import { SITE_URL, safeJsonLd, fitTitle } from "@/lib/utils";
import type { Dua } from "@/types";

export const revalidate = 86400;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getCollection(params.slug);
  if (!c) return {};
  const url = `/duas-for/${c.slug}`;
  const image = `${SITE_URL}/api/instagram/dua?slug=${c.duas[0]}&share=1`;
  return {
    title: fitTitle(c.title, [" – Arabic, Meaning & Source", " – Arabic & Meaning", " in Arabic"]),
    description: c.description,
    alternates: { canonical: url },
    openGraph: { title: c.title, description: c.description, url, type: "article", images: [{ url: image, width: 1080, height: 1080 }] },
    twitter: { card: "summary_large_image", title: c.title, description: c.description, images: [image] },
  };
}

export default function CollectionPage({ params }: Props) {
  const c = getCollection(params.slug);
  if (!c) notFound();

  const duas = c.duas.map((s) => getDuaBySlug(s)).filter((d): d is Dua => !!d);
  const url = `${SITE_URL}/duas-for/${c.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: c.title,
        description: c.description,
        url,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: duas.length,
          itemListElement: duas.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: d.title,
            url: `${SITE_URL}/duas/${d.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: c.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span>{c.title}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">{c.title}</h1>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{c.intro}</p>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-3">
            {duas.length} authentic {duas.length === 1 ? "dua" : "duas"}
          </p>
        </header>

        <ol className="space-y-6">
          {duas.map((dua, i) => (
            <li
              key={dua.slug}
              className="bg-white dark:bg-emerald-950/40 rounded-2xl border border-stone-100 dark:border-emerald-900 overflow-hidden"
            >
              <div className="px-5 sm:px-8 pt-6 pb-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-lg sm:text-xl font-semibold text-stone-800 dark:text-stone-100">
                    <span className="text-emerald-700 dark:text-emerald-400 mr-2">{i + 1}.</span>
                    <Link href={`/duas/${dua.slug}`} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                      {dua.title}
                    </Link>
                  </h2>
                  <div className="flex-shrink-0">
                    <AuthenticityBadge grade={dua.authenticity_grade} />
                  </div>
                </div>
                <SourceLink
                  href={sourceUrl(dua.source_book, dua.hadith_number)}
                  className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400"
                >
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  <span>
                    {dua.source_book}
                    {dua.hadith_number
                      ? dua.authenticity_grade === "QURAN"
                        ? ` ${dua.hadith_number}`
                        : ` · Hadith ${dua.hadith_number}`
                      : ""}
                  </span>
                </SourceLink>
              </div>

              <p
                className="arabic text-center text-arabic-lg text-stone-800 dark:text-stone-100 leading-[2.2] px-5 sm:px-8 py-6 bg-stone-50/60 dark:bg-emerald-950/30"
                dir="rtl"
                lang="ar"
              >
                {dua.arabic_text}
              </p>

              <div className="px-5 sm:px-8 py-5 space-y-3">
                <p className="text-stone-600 dark:text-stone-300 italic leading-relaxed">{dua.transliteration}</p>
                <p className="text-stone-700 dark:text-stone-200 leading-relaxed">{dua.translation}</p>
                <Link
                  href={`/duas/${dua.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  Open this dua <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-4">More dua collections</h2>
          <div className="flex flex-wrap gap-2">
            {COLLECTIONS.filter((o) => o.slug !== c.slug).map((o) => (
              <Link
                key={o.slug}
                href={`/duas-for/${o.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-stone-200 dark:border-emerald-800 text-stone-600 dark:text-stone-300 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
              >
                {o.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
