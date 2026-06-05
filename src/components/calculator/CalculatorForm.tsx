"use client";

import { RotateCcw, Bookmark, BookmarkCheck } from "lucide-react";
import { CalculatorIcon } from "@/components/ui/FlatIcon";
import type { CalculatorSchema } from "@/types/calculator";
import { useCalculator } from "@/lib/hooks/useCalculator";
import { useCalcStore } from "@/store/calculatorStore";
import { FieldRenderer } from "./FieldRenderer";
import { getCategoryTheme } from "./theme";

interface Props {
  schema: CalculatorSchema;
  isMobile?: boolean;
}

export function CalculatorForm({ schema, isMobile }: Props) {
  const { fields, setValue, setUnit, loadExample, reset } = useCalculator(schema);
  const { savedCalculators, saveCalculator, removeCalculator } = useCalcStore();
  const isSaved = savedCalculators.includes(schema.slug);
  const theme = getCategoryTheme(schema.category);

  const groups = schema.groups ?? [
    { id: "all", label: schema.name, fields: schema.fields.map((f) => f.id) },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Calculator Header Card */}
      <div className={`rounded-2xl border border-zinc-200 border-t-4 ${theme.accentBorder} bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all ${theme.glowShadow}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} font-bold`}>
              <CalculatorIcon slug={schema.slug} category={schema.category} size={20} />
            </div>
            <div>
              <h1 className="font-bold text-zinc-900 dark:text-white text-xl leading-tight">
                {schema.name}
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">{schema.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() =>
                isSaved ? removeCalculator(schema.slug) : saveCalculator(schema.slug)
              }
              className={`rounded-xl p-2 text-zinc-400 hover:text-zinc-650 ${theme.hoverBg} transition-all duration-200 active:scale-90 cursor-pointer`}
              title={isSaved ? "Saved" : "Save Calculator"}
            >
              {isSaved ? (
                <BookmarkCheck size={19} className={theme.textAccent} />
              ) : (
                <Bookmark size={19} />
              )}
            </button>

            <button
              onClick={reset}
              className="rounded-xl p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-150 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-90 cursor-pointer"
              title="Reset to defaults"
            >
              <RotateCcw size={19} />
            </button>
          </div>
        </div>

        {/* Example quick-load buttons */}
        {schema.examples && schema.examples.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 self-center font-bold">Try Examples:</span>
            {schema.examples.map((ex) => (
              <button
                key={ex.label}
                onClick={() => loadExample(ex.inputs)}
                className={`rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-bold text-zinc-600 ${theme.hoverBorder} ${theme.textAccent} ${theme.hoverBg} transition-all dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-400 dark:hover:border-indigo-500 cursor-pointer`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Field Groups */}
      {groups.map((group) => {
        const groupFields = schema.fields.filter((f) =>
          group.fields.includes(f.id)
        );

        return (
          <div
            key={group.id}
            className={`rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all ${theme.glowShadow}`}
          >
            <h2 className={`mb-4 text-xs font-black uppercase tracking-wider border-b border-zinc-100 pb-2 dark:border-zinc-800 ${theme.textAccent}`}>
              {group.label}
            </h2>

            <div className="space-y-5">
              {groupFields.map((field) => {
                const state = fields[field.id];
                if (!state) return null;
                return (
                  <FieldRenderer
                    key={field.id}
                    field={field}
                    state={state}
                    onValueChange={(v) => setValue(field.id, v)}
                    onUnitChange={(u) => setUnit(field.id, u)}
                    theme={theme}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
