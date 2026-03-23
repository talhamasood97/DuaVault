import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getDuasByCategory } from "@/lib/duas";
import { DuaCard } from "@/components/dua/DuaCard";
import { getCategoryMeta, CATEGORIES, SITE_URL , safeJsonLd } from "@/lib/utils";

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryMeta(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.title} Duas – Authentic Islamic Supplications`,
    description: `${cat.description}. Browse authentic duas with Arabic, transliteration, and verified Hadith sources.`,
    alternates: { canonical: `/category/${cat.slug}` },
    openGraph: {
      title: `${cat.title} Duas – DuaVault`,
      description: `${cat.description}. Browse authentic duas with Arabic, transliteration, and verified Hadith sources.`,
      url: `${SITE_URL}/category/${cat.slug}`,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${cat.title} Duas – DuaVault` }],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const cat = getCategoryMeta(params.slug);
  if (!cat) notFound();

  const duas = await getDuasByCategory(params.slug);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${cat.title} Duas – Authentic Islamic Supplications`,
        description: `${cat.description}. Browse authentic duas with Arabic, transliteration, and verified Hadith sources.`,
        url: `${SITE_URL}/category/${cat.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: `${cat.title} Duas`, item: `${SITE_URL}/category/${cat.slug}` },
        ],
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }}
    />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-500">Categories</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-500">{cat.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{cat.icon}</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100">
            {cat.title} Duas
          </h1>
        </div>
        <p className="text-stone-500 dark:text-stone-400 max-w-xl">
          {cat.description}
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
          {duas.length} authenticated {duas.length === 1 ? "supplication" : "supplications"}
        </p>
      </div>

      {/* All categories nav — scrollable on mobile, wraps on desktop */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all whitespace-nowrap flex-shrink-0 sm:flex-shrink ${
              c.slug === params.slug
                ? "bg-emerald-700 text-white border-emerald-700"
                : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-emerald-300 dark:hover:border-emerald-700"
            }`}
          >
            {c.icon} {c.title}
          </Link>
        ))}
      </div>

      {/* Duas grid */}
      {duas.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {duas.map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-stone-500 dark:text-stone-400">
          <p className="text-5xl mb-4">📖</p>
          <p className="font-medium">More duas coming soon</p>
        </div>
      )}
    </div>
    </>
  );
}
