"use client";

import { useState } from "react";
import { Info, Copy, Check } from "lucide-react";
import type { CalculatorField, FieldState } from "@/types/calculator";
import { UnitSelector } from "./UnitSelector";
import type { CategoryTheme } from "./theme";

interface Props {
  field: CalculatorField;
  state: FieldState;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: string) => void;
  theme: CategoryTheme;
  isMobile?: boolean;
}

export function FieldRenderer({
  field,
  state,
  onValueChange,
  onUnitChange,
  theme,
  isMobile,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isComputed = field.type === "computed";
  const hasUnits = field.units && field.units.length > 0;

  const handleCopy = () => {
    if (!state.value || state.error) return;
    navigator.clipboard.writeText(state.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Select/dropdown field
  if (field.type === "select") {
    return (
      <FieldWrapper field={field}>
        <div className={`relative flex items-center transition-all duration-200 rounded-xl border-2 border-zinc-200 bg-zinc-50/30 hover:border-zinc-300 focus-within:bg-white dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-zinc-600 dark:focus-within:bg-zinc-900 ${theme.focusRing}`}>
          {/* Accent Line */}
          <div className={`absolute left-0 top-[3px] bottom-[3px] w-1 rounded-l-md transition-all duration-200 ${
            isFocused ? theme.activeBar : "bg-transparent"
          }`} />

          <select
            value={state.value}
            onChange={(e) => onValueChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full appearance-none bg-transparent px-4 py-3 pr-10 text-sm font-semibold text-zinc-900 dark:text-white outline-none min-h-[46px] cursor-pointer"
          >
            {field.selectOptions?.map((opt) => (
              <option key={String(opt.value)} value={String(opt.value)} className="dark:bg-zinc-900">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 font-bold text-xs">
            ▼
          </div>
        </div>
      </FieldWrapper>
    );
  }

  // Computed output field
  if (isComputed) {
    return (
      <FieldWrapper field={field}>
        <div className="flex items-stretch gap-2">
          <div
            className={`flex-1 flex items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 min-h-[58px] transition-all duration-300 ${
              state.error
                ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-400"
                : `${theme.outputBg} ${theme.outputBorder} ${theme.glowShadow} text-zinc-900 dark:text-zinc-50`
            }`}
          >
            <div className="flex-1 min-w-0 flex items-center gap-2">
              {field.prefix && (
                <span className="text-zinc-400 font-medium dark:text-zinc-500 self-center">{field.prefix}</span>
              )}
              <span className={`font-mono text-lg md:text-xl font-extrabold tracking-tight truncate ${
                state.error ? "text-red-700 dark:text-red-400" : `${theme.textAccent} ${theme.textAccentDark}`
              }`}>
                {state.error ? "—" : state.value || "—"}
              </span>
              {field.suffix && !state.error && (
                <span className="text-zinc-400 text-xs font-semibold dark:text-zinc-500 self-end mb-0.5">{field.suffix}</span>
              )}
            </div>

            {!state.error && state.value && (
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${theme.badge} select-none animate-pulse-soft hidden sm:inline-block`}>
                  Solved
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center justify-center p-2 rounded-xl bg-white/70 hover:bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-500 hover:text-zinc-800 transition-all dark:bg-zinc-800/40 dark:hover:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-650 dark:text-zinc-400 dark:hover:text-white cursor-pointer active:scale-95 min-h-[36px] min-w-[36px]"
                  title="Copy result to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 animate-copy-pop">
                      <Check size={14} className="stroke-[3]" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            )}
          </div>

          {hasUnits && (
            <UnitSelector
              units={field.units!}
              value={state.unit}
              onChange={onUnitChange}
              isMobile={isMobile}
            />
          )}
        </div>
      </FieldWrapper>
    );
  }

  // Standard number input
  return (
    <FieldWrapper field={field}>
      <div className="flex items-stretch gap-2">
        <div className={`relative flex-1 flex items-center transition-all duration-200 rounded-xl border-2 ${
          state.error
            ? "border-red-300 bg-red-50/20 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/10 dark:border-red-900/40"
            : `border-zinc-200 bg-zinc-50/30 hover:border-zinc-300 focus-within:border-zinc-300 focus-within:bg-white dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-zinc-600 dark:focus-within:bg-zinc-900 ${theme.focusRing}`
        }`}>
          {/* Focus Accent Line */}
          <div className={`absolute left-0 top-[3px] bottom-[3px] w-1 rounded-l-md transition-all duration-200 ${
            isFocused && !state.error ? theme.activeBar : "bg-transparent"
          }`} />

          {/* Prefix */}
          {field.prefix && (
            <span className="pl-3.5 pr-1 text-sm font-semibold text-zinc-400 dark:text-zinc-500 select-none">
              {field.prefix}
            </span>
          )}

          {/* Input field */}
          <input
            type="text"
            inputMode="decimal"
            value={state.value}
            onChange={(e) => onValueChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={field.placeholder ?? ""}
            min={field.constraint?.min}
            max={field.constraint?.max}
            step={field.constraint?.step}
            className="w-full bg-transparent py-3 px-3 text-sm text-zinc-950 font-bold outline-none dark:text-white min-h-[46px]"
          />

          {/* Suffix */}
          {field.suffix && (
            <span className="pr-3.5 pl-1 text-sm font-semibold text-zinc-400 dark:text-zinc-500 select-none">
              {field.suffix}
            </span>
          )}
        </div>

        {hasUnits && (
          <UnitSelector
            units={field.units!}
            value={state.unit}
            onChange={onUnitChange}
            isMobile={isMobile}
          />
        )}
      </div>
      {state.error && (
        <p className="mt-1 text-xs text-red-500 font-semibold">{state.error}</p>
      )}
    </FieldWrapper>
  );
}

// ─── Shared wrapper ─────────────────────────────────────────────────────────────

function FieldWrapper({
  field,
  children,
}: {
  field: CalculatorField;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center gap-1.5">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          {field.label}
        </label>
        {field.helpText && (
          <div className="relative">
            <Info
              size={13}
              className="text-zinc-400 hover:text-zinc-600 cursor-help dark:hover:text-zinc-300"
            />
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-52 rounded-lg bg-zinc-900 px-3 py-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg">
              {field.helpText}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
