"use client";

import { useCalcStore } from "@/store/calculatorStore";
import { Globe, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const { unitSystem, setUnitSystem, savedCalculators, removeCalculator } =
    useCalcStore();

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Settings</h1>

      {/* Unit System */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-3 mb-4">
          <Globe size={18} className="text-zinc-500" />
          <h2 className="font-semibold text-zinc-900 dark:text-white">Unit System</h2>
        </div>
        <div className="flex gap-2">
          {(["metric", "imperial"] as const).map((sys) => (
            <button
              key={sys}
              onClick={() => setUnitSystem(sys)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-medium capitalize transition-all ${
                unitSystem === sys
                  ? "bg-indigo-600 text-white shadow"
                  : "border border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              {sys === "metric" ? "🌍 Metric (SI)" : "🇺🇸 Imperial (US)"}
            </button>
          ))}
        </div>
      </section>

      {/* Clear saved */}
      {savedCalculators.length > 0 && (
        <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm dark:border-red-900/30 dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 size={18} className="text-red-500" />
            <h2 className="font-semibold text-zinc-900 dark:text-white">Clear Data</h2>
          </div>
          <button
            onClick={() => savedCalculators.forEach(removeCalculator)}
            className="w-full rounded-xl border border-red-200 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors dark:border-red-800 dark:hover:bg-red-950"
          >
            Clear {savedCalculators.length} saved calculator{savedCalculators.length !== 1 ? "s" : ""}
          </button>
        </section>
      )}

      <p className="text-center text-xs text-zinc-400">
        CalcUnit · Schema-driven calculator platform
      </p>
    </div>
  );
}
