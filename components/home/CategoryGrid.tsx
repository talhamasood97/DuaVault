import Link from "next/link";
import { CATEGORIES } from "@/lib/utils";

export function CategoryGrid() {
  return (
    <section className="py-12 bg-white dark:bg-emerald-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">
            Browse by Category
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm max-w-md mx-auto">
            Duas organized by life situation and Islamic practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group flex items-center gap-3 sm:gap-4 bg-sand-50 dark:bg-emerald-950/60 rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 border border-stone-100 dark:border-emerald-900 [@media(hover:hover)]:hover:border-emerald-200 [@media(hover:hover)]:dark:hover:border-emerald-700 [@media(hover:hover)]:hover:shadow-md [@media(hover:hover)]:hover:shadow-emerald-50 [@media(hover:hover)]:dark:hover:shadow-emerald-950 transition-all duration-200 active:scale-[0.98] focus:outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span className="text-2xl flex-shrink-0 w-9 text-center">{cat.icon}</span>
              <div className="min-w-0 flex-1">
                <p className={`font-semibold text-sm ${cat.color} group-hover:underline`}>
                  {cat.title}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1 leading-tight">
                  {cat.description}
                </p>
              </div>
              <span className="text-stone-300 dark:text-stone-600 text-sm flex-shrink-0">›</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
