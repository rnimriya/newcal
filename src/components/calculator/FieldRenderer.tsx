"use client";

import { Info } from "lucide-react";
import type { CalculatorField, FieldState } from "@/types/calculator";
import { UnitSelector } from "./UnitSelector";

interface Props {
  field: CalculatorField;
  state: FieldState;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: string) => void;
  isMobile?: boolean;
}

export function FieldRenderer({
  field,
  state,
  onValueChange,
  onUnitChange,
  isMobile,
}: Props) {
  const isComputed = field.type === "computed";
  const hasUnits = field.units && field.units.length > 0;

  // Select/dropdown field
  if (field.type === "select") {
    return (
      <FieldWrapper field={field}>
        <div className="relative">
          <select
            value={state.value}
            onChange={(e) => onValueChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 pr-10 text-sm text-zinc-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white min-h-[48px]"
          >
            {field.selectOptions?.map((opt) => (
              <option key={String(opt.value)} value={String(opt.value)}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
            ▾
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
            className={`flex-1 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold min-h-[48px] ${
              state.error
                ? "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
                : "border-indigo-100 bg-indigo-50 text-indigo-800 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300"
            }`}
          >
            {field.prefix && (
              <span className="text-indigo-400 font-normal">{field.prefix}</span>
            )}
            <span className="flex-1">
              {state.error ? "—" : state.value || "—"}
            </span>
            {field.suffix && !state.error && (
              <span className="text-indigo-400 text-xs font-normal">{field.suffix}</span>
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
        <div className="relative flex-1">
          {field.prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400 select-none">
              {field.prefix}
            </span>
          )}
          <input
            type="text"
            inputMode="decimal"
            value={state.value}
            onChange={(e) => onValueChange(e.target.value)}
            placeholder={field.placeholder ?? ""}
            min={field.constraint?.min}
            max={field.constraint?.max}
            step={field.constraint?.step}
            className={`w-full rounded-xl border py-3 text-sm text-zinc-900 outline-none transition-all focus:ring-2 focus:ring-indigo-100 dark:text-white min-h-[48px] ${
              field.prefix ? "pl-8 pr-4" : "px-4"
            } ${
              state.error
                ? "border-red-300 bg-red-50 focus:border-red-400 dark:border-red-700 dark:bg-red-950"
                : "border-zinc-200 bg-white focus:border-indigo-400 dark:border-zinc-700 dark:bg-zinc-900"
            }`}
          />
          {field.suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400 select-none">
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
        <p className="mt-1 text-xs text-red-500">{state.error}</p>
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
      <div className="mb-1.5 flex items-center gap-1.5">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
