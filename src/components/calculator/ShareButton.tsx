"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import type { CalculatorSchema, FieldState } from "@/types/calculator";
import { buildShareUrl } from "@/lib/shareUrl";

interface Props {
  slug: string;
  category: string;
  fields: Record<string, FieldState>;
  schema: CalculatorSchema;
}

export function ShareButton({ slug, category, fields, schema }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const inputs: Record<string, string> = {};
    for (const field of schema.fields) {
      if (field.type !== "computed") {
        const state = fields[field.id];
        if (state?.value) {
          inputs[field.id] = state.value;
        }
      }
    }
    const url = buildShareUrl(slug, category, inputs);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleShare}
      title="Copy shareable link"
      className="rounded-xl p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-150 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-90 cursor-pointer"
    >
      {copied ? (
        <Check size={19} className="text-emerald-500" />
      ) : (
        <Link2 size={19} />
      )}
    </button>
  );
}
