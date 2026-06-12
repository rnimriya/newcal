"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCalcStore } from "@/store/calculatorStore";
import { getEntry } from "@/lib/registry";
import { CalculatorIcon } from "@/components/ui/FlatIcon";

export function RecentlyViewedSection() {
  const recentlyViewed = useCalcStore((s) => s.recentlyViewed);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const entries = recentlyViewed
    .map((slug) => getEntry(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getEntry>>[];

  if (entries.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-4">Recently Viewed</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/${entry.category}/${entry.slug}`}
            className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  flex-shrink-0 flex flex-col items-center gap-2 p-4 w-32 text-center hover:border-primary/50 transition-all"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
              <CalculatorIcon slug={entry.slug} category={entry.category} size={18} />
            </span>
            <p className="text-base font-semibold text-foreground leading-tight line-clamp-2">
              {entry.name}
            </p>
            <p className="text-[10px] text-muted-foreground capitalize">{entry.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
