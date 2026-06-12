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
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm text-center py-10">
        <p className="text-base text-muted-foreground">
          No history yet. Run a calculation to see it here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3">
      <h3 className="text-base font-black uppercase tracking-wider text-muted-foreground">
        Calculation History
      </h3>
      <div className="space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-start justify-between gap-3 rounded-xl border border-border bg-secondary/50 p-3"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-muted-foreground mb-1">
                {formatRelativeTime(entry.timestamp)}
              </p>
              <p className="text-base font-semibold text-foreground/80 truncate">
                Inputs: {summarize(entry.inputs)}
              </p>
              <p className="text-base text-muted-foreground truncate">
                Results: {summarize(entry.outputs)}
              </p>
            </div>
            <button
              onClick={() => onRestore(entry.inputs)}
              className="shrink-0 rounded-xl border border-border bg-background px-2.5 py-1.5 text-base font-semibold text-muted-foreground hover:border-primary/50 hover:text-primary transition-all cursor-pointer"
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
