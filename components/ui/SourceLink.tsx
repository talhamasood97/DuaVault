import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

/** Wraps a source reference in a link to the original when one exists. */
export function SourceLink({
  href,
  className = "",
  children,
}: {
  href: string | null;
  className?: string;
  children: ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  const site = href.includes("quran.com") ? "Quran.com" : "Sunnah.com";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Read the original on ${site}`}
      className={`${className} hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors`}
    >
      {children}
      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-70" aria-label={`opens ${site}`} />
    </a>
  );
}

const FEEDBACK_EMAIL = "feedback.duavault@gmail.com";

/** "Report an error" mailto link, pre-filled with the page it came from. */
export function ReportErrorLink({ title, url }: { title: string; url: string }) {
  const subject = encodeURIComponent(`Correction: ${title}`);
  const body = encodeURIComponent(`Page: ${url}\n\nWhat looks wrong (Arabic, translation, transliteration or source)?\n\n`);
  return (
    <p className="mt-4 text-xs text-stone-500 dark:text-stone-400">
      Spotted a mistake?{" "}
      <a
        href={`mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`}
        className="underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-400"
      >
        Report an error
      </a>{" "}
      and we&apos;ll check it against the source.
    </p>
  );
}
