"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CROSS_LINKS } from "@/lib/crossLinks";
import { REGISTRY_MAP } from "@/lib/registry";
import type { FieldState } from "@/types/calculator";

interface Props {
  slug: string;
  fields: Record<string, FieldState>;
  category: string;
}

export function CrossLinks({ slug, fields, category }: Props) {
  const links = CROSS_LINKS.filter((cl) => cl.fromSlug === slug);
  if (links.length === 0) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
        <ArrowRight size={14} className="text-indigo-500" />
        Use this result in
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((cl) => {
          const target = REGISTRY_MAP[cl.toSlug];
          if (!target) return null;

          // Build query string from fieldMap: ?v_destFieldId=value
          const params = new URLSearchParams();
          for (const [srcField, dstField] of Object.entries(cl.fieldMap)) {
            const state = fields[srcField];
            if (state?.value && state.value.trim() !== "") {
              params.set(`v_${dstField}`, state.value);
            }
          }
          const qs = params.toString();
          const href = `/${target.category}/${target.slug}${qs ? `?${qs}` : ""}`;

          return (
            <Link
              key={cl.toSlug}
              href={href}
              className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 hover:bg-indigo-50 hover:border-indigo-200 transition-colors group"
            >
              <span className="text-xl shrink-0">{target.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-indigo-700 group-hover:text-indigo-900 transition-colors leading-snug">
                  {cl.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{target.name}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-indigo-300 group-hover:text-indigo-500 transition-colors" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
