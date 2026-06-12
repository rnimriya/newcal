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
import { Breadcrumb } from "./Breadcrumb";

const YouTubeSection = dynamic(
  () => import("./YouTubeSection").then((m) => m.YouTubeSection),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-border bg-card h-48 animate-pulse" />
    ),
  }
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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const calculatorState = useCalculator(schema, {
    initialValues,
    slug: schema.slug,
    preferredUnits: mounted ? filteredPreferredUnits : {},
  });
  const theme = getCategoryTheme(schema.category);

  return (
    <div className="space-y-8">
      {/* Feature toggle bar */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => { setShowComparison((v) => !v); setShowBatch(false); }}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-base font-bold transition-all cursor-pointer ${showComparison
            ? `${theme.buttonAccent} border-transparent`
            : `border-border text-muted-foreground hover:bg-secondary`
            }`}
        >
          <Columns2 size={13} />
          Compare
        </button>
        <button
          onClick={() => { setShowBatch((v) => !v); setShowComparison(false); }}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-base font-bold transition-all cursor-pointer ${showBatch
            ? `${theme.buttonAccent} border-transparent`
            : `border-border text-muted-foreground hover:bg-secondary`
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

      {/* Bottom: Infographic + YouTube */}
      <div className={`${isMobile ? "flex flex-col gap-6" : "grid grid-cols-2 gap-6"}`}>
        <InfoGraphic schema={schema} fields={calculatorState.fields} theme={theme} />
        <YouTubeSection calcName={schema.name} category={schema.category} theme={theme} />
      </div>

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
  compact,
}: {
  field: CalculatorField;
  state: FieldState;
  setValue: (id: string, v: string) => void;
  setUnit: (id: string, u: string) => void;
  theme: CategoryTheme;
  isMobile: boolean;
  compact?: boolean;
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
      compact={compact}
    />
  );
});

function CalculatorFormConnected({ schema, state, isMobile, theme, setPreferredUnit }: ConnectedProps) {
  const { fields, setValue, setUnit, loadExample, reset } = state;
  const { savedCalculators, saveCalculator, removeCalculator, addHistoryEntry } = useCalcStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isSaved = mounted && savedCalculators.includes(schema.slug);
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
      <div className={`rounded-2xl border border-border p-5 sm:p-6 bg-card shadow-sm transition-all relative`}>
        <div className="flex flex-col items-start gap-4 relative z-20">
          <div className="flex flex-col gap-1 w-full">
            <h1 className="font-extrabold text-foreground text-2xl sm:text-3xl leading-tight">
              {schema.name}
            </h1>
            <p className="text-base sm:text-base text-muted-foreground mt-1 mb-2 leading-relaxed font-medium">
              {schema.description}
            </p>
            <div className="flex flex-wrap items-center justify-start gap-1 text-muted-foreground shrink-0 mt-1 -ml-2">
              <ShareButton
                slug={schema.slug}
                category={schema.category}
                fields={fields}
                schema={schema}
              />
              <ExportButton schema={schema} fields={fields} theme={theme} />
              <button
                onClick={() => isSaved ? removeCalculator(schema.slug) : saveCalculator(schema.slug)}
                className="rounded-xl p-2 hover:bg-secondary transition-all duration-200 active:scale-90 cursor-pointer"
                title={isSaved ? "Saved" : "Save Calculator"}
              >
                {isSaved ? <BookmarkCheck size={19} /> : <Bookmark size={19} />}
              </button>
              <button
                onClick={() => setShowHistory((v) => !v)}
                className={`rounded-xl p-2 transition-all duration-200 active:scale-90 cursor-pointer ${showHistory
                  ? "bg-secondary text-foreground"
                  : "hover:bg-secondary"
                  }`}
                title="Calculation History"
              >
                <History size={19} />
              </button>
              <button
                onClick={reset}
                className="rounded-xl p-2 hover:bg-secondary transition-all duration-200 active:scale-90 cursor-pointer"
                title="Reset Fields"
              >
                <RotateCcw size={19} />
              </button>
            </div>
          </div>
        </div>

        {schema.examples && schema.examples.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-border relative z-10">
            <div className="flex flex-wrap gap-2 min-h-[36px]">
              <span className="text-base text-muted-foreground self-center font-bold tracking-wide uppercase">Examples:</span>
              {schema.examples.map((ex) => (
                <button
                  key={ex.label}
                  onClick={() => loadExample(ex.inputs)}
                  className="rounded-md border border-border bg-secondary px-3 py-0 text-base font-bold text-secondary-foreground hover:bg-muted transition-all cursor-pointer shadow-sm text-xs"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>
        )}
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
            className={`rounded-2xl border border-border bg-card p-5 shadow-sm transition-all ${theme.glowShadow}`}
          >
            <h2 className={`mb-4 text-base font-black uppercase tracking-wider border-b border-border pb-2 ${theme.textAccent}`}>
              {group.label}
            </h2>
            <div className="space-y-4">
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
                    compact
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
