"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Search, BookOpen, Home, Star, Bookmark } from "lucide-react";
import { useSavedDuas } from "@/hooks/useSavedDuas";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/daily-dua", label: "Daily Dua" },
  { href: "/hadith", label: "Hadiths" },
  { href: "/category/daily-life", label: "Browse" },
  { href: "/search", label: "Search" },
];

const BOTTOM_NAV = [
  { href: "/", label: "Home", icon: Home },
  { href: "/daily-dua", label: "Dua", icon: Star },
  { href: "/hadith", label: "Hadiths", icon: BookOpen },
  { href: "/search", label: "Search", icon: Search },
  { href: "/saved", label: "Saved", icon: Bookmark },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { count: savedCount, hydrated: savedHydrated } = useSavedDuas();

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setShowSearch(false);
      setOpen(false);
    }
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-sm shadow-emerald-100/50 dark:shadow-emerald-950"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold tracking-tight text-base sm:text-lg">
              Dua<span className="text-emerald-700 dark:text-emerald-400">Vault</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Inline search — desktop only */}
            {showSearch ? (
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search duas…"
                  className="w-48 text-sm bg-white dark:bg-emerald-900 border border-emerald-200 dark:border-emerald-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="ml-1 p-1.5 rounded-lg text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="hidden md:flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Saved duas — desktop only */}
            <Link
              href="/saved"
              className={cn(
                "hidden md:flex items-center gap-1.5 p-2 rounded-lg transition-colors relative",
                pathname === "/saved"
                  ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/50"
                  : "text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
              )}
              aria-label="Saved duas"
            >
              <span className="relative">
                <Bookmark className="w-4 h-4" />
                {savedHydrated && savedCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[14px] h-3.5 px-0.5 bg-emerald-600 dark:bg-emerald-400 text-white dark:text-emerald-950 text-[8px] font-bold rounded-full flex items-center justify-center leading-none pointer-events-none">
                    {savedCount > 99 ? "99+" : savedCount}
                  </span>
                )}
              </span>
              <span className="text-sm font-medium">Saved</span>
            </Link>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden glass border-t border-emerald-100 dark:border-emerald-900 animate-slide-up"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search duas…"
                    className="w-full text-sm bg-white dark:bg-emerald-900 border border-emerald-200 dark:border-emerald-700 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    enterKeyHint="search"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-emerald-700 text-white rounded-xl text-sm font-medium flex-shrink-0"
                >
                  Go
                </button>
              </form>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400"
                      : "text-stone-600 dark:text-stone-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {/* Saved — always visible in hamburger, shows count if any */}
              <Link
                href="/saved"
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  pathname === "/saved"
                    ? "bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400"
                    : "text-stone-600 dark:text-stone-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                )}
              >
                <span className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  Saved Duas
                </span>
                {savedHydrated && savedCount > 0 && (
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900 px-2 py-0.5 rounded-full">
                    {savedCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ── Bottom tab bar (mobile only) ── */}
      {/*
        Safe-area strategy:
        - paddingBottom: env(safe-area-inset-bottom) extends the nav background
          into the home-indicator zone (iOS) / gesture bar zone (Android).
        - The visible content row stays h-16 (64px) above that zone.
        - viewport-fit=cover (set in layout.tsx) is required for the env()
          values to be non-zero on notched/gesture-bar devices.
      */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-emerald-950/95 backdrop-blur-md border-t border-stone-200/80 dark:border-emerald-900"
        aria-label="Bottom navigation"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex h-16">
          {BOTTOM_NAV.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/" && pathname.startsWith(href.split("?")[0]));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  // bottom-nav-link: removes tap-highlight + enables fast-tap
                  "bottom-nav-link",
                  "relative flex-1 flex flex-col items-center justify-center gap-0.5",
                  "transition-opacity active:opacity-50 select-none",
                  active
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-stone-500 dark:text-stone-400"
                )}
              >
                {/* Active top-line indicator */}
                {active && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}

                {/* Icon pill — filled background on active */}
                <span className={cn(
                  "relative flex items-center justify-center w-12 h-7 rounded-2xl transition-colors duration-200",
                  active
                    ? "bg-emerald-100 dark:bg-emerald-800/60"
                    : ""
                )}>
                  <Icon className={cn(
                    "w-[18px] h-[18px] transition-transform duration-200",
                    active && "scale-110"
                  )} />
                  {href === "/saved" && savedHydrated && savedCount > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[14px] h-3.5 px-0.5 bg-emerald-600 dark:bg-emerald-400 text-white dark:text-emerald-950 text-[8px] font-bold rounded-full flex items-center justify-center leading-none pointer-events-none">
                      {savedCount > 99 ? "99+" : savedCount}
                    </span>
                  )}
                </span>

                {/* Label */}
                <span className={cn(
                  "text-[10px] leading-none tracking-wide",
                  active ? "font-semibold" : "font-medium"
                )}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
