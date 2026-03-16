"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Bookmark, Share2, Copy, Check, Trash2, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import { useSavedDuas } from "@/hooks/useSavedDuas";
import { SaveButton } from "./SaveButton";
import { AuthenticityBadge } from "./AuthenticityBadge";
import { DUAS } from "@/data/duas";
import { getCategoryMeta, SITE_URL } from "@/lib/utils";
import type { Dua } from "@/types";

function trackEvent(name: string, params?: Record<string, string | number>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("event", name, params);
  } catch {
    // GA not available
  }
}

// ── Shared collection banner ─────────────────────────────────────────────────
function SharedBanner({ duas, onAddAll }: { duas: Dua[]; onAddAll: () => void }) {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 mb-8">
      <p className="text-emerald-800 dark:text-emerald-200 font-semibold mb-1">
        📿 Someone shared {duas.length} dua{duas.length !== 1 ? "s" : ""} with you
      </p>
      <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
        Save these to your personal collection to access them anytime — no account needed.
      </p>
      <button
        onClick={onAddAll}
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-xl transition-colors"
      >
        <Bookmark className="w-4 h-4" />
        Save all to my collection
      </button>
    </div>
  );
}

// ── Empty state ──────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="text-center py-20 px-4">
      <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
        <Bookmark className="w-8 h-8 text-emerald-400" />
      </div>
      <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200 mb-3">
        No saved duas yet
      </h2>
      <p className="text-stone-500 dark:text-stone-400 max-w-sm mx-auto mb-8 leading-relaxed">
        Tap the bookmark icon on any dua to save it here for quick access — no account needed.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/daily-dua"
          className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-medium transition-colors"
        >
          Today&apos;s Dua →
        </Link>
        <Link
          href="/category/daily-life"
          className="px-5 py-2.5 bg-stone-100 dark:bg-emerald-900 hover:bg-stone-200 dark:hover:bg-emerald-800 text-stone-700 dark:text-stone-300 rounded-xl text-sm font-medium transition-colors"
        >
          Browse All Duas
        </Link>
      </div>
    </div>
  );
}

// ── Individual saved dua card ────────────────────────────────────────────────
function SavedDuaCard({ dua, isSharedView }: { dua: Dua; isSharedView: boolean }) {
  const category = getCategoryMeta(dua.category);

  return (
    <article className="relative group flex flex-col bg-white dark:bg-emerald-950/40 rounded-2xl p-5 border border-stone-100 dark:border-emerald-900 hover:border-emerald-200 dark:hover:border-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-100/50 dark:hover:shadow-emerald-900/30">
      {/* Full-card link (mouse click) */}
      <Link
        href={`/duas/${dua.slug}`}
        className="absolute inset-0 rounded-2xl focus:outline-none"
        tabIndex={-1}
        aria-label={`Open ${dua.title}`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <Link
          href={`/duas/${dua.slug}`}
          className="font-semibold text-stone-800 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug flex-1 focus:outline-none focus-visible:underline"
        >
          {dua.title}
        </Link>
        <div className="flex items-center gap-1.5 flex-shrink-0 relative z-10">
          <AuthenticityBadge grade={dua.authenticity_grade} />
          {!isSharedView && (
            <SaveButton slug={dua.slug} title={dua.title} size="sm" />
          )}
        </div>
      </div>

      {/* Arabic snippet */}
      <p
        className="arabic text-right text-xl text-stone-600 dark:text-stone-300 mb-3 leading-loose line-clamp-2"
        dir="rtl"
        lang="ar"
      >
        {dua.arabic_text}
      </p>

      {/* Translation */}
      <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed flex-1">
        {dua.translation}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500 mt-auto">
        <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="truncate">{dua.source_book}</span>
        {dua.hadith_number && (
          <>
            <span className="text-stone-300 dark:text-stone-600">·</span>
            <span className="flex-shrink-0">{dua.hadith_number}</span>
          </>
        )}
        {category && (
          <>
            <span className="text-stone-300 dark:text-stone-600 ml-auto">·</span>
            <span className={`font-medium ml-0.5 ${category.color}`}>{category.icon}</span>
          </>
        )}
      </div>
    </article>
  );
}

// ── Main page content ────────────────────────────────────────────────────────
export function SavedPageContent() {
  const { savedSlugs, clearAll, addMany, hydrated, count } = useSavedDuas();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Shared collection URL: /saved?s=slug1,slug2,...
  const sharedParam = searchParams.get("s");
  const sharedSlugs = sharedParam
    ? sharedParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 50)
    : null;

  const displaySlugs = sharedSlugs ?? savedSlugs;
  // Keep display order stable: filter DUAS array (preserves db order), but for
  // user's own collection we want most-recently-saved first.
  const displayDuas = sharedSlugs
    ? DUAS.filter((d) => displaySlugs.includes(d.slug))
    : [...DUAS]
        .filter((d) => displaySlugs.includes(d.slug))
        .sort(
          (a, b) => savedSlugs.indexOf(a.slug) - savedSlugs.indexOf(b.slug)
        );

  const isSharedView = !!sharedSlugs;

  function handleAddAll() {
    if (sharedSlugs) {
      addMany(sharedSlugs);
      toast.success(`${sharedSlugs.length} duas saved to your collection!`);
      trackEvent("save_shared_collection", { count: sharedSlugs.length });
    }
  }

  async function shareCollection() {
    if (count === 0) return;
    const url = `${SITE_URL}/saved?s=${savedSlugs.join(",")}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "My Dua Collection — DuaVault",
          text: `I've saved ${count} beautiful duas on DuaVault. Here's my collection:`,
          url,
        });
        trackEvent("share_collection", { method: "native", count });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        toast.success("Collection link copied!");
        trackEvent("share_collection", { method: "copy", count });
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Share cancelled or clipboard failed — try clipboard as fallback
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        toast.success("Collection link copied!");
        setTimeout(() => setCopied(false), 2500);
      } catch {
        toast.error("Could not copy link");
      }
    }
  }

  // Skeleton while hydrating from localStorage
  if (!hydrated) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="h-8 bg-stone-100 dark:bg-emerald-900/50 rounded-lg w-48 mb-8 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-52 bg-stone-50 dark:bg-emerald-950/40 rounded-2xl border border-stone-100 dark:border-emerald-900 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      {/* Page header */}
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100">
            {isSharedView ? "Shared Collection" : "Saved Duas"}
          </h1>
          {!isSharedView && count > 0 && (
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
              {count} dua{count !== 1 ? "s" : ""} saved
            </p>
          )}
        </div>

        {/* Actions — only for own collection */}
        {!isSharedView && count > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={shareCollection}
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-xl transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? "Copied!" : "Share Collection"}</span>
            </button>

            {showClearConfirm ? (
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-stone-500 dark:text-stone-400">Clear all?</span>
                <button
                  onClick={() => {
                    clearAll();
                    setShowClearConfirm(false);
                    toast.success("All saved duas cleared");
                  }}
                  className="px-2.5 py-1.5 bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-900 text-red-700 dark:text-red-300 text-xs font-medium rounded-lg transition-colors"
                >
                  Yes, clear
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-2.5 py-1.5 bg-stone-100 dark:bg-emerald-900 text-stone-600 dark:text-stone-300 text-xs font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="p-2 rounded-xl text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                aria-label="Clear all saved duas"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Shared collection banner */}
      {isSharedView && displayDuas.length > 0 && (
        <SharedBanner duas={displayDuas} onAddAll={handleAddAll} />
      )}

      {/* Empty states */}
      {displayDuas.length === 0 && !isSharedView && <EmptyState />}

      {displayDuas.length === 0 && isSharedView && (
        <div className="text-center py-16">
          <p className="text-stone-500 dark:text-stone-400">
            This shared collection is empty or the link is invalid.
          </p>
          <Link href="/" className="mt-4 inline-block text-emerald-600 hover:underline text-sm">
            ← Browse Duas
          </Link>
        </div>
      )}

      {/* Duas grid */}
      {displayDuas.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayDuas.map((dua) => (
            <SavedDuaCard key={dua.slug} dua={dua} isSharedView={isSharedView} />
          ))}
        </div>
      )}
    </div>
  );
}
