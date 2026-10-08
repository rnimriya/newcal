import type { SEOContent } from "@/lib/seo/content";

// Batch 02 — loans & retirement calculators (49 entries, hand-written).
// US framing: USD, APR, amortization, 30-yr fixed mortgage, 401(k), FHA.
// Indian-product calculators (SIP, PPF, EPF, ELSS, FD, RD, GST) describe their
// actual fields accurately with the schema's real labels.

export const BATCH_02: Record<string, Partial<SEOContent>> = {
  "adjustable-rate-calculator": {
    description: `That low teaser rate on a 5/1 ARM is tempting — until the fixed period ends and your payment jumps. This calculator lays out the three payment scenarios that actually matter: what you owe during the initial fixed period, what you would owe if the rate adjusts to your expected level, and the worst case at your lifetime cap. Under the hood it runs the standard amortization formula — loan amount times the monthly rate times (1 + monthly rate) raised to the number of payments, divided by ((1 + monthly rate) raised to the number of payments minus 1) — three separate times, once per rate scenario.

Picture a $400,000 purchase with 20% down, leaving a $320,000 loan on a 5/1 ARM at 5.5% for the first five years. The tool shows an initial payment near $1,817 a month. If the rate adjusts to 7.5% in year six, the payment climbs to roughly $2,237. At the lifetime cap of 10.5%, you would face about $2,898 — the absolute maximum the loan can ever demand of you.

Compare those three numbers before you sign anything. If the worst-case payment would wreck your budget, a 30-yr fixed mortgage may be the calmer choice even at a higher starting rate.`,
    howToSteps: [
      "Type your Loan Amount — for example, $350,000.",
      "Enter your Initial Interest Rate, such as 5.5%, and set Loan Term (Years) to 30.",
      "Set the Initial Fixed Period (Years) to match your loan, commonly 5, 7, or 10.",
      "Enter your Expected Rate After Fixed Period — try 7.5% — plus the Rate Cap Per Adjustment and Lifetime Rate Cap Above Initial.",
      "Compare the Initial Monthly Payment, the Adjusted Monthly Payment, and the Maximum Monthly Payment (Cap) side by side.",
    ],
    faqs: [
      { q: "What does a 5/1 ARM mean?", a: "The rate stays fixed for the first 5 years, then adjusts once per year after that. A 7/1 ARM fixes the rate for 7 years, and so on." },
      { q: "How do rate caps protect me?", a: "The Rate Cap Per Adjustment limits how much the rate can move at each reset, while the Lifetime Rate Cap Above Initial sets a ceiling over the initial rate. Together they bound your worst-case payment." },
      { q: "Why does my payment jump so much after the fixed period?", a: "Your balance is still large in the early years, so even a 2% rate increase applies to nearly the whole original loan. Later in the loan, the same rate change moves the payment less." },
      { q: "Is an ARM calculator the same as a regular mortgage calculator?", a: "Not quite. A standard mortgage calculator assumes one fixed rate for the whole term. This one models three rate scenarios — initial, expected adjusted, and lifetime cap — which is the whole point of an ARM." },
      { q: "When is an adjustable-rate mortgage a bad idea?", a: "If you plan to stay past the fixed period, cannot afford the capped maximum payment, or expect rates to rise, the initial savings rarely justify the risk." },
    ],
  },
  "apr-advanced-calculator": {
    description: `A 6.5% mortgage quote sounds straightforward, but the true cost of a loan hides inside the fees. Origination charges, discount points, and closing costs all push your real borrowing cost above the advertised rate, and this calculator folds every one of them into a single honest number: your APR. It first converts your Discount Points into dollars — one point equals 1% of the loan amount — then adds the Origination Fee and Other Closing Costs to get your total financing fees. The estimated APR then spreads those fees across the Loan Term (Years) on top of your Nominal Interest Rate.

Take a $300,000, 30-year loan quoted at 6.5% with a $1,500 origination fee, 1 point ($3,000), and $4,000 in other closing costs. The nominal rate says 6.5%, but the APR comes out near 6.72% — and the Extra Cost vs Nominal Rate figure shows exactly how many extra dollars those fees add over the life of the loan. That is the number to use when lenders compete for your business.

A lower rate with heavy fees can easily lose to a slightly higher rate with no fees. Run both offers here and let the APR decide.`,
    howToSteps: [
      "Enter your Loan Amount, for example $300,000.",
      "Type the Origination Fee the lender charges — try $1,500 — and your Discount Points, such as 1.",
      "Add any Other Closing Costs, for example $4,000 in title, appraisal, and recording fees.",
      "Enter the Nominal Interest Rate you were quoted, such as 6.5%, and the Loan Term (Years), like 30.",
      "Read the APR (Estimated) and compare it across lenders; check Extra Cost vs Nominal Rate to see the fees in dollars.",
    ],
    faqs: [
      { q: "What is the difference between APR and the interest rate?", a: "The interest rate is the price of borrowing the principal. APR spreads the loan's fees over its term and expresses the total cost as a yearly rate, so it is almost always higher than the quoted rate." },
      { q: "What are origination fees?", a: "A charge the lender levies for processing your loan, usually 0.5% to 1% of the amount borrowed. It is pure cost to you, which is why APR captures it and the note rate does not." },
      { q: "Do discount points always lower my APR?", a: "No. Points lower your interest rate but raise your upfront fees, and APR includes both. Paying points can actually raise your APR if you sell or refinance before the break-even point." },
      { q: "Why do two lenders quote different APRs for the same rate?", a: "Because their fee structures differ. One lender's 6.5% with $8,500 in fees has a higher APR than another's 6.5% with $2,000 in fees — the APR exposes that gap." },
      { q: "Is APR the same as APY?", a: "No. APY (annual percentage yield) measures what savings earn with compounding. APR measures what borrowing costs including fees. They move in opposite directions for your wallet." },
    ],
  },
  "apr-calculator": {
    description: `Two lenders can quote you the same interest rate while one loan quietly costs thousands more. The difference lives in the fees, and the Annual Percentage Rate is the great equalizer that exposes it. This calculator works backward from the numbers you already know — your Loan Amount, Total Fees, Loan Term (Months), and Monthly Payment — to reveal the true yearly cost of borrowing. It totals everything you will ever pay, subtracts what you actually received after fees, and annualizes the result.

Imagine borrowing $200,000 over 360 months with a $1,200 monthly payment and $3,000 in fees. The payment alone suggests one cost, but the fees mean you effectively received only $197,000 while repaying $432,000. The calculator turns that gap into an APR near 6.25% — noticeably above the note rate the lender advertised. The Total Interest & Fees figure then puts a dollar amount on the privilege of borrowing.

Use this whenever a lender's disclosure feels optimistic. If the APR here differs from the Loan Estimate they sent, ask them to explain every fee line before you commit.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $200,000.",
      "Type your Total Fees, such as $3,000 covering origination, points, and closing costs.",
      "Set the Loan Term (Months), commonly 360 for a 30-year mortgage.",
      "Enter the Monthly Payment from the lender's quote, for example $1,200.",
      "Read the APR (Estimated), then check Total Loan Cost and Total Interest & Fees for the dollar picture.",
    ],
    faqs: [
      { q: "Why is my APR higher than my interest rate?", a: "Because APR folds fees into the yearly cost. You repay the full loan amount but only receive the loan minus fees, so the effective rate on the money you actually got is higher." },
      { q: "Which fees count toward APR?", a: "Lender charges like origination fees, discount points, and most closing costs. Some third-party costs such as title insurance may be excluded under APR rules, so disclosed APRs can understate reality slightly." },
      { q: "Can I use this to compare a 15-year and a 30-year loan?", a: "Yes, and you should. The shorter term usually shows a lower APR because fees are spread over fewer years of interest, but the monthly payment will be much higher." },
      { q: "Is APR the same as the note rate on my mortgage?", a: "No. The note rate sets your monthly payment; the APR is a disclosure number for comparison shopping. Your payment is calculated from the note rate, not the APR." },
      { q: "What is a good APR on a mortgage right now?", a: "It moves with the market, but a useful rule is that your APR should sit within about 0.25% of your note rate. A bigger gap means the lender is loading the loan with fees." },
    ],
  },
  "biweekly-payment-calculator": {
    description: `Paying your mortgage every two weeks instead of once a month sounds like a trivial scheduling tweak. It is not. Because there are 26 biweekly periods in a year, half-payments add up to 13 full monthly payments instead of 12 — one extra payment a year that goes straight at your principal. This calculator contrasts the standard monthly plan with the biweekly plan on the same Loan Amount, Annual Interest Rate, and Loan Term (Years), showing the Bi-Weekly Payment, the interest under each schedule, and the years you shave off.

Take a $300,000 loan at 6.5% over 30 years. The standard Monthly Payment is about $1,896. Paying half of that — roughly $948 — every two weeks cuts total interest by around a quarter and can erase roughly six years from the loan. The Interest Saved figure often lands in the tens of thousands of dollars, which is why lenders market biweekly programs so aggressively.

One caution: some lenders charge setup fees for biweekly plans or simply hold your extra half-payment until month-end. You can get the same effect free by adding one-twelfth of your payment to each monthly check.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $300,000.",
      "Type your Annual Interest Rate, such as 6.5%.",
      "Set the Loan Term (Years), commonly 30.",
      "Compare the Monthly Payment with the Bi-Weekly Payment shown beside it.",
      "Check Interest Saved and Years Saved to see the payoff of the extra annual payment.",
    ],
    faqs: [
      { q: "How does biweekly payment save interest?", a: "Twenty-six half-payments equal 13 full monthly payments per year. That extra payment reduces principal faster, so less interest accrues over the remaining term." },
      { q: "Is biweekly the same as paying twice a month?", a: "No. Twice-a-month (semi-monthly) is 24 half-payments, exactly 12 full payments a year. Biweekly is 26 half-payments, which creates the extra 13th payment — that is where the savings come from." },
      { q: "Should I pay for a lender's biweekly program?", a: "Usually not. Many charge enrollment or per-transaction fees. You can mimic the result by dividing your monthly payment by 12 and adding that amount to each monthly payment yourself." },
      { q: "Does biweekly payment help on a 15-year mortgage too?", a: "Yes, though the effect is smaller because the term is already short. The savings are most dramatic on 30-year loans where interest has decades to compound." },
      { q: "Will biweekly payments hurt my credit?", a: "No. As long as each payment arrives by its due date, extra principal payments only help by lowering your balance faster." },
    ],
  },
  "car-calculator": {
    description: `The sticker price is the least interesting number in a car purchase. What matters is the price on the day you actually buy, the down payment you will have saved by then, and the monthly loan payment after that. This planner connects all three stages. It inflates the Current Car Price (₹) by your Annual Car Inflation (%) over the Years until Purchase, sizes the Down Payment (%) you will need, then works out the monthly savings required to hit it — and finally the Post-Purchase Monthly EMI (₹) on the remaining Loan Amount Required (₹) at your Loan Interest Rate (%) over the Loan Tenure (years).

Say you want a car priced at $35,000 today and plan to buy in 3 years with 6% annual price inflation. The future price lands near $41,700, so a 20% down payment means saving about $8,340. At a 10% expected return on savings, that is roughly $200 a month. Financing the remaining $33,360 over 5 years at 8% leaves a monthly payment near $676.

Run the numbers before you fall for the car. If the monthly savings target feels impossible, push the purchase date out a year — time is the cheapest discount available.`,
    howToSteps: [
      "Enter the Current Car Price (₹) — for example, 3000000 for a $35,000 car.",
      "Set Years until Purchase, such as 3, and the Down Payment (%), commonly 20.",
      "Type your Annual Car Inflation (%), like 6, and your Savings Expected Return (%), like 10.",
      "Enter the Loan Tenure (years), such as 5, and the Loan Interest Rate (%), like 8.",
      "Read the Monthly SIP for Down Payment (₹) savings target and the Post-Purchase Monthly EMI (₹) together.",
    ],
    faqs: [
      { q: "Is a car loan calculator the same as an auto payment calculator?", a: "Largely yes — both compute the monthly payment from loan amount, rate, and term. This planner goes further by also modeling the savings phase before you buy." },
      { q: "How much down payment should I make on a car?", a: "Aim for at least 20%. It keeps you from going underwater — owing more than the car is worth — since new cars lose value fast in the first two years." },
      { q: "Does the savings return assumption matter much?", a: "Over 2 to 5 years, moderately. A higher assumed return lowers the required monthly savings, but be conservative — short horizons should not assume stock-market returns." },
      { q: "Should I include taxes and fees in the car price?", a: "Yes. Sales tax, registration, and dealer fees can add 8–12% in the US. Enter the out-the-door price, not the sticker price, for an honest plan." },
      { q: "Is it better to save longer or take a bigger loan?", a: "Saving longer almost always wins. A bigger loan means more interest and a higher risk of negative equity if the car depreciates faster than you pay it down." },
    ],
  },
  "child-education-calculator": {
    description: `College tuition has its own inflation rate, and it runs hotter than almost everything else in the economy. A year of college costing $28,000 today can easily exceed $75,000 by the time a toddler enrolls. This calculator translates that uncomfortable truth into a monthly savings target. It takes the Education Cost (today's value) (₹), compounds it by the Education Inflation Rate (%) over the years between your Child's Current Age (years) and the College Entry Age (years), and then solves for the Required Monthly SIP (₹) that will grow — at your Expected Annual Return (%) — into exactly that future bill.

Consider a 3-year-old with college at 18, current costs of $30,000 a year, and education inflation of 6%. In 15 years that year of college costs about $71,900. Hitting that with a 10% annual return demands roughly $172 a month, every month, for 15 years. The Total Amount Invested (₹) versus Wealth Gained (₹) split shows how much of the final sum is your discipline and how much is compounding.

Startling numbers are the point. Seeing the monthly figure early — when compounding has the most time to help — is what turns panic into a plan.`,
    howToSteps: [
      "Enter the Education Cost (today's value) (₹) — for example, 2500000 for a $30,000 annual cost.",
      "Type your Child's Current Age (years), such as 3, and the College Entry Age (years), like 18.",
      "Set the Education Inflation Rate (%), commonly 6 to 8 for college costs.",
      "Enter your Expected Annual Return (%), such as 10 for a balanced portfolio.",
      "Read the Required Monthly SIP (₹) — that is your monthly savings target starting today.",
    ],
    faqs: [
      { q: "Is this the same as a 529 plan calculator?", a: "The math is the same — future cost inflated, then a monthly savings figure. A 529 plan is the US tax-advantaged account you would actually use to invest those monthly savings." },
      { q: "Why is education inflation higher than regular inflation?", a: "Colleges face rising labor, facilities, and administrative costs that outpace consumer prices. Historically, tuition inflation has run 2–3 points above general inflation." },
      { q: "What if I have two children?", a: "Run the calculator separately for each child with their own ages, then add the two monthly SIP figures. Do not just double one result — compounding timelines differ." },
      { q: "Should the expected return be aggressive?", a: "Match it to the time horizon. With 10+ years to go, equity-heavy portfolios are reasonable; shift toward conservative investments as college approaches." },
      { q: "What happens if I start five years late?", a: "The monthly requirement jumps sharply because compounding loses its most powerful years. Starting at age 8 instead of 3 can nearly double the monthly savings needed." },
    ],
  },
  "commercial-loan-calculator": {
    description: `Business loans rarely behave like the 30-year fixed mortgage on your house. Commercial lenders often amortize over 20 or 25 years but demand the entire remaining balance — the balloon payment — after 5 or 10. This calculator models exactly that structure. It computes your Monthly Payment from the Loan Amount, Annual Interest Rate, and Amortization Term (Years), then uses the Balloon Payment Due (Years) to figure out how much you will still owe when the balloon comes due.

Imagine financing a $1,000,000 warehouse at 7.5% amortized over 25 years with the balloon due in year 10. Your monthly payment runs about $7,389, and the Total Interest (Full Term) figure shows the lifetime cost if you somehow kept it that long. But the number that matters most is the Balloon Payment: roughly $871,000 still owed at year 10, which you must refinance or pay in cash.

That balloon is the risk borrowers underestimate. Before signing, confirm you can refinance that balance under plausible future rates — because the lender will not ask politely twice.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $500,000.",
      "Type the Annual Interest Rate, such as 7.5%.",
      "Set the Amortization Term (Years), commonly 20 or 25.",
      "Enter when the Balloon Payment Due (Years) arrives — often 5 or 10.",
      "Study the Balloon Payment figure first; that is the refinancing hurdle you must clear.",
    ],
    faqs: [
      { q: "What is a balloon payment on a commercial loan?", a: "A large lump sum due before the loan fully amortizes. The payments are calculated as if the loan ran 25 years, but the remaining balance becomes due in full at year 5 or 10." },
      { q: "Why do commercial loans use balloon structures?", a: "Lenders want to reprice risk periodically instead of locking rates for decades. Borrowers accept it for lower rates, betting they can refinance when the balloon matures." },
      { q: "What happens if I cannot pay the balloon?", a: "You must refinance, sell the property, or default. This is why the calculator's balloon figure deserves more attention than the monthly payment." },
      { q: "Is a commercial loan calculator different from a business loan calculator?", a: "A generic business loan calculator usually assumes full amortization with no balloon. This one adds the balloon timing, which is the defining feature of commercial real estate debt." },
      { q: "How does the amortization term affect the balloon?", a: "A longer amortization term means lower monthly payments but a bigger balloon, since less principal gets repaid before the due date." },
    ],
  },
  "discount-points-calculator": {
    description: `Paying cash up front to buy down your mortgage rate is a gamble on how long you stay put. Each discount point costs 1% of your Loan Amount at closing and, in this calculator's model, trims your rate by 0.25%. The tool prices both sides of the trade: the Total Points Cost you pay on day one, the Rate After Buying Points, and the Monthly Savings on every payment after that. Dividing the upfront cost by the monthly savings yields the Break-Even Months — the moment the gamble starts paying you back.

On a $300,000, 30-year loan at 7%, buying 2 points costs $6,000 and drops your rate to 6.5%. Your monthly payment falls from about $1,996 to $1,896 — saving roughly $100 a month. The break-even lands near month 60. Stay five years or more and the points earn their keep; sell or refinance in year three and you have donated $6,000 to your lender.

Points only make sense when your time horizon clears break-even with room to spare. If a refinance or a move is plausible within a few years, keep your cash.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $300,000.",
      "Type your Original Interest Rate, such as 7.0%.",
      "Set the Loan Term (Years), commonly 30.",
      "Enter the Number of Points to Buy — try 2 — and read the Total Points Cost.",
      "Check Break-Even Months against how long you realistically plan to keep the loan.",
    ],
    faqs: [
      { q: "What does buying one mortgage point mean?", a: "You pay 1% of the loan amount upfront at closing. In return the lender reduces your interest rate — this calculator models a 0.25% reduction per point, which matches common US pricing." },
      { q: "Are discount points tax deductible?", a: "Generally yes for a primary residence purchase — points paid on acquisition mortgages are usually deductible in the year paid. Points on refinances must typically be deducted over the loan term. Confirm with a tax professional." },
      { q: "Do points make sense if I might refinance?", a: "Rarely. Refinancing replaces the loan and wipes out the benefit of the points you bought. Only buy points when you expect to hold the current loan well past break-even." },
      { q: "Can a seller pay my discount points?", a: "Yes, through seller concessions, subject to loan program limits. It is a common negotiation lever — the seller's cash buys down your rate." },
      { q: "What is the difference between discount points and origination points?", a: "Discount points buy a lower rate; origination points are simply a lender fee for making the loan. Both cost 1% per point, but only discount points reduce your interest rate." },
    ],
  },
  "dream-home-calculator": {
    description: `Saving for a down payment is a race against rising home prices, and the finish line keeps moving. This planner quantifies the race. It takes the Current House Price (₹), grows it by the Annual Property Inflation (%) over your Years until Purchase, and sizes the Down Payment (%) you will need on that future price — not today's. Then it reverses the math to find the Monthly SIP for Down Payment (₹) that, invested at your Savings Expected Return (%), reaches the target exactly on schedule. Finally it estimates the Post-Purchase Monthly EMI (₹) on the Loan Amount Required (₹).

Suppose you want a $450,000 home in 5 years with 5% annual price growth. The future price is about $574,000, so a 20% down payment means roughly $114,800. At a 10% investment return that demands around $1,450 a month in savings. After buying, the $459,200 loan at 6.5% over 20 years costs about $3,423 monthly.

If the savings figure stuns you, that is the tool doing its job. Extend the timeline, trim the target price, or raise the return assumption — but decide with numbers, not hope.`,
    howToSteps: [
      "Enter the Current House Price (₹) — for example, 37500000 for a $450,000 home.",
      "Set Years until Purchase, such as 5.",
      "Type your Down Payment (%), commonly 20 to avoid PMI, and the Annual Property Inflation (%), like 5.",
      "Enter your Savings Expected Return (%), such as 10, plus the Home Loan Tenure (years) and Loan Interest Rate (%).",
      "Read the Monthly SIP for Down Payment (₹) as your savings target and the Post-Purchase Monthly EMI (₹) as your future budget line.",
    ],
    faqs: [
      { q: "How is this different from a home affordability calculator?", a: "Affordability answers 'what can I buy today given my income.' This planner answers 'what must I save monthly to buy a specific home in a specific future year' — it models the waiting period, not just the purchase." },
      { q: "Why is the down payment calculated on the future price?", a: "Because lenders base the loan on the price at purchase, not today's price. A 20% down payment on a home that appreciated for five years is much larger than 20% of today's price." },
      { q: "What if home prices fall instead of rising?", a: "Then you overshoot your target and arrive with extra savings — a pleasant problem. The inflation assumption is deliberately conservative to protect your plan." },
      { q: "Should I count on investment returns while saving?", a: "Modestly. Over 3–7 years a balanced portfolio can help, but keep the assumption realistic — money you absolutely need for a down payment should not ride a volatile market." },
      { q: "Is 20% down still the right target?", a: "In the US it avoids private mortgage insurance and usually unlocks better rates. Less is possible with FHA or conventional low-down-payment programs, but the monthly cost rises." },
    ],
  },
  "elss-calculator": {
    description: `Few investments hand you a tax break and market returns in the same package, but India's Equity Linked Savings Scheme does exactly that. Contributions qualify for deduction under Section 80C — up to ₹1,50,000 a year — while the money rides equity markets with the shortest lock-in among tax-saving options at three years. This calculator shows both halves of the deal. It compounds your Investment Amount (₹) at the Expected Annual Return (%) over the Holding Period (years) to get the Maturity Amount (₹), then applies Your Tax Slab (%) to the eligible investment to compute the Tax Saved under Sec 80C (₹).

Invest ₹100,000 at a 12% expected return for 3 years in the 30% slab. The maturity lands near ₹140,500 for a Wealth Gained (₹) of about ₹40,500 — and the Section 80C deduction saves another ₹30,000 in tax. The Total Financial Benefit (₹) figure adds them: roughly ₹70,500 of value from a single ₹100,000 decision.

Remember the fine print: ELSS gains above ₹1.25 lakh a year face 12.5% long-term capital gains tax, and the three-year lock-in is per installment.`,
    howToSteps: [
      "Enter your Investment Amount (₹) — for example, 100000.",
      "Type your Expected Annual Return (%), such as 12.",
      "Set the Holding Period (years); ELSS carries a mandatory 3-year lock-in per investment.",
      "Enter Your Tax Slab (%), like 30, to compute the Section 80C benefit.",
      "Compare the Wealth Gained (₹) with the Tax Saved under Sec 80C (₹) — the Total Financial Benefit (₹) is their sum.",
    ],
    faqs: [
      { q: "ELSS vs SIP — are they not the same thing?", a: "An SIP is a way of investing (monthly installments); ELSS is what you invest in (a tax-saving equity fund). You can absolutely invest in ELSS through monthly SIPs." },
      { q: "How does the 3-year lock-in actually work?", a: "Each installment is locked for three years from its own investment date. In a monthly SIP, units bought in month 12 unlock in month 48, not month 36." },
      { q: "Is the maturity amount tax-free?", a: "Not entirely. Long-term capital gains above ₹1.25 lakh per financial year are taxed at 12.5%. The calculator shows pre-tax maturity, so factor that in." },
      { q: "What if my investment exceeds the ₹1.5 lakh 80C limit?", a: "Only ₹1,50,000 qualifies for the deduction; the excess still grows as a normal equity investment. The calculator caps the tax saving accordingly." },
      { q: "Can NRIs invest in ELSS?", a: "Yes, NRIs can invest in ELSS mutual funds on a repatriable or non-repatriable basis, subject to FEMA rules and the fund house's own restrictions." },
    ],
  },
  "emi-calculator": {
    description: `Every loan boils down to one question: what leaves your bank account each month? The Equated Monthly Installment is that number — a fixed payment blending principal and interest so the loan amortizes to exactly zero on the final due date. This calculator derives it from the classic EMI formula: Loan Amount (₹) multiplied by the monthly rate times (1 + monthly rate) raised to the Loan Tenure (months), divided by ((1 + monthly rate) raised to the tenure minus 1), where the monthly rate is your Annual Interest Rate (%) divided by 1200.

Borrow $300,000 at 6.5% over 360 months and the Monthly EMI lands near $1,896. But the figure that should stop you scrolling is the Total Interest: about $382,700 — you repay more in interest than you borrowed. The Interest as % of Principal readout makes that ratio impossible to ignore, and shortening the tenure is the fastest way to shrink it.

Play with the tenure before you sign. Dropping from 30 years to 20 raises the payment but can erase six figures of interest — the cheapest money you will ever "earn" is interest you never pay.`,
    howToSteps: [
      "Enter the Loan Amount (₹) — for example, 25000000 for a $300,000 loan.",
      "Type the Annual Interest Rate (%), such as 6.5.",
      "Set the Loan Tenure (months); try 360 for a 30-year term or 240 for 20 years.",
      "Read the Monthly EMI, then scroll to Total Interest to see the lifetime cost.",
      "Compare tenures using Interest as % of Principal — shorter terms slash that ratio.",
    ],
    faqs: [
      { q: "Is an EMI calculator the same as a loan calculator?", a: "Essentially yes. EMI is the term for the fixed monthly payment in India and much of Asia; a US loan calculator computes the same amortized payment. The math is identical." },
      { q: "Why does my EMI stay the same while the interest portion shrinks?", a: "That is amortization at work. Early payments are mostly interest because the balance is large; as the balance falls, the same fixed payment covers more principal." },
      { q: "Does a longer tenure always mean a lower EMI?", a: "Yes, the monthly payment falls — but total interest climbs steeply. Doubling the tenure from 15 to 30 years roughly triples the interest paid." },
      { q: "What happens if I prepay part of my loan?", a: "Extra payments attack principal directly, which shortens the loan and cuts total interest. Even one extra EMI a year can shave years off a 30-year term." },
      { q: "Is the EMI formula different for reducing-balance loans?", a: "No — this formula already assumes a reducing balance, where interest is charged only on the outstanding principal each month. Flat-rate quotes are a different, costlier animal." },
    ],
  },
  "epf-calculator": {
    description: `Retirement saving in India begins before your salary even reaches you. The Employees' Provident Fund deducts 12% of your Basic + DA Salary (₹/month) automatically, and your employer adds roughly 3.67% more toward the PF corpus (the rest of the employer's share funds the pension scheme). This calculator projects where those quiet monthly deductions lead. It compounds the combined monthly contribution at the declared Interest Rate (% p.a.) — currently around 8.15% — over your Years of Service to estimate the final corpus.

Take a basic salary of ₹25,000 a month over 10 years at 8.15%. You contribute ₹3,000 monthly, your employer adds about ₹918, and the corpus grows to roughly ₹6.9 lakh — with interest doing a meaningful share of the heavy lifting in the later years. Extend that to a full 30-year career and the figure crosses ₹70 lakh, which is why EPF veterans call it the most boring wealth machine in India.

The projections assume uninterrupted service and a stable rate, both of which the government revises periodically. Treat the result as a trajectory, not a promise — and avoid premature withdrawals, which trigger tax on the interest.`,
    howToSteps: [
      "Enter your Basic + DA Salary (₹/month) — for example, 25000.",
      "Set your Years of Service, such as 10 for a projection or your full career span.",
      "Type the Interest Rate (% p.a.); the default 8.15 reflects the recent declared rate.",
      "Check the Employee Contribution (₹/month) and Employer Contribution (₹/month) to see the monthly flow.",
      "Read the Estimated Corpus after years (₹) — that is your projected retirement pile from EPF alone.",
    ],
    faqs: [
      { q: "EPF vs PPF — which is better?", a: "EPF is mandatory for salaried employees with employer matching, making it unbeatable as a foundation. PPF is voluntary and suits anyone wanting extra safe, tax-free compounding. Most salaried workers should use both." },
      { q: "What does the employer actually contribute?", a: "12% of basic salary goes from the employer too, but only about 3.67% lands in your PF corpus — the remaining 8.33% (up to a wage ceiling) funds the EPS pension scheme." },
      { q: "Is EPF interest really tax-free?", a: "Up to a point. Interest on employee contributions up to ₹2.5 lakh a year is tax-free; beyond that threshold the interest becomes taxable." },
      { q: "What happens to my EPF when I change jobs?", a: "Transfer it using your UAN instead of withdrawing. Withdrawal before 5 years of continuous service makes the proceeds taxable and resets your compounding clock." },
      { q: "What is an EPFO calculator?", a: "Just another name for this tool — EPFO is the Employees' Provident Fund Organisation that administers the scheme. Same calculation, same inputs." },
    ],
  },
  "fd-calculator": {
    description: `A fixed deposit is the financial equivalent of a slow cooker: set it, forget it, and collect a predictable result. You lock a lump sum with a bank for a fixed term at a guaranteed rate, and compounding does the rest. This calculator shows the maturity under two compounding styles because the difference is real money — annual compounding applies the Interest Rate (% p.a.) once a year, while quarterly compounding applies one-fourth of the rate four times a year, letting each quarter's interest start earning its own interest sooner.

Park $25,000 at 5% for 3 years. With annual compounding you collect about $28,940; quarterly compounding nudges that to roughly $29,015. The gap looks small until you scale it — on $250,000 over 10 years, compounding frequency alone can swing the outcome by thousands. The Interest Earned (annual, ₹) figure isolates exactly what your money did versus what you deposited.

Fixed deposits will never beat equity over long horizons, but they are unbeatable for money with a date attached: a house down payment in two years, tuition next fall. Match the Period (years) to the goal and let certainty do its quiet work.`,
    howToSteps: [
      "Enter your Principal Amount (₹) — for example, 2000000 for a $25,000 deposit.",
      "Type the Interest Rate (% p.a.), such as 5.",
      "Set the Period (years); try 3 for a medium-term goal.",
      "Compare Maturity (Annual compounding) against Maturity (Quarterly compounding).",
      "Check Interest Earned (annual, ₹) to see the pure growth separate from your deposit.",
    ],
    faqs: [
      { q: "Is a fixed deposit the same as a CD?", a: "Functionally yes. A US certificate of deposit works exactly like an Indian fixed deposit — lump sum, fixed term, guaranteed rate. The main difference is FDIC insurance covers CDs up to $250,000 per bank." },
      { q: "Why does quarterly compounding pay more?", a: "Because interest credited each quarter starts earning interest itself in the next quarter. More frequent crediting means your interest compounds sooner — the effective annual yield rises even though the headline rate is identical." },
      { q: "What happens if I break an FD early?", a: "Banks levy a premature-withdrawal penalty, usually 0.5–1% off the applicable rate. Only lock money you are confident you will not need before maturity." },
      { q: "Are FD returns taxable?", a: "Yes, in most countries including India and the US, FD/CD interest is taxed as ordinary income in the year it accrues or is credited." },
      { q: "Should I choose the highest rate or the most frequent compounding?", a: "Rate dominates. A 0.25% higher rate beats quarterly-versus-annual compounding at the same rate almost every time — compare the maturity figures, not the marketing." },
    ],
  },
  "fixed-vs-adjustable-rate-calculator": {
    description: `Choosing between a fixed-rate and an adjustable-rate mortgage is really a bet on your future — how long you will stay, where rates are headed, and how much payment shock you can absorb. This calculator prices the bet honestly. It runs the same amortization math on both sides: your Fixed Interest Rate for the full Loan Term (Years), and the ARM path using the ARM Initial Rate for the intro years and the ARM Expected Rate (After Fixed Period) thereafter. The outputs — Fixed Monthly Payment, ARM Initial Payment, ARM Average Payment, and both Total Cost figures — turn an abstract dilemma into dollars.

Borrow $350,000 over 30 years: fixed at 7% costs about $2,329 a month, every month. A 5/1 ARM at 5.5% starts near $1,987 — saving roughly $342 monthly for five years, or about $20,500. But if the ARM averages 7.5% afterward, the back 25 years cost more per month than the fixed loan ever did, and the Cost Difference figure shows the lifetime winner.

The ARM wins when you sell or refinance before the adjustment bites. If this is your forever home, the fixed rate is buying something valuable: the right to stop thinking about rates.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $350,000 — and the Loan Term (Years), usually 30.",
      "Type your Fixed Interest Rate, such as 7.0, from a real lender quote.",
      "Enter the ARM Initial Rate, like 5.5, and your honest ARM Expected Rate (After Fixed Period), such as 7.5.",
      "Compare the Fixed Monthly Payment with the ARM Initial Payment for the early years.",
      "Let the Cost Difference settle it — but weigh it against how long you will actually keep the loan.",
    ],
    faqs: [
      { q: "Is an ARM ever better than a fixed-rate mortgage?", a: "Yes — when you will sell or refinance before the fixed period ends. The lower initial rate then becomes pure savings with none of the adjustment risk." },
      { q: "What should I assume for the ARM's expected rate?", a: "Be pessimistic. Use the current fully-indexed rate (index plus margin) or higher, not the teaser. The calculator is only as honest as this assumption." },
      { q: "How do I interpret the cost difference?", a: "A positive difference favoring the ARM means the intro-period savings outweigh the later higher payments under your assumed rates. Change the expected rate by 1% and watch how fragile that verdict is." },
      { q: "Does this account for rate caps?", a: "It uses your single expected average rate rather than modeling each cap. For cap-by-cap detail, run the adjustable-rate calculator alongside this one." },
      { q: "What is a 5/1 ARM in plain English?", a: "A mortgage with a fixed rate for 5 years that then adjusts annually. The '5' is the fixed period; the '1' is the yearly adjustment frequency afterward." },
    ],
  },
  "goal-based-calculator": {
    description: `A money goal without a monthly number attached is just a wish. This calculator converts any future target — a wedding, a degree, a sabbatical — into the monthly savings required to actually get there. It works in two stages. First it inflates your Target Goal (today's money) (₹) by the Annual Inflation Rate (%) over the Years to Target, because $50,000 of wedding in five years costs more than $50,000 today. Then it solves the annuity equation backward: what Monthly SIP (₹), growing at your Expected Annual Return (%), accumulates to exactly that inflated figure?

Want $60,000 for a wedding in 5 years with 3% inflation? The future price tag is about $69,600. At a 7% annual return, you need to save roughly $970 every month — and the Total Amount Invested (₹) versus Wealth Gained (₹) split shows returns covering roughly $11,400 of the goal. Push the timeline to 7 years and the monthly figure drops toward $640; compounding rewards the patient.

Name the goal, set the date, and let the monthly number discipline your budget. Vague aspirations do not auto-transfer; this figure can.`,
    howToSteps: [
      "Enter your Target Goal (today's money) (₹) — for example, 5000000 for a $60,000 goal.",
      "Set the Years to Target, such as 5.",
      "Type the Annual Inflation Rate (%), like 3, to adjust the goal to future prices.",
      "Enter your Expected Annual Return (%), such as 7 for a balanced portfolio.",
      "Read the Required Monthly SIP (₹) — automate exactly that amount each month.",
    ],
    faqs: [
      { q: "What is goal-based investing?", a: "Investing with each rupee or dollar assigned to a specific goal and deadline, rather than one vague retirement pile. It dictates the right risk level and timeline for every investment." },
      { q: "How is this different from a savings goal calculator?", a: "A simple savings calculator divides the target by months. This one adjusts for inflation first and credits investment growth, so the monthly figure is smaller and more realistic." },
      { q: "What inflation rate should I use?", a: "Match it to the goal. General goals: 3–4% in the US. Weddings, education, or healthcare: 5–8%, since those costs rise faster than headline inflation." },
      { q: "What if I cannot afford the monthly figure?", a: "You have three levers: extend the timeline, trim the target, or raise the expected return by taking more investment risk. The calculator lets you test each instantly." },
      { q: "Should separate goals share one investment?", a: "Better to track them separately even in one account. A 2-year goal needs conservative investments; a 10-year goal can ride market volatility — one portfolio cannot serve both." },
    ],
  },
  "gst-calculator": {
    description: `Quoted prices in India often hide a tax layer that changes the final bill, and the Goods and Services Tax applies at different slabs — 5%, 12%, 18%, 28% — depending on what you are buying. This calculator handles both directions of the problem. Hand it an Amount (₹) and a GST Rate (%), and it computes the GST Amount (₹) plus the Total with GST (₹) for tax-exclusive quotes. Feed it a GST-inclusive price instead, and the Original Price if GST-inclusive (₹) strips the tax back out to reveal the pre-tax base.

A laptop quoted at ₹50,000 before tax with an 18% slab carries ₹9,000 of GST for a ₹59,000 checkout. Seen from the other side, a ₹59,000 inclusive price tag divides back down to the same ₹50,000 base — the formula simply reverses, dividing by 1.18 instead of multiplying. That reverse calculation is the one shoppers need most, since Indian retail prices are usually quoted inclusive.

Small businesses use the same math for invoicing in reverse: quote inclusive prices to customers while tracking the GST component owed to the government. Either direction, the slab is everything — verify it before you calculate.`,
    howToSteps: [
      "Enter your Amount (₹) — for example, 1000.",
      "Set the GST Rate (%), such as 18 for most goods and services.",
      "For a pre-tax price, read the GST Amount (₹) and Total with GST (₹).",
      "For an inclusive price tag, read the Original Price if GST-inclusive (₹) to see the pre-tax base.",
      "Double-check the slab for your item category — rates vary from 5% to 28%.",
    ],
    faqs: [
      { q: "Is GST the same as US sales tax?", a: "Similar in effect but different in design. US sales tax is charged once at the final sale and varies by state; GST is a national value-added tax collected at every stage of production with input credits." },
      { q: "How do I remove GST from an inclusive price?", a: "Divide by (1 + rate). A ₹1,180 inclusive price at 18% GST means ₹1,180 ÷ 1.18 = ₹1,000 base. Do not just subtract 18% — that understates the base." },
      { q: "Why do different products have different GST rates?", a: "India uses multiple slabs to tax luxuries more heavily and essentials lightly. Always confirm the slab for your specific item before invoicing or budgeting." },
      { q: "What is CGST vs SGST?", a: "On intra-state sales, GST splits equally into Central GST and State GST — 18% becomes 9% CGST + 9% SGST. Inter-state sales use IGST at the full rate instead." },
      { q: "Do I need to add GST when selling services freelance?", a: "If your turnover crosses the registration threshold (₹20 lakh for services in most states), yes — you must register, charge GST, and file returns." },
    ],
  },
  "home-affordability-calculator": {
    description: `Falling in love with a house you cannot afford is an expensive heartbreak, and lenders have a formula for preventing it: the 28/36 rule. No more than 28% of your gross monthly income should go to housing costs, and no more than 36% to all debts combined. This calculator enforces both rules at once. It takes your Gross Monthly Income, subtracts your Monthly Debt Payments, applies the two ratio caps to find your Max Monthly Mortgage, then reverses the amortization formula to convert that payment — at your Mortgage Interest Rate over the Loan Term (Years) — into a Max Loan Amount, finally adding your Down Payment for the Max Home Price.

Earn $9,000 a month with $600 in existing debts, put $80,000 down, and borrow at 6.5% for 30 years. The 28% rule caps housing at $2,520; the 36% rule caps total debts at $3,240, leaving $2,640 for housing after your $600 in debts — so the tighter $2,520 wins. That payment supports roughly a $399,000 loan, meaning a Max Home Price near $479,000.

Treat the output as a ceiling, not a target. Buying 10–15% below your max leaves breathing room for the costs calculators never include: repairs, furniture, and life.`,
    howToSteps: [
      "Enter your Gross Monthly Income — for example, $7,500.",
      "Type your Monthly Debt Payments, such as $500 for car loans and cards.",
      "Add your Down Payment, like $60,000.",
      "Enter the Mortgage Interest Rate, such as 6.5, and the Loan Term (Years), usually 30.",
      "Read the Max Home Price as your ceiling, and check the Back-End DTI Ratio to see your debt load.",
    ],
    faqs: [
      { q: "What is the 28/36 rule for mortgages?", a: "Lenders prefer your housing payment under 28% of gross monthly income (front-end ratio) and all monthly debts under 36% (back-end ratio). This calculator applies both and uses whichever gives the smaller mortgage." },
      { q: "Why is my affordable price lower than I expected?", a: "Usually existing debts. Every $100 in monthly debt payments cuts roughly $15,000–$20,000 off your max loan at typical rates — paying down debts before house-hunting pays twice." },
      { q: "Does this include property tax and insurance?", a: "The 28% rule technically covers PITI — principal, interest, tax, and insurance. This calculator's mortgage figure is principal and interest, so budget taxes and insurance on top." },
      { q: "How much house can I afford on $100,000 salary?", a: "Roughly $380,000–$430,000 with 20% down at 6.5%, assuming modest debts. Enter your exact debts and down payment above for a precise figure." },
      { q: "Is the max price the price I should pay?", a: "No. Lenders approve maximums; financial planners suggest staying 10–20% below yours so one surprise — a roof, a job change — does not become a crisis." },
    ],
  },
  "income-tax-calculator": {
    description: `Your salary and your take-home pay are two different numbers, and the gap between them has a name: tax. This estimator applies US federal income tax brackets to your situation with a refreshingly simple model — subtract your Deductions ($) from your Annual Income ($) to get Taxable Income ($), then run it through the graduated brackets where the first slice is taxed at 10%, the next at 12%, then 22% and 24%. The outputs show your Estimated Tax ($), your Effective Tax Rate (%), and your Net Take-Home ($).

Take a $75,000 salary with the $12,550 standard deduction. Taxable income lands at $62,450, and the graduated math produces roughly $9,600 in federal tax — an effective rate near 12.8%, far below the 22% marginal bracket your last dollar falls into. That distinction matters enormously: a raise never makes you poorer, because only the dollars above each threshold face the higher rate.

This covers federal income tax only. State taxes, Social Security, and Medicare take additional bites — so treat the net figure as a starting point, then layer on your state's reality.`,
    howToSteps: [
      "Enter your Annual Income ($) — for example, 75000.",
      "Type your Deductions ($), such as 12550 for the standard deduction.",
      "Read your Taxable Income ($) — the figure the brackets actually apply to.",
      "Check your Estimated Tax ($) and your Effective Tax Rate (%).",
      "Use the Net Take-Home ($) for budgeting your real monthly cash flow.",
    ],
    faqs: [
      { q: "What is the difference between marginal and effective tax rate?", a: "Your marginal rate is the tax on your next dollar of income (22% in the example above). Your effective rate is total tax divided by total income (about 12.8%) — always lower under graduated brackets." },
      { q: "Is this the same as a take-home pay calculator?", a: "Partially. This estimates federal income tax; a full take-home calculator also subtracts state tax, Social Security (6.2%), and Medicare (1.45%), which this tool does not model." },
      { q: "Does a raise ever push all my income into a higher bracket?", a: "No — that is the most persistent tax myth in America. Brackets apply marginally, so only income above each threshold is taxed at the higher rate." },
      { q: "Should I use the standard deduction or itemize?", a: "Whichever is larger. Enter your itemized total (mortgage interest, SALT capped at $10,000, charitable gifts) in Deductions if it beats the standard deduction." },
      { q: "Why is my effective rate so much lower than my bracket?", a: "Because the 10% and 12% brackets shelter your first dollars. Someone solidly 'in the 22% bracket' typically pays an effective federal rate in the low teens." },
    ],
  },
  "index-fund-calculator": {
    description: `A 1% annual fee sounds tiny until you watch it compound for thirty years. Index funds win precisely because they charge a fraction of what active funds do — but even 0.2% versus 0.03% compounds into real money over decades. This calculator makes the fee visible. It takes your Monthly SIP (₹), your Expected Market Return (%), and your Expense Ratio (%), then projects two futures: the Maturity Amount (₹) at the full market return and the maturity at the net return after fees. The Total Fees Paid (₹) is simply the gap between those two destinies.

Invest $500 monthly for 20 years at a 10% market return. With a 0.03% expense ratio you land near $379,000. At a 1% expense ratio — typical of many active funds — you land near $342,000. That $37,000 gap bought you nothing; it is the price of the fee, and the Net Wealth Gained (₹) figure shows the damage net of everything.

Fees are the one component of returns you control completely. When two funds track the same index, the cheaper one wins by definition — check the expense ratio before the past performance.`,
    howToSteps: [
      "Enter your Monthly SIP (₹) — for example, 40000 for about $500 a month.",
      "Type your Expected Market Return (%), such as 10.",
      "Set the Period (years), like 20.",
      "Enter the fund's Expense Ratio (%), such as 0.2 — compare against 0.03 for a cheap index fund.",
      "Read the Total Fees Paid (₹) and the Maturity Amount (after fees) (₹) side by side.",
    ],
    faqs: [
      { q: "Index fund vs ETF — which should I choose?", a: "Both can track the same index cheaply. ETFs trade intraday and often have slightly lower expense ratios; index mutual funds allow automatic investing and fractional shares. For a monthly SIP habit, the mutual fund is usually simpler." },
      { q: "Do expense ratios really matter that much?", a: "Enormously over time. A 1% annual drag compounds to roughly a 25–30% smaller portfolio over 30 years versus a near-zero-fee fund at the same gross return." },
      { q: "What is a good expense ratio for an index fund?", a: "Under 0.10% is excellent for broad US index funds; many S&P 500 funds charge 0.03%. Anything above 0.30% for a plain index fund deserves a skeptical look." },
      { q: "Does the calculator assume the fee is charged monthly?", a: "It converts the annual expense ratio into its monthly drag and compounds net of fees — matching how funds actually deduct expenses daily from net assets." },
      { q: "Can index funds lose money?", a: "Yes. Low fees do not mean low risk — an S&P 500 index fund fell over 35% in 2008. The fee advantage only matters if you stay invested through the drops." },
    ],
  },
  "interest-only-calculator": {
    description: `Paying only the interest on a loan feels light — because the principal never moves. Interest-only mortgages attract investors and jumbo borrowers with minimal early payments, but the bill arrives in two parts: years of pure interest, then a compressed repayment sprint on the untouched balance. This calculator maps both phases. From your Loan Amount, Annual Interest Rate, Total Loan Term (Years), and Interest-Only Period (Years), it derives the Monthly Payment (IO Period) — simply balance times monthly rate — and the Monthly Payment (After IO), which amortizes the full original balance over the remaining years.

Borrow $400,000 at 6.5% with 10 interest-only years in a 30-year term. For a decade you pay about $2,167 a month and owe exactly $400,000 at the end of it. Then the payment leaps to roughly $3,030 for the remaining 20 years. The Total Interest Paid figure reveals the full price of the early discount: substantially more than a standard amortizing loan.

Interest-only works when you have a credible plan for the principal — a sale, a refinance, or rising income. Without one, you are renting your own debt.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $400,000.",
      "Type the Annual Interest Rate, such as 6.5.",
      "Set the Total Loan Term (Years), commonly 30.",
      "Choose your Interest-Only Period (Years), like 10.",
      "Compare the Monthly Payment (IO Period) with the Monthly Payment (After IO) — budget for the second one from day one.",
    ],
    faqs: [
      { q: "What happens when the interest-only period ends?", a: "Your payment jumps because you must now amortize the entire original balance over the remaining term. On a 30-year loan with 10 interest-only years, 30 years of principal repayment compresses into 20." },
      { q: "Do I build any equity during the interest-only period?", a: "Only through appreciation or extra principal payments. The scheduled payments reduce your balance by exactly zero, so falling home prices can push you underwater." },
      { q: "Who should consider an interest-only loan?", a: "Borrowers with irregular but large income (bonuses, asset sales), investors prioritizing cash flow, or buyers confident of selling before the period ends. It is rarely wise for a primary residence on a tight budget." },
      { q: "Is the interest on these loans tax deductible?", a: "Mortgage interest is generally deductible on acquisition debt up to $750,000 if you itemize, including interest-only payments. The principal you are not paying, of course, generates no deduction." },
      { q: "Can I make principal payments during the IO period?", a: "Usually yes, and you should if you can. Even modest extra payments during the IO years shrink the balance that the post-IO payment must amortize." },
      { q: "Is an interest-only calculator the same as a regular mortgage calculator?", a: "No. A regular mortgage calculator amortizes principal from day one. This one models two distinct phases — interest-only payments first, then full amortization of the untouched balance — which produces a very different payment path." },
    ],
  },
  "loan-analysis-calculator": {
    description: `Signing loan papers without knowing the lifetime cost is like buying a car without checking the price tag. This analyzer gives any loan a full financial X-ray from just three inputs — Loan Amount, Annual Interest Rate, and Loan Term (Months). It computes the Monthly Payment with the standard amortization formula, multiplies it across the term for the Total Payment, and subtracts the principal to isolate the Total Interest Paid. The Interest as % of Principal figure then expresses the cost as a single ratio you can compare across any loans, any sizes.

Finance $35,000 for a truck at 8% over 72 months. The payment is about $613 a month — manageable. But the analysis shows roughly $9,100 in total interest, or 26% of the principal: the truck effectively costs $44,100. Shorten to 48 months and the payment rises to $854 while interest collapses to about $6,000. Same truck, $3,100 cheaper, one decision.

Run this before every signature — auto loans, personal loans, equipment financing. The monthly payment is marketing; the total interest is the truth.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $250,000.",
      "Type the Annual Interest Rate, such as 6.5.",
      "Set the Loan Term (Months), like 360 for 30 years or 60 for a 5-year auto loan.",
      "Read the Monthly Payment, then the Total Interest Paid for the lifetime cost.",
      "Use Interest as % of Principal to compare this loan against any alternative offer.",
    ],
    faqs: [
      { q: "What does the total cost of a loan include?", a: "Principal plus all interest over the full term — and ideally fees, though this analyzer focuses on rate-driven cost. The Total Payment figure is the complete check you write over the loan's life." },
      { q: "How is this different from an amortization schedule?", a: "A schedule shows every single payment's principal/interest split. This gives the executive summary: payment, total cost, total interest, and the cost ratio — usually all you need to decide." },
      { q: "Why is interest as a percentage of principal useful?", a: "It normalizes cost across loan sizes. A 26% ratio means you pay $26 in interest per $100 borrowed — instantly comparable between a $10,000 loan and a $500,000 one." },
      { q: "Does making extra payments change the analysis?", a: "Yes, favorably and significantly. Extra principal payments shorten the term in this same math, cutting total interest without changing the contracted rate." },
      { q: "Is a lower monthly payment always worse overall?", a: "Not always, but usually. Lower payments from longer terms raise total interest; lower payments from lower rates are pure win. This tool shows which one you are looking at." },
    ],
  },
  "loan-comparison-calculator": {
    description: `Two loan offers can look nearly identical and still differ by tens of thousands of dollars. Lenders know that borrowers fixate on the monthly payment, so this calculator forces the comparison onto lifetime cost instead. Enter one Loan Amount, then each offer's terms — Loan 1 Interest Rate with Loan 1 Term (Years), Loan 2 Interest Rate with Loan 2 Term (Years) — and it amortizes both independently: Loan 1 Monthly Payment versus Loan 2 Monthly Payment, each Total Cost, each Total Interest, and the Interest Difference between them.

Take $300,000 at 6.5% for 30 years against 6.0% for 15 years. Option one costs about $1,896 a month; option two about $2,532. The monthly gap is $636 — painful. But the 30-year loan burns roughly $382,700 in interest while the 15-year burns about $155,700. The Interest Difference: $227,000 kept in your pocket for the price of a higher payment you might afford.

Never choose on payment alone. If the 15-year payment fits your budget with emergency savings intact, the lifetime math is brutally one-sided.`,
    howToSteps: [
      "Enter the Loan Amount both offers share — for example, $300,000.",
      "Type Loan 1 Interest Rate, such as 6.5, and Loan 1 Term (Years), like 30.",
      "Type Loan 2 Interest Rate, such as 6.0, and Loan 2 Term (Years), like 15.",
      "Compare Loan 1 Monthly Payment against Loan 2 Monthly Payment.",
      "Let the Interest Difference decide — it is the true price gap between the offers.",
    ],
    faqs: [
      { q: "15-year vs 30-year mortgage — which is better?", a: "The 15-year almost always costs far less in total interest and builds equity dramatically faster. The 30-year wins only on monthly flexibility — choose it if the 15-year payment would strain your budget or emergency fund." },
      { q: "Should I compare loans with different amounts?", a: "The calculator assumes one shared amount, which is the right way to compare rate-and-term offers. For different loan sizes, run each separately in the loan analysis calculator and compare total interest." },
      { q: "Why does a 0.5% rate difference matter so much?", a: "Because it compounds over hundreds of payments on a large balance. On a $300,000 30-year loan, each eighth of a point is worth roughly $25 a month — about $9,000 over the loan's life." },
      { q: "Does the cheaper loan always win?", a: "On pure math, yes. In real life, weigh flexibility: the higher-payment loan leaves less room for job loss or surprise expenses. Keep 6 months of the chosen payment in reserve either way." },
      { q: "Can I compare fixed vs adjustable offers here?", a: "Approximately — enter the ARM's expected average rate as its rate. For a rigorous ARM analysis with caps, pair this with the adjustable-rate calculator." },
    ],
  },
  "loan-calculator": {
    description: `Borrowing money is simple; understanding what it costs is not. This is the workhorse calculator for any amortizing loan — personal, auto, or mortgage — reducing it to three inputs and the truth. Enter the Loan Amount, the Annual Rate, and the Loan Term in years, and the standard amortization formula returns your Monthly EMI: principal times the monthly rate times (1 + monthly rate) to the power of total payments, divided by that same power minus one. The Total Payment and Total Interest Paid complete the picture.

Borrow $25,000 for a used car at 7% over 5 years. The monthly payment is about $495 — easy to say yes to. The total interest, though, is roughly $4,700, meaning the car costs $29,700 all-in. Now try 3 years instead: $771 a month, but only about $2,760 in interest. You save nearly $2,000 by enduring the higher payment for a shorter stretch.

Use this as your pre-commitment ritual. If a lender's quoted payment differs from this math, something is hiding in the quote — find it before you sign.`,
    howToSteps: [
      "Enter the Loan Amount — for example, $25,000.",
      "Type the Annual Rate, such as 7.",
      "Set the Loan Term in years — the field accepts years, so enter 5 for a 60-month loan.",
      "Read your Monthly EMI and sanity-check it against the lender's quote.",
      "Glance at Total Interest Paid; if it shocks you, shorten the term and re-run.",
    ],
    faqs: [
      { q: "What is the difference between a loan calculator and a mortgage calculator?", a: "A mortgage calculator usually adds property tax, insurance, and PMI to the payment. This loan calculator shows pure principal and interest — cleaner for auto and personal loans, and the right starting point for mortgages too." },
      { q: "Why does the lender's payment differ slightly from this?", a: "Usually fees rolled into the loan, a different day-count convention, or the first payment's timing. Small gaps are normal; large gaps deserve an itemized explanation." },
      { q: "How much of my early payments goes to interest?", a: "Most of it. On a 30-year loan at 6.5%, roughly 80% of your first payment is interest. The split flips gradually — that is the nature of amortization." },
      { q: "Should I include fees in the loan amount?", a: "Yes, if the lender rolls them into the balance. Enter the full financed amount, not the purchase price, for a payment that matches reality." },
      { q: "Does rounding affect my final payment?", a: "Slightly — lenders round each payment to the cent, so the last payment is often a few dollars different. The totals here will match within pocket change." },
    ],
  },
  "loan-refinance-calculator": {
    description: `Refinancing at a lower rate feels like free money, but the closing costs tell the real story. Every refinance charges you thousands up front — appraisal, title, origination — to buy a cheaper rate for the years ahead. This calculator weighs the trade precisely. It amortizes your Current Loan Balance at the Current Interest Rate over the Remaining Term (Years) for your current payment, then amortizes the balance plus Closing Costs at the New Interest Rate over the New Loan Term (Years). The Monthly Savings divided into the closing costs gives the Break-Even Period (Months); everything after that is pure Lifetime Savings.

Owe $280,000 at 7.5% with 25 years left, and refinance to 6.25% for 30 years at $4,500 in closing costs. The payment drops from about $2,069 to $1,724 — saving $345 a month. Break-even arrives around month 13. Stay put for a decade and you bank roughly $37,000 net of costs.

The trap is resetting the clock: a new 30-year term means more total interest even at a lower rate. Compare the lifetime savings, not just the monthly win — and never refinance to fund spending.`,
    howToSteps: [
      "Enter your Current Loan Balance — for example, $250,000.",
      "Type your Current Interest Rate, such as 7.5, and the Remaining Term (Years), like 25.",
      "Enter the New Interest Rate you were quoted, such as 6.25, and the New Loan Term (Years).",
      "Add the Closing Costs, for example $3,000.",
      "Check the Break-Even Period (Months) first — only refinance if you will stay past it.",
    ],
    faqs: [
      { q: "What is a refinance break-even point?", a: "The month when your cumulative monthly savings finally exceed the closing costs you paid. Before that point the refinance has cost you money; after it, every month is profit." },
      { q: "Is a 1% rate drop enough to refinance?", a: "Often yes, but the balance matters too. On a $400,000 loan, 1% saves about $250 monthly — quick break-even. On $80,000, the same drop saves $50 and may never repay $4,000 in costs." },
      { q: "Should I refinance into another 30-year term?", a: "It maximizes monthly savings but restarts the amortization clock, increasing lifetime interest. Ask the lender for a term matching your remaining years and compare both in this tool." },
      { q: "What is a no-closing-cost refinance?", a: "The lender covers costs in exchange for a slightly higher rate. Break-even is immediate, but the rate premium lasts the whole loan — model it here by raising the new rate instead of entering costs." },
      { q: "How many times can I refinance?", a: "As often as the math works, though each round resets costs and usually the term. Serial refinancing without shortening the term can quietly inflate lifetime interest." },
    ],
  },
  "lumpsum-calculator": {
    description: `A bonus, an inheritance, or a property sale can land a large sum in your lap all at once — and the question is always the same: what does it become if I invest it and leave it alone? This calculator answers with the purest form of compounding: your Investment Amount (₹) growing at the Expected Annual Return (%) for the full Investment Period (years), untouched. The Maturity Amount (₹) is simply principal times (1 + return) raised to the years; Wealth Gained (₹) is everything above what you put in.

Invest a $100,000 inheritance at 8% for 20 years. It becomes roughly $466,000 — the original sum plus about $366,000 of growth that required zero additional effort. Drop the return to 6% and the result falls to about $321,000; raise it to 10% and it climbs past $673,000. That sensitivity is the whole lesson: over long horizons, the return assumption matters more than almost any other decision.

The CAGR (%) readout confirms the annualized pace. Use it to sanity-check expectations — anyone promising 15% for 20 years is selling something, not calculating something.`,
    howToSteps: [
      "Enter your Investment Amount (₹) — for example, 8000000 for a $100,000 sum.",
      "Type your Expected Annual Return (%), such as 8 — be realistic, not hopeful.",
      "Set the Investment Period (years), like 20.",
      "Read the Maturity Amount (₹) and the Wealth Gained (₹) separately.",
      "Test 6%, 8%, and 10% returns to feel how sensitive long horizons are.",
    ],
    faqs: [
      { q: "Lump sum vs SIP — which gives better returns?", a: "Historically, lump sum wins about two-thirds of the time because markets rise more often than they fall — your money gets more time invested. SIP wins on psychology: it removes the fear of investing everything the day before a crash." },
      { q: "What does lump sum mean in investing?", a: "Investing a large amount all at once rather than in installments. It is the opposite of dollar-cost averaging, and it maximizes time in the market." },
      { q: "Should I invest a windfall immediately or wait?", a: "Research favors investing promptly, but staggering over 6–12 months is a reasonable compromise if a market drop would cause you to panic-sell. The worst choice is letting it sit in cash for years." },
      { q: "What return should I assume for equities?", a: "US large-cap equities have delivered roughly 7–10% annualized over long periods before inflation. Use 7–8% for planning; anything above 10% sustained for decades is heroic." },
      { q: "Does this account for taxes?", a: "No — the maturity is pre-tax. In the US, long-term capital gains rates (0–20%) apply to growth held over a year; factor that into real-world planning." },
    ],
  },
  "mortgage-tax-saving-calculator": {
    description: `The mortgage interest deduction is one of the biggest tax breaks available to US homeowners — and one of the most misunderstood. It does not make your interest free; it makes a portion of it tax-deductible, effectively discounting your mortgage rate by your tax bracket. This calculator quantifies the discount. From your Loan Amount, Annual Interest Rate, Loan Term (Years), and Federal Tax Bracket, it computes the Annual Interest Paid (Year 1), multiplies by your bracket for the Annual Tax Saving (Year 1), extends the same logic across the loan for the lifetime totals, and derives your Effective After-Tax Rate.

Borrow $400,000 at 6.5% for 30 years in the 24% bracket. Year-one interest runs about $25,800, saving you roughly $6,190 in federal tax. Over the loan's life you pay around $519,000 in interest but recover about $124,600 through deductions — an effective rate near 4.94% instead of 6.5%. That is still real money leaving your pocket; the deduction merely softens the blow.

One caveat: you only benefit if you itemize. With today's generous standard deduction, many homeowners — especially later in the loan when interest shrinks — get zero benefit. Check before counting on it.`,
    howToSteps: [
      "Enter your Loan Amount — for example, $300,000.",
      "Type the Annual Interest Rate, such as 6.5, and the Loan Term (Years), like 30.",
      "Set your Federal Tax Bracket — try 22 or 24.",
      "Read the Annual Tax Saving (Year 1) for this year's benefit.",
      "Check the Effective After-Tax Rate — that is your true cost of borrowing.",
    ],
    faqs: [
      { q: "Do I need to itemize to deduct mortgage interest?", a: "Yes. The deduction only helps if your total itemized deductions exceed the standard deduction ($30,000 for joint filers in recent years). Many homeowners, especially with smaller mortgages, take the standard deduction and get no mortgage benefit." },
      { q: "Is there a limit on how much interest I can deduct?", a: "Yes — interest on up to $750,000 of acquisition debt for a primary and second home combined ($375,000 if married filing separately). Loans above that get a partial deduction." },
      { q: "Does the tax saving stay constant each year?", a: "No, it shrinks. As amortization shifts payments toward principal, annual interest falls — so the deduction is biggest in year one and fades over time." },
      { q: "Should I buy a bigger house for the tax break?", a: "Never. A 24% deduction on interest still leaves you paying 76% of it. Tax savings should influence the math at the margin, not drive the purchase." },
      { q: "What is the effective after-tax rate used for?", a: "Comparing borrowing against investing. If your after-tax mortgage rate is 4.9% and you expect 7% from investments, investing extra cash beats prepaying — on paper, before risk." },
    ],
  },
  "mutual-fund-returns": {
    description: `Your fund statement shows a NAV, but what you really want to know is how fast your money actually grew. This calculator translates purchase and current NAVs into the two return figures that matter. From your Purchase NAV (₹), Current NAV (₹), Units Held, and Holding Period (years), it first values both ends — Amount Invested (₹) and Current Value (₹) — then computes the Absolute Return (%), the simple percentage gain, and the CAGR (%), the annualized compound rate that smooths the journey into a single yearly pace.

Buy 1,000 units at a NAV of $25 and watch it reach $40 over 3 years. You invested $25,000; it is now $40,000 — a 60% absolute return that sounds spectacular until the CAGR reveals the steadier truth: about 17% per year. That annualized figure is the one to compare against other funds, benchmarks, and your own expectations.

Absolute returns flatter long holding periods and punish short ones; CAGR is the honest yardstick. Whenever a fund advertisement trumpets a big absolute number, convert it here before being impressed.`,
    howToSteps: [
      "Enter your Purchase NAV (₹) — for example, 25.",
      "Type the Current NAV (₹), such as 40.",
      "Enter your Units Held, like 1000.",
      "Set the Holding Period (years), such as 3.",
      "Compare the Absolute Return (%) with the CAGR (%) — trust the CAGR for comparisons.",
    ],
    faqs: [
      { q: "CAGR vs absolute returns — which one matters more?", a: "CAGR, for any comparison. A 60% absolute return over 3 years (17% CAGR) beats a 60% absolute return over 6 years (8% CAGR) — the absolute figure hides the time dimension." },
      { q: "What is NAV in a mutual fund?", a: "Net Asset Value — the per-unit price of the fund, computed daily from its holdings minus expenses. Your return comes from NAV appreciation, not from the NAV level itself." },
      { q: "Does a low NAV mean a fund is cheap?", a: "No. A ₹10 NAV and a ₹500 NAV can deliver identical percentage returns. What matters is how fast the NAV grows, not where it starts." },
      { q: "Why does my statement show a different return?", a: "Statements often show absolute or point-to-point returns and may include dividends differently. CAGR here standardizes everything to an annualized pace." },
      { q: "Can CAGR be negative?", a: "Yes — if the current NAV sits below your purchase NAV, the CAGR goes negative, showing the annualized rate of loss. Painful but honest." },
    ],
  },
  "ppf-calculator": {
    description: `The Public Provident Fund rewards exactly one virtue: patience. It asks you to lock money away for 15 years, and in exchange offers government-backed safety, an attractive administered rate — currently 7.1% — and the rare triple tax benefit: deductible contributions, tax-free growth, tax-free maturity. This calculator projects the payoff. From your Yearly Investment (₹), the Interest Rate (%), and the Lock-in Period (years), it compounds each annual deposit to maturity using the annuity formula, splitting the result into Total Invested (₹) and Total Interest Earned (₹).

Deposit ₹150,000 every year for 15 years at 7.1%. You put in ₹22.5 lakh; the Maturity Amount (₹) lands near ₹40.7 lakh — meaning interest contributes roughly ₹18.2 lakh, nearly matching your own contributions. Extend in 5-year blocks after maturity (the scheme allows it) and compounding's later years do even heavier lifting.

PPF will not make you rich, but it is the closest thing India offers to a guaranteed, tax-free compounding engine. Use it as the safe anchor of a portfolio, not the whole portfolio.`,
    howToSteps: [
      "Enter your Yearly Investment (₹) — for example, 150000, the maximum allowed.",
      "Type the Interest Rate (%), such as 7.1.",
      "Set the Lock-in Period (years) to 15, the mandatory minimum.",
      "Compare Total Invested (₹) against the Maturity Amount (₹) to see compounding's share.",
      "Model extensions by increasing the period in 5-year blocks.",
    ],
    faqs: [
      { q: "PPF vs EPF — what is the difference?", a: "EPF is mandatory for salaried employees with employer contributions; PPF is voluntary and open to everyone including the self-employed. Both offer tax-free compounding, but EPF's employer match makes it the stronger deal for employees." },
      { q: "Can I withdraw from PPF before 15 years?", a: "Partial withdrawals are allowed from the 7th year subject to limits, and premature closure is permitted after 5 years for specific reasons like medical emergencies or higher education, with a 1% interest penalty." },
      { q: "What is the maximum I can invest in PPF yearly?", a: "₹1.5 lakh per financial year. Deposits beyond that earn no interest and get no tax benefit — the calculator assumes you stay within the limit." },
      { q: "Is PPF interest really tax-free?", a: "Yes — PPF enjoys EEE status: exempt on contribution (80C), exempt on interest accrual, exempt on maturity. It is one of the few fully tax-free instruments left in India." },
      { q: "Should I deposit monthly or yearly?", a: "Yearly, early in April, maximizes interest since PPF interest is calculated on the lowest balance between the 5th and month-end. A single April deposit beats twelve monthly ones." },
    ],
  },
  "rd-calculator": {
    description: `Not everyone can invest a lump sum, but almost anyone can set aside a fixed amount each month — and the recurring deposit turns that discipline into a guaranteed outcome. You commit a Monthly Deposit (₹) for a fixed Tenure (months) at a declared Interest Rate (% p.a.), compounded quarterly the way Indian banks compute it. This calculator runs that exact quarterly-compounding math to produce your Maturity Amount (₹), separating your Total Deposited (₹) from the Interest Earned (₹).

Save $100 a month — roughly ₹8,300 — for 36 months at 6.5%. You deposit about $3,600 total and collect roughly $3,960 at maturity; the $360 of interest is modest because the horizon is short and the rate is fixed. Stretch to 60 months and raise the deposit to $300, and the interest component starts looking respectable near $1,700.

Recurring deposits are not wealth creators — equity does that job. They are commitment devices with a guaranteed floor, perfect for goals 1–5 years out where you cannot afford market volatility: a wedding, a course fee, an emergency fund top-up.`,
    howToSteps: [
      "Enter your Monthly Deposit (₹) — for example, 5000.",
      "Type the Interest Rate (% p.a.), such as 6.5.",
      "Set the Tenure (months), like 36 for three years.",
      "Read the Maturity Amount (₹) as your guaranteed outcome.",
      "Check Interest Earned (₹) to see what the discipline bought you beyond the deposits.",
    ],
    faqs: [
      { q: "RD vs FD — which should I choose?", a: "Choose RD when you save monthly from income; choose FD when you already hold a lump sum. Returns per rupee are similar — the difference is purely about your cash flow pattern." },
      { q: "What is a recurring deposit?", a: "A bank product where you deposit a fixed sum monthly for a fixed tenure at a guaranteed rate. Think of it as a fixed deposit built in installments." },
      { q: "Why is RD interest lower than it looks?", a: "Because deposits trickle in over time, the average rupee earns interest for only about half the tenure. A 6.5% RD yields less total interest than a 6.5% FD of the full amount." },
      { q: "Can I break an RD early?", a: "Yes, with a premature-closure penalty similar to FDs — usually 0.5–1% off the rate. Some banks also charge for missed installments, so automate the debit." },
      { q: "Is RD interest taxable?", a: "Yes, as ordinary income, and banks deduct TDS if annual interest across deposits exceeds the threshold. Factor the post-tax figure into your planning." },
    ],
  },
  "rent-vs-buy-calculator": {
    description: `"Renting is throwing money away" is a slogan, not math. Owning builds equity but also burns cash on interest, taxes, insurance, and maintenance; renting buys flexibility and avoids those carrying costs while your down payment stays invested. This calculator stages the honest five-year fight. It totals your buying costs — mortgage payments on the Home Price minus Down Payment at your Mortgage Rate, offset by appreciation — against your renting costs, with Monthly Rent escalating at the Annual Rent Increase rate. The Break-Even Point (Years) reveals when ownership finally pulls ahead.

Consider a $400,000 home with $80,000 down at 6.5% versus $2,000 monthly rent rising 3% yearly, with 3% home appreciation. Over five years the buy-vs-rent gap is often surprisingly narrow — transaction costs and early-year interest devour the first years of equity. Stretch the horizon to ten years and ownership usually wins decisively, because appreciation compounds on the full home value while you borrowed most of it.

The verdict hinges on duration. Staying put 7+ years favors buying in most US markets; a 3-year horizon rarely does.`,
    howToSteps: [
      "Enter the Home Price — for example, $400,000 — and your Down Payment, like $80,000.",
      "Type the Mortgage Rate, such as 6.5, and the Mortgage Term (Years), usually 30.",
      "Enter your Monthly Rent, for example $2,000.",
      "Set the Annual Home Appreciation and Annual Rent Increase, both commonly 3.",
      "Read the Break-Even Point (Years) — buy only if you will stay well past it.",
    ],
    faqs: [
      { q: "What is the 5% rule for renting vs buying?", a: "A quick heuristic: multiply the home price by 5% — that estimates unrecoverable ownership costs (interest, tax, maintenance). If annual rent is well below that figure, renting is likely cheaper." },
      { q: "Does this include closing costs?", a: "The 5-year buy cost captures mortgage economics and appreciation; add roughly 2–5% of the price in buyer closing costs and 6–8% in eventual seller costs mentally — they lengthen the break-even." },
      { q: "How does my tax rate change the answer?", a: "The Marginal Tax Rate field credits the mortgage interest deduction against buying costs. If you take the standard deduction instead, set it to 0 — the buying case gets weaker." },
      { q: "Is renting really not throwing money away?", a: "Correct — rent buys housing services, just as mortgage interest, taxes, and maintenance do. Only principal repayment builds wealth, and early-year payments are mostly interest." },
      { q: "What if home prices fall?", a: "Lower the Annual Home Appreciation to 0% or negative and re-run. Ownership's advantage evaporates fast without appreciation — another reason short horizons favor renting." },
    ],
  },
  "rental-property-calculator": {
    description: `A rental property is a small business that happens to have a roof, and like any business it deserves a proper profit-and-loss analysis before you buy. This tool runs the full investor workup. From the Purchase Price, Down Payment, Mortgage Rate, and Loan Term (Years) it derives your Monthly Mortgage Payment; from the Monthly Rent, Vacancy Rate, and Monthly Operating Expenses it computes the Net Operating Income (Annual). Dividing NOI by the purchase price gives the Cap Rate; dividing annual cash flow by your down payment gives the Cash-on-Cash Return; and the Gross Rent Multiplier offers a quick sanity check against comparable properties.

Run a $350,000 duplex renting for $2,500 a month with $70,000 down at 7% over 30 years, 5% vacancy, and $600 in monthly operating expenses. The mortgage runs about $1,863, NOI lands near $21,300, and the cap rate is about 6.1%. Monthly Cash Flow after the mortgage is roughly negative $88 — a sobering result that the Cash-on-Cash Return makes impossible to ignore.

Cap rate measures the property; cash-on-cash measures your deal including leverage. A property can have a fine cap rate and still be a bad investment if the financing is wrong — always read both.`,
    howToSteps: [
      "Enter the Purchase Price — for example, $350,000 — and your Down Payment, like $70,000.",
      "Type the Mortgage Rate, such as 7.0, and the Loan Term (Years), usually 30.",
      "Enter the Monthly Rent you can realistically charge, for example $2,500.",
      "Set the Vacancy Rate — 5 to 8% is prudent — and your Monthly Operating Expenses, like $600.",
      "Judge the deal on Monthly Cash Flow and Cash-on-Cash Return, not on rent alone.",
    ],
    faqs: [
      { q: "What is a good cap rate for a rental property?", a: "It varies by market, but 5–8% is typical for US residential rentals. Higher cap rates usually mean higher risk or weaker appreciation prospects — compare within the same neighborhood, not nationally." },
      { q: "Cap rate vs cash-on-cash return — which should I use?", a: "Cap rate evaluates the property itself, ignoring financing. Cash-on-cash evaluates your actual invested dollars including the mortgage. Use cap rate to compare properties, cash-on-cash to compare deals." },
      { q: "What counts as operating expenses?", a: "Property tax, insurance, maintenance, property management, HOA fees, and utilities you cover. Exclude the mortgage payment — NOI is deliberately calculated before debt service." },
      { q: "What is the 1% rule?", a: "A screening shortcut: monthly rent should be at least 1% of the purchase price. A $350,000 property should rent for $3,500 to pass. Few markets clear it today — treat it as a filter, not a law." },
      { q: "Should I include future rent increases?", a: "For a purchase decision, underwrite on today's rent. Growth is a bonus, not a foundation — deals that only work with heroic rent assumptions usually do not work." },
    ],
  },
  "retirement-calculator": {
    description: `Retirement planning fails in one predictable way: people underestimate how much their lifestyle will cost decades from now. This calculator attacks that blind spot directly. It starts with your Current Monthly Expenses (₹), compounds them by the Annual Inflation Rate (%) over the years between your Current Age and Retirement Age, and arrives at the monthly income your future self will actually need. Then it prices that income stream as a lump sum — the Target Corpus Required (₹) — using your Expected Return Post-retirement (%), and finally solves for the Required Monthly SIP (₹) that, growing at your Expected Return Pre-retirement (%), builds exactly that corpus.

A 30-year-old spending $4,000 a month, retiring at 60 with 6% inflation: monthly needs at retirement swell to about $23,000. Funding 25 years of that at an 8% post-retirement return demands a corpus near $5.9 million — and building it at 12% pre-retirement requires saving roughly $3,400 every month starting now. The Years to Retirement versus Years in Retirement split shows why starting late is so punishing.

The numbers are meant to jolt, not depress. Every year you delay, the monthly requirement climbs; every year you start early, compounding quietly does your heaviest lifting.`,
    howToSteps: [
      "Enter your Current Age (years), such as 30, and your Retirement Age (years), like 60.",
      "Set your Life Expectancy (years) — 85 is a prudent default.",
      "Type your Current Monthly Expenses (₹) — for example, 350000 for about $4,000.",
      "Enter the Annual Inflation Rate (%), like 6, and your Expected Return Pre-retirement (%), such as 12.",
      "Read the Required Monthly SIP (₹) — begin investing that amount this month.",
    ],
    faqs: [
      { q: "How much should I save for retirement each month?", a: "A common rule is 15% of gross income starting in your 20s, rising if you start late. This calculator gives your personal number — enter your real expenses rather than trusting a rule of thumb." },
      { q: "Why does inflation matter so much here?", a: "Because retirement is decades away. At 6% inflation, prices multiply nearly sixfold over 30 years — your corpus must fund the inflated lifestyle, not today's." },
      { q: "What if I plan to work past the retirement age?", a: "Every extra working year helps twice: one more year of compounding and one fewer year of withdrawals. Raise the retirement age input and watch the required monthly savings fall." },
      { q: "Is the 4% rule built into this?", a: "Indirectly — the corpus math prices a sustainable withdrawal stream from your post-retirement return assumption, which is the same principle behind the 4% guideline." },
      { q: "Should I include Social Security or pension?", a: "This calculator sizes the total need. Subtract your expected Social Security or pension income from the monthly expenses input to see the gap your savings must cover." },
    ],
  },
  "sip-calculator": {
    description: `Wealth rarely arrives in one dramatic windfall; it usually shows up in quiet monthly installments that compound while you are busy living your life. A Systematic Investment Plan automates exactly that: a fixed sum invested every month into mutual funds, buying more units when markets dip and fewer when they soar. This calculator projects the outcome using the future-value-of-annuity formula — your Monthly Investment (₹) multiplied by ((1 + monthly return) raised to the total months minus 1) divided by the monthly return, where the monthly return is your Expected Annual Return (%) divided by 12.

Invest $500 every month at 10% for 20 years. You contribute $120,000; the Maturity Amount (₹) reaches about $379,000. The Wealth Gained (₹) — roughly $259,000 — is more than double what you put in, and it exists purely because each installment had years to compound. Extend to 30 years and the maturity passes $1.13 million on $180,000 of contributions; time, not timing, is the engine.

The Total Months readout reminds you that consistency is the strategy. Missing installments in the early years costs far more than missing them late — automate the debit and forget it.`,
    howToSteps: [
      "Enter your Monthly Investment (₹) — for example, 40000 for about $500.",
      "Type your Expected Annual Return (%), such as 10 for equity funds.",
      "Set the Investment Period (years), like 20.",
      "Read the Maturity Amount (₹) and the Total Amount Invested (₹) side by side.",
      "Check Wealth Gained (₹) — that is compounding's paycheck to you.",
    ],
    faqs: [
      { q: "Is a SIP the same as dollar-cost averaging?", a: "Yes, essentially. Dollar-cost averaging is the strategy of investing fixed amounts regularly; SIP is the automated product that implements it in mutual funds. Same math, same benefit." },
      { q: "What does SIP stand for?", a: "Systematic Investment Plan — a facility to invest a fixed amount in a mutual fund at regular intervals, usually monthly, with the purchase automated." },
      { q: "Can I lose money in an SIP?", a: "Yes. SIPs smooth entry prices but do not guarantee returns — an equity SIP held through a prolonged downturn can show losses for years. The strategy assumes markets recover over your horizon." },
      { q: "Should I stop my SIP when markets crash?", a: "That is precisely when SIPs work hardest — your fixed installment buys more units at lower prices. Stopping in a crash locks in the worst of both worlds." },
      { q: "SIP vs lump sum — which is better for me?", a: "If you have the lump sum and a long horizon, lump sum usually wins mathematically. If you earn monthly and invest from salary, SIP is your natural — and excellent — default." },
    ],
  },
  "step-up-sip-calculator": {
    description: `Your salary grows every year, so why should your investments stay frozen at the amount you could afford half a decade ago? A step-up SIP increases your monthly investment by a fixed percentage each year — typically 10%, mirroring a healthy annual raise — so your savings grow alongside your income instead of shrinking as a share of it. This calculator models that escalating commitment: the Initial Monthly Investment (₹) rising by the Annual Step-up (%) yearly, each year's higher installments compounding at your Expected Annual Return (%) over the Investment Period (years).

Start at $500 a month, step up 10% yearly, earn 10%, and invest for 20 years. You contribute about $343,000 total and the Maturity Amount (₹) lands near $687,000. Compare the plain version — $500 flat for 20 years gives about $379,000 on $120,000 invested. The step-up more than doubles your contributions but the maturity grows even faster, because the largest installments arrive in the later years when the base is biggest.

Lifestyle inflation is the silent killer of savings rates. A step-up SIP automates the antidote: raise your investments before your spending notices the raise.`,
    howToSteps: [
      "Enter your Initial Monthly Investment (₹) — for example, 40000 for about $500.",
      "Type your Expected Annual Return (%), such as 10.",
      "Set the Investment Period (years), like 20.",
      "Choose your Annual Step-up (%), commonly 10 to match salary growth.",
      "Compare the Maturity Amount (₹) against a flat SIP to see the step-up premium.",
    ],
    faqs: [
      { q: "Should I increase my SIP amount every year?", a: "If your income rises, yes — it is the single easiest way to grow wealth faster. Even a 5% annual step-up dramatically outruns a flat SIP over 15+ years." },
      { q: "What step-up percentage is realistic?", a: "Match your expected salary growth: 8–12% early in a career, 5–8% later. The calculator accepts any figure, but an unaffordable step-up just leads to cancelled SIPs." },
      { q: "How is this different from a regular SIP calculator?", a: "A regular SIP assumes a constant installment. This one compounds growing installments — the math uses a geometric series of payments, which is why the maturity leaps so far ahead." },
      { q: "What if I cannot sustain the step-up in a bad year?", a: "Pause the increase, not the SIP. Keeping the base installment running preserves compounding; the step-up can resume when income recovers." },
      { q: "Does step-up help more over long or short periods?", a: "Long ones, overwhelmingly. The step-up's power comes from large later installments compounding — over 5 years the effect is mild, over 25 it is transformative." },
    ],
  },
  "stp-calculator": {
    description: `Moving a large sum from a safe fund into equities all at once can feel like jumping into cold water — so investors use a Systematic Transfer Plan to wade in gradually. You park the lump sum in a low-volatility source fund, then transfer a fixed amount monthly into a higher-growth target fund, earning modest returns on the waiting money instead of zero in a savings account. This calculator tracks both pools: the Initial Source Investment (₹) shrinking by the Monthly Transfer Amount (₹) while earning the Source Fund Return (% p.a.), and the target side accumulating each transfer at the Target Fund Return (% p.a.) over the Duration (months).

Park $60,000 in a source fund earning 6% and shift $5,000 monthly for 12 months into a target fund earning 12%. The source balance does not simply fall to zero — its residual earnings leave a small remainder — while the target side grows each transfer for its remaining months. The Total Value (Source + Target) (₹) and Overall Gain (%) show whether the staging beat a simple lump-sum plunge.

STPs do not eliminate market risk; they average your entry price across months. Use them when a lump sum feels too large to commit at once — not as a return-boosting trick.`,
    howToSteps: [
      "Enter your Initial Source Investment (₹) — for example, 5000000 for about $60,000.",
      "Type the Monthly Transfer Amount (₹), such as 400000 for about $5,000.",
      "Set the Source Fund Return (% p.a.), like 6, and the Target Fund Return (% p.a.), like 12.",
      "Choose the Duration (months), commonly 6 to 12.",
      "Read the Total Value (Source + Target) (₹) and Overall Gain (%) for the verdict.",
    ],
    faqs: [
      { q: "STP vs SIP — what is the difference?", a: "An SIP moves money from your bank account into a fund each month. An STP moves money between two funds — from a debt or liquid fund you already hold into an equity fund — usually to deploy a lump sum gradually." },
      { q: "Does an STP guarantee better returns than lump sum?", a: "No. If markets rise steadily during the transfer, the lump sum wins; if they fall, the STP wins. The STP buys peace of mind and entry-price averaging, not a return premium." },
      { q: "Are STP transfers taxable?", a: "Each transfer counts as a redemption from the source fund, so capital gains tax applies on the source-side gains per your holding period and local rules." },
      { q: "What is a good STP duration?", a: "Six to twelve months is typical. Shorter barely averages anything; longer leaves too much money earning low returns while waiting." },
      { q: "Can I do an STP in US mutual funds?", a: "The concept exists as systematic exchanges or transfers between funds within a fund family. The mechanics — and the tax treatment of each exchange — are equivalent." },
    ],
  },
  "swp-calculator": {
    description: `After decades of saving, the question flips: how do you spend the corpus without running dry? A Systematic Withdrawal Plan turns a lump sum into a monthly paycheck — the mirror image of an SIP. Each month you withdraw a fixed amount while the remaining balance keeps compounding, and the race between withdrawals and growth determines how long the money lasts. This calculator runs that race using the logarithmic depletion formula on your Initial Corpus (₹), Monthly Withdrawal (₹), and Expected Annual Return (%).

Hold a $1,000,000 corpus, withdraw $5,000 monthly, and earn 7%. The math says the money lasts roughly 32 years — and the Total Withdrawable (₹) exceeds $1.9 million, because growth funds most of the payouts. Raise the withdrawal to $8,000 and longevity collapses toward 16 years. The Annual Return on Corpus (₹) figure shows the yearly growth your withdrawals are competing against; withdraw less than that and the corpus can theoretically last forever.

The golden rule of decumulation: your withdrawal rate must stay below your net return. Cross that line and the depletion curve turns exponential — slowly at first, then all at once.`,
    howToSteps: [
      "Enter your Initial Corpus (₹) — for example, 80000000 for about $1,000,000.",
      "Type your Monthly Withdrawal (₹), such as 400000 for about $5,000.",
      "Set your Expected Annual Return (%), like 7 for a conservative portfolio.",
      "Read Approx Years it Lasts — the single number that matters most.",
      "Lower the withdrawal until the corpus outlasts your planning horizon.",
    ],
    faqs: [
      { q: "How long will my money last with monthly withdrawals?", a: "It depends on the withdrawal rate versus the return. At 6% annual withdrawals against 7% returns, a corpus lasts decades; at 10% withdrawals it depletes in about 15 years. Enter your numbers above for the exact figure." },
      { q: "SWP vs living off fixed-deposit interest — which is better?", a: "An SWP from a balanced portfolio usually sustains higher inflation-adjusted payouts, since growth outpaces FD rates. FD interest is simpler and guaranteed but loses purchasing power over long retirements." },
      { q: "What withdrawal rate is safe?", a: "The classic 4% rule — withdraw 4% of the initial corpus yearly, adjusted for inflation — has survived most historical US market scenarios over 30 years. Higher rates demand higher returns or shorter horizons." },
      { q: "What happens if returns disappoint?", a: "Depletion accelerates fast because withdrawals are fixed while growth shrinks. Stress-test with a return 2–3 points below your expectation before committing to a withdrawal level." },
      { q: "Should withdrawals adjust for inflation?", a: "Ideally yes — a fixed nominal withdrawal buys less every year. Either raise the withdrawal input periodically or start slightly lower to leave an inflation buffer." },
    ],
  },
  "wealth-sip-calculator": {
    description: `Most calculators tell you what your savings will become; this one works backward from the dream. Name your Target Wealth (₹) — a million dollars, a debt-free retirement, a child's fully funded education — and it solves for the Required Monthly SIP (₹) that gets you there at your Expected Annual Return (%) within your Investment Period (years). The math inverts the annuity formula: the monthly figure equals the target divided by the compounding factor, so longer horizons and higher returns shrink it dramatically.

Want $1,000,000 in 20 years at 10%? You need about $1,317 a month. Have 30 years instead and it falls to roughly $322 — the most expensive ingredient in wealth is a late start. The Total Amount Invested (₹) versus Wealth Gained (₹) split reveals the partnership: over 30 years you contribute about $116,000 while compounding supplies the remaining $884,000.

Use this to convert vague ambition into an auto-debit. A target with a monthly number becomes a plan; without one it stays a daydream with a deadline.`,
    howToSteps: [
      "Enter your Target Wealth (₹) — for example, 80000000 for $1,000,000.",
      "Type your Expected Annual Return (%), such as 10.",
      "Set the Investment Period (years), like 20 or 30.",
      "Read the Required Monthly SIP (₹) — that is your non-negotiable monthly investment.",
      "Extend the period by 5 years to see how much cheaper patience makes the dream.",
    ],
    faqs: [
      { q: "How is this different from a regular SIP calculator?", a: "A regular SIP calculator takes your monthly amount and projects the outcome. This reverses the question: given the destination, what monthly amount is required? Same formula, opposite direction." },
      { q: "What monthly SIP do I need to become a millionaire?", a: "About $1,317 a month for 20 years at 10%, or about $322 a month for 30 years. Time is the dominant variable — starting a decade earlier cuts the requirement by roughly three-quarters." },
      { q: "Is the target in today's money or future money?", a: "Future nominal money. If you want $1 million of today's purchasing power in 20 years at 3% inflation, target roughly $1.8 million in this calculator." },
      { q: "What if I get a lower return than assumed?", a: "The required SIP rises steeply — at 7% instead of 10%, the 20-year millionaire needs about $2,130 monthly instead of $1,317. Always plan with a conservative return." },
      { q: "Can I combine this with a step-up SIP?", a: "Yes, conceptually — start below the required figure and step up annually. Model the flat requirement here first, then use the step-up calculator to design the ramp." },
    ],
  },
  "xirr-calculator": {
    description: `When money moves in and out at irregular times, simple return math breaks down — and that is exactly when XIRR earns its keep. Extended Internal Rate of Return annualizes your actual cash-flow experience into one comparable percentage, handling lumpy investments, partial withdrawals, and uneven timing that CAGR cannot. This calculator applies the concept to the essential case: your Initial Investment (₹ / $) growing to a Final / Current Value over a Holding Period (years), yielding the Annual Return (XIRR %), the Absolute Gain, the Total Return %, and the Doubling Time (years).

Invest $50,000, watch it become $95,000 over 7 years. The total return is 90% — impressive until the XIRR reveals the annualized reality: about 9.6% per year. The Doubling Time figure, near 7.6 years at that pace, translates the percentage into intuition you can feel. Compare that 9.6% against any fund, any benchmark, any alternative — that is XIRR's superpower.

Use it whenever real life, not a textbook, shaped your cash flows: rental deposits plus sale proceeds, business investments with interim payouts, or any portfolio with contributions scattered across years.`,
    howToSteps: [
      "Enter your Initial Investment (₹ / $) — for example, 100000.",
      "Type the Final / Current Value, such as 180000.",
      "Set the Holding Period (years), like 5.",
      "Read the Annual Return (XIRR %) — your true annualized performance.",
      "Check Doubling Time (years) to feel what that rate means in practice.",
    ],
    faqs: [
      { q: "XIRR vs IRR — what is the difference?", a: "IRR assumes cash flows at regular intervals; XIRR handles irregular dates, which matches real investing. For a single investment held N years, both reduce to the CAGR — this calculator's core case." },
      { q: "What does XIRR stand for?", a: "Extended Internal Rate of Return. 'Extended' refers to handling cash flows on arbitrary dates rather than fixed periods." },
      { q: "XIRR vs CAGR — which should I use?", a: "For one lump sum held N years, they are identical. XIRR pulls ahead with multiple deposits and withdrawals at odd times — like SIPs with top-ups — where CAGR cannot cope." },
      { q: "Why is my XIRR lower than my total return?", a: "Because annualization spreads the gain across years. A 90% total return over 7 years is 9.6% annualized — the total flatters, the XIRR informs." },
      { q: "Can XIRR handle negative returns?", a: "Yes. If the final value is below the investment, the XIRR goes negative, showing your annualized rate of loss — useful for honest post-mortems." },
    ],
  },
  "401k-contribution-calculator": {
    description: `An employer 401(k) match is the closest thing to free money in personal finance — and this calculator makes sure you capture every dollar of it. It starts with your Annual Salary and Your Contribution percentage to get your Annual Contribution, then applies the Employer's Match Rate up to the Employer Match Cap to compute the Employer's Annual Contribution. Add your Current Balance compounding at your Expected Annual Return over your Years to Retirement, plus the future value of all those annual contributions, and you get the Projected Retirement Balance.

Earn $90,000, contribute 10% ($9,000), and your employer matches 50% up to 6% of salary. That match is 50% of $5,400 — $2,700 of free money yearly, a guaranteed 50% return on those dollars before markets do anything. Over 30 years at 7%, your $9,000 annual contributions grow to about $850,000, and the match adds roughly another $255,000. Contributing below the match cap is voluntarily declining a raise.

The hierarchy is simple: contribute enough to capture the full match first, then decide between more 401(k), IRA, or taxable investing. Never leave match money unclaimed.`,
    howToSteps: [
      "Enter your Annual Salary — for example, $75,000.",
      "Type Your Contribution as a percent, such as 10.",
      "Enter the Employer Match Rate, like 50, and the Employer Match Cap, like 6.",
      "Add your Current Balance, for example $25,000, and your Years to Retirement, like 30.",
      "Set your Expected Annual Return, such as 7, and read the Projected Retirement Balance.",
    ],
    faqs: [
      { q: "What does a 50% match up to 6% actually mean?", a: "Your employer adds 50 cents for every dollar you contribute, but only on contributions up to 6% of your salary. Contribute 6% and you get the full match; contribute 3% and you leave half of it behind." },
      { q: "Is a 401(k) the same as a pension?", a: "No. A pension promises a defined monthly payout funded by your employer. A 401(k) is a defined-contribution account — you and your employer fund it, markets determine the outcome, and you bear the investment risk." },
      { q: "What happens to my 401(k) if I change jobs?", a: "Roll it into your new employer's plan or an IRA to preserve tax advantages. Cashing out triggers income tax plus a 10% early-withdrawal penalty if you are under 59½." },
      { q: "Should I contribute pre-tax or Roth?", a: "Pre-tax saves taxes now; Roth saves them in retirement. Young earners in low brackets often favor Roth; peak earners usually favor pre-tax. Many plans let you split." },
      { q: "Does the employer match count toward IRS limits?", a: "The $23,000-ish employee limit applies to your contributions only; the match sits under the much higher total limit (around $70,000). The match never blocks your own contributions." },
    ],
  },
  "401k-save-max-calculator": {
    description: `Contributing "enough" to your 401(k) and contributing the legal maximum are very different achievements — and the gap between them compounds into life-changing money. This calculator stages the comparison. From your Annual Salary and Current Contribution % it derives your Current Annual Contribution, then sets it against the IRS Max Contribution — $23,000 under age 50, $30,500 from 50 on with catch-up contributions — to find the Additional You Could Contribute. Projecting both paths at your Expected Annual Return over your Years to Retirement reveals the Additional Retirement Savings maxing out buys.

You are 40, earn $120,000, and contribute 8% ($9,600). The IRS max is $23,000, so you could add $13,400 yearly. At 7% over 25 years, your current path grows to about $608,000 while the maxed path reaches roughly $1,456,000 — a difference near $848,000 for money that was sitting in your paycheck all along. The Max as % of Salary figure (about 19% here) reframes the target as a savings rate.

Maxing out is not mandatory for everyone — but you should know the price of not doing it. This calculator names that price precisely.`,
    howToSteps: [
      "Enter your Annual Salary — for example, $100,000.",
      "Type your Current Contribution %, such as 10.",
      "Enter Your Age — 50-plus unlocks the higher catch-up limit in the math.",
      "Set your Expected Annual Return, like 7, and Years to Retirement, like 25.",
      "Read the Additional Retirement Savings — that is what maxing out is worth to you.",
    ],
    faqs: [
      { q: "Should I max out my 401(k) every year?", a: "If you can do it while keeping an emergency fund and avoiding high-interest debt, yes — the tax shelter and compounding are unmatched. But capturing the employer match and funding an IRA come first in priority." },
      { q: "What is the 401(k) contribution limit?", a: "This calculator uses $23,000 for under-50 and $30,500 for 50-plus with catch-up contributions. The IRS adjusts these most years, so verify the current year's figure." },
      { q: "What happens if I contribute more than the IRS limit?", a: "The excess is returned to you and taxed, and it can create a paperwork mess with your plan administrator. Payroll systems usually cap you automatically — problems arise mainly with multiple employers." },
      { q: "Is maxing out worth it if I am already 55?", a: "Even more so — catch-up contributions let you shelter $30,500 yearly, and every maxed year still compounds for a decade-plus. Late maxing beats never maxing decisively." },
      { q: "Where does extra money go after maxing the 401(k)?", a: "Typically a Roth or traditional IRA next ($7,000-ish), then an HSA if eligible, then taxable brokerage. The calculator's maxed-out figure assumes the 401(k) piece only." },
    ],
  },
  "asset-allocation-calculator": {
    description: `The right mix of stocks, bonds, and cash has less to do with market predictions than with your age and temperament. Young investors can ride out crashes; retirees cannot — so allocation should glide from aggressive to conservative as the years pass. This calculator encodes that wisdom in a formula: it starts from the classic "110 minus age" equity baseline, scales it by your Risk Tolerance, and clamps the result between 20% and 95% stocks. Bonds take most of the remainder, cash the rest, and each slice is converted to dollars on your Total Portfolio Value.

You are 40 with moderate risk tolerance and a $250,000 portfolio. The formula suggests roughly 70% stocks, 25% bonds, and 5% cash — about $175,000 in equities, $62,500 in bonds, and $12,500 in cash. Set yourself as conservative and the stock slice shrinks toward 35%; aggressive pushes it past 85%. The Stock Value, Bond Value, and Cash Value figures turn percentages into rebalance orders.

Allocation is the highest-leverage decision in investing — more important than which fund you pick. Revisit it every few years or after big life changes, not after headlines.`,
    howToSteps: [
      "Enter Your Age — for example, 40.",
      "Set your Risk Tolerance on the scale provided, such as 2 for moderate.",
      "Type your Total Portfolio Value, like $250,000.",
      "Read the Stock Allocation, Bond Allocation, and Cash Allocation percentages.",
      "Use the Stock Value, Bond Value, and Cash Value to rebalance your accounts.",
    ],
    faqs: [
      { q: "What is the 110 minus age rule?", a: "Subtract your age from 110 to get a starting stock percentage — a 40-year-old holds about 70% stocks. This calculator refines it with your risk tolerance and floors/ceilings, but the intuition is identical." },
      { q: "Stocks vs bonds — how should the mix change as I age?", a: "Shift gradually toward bonds each decade. A 30-year-old might hold 80–90% stocks; a 65-year-old more like 40–50%. The calculator's age-driven formula automates exactly this glide path." },
      { q: "How much cash should I hold in my portfolio?", a: "Beyond your emergency fund, 0–10% is typical — cash is a stabilizer, not a growth engine. The calculator assigns the residual to cash after sizing stocks and bonds." },
      { q: "Does risk tolerance override age?", a: "It modifies, not overrides. An aggressive 60-year-old still gets meaningful bond exposure here, because sequence-of-returns risk near retirement is mathematical, not psychological." },
      { q: "How often should I rebalance to this allocation?", a: "Annually or when any slice drifts more than 5% from target. Rebalancing forces you to sell high and buy low — the rare free lunch in investing." },
    ],
  },
  "us-retirement-calculator": {
    description: `Knowing you want $6,000 a month in retirement is easy; knowing whether you are actually on track is the hard part. This comprehensive planner closes that gap in three moves. First it projects your savings forward: Current Savings compounding at your Expected Annual Return plus your Monthly Contribution growing alongside, over the years from your Current Age to Retirement Age. Then it inflates your Desired Monthly Income (Today's $) by the Inflation Rate to find what that lifestyle really costs at retirement. Finally it prices that income as a Required Retirement Corpus and compares it against your projection — the shortfall becomes your Required Additional Monthly Savings.

You are 40 with $100,000 saved, adding $1,500 monthly at 7%, targeting $6,000 a month in today's dollars at 67 with 3% inflation. Your savings project to about $1.28 million, but the inflated income need — roughly $13,300 a month — prices a corpus near $2.7 million. The monthly shortfall: about $1,900 more needed, or a later retirement, or higher returns.

That shortfall figure is the most actionable number in retirement planning. It converts anxiety into a to-do list.`,
    howToSteps: [
      "Enter your Current Age, such as 40, and your Retirement Age, like 67.",
      "Set your Life Expectancy — 90 is a safe planning default.",
      "Type your Current Savings, like $100,000, and your Monthly Contribution, such as $1,500.",
      "Enter your Expected Annual Return, like 7, the Inflation Rate, like 3, and your Desired Monthly Income (Today's $), such as $6,000.",
      "Read the Required Additional Monthly Savings — close that gap starting now.",
    ],
    faqs: [
      { q: "Am I saving enough for retirement?", a: "Run your numbers above — the monthly shortfall figure is the definitive answer. As a shortcut, Fidelity suggests 10x your salary saved by 67; this calculator replaces rules of thumb with your actual math." },
      { q: "How does inflation change retirement planning?", a: "Radically. At 3% inflation, prices double roughly every 24 years — so $6,000 of lifestyle today needs about $13,300 at a retirement 27 years out. Ignoring inflation is the classic planning error." },
      { q: "Should I count on Social Security?", a: "Partially. Include a conservative estimate as income, which shrinks the corpus your savings must fund. But do not assume today's benefit formula survives untouched for 30 years." },
      { q: "What return assumption is safe?", a: "A 60/40 portfolio has delivered about 7% nominal historically. Use 6–7% for planning; every extra point of assumed return hides hundreds of dollars in required monthly savings." },
      { q: "Is retiring at 67 still the right target?", a: "Full Social Security age is 67 for most workers now, but the right age is personal. Delaying to 70 boosts both your savings and your Social Security benefit — model both ages here." },
    ],
  },
  "retirement-income-analysis-calculator": {
    description: `A million-dollar portfolio sounds like plenty until you translate it into a monthly paycheck. This analyzer performs that translation across every income stream you will have: portfolio withdrawals at your chosen Annual Withdrawal Rate, Social Security (Monthly), Pension (Monthly), and Other Income (Monthly). It sums them into Total Monthly Income and Total Annual Income, benchmarks your plan against the Safe 4% Withdrawal (Monthly), and estimates the Years Until Depletion so you can see whether the money outlives you or vice versa.

Hold a $1,000,000 portfolio, withdraw 4%, and collect $2,000 in Social Security with no pension. The portfolio pays about $3,333 monthly; with Social Security your total approaches $5,333 — roughly $64,000 a year. The safe-withdrawal benchmark confirms 4% as the sustainable line, and the depletion estimate stretches past 30 years. Push withdrawals to 6% and the depletion horizon shortens dramatically — the math is unforgiving past 5%.

Withdrawal rate is the master variable of retirement. Every point above 4% must be justified by a shorter horizon, lower spending flexibility, or a genuine willingness to risk the later years.`,
    howToSteps: [
      "Enter your Portfolio Value — for example, $1,000,000.",
      "Set your Annual Withdrawal Rate, such as 4.",
      "Add your Social Security (Monthly), like $2,000, plus any Pension (Monthly) and Other Income (Monthly).",
      "Read your Total Monthly Income — your retirement paycheck.",
      "Check the Est. Years Until Depletion; if it falls short of your horizon, lower the withdrawal rate.",
    ],
    faqs: [
      { q: "What is the 4% rule?", a: "Withdraw 4% of your portfolio in year one, then adjust for inflation yearly. Research on US markets suggests this survived nearly all 30-year historical periods — it is a guideline, not a guarantee." },
      { q: "Will my money last 30 years at a 5% withdrawal rate?", a: "Probably not safely. Historical success rates drop sharply above 4–4.5%. Enter your numbers and watch the depletion estimate — it is the honest answer for your situation." },
      { q: "Should I include my home equity?", a: "No — not unless you plan to sell or take a reverse mortgage. The portfolio value here should be liquid investments only." },
      { q: "How does inflation affect the analysis?", a: "The Inflation Rate input erodes purchasing power over time, which is why the nominal income that looks fine today may fall short in year 20. Real (inflation-adjusted) thinking is essential." },
      { q: "What if I can cut spending in bad market years?", a: "Flexibility is powerful — dynamic withdrawal strategies (cutting 10–20% after down years) can sustain higher average rates. The fixed-rate math here is the conservative baseline." },
    ],
  },
  "retirement-income-calculator": {
    description: `Retirement income rarely comes from one source; it arrives as a patchwork — portfolio withdrawals here, Social Security there, maybe a pension or a few shifts of part-time work. This calculator stitches the patchwork into a single monthly figure. It converts your Retirement Savings into Monthly Portfolio Income at your Annual Withdrawal Rate, then layers on Social Security (Monthly), Pension (Monthly), and Part-Time Income (Monthly) for the Total Monthly Income and Total Annual Income. It even sketches the tax bite, estimating Taxable Income and an Estimated Annual Tax so the gross does not mislead you.

With $800,000 saved at a 4% withdrawal rate, the portfolio yields about $2,667 monthly. Add $1,800 in Social Security and $1,000 of part-time income and you are at roughly $5,467 a month — $65,600 a year. The tax estimate then trims that to spendable reality, since withdrawals and part-time earnings are taxable even when Social Security is only partially so.

Build the patchwork deliberately. Each added stream — especially guaranteed ones like Social Security — lets you withdraw less from the portfolio, and every un-withdrawn dollar keeps compounding for your later self.`,
    howToSteps: [
      "Enter your Retirement Savings — for example, $800,000.",
      "Set your Annual Withdrawal Rate, such as 4.",
      "Type your Social Security (Monthly), like $1,800, and any Pension (Monthly).",
      "Add Part-Time Income (Monthly) if you plan to keep working a little.",
      "Read Total Monthly Income, then Estimated Annual Tax for the after-tax picture.",
    ],
    faqs: [
      { q: "How is this different from the retirement income analysis calculator?", a: "That tool focuses on sustainability — depletion timelines and the 4% safety benchmark. This one focuses on completeness: stacking every income source and estimating the tax bite for a realistic spendable figure." },
      { q: "Are Social Security benefits taxed?", a: "Partially, depending on your other income — up to 85% can be taxable federally. This calculator's tax estimate is simplified; the Social Security tax calculator models the provisional-income thresholds precisely." },
      { q: "Is part-time work worth it in retirement?", a: "$1,000 a month of part-time income is equivalent to having $300,000 more saved at a 4% withdrawal rate. Working a little can dramatically extend portfolio longevity." },
      { q: "What counts as taxable income here?", a: "Portfolio withdrawals (from pre-tax accounts), part-time earnings, and pension income. Roth withdrawals and return of principal are generally not taxable — the estimate here is intentionally simplified." },
      { q: "Should I withdraw from taxable or retirement accounts first?", a: "Conventional wisdom: taxable accounts first, then pre-tax 401(k)/IRA, then Roth last — letting tax-free growth compound longest. Coordinate with RMD rules after 73." },
    ],
  },
  "retirement-planner-calculator": {
    description: `Thirty years feels abstract until you see what $1,000 a month becomes. This planner turns your current trajectory into a future reality check with a clean two-stage model. Stage one compounds your Current Savings at your Expected Annual Return from your Current Age to your Retirement Age, while your Monthly Contribution builds alongside through the annuity formula — together they form your Future Savings Value. Stage two deflates that figure by the Inflation Rate to reveal the Inflation-Adjusted Value: what your pile is actually worth in today's purchasing power. Finally it converts the pile into an Est. Monthly Retirement Income.

Start at 30 with $50,000 saved, add $1,000 monthly at 7%, retire at 65 with 3% inflation. The nominal future value lands near $1.09 million — but inflation-adjusted it is only about $387,000 in today's dollars, supporting roughly $2,260 a month. That gap between nominal and real is the most important insight on the page: a million dollars in 2055 is not a million dollars today.

Re-run it with $1,500 monthly and watch the income jump. Small input changes, enormous outcome changes — that asymmetry is why planning beats hoping.`,
    howToSteps: [
      "Enter your Current Age, such as 30, and your Retirement Age, like 65.",
      "Type your Current Savings, for example $50,000.",
      "Enter your Monthly Contribution, like $1,000.",
      "Set your Expected Annual Return, such as 7, and the Inflation Rate, like 3.",
      "Compare the Future Savings Value with the Inflation-Adjusted Value — plan around the second one.",
    ],
    faqs: [
      { q: "Retirement planner vs retirement calculator — what is the difference?", a: "This planner emphasizes the journey: projecting your current savings path and translating it into inflation-adjusted income. Calculators focused on the destination instead solve for the corpus or monthly savings you still need." },
      { q: "Why is the inflation-adjusted value so much lower?", a: "Because 3% inflation over 35 years cuts purchasing power by nearly two-thirds. The nominal figure impresses; the real figure informs — always budget in today's dollars." },
      { q: "How is the monthly retirement income estimated?", a: "By applying your expected return to the inflation-adjusted portfolio value — essentially the sustainable yield your pile can generate. It is an approximation; the income analysis calculators model withdrawals more rigorously." },
      { q: "What if I increase contributions by just $200?", a: "Over 35 years at 7%, an extra $200 monthly becomes roughly $360,000 nominal. Small, early, sustained increases dominate every other lever you have." },
      { q: "Does this include employer 401(k) matching?", a: "Fold it into your Monthly Contribution — add your contribution plus the match together as the total monthly inflow for an accurate projection." },
    ],
  },
  "retirement-savings-analysis-calculator": {
    description: `Most retirement plans have a quiet hole in the middle: the gap between what you will have and what you will need. This analyzer finds that hole and measures it. It inflates your Current Monthly Expenses at the Inflation Rate from your Current Age to your Retirement Age, subtracts your Social Security Income (Monthly) and Pension Income (Monthly) to isolate what the portfolio must cover, then prices that income stream as a Required Retirement Corpus at your Expected Annual Return. Finally it grows your Current Savings forward and subtracts — the remainder is your Savings Gap, positive or negative.

You are 35 with $75,000 saved, spending $5,000 monthly, expecting $1,500 from Social Security, retiring at 65 with 6% returns and 3% inflation. Inflated expenses hit about $12,100; Social Security covers $1,500, leaving $10,600 monthly — a corpus near $2.1 million. Your $75,000 compounds to roughly $430,000, leaving a gap around $1.7 million to close through future contributions.

A negative gap means you are ahead — congratulations, protect the lead. A positive gap is your marching orders: the monthly savings that closes it is the only number that matters now.`,
    howToSteps: [
      "Enter your Current Age, such as 35, and your Retirement Age, like 65.",
      "Type your Current Savings, for example $75,000, and your Current Monthly Expenses, like $5,000.",
      "Enter your Social Security Income (Monthly), such as $1,500, and any Pension Income (Monthly).",
      "Set your Expected Annual Return, like 6, and the Inflation Rate, like 3.",
      "Read the Savings Gap — if positive, that is the mountain your future contributions must climb.",
    ],
    faqs: [
      { q: "What is a retirement savings gap?", a: "The difference between the corpus you need and what your current savings will grow into. A $1.7 million gap sounds terrifying, but spread over 30 years of contributions it becomes a manageable monthly figure." },
      { q: "Should I count Social Security in retirement planning?", a: "Yes, but conservatively — include 70–80% of your projected benefit to hedge against future formula changes. Ignoring it entirely overstates your gap; counting all of it understates risk." },
      { q: "Why does the required corpus use my expected return?", a: "The corpus is priced as the lump sum that, invested at your expected return, generates the needed income indefinitely. Higher assumed returns shrink the corpus — which is why the assumption deserves skepticism." },
      { q: "My gap is huge — where do I even start?", a: "Convert it to monthly savings over your remaining working years, automate that amount, and revisit annually. Closing 80% of a gap still transforms your retirement." },
      { q: "Does working two extra years really help?", a: "Enormously — it adds contributions, adds compounding time, and shrinks the retirement years to fund. Raise the retirement age input by two and watch the gap collapse." },
    ],
  },
  "rmd-calculator": {
    description: `The IRS lets your retirement accounts grow tax-deferred for decades, then insists on its cut — that is the bargain behind every traditional 401(k) and IRA. Starting at 73, you must withdraw a minimum amount each year, calculated by dividing your Prior Year-End Balance by a life-expectancy factor from the IRS Uniform Lifetime Table. This calculator applies that rule: enter your Account Balance, Your Age, and the Prior Year-End Balance, and it derives your Distribution Period (years), your Required Minimum Distribution, and the RMD as % of Balance.

With a $520,000 prior year-end balance at age 73, the distribution period is about 26.5 years, making the RMD roughly $19,600 — about 3.8% of the balance. Each year the divisor shrinks as you age, so the percentage — and usually the dollar amount — climbs steadily through your 70s, 80s, and beyond. Miss an RMD and the penalty is severe: historically 25% of the amount you should have withdrawn.

RMDs are taxable income, so they can shove you into a higher bracket and even raise Medicare premiums. Plan withdrawals strategically in your 60s — Roth conversions in low-income years can shrink the future RMD bite.`,
    howToSteps: [
      "Enter your Account Balance — for example, $500,000.",
      "Type Your Age, such as 73.",
      "Enter your Prior Year-End Balance — the December 31 value — like $520,000.",
      "Read your Required Minimum Distribution for this year.",
      "Check the RMD as % of Balance to see how the bite grows as you age.",
    ],
    faqs: [
      { q: "What age do RMDs start?", a: "73 for most people under current law (rising to 75 for those born in 1960 or later). Roth IRAs are exempt during your lifetime; inherited accounts follow different rules." },
      { q: "What happens if I miss my RMD?", a: "The IRS imposes an excise tax — historically 25% of the amount you failed to withdraw, dropping to 10% if corrected promptly. Set calendar reminders; this is an expensive oversight." },
      { q: "Is an RMD calculator the same as the IRS life expectancy table?", a: "This automates the table's math. The Uniform Lifetime Table gives the divisor for each age; the calculator divides your balance by it and shows the percentage — same result, less arithmetic." },
      { q: "Can I withdraw more than the RMD?", a: "Absolutely — the RMD is a floor, not a ceiling. Many retirees withdraw extra in low-tax years deliberately to reduce future RMDs." },
      { q: "Do RMDs apply to Roth 401(k)s?", a: "During your lifetime, Roth IRAs are exempt, and Roth 401(k)s became exempt from RMDs starting in 2024. Traditional balances still face them." },
    ],
  },
  "social-security-analysis-calculator": {
    description: `Claiming Social Security at 62 versus 70 is one of the highest-stakes timing decisions you will ever make — it can swing your lifetime benefits by six figures. Claim early and you get smaller checks for more years; delay and each check grows about 8% annually until 70, but you collect for fewer years. This analyzer quantifies the trade-off. From your Monthly Benefit at Claiming Age, your Claiming Age, Life Expectancy, and the COLA Rate (Inflation), it totals your Nominal Benefits, adjusts for cost-of-living increases into Total Real Benefits (with COLA), and computes the Break-Even Age where delaying overtakes claiming early.

Claim $2,000 monthly at 62 and live to 85: about $552,000 nominal. Wait until 70 for roughly $3,520 monthly over 15 years: about $634,000 nominal — plus larger inflation adjustments compounding on the bigger base. The break-even typically lands near age 78–80; live past it and delaying wins, die before it and early claiming wins.

Nobody knows their expiration date, so weigh health, family longevity, and whether you need the income now. The math favors delay for the healthy with other resources; reality often favors flexibility.`,
    howToSteps: [
      "Enter your Monthly Benefit at Claiming Age — for example, $2,000 at 62.",
      "Set your Claiming Age, such as 62, 67, or 70.",
      "Enter your Life Expectancy — be honest about family history; try 85.",
      "Set the COLA Rate (Inflation), like 2.5.",
      "Compare Total Real Benefits (with COLA) across claiming ages to find your winner.",
    ],
    faqs: [
      { q: "Should I take Social Security at 62 or wait until 70?", a: "If you are healthy, have other income, and expect longevity, waiting usually wins — benefits grow ~8% yearly until 70. If you need the money now or have health concerns, claiming early is rational, not foolish." },
      { q: "What is the Social Security break-even age?", a: "The age where total benefits from delaying surpass total benefits from claiming early — typically 78–80 for 62-vs-70. It is the fulcrum of the entire decision." },
      { q: "How does COLA affect the decision?", a: "Cost-of-living adjustments compound on your benefit amount, so delayed (larger) benefits get larger dollar raises. Higher expected inflation strengthens the case for waiting." },
      { q: "Can I change my mind after claiming?", a: "Within 12 months you can withdraw your application and repay benefits received — a one-time reset. After that, the decision is essentially permanent." },
      { q: "Does working while claiming reduce benefits?", a: "Before full retirement age, earnings above the annual limit ($23,400-ish) reduce benefits $1 for every $2 earned. After full retirement age, no reduction applies." },
    ],
  },
  "social-security-distribution-calculator": {
    description: `Many retirees are startled to learn that Social Security benefits can be taxed — up to 85% of them, in fact. Whether yours are depends on your "provisional income": your other income plus half your Social Security benefits. Cross $25,000 single ($32,000 joint) and up to 50% becomes taxable; cross $34,000 single ($44,000 joint) and up to 85% is taxable. This estimator — named the Social Security Tax Calculator — runs your numbers through those thresholds. It annualizes your Primary SS Benefit (Monthly) and Spouse SS Benefit (Monthly) by Filing Status, adds your Other Annual Income to compute Provisional Income, and derives your Taxable SS Amount plus an Estimated Tax on SS.

Take $2,500 monthly primary plus $1,000 spousal benefits with $30,000 of other income, filing jointly. Annual benefits total $42,000; provisional income lands near $51,000 — above the $44,000 joint threshold, so 85% ($35,700) is taxable. At a 22% marginal rate that is roughly $7,850 of tax on benefits many assumed were tax-free.

Manage provisional income deliberately: Roth withdrawals do not count toward it, while traditional IRA distributions do. The account you tap first changes your tax bill.`,
    howToSteps: [
      "Enter your Primary SS Benefit (Monthly) — for example, $2,500.",
      "Add the Spouse SS Benefit (Monthly), such as $1,000, if applicable.",
      "Set your Filing Status — 1 for single, 2 for joint in this tool's coding.",
      "Type your Other Annual Income, like $30,000 from pensions or withdrawals.",
      "Read the Taxable SS Amount and the Estimated Tax on SS — plan quarterly payments around it.",
    ],
    faqs: [
      { q: "Are Social Security benefits taxed like regular income?", a: "Not exactly — a special formula taxes 0%, 50%, or 85% of your benefits based on provisional income thresholds. It is never 100%, and low-income retirees often owe nothing on benefits." },
      { q: "What is provisional income?", a: "Your adjusted gross income plus tax-exempt interest plus half your Social Security benefits. It exists solely to determine how much of your benefits get taxed — cross $25,000/$32,000 and taxation begins." },
      { q: "Do states tax Social Security too?", a: "Most do not — only a handful of states tax benefits, and several of those offer exemptions. Check your state's rules; the federal calculation here is the bigger bite for most." },
      { q: "Can I reduce the tax on my benefits?", a: "Yes, by managing provisional income: favor Roth withdrawals (excluded) over traditional IRA distributions (included), and consider bunching income into alternate years." },
      { q: "Why is my spouse's benefit included?", a: "Because the thresholds and taxation apply to the household's combined benefits when filing jointly. The calculator annualizes both benefits before testing the $32,000/$44,000 joint thresholds." },
    ],
  },
};
