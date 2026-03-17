import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { SavedPageContent } from "@/components/dua/SavedPageContent";

export const metadata: Metadata = {
  title: "Saved Duas",
  description:
    "Your personal collection of saved Islamic duas from DuaVault. Access your favourite duas anytime — no account needed.",
  robots: { index: false, follow: false },
};

export default function SavedPage() {
  return (
    // Suspense required because SavedPageContent uses useSearchParams()
    <Suspense fallback={
      <div className="flex justify-center py-24">
        <Loader2 className="w-6 h-6 animate-spin text-stone-300 dark:text-stone-600" />
      </div>
    }>
      <SavedPageContent />
    </Suspense>
  );
}
