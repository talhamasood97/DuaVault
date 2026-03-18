import Link from "next/link";
import { EMOTIONS } from "@/lib/utils";

export function EmotionGrid() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">
            How are you feeling today?
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-md mx-auto text-sm">
            Find the perfect supplication for your current state of heart.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {EMOTIONS.map((emotion, i) => (
            <Link
              key={emotion.slug}
              href={`/emotion/${emotion.slug}`}
              className={`group flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer animate-fade-in min-h-[88px] sm:min-h-0 focus:outline-none active:scale-[0.96] active:brightness-90 [@media(hover:hover)]:hover:brightness-95 ${emotion.bgColor}`}
              style={{ animationDelay: `${i * 50}ms`, WebkitTapHighlightColor: "transparent" }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200 leading-none">
                {emotion.icon}
              </span>
              <div className="text-center">
                <p className={`font-semibold text-sm leading-snug ${emotion.color}`}>
                  {emotion.title}
                </p>
                <p className="hidden sm:block text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-2 leading-tight">
                  {emotion.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
