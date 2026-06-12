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
    <div className={`rounded-xl border border-border bg-secondary/50 px-4 py-3 flex items-center gap-3 flex-wrap`}>
      <span className="text-base font-black uppercase tracking-wider text-muted-foreground shrink-0">
        Solve for:
      </span>
      <div className={`relative flex-1 min-w-[160px] rounded-xl border-2 border-border bg-background ${theme.focusRing}`}>
        <select
          value={currentSolveTarget ?? ""}
          onChange={(e) => onSolveFor(e.target.value)}
          className="w-full appearance-none bg-transparent px-3 py-2 pr-8 text-base font-bold text-foreground outline-none cursor-pointer"
        >
          <option value="">— Default mode —</option>
          {computedFields.map((f) => (
            <option key={f.id} value={f.id} className="bg-popover text-popover-foreground">
              {f.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[10px] font-bold">
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
