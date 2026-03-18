import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ChevronRight, Calendar } from "lucide-react";
import { HADITHS } from "@/data/hadiths";
import { HadithCard } from "@/components/hadith/HadithCard";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const revalidate = 86400;

interface Props {
  searchParams: { topic?: string };
}

export function generateMetadata({ searchParams }: Props): Metadata {
  const topic = searchParams.topic;

  const base: Metadata = {
    title: `Hadith Archive – ${HADITHS.length} Authentic Hadith with Arabic & Translation`,
    description: `Browse all ${HADITHS.length} authenticated hadith from Sahih Bukhari, Sahih Muslim, Abu Dawud, and Tirmidhi. Arabic text, transliteration, English translation, and daily practice for every hadith.`,
    alternates: { canonical: "/hadith" },
    openGraph: {
      title: "Hadith Archive – DuaVault",
      description: `${HADITHS.length} authentic hadith with Arabic, transliteration, and English translation. Verified from Sahih Bukhari and Sahih Muslim.`,
      url: `${SITE_URL}/hadith`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Hadith Archive – DuaVault",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };

  if (topic) {
    const cap = topic.charAt(0).toUpperCase() + topic.slice(1);
    return {
      ...base,
      title: `${cap} Hadith – Authentic Islamic Wisdom | DuaVault`,
      description: `Authentic hadith on ${topic} from Sahih Bukhari, Sahih Muslim and other major collections. Arabic, transliteration, translation and daily practice.`,
      robots: { index: false, follow: true },
    };
  }

  return base;
}

export default function HadithArchivePage({ searchParams }: Props) {
  const activeTopic = searchParams.topic ?? "";

  // Unique topics sorted alphabetically, with per-topic counts
  const topicCounts = HADITHS.reduce<Record<string, number>>((acc, h) => {
    acc[h.topic] = (acc[h.topic] ?? 0) + 1;
    return acc;
  }, {});
  const allTopics = Object.keys(topicCounts).sort();

  const hadiths = activeTopic
    ? HADITHS.filter((h) => h.topic === activeTopic)
    : HADITHS;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Hadith Archive – DuaVault",
        description: `${HADITHS.length} authenticated hadith from Sahih Bukhari, Sahih Muslim, Abu Dawud, and Tirmidhi.`,
        url: `${SITE_URL}/hadith`,
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hadith Archive",
            item: `${SITE_URL}/hadith`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Hadith Collection",
        numberOfItems: HADITHS.length,
        itemListElement: HADITHS.slice(0, 10).map((h, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: h.title,
          url: `${SITE_URL}/hadith/${h.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-8"
        >
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
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
            {HADITHS.length} authenticated hadith from Sahih Bukhari, Sahih
            Muslim, Abu Dawud, and Tirmidhi — each with Arabic text,
            transliteration, translation, and a daily practice.
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
            Showing {hadiths.length} {hadiths.length === 1 ? "hadith" : "hadiths"}
            {activeTopic ? ` on "${activeTopic}"` : ""}
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

        {/* Topic filter pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <Link
            href="/hadith"
            className={`text-xs px-3 py-1.5 rounded-full border transition-all whitespace-nowrap flex-shrink-0 ${
              !activeTopic
                ? "bg-amber-700 text-white border-amber-700"
                : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-amber-300 dark:hover:border-amber-700"
            }`}
          >
            All ({HADITHS.length})
          </Link>
          {allTopics.map((topic) => (
            <Link
              key={topic}
              href={`/hadith?topic=${encodeURIComponent(topic)}`}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all whitespace-nowrap flex-shrink-0 capitalize ${
                activeTopic === topic
                  ? "bg-amber-700 text-white border-amber-700"
                  : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-amber-300 dark:hover:border-amber-700"
              }`}
            >
              {topic} ({topicCounts[topic]})
            </Link>
          ))}
        </div>

        {/* Hadith grid */}
        {hadiths.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hadiths.map((hadith) => (
              <HadithCard key={hadith.id} hadith={hadith} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-stone-500 dark:text-stone-400">
            <p className="text-5xl mb-4">📖</p>
            <p className="font-medium">No hadiths found for this topic</p>
            <Link
              href="/hadith"
              className="mt-3 text-sm text-amber-700 dark:text-amber-400 hover:underline inline-block"
            >
              ← View all hadiths
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
