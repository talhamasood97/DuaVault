import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – DuaVault",
  description: "Privacy Policy for DuaVault.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">
        Privacy Policy
      </h1>
      <div className="prose prose-stone dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 text-stone-600 dark:text-stone-400">
        <p>
          DuaVault is a read-only content platform. We do not require
          account registration, and we do not collect personally identifiable
          information.
        </p>
        <h2 className="text-base font-semibold text-stone-800 dark:text-stone-200 mt-6">
          Analytics
        </h2>
        <p>
          We use Google Analytics 4 to understand how visitors use the site.
          This collects anonymized usage data. You can opt out via browser
          settings or extensions.
        </p>
        <h2 className="text-base font-semibold text-stone-800 dark:text-stone-200 mt-6">
          No User-Generated Content
        </h2>
        <p>
          This platform does not allow user-generated content. All duas are
          sourced and verified by our editorial team from authenticated Islamic
          scholarship.
        </p>
        <h2 className="text-base font-semibold text-stone-800 dark:text-stone-200 mt-6">
          Cookies
        </h2>
        <p>
          We use a minimal cookie to store your dark/light mode preference. No
          tracking cookies are used.
        </p>
        <h2 className="text-base font-semibold text-stone-800 dark:text-stone-200 mt-6">
          Contact
        </h2>
        <p>
          For privacy inquiries, please contact us through our website.
        </p>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-8">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
  );
}
