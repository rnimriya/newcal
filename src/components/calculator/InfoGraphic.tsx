"use client";

import type { CalculatorSchema, FieldState } from "@/types/calculator";
import type { CategoryTheme } from "./theme";
import { ArrowRight, BarChart3, Zap } from "lucide-react";

interface Props {
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;
  theme: CategoryTheme;
}

export function InfoGraphic({ schema, fields, theme }: Props) {
  const inputs = schema.fields.filter((f) => f.type !== "computed");
  const outputs = schema.fields.filter((f) => f.type === "computed");

  // Pull a display value for a field (current solved value or default)
  const displayVal = (id: string) => {
    const state = fields[id];
    if (!state) return "—";
    if (state.error || !state.value) return "—";
    const num = parseFloat(state.value);
    if (!isNaN(num)) {
      return num.toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
    return state.value;
  };

  const inputColors = [
    "bg-indigo-500/10 border-indigo-500/20 text-indigo-700 dark:text-indigo-400",
    "bg-violet-500/10 border-violet-500/20 text-violet-700 dark:text-violet-400",
    "bg-sky-500/10 border-sky-500/20 text-sky-700 dark:text-sky-400",
    "bg-teal-500/10 border-teal-500/20 text-teal-700 dark:text-teal-400",
    "bg-pink-500/10 border-pink-500/20 text-pink-700 dark:text-pink-400",
  ];

  // Short label — strip unit suffix in parens
  const shortLabel = (label: string) => label.replace(/\s*\(.*?\)\s*/g, "").trim();

  // Main formula display — strip function names to keep it readable
  const mainFormulaId = outputs[0]?.id;
  const rawFormula = mainFormulaId ? schema.formulas[mainFormulaId] : undefined;

  return (
    <div className={`rounded-2xl border border-border bg-card overflow-hidden shadow-sm`}>
      {/* Header */}
      <div className={`px-5 py-4 ${theme.iconBg} border-b border-border flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{schema.icon ?? "🧮"}</span>
          <div>
            <h3 className={`font-bold text-base ${theme.textAccent}`}>{schema.name}</h3>
            <p className="text-base text-muted-foreground mt-0.5">How it calculates</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-base font-semibold text-muted-foreground">
          <BarChart3 size={13} />
          Infographic
        </div>
      </div>

      {/* Flow diagram */}
      <div className="p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

          {/* Inputs column */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground mb-1">Inputs</p>
            {inputs.slice(0, 5).map((f, idx) => (
              <div
                key={f.id}
                className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-base font-semibold ${inputColors[idx % inputColors.length]}`}
              >
                <span className="truncate">{shortLabel(f.label)}</span>
                <span className="font-mono font-bold shrink-0 opacity-75">{displayVal(f.id)}</span>
              </div>
            ))}
            {inputs.length > 5 && (
              <p className="text-[10px] text-muted-foreground pl-1">+{inputs.length - 5} more inputs</p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex sm:flex-col items-center gap-1 shrink-0 px-2">
            <ArrowRight size={20} className={`${theme.textAccent} rotate-0 sm:rotate-0`} />
          </div>

          {/* Formula box */}
          <div className={`flex-1 min-w-0 rounded-xl border-2 ${theme.accentBorder} ${theme.iconBg} p-3 text-center`}>
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <Zap size={12} className={theme.textAccent} />
              <span className={`text-[10px] font-black uppercase tracking-wider ${theme.textAccent}`}>Formula</span>
            </div>
            {rawFormula ? (
              <code className={`text-[10px] font-mono ${theme.textAccent} break-all leading-relaxed block`}>
                {rawFormula.length > 60 ? rawFormula.slice(0, 60) + "…" : rawFormula}
              </code>
            ) : (
              <span className="text-base text-muted-foreground">Custom logic</span>
            )}
          </div>

          {/* Arrow */}
          <div className="flex sm:flex-col items-center gap-1 shrink-0 px-2">
            <ArrowRight size={20} className={`${theme.textAccent}`} />
          </div>

          {/* Outputs column */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground mb-1">Results</p>
            {outputs.slice(0, 4).map((f) => (
              <div
                key={f.id}
                className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-base font-semibold ${theme.outputBg} ${theme.outputBorder} ${theme.textAccent}`}
              >
                <span className="truncate text-foreground/80">{shortLabel(f.label)}</span>
                <span className="font-mono font-bold shrink-0">
                  {fields[f.id]?.error ? "—" : displayVal(f.id)}
                </span>
              </div>
            ))}
            {outputs.length > 4 && (
              <p className="text-[10px] text-muted-foreground pl-1">+{outputs.length - 4} more outputs</p>
            )}
          </div>
        </div>

        {/* Quick stats row */}
        {schema.examples && schema.examples.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground mb-2">Quick Facts</p>
            <div className="grid grid-cols-3 gap-2">
              <div className={`rounded-xl ${theme.iconBg} p-2.5 text-center`}>
                <p className={`text-lg font-extrabold ${theme.textAccent}`}>{inputs.length}</p>
                <p className="text-[10px] text-muted-foreground">Inputs</p>
              </div>
              <div className={`rounded-xl ${theme.iconBg} p-2.5 text-center`}>
                <p className={`text-lg font-extrabold ${theme.textAccent}`}>{outputs.length}</p>
                <p className="text-[10px] text-muted-foreground">Outputs</p>
              </div>
              <div className={`rounded-xl ${theme.iconBg} p-2.5 text-center`}>
                <p className={`text-lg font-extrabold ${theme.textAccent}`}>{schema.examples.length}</p>
                <p className="text-[10px] text-muted-foreground">Examples</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
