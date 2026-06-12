/**
 * exportResults — utilities for exporting calculator results as CSV or text.
 */

import type { CalculatorSchema, FieldState } from "@/types/calculator";

/**
 * Formats a field's display value including prefix/suffix.
 */
function formatValue(
  field: { prefix?: string; suffix?: string; label: string },
  state: FieldState
): string {
  if (!state.value) return "";
  const prefix = field.prefix ?? "";
  const suffix = field.suffix ? ` ${field.suffix}` : "";
  return `${prefix}${state.value}${suffix}`;
}

/**
 * Triggers a browser download of a text blob.
 */
function downloadBlob(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Builds and downloads a CSV with two columns: Field, Value.
 */
export function exportAsCSV(
  schema: CalculatorSchema,
  fields: Record<string, FieldState>
): void {
  const rows: string[] = ["Field,Value"];

  for (const field of schema.fields) {
    const state = fields[field.id];
    if (!state) continue;
    const label = `"${field.label.replace(/"/g, '""')}"`;
    const value = `"${formatValue(field, state).replace(/"/g, '""')}"`;
    rows.push(`${label},${value}`);
  }

  downloadBlob(rows.join("\n"), `${schema.slug}-results.csv`, "text/csv;charset=utf-8;");
}

/**
 * Returns a plain-text formatted results block.
 */
export function exportAsText(
  schema: CalculatorSchema,
  fields: Record<string, FieldState>
): string {
  const separator = "─".repeat(33);
  const lines: string[] = [
    `CalcUnit — ${schema.name}`,
    separator,
  ];

  const inputFields = schema.fields.filter((f) => f.type !== "computed");
  const outputFields = schema.fields.filter((f) => f.type === "computed");

  if (inputFields.length > 0) {
    lines.push("INPUTS");
    for (const field of inputFields) {
      const state = fields[field.id];
      if (!state) continue;
      const unit = state.unit ? ` ${state.unit}` : "";
      lines.push(`  ${field.label}: ${state.value || "—"}${unit}`);
    }
    lines.push("");
  }

  if (outputFields.length > 0) {
    lines.push("RESULTS");
    for (const field of outputFields) {
      const state = fields[field.id];
      if (!state) continue;
      lines.push(`  ${field.label}: ${formatValue(field, state) || "—"}`);
    }
  }

  lines.push(separator);
  lines.push(`Calculated at ${new Date().toLocaleString()}`);

  return lines.join("\n");
}
