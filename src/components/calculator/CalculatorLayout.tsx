"use client";

/**
 * CalculatorLayout — Handles the Desktop 2-column vs Mobile single-column
 * layout split. Renders the form on the left, explanation + chart on the right.
 */

import { useCallback, useEffect, memo, useState } from "react";
import dynamic from "next/dynamic";
import type { CalculatorSchema } from "@/types/calculator";
import { useCalculator } from "@/lib/hooks/useCalculator";
import { ExplanationPanel } from "./ExplanationPanel";
import { InfoGraphic } from "./InfoGraphic";
import { getCategoryTheme } from "./theme";

const YouTubeSection = dynamic(
  () => import("./YouTubeSection").then((m) => m.YouTubeSection),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 h-48 animate-pulse" />
    ),
  }
);

interface Props {
  schema: CalculatorSchema;
}

export function CalculatorLayout({ schema }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const calculatorState = useCalculator(schema);
  const theme = getCategoryTheme(schema.category);

  return (
    <div className="space-y-8">
      {/* Top 2-column: Form + Explanation */}
      <div className={`${isMobile ? "flex flex-col gap-6" : "grid grid-cols-2 gap-8 items-start"}`}>
        {/* Left: Calculator Form */}
        <div className="min-w-0">
          <CalculatorFormConnected
            schema={schema}
            state={calculatorState}
            isMobile={isMobile}
            theme={theme}
          />
        </div>

        {/* Right: Explanation + Chart */}
        <div className={`min-w-0 ${isMobile ? "" : "sticky top-24"}`}>
          <ExplanationPanel schema={schema} fields={calculatorState.fields} theme={theme} />
        </div>
      </div>

      {/* Bottom: Infographic + YouTube side by side (stacked on mobile) */}
      <div className={`${isMobile ? "flex flex-col gap-6" : "grid grid-cols-2 gap-6"}`}>
        <InfoGraphic schema={schema} fields={calculatorState.fields} theme={theme} />
        <YouTubeSection calcName={schema.name} category={schema.category} theme={theme} />
      </div>
    </div>
  );
}

// ─── Thin shim so CalculatorForm uses the parent's shared hook state ──────────

import { RotateCcw, Bookmark, BookmarkCheck } from "lucide-react";
import { CalculatorIcon } from "@/components/ui/FlatIcon";
import { useCalcStore } from "@/store/calculatorStore";
import { FieldRenderer } from "./FieldRenderer";
import type { UseCalculatorReturn } from "@/lib/hooks/useCalculator";
import type { CategoryTheme } from "./theme";
import type { CalculatorField, FieldState } from "@/types/calculator";

interface ConnectedProps {
  schema: CalculatorSchema;
  state: UseCalculatorReturn;
  isMobile: boolean;
  theme: CategoryTheme;
}

const MemoizedFieldEntry = memo(function FieldEntry({
  field,
  state,
  setValue,
  setUnit,
  theme,
  isMobile,
}: {
  field: CalculatorField;
  state: FieldState;
  setValue: (id: string, v: string) => void;
  setUnit: (id: string, u: string) => void;
  theme: CategoryTheme;
  isMobile: boolean;
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
      isMobile={isMobile}
    />
  );
});

function CalculatorFormConnected({ schema, state, isMobile, theme }: ConnectedProps) {
  const { fields, setValue, setUnit, loadExample, reset } = state;
  const { savedCalculators, saveCalculator, removeCalculator } = useCalcStore();
  const isSaved = savedCalculators.includes(schema.slug);

  const groups = schema.groups ?? [
    { id: "all", label: schema.name, fields: schema.fields.map((f) => f.id) },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header card */}
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
              onClick={() => isSaved ? removeCalculator(schema.slug) : saveCalculator(schema.slug)}
              className={`rounded-xl p-2 text-zinc-400 hover:text-zinc-650 ${theme.hoverBg} transition-all duration-200 active:scale-90 cursor-pointer`}
              title={isSaved ? "Saved" : "Save Calculator"}
            >
              {isSaved ? <BookmarkCheck size={19} className={theme.textAccent} /> : <Bookmark size={19} />}
            </button>
            <button
              onClick={reset}
              className="rounded-xl p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-150 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-90 cursor-pointer"
              title="Reset Fields"
            >
              <RotateCcw size={19} />
            </button>
          </div>
        </div>

        {schema.examples && schema.examples.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 self-center font-bold">Try Examples:</span>
            {schema.examples.map((ex) => (
              <button
                key={ex.label}
                onClick={() => loadExample(ex.inputs)}
                className={`rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-bold text-zinc-600 ${theme.hoverBorder} ${theme.textAccent} ${theme.hoverBg} transition-all dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-400 dark:hover:border-zinc-500 cursor-pointer`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Field groups */}
      {groups.map((group) => {
        const groupFields = schema.fields.filter((f) => group.fields.includes(f.id));
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
                const fieldState = fields[field.id];
                if (!fieldState) return null;
                return (
                  <MemoizedFieldEntry
                    key={field.id}
                    field={field}
                    state={fieldState}
                    setValue={setValue}
                    setUnit={setUnit}
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
