"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SUGGESTIONS = [
  "dua before sleeping",
  "dua for anxiety",
  "dua entering mosque",
  "dua for forgiveness",
  "dua for parents",
  "dua when travelling",
];

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const blurTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (blurTimerRef.current) clearTimeout(blurTimerRef.current);
    };
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [query, router]
  );

  const handleSuggestion = useCallback(
    (s: string) => {
      router.push(`/search?q=${encodeURIComponent(s)}`);
    },
    [router]
  );

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <form onSubmit={handleSubmit}>
        <div
          className={`relative flex items-center bg-white dark:bg-emerald-900/80 rounded-2xl shadow-lg shadow-emerald-100/50 dark:shadow-emerald-950 border transition-all duration-200 ${
            focused
              ? "border-emerald-400 dark:border-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/50"
              : "border-stone-200 dark:border-emerald-800"
          }`}
        >
          <Search className="absolute left-4 w-5 h-5 text-stone-400 dark:text-stone-500 pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => { blurTimerRef.current = setTimeout(() => setFocused(false), 150); }}
            placeholder="Search for a dua…"
            className="flex-1 bg-transparent pl-12 pr-2 sm:pr-4 py-4 text-base text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none min-w-0"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            enterKeyHint="search"
          />
          {/* Mobile: icon-only button | Desktop: text button */}
          <button
            type="submit"
            aria-label="Search"
            className="m-1.5 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2
              w-11 h-11 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 flex-shrink-0"
          >
            <Search className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline text-sm">Search</span>
          </button>
        </div>
      </form>

      {/* Quick suggestions */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => handleSuggestion(s)}
            className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-emerald-900/60 border border-stone-200 dark:border-emerald-800 text-stone-600 dark:text-stone-400 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
