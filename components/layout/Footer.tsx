import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

const SOURCES = [
  "Sahih al-Bukhari",
  "Sahih Muslim",
  "Hisn al-Muslim",
  "Riyad as-Salihin",
  "Sunan Abu Dawud",
  "Sunan al-Tirmidhi",
];

const LINKS = {
  Platform: [
    { href: "/", label: "Home" },
    { href: "/daily-dua", label: "Daily Dua" },
    { href: "/search", label: "Search Duas" },
    { href: "/category/daily-life", label: "Browse Categories" },
  ],
  Emotions: [
    { href: "/emotion/sad", label: "Feeling Sad" },
    { href: "/emotion/stressed", label: "Feeling Stressed" },
    { href: "/emotion/afraid", label: "Feeling Afraid" },
    { href: "/emotion/grateful", label: "Feeling Grateful" },
  ],
  About: [
    { href: "/about", label: "About Us" },
    { href: "/sources", label: "Our Sources" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-emerald-950 border-t border-stone-100 dark:border-emerald-900 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 mb-4"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold text-lg">
                Dua<span className="text-emerald-600">Vault</span>
              </span>
            </Link>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              The most complete vault of authentic Islamic supplications. Every dua
              scholar-verified with clear Quran & Hadith sources.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {SOURCES.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bismillah divider */}
        <div className="ornament mb-8">
          <span className="arabic text-2xl text-emerald-600 dark:text-emerald-500 leading-loose px-4">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-stone-600">
          <p>
            © {new Date().getFullYear()} DuaVault. Made with{" "}
            <Heart className="w-3 h-3 inline text-red-400" /> for the Ummah.
          </p>
          <p>
            All duas verified against authentic Islamic scholarship. Not a
            substitute for direct scholarly guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
