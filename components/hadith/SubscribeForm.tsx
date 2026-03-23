"use client";

import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { useSubscribeForm } from "@/hooks/useSubscribeForm";

export function SubscribeForm() {
  const { email, setEmail, name, setName, status, message, handleSubmit } =
    useSubscribeForm();

  if (status === "success") {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 text-center">
        <CheckCircle className="w-8 h-8 text-emerald-700 dark:text-emerald-400 mx-auto mb-3" />
        <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
          You&apos;re on the list!
        </p>
        <p className="text-sm text-emerald-700 dark:text-emerald-300">{message}</p>
      </div>
    );
  }

  return (
    <div className="bg-amber-50/60 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-1">
        <Mail className="w-4 h-4 text-amber-700 dark:text-amber-400" />
        <p className="font-semibold text-stone-800 dark:text-stone-100 text-sm">
          Get Today&apos;s Hadith in Your Inbox
        </p>
      </div>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
        One authentic hadith every morning. Short, verified, and actionable. Unsubscribe anytime.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your first name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-sm bg-white dark:bg-emerald-900 border border-stone-200 dark:border-emerald-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-400"
        />
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-sm bg-white dark:bg-emerald-900 border border-stone-200 dark:border-emerald-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-400"
          />
          <button
            type="submit"
            disabled={status === "loading" || !email}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 dark:disabled:bg-amber-800 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-amber-400"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
        {status === "error" && (
          <p className="text-xs text-red-500 dark:text-red-400">{message}</p>
        )}
      </form>

      <p className="text-xs text-stone-500 dark:text-stone-400 mt-3">
        No spam. No sharing. Just one hadith a day.
      </p>
    </div>
  );
}
