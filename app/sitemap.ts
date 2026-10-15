import type { MetadataRoute } from "next";
import { DUAS } from "@/data/duas";
import { HADITHS } from "@/data/hadiths";
import { CATEGORIES, EMOTIONS, SITE_URL } from "@/lib/utils";
import { COLLECTIONS } from "@/lib/collections";

// Date the dua/hadith content last changed. Bump it whenever content is added
// or edited — a lastmod that always says "now" teaches Google to ignore it.
const CONTENT_UPDATED = new Date("2026-10-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/daily-dua`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/daily-hadith`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/hadith`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/sources`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Emotion pages
  const emotionPages: MetadataRoute.Sitemap = EMOTIONS.map((em) => ({
    url: `${SITE_URL}/emotion/${em.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Topic collections ("Duas for the Sick" …) and their index
  const collectionPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/duas-for`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.8 },
  ].concat(COLLECTIONS.map((c) => ({
    url: `${SITE_URL}/duas-for/${c.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  })));

  // Individual dua pages
  const duaPages: MetadataRoute.Sitemap = DUAS.map((dua) => ({
    url: `${SITE_URL}/duas/${dua.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Hadith detail pages
  const hadithPages: MetadataRoute.Sitemap = HADITHS.map((h) => ({
    url: `${SITE_URL}/hadith/${h.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...collectionPages, ...categoryPages, ...emotionPages, ...duaPages, ...hadithPages];
}
