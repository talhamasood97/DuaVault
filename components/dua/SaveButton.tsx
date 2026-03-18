"use client";

import { Bookmark } from "lucide-react";
import { useSavedDuas } from "@/hooks/useSavedDuas";
import { cn } from "@/lib/utils";
import { trackSaveDua, trackUnsaveDua } from "@/lib/analytics";

interface SaveButtonProps {
  slug: string;
  title: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SaveButton({ slug, title, size = "md", className }: SaveButtonProps) {
  const { isSaved, toggle, hydrated } = useSavedDuas();
  const saved = hydrated && isSaved(slug);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggle(slug);
    if (saved) {
      trackUnsaveDua(slug, title);
    } else {
      trackSaveDua(slug, title);
    }
  }

  const sizeClasses = {
    sm: "p-1.5 rounded-lg",
    md: "p-2 rounded-xl",
    lg: "p-2.5 rounded-xl",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-[18px] h-[18px]",
    lg: "w-5 h-5",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
        saved
          ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/50 hover:bg-emerald-100 dark:hover:bg-emerald-900"
          : "text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50",
        sizeClasses[size],
        className
      )}
      aria-label={saved ? `Unsave "${title}"` : `Save "${title}"`}
      aria-pressed={saved}
    >
      <Bookmark
        className={cn(
          iconSizes[size],
          "transition-all duration-200",
          saved ? "fill-emerald-500 dark:fill-emerald-400 scale-110" : ""
        )}
      />
    </button>
  );
}
