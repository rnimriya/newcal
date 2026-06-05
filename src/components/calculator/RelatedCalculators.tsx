import Link from "next/link";
import type { RegistryEntry } from "@/lib/registry";
import { ArrowRight } from "lucide-react";

interface Props {
  entries: RegistryEntry[];
}

export function RelatedCalculators({ entries }: Props) {
  if (!entries.length) return null;

  return (
    <section id="related" className="scroll-mt-24">
      <h2 className="section-title">Related Calculators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {entries.map((e) => (
          <Link
            key={e.slug}
            href={`/${e.category}/${e.slug}`}
            className="calc-card flex items-center gap-3 p-4 group"
          >
            <span className="text-2xl">{e.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-800 text-sm group-hover:text-indigo-600 transition-colors leading-tight">
                {e.name}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{e.shortDesc}</p>
            </div>
            <ArrowRight size={14} className="shrink-0 text-slate-300 group-hover:text-indigo-400 transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  );
}
