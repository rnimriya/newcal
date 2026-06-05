"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CalcStore, CalculatorSchema } from "@/types/calculator";

export const useCalcStore = create<CalcStore>()(
  persist(
    (set) => ({
      activeSchema: null,
      fieldStates: {},
      isOffline: false,
      unitSystem: "metric",
      savedCalculators: [],

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
    }),
    {
      name: "omni-calc-store",
      partialize: (s) => ({
        savedCalculators: s.savedCalculators,
        unitSystem: s.unitSystem,
      }),
    }
  )
);
