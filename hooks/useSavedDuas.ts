"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "duavault_saved";
const MAX_SAVED = 200;

function readFromStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeToStorage(slugs: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // Storage quota exceeded or unavailable — silently ignore
  }
}

export function useSavedDuas() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage only after mount (avoids SSR mismatch)
  useEffect(() => {
    setSavedSlugs(readFromStorage());
    setHydrated(true);
  }, []);

  const isSaved = useCallback(
    (slug: string) => savedSlugs.includes(slug),
    [savedSlugs]
  );

  const toggle = useCallback((slug: string) => {
    setSavedSlugs((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length < MAX_SAVED
        ? [...prev, slug]
        : prev; // silently cap at MAX_SAVED
      writeToStorage(next);
      return next;
    });
  }, []);

  const addMany = useCallback((slugs: string[]) => {
    setSavedSlugs((prev) => {
      const merged = Array.from(new Set([...prev, ...slugs])).slice(0, MAX_SAVED);
      writeToStorage(merged);
      return merged;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSavedSlugs([]);
    writeToStorage([]);
  }, []);

  return {
    savedSlugs,
    isSaved,
    toggle,
    addMany,
    clearAll,
    hydrated,
    count: savedSlugs.length,
  };
}
