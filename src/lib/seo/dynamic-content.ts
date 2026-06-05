import { evalExpression, buildDependencyGraph, topoSort } from "@/lib/engine/solver";
import type { CalculatorSchema } from "@/types/calculator";

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

export function generateDynamicContent(schema: CalculatorSchema | Partial<CalculatorSchema>): DynamicContent {
  const inputs = (schema.fields ?? []).filter((f) => f.type !== "computed");
  const computed = (schema.fields ?? []).filter((f) => f.type === "computed");

  const fallbackProgression = [
    { step: "01", title: "Parameter Identification", desc: "Identify and input all required scalar variables and initial conditions." },
    { step: "02", title: "Unit Standardization", desc: "Convert all input values to standardized baseline units." },
    { step: "03", title: "Equation Evaluation", desc: "Evaluate the primary mathematical equations using topological solver sequence." },
    { step: "04", title: "Precision Control", desc: "Apply numerical rounding and control decimals based on standard tolerances." },
    { step: "05", title: "Multi-unit Conversion", desc: "Project outputs across various metric and imperial scales for comparison." }
  ];

  if (inputs.length === 0 || computed.length === 0) {
    return {
      table: null,
      practiceProblems: [
        { question: `What is the primary function of the ${schema.name || "calculator"}?`, answer: `It performs calculations to solve problems based on mathematical rules.` },
        { question: `Do I need to sign up to use the ${schema.name || "calculator"}?`, answer: "No. All tools are free and public." },
        { question: "Can I use the tool on a mobile device?", answer: "Yes, the layout is fully responsive." },
        { question: "Does this calculator save my input history?", answer: "No, all calculations are run in the browser." },
        { question: "Are the calculations accurate?", answer: "Yes, validated against standard test references." }
      ],
      progression: fallbackProgression,
      powerExamples: [
        { scenario: "Classroom", example: "Students checking calculations." },
        { scenario: "DIY Projects", example: "Estimating values for home renovation." },
        { scenario: "Work Audits", example: "Professionals checking calculations." },
        { scenario: "Scientific Research", example: "Researchers validating data sets." },
        { scenario: "Personal Reference", example: "Quick checks during daily tasks." }
      ]
    };
  }

  const targetInput = inputs[0];
  const otherInputs = inputs.slice(1);

  // Generate 10 standard test values
  let testValues = [1, 2, 5, 10, 20, 50, 100, 250, 500, 1000];
  if (targetInput.id === "month" || targetInput.id === "day" || targetInput.id === "year" || targetInput.id === "count") {
    testValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (schema.slug && (schema.slug.includes("percentage") || schema.slug.includes("percent"))) {
    testValues = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100];
  }

  const allFieldIds = (schema.fields ?? []).map((f) => f.id);
  const computedIds = computed.map((f) => f.id);
  const depGraph = buildDependencyGraph(schema.formulas ?? {}, allFieldIds);
  const orderedIds = topoSort(depGraph, computedIds);

  const solveForInput = (val: number) => {
    const scope: Record<string, unknown> = { [targetInput.id]: val };
    for (const other of otherInputs) {
      scope[other.id] = other.defaultValue !== undefined ? other.defaultValue : 1;
    }
    for (const id of orderedIds) {
      const formula = (schema.formulas ?? {})[id];
      if (formula) {
        const result = evalExpression(formula, scope);
        scope[id] = typeof result === "number" ? result : 0;
      }
    }
    return scope;
  };

  // 1. Generate Table Rows
  const tableRows = testValues.map(val => {
    const scope = solveForInput(val);
    return {
      inputVal: `${val} ${targetInput.label.split(" (")[0]}`,
      outputs: computed.map(c => {
        const outVal = scope[c.id];
        return typeof outVal === "number"
          ? outVal.toFixed(c.precision !== undefined ? c.precision : 2)
          : String(outVal);
      })
    };
  });

  const table = {
    inputHeader: targetInput.label,
    outputHeaders: computed.map(c => c.label),
    rows: tableRows
  };

  // 2. Generate Practice Problems
  const problemInputs = [5, 20, 100, 250, 1000];
  const practiceProblems = problemInputs.map((val) => {
    const scope = solveForInput(val);
    const answersStr = computed.map(c => {
      const outVal = scope[c.id];
      const outValStr = typeof outVal === "number"
        ? outVal.toFixed(c.precision !== undefined ? c.precision : 2)
        : String(outVal);
      return `${c.label}: ${outValStr}`;
    }).join(", ");

    return {
      question: `Find the calculation output for an input value of ${val} ${targetInput.label.split(" (")[0]}.`,
      answer: `Given ${targetInput.label.split(" (")[0]} = ${val}, the calculated output is: ${answersStr}.`
    };
  });

  // 3. Generate Real-World Power 5 Examples
  const exampleInputs = [10, 50, 200, 500, 1000];
  const scenarios = [
    "Industrial & Manufacturing",
    "Academic Homework & Exams",
    "Professional Engineering Audit",
    "Laboratory & Research Work",
    "DIY Project Calculations"
  ];
  const powerExamples = exampleInputs.map((val, idx) => {
    const scope = solveForInput(val);
    const answersStr = computed.map(c => {
      const outVal = scope[c.id];
      const outValStr = typeof outVal === "number"
        ? outVal.toFixed(c.precision !== undefined ? c.precision : 2)
        : String(outVal);
      return `${c.label}: ${outValStr}`;
    }).join(", ");

    return {
      scenario: scenarios[idx],
      example: `In a ${scenarios[idx].toLowerCase()} setting, an operator inputs ${val} ${targetInput.label.split(" (")[0]}. The calculated standard outcome resolves to ${answersStr}.`
    };
  });

  return {
    table,
    practiceProblems,
    progression: fallbackProgression,
    powerExamples
  };
}
