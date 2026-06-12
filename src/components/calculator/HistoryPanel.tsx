"use client";

import { useCalcStore } from "@/store/calculatorStore";
import type { HistoryEntry } from "@/types/calculator";

interface Props {
  slug: string;
  onRestore: (inputs: Record<string, string>) => void;
}

function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}

function summarize(record: Record<string, string>, limit = 3): string {
  return Object.entries(record)
    .slice(0, limit)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");
}

export function HistoryPanel({ slug, onRestore }: Props) {
  const calcHistory = useCalcStore((s) => s.calcHistory);
  const entries: HistoryEntry[] = calcHistory[slug] ?? [];

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 text-center py-10">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          No history yet. Run a calculation to see it here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-3">
      <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        Calculation History
      </h3>
      <div className="space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-start justify-between gap-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 p-3"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mb-1">
                {formatRelativeTime(entry.timestamp)}
              </p>
              <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 truncate">
                Inputs: {summarize(entry.inputs)}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                Results: {summarize(entry.outputs)}
              </p>
            </div>
            <button
              onClick={() => onRestore(entry.inputs)}
              className="shrink-0 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all cursor-pointer"
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
