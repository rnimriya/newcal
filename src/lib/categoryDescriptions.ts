/**
 * Per-category hero content for category landing pages.
 * Covers all 12 categories defined in registry/categories.ts.
 */

export interface UseCaseItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CategoryDescription {
  tagline: string;
  useCases: [UseCaseItem, UseCaseItem, UseCaseItem];
}

export const CATEGORY_DESCRIPTIONS: Record<string, CategoryDescription> = {
  math: {
    tagline: "Solve everyday math problems in seconds — no pencil required.",
    useCases: [
      { icon: "📐", title: "Geometry & Areas", desc: "Calculate areas, volumes, and angles for any shape — from rectangles to spheres." },
      { icon: "➗", title: "Percentages & Ratios", desc: "Find percentages, discounts, tips, and proportions instantly." },
      { icon: "🔢", title: "Number Operations", desc: "GCF, LCM, square roots, and more — all the fundamentals at your fingertips." },
    ],
  },
  algebra: {
    tagline: "Untangle equations and find unknowns with step-by-step algebraic solvers.",
    useCases: [
      { icon: "🔡", title: "Equation Solving", desc: "Solve linear and quadratic equations for any variable in one click." },
      { icon: "📈", title: "Slopes & Lines", desc: "Calculate slope, intercepts, and distances on a coordinate plane." },
      { icon: "🔁", title: "Systems of Equations", desc: "Solve simultaneous equations with two or more variables effortlessly." },
    ],
  },
  finance: {
    tagline: "Make smarter money decisions with instant financial math.",
    useCases: [
      { icon: "💰", title: "Savings Growth", desc: "See exactly how much your savings grow with compound interest over time." },
      { icon: "📊", title: "Investment Returns", desc: "Calculate ROI, NPV, and IRR to evaluate any investment opportunity." },
      { icon: "🎓", title: "College Planning", desc: "Find out how much to save monthly to hit your college savings goal." },
    ],
  },
  loans: {
    tagline: "Understand exactly what you owe — before you sign anything.",
    useCases: [
      { icon: "🏠", title: "Mortgage Planning", desc: "Calculate monthly payments, total interest, and affordability for your home loan." },
      { icon: "🚗", title: "Auto Loans", desc: "Find the true cost of car financing and compare loan scenarios side by side." },
      { icon: "📉", title: "Debt Payoff", desc: "See how extra payments slash your loan term and total interest paid." },
    ],
  },
  converters: {
    tagline: "Convert any unit instantly — length, weight, temperature, data, and more.",
    useCases: [
      { icon: "📏", title: "Length & Distance", desc: "Switch between metric and imperial units — meters to feet, km to miles, and more." },
      { icon: "🌡️", title: "Temperature", desc: "Convert Celsius, Fahrenheit, Kelvin, and historical scales in one step." },
      { icon: "💾", title: "Digital Storage", desc: "Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes." },
    ],
  },
  statistics: {
    tagline: "Analyze data and draw confident conclusions with built-in statistical tools.",
    useCases: [
      { icon: "📊", title: "Descriptive Stats", desc: "Calculate mean, median, mode, standard deviation, and variance for any dataset." },
      { icon: "🎲", title: "Probability", desc: "Compute probabilities, combinations, and permutations for any scenario." },
      { icon: "📉", title: "Regression & Trends", desc: "Find linear regression lines and correlation coefficients from raw data." },
    ],
  },
  health: {
    tagline: "Track your health metrics and reach your wellness goals faster.",
    useCases: [
      { icon: "⚖️", title: "Body Composition", desc: "Calculate BMI, body fat percentage, and ideal weight ranges for your height." },
      { icon: "🔥", title: "Calories & Nutrition", desc: "Find your daily caloric needs, macro targets, and weight loss timeline." },
      { icon: "🏃", title: "Fitness Planning", desc: "Estimate calorie burn from exercise and plan your workout schedule." },
    ],
  },
  time: {
    tagline: "Plan smarter with date, time, and age calculations at your fingertips.",
    useCases: [
      { icon: "📅", title: "Date Differences", desc: "Calculate the number of days, weeks, or months between any two dates." },
      { icon: "🎂", title: "Age Calculator", desc: "Find your exact age in years, months, and days from your birthday." },
      { icon: "⏰", title: "Countdowns & Deadlines", desc: "Count down to events, due dates, or project milestones." },
    ],
  },
  physics: {
    tagline: "Solve physics problems from mechanics to electromagnetism with precision.",
    useCases: [
      { icon: "⚡", title: "Electricity & Circuits", desc: "Calculate resistance, current, voltage, and power for any circuit." },
      { icon: "🔬", title: "Materials Science", desc: "Find elastic modulus, compressive strength, and bulk modulus for materials." },
      { icon: "🚀", title: "Motion & Forces", desc: "Solve velocity, acceleration, force, and momentum problems instantly." },
    ],
  },
  retirement: {
    tagline: "Plan the retirement you deserve — numbers that tell the full story.",
    useCases: [
      { icon: "🏖️", title: "Retirement Corpus", desc: "Find out exactly how much you need saved to retire comfortably at your target age." },
      { icon: "📆", title: "Monthly Savings Plan", desc: "Calculate the monthly savings required to hit your retirement number." },
      { icon: "💸", title: "Withdrawal Strategy", desc: "Determine safe withdrawal rates and how long your nest egg will last." },
    ],
  },
  stocks: {
    tagline: "Evaluate stocks and portfolios with institutional-grade financial models.",
    useCases: [
      { icon: "📈", title: "Expected Returns", desc: "Use CAPM to calculate expected stock returns based on risk and market data." },
      { icon: "💹", title: "Portfolio Analysis", desc: "Measure portfolio performance with Sharpe ratio, alpha, and beta." },
      { icon: "🏢", title: "Company Valuation", desc: "Estimate intrinsic value using P/E, DCF, and dividend discount models." },
    ],
  },
  credit: {
    tagline: "Take control of your credit and eliminate debt on your own timeline.",
    useCases: [
      { icon: "💳", title: "Payoff Timeline", desc: "See exactly how long it takes to pay off your credit card balance." },
      { icon: "📉", title: "Interest Savings", desc: "Discover how much interest you save by paying more than the minimum each month." },
      { icon: "🔄", title: "Balance Transfer", desc: "Calculate whether transferring your balance to a lower-rate card is worth it." },
    ],
  },
};
