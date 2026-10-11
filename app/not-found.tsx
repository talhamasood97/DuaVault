import Link from "next/link";
import type { Metadata } from "next";
import { Search, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center animate-fade-in">
      <p className="arabic text-5xl text-emerald-600 dark:text-emerald-500 mb-6 leading-loose">
        إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
      </p>
      <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-3">
        Page Not Found
      </h1>
      <p className="text-stone-500 dark:text-stone-400 text-sm mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. Perhaps you&apos;d like to search
        for a dua instead?
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
        <Link
          href="/search"
          className="flex items-center gap-2 px-4 py-2.5 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 text-sm font-medium rounded-xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
        >
          <Search className="w-4 h-4" /> Search Duas
        </Link>
      </div>
    </div>
  );
}
