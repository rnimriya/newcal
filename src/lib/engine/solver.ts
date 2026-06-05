/**
 * Core math solver using math.js.
 * Evaluates math.js expression strings in a scoped variable environment.
 * Returns null on error (division by zero, undefined vars, etc.)
 */
import { create, all } from "mathjs/number";
import type { MathJsInstance } from "mathjs";

// Singleton math instance with all plugins
const math = create(all) as MathJsInstance;

// Extend scope with useful constants
const BASE_SCOPE: Record<string, unknown> = {
  PI: Math.PI,
  E: Math.E,
};

/**
 * Safely evaluates a math.js expression with a variable scope.
 * Returns the numeric/string result, or null if evaluation fails.
 */
export function evalExpression(
  expression: string,
  scope: Record<string, unknown>
): number | string | null {
  try {
    const result = math.evaluate(expression, { ...BASE_SCOPE, ...scope });
    if (typeof result === "number" && !isFinite(result)) return null;
    return result as number | string;
  } catch {
    return null;
  }
}

/**
 * Builds a dependency graph from formula definitions.
 * Returns a map of fieldId → set of fieldIds it directly depends on.
 */
export function buildDependencyGraph(
  formulas: Record<string, string>,
  allFieldIds: string[]
): Record<string, Set<string>> {
  const graph: Record<string, Set<string>> = {};

  for (const [fieldId, formula] of Object.entries(formulas)) {
    const deps = new Set<string>();
    for (const otherId of allFieldIds) {
      // Simple token-based check — fieldId appears as word boundary in formula
      const regex = new RegExp(`\\b${otherId}\\b`);
      if (regex.test(formula) && otherId !== fieldId) {
        deps.add(otherId);
      }
    }
    graph[fieldId] = deps;
  }

  return graph;
}

/**
 * Topological sort of computed fields so each formula is evaluated
 * only after all its dependencies are already resolved.
 */
export function topoSort(
  graph: Record<string, Set<string>>,
  computedIds: string[]
): string[] {
  const visited = new Set<string>();
  const order: string[] = [];

  function visit(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    const deps = graph[id] ?? new Set();
    for (const dep of deps) {
      if (computedIds.includes(dep)) visit(dep);
    }
    order.push(id);
  }

  for (const id of computedIds) visit(id);
  return order;
}

/**
 * Convert a raw numeric value from one unit to the base unit using the
 * toBase expression defined in the schema.
 */
export function convertToBase(value: number, toBaseExpr: string): number {
  const result = evalExpression(toBaseExpr.replace(/\bx\b/g, String(value)), {});
  return typeof result === "number" ? result : value;
}

/**
 * Convert a base-unit value back to the display unit using the fromBase expression.
 */
export function convertFromBase(value: number, fromBaseExpr: string): number {
  const result = evalExpression(fromBaseExpr.replace(/\bx\b/g, String(value)), {});
  return typeof result === "number" ? result : value;
}
