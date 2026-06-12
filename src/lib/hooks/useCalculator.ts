"use client";

import { useCallback, useEffect, useReducer, useMemo, useTransition } from "react";
import type {
  CalculatorSchema,
  CalculatorField,
  FieldState,
} from "@/types/calculator";
import {
  evalExpression,
  buildDependencyGraph,
  topoSort,
  convertToBase,
  convertFromBase,
} from "@/lib/engine/solver";

// ─── State Types ───────────────────────────────────────────────────────────────

interface HookState {
  fields: Record<string, FieldState>;
  userLocked: Set<string>;
}

type HookAction =
  | {
      type: "INIT";
      schema: CalculatorSchema;
      initialValues?: Record<string, string>;
      preferredUnits?: Record<string, string>;
      slug?: string;
    }
  | { type: "SET_VALUE"; fieldId: string; value: string }
  | { type: "SET_UNIT"; fieldId: string; unit: string; convertedValue: string }
  | { type: "LOAD_EXAMPLE"; inputs: Record<string, number>; schema: CalculatorSchema };

// ─── Helpers ───────────────────────────────────────────────────────────────────

function defaultUnit(field: CalculatorField): string {
  return field.defaultUnit ?? field.units?.[0]?.value ?? "";
}

function initFieldStates(
  schema: CalculatorSchema,
  preferredUnits?: Record<string, string>,
  slug?: string
): Record<string, FieldState> {
  const states: Record<string, FieldState> = {};
  for (const field of schema.fields) {
    const key = slug ? `${slug}_${field.id}` : undefined;
    const preferredUnit = key && preferredUnits ? preferredUnits[key] : undefined;
    states[field.id] = {
      value: field.defaultValue !== undefined ? String(field.defaultValue) : "",
      unit: preferredUnit ?? defaultUnit(field),
      computed: field.type === "computed",
    };
  }
  return states;
}

function runSolver(
  schema: CalculatorSchema,
  fields: Record<string, FieldState>,
  orderedIds: string[]
): Record<string, FieldState> {
  const scope: Record<string, unknown> = {};
  for (const field of schema.fields) {
    const state = fields[field.id];
    const raw = parseFloat(state.value);
    if (!isNaN(raw)) {
      const unitDef = field.units?.find((u) => u.value === state.unit);
      const base = unitDef ? convertToBase(raw, unitDef.toBase) : raw;
      scope[field.id] = base;
    } else if (typeof state.value === "string" && state.value !== "") {
      scope[field.id] = state.value;
    }
  }

  const next = { ...fields };

  for (const id of orderedIds) {
    const formula = schema.formulas[id];
    if (!formula) continue;

    const result = evalExpression(formula, scope as Record<string, unknown>);
    const field = schema.fields.find((f) => f.id === id);

    if (result === null || result === undefined) {
      next[id] = { ...next[id], value: "", error: "Cannot compute" };
      continue;
    }

    if (typeof result === "number") {
      const unitDef = field?.units?.find((u) => u.value === next[id].unit);
      const displayValue = unitDef
        ? convertFromBase(result, unitDef.fromBase)
        : result;

      const precision = field?.precision;
      const rounded =
        precision !== undefined
          ? parseFloat(displayValue.toFixed(precision))
          : displayValue;

      scope[id] = result;
      next[id] = { ...next[id], value: String(rounded), error: undefined };
    } else {
      scope[id] = result;
      next[id] = { ...next[id], value: String(result), error: undefined };
    }
  }

  return next;
}

// ─── Reducer ───────────────────────────────────────────────────────────────────

function reducer(state: HookState, action: HookAction): HookState {
  switch (action.type) {
    case "INIT": {
      const baseFields = initFieldStates(action.schema, action.preferredUnits, action.slug);
      const userLocked = new Set(
        action.schema.fields
          .filter((f) => f.type !== "computed")
          .map((f) => f.id)
      );
      if (action.initialValues) {
        for (const [id, val] of Object.entries(action.initialValues)) {
          if (baseFields[id] !== undefined) {
            baseFields[id] = { ...baseFields[id], value: val };
          }
        }
      }
      return { fields: baseFields, userLocked };
    }

    case "SET_VALUE": {
      const { fieldId, value } = action;
      const next: Record<string, FieldState> = {
        ...state.fields,
        [fieldId]: { ...state.fields[fieldId], value, error: undefined },
      };
      const locked = new Set(state.userLocked);
      locked.add(fieldId);
      return { fields: next, userLocked: locked };
    }

    case "SET_UNIT": {
      const { fieldId, unit, convertedValue } = action;
      const field_state = state.fields[fieldId];
      return {
        ...state,
        fields: {
          ...state.fields,
          [fieldId]: { ...field_state, unit, value: convertedValue },
        },
      };
    }

    case "LOAD_EXAMPLE": {
      const { inputs, schema } = action;
      const nextFields = { ...state.fields };
      const locked = new Set<string>();
      for (const [id, val] of Object.entries(inputs)) {
        if (nextFields[id]) {
          const fieldDef = schema.fields.find((f) => f.id === id);
          const unit = fieldDef ? defaultUnit(fieldDef) : nextFields[id].unit;
          nextFields[id] = { ...nextFields[id], value: String(val), unit };
          locked.add(id);
        }
      }
      return { fields: nextFields, userLocked: locked };
    }
  }
}

// ─── Public Hook ───────────────────────────────────────────────────────────────

export interface UseCalculatorReturn {
  fields: Record<string, FieldState>;
  setValue: (fieldId: string, value: string) => void;
  setUnit: (fieldId: string, unit: string) => void;
  loadExample: (inputs: Record<string, number>) => void;
  reset: () => void;
}

export function useCalculator(
  schema: CalculatorSchema,
  options?: {
    initialValues?: Record<string, string>;
    slug?: string;
    preferredUnits?: Record<string, string>;
  }
): UseCalculatorReturn {
  const initialValues = options?.initialValues;
  const slug = options?.slug;
  const preferredUnits = options?.preferredUnits;

  const [state, dispatch] = useReducer(reducer, null, () =>
    reducer(
      { fields: {}, userLocked: new Set() },
      { type: "INIT", schema, initialValues, preferredUnits, slug }
    )
  );

  const [, startTransition] = useTransition();

  useEffect(() => {
    dispatch({ type: "INIT", schema, preferredUnits, slug });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema]);

  const depGraph = useMemo(() => {
    const allIds = schema.fields.map((f) => f.id);
    return buildDependencyGraph(schema.formulas, allIds);
  }, [schema.formulas, schema.fields]);

  const orderedIds = useMemo(() => {
    const computedIds = schema.fields
      .filter((f) => f.type === "computed" && !state.userLocked.has(f.id))
      .map((f) => f.id);
    return topoSort(depGraph, computedIds);
  }, [schema.fields, state.userLocked, depGraph]);

  const solvedFields = useMemo(() => {
    return runSolver(schema, state.fields, orderedIds);
  }, [schema, state.fields, orderedIds]);

  const setValue = useCallback((fieldId: string, value: string) => {
    startTransition(() => {
      dispatch({ type: "SET_VALUE", fieldId, value });
    });
  }, []);

  const setUnit = useCallback(
    (fieldId: string, unit: string) => {
      startTransition(() => {
        const fieldDef = schema.fields.find((f) => f.id === fieldId);
        const currentState = state.fields[fieldId];
        let convertedValue = currentState?.value ?? "";

        if (fieldDef?.units && currentState) {
          const raw = parseFloat(currentState.value);
          if (!isNaN(raw)) {
            const oldUnitDef = fieldDef.units.find((u) => u.value === currentState.unit);
            const newUnitDef = fieldDef.units.find((u) => u.value === unit);
            if (oldUnitDef && newUnitDef) {
              const baseValue = convertToBase(raw, oldUnitDef.toBase);
              const newDisplayValue = convertFromBase(baseValue, newUnitDef.fromBase);
              convertedValue = parseFloat(newDisplayValue.toPrecision(6)).toString();
            }
          }
        }

        dispatch({ type: "SET_UNIT", fieldId, unit, convertedValue });
      });
    },
    [schema.fields, state.fields]
  );

  const loadExample = useCallback(
    (inputs: Record<string, number>) => {
      startTransition(() => {
        dispatch({ type: "LOAD_EXAMPLE", inputs, schema });
      });
    },
    [schema]
  );

  const reset = useCallback(() => {
    startTransition(() => {
      dispatch({ type: "INIT", schema });
    });
  }, [schema]);

  return { fields: solvedFields, setValue, setUnit, loadExample, reset };
}
