/**
 * Problem-based search synonyms.
 * Maps calculator slugs to plain-English problems a user might describe.
 */

export interface ProblemSynonym {
  slug: string;
  problems: string[];
}

export const PROBLEM_SYNONYMS: ProblemSynonym[] = [
  {
    slug: "bmi-calculator",
    problems: ["am i overweight", "healthy weight", "body fat index", "obesity check", "ideal weight", "body mass", "underweight check"],
  },
  {
    slug: "compound-interest-calculator",
    problems: ["how much will my savings grow", "investment growth", "money over time", "interest on savings", "savings accumulation"],
  },
  {
    slug: "loan-calculator",
    problems: ["monthly payment", "how much do i owe", "car payment", "mortgage payment", "loan repayment", "monthly installment", "emi calculation"],
  },
  {
    slug: "retirement-calculator",
    problems: ["when can i retire", "retirement savings", "how much to save for retirement", "pension planning", "retire early", "retirement corpus"],
  },
  {
    slug: "capm-calculator",
    problems: ["stock return", "expected stock performance", "beta risk", "required rate of return", "asset pricing"],
  },
  {
    slug: "credit-card-payoff-calculator",
    problems: ["pay off credit card", "credit card debt", "how long to pay off", "minimum payment trap", "get out of debt"],
  },
  {
    slug: "home-affordability-calculator",
    problems: ["can i afford a house", "how much house can i buy", "mortgage affordability", "home buying budget", "max mortgage"],
  },
  {
    slug: "roi-calculator",
    problems: ["is this investment worth it", "return on investment", "profit from investment", "investment profit", "was it worth it"],
  },
  {
    slug: "percentage-calculator",
    problems: ["what is 20 percent of", "percent off", "tip calculator", "discount", "percentage change", "how much is the tip", "sale price"],
  },
  {
    slug: "quadratic-formula-calculator",
    problems: ["solve quadratic equation", "find roots of equation", "ax squared", "parabola roots", "quadratic roots"],
  },
  {
    slug: "calorie-calculator",
    problems: ["how many calories should i eat", "daily calorie intake", "weight loss calories", "calorie deficit", "caloric needs", "tdee"],
  },
  {
    slug: "mortgage-calculator",
    problems: ["house payment", "monthly mortgage", "home loan payment", "what will my mortgage be", "mortgage monthly cost"],
  },
  {
    slug: "inflation-calculator",
    problems: ["purchasing power", "how much will prices rise", "real value of money", "cost of living increase", "inflation impact"],
  },
  {
    slug: "tax-calculator",
    problems: ["how much tax do i owe", "income tax", "take home pay", "net pay after tax", "tax refund"],
  },
  {
    slug: "tip-calculator",
    problems: ["how much to tip", "restaurant tip", "gratuity", "split the bill", "bill split with tip"],
  },
  {
    slug: "grade-calculator",
    problems: ["what grade do i need", "final exam grade needed", "gpa calculator", "pass the class", "weighted grade"],
  },
  {
    slug: "age-calculator",
    problems: ["how old am i", "exact age", "birthday days left", "days until birthday", "age in days"],
  },
  {
    slug: "pregnancy-calculator",
    problems: ["when will i give birth", "due date", "how many weeks pregnant", "baby due date", "pregnancy weeks"],
  },
  {
    slug: "speed-distance-time-calculator",
    problems: ["how long will the trip take", "travel time", "driving time", "how fast to get there", "distance at speed"],
  },
  {
    slug: "currency-converter",
    problems: ["convert dollars to euros", "exchange rate", "foreign currency", "how much in local currency", "currency exchange"],
  },
  {
    slug: "square-footage-calculator",
    problems: ["room size", "flooring cost", "tile calculator", "area of room", "how much flooring do i need"],
  },
  {
    slug: "sleep-calculator",
    problems: ["when should i wake up", "sleep cycles", "best bedtime", "how many hours of sleep", "optimal sleep time"],
  },
  {
    slug: "bac-calculator",
    problems: ["am i safe to drive", "blood alcohol level", "how drunk am i", "alcohol in blood", "drunk driving limit"],
  },
  {
    slug: "ovulation-calculator",
    problems: ["when am i most fertile", "fertile window", "best time to conceive", "ovulation date", "fertility tracker"],
  },
  {
    slug: "net-worth-calculator",
    problems: ["am i wealthy", "total net worth", "assets minus liabilities", "what am i worth", "personal balance sheet"],
  },
  {
    slug: "savings-goal-calculator",
    problems: ["how much to save each month", "reach savings goal", "monthly savings needed", "saving for vacation", "emergency fund goal"],
  },
  {
    slug: "debt-payoff-calculator",
    problems: ["how to get out of debt", "debt snowball", "debt avalanche", "pay off debt fast", "when will i be debt free"],
  },
  {
    slug: "amortization-calculator",
    problems: ["loan payoff schedule", "how much goes to interest", "principal vs interest", "loan breakdown", "mortgage amortization"],
  },
  {
    slug: "weight-loss-calculator",
    problems: ["how to lose weight", "calories to lose a pound", "weight loss goal", "how long to lose weight", "weight loss timeline"],
  },
  {
    slug: "fuel-cost-calculator",
    problems: ["cost of road trip", "gas money for trip", "fuel expense", "how much gas will i use", "road trip budget"],
  },
  {
    slug: "investment-calculator",
    problems: ["grow my money", "how much will i have in 10 years", "investment future value", "compound savings", "wealth building"],
  },
  {
    slug: "goal-based-calculator",
    problems: ["how much to save monthly", "reach financial goal", "savings plan", "monthly contribution needed", "financial target"],
  },
  {
    slug: "step-up-sip-calculator",
    problems: ["sip investment", "mutual fund monthly plan", "systematic investment", "sip returns", "rupee cost averaging"],
  },
  {
    slug: "rent-vs-buy-calculator",
    problems: ["should i rent or buy", "is buying better than renting", "renting vs owning", "buy vs rent comparison", "home ownership decision"],
  },
];
