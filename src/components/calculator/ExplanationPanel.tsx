"use client";

import { useState } from "react";
import type { CalculatorSchema, FieldState } from "@/types/calculator";
import dynamic from "next/dynamic";
import { BookOpen, FlaskConical, BarChart2 } from "lucide-react";
import type { CategoryTheme } from "./theme";

const FormulaChart = dynamic(
  () => import("@/components/charts/FormulaChart").then((mod) => mod.FormulaChart),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 h-[240px] flex items-center justify-center text-sm text-zinc-400 animate-pulse">
        Loading chart...
      </div>
    ),
  }
);

type Tab = "explanation" | "derivation" | "chart";

interface Props {
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;
  theme: CategoryTheme;
}

export function ExplanationPanel({ schema, fields, theme }: Props) {
  const [tab, setTab] = useState<Tab>("explanation");

  const inputs = schema.fields.filter((f) => f.type !== "computed");
  const outputs = schema.fields.filter((f) => f.type === "computed");

  // Determine dynamic chart configuration if missing
  let min = 0;
  let max = 10;
  if (inputs.length > 0) {
    const targetInput = inputs[0];
    const defVal = targetInput.defaultValue;
    let defNum = 1;
    if (typeof defVal === "number") {
      defNum = defVal;
    } else if (typeof defVal === "string") {
      const parsed = parseFloat(defVal);
      if (!isNaN(parsed)) defNum = parsed;
    }
    
    max = defNum * 2;
    if (defNum < 0) {
      min = defNum * 2;
      max = 0;
    } else if (defNum === 0) {
      min = 0;
      max = 10;
    }
    const constraint = targetInput.constraint;
    if (constraint?.min !== undefined) min = constraint.min;
    if (constraint?.max !== undefined) max = constraint.max;
  }

  const enhancedChart = schema.chart || (inputs.length > 0 && outputs.length > 0 ? {
    xAxisField: inputs[0].id,
    yAxisField: outputs[0].id,
    xRange: [min, max] as [number, number],
    points: 50,
    label: `${outputs[0].label.split(" (")[0]} vs ${inputs[0].label.split(" (")[0]}`,
  } : undefined);

  const enhancedSchema: CalculatorSchema = {
    ...schema,
    chart: enhancedChart,
  };

  const isGenericExplanation = (text?: string) => {
    if (!text) return true;
    const clean = text.toLowerCase().trim();
    return (
      clean.includes("performs mathematical evaluation") ||
      (clean.includes("calculates the") && clean.includes("standard mathematical model.")) ||
      clean === ""
    );
  };

  const isGenericDerivation = (text?: string) => {
    if (!text) return true;
    const clean = text.toLowerCase().trim();
    return (
      clean.includes("standard mathematical model.") ||
      clean === "" ||
      clean.includes("_no derivation provided_") ||
      clean.includes("no derivation")
    );
  };

  const getEnhancedExplanation = () => {
    if (!isGenericExplanation(schema.explanation)) {
      return schema.explanation!;
    }

    const inputDesc = inputs
      .map((f) => `- **${f.label.split(" (")[0]}**: ${f.helpText || `Input value representing ${f.label.toLowerCase()}`}`)
      .join("\n");
    const outputDesc = outputs
      .map((f) => `- **${f.label.split(" (")[0]}**: ${f.helpText || `Calculated outcome representing ${f.label.toLowerCase()}`}`)
      .join("\n");

    const steps = inputs
      .map((f, i) => `${i + 1}. Enter the value for **${f.label.split(" (")[0]}** (default value is \`${f.defaultValue ?? 1}\`).`)
      .join("\n");
    const solveStep = `${inputs.length + 1}. The calculator will immediately apply the corresponding formula to compute the **${outputs[0]?.label.split(" (")[0]}**.`;

    return `## How it works

The **${schema.name}** uses standard math to compute the result from your inputs.

### What each field does
#### Inputs
${inputDesc}

#### Outputs
${outputDesc}

---

### Step-by-step
${steps}
${solveStep}

The result updates as soon as you change any field.`;
  };

  const getEnhancedDerivation = () => {
    if (!isGenericDerivation(schema.derivation)) {
      return schema.derivation!;
    }

    const formulasBlock = Object.entries(schema.formulas)
      .map(([id, expr]) => {
        const field = schema.fields.find((f) => f.id === id);
        return `#### ${field?.label || id}\n$$\n${expr}\n$$`;
      })
      .join("\n\n");

    return `## Formula

Here is the math behind this calculator:

${formulasBlock}

### How it evaluates
1. You fill in the input fields with your values.
2. The calculator checks which fields depend on others and runs them in the right order.
3. The result is rounded to a useful number of decimal places.`;
  };

  const hasChart = !!enhancedChart;
  const tabs = [
    { id: "explanation" as const, label: "How it works", icon: BookOpen },
    { id: "derivation" as const,  label: "Formula",      icon: FlaskConical },
    ...(hasChart ? [{ id: "chart" as const, label: "Chart", icon: BarChart2 }] : []),
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Tab bar */}
      <div className="flex gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all cursor-pointer ${
              tab === id
                ? theme.tabActive
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "chart" && hasChart && (
        <FormulaChart schema={enhancedSchema} fields={fields} />
      )}

      {tab !== "chart" && (
        <div className={`rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all ${theme.glowShadow}`}>
          <MarkdownRenderer
            content={tab === "explanation" ? getEnhancedExplanation() : getEnhancedDerivation()}
            theme={theme}
          />
        </div>
      )}
    </div>
  );
}

// ─── Minimal Markdown renderer (headings, bold, lists, code, tables) ──────────

function MarkdownRenderer({ content, theme }: { content: string; theme: CategoryTheme }) {
  // Pre-process: collapse multi-line $$\nformula\n$$ into single $$formula$$ tokens
  const normalized = content.replace(/\$\$\s*\n([\s\S]*?)\n\s*\$\$/g, (_, formula) => `$$${formula.trim()}$$`);
  const lines = normalized.split("\n");

  return (
    <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
      {lines.map((line, i) => {
        if (line.startsWith("## "))
          return <h2 key={i} className="text-base font-bold mt-4 mb-2 text-zinc-900 dark:text-white">{line.slice(3)}</h2>;
        if (line.startsWith("### "))
          return <h3 key={i} className="text-sm font-semibold mt-3 mb-1.5 text-zinc-850 dark:text-zinc-200">{line.slice(4)}</h3>;
        if (line.startsWith("#### "))
          return <h4 key={i} className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-2.5 mb-1">{line.slice(5)}</h4>;
        if (line.startsWith("| ")) {
          // Simple table row
          const cells = line.split("|").filter((c) => c.trim() !== "");
          const isHeader = lines[i + 1]?.startsWith("|---");
          const isSeparator = line.includes("---");
          if (isSeparator) return null;
          return (
            <div key={i} className={`flex gap-0 text-xs border-b border-zinc-100 dark:border-zinc-800 ${isHeader ? "font-semibold bg-zinc-50 dark:bg-zinc-800/50" : ""}`}>
              {cells.map((cell, j) => (
                <div key={j} className="flex-1 px-3 py-1.5 text-zinc-700 dark:text-zinc-300">{cell.trim()}</div>
              ))}
            </div>
          );
        }
        if (line.startsWith("- ") || line.startsWith("* "))
          return <li key={i} className="ml-4 list-disc text-sm text-zinc-600 dark:text-zinc-400 my-0.5">{parseBold(line.slice(2))}</li>;
        // Match $$formula$$ — single line (after pre-processing)
        if (line.startsWith("$$") && line.endsWith("$$") && line.length > 4) {
          const formula = line.slice(2, -2).trim();
          return <div key={i} className={`my-2 rounded-xl px-4 py-3.5 font-mono text-sm shadow-sm overflow-x-auto ${theme.mathBlock}`}>{formula}</div>;
        }
        // Standalone $$ line with no content — skip (artifact of pre-processing)
        if (line.trim() === "$$") return null;
        if (line.trim() === "") return <br key={i} />;
        return <p key={i} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed my-1">{parseBold(line)}</p>;
      })}
    </div>
  );
}


function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-zinc-850 dark:text-zinc-100">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
