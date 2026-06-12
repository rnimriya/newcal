"use client";

/**
 * BatchProcessor — CSV upload, batch solve, and results download.
 * No external CSV library; parsing is done with split() as specified.
 */

import { useState, useRef } from "react";
import { TableProperties, Download, ChevronDown } from "lucide-react";
import type { CalculatorSchema } from "@/types/calculator";
import { runBatch } from "@/lib/engine/batchSolver";
import type { CategoryTheme } from "./theme";

interface Props {
  schema: CalculatorSchema;
  theme: CategoryTheme;
}

function downloadBlob(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function BatchProcessor({ schema, theme }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Record<string, string>[] | null>(null);
  const [rowCount, setRowCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const inputFields = schema.fields.filter((f) => f.type !== "computed");
  const computedFields = schema.fields.filter((f) => f.type === "computed");
  const allFields = schema.fields;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = (ev.target?.result as string) ?? "";
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);

        if (lines.length < 2) {
          setError("CSV must have a header row and at least one data row.");
          return;
        }

        const headers = lines[0].split(",").map((h) => h.trim());
        const rows: Record<string, string>[] = lines.slice(1).map((line) => {
          const cells = line.split(",").map((c) => c.trim());
          const row: Record<string, string> = {};
          headers.forEach((h, i) => {
            row[h] = cells[i] ?? "";
          });
          return row;
        });

        const processed = runBatch(schema, rows);
        setResults(processed);
        setRowCount(processed.length);
      } catch {
        setError("Failed to parse the CSV file. Please check the format.");
      }
    };
    reader.readAsText(file);
  }

  function handleDownloadTemplate() {
    const headers = inputFields.map((f) => f.id).join(",");
    downloadBlob(headers + "\n", `${schema.slug}-template.csv`, "text/csv;charset=utf-8;");
  }

  function handleDownloadResults() {
    if (!results) return;
    const headers = allFields.map((f) => f.id).join(",");
    const rows = results.map((row) => allFields.map((f) => row[f.id] ?? "").join(","));
    const csv = [headers, ...rows].join("\n");
    downloadBlob(csv, `${schema.slug}-batch-results.csv`, "text/csv;charset=utf-8;");
  }

  const previewRows = results?.slice(0, 5) ?? [];

  return (
    <div className={`rounded-2xl border border-border bg-card transition-all ${theme.glowShadow} overflow-hidden`}>
      {/* Header toggle */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-secondary/50 transition-colors`}
      >
        <div className="flex items-center gap-2">
          <TableProperties size={16} className={theme.textAccent} />
          <span className="text-base font-bold text-foreground">Batch Process</span>
          {rowCount > 0 && (
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${theme.badge}`}>
              {rowCount} rows
            </span>
          )}
        </div>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
          {/* Action row */}
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={handleDownloadTemplate}
              className="flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-base font-bold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Download size={13} />
              Download Template
            </button>

            <label className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-base font-bold text-white cursor-pointer transition-colors ${theme.buttonAccent}`}>
              <TableProperties size={13} />
              Upload CSV
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>

            {results && (
              <button
                onClick={handleDownloadResults}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-base font-bold text-white transition-colors ${theme.buttonAccent}`}
              >
                <Download size={13} />
                Download Results
              </button>
            )}
          </div>

          {error && (
            <p className="text-base text-destructive font-semibold bg-destructive/10 rounded-xl px-3 py-2">
              {error}
            </p>
          )}

          {/* Expected columns hint */}
          <div className="text-base text-muted-foreground">
            <span className="font-bold">Expected input columns: </span>
            {inputFields.map((f) => f.id).join(", ")}
          </div>

          {/* Preview table */}
          {previewRows.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-[11px] font-mono">
                <thead className={`${theme.bgSubtle}`}>
                  <tr>
                    {allFields.map((f) => (
                      <th
                        key={f.id}
                        className={`px-3 py-2 text-left font-black uppercase tracking-wider whitespace-nowrap ${f.type === "computed" ? theme.textAccent : "text-muted-foreground"
                          }`}
                      >
                        {f.id}
                        {f.type === "computed" && (
                          <span className="ml-1 text-[9px] opacity-60">(out)</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {previewRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-border even:bg-secondary/30"
                    >
                      {allFields.map((f) => (
                        <td
                          key={f.id}
                          className={`px-3 py-2 whitespace-nowrap ${f.type === "computed"
                            ? `font-bold ${theme.textAccent}`
                            : "text-foreground/80"
                            }`}
                        >
                          {row[f.id] || "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {results && results.length > 5 && (
                <div className="px-3 py-2 text-[11px] text-muted-foreground border-t border-border">
                  Showing 5 of {results.length} rows. Download to see all.
                </div>
              )}
            </div>
          )}

          {results && previewRows.length === 0 && (
            <p className="text-base text-muted-foreground">No data rows found.</p>
          )}
        </div>
      )}
    </div>
  );
}
