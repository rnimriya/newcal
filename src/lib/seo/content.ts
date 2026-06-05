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
};

// ─── Generate FAQs for any calculator from its metadata ───────────────────────
function generateFAQs(entry: RegistryEntry): Array<{ q: string; a: string }> {
  const formulaAns = entry.formula
    ? `This calculator runs the math formula ${entry.formula}.`
    : `This calculator uses standard math equations checked for absolute correctness.`;

  return [
    {
      q: `What is the ${entry.name}?`,
      a: `The ${entry.name} is a free online solver. It helps you ${entry.shortDesc.toLowerCase().replace(/\.$/, "")}. You do not need to register or install files.`,
    },
    {
      q: `How do I use the ${entry.name}?`,
      a: `Type your values in the empty boxes. The solver calculates outputs in real time. Select new units from the menu if you want to convert.`,
    },
    {
      q: `Is this ${entry.name} free?`,
      a: `Yes, this tool is free. There are no limits, no sign-ups, and no hidden costs.`,
    },
    {
      q: `What formula does this calculator use?`,
      a: formulaAns,
    },
    {
      q: `Can I use this on my mobile phone?`,
      a: `Yes, it works on mobile phones, tablets, and computers. You can also save it to your home screen to run it offline.`,
    },
    {
      q: `How accurate is the calculation?`,
      a: `The calculator uses standard 64-bit math checks. This guarantees accurate results up to 15 digits. Double check your numbers for critical choices.`,
    },
  ];
}

// ─── Generate How-To steps for any calculator ─────────────────────────────────
function generateSteps(entry: RegistryEntry): string[] {
  return [
    `Open the ${entry.name} on CalcUnit.net.`,
    `Type your numbers in the input boxes. The calculator computes the outputs automatically.`,
    `Click the unit selector to switch units if needed.`,
    `Watch the results update instantly as you type. You do not need to click solve.`,
    `Click the bookmark icon to save this page for later.`,
    `Click the examples buttons to load preset numbers and see how calculations work.`,
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
  const formulaStr = entry.formula ? ` It runs the formula ${entry.formula} to compute results.` : "";
  return `Use the free ${entry.name} to solve your problems. This online tool requires no accounts or downloads. Type your input values. The calculator outputs precise answers in real time.${formulaStr}

You can use this tool for school work, homework, or quick everyday calculations. Every solver on CalcUnit.net is built to be accurate and fast. It works on mobile screens and computers.`;
}

function generateExamples(entry: RegistryEntry): SEOContent["examples"] {
  return [
    { label: "Standard Calculation",   calculation: `Calculate ${entry.name.toLowerCase()} using common values`, result: "Check the outputs above" },
    { label: "Custom Input",  calculation: "Change the numbers to match your specific problem", result: "Result updates instantly" },
    { label: "Extreme Values",       calculation: "Type zero or large values to test formulas", result: "Solver handles edge cases correctly" },
  ];
}
