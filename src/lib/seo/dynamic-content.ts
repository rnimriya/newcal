import { evalExpression, buildDependencyGraph, topoSort } from "@/lib/engine/solver";
import type { CalculatorSchema, CalculatorField } from "@/types/calculator";

export interface DynamicContent {
  table: {
    inputHeader: string;
    outputHeaders: string[];
    rows: Array<{
      inputVal: string;
      outputs: string[];
    }>;
  } | null;
  practiceProblems: Array<{
    question: string;
    answer: string;
  }>;
  progression: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  powerExamples: Array<{
    scenario: string;
    example: string;
  }>;
}

// ─── Deterministic variant picker ─────────────────────────────────────────────

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: number, salt = 0): T {
  return arr[(seed + salt) % arr.length];
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ─── Field helpers ────────────────────────────────────────────────────────────

function inputFields(schema: CalculatorSchema | Partial<CalculatorSchema>): CalculatorField[] {
  return ((schema.fields ?? []) as CalculatorField[]).filter((f) => f.type !== "computed");
}

function computedFields(schema: CalculatorSchema | Partial<CalculatorSchema>): CalculatorField[] {
  return ((schema.fields ?? []) as CalculatorField[]).filter((f) => f.type === "computed");
}

function fmtNum(n: number, minDec: number, maxDec: number): string {
  if (!isFinite(n)) return "—";
  // toLocaleString only accepts 0–20 fraction digits; clamp defensively
  const lo = Math.min(20, Math.max(0, Math.floor(minDec)));
  const hi = Math.min(20, Math.max(0, Math.floor(maxDec)));
  return n.toLocaleString("en-US", {
    minimumFractionDigits: Math.min(lo, hi),
    maximumFractionDigits: hi,
  });
}

function fmtInputValue(f: CalculatorField, v: unknown): string {
  if (f.type === "select" && f.selectOptions) {
    const opt = f.selectOptions.find((o) => String(o.value) === String(v));
    if (opt) return opt.label;
  }
  if (typeof v === "number") {
    return `${f.prefix ?? ""}${fmtNum(v, 0, 6)}${f.suffix ?? ""}`;
  }
  return `${f.prefix ?? ""}${String(v ?? "")}${f.suffix ?? ""}`;
}

function fmtOutputValue(f: CalculatorField, v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "number") {
    const p = f.precision ?? 2;
    return `${f.prefix ?? ""}${fmtNum(v, p, p)}${f.suffix ?? ""}`;
  }
  return `${f.prefix ?? ""}${String(v)}${f.suffix ?? ""}`;
}

/** "Your Birth Day" -> "birth day", for "your X" phrasing. */
function refLabel(label: string): string {
  const m = label.match(/^(your|my)\s+(.+)$/i);
  if (m) return m[2].toLowerCase();
  return label;
}

function joinLabels(labels: string[]): string {
  if (labels.length === 0) return "";
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

function formatVal(outVal: unknown, precision: number | undefined): string {
  if (outVal === undefined || outVal === null) return "—";
  if (typeof outVal === "number") {
    if (!isFinite(outVal)) return "—";
    return outVal.toFixed(precision !== undefined ? precision : 2);
  }
  return String(outVal);
}

/** Default input set: schema defaults, falling back to sensible values. */
function defaultInputs(schema: CalculatorSchema | Partial<CalculatorSchema>): Record<string, unknown> {
  const vals: Record<string, unknown> = {};
  for (const f of (schema.fields ?? []) as CalculatorField[]) {
    if (f.type === "computed") continue;
    if (f.defaultValue !== undefined) vals[f.id] = f.defaultValue;
    else if (f.type === "select" && f.selectOptions?.length) vals[f.id] = f.selectOptions[0].value;
    else vals[f.id] = 10;
  }
  return vals;
}

/** Evaluate every computed field for a given input set. Never throws. */
function solveAll(
  schema: CalculatorSchema | Partial<CalculatorSchema>,
  values: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  try {
    const fields = (schema.fields ?? []) as CalculatorField[];
    const computedIds = fields.filter((f) => f.type === "computed").map((f) => f.id);
    const allIds = fields.map((f) => f.id);
    const scope: Record<string, unknown> = { ...defaultInputs(schema), ...values };
    const ordered = topoSort(buildDependencyGraph(schema.formulas ?? {}, allIds), computedIds);
    for (const id of ordered) {
      const formula = (schema.formulas ?? {})[id];
      if (!formula) continue;
      const r = evalExpression(formula, scope);
      if (r !== null && r !== undefined) scope[id] = r;
    }
    for (const id of computedIds) out[id] = scope[id] ?? null;
  } catch {
    /* leave empty on solver failure */
  }
  return out;
}

/** "Bill Amount × Tip Percentage ÷ 100" — formula with real field labels. */
function plainFormulaWords(schema: CalculatorSchema | Partial<CalculatorSchema>): string {
  const raw = Object.values(schema.formulas ?? {})[0] ?? "";
  const cleaned = raw.replace(/\s+/g, " ").trim();
  if (!cleaned || cleaned.length > 140 || /[?:]/.test(cleaned)) return "the standard formula";
  let s = cleaned;
  const labels = ((schema.fields ?? []) as CalculatorField[])
    .map((f) => [f.id, f.label] as [string, string])
    .sort((a, b) => b[0].length - a[0].length);
  for (const [id, label] of labels) {
    s = s.replace(new RegExp(`\\b${escapeRegExp(id)}\\b`, "g"), label);
  }
  return s
    .replace(/\bPI\b/g, "π")
    .replace(/\bsqrt\(/g, "√(")
    .replace(/\*/g, " × ")
    .replace(/\//g, " ÷ ")
    .replace(/\s+/g, " ")
    .trim();
}

function fmtInputs(inputs: CalculatorField[], values: Record<string, unknown>): string {
  return inputs
    .filter((f) => values[f.id] !== undefined)
    .map((f) => `${f.label} ${fmtInputValue(f, values[f.id])}`)
    .join(", ");
}

function fmtOutputs(computed: CalculatorField[], scope: Record<string, unknown>): string {
  const solved = computed.filter((f) => {
    const v = scope[f.id];
    if (v === null || v === undefined) return false;
    return typeof v !== "number" || isFinite(v);
  });
  const list = solved.length > 0 ? solved : computed;
  return list.map((f) => `${f.label} ${fmtOutputValue(f, scope[f.id])}`).join(", ");
}

// ─── Scenario banks (safe, general situations per category) ───────────────────

const SCENARIOS: Record<string, string[]> = {
  finance: ["Splitting a bill with friends", "Planning a monthly budget", "Comparing two offers", "Checking a quote", "Planning ahead"],
  converters: ["Travel planning", "Following a recipe", "Reading a spec sheet", "Homework help", "Everyday conversions"],
  health: ["Morning routine check", "Fitness tracking", "Preparing for a checkup", "Setting a goal", "Curious comparison"],
  math: ["Homework check", "Double-checking a spreadsheet", "Settling a debate", "Quick mental-math verify", "Class assignment"],
  algebra: ["Homework check", "Step-by-step practice", "Exam prep", "Checking your work", "Class assignment"],
  physics: ["Lab calculation", "Homework problem", "Design sanity check", "Quick estimate", "Class assignment"],
  statistics: ["Summarizing survey data", "Checking an assignment", "Quick data overview", "Experiment results", "Class project"],
  time: ["Scheduling a call", "Planning a trip", "Converting a timestamp", "Coordinating across zones", "Daily planning"],
  loans: ["Comparing loan offers", "Planning a payoff", "Affordability check", "Refinance math", "Budget planning"],
  retirement: ["On-track check", "What-if scenario", "Catch-up planning", "Comparing strategies", "Annual review"],
  stocks: ["Sizing a position", "Modeling returns", "Comparing investments", "Quick sanity check", "Portfolio review"],
  credit: ["Payoff planning", "Comparing cards", "Understanding the true cost", "Monthly budget check", "Debt strategy"],
};

function scenariosFor(category?: string): string[] {
  if (category && SCENARIOS[category]) return SCENARIOS[category];
  return ["Everyday use", "Quick check", "Planning ahead", "Comparing options", "Double-checking"];
}

// ─── Input sets: prefer the schema's own examples, else scale defaults ─────────

interface InputSet {
  label: string;
  values: Record<string, unknown>;
}

function exampleSets(
  schema: CalculatorSchema | Partial<CalculatorSchema>,
  inputs: CalculatorField[]
): InputSet[] {
  const examples = (schema as CalculatorSchema).examples;
  if (examples?.length) {
    return examples.slice(0, 5).map((ex) => ({
      label: ex.label,
      values: ex.inputs as Record<string, unknown>,
    }));
  }
  const base = defaultInputs(schema);
  const sets: InputSet[] = [{ label: "Typical values", values: base }];
  const first = inputs.find((f) => f.type === "number" && typeof base[f.id] === "number");
  if (first) {
    const scenarios = scenariosFor((schema as CalculatorSchema).category);
    const cur = base[first.id] as number;
    const min = first.constraint?.min;
    const max = first.constraint?.max;
    const scaled: Array<[number, string]> = [
      [cur * 2, scenarios[1] ?? "Larger value"],
      [cur / 2, scenarios[2] ?? "Smaller value"],
    ];
    for (const [v, label] of scaled) {
      if (!isFinite(v) || v <= 0) continue;
      if (min !== undefined && v < min) continue;
      if (max !== undefined && v > max) continue;
      if (v === cur) continue;
      const rounded = first.constraint?.step && first.constraint.step >= 1 ? Math.round(v) : Math.round(v * 100) / 100;
      sets.push({ label, values: { ...base, [first.id]: rounded } });
      if (sets.length >= 3) break;
    }
  }
  return sets;
}

// ─── Fallback for entries without usable fields ────────────────────────────────

function fallbackContent(schema: CalculatorSchema | Partial<CalculatorSchema>): DynamicContent {
  const name = schema.name || "calculator";
  return {
    table: null,
    practiceProblems: [
      {
        question: `What does the ${name} do?`,
        answer: `It runs the standard calculation for ${name.toLowerCase()} from the numbers you type in — no sign-up, no waiting.`,
      },
      {
        question: "How do I get an answer?",
        answer: "Type your values into the input boxes above. The result appears instantly and updates as you change anything.",
      },
      {
        question: "Can I trust the result?",
        answer: "The calculator applies the standard published formula with full internal precision, rounding only what it displays.",
      },
      {
        question: "Does it work on my phone?",
        answer: "Yes — the page is fully responsive, and the calculator works the same on phones, tablets, and desktops.",
      },
    ],
    progression: [
      { step: "01", title: "See what it solves", desc: `Check the description above to confirm the ${name} matches your problem.` },
      { step: "02", title: "Enter your values", desc: "Type your numbers into the input boxes — that is the only setup needed." },
      { step: "03", title: "Get the answer", desc: "The result calculates instantly and updates live as you edit." },
      { step: "04", title: "Try the examples", desc: "The worked examples below show realistic numbers you can compare against." },
      { step: "05", title: "Explore scenarios", desc: "Change one input at a time to see how sensitive the answer is." },
    ],
    powerExamples: [
      {
        scenario: "Homework and study",
        example: `Use the ${name} to double-check your work — type the problem's numbers in and compare with your hand-written answer.`,
      },
      {
        scenario: "Quick estimates",
        example: "Need a fast answer? Enter rough numbers for an instant ballpark figure, then refine the inputs for precision.",
      },
      {
        scenario: "What-if comparisons",
        example: "Change one value at a time to see how the answer moves — often more useful than any single result.",
      },
    ],
  };
}

// ─── Main generator ───────────────────────────────────────────────────────────

export function generateDynamicContent(schema: CalculatorSchema | Partial<CalculatorSchema>): DynamicContent {
  const fields = (schema.fields ?? []) as CalculatorField[];
  const inputs = fields.filter((f) => f.type !== "computed");
  const computed = fields.filter((f) => f.type === "computed");
  const slugSeed = hashStr(schema.slug ?? schema.name ?? "x");

  if (inputs.length === 0 || computed.length === 0) {
    return fallbackContent(schema);
  }

  const targetInput = inputs[0];
  const allFieldIds = fields.map((f) => f.id);
  const computedIds = computed.map((f) => f.id);

  // 1. Value reference table — solved live from the real formulas.
  let testValues = [1, 2, 5, 10, 20, 50, 100, 250, 500, 1000];
  if (["month", "day", "year", "count"].includes(targetInput.id)) {
    testValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (schema.slug && (schema.slug.includes("percentage") || schema.slug.includes("percent"))) {
    testValues = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100];
  }

  const tableRows = testValues.map((val) => {
    const scope = solveAll(schema, { [targetInput.id]: val });
    return {
      inputVal: `${val} ${targetInput.label.split(" (")[0]}`,
      outputs: computed.map((c) => formatVal(scope[c.id], c.precision)),
    };
  });

  const table = {
    inputHeader: targetInput.label,
    outputHeaders: computed.map((c) => c.label),
    rows: tableRows,
  };

  // 2. Practice problems — worded naturally, answered with real computed values.
  const problemSets = exampleSets(schema, inputs);
  const questionTpls = [
    "You enter {inStr} — what does the calculator return?",
    "With {inStr}, what are the results?",
    "{inStr} — work it out, then check the answer.",
    "Plug in {inStr}. What is the answer?",
    "Given {inStr}, what does it come out to?",
  ];
  const answerTpls = [
    "With {inStr}, the results are {outStr}.",
    "Entering {inStr} gives {outStr}.",
    "The calculator returns {outStr} for {inStr}.",
  ];
  const practiceProblems = problemSets.slice(0, 5).map((set, i) => {
    const scope = solveAll(schema, set.values);
    const inStr = fmtInputs(inputs, set.values);
    const outStr = fmtOutputs(computed, scope);
    const q = pick(questionTpls, slugSeed, i).replace("{inStr}", inStr);
    const a = pick(answerTpls, slugSeed, i + 2)
      .replace("{inStr}", inStr)
      .replace("{outStr}", outStr);
    return {
      question: set.label && (schema as CalculatorSchema).examples?.length ? `${set.label}: ${q}` : q,
      answer: a,
    };
  });

  // 3. Calculation roadmap — describes the actual flow with real field names.
  const inputStr = joinLabels(inputs.map((f) => refLabel(f.label)));
  const outputStr = joinLabels(computed.map((f) => f.label));
  const formulaWords = plainFormulaWords(schema);
  const hasUnits = inputs.some((f) => f.units && f.units.length > 1);
  const progression = [
    {
      step: "01",
      title: "Gather your inputs",
      desc: `Type in your ${inputStr}. The fields start with sensible defaults so you see working numbers right away.`,
    },
    hasUnits
      ? {
          step: "02",
          title: "Match your units",
          desc: "Use the dropdowns to enter values in the units you have — the conversion happens automatically.",
        }
      : {
          step: "02",
          title: "Sanity-check your numbers",
          desc: "A misplaced decimal — or a monthly figure typed as an annual one — is the most common cause of surprising answers.",
        },
    {
      step: "03",
      title: "The math runs itself",
      desc: `The calculator evaluates ${formulaWords} on every keystroke — there is no submit button to press.`,
    },
    {
      step: "04",
      title: "Read your results",
      desc: `Your ${outputStr} ${computed.length > 1 ? "appear" : "appears"} instantly. Change any input to see the effect immediately.`,
    },
    {
      step: "05",
      title: "Test a what-if",
      desc: "Nudge one input up or down. Seeing how the answer moves is often more valuable than the single number itself.",
    },
  ];

  // 4. Real-world examples — natural phrasing with real computed numbers.
  const exampleTpls = [
    "With {inStr}, the calculator returns {outStr}.",
    "Plug in {inStr} and you get {outStr}.",
    "Enter {inStr} — the answer comes out to {outStr}.",
    "For {inStr}, expect {outStr}.",
    "A quick run with {inStr} gives {outStr}.",
  ];
  const powerExamples = problemSets.slice(0, 5).map((set, i) => {
    const scope = solveAll(schema, set.values);
    const inStr = fmtInputs(inputs, set.values);
    const outStr = fmtOutputs(computed, scope);
    return {
      scenario: set.label,
      example: pick(exampleTpls, slugSeed, i + 4)
        .replace("{inStr}", inStr)
        .replace("{outStr}", outStr),
    };
  });

  return {
    table,
    practiceProblems,
    progression,
    powerExamples,
  };
}
