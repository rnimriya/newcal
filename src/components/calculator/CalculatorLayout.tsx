"use client";

import { useCallback, useEffect, memo, useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import type { CalculatorSchema } from "@/types/calculator";
import { useCalculator } from "@/lib/hooks/useCalculator";
import { useCalcStore } from "@/store/calculatorStore";
import { parseShareParams } from "@/lib/shareUrl";
import { ExplanationPanel } from "./ExplanationPanel";
import { InfoGraphic } from "./InfoGraphic";
import { getCategoryTheme } from "./theme";
import { CrossLinks } from "./CrossLinks";
import { ComparisonMode } from "./ComparisonMode";
import { BatchProcessor } from "./BatchProcessor";

const FormulaChart = dynamic(
  () => import("@/components/charts/FormulaChart").then((m) => m.FormulaChart),
  { ssr: false, loading: () => null }
);

interface Props {
  schema: CalculatorSchema;
}

export function CalculatorLayout({ schema }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const rawSearchParams = useSearchParams();
  const initialValues = useMemo(() => {
    const raw: Record<string, string> = {};
    rawSearchParams.forEach((v, k) => { raw[k] = v; });
    const parsed = parseShareParams(raw);
    return Object.keys(parsed).length > 0 ? parsed : undefined;
  }, [rawSearchParams]);
  const [showComparison, setShowComparison] = useState(false);
  const [showBatch, setShowBatch] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { preferredUnits, setPreferredUnit } = useCalcStore();

  const slugPrefix = `${schema.slug}_`;
  const filteredPreferredUnits: Record<string, string> = {};
  for (const [key, val] of Object.entries(preferredUnits)) {
    if (key.startsWith(slugPrefix)) {
      filteredPreferredUnits[key] = val;
    }
  }

  const calculatorState = useCalculator(schema, {
    initialValues,
    slug: schema.slug,
    preferredUnits: filteredPreferredUnits,
  });
  const theme = getCategoryTheme(schema.category);

  return (
    <div className="space-y-8">
      {/* Feature toggle bar */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => { setShowComparison((v) => !v); setShowBatch(false); }}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm font-bold transition-all cursor-pointer ${
            showComparison
              ? `${theme.buttonAccent} border-transparent`
              : `border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800`
          }`}
        >
          <Columns2 size={13} />
          Compare
        </button>
        <button
          onClick={() => { setShowBatch((v) => !v); setShowComparison(false); }}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm font-bold transition-all cursor-pointer ${
            showBatch
              ? `${theme.buttonAccent} border-transparent`
              : `border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800`
          }`}
        >
          <TableProperties size={13} />
          Batch
        </button>
      </div>

      {showComparison && <ComparisonMode schema={schema} theme={theme} />}
      {showBatch && <BatchProcessor schema={schema} theme={theme} />}

      {/* Top 2-column: Form + Explanation */}
      <div className={`${isMobile ? "flex flex-col gap-6" : "grid grid-cols-2 gap-8 items-start"}`}>
        <div className="min-w-0">
          <CalculatorFormConnected
            schema={schema}
            state={calculatorState}
            isMobile={isMobile}
            theme={theme}
            setPreferredUnit={setPreferredUnit}
          />
        </div>
        <div className={`min-w-0 ${isMobile ? "" : "sticky top-24"}`}>
          <ExplanationPanel schema={schema} fields={calculatorState.fields} theme={theme} />
        </div>
      </div>

      {/* Chart visualization */}
      {schema.chart && (
        <FormulaChart schema={schema} fields={calculatorState.fields} />
      )}

      {/* Infographic */}
      <InfoGraphic schema={schema} fields={calculatorState.fields} theme={theme} />

      {/* Cross-links */}
      <CrossLinks slug={schema.slug} fields={calculatorState.fields} category={schema.category} />
    </div>
  );
}

// ─── Thin shim so CalculatorForm uses the parent's shared hook state ──────────

import {
  RotateCcw, Bookmark, BookmarkCheck, History, Columns2, TableProperties
} from "lucide-react";
import { CalculatorIcon } from "@/components/ui/FlatIcon";
import { FieldRenderer } from "./FieldRenderer";
import { HistoryPanel } from "./HistoryPanel";
import { ShareButton } from "./ShareButton";
import { SolveForSelector } from "./SolveForSelector";
import { ExportButton } from "./ExportButton";
import type { UseCalculatorReturn } from "@/lib/hooks/useCalculator";
import type { CategoryTheme } from "./theme";
import type { CalculatorField, FieldState, HistoryEntry } from "@/types/calculator";

function genId(): string {
  return Math.random().toString(36).slice(2, 10);
}

interface ConnectedProps {
  schema: CalculatorSchema;
  state: UseCalculatorReturn;
  isMobile: boolean;
  theme: CategoryTheme;
  setPreferredUnit: (slug: string, fieldId: string, unit: string) => void;
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

function CalculatorFormConnected({ schema, state, isMobile, theme, setPreferredUnit }: ConnectedProps) {
  const { fields, setValue, setUnit, loadExample, reset } = state;
  const { savedCalculators, saveCalculator, removeCalculator, addHistoryEntry } = useCalcStore();
  const isSaved = savedCalculators.includes(schema.slug);
  const [showHistory, setShowHistory] = useState(false);
  const [solveTarget, setSolveTarget] = useState<string | null>(null);

  const groups = schema.groups ?? [
    { id: "all", label: schema.name, fields: schema.fields.map((f) => f.id) },
  ];

  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    const computedFields = schema.fields.filter((f) => f.type === "computed");
    const hasComputedValues = computedFields.some(
      (f) => fields[f.id]?.value && !fields[f.id]?.error
    );
    if (!hasComputedValues) return;

    const inputs: Record<string, string> = {};
    const outputs: Record<string, string> = {};
    for (const f of schema.fields) {
      const st = fields[f.id];
      if (!st) continue;
      if (f.type === "computed") {
        if (st.value && !st.error) outputs[f.id] = st.value;
      } else {
        if (st.value) inputs[f.id] = st.value;
      }
    }

    const fingerprint = JSON.stringify({ inputs, outputs });
    if (fingerprint === lastSavedRef.current) return;
    lastSavedRef.current = fingerprint;

    const entry: HistoryEntry = {
      id: genId(),
      timestamp: Date.now(),
      inputs,
      outputs,
    };
    addHistoryEntry(schema.slug, entry);
  }, [fields, schema, addHistoryEntry]);

  const setUnitAndPersist = useCallback(
    (fieldId: string, unit: string) => {
      setUnit(fieldId, unit);
      setPreferredUnit(schema.slug, fieldId, unit);
    },
    [setUnit, setPreferredUnit, schema.slug]
  );

  function handleSolveFor(fieldId: string) {
    if (!fieldId) {
      setSolveTarget(null);
      reset();
      return;
    }
    setSolveTarget(fieldId);
    setValue(fieldId, "");
  }

  const handleRestore = useCallback(
    (inputs: Record<string, string>) => {
      const numericInputs: Record<string, number> = {};
      for (const [k, v] of Object.entries(inputs)) {
        const n = parseFloat(v);
        if (!isNaN(n)) numericInputs[k] = n;
      }
      loadExample(numericInputs);
      setShowHistory(false);
    },
    [loadExample]
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header card */}
      <div className={`rounded-2xl border-none p-6 sm:p-8 text-white shadow-xl shadow-indigo-500/10 bg-gradient-to-br ${theme.heroGradient} transition-all relative`}>
        {/* Abstract shape background — clipped independently so dropdowns can escape */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-[0.15] mix-blend-overlay">
            <CalculatorIcon slug={schema.slug} category={schema.category} size={180} />
          </div>
        </div>

        <div className="flex items-start gap-4 relative z-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-sm border border-white/20">
            <CalculatorIcon slug={schema.slug} category={schema.category} size={32} />
          </div>
          <div>
            <h1 className="font-extrabold text-white text-2xl sm:text-3xl leading-tight drop-shadow-sm">
              {schema.name}
            </h1>
            <p className="text-base sm:text-base text-white/90 mt-1.5 leading-relaxed font-medium max-w-2xl drop-shadow-sm">
              {schema.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20 relative z-10">
          <div className="flex flex-wrap gap-2 min-h-[36px]">
            {schema.examples && schema.examples.length > 0 && (
              <>
                <span className="text-sm text-white/80 self-center font-bold tracking-wide uppercase">Examples:</span>
                {schema.examples.map((ex) => (
                  <button
                    key={ex.label}
                    onClick={() => loadExample(ex.inputs)}
                    className="rounded-xl border border-white/20 bg-black/10 backdrop-blur-md px-3 py-1.5 text-sm font-bold text-white hover:bg-white hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                  >
                    {ex.label}
                  </button>
                ))}
              </>
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0 ml-auto text-white/90">
            <ShareButton
              slug={schema.slug}
              category={schema.category}
              fields={fields}
              schema={schema}
            />
            <ExportButton schema={schema} fields={fields} theme={theme} />
            <button
              onClick={() => isSaved ? removeCalculator(schema.slug) : saveCalculator(schema.slug)}
              className="rounded-xl p-2 hover:bg-white/20 transition-all duration-200 active:scale-90 cursor-pointer"
              title={isSaved ? "Saved" : "Save Calculator"}
            >
              {isSaved ? <BookmarkCheck size={19} className="text-white" /> : <Bookmark size={19} />}
            </button>
            <button
              onClick={() => setShowHistory((v) => !v)}
              className={`rounded-xl p-2 transition-all duration-200 active:scale-90 cursor-pointer ${
                showHistory
                  ? "bg-white text-slate-900"
                  : "hover:bg-white/20"
              }`}
              title="Calculation History"
            >
              <History size={19} />
            </button>
            <button
              onClick={reset}
              className="rounded-xl p-2 hover:bg-white/20 transition-all duration-200 active:scale-90 cursor-pointer"
              title="Reset Fields"
            >
              <RotateCcw size={19} />
            </button>
          </div>
        </div>
      </div>

      {/* Solve-for selector */}
      <SolveForSelector
        schema={schema}
        fields={fields}
        onSolveFor={handleSolveFor}
        currentSolveTarget={solveTarget}
        theme={theme}
      />

      {/* Field groups */}
      {groups.map((group) => {
        const groupFields = schema.fields.filter((f) => group.fields.includes(f.id));
        return (
          <div
            key={group.id}
            className={`rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all ${theme.glowShadow}`}
          >
            <h2 className={`mb-4 text-sm font-black uppercase tracking-wider border-b border-zinc-100 pb-2 dark:border-zinc-800 ${theme.textAccent}`}>
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
                    setUnit={setUnitAndPersist}
                    theme={theme}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* History panel */}
      {showHistory && (
        <HistoryPanel slug={schema.slug} onRestore={handleRestore} />
      )}
    </div>
  );
}
