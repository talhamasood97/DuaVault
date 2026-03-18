export function DuaCardSkeleton() {
  return (
    <div className="bg-white dark:bg-emerald-950/40 rounded-2xl p-6 border border-stone-100 dark:border-emerald-900 animate-pulse">
      <div className="h-4 bg-stone-100 dark:bg-emerald-900 rounded w-3/4 mb-4" />
      <div className="h-8 bg-stone-100 dark:bg-emerald-900 rounded w-full mb-2" />
      <div className="h-8 bg-stone-100 dark:bg-emerald-900 rounded w-5/6 mb-4" />
      <div className="h-3 bg-stone-100 dark:bg-emerald-900 rounded w-2/3 mb-1" />
      <div className="h-3 bg-stone-100 dark:bg-emerald-900 rounded w-1/2 mb-4" />
      <div className="flex gap-2">
        <div className="h-5 bg-stone-100 dark:bg-emerald-900 rounded-full w-14" />
        <div className="h-5 bg-stone-100 dark:bg-emerald-900 rounded-full w-20" />
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="text-center">
        <div className="arabic text-4xl text-emerald-600 dark:text-emerald-500 animate-pulse-soft mb-4">
          ﷽
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400">Loading…</p>
      </div>
    </div>
  );
}
