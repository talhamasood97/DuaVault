"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console — replace with error tracking service when ready
    console.error("[Error boundary]", error);
  }, [error]);

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center animate-fade-in">
      <p
        className="arabic text-5xl text-emerald-600 dark:text-emerald-500 mb-6 leading-loose"
        dir="rtl"
        lang="ar"
      >
        حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
      </p>
      <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-3">
        Something went wrong
      </h1>
      <p className="text-stone-500 dark:text-stone-400 text-sm mb-8 leading-relaxed">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 text-sm font-medium rounded-xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
      </div>
    </div>
  );
}
