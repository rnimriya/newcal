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
  const inputs  = schema.fields.filter((f) => f.type !== "computed");
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
    "bg-indigo-50 border-indigo-200 text-indigo-800 dark:bg-indigo-950/30 dark:border-indigo-800 dark:text-indigo-300",
    "bg-violet-50 border-violet-200 text-violet-800 dark:bg-violet-950/30 dark:border-violet-800 dark:text-violet-300",
    "bg-sky-50 border-sky-200 text-sky-800 dark:bg-sky-950/30 dark:border-sky-800 dark:text-sky-300",
    "bg-teal-50 border-teal-200 text-teal-800 dark:bg-teal-950/30 dark:border-teal-800 dark:text-teal-300",
    "bg-pink-50 border-pink-200 text-pink-800 dark:bg-pink-950/30 dark:border-pink-800 dark:text-pink-300",
  ];

  // Short label — strip unit suffix in parens
  const shortLabel = (label: string) => label.replace(/\s*\(.*?\)\s*/g, "").trim();

  // Main formula display — strip function names to keep it readable
  const mainFormulaId = outputs[0]?.id;
  const rawFormula = mainFormulaId ? schema.formulas[mainFormulaId] : undefined;

  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 overflow-hidden shadow-sm`}>
      {/* Header */}
      <div className={`px-5 py-4 ${theme.iconBg} border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{schema.icon ?? "🧮"}</span>
          <div>
            <h3 className={`font-bold text-sm ${theme.textAccent}`}>{schema.name}</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">How it calculates</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 dark:text-zinc-500">
          <BarChart3 size={13} />
          Infographic
        </div>
      </div>

      {/* Flow diagram */}
      <div className="p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

          {/* Inputs column */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">Inputs</p>
            {inputs.slice(0, 5).map((f, idx) => (
              <div
                key={f.id}
                className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-xs font-semibold ${inputColors[idx % inputColors.length]}`}
              >
                <span className="truncate">{shortLabel(f.label)}</span>
                <span className="font-mono font-bold shrink-0 opacity-75">{displayVal(f.id)}</span>
              </div>
            ))}
            {inputs.length > 5 && (
              <p className="text-[10px] text-zinc-400 pl-1">+{inputs.length - 5} more inputs</p>
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
              <span className="text-xs text-zinc-400">Custom logic</span>
            )}
          </div>

          {/* Arrow */}
          <div className="flex sm:flex-col items-center gap-1 shrink-0 px-2">
            <ArrowRight size={20} className={`${theme.textAccent}`} />
          </div>

          {/* Outputs column */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">Results</p>
            {outputs.slice(0, 4).map((f) => (
              <div
                key={f.id}
                className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-xs font-semibold ${theme.outputBg} ${theme.outputBorder} ${theme.textAccent}`}
              >
                <span className="truncate text-zinc-700 dark:text-zinc-300">{shortLabel(f.label)}</span>
                <span className="font-mono font-bold shrink-0">
                  {fields[f.id]?.error ? "—" : displayVal(f.id)}
                </span>
              </div>
            ))}
            {outputs.length > 4 && (
              <p className="text-[10px] text-zinc-400 pl-1">+{outputs.length - 4} more outputs</p>
            )}
          </div>
        </div>

        {/* Quick stats row */}
        {schema.examples && schema.examples.length > 0 && (
          <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">Quick Facts</p>
            <div className="grid grid-cols-3 gap-2">
              <div className={`rounded-xl ${theme.iconBg} p-2.5 text-center`}>
                <p className={`text-lg font-extrabold ${theme.textAccent}`}>{inputs.length}</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Inputs</p>
              </div>
              <div className={`rounded-xl ${theme.iconBg} p-2.5 text-center`}>
                <p className={`text-lg font-extrabold ${theme.textAccent}`}>{outputs.length}</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Outputs</p>
              </div>
              <div className={`rounded-xl ${theme.iconBg} p-2.5 text-center`}>
                <p className={`text-lg font-extrabold ${theme.textAccent}`}>{schema.examples.length}</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Examples</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
