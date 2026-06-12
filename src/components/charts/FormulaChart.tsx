"use client";

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

  // Assemble current scope from field states
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
      data.push({ [chart.xAxisField]: parseFloat(xVal.toFixed(2)), [chart.yAxisField]: parseFloat(yVal.toFixed(4)) });
    }
  }

  return data;
}

export function FormulaChart({ schema, fields }: Props) {
  const chart = schema.chart;
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
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey={chart.xAxisField}
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            label={{
              value: xField?.label ?? chart.xAxisField,
              position: "insideBottom",
              offset: -2,
              fontSize: 11,
              fill: "hsl(var(--muted-foreground))",
            }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            label={{
              value: yField?.label ?? chart.yAxisField,
              angle: -90,
              position: "insideLeft",
              fontSize: 11,
              fill: "hsl(var(--muted-foreground))",
            }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid hsl(var(--border))",
              backgroundColor: "hsl(var(--card))",
              color: "hsl(var(--card-foreground))",
              fontSize: "12px",
            }}
            formatter={(value) => [typeof value === "number" ? value.toFixed(3) : String(value), yField?.label ?? chart.yAxisField]}
            labelFormatter={(v) => `${xField?.label ?? chart.xAxisField}: ${v}`}
          />
          {/* Vertical line at current user input value */}
          {!isNaN(currentX) && (
            <ReferenceLine
              x={currentX}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              strokeDasharray="4 3"
              label={{ value: "You", fill: "hsl(var(--primary))", fontSize: 11 }}
            />
          )}
          <Line
            type="monotone"
            dataKey={chart.yAxisField}
            stroke="hsl(var(--primary))"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: "hsl(var(--primary))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
