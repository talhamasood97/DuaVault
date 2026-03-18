import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AuthenticityBadge } from "./AuthenticityBadge";
import type { Dua } from "@/types";

export function RelatedDuas({ duas }: { duas: Dua[] }) {
  if (!duas.length) return null;
  return (
    <section>
      <h2 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-4">
        Related Duas
      </h2>
      <div className="grid gap-3">
        {duas.map((dua) => (
          <Link
            key={dua.id}
            href={`/duas/${dua.slug}`}
            className="flex items-center justify-between gap-4 bg-white dark:bg-emerald-950/40 rounded-xl px-4 py-3 border border-stone-100 dark:border-emerald-900 hover:border-emerald-200 dark:hover:border-emerald-700 group transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 truncate transition-colors">
                {dua.title}
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                {dua.source_book}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <AuthenticityBadge grade={dua.authenticity_grade} />
              <ChevronRight className="w-4 h-4 text-stone-300 dark:text-stone-600 group-hover:text-emerald-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
