import type { Metadata } from "next";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";

export const dynamic = "force-dynamic";
import { searchDuas } from "@/lib/duas";
import { DuaCard } from "@/components/dua/DuaCard";
import { HeroSearch } from "@/components/home/HeroSearch";
import { DUAS } from "@/data/duas";
import { SearchResultsTracker } from "@/components/analytics/SearchResultsTracker";

interface Props {
  searchParams: { q?: string };
}

export function generateMetadata({ searchParams }: Props): Metadata {
  const q = searchParams.q;
  const noIndex = { index: false, follow: true };
  if (!q) return { title: "Search Duas", robots: noIndex, alternates: { canonical: "https://duavault.com/search" } };
  return {
    title: `"${q}" – Dua Search Results`,
    description: `Islamic supplications matching "${q}". Find authentic duas with Arabic text, transliteration, and verified sources.`,
    robots: noIndex,
    alternates: { canonical: `https://duavault.com/search?q=${encodeURIComponent(q)}` },
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() || "";
  const results = query ? await searchDuas(query) : { duas: [], total: 0, query };

  // When no query, show all duas
  const allDuas = !query ? DUAS.slice(0, 30) : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <SearchResultsTracker query={query} resultCount={results.total} />
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        {query ? (
          <div className="mb-6">
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-1">
              {results.total > 0
                ? `${results.total} result${results.total !== 1 ? "s" : ""} for`
                : "No results for"}{" "}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100">
              &ldquo;{query}&rdquo;
            </h1>
          </div>
        ) : (
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">
              Search Duas
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-sm max-w-md mx-auto">
              Find any supplication by keyword, situation, or emotion.
            </p>
          </div>
        )}
        <HeroSearch />
      </div>

      {/* Results */}
      {query && results.duas.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🤲</div>
          <h2 className="text-lg font-semibold text-stone-700 dark:text-stone-300 mb-2">
            No duas found
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">
            Try different keywords like &ldquo;sleeping&rdquo;, &ldquo;anxiety&rdquo;, or &ldquo;mosque&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["dua before sleeping", "dua for anxiety", "dua for forgiveness"].map(
              (s) => (
                <Link
                  key={s}
                  href={`/search?q=${encodeURIComponent(s)}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
                >
                  {s}
                </Link>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(query ? results.duas : allDuas ?? []).map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>
      )}

      {/* Show all link */}
      {!query && (
        <p className="mt-8 text-center text-sm text-stone-500 dark:text-stone-400">
          Showing 30 of {DUAS.length} duas. Use search to find specific supplications.
        </p>
      )}
    </div>
  );
}
