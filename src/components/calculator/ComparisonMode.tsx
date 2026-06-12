"use client";

/**
 * ComparisonMode — renders two independent calculator instances side by side.
 * Each column has its own useCalculator hook state (stateA and stateB).
 * A comparison summary shows deltas for all computed fields.
 */

import { useCallback } from "react";
import type { CalculatorSchema, CalculatorField, FieldState } from "@/types/calculator";
import { useCalculator } from "@/lib/hooks/useCalculator";
import { FieldRenderer } from "./FieldRenderer";
import type { CategoryTheme } from "./theme";

interface Props {
  schema: CalculatorSchema;
  theme: CategoryTheme;
}



function CompactFieldEntry({
  field,
  state,
  setValue,
  setUnit,
  theme,
  hideLabel,
}: {
  field: CalculatorField;
  state: FieldState;
  setValue: (id: string, v: string) => void;
  setUnit: (id: string, u: string) => void;
  theme: CategoryTheme;
  hideLabel?: boolean;
}) {
  const onValueChange = useCallback((v: string) => setValue(field.id, v), [field.id, setValue]);
  const onUnitChange = useCallback((u: string) => setUnit(field.id, u), [field.id, setUnit]);
  return (
    <FieldRenderer
      field={field}
      state={state}
      onValueChange={onValueChange}
      onUnitChange={onUnitChange}
      theme={theme}
      isMobile={false}
      hideLabel={hideLabel}
      compact
    />
  );
}

export function ComparisonMode({ schema, theme }: Props) {
  const stateA = useCalculator(schema);
  const stateB = useCalculator(schema);

  const computedFields = schema.fields.filter((f) => f.type === "computed");

  return (
    <div className={`rounded-xl border border-border bg-card p-4 shadow-sm transition-all ${theme.glowShadow} space-y-4`}>
      <h3 className={`text-base font-black uppercase tracking-wider ${theme.textAccent}`}>
        Side-by-Side Comparison
      </h3>

      {/* Table header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-end">
        <div className="hidden md:block font-bold text-muted-foreground uppercase tracking-wider text-xs px-2">Field</div>
        <div className={`rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-center`}>
          <span className={`text-xs font-black uppercase tracking-widest ${theme.textAccent}`}>Scenario A</span>
        </div>
        <div className={`rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-center`}>
          <span className={`text-xs font-black uppercase tracking-widest ${theme.textAccent}`}>Scenario B</span>
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-4 md:space-y-0 md:divide-y divide-border">
        {schema.fields.map((field) => {
          const stA = stateA.fields[field.id];
          const stB = stateB.fields[field.id];
          if (!stA || !stB) return null;

          return (
            <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:items-center py-2.5 first:pt-1">
              <div className="text-sm font-semibold text-foreground/80 md:pr-4 mb-1 md:mb-0 px-2">
                {field.label}
                {field.helpText && (
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-normal leading-tight">{field.helpText}</p>
                )}
              </div>
              <div>
                <CompactFieldEntry
                  field={field}
                  state={stA}
                  setValue={stateA.setValue}
                  setUnit={stateA.setUnit}
                  theme={theme}
                  hideLabel
                />
              </div>
              <div>
                <CompactFieldEntry
                  field={field}
                  state={stB}
                  setValue={stateB.setValue}
                  setUnit={stateB.setUnit}
                  theme={theme}
                  hideLabel
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Summary */}
      {computedFields.length > 0 && (
        <div className="border-t border-border pt-3 space-y-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground px-2">
            Comparison Summary
          </h4>
          <div className="space-y-1.5">
            {computedFields.map((field) => {
              const stA = stateA.fields[field.id];
              const stB = stateB.fields[field.id];
              const valA = parseFloat(stA?.value ?? "");
              const valB = parseFloat(stB?.value ?? "");
              const hasNumbers = !isNaN(valA) && !isNaN(valB);
              const delta = hasNumbers ? valB - valA : null;
              const isPositive = delta !== null && delta > 0;
              const isNegative = delta !== null && delta < 0;
              const precision = field.precision ?? 2;
              const deltaStr =
                delta !== null
                  ? `${isPositive ? "+" : ""}${delta.toFixed(precision)}`
                  : "—";

              return (
                <div
                  key={field.id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-1.5 bg-secondary/50"
                >
                  <span className="text-sm font-semibold text-foreground/80 truncate px-1">
                    {field.label}
                  </span>
                  <div className="flex items-center gap-3 shrink-0 text-sm font-mono font-bold">
                    <span className="text-muted-foreground min-w-[60px] text-right">
                      {field.prefix ?? ""}{stA?.value || "—"}{field.suffix ? ` ${field.suffix}` : ""}
                    </span>
                    <span className="text-muted-foreground/60">vs</span>
                    <span className="text-muted-foreground min-w-[60px] text-left">
                      {field.prefix ?? ""}{stB?.value || "—"}{field.suffix ? ` ${field.suffix}` : ""}
                    </span>
                    <span
                      className={`min-w-[60px] text-right px-1.5 py-0.5 rounded-lg text-xs ${isPositive
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : isNegative
                          ? "bg-destructive/10 text-destructive"
                          : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {deltaStr}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
