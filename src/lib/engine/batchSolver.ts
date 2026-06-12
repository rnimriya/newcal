/**
 * batchSolver — runs the formula graph over many rows of input data.
 * Used by BatchProcessor to evaluate a CSV-uploaded dataset.
 */

import type { CalculatorSchema } from "@/types/calculator";
import {
  evalExpression,
  buildDependencyGraph,
  topoSort,
  convertToBase,
  convertFromBase,
} from "./solver";

/**
 * Processes an array of input rows through the calculator formula graph.
 * Each row is a map of fieldId → raw string value (as typed / from CSV).
 * Returns each row merged with computed output values.
 */
export function runBatch(
  schema: CalculatorSchema,
  rows: Record<string, string>[]
): Record<string, string>[] {
  // Identify which fields are computed (have a formula)
  const computedIds = schema.fields
    .filter((f) => f.type === "computed")
    .map((f) => f.id);

  const allIds = schema.fields.map((f) => f.id);
  const depGraph = buildDependencyGraph(schema.formulas, allIds);
  const orderedIds = topoSort(depGraph, computedIds);

  return rows.map((row) => {
    // Build numeric scope from input values
    const scope: Record<string, unknown> = {};

    for (const field of schema.fields) {
      const raw = parseFloat(row[field.id] ?? "");
      if (!isNaN(raw)) {
        // Apply toBase conversion for the default unit
        const defaultUnitValue = field.defaultUnit ?? field.units?.[0]?.value ?? "";
        const unitDef = field.units?.find((u) => u.value === defaultUnitValue);
        const base = unitDef ? convertToBase(raw, unitDef.toBase) : raw;
        scope[field.id] = base;
      } else if (row[field.id] !== undefined && row[field.id] !== "") {
        scope[field.id] = row[field.id];
      }
    }

    const result: Record<string, string> = { ...row };

    for (const id of orderedIds) {
      const formula = schema.formulas[id];
      if (!formula) continue;

      const value = evalExpression(formula, scope);
      const field = schema.fields.find((f) => f.id === id);

      if (value === null || value === undefined) {
        result[id] = "";
        continue;
      }

      if (typeof value === "number") {
        // Convert back from base to default display unit
        const defaultUnitValue = field?.defaultUnit ?? field?.units?.[0]?.value ?? "";
        const unitDef = field?.units?.find((u) => u.value === defaultUnitValue);
        const displayValue = unitDef ? convertFromBase(value, unitDef.fromBase) : value;

        const precision = field?.precision;
        const rounded =
          precision !== undefined
            ? parseFloat(displayValue.toFixed(precision))
            : displayValue;

        // Feed base value back into scope for downstream computed fields
        scope[id] = value;
        result[id] = String(rounded);
      } else {
        scope[id] = value;
        result[id] = String(value);
      }
    }

    return result;
  });
}
