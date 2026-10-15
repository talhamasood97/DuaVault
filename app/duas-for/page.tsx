import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/collections";
import { SITE_URL, safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dua Collections – Authentic Duas by Topic",
  description:
    "Every authentic dua for a moment in one place: before sleeping, morning and evening adhkar, anxiety, the sick, parents, exams, Ramadan and more.",
  alternates: { canonical: "/duas-for" },
};

export default function CollectionsIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dua Collections",
    url: `${SITE_URL}/duas-for`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: COLLECTIONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.title,
        url: `${SITE_URL}/duas-for/${c.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        <nav className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span>Dua Collections</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">Dua Collections</h1>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-10 max-w-2xl">
          Every authentic dua for a moment, gathered on one page — each with its Arabic text,
          transliteration, meaning and source.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/duas-for/${c.slug}`}
              className="group block rounded-2xl border border-stone-100 dark:border-emerald-900 bg-white dark:bg-emerald-950/40 p-5 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
            >
              <h2 className="font-semibold text-stone-800 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {c.title}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">{c.description}</p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-3">{c.duas.length} duas →</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
