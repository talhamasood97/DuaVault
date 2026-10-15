import { ShieldCheck, BookOpen, CalendarDays } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Checked Against the Source",
    desc: "Every dua matched to its Quran verse or hadith number, with its grading",
  },
  {
    icon: BookOpen,
    title: "Authentic Sources",
    desc: "The Quran · Sahih al-Bukhari · Sahih Muslim · Abu Dawud · Tirmidhi",
  },
  {
    icon: CalendarDays,
    title: "A New Dua Every Day",
    desc: "Fresh supplication each morning — make remembrance of Allah part of your daily routine",
  },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-emerald-800 dark:bg-emerald-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 text-white/90"
            >
              <div className="flex-shrink-0 p-2.5 bg-emerald-700 dark:bg-emerald-900 rounded-xl">
                <item.icon className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-emerald-200 dark:text-emerald-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
