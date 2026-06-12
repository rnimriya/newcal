"use client";

import Link from "next/link";
import { useCalcStore } from "@/store/calculatorStore";
import { getEntry } from "@/lib/registry";
import { CalculatorIcon } from "@/components/ui/FlatIcon";

export function RecentlyViewedSection() {
  const recentlyViewed = useCalcStore((s) => s.recentlyViewed);

  const entries = recentlyViewed
    .map((slug) => getEntry(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getEntry>>[];

  if (entries.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4">Recently Viewed</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/${entry.category}/${entry.slug}`}
            className="calc-card flex-shrink-0 flex flex-col items-center gap-2 p-4 w-32 text-center hover:border-indigo-200 transition-all"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50">
              <CalculatorIcon slug={entry.slug} category={entry.category} size={18} />
            </span>
            <p className="text-xs font-semibold text-slate-800 leading-tight line-clamp-2">
              {entry.name}
            </p>
            <p className="text-[10px] text-slate-400 capitalize">{entry.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
