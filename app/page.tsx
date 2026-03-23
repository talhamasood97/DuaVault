import type { Metadata } from "next";
import { HeroSearch } from "@/components/home/HeroSearch";
import { EmotionGrid } from "@/components/home/EmotionGrid";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedDuas } from "@/components/home/FeaturedDuas";
import { TrustBar } from "@/components/home/TrustBar";
import { HomeSubscribeBanner } from "@/components/home/HomeSubscribeBanner";
import { DailyDuaBanner } from "@/components/home/DailyDuaBanner";
import { DailyHadithBanner } from "@/components/home/DailyHadithBanner";
import { getFeaturedDuas, getDailyDua } from "@/lib/duas";
import { getDailyHadith } from "@/data/hadiths";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, safeJsonLd } from "@/lib/utils";

// Revalidate every hour so the Daily Dua banner rotates correctly
export const revalidate = 3600;

export const metadata: Metadata = {
  title: `${SITE_NAME} – Authentic Islamic Duas with Arabic, Transliteration & Sources`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: [],
};

export default async function HomePage() {
  const [featured, daily] = await Promise.all([
    getFeaturedDuas(),
    getDailyDua(),
  ]);
  const dailyHadith = getDailyHadith();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="hero-gradient py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Bismillah */}
          <p
            className="arabic text-3xl sm:text-4xl text-emerald-700 dark:text-emerald-400 mb-6 leading-loose"
            dir="rtl"
            lang="ar"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4 leading-tight tracking-tight">
            Authentic Duas.{" "}
            <span className="text-gradient">Verified Sources.</span>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            The most complete vault of authentic Islamic supplications — every
            dua with Arabic text, transliteration, translation, and verified
            Hadith reference.
          </p>

          <HeroSearch />
        </div>
      </section>

      {/* Daily Dua Banner */}
      <DailyDuaBanner dua={daily} />

      {/* Daily Hadith Banner */}
      <DailyHadithBanner hadith={dailyHadith} />

      {/* Emotion-based discovery */}
      <EmotionGrid />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured duas */}
      <FeaturedDuas duas={featured} />

      {/* Email subscription */}
      <HomeSubscribeBanner />

      {/* Trust bar */}
      <TrustBar />
    </div>
    </>
  );
}
