"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { CalculatorSchema, FieldState } from "@/types/calculator";
import { evalExpression } from "@/lib/engine/solver";

interface Props {
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;
}

function buildChartData(
  schema: CalculatorSchema,
  fields: Record<string, FieldState>
): Array<Record<string, number>> {
  const chart = schema.chart;
  if (!chart) return [];

  const [xMin, xMax] = chart.xRange ?? [0, 100];
  const points = chart.points ?? 50;
  const step = (xMax - xMin) / points;

  const scope: Record<string, unknown> = {};
  for (const f of schema.fields) {
    const val = parseFloat(fields[f.id]?.value ?? "");
    if (!isNaN(val)) scope[f.id] = val;
  }

  const data: Array<Record<string, number>> = [];
  for (let i = 0; i <= points; i++) {
    const xVal = xMin + i * step;
    const pointScope = { ...scope, [chart.xAxisField]: xVal };
    const yExpr = schema.formulas[chart.yAxisField];
    if (!yExpr) break;

    const yVal = evalExpression(yExpr, pointScope);
    if (typeof yVal === "number" && isFinite(yVal)) {
      data.push({
        [chart.xAxisField]: parseFloat(xVal.toFixed(2)),
        [chart.yAxisField]: parseFloat(yVal.toFixed(4)),
      });
    }
  }

  return data;
}

function useCssColors() {
  const [colors, setColors] = useState({
    primary: "#0369a1",
    border: "#e2e8f0",
    mutedFg: "#64748b",
    card: "#ffffff",
    cardFg: "#0f172a",
  });

  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    const get = (v: string) => style.getPropertyValue(v).trim();

    const toHsl = (raw: string) =>
      raw ? (raw.startsWith("#") ? raw : `hsl(${raw})`) : undefined;

    setColors({
      primary: toHsl(get("--primary")) ?? "#0369a1",
      border: toHsl(get("--border")) ?? "#e2e8f0",
      mutedFg: toHsl(get("--muted-foreground")) ?? "#64748b",
      card: toHsl(get("--card")) ?? "#ffffff",
      cardFg: toHsl(get("--card-foreground")) ?? "#0f172a",
    });
  }, []);

  return colors;
}

export function FormulaChart({ schema, fields }: Props) {
  const chart = schema.chart;
  const colors = useCssColors();

  if (!chart) return null;

  const data = buildChartData(schema, fields);
  const currentX = parseFloat(fields[chart.xAxisField]?.value ?? "NaN");

  const xField = schema.fields.find((f) => f.id === chart.xAxisField);
  const yField = schema.fields.find((f) => f.id === chart.yAxisField);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="mb-4 text-base font-semibold text-foreground">
        {chart.label ?? "Formula Visualization"}
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
          <XAxis
            dataKey={chart.xAxisField}
            tick={{ fontSize: 11, fill: colors.mutedFg }}
            label={{
              value: xField?.label ?? chart.xAxisField,
              position: "insideBottom",
              offset: -2,
              fontSize: 11,
              fill: colors.mutedFg,
            }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: colors.mutedFg }}
            label={{
              value: yField?.label ?? chart.yAxisField,
              angle: -90,
              position: "insideLeft",
              fontSize: 11,
              fill: colors.mutedFg,
            }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.card,
              color: colors.cardFg,
              fontSize: "12px",
            }}
            formatter={(value) => [
              typeof value === "number" ? value.toFixed(3) : String(value),
              yField?.label ?? chart.yAxisField,
            ]}
            labelFormatter={(v) => `${xField?.label ?? chart.xAxisField}: ${v}`}
          />
          {!isNaN(currentX) && (
            <ReferenceLine
              x={currentX}
              stroke={colors.primary}
              strokeWidth={2}
              strokeDasharray="4 3"
              label={{ value: "You", fill: colors.primary, fontSize: 11 }}
            />
          )}
          <Line
            type="monotone"
            dataKey={chart.yAxisField}
            stroke={colors.primary}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: colors.primary }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
