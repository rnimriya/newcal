import type { SEOContent } from "@/lib/seo/content";

export const BATCH_15: Record<string, Partial<SEOContent>> = {
  "absolute-difference": {
    description: `The grocery receipt says $96 last month and $118 this month — how far apart are those numbers, really? The absolute difference |a − b| answers that without letting the sign distract you. Distance on the number line doesn't care which value you measured first: |118 − 96| and |96 − 118| both equal 22. Algebra I students meet it as the first practical use of absolute value, and it quietly powers everything from golf handicaps (your 84 against a friend's 79 is a 5-stroke gap) to the "point difference" column in a fantasy football league.

Raw gaps can mislead, though. A $22 jump matters a lot on a $96 grocery bill and almost nothing on a $2,400 rent payment, which is why this calculator also reports the Relative Difference (%) — the gap measured against the size of the numbers themselves. The A : B ratio box reduces your pair to its simplest fraction form: 15 and 9 become 5:3, the same language recipes, paint mixes, and scale drawings use. Between the three outputs you get the gap, the context, and the proportion in one pass.`,
    howToSteps: [
      "Type your first number in the Value A box — for example, 118 for this month's grocery bill.",
      "Type the second number in the Value B box — for example, 96 for last month's.",
      "Read the |A - B| box for the absolute difference: 22.",
      "Check the Relative Difference (%) box to see the gap as a share of the numbers' size.",
      "Read the A : B ratio (simplified) box for the reduced proportion — handy for recipes and mixing ratios.",
      "Swap the two values and confirm the answers don't change: absolute difference has no direction.",
    ],
    faqs: [
      { q: "What is absolute difference in plain words?", a: "It is how far apart two numbers are on the number line, ignoring which is bigger. |a − b| is always zero or positive — |7 − 12| = 5 and |12 − 7| = 5." },
      { q: "How is absolute difference different from relative difference?", a: "Absolute difference is the raw gap (22 dollars). Relative difference divides that gap by the size of the numbers, telling you whether 22 is a big deal or a rounding error. Both appear in this calculator's outputs." },
      { q: "When should I use absolute difference instead of a percentage?", a: "Use the absolute gap when the unit itself matters — dollars saved, strokes in golf, points in a game. Use the percentage when you're comparing changes across different-sized things, like a sale on a $30 shirt versus a $3,000 laptop." },
      { q: "What does the A : B ratio box do?", a: "It reduces your two values to their simplest fraction form. 15 and 9 become 5:3, the same ratio a paint store would write on a mixing can." },
      { q: "How do I find the absolute difference between two negative numbers?", a: "The same way: subtract, then drop the sign. |−8 − (−3)| = |−5| = 5. The bars mean 'distance,' and distance is never negative." },
      { q: "Is this the same as an 'absolute value difference calculator'?", a: "Yes — 'absolute value difference,' 'absolute difference,' and '|a − b| calculator' all mean this tool. Some students also search for 'distance between two numbers calculator.'" },
    ],
  },

  "algebra-calculator": {
    description: `SAT math rarely asks you to admire a formula — it asks you to plug numbers into one and survive the arithmetic. Evaluating an algebraic expression like 2x + 3y at x = 4 and y = −1 means tracking signs, order of operations, and a substitution that fits on one line but breaks in three places if you're careless: 2(4) + 3(−1) = 8 − 3 = 5. The concept is simple and the execution is where points are won or lost, which is exactly why students check their hand work against a tool like this before a test.

This calculator evaluates a two-variable expression for you: give it the first variable's value and the second variable's value, and it returns the result instantly. Use it the way a tutor would want you to — solve on paper first, then confirm. That habit catches the classic slips: multiplying before adding (PEMDAS violations), mishandling a negative substitution like 3(−1), and dropping a term entirely. Once the numbers check out, you can change one input and watch the result move, building the intuition that expressions are machines: feed them inputs, get outputs, and the graph of those outputs is the line or curve you study next.`,
    howToSteps: [
      "Work the expression on paper first — for 2x + 3y with x = 4 and y = −1, substitute to get 2(4) + 3(−1).",
      "Type the first variable's value in the Variable A box — for example, 4.",
      "Type the second variable's value in the Variable B box — for example, −1.",
      "Read the Result box and compare it against your paper answer (5 here) to catch arithmetic slips.",
      "Change one input — try y = 2 — and confirm the new result matches a quick mental recompute.",
      "Use the pattern to preview SAT-style questions: if the result jumps by a fixed amount each time x grows by 1, the coefficient is doing its job.",
    ],
    faqs: [
      { q: "What does it mean to evaluate an algebraic expression?", a: "It means replacing each variable with a number and simplifying. Evaluating 2x + 3y at x = 4, y = −1 gives 2(4) + 3(−1) = 5. This calculator does that substitution and arithmetic for two variables." },
      { q: "How do I avoid sign errors when substituting negatives?", a: "Always wrap negative values in parentheses on paper — 3(−1), not 3−1 — and follow order of operations: multiply before you add or subtract. The calculator is a good check for exactly this step." },
      { q: "Is this useful for SAT prep?", a: "Yes. The SAT's Heart of Algebra section is largely evaluating and manipulating linear expressions. Checking your practice answers here builds speed and catches the PEMDAS slips that cost points under time pressure." },
      { q: "What is the difference between evaluating and solving?", a: "Evaluating plugs numbers into an expression and simplifies to a value. Solving finds the unknown number that makes an equation true. This tool evaluates; a solver finds the x that satisfies an equation." },
      { q: "Why does my answer change when I swap the inputs?", a: "Because the expression treats the two variables differently — 2x + 3y is not symmetric. Swapping is a legitimate new problem, not a check, so make sure each value sits in the right box." },
    ],
  },

  "algebraic-formula-calculator": {
    description: `The quadratic formula, the distance formula, the simple-interest formula — Algebra II is basically a museum of formulas, and this calculator is the docent that walks you through any of them. A formula is just an expression with a job: the distance formula d = √((x₂−x₁)² + (y₂−y₁)²) turns two map coordinates into the miles between two towns on a road trip. The skill being tested is never the formula itself; it's substituting correctly, keeping units straight, and not losing a negative sign somewhere in the third line of arithmetic.

This calculator takes the two variable values a formula needs and evaluates the expression for you. Enter the first quantity in Variable A and the second in Variable B, then read the Result. The workflow mirrors how engineers and nurses actually use formulas at work: identify the inputs, plug them in, sanity-check the output. Before trusting the number, run the classic checks — does doubling an input double the output (linear behavior), does a zero input give a sensible answer, and do the units of the result match what the formula promises? Formulas are only as reliable as the substitution, and a thirty-second check here beats re-deriving everything later.`,
    howToSteps: [
      "Write the formula on paper and circle its two inputs — for simple interest I = Prt at 5% for 3 years on $2,000, the inputs are the values you substitute.",
      "Type the first input value in the Variable A box — for example, 2000.",
      "Type the second input value in the Variable B box — for example, 0.05 for the rate.",
      "Read the Result box for the evaluated formula value.",
      "Sanity-check the answer: does the size make sense, and do the units match what the formula should produce?",
      "Test an edge case — set one input to zero — and confirm the result behaves the way the formula says it should.",
    ],
    faqs: [
      { q: "What is an algebraic formula?", a: "An equation that expresses a relationship between quantities, like A = πr² for circle area or I = Prt for simple interest. You substitute known values for the variables and the formula computes the unknown." },
      { q: "How do I know which numbers go in which box?", a: "Match each input to its role in the formula. If your formula multiplies the first value by the second, it doesn't matter which box holds which — but if one is squared or sits in a denominator, place them carefully." },
      { q: "What are the most common formula mistakes?", a: "Three classics: forgetting to convert a percent to a decimal (use 0.05, not 5), mixing units (feet with inches), and squaring only part of a term. This calculator removes the arithmetic risk so you can focus on setup." },
      { q: "Can this help with physics formulas?", a: "Yes — physics is applied algebra. Formulas like d = vt (distance = speed × time) or F = ma evaluate exactly the same way: substitute two knowns, read the result." },
      { q: "People also search 'formula solver calculator' — is that this?", a: "Close. A formula solver rearranges a formula to isolate a variable; this calculator evaluates a formula once you supply its inputs. For checking homework substitution, evaluation is what you want." },
    ],
  },

  "arrhenius-equation-calculator": {
    description: `Leave a bottle of hydrogen peroxide in a hot garage and it fizzes out twice as fast as in the cool basement — heat speeds up chemistry, and in 1889 Svante Arrhenius wrote down exactly how much. His equation, k = A·e^(−Ea/RT), says a reaction's rate constant k depends on the activation energy Ea, the temperature T, and a pre-exponential factor A. The exponential is the dramatic part: a small rise in temperature makes the exponent less negative, and the rate climbs steeply. Roughly speaking, many reactions double their speed every 18°F (10°C) — which is why food spoils faster on the counter, why your car's battery struggles in a Minnesota January, and why chemists refrigerate anything reactive.

AP Chemistry students meet the Arrhenius equation when they study kinetics, usually in its two-temperature form: comparing rates at two temperatures lets you solve for the activation energy, the energy hill molecules must climb before they can react. This calculator evaluates the pieces: enter your two known quantities and read the computed rate relationship. The concept to carry away is the exponential sensitivity — linear thinking ("a little warmer, a little faster") badly underestimates what heat does to a reaction, and this equation is the correction.`,
    howToSteps: [
      "Identify the two quantities your problem gives you — commonly a rate ratio and the two temperatures, or the activation energy and one temperature.",
      "Convert every temperature to kelvin first (add 273.15 to Celsius) — the equation only works with absolute temperature.",
      "Type the first value in the Variable A box — for example, the known rate constant.",
      "Type the second value in the Variable B box — for example, the temperature in kelvin.",
      "Read the Result box for the computed Arrhenius relationship.",
      "Double-check that higher temperature gives a higher rate — if it doesn't, you likely entered Celsius instead of kelvin.",
    ],
    faqs: [
      { q: "What is the Arrhenius equation in plain words?", a: "k = A·e^(−Ea/RT). The rate constant k grows exponentially as temperature T rises, because more molecules have enough energy (the activation energy Ea) to react. A is a frequency factor tied to how often molecules collide." },
      { q: "Why must temperature be in kelvin?", a: "Because the equation uses absolute temperature — T sits in an exponent's denominator, so 0°C (273 K) and 0 K would give wildly different, wrong answers. Always add 273.15 to Celsius first." },
      { q: "What is activation energy, intuitively?", a: "The energy hill molecules must climb before a reaction can happen. A catalyst works by lowering that hill — same temperature, faster reaction — which is how catalytic converters clean exhaust at ordinary engine temperatures." },
      { q: "Why do reaction rates roughly double every 10°C?", a: "It's the exponential in action: e^(−Ea/RT) is extremely sensitive to T. The exact factor depends on the activation energy, but for typical Ea values near room temperature, a 10°C (18°F) rise roughly doubles the rate." },
      { q: "Where does the Arrhenius equation show up outside chemistry class?", a: "Food science (spoilage and shelf life), materials aging, battery performance in heat and cold, and even the rule of thumb that refrigerating leftovers promptly matters — all of it is Arrhenius behavior." },
    ],
  },

  "balance-equation-calculator": {
    description: `Atoms are stubborn bookkeepers — a chemical equation that creates an atom out of thin air is wrong, period. That single rule, conservation of mass, is what balancing a chemical equation enforces: the number of atoms of each element must match on both sides of the arrow. The classic first example is water formation: H₂ + O₂ → H₂O has two oxygens on the left and one on the right, so students adjust the coefficients — never the subscripts — to reach 2H₂ + O₂ → 2H₂O. Change a subscript and you've invented a new chemical; change a coefficient and you've just ordered more molecules.

Balancing is the gateway skill of stoichiometry, the part of chemistry that answers practical questions like how many pounds of fertilizer a cornfield needs or how much CO₂ a gallon of gasoline produces. Get the coefficients right and every downstream calculation — moles, grams, yields — works; get them wrong and nothing does. This calculator checks your balanced equation: enter your two key values (such as the coefficients you're testing) and confirm the result. The habit that separates A students here is systematic: balance metals first, then nonmetals, then hydrogen and oxygen last, and finish by recounting every atom on both sides.`,
    howToSteps: [
      "Write the unbalanced equation on paper — for example, H₂ + O₂ → H₂O — and count atoms of each element on both sides.",
      "Adjust coefficients only (never subscripts) until each element's count matches left and right.",
      "Type your first coefficient value in the Variable A box.",
      "Type your second coefficient value in the Variable B box.",
      "Read the Result box to confirm the balanced relationship holds.",
      "Do a final recount of every element on both sides — metals first, then nonmetals, hydrogen and oxygen last.",
    ],
    faqs: [
      { q: "What does it mean to balance a chemical equation?", a: "It means choosing coefficients so each element has the same atom count on both sides of the arrow. Balanced: 2H₂ + O₂ → 2H₂O. Unbalanced: H₂ + O₂ → H₂O (oxygen doesn't match)." },
      { q: "Why can't I change the subscripts to balance an equation?", a: "Subscripts define the chemical itself — H₂O is water, but H₂O₂ is hydrogen peroxide. Changing a subscript invents a different substance; only coefficients (how many molecules) may change." },
      { q: "What is the easiest order for balancing?", a: "Balance metals first, then nonmetals other than hydrogen and oxygen, then hydrogen, then oxygen last. Oxygen and hydrogen appear in many compounds, so saving them for last avoids redoing work." },
      { q: "Why does balancing matter in real life?", a: "Every stoichiometry calculation — fertilizer dosing, airbag chemistry, baking-soda-and-vinegar volcanoes — starts from a balanced equation. Wrong coefficients mean wrong amounts of every ingredient." },
      { q: "People also search 'balancing equations calculator' — is that this tool?", a: "Yes. 'Balance chemical equation calculator,' 'balancing equations calculator,' and this page's name all refer to checking that atom counts match on both sides of a reaction." },
    ],
  },

  "boolean-algebra-calculator": {
    description: `Your phone's processor makes billions of decisions every second, and every one of them is built from three tiny words: AND, OR, and NOT. Boolean algebra is the mathematics of true-or-false logic — variables that hold only 1 (true) or 0 (false) — and it is the native language of digital circuits, search engines, and every if-statement ever written. AND outputs 1 only when both inputs are 1; OR outputs 1 when either input is 1; NOT flips its single input. Combinations of these gates build adders, memory, and ultimately the CPU running this page.

Computer science students meet Boolean algebra in discrete math and digital logic courses, usually via truth tables: the exhaustive list of input combinations and their outputs. De Morgan's laws — NOT(A AND B) equals (NOT A) OR (NOT B) — are the simplification rules that let engineers shrink circuits, and the same laws quietly power advanced Google searches, where quotes and minus signs are Boolean operators on the web. This calculator evaluates a two-input Boolean operation: type 1 or 0 for each input and read the result. Build the full truth table by running all four input pairs (00, 01, 10, 11) and you'll have the complete behavior of the gate in under a minute.`,
    howToSteps: [
      "Decide which operation you're testing — AND, OR, or the combination your homework specifies.",
      "Type the first input (1 for true, 0 for false) in the Variable A box.",
      "Type the second input (1 for true, 0 for false) in the Variable B box.",
      "Read the Result box for the gate's output on that input pair.",
      "Repeat for all four combinations — 00, 01, 10, 11 — to build the complete truth table.",
      "Simplify with De Morgan's laws before re-testing: NOT(A AND B) is the same as (NOT A) OR (NOT B).",
    ],
    faqs: [
      { q: "What is Boolean algebra in plain words?", a: "Math with only two values, true (1) and false (0), combined by AND, OR, and NOT. It describes how digital circuits and logical conditions behave — every computer program's if-statements are Boolean algebra in action." },
      { q: "What is a truth table?", a: "A table listing every possible input combination and the resulting output. A two-input gate has four rows (00, 01, 10, 11); it fully specifies what the gate does, with no ambiguity." },
      { q: "What are De Morgan's laws?", a: "Two simplification rules: NOT(A AND B) = (NOT A) OR (NOT B), and NOT(A OR B) = (NOT A) AND (NOT B). Engineers use them to redesign circuits with fewer gates." },
      { q: "Where is Boolean algebra used outside circuits?", a: "Database queries (AND/OR filters), spreadsheet logic, and web search operators. Typing site:example.com −term into Google is Boolean algebra: include AND, exclude NOT." },
      { q: "What is the difference between AND and OR?", a: "AND needs both inputs true to output true — like needing both a key AND a code to open a safe. OR needs only one — like a room with two light switches where either one turns the light on." },
    ],
  },

  "circle-equation-calculator": {
    description: `A city planner draws a delivery zone as a perfect 5-mile ring around a warehouse — on graph paper, that ring is the circle equation in action. Every circle on the coordinate plane follows (x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius. The form is beautifully honest: it says "every point exactly r units from the center," which is the very definition of a circle, translated into algebra. GPS apps carve up the map this way, architects lay out roundabouts with it, and video game programmers use it for collision detection — is the player within r pixels of the explosion?

Students usually meet this equation right after the distance formula, and the connection is no accident: the circle equation is the distance formula with the distance fixed at r. The standard traps are the sign flip (the equation says x − h, so a center at (3, −2) appears as (x − 3)² + (y + 2)²) and forgetting to square-root the constant to find r. This calculator evaluates the equation's pieces: enter your two known values and read the result, then confirm the geometry — plug the center point in and you should get zero, plug a point on the rim and you should get r².`,
    howToSteps: [
      "Identify the circle's center (h, k) and radius r from your problem — for a 5-mile zone around (3, −2), h = 3, k = −2, r = 5.",
      "Type the first known value in the Variable A box — for example, the x-coordinate of a test point.",
      "Type the second known value in the Variable B box — for example, the y-coordinate of that point.",
      "Read the Result box and compare it against r² (25 here): a match means the point sits on the circle.",
      "Test the center itself as a sanity check — the result should come out to zero.",
      "Watch the sign flip: a center at x = 3 shows up in the equation as (x − 3), not (x + 3).",
    ],
    faqs: [
      { q: "What is the standard form of a circle's equation?", a: "(x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius. A circle centered at the origin with radius 4 is simply x² + y² = 16." },
      { q: "How do I find the center and radius from the equation?", a: "Read them off the standard form: (x − 3)² + (y + 2)² = 25 has center (3, −2) — note the sign flip — and radius √25 = 5. If the equation isn't in standard form, complete the square first." },
      { q: "Why does the sign flip inside the parentheses?", a: "Because the formula measures (x − h): the distance from x to the center coordinate h. So a center at h = 3 produces (x − 3). It feels backward until you think of it as a distance." },
      { q: "How is the circle equation related to the distance formula?", a: "It's the distance formula with the distance pinned to r. Setting √((x−h)² + (y−k)²) equal to r and squaring both sides gives the circle equation directly." },
      { q: "What if the right side is zero or negative?", a: "Zero gives a single point (a circle with no radius — just the center). A negative right side has no real points at all, since a squared distance can't be negative." },
    ],
  },

  "combining-like-terms-calculator": {
    description: `Nobody sorts a toolbox by throwing screwdrivers in with the hammers — and algebra asks for the same tidiness. Combining like terms means gathering the pieces of an expression that share the same variable part and merging their coefficients: 4x + 7 − 2x + 3 becomes (4x − 2x) + (7 + 3) = 2x + 10. The variable parts never change; you're only doing arithmetic on the numbers in front of them. It is the single most-used simplification move in algebra, the step that turns a messy line of a homework problem into something you can actually solve.

The rule students trip over is what counts as "like." 3x and 5x are like terms; 3x and 3x² are not — different exponents mean different families, the way quarters and dimes are both coins but never the same pile. Constants are all like terms with each other (7 and 3 merge freely). This calculator checks your combining work: enter the two coefficients you're merging and confirm the result. Do it term by term rather than all at once — underline the x-terms in one color and the constants in another, combine each group separately, and the error rate on multi-step equations drops dramatically.`,
    howToSteps: [
      "Rewrite the expression on paper and underline like terms — circle the x-terms together and the constants together, as in 4x + 7 − 2x + 3.",
      "Type the first coefficient you're combining in the Variable A box — for example, 4 for the first x-term.",
      "Type the second coefficient in the Variable B box — for example, −2 for the second x-term.",
      "Read the Result box for the combined coefficient: 2, giving the term 2x.",
      "Repeat for the constants (7 and 3 give 10), then assemble the simplified expression: 2x + 10.",
      "Verify no term was left behind: every term in the original should appear in exactly one group.",
    ],
    faqs: [
      { q: "What are like terms?", a: "Terms with identical variable parts — same letters raised to the same powers. 4x and −2x are like terms; 4x and 4x² are not, because the exponents differ. All plain numbers (constants) are like terms with each other." },
      { q: "Can I combine x² and x terms?", a: "No. x² and x belong to different families, like square feet versus feet — adding them would be a category error. You can only add or subtract terms whose variable parts match exactly." },
      { q: "What is the most common mistake when combining like terms?", a: "Merging unlike terms, especially x with x², or forgetting that a minus sign belongs to the term after it: in 4x + 7 − 2x, the second x-term is −2x, not 2x." },
      { q: "Why does combining like terms matter?", a: "It is the cleanup step before solving. You cannot solve 4x + 7 − 2x + 3 = 21 until it becomes 2x + 10 = 21 — nearly every multi-step equation starts here." },
      { q: "Is 'collecting like terms' the same thing?", a: "Yes. 'Combining like terms,' 'collecting like terms,' and 'simplifying by combining' all mean grouping identical variable parts and adding their coefficients." },
    ],
  },

  "cubic-equation-calculator": {
    description: `Quadratics get all the glory, but the real world is full of cubes — the volume of a shipping box, the surge of a population, the bend of a bridge beam under load. A cubic equation ax³ + bx² + cx + d = 0 can have up to three real roots, and its graph always does something a parabola never does: it keeps going, falling forever in one direction and rising forever in the other, which guarantees at least one real root no matter the coefficients. Engineers sizing a cubic storage tank or economists modeling a cost curve with diminishing returns both live in cubic territory.

You rarely solve cubics with a single clean formula the way quadratics get the quadratic formula — Cardano's method exists but is a beast, so working mathematicians lean on structure instead. This calculator analyzes that structure: enter the coefficients a, b, c, d and a test x-value, and read off f(x) at that point, the discriminant information, and Vieta's relationships — the sum of the roots equals −b/a and the product equals −d/a. Those symmetric checks are gold for homework: for x³ − 6x² + 11x − 6 = 0, the roots 1, 2, 3 sum to 6 (−b/a) and multiply to 6 (−d/a with the sign flip). If your candidate roots fail those checks, they're wrong before you even substitute.`,
    howToSteps: [
      "Write your cubic in standard form ax³ + bx² + cx + d = 0 — for x³ − 6x² + 11x − 6 = 0, the coefficients are 1, −6, 11, −6.",
      "Type the coefficient a (x³ coefficient) in the a box, then b, c, and d in their labeled boxes.",
      "Type a test x value in the Test x value box — try x = 1 for the example above.",
      "Read the f(x) at test value box: 0 confirms x = 1 is a root.",
      "Check the Sum of roots (-b/a) and Product of roots (-d/a) boxes against any roots you've found — 1 + 2 + 3 = 6 and 1 × 2 × 3 = 6.",
      "Use the discriminant readout to predict the root pattern: three real roots, or one real plus a complex pair.",
    ],
    faqs: [
      { q: "How many roots can a cubic equation have?", a: "Up to three real roots, counting multiplicity. Because a cubic's ends head in opposite directions (down on the left, up on the right for positive a), it must cross the x-axis at least once — so there's always at least one real root." },
      { q: "What does the discriminant of a cubic tell me?", a: "It classifies the roots: a positive discriminant means three distinct real roots, zero means a repeated root, and negative means one real root plus a complex conjugate pair." },
      { q: "What are Vieta's formulas for a cubic?", a: "The roots r₁, r₂, r₃ satisfy: sum = −b/a, pairwise sum = c/a, product = −d/a. They're a fast error-check — if your found roots don't satisfy all three, recheck your work." },
      { q: "Why is there no simple 'cubic formula' like the quadratic formula?", a: "There is — Cardano's formula — but it involves nested cube roots of complex numbers and is miserable to use by hand. Factoring by grouping, the Rational Root Theorem, and synthetic division are the practical tools." },
      { q: "How do I find the first root to start factoring?", a: "Try the Rational Root Theorem: test factors of d divided by factors of a. For x³ − 6x² + 11x − 6, testing ±1, ±2, ±3, ±6 quickly finds x = 1, and then you divide out (x − 1) to get a quadratic." },
    ],
  },

  "difference-of-two-squares": {
    description: `Some patterns in algebra are worth memorizing the way a carpenter memorizes a speed square — and a² − b² = (a + b)(a − b) is the most-used one in the shop. Whenever you spot one perfect square minus another, the factorization writes itself: x² − 9 becomes (x + 3)(x − 3), and 49 − 4y² becomes (7 + 2y)(7 − 2y). It runs in reverse too, which is the real power move: (x + 5)(x − 5) multiplies out to x² − 25 without a single FOIL step, the middle terms always canceling each other out.

The pattern hides in plain sight on tests. A fraction like (x² − 16)/(x − 4) looks unsimplifiable until the numerator factors into (x + 4)(x − 4) and the whole thing collapses to x + 4. Mental-math wizards use it for arithmetic as well: 37² − 33² is ugly to compute directly, but (37 + 33)(37 − 33) = 70 × 4 = 280 in seconds. This calculator verifies the factorization: enter a and b, and it shows a², b², the difference, both factors, and the product check that multiplies them back together — the full round trip from expression to factors and home again.`,
    howToSteps: [
      "Confirm your expression is one square minus another — x² − 9 qualifies; x² + 9 does not.",
      "Type the first value a in the a (first value) box — for 7² − 3², enter 7; for x² − 9, enter 3, the square root of the first term.",
      "Type the second value b in the b (second value) box — for 7² − 3², enter 3.",
      "Read the Factor 1: (a+b) and Factor 2: (a-b) boxes — (10) and (4) here.",
      "Check the Product check box: (a+b)(a−b) should equal the a² - b² box exactly (40 = 40).",
      "Apply the pattern to algebra: for x² − 16, the factors are (x + 4)(x − 4).",
    ],
    faqs: [
      { q: "What is the difference of two squares formula?", a: "a² − b² = (a + b)(a − b). One square minus another always factors into the sum times the difference of the square roots. Example: x² − 25 = (x + 5)(x − 5)." },
      { q: "Does the pattern work for a sum of squares?", a: "No — a² + b² does not factor over the real numbers. The middle-term cancellation that makes the pattern work requires a minus sign between the squares." },
      { q: "How do I spot a difference of squares on a test?", a: "Look for exactly two terms, a minus sign, and both terms perfect squares: 4x² − 9, 1 − 25y², x⁴ − 16. Then take square roots and write (sum)(difference)." },
      { q: "What is the mental math trick with this pattern?", a: "Compute differences of squares without squaring: 43² − 37² = (43+37)(43−37) = 80 × 6 = 480. It's far faster than squaring two large numbers." },
      { q: "Can the terms have coefficients, like 4x² − 9?", a: "Yes — take the square root of each piece. √4x² = 2x and √9 = 3, so 4x² − 9 = (2x + 3)(2x − 3)." },
    ],
  },

  "differential-equation-calculator": {
    description: `A rumor spreads through a high school, a cup of coffee cools on the desk, a savings account compounds — all three are stories about how fast something changes, and differential equations are the language those stories are written in. A differential equation relates a function to its own rate of change: dy/dx = ky says "the growth rate is proportional to the current size," which is exactly how bacteria multiply and how continuously compounded interest accrues. Calculus students spend a semester learning that the derivative describes change; differential equations turn that insight into models of the world.

The first family students master is separable equations, where you can get all the y's on one side and all the x's on the other, then integrate both sides. The coffee-cooling example — Newton's law of cooling — and the unlimited population model both solve this way, producing the exponential functions that dominate science. This calculator evaluates the building blocks: enter your two quantities (a rate and a current value, for instance) and read the computed result, which you can use to check each step of a separation-of-variables solution. The conceptual payoff is recognizing the pattern: whenever a problem says "the rate of change is proportional to," you're looking at an exponential in disguise, and the differential equation is just that sentence in symbols.`,
    howToSteps: [
      "Translate the word problem into an equation — 'grows proportionally to its size' becomes dy/dx = ky.",
      "Separate the variables on paper: get all y-terms with dy on one side and all x-terms with dx on the other.",
      "Type the first quantity (for example, the growth rate constant) in the Variable A box.",
      "Type the second quantity (for example, the current value) in the Variable B box.",
      "Read the Result box to check the rate computation at your current values.",
      "Integrate both sides on paper, solve for y, and use your initial condition to pin down the constant.",
    ],
    faqs: [
      { q: "What is a differential equation in plain words?", a: "An equation that involves a function and its derivatives — it describes how something changes rather than what it is. dy/dx = 2x is a differential equation; its solutions are the functions y = x² + C." },
      { q: "What does 'proportional to its size' produce?", a: "Exponential growth or decay. dy/dx = ky solves to y = Ce^(kt) — the math behind bacterial colonies, radioactive decay, and continuously compounded interest." },
      { q: "What is Newton's law of cooling?", a: "The temperature difference between an object and its surroundings shrinks exponentially: dT/dt = −k(T − T_room). It's why hot coffee cools fast at first, then ever more slowly." },
      { q: "What is the constant C in the solution?", a: "The constant of integration — differential equations have families of solutions, and C picks the one matching your starting conditions. A $1,000 initial deposit versus $5,000 gives different C's in the same interest model." },
      { q: "Where do differential equations show up in real life?", a: "Epidemic models, drug dosing (how a medicine clears the bloodstream), spring and pendulum motion in engineering, and option pricing in finance — anywhere change depends on the current state." },
    ],
  },

  "dot-product-calculator": {
    description: `Push a shopping cart at an angle and only part of your effort moves it forward — the rest presses uselessly sideways into the handle. The dot product measures exactly that: how much of one vector points along another. Multiply matching components and add: (1, 2, 3) · (4, 5, 6) = 4 + 10 + 18 = 32. The result is a single number, not a vector, and its sign tells a story — positive means the vectors roughly agree in direction, zero means they're perpendicular, negative means they oppose each other.

The geometric payoff is the angle formula: A · B = |A||B|cos θ, which turns the dot product into an angle-finder. Game developers use it to check whether an enemy is in front of the player (positive dot product with the facing direction) or behind; physicists use it for work, W = F · d, where only the force along the displacement counts. This calculator does the full job: enter the x, y, z components of Vector A and Vector B, and read off the dot product, both magnitudes, and the angle between them in radians and degrees. The worked example [1,2,3] · [4,5,6] and the perpendicular-vectors preset give you instant reference points for what "aligned" and "square" look like numerically.`,
    howToSteps: [
      "Type the x, y, and z components of your first vector in the Vector A — x, Vector A — y, and Vector A — z boxes — try 1, 2, 3.",
      "Type the second vector's components in the Vector B — x, Vector B — y, and Vector B — z boxes — try 4, 5, 6.",
      "Read the Dot Product (A·B) box: 32 for this example.",
      "Check the |A| (magnitude of A) and |B| (magnitude of B) boxes to see each vector's length.",
      "Read the Angle (degrees) box for the angle between the vectors — about 12.9° here, so they're closely aligned.",
      "Try the perpendicular preset to confirm the pattern: perpendicular vectors always give a dot product of zero.",
    ],
    faqs: [
      { q: "What is the dot product in plain words?", a: "Multiply matching components of two vectors and add the results. (1, 2, 3) · (4, 5, 6) = 4 + 10 + 18 = 32. It measures how much the vectors point in the same direction." },
      { q: "What does a dot product of zero mean?", a: "The vectors are perpendicular (at 90°). That's why the perpendicular-vectors example is so useful — zero dot product is the algebraic test for a right angle." },
      { q: "How do I find the angle between two vectors?", a: "Use cos θ = (A · B) / (|A||B|). This calculator applies that formula and reports the angle in both radians and degrees." },
      { q: "Is the dot product a vector or a number?", a: "A number (a scalar). That's the key difference from the cross product, which returns a new vector perpendicular to both inputs." },
      { q: "Where is the dot product used in real life?", a: "Physics work calculations (W = F · d), lighting in video games (how directly a surface faces a light), and machine-learning similarity scores — all dot products." },
    ],
  },

  "equation-system-calculator": {
    description: `Two phone plans, two pizza deals, two job offers — life keeps handing you pairs of competing options, and a system of equations is the math of choosing between them. A 2×2 system is two linear equations in two unknowns, like 2x + 3y = 8 and x − y = 1, and its solution is the single point where both statements are true at once — the break-even point where the two phone plans cost exactly the same. Graphically, you're finding where two lines cross; algebraically, you're hunting the one (x, y) pair that satisfies everything.

Three methods dominate classrooms: graphing (fast but imprecise), substitution (solve one equation for a variable, plug into the other), and elimination (add the equations to cancel a variable). Elimination is the workhorse — multiply one equation so the x-coefficients are opposites, add, and x vanishes, leaving a one-variable equation you already know how to solve. This calculator checks your two-equation work: enter the key values from your system and confirm the computed result matches the (x, y) you found by hand. The habit that prevents most errors is the plug-back: substitute your answer into both original equations, not just one.`,
    howToSteps: [
      "Solve the system on paper first — try elimination: for 2x + 3y = 8 and x − y = 1, double the second equation and add to cancel x.",
      "Type the first key value from your system in the Variable A box — for example, a coefficient you're working with.",
      "Type the second key value in the Variable B box.",
      "Read the Result box and compare it with your hand-computed answer.",
      "Plug your (x, y) back into both original equations — a true solution satisfies each one.",
      "If the check fails, re-examine the elimination step: sign errors when adding equations are the usual culprit.",
    ],
    faqs: [
      { q: "What is a system of equations?", a: "Two or more equations sharing the same variables. A 2×2 system like 2x + 3y = 8 and x − y = 1 asks for the (x, y) pair that makes both equations true simultaneously." },
      { q: "Which method is best: graphing, substitution, or elimination?", a: "Graphing builds intuition but is imprecise. Substitution shines when one variable is already isolated. Elimination is usually fastest for standard-form systems — it cancels a variable in one addition." },
      { q: "What if the lines are parallel?", a: "Then there's no solution — the equations contradict each other (like x + y = 2 and x + y = 5). Algebraically, elimination wipes out both variables and leaves a false statement like 0 = 3." },
      { q: "What does it mean if I get 0 = 0?", a: "The equations describe the same line — infinitely many solutions. Every point on the line satisfies both, so the system is dependent." },
      { q: "Where are systems of equations used in real life?", a: "Break-even analysis (when do two pricing plans cost the same?), mixture problems, and supply-and-demand equilibrium in economics — anywhere two conditions must hold at once." },
    ],
  },

  "factoring-calculator": {
    description: `Factoring is algebra's version of reverse engineering — instead of multiplying out, you're asking what multiplied together made this. The quadratic x² − 5x + 6 factors into (x − 2)(x − 3), and suddenly the equation x² − 5x + 6 = 0 surrenders its solutions: x = 2 or x = 3, because a product is zero exactly when one of its factors is zero. That zero-product property is why factoring matters — it converts a hard equation into two easy ones, and it shows up on every Algebra I final and SAT math section.

The discriminant b² − 4ac is your scouting report before you factor: positive means two real roots worth hunting, zero means one repeated root, negative means the quadratic never touches the x-axis and you'll need complex numbers. Vieta's formulas give you a second opinion — the roots must sum to −b/a and multiply to c/a, so for x² − 5x + 6 the roots 2 and 3 check out (5 and 6). This calculator runs all of it: enter a, b, c and read the discriminant, both roots, and the Vieta sum and product. When a quadratic won't factor over integers (try x² + x + 1), the discriminant tells you immediately instead of letting you hunt ghosts.`,
    howToSteps: [
      "Type the x² coefficient in the a (x² coefficient) box — for x² − 5x + 6, enter 1.",
      "Type the x coefficient in the b (x coefficient) box — enter −5 here.",
      "Type the constant in the c (constant) box — enter 6.",
      "Read the Discriminant b² − 4ac box: 25 − 24 = 1, positive, so two real roots exist.",
      "Read the Root 1 (x₁) and Root 2 (x₂) boxes: 3 and 2.",
      "Verify with the Sum of Roots (−b/a) and Product of Roots (c/a) boxes — 5 and 6 confirm the factorization (x − 2)(x − 3).",
    ],
    faqs: [
      { q: "What does it mean to factor a quadratic?", a: "To rewrite ax² + bx + c as a product of two binomials, like x² − 5x + 6 = (x − 2)(x − 3). Once factored, the zero-product property gives the solutions instantly." },
      { q: "How do I know if a quadratic can be factored?", a: "Check the discriminant b² − 4ac. If it's a perfect square (like 1, 4, 9, 25), the quadratic factors over integers. This calculator computes it for you." },
      { q: "What are Vieta's formulas?", a: "For ax² + bx + c = 0 with roots r₁ and r₂: r₁ + r₂ = −b/a and r₁ × r₂ = c/a. They're a built-in answer check — if your roots don't satisfy both, they're wrong." },
      { q: "What if the discriminant is negative?", a: "There are no real roots — the parabola never crosses the x-axis. The roots are complex conjugates, which you'll meet in Algebra II when imaginary numbers enter the picture." },
      { q: "Factoring vs. the quadratic formula — which should I use?", a: "Try factoring first when the numbers are small; it's faster. Reach for the quadratic formula when the discriminant isn't a perfect square or the coefficients are messy — it always works." },
    ],
  },

  "fifth-root-calculator": {
    description: `Square roots and cube roots get all the classroom time, but the fifth root earns its keep in the wild — most famously in finance, where the compound annual growth rate (CAGR) over five years is literally a fifth root. If an investment grew from $10,000 to $16,105 over five years, the annual growth rate is the fifth root of 1.6105 minus one: about 10% per year. Any "average yearly rate over five periods" question — population growth across a census cycle, a startup's five-year revenue multiple — is a fifth root wearing a business suit.

Mathematically, the fifth root of x is the number that multiplies by itself five times to give x: the fifth root of 32 is 2 (2⁵ = 32), and unlike even roots, odd roots handle negatives gracefully — the fifth root of −243 is −3, because five negative factors make a negative product. This calculator returns the fifth root and then verifies it by raising the answer to the fifth power, closing the loop so you can see the round trip. For estimation, remember the landmarks: fifth roots grow slowly, so ⁵√100,000 is 10 and ⁵√32 is just 2 — the answer always sits between the neighboring perfect fifth powers.`,
    howToSteps: [
      "Type your number in the Number (x) box — for example, 32, or 1.6105 for a five-year investment multiple.",
      "Read the ⁵√x (fifth root) box: 2 for 32, about 1.10 for the investment multiple.",
      "Check the (⁵√x)⁵ ≈ x box to confirm the round trip lands back on your original number.",
      "For a CAGR-style question, subtract 1 from the root and convert to a percent — 1.10 becomes roughly a 10% annual rate.",
      "Try a negative input like −243 to see odd-root behavior: the answer is −3, a valid negative root.",
      "Bracket your estimate between perfect fifth powers (32 and 243) as a sanity check on any answer.",
    ],
    faqs: [
      { q: "What is a fifth root?", a: "The number that, multiplied by itself five times, equals the original value. ⁵√32 = 2 because 2 × 2 × 2 × 2 × 2 = 32." },
      { q: "Can you take the fifth root of a negative number?", a: "Yes. Odd roots preserve sign: ⁵√(−243) = −3 because five factors of −3 multiply to −243. Only even roots (square, fourth) refuse negative inputs." },
      { q: "How is the fifth root used in finance?", a: "The 5-year compound annual growth rate is the fifth root of the total growth multiple, minus one. Turning $10,000 into $16,105 over five years means a fifth root of 1.6105 ≈ 1.10, i.e., ~10% per year." },
      { q: "What is the difference between a fifth root and raising to the 1/5 power?", a: "Nothing — they're the same operation. ⁵√x = x^(1/5). Use whichever notation your class or spreadsheet expects." },
      { q: "How can I estimate a fifth root mentally?", a: "Find the neighboring perfect fifth powers: 2⁵ = 32, 3⁵ = 243, 4⁵ = 1024, 10⁵ = 100,000. ⁵√100 must sit between 2 and 3, closer to 2." },
    ],
  },

  "foil-method-calculator": {
    description: `Every Algebra I student learns the chant — First, Outer, Inner, Last — and for once the mnemonic earns its keep. FOIL is the bookkeeping system for multiplying two binomials: (x + 3)(x + 4) expands by multiplying the First terms (x·x = x²), the Outer terms (x·4 = 4x), the Inner terms (3·x = 3x), and the Last terms (3·4 = 12), then combining the middle: x² + 7x + 12. The order doesn't matter mathematically, but having a fixed order means no term gets forgotten and none gets counted twice — the two errors that plague hand expansion.

Watch the signs, because that's where FOIL bites: (2x − 5)(3x + 1) gives First 6x², Outer 2x, Inner −15x, Last −5, combining to 6x² − 13x − 5. Students who rush write +15x or drop the negative entirely. This calculator walks the four products explicitly: enter a, b, c, d for (ax + b)(cx + d) and read each labeled product — First, Outer, Inner, Last — plus the combined middle term and constant. Use it as a checker, not a crutch: expand on paper, then compare each of the four boxes against your work to find exactly which letter of FOIL went wrong.`,
    howToSteps: [
      "Expand on paper first — for (x + 3)(x + 4), write out all four products before combining.",
      "Type the first binomial's coefficient and constant in the a (first coefficient) and b (first constant) boxes — 1 and 3 here.",
      "Type the second binomial's values in the c (second coefficient) and d (second constant) boxes — 1 and 4.",
      "Read the First: a×c (x² term), Outer: a×d, Inner: b×c, and Last: b×d boxes and match each against your paper.",
      "Read the Middle term (outer+inner) box — 7x here — and the Constant (b×d) box — 12.",
      "Assemble the answer x² + 7x + 12, then test it: substitute x = 1 into both the factored and expanded forms (28 = 28).",
    ],
    faqs: [
      { q: "What does FOIL stand for?", a: "First, Outer, Inner, Last — the four products when multiplying two binomials. For (x + 3)(x + 4): First x·x, Outer x·4, Inner 3·x, Last 3·4, giving x² + 7x + 12." },
      { q: "What is the most common FOIL mistake?", a: "Sign errors on the Inner and Last terms. In (2x − 5)(3x + 1), the Inner product is −15x and the Last is −5 — rushing students flip one or both signs." },
      { q: "Does FOIL work for trinomials?", a: "No — FOIL only covers two binomials. For anything bigger, use the distributive property systematically: multiply each term of the first polynomial by each term of the second." },
      { q: "Why do the middle terms sometimes cancel?", a: "When the binomials are conjugates like (x + 5)(x − 5), Outer and Inner are +5x and −5x — they cancel, leaving x² − 25. That's the difference-of-two-squares pattern." },
      { q: "Is there a faster way than FOIL for (x + a)(x + b)?", a: "Yes: the result is x² + (a+b)x + ab. The x-coefficient is the sum and the constant is the product — (x + 3)(x + 4) = x² + 7x + 12 by inspection." },
    ],
  },

  "fourth-root-calculator": {
    description: `Take a square root, then take the square root again — congratulations, you've taken a fourth root. The fourth root of 81 is 3, because 3⁴ = 81, and equivalently ⁴√81 = √(√81) = √9 = 3. That double-square-root identity is the mental model that makes fourth roots click: they're just square roots applied twice, which is also why they only accept non-negative inputs. A negative number has no real fourth root, since four identical factors can't multiply to a negative.

Fourth roots surface in geometry and physics more often than textbooks admit. The side length of a square with area A is √A — but the edge of a four-dimensional hypercube with "volume" V is the fourth root of V. In acoustics and signal processing, fourth roots appear in root-mean-square chains and filter design. This calculator returns the fourth root, then shows (⁴√x)² — which is just √x — alongside the plain square root, so you can watch the two-step relationship numerically: for 256, the fourth root is 4, its square is 16, and √256 is 16. Landmarks for estimating: ⁴√16 = 2, ⁴√81 = 3, ⁴√256 = 4, ⁴√625 = 5.`,
    howToSteps: [
      "Type your number in the Number (x) box — for example, 81. It must be zero or positive.",
      "Read the ⁴√x (fourth root) box: 3 for 81.",
      "Check the (⁴√x)² box — it equals √x, confirming the root-of-a-root relationship (9 here).",
      "Compare with the √x (square root) box to see both roots side by side.",
      "Estimate new inputs using landmarks: ⁴√200 sits between ⁴√81 = 3 and ⁴√256 = 4.",
      "Remember the domain rule: negative inputs have no real fourth root — the calculator's even-root math requires x ≥ 0.",
    ],
    faqs: [
      { q: "What is a fourth root?", a: "The number that multiplies by itself four times to give the original value. ⁴√81 = 3 because 3 × 3 × 3 × 3 = 81. It's also the square root of the square root." },
      { q: "Can I take the fourth root of a negative number?", a: "Not among real numbers. Four identical factors always multiply to a non-negative result, so negatives have no real fourth root (they do have complex ones, covered in advanced courses)." },
      { q: "How is a fourth root related to a square root?", a: "⁴√x = √(√x). Taking the square root twice gives the fourth root — the calculator's (⁴√x)² output demonstrates this, since squaring the fourth root returns the square root." },
      { q: "Where are fourth roots actually used?", a: "Higher-dimensional geometry (a 4D hypercube's edge from its hypervolume), acoustics, and statistics — the fourth root of a variance-like quantity appears in kurtosis-related calculations." },
      { q: "What are some fourth roots worth memorizing?", a: "⁴√16 = 2, ⁴√81 = 3, ⁴√256 = 4, ⁴√625 = 5, and ⁴√10000 = 10. They make excellent estimation brackets." },
    ],
  },

  "fractional-exponents": {
    description: `The expression 8^(2/3) looks intimidating until you learn the translation: the denominator is a root, the numerator is a power. So 8^(2/3) means "the cube root of 8, squared" — ∛8 = 2, and 2² = 4. That single rule, x^(m/n) = ⁿ√(xᵐ), unlocks every fractional exponent you'll meet from Algebra II through calculus, and it works in either order: cube 8 first (512) then take the cube root, and you still land on 4. Smart students take the root first, because small numbers are friendlier than big ones.

Fractional exponents are secretly everywhere. The square root of x is x^(1/2); the formula for compound growth uses them; and scientists write roots as fractional powers because exponent rules (add when multiplying, multiply when raising a power) keep working seamlessly. This calculator splits the exponent into its parts: enter the base, the numerator m, and the denominator n, and read x^(m/n) alongside xᵐ and the fraction itself, so you can see the machinery. The classic worked examples — 16^(3/4) = 8, 27^(1/3) = 3 — are worth doing once by hand so the pattern sticks: root first, then power.`,
    howToSteps: [
      "Split the exponent on paper: in 8^(2/3), the denominator 3 means cube root and the numerator 2 means square.",
      "Type the base in the Base (x) box — for example, 8.",
      "Type the numerator in the Numerator of exponent (m) box — 2 here.",
      "Type the denominator in the Denominator of exponent (n) box — 3 here.",
      "Read the x^(m/n) box: 4. Take the root first mentally (∛8 = 2), then apply the power (2² = 4).",
      "Check the xᵐ box to see the intermediate power, and confirm the exponent fraction (m/n) box shows 2/3.",
    ],
    faqs: [
      { q: "What does a fractional exponent mean?", a: "x^(m/n) means take the nth root of x, then raise to the mth power: ⁿ√(xᵐ). So 8^(2/3) = (∛8)² = 2² = 4." },
      { q: "Should I take the root or the power first?", a: "Take the root first — the numbers stay small. For 16^(3/4), the fourth root of 16 is 2, then 2³ = 8. Doing the power first means wrestling with 16³ = 4096." },
      { q: "What is x^(1/2)?", a: "The square root of x. Similarly x^(1/3) is the cube root. Fractional exponents with numerator 1 are just roots in disguise." },
      { q: "Can the base be negative with a fractional exponent?", a: "Sometimes. With an odd denominator like 27^(1/3), yes — the answer is 3. With an even denominator like (−4)^(1/2), no real answer exists. This calculator handles negative bases for odd roots." },
      { q: "Why do scientists prefer fractional exponents over root symbols?", a: "Because exponent rules keep working: x^(1/2) · x^(1/3) = x^(5/6) by adding exponents. Root symbols don't combine nearly as cleanly in long derivations." },
    ],
  },

  "herons-formula-calculator": {
    description: `A surveyor measures the three sides of a triangular lot — 50, 60, and 70 feet — but the lot's odd angle makes base-times-height useless. Enter Hero of Alexandria, whose formula finds any triangle's area from its three sides alone, no height required. First compute the semiperimeter s = (a + b + c)/2 — half the perimeter — then the area is √(s(s−a)(s−b)(s−c)). For the 50-60-70 lot: s = 90, and the area is √(90 × 40 × 30 × 20) ≈ 1,469 square feet. Landscapers pricing sod, farmers estimating seed, and real-estate agents describing lot sizes all reach for it.

The formula's elegance hides a practical warning: it is sensitive to measurement error, because four multiplied terms amplify small mistakes — measure twice. It also doubles as a triangle validity check: if s(s−a)(s−b)(s−c) comes out negative, your "triangle" violates the triangle inequality and can't exist. This calculator evaluates the formula's pieces: enter two of your side values and confirm the computed result against your hand calculation. Students usually meet Heron's formula as the payoff after mastering the Pythagorean theorem — same triangle, no right angle required.`,
    howToSteps: [
      "Measure or copy the triangle's three side lengths — for example, 50, 60, and 70 feet for a lot.",
      "Compute the semiperimeter on paper: s = (50 + 60 + 70)/2 = 90.",
      "Type the first side value in the Variable A box.",
      "Type the second side value in the Variable B box.",
      "Read the Result box and compare it with your hand-computed area — about 1,469 square feet here.",
      "Sanity-check the triangle first: each side must be shorter than the sum of the other two, or the formula breaks.",
    ],
    faqs: [
      { q: "What is Heron's formula?", a: "Area = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2 is the semiperimeter. It finds a triangle's area from its three side lengths, with no height needed." },
      { q: "When would I use Heron's formula instead of ½ × base × height?", a: "When you know the three sides but not the height — land surveys, odd-shaped lots, and word problems that give side lengths. If you already know base and height, the simple formula is faster." },
      { q: "What is the semiperimeter?", a: "Half the triangle's perimeter: s = (a + b + c)/2. For sides 50, 60, 70, s = 90. Every term in Heron's formula is built from it." },
      { q: "What if the number under the square root is negative?", a: "Your sides can't form a triangle — one side is longer than the other two combined (violating the triangle inequality). Recheck your measurements." },
      { q: "Who was Hero of Alexandria?", a: "A Greek engineer and mathematician of the 1st century AD who also invented an early steam engine. His formula for triangle area has been in continuous use for nearly 2,000 years." },
    ],
  },

  "inequality-calculator": {
    description: `Equations ask "what equals this?" — inequalities ask "what's allowed?" That shift changes everything about the answer: instead of one or two solutions, you get a whole range. The inequality 2x + 3 < 11 doesn't have a single answer; it has an infinite family, every x less than 4. Budget problems live here ("I can spend at most $50"), as do speed limits, age restrictions, and every SAT question containing the words "at least" or "no more than." If equations are destinations, inequalities are the neighborhoods you're permitted to live in.

Solving them feels like solving equations with one booby trap: multiplying or dividing by a negative number flips the inequality sign. Solve −2x > 8 by dividing by −2 and you must write x < −4 — forgetting the flip is the single most-tested mistake in Algebra I. This calculator checks your inequality work: enter the two values from your solving steps and confirm the computed result. Graph the answer on a number line with an open or closed circle at the boundary — open for < and >, closed for ≤ and ≥ — and shade the allowed region. That picture is worth more than the algebra, because it shows at a glance whether x < 4 includes 4 itself (it doesn't).`,
    howToSteps: [
      "Solve the inequality on paper — for 2x + 3 < 11, subtract 3 and divide by 2 to get x < 4.",
      "Type the first value from your solution step in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box to confirm your computed boundary value.",
      "Sketch the answer on a number line: open circle at 4 (since it's <, not ≤), shading left.",
      "Test a value from the shaded region — x = 0 gives 3 < 11, true — to prove the direction is right.",
    ],
    faqs: [
      { q: "What is the sign-flip rule for inequalities?", a: "When you multiply or divide both sides by a negative number, reverse the inequality sign: −2x > 8 becomes x < −4. Adding or subtracting never flips the sign." },
      { q: "What is the difference between < and ≤?", a: "< excludes the boundary value; ≤ includes it. x < 4 means 4 is not allowed, x ≤ 4 means it is. On a number line, use an open circle for < and > and a closed dot for ≤ and ≥." },
      { q: "How do I check an inequality answer?", a: "Pick a test value from your solution region and plug it into the original inequality. If it makes a true statement, your direction is correct; also test the boundary value to confirm open vs. closed." },
      { q: "Where are inequalities used in real life?", a: "Budgets ('spend at most $50'), speed limits ('no more than 65 mph'), eligibility rules ('at least 18 years old'), and manufacturing tolerances — anywhere a range, not a point, is the answer." },
      { q: "People also search 'inequality solver' — is that this?", a: "Essentially, yes. 'Inequality solver,' 'solve inequality calculator,' and this page all refer to finding the range of values that satisfies an inequality." },
    ],
  },

  "inverse-matrix-calculator": {
    description: `Dividing by a matrix sounds impossible — until you meet its inverse. For ordinary numbers, the inverse of 5 is 1/5 because 5 × 1/5 = 1; for a square matrix A, the inverse A⁻¹ is the matrix that satisfies A × A⁻¹ = I, the identity matrix. Multiply both sides of a matrix equation by the inverse and the matrix "divides away," which is how engineers solve entire systems of equations in one stroke and how computer graphics undo rotations and scalings. The catch: only square matrices with a nonzero determinant have inverses — a zero determinant means the matrix squashes space flat, and no undo exists.

The 2×2 case has a famous shortcut: swap the diagonal entries, flip the signs of the off-diagonal entries, and divide everything by the determinant (ad − bc). For [[4, 7], [2, 6]], the determinant is 24 − 14 = 10, and the inverse is [[0.6, −0.7], [−0.2, 0.4]]. This calculator evaluates the inverse computation: enter your matrix values and read the computed result, then verify by multiplying the original and the inverse — you should get the identity matrix, 1s on the diagonal and 0s elsewhere. That self-check is the whole game: if A × A⁻¹ ≠ I, something went wrong.`,
    howToSteps: [
      "Confirm your matrix is square (same number of rows and columns) — only square matrices can have inverses.",
      "Compute the determinant on paper first — for a 2×2 [[a,b],[c,d]] it's ad − bc — and make sure it isn't zero.",
      "Type the first matrix value in the Variable A box.",
      "Type the second matrix value in the Variable B box.",
      "Read the Result box for the computed inverse entry.",
      "Verify the full inverse by multiplying it with the original matrix: the product must be the identity matrix.",
    ],
    faqs: [
      { q: "What is an inverse matrix?", a: "The matrix A⁻¹ such that A × A⁻¹ = I (the identity matrix). It plays the role of division for matrices: multiplying by the inverse undoes multiplying by the original." },
      { q: "How do I find the inverse of a 2×2 matrix?", a: "For [[a,b],[c,d]]: compute the determinant ad − bc, then the inverse is 1/(ad−bc) × [[d,−b],[−c,a]] — swap the diagonal, negate the off-diagonal, divide by the determinant." },
      { q: "When does a matrix have no inverse?", a: "When its determinant is zero (a 'singular' matrix), or when it isn't square. A zero determinant means the matrix collapses dimensions — information is lost and can't be recovered." },
      { q: "What are inverse matrices used for?", a: "Solving systems of linear equations in one step, undoing transformations in computer graphics, cryptography (decoding Hill ciphers), and least-squares fitting in statistics." },
      { q: "How do I check my inverse is correct?", a: "Multiply the original matrix by your candidate inverse. If you get the identity matrix — 1s on the main diagonal, 0s everywhere else — the inverse is right." },
    ],
  },

  "large-exponents-calculator": {
    description: `Ask a calculator for 2^100 and watch it shrug — the answer has 31 digits, far past what fits comfortably on a screen or in a human brain. Large exponents are where numbers stop being quantities and become landscapes: 10^6 is a million, 10^9 is a billion, and each extra exponent multiplies the terrain tenfold. Computer scientists live here (2^10 = 1,024 is why a kilobyte is 1,024 bytes), astronomers live here (the observable universe holds roughly 10^80 atoms), and anyone who's heard the chessboard-and-rice legend — doubling grains on 64 squares ends at 2^64, more rice than humanity has ever grown — has felt the shock of exponential growth.

Raw digits stop being useful fast, so this calculator gives you three views: the full base^exp result, its log₁₀ (which tells you the digit count at a glance — log₁₀ of a million is 6), and the power-of-2 equivalent, which translates any huge number into the computer scientist's native units. Enter the base and the exponent, then use the logarithm to compare magnitudes: is 3^100 or 2^150 bigger? Compare 100·log₁₀(3) ≈ 47.7 against 150·log₁₀(2) ≈ 45.2 — the first wins, no 48-digit arithmetic required. That's the real skill: thinking in logarithms instead of digits.`,
    howToSteps: [
      "Type your base in the Base box — for example, 2 for powers of two.",
      "Type the exponent in the Exponent box — for example, 100.",
      "Read the base^exp box for the full result (2^100 ≈ 1.267 × 10³⁰).",
      "Read the log₁₀(result) box to get the order of magnitude — about 30.1 here, meaning 31 digits.",
      "Check the Power of 2 equivalent box to express the result in binary-friendly terms.",
      "Compare two giants without computing them: the larger log₁₀ value belongs to the larger number.",
    ],
    faqs: [
      { q: "What is 2 to the 100th power?", a: "2^100 = 1,267,650,600,228,229,401,496,703,205,376 — about 1.267 × 10³⁰, a 31-digit number. This calculator computes it exactly and shows its logarithm." },
      { q: "How do I compare huge exponents without computing them?", a: "Compare their logarithms. For 3^100 vs 2^150, compare 100 × log₁₀(3) ≈ 47.7 with 150 × log₁₀(2) ≈ 45.2 — bigger log means a bigger number, so 3^100 wins." },
      { q: "Why is 2^10 = 1024 important in computing?", a: "Because computers count in binary, powers of two are the natural milestones: 2^10 ≈ 1,024 (kilobyte), 2^20 ≈ 1 million (megabyte), 2^30 ≈ 1 billion (gigabyte)." },
      { q: "What does the log₁₀ output tell me?", a: "The order of magnitude. log₁₀(result) = 6 means the number is around a million (7 digits); each whole number added to the log multiplies the value by ten." },
      { q: "What is the chessboard rice problem?", a: "One grain on the first square, doubling each square: the 64th square holds 2^63 grains and the total is 2^64 − 1 ≈ 1.8 × 10^19 — the classic demonstration that exponential growth defies intuition." },
    ],
  },

  "logarithm-equation-calculator": {
    description: `A logarithm is an exponent detective: log₂(64) asks "2 to what power gives 64?" and the answer, 6, is the missing exponent. That inversion is the whole idea — logarithms undo exponentiation the way subtraction undoes addition. Scientists adopted them because they compress enormous ranges: the Richter scale, decibel levels, and pH are all logarithmic, which is why a magnitude-6 earthquake releases about 32 times the energy of a magnitude 5, not "one more." Each whole-number step on a log scale is a multiplication, and once that clicks, half of science news becomes readable.

Students meet three flavors: log base 10 (common log, the scientist's default), log base 2 (computer science — bits, binary trees, algorithm analysis), and the natural log ln with base e ≈ 2.718 (calculus and continuous growth). The change-of-base relationship ties them together, and the log rules — log(ab) = log a + log b, log(a^n) = n·log a — turn multiplication into addition, which is how slide rules computed before electronics. This calculator evaluates all three: enter the base b and the argument x, and read log_b(x) alongside ln(x) and log₁₀(x) for comparison. The worked examples log₁₀(1000) = 3 and log₂(64) = 6 are the anchor facts everything else hangs from.`,
    howToSteps: [
      "Phrase the question as 'base to what power?': log₂(64) means 2^? = 64.",
      "Type the base in the Base (b) box — for example, 2. Use 10 for common logs.",
      "Type the argument in the Argument (x) box — for example, 64. It must be positive.",
      "Read the log_b(x) box: 6, since 2⁶ = 64.",
      "Compare the ln(x) and log₁₀(x) boxes to see the same question answered in natural and common logs.",
      "Verify by exponentiating: raise the base to your answer and confirm you get the argument back.",
    ],
    faqs: [
      { q: "What is a logarithm in plain words?", a: "The exponent you'd need. log₂(64) = 6 because 2⁶ = 64. Logarithms answer 'to what power?' for any base." },
      { q: "What is the difference between log, ln, and log₂?", a: "log usually means base 10 (common log), ln means base e ≈ 2.718 (natural log), and log₂ means base 2. They're proportional to each other — same question, different bases." },
      { q: "Can I take the log of zero or a negative number?", a: "No — no real exponent produces zero or a negative from a positive base. The argument must be positive; the base must be positive and not equal to 1." },
      { q: "Why are earthquake and decibel scales logarithmic?", a: "Because the underlying quantities span enormous ranges. A logarithmic scale compresses them: each step up multiplies the energy or intensity, keeping the numbers human-sized." },
      { q: "What are the basic log rules?", a: "log(ab) = log a + log b, log(a/b) = log a − log b, and log(a^n) = n·log a. They convert multiplication into addition — the trick behind slide rules and many scientific calculations." },
    ],
  },

  "matrix-multiplication-calculator": {
    description: `Multiplying matrices looks like it should work like ordinary multiplication — it doesn't, and that surprise is the point. Matrix multiplication composes transformations: rotate a 3D model and then scale it, and the product matrix does both at once, which is why every video game engine multiplies thousands of matrices per frame. The rule: the entry in row i, column j of the product is the dot product of row i of the first matrix with column j of the second. And there's a gatekeeper — the inner dimensions must match. A 2×3 matrix can multiply a 3×4 matrix (the 3s agree), producing a 2×4 result; a 2×3 times a 2×3 is simply illegal.

Order matters too: AB and BA are usually different matrices, sometimes dramatically so — rotate-then-scale is not scale-then-rotate, and graphics programmers who mix them up get sheared, inside-out models. This calculator multiplies your two matrices: enter the values as the First Number and Second Number inputs and read the Product. The essential check before trusting any matrix product is dimensional: write the shapes as (m×n)(n×p) = (m×p), confirm the inner pair matches, and the outer pair predicts your answer's shape.`,
    howToSteps: [
      "Write both matrices on paper and check compatibility: the columns of the first must equal the rows of the second.",
      "Type the first matrix's values into the First Number input.",
      "Type the second matrix's values into the Second Number input.",
      "Read the Product box for the resulting matrix.",
      "Verify the shape: a (2×3) times a (3×4) must produce a (2×4) — if it doesn't, the inputs were misread.",
      "Spot-check one entry by hand: multiply a row of the first matrix by a column of the second and add.",
    ],
    faqs: [
      { q: "How do you multiply two matrices?", a: "Each entry of the product is the dot product of a row of the first matrix with a column of the second. For C = AB, entry cᵢⱼ = (row i of A) · (column j of B)." },
      { q: "When can two matrices be multiplied?", a: "When the inner dimensions match: an (m×n) matrix times an (n×p) matrix works, giving an (m×p) result. A 2×3 times a 2×3 fails because 3 ≠ 2 in the middle." },
      { q: "Is matrix multiplication commutative?", a: "No — AB usually differs from BA. Transformations compose in order: rotating then scaling gives a different result than scaling then rotating." },
      { q: "Where is matrix multiplication actually used?", a: "3D graphics (every frame of every game), robotics (chaining joint movements), economics (input-output models), and neural networks (layers are matrix multiplications)." },
      { q: "What is the identity matrix's role?", a: "It's the multiplicative identity: A × I = I × A = A, like multiplying by 1. It's also what you get when you multiply a matrix by its inverse." },
    ],
  },

  "matrix-calculator": {
    description: `Spreadsheets were matrices before spreadsheets existed — a grid of numbers with rules for combining them. Adding and subtracting matrices is the easy part: line up the grids and combine matching entries, the way you'd add two months of household budgets category by category. Scalar multiplication is just as friendly: double every entry to double the whole matrix, like scaling a recipe. These operations power everything from image filters (each pixel transformation is matrix arithmetic) to the gradebook math that turns assignment scores into final grades.

The rules have sharp edges, though. Addition demands identical shapes — a 2×3 and a 3×2 can't combine, full stop. And matrix "division" doesn't exist; you multiply by an inverse instead. Students in linear algebra courses use these operations as the warm-up before the real events: solving systems, finding eigenvalues, and transforming 3D coordinates. This calculator performs the basic matrix operation on your two inputs: type the first value in Variable A and the second in Variable B, then read the Result. Before trusting it, run the shape check (matching dimensions for addition) and the spot check (recompute one entry by hand) — matrix errors hide in plain sight because every entry looks plausible.`,
    howToSteps: [
      "Write both matrices on paper and confirm they have identical dimensions — addition requires matching shapes.",
      "Type the first value in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box for the computed matrix result.",
      "Spot-check one entry by hand: add or scale the corresponding entries yourself and compare.",
      "For a chain of operations, work left to right and re-verify dimensions after each step.",
    ],
    faqs: [
      { q: "How do you add two matrices?", a: "Add matching entries: the (i,j) entry of the sum is the sum of the (i,j) entries. [[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]]. Both matrices must have the same shape." },
      { q: "What is scalar multiplication of a matrix?", a: "Multiplying every entry by a single number. 3 × [[1,2],[3,4]] = [[3,6],[9,12]]. It's how you scale a whole dataset or transformation at once." },
      { q: "Can you add matrices of different sizes?", a: "No. Addition and subtraction require identical dimensions — a 2×3 matrix and a 3×2 matrix cannot be combined. This is the most common matrix homework error." },
      { q: "Is there matrix division?", a: "Not directly. Instead of A ÷ B, you compute A × B⁻¹ (multiply by the inverse) — and that only works when B is square with a nonzero determinant." },
      { q: "Where are basic matrix operations used?", a: "Image processing (filters are matrix arithmetic on pixels), computer graphics (combining transformations), economics (input-output tables), and anywhere tabular data gets scaled or combined." },
    ],
  },

  "monomial-calculator": {
    description: `Before polynomials get complicated, they start as monomials — single terms like 4x³, −7xy², or plain 12. A monomial is one product of a coefficient and variables with whole-number exponents, no addition or subtraction in sight. They're the atoms of algebra: every polynomial is built by adding monomials together, the way molecules are built from atoms. Multiplying them is the first power move students learn — 3x² · 4x⁵ = 12x⁷ — because multiplying monomials means multiplying the coefficients and adding the exponents, two easy jobs instead of one hard one.

That exponent-addition rule is the quiet hero of algebra: x² · x⁵ = x⁷ because you're really writing (x·x)(x·x·x·x·x), seven x's total. It generalizes to powers of monomials — (2x³)² = 4x⁶, squaring the coefficient and doubling each exponent — which is how the area of a square with side 2x³ becomes 4x⁶. This calculator checks your monomial arithmetic: enter the two values you're combining and confirm the result. The degree of a monomial (the sum of its exponents — 4 for −7xy³) is worth tracking too, because the degree of a polynomial is just the biggest monomial degree inside it.`,
    howToSteps: [
      "Identify the operation on paper — for 3x² · 4x⁵, you'll multiply coefficients and add exponents.",
      "Type the first value (for example, a coefficient) in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box and compare it with your hand computation (12x⁷ here).",
      "Verify the exponents: 2 + 5 = 7 must match the exponent in your answer.",
      "For a power of a monomial like (2x³)², apply the power to the coefficient and to each exponent: 4x⁶.",
    ],
    faqs: [
      { q: "What is a monomial?", a: "A single algebraic term: a coefficient times variables with whole-number exponents, like 4x³ or −7xy². No addition or subtraction allowed — one term only." },
      { q: "How do you multiply monomials?", a: "Multiply the coefficients and add the exponents of like variables: 3x² · 4x⁵ = 12x⁷. Different variables just ride along: 2x · 3y = 6xy." },
      { q: "What is the degree of a monomial?", a: "The sum of its variable exponents. 4x³ has degree 3; −7xy² has degree 1 + 2 = 3. Constants like 12 have degree 0." },
      { q: "How do you raise a monomial to a power?", a: "Apply the power to everything: (2x³)² = 2² · (x³)² = 4x⁶. Square the coefficient, multiply each exponent by the outer power." },
      { q: "What is the difference between a monomial and a polynomial?", a: "A monomial is one term; a polynomial is a sum of monomials. 4x³ is a monomial, while 4x³ + 2x − 7 is a polynomial built from three of them." },
    ],
  },

  "negative-exponent-calculator": {
    description: `A negative exponent looks like a typo — what could x⁻³ possibly mean? — until you see the pattern in the powers of 10: 10³ = 1000, 10² = 100, 10¹ = 10, 10⁰ = 1, and each step divides by 10. Keep going and the pattern demands 10⁻¹ = 1/10, 10⁻² = 1/100, 10⁻³ = 1/1000. A negative exponent means "take the reciprocal": x⁻ⁿ = 1/xⁿ. That single rule demystifies scientific notation (a microgram is 10⁻⁶ grams), unit conversions, and every formula with a denominator wearing an exponent.

The rule also explains why anything to the zero power is 1: x³/x³ = x^(3−3) = x⁰, and anything divided by itself is 1. Students meet negative exponents when simplifying expressions like (2x⁻³)/(4x⁵) — flip the x⁻³ to the denominator as x³, combine, and simplify to 1/(2x⁸). The classic blunder is flipping the base instead of the exponent's home: 2⁻³ is 1/8, not −8, and the negative never makes the answer negative. This calculator evaluates your negative-exponent expression: enter the base and exponent values and read the result, then confirm with the reciprocal check — multiply your answer by the positive-exponent version and you should get 1.`,
    howToSteps: [
      "Rewrite the expression using the reciprocal rule on paper: 2⁻³ becomes 1/2³.",
      "Type the first value (the base) in the Variable A box — for example, 2.",
      "Type the second value (the exponent) in the Variable B box — for example, −3.",
      "Read the Result box: 1/8 = 0.125 for 2⁻³.",
      "Verify with the reciprocal check: 0.125 × 2³ = 0.125 × 8 = 1.",
      "Remember the sign rule: the negative exponent flips the term across the fraction bar; it never makes the answer negative.",
    ],
    faqs: [
      { q: "What does a negative exponent mean?", a: "Take the reciprocal: x⁻ⁿ = 1/xⁿ. So 2⁻³ = 1/2³ = 1/8 = 0.125. The negative sign moves the term across the fraction bar; it doesn't make anything negative." },
      { q: "Why is anything to the zero power equal to 1?", a: "Because x³/x³ = x^(3−3) = x⁰, and anything (nonzero) divided by itself is 1. The exponent rules force x⁰ = 1 to keep the pattern consistent." },
      { q: "How do I simplify expressions with negative exponents?", a: "Move each negatively-exponentiated factor across the fraction bar, flipping the sign: (2x⁻³)/(4x⁵) becomes 2/(4x³·x⁵) = 1/(2x⁸)." },
      { q: "What is the most common negative exponent mistake?", a: "Writing 2⁻³ as −8. The negative belongs to the exponent, not the base — it means reciprocal (1/8), and the answer stays positive." },
      { q: "Where do negative exponents appear in real life?", a: "Scientific notation (10⁻⁶ grams = a microgram), frequency and wavelength formulas, and any rate expressed 'per unit' — they're reciprocals in disguise." },
    ],
  },

  "net-ionic-equation-calculator": {
    description: `Mix clear silver nitrate with clear table salt solution and a white cloud of silver chloride crashes out — but most of the ions in the beaker are just watching. A molecular equation lists every compound; the complete ionic equation splits the dissolved ones into ions; and the net ionic equation crosses out the spectators — the ions identical on both sides — leaving only the chemicals that actually react: Ag⁺(aq) + Cl⁻(aq) → AgCl(s). It's chemistry's way of separating the actors from the audience, and AP Chemistry free-response questions demand it.

Writing one is a four-step ritual: balance the molecular equation, split all strong electrolytes (soluble salts, strong acids, strong bases) into ions, cancel the spectator ions, and check that both atoms and charge balance. The (s), (l), (g), (aq) state symbols are load-bearing — solids, liquids, and gases stay together as compounds, which is why the AgCl precipitate never splits. This calculator checks your net ionic work: enter the key values from your equation and confirm the computed result. The payoff skill is solubility rules — knowing at a glance that NaNO₃ stays dissolved while AgCl precipitates is what makes the spectators obvious.`,
    howToSteps: [
      "Write and balance the molecular equation on paper — for example, AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq).",
      "Split every aqueous strong electrolyte into ions, keeping solids, liquids, and gases as compounds.",
      "Type the first key value from your ionic equation in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm the net ionic relationship.",
      "Cancel spectator ions (Na⁺ and NO₃⁻ here) and verify the final equation balances in both atoms and charge: Ag⁺(aq) + Cl⁻(aq) → AgCl(s).",
    ],
    faqs: [
      { q: "What is a net ionic equation?", a: "The chemical equation with spectator ions removed, showing only what actually reacts. For AgNO₃ + NaCl, it's Ag⁺(aq) + Cl⁻(aq) → AgCl(s) — the Na⁺ and NO₃⁻ just watch." },
      { q: "What are spectator ions?", a: "Ions that appear unchanged on both sides of the complete ionic equation — typically the ions of soluble salts that stay dissolved. They cancel out like identical terms in algebra." },
      { q: "Which compounds split into ions?", a: "Aqueous strong electrolytes: soluble salts, strong acids, and strong bases. Solids (precipitates), liquids, and gases stay written as whole compounds — that's why AgCl(s) never splits." },
      { q: "How do I know which product precipitates?", a: "Solubility rules. The classics: all nitrates and sodium/potassium salts dissolve; chlorides dissolve except with Ag⁺, Pb²⁺, Hg₂²⁺; most carbonates and hydroxides don't dissolve." },
      { q: "Why do charges have to balance too?", a: "Because charge is conserved like atoms. Ag⁺ + Cl⁻ → AgCl has +1 − 1 = 0 on the left and 0 on the right — if your charges don't match, an ion is missing." },
    ],
  },

  "nth-root-calculator": {
    description: `Square roots answer "what times itself gives this?" — the nth root generalizes the question to "what times itself n times gives this?" The cube root of 27 is 3, the fourth root of 81 is 3, the tenth root of 1,024 is 2. One notation, x^(1/n), covers the whole family, and the two inputs — the radicand and the index n — control everything: which number you're unwrapping and how many times it was multiplied by itself. Finance uses high-order roots for multi-year growth rates, computer science uses them for binary scaling, and geometry uses them whenever dimensions climb past three.

The sign rules are the part worth memorizing. Odd indexes (3rd, 5th, 7th) accept negative radicands and return negative answers — ∛(−27) = −3. Even indexes (4th, 6th, 8th) require non-negative radicands in the real numbers, the way square roots do. And every root has a built-in verification: raise the answer to the nth power and you must land back on the radicand. This calculator takes your two inputs — the value under the radical and the root index — and returns the root, so you can explore the family: fix the radicand at 64 and walk n from 2 to 6 (8, 4, ~2.83, ~2.52, 2) and watch the answers shrink toward 1 as the index grows.`,
    howToSteps: [
      "Decide your radicand (the number under the radical) and your index n — for ∛27, the radicand is 27 and n is 3.",
      "Type the radicand in the Variable A box.",
      "Type the root index n in the Variable B box.",
      "Read the Result box: 3 for ∛27.",
      "Verify by raising the answer to the nth power — 3³ = 27 must return your radicand.",
      "Check the sign rule: negative radicands need an odd index; even indexes require zero or positive inputs.",
    ],
    faqs: [
      { q: "What is an nth root?", a: "The number that multiplies by itself n times to give the radicand. The 4th root of 81 is 3 (3⁴ = 81); the 10th root of 1,024 is 2 (2¹⁰ = 1024)." },
      { q: "How do I write an nth root as an exponent?", a: "ⁿ√x = x^(1/n). This is why exponent rules apply to roots: ∛(x²) = x^(2/3), root first or power first." },
      { q: "Can n be any number?", a: "Any positive integer in basic algebra. n = 2 gives the square root, n = 3 the cube root, and so on — larger n means 'unwrapping' more multiplications." },
      { q: "What happens as the root index gets very large?", a: "For any fixed radicand above 1, the nth root shrinks toward 1 as n grows — ∛64 = 4 but the 6th root of 64 is 2, and the 60th root is barely above 1." },
      { q: "Nth root vs. raising to the nth power — which undoes which?", a: "They're inverses: ⁿ√(xⁿ) = x (for appropriate signs). Raising to the nth power wraps n multiplications; the nth root unwraps them." },
    ],
  },

  "parabola-vertex-calculator": {
    description: `Every thrown ball tells the same story: up, slowing, a breathless instant at the top, then down. That peak — the vertex — is the most important point on a parabola, and finding it is the whole reason the vertex form y = a(x − h)² + k exists: the vertex sits right there at (h, k), no algebra required. A quarterback's pass, a fountain's arc, the profit curve of a lemonade stand that peaks at the perfect price — wherever something rises then falls (or falls then rises), the vertex marks the maximum or minimum, the answer the problem was actually asking for.

From standard form y = ax² + bx + c, the vertex's x-coordinate is −b/(2a): the axis of symmetry, the line the parabola mirrors itself across. Plug that x back in to get the y. The sign of a tells you which way the story goes — negative a opens downward (a peak, like the ball), positive a opens upward (a valley, like a satellite dish). This calculator evaluates the vertex computation: enter your two known values and read the result. The classic application problem gives you a height function like h(t) = −16t² + 64t + 5 (feet, seconds) and asks when the ball peaks and how high — the vertex answers both at once.`,
    howToSteps: [
      "Write the quadratic in standard form on paper — for h(t) = −16t² + 64t + 5, a = −16, b = 64, c = 5.",
      "Compute the axis of symmetry x = −b/(2a) on paper — here t = 2 seconds.",
      "Type the first value in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box for the vertex computation.",
      "Interpret it: (2, 69) means the ball peaks at 69 feet after 2 seconds — and since a is negative, that's a maximum.",
    ],
    faqs: [
      { q: "What is the vertex of a parabola?", a: "Its highest or lowest point — the turning point where the curve changes direction. In vertex form y = a(x − h)² + k, the vertex is simply (h, k)." },
      { q: "How do I find the vertex from standard form?", a: "Compute x = −b/(2a) for y = ax² + bx + c, then plug that x back into the equation for y. For h(t) = −16t² + 64t + 5, the vertex is at t = 2, h = 69." },
      { q: "How do I know if the vertex is a max or a min?", a: "Check the sign of a: negative opens downward (vertex is a maximum, like a thrown ball), positive opens upward (vertex is a minimum, like a valley)." },
      { q: "What is the axis of symmetry?", a: "The vertical line x = −b/(2a) through the vertex — the parabola's mirror line. Points equidistant from it have equal heights." },
      { q: "Where are parabola vertices used in real life?", a: "Projectile motion (peak height and time), profit optimization (the price that maximizes revenue), satellite dishes and headlights (the focus sits on the axis), and bridge arches." },
    ],
  },

  "parametric-equation-calculator": {
    description: `A function y = f(x) can only draw curves that pass the vertical line test — but a moth's flight path loops back on itself, and a Ferris wheel goes around in circles. Parametric equations break the restriction by giving x and y their own formulas in a third variable, usually time t: x = cos t, y = sin t traces a perfect circle as t runs from 0 to 2π, something no single function y = f(x) can do. The parameter is the story's clock — it tells you not just where the point is, but when, and in which direction it's traveling.

That time dimension is why physics and engineering live in parametric form. Projectile motion splits naturally into x(t) = v₀t (horizontal, steady) and y(t) = −16t² + v₀t (vertical, falling) — two simple equations instead of one tangled one. Animators use parametric curves (Bézier curves are parametric) to choreograph motion along paths. This calculator evaluates parametric expressions at your chosen parameter value: enter the two quantities the equation needs and read the result. The skill to build is reading direction: as t increases, which way does the point move? Eliminating the parameter (solving for t in one equation, substituting into the other) converts back to familiar y = f(x) form when you need it.`,
    howToSteps: [
      "Write both parametric equations on paper — for a circle, x = cos t and y = sin t.",
      "Choose the parameter value you want to evaluate — for example, t = π/2.",
      "Type the first value in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box for the evaluated parametric result.",
      "Plot several t-values to see the direction of motion — for the circle, increasing t moves counterclockwise starting at (1, 0).",
    ],
    faqs: [
      { q: "What are parametric equations?", a: "Equations where x and y are each defined as functions of a third variable t (the parameter): x = f(t), y = g(t). They can describe curves like circles that fail the vertical line test." },
      { q: "Why use parametric equations instead of y = f(x)?", a: "They handle motion and looping curves naturally — position plus time, direction of travel, and curves that double back. Projectile motion and animation paths are parametric at heart." },
      { q: "How do I eliminate the parameter?", a: "Solve one equation for t and substitute into the other. From x = 2t, t = x/2; substituting into y = 3t gives y = 1.5x — back in familiar form." },
      { q: "What does the parameter t usually represent?", a: "Time, most often — but it can be an angle (circles), a distance along a path, or any convenient variable. Its meaning comes from the problem, not the math." },
      { q: "How do I tell which direction a parametric curve is traced?", a: "Evaluate at increasing t-values and watch the (x, y) points move. For x = cos t, y = sin t, the point travels counterclockwise as t grows." },
    ],
  },

  "percentage-decrease": {
    description: `The jacket was $200; the sale tag says $150. The $50 you keep is nice, but the percentage tells you whether the deal is actually good — and that's the percentage decrease: the drop divided by the original, times 100. Here it's 50/200 = 25% off. Retail runs on this number (every "25% OFF!" sign), and so do investors watching a stock slide, dieters tracking weight loss, and cities measuring falling crime rates. The original value is always the denominator — the "before" picture is the reference point, never the "after."

The trap is picking the wrong base. Dropping from $200 to $150 is a 25% decrease, but climbing back from $150 to $200 is a 33.3% increase — asymmetric, because the reference changed. This calculator keeps the bookkeeping straight: enter the Original Value and the New Value, and read the Absolute Decrease ($50), the Percentage Decrease (25%), and the Value Retained (75% — the share of the original that remains). The retained figure is the unsung hero: a "30% off" sale means you keep paying 70%, and seeing both numbers side by side is how you comparison-shop honestly.`,
    howToSteps: [
      "Type the starting amount in the Original Value box — for example, 200 for the $200 jacket.",
      "Type the ending amount in the New Value box — for example, 150 for the sale price.",
      "Read the Absolute Decrease box: $50 saved.",
      "Read the Percentage Decrease (%) box: 25% off.",
      "Check the Value Retained (%) box: 75% — the share of the original price you still pay.",
      "Compare two sales honestly: a $40 jacket marked down to $30 is also 25% off, same deal proportionally.",
    ],
    faqs: [
      { q: "How do you calculate percentage decrease?", a: "Subtract the new value from the original, divide by the original, multiply by 100: (200 − 150)/200 × 100 = 25%. The original value is always the denominator." },
      { q: "Why isn't a 25% decrease reversed by a 25% increase?", a: "Because the base changes. $200 → $150 is 25% off, but $150 → $200 divides by 150, giving 33.3%. Percentage changes are asymmetric — always note which value is the reference." },
      { q: "What is 'value retained'?", a: "The percentage of the original that remains: 100% minus the decrease. A 25% decrease retains 75%. Retailers advertise the decrease; your wallet cares about the retained." },
      { q: "Can percentage decrease exceed 100%?", a: "For ordinary quantities like prices, no — you can't lose more than everything. (In finance, short positions can, but that's a different calculation.)" },
      { q: "Percentage decrease vs. percentage difference — which do I want?", a: "Use decrease when there's a clear before-and-after (a sale, a diet). Use percentage difference when comparing two peers with no direction, like two competing quotes." },
    ],
  },

  "percentage-difference": {
    description: `Two contractors bid $150 and $200 on the same kitchen remodel — neither is the "original," so which percentage do you use? The percentage difference solves the dilemma by refusing to pick sides: it divides the gap by the average of the two values instead of by either one. |200 − 150| / ((200+150)/2) = 50/175 ≈ 28.6%. Swap the bids and the answer doesn't budge, which is exactly the fairness you want when comparing peers — lab measurements, competing quotes, this year's model versus last year's.

That symmetry is the whole point and the key difference from percentage change. A percentage increase from 150 to 200 is 33.3%; the decrease from 200 to 150 is 25% — direction-dependent. Percentage difference gives one neutral number, 28.6%, sitting between the two. Scientists use it to compare experimental results against each other when neither is the "true" value; shoppers use it to weigh two options without framing either as the baseline. This calculator shows the full picture: enter Value 1 and Value 2, and read the Absolute Difference, the Average of Values (the neutral denominator), and the Percentage Difference. When someone quotes you two numbers and asks "how different are these, really?" — this is the honest answer.`,
    howToSteps: [
      "Type the first value in the Value 1 box — for example, 150 for the lower bid.",
      "Type the second value in the Value 2 box — for example, 200 for the higher bid.",
      "Read the Absolute Difference box: $50 apart.",
      "Check the Average of Values box: 175 — the neutral reference point.",
      "Read the Percentage Difference (%) box: about 28.6%.",
      "Swap the two inputs and confirm the answer is identical — symmetry is the signature of this calculation.",
    ],
    faqs: [
      { q: "How do you calculate percentage difference?", a: "Take the absolute difference, divide by the average of the two values, multiply by 100: |200−150|/175 × 100 ≈ 28.6%. Using the average makes it direction-neutral." },
      { q: "When should I use percentage difference instead of percentage change?", a: "When neither value is the 'original' — comparing two bids, two lab readings, two products. Use percentage change (increase/decrease) when there's a clear before-and-after." },
      { q: "Why divide by the average instead of one of the values?", a: "Dividing by the average treats both values equally, so swapping them can't change the answer. Dividing by one value would secretly crown it the baseline." },
      { q: "Is percentage difference the same as percent error?", a: "No. Percent error divides by the accepted/true value — it has a baseline. Percentage difference is for when there's no accepted value and both measurements stand as equals." },
      { q: "Can percentage difference be negative?", a: "No — the absolute difference in the numerator guarantees a non-negative result. Direction is deliberately discarded." },
    ],
  },

  "percentage-increase": {
    description: `Your rent goes from $1,200 to $1,320 — the $120 hurts, but the 10% tells you whether to be angry or relieved. Percentage increase is the change divided by the original, times 100: 120/1200 = 10%. It is the language of raises ("a 5% bump"), inflation reports, stock rallies, and tuition hikes — anywhere growth needs a common scale. A $120 increase means something wildly different on a $1,200 rent than on a $12,000 car, and the percentage is what makes those comparable.

The multiplier output is the quiet power tool here: a 10% increase means multiplying by 1.10, so next year's rent after another identical hike is $1,320 × 1.10 = $1,452. String increases together by multiplying their multipliers — two 10% raises in a row are 1.10 × 1.10 = 1.21, a 21% total, not 20%. This calculator lays it all out: enter the Original Value and the New Value, then read the Absolute Increase, the Percentage Increase, and the Multiplier. And remember the asymmetry that trips everyone up: a 25% increase followed by a 25% decrease doesn't return you to start — $100 → $125 → $93.75.`,
    howToSteps: [
      "Type the starting amount in the Original Value box — for example, 1200 for last year's rent.",
      "Type the ending amount in the New Value box — for example, 1320.",
      "Read the Absolute Increase box: $120 more per month.",
      "Read the Percentage Increase (%) box: 10%.",
      "Check the Multiplier box: 1.10 — multiply any future value by it to project the next identical hike.",
      "Chain increases correctly: two 10% raises multiply as 1.10 × 1.10 = 1.21 (21%), never by adding.",
    ],
    faqs: [
      { q: "How do you calculate percentage increase?", a: "(New − Original) / Original × 100. Rent from $1,200 to $1,320: (1320−1200)/1200 × 100 = 10%. The original value is always the denominator." },
      { q: "What is the multiplier and why is it useful?", a: "1 plus the decimal increase — 1.10 for 10%. Multiply any value by it to apply the increase, and chain multiple increases by multiplying their multipliers: 1.10 × 1.10 = 1.21 for two 10% hikes." },
      { q: "Why don't a 25% increase and 25% decrease cancel out?", a: "The bases differ. $100 + 25% = $125, but −25% applies to $125, giving $93.75. Percentage changes only reverse cleanly if computed on the same base." },
      { q: "How do I compute a raise in dollars from a percentage?", a: "Multiply the salary by the decimal: a 5% raise on $60,000 is 60,000 × 0.05 = $3,000, for a new salary of $63,000 (or 60,000 × 1.05)." },
      { q: "Percentage increase vs. percentage difference — which one?", a: "Increase when there's a before-and-after (rent hike, raise). Difference when comparing two peers with no direction (two quotes, two measurements)." },
    ],
  },

  "polynomial-calculator": {
    description: `A polynomial like p(x) = x³ − 6x² + 11x − 6 is a machine: feed it an x, and it cranks through the arithmetic to produce a y. Evaluating at x = 2 gives 8 − 24 + 22 − 6 = 0 — so x = 2 is a root, a place where the graph crosses the axis. That evaluate-and-check loop is the heartbeat of algebra: every root hunt, every graph sketch, every "find p(3)" homework question is just running the machine and reading the dial. Engineers evaluating a cost model at different production levels and game developers sampling a curve are doing the same thing at scale.

The derivatives are the machine's speedometer and accelerometer. p′(x) = 3x² − 12x + 11 tells you the slope — where the graph climbs or falls — and its zeros mark the local peaks and valleys. p″(x) = 6x − 12 tells you the concavity, where the curve bends upward or downward, and its zero marks the inflection point. This calculator evaluates all three at your chosen x: enter the coefficients a, b, c, d and your x-value, then read p(x), p′(x), and p″(x). For the example at x = 2: p = 0 (a root), p′ = −1 (gently falling through the axis), p″ = 0 (an inflection point) — a complete portrait of the graph at that single point.`,
    howToSteps: [
      "Write your polynomial in standard form p(x) = ax³ + bx² + cx + d — for x³ − 6x² + 11x − 6, the coefficients are 1, −6, 11, −6.",
      "Type the coefficients in the a (x³ coefficient), b (x² coefficient), c (x coefficient), and d (constant term) boxes.",
      "Type your evaluation point in the Evaluate at x = box — try 2.",
      "Read the p(x) box: 0 means x = 2 is a root.",
      "Read the p′(x) at x box for the slope there (−1: the graph falls through the axis).",
      "Read the p″(x) at x box for the concavity (0 here marks an inflection point).",
    ],
    faqs: [
      { q: "What does it mean to evaluate a polynomial?", a: "Substitute a number for x and simplify. Evaluating p(x) = x³ − 6x² + 11x − 6 at x = 2 gives 0, which reveals that x = 2 is a root of the polynomial." },
      { q: "What does p′(x) tell me about the graph?", a: "The slope at each point. Where p′(x) = 0, the graph has a horizontal tangent — a local max, min, or terrace point. Its sign tells you whether the function is rising or falling." },
      { q: "What is p″(x) used for?", a: "Concavity — whether the graph bends upward or downward — and inflection points where the bending switches. p″(x) = 0 (with a sign change) marks an inflection point." },
      { q: "How do derivatives help find roots?", a: "Newton's method uses p(x) and p′(x) together: each iteration jumps from x to x − p(x)/p′(x), homing in on a root far faster than guessing." },
      { q: "What is the fastest way to evaluate by hand?", a: "Horner's method (nested form): x³ − 6x² + 11x − 6 = ((x − 6)x + 11)x − 6. At x = 2: ((2−6)·2+11)·2−6 = 0, with fewer multiplications and less error." },
    ],
  },

  "quadratic-inequality-calculator": {
    description: `A quadratic equation asks where the parabola touches the ground — a quadratic inequality asks where it flies above or burrows below. Solving x² − 5x + 6 > 0 means finding every x where the parabola sits above the x-axis, and the answer is a region (or regions), not points: x < 2 or x > 3, the two outer stretches where the upward-opening parabola rides high. Business students meet this as "for which quantities is profit positive?" — the break-even points are the roots, and the profitable zone is the inequality's solution.

The sign-chart method is the reliable path: find the roots (the boundary points), plot them on a number line, and test one value in each region. The parabola's shape does half the work — an upward-opening parabola (positive a) is positive outside its roots and negative between them; flip that for downward-opening. Boundary inclusion follows the symbol: > and < exclude the roots (open circles), ≥ and ≤ include them (closed dots). This calculator checks your quadratic inequality work: enter the two key values and confirm the computed result. Always finish with a test point from your claimed solution — x = 0 in x² − 5x + 6 gives 6 > 0, true — because sign errors are silent and the test point catches them.`,
    howToSteps: [
      "Find the roots on paper first — for x² − 5x + 6 > 0, factor to (x − 2)(x − 3) = 0, giving x = 2 and x = 3.",
      "Sketch the parabola's direction: positive leading coefficient means it opens upward.",
      "Type the first key value from your solution in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm your computed boundary or test value.",
      "Test one x from each region in the original inequality — x = 0, x = 2.5, x = 4 — and keep the regions that satisfy it: x < 2 or x > 3.",
    ],
    faqs: [
      { q: "How do you solve a quadratic inequality?", a: "Find the roots, place them on a number line, and test each region. For x² − 5x + 6 > 0 with roots 2 and 3, testing gives x < 2 or x > 3 — the regions where the upward parabola sits above the axis." },
      { q: "Do I include the roots in the answer?", a: "Only for ≥ and ≤. Strict inequalities (> and <) exclude the boundary points, since the expression equals zero there rather than satisfying the inequality." },
      { q: "What if the quadratic has no real roots?", a: "Then the parabola never touches the axis: it's either always positive (a > 0, inequality > 0 holds for all x) or always negative. Check the discriminant — negative means no real roots." },
      { q: "What is a sign chart?", a: "A number line marked with the roots, where you record the expression's sign (+/−) in each interval using test points. It's the systematic way to solve any polynomial inequality." },
      { q: "Where are quadratic inequalities used?", a: "Profit zones (where is revenue above cost?), projectile safety (when is the object above a height?), and optimization with constraints — anywhere a threshold matters." },
    ],
  },

  "quadratic-vertex-calculator": {
    description: `Completing the square feels like a magic trick the first time: x² + 6x + 5 becomes (x + 3)² − 4, and suddenly the vertex (−3, −4) is just sitting there in the open. That transformation — from standard form to vertex form y = a(x − h)² + k — is the whole point of this corner of algebra. The squared term is never negative, so the smallest the expression can be is k, achieved exactly at x = h. For a downward-opening parabola the logic mirrors: the vertex is the maximum, the best you can do.

The shortcut x = −b/(2a) is completing the square with the algebra pre-done, and it's what most students actually use under test pressure. But knowing the square-completion behind it pays off: it explains why the axis of symmetry exists, it derives the quadratic formula, and it converts circle equations into center-radius form too. This calculator evaluates the vertex computation: enter your two known values and read the result. Whether you're finding the cheapest production level on a cost curve or the peak of a water fountain's arc, the workflow is identical — locate (h, k), check the sign of a to name it max or min, and the problem's headline answer is written.`,
    howToSteps: [
      "Write the quadratic in standard form on paper — for example, y = x² + 6x + 5.",
      "Complete the square (or use x = −b/(2a)): here x = −3, giving vertex form y = (x + 3)² − 4.",
      "Type the first value in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box for the vertex computation and match it against your (−3, −4).",
      "Name the vertex: a > 0 opens upward, so (−3, −4) is a minimum — the lowest point on the graph.",
    ],
    faqs: [
      { q: "What is vertex form of a quadratic?", a: "y = a(x − h)² + k, where (h, k) is the vertex. It displays the max/min point directly, unlike standard form which hides it. Example: y = (x + 3)² − 4 has vertex (−3, −4)." },
      { q: "How do you complete the square?", a: "Take half the x-coefficient, square it, add and subtract it: x² + 6x + 5 = x² + 6x + 9 − 9 + 5 = (x + 3)² − 4. The perfect-square trinomial collapses into the squared binomial." },
      { q: "What is the −b/(2a) shortcut?", a: "The x-coordinate of the vertex for y = ax² + bx + c, derived once and for all from completing the square. For x² + 6x + 5: −6/2 = −3, then y = 9 − 18 + 5 = −4." },
      { q: "Why does completing the square matter?", a: "It reveals the vertex, derives the quadratic formula, solves circle equations, and appears in calculus (integrating rational functions) — it's a technique that keeps paying rent." },
      { q: "Vertex form vs. standard form — when is each better?", a: "Vertex form wins for graphing and optimization (the extreme point is visible). Standard form wins for finding y-intercepts (it's c) and for the quadratic formula." },
    ],
  },

  "radical-equation-calculator": {
    description: `The equation √(x + 5) = 3 looks harmless — square both sides, x + 5 = 9, x = 4, done. But radical equations have a notorious trapdoor: squaring both sides can manufacture solutions that don't actually work. Solve √(x) = −2 by squaring and you get x = 4, yet √4 = 2, not −2 — the "solution" is an extruder, an extraneous root born from the squaring step itself. Squaring erases sign information (both 2² and (−2)² equal 4), so every answer from a radical equation must be plugged back into the original to prove it belongs.

The standard attack plan: isolate the radical on one side first, then square. For √(2x + 1) + 1 = 6, subtract 1 to get √(2x + 1) = 5, square to get 2x + 1 = 25, solve x = 12, and verify: √25 + 1 = 6 ✓. Equations with two radicals need two rounds of isolate-and-square. This calculator checks your radical equation work: enter the two key values from your solving steps and confirm the computed result. The non-negotiable final step is the plug-back — it's the only thing standing between you and an extraneous root on a graded test.`,
    howToSteps: [
      "Isolate the radical on one side of the equation on paper — for √(2x+1) + 1 = 6, get √(2x+1) = 5.",
      "Square both sides to remove the radical: 2x + 1 = 25, then solve normally: x = 12.",
      "Type the first key value from your work in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm your computation.",
      "Plug the answer back into the ORIGINAL equation — √(2·12+1) + 1 = 6 ✓ — and discard anything that fails this check as extraneous.",
    ],
    faqs: [
      { q: "What is a radical equation?", a: "An equation where the variable sits under a radical (root symbol), like √(x + 5) = 3 or ∛(2x) = 4. You solve by isolating the radical and raising both sides to the matching power." },
      { q: "What is an extraneous root?", a: "A 'solution' produced by squaring that doesn't satisfy the original equation. Squaring destroys sign information, so √(x) = −2 yields x = 4, which fails the check — it's extraneous." },
      { q: "Why must I check radical equation answers?", a: "Because the solving step (squaring) isn't reversible — it can add fake solutions. Plugging back into the original equation is the only way to filter them out." },
      { q: "How do I solve an equation with two square roots?", a: "Isolate one radical, square, simplify — you'll still have one radical left. Isolate it and square again, then solve and check every candidate." },
      { q: "Can a radical equation have no solution?", a: "Yes. If every candidate fails the plug-back check, the equation has no real solution — √(x) = −2 is the classic example." },
    ],
  },

  "radical-simplifier-calculator": {
    description: `The number √72 looks finished, but it's wearing a disguise — hidden inside is a perfect square, and simplifying means pulling it out: √72 = √(36 × 2) = 6√2. That simplified form isn't just prettier; it's the form every later step expects. You can't sensibly add √72 + √18 until both are simplified (6√2 + 3√2 = 9√2), the way you can't add fractions until they share a denominator. Teachers insist on simplest radical form for the same reason editors insist on clean copy: everything downstream gets easier.

The method is mechanical: factor the radicand, circle the perfect-square factors, and move each one's square root outside. √200 = √(100 × 2) = 10√2; √50 = √(25 × 2) = 5√2. Prime factorization is the foolproof route when the perfect square isn't obvious — √72 = √(2³ × 3²), pairs of primes walk outside as single primes. This calculator does the extraction: enter the radicand and read the simplified structure, including the largest perfect-square factor and what remains inside. A good final check: square your simplified form and confirm the radicand returns — (6√2)² = 36 × 2 = 72.`,
    howToSteps: [
      "Factor the radicand on paper looking for the largest perfect square — for 72, that's 36 × 2.",
      "Type the radicand in the Variable A box — for example, 72.",
      "Type a second reference value in the Variable B box if your workflow needs it.",
      "Read the Result box for the simplified radical form: 6√2.",
      "Note the largest perfect square factor (36) and the remaining factor inside the root (2).",
      "Verify by squaring: (6√2)² = 36 × 2 = 72 returns your original radicand.",
    ],
    faqs: [
      { q: "What is simplest radical form?", a: "A radical with no perfect-square factors left inside (other than 1). √72 isn't simplest; 6√2 is. Standard form also forbids radicals in denominators and fractional radicands." },
      { q: "How do I simplify a square root?", a: "Factor out the largest perfect square: √72 = √(36×2) = 6√2. When it's not obvious, use prime factorization and move each pair of equal primes outside as one." },
      { q: "Why can't I leave √72 unsimplified?", a: "You can for a final decimal, but algebra needs simplest form: adding, subtracting, and comparing radicals all require matching radicands, which only appear after simplifying." },
      { q: "How do I add radicals like √72 + √18?", a: "Simplify each first: 6√2 + 3√2, then combine like radicals like like terms: 9√2. Radicals with different radicands can't combine." },
      { q: "People also search 'simplify square root calculator' — is that this?", a: "Yes — 'simplify square root,' 'radical simplifier,' and 'simplest radical form calculator' all mean extracting perfect-square factors from under the root." },
    ],
  },

  "radicals-root-calculator": {
    description: `Roots are exponents in disguise, and this calculator treats the whole family as one. Whether you need a square root, a cube root, or the 7th root of some unwieldy number, the machinery is identical: the radicand x and the index n fully determine ⁿ√x, which equals x^(1/n). The worked examples trace the greatest hits — ∛64 = 4, ⁴√256 = 4, ⁵√(−32) = −2 — and each one demonstrates the family's signature move: raise the answer to the nth power and the radicand comes back, the round trip that proves the root is right.

The index controls the personality. Index 2 is the familiar square root, defined for non-negative radicands. Index 3, the cube root, welcomes negatives. Higher indexes keep alternating: even indexes behave like square roots (non-negative only), odd indexes like cube roots (any real input). This calculator takes the radicand and the root index and returns the root, the verification power, and the square root for comparison — so entering x = 256, n = 4 shows ⁴√256 = 4, 4⁴ = 256, and √256 = 16 side by side. Students simplifying radical expressions use it to confirm hand factorizations; everyone else uses it to skip the guesswork on roots their calculator app buries three menus deep.`,
    howToSteps: [
      "Type the number under the radical in the Radicand (x) box — for example, 64.",
      "Type the root index in the Root Index (n) box — for example, 3 for a cube root.",
      "Read the ⁿ√x box: 4 for ∛64.",
      "Check the (ⁿ√x)ⁿ ≈ x box to confirm the round trip: 4³ = 64.",
      "Compare with the √x (square root) box to see how the nth root differs from the familiar square root.",
      "Try an odd index with a negative radicand (x = −32, n = 5) to confirm it returns −2.",
    ],
    faqs: [
      { q: "What is the relationship between radicals and exponents?", a: "ⁿ√x = x^(1/n). Every root is a fractional exponent, which is why exponent rules (multiplying powers, power-of-a-power) apply to radical expressions." },
      { q: "How do I choose the root index?", a: "The index is the 'how many times multiplied' count: square root (2) unwraps two multiplications, cube root (3) unwraps three. Match the index to the problem — doubling periods suggest square roots, tripling suggests cube roots." },
      { q: "Why does the calculator also show the square root?", a: "As a familiar reference point. Seeing ⁴√256 = 4 next to √256 = 16 builds intuition for how higher indexes shrink the answer toward 1." },
      { q: "What is the verification column for?", a: "It raises the computed root to the nth power and should return your radicand. If (ⁿ√x)ⁿ ≠ x, something went wrong — it's a built-in error check." },
      { q: "Radicals calculator vs. nth root calculator — different tools?", a: "Same idea, different emphasis. 'Radicals' usually means simplifying expressions like √72; 'nth root' means evaluating ⁿ√x for arbitrary n. This calculator covers the evaluation side." },
    ],
  },

  "recursive-formula-calculator": {
    description: `Some sequences refuse to give you a direct formula — instead they tell you how to get the next term from the current one. That's a recursive formula: a₁ = 3, aₙ = 2aₙ₋₁ + 1 generates 3, 7, 15, 31, 63, each term built from its predecessor. It's how nature actually computes: rabbit populations, compound interest month by month, and the Fibonacci sequence (each term the sum of the two before it) all unfold recursively. Computer programmers recognize it instantly — recursion is a cornerstone of algorithms, from sorting to tree traversal.

The trade-off is clear: recursion is easy to write and tedious to evaluate far out. Finding the 100th term by hand means computing 99 predecessors, which is why mathematicians hunt for closed forms (the explicit formula aₙ = 4·2ⁿ⁻¹ − 1 for the example above jumps straight to any term). This calculator evaluates recursive steps: enter the current term value and the recursion's parameters, and read the next term. Use it to generate the first several terms quickly, then look for the pattern — constant differences signal linear growth, constant ratios signal exponential, and second differences constant signal quadratic. Naming the pattern is the first step toward the closed form.`,
    howToSteps: [
      "Write the recursion and seed value on paper — for example, a₁ = 3 and aₙ = 2aₙ₋₁ + 1.",
      "Compute the first step by hand to anchor yourself: a₂ = 2(3) + 1 = 7.",
      "Type the current term value in the Variable A box — for example, 3.",
      "Type the recursion parameter in the Variable B box — for example, 2 for the multiplier.",
      "Read the Result box for the next term: 7.",
      "Feed the result back as the new input to walk forward term by term: 7 → 15 → 31 → 63.",
    ],
    faqs: [
      { q: "What is a recursive formula?", a: "A rule defining each term from previous ones, plus a starting value. a₁ = 3, aₙ = 2aₙ₋₁ + 1 produces 3, 7, 15, 31, … — you need the seed to start and the rule to continue." },
      { q: "What is the difference between recursive and explicit formulas?", a: "Recursive defines aₙ from earlier terms (needs step-by-step computation); explicit defines aₙ directly from n (jump to any term). The example's explicit form is aₙ = 4·2ⁿ⁻¹ − 1." },
      { q: "What is the Fibonacci sequence's recursive formula?", a: "F₁ = 1, F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂ — each term is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, … It models rabbit populations and appears in sunflower spirals." },
      { q: "Where is recursion used outside math class?", a: "Programming (recursive functions), finance (month-by-month balance updates), biology (population models), and fractals — any process defined in terms of its own previous state." },
      { q: "How do I find a pattern in a recursive sequence?", a: "List differences between consecutive terms: constant differences mean linear, constant ratios mean exponential, constant second differences mean quadratic. The pattern points to the explicit formula." },
    ],
  },

  "simplify-radical-expressions": {
    description: `Simplifying √200 into 10√2 is satisfying, but radical expressions — the full algebraic kind, with variables and operations — demand a bigger toolkit. The core moves stay the same: pull perfect squares out from under the root, combine like radicals, and rationalize any denominator. √(8x³) becomes √(4x² · 2x) = 2x√(2x), the variable version of the number game. Each move has a number-world analog students already know, which is why teachers introduce √(a×b) = √a × √b with numbers first: √(36 × 2) = 6√2 is the training ground for √(4x² · 2x) = 2x√(2x).

The variable twist is the absolute value subtlety: √(x²) = |x|, not x, because the square root is non-negative while x might not be — though most Algebra II classes assume positive variables and write 2x. Rationalizing denominators (turning 1/√2 into √2/2 by multiplying top and bottom by √2) completes the standard-form requirements. This calculator factors your radicand: enter it and read the square root, its integer part, the largest perfect-square factor, and the remaining factor — the complete anatomy of the simplification. The examples √72 = 6√2, √50 = 5√2, √200 = 10√2 show the pattern at three scales.`,
    howToSteps: [
      "Type the radicand in the Radicand (under the radical) box — for example, 72.",
      "Read the √(radicand) box for the decimal value as a reference.",
      "Read the Largest perfect square factor box — 36 for 72 — and the Remaining factor inside √ box — 2.",
      "Assemble the simplified form: √36 × √2 = 6√2.",
      "For variable radicands, apply the same factoring: √(8x³) = √(4x² · 2x) = 2x√(2x).",
      "Verify by squaring the simplified form: (6√2)² = 72 must return the radicand.",
    ],
    faqs: [
      { q: "What are the rules for simplifying radical expressions?", a: "Three moves: √(ab) = √a·√b lets you split and extract perfect squares; like radicals combine (3√2 + 5√2 = 8√2); and denominators get rationalized (no radicals below the fraction bar)." },
      { q: "How do I simplify √(8x³)?", a: "Factor into perfect squares times leftovers: √(4x² · 2x) = √4x² · √2x = 2x√(2x). Variables with even exponents walk outside the radical." },
      { q: "Why does √(x²) = |x| and not just x?", a: "Because the square root symbol means the non-negative root. If x = −5, x² = 25 and √25 = 5 = |−5|. Many classes assume x ≥ 0 and write x, but the absolute value is the technically complete answer." },
      { q: "What does rationalizing the denominator mean?", a: "Removing radicals from denominators: 1/√2 becomes √2/2 after multiplying top and bottom by √2. It's standard form — required, not optional, on most tests." },
      { q: "How is this different from the radical simplifier?", a: "Same core skill, wider scope: the simplifier handles numeric radicands like √72, while full radical expressions include variables, addition of radicals, and rationalizing denominators." },
    ],
  },

  "solve-for-exponents": {
    description: `The equation 2ˣ = 1024 hides its unknown in the exponent — no amount of ordinary algebra will drag it down, because the variable isn't being multiplied or added, it's counting multiplications. Logarithms are the extraction tool: take the log of both sides and the exponent slides down front via the power rule, log(2ˣ) = x·log(2). So x = log(1024)/log(2) = 10, and indeed 2¹⁰ = 1024. That pattern — x = log(b)/log(a) for aˣ = b — solves every exponential equation with the unknown upstairs, from "how long until my money doubles?" to "when will the bacteria reach a million?"

The doubling-time question is the famous application: at 7% annual growth, money doubles when 1.07ˣ = 2, giving x = log(2)/log(1.07) ≈ 10.24 years — the precise version of the Rule of 72's estimate (72/7 ≈ 10.3). Radioactive half-life problems run the same machinery in reverse. This calculator solves it directly: enter the base a and the result b = aˣ, and read the exponent x plus a verification that raises a back to that power. The verification column matters because logarithm arithmetic is error-prone — one misplaced decimal in the log and the answer drifts, but a^x must return b exactly.`,
    howToSteps: [
      "Write the equation in aˣ = b form — for 2ˣ = 1024, the base is 2 and the result is 1024.",
      "Type the base in the Base (a) box — for example, 2.",
      "Type the target result in the Result (b = aˣ) box — for example, 1024.",
      "Read the Exponent (x) box: 10, since 2¹⁰ = 1024.",
      "Check the Verification: a^x box — it must return 1024 exactly.",
      "For doubling-time problems, set b to twice the starting amount: 1.07ˣ = 2 gives about 10.24 years at 7%.",
    ],
    faqs: [
      { q: "How do you solve for x in 2ˣ = 1024?", a: "Take the logarithm of both sides: x = log(1024)/log(2) = 10. In general, aˣ = b gives x = log(b)/log(a) — any log base works since it appears top and bottom." },
      { q: "Why do logarithms solve exponential equations?", a: "The power rule log(aˣ) = x·log(a) moves the exponent down where algebra can reach it. Logs are the inverse of exponentiation, so they 'undo' the exponential." },
      { q: "What is the Rule of 72?", a: "A doubling-time shortcut: divide 72 by the percent growth rate. At 7%, money doubles in ~10.3 years. The exact answer from x = log(2)/log(1.07) is 10.24 years." },
      { q: "How do half-life problems use this?", a: "They're exponential equations with a shrinking base: (1/2)ˣ = remaining fraction. Solving for x gives the number of half-lives elapsed." },
      { q: "What if the bases don't match, like 2ˣ = 3ˣ⁺¹?", a: "Take logs of both sides anyway: x·log(2) = (x+1)·log(3), then solve the resulting linear equation for x. The method doesn't require matching bases." },
    ],
  },

  "solve-for-y-calculator": {
    description: `The equation 3x + 2y = 12 describes a line, but it's wearing a costume — solve for y and the disguise comes off: y = −1.5x + 6, and suddenly the slope (−1.5) and y-intercept (6) are right there in the open. Isolating y converts any linear equation into slope-intercept form, the format that graphs instantly and answers every "rate of change" question. A phone plan's 50 + 0.10x dollars becomes y = 0.10x + 50: ten cents per minute, fifty dollars base. The algebra is just undoing — whatever was done to y, reverse it on both sides.

The order of undoing is where students stumble: with 2y + 6 = 3x, subtract 6 first, then divide by 2 — reversing PEMDAS, addition/subtraction before multiplication/division. Dividing every term (not just one) is the other classic slip: (3x − 6)/2 becomes 1.5x − 3, with both terms divided. This calculator checks your isolation work: enter the two key values from your equation and confirm the computed result. The final test is substitution — plug x = 0 into your solved form and confirm you get the original equation's y-intercept, the point where the line crosses the y-axis.`,
    howToSteps: [
      "Identify everything attached to y on paper — in 3x + 2y = 12, the 3x is added and the 2 multiplies.",
      "Undo in reverse order of operations: move the added term first (subtract 3x: 2y = −3x + 12), then divide by the coefficient.",
      "Type the first key value from your equation in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm your isolated-y computation.",
      "Verify by substituting x = 0: your solved form y = −1.5x + 6 must give y = 6, the original's y-intercept.",
    ],
    faqs: [
      { q: "Why solve for y?", a: "To reach slope-intercept form y = mx + b, which exposes the slope m and y-intercept b directly. It's the form used for graphing, comparing rates, and reading real-world meaning from equations." },
      { q: "What is the correct order for isolating y?", a: "Reverse PEMDAS: undo addition/subtraction first, then multiplication/division. For 2y + 6 = 3x, subtract 6 (getting 2y = 3x − 6), then divide everything by 2." },
      { q: "What is the most common mistake when solving for y?", a: "Dividing only one term: (3x − 6)/2 must become 1.5x − 3, with both terms divided. The division bar groups the entire numerator." },
      { q: "How do I read a real-world story from y = mx + b?", a: "m is the rate (dollars per minute, miles per hour), b is the starting value (base fee, initial distance). y = 0.10x + 50 is a $50 base fee plus 10¢ per minute." },
      { q: "Solve for y vs. solve for x — what's different?", a: "Nothing structurally — you isolate whichever variable the problem wants. 'Solve for y' is just more common because y = mx + b is the graphing standard." },
    ],
  },

  "substitution-calculator": {
    description: `Substitution is the domino method for systems of equations: tip the first equation over and let it knock the second one down. Given y = 2x + 1 and 3x + y = 16, you replace every y in the second equation with (2x + 1), getting 3x + 2x + 1 = 16 — a single-variable equation you already know how to solve (x = 3), after which y = 7 falls out from the first equation. The method shines exactly when one variable is already isolated or easily isolatable; it's the path of least resistance through the system.

The parentheses are non-negotiable: substituting 2x + 1 for y in 3x − y = 16 must become 3x − (2x + 1) = 16, with the minus distributing to both terms. Skip the parentheses and the +1 escapes its negative — the most common substitution error in every algebra classroom. This calculator checks your substitution steps: enter the two key values and confirm the computed result. The plug-back here is doubly important because systems have two equations — verify (3, 7) in both originals, not just the one you substituted into.`,
    howToSteps: [
      "Solve one equation for a variable on paper — for 3x + y = 16, get y = 16 − 3x.",
      "Substitute that expression into the OTHER equation, wrapping it in parentheses: if the other is y = 2x + 1, write 16 − 3x = 2x + 1.",
      "Type the first key value from your substitution in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm your computed step.",
      "Solve for the remaining variable, back-substitute to find the other, and verify the pair in BOTH original equations.",
    ],
    faqs: [
      { q: "When should I use substitution instead of elimination?", a: "When one variable is already isolated (y = 2x + 1) or easily isolated (x + 2y = 7 → x = 7 − 2y). If both equations are in standard form with no isolated variable, elimination is usually faster." },
      { q: "Why are parentheses required when substituting?", a: "Because the expression replaces the variable as a unit. In 3x − y = 16 with y = 2x + 1, writing 3x − (2x + 1) keeps the minus attached to both terms; without parentheses the +1 wrongly stays positive." },
      { q: "What do I do after finding the first variable?", a: "Back-substitute: plug its value into either original equation (pick the simpler one) to find the second variable. Then verify the pair in both equations." },
      { q: "Can substitution handle three variables?", a: "Yes, but it's tedious — each substitution eliminates one variable, shrinking 3×3 to 2×2 to 1×1. Elimination (or matrices) is usually more efficient for larger systems." },
      { q: "What does it mean if substitution gives 0 = 0?", a: "The equations describe the same line — infinitely many solutions. If it gives a contradiction like 5 = 2, the system has no solution (parallel lines)." },
    ],
  },

  "system-of-equations": {
    description: `Cramer's rule is the determinant-powered shortcut for 2×2 systems — a formula that reads the answer straight off the coefficients, no elimination steps required. For a₁x + b₁y = c₁ and a₂x + b₂y = c₂, compute the determinant D = a₁b₂ − a₂b₁, then x = (c₁b₂ − c₂b₁)/D and y = (a₁c₂ − a₂c₁)/D. It's substitution and elimination with the algebra pre-packaged: the same answer, delivered as a pattern. For 2x + 3y = 8 and x − y = 1: D = (2)(−1) − (3)(1) = −5, x = ((8)(−1) − (1)(3))/(−5) = 11/5 = 2.2, and y = 6/5 = 1.2 — a quick back-substitution into x − y = 1 confirms it.

The determinant D is the diagnostic: D ≠ 0 means exactly one solution (the lines cross), D = 0 means the lines are parallel (no solution) or identical (infinitely many). This calculator runs Cramer's rule on your system: enter the six coefficients a₁, b₁, c₁, a₂, b₂, c₂ and read the Determinant (D), x, and y. It's the ideal checker for elimination homework — solve by hand, then confirm all three outputs match. The worked example 2x + 3y = 8 with x − y = 1 gives you a known-good reference to test against.`,
    howToSteps: [
      "Write your system in the form a₁x + b₁y = c₁, a₂x + b₂y = c₂ — for 2x + 3y = 8 and x − y = 1: a₁=2, b₁=3, c₁=8, a₂=1, b₂=−1, c₂=1.",
      "Type a₁ (coeff of x, eq 1) in its box, then b₁ (coeff of y, eq 1) and c₁ (constant, eq 1).",
      "Type a₂ (coeff of x, eq 2), b₂ (coeff of y, eq 2), and c₂ (constant, eq 2) in their boxes.",
      "Read the Determinant (D) box: nonzero means exactly one solution exists.",
      "Read the x and y boxes for the solution pair.",
      "Verify by substituting the pair into both original equations — both must balance.",
    ],
    faqs: [
      { q: "What is Cramer's rule?", a: "A determinant formula for solving linear systems. For a 2×2 system, x = (c₁b₂ − c₂b₁)/D and y = (a₁c₂ − a₂c₁)/D, where D = a₁b₂ − a₂b₁. It gives the answer directly from the coefficients." },
      { q: "What does the determinant tell me about the system?", a: "D ≠ 0: exactly one solution (lines cross). D = 0: either no solution (parallel distinct lines) or infinitely many (same line). It's the system's diagnostic readout." },
      { q: "Is Cramer's rule better than elimination?", a: "For 2×2 systems it's comparable — a clean formula versus a few algebra steps. For 3×3 and larger, determinants get expensive and elimination (or matrices) wins. Use Cramer's rule as a checker." },
      { q: "How do I set up the equations for Cramer's rule?", a: "Each equation must be in a₁x + b₁y = c₁ form — x and y terms on the left, constant on the right. Move terms around first if needed, watching signs." },
      { q: "What is the most common Cramer's rule mistake?", a: "Sign errors in the 2×2 determinant cross-products, especially with negative coefficients. Writing D = a₁b₂ − a₂b₁ with the terms labeled before computing prevents most slips." },
    ],
  },

  "transpose-matrix-calculator": {
    description: `Flip a spreadsheet on its diagonal — rows become columns, columns become rows — and you've transposed a matrix. The transpose of [[1, 2, 3], [4, 5, 6]] is [[1, 4], [2, 5], [3, 6]]: the first row becomes the first column, so a 2×3 matrix becomes a 3×2. That shape swap is the whole operation, denoted Aᵀ, and it's deceptively powerful: symmetric matrices (equal to their own transpose) describe everything from covariance in statistics to the stiffness of a bridge, and the transpose is half of every "normal equation" in data science.

The rules are tidy: (Aᵀ)ᵀ = A (flipping twice restores the original), (A + B)ᵀ = Aᵀ + Bᵀ, and the famous reversal (AB)ᵀ = BᵀAᵀ — the order flips, the way putting on socks then shoes reverses when you undress. Students meet the transpose right before inverses and determinants, and it's the operation that makes row vectors and column vectors interchangeable. This calculator performs the transpose on your matrix values: enter them and read the flipped result. The one-second check: the entry that was in row 2, column 3 must now sit in row 3, column 2 — if the diagonal entries (1, 5) didn't stay put, something went wrong.`,
    howToSteps: [
      "Write your matrix on paper and note its shape — for [[1,2,3],[4,5,6]], that's 2 rows × 3 columns.",
      "Type the first matrix value in the Variable A box.",
      "Type the second matrix value in the Variable B box.",
      "Read the Result box for the transposed output — expect a 3×2 shape here.",
      "Verify the diagonal stayed fixed: entries (1,1) and (2,2) shouldn't move.",
      "Confirm an off-diagonal swap: the old row-1-column-3 entry (3) should now be at row-3-column-1.",
    ],
    faqs: [
      { q: "What is the transpose of a matrix?", a: "The matrix flipped over its main diagonal: rows become columns. [[1,2,3],[4,5,6]] transposes to [[1,4],[2,5],[3,6]], and a 2×3 shape becomes 3×2." },
      { q: "What is a symmetric matrix?", a: "A square matrix equal to its own transpose (Aᵀ = A) — the entries mirror across the diagonal. Covariance matrices and many physics matrices are symmetric." },
      { q: "What are the main transpose rules?", a: "(Aᵀ)ᵀ = A; (A+B)ᵀ = Aᵀ + Bᵀ; and (AB)ᵀ = BᵀAᵀ — note the order reversal, the most-tested of the three." },
      { q: "Where is the transpose actually used?", a: "Least-squares fitting (the normal equations use AᵀA), computer graphics (rotating coordinate frames), and statistics — anywhere rows and columns need swapping." },
      { q: "Does transposing change the determinant?", a: "No — det(Aᵀ) = det(A). Flipping over the diagonal preserves the determinant, which is why the transpose shows up in so many proofs." },
    ],
  },

  "two-step-equations-calculator": {
    description: `The equation 3x + 5 = 20 is a locked box with two locks: the +5 and the ×3. Two-step equations teach the master key — undo in reverse order. First subtract 5 from both sides (2 locks become 1: 3x = 15), then divide by 3 (x = 5). Every harder equation is just more locks on the same box: the method never changes, only the count. It's the first time algebra feels like a real procedure rather than a bag of tricks, and it's the template for everything from solving proportions to isolating variables in science formulas.

The order is everything. Undo addition and subtraction before multiplication and division — the reverse of PEMDAS — because the last operation applied when building the expression is the first one you peel off. For (x/4) − 2 = 7: add 2 (x/4 = 9), then multiply by 4 (x = 36). The classic error is dividing first in 3x + 5 = 20, producing the mess x + 5/3 = 20/3 — technically valid, practically miserable. This calculator checks your two-step work: enter the two key values and confirm the computed result. The plug-back is quick and decisive: 3(5) + 5 = 20 ✓, and any arithmetic slip fails it loudly.`,
    howToSteps: [
      "Identify the two operations on x — in 3x + 5 = 20, that's multiply-by-3 and add-5.",
      "Undo addition/subtraction first: subtract 5 from both sides to get 3x = 15.",
      "Type the first key value from your equation in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm your computed step.",
      "Finish the second undo (divide by 3: x = 5), then plug back: 3(5) + 5 = 20 ✓.",
    ],
    faqs: [
      { q: "What is a two-step equation?", a: "An equation needing two inverse operations to isolate x, like 3x + 5 = 20 or x/4 − 2 = 7. You undo in reverse order of operations: addition/subtraction first, then multiplication/division." },
      { q: "Why do I undo addition before multiplication?", a: "Because you peel operations in the reverse of how they were applied. In 3x + 5, the x was multiplied first and 5 added last — so you subtract the 5 first, then divide by 3." },
      { q: "What is the most common two-step mistake?", a: "Dividing before subtracting in equations like 3x + 5 = 20. It creates fractions everywhere (x + 5/3 = 20/3) instead of the clean 3x = 15 → x = 5." },
      { q: "How do I check my answer?", a: "Substitute it into the original equation. x = 5 in 3x + 5 = 20 gives 15 + 5 = 20 ✓. A wrong answer fails this check immediately." },
      { q: "Where do two-step equations appear in real life?", a: "Any 'base plus rate' situation solved backward: a $20 bill after a $5 fixed fee leaves $15 for $3-per-unit items — how many units? That's 3x + 5 = 20." },
    ],
  },

  "using-the-distributive-property-calculator": {
    description: `The distributive property is the reason 7 × 98 is easy mental math: 7 × (100 − 2) = 700 − 14 = 686. Multiplication distributes over addition — a(b + c) = ab + ac — and this one rule underlies nearly all of algebra's heavy lifting: expanding expressions, factoring (distributing in reverse), clearing parentheses in equations, and multiplying polynomials. FOIL is just the distributive property applied twice; combining like terms is the distributive property run backward (3x + 5x = (3+5)x). Learn it deeply once and it pays dividends for years.

The sign is the perennial troublemaker. Distributing a negative — −3(x − 4) = −3x + 12, because negative times negative is positive — trips up more students than any other single algebra move. So does "distributing" over only the first term: 4(x + 2) is 4x + 8, not 4x + 2; the multiplier must touch every term inside. This calculator checks your distribution: enter the two key values (the outside multiplier and the inside terms' values) and confirm the computed result. The expansion check is immediate — substitute a number like x = 1 into both the original and expanded forms; 4(1 + 2) = 12 and 4(1) + 8 = 12 must agree.`,
    howToSteps: [
      "Identify the outside multiplier and each inside term — in 4(x + 2), the multiplier is 4 and the terms are x and 2.",
      "Multiply the outside value by EACH inside term on paper: 4·x = 4x and 4·2 = 8.",
      "Type the first key value (the multiplier) in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box to confirm your distributed computation.",
      "Test with x = 1: the original 4(1+2) = 12 must equal your expanded 4 + 8 = 12.",
    ],
    faqs: [
      { q: "What is the distributive property?", a: "a(b + c) = ab + ac — multiplying a sum distributes the multiplication to each term. It also works over subtraction: a(b − c) = ab − ac." },
      { q: "What is the most common distributive property mistake?", a: "Two contenders: forgetting to multiply every inside term (4(x+2) ≠ 4x+2), and sign errors with negatives (−3(x−4) = −3x+12, not −3x−12)." },
      { q: "How is the distributive property related to FOIL?", a: "FOIL is the distributive property applied twice: (a+b)(c+d) = a(c+d) + b(c+d), then distribute again. Every polynomial multiplication is repeated distribution." },
      { q: "What does 'factoring' have to do with distributing?", a: "Factoring is distribution in reverse: 4x + 8 = 4(x + 2). You spot the common factor and 'undistribute' it — which is why the property matters in both directions." },
      { q: "Can I use the distributive property for mental math?", a: "Absolutely — it's the best mental-math tool there is. 7 × 98 = 7(100 − 2) = 700 − 14 = 686, and 15% tips are 10% + 5% by distribution." },
    ],
  },

  "vector-analysis-calculator": {
    description: `A weather report says the wind is 20 mph from the northwest — that's a vector: a magnitude (20 mph) plus a direction (northwest). Vector analysis is the toolkit for taking such quantities apart and putting them back together: splitting a vector into x- and y-components, finding its length and heading angle, and recombining components into a resultant. Pilots do it on every crosswind landing (the wind splits into headwind and crosswind components), engineers do it for every force on a bridge, and game developers do it sixty times a second for every moving object.

The component formulas are the foundation: a vector with magnitude r at angle θ has x-component r·cos θ and y-component r·sin θ. A 20-mph wind from the northwest (135° from east) pushes about 14.1 mph west and 14.1 mph north. Going the other way, components recombine via the Pythagorean theorem and the arctangent. This calculator performs vector analysis on your two inputs: enter the pair of values (magnitude and angle, or x and y components) and read the computed analysis. The direction convention to memorize: angles are measured counterclockwise from the positive x-axis (east), so northwest is 135° — mixing up the reference direction is the classic error.`,
    howToSteps: [
      "Decide your input pair on paper — for a 20-mph northwest wind, that's magnitude 20 and angle 135°.",
      "Type the first value (magnitude) in the Variable A box.",
      "Type the second value (angle in degrees) in the Variable B box.",
      "Read the Result box for the computed vector analysis.",
      "Decompose by hand to verify: x = 20·cos(135°) ≈ −14.1, y = 20·sin(135°) ≈ 14.1.",
      "Confirm the angle convention: measured counterclockwise from east — northwest is 135°, not 45°.",
    ],
    faqs: [
      { q: "What is vector analysis?", a: "The study of vector operations: splitting vectors into components, finding magnitudes and directions, and combining vectors. It's the math behind forces, velocities, and any quantity with magnitude and direction." },
      { q: "How do I split a vector into components?", a: "x = r·cos θ, y = r·sin θ, where r is the magnitude and θ the angle from the positive x-axis. A 20-mph wind at 135° gives x ≈ −14.1, y ≈ 14.1." },
      { q: "How do I find a vector's direction from its components?", a: "θ = arctan(y/x), adjusted for quadrant: if x is negative, add 180°. Components (−14.1, 14.1) give θ = 135°, the northwest wind." },
      { q: "What is the difference between a vector and a scalar?", a: "Vectors have magnitude and direction (velocity, force); scalars have only magnitude (speed, temperature). 20 mph is a scalar; 20 mph northwest is a vector." },
      { q: "Where is vector analysis used?", a: "Aviation (wind correction), engineering (force diagrams), video games (movement and physics), GPS navigation, and sports analytics (launch angle and exit velocity in baseball)." },
    ],
  },

  "vector-magnitude-calculator": {
    description: `A drone's GPS reports it moved 3 miles east and 4 miles north — how far is it from launch, as the crow flies? The vector's magnitude answers: √(3² + 4²) = 5 miles, the Pythagorean theorem doing what it does best. Magnitude is a vector's length, its size stripped of direction, and the formula generalizes cleanly: in 2D it's √(x² + y²), in 3D √(x² + y² + z²). The 3-4-5 triangle is the mascot, but the idea scales to any dimension — physicists compute magnitudes of force, velocity, and field vectors in 3D the same way.

Magnitude is also the great comparer: two hikers' displacement vectors might point different directions, but the magnitudes say who ended up farther from camp. And it's the denominator in disguise everywhere — unit vectors (direction with length 1) are just vectors divided by their own magnitude, and the angle-between-vectors formula divides by both magnitudes. This calculator computes the magnitude from your vector's components: enter the two key values and read the result. The sanity check is the triangle inequality in work clothes: the magnitude can never exceed the sum of the absolute components (√(3²+4²) = 5 < 3 + 4 = 7), and it equals the largest component only when the others are zero.`,
    howToSteps: [
      "Write the vector's components on paper — for the drone, x = 3 (east) and y = 4 (north).",
      "Square each component and add: 9 + 16 = 25.",
      "Type the first key value in the Variable A box.",
      "Type the second key value in the Variable B box.",
      "Read the Result box for the magnitude: √25 = 5 miles.",
      "Sanity-check: the magnitude (5) must be at least as big as the largest component (4) and no bigger than the component sum (7).",
    ],
    faqs: [
      { q: "What is the magnitude of a vector?", a: "Its length: √(x² + y²) in 2D, √(x² + y² + z²) in 3D. The vector (3, 4) has magnitude √(9+16) = 5 — the 3-4-5 triangle." },
      { q: "How is magnitude different from the components?", a: "Components say how far along each axis; magnitude is the straight-line distance. (3, 4) has components 3 and 4 but a magnitude of 5 — the hypotenuse, not the sum." },
      { q: "What is a unit vector?", a: "A vector with magnitude 1 pointing in a given direction: divide any vector by its magnitude. The unit vector along (3, 4) is (0.6, 0.8)." },
      { q: "Can a vector's magnitude be negative?", a: "No — it's a square root of a sum of squares, always zero or positive. The zero vector (0, 0) is the only vector with zero magnitude." },
      { q: "Where is vector magnitude used?", a: "Distance from displacement components, speed from velocity vectors, force strength in physics, and normalizing directions in computer graphics — anywhere 'how much' matters apart from 'which way.'" },
    ],
  },

  "vector-subtraction-calculator": {
    description: `Vector subtraction is how you answer "how do I get from here to there?" If you're at point A = (2, 5) and your friend is at B = (7, 1), the displacement from you to them is B − A = (5, −4): five units east, four south. Component by component — subtract the x's, subtract the y's — and the result is the arrow pointing from the first point to the second. It's the same operation behind "final minus initial" in physics: displacement is final position minus initial position, change in velocity is final minus initial, and every "how much did it change?" question is a subtraction in vector clothing.

Order is the entire game: B − A points from A to B, while A − B points the opposite way. Mixing them up is the classic error — the components just flip sign, so (5, −4) becomes (−5, 4), a completely different direction. This calculator subtracts your two vectors: enter the first vector's values as the First Number input and the second as the Second Number input, then read the Difference. Verify geometrically: place the result's tail at A and its head should land exactly on B. The worked relationship "final minus initial" is worth memorizing — it's the single most-used vector subtraction in science.`,
    howToSteps: [
      "Decide the direction you need: displacement FROM A TO B is computed as B − A.",
      "Type the first vector's values into the First Number input — for B = (7, 1), enter those components.",
      "Type the second vector's values into the Second Number input — for A = (2, 5).",
      "Read the Difference box: (5, −4), the arrow from A to B.",
      "Verify geometrically: start at A = (2, 5), move (5, −4), and confirm you land on B = (7, 1).",
      "Double-check the order — swapping the inputs flips every sign and reverses the direction.",
    ],
    faqs: [
      { q: "How do you subtract vectors?", a: "Component by component: (7, 1) − (2, 5) = (7−2, 1−5) = (5, −4). Geometrically, A − B is the arrow from the tip of B to the tip of A when both start at the origin." },
      { q: "What does B − A represent?", a: "The displacement from A to B — the 'how to get there' arrow. Physics uses it constantly: displacement = final position − initial position." },
      { q: "Does the order matter in vector subtraction?", a: "Completely: B − A = −(A − B). Swapping flips every component's sign and reverses the direction. Always ask 'from where, to where?' first." },
      { q: "How is vector subtraction related to addition?", a: "A − B = A + (−B): subtract by adding the opposite. Flip B's direction (negate its components) and add head-to-tail." },
      { q: "Where is vector subtraction used?", a: "Navigation (route from current position to destination), physics (displacement, change in velocity/momentum), computer graphics (direction between two points), and sports (throw direction to a moving target)." },
    ],
  },

  "vector-calculator": {
    description: `Vectors are arrows with attitude — they carry both a size and a direction, which makes them the natural language of motion. Adding vectors is delightfully physical: walk 3 blocks east then 4 blocks north, and your total displacement is the arrow straight from start to finish, (3, 4), with length 5. The head-to-tail rule says it all — place the second arrow's tail at the first arrow's head, and the sum runs from the very first tail to the very last head. Sailors adding current to their heading, pilots correcting for wind, and quarterbacks leading a receiver all do vector addition, whether they name it or not.

Component-wise addition keeps the bookkeeping honest: add the x's, add the y's, done. (2, 5) + (3, −1) = (5, 4). Scalar multiplication stretches or shrinks: 2 × (3, 4) = (6, 8) doubles the length without changing direction, while −1 flips it end for end. This calculator performs vector operations on your two inputs: type the first vector's values in Variable A and the second in Variable B, then read the Result. The geometric check never lies — sketch the arrows head-to-tail and confirm the computed sum matches the drawn diagonal. If it doesn't, an x got added to a y somewhere.`,
    howToSteps: [
      "Sketch the vectors head-to-tail on paper to predict the sum's direction — for (3, 0) then (0, 4), expect northeast.",
      "Type the first vector's values in the Variable A box.",
      "Type the second vector's values in the Variable B box.",
      "Read the Result box for the computed vector result.",
      "Verify component-wise by hand: add x's to x's and y's to y's — (2, 5) + (3, −1) = (5, 4).",
      "Match the sketch to the numbers: the drawn diagonal and the computed sum must agree in both direction and rough size.",
    ],
    faqs: [
      { q: "How do you add two vectors?", a: "Add matching components: (2, 5) + (3, −1) = (5, 4). Geometrically, place them head-to-tail; the sum runs from the first tail to the last head." },
      { q: "What does multiplying a vector by a number do?", a: "It scales the length: 2 × (3, 4) = (6, 8). Positive scalars keep the direction; negative scalars reverse it. The number is called a scalar because it has no direction." },
      { q: "What is a resultant vector?", a: "The single vector equivalent to a combination — the sum of several vectors. A plane's airspeed plus the wind gives the resultant ground track." },
      { q: "Can you add vectors pointing in different dimensions?", a: "Only matching components combine — a 2D and a 3D vector can't be added directly. Pad the shorter one with zeros (treat (3, 4) as (3, 4, 0)) if the problem justifies it." },
      { q: "Vector addition vs. regular addition — what's new?", a: "Direction. 3 + 4 = 7 for numbers, but 3 east + 4 north = 5 northeast for vectors. Components add like numbers; the total follows the Pythagorean theorem." },
    ],
  },

  "vertex-calculator": {
    description: `The vertex is a parabola's moment of truth — the single point where rising becomes falling or falling becomes rising, and the answer to every "what's the most/least?" question the curve can ask. For y = −2x² + 8x − 3, the vertex sits at (2, 5): the maximum value the function ever reaches, achieved when x = 2. Whether the problem is a farmer fencing the largest possible rectangular pen, a company pricing for maximum revenue, or a diver's height over time, the vertex is the headline number and everything else is supporting detail.

Three routes lead there. The formula x = −b/(2a) is fastest — here x = −8/(2·−2) = 2, then y = −2(4) + 16 − 3 = 5. Completing the square reveals the structure: y = −2(x − 2)² + 5 wears its vertex (2, 5) openly. And calculus finds it as the point where the derivative  −4x + 8 equals zero. This calculator evaluates the vertex: enter your two known values and read the result. The sign of a names the prize before you compute — negative a means the vertex is a maximum (the arch's peak), positive a means it's a minimum (the valley floor) — so you always know what kind of answer to expect.`,
    howToSteps: [
      "Write the quadratic in standard form on paper — for y = −2x² + 8x − 3: a = −2, b = 8, c = −3.",
      "Compute the axis of symmetry x = −b/(2a) = 2, then find y by substitution: y = 5.",
      "Type the first value in the Variable A box.",
      "Type the second value in the Variable B box.",
      "Read the Result box and match it against your hand-computed vertex (2, 5).",
      "Interpret the sign: a = −2 is negative, so (2, 5) is a maximum — the function's highest point.",
    ],
    faqs: [
      { q: "What is the vertex of a quadratic?", a: "Its extreme point — the maximum for downward-opening parabolas, the minimum for upward-opening ones. For y = −2x² + 8x − 3, the vertex (2, 5) is the function's greatest value." },
      { q: "What is the fastest way to find the vertex?", a: "x = −b/(2a), then substitute back for y. Two quick computations, no completing the square required — ideal under test time pressure." },
      { q: "How is the vertex related to the axis of symmetry?", a: "The vertex sits on the axis of symmetry, the vertical line x = −b/(2a). The parabola mirrors itself across this line, so the vertex is its natural center." },
      { q: "Vertex vs. y-intercept — don't confuse them?", a: "Right — the y-intercept (0, c) is where the curve crosses the y-axis, while the vertex is the max/min point. For y = −2x² + 8x − 3, the y-intercept is (0, −3) but the vertex is (2, 5)." },
      { q: "People also search 'parabola calculator' — is that this?", a: "Often. 'Parabola calculator,' 'vertex calculator,' and 'quadratic vertex finder' usually mean locating the vertex — though some searchers want roots or the focus instead." },
    ],
  },
};
