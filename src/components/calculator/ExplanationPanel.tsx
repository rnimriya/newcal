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

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "explanation", label: "How it works", icon: BookOpen },
    { id: "derivation",  label: "Formula",      icon: FlaskConical },
    { id: "chart",       label: "Chart",         icon: BarChart2 },
  ];

  return (
    <div className="space-y-4">
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
      {tab === "chart" && schema.chart && (
        <FormulaChart schema={schema} fields={fields} />
      )}

      {tab !== "chart" && (
        <div className={`rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 transition-all ${theme.glowShadow}`}>
          <MarkdownRenderer
            content={
              tab === "explanation"
                ? schema.explanation ?? "_No explanation provided._"
                : schema.derivation ?? "_No derivation provided._"
            }
            theme={theme}
          />
        </div>
      )}
    </div>
  );
}

// ─── Minimal Markdown renderer (headings, bold, lists, code, tables) ──────────

function MarkdownRenderer({ content, theme }: { content: string; theme: CategoryTheme }) {
  const lines = content.split("\n");

  return (
    <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
      {lines.map((line, i) => {
        if (line.startsWith("## "))
          return <h2 key={i} className="text-base font-bold mt-4 mb-2 text-zinc-900 dark:text-white">{line.slice(3)}</h2>;
        if (line.startsWith("### "))
          return <h3 key={i} className="text-sm font-semibold mt-3 mb-1.5 text-zinc-800 dark:text-zinc-200">{line.slice(4)}</h3>;
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
        if (line.startsWith("- "))
          return <li key={i} className="ml-4 list-disc text-sm text-zinc-600 my-0.5">{parseBold(line.slice(2))}</li>;
        if (line.startsWith("$$"))
          return <div key={i} className={`my-2 rounded-xl px-4 py-3.5 font-mono text-sm shadow-sm ${theme.mathBlock}`}>{line.replace(/\$\$/g, "")}</div>;
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
      return <strong key={i} className="font-semibold text-zinc-855 dark:text-zinc-100">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
