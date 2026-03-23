import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import { getDuasByEmotion } from "@/lib/duas";
import { DuaCard } from "@/components/dua/DuaCard";
import { getEmotionMeta, EMOTIONS, SITE_URL , safeJsonLd } from "@/lib/utils";

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return EMOTIONS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const emotion = getEmotionMeta(params.slug);
  if (!emotion) return {};
  return {
    title: `Duas for When You're ${emotion.title} – Islamic Supplications`,
    description: `${emotion.description}. Find authentic duas from Quran and Hadith to help when you're feeling ${emotion.title.toLowerCase()}.`,
    alternates: { canonical: `/emotion/${emotion.slug}` },
    openGraph: {
      title: `Duas for When You're ${emotion.title} – DuaVault`,
      description: `${emotion.description}. Find authentic duas from Quran and Hadith.`,
      url: `${SITE_URL}/emotion/${emotion.slug}`,
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `Duas for ${emotion.title} – DuaVault` }],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function EmotionPage({ params }: Props) {
  const emotion = getEmotionMeta(params.slug);
  if (!emotion) notFound();

  const duas = await getDuasByEmotion(params.slug);

  const emotionPageTitle = emotion.title === "Seeking Forgiveness"
    ? "Duas for Seeking Forgiveness"
    : `Duas for When You're ${emotion.title}`;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${emotionPageTitle} – Islamic Supplications`,
        description: `${emotion.description}. Find authentic duas from Quran and Hadith.`,
        url: `${SITE_URL}/emotion/${emotion.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: emotionPageTitle, item: `${SITE_URL}/emotion/${emotion.slug}` },
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
        <span>Emotions</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-500">{emotion.title}</span>
      </nav>

      {/* Hero */}
      <div
        className={`rounded-3xl p-8 sm:p-12 mb-10 ${emotion.bgColor} border border-transparent`}
      >
        <div className="text-center">
          <span className="text-5xl sm:text-6xl block mb-4">{emotion.icon}</span>
          <h1 className={`text-2xl sm:text-3xl font-bold mb-3 ${emotion.color}`}>
            {emotionPageTitle}
          </h1>
          <p className="text-stone-500 dark:text-stone-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            {emotion.description}. Turn to Allah through these authenticated
            supplications.
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-3">
            {duas.length} {duas.length === 1 ? "supplication" : "supplications"} found
          </p>
        </div>
      </div>

      {/* All emotions nav — scrollable on mobile */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
        {EMOTIONS.map((e) => (
          <Link
            key={e.slug}
            href={`/emotion/${e.slug}`}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all whitespace-nowrap flex-shrink-0 sm:flex-shrink ${
              e.slug === params.slug
                ? "bg-emerald-700 text-white border-emerald-700"
                : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-emerald-300 dark:hover:border-emerald-700"
            }`}
          >
            {e.icon} {e.title}
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
        <div className="text-center py-16">
          <Heart className="w-10 h-10 text-stone-200 dark:text-stone-700 mx-auto mb-4" />
          <p className="text-stone-500 dark:text-stone-400 font-medium">
            More duas for this emotion coming soon
          </p>
        </div>
      )}
    </div>
    </>
  );
}
