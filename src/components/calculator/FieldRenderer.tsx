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
  hideLabel?: boolean;
  compact?: boolean;
}

export function FieldRenderer({
  field,
  state,
  onValueChange,
  onUnitChange,
  theme,
  isMobile,
  hideLabel,
  compact,
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
      <FieldWrapper field={field} hideLabel={hideLabel}>
        <div className={`relative flex items-center transition-all duration-200 rounded-xl border-2 border-input bg-secondary hover:border-ring focus-within:bg-background ${theme.focusRing}`}>
          {/* Accent Line */}
          <div className={`absolute left-0 top-[3px] bottom-[3px] w-1 rounded-l-md transition-all duration-200 ${isFocused ? theme.activeBar : "bg-transparent"
            }`} />

          <select
            value={state.value}
            onChange={(e) => onValueChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full appearance-none bg-transparent px-3 pr-10 font-semibold text-foreground outline-none cursor-pointer ${
              compact ? "py-2 text-sm min-h-[36px]" : "py-3 px-4 text-base min-h-[46px]"
            }`}
          >
            {field.selectOptions?.map((opt) => (
              <option key={String(opt.value)} value={String(opt.value)} className="bg-popover text-popover-foreground">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-base">
            ▼
          </div>
        </div>
      </FieldWrapper>
    );
  }

  // Computed output field
  if (isComputed) {
    return (
      <FieldWrapper field={field} hideLabel={hideLabel}>
        <div className="flex items-stretch gap-2">
          <div
            className={`flex-1 flex items-center justify-between gap-3 rounded-2xl border-2 transition-all duration-300 ${
              compact ? "px-3 py-2 min-h-[42px] rounded-xl" : "px-5 py-4 min-h-[58px]"
            } ${state.error
              ? "border-destructive/40 bg-destructive/10 text-destructive"
              : `${theme.outputBg} ${theme.outputBorder} ${theme.glowShadow} text-foreground`
              }`}
          >
            <div className="flex-1 min-w-0 flex items-center gap-2">
              {field.prefix && (
                <span className={`text-muted-foreground font-medium self-center ${compact ? "text-sm" : ""}`}>{field.prefix}</span>
              )}
              <span className={`font-mono font-extrabold tracking-tight truncate ${
                compact ? "text-base md:text-lg" : "text-lg md:text-xl"
              } ${state.error ? "text-destructive" : `${theme.textAccent} ${theme.textAccentDark}`
                }`}>
                {state.error ? "—" : state.value || "—"}
              </span>
              {field.suffix && !state.error && (
                <span className="text-muted-foreground text-base font-semibold self-end mb-0.5">{field.suffix}</span>
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
                  className="flex items-center justify-center p-2 rounded-xl bg-background hover:bg-secondary border border-border hover:border-ring text-muted-foreground hover:text-foreground transition-all cursor-pointer active:scale-95 min-h-[36px] min-w-[36px]"
                  title="Copy result to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary animate-copy-pop">
                      <Check size={12} className="stroke-[3]" />
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
    <FieldWrapper field={field} hideLabel={hideLabel}>
      <div className="flex items-stretch gap-2">
        <div className={`relative flex-1 flex items-center transition-all duration-200 rounded-xl border-2 ${state.error
          ? "border-destructive/40 bg-destructive/10 focus-within:border-destructive focus-within:ring-4 focus-within:ring-destructive/20"
          : `border-input bg-secondary hover:border-ring focus-within:border-ring focus-within:bg-background ${theme.focusRing}`
          }`}>
          {/* Focus Accent Line */}
          <div className={`absolute left-0 top-[3px] bottom-[3px] w-1 rounded-l-md transition-all duration-200 ${isFocused && !state.error ? theme.activeBar : "bg-transparent"
            }`} />

          {/* Prefix */}
          {field.prefix && (
            <span className="pl-3.5 pr-1 text-base font-semibold text-muted-foreground select-none">
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
            className={`w-full bg-transparent px-3 text-foreground font-bold outline-none ${
              compact ? "py-2 text-sm min-h-[36px]" : "py-3 text-base min-h-[46px]"
            }`}
          />

          {/* Suffix */}
          {field.suffix && (
            <span className="pr-3.5 pl-1 text-base font-semibold text-muted-foreground select-none">
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
        <p className="mt-1 text-base text-destructive font-semibold">{state.error}</p>
      )}
    </FieldWrapper>
  );
}

// ─── Shared wrapper ─────────────────────────────────────────────────────────────

function FieldWrapper({
  field,
  hideLabel,
  children,
}: {
  field: CalculatorField;
  hideLabel?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      {!hideLabel && (
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-base font-semibold text-foreground/80">
            {field.label}
          </label>
          {field.helpText && (
            <div className="relative">
              <Info
                size={13}
                className="text-muted-foreground hover:text-foreground cursor-help"
              />
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-52 rounded-xl bg-popover border border-border px-3 py-2 text-base text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg">
                {field.helpText}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
              </div>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
