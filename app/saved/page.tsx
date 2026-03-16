import type { Metadata } from "next";
import { Suspense } from "react";
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
    <Suspense>
      <SavedPageContent />
    </Suspense>
  );
}
