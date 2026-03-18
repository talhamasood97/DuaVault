"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Copy, Check, MessageCircle, Twitter, Facebook, Send } from "lucide-react";
import toast from "react-hot-toast";
import { formatShareText, formatTwitterText, SITE_URL } from "@/lib/utils";
import type { Dua } from "@/types";
import { trackShareDua } from "@/lib/analytics";

export function ShareButtons({ dua }: { dua: Dua }) {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const url = `${SITE_URL}/duas/${dua.slug}`;

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const source = `${dua.source_book}${dua.hadith_number ? ` ${dua.hadith_number}` : ""}`;
  const text = formatShareText(dua.title, dua.translation, source);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied!");
      trackShareDua("copy_link", dua.slug);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy");
    }
  }

  function shareWhatsApp() {
    const whatsappText = encodeURIComponent(`${text}\n\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${whatsappText}`, "_blank", "noopener");
    trackShareDua("whatsapp", dua.slug);
  }

  function shareTelegram() {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,width=600,height=400"
    );
    trackShareDua("telegram", dua.slug);
  }

  function shareTwitter() {
    const tweetText = encodeURIComponent(formatTwitterText(dua.title, dua.translation));
    window.open(
      `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,width=600,height=400"
    );
    trackShareDua("twitter", dua.slug);
  }

  function shareFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,width=600,height=400"
    );
    trackShareDua("facebook", dua.slug);
  }

  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: dua.title, text, url });
        trackShareDua("native", dua.slug);
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
        className="flex items-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-white/70"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </button>

      {/* Telegram */}
      <button
        onClick={shareTelegram}
        className="flex items-center gap-1.5 px-3 py-2 bg-[#2AABEE] hover:bg-[#1e96d4] text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-white/70"
        aria-label="Share on Telegram"
      >
        <Send className="w-4 h-4" />
        Telegram
      </button>

      {/* Twitter / X */}
      <button
        onClick={shareTwitter}
        className="flex items-center gap-1.5 px-3 py-2 bg-black hover:bg-stone-800 text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-white/70"
        aria-label="Share on X (Twitter)"
      >
        <Twitter className="w-4 h-4" />
        X
      </button>

      {/* Facebook */}
      <button
        onClick={shareFacebook}
        className="flex items-center gap-1.5 px-3 py-2 bg-[#1877F2] hover:bg-[#1664d9] text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-white/70"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </button>

      {/* Copy link */}
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 dark:bg-emerald-900 hover:bg-stone-200 dark:hover:bg-emerald-800 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-emerald-500"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        {copied ? "Copied!" : "Copy Link"}
      </button>

      {/* Native share — mobile only */}
      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={nativeShare}
          className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 dark:bg-emerald-900 hover:bg-stone-200 dark:hover:bg-emerald-800 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-emerald-500"
          aria-label="Share"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      )}
    </div>
  );
}
