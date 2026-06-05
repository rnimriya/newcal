"use client";

import { RotateCcw, Bookmark, BookmarkCheck } from "lucide-react";
import { CalculatorIcon } from "@/components/ui/FlatIcon";
import type { CalculatorSchema } from "@/types/calculator";
import { useCalculator } from "@/lib/hooks/useCalculator";
import { useCalcStore } from "@/store/calculatorStore";
import { FieldRenderer } from "./FieldRenderer";

interface Props {
  schema: CalculatorSchema;
  isMobile?: boolean;
}

export function CalculatorForm({ schema, isMobile }: Props) {
  const { fields, setValue, setUnit, loadExample, reset } = useCalculator(schema);
  const { savedCalculators, saveCalculator, removeCalculator } = useCalcStore();
  const isSaved = savedCalculators.includes(schema.slug);

  const groups = schema.groups ?? [
    { id: "all", label: schema.name, fields: schema.fields.map((f) => f.id) },
  ];

  return (
    <div className="space-y-6">
      {/* Calculator Header Card */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="shrink-0 text-indigo-600">
              <CalculatorIcon slug={schema.slug} category={schema.category} size={28} />
            </span>
            <div>
              <h1 className="font-bold text-zinc-900 dark:text-white text-xl">
                {schema.name}
              </h1>
              <p className="text-sm text-zinc-500 mt-0.5">{schema.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Save toggle */}
            <button
              onClick={() =>
                isSaved
                  ? removeCalculator(schema.slug)
                  : saveCalculator(schema.slug)
              }
              className="rounded-lg p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
              title={isSaved ? "Unsave" : "Save calculator"}
            >
              {isSaved ? (
                <BookmarkCheck size={18} className="text-indigo-600" />
              ) : (
                <Bookmark size={18} />
              )}
            </button>

            {/* Reset */}
            <button
              onClick={reset}
              className="rounded-lg p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Reset to defaults"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>

        {/* Example quick-load buttons */}
        {schema.examples && schema.examples.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-zinc-400 self-center">Examples:</span>
            {schema.examples.map((ex) => (
              <button
                key={ex.label}
                onClick={() => loadExample(ex.inputs)}
                className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors dark:border-zinc-700 dark:text-zinc-400"
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
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
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
