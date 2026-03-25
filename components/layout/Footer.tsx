import Link from "next/link";
import { BookOpen } from "lucide-react";
import { SOCIAL } from "@/lib/utils";

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
    { href: "mailto:feedback.duavault@gmail.com", label: "Contact Us" },
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

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DuaVault on Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 dark:bg-emerald-900 text-stone-500 dark:text-stone-400 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DuaVault on Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 dark:bg-emerald-900 text-stone-500 dark:text-stone-400 hover:bg-[#1877F2] hover:text-white transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <span className="text-xs text-stone-400 dark:text-stone-600">@dua.vault</span>
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

        {/* Closing dua divider */}
        <div className="ornament mb-3">
          <span className="arabic text-2xl text-emerald-600 dark:text-emerald-500 leading-loose px-4">
            رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
          </span>
        </div>
        <p className="text-center text-xs text-stone-400 dark:text-stone-500 italic mb-8">
          &ldquo;Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.&rdquo; &mdash; Quran 2:201
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-stone-600">
          <p>
            © {new Date().getFullYear()} DuaVault · Made by Mohd Talha Masood, IIT Kanpur
          </p>
          <p>
            Content is carefully sourced but may contain errors. For religious
            rulings, please consult a qualified Islamic scholar.
          </p>
        </div>
      </div>
    </footer>
  );
}
