import Link from "next/link";
import { COLLECTIONS } from "@/lib/collections";

/** Homepage links to every topic collection — the pages built for common searches. */
export function CollectionLinks() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">
            Dua Collections
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm max-w-md mx-auto">
            Every authentic dua for a moment, together on one page.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/duas-for/${c.slug}`}
              className="text-sm px-3.5 py-2 rounded-full border border-stone-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/40 text-stone-700 dark:text-stone-300 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
