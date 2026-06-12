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

interface ColumnProps {
  label: string;
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;
  setValue: (id: string, v: string) => void;
  setUnit: (id: string, u: string) => void;
  theme: CategoryTheme;
}

function ComparisonColumn({ label, schema, fields, setValue, setUnit, theme }: ColumnProps) {
  return (
    <div className="space-y-4">
      <div className={`rounded-xl border-2 ${theme.accentBorder.replace("border-t-", "border-")} bg-white dark:bg-zinc-900 px-4 py-2 text-center`}>
        <span className={`text-sm font-black uppercase tracking-widest ${theme.textAccent}`}>
          {label}
        </span>
      </div>
      {schema.fields.map((field) => {
        const state = fields[field.id];
        if (!state) return null;
        return (
          <CompactFieldEntry
            key={field.id}
            field={field}
            state={state}
            setValue={setValue}
            setUnit={setUnit}
            theme={theme}
          />
        );
      })}
    </div>
  );
}

function CompactFieldEntry({
  field,
  state,
  setValue,
  setUnit,
  theme,
}: {
  field: CalculatorField;
  state: FieldState;
  setValue: (id: string, v: string) => void;
  setUnit: (id: string, u: string) => void;
  theme: CategoryTheme;
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
    />
  );
}

export function ComparisonMode({ schema, theme }: Props) {
  const stateA = useCalculator(schema);
  const stateB = useCalculator(schema);

  const computedFields = schema.fields.filter((f) => f.type === "computed");

  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all ${theme.glowShadow} space-y-6`}>
      <h3 className={`text-xs font-black uppercase tracking-wider ${theme.textAccent}`}>
        Side-by-Side Comparison
      </h3>

      {/* Two column input grid */}
      <div className="grid grid-cols-2 gap-6">
        <ComparisonColumn
          label="Scenario A"
          schema={schema}
          fields={stateA.fields}
          setValue={stateA.setValue}
          setUnit={stateA.setUnit}
          theme={theme}
        />
        <ComparisonColumn
          label="Scenario B"
          schema={schema}
          fields={stateB.fields}
          setValue={stateB.setValue}
          setUnit={stateB.setUnit}
          theme={theme}
        />
      </div>

      {/* Comparison Summary */}
      {computedFields.length > 0 && (
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Comparison Summary
          </h4>
          <div className="space-y-2">
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
                  className="flex items-center justify-between gap-4 rounded-xl border border-zinc-100 dark:border-zinc-800 px-4 py-2.5 bg-zinc-50/50 dark:bg-zinc-800/30"
                >
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 truncate">
                    {field.label}
                  </span>
                  <div className="flex items-center gap-4 shrink-0 text-xs font-mono font-bold">
                    <span className="text-zinc-500 dark:text-zinc-400 min-w-[60px] text-right">
                      {field.prefix ?? ""}{stA?.value || "—"}{field.suffix ? ` ${field.suffix}` : ""}
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-600">vs</span>
                    <span className="text-zinc-500 dark:text-zinc-400 min-w-[60px] text-left">
                      {field.prefix ?? ""}{stB?.value || "—"}{field.suffix ? ` ${field.suffix}` : ""}
                    </span>
                    <span
                      className={`min-w-[70px] text-right px-2 py-0.5 rounded-lg ${
                        isPositive
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                          : isNegative
                          ? "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400"
                          : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
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
