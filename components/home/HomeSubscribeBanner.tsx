"use client";

import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { useSubscribeForm } from "@/hooks/useSubscribeForm";

export function HomeSubscribeBanner() {
  const { email, setEmail, name, setName, status, message, handleSubmit } =
    useSubscribeForm();

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 mb-5">
          <Mail className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3">
          One Hadith a Day, Every Morning
        </h2>
        <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-md mx-auto">
          A short, authentic hadith delivered to your inbox — verified source, Arabic text, and
          practical reflection. Free, forever.
        </p>

        {status === "success" ? (
          <div className="bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 max-w-md mx-auto">
            <CheckCircle className="w-8 h-8 text-emerald-700 dark:text-emerald-400 mx-auto mb-3" />
            <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
              You&apos;re on the list!
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-300">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <input
              type="text"
              placeholder="First name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-stone-400"
            />
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-stone-400"
              />
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-300 dark:disabled:bg-emerald-900 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-emerald-500"
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
            <p className="text-xs text-stone-400 dark:text-stone-500">
              No spam. No sharing. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
