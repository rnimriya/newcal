import type { SEOContent } from "@/lib/seo/content";

export const BATCH_08: Record<string, Partial<SEOContent>> = {
  "catenary-calculator": {
    description: `Power lines, suspension-bridge cables, and the patio string lights you hung last summer all droop in the same elegant curve — the catenary. It is the shape any flexible cable takes when it hangs under its own weight, and mathematicians describe it with the hyperbolic cosine: y equals a times cosh of x divided by a. The parameter a is set by the ratio of the cable's horizontal tension to its weight per foot, so a taut, heavy-duty power line has a large a and barely sags, while a loose string of lights has a small a and swoops deeply.

A catenary is close to, but not the same as, a parabola. A parabola appears when the load is spread evenly across the horizontal span — like a bridge deck pulling down on its main cable — while the catenary describes the cable's own weight alone. This calculator evaluates the curve: give it the parameter a and a horizontal distance x from the lowest point, and it returns the cable's height y there. A contractor sizing a service drop across a 40-foot driveway, or a homeowner figuring out how much extra string light to buy for a 12-foot sag, gets exact numbers instead of eyeballing it.`,
    howToSteps: [
      "Type the catenary parameter a in the Variable A box — for example, 50 for a fairly taut cable (a equals horizontal tension divided by weight per foot).",
      "Type the horizontal distance x from the cable's lowest point in the Variable B box — for example, 20 for 20 feet out from center.",
      "Read the Result box for the cable's height y at that point.",
      "Compare two values of a to feel the difference: raise a toward 100 and the sag flattens; drop it toward 25 and the droop deepens.",
      "Add the lowest-point height to your result to estimate total cable length before ordering materials.",
    ],
    faqs: [
      { q: "What is the catenary formula in plain words?", a: "The height y of the cable equals the parameter a multiplied by the hyperbolic cosine of x divided by a — written y = a·cosh(x/a). Near the center, cosh behaves like 1 + x²/(2a²), which is why the curve looks almost like a shallow parabola at small distances." },
      { q: "Is a hanging cable a parabola or a catenary?", a: "A free-hanging cable is a catenary. It only looks parabolic when an extra load is spread evenly across the span — for instance, a suspension bridge's deck pulling down on the main cable — in which case the combined shape is a parabola." },
      { q: "When would I actually use a catenary calculator?", a: "Electricians estimating service-drop sag, event planners buying string lights, and architects sketching arches all use it. A catenary turned upside down is the strongest arch shape, which is why Gaudí designed with hanging-chain models." },
      { q: "What does the parameter a control?", a: "It controls how flat or droopy the curve is. Bigger a means higher tension relative to weight, so the cable stays flatter. Smaller a means more sag for the same span." },
      { q: "How do I estimate a from a real cable?", a: "Measure the sag at the center and the half-span, then solve the catenary equation for a — or start with the approximation a ≈ span²/(8 × sag) and refine it with the calculator." },
    ],
  },

  "center-mass-calculator": {
    description: `Load a pickup with the toolbox behind the cab and it steers straight; hang the same toolbox off the tailgate and the steering goes light and twitchy. The difference is the center of mass — the single point where you can pretend all of an object's weight is concentrated. For a set of point masses it is the weighted average of their positions: multiply each mass by its position, add those products, then divide by the total mass. Heavier objects drag the balance point toward themselves, which is why a 220-pound linebacker and a 150-pound receiver balance a seesaw only when the linebacker sits closer to the pivot.

The stakes are real. Trailer manufacturers print a rule that about 60 percent of cargo weight should sit ahead of the axle, because a trailer whose balance point falls behind its wheels will sway at highway speed. Aircraft pilots run a weight-and-balance sheet before every flight for the same reason. This calculator evaluates the pieces of that weighted average: enter each mass and its distance from your chosen zero point, and use the results to find where everything balances.`,
    howToSteps: [
      "Type the first object's mass in the Variable A box — for example, 200 for a 200-pound crate.",
      "Type that object's distance from your reference point in the Variable B box — for example, 4 for 4 feet ahead of the trailer axle.",
      "Read the Result box: it multiplies the two numbers, giving the object's moment about your reference point.",
      "Repeat the same pair of entries for every other load, add all the moments, and divide by the total weight to locate the balance point.",
      "Keep every distance measured from the same zero point, and keep all units matching — all pounds with all feet.",
    ],
    faqs: [
      { q: "What is the center of mass formula in plain words?", a: "Add up each object's mass times its position, then divide by the total mass. In symbols: x_cm = (m₁x₁ + m₂x₂ + …) / (m₁ + m₂ + …). The answer is the balance point measured from your zero mark." },
      { q: "How is center of mass different from centroid?", a: "The centroid is the geometric center of a shape and ignores weight. The center of mass weights each part by its actual mass, so a lopsided or multi-material object balances away from its centroid, toward the heavy side." },
      { q: "Why does trailer balance matter so much?", a: "If the balance point falls behind the trailer's axle, the tongue goes light and the trailer can start swaying side to side at 55–65 mph. Aim for roughly 60 percent of the weight ahead of the axle." },
      { q: "Can the center of mass sit outside the object?", a: "Yes. A boomerang's, a donut's, or a loaded trailer's balance point can be in empty space. That is normal — it is a weighted average, not a physical spot inside the material." },
      { q: "Do all my units have to match?", a: "Yes. Mixing pounds with kilograms, or feet with inches, silently corrupts the weighted average. Convert everything to one mass unit and one length unit first." },
    ],
  },

  "centroid-calculator": {
    description: `Cut a triangle out of stiff cardboard and balance it on a pencil tip — the tip lands under one magic point every time: the centroid. It is a shape's geometric center, the point where it would balance perfectly if cut from uniform material. For a triangle there is a beautifully simple rule: average the x-coordinates of the three corners, then average the y-coordinates, and that ordered pair is the centroid. A triangle with corners at (0, 0), (6, 0), and (3, 6) has its centroid at (3, 2) — one-third of the way up from the base.

Every median of the triangle passes through this point, and the centroid always divides each median in a 2-to-1 ratio. Steel fabricators use it to pick the lift point for a plate so a crane hoists it level; sign makers use it to place the mounting bracket so a hanging sign does not tilt; geometry students meet it as one of the triangle's four classic centers. For uniform-density shapes the centroid and the center of mass coincide — but for anything with uneven weight, the center of mass drifts away from the centroid toward the heavy side.`,
    howToSteps: [
      "Type the average of your three corner x-values in the Variable A box — for corners at x = 0, 6, and 3, enter 3.",
      "Type the average of the three corner y-values in the Variable B box — for y = 0, 0, and 6, enter 2.",
      "Read the Result box and pair it with your two averages: the centroid sits at (3, 2).",
      "Double-check by sketching: the point should sit one-third of the height above the base and two-thirds below the top corner.",
      "For a quadrilateral or polygon, split it into triangles, find each triangle's centroid, and average those weighted by area.",
    ],
    faqs: [
      { q: "What is the centroid of a triangle in plain words?", a: "Average the three x-coordinates to get the centroid's x, and average the three y-coordinates to get its y. In symbols: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)." },
      { q: "Is the centroid the same as the center of mass?", a: "Only for uniform-density objects. The centroid is purely geometric; the center of mass folds in the actual weight of each part, so a triangle made of half steel and half foam balances away from its centroid." },
      { q: "What is the 2-to-1 rule for medians?", a: "Each median — a line from a corner to the midpoint of the opposite side — passes through the centroid, which cuts it so the longer piece (the one touching the corner) is twice the shorter piece." },
      { q: "Where is the centroid of a right triangle?", a: "One-third of each leg away from the right-angle corner. For a right triangle with corners at (0,0), (6,0), and (0,4), the centroid is at (2, 1.33)." },
      { q: "People also search 'triangle center calculator' — is that this?", a: "Usually, yes. 'Triangle center' most often means the centroid, though triangles have three other famous centers: the circumcenter, the incenter, and the orthocenter." },
    ],
  },

  "chain-rule-calculator": {
    description: `Nobody differentiates sin(x²) in one leap — you peel it like an onion, and the chain rule is the knife. The chain rule differentiates composite functions, which are functions nested inside other functions. In plain words: the derivative of the whole equals the derivative of the outer layer (with the inner layer left untouched) times the derivative of the inner layer. For sin(x²), the outer derivative is cos(x²) and the inner derivative is 2x, so the answer is 2x·cos(x²).

Students meet it in AP Calculus and first-semester college calculus, and it is the workhorse behind related-rates problems (a balloon's volume changing as its radius grows), optimization, and even the backpropagation that trains neural networks. The most common slip is forgetting to multiply by the inner derivative — writing cos(x²) alone and dropping the 2x. This calculator helps you check each layer: enter the outer derivative evaluated at the inner function, enter the inner derivative, and confirm their product matches your hand-computed answer.`,
    howToSteps: [
      "Differentiate the outer function on paper, leaving the inner function alone — for sin(x²) at x = 1 that is cos(1) ≈ 0.5403 — and type it in the Variable A box.",
      "Differentiate the inner function — for x² at x = 1 that is 2 — and type it in the Variable B box.",
      "Read the Result box: 0.5403 × 2 ≈ 1.0806, the full derivative at x = 1.",
      "Repeat at a second x-value to confirm the pattern before trusting your symbolic answer.",
      "For triple-nested functions, apply the rule twice: multiply outer × middle × inner derivatives.",
    ],
    faqs: [
      { q: "What is the chain rule in plain words?", a: "Derivative of the outside (inside unchanged) times derivative of the inside. In Leibniz form: dy/dx = dy/du · du/dx, where u is the inner function." },
      { q: "When do I need the chain rule?", a: "Whenever one function sits inside another: sin(x²), e^(3x), √(4x+1), (2x−5)⁷. If you can point to an 'inner' piece, you need the chain rule." },
      { q: "What is the most common chain rule mistake?", a: "Forgetting the final multiplication by the inner derivative. Students correctly get cos(x²) and stop, losing the × 2x. Always ask yourself: 'did I differentiate the inside?'" },
      { q: "How is the chain rule used in machine learning?", a: "Training a neural network (backpropagation) is the chain rule applied across dozens of nested layers — the error gradient flows backward one layer at a time, each step multiplying by that layer's derivative." },
      { q: "Chain rule vs. product rule — how do I tell?", a: "Nesting means chain rule (one function inside another); multiplication of two side-by-side functions means product rule. For x²·sin(x), use the product rule; for sin(x²), use the chain rule." },
    ],
  },

  "circle-area-calculator": {
    description: `A 12-inch pizza costs a few dollars more than a 10-inch, but it hides a delicious secret: it is not 20 percent bigger. The area of a circle is π times the radius squared — A = πr² — and the squaring is where intuition breaks. Because the radius is squared, a 12-inch pizza (radius 6) covers about 113 square inches while a 10-inch (radius 5) covers about 79, making the larger pie roughly 44 percent bigger. That same formula prices sod for a circular lawn, sizes a round rug for a 12-foot room, and tells a pool owner how many gallons of shock a round above-ground pool needs.

Remember that the formula wants the radius — half the diameter — so a 24-foot-diameter pool uses r = 12, not 24, a mistake that quadruples the answer. Enter the radius twice and the calculator returns r²; multiply by π (3.1416) for the area, then multiply by your price per square foot to get the material cost before you ever drive to the store.`,
    howToSteps: [
      "Measure the diameter and halve it — a 16-inch pizza has radius 8 — then type that radius in the Variable A box.",
      "Type the same radius again in the Variable B box, since the formula squares it (r × r).",
      "Read the Result box for r² — for r = 8 that is 64 — then multiply by π (3.1416) for the area: about 201 square inches.",
      "Compare sizes: run a 10-inch and a 12-inch pizza and divide the two areas to get the true size ratio.",
      "For cost estimates, multiply the area by your price per square foot — 113 square inches of pizza at $0.10 per square inch is about $11.30 of pie.",
    ],
    faqs: [
      { q: "What is the circle area formula in plain words?", a: "Multiply π (about 3.1416) by the radius squared — the radius times itself. A = πr². Use the radius, not the diameter." },
      { q: "Why is a 12-inch pizza so much bigger than a 10-inch?", a: "Area grows with the square of the radius. The 12-inch has (6²/5²) = 36/25 = 1.44 times the area — 44 percent more pizza for a small price bump, which is why the large is usually the better deal." },
      { q: "What is the biggest mistake with circle area?", a: "Plugging in the diameter instead of the radius. Since the value gets squared, the error quadruples your answer — a 24-foot pool computed with r = 24 gives four times the true area." },
      { q: "How do I find the area if I only know the circumference?", a: "Divide the circumference by 2π to get the radius, then use πr². A 31.4-foot circumference means r = 5 feet and area ≈ 78.5 square feet." },
      { q: "Does this work for square feet vs. square inches?", a: "Yes — the answer comes out in square whatever-you-measured. Radius in inches gives square inches; radius in feet gives square feet. Divide square inches by 144 to convert to square feet." },
    ],
  },

  "circuit-analysis-calculator": {
    description: `A string of Christmas lights goes dark, a car fuse keeps blowing, a phone charger runs hot — every one of these is a circuit problem, and the underlying math is simpler than it looks. Nearly all basic circuit analysis rests on Ohm's law: voltage equals current times resistance (V = I × R). Know any two and you find the third, and the power formula P = V × I tells you the wattage a component burns — the number that decides whether a resistor smokes or a wire overheats. A 120-volt US wall outlet pushing 0.5 amps through a space heater's element means the element is 240 ohms and the heater draws 60 watts.

DIYers use these relationships to pick the right resistor for an LED, to size a fuse so it blows before the wiring melts, or to check whether a 15-amp bedroom circuit can handle a gaming PC plus a space heater (it usually cannot — 1,800 watts max at 120 volts). This calculator multiplies your two known quantities so you can solve for the third: enter voltage and current to get power, or current and resistance to get the voltage drop.`,
    howToSteps: [
      "Type the voltage in the Variable A box — for example, 120 for a standard US wall outlet.",
      "Type the current in amps in the Variable B box — for example, 0.5 for a small appliance.",
      "Read the Result box: 120 × 0.5 = 60, which in this pairing is the power in watts.",
      "To find a voltage drop instead, enter current in Variable A and the known resistance in Variable B — the product is the drop.",
      "Compare the wattage against the circuit's limit: a 15-amp, 120-volt circuit tops out at 1,800 watts.",
    ],
    faqs: [
      { q: "What is Ohm's law in plain words?", a: "Voltage equals current times resistance: V = I × R. Double the voltage and you double the current through the same resistor; double the resistance and the current halves." },
      { q: "How do I calculate electrical power?", a: "Multiply voltage by current: P = V × I. A 120-volt outlet delivering 12 amps supplies 1,440 watts — just under a 15-amp circuit's 1,800-watt ceiling." },
      { q: "Why does my phone charger get hot?", a: "Heat comes from power dissipation, P = V × I. Cheap or failing chargers waste more power as heat, and a charger rated below what your phone tries to draw runs at its limit and warms up." },
      { q: "What size fuse do I need?", a: "Pick a fuse rated slightly above the circuit's normal current but below the wire's safe limit. A device drawing 8 amps on wiring rated for 15 amps is well protected by a 10-amp fuse." },
      { q: "Can I run a space heater and a PC on one circuit?", a: "Usually not. A 1,500-watt heater plus a 600-watt gaming PC totals 2,100 watts — over the 1,800-watt safe max of a 15-amp, 120-volt US circuit — so the breaker will trip." },
    ],
  },

  "circumcenter-calculator": {
    description: `Every triangle has a secret companion circle passing exactly through all three corners — and the circumcenter is the pinpoint middle of that circle. It is the center of the circumscribed circle, the unique circle threading through a triangle's three vertices. You find it where the perpendicular bisectors of the sides meet — or with coordinates, by solving for the point equidistant from all three corners.

For an acute triangle it sits inside; for a right triangle it lands exactly on the midpoint of the hypotenuse (which is why the hypotenuse of a right triangle is always a diameter of its circumcircle); for an obtuse triangle it falls outside. Surveyors and construction layout crews care because three known points define a circle's center — the same geometry behind trilateration in GPS. Students usually meet the circumcenter alongside the centroid, incenter, and orthocenter as the triangle's four classic centers. This calculator walks through the coordinate computation: enter the vertex values and combine them to locate the center and its radius.`,
    howToSteps: [
      "Type the x-coordinate of your first vertex in the Variable A box — for example, 0 for a corner at the origin.",
      "Type the y-coordinate of the second vertex in the Variable B box — for example, 6.",
      "Read the Result box and combine the outputs step by step: the circumcenter is the point equidistant from all three corners.",
      "Sanity-check with a right triangle: the answer should land on the midpoint of the longest side.",
      "Measure from the center to any corner to get the circumradius — all three distances must match.",
    ],
    faqs: [
      { q: "What is a circumcenter in plain words?", a: "The center of the circle that passes through all three corners of a triangle. It is the point exactly as far from each vertex as from the others." },
      { q: "How do you find the circumcenter?", a: "Draw the perpendicular bisector of each side (the line cutting the side in half at a right angle). All three bisectors cross at the circumcenter. With coordinates, solve for the point equidistant from the three vertices." },
      { q: "Where is the circumcenter of a right triangle?", a: "On the midpoint of the hypotenuse. The hypotenuse is a diameter of the circumcircle — a handy shortcut for homework and construction layout." },
      { q: "Can the circumcenter be outside the triangle?", a: "Yes — for obtuse triangles it sits outside, past the longest side. For acute triangles it is inside, and for right triangles it is on the hypotenuse." },
      { q: "Circumcenter vs. incenter — what's the difference?", a: "The circumcenter is the center of the circle through the vertices (found from perpendicular bisectors of the sides). The incenter is the center of the circle tangent to the sides (found from angle bisectors). They coincide only in an equilateral triangle." },
    ],
  },

  "co-prime-calculator": {
    description: `The numbers 8 and 15 look unrelated, but they share a quiet superpower: no number except 1 divides them both. Two numbers are co-prime (also called relatively prime) when their greatest common divisor is 1 — they share no common factor beyond 1. The pair 8 and 15 qualifies because 8's factors are 1, 2, 4, 8 and 15's are 1, 3, 5, 15, with only 1 in common; the pair 8 and 12 fails because both share 2 and 4.

Co-prime pairs matter far beyond number puzzles: RSA encryption, the system guarding credit card numbers online, builds its keys from co-prime relationships, and a fraction is fully simplified exactly when its numerator and denominator are co-prime (7/15 cannot reduce, but 8/12 can). This calculator checks any pair for you: enter both numbers, and it evaluates their greatest common divisor — a result of 1 means co-prime, and anything larger names the biggest shared factor.`,
    howToSteps: [
      "Type the first number in the Variable A box — for example, 8.",
      "Type the second number in the Variable B box — for example, 15.",
      "Read the Result box: it computes the greatest common divisor of the pair.",
      "A GCD of 1 means the numbers are co-prime; a larger GCD (like 4 for 8 and 12) names their biggest shared factor.",
      "Test a fraction the same way: enter numerator and denominator to see whether it can be simplified.",
    ],
    faqs: [
      { q: "What does co-prime mean in plain words?", a: "Two numbers are co-prime when the only number dividing both is 1. Their greatest common divisor (GCD) equals 1. They do not need to be prime themselves — 8 and 15 are co-prime but neither is prime." },
      { q: "Are 8 and 12 co-prime?", a: "No. Both are divisible by 2 and 4, so their GCD is 4. They share factors beyond 1, which disqualifies them." },
      { q: "Can two even numbers be co-prime?", a: "Never. Every even number is divisible by 2, so any pair of evens shares the factor 2 and their GCD is at least 2." },
      { q: "Why do co-prime numbers matter in encryption?", a: "RSA public-key encryption picks keys using Euler's totient function, which counts numbers co-prime to a modulus. The security of online shopping and banking rests on how hard it is to factor the product of two large primes — the co-prime structure is what makes the math work." },
      { q: "How is this different from simplifying a fraction?", a: "It is the same test. A fraction is fully reduced exactly when its numerator and denominator are co-prime. If the GCD is bigger than 1, divide top and bottom by it to simplify." },
    ],
  },

  "combinations-calculator": {
    description: `Your odds of winning Powerball are 1 in 292 million — a number that comes straight from the combinations formula, not from luck or vibes. Combinations count how many ways you can choose r items from n without caring about order: C(n, r) = n! / (r! × (n−r)!). Order not mattering is the key distinction — a 5-card poker hand of the same five cards counts once no matter how they were dealt, which is why combinations (not permutations) govern poker odds, lottery odds, and fantasy draft boards.

Choosing 3 toppings from 10 gives 120 possible pizzas; choosing 6 numbers from 69 (the Powerball white balls) gives 292,201,338 possibilities. Note the symmetry that saves arithmetic: C(n, r) always equals C(n, n−r), so choosing 47 from 50 is the same count as choosing 3. Enter your total pool in the Total Items (n) box and your selection size in the Chosen Items (r) box, and the calculator returns the count.`,
    howToSteps: [
      "Type the size of the full pool in the Total Items (n) box — for example, 52 for a deck of cards.",
      "Type how many you are choosing in the Chosen Items (r) box — for example, 5 for a poker hand.",
      "Read the Combinations C(n, r) result: 2,598,960 possible 5-card hands.",
      "Use the symmetry shortcut for big selections: C(50, 47) equals C(50, 3) = 19,600.",
      "Sanity-check small cases by hand — C(4, 2) should be 6 — before trusting a huge result.",
    ],
    faqs: [
      { q: "What is the combinations formula in plain words?", a: "C(n, r) = n! ÷ (r! × (n−r)!). It counts the ways to pick r items from n when the order of the pick does not matter. The (n−r)! in the denominator cancels most of the n!, so you rarely compute giant factorials directly." },
      { q: "Combinations vs. permutations — what's the difference?", a: "Order matters in permutations, not in combinations. A 3-digit bike lock uses permutations (1-2-3 differs from 3-2-1); a 5-card poker hand uses combinations (the same five cards are one hand however dealt). Combinations are always fewer than permutations." },
      { q: "What are the real odds of winning Powerball?", a: "About 1 in 292.2 million. That is C(69, 5) × 26: the ways to choose 5 white balls from 69, times the 26 possible red Powerballs." },
      { q: "Can r be bigger than n?", a: "No — you cannot choose 7 items from a pool of 5. The calculator needs r ≤ n; if your selection is bigger than the pool, swap the two values." },
      { q: "People search 'nCr calculator' — is that this?", a: "Exactly. nCr is the standard notation for combinations: C(n, r), read as 'n choose r'. This page computes it." },
    ],
  },
  "combustion-calculator": {
    description: `Every gallon of gasoline your car burns combines with oxygen and leaves as carbon dioxide and water — and the exact amounts follow one balanced equation. Combustion is the rapid chemical reaction of a fuel with oxygen, releasing heat, light, carbon dioxide, and water. Balancing the equation is an exercise in atom counting: a complete burn of methane (CH₄ + 2O₂ → CO₂ + 2H₂O) shows one carbon, four hydrogens, and four oxygens on each side.

The general pattern for a hydrocarbon is C_xH_y + (x + y/4)O₂ → xCO₂ + (y/2)H₂O — count carbons for the CO₂ coefficient, halve the hydrogens for water, then balance the oxygens last. Auto engineers use it to predict CO₂ per gallon (about 19.6 pounds for gasoline), HVAC techs use it to tune furnace air-fuel ratios, and chemistry students meet it as the classic equation-balancing drill. Enter the fuel's carbon and hydrogen counts and the calculator works out the oxygen needed and the products formed.`,
    howToSteps: [
      "Type the number of carbon atoms in one fuel molecule in the Variable A box — for example, 1 for methane.",
      "Type the number of hydrogen atoms in the Variable B box — for example, 4 for methane.",
      "Read the Result box for the oxygen coefficient: (1 + 4/4) = 2, so CH₄ needs 2 O₂.",
      "Form the products: the carbon count becomes the CO₂ coefficient and half the hydrogen count becomes the H₂O coefficient.",
      "Verify atom counts match on both sides before using the equation for any emissions math.",
    ],
    faqs: [
      { q: "What is the combustion equation in plain words?", a: "Fuel + oxygen → carbon dioxide + water (+ heat). For a hydrocarbon C_xH_y, the balanced form is C_xH_y + (x + y/4)O₂ → xCO₂ + (y/2)H₂O." },
      { q: "How much CO₂ does a gallon of gasoline produce?", a: "About 19.6 pounds. Gasoline is roughly C₈H₁₈, and the balanced combustion equation shows each gallon's carbon ending up as CO₂, which weighs more than the fuel because the oxygen comes from the air." },
      { q: "What is complete vs. incomplete combustion?", a: "Complete combustion with enough oxygen yields CO₂ and water. Starved of oxygen, the same fuel makes carbon monoxide (CO) and soot instead — which is why a yellow, sooty furnace flame means 'call a technician.'" },
      { q: "How do you balance a combustion equation?", a: "Balance carbon first (it sets the CO₂ count), then hydrogen (it sets the water count), then oxygen last. Never change the fuel's subscripts — only the coefficients in front." },
      { q: "Why do furnaces need the right air-fuel ratio?", a: "Too little air wastes fuel as CO and soot; too much air carries heat up the flue. The balanced equation defines the stoichiometric ideal, and technicians tune slightly lean of it for safety." },
    ],
  },

  "common-factors": {
    description: `You have 36 bagels and 48 cream-cheese tubs for the office breakfast — what is the biggest number of identical platters you can build? The greatest common factor (GCF) is the largest number dividing two numbers evenly, and the least common multiple (LCM) is the smallest number both divide into. For 36 and 48, the common factors are 1, 2, 3, 4, 6, and 12 — so 12 is the GCF (12 identical platters, each with 3 bagels and 4 tubs), and 144 is the LCM.

The slick way to find the GCF is Euclid's algorithm: divide the bigger by the smaller, replace the bigger with the remainder, and repeat until the remainder is zero — the last divisor is the GCF. The LCM then falls out of the relationship LCM = (a × b) ÷ GCF. Beyond party planning, the GCF simplifies fractions (divide top and bottom by it), and the LCM syncs repeating events — two buses running every 12 and 18 minutes meet every 36. Enter both numbers and the calculator returns the GCF, the LCM, and the reduced pair.`,
    howToSteps: [
      "Type the first number in the First Number (a) box — for example, 36.",
      "Type the second number in the Second Number (b) box — for example, 48.",
      "Read the Greatest Common Factor box: 12, the biggest number dividing both.",
      "Read the Least Common Multiple box: 144, the smallest number both divide into.",
      "Use the a ÷ GCF and b ÷ GCF boxes — 3 and 4 — to see the fully reduced pair.",
    ],
    faqs: [
      { q: "How do I find the GCF in plain words?", a: "List the factors of each number and take the biggest one they share. For 36 (1, 2, 3, 4, 6, 9, 12, 18, 36) and 48 (1, 2, 3, 4, 6, 8, 12, 16, 24, 48), the shared factors top out at 12." },
      { q: "What is the fastest way to find a GCF by hand?", a: "Euclid's algorithm: divide the larger by the smaller and keep the remainder; repeat with the divisor and remainder until the remainder is 0. The last nonzero divisor is the GCF. For 48 and 36: 48 ÷ 36 leaves 12, 36 ÷ 12 leaves 0, so the GCF is 12." },
      { q: "How are GCF and LCM related?", a: "GCF × LCM = a × b. So LCM = (a × b) ÷ GCF. For 36 and 48: (36 × 48) ÷ 12 = 144." },
      { q: "When do I use GCF vs. LCM?", a: "Use the GCF when splitting things into the largest equal groups (simplifying fractions, dividing supplies). Use the LCM when syncing repeating cycles (bus schedules, gear teeth, repeating decimals)." },
      { q: "People search 'greatest common divisor' — same thing?", a: "Yes. Greatest common divisor (GCD), greatest common factor (GCF), and highest common factor (HCF) are three names for the same number." },
    ],
  },

  "comparing-fractions-calculator": {
    description: `Is 3/4 of a cup more than 2/3? Your measuring cups say yes, but plenty of smart adults freeze on the question. Comparing fractions is easiest with cross-multiplication: multiply the numerator of each fraction by the denominator of the other, and the bigger product belongs to the bigger fraction. For 3/4 vs 2/3, compute 3 × 3 = 9 and 2 × 4 = 8 — since 9 beats 8, 3/4 is larger. The method works because both products are really the two fractions rewritten over the common denominator 12: 9/12 vs 8/12.

The same trick settles sale prices (is 1/3 off better than 2/5 off?), test scores (17/20 vs 41/50), and recipe scaling. Watch out for the classic trap: with the same numerator, the fraction with the bigger denominator is smaller — 1/8 of a pizza is less than 1/4. Enter both fractions and the calculator cross-multiplies, names the larger one, and shows the decimal values for confirmation.`,
    howToSteps: [
      "Type the first cross-product in the Variable A box — for 3/4 vs 2/3, that is 3 × 3 = 9.",
      "Type the second cross-product in the Variable B box — 2 × 4 = 8.",
      "Read the Result box: the two products side by side tell you 9 > 8, so 3/4 wins.",
      "For a gut check, convert each fraction to a decimal — 0.75 vs 0.667 — and confirm the same winner.",
      "Remember the trap: with equal numerators, the bigger denominator means a smaller slice.",
    ],
    faqs: [
      { q: "What is the cross-multiplication trick in plain words?", a: "Multiply each numerator by the other fraction's denominator. The fraction whose cross-product is bigger is the bigger fraction. For 3/4 vs 2/3: 3×3=9 and 2×4=8, so 3/4 > 2/3." },
      { q: "Which is bigger: 1/4 or 1/8?", a: "1/4. When numerators match, the smaller denominator wins because the whole is cut into fewer, bigger pieces." },
      { q: "How do I compare fractions with different denominators quickly?", a: "Cross-multiply (above), convert to decimals, or find a common denominator. Cross-multiplying is fastest for a simple bigger/smaller verdict." },
      { q: "Is 2/3 off a better sale than 1/2 off?", a: "Yes. Cross-multiplying 2/3 vs 1/2 gives 4 vs 3, so 2/3 off saves more. Always compare the discount fractions themselves, not the prices you pay." },
      { q: "Why does cross-multiplication actually work?", a: "Both cross-products are the fractions rewritten over one common denominator. 3/4 vs 2/3 becomes 9/12 vs 8/12, so comparing 9 vs 8 is legitimate." },
    ],
  },

  "completing-square-calculator": {
    description: `The quadratic formula gets all the glory, but completing the square is the method that actually explains where the formula comes from. Completing the square rewrites a quadratic ax² + bx + c in vertex form a(x − h)² + k, which exposes the parabola's vertex (h, k) directly. The move: factor a out of the x terms, take half of the new x-coefficient, square it, and add-and-subtract it inside — for x² − 6x + 5, half of −6 is −3, squared is 9, so the expression becomes (x − 3)² − 9 + 5 = (x − 3)² − 4, revealing the vertex at (3, −4).

The formulas behind the scenes are h = −b/(2a) and k = c − b²/(4a). Students use it in Algebra 2 and on the SAT to find maxima and minima — the vertex of a profit or projectile equation is the answer the word problem wants. Enter the three coefficients and the calculator returns h, k, the squared term, and the finished vertex form.`,
    howToSteps: [
      "Type the x² coefficient in the a (coefficient of x²) box — for example, 1 for x² − 6x + 5.",
      "Type the x coefficient in the b (coefficient of x) box — for example, −6.",
      "Type the constant in the c (constant) box — for example, 5.",
      "Read the h (x of vertex) and k (y of vertex) boxes: −(−6)/(2×1) = 3 and 5 − 36/4 = −4.",
      "Read the (b/2a)² box — 9 here — to see the exact term added and subtracted, then write the vertex form (x − 3)² − 4.",
    ],
    faqs: [
      { q: "What does completing the square do in plain words?", a: "It rewrites ax² + bx + c as a(x − h)² + k by adding and subtracting (b/2a)². The rewritten form shows the vertex (h, k) — the parabola's peak or valley — with no extra work." },
      { q: "Why complete the square instead of using the quadratic formula?", a: "The formula gives roots; completing the square gives the vertex form, which instantly reveals the maximum or minimum. For word problems about maximum profit or peak projectile height, the vertex is the whole point." },
      { q: "What is the (b/2a)² term?", a: "Half the x-coefficient, squared. It is the magic number that turns x² + bx into the perfect square (x + b/2)². For x² − 6x, it is (−3)² = 9." },
      { q: "How do you complete the square when a is not 1?", a: "Factor a out of the x² and x terms first, complete the square inside the parentheses, then distribute a back. For 2x² + 8x + 3: 2(x² + 4x) + 3 becomes 2(x + 2)² − 5." },
      { q: "Vertex form vs. standard form — which should I use?", a: "Standard form (ax² + bx + c) is best for finding roots with the formula. Vertex form (a(x−h)² + k) is best for graphing and optimization because the vertex (h, k) is visible." },
    ],
  },

  "complex-conjugate-calculator": {
    description: `Every complex number has a mirror twin across the real axis — and multiplying the two together performs a small miracle. The complex conjugate of a + bi is a − bi: flip the sign of the imaginary part and nothing else. The miracle is the product: (a + bi)(a − bi) = a² + b², a plain real number — the imaginary parts cancel completely. That trick is how you divide complex numbers: to compute (3 + 2i)/(1 − i), multiply top and bottom by the conjugate (1 + i) and the denominator becomes the real number 2.

Electrical engineers use conjugates constantly because AC circuit impedance is complex, and the power delivered depends on conjugate relationships — a junior EE student checking homework will reach for this page weekly. The conjugate also gives the modulus for free: |z|² = z × z̄. Enter the real and imaginary parts and the calculator returns the conjugate plus the real-valued product as a check.`,
    howToSteps: [
      "Type the real part in the Variable A box — for example, 3 for 3 + 2i.",
      "Type the imaginary part in the Variable B box — for example, 2.",
      "Read the Result box for the conjugate: 3 − 2i (same real part, flipped imaginary sign).",
      "Multiply the number by its conjugate to verify: (3+2i)(3−2i) = 9 + 4 = 13, a real number.",
      "Use the conjugate to divide: multiply numerator and denominator by it and the denominator turns real.",
    ],
    faqs: [
      { q: "What is a complex conjugate in plain words?", a: "The same complex number with the imaginary part's sign flipped: the conjugate of a + bi is a − bi. On the complex plane it is the mirror image across the real (horizontal) axis." },
      { q: "Why multiply by the conjugate?", a: "Because (a + bi)(a − bi) = a² + b², which is real. It is the standard trick for dividing complex numbers — it clears the imaginary part out of the denominator." },
      { q: "How do you divide complex numbers?", a: "Multiply top and bottom by the conjugate of the denominator. (3 + 2i)/(1 − i) becomes (3 + 2i)(1 + i)/2 = (1 + 5i)/2 = 0.5 + 2.5i." },
      { q: "What is the conjugate of a real number?", a: "Itself. A real number like 5 is 5 + 0i, so flipping the zero imaginary part changes nothing." },
      { q: "Where are conjugates used in real engineering?", a: "AC power systems: impedance, voltage, and current are complex, and real power calculations use conjugates. They also appear in signal processing and quantum mechanics." },
    ],
  },

  "complex-fractions": {
    description: `A fraction with fractions inside it looks like a typo — but complex fractions show up every time you halve a recipe that calls for 2/3 cup. A complex fraction is a fraction whose numerator, denominator, or both contain fractions — like (2/3)/(4/5). The fix is beautifully mechanical: dividing by a fraction is multiplying by its reciprocal, so (2/3)/(4/5) becomes (2/3) × (5/4) = 10/12 = 5/6.

In the general form (a/b)/(c/d), the simplified result is (a×d)/(b×c): cross-multiply the outer terms for the new numerator and the inner terms for the new denominator, then reduce. Middle-schoolers meet them in pre-algebra, bakers meet them scaling recipes, and they lurk inside rational-expression problems in Algebra 2. A classic trap is adding the little fractions' numerators straight across — the reciprocal method exists precisely so you never do that. Enter the four parts and the calculator cross-multiplies, reduces via the GCD, and shows the decimal value for confirmation.`,
    howToSteps: [
      "Type the top fraction's numerator in the Top numerator (a) box — for example, 2 for (2/3)/(4/5).",
      "Type the top fraction's denominator in the Top denominator (b) box — 3.",
      "Type the bottom fraction's parts in the Bottom numerator (c) and Bottom denominator (d) boxes — 4 and 5.",
      "Read the Result Numerator (a×d) and Result Denominator (b×c) boxes: 10 and 12.",
      "Check the GCD of result box and the Decimal Value box: GCD 2 reduces 10/12 to 5/6 ≈ 0.833.",
    ],
    faqs: [
      { q: "How do you simplify a complex fraction in plain words?", a: "Turn the division into multiplication by the reciprocal: (a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d)/(b×c). Then reduce the result by dividing top and bottom by their GCD." },
      { q: "What is (2/3)/(4/5)?", a: "5/6. Flip the bottom fraction and multiply: (2/3) × (5/4) = 10/12, which reduces to 5/6 (about 0.833)." },
      { q: "Why multiply by the reciprocal?", a: "Division asks 'how many of these fit in that.' Flipping the divisor and multiplying is the arithmetic shortcut that answers it — every fraction division works this way, complex or not." },
      { q: "Do I need a common denominator first?", a: "No — that is the long way. The reciprocal method skips common denominators entirely. One alternative: multiply top and bottom of the big fraction by the LCD of all the little denominators." },
      { q: "Where do complex fractions appear in real life?", a: "Scaling recipes with fractional measures, converting rates like miles per half hour, and simplifying rational expressions in algebra homework." },
    ],
  },

  "complex-modulus-calculator": {
    description: `On the complex plane, every number is an arrow from the origin — and the modulus is simply that arrow's length. The modulus (absolute value) of a + bi is √(a² + b²), the straight-line distance from the origin to the point — the Pythagorean theorem doing quiet work. So |3 + 4i| = 5, the beloved 3-4-5 triangle in disguise.

The modulus measures a complex number's size while ignoring its direction (its argument), which makes it the right tool whenever magnitude matters: the amplitude of an AC signal, the brightness of a pixel in Fourier image processing, or the strength of a quantum probability amplitude. A handy identity ties it to the conjugate: |z|² = z × z̄, so the modulus squared is always a plain real number. Enter the real and imaginary parts and the calculator returns the distance — for an EE student checking that a filter's gain stays under 1, it is a ten-second sanity check.`,
    howToSteps: [
      "Type the real part in the Variable A box — for example, 3 for 3 + 4i.",
      "Type the imaginary part in the Variable B box — for example, 4.",
      "Read the Result box: it combines them as √(3² + 4²) = 5.",
      "Verify with the conjugate identity: (3+4i)(3−4i) = 25, and √25 = 5.",
      "For a pure imaginary number like 7i, expect the modulus to equal 7 — the real part contributes nothing.",
    ],
    faqs: [
      { q: "What is the complex modulus in plain words?", a: "|a + bi| = √(a² + b²). It is the distance from the origin to the point (a, b) on the complex plane — the length of the number's arrow." },
      { q: "What is |3 + 4i|?", a: "5. √(9 + 16) = √25 = 5. Whenever you spot a Pythagorean triple hiding in a complex number, the modulus is the hypotenuse." },
      { q: "Can a modulus be negative or imaginary?", a: "Never. A modulus is a distance, so it is always a non-negative real number. |−3 − 4i| is also 5." },
      { q: "Modulus vs. argument — what's the difference?", a: "The modulus is the size (how far from the origin); the argument is the direction (the angle from the positive real axis). Together they form the polar form r∠θ." },
      { q: "Why do engineers care about modulus?", a: "Because it measures magnitude without direction: signal amplitude, filter gain, impedance magnitude. A circuit is stable when its transfer function's modulus stays bounded." },
    ],
  },

  "complex-number-calculator": {
    description: `Engineers could not analyze your wall outlet's AC power without them, yet complex numbers started as a 16th-century workaround for 'impossible' square roots. A complex number a + bi pairs a real part with an imaginary part built on i = √(−1). Adding is component-wise — (2 + 3i) + (1 − i) = 3 + 2i — while multiplying uses the FOIL pattern plus the rule i² = −1, so (1 + i)(1 − i) = 2. Division clears the denominator with the conjugate, and the modulus √(a² + b²) measures size.

The payoff is real: alternating-current circuits, where voltage and current have both magnitude and phase, are modeled as complex impedance, letting engineers solve AC problems with plain algebra instead of differential equations. The same numbers describe quantum states and digital signal filters. This calculator handles the arithmetic: enter the real and imaginary parts of each operand and it returns the sum, difference, product, or quotient with the work shown.`,
    howToSteps: [
      "Type the first number's real part in the Variable A box — for example, 2 for 2 + 3i.",
      "Type its imaginary part in the Variable B box — for example, 3.",
      "Choose the operation (add, subtract, multiply, divide) and read the Result box.",
      "Check a multiplication by hand: (1+i)(1−i) should give the real number 2.",
      "For division, confirm the denominator became real — that is the conjugate trick working.",
    ],
    faqs: [
      { q: "What is i in plain words?", a: "The imaginary unit, defined by i² = −1. It lets us write square roots of negatives: √(−9) = 3i. Combined with real numbers it forms a + bi." },
      { q: "How do you add complex numbers?", a: "Add real parts together and imaginary parts together: (2 + 3i) + (4 − i) = 6 + 2i. Geometrically, you are adding the arrows tip-to-tail." },
      { q: "How do you multiply complex numbers?", a: "FOIL them and replace i² with −1: (a + bi)(c + di) = (ac − bd) + (ad + bc)i. Example: (2 + 3i)(1 − i) = 5 + i." },
      { q: "Are complex numbers actually used, or just textbook exercises?", a: "Deeply used. AC circuit analysis, control systems, signal processing, and quantum mechanics all run on complex arithmetic — your phone's LTE radio demodulates signals with it." },
      { q: "What is the difference between imaginary and complex?", a: "Imaginary numbers are the bi part alone (like 4i). Complex numbers are the full a + bi pair. Every imaginary number is complex (with a = 0), but not vice versa." },
    ],
  },

  "congruence-calculator": {
    description: `It is 10 AM now — what time will it be 37 hours from now? You just did modular arithmetic in your head. Congruence is clock arithmetic made formal: a ≡ b (mod n) means a and b leave the same remainder when divided by n, so 37 ≡ 1 (mod 12) and your clock reads 11. The idea powers ISBN check digits, credit-card validation, hash tables, and the RSA encryption behind online banking — all of it remainders doing heavy lifting.

Solving linear congruences like 3x ≡ 4 (mod 7) means finding the x that makes both sides leave the same remainder (x = 6, since 18 ≡ 4 mod 7). The golden rule students forget: you can only 'divide' both sides by a number co-prime to the modulus. This calculator tests congruence claims and solves basic cases: enter the two numbers and the modulus and it reports the remainders and whether they match.`,
    howToSteps: [
      "Type the first number in the Variable A box — for example, 37.",
      "Type the modulus in the Variable B box — for example, 12 for clock hours.",
      "Read the Result box for the remainder: 37 mod 12 = 1.",
      "Compare two numbers by checking their remainders match — 37 ≡ 1 (mod 12), so 37 hours from 10 AM lands on 11.",
      "For solving 3x ≡ 4 (mod 7), test x values 0–6 until both sides share a remainder — x = 6 works.",
    ],
    faqs: [
      { q: "What does a ≡ b (mod n) mean in plain words?", a: "a and b leave the same remainder when divided by n — equivalently, n divides their difference. 17 ≡ 5 (mod 12) because both leave remainder 5." },
      { q: "How do you solve 3x ≡ 4 (mod 7)?", a: "Find x (0–6) making 3x leave remainder 4 when divided by 7. Testing: 3×6 = 18, and 18 ÷ 7 leaves 4. So x ≡ 6 (mod 7)." },
      { q: "Can I divide both sides of a congruence?", a: "Only by a number co-prime to the modulus. Dividing 2x ≡ 4 (mod 6) by 2 is illegal (2 shares a factor with 6) — and indeed it has two solutions, x ≡ 2 and x ≡ 5, not one." },
      { q: "Where is modular arithmetic used in real life?", a: "Clocks and calendars, ISBN and credit-card check digits, hashing in databases, random-number generators, and RSA encryption — remainders are everywhere." },
      { q: "Congruence vs. equality — what's the difference?", a: "Equality means identical values; congruence means identical remainders for a chosen modulus. 25 = 25 is equality, while 25 ≡ 1 (mod 12) is congruence." },
    ],
  },
  "conic-section-calculator": {
    description: `Slice a cone with a plane and you get nature's favorite shapes — the same curves behind satellite dishes, headlight reflectors, and planetary orbits. Conic sections are the curves you get slicing a double cone: circles, ellipses, parabolas, and hyperbolas. Algebraically they all come from the general second-degree equation Ax² + Bxy + Cy² + Dx + Ey + F = 0, and the discriminant B² − 4AC names the curve: negative means ellipse (zero B with A = C gives a circle), zero means parabola, positive means hyperbola.

So x²/9 + y²/4 = 1 is an ellipse with semi-axes 3 and 2, while y = x² is the parabola case with B² − 4AC = 0. The applications are physical: satellite dishes and car headlights are paraboloids that focus parallel rays to a point, whispering galleries exploit ellipse foci, and GPS satellites travel on near-circular elliptical orbits. Enter the equation's coefficients and the calculator identifies the conic and reports its key features — center or vertex, axes, and foci.`,
    howToSteps: [
      "Type the coefficient of x² in the Variable A box — for example, 4 for the ellipse 4x² + 9y² = 36.",
      "Type the coefficient of y² in the Variable B box — 9.",
      "Read the Result box: it evaluates the discriminant B² − 4AC — here 0 − 4(4)(9) = −144, negative, so the curve is an ellipse.",
      "Divide the equation by 36 to read the semi-axes: a = 3, b = 2.",
      "For a parabola check, confirm B² − 4AC equals exactly zero.",
    ],
    faqs: [
      { q: "How do you tell which conic section an equation is?", a: "Compute B² − 4AC from Ax² + Bxy + Cy² + Dx + Ey + F = 0. Negative → ellipse (circle if A = C and B = 0); zero → parabola; positive → hyperbola." },
      { q: "What conic is x² + y² = 25?", a: "A circle of radius 5 centered at the origin. Here A = C = 1 and B = 0, so B² − 4AC = −4 < 0, and the equal coefficients make the ellipse a circle." },
      { q: "Why are satellite dishes parabolic?", a: "A parabola reflects all incoming parallel rays to a single focus. Put the receiver at the focus and every signal the dish catches converges there — the same geometry runs in reverse for headlights and flashlights." },
      { q: "What is the eccentricity of each conic?", a: "Eccentricity e measures how 'stretched' the curve is: e = 0 for a circle, between 0 and 1 for an ellipse, exactly 1 for a parabola, and greater than 1 for a hyperbola." },
      { q: "Do I need to complete the square for conics?", a: "Often, yes — completing the square on x and y rewrites the general equation into standard form, which reveals the center/vertex and axes directly. It is the standard homework move." },
    ],
  },

  "continuity-calculator": {
    description: `A function is continuous if you can draw its graph without lifting your pen — and the places you must lift are exactly what this page hunts for. A function f is continuous at a point c when three things hold: f(c) is defined, the limit as x approaches c exists, and the two are equal. Failures come in three flavors students must name: removable discontinuities (a single hole, like (x²−1)/(x−1) at x = 1), jump discontinuities (piecewise definitions that leap, like a step function), and infinite discontinuities (vertical asymptotes, like 1/x at x = 0).

AP Calculus students spend real exam points classifying these, because differentiability requires continuity first — a function cannot have a derivative where it is not continuous. The practical check is one-sided limits: if the left-hand and right-hand limits disagree, you have a jump; if they agree but the point is missing, the hole is removable. Enter the function values around the point and the calculator compares the pieces to deliver the verdict.`,
    howToSteps: [
      "Type the left-hand limit in the Variable A box — for example, 2 for (x²−1)/(x−1) as x approaches 1 from the left.",
      "Type the right-hand limit in the Variable B box — 2.",
      "Read the Result box: it compares the two sides — matching limits with a missing point value means a removable discontinuity (a hole).",
      "If the sides disagree, you have a jump; if they blow up, an infinite discontinuity.",
      "Confirm the verdict by checking whether f(c) itself is defined.",
    ],
    faqs: [
      { q: "What is continuity in plain words?", a: "You can trace the graph through the point without lifting your pen. Formally: the function is defined at c, the limit as x→c exists, and the limit equals the function's value." },
      { q: "What are the three types of discontinuity?", a: "Removable (a hole — fill it with one point), jump (left and right limits exist but differ), and infinite (a vertical asymptote where the function blows up)." },
      { q: "Is (x²−1)/(x−1) continuous at x = 1?", a: "No — it has a removable discontinuity (a hole) at x = 1, because the function is undefined there even though the limit from both sides is 2. Canceling gives x + 1, which fills the hole." },
      { q: "Does continuity imply differentiability?", a: "No — it is one-way. Every differentiable function is continuous, but a continuous function can fail to be differentiable (a sharp corner like |x| at 0 has no derivative)." },
      { q: "How do I check continuity on an AP exam?", a: "Show all three conditions with limits: state f(c), compute the two-sided limit via one-sided limits, and compare. Name the discontinuity type if one exists — graders award points for the classification." },
    ],
  },

  "convolution-calculator": {
    description: `When your phone removes background noise from a call, it is blending two signals together with an operation called convolution. Convolution combines two functions into a third that measures how much one overlaps the other as it slides past: (f ∗ g)(t) = ∫ f(τ)g(t−τ) dτ. In plain words, flip one signal backwards, slide it across the other, and at each position multiply-and-add — the result is a smoothed blend.

The discrete version is what every audio equalizer, camera blur filter, and noise-cancelling headphone computes thousands of times per second: each output sample is a weighted average of neighboring input samples. Convolution also has a famous shortcut, the convolution theorem: convolution in the time domain equals plain multiplication in the frequency domain, which is why fast Fourier transforms make real-time audio processing possible. Enter the two sequences or function samples and the calculator performs the flip-slide-multiply-add to return the convolved output.`,
    howToSteps: [
      "Type a representative value from the first signal in the Variable A box — for example, 2, the middle sample of [1, 2, 3].",
      "Type the matching sample from the second signal in the Variable B box — for example, 1 for the kernel [0, 1, 0.5].",
      "Read the Result box for the combined product at that alignment.",
      "Repeat the slide-multiply-add across every alignment and add the products to build the full output.",
      "For a sanity check, convolve any signal with [1] — the output should equal the input unchanged.",
    ],
    faqs: [
      { q: "What is convolution in plain words?", a: "A blend of two functions: reverse one, slide it across the other, and at each position add up the pointwise products. The output shows how much the two overlap at every shift." },
      { q: "Where is convolution used in real life?", a: "Audio equalizers and noise cancellation, image blur and sharpen filters, seismology, probability (the sum of two dice is a convolution of their distributions), and every convolutional neural network." },
      { q: "What is the convolution theorem?", a: "Convolution in the time domain equals multiplication in the frequency domain. It lets software replace slow sliding-window sums with fast Fourier transforms — the trick behind real-time audio effects." },
      { q: "What does convolving with [1] do?", a: "Nothing — [1] is the identity kernel, so the output equals the input. It is the standard sanity check that your convolution code works." },
      { q: "Convolution vs. correlation — what's the difference?", a: "Convolution flips one signal before sliding; correlation does not. Convolution models how a system responds to an input; correlation measures how similar two signals are at each shift." },
    ],
  },

  "cosine-rule-calculator": {
    description: `A surveyor needs the distance across a lake she cannot cross — so she measures two sides and the angle between them, and the cosine rule does the rest. The law of cosines generalizes the Pythagorean theorem to any triangle: c² = a² + b² − 2ab·cos(C), where C is the angle between sides a and b. When C is 90°, cos(C) is zero and the formula collapses to a² + b² = c² — Pythagoras as a special case.

It solves the two triangle cases the law of sines cannot start: side-angle-side (SAS), where you know two sides and the included angle, and side-side-side (SSS), where you rearrange the formula to find an angle: cos(C) = (a² + b² − c²)/(2ab). Construction foremen use it to lay out non-right-angle foundations, navigators use it for course legs, and students meet it right after the law of sines in trig class. Enter the two known sides and the included angle, and the calculator returns the third side; enter three sides to recover any angle.`,
    howToSteps: [
      "Type the first known side in the Variable A box — for example, 8 for an 8-foot wall.",
      "Type the second known side in the Variable B box — for example, 6 for a 6-foot wall.",
      "Note the included angle between them — say 60° — and read the Result box after the page applies c² = 64 + 36 − 2(8)(6)cos(60°).",
      "Take the square root of the result: √52 ≈ 7.21 feet for the third side.",
      "To find an angle instead, rearrange first: cos(C) = (a² + b² − c²)/(2ab), then use inverse cosine.",
    ],
    faqs: [
      { q: "What is the law of cosines in plain words?", a: "c² = a² + b² − 2ab·cos(C). The third side squared equals the sum of the other two squares minus a correction term that accounts for the angle between them." },
      { q: "When do I use the law of cosines vs. the law of sines?", a: "Cosines for SAS (two sides + included angle) and SSS (three sides). Sines for AAS/ASA (two angles + a side) and the ambiguous SSA case. If you know the angle between two known sides, reach for cosines." },
      { q: "How is this related to the Pythagorean theorem?", a: "It is Pythagoras generalized. At 90°, cos(90°) = 0, the correction term vanishes, and you get c² = a² + b²." },
      { q: "How do I find an angle with the law of cosines?", a: "Rearrange: cos(C) = (a² + b² − c²)/(2ab), then take the inverse cosine. For sides 8, 6, 7: cos(C) = (64+36−49)/96 ≈ 0.531, so C ≈ 57.9°." },
      { q: "Why must my calculator be in degree mode?", a: "Because cos(60°) = 0.5 but cos(60 radians) ≈ −0.95. A radian/degree mismatch silently wrecks every trig calculation; check the mode indicator before you start." },
    ],
  },

  "cosine-calculator": {
    description: `A carpenter laying out a 6/12 roof pitch, a pilot correcting for a crosswind, a game developer rotating a sprite — all of them are computing cosines. The cosine of an angle is the ratio of the adjacent side to the hypotenuse in a right triangle — the horizontal reach of a unit arrow pointing at that angle. Cos(0°) = 1 (pointing straight along the x-axis), cos(90°) = 0 (pointing straight up), cos(180°) = −1.

In coordinates, any point on the unit circle is (cos θ, sin θ), which is why cosine drives rotations in graphics, the horizontal component of forces in physics, and the in-phase part of AC signals. The values repeat every 360°, and the symmetry cos(−θ) = cos(θ) means the sign of the angle never matters. Enter the angle and the calculator returns its cosine — just confirm degree mode first, because cos(60°) = 0.5 while cos(60 radians) is something entirely different.`,
    howToSteps: [
      "Type the angle in degrees in the Variable A box — for example, 60.",
      "Type 1 in the Variable B box as the unit hypotenuse, so the Result reads as the adjacent-side ratio.",
      "Read the Result box: 0.5 — the adjacent side is half the hypotenuse at 60°.",
      "Test cos(0°) = 1 and cos(90°) = 0 to confirm degree mode.",
      "For a roof pitch, multiply the cosine by the rafter length to get the horizontal run.",
    ],
    faqs: [
      { q: "What is cosine in plain words?", a: "In a right triangle, cosine is adjacent ÷ hypotenuse. On the unit circle, it is the x-coordinate of the point at angle θ. cos(θ) = adjacent/hypotenuse." },
      { q: "What is cos(60°)?", a: "0.5 exactly. The 30-60-90 triangle has sides in ratio 1 : √3 : 2, and cosine of 60° is the short leg (1) over the hypotenuse (2)." },
      { q: "Why did my calculator give the wrong cosine?", a: "Almost certainly radian/degree mode. cos(60°) = 0.5, but cos(60 radians) ≈ −0.952. Check the D/R indicator and switch to degrees for geometry homework." },
      { q: "Cosine vs. sine — which do I use?", a: "Cosine for the adjacent side (horizontal component), sine for the opposite side (vertical component). For a 10-foot ladder at 60° to the ground, the horizontal reach is 10·cos(60°) = 5 feet." },
      { q: "What is arccosine (cos⁻¹)?", a: "The inverse: it recovers the angle from the ratio. If cos(θ) = 0.5, then cos⁻¹(0.5) = 60°. Use it when you know the sides and need the angle." },
    ],
  },

  "coulomb-law-calculator": {
    description: `Rub a balloon on your hair and it sticks to the wall — that invisible grip is Coulomb's law at work, and it is astonishingly strong. Coulomb's law says the electrostatic force between two point charges is F = k·q₁·q₂/r², where k ≈ 8.988 × 10⁹ N·m²/C². The force grows with the product of the charges and dies off with the square of the distance — double the separation and the force drops to a quarter. The sign tells the story: like charges repel (positive force), opposites attract.

It is the same inverse-square shape as Newton's gravity, but enormously stronger — the electric repulsion between two protons outweighs their gravitational attraction by a factor of about 10³⁶. AP Physics students use it for point-charge problems, and it underlies everything from photocopier toner to the repulsion that keeps atoms from collapsing. Enter both charges in coulombs and their separation in meters to get the force in newtons.`,
    howToSteps: [
      "Type the first charge in coulombs in the Charge 1 (q1, C) box — for example, 0.000001 (1 microcoulomb).",
      "Type the second charge in the Charge 2 (q2, C) box — for example, 0.000002.",
      "Type the separation in meters in the Distance (r, m) box — for example, 0.1.",
      "Read the Electrostatic Force (F, N) box: about 1.8 newtons of repulsion.",
      "Flip one charge's sign and watch the force turn negative — attraction instead of repulsion.",
    ],
    faqs: [
      { q: "What is Coulomb's law in plain words?", a: "F = k·q₁·q₂/r². The force between two charges equals a constant times the product of the charges, divided by the distance squared. Like charges repel; opposite charges attract." },
      { q: "What is k in Coulomb's law?", a: "Coulomb's constant, about 8.988 × 10⁹ N·m²/C². It sets the strength scale — and it is huge, which is why even microcoulomb charges produce noticeable forces." },
      { q: "Why does doubling the distance quarter the force?", a: "The r² in the denominator. Force spreads over the surface of an expanding sphere (area 4πr²), so twice the distance means four times the area and one-quarter the intensity — the same reason light dims with distance." },
      { q: "How do I handle microcoulombs and nanocoulombs?", a: "Convert to coulombs first: 1 μC = 10⁻⁶ C, 1 nC = 10⁻⁹ C. Forgetting the conversion is the #1 error — it throws the answer off by factors of a trillion." },
      { q: "Is the force on q1 equal to the force on q2?", a: "Yes — Newton's third law. The forces are equal in size and opposite in direction, even if one charge is a thousand times bigger than the other." },
    ],
  },

  "cross-product-calculator": {
    description: `Tighten a lug nut and you are doing a cross product with your hands — the twist you feel is perpendicular to both the wrench and the force. The cross product A × B of two 3D vectors produces a third vector perpendicular to both, with components Cx = Ay·Bz − Az·By, Cy = Az·Bx − Ax·Bz, Cz = Ax·By − Ay·Bx. Its magnitude |A × B| = |A||B|sin(θ) equals the area of the parallelogram the vectors span — zero when they point the same way, maximum when perpendicular.

The direction follows the right-hand rule: point your fingers along A, curl toward B, and your thumb shows the result. Physics runs on it: torque is r × F (which is why a longer wrench loosens rusted bolts), and the magnetic force on a moving charge is q(v × B). Game engines use it for surface normals and lighting. Enter all six components and the calculator returns Cx, Cy, Cz plus the magnitude.`,
    howToSteps: [
      "Type vector A's components in the Vector A - x component (Ax), Vector A - y component (Ay), and Vector A - z component (Az) boxes — for example, 1, 2, 3.",
      "Type vector B's components in the Vector B - x component (Bx), Vector B - y component (By), and Vector B - z component (Bz) boxes — for example, 4, 5, 6.",
      "Read the Cross Product - Cx, Cross Product - Cy, and Cross Product - Cz boxes: (−3, 6, −3).",
      "Read the Magnitude |A × B| box: √54 ≈ 7.35, the area of the parallelogram A and B span.",
      "Verify perpendicularity: dot the result with A — (−3)(1) + (6)(2) + (−3)(3) = 0 confirms the right angle.",
    ],
    faqs: [
      { q: "What is the cross product formula in plain words?", a: "Cx = AyBz − AzBy, Cy = AzBx − AxBz, Cz = AxBy − AyBx. Each component is a 2×2 determinant of the other two components — 'cover up' the component you are computing and cross-multiply what remains." },
      { q: "What does the cross product mean geometrically?", a: "A vector perpendicular to both inputs, with length equal to the parallelogram area they span: |A||B|sin(θ). It is zero for parallel vectors and biggest for perpendicular ones." },
      { q: "How do I remember the direction?", a: "The right-hand rule: fingers along A, curl toward B, thumb points along A × B. Swapping the order flips the result — A × B = −(B × A) — so order matters." },
      { q: "Cross product vs. dot product?", a: "The dot product gives a scalar measuring alignment (A·B = |A||B|cos θ); the cross product gives a vector measuring perpendicularity and area. Torque needs the cross product; work needs the dot product." },
      { q: "Why is torque a cross product?", a: "Because only the force component perpendicular to the wrench creates twist. τ = r × F captures exactly that: maximum at 90°, zero when you push straight along the handle." },
    ],
  },

  "cube-root-calculator": {
    description: `A shipping company needs a box that holds exactly 27 cubic feet — what should each side measure? That is a cube root problem wearing work clothes. The cube root of x is the number that, multiplied by itself three times, gives x: ∛27 = 3 because 3 × 3 × 3 = 27. Unlike square roots, cube roots handle negatives gracefully — ∛(−8) = −2, since a negative times itself three times stays negative.

The operation is the inverse of cubing, and it appears whenever volume meets length: sizing storage containers, scaling 3D-print models (double the side length, octuple the volume — and the filament), or reversing a cubic growth calculation. Test-score style: if a cube's volume is 64 cubic inches, each edge is ∛64 = 4 inches — a problem straight out of middle-school geometry. A handy estimation trick: 5³ = 125 and 6³ = 216, so ∛150 sits just under 5.4. Enter any number and the calculator returns its cube root, with the x³ box cubing the answer to prove it.`,
    howToSteps: [
      "Type the number in the Number (x) box — for example, 27; negatives are fine.",
      "Read the Cube Root (∛x) box: 3.",
      "Check the x³ (verification) box: 27, confirming the root is exact.",
      "Try a non-perfect cube like 150 and note the decimal — about 5.313.",
      "Try a negative like −8 to see −2, the sign surviving the odd root.",
    ],
    faqs: [
      { q: "What is a cube root in plain words?", a: "The number that gives x when multiplied by itself three times. ∛x = y means y³ = x. It undoes cubing, just as division undoes multiplication." },
      { q: "What is the cube root of 27?", a: "3, because 3 × 3 × 3 = 27. Similarly ∛64 = 4 and ∛125 = 5 — the perfect cubes through 1000 are worth memorizing." },
      { q: "Can you take the cube root of a negative number?", a: "Yes — unlike square roots. ∛(−8) = −2 because (−2)³ = −8. Odd roots preserve the sign; even roots do not." },
      { q: "How do I estimate a cube root by hand?", a: "Bracket it between perfect cubes. For ∛150: 5³ = 125 and 6³ = 216, so the answer is between 5 and 6, closer to 5 (about 5.31)." },
      { q: "Cube root vs. 'cubed' — what's the difference?", a: "Cubing multiplies a number by itself twice (4³ = 64); the cube root reverses it (∛64 = 4). They are inverse operations, like squaring and square-rooting." },
    ],
  },

  "curve-fitting-calculator": {
    description: `A lab group measures a pendulum's swing at a dozen different lengths — the dots scatter, but a single smooth curve wants to emerge. Curve fitting finds the equation that best threads through a set of data points. The classic is least-squares linear regression: the line y = mx + b positioned to minimize the sum of the squared vertical gaps between the line and the points — squaring punishes big misses more than small ones, which keeps one wild point from hijacking the fit.

When the data bends, you fit quadratics, exponentials (bacterial growth, radioactive decay), or logarithms instead, and the R² value (0 to 1) tells you how much of the variation the curve explains. Scientists use it to calibrate instruments, businesses use it to project sales trends, and students use it to turn raw lab measurements into a defensible conclusion. Enter your data pairs and the calculator returns the best-fit equation plus R² so you can judge the fit.`,
    howToSteps: [
      "Type your first x-value in the Variable A box — for example, 1 for the point (1, 2).",
      "Type its matching y-value in the Variable B box — for example, 2 — and continue adding the full set.",
      "Read the Result box for the fitted value at each x, and compare it against your measured y.",
      "Add all your points and watch the best-fit line settle — the squared gaps are what it minimizes.",
      "Check R²: above 0.9 is a strong fit, below 0.5 means your model may be the wrong shape.",
    ],
    faqs: [
      { q: "What is least squares in plain words?", a: "Position the curve to minimize the sum of the squared vertical distances from the points to the curve. Squaring makes large errors count disproportionately, pulling the fit toward the bulk of the data." },
      { q: "When should I fit a curve instead of a line?", a: "When the scatterplot bends. Growth and decay call for exponentials, diminishing returns for logarithms, and peaked data for quadratics. If a line's R² is poor but the pattern is clear, try the next shape." },
      { q: "What does R² actually tell me?", a: "The fraction of the y-variation your model explains, from 0 (useless) to 1 (perfect). R² = 0.94 means the curve accounts for 94% of the wiggle in the data." },
      { q: "Can curve fitting prove causation?", a: "No. A beautiful fit between ice-cream sales and drownings does not mean cones cause drownings — both rise in summer. Fitting shows association; experiments show cause." },
      { q: "Why square the errors instead of just adding them?", a: "Plain errors cancel (misses above and below sum to zero), and absolute values are mathematically clumsy. Squaring keeps everything positive, penalizes big misses, and gives clean calculus for finding the minimum." },
    ],
  },
  "data-analysis-calculator": {
    description: `A baseball fan argues Mike Trout is better than Aaron Judge — and within seconds both sides are quoting batting averages, not opinions. Data analysis turns a raw list of numbers into summary statistics that actually mean something. The mean (average) is the sum divided by the count; the median is the middle value when sorted, immune to outliers — which is why economists quote median household income (about $80,000 in the US) rather than the mean, since a few billionaires would drag the average skyward.

The mode is the most frequent value, the range spans max minus min, and the standard deviation measures the typical distance from the mean — test scores with a small standard deviation mean the class performed uniformly, while a large one flags a split between strugglers and stars. Coaches use these to evaluate players, teachers to curve exams, fantasy managers to compare quarterbacks' weekly consistency, and businesses to summarize sales. Enter your dataset and the calculator returns the full statistical portrait.`,
    howToSteps: [
      "Type your first data value in the Variable A box — for example, 88 for a test score.",
      "Type the next value in the Variable B box — for example, 92 — and continue adding the full set.",
      "Read the Result box for the computed summary of the values entered so far.",
      "Compare mean vs. median: a big gap flags outliers pulling the average.",
      "Use the standard deviation to judge consistency — small means the group clusters tightly.",
    ],
    faqs: [
      { q: "Mean vs. median — which should I use?", a: "The median for skewed data (incomes, home prices) because outliers cannot move it; the mean for symmetric data and for any math that follows (it feeds into standard deviation and most statistical tests)." },
      { q: "What does standard deviation tell me in plain words?", a: "The typical distance of values from the mean. Test scores of 88 ± 3 means most students landed between 85 and 91 — a tight, consistent class." },
      { q: "How do outliers distort the mean?", a: "Severely. Nine salaries of $50k plus one of $5M average $545k — a number describing nobody. The median ($50k) tells the true story." },
      { q: "What is the mode good for?", a: "Categorical and repeated-value data: the most common shoe size sold, the most frequent test score. It is the only 'average' that works on non-numeric categories." },
      { q: "Why do analysts quote median home prices?", a: "Because a handful of $20M mansions would yank the mean far above what typical buyers pay. The median tracks the middle of the market honestly." },
    ],
  },

  "date-to-roman-converter": {
    description: `Super Bowl LVIII, a wedding invitation dated II・XIV・MMXXIV, the cornerstone of a courthouse — Roman numerals still dress up America's important dates. Roman numerals build numbers from seven letters: I (1), V (5), X (10), L (50), C (100), D (500), M (1000), with subtractive pairs like IV (4) and IX (9) keeping things compact.

Converting a date means converting each part separately: July 4, 2026 becomes VII・IV・MMXXVI — the month (7 → VII), the day (4 → IV), the year (2026 = 2000 + 20 + 6 → MMXXVI). The system has no zero and tops out at 3999 (MMMCMXCIX), which is why the converter caps the year there. Americans meet Roman numerals on clock faces, movie sequel credits, monarch names, and tattoo designs — where a wrong numeral is permanent, so double-checking matters. Enter the day, month, and year and the converter returns each part in numerals plus the full Roman date.`,
    howToSteps: [
      "Type the day in the Day (1-31) box — for example, 4.",
      "Type the month in the Month (1-12) box — for example, 7 for July.",
      "Type the year in the Year (1-3999) box — for example, 2026.",
      "Read the Roman Day, Roman Month, and Roman Year boxes: IV, VII, MMXXVI.",
      "Copy the Roman Numeral Date box — VII・IV・MMXXVI — for invitations, tattoos, or cornerstones.",
    ],
    faqs: [
      { q: "How do you write 2026 in Roman numerals?", a: "MMXXVI. Break it down: 2000 = MM, 20 = XX, 6 = VI. So a July 4, 2026 date reads VII・IV・MMXXVI." },
      { q: "Why is 4 written as IV instead of IIII?", a: "Subtractive notation: a smaller numeral before a larger one subtracts. IV = 5 − 1 = 4, IX = 10 − 1 = 9, XL = 50 − 10 = 40. (Clock faces traditionally keep IIII for visual symmetry — the famous exception.)" },
      { q: "What is the biggest number Roman numerals can write?", a: "3999 (MMMCMXCIX) in the standard system, which is why converters cap the year at 3999. Romans had no zero and no place value." },
      { q: "How do Romans write numbers like 9 and 90?", a: "IX (10 − 1) and XC (100 − 10). The pattern repeats at each power of ten: IV/IX for ones, XL/XC for tens, CD/CM for hundreds." },
      { q: "Why do tattoos get Roman numerals wrong so often?", a: "Because people convert the whole date as one number instead of day, month, and year separately — or they write IIII-style additive forms. Always convert each part alone and verify with a converter before the ink." },
    ],
  },

  "decimal-to-fraction": {
    description: `Your tape measure reads 0.75 inches, but the drill bit set is labeled in fractions — is that 3/4? Converting a decimal to a fraction means finding the whole-number ratio hiding inside the decimal. The quick method: write the decimal over a power of ten matching its places — 0.75 = 75/100 — then reduce by the greatest common divisor: 75/100 ÷ 25/25 = 3/4.

Repeating decimals need an algebraic trick instead (0.333… = 1/3), and truncated decimals like 0.333 only approximate to 333/1000. Carpenters live this conversion daily since US tape measures and drill bits speak in sixteenths while digital calipers speak in decimals — 0.375 on the caliper is the 3/8 bit. Machinists, bakers scaling recipes, and students checking homework all need it both ways. A useful habit: memorize the common eighths (0.125 = 1/8, 0.25 = 1/4, 0.375 = 3/8) and you will rarely reach for the converter in the shop. Type the decimal and the converter returns the reduced fraction plus the percentage form.`,
    howToSteps: [
      "Type the decimal in the Decimal box — for example, 0.75.",
      "Read the reduced fraction result: 3/4 (75/100 reduced by GCD 25).",
      "Check the As Percentage box: 75%.",
      "Try a tape-measure decimal like 0.375 to confirm it reads 3/8.",
      "For repeating decimals like 0.333…, expect the nearest exact fraction the converter offers (1/3) or a close approximation.",
    ],
    faqs: [
      { q: "How do you convert a decimal to a fraction in plain words?", a: "Put the decimal's digits over 10, 100, or 1000 (one zero per decimal place), then divide top and bottom by their greatest common divisor. 0.75 = 75/100 = 3/4." },
      { q: "What fraction is 0.375?", a: "3/8. 0.375 = 375/1000, and dividing by the GCD 125 gives 3/8 — the drill bit every DIYer owns." },
      { q: "What about repeating decimals like 0.666…?", a: "Use algebra: let x = 0.666…, then 10x = 6.666…, subtract to get 9x = 6, so x = 6/9 = 2/3. The bar notation marks which digits repeat." },
      { q: "Why do tape measures use fractions instead of decimals?", a: "Tradition and divisibility: inches split cleanly into halves, quarters, eighths, and sixteenths — fractions carpenters can halve mentally on a ladder, where decimals would be clumsier." },
      { q: "How do I convert back from fraction to decimal?", a: "Divide the numerator by the denominator: 3/4 = 0.75. That is the reverse trip, and the pair of converters covers both directions." },
    ],
  },

  "decimal-to-percent": {
    description: `Your phone shows a 0.15 service-charge estimate and the waiter suggests 18% — which tip is bigger, and by how much? Converting a decimal to a percent is the simplest move in arithmetic: multiply by 100 and add the % sign. The decimal 0.15 is 15%; 1.5 is 150%; 0.035 is 3.5%. The logic is that 'percent' literally means 'per hundred,' so you are just rescaling the number to a hundredths basis — the decimal point hops two places right.

Americans meet this at every checkout: sales tax (0.0825 → 8.25%), restaurant tips (0.20 → 20%), test scores (0.92 → 92%, an A−), and interest rates. The classic blunder is the misplaced point: 0.5 is 50%, not 5% — a mistake that turns a half-off sale into a 5%-off disappointment. When a problem gives you a percent, always convert to decimal before multiplying; when it gives a decimal, convert to percent before describing it. Type the decimal and the converter shifts the point and returns the percentage.`,
    howToSteps: [
      "Type the decimal in the Decimal box — for example, 0.15.",
      "Read the Percentage (%) box: 15%.",
      "Try a test score: 0.92 converts to 92%.",
      "Try a tax rate: 0.0825 converts to 8.25%.",
      "Watch the point: 0.5 gives 50%, while 0.05 gives 5% — one hop changes everything.",
    ],
    faqs: [
      { q: "How do you turn a decimal into a percent in plain words?", a: "Multiply by 100 — move the decimal point two places right — and add the % sign. 0.15 → 15%, 0.035 → 3.5%." },
      { q: "Is 0.5 the same as 5%?", a: "No — 0.5 is 50%. The decimal 0.05 is 5%. Misplacing the point by one spot changes the value tenfold, the most common percent error there is." },
      { q: "How do I convert a percent back to a decimal?", a: "Divide by 100 — move the point two places left and drop the sign. 20% → 0.20, which is the form you multiply a bill by to compute a tip." },
      { q: "What percent is 1.5 as a decimal?", a: "150%. Decimals above 1 give percents above 100 — normal for growth ('sales grew to 150% of last year') even though it sounds odd at first." },
      { q: "Why do stores show 0.15 instead of 15%?", a: "Receipts and spreadsheets store the decimal form because it is what the register multiplies by. The percent form is for humans; the decimal form is for math." },
    ],
  },

  "definite-integral-calculator": {
    description: `A speedometer tells you how fast you are going; the definite integral tells you how far you have actually traveled. The definite integral ∫ₐᵇ f(x)dx computes the net signed area between a curve and the x-axis from a to b — area above the axis counts positive, below counts negative. Its superpower is accumulation: integrate a velocity function and you get displacement; integrate a marginal-cost function and you get total cost; physicists integrate force over distance to get work.

The Fundamental Theorem of Calculus makes it computable: find any antiderivative F, then evaluate F(b) − F(a) — for f(x) = 2x from 0 to 3, F(x) = x² gives 9 − 0 = 9. AP Calculus students spend a full unit here because every 'total amount from a rate' word problem is an integral in disguise. Enter the function and its limits and the calculator evaluates the antiderivative at both endpoints and subtracts.`,
    howToSteps: [
      "Type the lower limit in the Variable A box — for example, 0.",
      "Type the upper limit in the Variable B box — for example, 3.",
      "Read the Result box for the accumulated value — for f(x) = 2x on [0, 3], that is 9.",
      "Check the sign: area below the x-axis subtracts, so an integral can be zero or negative.",
      "Verify by differentiating: the derivative of your antiderivative should return the original function.",
    ],
    faqs: [
      { q: "What is a definite integral in plain words?", a: "The net area between a curve and the x-axis from a to b. Compute an antiderivative F, then evaluate F(b) − F(a). Area below the axis counts as negative." },
      { q: "How does the Fundamental Theorem of Calculus work?", a: "It links differentiation and integration as inverses: instead of adding infinitely many slices, find one antiderivative F and subtract its endpoint values. ∫₀³ 2x dx = 3² − 0² = 9." },
      { q: "When is a definite integral negative?", a: "When more area sits below the x-axis than above. Integrating sin(x) from 0 to 2π gives exactly 0 — the humps cancel." },
      { q: "Definite vs. indefinite integral?", a: "The definite integral has limits and yields a number (net area). The indefinite integral has no limits and yields a family of functions plus +C." },
      { q: "What is dx actually?", a: "An infinitesimally small width of each slice. The integral adds up f(x)·dx — height times width — over infinitely many slices from a to b." },
    ],
  },

  "determinant-calculator": {
    description: `Two equations, two unknowns, and one number that decides whether the system has exactly one answer, none, or infinitely many. The determinant is a single number computed from a square matrix that encodes its deepest properties. For a 2×2 matrix [[a, b], [c, d]] it is ad − bc — for [[2, 3], [1, 4]], that is 8 − 3 = 5. A nonzero determinant means the matrix is invertible and the linear system has exactly one solution (Cramer's rule divides by it); a zero determinant means the rows are dependent — the equations describe parallel or identical lines with no unique answer.

Geometrically, the determinant is the area-scaling factor of the matrix's transformation: it tells you how much the matrix stretches space, with the sign flagging orientation flips. Computer graphics, robotics, and economics all lean on it. Enter the matrix entries and the calculator evaluates the determinant, flagging zero as the 'no unique solution' warning.`,
    howToSteps: [
      "Type the top-left entry in the Variable A box — for example, 2 for [[2, 3], [1, 4]].",
      "Type the bottom-right entry in the Variable B box — for example, 4.",
      "Read the Result box for the combined product term — here 2 × 4 = 8, the 'ad' half of ad − bc.",
      "Subtract the off-diagonal product (3 × 1 = 3) to finish: det = 8 − 3 = 5.",
      "Interpret: nonzero means one unique solution; zero means the system is dependent or inconsistent.",
    ],
    faqs: [
      { q: "What is a determinant in plain words?", a: "A number computed from a square matrix. For 2×2 [[a,b],[c,d]] it is ad − bc. It is zero exactly when the matrix cannot be inverted." },
      { q: "What does a zero determinant mean?", a: "The rows (or columns) are linearly dependent — the equations are redundant or contradictory. The system has either no solution or infinitely many, never exactly one." },
      { q: "How do you use Cramer's rule?", a: "For a 2×2 system, x = detₓ/det and y = detᵧ/det, where detₓ replaces the x-column with the constants. It is elegant but numerically worse than elimination for large systems." },
      { q: "What is the determinant geometrically?", a: "The factor by which the matrix scales area (2D) or volume (3D). A determinant of 5 means the transformation makes everything 5 times bigger; a negative one also flips orientation like a mirror." },
      { q: "How do you compute a 3×3 determinant?", a: "Expand along any row or column: multiply each entry by its 2×2 minor determinant with alternating signs (+ − +) and add. Or use the rule of Sarrus as a shortcut." },
    ],
  },

  "diamond-problem-solver": {
    description: `Two mystery numbers multiply to 12 and add to 7 — find them. It is the puzzle hiding inside every factoring problem you have ever solved. The diamond problem (the 'x-box' or diamond method) is factoring made visual: write the product at the top of a diamond, the sum at the bottom, and find the two side numbers that multiply to the top and add to the bottom. For product 12 and sum 7, the numbers are 3 and 4 — which is exactly how you factor x² + 7x + 12 into (x + 3)(x + 4).

The method shines with negatives: product −10 and sum 3 gives 5 and −2, the pair behind x² + 3x − 10 = (x + 5)(x − 2). Algebra teachers across the US drill it because it turns guess-and-check factoring into a systematic hunt, and it doubles as integer puzzle practice. Enter the top and bottom numbers and the solver returns the side pair — or reports that no integer pair exists.`,
    howToSteps: [
      "Type the target product in the Product (top) box — for example, 12.",
      "Type the target sum in the Sum (bottom) box — for example, 7.",
      "Read the Number 1 (x₁) and Number 2 (x₂) boxes: 3 and 4.",
      "Verify: 3 × 4 = 12 and 3 + 4 = 7.",
      "Apply it to factoring: x² + 7x + 12 becomes (x + 3)(x + 4).",
    ],
    faqs: [
      { q: "How does the diamond method work in plain words?", a: "Put the product on top and the sum on the bottom of a diamond. Find two numbers that multiply to the top and add to the bottom — those are the diamond's sides, and usually the pair you need for factoring." },
      { q: "What two numbers multiply to 12 and add to 7?", a: "3 and 4. List factor pairs of 12 (1×12, 2×6, 3×4) and check sums: only 3 + 4 = 7." },
      { q: "What if the product is negative?", a: "Then the two numbers have opposite signs. For product −10 and sum 3: factor pairs of 10 are (1,10) and (2,5); with opposite signs, 5 + (−2) = 3, so the pair is 5 and −2." },
      { q: "How does this help factor quadratics?", a: "To factor x² + bx + c, you need two numbers multiplying to c and adding to b — exactly a diamond problem. The side numbers drop straight into (x + _)(x + _)." },
      { q: "What if no integer pair works?", a: "Then the quadratic does not factor over integers — try the quadratic formula instead. A prime product with a mismatched sum is the usual giveaway." },
    ],
  },

  "dimensional-analysis-calculator": {
    description: `A nurse must convert a 0.5-gram prescription into milligrams before drawing the syringe — and a misplaced decimal could be a medical error. Dimensional analysis (the factor-label method) converts units by multiplying with conversion factors written as fractions equal to 1 — like (1000 mg / 1 g) — so unwanted units cancel and only the target unit survives. The 0.5-gram dose becomes 0.5 × 1000 = 500 mg, with 'grams' crossing out along the way.

The method chains effortlessly: miles per hour to feet per second multiplies by (5280 ft / 1 mi) and (1 hr / 3600 s). Chemistry students use it for moles-to-grams, nurses for dosage math, and cooks for cups-to-milliliters. The golden rule: set up the fraction so the unit you want to kill sits opposite itself, then check that the surviving unit is the one you wanted. Enter the value and the conversion factor and the calculator multiplies through with the units tracked.`,
    howToSteps: [
      "Type the starting value in the Variable A box — for example, 0.5 for a 0.5-gram dose.",
      "Type the conversion factor in the Variable B box — for example, 1000 for mg per gram.",
      "Read the Result box: 500 — and confirm the unit trail reads milligrams.",
      "Chain a second conversion by feeding the result back in — grams → mg → mcg with a second ×1000.",
      "Always end by checking the surviving unit matches what the problem asked for.",
    ],
    faqs: [
      { q: "What is dimensional analysis in plain words?", a: "Multiply by conversion factors written as fractions (like 1000 mg / 1 g) so the old units cancel and the new units remain. Arrange each fraction so the unwanted unit appears top and bottom." },
      { q: "How do nurses use dimensional analysis?", a: "For dosage math: convert the ordered dose to the unit on hand (grams → milligrams), then divide by the concentration (mg per mL) to get the syringe volume. Every step's units must cancel correctly." },
      { q: "How do you convert mph to ft/s?", a: "Multiply by 5280 ft/mi and divide by 3600 s/hr — a combined factor of about 1.467. So 60 mph ≈ 88 ft/s. Set it up as 60 mi/hr × (5280 ft/1 mi) × (1 hr/3600 s)." },
      { q: "What is the most common dimensional analysis mistake?", a: "Flipping the conversion fraction, which multiplies when you should divide. The unit check catches it: if 'grams' does not cancel, the fraction is upside down." },
      { q: "Can dimensional analysis check an equation?", a: "Yes — that is its other job. If both sides of a physics equation do not reduce to the same units, the equation is wrong. It is a free error detector." },
    ],
  },

  "domain-range-calculator": {
    description: `The square root function happily eats 9 and 16, but hand it −4 and it refuses — that refusal list is the domain. The domain of a function is the set of x-values it accepts; the range is the set of y-values it can produce. Three classic restrictions create domain holes: division by zero (f(x) = 1/(x−2) excludes x = 2), even roots of negatives (√x needs x ≥ 0), and logarithms of non-positive numbers (ln x needs x > 0).

The range takes more detective work — for y = x² the domain is all real numbers but the range is y ≥ 0, since squares never go negative. Graphing calculators and the vertical-line test help, but the algebraic habits (set denominators nonzero, radicands nonnegative) are what precalculus exams grade. Rational functions, root functions, and logs are the usual suspects. Enter the function's key values and the calculator works out which inputs are legal and which outputs are possible.`,
    howToSteps: [
      "Type a candidate x-value in the Variable A box — for example, 2 for f(x) = 1/(x−2).",
      "Type the denominator's value there in the Variable B box — for example, 0 — and read the Result box.",
      "A zero denominator means x = 2 is excluded from the domain.",
      "For roots, test the radicand the same way: negative means excluded.",
      "Sketch the graph to read the range off the y-axis — the vertical extent the curve actually covers.",
    ],
    faqs: [
      { q: "What are domain and range in plain words?", a: "The domain is every x the function can accept without breaking (no division by zero, no negative square roots). The range is every y-value the function actually outputs." },
      { q: "What is the domain of 1/(x−2)?", a: "All real numbers except x = 2, written (−∞, 2) ∪ (2, ∞). At x = 2 the denominator is zero, which is undefined." },
      { q: "What is the range of y = x²?", a: "y ≥ 0, or [0, ∞). Squares are never negative, and every nonnegative number is some x's square." },
      { q: "How do I find domain with a square root?", a: "Set the radicand ≥ 0 and solve. For √(x − 3): x − 3 ≥ 0, so the domain is x ≥ 3, or [3, ∞)." },
      { q: "Do I write domain in interval or set notation?", a: "Either, but match your teacher. Interval notation (−∞, 2) ∪ (2, ∞) is standard in US precalculus; set-builder {x | x ≠ 2} says the same thing." },
    ],
  },
  "efficiency-calculator": {
    description: `Your car's engine turns only about 30% of gasoline's energy into motion — the rest leaves as heat and noise. That 30% is its efficiency. Efficiency is useful output divided by total input, usually as a percent: a furnace delivering 80,000 BTU of heat from 100,000 BTU of gas runs at 80% AFUE. Nothing reaches 100% — thermodynamics guarantees some waste — and the gaps are big: LED bulbs convert about 90% of electricity to light versus 10% for old incandescents, which is why the same brightness costs a tenth of the power.

Americans meet efficiency ratings on yellow EnergyGuide labels: SEER for air conditioners, MPG for cars (itself an efficiency in disguise), and AFUE for furnaces. Businesses use the same ratio for processes — output per labor dollar. Because no machine is perfect, comparing two efficiencies is often a buying decision: the pricier model usually pays for itself in energy savings. Enter the useful output and the total input and the calculator returns the percentage, plus the wasted remainder.`,
    howToSteps: [
      "Type the useful output in the Variable A box — for example, 80000 for BTU of heat delivered.",
      "Type the total input in the Variable B box — for example, 100000 for BTU of gas burned.",
      "Read the Result box for the ratio — 0.8 — then multiply by 100 for 80% efficiency.",
      "Subtract from 100% to find the waste: 20% lost, mostly up the flue.",
      "Compare ratings the same way: a 96% AFUE furnace wastes half as much as an 80% model.",
    ],
    faqs: [
      { q: "What is the efficiency formula in plain words?", a: "Efficiency = (useful output ÷ total input) × 100%. Both numbers must be in the same units — BTU with BTU, watts with watts." },
      { q: "Can efficiency exceed 100%?", a: "No — that would create energy from nothing, violating thermodynamics. Claims above 100% are measurement errors or scams. (Heat pumps quote COP > 1, but that is moved heat, not created energy.)" },
      { q: "What does 80% AFUE mean?", a: "The furnace converts 80% of its fuel's energy into home heat; 20% escapes. An 80% AFUE furnace burning $1,000 of gas delivers $800 of warmth." },
      { q: "Why are LEDs so much more efficient than incandescents?", a: "Incandescents waste ~90% of their power as heat to make the filament glow. LEDs emit light directly from semiconductors at ~90% efficiency — about 9× less power for the same lumens." },
      { q: "Is MPG an efficiency?", a: "Essentially — miles of travel per gallon of fuel. Like all efficiencies, higher is better, and hybrids raise it by recovering braking energy that gas cars waste as heat." },
    ],
  },

  "eigenvalue-calculator": {
    description: `Stretch a photo diagonally and most arrows change direction — but a few special arrows keep pointing exactly the same way. Those are eigenvectors. Eigenvalues are the special scalars λ where a square matrix stretches its eigenvectors without rotating them: A·v = λ·v. You find them by solving the characteristic equation det(A − λI) = 0 — for a 2×2 matrix that is a quadratic, so two eigenvalues (possibly complex).

They reveal a matrix's soul: Google's PageRank is literally the dominant eigenvector of the web's link matrix, vibration engineers read natural frequencies as eigenvalues of stiffness matrices, and data scientists use them in PCA to find the directions where data varies most. A zero eigenvalue flags a singular matrix (no inverse); all-positive eigenvalues mean a stable system. The set of all eigenvalues is called the spectrum, and two similar matrices share the same spectrum — a fact that powers huge simplifications in physics. Enter the matrix entries and the calculator solves the characteristic equation and returns each eigenvalue.`,
    howToSteps: [
      "Type the top-left matrix entry in the Variable A box — for example, 4 for [[4, 1], [2, 3]].",
      "Type the bottom-right entry in the Variable B box — for example, 3.",
      "Read the Result box for the characteristic polynomial's evaluated form at this stage.",
      "Complete the quadratic det(A − λI) = λ² − 7λ + 10 = 0 to get λ = 5 and λ = 2.",
      "Interpret: the larger eigenvalue (5) is the dominant stretch direction — the one PageRank-style iterations converge to.",
    ],
    faqs: [
      { q: "What is an eigenvalue in plain words?", a: "A number λ such that the matrix stretches some nonzero vector v without rotating it: A·v = λ·v. The vector is the eigenvector; the number is how much it gets stretched." },
      { q: "How do you find eigenvalues?", a: "Solve det(A − λI) = 0, the characteristic equation. For 2×2 [[a,b],[c,d]]: λ² − (a+d)λ + (ad−bc) = 0 — a quadratic you solve with the formula." },
      { q: "What are eigenvalues used for?", a: "PageRank (web ranking), vibration and stability analysis, quantum mechanics (observable values), and PCA in data science (directions of greatest variance)." },
      { q: "What does an eigenvalue of 0 mean?", a: "The matrix crushes some direction to zero — it is singular with no inverse, and its determinant is 0. The system it represents has no unique solution." },
      { q: "Can eigenvalues be complex?", a: "Yes. Rotation matrices have complex eigenvalues — no real vector keeps its direction under a rotation, which the complex pair encodes." },
    ],
  },

  "ellipse-area": {
    description: `A landscaper sketches an oval flower bed 10 feet long and 6 feet wide — how much mulch does it need? That oval is an ellipse, and its area has a one-line formula. The area of an ellipse is π·a·b, where a and b are the semi-major and semi-minor axes (half the length and half the width). For the 10-by-6 bed, a = 5 and b = 3, so the area is 15π ≈ 47.1 square feet — noticeably less than the 60 square feet of the enclosing rectangle, which is exactly why the formula matters for material estimates.

When a equals b, the formula collapses to πr² and the ellipse is a circle. Running tracks use the same geometry (two straights joined by semicircular ends form a stadium shape built on ellipse math), and planetary orbits are ellipses with the sun at one focus. The perimeter has no simple exact formula — the calculator uses Ramanujan's celebrated approximation. Enter both semi-axes to get the area and the perimeter estimate.`,
    howToSteps: [
      "Type the semi-major axis (half the longer dimension) in the Semi-major Axis (a) box — for example, 5 for a 10-foot bed.",
      "Type the semi-minor axis in the Semi-minor Axis (b) box — for example, 3.",
      "Read the Area box: π × 5 × 3 ≈ 47.12 square feet.",
      "Read the Perimeter (Ramanujan Approximation) box for the edging length: about 25.5 feet.",
      "Multiply the area by your mulch depth and coverage rate to order material.",
    ],
    faqs: [
      { q: "What is the ellipse area formula in plain words?", a: "Multiply π by the two semi-axes: A = π·a·b. Use half-lengths, not full — a 10-by-6 ellipse uses a = 5, b = 3." },
      { q: "How is an ellipse different from an oval?", a: "'Oval' is informal; an ellipse is the precise curve where the sum of distances to two foci is constant. Every ellipse is oval, but not every oval (like an egg) is an ellipse." },
      { q: "Why is there no simple perimeter formula?", a: "The exact perimeter is an elliptic integral with no closed form. Ramanujan's approximation P ≈ π[3(a+b) − √((3a+b)(a+3b))] is accurate to fractions of a percent for typical shapes." },
      { q: "What happens when a equals b?", a: "The ellipse becomes a circle of radius a, and π·a·b becomes πr² — the circle area formula falls out as a special case." },
      { q: "Where do ellipses appear in real life?", a: "Planetary orbits, running tracks, whispering galleries (sound focuses between foci), and landscape beds — anywhere a 'stretched circle' is the practical shape." },
    ],
  },

  "equilibrium-calculator": {
    description: `A tug-of-war rope hangs motionless while both teams strain — the forces are huge, but they cancel exactly. That is equilibrium. Equilibrium means the net force (and net torque) on an object is zero, so it stays at rest or keeps moving at constant velocity — Newton's first law in action. For a hanging sign, the upward cable tensions' vertical components must sum to the sign's weight; for a seesaw, the clockwise and counterclockwise torques must match.

Chemists use the same word differently: chemical equilibrium is when forward and reverse reaction rates equalize, described by the equilibrium constant K. Statics engineers live in the force version — every bridge, bookshelf bracket, and crane load is a system of canceled forces, usually solved by splitting forces into x and y components and setting each sum to zero. A 50-pound porch sign hung by two chains is the classic homework setup. Enter the opposing force values and the calculator checks whether they balance.`,
    howToSteps: [
      "Type the first force in the Variable A box — for example, 50 for a 50-pound downward weight.",
      "Type the opposing force in the Variable B box — for example, 50 for the upward cable pull.",
      "Read the Result box for the combined force — equal opponents give a net near zero: equilibrium.",
      "Split angled forces into x and y components first; equilibrium needs both sums at zero.",
      "For torque balance, multiply each force by its lever arm and compare clockwise vs. counterclockwise.",
    ],
    faqs: [
      { q: "What is equilibrium in plain words?", a: "All forces (and torques) cancel to zero, so nothing accelerates. The object sits still or coasts at constant velocity — Newton's first law." },
      { q: "How do you solve a statics equilibrium problem?", a: "Split every force into x and y components, then write ΣFₓ = 0 and ΣFᵧ = 0 (plus Σtorque = 0 if rotation matters). Solve the resulting equations for the unknowns." },
      { q: "Static vs. dynamic equilibrium?", a: "Static: at rest (a parked car). Dynamic: moving at constant velocity with zero net force (a jet cruising at steady speed). Both satisfy ΣF = 0." },
      { q: "What is chemical equilibrium?", a: "The point where a reaction's forward and reverse rates match, so concentrations stop changing. The equilibrium constant K = [products]/[reactants] says which side dominates." },
      { q: "Why do hanging signs use two chains?", a: "Redundancy and balance: two angled chains split the load, and symmetric angles keep the horizontal components canceled so the sign hangs level instead of swinging." },
    ],
  },

  "equivalent-fractions": {
    description: `The recipe calls for 2/3 cup and you only have a 1/6-cup measure — how many scoops? Since 2/3 = 4/6, the answer is 4. Equivalent fractions are different writings of the same value: multiply (or divide) the numerator and denominator by the same number and the fraction's worth never changes. So 1/2 = 2/4 = 3/6 = 50/100, and the pattern holds for any multiplier you choose.

The rule powers fraction comparison (rewrite 3/4 and 5/6 as 9/12 and 10/12, then the numerators decide), fraction addition (common denominators are just equivalent fractions), and simplifying (divide by the GCF). Students also use them to check answers: 7/10 vs 0.7. The reverse move — dividing top and bottom by their greatest common factor — is how fractions get simplified, so equivalent fractions and reducing are two directions of the same street. Enter a fraction and a multiplier and the calculator returns the equivalent form plus the decimal check.`,
    howToSteps: [
      "Type the numerator in the Numerator 1 box — for example, 2 for 2/3.",
      "Type the denominator in the Denominator 1 box — for example, 3.",
      "Type the scaling factor in the Multiplier (n) box — for example, 2.",
      "Read the Equivalent Numerator and Equivalent Denominator boxes: 4 and 6, so 2/3 = 4/6.",
      "Check the Decimal value box — 0.667 both ways — to confirm nothing changed.",
    ],
    faqs: [
      { q: "What are equivalent fractions in plain words?", a: "Fractions with the same value but different numerators and denominators. Multiply or divide top and bottom by the same number: 1/2 = 2/4 = 3/6." },
      { q: "How do you find equivalent fractions?", a: "Multiply the numerator and denominator by the same nonzero number. For 2/3 with multiplier 4: (2×4)/(3×4) = 8/12." },
      { q: "Are 3/4 and 9/12 equivalent?", a: "Yes. 9/12 reduces by 3 to 3/4, and both equal 0.75. Dividing top and bottom by the same number also preserves value." },
      { q: "Why do I need equivalent fractions to add fractions?", a: "Addition needs common denominators, which are just equivalent forms: 1/2 + 1/3 becomes 3/6 + 2/6 = 5/6. You cannot add the raw forms directly." },
      { q: "How do equivalent fractions help compare 5/8 and 2/3?", a: "Rewrite with a common denominator: 5/8 = 15/24 and 2/3 = 16/24. Now the numerators compare directly — 2/3 is bigger." },
    ],
  },

  "error-analysis-calculator": {
    description: `A student measures gravity as 9.4 m/s² instead of 9.8 — is that a good lab result or a sloppy one? Percent error gives the verdict. Error analysis quantifies how far a measurement strays from the true value. Absolute error is the raw gap (|measured − true| = 0.4 m/s²); percent error divides by the true value (0.4/9.8 ≈ 4.1%), which lets you compare a 4% miss on gravity with a 4% miss on anything else.

Precision is repeatability (tight cluster), accuracy is closeness to truth (cluster on the bullseye) — a lab can be precise but inaccurate if every instrument is miscalibrated the same way. Scientists also track relative uncertainty through calculations: multiply two ±2% measurements and the result carries about ±4%. Every high-school physics lab report ends with an error-analysis section for exactly this reason — teachers want to see that you can distinguish a bad measurement from bad luck. A low percent error with tight repeats means your technique is sound; a high percent error with tight repeats points to a miscalibrated instrument; scattered results point to sloppy procedure. Enter your measured and accepted values and the calculator returns the absolute and percent errors.`,
    howToSteps: [
      "Type your measured value in the Variable A box — for example, 9.4.",
      "Type the accepted true value in the Variable B box — for example, 9.8.",
      "Read the Result box for the absolute error: |9.4 − 9.8| = 0.4.",
      "Divide by the true value and multiply by 100 for percent error: about 4.1%.",
      "Judge it: under 5% is solid for a high-school lab; over 10% means hunt for the systematic error.",
    ],
    faqs: [
      { q: "How do you calculate percent error in plain words?", a: "Percent error = |measured − true| ÷ true × 100%. For 9.4 vs 9.8: 0.4 ÷ 9.8 × 100% ≈ 4.1%." },
      { q: "Accuracy vs. precision?", a: "Accuracy is hitting the true value; precision is getting the same result repeatedly. Four darts clustered off-center are precise but inaccurate; four scattered around the bullseye are accurate but imprecise." },
      { q: "What is a systematic error?", a: "A consistent bias — a scale that reads 2 grams heavy, a timer started late. It shifts every measurement the same way, unlike random error, which scatters. Calibration kills systematic error." },
      { q: "How does error propagate through multiplication?", a: "Relative errors add approximately: two measurements each ±2% multiply to a result of about ±4%. Division behaves the same way." },
      { q: "Is 0% error possible?", a: "In student labs, a 0% usually means luck or rounding, not perfection — real instruments always have finite precision. Report your instrument's smallest division as the honest uncertainty." },
    ],
  },

  "euler-method-calculator": {
    description: `Some differential equations refuse to solve neatly — so mathematicians walk the solution one small step at a time. That walk is Euler's method. Euler's method numerically approximates solutions to differential equations dy/dx = f(x, y) by marching forward in small steps: from each point, follow the slope for a step of size h, land on the next point, and repeat — yₙ₊₁ = yₙ + h·f(xₙ, yₙ).

With dy/dx = y, y(0) = 1, and step h = 0.1, the first step gives y ≈ 1.1 (the true e^0.1 ≈ 1.105), and smaller steps hug the truth more tightly. The trade-off is fundamental: halving the step size roughly halves the error but doubles the work — the dilemma behind every weather model and spacecraft trajectory simulation. AP Calculus BC students meet it as the first numerical method, and engineers use its fancier cousins (Runge-Kutta) daily. Enter the starting values and step size and the calculator marches out the approximation table.`,
    howToSteps: [
      "Type the initial x-value in the Variable A box — for example, 0.",
      "Type the initial y-value in the Variable B box — for example, 1 for y(0) = 1.",
      "Choose a step size h — 0.1 is a good first try — and read the Result box for the first stepped value.",
      "Repeat the march: each new point becomes the launchpad for the next step.",
      "Halve h and compare: the answers should converge as the steps shrink.",
    ],
    faqs: [
      { q: "What is Euler's method in plain words?", a: "Walk along a differential equation's solution in small straight steps: at each point, compute the slope, stride forward by h along it, and repeat. yₙ₊₁ = yₙ + h·f(xₙ, yₙ)." },
      { q: "Work an Euler example: dy/dx = y, y(0) = 1, h = 0.1?", a: "Slope at (0,1) is 1, so y(0.1) ≈ 1 + 0.1(1) = 1.1. Next slope is 1.1, so y(0.2) ≈ 1.21. The true values e^0.1 ≈ 1.105 and e^0.2 ≈ 1.221 — close, and closer with smaller h." },
      { q: "Why does step size matter so much?", a: "Each step follows the starting slope blindly, so error accumulates. Halving h roughly halves the global error but doubles the steps — accuracy costs computation." },
      { q: "When does Euler's method fail?", a: "On stiff equations (wildly different time scales) or with steps too large, the walk can oscillate or explode instead of converging. That is why professionals upgrade to Runge-Kutta methods." },
      { q: "Where is Euler's method actually used?", a: "Anywhere differential equations meet computers: population models, circuit simulation, game physics engines, and orbital mechanics — usually in its more accurate Runge-Kutta form." },
    ],
  },

  "expanded-form": {
    description: `A third-grader writes 4,527 as 4,000 + 500 + 20 + 7 — and in doing so learns what each digit is actually worth. Expanded form breaks a number into the sum of each digit's place value: 4,527 = 4,000 + 500 + 20 + 7, because the 4 sits in the thousands place, the 5 in hundreds, the 2 in tens, and the 7 in ones.

It is the backbone of Common Core place-value instruction in US elementary schools, and it makes mental math transparent — adding 4,527 + 3,000 is obviously 7,527 once you see the thousands digit alone. The form also handles decimals (3.46 = 3 + 0.4 + 0.06) and exposes zeros' quiet work: in 10,305, the hundreds place contributes nothing, which is why the expanded form skips straight from thousands to tens. Enter any whole number and the calculator splits it into its thousands, hundreds, tens, and ones parts with a sum check.`,
    howToSteps: [
      "Type the whole number in the Number box — for example, 4527.",
      "Read the Thousands part box: 4000.",
      "Read the Hundreds part, Tens part, and Ones part boxes: 500, 20, 7.",
      "Check the Sum (verification) box: 4527, proving the parts rebuild the whole.",
      "Try 10305 and notice the hundreds part reads 0 — the zero holds the place but adds nothing.",
    ],
    faqs: [
      { q: "What is expanded form in plain words?", a: "Writing a number as the sum of its digits' place values: 4,527 = 4,000 + 500 + 20 + 7. Each part shows what one digit contributes." },
      { q: "What is the expanded form of 10,305?", a: "10,000 + 300 + 0 + 5 — usually written 10,000 + 300 + 5. The thousands digit (0) contributes nothing but keeps the other digits in their correct places." },
      { q: "How do you write decimals in expanded form?", a: "Extend the places rightward: 3.46 = 3 + 0.4 + 0.06 (ones + tenths + hundredths). Each step right is another division by 10." },
      { q: "Expanded form vs. word form?", a: "Expanded form is the addition (4,000 + 500 + 20 + 7); word form is the English ('four thousand five hundred twenty-seven'); standard form is the plain digits (4,527). US tests ask for all three." },
      { q: "Why do schools teach expanded form?", a: "It makes place value visible, which powers mental addition, subtraction with regrouping, and later polynomial algebra — (4,000 + 500 + …) behaves exactly like (4x³ + 5x² + …)." },
    ],
  },

  "exponential-notation": {
    description: `Astronomers say a light-year is 9.5 × 10¹² kilometers — because writing out 9,500,000,000,000 every time would drive anyone mad. Exponential notation writes a number as a × bⁿ — a coefficient times a base raised to a power — which compresses the universe's extremes into readable form. Scientific notation is the famous special case with base 10 and the coefficient between 1 and 10: the speed of light is 3.0 × 10⁸ m/s, a hydrogen atom's mass about 1.7 × 10⁻²⁷ kg.

The notation also runs the other way for computing: 3.5 × 10⁴ = 35,000, and 2 × 2⁸ = 512. Students meet it in physical science and chemistry (moles, wavelengths), programmers meet it as 'E notation' (1.5E6), and the log₁₀ readout tells you the number's order of magnitude at a glance. Enter the coefficient, base, and exponent and the calculator evaluates a × bⁿ, shows bⁿ alone, and reports the base-10 logarithm.`,
    howToSteps: [
      "Type the coefficient in the Coefficient (a) box — for example, 3.5.",
      "Type the base in the Base (b) box — for example, 10.",
      "Type the power in the Exponent (n) box — for example, 4.",
      "Read the Result (a × bⁿ) box: 35,000.",
      "Check the log₁₀ of result box — about 4.54 — for the order of magnitude.",
    ],
    faqs: [
      { q: "What is exponential notation in plain words?", a: "Writing a number as a × bⁿ: a coefficient times a base raised to an exponent. 3.5 × 10⁴ = 35,000. Scientific notation fixes the base at 10 with 1 ≤ a < 10." },
      { q: "How do you convert 0.00045 to scientific notation?", a: "Move the decimal until one nonzero digit leads: 4.5 × 10⁻⁴. Moving right makes the exponent negative; moving left makes it positive." },
      { q: "What does 1.5E6 mean?", a: "1.5 × 10⁶ = 1,500,000. The E is calculator shorthand for 'times ten to the power of' — standard on spreadsheets and programming languages." },
      { q: "How do you multiply numbers in scientific notation?", a: "Multiply the coefficients and add the exponents: (3 × 10⁴)(2 × 10⁵) = 6 × 10⁹. Then renormalize the coefficient to [1, 10) if needed." },
      { q: "What does the log₁₀ of the result tell me?", a: "Its order of magnitude — how many digits the number has. log₁₀(35,000) ≈ 4.54 means 'a 5-digit number, a bit past 10⁴.'" },
    ],
  },
  "exponents-calculator": {
    description: `Fold a paper 42 times and it would reach the Moon — exponential growth breaks every intuition you own, which is why you calculate it instead of guessing. Raising a base to an exponent means repeated multiplication: 2⁸ = 2 × 2 × … × 2 = 256. Negative exponents flip to reciprocals (2⁻³ = 1/8), fractional exponents become roots (4^0.5 = √4 = 2), and any nonzero base to the 0 power is 1.

The growth is violent: compound interest, viral shares, and Moore's-law transistor counts all run on it — a 7% annual return doubles money in about 10 years because 1.07¹⁰ ≈ 2. Students meet exponents in pre-algebra, wield them on the SAT, and lean on them in every science class after. The inverse operation rides along: the ⁿ√a box returns the nth root, so the 3rd root of 64 is 4. Enter the base and exponent to get aⁿ plus its root-form inverse.`,
    howToSteps: [
      "Type the base in the Base (a) box — for example, 2.",
      "Type the power in the Exponent (n) box — for example, 8 (decimals and negatives allowed).",
      "Read the aⁿ box: 256.",
      "Check the ⁿ√a (Inverse) box: the 8th root of 2, about 1.09.",
      "Try 4 with exponent 0.5 to see 2 — fractional exponents are roots.",
    ],
    faqs: [
      { q: "What does 2⁸ mean in plain words?", a: "Multiply 2 by itself 8 times: 256. The exponent counts the multiplications; the base is what gets multiplied." },
      { q: "What is a negative exponent?", a: "A reciprocal: 2⁻³ = 1/2³ = 1/8. The negative sign moves the power across the fraction bar — it never makes the result negative." },
      { q: "What is a fractional exponent like 4^0.5?", a: "A root: 4^(1/2) = √4 = 2. The denominator of the fraction is the root — 8^(1/3) = ∛8 = 2." },
      { q: "Why is anything to the 0 power equal to 1?", a: "Because exponent rules must stay consistent: 2³ ÷ 2³ = 2^(3−3) = 2⁰, but anything divided by itself is 1. So 2⁰ = 1 (for nonzero bases)." },
      { q: "How fast does exponential growth really get?", a: "Absurdly. Doubling each step, 10 steps gives ~1,000, 20 steps ~1,000,000, 30 steps ~1,000,000,000 — which is why the paper-folding-to-the-Moon claim checks out." },
    ],
  },

  "factorial-calculator": {
    description: `Shuffle a deck of cards and you are almost certainly holding an arrangement no human has ever seen — there are 52! of them, a 68-digit number. The factorial n! multiplies every positive integer down to 1: 5! = 5 × 4 × 3 × 2 × 1 = 120. It counts arrangements — the ways to order n distinct items — which makes it the engine of combinatorics: 52! ≈ 8 × 10⁶⁷ possible card shuffles, more than the atoms in the galaxy's stars.

By definition 0! = 1 (there is exactly one way to arrange nothing), a convention that keeps the formulas consistent. Factorials also build the permutation and combination formulas: P(n, r) = n!/(n−r)! counts ordered selections, C(n, r) = n!/(r!(n−r)!) unordered ones — the calculator shows both for r = 2. Growth is ferocious (20! already has 19 digits), so the calculator caps n at 20 to keep results exact. Enter n and get n!, P(n,2), and C(n,2).`,
    howToSteps: [
      "Type a non-negative integer in the n box — for example, 5.",
      "Read the n! box: 120.",
      "Read the Permutations P(n,2) box: 5 × 4 = 20 ordered pairs.",
      "Read the Combinations C(n,2) box: 20 ÷ 2 = 10 unordered pairs.",
      "Try 0 to confirm 0! = 1, the convention that keeps every formula working.",
    ],
    faqs: [
      { q: "What is a factorial in plain words?", a: "n! = n × (n−1) × … × 1. It counts the ways to arrange n distinct objects in order. 4! = 24 ways to line up four books." },
      { q: "Why is 0! equal to 1?", a: "Combinatorially, there is exactly one way to arrange zero objects (do nothing). Algebraically, it keeps n! = n × (n−1)! working at n = 1. Both roads lead to 1." },
      { q: "How many ways can you shuffle a deck of cards?", a: "52! ≈ 8.07 × 10⁶⁷ — about 80 unvigintillion. Every properly shuffled deck is essentially a first in history." },
      { q: "Permutations vs. combinations?", a: "P(n,r) = n!/(n−r)! counts ordered selections (president-then-vice-president); C(n,r) = n!/(r!(n−r)!) counts unordered ones (a committee). For n = 5, r = 2: P = 20, C = 10." },
      { q: "Why does the calculator stop at 20?", a: "Because 21! exceeds what standard integer types store exactly (20! = 2,432,902,008,176,640,000 already has 19 digits). Beyond that you need arbitrary-precision or Stirling's approximation." },
    ],
  },

  "faraday-law-calculator": {
    description: `Spin a magnet inside a coil of wire and electricity flows — every power plant on Earth is a giant version of that one trick. Faraday's law of induction says a changing magnetic flux through a loop induces a voltage: ε = −N·ΔΦ/Δt, where N is the number of coil turns and ΔΦ/Δt is how fast the magnetic flux changes. The negative sign is Lenz's law — nature resisting the change, which is why generators fight back when you draw more current.

Double the spin speed or double the turns and you double the voltage; that is the entire business model of hydroelectric dams, wind turbines, and car alternators. Transformers exploit the same law with two coils sharing a flux to step voltage up for transmission (high voltage = low current = less heat loss) and back down for your 120-volt outlets. Enter the turns, flux change, and time and the calculator returns the induced EMF.`,
    howToSteps: [
      "Type the number of coil turns in the Variable A box — for example, 100.",
      "Type the flux change per second in the Variable B box — for example, 0.02 webers per second.",
      "Read the Result box for the induced voltage: 100 × 0.02 = 2 volts (sign indicating opposition).",
      "Double the turns to 200 and watch the voltage double to 4 — the linear scaling Faraday found.",
      "Remember Lenz's law: the induced current always fights the change that created it.",
    ],
    faqs: [
      { q: "What is Faraday's law in plain words?", a: "A changing magnetic field through a coil creates voltage: EMF = −N × (change in flux ÷ change in time). Faster change or more turns means more volts." },
      { q: "What is Lenz's law?", a: "The minus sign: induced current flows in the direction that opposes the change producing it. Push a magnet into a coil and the coil becomes an electromagnet pushing back." },
      { q: "How does a power plant use Faraday's law?", a: "Turbines spin magnets inside giant coils (or coils inside magnets). The rotating flux induces AC voltage — 60 Hz in the US — which transformers step up for long-distance transmission." },
      { q: "How does a transformer work?", a: "Two coils share an iron core. AC in the primary creates changing flux; the secondary coil intercepts it. The voltage ratio equals the turns ratio: 10× the turns gives 10× the volts." },
      { q: "Why does the flux have to change?", a: "A steady magnetic field induces nothing — only change counts. That is why generators must keep spinning and why transformers work on AC but not DC." },
    ],
  },

  "fermat-calculator": {
    description: `In 1640 Pierre de Fermat scribbled a clock-like pattern about prime numbers — three centuries later it guards your credit card. Fermat's little theorem says that for any prime p and any a not divisible by p, a^(p−1) ≡ 1 (mod p) — the (p−1)th power always leaves remainder 1. For p = 7 and a = 2: 2⁶ = 64, and 64 ÷ 7 leaves remainder 1.

The theorem's killer app is primality testing: if some a^(n−1) ≢ 1 (mod n), then n is definitely composite — a fast filter that rules out fakes before expensive exact tests. RSA encryption, which protects online purchases, leans on the theorem's machinery when generating keys from huge primes. Number-theory students also use it to shrink giant exponents: 2^100 mod 7 becomes 2^4 mod 7 = 2, since 2⁶ ≡ 1. Enter the base and the candidate prime and the calculator evaluates the congruence.`,
    howToSteps: [
      "Type the base a in the Variable A box — for example, 2.",
      "Type the candidate prime p in the Variable B box — for example, 7.",
      "Read the Result box for a^(p−1) mod p — here 64 mod 7 = 1, consistent with p prime.",
      "Test a composite like 8: 2^7 mod 8 = 0, not 1 — the theorem's contrapositive exposes it.",
      "Use the pattern to shrink exponents: replace a^(p−1) with 1 inside bigger modular powers.",
    ],
    faqs: [
      { q: "What is Fermat's little theorem in plain words?", a: "For prime p and a not divisible by p: a^(p−1) leaves remainder 1 when divided by p. Example: 2⁶ = 64 ≡ 1 (mod 7)." },
      { q: "How does it test for primes?", a: "Pick an a, compute a^(n−1) mod n. If the result is not 1, n is definitely composite. If it is 1, n is probably prime — repeat with more a's for confidence." },
      { q: "What are Carmichael numbers?", a: "Rare composites (like 561) that fool the Fermat test for every a co-prime to them. They are why professionals follow up with stronger tests like Miller-Rabin." },
      { q: "Is this related to Fermat's Last Theorem?", a: "Only by author. The 'little' theorem is the practical modular-arithmetic workhorse; the 'Last' Theorem (no integer solutions to aⁿ + bⁿ = cⁿ for n > 2) took 350 years to prove and has no everyday use." },
      { q: "How is Fermat's little theorem used in encryption?", a: "RSA key generation needs huge primes fast. The Fermat test (and its Miller-Rabin upgrade) screens candidates in milliseconds — without it, generating a key pair would take impractically long." },
    ],
  },
};
