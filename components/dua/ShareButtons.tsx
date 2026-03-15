"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Copy, Check, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";
import { formatShareText, SITE_URL } from "@/lib/utils";
import type { Dua } from "@/types";

export function ShareButtons({ dua }: { dua: Dua }) {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const url = `${SITE_URL}/duas/${dua.slug}`;

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);
  const text = formatShareText(dua.title, dua.translation, `${dua.source_book}${dua.hadith_number ? ` ${dua.hadith_number}` : ""}`);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied!");
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy");
    }
  }

  function shareWhatsApp() {
    const whatsappText = encodeURIComponent(`${text}\n\n${url}`);
    window.open(`https://wa.me/?text=${whatsappText}`, "_blank", "noopener");
  }

  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: dua.title, text, url });
      } catch {
        // User cancelled
      }
    } else {
      copyLink();
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* WhatsApp */}
      <button
        onClick={shareWhatsApp}
        className="flex items-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-medium rounded-xl transition-colors"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </button>

      {/* Copy link */}
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 dark:bg-emerald-900 hover:bg-stone-200 dark:hover:bg-emerald-800 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-xl transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        {copied ? "Copied!" : "Copy Link"}
      </button>

      {/* Native share */}
      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={nativeShare}
          className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 dark:bg-emerald-900 hover:bg-stone-200 dark:hover:bg-emerald-800 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-xl transition-colors"
          aria-label="Share"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      )}
    </div>
  );
}
