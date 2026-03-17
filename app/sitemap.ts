import type { MetadataRoute } from "next";
import { DUAS } from "@/data/duas";
import { HADITHS } from "@/data/hadiths";
import { CATEGORIES, EMOTIONS, SITE_URL } from "@/lib/utils";

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
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/sources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Emotion pages
  const emotionPages: MetadataRoute.Sitemap = EMOTIONS.map((em) => ({
    url: `${SITE_URL}/emotion/${em.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Individual dua pages
  const duaPages: MetadataRoute.Sitemap = DUAS.map((dua) => ({
    url: `${SITE_URL}/duas/${dua.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Hadith detail pages
  const hadithPages: MetadataRoute.Sitemap = HADITHS.map((h) => ({
    url: `${SITE_URL}/hadith/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...emotionPages, ...duaPages, ...hadithPages];
}
