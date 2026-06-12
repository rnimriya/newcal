"use client";

/**
 * ExportButton — dropdown with "Export CSV" and "Copy as Text" options.
 */

import { useState, useRef, useEffect } from "react";
import { Download, ChevronDown, Copy, Check } from "lucide-react";
import type { CalculatorSchema, FieldState } from "@/types/calculator";
import { exportAsCSV, exportAsText } from "@/lib/exportResults";
import type { CategoryTheme } from "./theme";

interface Props {
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;
  theme: CategoryTheme;
}

export function ExportButton({ schema, fields, theme }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleExportCSV() {
    exportAsCSV(schema, fields);
    setOpen(false);
  }

  function handleCopyText() {
    const text = exportAsText(schema, fields);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded-xl p-2 text-zinc-400 hover:text-zinc-700 ${theme.hoverBg} dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-90 cursor-pointer`}
        title="Export Results"
      >
        {copied ? (
          <Check size={19} className="text-emerald-500" />
        ) : (
          <Download size={19} />
        )}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-30 w-44 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden">
          <button
            onClick={handleExportCSV}
            className="flex w-full items-center gap-2 px-4 py-3 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Download size={13} className={theme.textAccent} />
            Export CSV
          </button>
          <div className="border-t border-zinc-100 dark:border-zinc-800" />
          <button
            onClick={handleCopyText}
            className="flex w-full items-center gap-2 px-4 py-3 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Copy size={13} className={theme.textAccent} />
            Copy as Text
          </button>
        </div>
      )}
    </div>
  );
}
