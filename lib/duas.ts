/**
 * Data access layer for duas.
 * Falls back to static data when Supabase is not configured.
 * Swap out the static imports for live DB calls once Supabase is connected.
 */
import type { Dua, SearchResult } from "@/types";
import {
  DUAS,
  getDuaBySlug as staticGetBySlug,
  getDuasByCategory as staticGetByCategory,
  getDuasByEmotion as staticGetByEmotion,
  searchDuas as staticSearch,
  getDailyDua as staticGetDailyDua,
  getRelatedDuas as staticGetRelated,
  FEATURED_DUAS,
} from "@/data/duas";

// Check if Supabase is configured
const hasSupabase =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getAllDuas(): Promise<Dua[]> {
  if (!hasSupabase) return DUAS;
  const { createServerClient } = await import("@/lib/supabase");
  const db = createServerClient();
  const { data, error } = await db.from("duas").select("*").order("id");
  if (error || !data || data.length === 0) return DUAS;
  return data as Dua[];
}

export async function getDuaBySlug(slug: string): Promise<Dua | null> {
  if (!hasSupabase) return staticGetBySlug(slug) ?? null;
  const { createServerClient } = await import("@/lib/supabase");
  const db = createServerClient();
  const { data, error } = await db
    .from("duas")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error || !data) return staticGetBySlug(slug) ?? null;
  return data as Dua;
}

export async function getDuasByCategory(category: string): Promise<Dua[]> {
  if (!hasSupabase) return staticGetByCategory(category);
  const { createServerClient } = await import("@/lib/supabase");
  const db = createServerClient();
  const { data, error } = await db
    .from("duas")
    .select("*")
    .eq("category", category)
    .order("id");
  if (error || !data || data.length === 0) return staticGetByCategory(category);
  return data as Dua[];
}

export async function getDuasByEmotion(emotion: string): Promise<Dua[]> {
  if (!hasSupabase) return staticGetByEmotion(emotion);
  const { createServerClient } = await import("@/lib/supabase");
  const db = createServerClient();
  const { data, error } = await db
    .from("duas")
    .select("*")
    .contains("emotion_tags", [emotion])
    .order("id");
  if (error || !data || data.length === 0) return staticGetByEmotion(emotion);
  return data as Dua[];
}

export async function searchDuas(query: string): Promise<SearchResult> {
  if (!hasSupabase) {
    const results = staticSearch(query);
    return { duas: results, total: results.length, query };
  }
  const { createServerClient } = await import("@/lib/supabase");
  const db = createServerClient();
  const { data, error, count } = await db
    .from("duas")
    .select("*", { count: "exact" })
    .textSearch("search_vector", query, { type: "websearch" })
    .limit(20);
  if (error || !data || data.length === 0) {
    const results = staticSearch(query);
    return { duas: results, total: results.length, query };
  }
  return { duas: data as Dua[], total: count ?? 0, query };
}

export async function getFeaturedDuas(): Promise<Dua[]> {
  if (!hasSupabase) return FEATURED_DUAS;
  const { createServerClient } = await import("@/lib/supabase");
  const db = createServerClient();
  const { data, error } = await db
    .from("duas")
    .select("*")
    .eq("featured", true)
    .limit(6);
  if (error || !data || data.length === 0) return FEATURED_DUAS;
  return data as Dua[];
}

export async function getDailyDua(): Promise<Dua> {
  return staticGetDailyDua();
}

export async function getRelatedDuas(dua: Dua, limit = 4): Promise<Dua[]> {
  return staticGetRelated(dua, limit);
}

export async function getAllSlugs(): Promise<string[]> {
  const all = await getAllDuas();
  return all.map((d) => d.slug);
}
