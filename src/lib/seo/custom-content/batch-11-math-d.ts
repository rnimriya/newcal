import type { SEOContent } from "@/lib/seo/content";

export const BATCH_11: Record<string, Partial<SEOContent>> = {
  "parametric-calculator": {
    description: `A ball arcing off a Little League bat does not travel as a simple y-equals-something function — its horizontal and vertical positions each run on their own clock. Parametric equations capture that idea: instead of writing y as a function of x, you write both x and y as functions of a third variable t, the parameter. Think of t as the stopwatch. For a projectile, x(t) might be the steady march forward while y(t) rises and falls under gravity, and together they trace the arc you see from the bleachers.\n\nCircles, ellipses, and cycloids all surrender to this form. A circle of radius 3 becomes x = 3 cos(t), y = 3 sin(t), and letting t run from 0 to 2π draws the whole loop — something no single y = f(x) equation can do, since a circle fails the vertical-line test. Physicists use parameters for orbits, engineers for cam profiles, and game developers for character paths. This calculator evaluates one building block of parametric work: enter the value of a parameter-driven expression in the Variable A box and its partner factor in the Variable B box, and the Result box multiplies them — for instance, combining a time factor with a velocity factor to get a displacement at one instant.`,
    howToSteps: [
      "Write your parametric pair on paper first — for example, x(t) = 4t and y(t) = −16t² + 20t for a tossed ball.",
      "Pick the instant you care about, say t = 0.5 seconds, and compute the time factor of one expression by hand.",
      "Type that factor in the Variable A box — for x(0.5), the time factor is 0.5.",
      "Type the constant partner factor in the Variable B box — for x(t) = 4t, that constant is 4.",
      "Read the Result box: 0.5 × 4 = 2, so the ball is 2 units along the x-axis at half a second.",
      "Repeat for the y-expression to pin down the full (x, y) position at that instant.",
    ],
    faqs: [
      { q: "What is a parametric equation in plain words?", a: "It is a pair of equations, x = f(t) and y = g(t), that describe a curve by telling you where a point is at each value of the parameter t. Imagine t as time on a stopwatch and the equations as a GPS readout." },
      { q: "When would I use parametric form instead of y = f(x)?", a: "Whenever a curve loops, doubles back, or involves time directly. Circles, spirals, projectile paths, and anything a moving object traces are natural in parametric form and awkward or impossible as y = f(x)." },
      { q: "What is the parameter t usually?", a: "Often it is time, but it does not have to be. In geometry it can be an angle — as in x = r cos(θ) for a circle — and in design work it can be any convenient dial that sweeps the curve." },
      { q: "What mistake do students make with parametric equations?", a: "They eliminate t too early and lose information about direction and speed. The parametric form knows which way the point travels and how fast; the plain y = f(x) form throws that away." },
      { q: "People also search 'parametric equation calculator' — same thing?", a: "Yes. 'Parametric equation calculator' and 'parametric calculator' mean the same tool: one that evaluates or graphs equations written in the x(t), y(t) form." },
    ],
  },

  "parentheses-calculator": {
    description: `Ask a room of adults what 6 + 2 × 3 equals and you will hear both 24 and 12 — the split comes down to parentheses, or the lack of them. Parentheses are the boss of arithmetic: whatever sits inside them gets evaluated before anything outside, which is the first commandment of the order of operations (PEMDAS: Parentheses, Exponents, Multiplication and Division, Addition and Subtraction). Wrapping (6 + 2) × 3 forces the addition first and gives 24, while 6 + (2 × 3) — or no parentheses at all — gives 12.\n\nSpreadsheets, tax forms, and construction estimates all hinge on this. A contractor pricing (8 + 4) feet of lumber at $5 a foot owes $60, not $28; the parentheses decide which number the $5 multiplies. Nested parentheses work from the inside out, like unpacking boxes: solve the innermost pair first, then the next layer. This calculator handles the final combination step. Evaluate the innermost parenthesized chunk on paper, type it into the Variable A box, type the outside number into the Variable B box, and the Result box shows the combined answer — for example, 12 and 3 give 36 for (8 + 4) × 3.`,
    howToSteps: [
      "Circle the innermost parentheses in your expression and solve that chunk by hand — for (8 + 4) × 3, that chunk is 12.",
      "Type the solved chunk into the Variable A box — enter 12 for this example.",
      "Type the number outside the parentheses into the Variable B box — enter 3 here.",
      "Read the Result box: 12 × 3 = 36, the value of the full expression.",
      "For nested parentheses like 2 × (3 + (4 − 1)), solve the deepest pair first (4 − 1 = 3), then the next layer (3 + 3 = 6), and finish with the calculator.",
      "Double-check by re-typing: a misplaced parenthesis changes the answer, so match each opening bracket to its partner.",
    ],
    faqs: [
      { q: "What is the order of operations in plain words?", a: "Parentheses first, then exponents, then multiplication and division from left to right, then addition and subtraction from left to right. The memory trick is PEMDAS: Please Excuse My Dear Aunt Sally." },
      { q: "When do I actually need a parentheses calculator?", a: "Anytime a formula mixes operations — splitting a restaurant bill with tip and tax, pricing materials by (length + waste) × unit cost, or checking a spreadsheet formula that is not behaving." },
      { q: "What is the most common parentheses mistake?", a: "Doing the operations left to right and ignoring the hierarchy. In 6 + 2 × 3, the multiplication happens first, giving 12 — adding first gives the wrong 24." },
      { q: "Do brackets and braces work like parentheses?", a: "Yes. Square brackets [ ] and curly braces { } are just larger-scale parentheses used to keep nested layers readable. They all mean 'do me first.'" },
      { q: "People also search 'pemdas calculator' — is that this?", a: "Effectively, yes. A PEMDAS calculator evaluates expressions honoring the full order of operations, of which parentheses are the highest-priority step." },
    ],
  },

  "partial-fraction-calculator": {
    description: `A fraction like (5x + 1) / ((x + 2)(x − 3)) looks like a single tangled knot, but partial fraction decomposition unties it into a sum of simple pieces — something like 1/(x + 2) + 4/(x − 3). Each piece has a plain linear denominator, and that simplicity is the whole point: simple fractions are easy to integrate, easy to invert with Laplace transforms, and easy to reason about. Electrical engineers lean on this constantly when they convert a circuit's transfer function back into a time-domain signal.\n\nThe method runs in three moves. Factor the denominator completely, then write one unknown-topped fraction per factor: A/(x + 2) + B/(x − 3). Next, solve for the constants A and B by clearing denominators and matching coefficients (or by plugging in the handy x-values −2 and 3). Finally, recombine to verify. This calculator assists the verification step: type your solved constant A in the Variable A box and constant B in the Variable B box, and the Result box shows their product — cross-check it against the cross-terms of your recombined expansion to confirm the decomposition is correct.`,
    howToSteps: [
      "Factor the denominator of your rational expression completely — for example, x² − x − 6 becomes (x + 2)(x − 3).",
      "Set up one fraction per factor with an unknown numerator: A/(x + 2) + B/(x − 3).",
      "Clear the denominators and solve for the constants — here A = 1 and B = 4.",
      "Type your first constant in the Variable A box and the second in the Variable B box.",
      "Read the Result box: 1 × 4 = 4, which you can compare against the cross-terms when you recombine the pieces.",
      "Add the pieces back together on paper to confirm they rebuild the original fraction.",
    ],
    faqs: [
      { q: "What is partial fraction decomposition in plain words?", a: "It splits one complicated fraction into a sum of simpler fractions with easy denominators. Think of it as reverse-engineering: instead of adding fractions together, you are taking the sum apart." },
      { q: "When would I use partial fractions?", a: "In calculus when integrating rational functions, in differential equations with Laplace transforms, and in engineering when breaking a system's response into understandable modes." },
      { q: "What is the most common partial fraction mistake?", a: "Setting up the wrong template. A repeated factor like (x + 1)² needs two terms — A/(x + 1) + B/(x + 1)² — and an irreducible quadratic needs a linear numerator, (Ax + B)/(x² + 1)." },
      { q: "How do I solve for A and B quickly?", a: "Plug in the root of each factor. For A/(x + 2) + B/(x − 3), setting x = −2 kills the A term and exposes B directly — no full system of equations needed." },
      { q: "People also search 'partial fractions calculator' — same thing?", a: "Yes, with or without the hyphen. Both phrases mean a tool that decomposes a rational expression into simpler additive fractions." },
    ],
  },

  "pascal-triangle-calculator": {
    description: `Write 1 at the top of a page, then build each new row from the two numbers above it — 1, then 1 1, then 1 2 1, then 1 3 3 1 — and you have drawn Pascal's triangle, a number pattern that has fascinated mathematicians from 11th-century China to Blaise Pascal's 1653 treatise. Its magic is that every entry is the sum of the two entries diagonally above it, yet the rows secretly count combinations: row n, read left to right, lists C(n,0), C(n,1), C(n,2), and so on.\n\nThat makes the triangle a probability cheat sheet. Row 4 reads 1 4 6 4 1, which tells you that flipping four coins yields one way to get all heads, four ways to get three heads, six ways to get two heads, and so on. The entries also expand binomials — (x + y)³ = 1x³ + 3x²y + 3xy² + 1y³ — and along the diagonals hide the Fibonacci numbers, triangular numbers, and powers of 2 in the row sums. This calculator evaluates single entries: the binomial coefficient C(n,k) equals the falling product n × (n−1) × … divided by k!. Type the falling product n × (n−1) × … × (n−k+1) in the Variable A box and 1/k! in the Variable B box, and the Result box returns C(n,k).`,
    howToSteps: [
      "Decide which entry you want: row n, position k, counting from zero — for example, row 5, position 2.",
      "Compute the falling product n × (n−1) × … × (n−k+1) by hand — here 5 × 4 = 20.",
      "Type that falling product in the Variable A box — enter 20.",
      "Compute 1/k! — here 1/2! = 0.5 — and type it in the Variable B box.",
      "Read the Result box: 20 × 0.5 = 10, so row 5, position 2 is 10.",
      "Verify by building the row: 1 5 10 10 5 1 — the third entry is indeed 10.",
    ],
    faqs: [
      { q: "What is Pascal's triangle in plain words?", a: "A triangular grid of numbers where each entry is the sum of the two numbers above it. Row n lists the binomial coefficients C(n,0) through C(n,n), which count the ways to choose k items from n." },
      { q: "When would I use Pascal's triangle?", a: "For coin-flip and card probabilities, expanding binomials like (x + y)⁵, and any counting problem that asks 'in how many ways can I choose k from n'." },
      { q: "What is the most common Pascal's triangle mistake?", a: "Starting the row count at 1 instead of 0. The single-1 row is row 0, so the row 1 2 1 is row 2 — off-by-one errors silently pick the wrong coefficients." },
      { q: "Why do the rows sum to powers of 2?", a: "Because each entry counts a subset choice, and n items have 2ⁿ possible subsets. Row 4 sums to 16, which is 2⁴." },
      { q: "People also search 'pascals triangle calculator' without the apostrophe — same thing?", a: "Yes. Search engines treat 'pascals triangle' and 'Pascal's triangle' identically; both mean the same triangular array of binomial coefficients." },
    ],
  },

  "pendulum-calculator": {
    description: `A porch swing, a grandfather clock, and a wrecking ball all obey the same hypnotic rule: the time for one full swing depends almost entirely on length, not on how heavy the weight is or — for small swings — how far it travels. The period T of a simple pendulum is 2π times the square root of (length ÷ gravity). Double the length and the period grows by about 41 percent; quadruple it and the period exactly doubles, because of that square root.\n\nClockmakers exploit this mercilessly. A seconds pendulum — one that takes exactly two seconds per full swing — must be about 39 inches long, which is why grandfather clocks are tall furniture and not desk toys. On the Moon, where gravity is one-sixth of Earth's, the same pendulum swings about 2.4 times slower. This calculator finishes the arithmetic: compute √(L/g) on paper using feet and g = 32.2 ft/s², type that value in the Variable A box, type 6.2832 (which is 2π) in the Variable B box, and the Result box shows the period in seconds. A 2-foot porch chain gives √(2/32.2) ≈ 0.249 in A, so the swing takes about 1.57 seconds per round trip.`,
    howToSteps: [
      "Measure the pendulum's length L in feet, from the pivot to the center of the weight.",
      "Divide L by 32.2 (Earth's gravity in ft/s²) and take the square root — for a 2-foot chain, √(2/32.2) ≈ 0.249.",
      "Type that square-root value in the Variable A box — enter 0.249.",
      "Type 6.2832, the value of 2π, in the Variable B box.",
      "Read the Result box: 0.249 × 6.2832 ≈ 1.57, so one full swing takes about 1.57 seconds.",
      "Halve the result for the one-way trip — the tick between a clock's tick and tock.",
    ],
    faqs: [
      { q: "What is the pendulum period formula in plain words?", a: "The period equals 2π times the square root of (length divided by gravity): T = 2π√(L/g). Longer pendulum, slower swing; stronger gravity, faster swing." },
      { q: "When would I use a pendulum calculator?", a: "Timing a grandfather clock, checking a playground or porch swing's rhythm, sizing a Foucault pendulum display, or solving physics homework on simple harmonic motion." },
      { q: "Does a heavier bob swing slower?", a: "No — mass cancels out of the formula entirely. A bowling ball and a marble on equal-length strings swing in perfect unison, as Galileo reportedly observed with church lamps." },
      { q: "What is the most common pendulum mistake?", a: "Mixing units for length and gravity. Feet demand g = 32.2 ft/s²; meters demand g = 9.81 m/s². Mixing them quietly corrupts the square root." },
      { q: "People also search 'swing period calculator' — is that this?", a: "Yes. 'Swing period' is the everyday name for the pendulum period — the seconds for one complete back-and-forth cycle." },
    ],
  },

  "pentagon-area-calculator": {
    description: `The Pentagon building in Arlington, Virginia — the world's largest office building by floor area — is a regular pentagon: five equal sides, five equal angles, and fivefold symmetry you can spot from a satellite photo. The area of any regular pentagon with side length s is (1/4) × √(5(5 + 2√5)) × s², which works out to roughly 1.72048 × s². That constant 1.72048 is doing all the geometric heavy lifting: it encodes the pentagon's 108° interior angles and the golden ratio hiding in its diagonals.\n\nArea scales with the square of the side, so doubling the side quadruples the area — a 20-foot pentagon courtyard covers four times the ground of a 10-foot one. Landscapers laying pentagonal pavers, quilters cutting five-sided patches, and students checking geometry homework all need this number. Using the calculator is a two-stage job: first find s², then scale it. Type the side length in both the Variable A and Variable B boxes — for a 10-foot side, enter 10 and 10 — and the Result box shows 100, the square. Multiply that by 1.72048 on paper (or with a second pass) to get about 172.05 square feet.`,
    howToSteps: [
      "Measure one side of your regular pentagon — all five sides must be equal for this formula.",
      "Type the side length in the Variable A box — for example, 10 for a 10-foot side.",
      "Type the same side length in the Variable B box — enter 10 again.",
      "Read the Result box: 10 × 10 = 100, which is the side length squared.",
      "Multiply the Result by 1.72048 — 100 × 1.72048 ≈ 172.05 square feet of area.",
      "Sanity-check with a rough triangle split: a pentagon is a bit more than 1.7 times the square of its side.",
    ],
    faqs: [
      { q: "What is the pentagon area formula in plain words?", a: "Area ≈ 1.72048 × (side length)². Square the side, then multiply by 1.72048. The exact form is (1/4)√(5(5+2√5)) × s²." },
      { q: "When would I need a pentagon's area?", a: "Estimating flooring or pavers for a five-sided room or patio, cutting fabric patches, sizing a garden bed, or checking geometry homework." },
      { q: "Does this work for irregular pentagons?", a: "No. The 1.72048 constant assumes all five sides and all five angles are equal. An irregular pentagon must be split into triangles and measured piece by piece." },
      { q: "What is the most common pentagon area mistake?", a: "Forgetting to square the side first, or applying the formula to a shape that only looks regular. Measure all five sides before trusting the shortcut." },
      { q: "People also search 'area of pentagon calculator' — same thing?", a: "Yes. 'Area of pentagon calculator' is just the full phrase for this tool; both compute the same regular-pentagon area." },
    ],
  },

  "pentagon-calculator": {
    description: `Cut a regular pentagon corner to corner and the diagonals cross in golden-ratio proportions — the diagonal is about 1.618 times the side, the famous φ. That is only one of the pentagon's tidy properties: five equal sides give a perimeter of 5 × s, each interior angle is exactly 108°, the five diagonals form a perfect five-pointed star (a pentagram) in the middle, and the exterior angles are a clean 36° each. Nature noticed too: many flowers, starfish, and the cross-section of an okra pod flirt with fivefold symmetry.\n\nIf you know one measurement, the rest unfold. A 6-inch quilt patch has a perimeter of 30 inches, diagonals of about 9.7 inches, and interior angles of 108° wherever two edges meet. Carpenters cutting pentagonal table tops and crafters folding origami stars work from these relationships constantly. This calculator handles the multiplicative ones: type 5 in the Variable A box and your side length in the Variable B box, and the Result box gives the perimeter — 5 × 6 = 30 inches. Swap the 5 for 1.618 to get the diagonal instead.`,
    howToSteps: [
      "Decide which pentagon property you want: perimeter (× 5) or diagonal (× 1.618).",
      "Type the multiplier in the Variable A box — 5 for perimeter, 1.618 for the diagonal.",
      "Type your side length in the Variable B box — for example, 6 for a 6-inch side.",
      "Read the Result box: 5 × 6 = 30 inches of perimeter, or 1.618 × 6 ≈ 9.71 inches of diagonal.",
      "Remember the fixed angles need no calculator: every interior angle is 108°, every exterior angle 36°.",
      "For the area, hop over to the pentagon area calculator, which applies the 1.72048 constant.",
    ],
    faqs: [
      { q: "What are the key pentagon formulas in plain words?", a: "Perimeter = 5 × side. Diagonal ≈ 1.618 × side. Interior angle = 108°. Area ≈ 1.72048 × side². One measurement unlocks the rest." },
      { q: "When would I use a pentagon calculator?", a: "Cutting five-sided table tops, planning pentagonal garden beds, folding paper stars, estimating trim for a bay window with five panels." },
      { q: "What is the golden ratio doing in a pentagon?", a: "Each diagonal crosses others in golden-ratio segments — the diagonal-to-side ratio is exactly φ ≈ 1.618. The ancient Greeks carved this into the Parthenon's proportions." },
      { q: "What is the most common pentagon mistake?", a: "Confusing the side with the diagonal or the apothem. The apothem (center to side midpoint) is about 0.688 × side — a third length that shows up in area derivations." },
      { q: "People also search '5 sided shape calculator' — is that this?", a: "Yes. A five-sided polygon is a pentagon, so '5 sided shape calculator' lands on the same geometry." },
    ],
  },

  "percent-change-calculator": {
    description: `Your grocery receipt is the percent-change battlefield of American life. When a gallon of milk climbs from $3.50 to $4.20, the percent change is (new − old) ÷ old × 100 — here ($4.20 − $3.50) ÷ $3.50 × 100, about a 20% jump. The formula always anchors to the starting value: subtract the old number from the new one, divide by the old number, and multiply by 100 to turn the decimal into a percent. A positive answer is growth; a negative answer is shrinkage.\n\nInvestors watch it on stock tickers, managers on quarterly revenue, and shoppers on sale tags. The classic trap is asymmetry: a stock that falls 50% needs a 100% gain to recover, because the second percent anchors to the smaller base. This calculator performs the heart of the computation. Type the raw difference (new − old) in the Variable A box — for the milk, 0.70 — and type 1 ÷ old in the Variable B box (1 ÷ 3.50 ≈ 0.2857), and the Result box shows 0.20. Multiply by 100 in your head to read the 20% change.`,
    howToSteps: [
      "Subtract the old value from the new value on paper — for $3.50 to $4.20, that is 0.70.",
      "Type that difference in the Variable A box — enter 0.70.",
      "Compute 1 ÷ old on paper — 1 ÷ 3.50 ≈ 0.2857 — and type it in the Variable B box.",
      "Read the Result box: 0.70 × 0.2857 ≈ 0.20.",
      "Multiply by 100 to get the percent: a 20% increase.",
      "A negative Result means a decrease — for example, −0.15 is a 15% drop.",
    ],
    faqs: [
      { q: "What is the percent change formula in plain words?", a: "Subtract the old value from the new value, divide by the old value, and multiply by 100. In symbols: ((new − old) ÷ old) × 100." },
      { q: "When would I use percent change?", a: "Tracking stock moves, comparing this quarter's sales to last quarter's, measuring weight change, or checking how much a bill rose year over year." },
      { q: "What is the most common percent change mistake?", a: "Dividing by the new value instead of the old one. The anchor is always the starting number — the 'before' in every before-and-after story." },
      { q: "Why does a 50% loss need a 100% gain to recover?", a: "Because the percentages anchor to different bases. Losing half of $100 leaves $50; gaining 50% of $50 only reaches $75. You need +100% of $50 to return to $100." },
      { q: "People also search 'precent change calculator' — is that this?", a: "Yes — 'precent' is a common misspelling of 'percent', and search engines route it to the same percent change tool." },
    ],
  },

  "percent-decrease-calculator": {
    description: `A $1,200 laptop marked down to $900 did not get '$300 cheaper' in the language of deals — it got 25% cheaper, and that percentage is what your brain actually compares across price tags. Percent decrease is (old − new) ÷ old × 100: subtract the new price from the old, divide by the old price, and multiply by 100. The same $300 cut on a $600 tablet would be a 50% decrease, which is why percentages, not dollars, tell you which sale is genuinely better.\n\nRetailers, dieters, and budget managers live by this number. A 15%-off coupon, a weight-loss goal, a department told to trim spending 10% — all percent decreases. Note the direction matters: going from 900 back up to 1,200 is a 33.3% increase, not 25%, because the anchor moved. This calculator does the core division. Type the dollar (or pound, or point) drop in the Variable A box — 300 for the laptop — and type 1 ÷ old in the Variable B box (1 ÷ 1200 ≈ 0.000833), and the Result box shows 0.25. Multiply by 100 to read the 25% decrease.`,
    howToSteps: [
      "Subtract the new value from the old value — for $1,200 down to $900, the drop is 300.",
      "Type that drop in the Variable A box — enter 300.",
      "Compute 1 ÷ old — 1 ÷ 1200 ≈ 0.000833 — and type it in the Variable B box.",
      "Read the Result box: 300 × 0.000833 = 0.25.",
      "Multiply by 100 for the percent: a 25% decrease.",
      "Compare two sales by running each through the same steps — the bigger percent, not the bigger dollar cut, is the better deal.",
    ],
    faqs: [
      { q: "What is the percent decrease formula in plain words?", a: "Subtract the new value from the old value, divide by the old value, and multiply by 100. In symbols: ((old − new) ÷ old) × 100." },
      { q: "When would I use percent decrease?", a: "Reading sale tags, tracking weight loss, measuring budget cuts, comparing last year's expenses to this year's, or checking a stock's pullback." },
      { q: "Is percent decrease just negative percent change?", a: "Essentially, yes. Percent decrease reports the drop as a positive number ('25% off'), while percent change would report the same move as −25%." },
      { q: "What is the most common percent decrease mistake?", a: "Comparing dollar amounts instead of percentages across different starting prices. $300 off $1,200 beats $300 off $2,000 — the percent reveals it." },
      { q: "People also search 'percent off calculator' — is that this?", a: "Exactly. 'Percent off' is the retail name for percent decrease: original price minus sale price, divided by the original price." },
    ],
  },

  "percent-difference-calculator": {
    description: `Two contractors bid $4,800 and $5,200 on your deck — how far apart are they, really? Percent difference answers without picking sides: take the absolute gap, divide by the average of the two numbers, and multiply by 100. Here the gap is $400, the average is $5,000, so the bids differ by 8%. Unlike percent change, there is no 'old' and 'new' — the formula treats both numbers symmetrically, which is why scientists and engineers prefer it when comparing two measurements with no natural baseline.\n\nLab partners comparing readings, shoppers weighing two brands' prices, and analysts reconciling two data sources all reach for it. Note it differs from percent change: going from 100 to 120 is a 20% increase by percent change, but the percent difference is 2 × 20 ÷ 220 ≈ 18.2%. This calculator's fields match the workflow directly. Type the first number in the First Number box and the second in the Second Number box; the Difference box shows their raw gap (5200 − 4800 = 400). Divide that gap by the numbers' average on paper and multiply by 100 to finish.`,
    howToSteps: [
      "Type the first value in the First Number box — for example, 4800 for the lower bid.",
      "Type the second value in the Second Number box — for example, 5200 for the higher bid.",
      "Read the Difference box: 5200 − 4800 = 400, the raw gap.",
      "Average the two numbers on paper: (4800 + 5200) ÷ 2 = 5000.",
      "Divide the Difference by that average and multiply by 100: 400 ÷ 5000 × 100 = 8%.",
      "Remember the answer has no direction — it is simply '8% apart', not an increase or decrease.",
    ],
    faqs: [
      { q: "What is the percent difference formula in plain words?", a: "Divide the absolute difference of the two numbers by their average, then multiply by 100. In symbols: (|a − b| ÷ ((a + b) ÷ 2)) × 100." },
      { q: "When would I use percent difference instead of percent change?", a: "When neither number is the obvious 'before'. Comparing two bids, two lab measurements, or two brands — symmetric situations call for percent difference." },
      { q: "What is the most common percent difference mistake?", a: "Dividing by one of the numbers instead of their average. That turns it into a one-sided percent change and silently picks a favorite." },
      { q: "Can percent difference exceed 100%?", a: "Yes. Comparing 10 and 100 gives a gap of 90 over an average of 55 — about 163.6%. It maxes out at 200%, when one value is zero." },
      { q: "People also search 'percentage difference calculator' — same thing?", a: "Yes. 'Percentage difference' and 'percent difference' are the same symmetric comparison; both divide the gap by the average." },
    ],
  },

  "percent-error-calculator": {
    description: `Your bathroom scale says 172 pounds, the doctor's calibrated scale says 168 — your scale is off by about 2.4%, and that number has a formal name: percent error. It measures how far a measurement strays from the accepted true value: take the absolute difference between measured and true, divide by the true value, and multiply by 100. Here |172 − 168| ÷ 168 × 100 ≈ 2.38%. Dropping the absolute value gives signed error, which also tells you the direction — positive means you overshot.\n\nChemistry students compare yields, archers score groupings, and pollsters grade their forecasts with it. A result under 5% is usually respectable in school labs; under 1% is genuinely good. Be careful with tiny true values, though: measuring 0.3 grams against a true 0.2 grams is a 50% error even though you missed by a tenth of a gram — percent error explodes near zero. To compute it here, find the absolute gap on paper, enter it in the first input box, enter 1 ÷ true value in the second input box, and multiply the displayed decimal by 100. For the scale: 4 in the first box, 1 ÷ 168 ≈ 0.00595 in the second, giving 0.0238 — a 2.38% error.`,
    howToSteps: [
      "Subtract the true value from your measured value and take the absolute value — for 172 vs 168, the gap is 4.",
      "Enter that gap in the first input box — type 4.",
      "Compute 1 ÷ true value on paper — 1 ÷ 168 ≈ 0.00595 — and enter it in the second input box.",
      "Note the displayed decimal result — here about 0.0238.",
      "Multiply by 100 to state the percent error: roughly 2.38%.",
      "Decide whether the size is acceptable: under 5% passes most classroom labs, while manufacturing tolerances often demand under 1%.",
    ],
    faqs: [
      { q: "What is the percent error formula in plain words?", a: "Take the absolute difference between your measurement and the true value, divide by the true value, and multiply by 100. In symbols: (|measured − true| ÷ true) × 100." },
      { q: "When would I calculate percent error?", a: "Grading lab results, checking a scale or thermometer against a reference, scoring prediction accuracy, or judging how close an estimate landed." },
      { q: "What is the difference between percent error and percent difference?", a: "Percent error anchors to the true value — one side is 'correct'. Percent difference averages the two numbers because neither is privileged." },
      { q: "What is the most common percent error mistake?", a: "Dividing by the measured value instead of the true value. The denominator must be the accepted, correct quantity." },
      { q: "People also search 'percentage error calculator' — same thing?", a: "Yes. 'Percentage error' and 'percent error' describe the identical calculation against a known true value." },
    ],
  },

  "percent-increase-calculator": {
    description: `A $65,000 salary bumped to $71,500 is not just '$6,500 more' — it is a 10% raise, and percentages are the language raises, rents, and stock gains are negotiated in. Percent increase is (new − old) ÷ old × 100: subtract the starting number from the ending number, divide by the starting number, and multiply by 100. Because the starting number is the anchor, going from $71,500 back down to $65,000 would be only a 9.1% decrease — increases and decreases between the same two numbers are never mirror images.\n\nLandlords announcing rent hikes, mutual funds reporting annual returns, and cities reporting population booms all quote this figure. The sneaky version is 'increase by 200%', which means tripling, not doubling — the original 100% plus 200% more. Run it through this calculator in two moves: type the raw gain (new − old) in the Variable A box — 6500 for the raise — and type 1 ÷ old in the Variable B box (1 ÷ 65000 ≈ 0.00001538). The Result box shows 0.10, and multiplying by 100 gives the 10% increase.`,
    howToSteps: [
      "Work out the raw gain by subtracting old from new — 71500 − 65000 = 6500.",
      "Key that gain into the Variable A box — enter 6500.",
      "Figure 1 ÷ old on paper — 1 ÷ 65000 ≈ 0.00001538 — and key it into the Variable B box.",
      "Look at the Result box: 6500 × 0.00001538 ≈ 0.10.",
      "Shift the decimal two places right to read the percent: a 10% increase.",
      "Flip it to check decreases too: swapping which number is 'old' converts the same steps into a percent decrease.",
    ],
    faqs: [
      { q: "What is the percent increase formula in plain words?", a: "Subtract the old value from the new value, divide by the old value, and multiply by 100. In symbols: ((new − old) ÷ old) × 100." },
      { q: "When would I use percent increase?", a: "Evaluating a raise, comparing rent year over year, reading investment returns, or measuring business growth between quarters." },
      { q: "What does a 200% increase actually mean?", a: "Tripling. A 100% increase doubles the original; a 200% increase adds twice the original on top, landing at three times the start." },
      { q: "What is the most common percent increase mistake?", a: "Anchoring to the new value instead of the old. The base is always where you started — the 'before' number." },
      { q: "People also search 'percentage increase calculator' — same thing?", a: "Yes. 'Percentage increase' is the slightly more formal twin of 'percent increase'; the formula is identical." },
    ],
  },

  "percent-of-a-number-calculator": {
    description: `The restaurant bill is $84 and you want to leave 20% — your head does 10% ($8.40) doubled to $16.80, and you have just computed a percent of a number. The recipe never changes: convert the percent to a decimal by moving the point two places left, then multiply by the number. In symbols, (p ÷ 100) × n. That same move prices a 15%-off jacket, computes 6% sales tax on a $45 dinner, and figures the 8.5% 401(k) contribution on a $4,000 paycheck ($340 per pay period).\n\nBecause the formula is genuinely a multiplication, this calculator performs it directly. Type the decimal form of the percent in the Variable A box — for 20%, that is 0.20 — and type the number in the Variable B box — 84 for the bill. The Result box shows 16.80, your tip. Sliding between related questions is easy: keep 0.20 in A and change B to compare tips on different bills, or keep B fixed and change A to compare tip percentages. One caution — 'percent of' compounds quietly: 20% off followed by another 20% off is 36% off total, not 40%, because the second cut applies to the smaller price.`,
    howToSteps: [
      "Turn your percent into a decimal by moving the decimal point two places left — 20% becomes 0.20.",
      "Enter that decimal in the Variable A box — type 0.20.",
      "Enter the number you are taking the percent of in the Variable B box — type 84 for an $84 bill.",
      "Check the Result box: 0.20 × 84 = 16.80, the tip amount.",
      "Add it to the original for the total out of pocket: $84 + $16.80 = $100.80.",
      "For discounts, subtract instead: a 15%-off $60 jacket costs $60 − $9 = $51.",
    ],
    faqs: [
      { q: "What is the 'percent of a number' formula in plain words?", a: "Divide the percent by 100 to make a decimal, then multiply by the number. For 20% of 84: 0.20 × 84 = 16.80." },
      { q: "When would I compute a percent of a number?", a: "Tipping at restaurants, applying sales tax, taking a store discount, computing paycheck deductions, or finding a commission on a sale." },
      { q: "What is the fastest mental shortcut?", a: "Find 10% by moving the decimal one place left, then build from there: 20% is double 10%, 15% is 10% plus half of 10%, 5% is half of 10%." },
      { q: "What is the most common mistake with percents of numbers?", a: "Stacking percentages by adding them. Two successive 20% discounts equal 36% off, not 40% — each applies to a shrinking base." },
      { q: "People also search 'what is 20 percent of 84' — is that this?", a: "Exactly. 'What is X percent of Y' questions are all percent-of-a-number problems: (X ÷ 100) × Y." },
    ],
  },

  "percent-to-decimal": {
    description: `Every percent is a fraction in disguise: 45% literally means 45 per hundred, or 45 ÷ 100. Converting a percent to a decimal just performs that division, which amounts to sliding the decimal point two places to the left — 45% becomes 0.45, 7% becomes 0.07, and 125% becomes 1.25. The move feels trivial until you skip it: multiplying $200 by 15 instead of 0.15 claims a $3,000 tip instead of $30, an error that has embarrassed many spreadsheet novices.\n\nYou need the decimal form before any calculator or formula will behave. Interest rates, tax rates, probabilities, and statistical margins all enter math as decimals: a 4.5% mortgage rate becomes 0.045 in the payment formula, and a 6% sales tax becomes 0.06. Going the other way is the mirror move — slide the point two places right and add the percent sign, so 0.45 becomes 45%. To convert with this tool, type the percent value in the first input box — for example, 45 — and type 0.01 in the second input box, since dividing by 100 is the same as multiplying by 0.01. The display shows 0.45.`,
    howToSteps: [
      "Take the number before the percent sign — for 45%, that is 45.",
      "Enter it in the first input box — type 45.",
      "Enter 0.01 in the second input box, because dividing by 100 equals multiplying by 0.01.",
      "Read the displayed result: 45 × 0.01 = 0.45.",
      "Use 0.45 directly in any formula — interest, tax, or tip math all expect the decimal form.",
      "To reverse the conversion, multiply a decimal by 100 and reattach the % sign.",
    ],
    faqs: [
      { q: "How do I convert a percent to a decimal in plain words?", a: "Divide by 100, which means moving the decimal point two places left. 45% → 0.45, 7% → 0.07, 125% → 1.25." },
      { q: "When would I need percent-to-decimal conversion?", a: "Before using any rate in a formula: mortgage math, sales tax, tip calculations, probability, or compound interest all require the decimal form." },
      { q: "What is the most common conversion mistake?", a: "Forgetting to convert and multiplying by the whole percent number — 15 instead of 0.15 — which inflates the answer a hundredfold." },
      { q: "How do I convert a decimal back to a percent?", a: "Multiply by 100 and add the percent sign: 0.45 × 100 = 45%. It is the exact reverse move." },
      { q: "People also search '45 percent as a decimal' — is that this?", a: "Yes. Any 'X percent as a decimal' question is this conversion: slide the point two places left to get 0.45." },
    ],
  },

  "percent-to-fraction-calculator": {
    description: `A 75% free-throw shooter sinks three of every four shots — the percent and the fraction 3/4 are the same fact wearing different clothes. Converting a percent to a fraction runs in two moves: write the percent over 100, then reduce by dividing top and bottom by their greatest common divisor. So 75% becomes 75/100, and dividing both by 25 gives 3/4. The fraction form often reveals structure the percent hides: 12.5% is 1/8, 66⅔% is 2/3, and 37.5% is 3/8 — numbers that recur in construction, cooking, and carpentry.\n\nRecipes scale more gracefully as fractions, carpenters think in fractions of an inch, and probability feels more intuitive as '3 in 4' than '75%'. This calculator's fields walk the conversion: type the percent in the Percentage (%) box — say 75 — and the Numerator box computes 75 ÷ gcd(75, 100) = 3 while the Denominator box computes 100 ÷ gcd(75, 100) = 4. Read the two boxes together as 3/4. For a repeating decimal like 33.33%, round sensibly first — 33.33/100 reduces near 1/3 but is not exact.`,
    howToSteps: [
      "Type your percent value in the Percentage (%) box — for example, 75.",
      "Look at the Numerator box: it shows the percent divided by the greatest common divisor — 75 ÷ 25 = 3.",
      "Look at the Denominator box: it shows 100 divided by the same divisor — 100 ÷ 25 = 4.",
      "Read the pair as a fraction: 3/4.",
      "Double-check by dividing: 3 ÷ 4 = 0.75, which is 75% — the round trip confirms the reduction.",
      "For percents with decimals like 37.5%, multiply top and bottom by 10 first (375/1000), then reduce to 3/8.",
    ],
    faqs: [
      { q: "How do I convert a percent to a fraction in plain words?", a: "Put the percent over 100, then divide top and bottom by their greatest common divisor. 75% → 75/100 → 3/4." },
      { q: "When would I want the fraction instead of the percent?", a: "Scaling recipes, reading tape measures, expressing odds and probabilities, or any shop math where fractions are the native language." },
      { q: "What is the most common conversion mistake?", a: "Stopping at 75/100 without reducing. An unreduced fraction is technically correct but misses the simpler 3/4 everyone expects." },
      { q: "How do I convert a repeating percent like 66.6%?", a: "Recognize the pattern: 66⅔% is exactly 2/3. For 66.6%, the fraction 333/500 is the literal reduction, but 2/3 is the intended value." },
      { q: "People also search '75 percent as a fraction' — is that this?", a: "Exactly. 'X percent as a fraction' is this two-step: over 100, then reduce to lowest terms." },
    ],
  },

  "percentage-change-calculator": {
    description: `The town's population went from 12,000 to 13,800 — a gain of 1,800 people, and a percentage change of +15%. Percentage change packages two facts into one: the absolute change (new minus old, here 1,800) and the relative change (that difference divided by the old value, times 100). Reporting both matters, because 'up 1,800' and 'up 15%' tell different stories to a mayor, an investor, or a coach — one is scale, the other is momentum.\n\nEconomists track GDP this way, epidemiologists track case counts, and fantasy sports managers track player scoring. The sign carries the direction: negative means decline, positive means growth. This calculator lays out all four numbers at once. Type the starting value in the Original Value box (12000) and the ending value in the New Value box (13800); the Absolute Change box shows 1800, and the Percentage Change box shows 15. One caveat: if the original value is zero or negative — a startup going from –$5,000 to $10,000 — the percentage becomes misleading or undefined, so report the absolute change alone in those cases.`,
    howToSteps: [
      "Enter the starting number in the Original Value box — for example, 12000.",
      "Enter the ending number in the New Value box — for example, 13800.",
      "Read the Absolute Change box: 13800 − 12000 = 1800.",
      "Read the Percentage Change box: 1800 ÷ 12000 × 100 = 15%.",
      "Quote both figures together — 'up 1,800 (15%)' — since each answers a different question.",
      "If the original value is zero, ignore the percentage and report only the absolute change.",
    ],
    faqs: [
      { q: "What is the percentage change formula in plain words?", a: "Subtract old from new for the absolute change, then divide that by the old value and multiply by 100. In symbols: ((new − old) ÷ old) × 100." },
      { q: "When would I report both absolute and percentage change?", a: "Whenever scale and momentum both matter: city populations, company revenue, infection counts, or website traffic — the pair prevents small-base exaggeration." },
      { q: "What is the most common percentage change mistake?", a: "Trumpeting a huge percent off a tiny base. Growing from 2 to 10 customers is +400% but only +8 customers — always pair it with the absolute change." },
      { q: "Can the original value be zero?", a: "Not usefully. Dividing by zero is undefined, so a launch 'from 0 to 500 users' has no meaningful percent change — report the 500 alone." },
      { q: "People also search 'percent change calc' — is that this?", a: "Yes. 'Percent change calc' is shorthand for the same tool: old value, new value, and the percent between them." },
    ],
  },

  "perimeter-calculator": {
    description: `Before you buy a single board for a fence, you need one number: the perimeter, the total distance around the outside of a shape. For any polygon it is beautifully simple — add up every side. A rectangular backyard 40 feet by 25 feet needs 40 + 25 + 40 + 25 = 130 feet of fencing, plus a little extra for the gate and the posts. Circles play by a special name for the same idea: circumference, which is π times the diameter, or about 3.1416 × d.\n\nFence contractors, picture framers, landscapers edging a bed, and runners measuring a track all compute perimeters. The units stay linear — feet, meters, inches — which distinguishes perimeter from area (square units) and volume (cubic units), the two concepts beginners mix it up with most. Regular polygons shortcut the addition: a square's perimeter is 4 × side, an equilateral triangle's is 3 × side, a regular hexagon's 6 × side. With this tool, enter the repeated side length in the first input box and the side count in the second input box — a 25-foot square fence line means 25 and 4 — and the display shows 100 feet per side set; add the remaining distinct sides on paper for irregular shapes.`,
    howToSteps: [
      "List every side length of your shape — for a rectangle, the two distinct sides.",
      "For a regular polygon, enter the side length in the first input box — for example, 25.",
      "Enter the number of sides in the second input box — 4 for a square.",
      "Read the displayed result: 25 × 4 = 100 feet.",
      "For irregular shapes, run each distinct side through the tool and add the results on paper.",
      "Add 5–10% extra when ordering materials, to cover cuts, corners, and mistakes.",
    ],
    faqs: [
      { q: "What is the perimeter formula in plain words?", a: "Add up the lengths of all the sides. For regular polygons, multiply one side by the number of sides; for a circle, use π × diameter." },
      { q: "When would I calculate a perimeter?", a: "Buying fencing, framing pictures, edging garden beds, measuring running tracks, or estimating trim and molding for a room." },
      { q: "What is the difference between perimeter and area?", a: "Perimeter is the distance around (linear units like feet); area is the surface covered (square units like square feet). A fence needs perimeter; sod needs area." },
      { q: "What is the most common perimeter mistake?", a: "Mixing units — adding feet to inches without converting — or forgetting a side on an irregular shape. Walk the boundary mentally and count sides." },
      { q: "People also search 'perimiter calculator' — is that this?", a: "Yes — 'perimiter' is a common misspelling of 'perimeter', and it means the same distance-around calculation." },
    ],
  },

  "permutations-calculator": {
    description: `Three friends, one podium photo — how many ways can they line up? Six: ABC, ACB, BAC, BCA, CAB, CBA. That counting question is a permutation: the number of ways to arrange r items chosen from n, where order matters. The formula is n! ÷ (n − r)!, the factorial of n divided by the factorial of what is left over. For a 10-person race awarding gold, silver, and bronze, that is 10! ÷ 7! = 10 × 9 × 8 = 720 possible podiums.\n\nPermutations run passwords, lottery odds, and tournament brackets. A 4-digit PIN with no repeated digits has 10P4 = 5,040 possibilities — but allow repeats and order still matters, giving 10⁴ = 10,000, a different counting rule entirely. The key distinction from combinations is order: ABC and CBA are two permutations but one combination. This calculator takes the direct route. Type the total pool in the Total Items (n) box — 10 for the race — and the positions to fill in the Arranged Items (r) box — 3 for the medals. The Permutations P(n, r) box shows 720. Just keep r ≤ n; asking for 12 medals from 10 runners is meaningless.`,
    howToSteps: [
      "Count your total pool and type it in the Total Items (n) box — for example, 10 runners.",
      "Count the positions to fill and type it in the Arranged Items (r) box — for example, 3 medals.",
      "Read the Permutations P(n, r) box: 720 possible podiums.",
      "Confirm order matters before trusting the answer — if ABC equals CBA for your problem, you want combinations, not permutations.",
      "For 'arrange all n items', set r equal to n and the answer is simply n! — lining up all 10 runners gives 3,628,800 orders.",
      "Watch for repeats: items that repeat (like letters in 'BOOK') need the formula divided by the repeat factorials.",
    ],
    faqs: [
      { q: "What is the permutations formula in plain words?", a: "Multiply n × (n−1) × … down to (n−r+1). In factorial form: P(n,r) = n! ÷ (n−r)!. For 10 racers and 3 medals: 10 × 9 × 8 = 720." },
      { q: "When would I use permutations?", a: "Ranking contests, counting PINs and passwords without repeats, arranging seating, scheduling match orders — anywhere order changes the outcome." },
      { q: "What is the difference between permutations and combinations?", a: "Order. Permutations count ABC and CBA as different; combinations count them as one. Use permutations for podiums and passwords, combinations for committees and card hands." },
      { q: "What is the most common permutations mistake?", a: "Using P(n,r) when repeats are allowed. A 4-digit PIN allowing repeats is 10⁴ = 10,000, not 10P4 = 5,040." },
      { q: "People also search 'npr calculator' — is that this?", a: "Yes. 'nPr' is the standard notation for permutations of r from n, so an 'nPr calculator' computes exactly this." },
    ],
  },

  "perpendicular-lines-calculator": {
    description: `A wheelchair ramp meets the sidewalk, a bookshelf meets the floor, a cross street meets the avenue — perpendicular means meeting at a perfect 90° angle, and in coordinate geometry that relationship lives in the slopes. Two lines are perpendicular exactly when their slopes are negative reciprocals: flip the fraction and change the sign. A line climbing with slope 2 is perpendicular to a line falling with slope −1/2, and their product is always −1. Horizontal and vertical lines are the special pair: slope 0 meets the undefined slope of a vertical line.\n\nCarpenters check squareness with the 3-4-5 triangle, but drafters, roofers, and game developers check it with slopes. A roof valley, a perpendicular parking stripe, or a surface normal in 3D graphics all reduce to this flip-and-negate move. This calculator performs the final step: type the known slope in the Variable A box — say 2 — and type −1 in the Variable B box, since the perpendicular slope is −1 ÷ m. The Result box shows −0.5, the slope of every line perpendicular to the original. Verify on graph paper: the two lines should cross forming four right angles.`,
    howToSteps: [
      "Find the slope m of your original line — for example, 2.",
      "Type that slope in the Variable A box — enter 2.",
      "Type −1 in the Variable B box, because the perpendicular slope equals −1 ÷ m.",
      "Read the Result box: 2 × −0.5... precisely, −1 ÷ 2 = −0.5, the perpendicular slope.",
      "Sketch both lines to confirm they cross at right angles — rise 2, run 1 on one; fall 1, run 2 on the other.",
      "Remember the edge cases: a horizontal line (slope 0) is perpendicular to a vertical line (undefined slope), which this division cannot produce.",
    ],
    faqs: [
      { q: "How do I find a perpendicular slope in plain words?", a: "Flip the original slope's fraction and change its sign. Slope 2 becomes −1/2; slope −3/4 becomes 4/3. The two slopes always multiply to −1." },
      { q: "When would I need perpendicular lines?", a: "Squaring a foundation, drawing perpendicular parking stalls, finding a surface normal in graphics, or constructing a perpendicular bisector in geometry." },
      { q: "What is the most common perpendicular-lines mistake?", a: "Forgetting to change the sign. The negative reciprocal of 2 is −1/2, not +1/2 — the sign flip is what creates the 90° angle." },
      { q: "Are horizontal and vertical lines perpendicular?", a: "Yes. A horizontal line has slope 0 and a vertical line has undefined slope; they meet at 90°. The flip-and-negate rule does not cover this pair, so handle it separately." },
      { q: "People also search 'perpendicular slope calculator' — is that this?", a: "Yes. 'Perpendicular slope' is the number this tool computes: the slope of any line at right angles to yours." },
    ],
  },

  "phase-shift-calculator": {
    description: `Two identical ocean waves can add into a monster or cancel into flat calm, and the difference is phase — where each wave is in its cycle when they meet. For a sine wave written A·sin(Bx + C), the phase shift is −C ÷ B: it tells you how far the whole wave slides left or right compared with plain sin(x). A phase shift of π/2 turns a sine wave into a cosine wave, which is why electricians say current 'leads' or 'lags' voltage by 90° in capacitors and inductors.\n\nSound engineers chase phase when miking a drum kit — two mics half a wavelength apart record the same hit out of phase and hollow out the sound. AC power analysis, signal processing, and even the timing of traffic lights lean on phase arithmetic. This calculator isolates the division at the heart of it: type the negative of C in the Variable A box and 1 ÷ B in the Variable B box. For y = sin(2x + π), enter −3.1416 in A and 0.5 in B; the Result box shows −1.5708, so the wave shifts left by π/2. Positive results shift right, negative shift left — but check your textbook's sign convention, since some define it as C ÷ B instead.`,
    howToSteps: [
      "Write your wave in the form A·sin(Bx + C) and identify B and C — for sin(2x + π), B = 2 and C = π.",
      "Type the negative of C in the Variable A box — enter −3.1416.",
      "Compute 1 ÷ B on paper — 1 ÷ 2 = 0.5 — and type it in the Variable B box.",
      "Read the Result box: −3.1416 × 0.5 ≈ −1.5708.",
      "Interpret the sign: negative means the wave shifts left by 1.5708 (π/2) units; positive would shift right.",
      "Confirm your convention: some sources define phase shift as +C/B, which flips the sign — match the one your class uses.",
    ],
    faqs: [
      { q: "What is phase shift in plain words?", a: "How far a wave slides horizontally from its standard position. For A·sin(Bx + C), the shift is −C ÷ B: negative slides left, positive slides right." },
      { q: "When would I compute a phase shift?", a: "Aligning audio signals, analyzing AC circuits where current leads or lags voltage, studying wave interference, or graphing trigonometric functions." },
      { q: "What is the most common phase shift mistake?", a: "Forgetting to divide by B. In sin(2x + π), the shift is π/2, not π — the B inside the function compresses the whole wave, shift included." },
      { q: "What does a 180° phase shift do?", a: "It inverts the wave completely — peaks become troughs. Two identical waves 180° apart cancel each other into silence, the principle behind noise-canceling headphones." },
      { q: "People also search 'phase shift formula' — is that this?", a: "Yes. The phase shift formula −C/B for A·sin(Bx + C) is exactly what this tool evaluates." },
    ],
  },

  "phase-calculator": {
    description: `Plug a motor into the wall and its current does not quite keep step with the voltage — it lags behind by an angle, and that angle is the phase. In AC circuits, phase angle φ measures how far the current waveform trails or leads the voltage waveform, computed as the arctangent of reactance divided by resistance: φ = arctan(X/R). A purely resistive heater has 0° of phase (current and voltage march together), a pure inductor pushes toward +90°, and a pure capacitor toward −90°.\n\nUtilities care because phase determines real power: a factory with a large phase angle draws current that does no useful work, and power companies bill penalties for it — hence 'power factor correction' capacitor banks on industrial rooftops. Audio engineers meet the same angle when aligning subwoofers, and navigators when comparing signal phases. This calculator performs the ratio step: type the reactance X in ohms in the Variable A box — say 30 for a motor winding — and type 1 ÷ R in the Variable B box (1 ÷ 40 = 0.025 for 40 ohms of resistance). The Result box shows 0.75, the X/R ratio; take its arctangent on paper (about 36.9°) to get the phase angle. Positive means current lags voltage (inductive); negative means it leads (capacitive).`,
    howToSteps: [
      "Find your circuit's reactance X and resistance R in ohms — for example, X = 30 and R = 40.",
      "Type the reactance in the Variable A box — enter 30.",
      "Compute 1 ÷ R — 1 ÷ 40 = 0.025 — and type it in the Variable B box.",
      "Read the Result box: 30 × 0.025 = 0.75, the ratio X/R.",
      "Take the arctangent of 0.75 to get the phase angle: about 36.9°.",
      "Read the sign: positive X (inductive) means current lags voltage; negative X (capacitive) means current leads.",
    ],
    faqs: [
      { q: "What is phase angle in plain words?", a: "The angular gap between the voltage wave and the current wave in an AC circuit. Compute it as arctan(reactance ÷ resistance): 0° means perfectly in step, ±90° means a quarter-cycle apart." },
      { q: "When would I calculate phase?", a: "Sizing power-factor correction, analyzing motors and transformers, aligning audio drivers, or any AC circuit homework involving impedance." },
      { q: "What is the difference between phase and phase shift?", a: "Phase is a property of one wave at an instant (its angle in the cycle); phase shift is how far one wave is displaced relative to another. Related, but one is a position and the other is a displacement." },
      { q: "What is the most common phase angle mistake?", a: "Mixing up lead and lag. Inductive circuits make current lag (positive angle); capacitive circuits make current lead (negative angle) — memorize 'ELI the ICE man'." },
      { q: "People also search 'phase angle calculator' — is that this?", a: "Yes. 'Phase angle' is the formal name for the phase between voltage and current: arctan(X/R)." },
    ],
  },

  "piecewise-function-calculator": {
    description: `Your electric bill does not charge one flat rate — the first 500 kilowatt-hours cost one price, the next 500 cost another, and so on. That is a piecewise function: a rule stitched together from different formulas, each governing its own interval of x. Tax brackets work the same way (10% on the first slice of income, 12% on the next), as do shipping rates, parking garages ('$5 for the first hour, $2 each additional'), and the absolute value function, which is secretly two pieces: −x below zero, x above.\n\nEvaluating one is a two-step ritual: first ask which interval your x falls in, then use that interval's formula and ignore the rest. For f(x) = x² when x < 2 and f(x) = 3x when x ≥ 2, evaluating at x = 5 means choosing the second piece: 3 × 5 = 15. Graphing them reveals the drama — jumps, corners, and holes appear exactly at the boundary points. This calculator handles the arithmetic of a chosen piece: once you have picked the right interval, type the formula's variable part in the Variable A box and its constant factor in the Variable B box. For the 3x piece at x = 5, enter 5 in A and 3 in B; the Result box shows 15, the function's value there.`,
    howToSteps: [
      "Write down the pieces and their intervals — for example, x² when x < 2, 3x when x ≥ 2.",
      "Pick your x-value and find which interval contains it — 5 falls in x ≥ 2, so use the 3x piece.",
      "Type the x-value in the Variable A box — enter 5.",
      "Type the piece's constant multiplier in the Variable B box — enter 3.",
      "Read the Result box: 5 × 3 = 15, so f(5) = 15.",
      "At boundary points, check the inequality symbols: ≥ includes the endpoint, > excludes it — that one character decides the answer.",
    ],
    faqs: [
      { q: "What is a piecewise function in plain words?", a: "One function made of several formulas, each active on its own interval. You pick the formula whose interval contains your x, then evaluate it like normal." },
      { q: "When would I meet piecewise functions?", a: "Tax brackets, tiered utility rates, shipping price tables, parking fees, and the absolute value function — anywhere the rule changes at thresholds." },
      { q: "What is the most common piecewise mistake?", a: "Using the wrong piece — evaluating x² at x = 5 when the x² piece only covers x < 2. Always check the interval first, compute second." },
      { q: "Can piecewise functions have jumps?", a: "Yes, at the boundary points. If the left piece gives 4 and the right piece gives 15 at x = 2, the graph jumps — the function is discontinuous there." },
      { q: "People also search 'piecewise functions calculator' — is that this?", a: "Yes. The plural 'piecewise functions' refers to the same concept: evaluating functions defined by multiple interval-based rules." },
    ],
  },

  "place-value": {
    description: `The digit 5 means five in 52, fifty in 523, and five thousand in 5,230 — same symbol, wildly different worth, and the difference is place value. Every position in a number is worth ten times the position to its right: ones, tens, hundreds, thousands, marching left, with tenths, hundredths, and thousandths marching right past the decimal point. In 4,726, the 7 sits in the hundreds place, so it contributes 700; in 0.483, the 8 sits in the hundredths place, worth 0.08.\n\nPlace value is the operating system of arithmetic. It explains why we line up decimal points when adding, why multiplying by 100 appends two zeros, and why 0.5 and 0.50 are the same number wearing different name tags. Bankers reconciling cents, scientists writing 6.02 × 10²³, and second-graders trading ten ones for a ten-block all run on it. To explore a number with this tool, type the digit in the first input box and the place's multiplier in the second — for the 7 in 4,726, enter 7 and 100. The display shows 700, the digit's true value in that number. Repeat for each digit to see the number as a sum of its parts: 4000 + 700 + 20 + 6.`,
    howToSteps: [
      "Pick a digit in your number and name its place — in 4,726, the 7 is in the hundreds place.",
      "Enter the digit itself in the first input box — type 7.",
      "Enter the place's multiplier in the second input box — type 100 for the hundreds place.",
      "Read the displayed result: 7 × 100 = 700, the digit's actual value.",
      "Repeat for every digit and add the results: 4000 + 700 + 20 + 6 rebuilds 4,726.",
      "For decimals, use fractional multipliers: the 8 in 0.483 sits in the hundredths place, so pair 8 with 0.01 to get 0.08.",
    ],
    faqs: [
      { q: "What is place value in plain words?", a: "The worth of a digit based on its position. Each step left multiplies by 10; each step right past the decimal divides by 10. The 7 in 4,726 is worth 700." },
      { q: "When would I think about place value?", a: "Lining up decimals for addition, converting units, reading large numbers aloud, rounding, or understanding scientific notation." },
      { q: "What is the most common place value mistake?", a: "Misaligning decimal points when adding — 4.7 + 0.38 is 5.08, not 4.45. The decimal points must stack so like places combine." },
      { q: "Why does multiplying by 100 add two zeros?", a: "Because every digit shifts two places left, each worth ten times more. 53 × 100 moves the 5 from tens to ten-thousands: 5,300." },
      { q: "People also search 'place value chart' — is that related?", a: "Yes. A place value chart is the visual version of this idea: columns labeled ones, tens, hundreds (and tenths, hundredths) showing each digit's slot." },
    ],
  },

  "population-growth-calculator": {
    description: `Austin, Texas added roughly 170 newcomers a day during its 2010s boom — and growth like that compounds, because each year's newcomers have children and attract more newcomers. The classic model is exponential: P = P₀ × e^(rt), where P₀ is the starting population, r is the annual growth rate as a decimal, t is years, and e is Euler's number (~2.71828). At 2% annual growth, a town of 50,000 reaches about 61,000 in a decade — and the Rule of 70 says any population growing at r percent doubles in roughly 70 ÷ r years, so 2% growth doubles in about 35 years.\n\nCity planners size schools and sewers from these curves, epidemiologists model outbreaks, and ecologists track invasive species — though all of them know exponential growth eventually hits limits (food, space, immunity), which is where the S-shaped logistic model takes over. This calculator evaluates the growth factor e^(rt): compute e^(rt) on paper — for r = 0.02 and t = 10, e^0.2 ≈ 1.2214 — type your starting population in the Variable A box (50000), and type the growth factor in the Variable B box (1.2214). The Result box shows about 61,070, the projected population. Compare scenarios by changing B: r = 3% for 10 years gives e^0.3 ≈ 1.3499 and a town of 67,495.`,
    howToSteps: [
      "Write down your starting population P₀ — for example, 50000.",
      "Compute the growth factor e^(rt) with r as a decimal — for 2% over 10 years, e^(0.02×10) ≈ 1.2214.",
      "Type the starting population in the Variable A box — enter 50000.",
      "Type the growth factor in the Variable B box — enter 1.2214.",
      "Read the Result box: 50000 × 1.2214 ≈ 61070 people after 10 years.",
      "Test a faster scenario by recomputing B: 3% growth gives e^0.3 ≈ 1.3499, projecting 67,495.",
    ],
    faqs: [
      { q: "What is the population growth formula in plain words?", a: "Multiply the starting population by e raised to (rate × time): P = P₀·e^(rt). The e^(rt) factor is the compound multiplier for r as a decimal and t in years." },
      { q: "When would I model population growth?", a: "Planning school capacity, sizing water systems, projecting city budgets, modeling disease spread, or estimating wildlife and invasive-species populations." },
      { q: "What is the Rule of 70?", a: "Divide 70 by the annual percent growth rate to estimate doubling time. At 2% growth, 70 ÷ 2 = 35 years to double." },
      { q: "What is the most common population growth mistake?", a: "Using the percent (2) instead of the decimal (0.02) for r. That turns e^20 into an astronomically wrong multiplier — always convert the percent first." },
      { q: "People also search 'exponential growth calculator' — is that this?", a: "Largely, yes. Population growth is the flagship application of the exponential growth model P = P₀·e^(rt)." },
    ],
  },

  "poundal-converter": {
    description: `The poundal is the metric-minded cousin hiding in the imperial family: one poundal is the force that accelerates one pound of mass at one foot per second squared. It is the coherent force unit of the foot-pound-second system, the way the newton is for meters and kilograms — and it converts cleanly: 1 poundal = 0.138255 newtons, or about 0.03108 pounds-force. So a 10-poundal push is roughly 1.38 newtons, a gentle nudge by everyday standards.\n\nYou will meet poundals mostly in physics textbooks and older engineering references, where problems are posed in absolute imperial units instead of the gravitational pound-force engineers actually use. The distinction matters: pounds-force already bakes in Earth's gravity, while poundals, like newtons, do not — confusing them quietly multiplies or divides your answer by 32.2. This converter speaks all three dialects. Type a value in the Poundals (pdl) box — say 10 — and the Newtons (N) box shows about 1.3826 while the Pounds-force (lbf) box shows about 0.3108. Work backward from either of the other boxes to convert into poundals.`,
    howToSteps: [
      "Type your force value in the Poundals (pdl) box — for example, 10.",
      "Read the Newtons (N) box: about 1.3826 N, since each poundal is 0.138255 newtons.",
      "Read the Pounds-force (lbf) box: about 0.3108 lbf.",
      "To convert the other direction, type into the Newtons (N) or Pounds-force (lbf) box instead and read the poundals.",
      "Keep poundals and pounds-force straight: poundals are absolute (mass × acceleration), pounds-force include Earth's gravity.",
      "For rough mental math, remember 1 poundal ≈ 0.14 N, or about one-seventh of a newton.",
    ],
    faqs: [
      { q: "What is a poundal in plain words?", a: "The force that accelerates one pound of mass at one foot per second squared. It equals 0.138255 newtons — the imperial system's answer to the newton." },
      { q: "When would I convert poundals?", a: "Working through physics textbook problems in foot-pound-second units, or reading older engineering documents that predate SI adoption." },
      { q: "What is the difference between a poundal and a pound-force?", a: "A poundal is absolute: 1 lb × 1 ft/s². A pound-force is the weight of one pound under Earth's gravity, equal to 32.174 poundals. They differ by a factor of g." },
      { q: "What is the most common poundal mistake?", a: "Using poundals where the formula expects pounds-force, or vice versa — a silent factor-of-32 error that ruins dynamics homework." },
      { q: "People also search 'pdl to n' — is that this?", a: "Yes. 'pdl' is the standard abbreviation for poundal, so 'pdl to n' means converting poundals to newtons at 0.138255 each." },
    ],
  },

  "present-value-calculator": {
    description: `Would you rather have $10,000 today or $12,000 in five years? If you can earn 5% annually, today's $10,000 grows to about $12,763 — so take the cash now. That comparison is present value: the current worth of a future sum, discounted at a rate reflecting what your money could otherwise earn. The formula is PV = FV ÷ (1 + r)^n — the future value divided by the compounding factor for rate r over n periods. A lottery winner choosing between $1 million today and $50,000 a year for 30 years is really choosing between present values.\n\nInvestors price bonds this way, courts compute lump-sum settlements, and homebuyers sense it when comparing mortgage points. Higher discount rates shrink present value (future money matters less when alternatives pay well), and longer waits shrink it too. This calculator performs the final multiplication: compute the discount factor 1 ÷ (1 + r)^n on paper — for $12,000 at 5% over 5 years, 1 ÷ 1.05⁵ ≈ 0.7835 — type the future value in the Variable A box (12000), and type the discount factor in the Variable B box (0.7835). The Result box shows about $9,402: what that future $12,000 is worth in today's dollars.`,
    howToSteps: [
      "Write down the future amount FV — for example, 12000.",
      "Compute the discount factor 1 ÷ (1 + r)^n with r as a decimal — for 5% over 5 years, 1 ÷ 1.05⁵ ≈ 0.7835.",
      "Type the future value in the Variable A box — enter 12000.",
      "Type the discount factor in the Variable B box — enter 0.7835.",
      "Read the Result box: 12000 × 0.7835 ≈ 9402, the present value in dollars.",
      "Compare offers by running each future payment through the same steps — the higher present value wins.",
    ],
    faqs: [
      { q: "What is the present value formula in plain words?", a: "Divide the future amount by (1 + rate) raised to the number of periods: PV = FV ÷ (1+r)^n. It answers 'what is future money worth today?'" },
      { q: "When would I compute present value?", a: "Choosing lottery payouts, pricing bonds, evaluating settlement offers, comparing investment options, or deciding whether mortgage points are worth it." },
      { q: "Why is present value less than future value?", a: "Because of the time value of money: a dollar today can earn interest, so a future dollar is worth less. The discount rate measures that opportunity cost." },
      { q: "What is the most common present value mistake?", a: "Using the annual rate with monthly periods without dividing by 12. A 6% annual rate over 60 months needs r = 0.005 per period, not 0.06." },
      { q: "People also search 'pv calculator' — is that this?", a: "Yes. 'PV' is the standard abbreviation for present value in finance, so a 'PV calculator' discounts future sums to today." },
    ],
  },

  "prime-factor-calculator": {
    description: `Every whole number is built from primes the way every word is built from letters — 60 is 2 × 2 × 3 × 5, and no other combination of primes multiplies to 60. Finding those building blocks is prime factorization, and the workhorse method is the factor tree: split the number into any two factors, split those, and keep going until only primes remain. For 84, you might split into 12 × 7, then 12 into 4 × 3, then 4 into 2 × 2, leaving 2 × 2 × 3 × 7 — the leaves of the tree are the answer, and every path down gives the same leaves.\n\nThe payoff is practical: prime factors reveal the greatest common divisor (take the shared primes) and the least common multiple (take all primes at their highest powers), simplify fractions to lowest terms, and underpin RSA encryption securing your credit card. A quick divisibility toolkit speeds the hunt: even numbers hide a 2, digit-sums divisible by 3 hide a 3, numbers ending in 5 hide a 5. This calculator multiplies out a candidate factorization to verify it: type the product of all but one of your prime factors in the Variable A box and the last factor in the Variable B box — for 60 = 2 × 2 × 3 × 5, enter 12 and 5. The Result box shows 60, confirming the factors rebuild the original number.`,
    howToSteps: [
      "Split your number into any two factors on paper — for 84, try 12 × 7.",
      "Keep splitting composite factors until only primes remain — 12 becomes 4 × 3, 4 becomes 2 × 2.",
      "Collect the prime leaves: 84 = 2 × 2 × 3 × 7.",
      "Multiply all but one of the primes on paper — for 60's factors 2 × 2 × 3 × 5, that is 12 — and type it in the Variable A box.",
      "Type the remaining prime factor in the Variable B box — enter 5.",
      "Read the Result box: 12 × 5 = 60, verifying the factorization is complete and correct.",
    ],
    faqs: [
      { q: "What is prime factorization in plain words?", a: "Breaking a number into prime numbers that multiply back to it. 60 = 2 × 2 × 3 × 5, and the Fundamental Theorem of Arithmetic guarantees this breakdown is unique." },
      { q: "When would I find prime factors?", a: "Reducing fractions, finding greatest common divisors and least common multiples, solving number-theory homework, or understanding how RSA encryption builds its keys." },
      { q: "What is the fastest way to start factoring?", a: "Test small primes in order using divisibility tricks: even → 2, digit sum divisible by 3 → 3, ends in 5 or 0 → 5. Most classroom numbers surrender quickly." },
      { q: "What is the most common prime factoring mistake?", a: "Stopping too early — leaving a composite like 9 or 15 in the 'answer'. Every factor in the final list must itself be prime." },
      { q: "People also search 'prime factors of 60' — is that this?", a: "Yes. 'Prime factors of N' questions ask for exactly this breakdown — for 60, the answer is 2 × 2 × 3 × 5." },
    ],
  },

  "prime-factorization-calculator": {
    description: `Write 360 as 2³ × 3² × 5 and you have its prime factorization in exponent form — the compact fingerprint no other number shares. Getting there is a patient division drill: divide by the smallest prime that fits, write it down, and repeat on the quotient until you reach 1. For 360: ÷2 → 180, ÷2 → 90, ÷2 → 45, ÷3 → 15, ÷3 → 5, ÷5 → 1, giving 2 × 2 × 2 × 3 × 3 × 5, or 2³ × 3² × 5. The exponent form is more than tidiness — it makes the divisor count obvious (multiply each exponent-plus-one: 4 × 3 × 2 = 24 divisors) and the GCD/LCM recipes mechanical.\n\nCryptographers care because factoring a 600-digit semiprime would outlast the universe, which is exactly what protects RSA keys. Teachers care because it is the gateway to fraction work: 48 = 2⁴ × 3 and 180 = 2² × 3² × 5 share 2² × 3, so their GCD is 12. Use this calculator to verify a completed factorization: multiply the prime powers on paper into two groups — for 360, 2³ = 8 and 3² × 5 = 45 — type the first group in the Variable A box (8) and the second in the Variable B box (45). The Result box shows 360, confirming the exponents and primes are all correct.`,
    howToSteps: [
      "Divide your number by the smallest prime that fits, repeating on each quotient — for 360: 2, 2, 2, 3, 3, 5.",
      "Group repeated primes as exponents: 360 = 2³ × 3² × 5.",
      "Split the prime powers into two groups on paper — for example, 2³ = 8 and 3² × 5 = 45.",
      "Type the first group in the Variable A box — enter 8.",
      "Type the second group in the Variable B box — enter 45.",
      "Read the Result box: 8 × 45 = 360, confirming the factorization.",
    ],
    faqs: [
      { q: "What is prime factorization in exponent form?", a: "The number written as primes raised to powers: 360 = 2³ × 3² × 5. It is the same information as the factor list, compressed." },
      { q: "How do I count divisors from the factorization?", a: "Add 1 to each exponent and multiply: 2³ × 3² × 5 gives (3+1)(2+1)(1+1) = 24 divisors." },
      { q: "When would I write the exponent form?", a: "Finding GCDs and LCMs mechanically, counting divisors, simplifying radicals, or any number-theory work where the structure matters more than the list." },
      { q: "What is the most common prime factorization mistake?", a: "Losing count of a repeated prime — writing 2² × 3² × 5 for 360 drops a factor of 2. Tally each division as you go." },
      { q: "People also search 'prime factorization of 360' — is that this?", a: "Exactly. 'Prime factorization of N' asks for the exponent-form breakdown — for 360, that is 2³ × 3² × 5." },
    ],
  },

  "prime-number-calculator": {
    description: `A prime number has exactly two divisors — 1 and itself — which makes 2, 3, 5, 7, 11, 13 the aristocrats of arithmetic and numbers like 1 (only one divisor) and 9 (three divisors) commoners. The number 2 is the oddball: the only even prime, since every other even number is divisible by 2. Primes thin out as numbers grow but never run out — Euclid proved their infinitude around 300 BCE, and the largest known prime today has over 41 million digits, discovered through a worldwide volunteer computing search.\n\nTo test a number by hand, trial-divide by primes up to its square root: for 97, test 2, 3, 5, 7 (√97 ≈ 9.8) — none divide it, so 97 is prime. That square-root shortcut is the key insight: if n has a factor larger than √n, it must pair with one smaller than √n, so checking up to √n suffices. This tool assists the trial division: enter a candidate divisor in the first input box and the number being tested in the second — for 91, try 7 and 91. A whole-number display (13) means the divisor fits and the number is composite; a fractional display means it does not, so move to the next prime.`,
    howToSteps: [
      "Pick the number to test — for example, 91.",
      "List trial divisors: primes up to the square root — for 91, test 2, 3, 5, 7.",
      "Enter a trial divisor in the first input box — type 7.",
      "Enter the candidate number in the second input box — type 91.",
      "Read the display: 7 × 13 = 91 is exact, so 7 divides 91 and it is composite, not prime.",
      "If no prime up to the square root divides evenly, the number is prime — that is how 97 earns the title.",
    ],
    faqs: [
      { q: "What is a prime number in plain words?", a: "A whole number greater than 1 with exactly two divisors: 1 and itself. 2, 3, 5, 7, 11, and 13 are the first six." },
      { q: "Is 1 a prime number?", a: "No. Primes need exactly two divisors, and 1 has only one. It is neither prime nor composite — it is a unit." },
      { q: "How do I test if a number is prime?", a: "Trial-divide by primes up to its square root. If none divide evenly, it is prime. For 97, testing 2, 3, 5, 7 suffices." },
      { q: "Why do I only test up to the square root?", a: "Factors come in pairs straddling √n. If no factor exists at or below √n, none can exist above it either." },
      { q: "People also search 'is 97 prime' — is that this?", a: "Yes. 'Is N prime' questions are primality tests — and 97 is indeed prime." },
    ],
  },

  "product-rule-calculator": {
    description: `Twelve eggs per carton, eight cartons per crate — the crate holds 12 × 8 = 96 eggs, and that everyday multiplication is the product: the result of multiplying two numbers. The word 'product' is math's formal name for a multiplication answer, just as 'sum' names an addition answer and 'quotient' names a division answer. Products scale recipes (3 cups × 4 batches), price bulk goods ($2.50 × 6 pounds), and compute areas (length × width) — anywhere 'groups of' appears, a product is hiding.\n\nTwo properties make products friendly. Commutativity means order never matters: 12 × 8 equals 8 × 12. And multiplying by fractions or decimals shrinks: 96 × 0.5 is 48, half the crate. Watch the signs, though — a negative times a positive is negative, while two negatives make a positive, the rule behind every 'double negative' in algebra. This calculator multiplies directly: type the first number in the First Number box (12), type the second in the Second Number box (8), and the Product box shows 96. A quick note for calculus students: this tool computes the arithmetic product of two numbers — the calculus product rule for derivatives, (fg)' = f'g + fg', is a different concept with a similar name.`,
    howToSteps: [
      "Type the first number in the First Number box — for example, 12 for eggs per carton.",
      "Type the second number in the Second Number box — for example, 8 for cartons.",
      "Read the Product box: 12 × 8 = 96 eggs in the crate.",
      "Swap the entries to feel commutativity — 8 × 12 gives the same 96.",
      "For prices, mind the decimals: $2.50 × 6 pounds = $15.00 of produce.",
      "Double-check sign rules with negatives: −4 × 3 = −12, but −4 × −3 = +12.",
    ],
    faqs: [
      { q: "What is a product in math in plain words?", a: "The answer to a multiplication problem. In 12 × 8 = 96, the product is 96. The numbers being multiplied are called factors." },
      { q: "When would I compute a product?", a: "Scaling recipes, pricing bulk items, computing areas, converting 'groups of' word problems, or any repeated-addition shortcut." },
      { q: "Is this the calculus product rule?", a: "No — that rule differentiates f(x)·g(x) as f'g + fg'. This tool computes the plain arithmetic product of two numbers. Same family name, different job." },
      { q: "What is the most common multiplication mistake?", a: "Misplacing the decimal point. 2.5 × 6 is 15.0, not 150 — count total decimal places in the factors (one here) and match them in the answer." },
      { q: "People also search 'multiply two numbers' — is that this?", a: "Exactly. 'Multiply two numbers' is the everyday phrasing for computing their product." },
    ],
  },

  "proportion-calculator": {
    description: `A recipe serving 4 needs 2 cups of flour; scaling it to 10 guests means solving 2/4 = x/10 — a proportion, an equation stating that two ratios are equal. Cross-multiplication cracks it: multiply the diagonal pairs (2 × 10 = 4 × x), giving x = 5 cups. Map scales run on proportions (1 inch = 50 miles), so do unit prices, medication dosages by weight, and the similar-triangle problems in every geometry class.\n\nThe cross-multiplication move works because multiplying both sides by both denominators clears the fractions in one stroke. It also exposes a built-in error check: in a true proportion, the cross products are equal — 2 × 10 and 4 × 5 both equal 20. If they disagree, something was mis-copied. To solve with this tool, rearrange your proportion into the form x = (a × b) ÷ c first: for 2/4 = x/10, x = (2 × 10) ÷ 4. Type a × b's factors strategically — enter 20 (which is 2 × 10) in the first input box and 0.25 (which is 1 ÷ 4) in the second. The display shows 5, the cups of flour for 10 guests.`,
    howToSteps: [
      "Set up your proportion with one unknown — for example, 2/4 = x/10 for the flour.",
      "Rearrange to isolate the unknown: x = (2 × 10) ÷ 4.",
      "Multiply the known diagonal on paper — 2 × 10 = 20 — and enter it in the first input box.",
      "Compute 1 ÷ the remaining denominator — 1 ÷ 4 = 0.25 — and enter it in the second input box.",
      "Read the display: 20 × 0.25 = 5 cups of flour.",
      "Verify with cross products: 2 × 10 = 20 and 4 × 5 = 20 — equal, so the proportion holds.",
    ],
    faqs: [
      { q: "What is a proportion in plain words?", a: "An equation saying two fractions are equal: a/b = c/d. Cross-multiplying gives a × d = b × c, which you solve for the unknown." },
      { q: "When would I solve a proportion?", a: "Scaling recipes, reading map distances, computing unit prices, dosing medicine by weight, or solving similar-triangle geometry problems." },
      { q: "What is cross-multiplication?", a: "Multiplying each numerator by the opposite denominator: in a/b = c/d, you get a × d = b × c. It clears both fractions at once." },
      { q: "What is the most common proportion mistake?", a: "Misaligning the ratios — putting cups over guests on one side and guests over cups on the other. Keep the same quantity on top in both fractions." },
      { q: "People also search 'cross multiplication calculator' — is that this?", a: "Yes. Cross multiplication is the solving technique for proportions, so the tools are one and the same." },
    ],
  },

  "pulley-calculator": {
    description: `One person hauling a 200-pound engine onto a truck bed is a back injury waiting to happen — unless a block and tackle shares the load across rope segments. A pulley system's mechanical advantage equals the number of rope segments supporting the moving block: with 4 segments, the 200-pound engine feels like 50 pounds of pull (plus friction). The trade-off is distance: you must pull 4 feet of rope to lift the engine 1 foot, because work — force times distance — is conserved.\n\nSailors, tow-truck operators, rock climbers, and theatrical riggers live by this exchange of force for distance. A gun tackle (2 segments) doubles your strength; a luff tackle (3 segments) triples it; a two-block purchase (4+) handles engines and masts. The ideal formula ignores friction — real systems lose roughly 5–10% per sheave, so a 4-segment rig in practice feels more like 60 pounds than 50. This calculator applies the ideal formula: type the load weight in the Variable A box — 200 for the engine — and type 1 ÷ segments in the Variable B box (1 ÷ 4 = 0.25). The Result box shows 50 pounds of ideal effort. Add ~10% per pulley on paper for a realistic estimate.`,
    howToSteps: [
      "Count the rope segments supporting the moving block — for example, 4.",
      "Type the load's weight in the Variable A box — enter 200 for a 200-pound engine.",
      "Compute 1 ÷ segments on paper — 1 ÷ 4 = 0.25 — and type it in the Variable B box.",
      "Read the Result box: 200 × 0.25 = 50 pounds of ideal pulling effort.",
      "Adjust for reality: add about 10% per pulley for friction — roughly 60 pounds of real effort here.",
      "Remember the distance trade: you will pull 4 feet of rope for every 1 foot the engine rises.",
    ],
    faqs: [
      { q: "How does a pulley multiply force in plain words?", a: "Each rope segment supporting the load carries an equal share. Effort = load ÷ number of supporting segments — 4 segments turn 200 pounds into 50 pounds of pull." },
      { q: "When would I use a pulley system?", a: "Lifting engines, raising masts, hauling gear up cliffs, rigging theater scenery, or any lift where the load exceeds comfortable human strength." },
      { q: "What is the catch with mechanical advantage?", a: "Distance. You pull N times more rope than the load rises — force is divided, but the rope you must haul is multiplied by the same N." },
      { q: "What is the most common pulley mistake?", a: "Counting the dead-end rope as a supporting segment, or ignoring friction. Real rigs need 5–10% more effort per sheave than the ideal formula says." },
      { q: "People also search 'mechanical advantage calculator' — is that this?", a: "Essentially, yes. Mechanical advantage is the force-multiplying ratio — for pulleys, it equals the count of supporting rope segments." },
    ],
  },

  "pythagorean-triples-calculator": {
    description: `Carpenters have squared foundations for centuries with a 3-4-5 rope: stake 3 feet one way, 4 feet the other, and a 5-foot diagonal guarantees a perfect right angle. That works because 3² + 4² = 5² — a Pythagorean triple, three whole numbers satisfying a² + b² = c². Euclid's formula manufactures infinitely many: pick any m > n, and (m² − n², 2mn, m² + n²) is a triple. With m = 2, n = 1 you get (3, 4, 5); with m = 3, n = 2 you get (5, 12, 13); with m = 4, n = 1 you get (15, 8, 17).\n\nMultiples count too — (6, 8, 10) is just (3, 4, 5) doubled — but the primitive triples from Euclid's formula are the interesting ones, and they always come with one even leg, one odd leg, and an odd hypotenuse. Surveyors, navigators, and game developers use triples to get exact right angles and clean distances without square roots. This calculator verifies the defining equation: type a² + b²'s value in the Variable A box — for (5, 12, 13), that is 25 + 144 = 169 — and type 1 in the Variable B box. The Result box shows 169; since 13² = 169 matches, the triple checks out. Mismatched results mean the numbers are not a triple.`,
    howToSteps: [
      "Pick your candidate triple — for example, (5, 12, 13).",
      "Square and add the two smaller numbers on paper: 25 + 144 = 169.",
      "Type that sum in the Variable A box — enter 169.",
      "Type 1 in the Variable B box to pass the value through unchanged.",
      "Read the Result box: 169.",
      "Compare against the largest number squared — 13² = 169 matches, so (5, 12, 13) is a genuine triple.",
    ],
    faqs: [
      { q: "What is a Pythagorean triple in plain words?", a: "Three whole numbers (a, b, c) where a² + b² = c². The classics are (3, 4, 5), (5, 12, 13), and (8, 15, 17)." },
      { q: "How do I generate Pythagorean triples?", a: "Use Euclid's formula: pick m > n, then the triple is (m²−n², 2mn, m²+n²). m=2, n=1 gives (3, 4, 5)." },
      { q: "When would I use a Pythagorean triple?", a: "Squaring a foundation with a 3-4-5 rope, checking right angles in framing, or getting exact integer distances in geometry and game physics." },
      { q: "What is the most common triple mistake?", a: "Assuming any three numbers with a² + b² ≈ c² qualify. Triples are exact — (2, 3, 4) fails because 4 + 9 = 13, not 16." },
      { q: "People also search '3 4 5 triangle calculator' — is that this?", a: "Related. The 3-4-5 triangle is the smallest Pythagorean triple; this tool verifies any candidate triple the same way." },
    ],
  },

  "quadrilateral-calculator": {
    description: `Four sides, four angles, endless variety — the quadrilateral family stretches from squares to kites to lopsided trapezoids, and each member has its own area recipe. Rectangles and parallelograms use base × height (the height measured perpendicular to the base, not along the slanted side). Trapezoids average the two parallel sides first: (a + b) ÷ 2 × height. Kites and rhombuses use half the product of the diagonals: (d₁ × d₂) ÷ 2. And any quadrilateral at all surrenders to triangulation — split it along a diagonal into two triangles and add their areas.\n\nFlooring estimators measure rooms this way, since few rooms are perfect rectangles; splitting an L-shaped living room into two rectangles is triangulation in disguise. The universal trap is the slanted side: area needs the perpendicular height, and using the slant edge instead inflates the answer. This calculator handles the multiplicative recipes: for a rhombus with diagonals 10 and 6, type half the first diagonal (5) in the Variable A box and the second diagonal (6) in the Variable B box — the Result box shows 30, the area, since (10 × 6) ÷ 2 = 5 × 6. For rectangles, enter base in A and perpendicular height in B directly.`,
    howToSteps: [
      "Identify your quadrilateral type — rectangle, parallelogram, trapezoid, rhombus, or kite — since each has its own recipe.",
      "For a rhombus or kite: halve the first diagonal on paper — for diagonals 10 and 6, that is 5.",
      "Type that halved diagonal in the Variable A box — enter 5.",
      "Type the full second diagonal in the Variable B box — enter 6.",
      "Read the Result box: 5 × 6 = 30 square units of area.",
      "For rectangles and parallelograms, enter the base in A and the perpendicular height (not the slant side) in B instead.",
    ],
    faqs: [
      { q: "What is the quadrilateral area formula in plain words?", a: "It depends on the type: rectangle = base × height; trapezoid = average of parallel sides × height; rhombus/kite = (diagonal₁ × diagonal₂) ÷ 2." },
      { q: "When would I compute a quadrilateral's area?", a: "Estimating flooring for non-rectangular rooms, sizing a trapezoidal garden bed, cutting kite-shaped fabric, or checking geometry homework." },
      { q: "What is the most common quadrilateral area mistake?", a: "Using the slanted side as the height. Area needs the perpendicular distance — measure straight across, not along the lean." },
      { q: "How do I find the area of an irregular quadrilateral?", a: "Split it into two triangles along a diagonal, compute each triangle's area (½ × base × height), and add them." },
      { q: "People also search 'trapezoid area calculator' — is that this?", a: "A trapezoid is one quadrilateral type, so its area tool is a special case of this one: (a+b) ÷ 2 × height." },
    ],
  },

  "quotient-rule-calculator": {
    description: `Split 96 eggs into cartons of 12 and you fill 8 cartons — the 8 is the quotient, math's formal name for a division answer, just as 'product' names a multiplication answer. In 96 ÷ 12 = 8, the 96 is the dividend (the number being divided) and the 12 is the divisor (the number doing the dividing). Quotients show up in unit pricing ($15 ÷ 6 pounds = $2.50 per pound), fuel economy (300 miles ÷ 12 gallons = 25 mpg), and pacing (26.2 miles ÷ 4 hours ≈ 6.55 mph).\n\nDivision has quirks multiplication lacks: order matters (12 ÷ 96 is not 8), and dividing by zero is undefined — no number of zero-sized groups makes 96. Long division's leftovers get their own name, the remainder, which this tool's companion page covers. This calculator divides directly: type the dividend in the Dividend (Numerator) box (96), type the divisor in the Divisor (Denominator) box (12), and the Quotient box shows 8. One note for calculus students: the calculus quotient rule for derivatives, (f/g)' = (f'g − fg')/g², is a different concept sharing only the name — this tool computes the arithmetic quotient.`,
    howToSteps: [
      "Type the number being divided in the Dividend (Numerator) box — for example, 96.",
      "Type the number doing the dividing in the Divisor (Denominator) box — for example, 12.",
      "Read the Quotient box: 96 ÷ 12 = 8.",
      "Check by multiplying back: 8 × 12 = 96 confirms the division.",
      "Never enter 0 as the divisor — division by zero is undefined and has no meaningful answer.",
      "For leftovers, note the remainder separately: 100 ÷ 12 = 8 remainder 4.",
    ],
    faqs: [
      { q: "What is a quotient in plain words?", a: "The answer to a division problem. In 96 ÷ 12 = 8, the quotient is 8 — the dividend is 96 and the divisor is 12." },
      { q: "When would I compute a quotient?", a: "Unit pricing, fuel economy, splitting bills evenly, pacing calculations, or converting totals into per-item rates." },
      { q: "Is this the calculus quotient rule?", a: "No — that rule differentiates f(x)/g(x) as (f'g − fg')/g². This tool computes the plain arithmetic quotient of two numbers." },
      { q: "What is the most common division mistake?", a: "Dividing by zero, or swapping dividend and divisor. 96 ÷ 12 = 8 but 12 ÷ 96 = 0.125 — order changes everything." },
      { q: "People also search 'division calculator' — is that this?", a: "Yes. 'Division calculator' is the everyday name for computing quotients of two numbers." },
    ],
  },

  "radian-calculator": {
    description: `Degrees slice a circle into 360 arbitrary wedges — a Babylonian inheritance — while radians measure angles by the circle itself: one radian is the angle that cuts off an arc exactly as long as the radius. A full circle is therefore 2π radians (about 6.2832), a half circle is π, and a right angle is π/2. The conversion is a single ratio: radians = degrees × π ÷ 180, so 90° becomes π/2 ≈ 1.5708, and 180° becomes π ≈ 3.1416.\n\nCalculus, physics, and engineering speak radians natively — the derivative of sin(x) is cos(x) only in radians, and angular velocity in revolutions per minute must convert before entering rotational formulas. The classic blunder is leaving a calculator in degree mode while the formula expects radians, silently corrupting every trig result. This calculator performs the conversion's multiplication: type your degrees in the Variable A box — say 90 — and type π ÷ 180 (≈ 0.0174533) in the Variable B box. The Result box shows about 1.5708 radians. Going the other direction, enter the radian value in A and 57.2958 (which is 180 ÷ π) in B.`,
    howToSteps: [
      "Decide your direction: degrees → radians, or radians → degrees.",
      "For degrees → radians, type the degree measure in the Variable A box — for example, 90.",
      "Type 0.0174533 (the value of π ÷ 180) in the Variable B box.",
      "Read the Result box: 90 × 0.0174533 ≈ 1.5708 radians, which is π/2.",
      "For radians → degrees, enter the radian value in A and 57.2958 (180 ÷ π) in B instead.",
      "Memorize the landmarks: 90° = π/2, 180° = π, 270° = 3π/2, 360° = 2π.",
    ],
    faqs: [
      { q: "How do I convert degrees to radians in plain words?", a: "Multiply degrees by π ÷ 180. So 90° × π/180 = π/2 ≈ 1.5708 radians. To go back, multiply radians by 180 ÷ π." },
      { q: "When would I use radians instead of degrees?", a: "In calculus, physics formulas, angular velocity, and computer graphics — anywhere the math simplifies when angles are measured in radius-lengths." },
      { q: "What is a radian, intuitively?", a: "The angle whose arc length equals the radius. About 57.3° — a bit more than one-sixth of a right angle." },
      { q: "What is the most common radian mistake?", a: "Calculator mode mismatch: computing sin(90) in radian mode gives 0.894, not 1. Always check whether your tool expects degrees or radians." },
      { q: "People also search 'degrees to radians calculator' — is that this?", a: "Exactly. 'Degrees to radians' is the most common radian conversion, using the × π/180 factor." },
    ],
  },

  "radius-of-circle-calculator": {
    description: `You know the circular garden bed took 31.4 feet of edging — what is its radius? The circumference formula C = 2πr rearranges to r = C ÷ 2π, so 31.4 ÷ 6.2832 ≈ 5 feet. That backward-solving is the whole job of this calculator: given a measurement you have (circumference, area, or diameter), recover the radius you need. From area it is r = √(A ÷ π): a 78.5-square-foot patio has radius √(78.5 ÷ 3.1416) = √25 = 5 feet. From diameter it is simply half.\n\nLandscapers center sprinklers by radius, woodworkers swing compasses by radius, and runners on a curved track care because lane 8's radius makes its lap longer. The radius is also the master key: once you have it, diameter is 2r, circumference is 2πr, and area is πr² all follow. This calculator performs the division step: type the circumference in the Variable A box — 31.4 — and type 1 ÷ 2π (≈ 0.15915) in the Variable B box. The Result box shows about 5, the radius in feet. For the area route, compute √(A ÷ π) on paper first, then verify by entering the area in A and 1 ÷ π (0.31831) in B and square-rooting the display.`,
    howToSteps: [
      "Pick the measurement you have: circumference, area, or diameter.",
      "For circumference: type it in the Variable A box — for example, 31.4.",
      "Type 0.15915 (which is 1 ÷ 2π) in the Variable B box.",
      "Read the Result box: 31.4 × 0.15915 ≈ 5 feet of radius.",
      "For diameter instead, just halve it: a 10-foot diameter means a 5-foot radius.",
      "For area: divide the area by π on paper first, then take the square root — √(78.5 ÷ π) = 5.",
    ],
    faqs: [
      { q: "How do I find a circle's radius from its circumference?", a: "Divide the circumference by 2π: r = C ÷ 2π. A 31.4-foot circumference gives 31.4 ÷ 6.2832 ≈ 5 feet." },
      { q: "How do I find the radius from the area?", a: "Divide the area by π and take the square root: r = √(A ÷ π). An area of 78.5 gives √(25) = 5." },
      { q: "When would I solve for a radius?", a: "Centering a sprinkler in a circular bed, setting a compass, sizing a round tablecloth from its area, or checking a wheel's radius from its rollout distance." },
      { q: "What is the most common radius mistake?", a: "Forgetting the 2 in 2π — dividing circumference by just π gives the diameter, not the radius. Always divide by the full 6.2832." },
      { q: "People also search 'find radius of circle' — is that this?", a: "Yes. 'Find radius of circle' means solving r from whatever circle measurement you have: circumference, area, or diameter." },
    ],
  },

  "radius-calculator": {
    description: `The radius — the straight shot from center to edge — is the single number that unlocks every circle and sphere formula, which is why 'what is the radius' is one of geometry's most-asked questions. The most common route is also the simplest: the radius is half the diameter. A 12-inch pizza has a 6-inch radius, a 24-inch bike wheel a 12-inch radius, and Earth's roughly 7,918-mile diameter means a radius of about 3,959 miles. Measure across, halve it, done.\n\nSpheres follow the same rule in 3D: a basketball's 9.5-inch diameter gives a 4.75-inch radius, which then feeds the volume formula (4/3)πr³. Chords and arcs offer fancier routes — given a chord length and its height (sagitta), surveyors recover the radius of a curve — but diameter-halving covers nearly every real-world case. This calculator performs the halving: type the diameter in the Variable A box — 12 for the pizza — and type 0.5 in the Variable B box. The Result box shows 6 inches. From there, diameter = 2r, circumference = 2πr, and area = πr² all unfold from the one number.`,
    howToSteps: [
      "Measure the full diameter — the widest distance across the circle or sphere.",
      "Type that diameter in the Variable A box — for example, 12 for a 12-inch pizza.",
      "Type 0.5 in the Variable B box, since the radius is half the diameter.",
      "Read the Result box: 12 × 0.5 = 6 inches of radius.",
      "Use the radius for everything else: circumference = 2 × π × 6 ≈ 37.7 inches.",
      "For spheres, the same halving applies — then volume = (4/3) × π × r³.",
    ],
    faqs: [
      { q: "What is the radius in plain words?", a: "The distance from the center of a circle or sphere to its edge — exactly half the diameter. A 12-inch pizza has a 6-inch radius." },
      { q: "When would I need the radius?", a: "Computing circle area or circumference, sizing round tablecloths, setting compasses, finding sphere volumes, or converting wheel diameter to rollout distance." },
      { q: "What is the relationship between radius and diameter?", a: "The diameter is twice the radius (d = 2r), and the radius is half the diameter (r = d/2). One determines the other instantly." },
      { q: "What is the most common radius mistake?", a: "Plugging the diameter into a radius formula. Area = πr² needs the radius — using the 12-inch diameter directly quadruples the answer." },
      { q: "People also search 'radius from diameter' — is that this?", a: "Exactly. 'Radius from diameter' is the halving operation: r = d ÷ 2." },
    ],
  },

  "random-number-generator-calculator": {
    description: `Drawing names from a hat, rolling dice, shuffling a playlist, assigning Secret Santa — randomness is fairness made visible, and a random number generator is the digital hat. The classic ask is a random integer between two bounds: pick a number from 1 to 100, roll a 20-sided die (1 to 20), choose a raffle winner from tickets 1 through 500. True randomness is surprisingly hard — computers use pseudorandom algorithms seeded by the clock or system entropy — but for games, giveaways, and sampling it is more than fair enough.\n\nStatisticians use random numbers for sampling and simulations, teachers for picking students, and developers for everything from game loot to A/B test assignments. The one rule: define your bounds inclusively and clearly, since 'random number' without bounds is meaningless. This calculator scales a 0-to-1 random decimal into your range: generate a random decimal on paper or from another tool (say 0.637), type the range size (max − min + 1) in the Variable A box — for 1–100, that is 100 — and type the random decimal in the Variable B box (0.637). The Result box shows 63.7; drop the fraction and add your minimum (1) to get 64, your random pick. For a die roll 1–20, use range size 20 the same way.`,
    howToSteps: [
      "Decide your inclusive bounds — for example, 1 to 100 for a raffle.",
      "Compute the range size: max − min + 1 — here 100 — and type it in the Variable A box.",
      "Get a random decimal between 0 and 1 (from a device or tool) — say 0.637 — and type it in the Variable B box.",
      "Read the Result box: 100 × 0.637 = 63.7.",
      "Drop the decimal fraction (63) and add your minimum (1) to land inside the bounds: 64.",
      "For a 20-sided die, use range size 20 and minimum 1 the same way.",
    ],
    faqs: [
      { q: "How do I pick a random number between two values?", a: "Multiply a random 0–1 decimal by the range size (max − min + 1), drop the fraction, and add the minimum. That lands uniformly inside your bounds." },
      { q: "When would I generate random numbers?", a: "Raffles and giveaways, dice games, Secret Santa draws, random sampling for surveys, shuffling, and simulations." },
      { q: "Are computer random numbers truly random?", a: "Usually pseudorandom — deterministic algorithms seeded by system entropy. Fine for games and sampling, but cryptography needs specialized secure generators." },
      { q: "What is the most common random-number mistake?", a: "Off-by-one bounds: multiplying by (max − min) instead of (max − min + 1) silently excludes the top value. A 1–20 die needs a range size of 20." },
      { q: "People also search 'random number picker' — is that this?", a: "Yes. A 'random number picker' selects an integer within your chosen bounds — the digital equivalent of drawing from a hat." },
    ],
  },

  "rate-of-change-calculator": {
    description: `Your car covers 120 miles in 2 hours — 60 miles per hour, a rate of change: how fast one quantity changes relative to another. The average rate of change between two points is (change in y) ÷ (change in x), the slope of the line connecting them. A stock climbing from $40 to $52 over 6 months rises at $2 per month; a bathtub draining 30 gallons in 15 minutes empties at 2 gallons per minute. The units tell the story: miles per hour, dollars per month, gallons per minute — always 'this per that'.\n\nIn calculus this idea grows up into the derivative, the instantaneous rate at a single point — the speedometer reading versus the trip average. Economists track marginal cost, doctors track dosage rates, and fitness apps track pace per mile, all rates of change. This calculator performs the division: type the change in the output quantity (Δy) in the Variable A box — 120 for the miles — and type 1 ÷ (change in input) in the Variable B box (1 ÷ 2 = 0.5 for 2 hours). The Result box shows 60, the miles per hour. Negative results mean decrease: a −30-gallon change over 15 minutes is −2 gallons per minute of draining.`,
    howToSteps: [
      "Find the change in your output quantity (new minus old) — for 120 miles traveled, that is 120.",
      "Type that change in the Variable A box — enter 120.",
      "Compute 1 ÷ (change in input) — 1 ÷ 2 = 0.5 for 2 hours — and type it in the Variable B box.",
      "Read the Result box: 120 × 0.5 = 60 miles per hour.",
      "State the units as 'output per input' — mph, dollars per month, gallons per minute.",
      "Remember this is an average: the car may have gone 75 mph and 45 mph at different moments along the way.",
    ],
    faqs: [
      { q: "What is the rate of change formula in plain words?", a: "Divide the change in the output by the change in the input: (y₂ − y₁) ÷ (x₂ − x₁). It is the slope between two points, with units like miles per hour." },
      { q: "When would I compute a rate of change?", a: "Trip speeds, stock momentum, draining or filling rates, population change per year, or any 'how fast is this changing' question." },
      { q: "What is the difference between average and instantaneous rate of change?", a: "Average covers an interval (the trip average, 60 mph); instantaneous is one moment (the speedometer, 63 mph). Calculus shrinks the interval to zero to get the latter." },
      { q: "What is the most common rate-of-change mistake?", a: "Subtracting in inconsistent order — (y₂ − y₁) must pair with (x₂ − x₁). Flipping one gives the wrong sign." },
      { q: "People also search 'average rate of change calculator' — is that this?", a: "Yes. 'Average rate of change' is the formal name for (change in y) ÷ (change in x) over an interval." },
    ],
  },

  "ratio-calculator": {
    description: `A pancake recipe calling for 2 cups of flour to 1 cup of milk keeps working whether you make a short stack or breakfast for twenty — the 2:1 ratio is the relationship that must survive scaling. Ratios compare two quantities in order: 2:1, 3 parts concentrate to 1 part water, 16:9 for a widescreen TV. Simplifying a ratio means dividing both sides by their greatest common divisor, just like reducing a fraction: 12:18 becomes 2:3, and 100:250 becomes 2:5.\n\nPaint mixing, mortgage down payments, sports win-loss records, and aspect ratios all speak ratio. Two ratios are equivalent when they simplify to the same form — 6:9 and 10:15 are both 2:3 in disguise, which is why proportions and ratios are two views of one idea. To simplify with this tool, enter the first term in the first input box (12) and 1 ÷ GCD in the second — the GCD of 12 and 18 is 6, so enter 1 ÷ 6 ≈ 0.16667. The display shows 2, the simplified first term; repeat with the second term (18 × 0.16667 = 3) to complete 2:3. Scaling up works the same in reverse: multiply both terms of 2:1 by 10 for 20:10.`,
    howToSteps: [
      "Write your ratio in order — for example, 12:18 for a mixture.",
      "Find the greatest common divisor of both terms on paper — for 12 and 18, it is 6.",
      "Enter the first term in the first input box — type 12.",
      "Enter 1 ÷ GCD in the second input box — 1 ÷ 6 ≈ 0.16667 — and note the display: 2.",
      "Repeat for the second term: 18 × 0.16667 = 3, completing the simplified ratio 2:3.",
      "To scale a ratio up instead, multiply both terms by the same number — 2:1 × 10 = 20:10.",
    ],
    faqs: [
      { q: "What is a ratio in plain words?", a: "A comparison of two quantities in order, written a:b. Simplifying divides both terms by their greatest common divisor: 12:18 → 2:3." },
      { q: "When would I use ratios?", a: "Mixing paint or concrete, scaling recipes, expressing odds and win-loss records, describing screen aspect ratios like 16:9." },
      { q: "What is the difference between a ratio and a fraction?", a: "A ratio 2:3 compares parts to parts; the fraction 2/5 expresses one part against the whole. Related, but they answer different questions." },
      { q: "What is the most common ratio mistake?", a: "Simplifying only one side, or reversing the order. 12:18 is not 3:2 — order and equal treatment of both terms are everything." },
      { q: "People also search 'simplify ratio calculator' — is that this?", a: "Yes. 'Simplify ratio' means reducing a:b by the greatest common divisor — 12:18 to 2:3." },
    ],
  },

  "reactance-calculator": {
    description: `Resistors oppose current plainly, but inductors and capacitors oppose it with a twist — their opposition, called reactance, depends on frequency. An inductor's reactance grows with frequency: X_L = 2πfL, so a coil barely notices 60 Hz house current but walls off radio frequencies. A capacitor does the opposite: X_C = 1 ÷ (2πfC), blocking DC entirely (zero frequency means infinite reactance) while waving high frequencies through. Together with resistance, reactance forms impedance — the full AC opposition.\n\nCrossover networks in speakers split bass to the woofer and treble to the tweeter using exactly this frequency dependence, and radio tuners select stations by resonating an inductor-capacitor pair where the two reactances cancel. At resonance, X_L equals X_C and the circuit's opposition collapses to pure resistance. This calculator evaluates either formula's multiplication: for inductive reactance, type 2πf — at 60 Hz, 2 × π × 60 ≈ 376.99 — in the Variable A box and the inductance L in henries in the Variable B box. A 0.1 H coil gives 376.99 × 0.1 ≈ 37.7 ohms. For capacitive reactance, type 1 ÷ (2πfC)'s factors instead: enter 1 ÷ C in A and 1 ÷ (2πf) in B.`,
    howToSteps: [
      "Choose your component: inductive reactance X_L = 2πfL, or capacitive X_C = 1 ÷ (2πfC).",
      "For inductive: compute 2πf on paper — at 60 Hz, 2 × π × 60 ≈ 376.99 — and type it in the Variable A box.",
      "Type the inductance in henries in the Variable B box — for example, 0.1.",
      "Read the Result box: 376.99 × 0.1 ≈ 37.7 ohms of inductive reactance.",
      "For capacitive: type 1 ÷ C in A and 1 ÷ (2πf) in B instead, and read the Result the same way.",
      "Check resonance curiosity: the frequency where your two results match is where the circuit resonates.",
    ],
    faqs: [
      { q: "What is reactance in plain words?", a: "The frequency-dependent opposition to AC current from inductors (X_L = 2πfL, rising with frequency) and capacitors (X_C = 1/(2πfC), falling with frequency). It is measured in ohms like resistance." },
      { q: "When would I calculate reactance?", a: "Designing speaker crossovers, tuning radio circuits, analyzing motors and transformers, or any AC circuit homework involving impedance." },
      { q: "What is the difference between reactance and resistance?", a: "Resistance opposes current equally at all frequencies and dissipates power as heat. Reactance varies with frequency and stores energy temporarily instead of dissipating it." },
      { q: "What is the most common reactance mistake?", a: "Using frequency in the wrong units — f must be in hertz, L in henries, C in farads. Kilohertz or microfarads need converting first." },
      { q: "People also search 'inductive reactance calculator' — is that this?", a: "Yes — inductive reactance (X_L = 2πfL) is one of the two reactance types this tool evaluates." },
    ],
  },

  "reciprocal-of-a-fraction-calculator": {
    description: `Flip 3/4 upside down and you get 4/3 — that flipped version is the reciprocal of the fraction, and it is the key that unlocks fraction division. Dividing by a fraction is notoriously confusing until you learn the one move: invert and multiply. So (2/3) ÷ (4/5) becomes (2/3) × (5/4) = 10/12 = 5/6. The reciprocal does the heavy lifting: every division problem quietly becomes a multiplication problem.\n\nCarpenters dividing fractional inches, bakers halving recipes written in thirds, and students surviving fraction units all lean on this flip. Note the special cases: the reciprocal of a whole number n is 1/n, the reciprocal of 1/n is n, and zero has no reciprocal at all — no number multiplies by 0 to make 1. This calculator performs the flip's arithmetic in two passes: type the original denominator in the Variable A box and 1 in the Variable B box to confirm the new numerator — for 3/4, enter 4 and 1 to get 4. Then type the original numerator in A and 1 in B to confirm the new denominator — 3 and 1 give 3. Together: 4/3, the reciprocal.`,
    howToSteps: [
      "Write your fraction clearly — for example, 3/4.",
      "Type the original denominator in the Variable A box — enter 4.",
      "Type 1 in the Variable B box and read the Result: 4, the reciprocal's new numerator.",
      "Type the original numerator in the Variable A box — enter 3.",
      "Type 1 in the Variable B box and read the Result: 3, the reciprocal's new denominator.",
      "Assemble the flipped fraction: 4/3. Verify by multiplying: (3/4) × (4/3) = 1, as every reciprocal pair must.",
    ],
    faqs: [
      { q: "What is the reciprocal of a fraction in plain words?", a: "The fraction flipped upside down: numerator and denominator swap places. The reciprocal of 3/4 is 4/3, and their product is always 1." },
      { q: "Why do I need reciprocals for division?", a: "Because dividing by a fraction equals multiplying by its reciprocal: (2/3) ÷ (4/5) = (2/3) × (5/4). The flip turns every division into easier multiplication." },
      { q: "What is the reciprocal of a whole number?", a: "One over that number: the reciprocal of 5 is 1/5. Flip 5/1 and you get 1/5." },
      { q: "Does zero have a reciprocal?", a: "No. No number multiplied by 0 equals 1, so 0 has no reciprocal — which is also why division by zero is undefined." },
      { q: "People also search 'flip fraction calculator' — is that this?", a: "Yes. 'Flip the fraction' is the classroom nickname for taking a reciprocal." },
    ],
  },

  "reciprocal-calculator": {
    description: `The reciprocal of a number is 1 divided by that number — the value that multiplies with the original to make exactly 1. The reciprocal of 4 is 1/4 (0.25), of 0.5 is 2, and of −3 is −1/3. This 'partner that makes one' shows up in surprising places: speed and pace are reciprocals (6 mph is a 10-minute mile, since 60 ÷ 6 = 10), resistance in parallel circuits adds via reciprocals, and the harmonic mean — the right average for rates — is built from them.\n\nFractions flip (the reciprocal of 2/3 is 3/2), decimals invert (the reciprocal of 0.2 is 5), and signs stay put — the reciprocal of a negative is negative. The lone exception is zero, which has no reciprocal, since nothing times zero gives 1. This calculator divides directly: type 1 in the Variable A box and your number in the Variable B box. For the reciprocal of 4, enter 1 and 4; the Result box shows 0.25. Verify the partnership by multiplying the original with the result — 4 × 0.25 = 1 confirms it. For a fraction like 2/3, enter its decimal form (0.6667) in B to get 1.5, which is 3/2.`,
    howToSteps: [
      "Type 1 in the Variable A box — the reciprocal is always 1 divided by the number.",
      "Type your number in the Variable B box — for example, 4.",
      "Read the Result box: 1 ÷ 4 = 0.25, the reciprocal.",
      "Verify the partnership: multiply the original by the result — 4 × 0.25 = 1.",
      "For fractions, convert to a decimal first: 2/3 ≈ 0.6667 in B gives 1.5, which is 3/2.",
      "Never enter 0 in B — zero has no reciprocal.",
    ],
    faqs: [
      { q: "What is a reciprocal in plain words?", a: "One divided by the number — its multiply-to-one partner. The reciprocal of 4 is 1/4, of 0.5 is 2, and of 2/3 is 3/2." },
      { q: "When would I use a reciprocal?", a: "Converting speed to pace, combining parallel resistances, computing harmonic means of rates, or flipping any division into a multiplication." },
      { q: "What is the reciprocal of a decimal?", a: "One divided by it: the reciprocal of 0.2 is 5, and of 1.25 is 0.8. The digits invert around 1." },
      { q: "What is the most common reciprocal mistake?", a: "Trying to take the reciprocal of zero, or flipping the sign. Reciprocals keep the original's sign: −3 gives −1/3." },
      { q: "People also search '1 divided by x' — is that this?", a: "Exactly. '1 divided by x' is the definition of the reciprocal of x." },
    ],
  },

  "rectangular-prism-calculator": {
    description: `A shoebox, a moving carton, a swimming pool — the rectangular prism (the humble box) is the shape of shipping, storage, and construction. Its volume is length × width × height: a 2 × 1.5 × 1-foot moving box holds 3 cubic feet, and a 20 × 10 × 5-foot pool holds 1,000 cubic feet of water (about 7,480 gallons). Its surface area — the wrapping paper or paint needed — is 2(lw + lh + wh), the sum of all six faces counted in pairs.\n\nMovers estimate truck space in cubic feet, concrete is ordered by the cubic yard (27 cubic feet), and aquarium heaters are sized by gallons from the volume. The classic trap is mixing units: a box measured as 24 × 18 × 12 inches is 3 cubic feet, not 5,184 of anything useful, until you divide by 1,728 (cubic inches per cubic foot). This calculator multiplies in stages: type the length in the Variable A box and the width in the Variable B box — for the pool, 20 and 10 — and the Result box shows 200, the base area. Then run it again with 200 in A and the height (5) in B to get 1,000 cubic feet. For surface area, compute each face pair on paper and add them.`,
    howToSteps: [
      "Measure the box's length, width, and height in the same units — for example, a 20 × 10 × 5-foot pool.",
      "Type the length in the Variable A box — enter 20.",
      "Type the width in the Variable B box — enter 10.",
      "Read the Result box: 20 × 10 = 200 square feet of base area.",
      "Run the tool again with 200 in A and the height (5) in B: the Result is 1,000 cubic feet of volume.",
      "Convert units if needed: divide cubic inches by 1,728 for cubic feet, or multiply cubic feet by 7.48052 for gallons.",
    ],
    faqs: [
      { q: "What is the volume of a rectangular prism in plain words?", a: "Multiply length × width × height. A 20 × 10 × 5-foot pool holds 1,000 cubic feet." },
      { q: "What is the surface area formula for a box?", a: "Add all six faces: 2(lw + lh + wh) — each pair of opposite faces counted once, then doubled." },
      { q: "When would I compute a box's volume?", a: "Estimating moving truck space, ordering concrete, sizing aquariums and pools, or computing shipping dimensional weight." },
      { q: "What is the most common box-volume mistake?", a: "Mixing units across dimensions — inches with feet. Convert everything to one unit before multiplying." },
      { q: "People also search 'box volume calculator' — is that this?", a: "Yes. A 'box' is the everyday name for a rectangular prism: length × width × height." },
    ],
  },

  "reducing-fractions-calculator": {
    description: `The fraction 12/18 and the fraction 2/3 are the same amount of pizza — reducing (simplifying) just writes it in lowest terms, where the numerator and denominator share no common divisor but 1. The method: divide top and bottom by their greatest common divisor. For 12/18, the GCD is 6, so 12 ÷ 6 = 2 and 18 ÷ 6 = 3, giving 2/3. Teachers demand reduced answers, carpenters read 2/3 of an inch faster than 12/18, and every fraction algorithm downstream runs cleaner on small numbers.\n\nFinding the GCD is the only hard part: list divisors, or use Euclid's algorithm of repeated remainders for big numbers (GCD(1071, 462) = 21). A fraction already in lowest terms — like 7/11 — reduces to itself, which is a valid answer, not a failure. This calculator performs one reduction division at a time: type the numerator in the Variable A box (12) and 1 ÷ GCD in the Variable B box (1 ÷ 6 ≈ 0.16667). The Result box shows 2, the reduced numerator. Repeat with the denominator in A (18) to get 3, completing 2/3. Confirm by checking that 2 and 3 share no divisor but 1.`,
    howToSteps: [
      "Find the greatest common divisor of the numerator and denominator — for 12/18, it is 6.",
      "Type the numerator in the Variable A box — enter 12.",
      "Type 1 ÷ GCD in the Variable B box — 1 ÷ 6 ≈ 0.16667 — and read the Result: 2.",
      "Type the denominator in the Variable A box — enter 18 — keeping 0.16667 in B.",
      "Read the Result box: 3, completing the reduced fraction 2/3.",
      "Verify the reduction: 2 and 3 share no common divisor besides 1, so the job is done.",
    ],
    faqs: [
      { q: "How do I reduce a fraction in plain words?", a: "Divide the top and bottom by their greatest common divisor. For 12/18, the GCD is 6, so it reduces to 2/3." },
      { q: "When would I reduce fractions?", a: "Showing math homework answers, reading measurements, simplifying ratios, or cleaning up any fraction before further calculation." },
      { q: "How do I find the GCD of large numbers?", a: "Use Euclid's algorithm: replace the larger number with its remainder when divided by the smaller, and repeat until the remainder is zero — the last divisor is the GCD." },
      { q: "What is the most common fraction-reduction mistake?", a: "Dividing by a common factor that is not the greatest — 12/18 divided by 2 gives 6/9, which still reduces. Keep going until top and bottom are coprime." },
      { q: "People also search 'simplify fractions calculator' — is that this?", a: "Yes. 'Simplify fractions' and 'reduce fractions' are the same operation: divide by the GCD to reach lowest terms." },
    ],
  },

  "regular-polygon-area": {
    description: `Stop signs, honeycomb cells, and gazebo floors share a secret: they are regular polygons — equal sides, equal angles — and every one has an exact area formula. For n sides of length s, the area is (n × s²) ÷ (4 × tan(π/n)). A regular hexagon (n = 6) with 4-inch sides gives (6 × 16) ÷ (4 × tan(30°)) ≈ 41.57 square inches — which is also why honeybees chose hexagons: among tilings, they enclose the most area per unit of wax. As n grows, the formula converges on the circle's πr², since a many-sided polygon is nearly round.\n\nThe tangent term encodes the polygon's pointiness: triangles (n = 3) get a large divisor, dodecagons nearly none. Architects sizing polygonal pavilions, quilters cutting hexagonal patches, and students checking geometry all need this. This calculator's fields match the formula's inputs: type the side count in the Number of Sides (n) box — 6 for a hexagon — and the side length in the Side Length (s) box — 4. The Area box computes the full formula: about 41.57 square inches, while the Perimeter box shows n × s = 24 inches. Double-check that your sides are truly equal — one uneven side voids the formula.`,
    howToSteps: [
      "Count the polygon's sides and type the number in the Number of Sides (n) box — for example, 6.",
      "Measure one side length and type it in the Side Length (s) box — for example, 4.",
      "Read the Area box: about 41.57 square inches for a 4-inch hexagon.",
      "Read the Perimeter box: 6 × 4 = 24 inches.",
      "Sanity-check against a circle: a hexagon's area should be a bit less than the circle through its corners.",
      "Confirm regularity first — equal sides and equal angles — or the formula does not apply.",
    ],
    faqs: [
      { q: "What is the regular polygon area formula in plain words?", a: "Multiply the side count by the side length squared, then divide by (4 × tan(π ÷ sides)). In symbols: A = (n·s²) ÷ (4·tan(π/n))." },
      { q: "When would I compute a regular polygon's area?", a: "Sizing hexagonal pavers or quilt patches, planning polygonal decks and gazebos, estimating stop-sign sheet metal, or geometry homework." },
      { q: "Why do the hexagon's numbers look familiar?", a: "A regular hexagon is six equilateral triangles around a center point — its area is 6 × (√3/4)s², matching the general formula at n = 6." },
      { q: "What is the most common regular-polygon mistake?", a: "Feeding the formula an irregular polygon. Equal sides AND equal angles are both required — measure twice." },
      { q: "People also search 'hexagon area calculator' — is that this?", a: "A hexagon is the n = 6 case of this tool, so yes — enter 6 sides and your side length." },
    ],
  },

  "relative-error-calculator": {
    description: `A GPS claiming your position within 10 feet sounds precise — until you learn surveyors quoting '10 feet' on a 10-foot lot versus a 10-mile highway mean wildly different things. Relative error puts the mistake in context: divide the absolute error by the true value. A 10-foot error on a 5,280-foot mile is 10 ÷ 5280 ≈ 0.0019, or 0.19% — excellent. The same 10 feet on a 20-foot lot is 50% — useless. It is the same ratio as percent error, just reported as a decimal instead of a percent.\n\nEngineers specify sensor accuracy this way ('±0.5% of reading'), pollsters report margins of error, and manufacturers print tolerances — a 100-ohm resistor at ±5% may actually be 95–105 ohms. The formula is |measured − true| ÷ |true|, and it explodes when the true value nears zero, so near-zero measurements need absolute error instead. This calculator performs the division: type the absolute gap in the Variable A box — 10 for the GPS — and type 1 ÷ true value in the Variable B box (1 ÷ 5280 ≈ 0.000189). The Result box shows about 0.0019. Multiply by 100 on paper to quote it as 0.19% percent error.`,
    howToSteps: [
      "Subtract to find the absolute gap between measured and true — for the GPS example, 10 feet.",
      "Type that gap in the Variable A box — enter 10.",
      "Compute 1 ÷ true value — 1 ÷ 5280 ≈ 0.000189 — and type it in the Variable B box.",
      "Read the Result box: 10 × 0.000189 ≈ 0.0019, the relative error.",
      "Multiply by 100 to express it as a percent: about 0.19% error.",
      "Judge it in context: under 1% is good for most instruments; near zero true values need absolute error instead.",
    ],
    faqs: [
      { q: "What is relative error in plain words?", a: "The absolute error divided by the true value: |measured − true| ÷ |true|. It reports the mistake as a fraction of the thing measured — multiply by 100 for percent error." },
      { q: "When would I use relative error instead of absolute error?", a: "Whenever the size of the mistake only makes sense against the size of the measurement: GPS accuracy, sensor specs, polling margins, manufacturing tolerances." },
      { q: "What is the difference between relative error and percent error?", a: "Only presentation. Relative error is the decimal (0.0019); percent error is that times 100 (0.19%). Same information, different costume." },
      { q: "What is the most common relative error mistake?", a: "Dividing by the measured value instead of the true value — or using it when the true value is near zero, where the ratio blows up meaninglessly." },
      { q: "People also search 'relative error formula' — is that this?", a: "Yes. The relative error formula |measured − true| ÷ |true| is exactly what this tool evaluates." },
    ],
  },

  "remainder-theorem-calculator": {
    description: `Dividing the polynomial x³ − 2x² + 5x − 1 by (x − 3) the long way is tedious — but the Remainder Theorem hands you the remainder in one substitution: evaluate the polynomial at x = 3. Computing 27 − 18 + 15 − 1 gives 23, so the remainder is 23, no long division required. The theorem states that dividing P(x) by (x − a) leaves remainder P(a), which turns every polynomial division remainder into a simple evaluation.\n\nIts famous corollary is the Factor Theorem: if P(a) = 0, then (x − a) is a factor — the engine behind root-finding, from classroom factoring to the rational root theorem to computer algebra systems. Engineers use it to test candidate roots of characteristic equations without full division. This calculator multiplies out one evaluation term at a time to help verify your substitution: for P(3) above, type the x³ coefficient's contribution — 1 × 27 = 27, so enter 27 — in the Variable A box, and type 1 in the Variable B box. The Result box passes 27 through; repeat for each term (coefficient × power of a), then add the terms on paper: 27 − 18 + 15 − 1 = 23, the remainder. If the total is 0, you have found a factor.`,
    howToSteps: [
      "Identify the divisor's root a — for division by (x − 3), a = 3.",
      "Write each term of P(x) evaluated at a — for x³ − 2x² + 5x − 1 at x = 3: 27, −18, 15, −1.",
      "Type one term's value in the Variable A box — enter 27 for the first term.",
      "Type 1 in the Variable B box and read the Result to confirm the term passes through.",
      "Repeat for each remaining term, then add all the Results on paper: 27 − 18 + 15 − 1 = 23.",
      "Interpret: 23 is the remainder. A total of 0 would mean (x − 3) is a factor.",
    ],
    faqs: [
      { q: "What is the Remainder Theorem in plain words?", a: "Dividing a polynomial P(x) by (x − a) leaves remainder P(a) — just plug a into the polynomial. No long division needed." },
      { q: "When would I use the Remainder Theorem?", a: "Finding division remainders quickly, testing whether (x − a) is a factor, hunting polynomial roots, or checking synthetic division work." },
      { q: "What is the Factor Theorem?", a: "The Remainder Theorem's corollary: if P(a) = 0, the remainder is zero, so (x − a) divides P(x) evenly — it is a factor." },
      { q: "What is the most common Remainder Theorem mistake?", a: "Sign errors on a. Dividing by (x + 3) means a = −3, not 3 — the root is what makes the divisor zero." },
      { q: "People also search 'remainder theorem examples' — is that this?", a: "This tool covers the concept; a classic example is P(x) = x³ − 2x² + 5x − 1 divided by (x − 3), leaving remainder P(3) = 23." },
    ],
  },

  "remainder-calculator": {
    description: `Share 100 cookies among 12 kids and each gets 8, with 4 left over — that leftover 4 is the remainder, the amount left when one number does not divide another evenly. Formally, dividing a by b gives a quotient q and remainder r with a = b × q + r, where r is smaller than b. So 100 = 12 × 8 + 4. Programmers meet remainders as the modulo operator (100 % 12 = 4), which powers clock arithmetic (15:00 + 10 hours wraps to 1:00), even/odd tests (n % 2), and hash functions.\n\nThe remainder also settles everyday splits: 7 friends splitting a $50 bill evenly pay $7 each with $1 left for the tip jar, and a 365-day year leaves 1 leftover day against exact 52-week scheduling (hence leap years' corrections). Note the sign convention: most tools return a remainder with the dividend's sign, so −100 ÷ 12 gives −4 in many programming languages but 8 in pure math. This calculator isolates the division step: type the dividend in the Variable A box (100) and 1 ÷ divisor in the Variable B box (1 ÷ 12 ≈ 0.083333). The Result box shows about 8.3333; the whole part 8 is the quotient, and the fractional .3333 × 12 = 4 is the remainder.`,
    howToSteps: [
      "Type the number being divided (the dividend) in the Variable A box — for example, 100.",
      "Type 1 ÷ divisor in the Variable B box — for 12, that is 1 ÷ 12 ≈ 0.083333.",
      "Read the Result box: about 8.3333.",
      "Take the whole-number part as the quotient: 8.",
      "Multiply the fractional part by the divisor: 0.3333 × 12 = 4, the remainder.",
      "Verify with the formula: 12 × 8 + 4 = 100 checks out.",
    ],
    faqs: [
      { q: "What is a remainder in plain words?", a: "What is left over after division: in 100 ÷ 12, the quotient is 8 and the remainder is 4, since 12 × 8 + 4 = 100." },
      { q: "When would I compute a remainder?", a: "Splitting items evenly, clock and calendar arithmetic, testing even vs. odd, or programming with the modulo operator." },
      { q: "What is the modulo operator?", a: "The programmer's remainder: a % b returns the leftover of a ÷ b. 100 % 12 = 4, and 7 % 2 = 1 (odd)." },
      { q: "What is the most common remainder mistake?", a: "Confusing the decimal quotient with the remainder. 100 ÷ 12 = 8.333 is not 'remainder 0.333' — the remainder is the whole number 4." },
      { q: "People also search 'modulo calculator' — is that this?", a: "Yes. 'Modulo' is the formal name for remainder arithmetic: a mod b is the leftover of a ÷ b." },
    ],
  },
};
