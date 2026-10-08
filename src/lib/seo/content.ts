import type { RegistryEntry } from "@/lib/registry";
import { SITE_DISPLAY_NAME } from "@/lib/constants";
import { getSchemaBySlug } from "@/lib/schemas";
import { evalExpression, buildDependencyGraph, topoSort } from "@/lib/engine/solver";
import type { CalculatorSchema, CalculatorField } from "@/types/calculator";
import { BATCH_01 } from "./custom-content/batch-01-finance";
import { BATCH_02 } from "./custom-content/batch-02-loans";
import { BATCH_03 } from "./custom-content/batch-03-health";
import { BATCH_04 } from "./custom-content/batch-04-converters-a";
import { BATCH_05 } from "./custom-content/batch-05-converters-b";
import { BATCH_06 } from "./custom-content/batch-06-converters-c";
import { BATCH_07 } from "./custom-content/batch-07-mixed-a";
import { BATCH_08 } from "./custom-content/batch-08-math-a";
import { BATCH_09 } from "./custom-content/batch-09-math-b";
import { BATCH_09B } from "./custom-content/batch-09b-math-b2";
import { BATCH_10 } from "./custom-content/batch-10-math-c";
import { BATCH_11 } from "./custom-content/batch-11-math-d";
import { BATCH_12 } from "./custom-content/batch-12-math-e";
import { BATCH_13 } from "./custom-content/batch-13-physics-a";
import { BATCH_14 } from "./custom-content/batch-14-physics-b";
import { BATCH_15 } from "./custom-content/batch-15-algebra";
import { BATCH_16 } from "./custom-content/batch-16-statistics";
import { BATCH_17 } from "./custom-content/batch-17-slug-repairs";

// ─── SEO Content Generator ────────────────────────────────────────────────────
// Produces structured content for every calculator page:
//   description, steps, formula block, examples table, FAQs, sqrt table
//
// The generators below build calculator-SPECIFIC copy from each entry's schema
// (name, formula, units, category, shortDesc, field labels, help text, and the
// schema's own worked examples). Sentence patterns are picked deterministically
// from the slug hash so neighboring pages don't read like templates.

export interface SEOContent {
  description: string;
  howToSteps: string[];
  formulaText: string;
  examples: Array<{ label: string; calculation: string; result: string }>;
  faqs: Array<{ q: string; a: string }>;
  sqrtTable?: Array<{ n: number; sqrt: string }>;
  relatedHeading?: string;
}

// Built-in content for top calculators, fully compliant with readability guidelines
const CUSTOM_CONTENT: Record<string, Partial<SEOContent>> = {
  "algebraic-expression-calculator": {
    description: `Use this tool to simplify or evaluate algebraic expressions. It helps you factor polynomials and expand brackets. Type your mathematical expression in the box. The tool displays the answer in real time. 

You can use the calculator to check your homework or solve school equations. It runs offline on your mobile phone or computer. The solver is free to use.`,
    howToSteps: [
      "Type your algebraic expression in the input box.",
      "Choose to simplify, expand, or factor the expression.",
      "Enter variable values if you want to evaluate the expression.",
      "Read the step by step output to understand the rules.",
      "Bookmark this page to solve math equations quickly later.",
    ],
    faqs: [
      { q: "What is an algebraic expression?", a: "It is a math phrase with numbers, variables, and operators. An example is 3x + 5. It does not have an equals sign." },
      { q: "Can I evaluate expressions with negative numbers?", a: "Yes. The calculator handles positive and negative numbers. Use brackets around negative values to avoid mistakes." },
      { q: "How do I simplify fractions?", a: "Type the fraction using a slash. The calculator reduces the numerator and denominator factors automatically." },
      { q: "Is this algebra solver free?", a: "Yes. It is completely free with no usage limits and no accounts to create." },
    ],
  },

  "bmi-calculator": {
    description: `Your BMI (Body Mass Index) is a simple number. It tells you if your weight is in a healthy range for your height. It does not measure body fat directly. Doctors have used it as a screening tool for decades. Calculate it by dividing your weight in kilograms by the square of your height in meters.

Finding your BMI takes ten seconds. A result under 18.5 is underweight. Between 18.5 and 24.9 is the normal range. Between 25 and 29.9 is overweight. A score above 30 means obesity.

BMI has limits. Muscular people can score high even with low body fat. Different charts apply to children and the elderly. Use it as one simple data point.`,
    howToSteps: [
      "Type your weight in the weight field. Switch between kilograms and pounds if needed.",
      "Type your height in the height field. You can use centimeters, meters, or inches.",
      "Read your BMI score and weight category instantly on the screen.",
      "Check the normal weight range displayed below the result.",
      "Click the preset buttons to see typical values for different body types.",
    ],
    faqs: [
      { q: "What is a healthy BMI for adults?", a: "A healthy BMI is between 18.5 and 24.9. This range has the lowest risk of health issues for most adults." },
      { q: "Is BMI accurate for athletes?", a: "Not always. Muscle weighs more than fat. Athletes often score high even with low body fat." },
      { q: "How often should I check my BMI?", a: "Once a month is enough for most people. If you are changing your weight, check it every two weeks." },
      { q: "Can children use this BMI calculator?", a: "No. Children need different charts based on age and sex. This calculator is for adults only." },
      { q: "What happens if my BMI is over 30?", a: "A score over 30 is classified as obese. This increases the risk of heart disease and diabetes. Consult a doctor for advice." },
    ],
  },

  "compound-interest-calculator": {
    description: `Compound interest means you earn interest on your interest. It is different from simple interest, which only pays on the original deposit. This makes your money grow much faster over time.

For example, deposit $10,000 at 8% interest for 30 years. Simple interest pays you $24,000 in total. Compound interest compounded monthly pays you about $90,000. 

Your growth depends on the rate, time, and compounding frequency. Time is the most powerful factor. Starting early is better than finding a high rate. Monthly compounding beats annual compounding because it calculates interest twelve times a year.`,
    howToSteps: [
      "Type your starting deposit amount in the principal box.",
      "Type your annual interest rate as a percentage.",
      "Select the total investment time in years.",
      "Choose the compounding frequency from the dropdown list.",
      "Add a monthly contribution amount to see how extra savings help.",
      "View your future value and total interest updates instantly.",
    ],
    faqs: [
      { q: "What does compounding frequency mean?", a: "It is how many times per year interest is calculated. Monthly compounding means twelve times a year. This earns more than annual compounding." },
      { q: "What is the effective annual rate?", a: "It shows your true yearly return including compounding. A 12% nominal rate compounded monthly has a true rate of 12.68%." },
      { q: "How do extra monthly savings help?", a: "Even small additions increase the principal. Interest then compounds on a larger balance every month." },
      { q: "What is the Rule of 72?", a: "Divide 72 by your interest rate to see when your money doubles. At 8% interest, money doubles in roughly 9 years." },
    ],
  },

  "celsius-to-fahrenheit": {
    description: `Converting Celsius to Fahrenheit is a common daily conversion. You need it when checking international weather reports. It is also useful for foreign recipes or reading medical thermometers.

The math is simple. Multiply the Celsius temperature by 1.8, then add 32. Water freezes at 0°C (which is 32°F). Water boils at 100°C (which is 212°F). Normal body temperature is 37°C (which is 98.6°F).

Only a few countries use Fahrenheit officially. Most of the world uses Celsius. If you travel or read international news, this tool helps you understand temperatures quickly.`,
    howToSteps: [
      "Type your temperature value in the Celsius input box.",
      "Read the Fahrenheit result instantly as you type.",
      "Type in the Fahrenheit box to convert in the opposite direction.",
      "Look at the common temperature list below for quick checks.",
    ],
    faqs: [
      { q: "At what point are Celsius and Fahrenheit the same?", a: "They are equal at -40 degrees. So -40°C equals -40°F." },
      { q: "Which countries use Fahrenheit?", a: "The United States, Liberia, and the Bahamas use Fahrenheit officially. Most other countries use Celsius." },
      { q: "What is a normal body temperature?", a: "Normal body temperature is 98.6°F (which is 37°C). A fever is typically above 100.4°F (which is 38°C)." },
    ],
  },

  "quadratic-formula-calculator": {
    description: `A quadratic equation has the format ax² + bx + c = 0. The quadratic formula gives you the exact solutions every time. You do not need to guess or try different factors.

The formula always works. Factoring only works for simple numbers. Completing the square works but takes more time. The formula is the most reliable method.

The discriminant (b² - 4ac) tells you what solutions to expect. A positive value means two real answers. A zero value means one repeating answer. A negative value means two complex answers with imaginary parts.`,
    howToSteps: [
      "Type coefficient a in the first box. It cannot be zero.",
      "Type coefficient b in the second box.",
      "Type constant c in the third box.",
      "Read the values of x and the discriminant instantly.",
      "Check the step by step breakdown to see the roots.",
    ],
    faqs: [
      { q: "What if the first coefficient is zero?", a: "If a = 0, the equation is linear, not quadratic. The quadratic formula will not work. Solve it as bx + c = 0 instead." },
      { q: "What is the discriminant?", a: "It is the value b² - 4ac under the square root. It tells you the number of real solutions before you solve." },
      { q: "Can a quadratic equation have no real solutions?", a: "Yes. If the discriminant is negative, the solutions are complex numbers. The graph does not cross the horizontal axis." },
    ],
  },

  "km-to-miles": {
    description: `Kilometers and miles both measure distance. Kilometers are metric units, while miles are imperial units. You need this conversion when traveling, reading foreign road signs, or tracking runs.

One kilometer equals 0.621371 miles. This means a 5-kilometer run is about 3.1 miles. A full marathon is 42.195 kilometers (which is 26.2 miles). 

Knowing how to convert helps you understand speed limits abroad. It is also useful for reading maps in different countries.`,
    howToSteps: [
      "Type the distance in the kilometers box.",
      "Read the equivalent distance in miles instantly.",
      "Use the Miles to Kilometers page for the opposite calculation.",
      "Check the quick lookup table below for common distances.",
    ],
    faqs: [
      { q: "How many miles is 1 kilometer?", a: "1 kilometer is about 0.62 miles. You can estimate it as 5/8 of a mile." },
      { q: "How many kilometers is 1 mile?", a: "1 mile is equal to 1.609 kilometers. A quick estimate is 1.6 km." },
      { q: "How far is a 5K race in miles?", a: "A 5K run is exactly 5 kilometers. This equals 3.1 miles." },
    ],
  },

  "percentage-calculator": {
    description: `Percentage problems usually fall into three types. You might need to find a percentage of a number. Or you want to know what percentage one number is of another. Sometimes you need to find the original value.

This tool solves all three types. Type the two values you know. The third value calculates automatically. You do not need to choose the math formula yourself.

Percentages are useful for daily choices. They help you calculate store discounts, tax values, tips, and test grades.`,
    howToSteps: [
      "Choose the percentage calculation type from the menu.",
      "Type the two numbers you already know.",
      "Read the solved third number instantly on the screen.",
      "Click the examples tab to see common tip and discount problems.",
    ],
    faqs: [
      { q: "What is 20% of 150?", a: "20% of 150 is 30. The calculation is 150 multiplied by 0.20." },
      { q: "How do I find what percent 45 is of 180?", a: "Divide 45 by 180 and multiply by 100. The result is 25%." },
      { q: "How do I calculate a 15% tip?", a: "Multiply your bill by 0.15. For a $40 bill, the tip is $6." },
    ],
  },

  "simple-interest-calculator": {
    description: `Simple interest is the easiest way to calculate interest. The interest amount is constant each period. It is always calculated on the original deposit, not on interest you earned later.

The formula is principal multiplied by rate multiplied by time. It is used for short-term personal loans and auto loans. It is easy to calculate and predict.

Compound interest earns more money over long periods. But simple interest is often cheaper when you are borrowing money.`,
    howToSteps: [
      "Type the principal (starting loan or deposit amount).",
      "Type the annual interest rate as a percentage.",
      "Select the duration in years or months.",
      "Read the interest earned and total final balance instantly.",
    ],
    faqs: [
      { q: "What is the difference between simple and compound interest?", a: "Simple interest only calculates on the original principal. Compound interest calculates on the principal plus accumulated interest." },
      { q: "What loans use simple interest?", a: "Auto loans and personal loans often use simple interest. Mortgages typically use compound interest." },
    ],
  },

  "discount-calculator": {
    description: `A discount calculator shows you exactly how much money you save. It also shows the final price you pay after a percentage reduction. You do not need to perform mental math.

Type the original retail price and the discount percentage. The tool outputs the sale price and your total savings. It is useful for retail shopping and comparing store deals.`,
    howToSteps: [
      "Type the original retail price in the price box.",
      "Type the discount percentage you want to apply.",
      "Read the discounted sale price and savings immediately.",
      "Compare the original and final price on the screen.",
    ],
    faqs: [
      { q: "What is 20% off $85?", a: "A 20% discount on $85 saves you $17. The final price you pay is $68." },
      { q: "How do I calculate a double discount?", a: "Apply the first discount to the price. Then apply the second discount to the new price. Do not add the percentages together." },
    ],
  },

  // ─── Hand-written batches (Phase 3) — spread after the originals so batch
  // entries never override the 9 curated entries above ──────────────────────
  ...BATCH_01,
  ...BATCH_02,
  ...BATCH_03,
  ...BATCH_04,
  ...BATCH_05,
  ...BATCH_06,
  ...BATCH_07,
  ...BATCH_08,
  ...BATCH_09,
  ...BATCH_09B,  ...BATCH_10,
  ...BATCH_11,
  ...BATCH_12,
  ...BATCH_13,
  ...BATCH_14,
  ...BATCH_15,
  ...BATCH_16,
  ...BATCH_17,
};

// ─── Deterministic helpers ────────────────────────────────────────────────────
// Variant selection is hashed from the slug so each calculator gets a stable,
// unique mix of sentence patterns (no two sibling pages read identically).

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

// ─── Schema field helpers ─────────────────────────────────────────────────────

function inputFields(schema?: CalculatorSchema): CalculatorField[] {
  return (schema?.fields ?? []).filter((f) => f.type !== "computed");
}

function computedFields(schema?: CalculatorSchema): CalculatorField[] {
  return (schema?.fields ?? []).filter((f) => f.type === "computed");
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

/** Format an input value the way a US user would read it: $80, 18%, 2 people. */
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

/** True when a computed value actually solved (not null/missing/non-finite). */
function isSolvedOutput(v: unknown): boolean {
  if (v === null || v === undefined) return false;
  if (typeof v === "number") return isFinite(v);
  return String(v).length > 0;
}

/** Format a computed output with the field's own precision. */
function fmtOutputValue(f: CalculatorField, v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "number") {
    const p = f.precision ?? 2;
    return `${f.prefix ?? ""}${fmtNum(v, p, p)}${f.suffix ?? ""}`;
  }
  return `${f.prefix ?? ""}${String(v)}${f.suffix ?? ""}`;
}

function joinLabels(labels: string[]): string {
  if (labels.length === 0) return "";
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

/** Default input set: schema defaults, falling back to sensible values. */
function defaultInputs(schema: CalculatorSchema): Record<string, unknown> {
  const vals: Record<string, unknown> = {};
  for (const f of schema.fields ?? []) {
    if (f.type === "computed") continue;
    if (f.defaultValue !== undefined) vals[f.id] = f.defaultValue;
    else if (f.type === "select" && f.selectOptions?.length) vals[f.id] = f.selectOptions[0].value;
    else vals[f.id] = 10;
  }
  return vals;
}

/** Evaluate every computed field for a given input set. Never throws. */
function computeOutputs(
  schema: CalculatorSchema,
  inputs: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  try {
    const fields = schema.fields ?? [];
    const computedIds = fields.filter((f) => f.type === "computed").map((f) => f.id);
    const allIds = fields.map((f) => f.id);
    const scope: Record<string, unknown> = { ...defaultInputs(schema), ...inputs };
    const ordered = topoSort(buildDependencyGraph(schema.formulas ?? {}, allIds), computedIds);
    for (const id of ordered) {
      const formula = (schema.formulas ?? {})[id];
      if (!formula) continue;
      const r = evalExpression(formula, scope);
      if (r !== null && r !== undefined) scope[id] = r;
    }
    for (const id of computedIds) out[id] = scope[id] ?? null;
  } catch {
    /* leave outputs empty on solver failure */
  }
  return out;
}

// ─── What-does-it-do phrasing ─────────────────────────────────────────────────
// Many registry entries carry a thin placeholder shortDesc
// ("Performs mathematical evaluation of variables for X"); derive something
// specific from the name instead of repeating the placeholder.

const THIN_DESC_RE = /performs mathematical evaluation of variables for/i;

function describeWhat(entry: RegistryEntry): string {
  const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
  const sd = (entry.shortDesc || "").trim();
  // Infinitive, lowercased: openers embed it as "Use the X to {what}".
  // Multi-sentence descriptions are folded into one flowing phrase.
  if (sd && !THIN_DESC_RE.test(sd)) {
    const one = sd
      .replace(/\.\s*$/, "")
      .replace(/\.\s+([A-Z])/g, (_, c: string) => `, ${c.toLowerCase()}`);
    return lowerFirst(one);
  }
  const toMatch = entry.name.match(/^(.+?)\s+to\s+(.+?)(?:\s+(?:converter|calculator))?$/i);
  if (entry.category === "converters" && toMatch) {
    return `convert ${lowerFirst(toMatch[1].trim())} to ${toMatch[2].trim()}`;
  }
  const thing = entry.name.replace(/\s*(calculator|converter)\s*$/i, "").trim().toLowerCase();
  return `calculate ${thing}`;
}

/** Render the formula with real field labels: "Bill Amount × Tip Percentage ÷ 100". */
function plainFormula(entry: RegistryEntry, schema?: CalculatorSchema): string {
  const raw = entry.formula ?? Object.values(schema?.formulas ?? {})[0] ?? "";
  const cleaned = raw.replace(/\s+/g, " ").trim();
  if (!cleaned || cleaned.length > 140 || /[?:]/.test(cleaned)) return "the standard formula";
  let s = cleaned;
  const labels: Array<[string, string]> = (schema?.fields ?? [])
    .map((f) => [f.id, f.label] as [string, string])
    .sort((a, b) => b[0].length - a[0].length);
  for (const [id, label] of labels) {
    s = s.replace(new RegExp(`\\b${escapeRegExp(id)}\\b`, "g"), label);
  }
  s = s
    .replace(/\bPI\b/g, "π")
    .replace(/\bsqrt\(/g, "√(")
    .replace(/\*/g, " × ")
    .replace(/\//g, " ÷ ")
    .replace(/\s+/g, " ")
    .trim();
  return s;
}

// ─── Per-category voice ───────────────────────────────────────────────────────
// Each category gets its own openers, usage guidance, common mistakes and
// scenarios so a finance page never reads like a physics page.

interface CatVoice {
  openers: string[];
  tips: string[];
  mistakes: string[];
  when: string[];
  scenarios: string[];
}

const VOICES: Record<string, CatVoice> = {
  finance: {
    openers: [
      "Money questions rarely have obvious answers. Use the {name} to {what} — and decide with real numbers instead of gut feeling.",
      "Before you sign, borrow, or buy, run the numbers: the {name} lets you {what} in seconds, with the same math a professional would do by hand.",
      "Nobody enjoys surprise costs. The {name} is the fastest way to {what} before money changes hands.",
    ],
    tips: [
      "Run it twice — once with your best guess, once with a pessimistic one. If the numbers still work in the pessimistic case, you have got a solid plan.",
      "Compare at least two scenarios side by side. The gap between a good choice and a great one is usually smaller — and more findable — than people think.",
    ],
    mistakes: [
      "Mixing up annual and monthly figures — a 12% annual rate is 1% a month, not 12%. Check what the {input} field actually expects before trusting the answer.",
      "Forgetting the add-ons: taxes, fees, and tips on top of the headline number. Fold them into your inputs for a total you can trust.",
    ],
    when: [
      "When a dollar decision is on the line — comparing two offers, checking whether you can afford something, or seeing the true total before you commit.",
      "Anytime you would otherwise guess: budgeting a bill, splitting costs with others, or sanity-checking a quote before money changes hands.",
    ],
    scenarios: ["Splitting a bill with friends", "Planning a monthly budget", "Comparing two offers", "Checking a quote", "Planning ahead"],
  },
  converters: {
    openers: [
      "Unit mix-ups cause more mistakes than bad math. Use the {name} to {what} instantly — type a number, get the answer, no lookup tables.",
      "With the {name}, you can {what} in one step: type your value once and read off every equivalent.",
      "Memorizing conversion factors is a waste of brain space. The {name} exists to {what} for you, instantly and exactly.",
    ],
    tips: [
      "For critical uses — engineering, cooking at scale, anything safety-related — note the decimal places shown and round only at the very end.",
      "Bookmark conversions you use often. A two-second check here beats a misremembered factor every time.",
    ],
    mistakes: [
      "Converting in the wrong direction — typing miles where kilometers belong is the classic slip. Glance at the unit labels before trusting the answer.",
      "Mixing similarly named units, like US vs. imperial gallons. The dropdown spells out each option — pick the exact one you mean.",
    ],
    when: [
      "Whenever two unit systems collide — traveling abroad, following a foreign recipe, reading a spec sheet, or doing homework with mixed units.",
      "Anytime you catch yourself searching for a conversion factor. Typing the number here is faster, and you cannot misremember the factor.",
    ],
    scenarios: ["Travel planning", "Following a recipe", "Reading a spec sheet", "Homework help", "Everyday conversions"],
  },
  health: {
    openers: [
      "Your body runs on numbers, and guessing is not a strategy. Use the {name} to {what} — turning raw measurements into something you can act on.",
      "Small inputs, big insight: the {name} helps you {what} from just a few measurements.",
      "It is hard to improve what you do not measure. The {name} gives you a concrete starting point to {what}.",
    ],
    tips: [
      "Recheck monthly rather than daily. Trends over weeks tell the real story; daily noise just causes stress.",
      "Pair the number with how you actually feel. Data plus self-awareness beats either one alone.",
    ],
    mistakes: [
      "Measuring sloppily. Being off by a couple of inches or pounds on {input} moves the result more than you would expect — measure carefully.",
      "Treating the output as a diagnosis. It is a screening number: great for tracking trends, not a substitute for professional advice.",
    ],
    when: [
      "When you want a baseline: starting a fitness plan, tracking progress month to month, or preparing numbers for a doctor's visit.",
      "Anytime curiosity strikes about your own metrics — it is a quick check, not a medical verdict.",
    ],
    scenarios: ["Morning routine check", "Fitness tracking", "Preparing for a checkup", "Setting a goal", "Curious comparison"],
  },
  math: {
    openers: [
      "Some calculations are too tedious to do by hand and too important to guess. Use the {name} to {what} — accurately, every time.",
      "Math homework goes faster with a reliable checker. The {name} helps you {what} in seconds.",
      "You could work it out longhand, or you could be done already. The {name} is here to {what} instantly.",
    ],
    tips: [
      "Solve it yourself first, then verify here. You will catch your own patterns of mistakes much faster that way.",
      "If an answer surprises you, change one input at a time — you will see exactly which part of the math drives the result.",
    ],
    mistakes: [
      "Rounding too early. Keep full precision through every step and let the calculator round only the final display.",
      "Forgetting the order of operations when checking by hand — brackets and exponents before multiplication and division.",
    ],
    when: [
      "When you need the right number, not a guess: checking homework, verifying a spreadsheet, or settling a debate with arithmetic.",
      "Anytime the calculation is too tedious for mental math but too important to eyeball.",
    ],
    scenarios: ["Homework check", "Double-checking a spreadsheet", "Settling a debate", "Quick mental-math verify", "Class assignment"],
  },
  algebra: {
    openers: [
      "Algebra is unforgiving of small slips — one dropped sign ruins the whole problem. Use the {name} to {what} and check each step.",
      "Stuck on a problem that will not simplify? The {name} helps you {what}, handling the mechanical parts while you focus on understanding.",
      "Nobody learns algebra by staring at a wrong answer. The {name} lets you {what} so you can verify your work line by line.",
    ],
    tips: [
      "Use the result to work backward: plug the answer into the original problem and confirm it holds. That is how mathematicians check themselves.",
      "When stuck, simplify in smaller jumps. Big leaps hide sign errors; small steps expose them.",
    ],
    mistakes: [
      "Dropping a negative sign mid-problem — the single most common algebra error. If an answer looks off, check signs first.",
      "Only checking the final answer. Verify each step and you will find the slip in seconds instead of redoing everything.",
    ],
    when: [
      "When you are working through problems and want to verify each step, not just the final answer.",
      "During homework, exam prep, or anytime a simplification does not look right and you need a second opinion.",
    ],
    scenarios: ["Homework check", "Step-by-step practice", "Exam prep", "Checking your work", "Class assignment"],
  },
  physics: {
    openers: [
      "Physics problems live or die on setup and units. The {name} applies the standard equations to {what} from your measurements.",
      "Lab reports and problem sets do not grade effort — they grade the right number. Use the {name} to {what} with proper precision.",
      "Real-world physics means real numbers with real units. The {name} is built to {what} while keeping the dimensions straight.",
    ],
    tips: [
      "Always do a reality check on the magnitude. If the answer is off by a factor of 1,000, a unit slipped somewhere.",
      "Write down your inputs before calculating. When a result looks wrong, the input list is the first place to look.",
    ],
    mistakes: [
      "Mixing unit systems — meters with feet, grams with pounds. Convert every input to one consistent system first.",
      "Applying the formula outside its assumptions. Textbook equations assume ideal conditions; real setups add friction, heat loss, and noise.",
    ],
    when: [
      "When a lab report, problem set, or design check needs the number done right — with units kept straight.",
      "Anytime you are applying a textbook equation to real measurements and want to skip the arithmetic slips.",
    ],
    scenarios: ["Lab calculation", "Homework problem", "Design sanity check", "Quick estimate", "Class assignment"],
  },
  statistics: {
    openers: [
      "Raw data tells you nothing until you summarize it. Use the {name} to {what} — turning a pile of numbers into insight.",
      "Averages lie when you compute them wrong. The {name} helps you {what} carefully, using the textbook definitions.",
      "Before you draw conclusions, describe your data — use the {name} to {what} and get the summary statistics that matter.",
    ],
    tips: [
      "Plot your data if you can — a quick look catches outliers that silently warp every statistic.",
      "Report the median alongside the mean when data is skewed. Together they tell a more honest story.",
    ],
    mistakes: [
      "Trusting tiny samples. Five data points can fake a pattern — the more values you enter, the more the result means.",
      "Letting one typo poison everything. A single misplaced decimal drags the mean, range, and deviation all off course.",
    ],
    when: [
      "When you have raw numbers and need the story: survey results, experiment data, or a class dataset.",
      "Before drawing conclusions from data — summarize first, interpret second.",
    ],
    scenarios: ["Summarizing survey data", "Checking an assignment", "Quick data overview", "Experiment results", "Class project"],
  },
  time: {
    openers: [
      "Time math is deceptively tricky — zones, formats, and daylight saving all conspire against you. Use the {name} to {what} without the headache.",
      "Missed meetings and botched conversions usually come down to arithmetic, not intent. The {name} lets you {what} in one step.",
      "When the clock matters, do not do the conversion in your head. Use the {name} to {what} — fast and exact.",
    ],
    tips: [
      "For anything important, state times with their zone attached — “3 PM ET” leaves no room for confusion.",
      "Add a buffer around converted times when daylight-saving boundaries are near. Clocks change; plans should not break.",
    ],
    mistakes: [
      "Ignoring daylight saving. If a result is off by exactly one hour, DST is almost always the culprit — confirm it for your dates.",
      "Doing hour/minute rollover as base-100 math. Remember: 60 minutes make an hour, so 1:45 plus 0:30 is 2:15, not 1:75.",
    ],
    when: [
      "When zones, formats, or daylight saving threaten to scramble a schedule — meetings, travel, and deadlines.",
      "Anytime you are converting between time representations and cannot afford an off-by-one-hour mistake.",
    ],
    scenarios: ["Scheduling a call", "Planning a trip", "Converting a timestamp", "Coordinating across zones", "Daily planning"],
  },
  loans: {
    openers: [
      "Borrowing money is really about one question: what will it cost me in total? Use the {name} to {what} — no surprises later.",
      "Lenders quote the numbers that flatter them. The {name} helps you {what} and see the full picture — payments, interest, and timeline.",
      "A loan decision you make in ten minutes can cost you for ten years. Use the {name} to {what} before you commit.",
    ],
    tips: [
      "Ask the lender for every fee in writing, then add them to your inputs. Headline rates never include the full picture.",
      "If you can afford even $50 extra a month toward principal, model it — the interest savings are usually eye-opening.",
    ],
    mistakes: [
      "Shopping by monthly payment alone. Two loans can share a payment and hide wildly different total interest — always compare total cost.",
      "Ignoring fees and points. A lower rate with heavy fees often costs more than a slightly higher no-fee rate.",
    ],
    when: [
      "Before signing anything: comparing offers, testing what you can afford, or planning how fast to pay down debt.",
      "When the monthly payment looks fine but you want to see the total cost hiding behind it.",
    ],
    scenarios: ["Comparing loan offers", "Planning a payoff", "Affordability check", "Refinance math", "Budget planning"],
  },
  retirement: {
    openers: [
      "Retirement planning rewards the early and the consistent. Use the {name} to {what} and see what your savings could become.",
      "Will you have enough? That is not a feeling — it is arithmetic. The {name} helps you {what} so you can plan with confidence.",
      "Small changes now compound into big differences later. Use the {name} to {what} and make the trade-offs concrete.",
    ],
    tips: [
      "Automate your contributions. The best plan is the one that happens without willpower.",
      "Revisit the numbers yearly. Income, expenses, and goals drift — your plan should drift with them, deliberately.",
    ],
    mistakes: [
      "Forgetting inflation. A result in future dollars buys less than the same number today — mentally discount it.",
      "Assuming you will “catch up later.” Starting five years earlier usually beats saving 20% more later — time does the heavy lifting.",
    ],
    when: [
      "When you ask “will I have enough?” — once a year at minimum, and whenever income, savings, or goals change.",
      "When comparing strategies: saving more now vs. later, or testing what different return assumptions do to your plan.",
    ],
    scenarios: ["On-track check", "What-if scenario", "Catch-up planning", "Comparing strategies", "Annual review"],
  },
  stocks: {
    openers: [
      "Investing runs on scenarios, not certainties. Use the {name} to {what} before you commit cash.",
      "Headline returns hide the details that matter. The {name} helps you {what}, breaking the math down clearly.",
      "Never invest in what you cannot quantify. The {name} lets you {what} so you know exactly what the numbers imply.",
    ],
    tips: [
      "Decide your exit criteria before you enter. A plan made calmly beats decisions made mid-panic.",
      "Size positions so that being wrong does not hurt. Survival first, optimization second.",
    ],
    mistakes: [
      "Treating a modeled return as a promise. Use the calculator for scenarios — best, worst, and middle — not forecasts.",
      "Leaving out fees, taxes, and dividends. The headline price move is only part of your real return.",
    ],
    when: [
      "When you are sizing up an investment: modeling scenarios, comparing two opportunities, or checking what a return really means.",
      "Before committing cash — quantify the upside and the downside first.",
    ],
    scenarios: ["Sizing a position", "Modeling returns", "Comparing investments", "Quick sanity check", "Portfolio review"],
  },
  credit: {
    openers: [
      "Credit card math is designed to confuse — minimums, APRs, and compounding all at once. Use the {name} to {what} in plain numbers.",
      "Debt feels abstract until you see the total cost. Use the {name} to {what} and turn statements into a payoff plan.",
      "A few percentage points on a card balance cost real money. Use the {name} to {what} — and see exactly how much.",
    ],
    tips: [
      "Set payments to autopay at least the minimum — one late fee plus interest wipes out months of progress.",
      "Tackle the highest-rate balance first while keeping everything else current. The math favors it every time.",
    ],
    mistakes: [
      "Paying only the minimum. Even a small extra each month slashes total interest — test it in the calculator and see.",
      "Maxing out utilization. Balances near your limit hurt both the math and your credit score — stay under 30%.",
    ],
    when: [
      "When debt needs a plan: comparing payoff strategies, understanding what a balance truly costs, or choosing between cards.",
      "Anytime you are tempted by the minimum payment — run the total cost first.",
    ],
    scenarios: ["Payoff planning", "Comparing cards", "Understanding the true cost", "Monthly budget check", "Debt strategy"],
  },
};

const DEFAULT_VOICE: CatVoice = {
  openers: [
    "Some calculations are too tedious to do by hand and too important to guess. Use the {name} to {what} — accurately, every time.",
    "You could work it out longhand, or you could be done already. The {name} is here to {what} instantly.",
    "Getting the right number matters more than showing the work. Use the {name} to {what} in seconds.",
  ],
  tips: [
      "If an answer surprises you, change one input at a time — you will see exactly which part of the math drives the result.",
      "Try the worked examples below first. They show realistic numbers you can sanity-check your own inputs against.",
  ],
  mistakes: [
    "Typing a value into the wrong box — especially {input}. A quick glance at the field labels before calculating prevents most bad answers.",
    "Rounding too early. Enter full-precision numbers and let the calculator round only the final display.",
  ],
  when: [
    "Whenever you need the answer without the arithmetic — quick checks, homework, planning, or settling a debate with real numbers.",
    "Anytime doing it by hand would take longer than typing the numbers in here.",
  ],
  scenarios: ["Everyday use", "Quick check", "Planning ahead", "Comparing options", "Double-checking"],
};

function voiceFor(category: string): CatVoice {
  return VOICES[category] ?? DEFAULT_VOICE;
}

const HOW_IT_WORKS = [
  "Here is how it works: enter your {inputs}, and the calculator evaluates {formula} to produce {outputs}.",
  "The mechanics are simple — {formula} — applied to the {inputs} you provide, returning {outputs}.",
  "You supply the {inputs}; the calculator runs {formula} and hands back {outputs}, updating live as you type.",
  "Behind the scenes it is {formula}. Feed in your {inputs} and out come {outputs} — no manual arithmetic, no spreadsheet formulas.",
];

function fill(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}

/**
 * Reference form of a field label for "your X" phrasing.
 * "Your Birth Day" -> "birth day" (avoids "your Your Birth Day").
 */
function refLabel(label: string): string {
  const m = label.match(/^(your|my)\s+(.+)$/i);
  if (m) return m[2].toLowerCase();
  return label;
}

// ─── Description ──────────────────────────────────────────────────────────────
// Unique, calculator-specific intro assembled from: a category-voiced opener,
// a plain-words explanation of the actual formula, and practical guidance.

function generateDescription(entry: RegistryEntry, schema?: CalculatorSchema): string {
  const h = hashStr(entry.slug);
  const voice = voiceFor(entry.category);
  const what = describeWhat(entry);
  const inputs = schema ? inputFields(schema) : [];
  const computed = schema ? computedFields(schema) : [];

  const p1 = fill(pick(voice.openers, h, 0), { name: entry.name, what });

  const inputStr = inputs.length ? joinLabels(inputs.map((f) => refLabel(f.label))) : "your values";
  const outputStr = computed.length
    ? joinLabels(computed.map((f) => f.label))
    : "the answer";
  const formula = plainFormula(entry, schema);
  const p2 = fill(pick(HOW_IT_WORKS, h, 1), {
    inputs: inputStr,
    outputs: outputStr,
    formula,
  });

  const paras = [p1, p2];
  // Vary paragraph count so pages don't share an identical skeleton.
  if (h % 4 !== 0) {
    paras.push(fill(pick(voice.tips, h, 2), { name: entry.name }));
  }
  return paras.join("\n\n");
}

// ─── How-to steps ─────────────────────────────────────────────────────────────
// Steps name the calculator's actual fields (with example values), instead of
// the old generic "type your numbers in the input boxes".

function generateSteps(entry: RegistryEntry, schema?: CalculatorSchema): string[] {
  const h = hashStr(entry.slug);
  const inputs = schema ? inputFields(schema) : [];
  const computed = schema ? computedFields(schema) : [];

  if (!inputs.length) {
    return [
      `Open the ${entry.name} on ${SITE_DISPLAY_NAME}.`,
      "Type your values into the input fields.",
      "If a unit menu is available, pick the units your numbers are in.",
      "Read the calculated results, which update as you type.",
      "Try the worked examples below to see the math in action.",
    ];
  }

  const verbs = ["Enter", "Type in", "Fill in", "Add"];
  const steps: string[] = [];
  for (const f of inputs.slice(0, 3)) {
    const hint =
      f.defaultValue !== undefined && f.type !== "select"
        ? ` — try ${fmtInputValue(f, f.defaultValue)} to start`
        : "";
    const verb = pick(verbs, h, steps.length);
    steps.push(`${verb} your ${refLabel(f.label)}${hint}.`);
  }
  const withUnits = inputs.find((f) => f.units && f.units.length > 1);
  if (withUnits && steps.length < 5) {
    steps.push(
      `Use the dropdown next to ${withUnits.label} to switch between ${joinLabels(
        withUnits.units!.map((u) => u.label)
      )} — conversion is automatic.`
    );
  }
  if (computed.length && steps.length < 6) {
    steps.push(
      `Read your ${joinLabels(computed.map((f) => f.label))} — results update instantly as you type, no submit button needed.`
    );
  }
  if (steps.length < 6) {
    steps.push("Try a preset example below to see realistic numbers and check your understanding.");
  }
  return steps.slice(0, 6);
}

// ─── Worked examples ──────────────────────────────────────────────────────────
// Built from the schema's own examples with REAL computed results —
// e.g. "Boiling point of water: Celsius (°C) = 100 → Fahrenheit (°F) = 212.00 °F".

function generateExamples(
  entry: RegistryEntry,
  schema?: CalculatorSchema
): SEOContent["examples"] {
  if (schema?.examples?.length) {
    const inputs = inputFields(schema);
    const computed = computedFields(schema);
    return schema.examples.slice(0, 4).map((ex) => {
      const known = inputs.filter((f) => (ex.inputs as Record<string, unknown>)[f.id] !== undefined);
      const calculation = known
        .map((f) => `${f.label} = ${fmtInputValue(f, (ex.inputs as Record<string, unknown>)[f.id])}`)
        .join(", ");
      const outs = computeOutputs(schema, ex.inputs as Record<string, unknown>);
      const solved = computed.filter((f) => isSolvedOutput(outs[f.id]));
      const result =
        solved.length > 0
          ? solved.map((f) => `${f.label} = ${fmtOutputValue(f, outs[f.id])}`).join("; ")
          : "See the calculator above";
      return { label: ex.label, calculation, result };
    });
  }
  // Entries without a schema: explain the formula instead of filler rows.
  const formula = plainFormula(entry, schema);
  return [
    {
      label: "How it works",
      calculation: formula === "the standard formula" ? (entry.formula ?? "See the formula above") : formula,
      result: "Computed instantly from your inputs",
    },
    {
      label: "Your turn",
      calculation: "Enter your own numbers in the calculator above",
      result: "Results update live as you type",
    },
  ];
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────
// Derived from the calculator's actual inputs, formula, units and category —
// never the old generic "Is this free? / Can I use it on mobile?" set.

function generateFAQs(entry: RegistryEntry, schema?: CalculatorSchema): Array<{ q: string; a: string }> {
  const h = hashStr(entry.slug);
  const voice = voiceFor(entry.category);
  const inputs = schema ? inputFields(schema) : [];
  const computed = schema ? computedFields(schema) : [];
  const faqs: Array<{ q: string; a: string }> = [];

  // What to enter — names the real fields.
  if (inputs.length > 0) {
    const first = inputs[0];
    const prefill =
      first.defaultValue !== undefined && first.type !== "select"
        ? ` Sensible starting values are pre-filled — ${first.label} starts at ${fmtInputValue(first, first.defaultValue)} — so adjust from there.`
        : "";
    faqs.push({
      q: `What do I need to enter in the ${entry.name}?`,
      a: `You will enter your ${joinLabels(inputs.map((f) => refLabel(f.label)))}.${prefill}`,
    });
  }

  // How the result is calculated — the actual formula in plain words.
  const outLabel = computed[0]?.label ?? "result";
  const formula = plainFormula(entry, schema);
  faqs.push({
    q: `How is the ${outLabel} calculated?`,
    a:
      formula === "the standard formula"
        ? `The calculator applies the standard published equation for this calculation to the numbers you enter. Because it recalculates on every keystroke, you can nudge any input and watch the answer change in real time.`
        : `It evaluates ${formula} using the values you enter. Because it recalculates on every keystroke, you can nudge any input and watch the answer change in real time.`,
  });

  // Candidate pool — only applicable ones are added.
  const pool: Array<{ q: string; a: string }> = [];

  const withHelp = inputs.find((f) => f.helpText && f.helpText.trim().length > 4);
  if (withHelp?.helpText) {
    pool.push({ q: `What does "${withHelp.label}" mean?`, a: withHelp.helpText.trim() });
  }

  const withUnits = inputs.find((f) => f.units && f.units.length > 1);
  if (withUnits?.units) {
    pool.push({
      q: `Which units can I use for ${withUnits.label}?`,
      a: `You can enter ${withUnits.label} in ${joinLabels(withUnits.units.map((u) => u.label))}. Pick your unit from the dropdown and the calculator converts everything behind the scenes.`,
    });
  }

  const withSelect = inputs.find((f) => f.type === "select" && f.selectOptions?.length);
  if (withSelect?.selectOptions) {
    pool.push({
      q: `What should I choose for "${withSelect.label}"?`,
      a: `Pick the option that matches your situation: ${withSelect.selectOptions.map((o) => o.label).join(", ")}. The math adjusts automatically for each choice.`,
    });
  }

  // Exact conversion factor — only for pure multiplicative conversions, where
  // probing with an input of 1 yields a truthful per-unit factor.
  if (entry.category === "converters" && schema && inputs.length > 0 && computed.length > 0) {
    const raw = entry.formula ?? Object.values(schema.formulas ?? {})[0] ?? "";
    const firstId = inputs[0].id;
    const multiplicative = new RegExp(
      `^[\\s\\(]*${escapeRegExp(firstId)}[\\s\\*\\/\\d\\.\\(\\)\\^]*$`
    ).test(raw.replace(/\s+/g, ""));
    if (multiplicative && !/[+-]/.test(raw.replace(firstId, "").replace(/e[+-]?\d+/gi, ""))) {
      const probe = computeOutputs(schema, { [firstId]: 1 });
      const v = probe[computed[0].id];
      if (typeof v === "number" && isFinite(v) && v !== 0) {
        pool.push({
          q: `What is the exact ${inputs[0].label} to ${computed[0].label} conversion factor?`,
          a: `One ${inputs[0].label} equals ${fmtNum(v, 0, 6)} ${computed[0].label}. The calculator uses the full-precision factor, so it stays accurate for very large and very small values alike.`,
        });
      }
    }
  }

  const firstInputLabel = inputs[0]?.label ?? "the first field";
  pool.push({
    q: pick(
      ["What is the most common mistake people make here?", "What should I watch out for?"],
      h,
      3
    ),
    a: fill(pick(voice.mistakes, h, 4), { name: entry.name, input: firstInputLabel }),
  });

  pool.push({
    q: `When should I use the ${entry.name}?`,
    a: pick(voice.when, h, 5),
  });

  pool.push({
    q: "Why does my result differ slightly from another calculator?",
    a: "Small differences almost always come from rounding or from slightly different input assumptions — for example, monthly vs. annual rates, or which units were used. This calculator keeps full precision internally and rounds only the displayed result.",
  });

  // Deterministic shuffle of the pool, then fill up to 5–6 FAQs.
  const target = 5 + (h % 2);
  const ordered = [...pool].sort((a, b) => hashStr(a.q + h) - hashStr(b.q + h));
  for (const f of ordered) {
    if (faqs.length >= target) break;
    if (!faqs.some((x) => x.q === f.q)) faqs.push(f);
  }
  return faqs.slice(0, 6);
}

// ─── Square root reference table ──────────────────────────────────────────────
export function generateSqrtTable(max = 30): Array<{ n: number; sqrt: string }> {
  return Array.from({ length: max }, (_, i) => ({
    n: i + 1,
    sqrt: Math.sqrt(i + 1).toFixed(6),
  }));
}

// ─── Public API ───────────────────────────────────────────────────────────────
export function getSEOContent(entry: RegistryEntry): SEOContent {
  const custom = CUSTOM_CONTENT[entry.slug] ?? {};
  const schema = getSchemaBySlug(entry.slug);

  return {
    description: custom.description ?? generateDescription(entry, schema),
    howToSteps:  custom.howToSteps ?? generateSteps(entry, schema),
    formulaText: entry.formula ?? "See the explanation section below.",
    examples:    custom.examples  ?? generateExamples(entry, schema),
    faqs:        custom.faqs      ?? generateFAQs(entry, schema),
    sqrtTable:   entry.slug.includes("square-root") ? generateSqrtTable() : undefined,
  };
}
