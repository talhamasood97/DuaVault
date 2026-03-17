"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

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

interface SavedDuasContextValue {
  savedSlugs: string[];
  isSaved: (slug: string) => boolean;
  toggle: (slug: string) => void;
  addMany: (slugs: string[]) => void;
  clearAll: () => void;
  hydrated: boolean;
  count: number;
}

const SavedDuasContext = createContext<SavedDuasContextValue | null>(null);

export function SavedDuasProvider({ children }: { children: ReactNode }) {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

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
        : prev;
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

  return (
    <SavedDuasContext.Provider
      value={{ savedSlugs, isSaved, toggle, addMany, clearAll, hydrated, count: savedSlugs.length }}
    >
      {children}
    </SavedDuasContext.Provider>
  );
}

export function useSavedDuas(): SavedDuasContextValue {
  const ctx = useContext(SavedDuasContext);
  if (!ctx) throw new Error("useSavedDuas must be used within SavedDuasProvider");
  return ctx;
}
