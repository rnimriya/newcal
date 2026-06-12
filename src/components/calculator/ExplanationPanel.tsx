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
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm h-[240px] flex items-center justify-center text-base text-muted-foreground animate-pulse">
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
    { id: "derivation" as const, label: "Formula", icon: FlaskConical },
    ...(hasChart ? [{ id: "chart" as const, label: "Chart", icon: BarChart2 }] : []),
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Tab bar */}
      <div className="flex gap-1 rounded-xl bg-secondary p-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-base font-semibold transition-all cursor-pointer ${tab === id
              ? theme.tabActive
              : "text-muted-foreground hover:text-foreground"
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
        <div className={`rounded-2xl border border-border bg-card p-5 shadow-sm transition-all ${theme.glowShadow}`}>
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
    <div className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
      {lines.map((line, i) => {
        if (line.startsWith("## "))
          return <h2 key={i} className="text-lg font-extrabold mt-5 mb-2 text-foreground">{line.slice(3)}</h2>;
        if (line.startsWith("### "))
          return <h3 key={i} className="text-base font-bold mt-4 mb-2 text-foreground/90">{line.slice(4)}</h3>;
        if (line.startsWith("#### "))
          return <h4 key={i} className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-3 mb-1">{line.slice(5)}</h4>;
        if (line.startsWith("| ")) {
          // Simple table row
          const cells = line.split("|").filter((c) => c.trim() !== "");
          const isHeader = lines[i + 1]?.startsWith("|---");
          const isSeparator = line.includes("---");
          if (isSeparator) return null;
          return (
            <div key={i} className={`flex gap-0 text-base border-b border-border ${isHeader ? "font-semibold bg-secondary/50" : ""}`}>
              {cells.map((cell, j) => (
                <div key={j} className="flex-1 px-3 py-1.5 text-foreground/80">{cell.trim()}</div>
              ))}
            </div>
          );
        }
        if (line.startsWith("- ") || line.startsWith("* "))
          return <li key={i} className="ml-4 list-disc text-base text-muted-foreground my-0.5">{parseBold(line.slice(2))}</li>;
        // Match $$formula$$ — single line (after pre-processing)
        if (line.startsWith("$$") && line.endsWith("$$") && line.length > 4) {
          const formula = line.slice(2, -2).trim();
          return <div key={i} className={`my-2 rounded-xl px-4 py-3.5 font-mono text-base shadow-sm overflow-x-auto ${theme.mathBlock}`}>{formula}</div>;
        }
        // Standalone $$ line with no content — skip (artifact of pre-processing)
        if (line.trim() === "$$") return null;
        if (line.trim() === "") return null;
        return <p key={i} className="text-base text-muted-foreground leading-relaxed mb-3">{parseBold(line)}</p>;
      })}
    </div>
  );
}


function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground/90">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
