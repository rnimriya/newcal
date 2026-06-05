import type { RegistryEntry } from "@/lib/registry";

// ─── SEO Content Generator ────────────────────────────────────────────────────
// Produces structured content for every calculator page:
//   description, steps, formula block, examples table, FAQs, sqrt table

export interface SEOContent {
  description: string;
  howToSteps: string[];
  formulaText: string;
  examples: Array<{ label: string; calculation: string; result: string }>;
  faqs: Array<{ q: string; a: string }>;
  sqrtTable?: Array<{ n: number; sqrt: string }>;
  relatedHeading?: string;
}

// Built-in content for top 30 calculators
const CUSTOM_CONTENT: Record<string, Partial<SEOContent>> = {
  "bmi-calculator": {
    description: `Your BMI — Body Mass Index — is a simple number that tells you where your weight sits relative to a healthy range for your height. It does not measure body fat directly, but it's a good screening tool that doctors have used for decades. You calculate it by dividing your weight in kilograms by the square of your height in meters.

Knowing your BMI takes 10 seconds and gives you a concrete starting point. A result under 18.5 is underweight. Between 18.5 and 24.9 is the normal range. Between 25 and 29.9 is overweight. Above 30 is classified as obese. These are World Health Organization benchmarks used globally.

BMI has limits. Muscular people can score "overweight" even with very low body fat. For children or the elderly, different charts apply. Use it as a data point, not a verdict.`,
    howToSteps: [
      "Enter your weight. Switch between kilograms and pounds using the unit selector.",
      "Enter your height. You can use centimeters, meters, or inches.",
      "Your BMI score and weight category appear instantly.",
      "Check your ideal weight range — that's the weight you'd need to be in the 'Normal' zone.",
      "Try the example presets to see how results change for different body types.",
    ],
    faqs: [
      { q: "What is a healthy BMI for adults?", a: "A healthy BMI is between 18.5 and 24.9. This range is associated with the lowest risk of weight-related health conditions for most adults." },
      { q: "Is BMI accurate for athletes?", a: "Not always. Muscle weighs more than fat, so athletes often have a BMI in the overweight range even with low body fat. BMI doesn't distinguish between muscle and fat." },
      { q: "How often should I calculate my BMI?", a: "Once a month is enough for general tracking. If you're actively working on weight loss or gain, calculate it every two weeks to see trends." },
      { q: "Can children use this BMI calculator?", a: "No. Children use age and sex-specific BMI charts called BMI-for-age. This calculator uses the adult formula only." },
      { q: "What happens if my BMI is over 30?", a: "A BMI over 30 is classified as obese and increases the risk of conditions like type 2 diabetes, heart disease, and joint problems. Talk to a healthcare professional about next steps." },
      { q: "Does BMI differ for men and women?", a: "The formula is the same, but body fat distribution differs between sexes. Women naturally carry slightly more body fat than men at the same BMI." },
    ],
    sqrtTable: undefined,
  },

  "compound-interest-calculator": {
    description: `Compound interest is what happens when you earn interest on your interest, not just on your original investment. That small difference creates an enormous gap over time between simple and compound growth.

Put in $10,000 at 8% annual interest for 30 years. With simple interest, you earn $24,000 in interest. With compound interest (monthly), you earn about $90,000. Same money, same rate, very different outcome.

The three levers are rate, time, and compounding frequency. Time is the most powerful. Starting 10 years earlier often matters more than picking a higher interest rate. Monthly compounding beats annual compounding because interest compounds on interest twelve times a year instead of once.`,
    howToSteps: [
      "Enter your starting investment amount (the principal).",
      "Set the annual interest rate as a percentage.",
      "Choose how many years you will keep the investment.",
      "Select the compounding frequency — monthly is standard for savings accounts.",
      "Optionally add a monthly contribution to see how regular additions affect growth.",
      "Your future value, total interest earned, and effective annual rate appear in real time.",
    ],
    faqs: [
      { q: "What does compounding frequency mean?", a: "It's how many times per year interest is calculated and added to your balance. Monthly (12x) compounds more often than annually (1x), so you earn slightly more at the same nominal rate." },
      { q: "What is the effective annual rate?", a: "The effective annual rate (EAR) accounts for compounding and shows your true yearly return. A 12% nominal rate compounded monthly gives an EAR of about 12.68%." },
      { q: "How does monthly contribution change the result?", a: "Adding even $100 per month can dramatically increase the final amount. Regular contributions let compounding work on a larger balance every cycle." },
      { q: "What's the Rule of 72?", a: "Divide 72 by your annual interest rate to get the approximate number of years it takes for your money to double. At 8%, your money doubles roughly every 9 years." },
      { q: "Is compound interest calculated daily or monthly in savings accounts?", a: "Most US savings accounts compound daily but credit monthly. Online high-yield accounts often compound and credit daily." },
    ],
  },

  "celsius-to-fahrenheit": {
    description: `Converting Celsius to Fahrenheit is one of the most common unit conversions in everyday life. You need it when checking weather apps in different countries, following recipes from American cookbooks, or understanding medical temperature readings.

The formula is simple: multiply the Celsius temperature by 9/5, then add 32. So 0°C equals 32°F (freezing point of water), and 100°C equals 212°F (boiling point). Body temperature is 37°C, which is 98.6°F.

The US is one of only three countries that still uses Fahrenheit officially. The rest of the world uses Celsius. If you travel internationally or read foreign weather reports, this conversion comes up constantly.`,
    howToSteps: [
      "Type your temperature value in the Celsius field.",
      "The Fahrenheit result appears instantly as you type.",
      "To reverse it — Fahrenheit to Celsius — just clear the Celsius field and type in the Fahrenheit field.",
      "Use the common reference table below for quick lookups.",
    ],
    faqs: [
      { q: "At what temperature are Celsius and Fahrenheit the same?", a: "At -40 degrees. Both scales meet at -40°C = -40°F. It's the only point where they're identical." },
      { q: "Why does the US use Fahrenheit?", a: "The US adopted Fahrenheit before the Celsius scale was standardized internationally. Switching now would require massive infrastructure changes, so it has remained." },
      { q: "What is normal body temperature in Fahrenheit?", a: "Normal body temperature is 98.6°F (37°C). A fever is generally above 100.4°F (38°C)." },
      { q: "What is room temperature in Fahrenheit?", a: "Comfortable room temperature is typically between 68°F and 72°F, which is 20°C to 22°C." },
    ],
  },

  "quadratic-formula-calculator": {
    description: `A quadratic equation is any equation in the form ax² + bx + c = 0. The quadratic formula gives you the exact solutions (called roots) every time, without guessing or trial and error.

The formula always works. Factoring works sometimes, completing the square works always but takes longer. The quadratic formula is your reliable fallback for any quadratic.

The discriminant (b² - 4ac) tells you what kind of answers to expect before you solve. Positive discriminant: two real solutions. Zero: one repeated solution (a perfect square). Negative: two complex solutions with imaginary numbers.`,
    howToSteps: [
      "Enter the coefficient a (the number in front of x²). It cannot be zero.",
      "Enter the coefficient b (the number in front of x).",
      "Enter the constant c.",
      "Both values of x appear instantly, along with the discriminant.",
      "If the discriminant is negative, the solutions are complex numbers.",
    ],
    faqs: [
      { q: "What if a equals zero?", a: "If a = 0, it's not a quadratic equation — it's linear. The quadratic formula doesn't apply. Solve it as ax + b = 0 instead." },
      { q: "What is the discriminant?", a: "The discriminant is the part under the square root: b² - 4ac. It tells you how many real solutions exist before you calculate them." },
      { q: "Can a quadratic have no real solutions?", a: "Yes. When the discriminant is negative, the square root of a negative number gives imaginary solutions. The parabola doesn't cross the x-axis." },
      { q: "What does it mean when both roots are equal?", a: "When b² - 4ac = 0, both solutions are the same number. This means the parabola just touches the x-axis at one point (its vertex)." },
    ],
  },

  "km-to-miles": {
    description: `Kilometers and miles measure the same thing — distance — but one is metric and the other is US customary. You need this conversion constantly when traveling, reading road signs in different countries, or comparing running and cycling distances.

One kilometer equals 0.621371 miles. So a 5-kilometer road race is roughly 3.1 miles. A marathon is 42.195 km or 26.219 miles. Speed limits in km/h need this conversion too when renting cars abroad.`,
    howToSteps: [
      "Enter the distance in kilometers.",
      "The equivalent in miles shows immediately.",
      "For the reverse (miles to km), use our Miles to Kilometers calculator.",
    ],
    faqs: [
      { q: "How many miles is 1 kilometer?", a: "1 kilometer equals approximately 0.6214 miles. Or think of it as about 5/8 of a mile." },
      { q: "How many kilometers is 1 mile?", a: "1 mile equals 1.60934 kilometers. A common rough estimate is 1.6 km per mile." },
      { q: "How far is a 5K in miles?", a: "A 5K race is 5 kilometers, which equals 3.107 miles." },
      { q: "Is km/h the same as kph?", a: "Yes. km/h and kph both mean kilometers per hour. They're the same unit written two different ways." },
    ],
  },

  "percentage-calculator": {
    description: `Three types of percentage problems come up again and again: finding a percentage of a number, finding what percentage one number is of another, and finding the original value when you know a percentage of it.

This calculator handles all three. Type any two values and the third solves automatically. You don't need to remember which formula to apply. Just fill in what you know.

Percentages show up everywhere: discounts, tax rates, interest, tips, test scores, nutrition labels, and more. Getting them right is a basic life skill.`,
    howToSteps: [
      "Pick the type of problem: Percentage of a number, What percent is X of Y, or Find the original value.",
      "Enter the values you know.",
      "The answer calculates in real time.",
      "Use the examples tab to see common scenarios like a 20% tip or a 15% discount.",
    ],
    faqs: [
      { q: "What is 20% of 150?", a: "20% of 150 is 30. The formula: 150 × 0.20 = 30." },
      { q: "How do I find what percent 45 is of 180?", a: "Divide 45 by 180 and multiply by 100: (45/180) × 100 = 25%. So 45 is 25% of 180." },
      { q: "How do I find the original price before a 30% discount?", a: "Divide the sale price by 0.70. If the sale price is $70, the original was $70 / 0.70 = $100." },
      { q: "How do I calculate a tip?", a: "For a 20% tip on a $55 meal: 55 × 0.20 = $11 tip. Total with tip: $66." },
    ],
  },

  "simple-interest-calculator": {
    description: `Simple interest is the most straightforward way interest is calculated. The interest amount stays the same each period — it's always based on the original principal, never on previously earned interest.

The formula is I = P × R × T, where P is principal, R is the annual rate as a decimal, and T is time in years. It's used for short-term loans, car loans, and some savings products. It's faster to calculate than compound interest and easier to predict.

For longer investment periods, compound interest earns significantly more. But for borrowing, simple interest often means lower total payments.`,
    howToSteps: [
      "Enter the principal — the original loan or deposit amount.",
      "Enter the annual interest rate as a percentage.",
      "Enter the time period in years (or months and convert).",
      "The interest earned and total amount appear instantly.",
    ],
    faqs: [
      { q: "What is the difference between simple and compound interest?", a: "Simple interest is always calculated on the original principal. Compound interest is calculated on the principal plus accumulated interest, so it grows faster over time." },
      { q: "What loans use simple interest?", a: "Car loans, most personal loans, and student loans often use simple interest. Mortgages use compound interest." },
      { q: "How do I convert monthly rate to annual?", a: "Multiply the monthly rate by 12. A 1% monthly rate equals a 12% annual rate." },
    ],
  },

  "discount-calculator": {
    description: `A discount calculator does one thing well: it shows you exactly how much you save and what you actually pay after a percentage off. No mental math, no approximations.

Enter the original price and the discount percentage. You get the sale price, the dollar amount saved, and what fraction of the original you're paying. Useful for shopping, comparing deals, and checking if a "sale" is actually worth it.`,
    howToSteps: [
      "Enter the original price of the item.",
      "Enter the discount percentage.",
      "See the sale price, amount saved, and final cost immediately.",
      "Try stacking discounts: apply one discount, then use the sale price as the new original for a second discount.",
    ],
    faqs: [
      { q: "What is 20% off $85?", a: "20% off $85 saves you $17. You pay $68." },
      { q: "How do I calculate a double discount?", a: "Apply discounts one at a time, not by adding them. A 20% then 10% discount isn't 30% off. It's 28% off the original." },
      { q: "What does BOGO mean?", a: "Buy One Get One — effectively 50% off when buying two items at full price. Or 100% off the cheaper one if items differ in price." },
    ],
  },
};

// ─── Generate FAQs for any calculator from its metadata ───────────────────────
function generateFAQs(entry: RegistryEntry): Array<{ q: string; a: string }> {
  return [
    {
      q: `What is the ${entry.name}?`,
      a: `The ${entry.name} is a free online tool that lets you ${entry.shortDesc.toLowerCase()} No sign-up or download required.`,
    },
    {
      q: `How do I use the ${entry.name}?`,
      a: `Enter your values into the input fields. Results calculate in real time as you type. Switch units using the dropdown next to each field.`,
    },
    {
      q: `Is the ${entry.name} free?`,
      a: `Yes. This calculator is completely free. There are no hidden fees, no accounts to create, and no limits on how many times you can use it.`,
    },
    {
      q: `What formula does the ${entry.name} use?`,
      a: entry.formula
        ? `This calculator uses the formula: ${entry.formula}.`
        : `This calculator uses standard mathematical formulas validated against known references.`,
    },
    {
      q: `Can I use the ${entry.name} on my phone?`,
      a: `Yes. The calculator works on all devices — desktop, tablet, and mobile. It's also installable as a PWA for offline use.`,
    },
    {
      q: `How accurate is the ${entry.name}?`,
      a: `Results are calculated using double-precision floating-point math (64-bit), which is accurate to 15 significant digits. For financial decisions, always verify with a professional.`,
    },
  ];
}

// ─── Generate How-To steps for any calculator ─────────────────────────────────
function generateSteps(entry: RegistryEntry): string[] {
  return [
    `Open the ${entry.name} at CalcUnit.net.`,
    `Enter your values in the input fields. Fields marked with a blue background are computed automatically.`,
    `If the calculator has unit selectors (like kg vs lbs), click the unit button to switch.`,
    `Results update in real time as you type — no need to press a button.`,
    `Click the bookmark icon to save this calculator for quick access later.`,
    `Use the Examples buttons to load preset values and see how the formula works.`,
  ];
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

  return {
    description: custom.description ?? generateDescription(entry),
    howToSteps:  custom.howToSteps ?? generateSteps(entry),
    formulaText: entry.formula ?? "See the explanation section below.",
    examples:    custom.examples  ?? generateExamples(entry),
    faqs:        custom.faqs      ?? generateFAQs(entry),
    sqrtTable:   entry.slug.includes("square-root") ? generateSqrtTable() : undefined,
  };
}

function generateDescription(entry: RegistryEntry): string {
  return `The ${entry.name} is a free online tool you can use right now — no download, no account, and no waiting.

${entry.shortDesc}${entry.formula ? ` The formula behind it is: ${entry.formula}.` : ""} Enter your values and the answer appears in real time.

Use it for school homework, professional calculations, or just quick everyday conversions. Every calculator on CalcUnit.net is built for accuracy and speed.`;
}

function generateExamples(entry: RegistryEntry): SEOContent["examples"] {
  return [
    { label: "Basic example",   calculation: `${entry.name} with typical values`, result: "See the calculator above" },
    { label: "Second example",  calculation: "Change the inputs to match your situation", result: "Result updates automatically" },
    { label: "Edge case",       calculation: "Try entering zero or very large values", result: "Calculator handles edge cases gracefully" },
  ];
}
