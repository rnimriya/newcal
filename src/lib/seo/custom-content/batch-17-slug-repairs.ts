import type { SEOContent } from "@/lib/seo/content";

// Batch 17: hand-written entries for the two slugs renamed in Phase 4
// (math fibonacci-calculator and retirement retirement-annuity-calculator),
// restoring 809/809 hand-written coverage.
export const BATCH_17: Record<string, Partial<SEOContent>> = {
  "fibonacci-calculator": {
    description: `Rabbits, sunflowers, and pinecones all count the same way: 1, 1, 2, 3, 5, 8, 13, and onward, each number the sum of the two before it. That is the Fibonacci sequence, the pattern Leonardo of Pisa scribbled into his 1202 book while modeling rabbit breeding. Divide any term by its predecessor — 89 ÷ 55, say — and the ratio settles toward 1.618, the golden ratio, which is why architects, stock chartists, and photographers all keep bumping into this sequence far from any rabbit hutch.\n\nThis calculator walks the sequence for you. Type the position n into the input — try 10 — and the tool returns the nth Fibonacci number, 55, plus the ratio F(n)/F(n−1), about 1.618, showing the golden ratio emerging. Push n to 20 and watch the value hit 6,765 while the ratio tightens further. Computer science students meet this sequence in recursion lessons, since the naive F(n) = F(n−1) + F(n−2) definition is the classic example of elegant-but-slow code begging for memoization.`,
    howToSteps: [
      "Type the position n of the term you want into the input box — for example, 10.",
      "Read the nth Fibonacci number from the result: 55 for n = 10.",
      "Check the F(n)/F(n−1) ratio beside it, about 1.618, the golden ratio approximation.",
      "Try n = 20 to see the value jump to 6,765 and the ratio tighten further.",
      "Compare n = 1 and n = 2 to confirm both return 1, the sequence's seed pair.",
      "Remember that values grow exponentially — past n = 75 the numbers exceed what fits comfortably in a standard integer.",
    ],
    faqs: [
      { q: "What is the Fibonacci sequence?", a: "A series where each number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21, and so on. It starts with the seed pair 1, 1." },
      { q: "What is the 10th Fibonacci number?", a: "55. Counting from F(1) = 1, F(2) = 1, the tenth term lands on 55, and the twentieth is 6,765." },
      { q: "How is Fibonacci connected to the golden ratio?", a: "Divide each term by its predecessor — 89 ÷ 55 ≈ 1.618. As n grows, that ratio converges on the golden ratio, approximately 1.6180339." },
      { q: "Where does Fibonacci show up in real life?", a: "Sunflower seed spirals, pinecone scales, and hurricane arms follow Fibonacci counts. Traders use its ratios for retracement levels, and programmers use it to teach recursion." },
      { q: "Why do programmers care about Fibonacci?", a: "The textbook recursive definition F(n) = F(n−1) + F(n−2) is beautifully short and terribly slow, making it the standard example for memoization and dynamic programming." },
      { q: "Does the sequence have to start 1, 1?", a: "Convention usually starts 0, 1 or 1, 1; both generate the same tail. What matters is the rule: every term sums the previous two." },
    ],
  },

  "retirement-annuity-calculator": {
    description: `A teacher retires at 65 with $400,000 saved and one burning question: how big a monthly check can that pile write, and for how long? A retirement annuity answers by converting a lump sum into a guaranteed stream of payments. Insurance companies and pension funds price these streams with the same present-value math you use for a mortgage, only reversed — instead of borrowing a lump sum and repaying it, you hand over the lump sum and collect it back, with interest, one check at a time.\n\nThis calculator runs the numbers both ways. Enter your starting balance as the present value — try $400,000 — the annual rate the annuity credits, say 5 percent, and the payout length, say 240 months for a 20-year certain annuity. The tool returns the monthly payment, roughly $2,638, plus the total paid out and how much of it is interest versus your own principal. Flip to accumulation mode to see what monthly contributions grow into: $500 a month at 6 percent for 30 years compounds to about $502,000. Social Security keeps coming regardless, but this math shows exactly what your savings add on top.\n\nTreat the result as a planning baseline, not a contract quote. Real annuity payouts subtract fees, mortality credits, and the insurer's margin, and inflation quietly shrinks every fixed check — $2,638 buys far less in year 20 than in year 1. Use the numbers to compare lump-sum-versus-income choices, then get actual quotes before signing anything.`,
    howToSteps: [
      "Enter your lump sum or starting balance as the Present Value — for example, 400000.",
      "Type the annual interest or crediting rate, such as 5 percent.",
      "Set the payout length in months — 240 covers a 20-year certain annuity.",
      "Read the monthly payment, about $2,638 here, plus the total payout and interest breakdown.",
      "Switch to accumulation mode and enter a monthly contribution, like 500, to project growth over 30 years.",
      "Compare the total interest earned against your principal to see how much compounding contributes.",
    ],
    faqs: [
      { q: "What is a retirement annuity in plain English?", a: "You hand an insurer a lump sum, and it pays you back as a monthly check for a set number of years or for life. It is the mirror image of a mortgage: lump sum in, payments out." },
      { q: "How much monthly income does $400,000 buy?", a: "At 5 percent over 20 years (240 months), roughly $2,638 a month. A longer payout or lower rate shrinks the check; a shorter term or higher rate grows it." },
      { q: "What is the difference between an immediate and a deferred annuity?", a: "Immediate annuities start paying within a year of purchase; deferred annuities let your money compound for years first, then convert to income later." },
      { q: "Do annuity payments keep up with inflation?", a: "Usually not. A fixed $2,638 check buys noticeably less in year 20 than year 1. Some contracts offer cost-of-living riders at a lower starting payment." },
      { q: "Is an annuity better than just withdrawing from savings?", a: "An annuity pools longevity risk — you cannot outlive the checks. DIY withdrawals keep control and liquidity but require you to guess your own lifespan." },
      { q: "Are annuity payouts taxed?", a: "Partly. Each check blends taxable interest with a tax-free return of your own principal (the exclusion ratio). Qualified money like a 401(k) rollover is taxed as ordinary income." },
    ],
  },
};
