"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CalcStore, CalculatorSchema, HistoryEntry } from "@/types/calculator";

export { type HistoryEntry } from "@/types/calculator";

export const useCalcStore = create<CalcStore>()(
  persist(
    (set) => ({
      activeSchema: null,
      fieldStates: {},
      isOffline: false,
      unitSystem: "metric",
      savedCalculators: [],
      calcHistory: {},
      recentlyViewed: [],
      theme: "system",
      preferredUnits: {},

      setSchema: (schema: CalculatorSchema) =>
        set({ activeSchema: schema, fieldStates: {} }),

      setFieldValue: (fieldId, value) =>
        set((s) => ({
          fieldStates: {
            ...s.fieldStates,
            [fieldId]: { ...s.fieldStates[fieldId], value, computed: false },
          },
        })),

      setFieldUnit: (fieldId, unit) =>
        set((s) => ({
          fieldStates: {
            ...s.fieldStates,
            [fieldId]: { ...s.fieldStates[fieldId], unit },
          },
        })),

      setUnitSystem: (system) => set({ unitSystem: system }),

      saveCalculator: (slug) =>
        set((s) => ({
          savedCalculators: s.savedCalculators.includes(slug)
            ? s.savedCalculators
            : [...s.savedCalculators, slug],
        })),

      removeCalculator: (slug) =>
        set((s) => ({
          savedCalculators: s.savedCalculators.filter((x) => x !== slug),
        })),

      setOffline: (v) => set({ isOffline: v }),

      addHistoryEntry: (slug: string, entry: HistoryEntry) =>
        set((s) => {
          const existing = s.calcHistory[slug] ?? [];
          const updated = [entry, ...existing].slice(0, 20);
          return { calcHistory: { ...s.calcHistory, [slug]: updated } };
        }),

      addRecentlyViewed: (slug: string) =>
        set((s) => {
          const filtered = s.recentlyViewed.filter((x) => x !== slug);
          return { recentlyViewed: [slug, ...filtered].slice(0, 8) };
        }),

      setTheme: (theme) => set({ theme }),

      setPreferredUnit: (slug, fieldId, unit) =>
        set((s) => ({
          preferredUnits: {
            ...s.preferredUnits,
            [`${slug}_${fieldId}`]: unit,
          },
        })),
    }),
    {
      name: "omni-calc-store",
      partialize: (s) => ({
        savedCalculators: s.savedCalculators,
        unitSystem: s.unitSystem,
        calcHistory: s.calcHistory,
        recentlyViewed: s.recentlyViewed,
        theme: s.theme,
        preferredUnits: s.preferredUnits,
      }),
    }
  )
);
