/**
 * Cross-calculator links with optional field pre-fill.
 * fieldMap: maps output field ID in source calculator → input field ID in destination.
 */

export interface CrossLink {
  fromSlug: string;
  toSlug: string;
  label: string;
  /** Maps source output field ID to destination input field ID */
  fieldMap: Record<string, string>;
}

export const CROSS_LINKS: CrossLink[] = [
  {
    fromSlug: "bmi-calculator",
    toSlug: "calorie-calculator",
    label: "Calculate your daily calorie needs",
    fieldMap: { weight: "weight" },
  },
  {
    fromSlug: "compound-interest-calculator",
    toSlug: "retirement-calculator",
    label: "Use in Retirement Planner",
    fieldMap: { futureValue: "currentSavings" },
  },
  {
    fromSlug: "loan-calculator",
    toSlug: "loan-analysis-calculator",
    label: "Full loan analysis",
    fieldMap: { monthlyPayment: "monthlyPayment" },
  },
  {
    fromSlug: "retirement-calculator",
    toSlug: "investment-calculator",
    label: "Plan investment to reach corpus",
    fieldMap: { futureValue: "targetAmount" },
  },
  {
    fromSlug: "roi-calculator",
    toSlug: "cagr-calculator",
    label: "Annualize your return (CAGR)",
    fieldMap: { roi: "totalReturn" },
  },
  {
    fromSlug: "home-affordability-calculator",
    toSlug: "mortgage-calculator",
    label: "Calculate your mortgage payment",
    fieldMap: { maxMortgage: "loanAmount" },
  },
  {
    fromSlug: "mortgage-calculator",
    toSlug: "rent-vs-buy-calculator",
    label: "Compare renting vs buying",
    fieldMap: { monthlyPayment: "monthlyMortgage" },
  },
  {
    fromSlug: "credit-card-payoff-calculator",
    toSlug: "debt-payoff-calculator",
    label: "Add to your debt payoff plan",
    fieldMap: { totalInterest: "totalDebt" },
  },
  {
    fromSlug: "investment-calculator",
    toSlug: "retirement-calculator",
    label: "Use future value in retirement plan",
    fieldMap: { futureValue: "currentSavings" },
  },
  {
    fromSlug: "percentage-calculator",
    toSlug: "tip-calculator",
    label: "Calculate the tip amount",
    fieldMap: { result: "billAmount" },
  },
  {
    fromSlug: "weight-loss-calculator",
    toSlug: "bmi-calculator",
    label: "Check your new BMI at goal weight",
    fieldMap: { goalWeight: "weight" },
  },
  {
    fromSlug: "savings-goal-calculator",
    toSlug: "investment-calculator",
    label: "Grow savings with investment returns",
    fieldMap: { targetAmount: "targetAmount" },
  },
  {
    fromSlug: "loan-analysis-calculator",
    toSlug: "amortization-calculator",
    label: "View full amortization schedule",
    fieldMap: { monthlyPayment: "monthlyPayment" },
  },
  {
    fromSlug: "step-up-sip-calculator",
    toSlug: "wealth-sip-calculator",
    label: "Calculate SIP needed for wealth goal",
    fieldMap: {},
  },
  {
    fromSlug: "cagr-calculator",
    toSlug: "investment-calculator",
    label: "Project investment at this growth rate",
    fieldMap: { cagr: "annualReturn" },
  },
  {
    fromSlug: "inflation-calculator",
    toSlug: "retirement-calculator",
    label: "Adjust retirement savings for inflation",
    fieldMap: {},
  },
  {
    fromSlug: "fuel-cost-calculator",
    toSlug: "roi-calculator",
    label: "Calculate ROI on an electric vehicle",
    fieldMap: {},
  },
];
