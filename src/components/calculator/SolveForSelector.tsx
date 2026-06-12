"use client";

/**
 * SolveForSelector — lets the user pick which computed field to "solve for".
 * When a field is selected, the bi-directional solver in useCalculator treats
 * that field as the target, flipping the others to auto-computed.
 */

import type { CalculatorSchema, FieldState } from "@/types/calculator";
import type { CategoryTheme } from "./theme";

interface Props {
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;
  onSolveFor: (fieldId: string) => void;
  currentSolveTarget: string | null;
  theme: CategoryTheme;
}

export function SolveForSelector({ schema, onSolveFor, currentSolveTarget, theme }: Props) {
  const computedFields = schema.fields.filter((f) => f.type === "computed");

  if (computedFields.length === 0) return null;

  return (
    <div className={`rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/60 dark:bg-zinc-800/40 px-4 py-3 flex items-center gap-3 flex-wrap`}>
      <span className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 shrink-0">
        Solve for:
      </span>
      <div className={`relative flex-1 min-w-[160px] rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 ${theme.focusRing}`}>
        <select
          value={currentSolveTarget ?? ""}
          onChange={(e) => onSolveFor(e.target.value)}
          className="w-full appearance-none bg-transparent px-3 py-2 pr-8 text-xs font-bold text-zinc-800 dark:text-white outline-none cursor-pointer"
        >
          <option value="">— Default mode —</option>
          {computedFields.map((f) => (
            <option key={f.id} value={f.id} className="dark:bg-zinc-900">
              {f.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-[10px] font-bold">
          ▼
        </div>
      </div>
      {currentSolveTarget && (
        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${theme.badge}`}>
          Solve mode
        </span>
      )}
    </div>
  );
}
