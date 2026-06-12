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
      <h2 className="section-title text-xl mb-4 font-bold">Related Calculators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {entries.map((e) => (
          <Link
            key={e.slug}
            href={`/${e.category}/${e.slug}`}
            className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  flex items-center gap-3 p-4 group"
          >
            <span className="text-2xl">{e.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-base group-hover:text-primary transition-colors leading-tight">
                {e.name}
              </p>
              <p className="text-base text-muted-foreground mt-0.5 line-clamp-1">{e.shortDesc}</p>
            </div>
            <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 group-hover:text-primary/70 transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  );
}
