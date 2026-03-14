export type AuthenticityGrade = "SAHIH" | "HASAN" | "DA'IF" | "MAWDU'" | "QURAN";

export type Category =
  | "daily-life"
  | "worship"
  | "protection"
  | "forgiveness"
  | "travel"
  | "quranic"
  | "family"
  | "health"
  | "morning-evening";

export type Emotion =
  | "sad"
  | "stressed"
  | "afraid"
  | "lonely"
  | "grateful"
  | "angry"
  | "hopeful"
  | "seeking-forgiveness";

export interface Dua {
  id: number;
  slug: string;
  title: string;
  arabic_text: string;
  transliteration: string;
  translation: string;
  source_book: string;
  hadith_number?: string;
  authenticity_grade: AuthenticityGrade;
  category: Category;
  emotion_tags: Emotion[];
  situation_tags: string[];
  scholar_verified: boolean;
  featured: boolean;
  daily_dua_eligible: boolean;
  created_at?: string;
}

export interface SearchResult {
  duas: Dua[];
  total: number;
  query: string;
}

export interface CategoryMeta {
  slug: Category;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface EmotionMeta {
  slug: Emotion;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}
