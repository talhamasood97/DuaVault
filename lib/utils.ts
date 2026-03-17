import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Category, Emotion, CategoryMeta, EmotionMeta } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "daily-life",
    title: "Daily Life",
    description: "Duas for everyday activities and routines",
    icon: "☀️",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    slug: "worship",
    title: "Worship",
    description: "Supplications for prayer, fasting and acts of 'ibadah",
    icon: "🕌",
    color: "text-emerald-700 dark:text-emerald-400",
  },
  {
    slug: "protection",
    title: "Protection",
    description: "Duas seeking Allah's shelter and safety",
    icon: "🛡️",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    slug: "forgiveness",
    title: "Forgiveness",
    description: "Duas of repentance and seeking pardon",
    icon: "💚",
    color: "text-teal-600 dark:text-teal-400",
  },
  {
    slug: "travel",
    title: "Travel",
    description: "Supplications for journeys and returning home",
    icon: "✈️",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    slug: "quranic",
    title: "Quranic Duas",
    description: "Supplications directly from the Holy Quran",
    icon: "📖",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    slug: "family",
    title: "Family",
    description: "Duas for parents, spouse, children, and loved ones",
    icon: "🏠",
    color: "text-rose-600 dark:text-rose-400",
  },
  {
    slug: "health",
    title: "Health",
    description: "Duas for healing, wellness, and ruqyah",
    icon: "🌿",
    color: "text-green-600 dark:text-green-400",
  },
  {
    slug: "morning-evening",
    title: "Morning & Evening",
    description: "Daily adhkar for morning and evening protection",
    icon: "🌅",
    color: "text-orange-600 dark:text-orange-400",
  },
];

export const EMOTIONS: EmotionMeta[] = [
  {
    slug: "sad",
    title: "Sad",
    description: "Find comfort in times of sadness",
    icon: "😔",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-50 dark:bg-transparent",
  },
  {
    slug: "stressed",
    title: "Stressed",
    description: "Relief from anxiety and overwhelm",
    icon: "😰",
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-50 dark:bg-transparent",
  },
  {
    slug: "afraid",
    title: "Afraid",
    description: "Seek protection from fear",
    icon: "😨",
    color: "text-purple-700 dark:text-purple-300",
    bgColor: "bg-purple-50 dark:bg-transparent",
  },
  {
    slug: "lonely",
    title: "Lonely",
    description: "Connect with Allah when feeling alone",
    icon: "🌙",
    color: "text-indigo-700 dark:text-indigo-300",
    bgColor: "bg-indigo-50 dark:bg-transparent",
  },
  {
    slug: "grateful",
    title: "Grateful",
    description: "Express thankfulness to Allah",
    icon: "🤲",
    color: "text-emerald-700 dark:text-emerald-300",
    bgColor: "bg-emerald-50 dark:bg-transparent",
  },
  {
    slug: "angry",
    title: "Angry",
    description: "Calm your heart through dhikr",
    icon: "😤",
    color: "text-red-700 dark:text-red-300",
    bgColor: "bg-red-50 dark:bg-transparent",
  },
  {
    slug: "hopeful",
    title: "Hopeful",
    description: "Strengthen your trust in Allah",
    icon: "✨",
    color: "text-yellow-700 dark:text-yellow-300",
    bgColor: "bg-yellow-50 dark:bg-transparent",
  },
  {
    slug: "seeking-forgiveness",
    title: "Seeking Forgiveness",
    description: "Turn to Allah in sincere repentance",
    icon: "💚",
    color: "text-teal-700 dark:text-teal-300",
    bgColor: "bg-teal-50 dark:bg-transparent",
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getEmotionMeta(slug: string): EmotionMeta | undefined {
  return EMOTIONS.find((e) => e.slug === slug);
}

export function getAuthenticityColor(grade: string): string {
  switch (grade) {
    case "SAHIH":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
    case "HASAN":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "QURAN":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "DA'IF":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
}

export function getAuthenticityLabel(grade: string): string {
  switch (grade) {
    case "SAHIH":
      return "Sahih – Authentic";
    case "HASAN":
      return "Hasan – Good";
    case "QURAN":
      return "Quranic Verse";
    case "DA'IF":
      return "Da'if – Weak";
    default:
      return grade;
  }
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://duavault.com";
export const SITE_NAME = "DuaVault";
export const SITE_DESCRIPTION =
  "50+ authentic Islamic duas with Arabic text, transliteration, translation and verified Hadith sources. Browse by emotion, category or keyword — every dua sourced from Quran & Sahih Hadith.";

export function formatShareText(title: string, translation: string, source: string): string {
  return `${title}\n\n"${translation}"\n\n📖 Source: ${source}`;
}

export function formatTwitterText(title: string, translation: string): string {
  const excerpt = translation.length > 140 ? translation.slice(0, 137) + "…" : translation;
  return `${title}\n\n"${excerpt}"\n\n#Dua #Islam #${SITE_NAME}`;
}
