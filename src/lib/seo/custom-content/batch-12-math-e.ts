import type { SEOContent } from "@/lib/seo/content";

export const BATCH_12: Record<string, Partial<SEOContent>> = {
  "resonance-calculator": {
    description: `A radio dial that lands exactly on your station is no accident — inside the tuner, a resonant circuit is ringing at that station's frequency and ignoring everything else. Resonance happens when an inductor and a capacitor trade energy back and forth at one natural frequency, and the rule is simple: the resonant frequency equals one divided by two pi times the square root of inductance times capacitance (f = 1 / (2π√(LC))). Bigger L or C drags the frequency down; smaller values push it up, which is why a tiny trimmer capacitor can fine-tune a whole receiver.

The same idea hums through guitar amplifiers, wireless phone chargers, and the metal detector at the beach. This calculator handles the LC product at the heart of the formula: enter your inductance and capacitance, and the Result box gives you L × C, which you then drop under the square root in the resonance formula. An AM radio hobbyist in Ohio winding a 0.25 mH coil, for instance, multiplies it by candidate capacitor values to find which one lands the dial near 1 MHz.`,
    howToSteps: [
      "Type your inductance value in the Variable A box — for example, 0.25 for a 0.25 mH radio coil.",
      "Type your capacitance in the Variable B box — for example, 100 for a 100 pF tuning capacitor.",
      "Read the Result box: it shows the L × C product at the center of the resonance formula.",
      "Take the square root of the Result, multiply by 2π (about 6.2832), and divide 1 by that number to get the resonant frequency.",
      "Try a larger capacitance in Variable B and watch the product grow — the resonant frequency drops in response.",
      "Keep L and C in matching unit families (both milli/micro or both base units) so the product means what you think.",
    ],
    faqs: [
      { q: "What is the resonance formula in plain words?", a: "The resonant frequency f equals 1 divided by (2π times the square root of L times C). In symbols: f = 1 / (2π√(LC)), where L is inductance in henries and C is capacitance in farads." },
      { q: "When would I use a resonance calculator?", a: "Radio builders pick coil and capacitor values to hit a target station, audio techs tune speaker crossovers, and engineers design wireless chargers — all of them need the LC product this tool computes." },
      { q: "Why does a bigger capacitor lower the frequency?", a: "Because the frequency formula divides by the square root of L × C. Growing C grows the denominator, so the result shrinks — a heavier energy bucket sloshes more slowly." },
      { q: "What units should L and C be in?", a: "Henries for inductance and farads for capacitance give hertz out. In practice, millihenries with microfarads also work as long as you convert consistently before the final step." },
      { q: "What is the most common resonance mistake?", a: "Forgetting the 2π factor or mixing unit scales — pairing millihenries with picofarads without converting throws the frequency off by orders of magnitude." },
    ],
  },

  "rhombus-calculator": {
    description: `A baseball diamond is a rhombus — four equal 90-foot sides, with the corners meeting at angles that are anything but square. The rhombus is the slanted cousin of the square: all sides equal, opposite sides parallel, and the diagonals crossing at right angles. Its area has a wonderfully direct recipe: multiply the two diagonals together and cut the product in half. A diamond with diagonals of about 127 feet (home to second) and 127 feet the other way covers roughly 8,100 square feet — which is exactly why the infield grass bill comes out the way it does.

Kite makers, tile layers setting diamond-pattern floors, and quilters cutting fabric blocks all reach for the same rule. This calculator performs the key multiplication: type the first diagonal in Variable A and the second in Variable B, and the Result box returns their product. Halve that number and you have the rhombus area — the sod, tile, or fabric you actually need to buy.`,
    howToSteps: [
      "Measure the first diagonal of your rhombus and type it in the Variable A box — for example, 8 for an 8-inch kite spine.",
      "Measure the second diagonal and type it in the Variable B box — for example, 6 for a 6-inch cross-spar.",
      "Read the Result box: 8 × 6 = 48, the product of the two diagonals.",
      "Divide the Result by 2 to get the area — 24 square inches of kite sail in this example.",
      "For a baseball diamond, enter 127.3 in both boxes, halve the Result, and you get about 8,100 square feet.",
      "Measure both diagonals in the same units — mixing inches and feet silently breaks the answer.",
    ],
    faqs: [
      { q: "What is the rhombus area formula in plain words?", a: "Multiply the two diagonals and divide by two. In symbols: A = (d₁ × d₂) / 2. The calculator gives you the d₁ × d₂ product; you halve it for the area." },
      { q: "Is a square a rhombus?", a: "Yes — a square is a rhombus with right angles. Every square qualifies, but most rhombuses (like a baseball diamond) are slanted and do not." },
      { q: "When would I need a rhombus area?", a: "Pricing sod for a diamond-shaped infield, cutting kite sails, laying diamond tile patterns, and sizing diamond quilt blocks all use it." },
      { q: "Do the diagonals of a rhombus always cross at 90 degrees?", a: "Yes. The diagonals of every rhombus are perpendicular bisectors of each other — that right-angle crossing is what makes the (d₁ × d₂)/2 formula work." },
      { q: "What is the biggest rhombus mistake?", a: "Using the side length instead of the diagonals. The side alone cannot give the area — a rhombus can be squashed flat while keeping the same side length." },
    ],
  },

  "right-angle-triangle-calculator": {
    description: `Carpenters checking whether a corner is truly square reach for the 3-4-5 trick: mark 3 feet along one wall, 4 feet along the other, and if the diagonal measures exactly 5 feet, the corner is a perfect right angle. That trick works because of the Pythagorean theorem — in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs (a² + b² = c²). The right angle forces the whole relationship, which is why roofers, stair builders, and surveyors trust it with real lumber and real money.

The area of a right triangle is equally direct: multiply the two legs and halve the product, since two copies of the triangle make a rectangle. This calculator handles that multiplication — enter one leg in Variable A and the other in Variable B, and the Result box shows their product. A stair stringer cut with a 7-inch rise and 11-inch run, for example, gives a product of 77, so each triangular face covers 38.5 square inches before you halve it.`,
    howToSteps: [
      "Type the first leg of your right triangle in the Variable A box — for example, 7 for a 7-inch stair rise.",
      "Type the second leg in the Variable B box — for example, 11 for an 11-inch tread run.",
      "Read the Result box: 7 × 11 = 77, the product of the two legs.",
      "Divide the Result by 2 for the triangle's area — 38.5 square inches here.",
      "To check a corner with the 3-4-5 rule, enter 3 and 4: the Result 12 is twice the 6-square-unit area of the test triangle.",
      "Make sure both legs use the same units — feet with feet, inches with inches.",
    ],
    faqs: [
      { q: "What is the Pythagorean theorem in plain words?", a: "In a right triangle, the hypotenuse squared equals the sum of the two leg squares: a² + b² = c². It only works when one angle is exactly 90 degrees." },
      { q: "How do I find the area of a right triangle?", a: "Multiply the two legs and divide by 2. The calculator gives you the leg × leg product in the Result box; halve it for the area." },
      { q: "When is the 3-4-5 rule used?", a: "Framers, masons, and deck builders use it to square corners: 3 units one way, 4 the other, and a 5-unit diagonal guarantees a right angle." },
      { q: "Right angle triangle vs. right triangle — different?", a: "No, they are the same thing. 'Right-angle triangle' is just the fuller phrasing; both mean a triangle with one 90-degree corner." },
      { q: "What is the most common right-triangle mistake?", a: "Applying the Pythagorean theorem to a triangle that is not right-angled, or squaring the hypotenuse when you should be square-rooting the sum." },
    ],
  },

  "right-triangle-calculator": {
    description: `A 25-foot extension ladder leaning against a house forms a right triangle with the ground and the wall — and the ladder's reach follows the Pythagorean theorem exactly. When you know both legs, the hypotenuse is the square root of the sum of their squares: c = √(a² + b²). A ladder foot sitting 7 feet out from the wall with the top resting 24 feet up needs √(49 + 576) = √625 = 25 feet of ladder, which is why fire departments drill these numbers until they are instinct.

Finding that hypotenuse starts with squaring each leg, and this calculator does the squaring step cleanly. Type a leg length in both the Variable A and Variable B boxes and the Result is that leg squared — enter 7 twice and you get 49. Do the same for the second leg, add the two Results, and take the square root for the hypotenuse. Electricians sizing conduit runs and homeowners placing a TV mount across a room corner use the same three moves.`,
    howToSteps: [
      "Type the first leg length in both the Variable A box and the Variable B box — for example, 7 twice for a 7-foot ladder setback.",
      "Read the Result box: 7 × 7 = 49, the first leg squared.",
      "Repeat with the second leg — type 24 in both boxes to get 576 in the Result.",
      "Add the two Results (49 + 576 = 625) and take the square root: 25 feet of ladder needed.",
      "For the ladder's wall height instead, square the ladder and the setback, subtract, then square-root.",
      "Keep every measurement in the same unit — mixing feet and inches here gives a nonsense hypotenuse.",
    ],
    faqs: [
      { q: "How do I find the hypotenuse in plain words?", a: "Square each leg, add the squares, and take the square root: c = √(a² + b²). This calculator produces each leg-squared term; you add them and root the sum." },
      { q: "When would I compute a hypotenuse?", a: "Sizing ladders, cutting stair stringers, running diagonal conduit, and placing a TV mount across a room corner all need the diagonal length." },
      { q: "What is a Pythagorean triple?", a: "A set of whole numbers that fits a² + b² = c² exactly, like 3-4-5 or 5-12-13. Builders love them because no square roots are needed." },
      { q: "Can I find a missing leg instead?", a: "Yes: leg = √(hypotenuse² − known leg²). Square the hypotenuse in the calculator, square the known leg, subtract, and take the root." },
      { q: "People also search 'right triangle hypotenues calculator' — is that this?", a: "Yes, that typo'd search means this page. The hypotenuse is the longest side, always opposite the right angle." },
    ],
  },

  "roman-numeral": {
    description: `The Super Bowl is never number 60 — it is Super Bowl LX, because the NFL numbers its championship in Roman numerals. The system is beautifully economical: seven letters do all the work (I=1, V=5, X=10, L=50, C=100, D=500, M=1000), and a subtraction trick handles the rest — put a smaller value before a larger one and subtract, so IV is 4 and CM is 900. That is how 2024 becomes MMXXIV and 1999 becomes MCMXCIX, the trickiest year of the bunch with its double subtraction.

Clock faces, movie sequel credits, and the copyright dates at the end of old films all keep the system alive. This converter breaks any number from 1 to 3999 into its place values: type it in the Arabic Number box and read the Thousands digit (M), Hundreds digit, Tens digit, and Ones digit outputs. A tattoo artist checking a client's birth year, or a student decoding the cornerstone date on a courthouse, gets the exact digit breakdown — 42, for instance, shows 0 thousands, 0 hundreds, 4 tens, and 2 ones, which assembles into XLII.`,
    howToSteps: [
      "Type any whole number from 1 to 3999 in the Arabic Number box — for example, 2024.",
      "Read the Thousands digit (M) output: 2 means two M symbols lead the numeral.",
      "Read the Hundreds digit, Tens digit, and Ones digit outputs to get each place's value — 0, 2, and 4 for 2024.",
      "Assemble the numeral from the digits: 2024 becomes MMXXIV.",
      "Try 1999 to see the subtraction rule at work: the breakdown leads you to MCMXCIX.",
      "Stay within 1 to 3999 — the classical system has no standard symbols beyond that range.",
    ],
    faqs: [
      { q: "How do Roman numerals work in plain words?", a: "Add letter values left to right, except a smaller letter before a larger one subtracts: IV = 4, IX = 9, XL = 40, CM = 900. The converter splits your number into thousands, hundreds, tens, and ones digits to build the numeral." },
      { q: "What is 2024 in Roman numerals?", a: "MMXXIV. The breakdown is 2 thousands (MM), 0 hundreds, 2 tens (XX), and 4 ones (IV)." },
      { q: "Why is 4 written as IV instead of IIII?", a: "The subtraction rule keeps numerals short: one I before V means 5 − 1 = 4. (Clock faces traditionally break this rule and use IIII for visual balance.)" },
      { q: "Where are Roman numerals still used?", a: "Super Bowl numbers, monarch names like Elizabeth II, movie copyright dates, clock faces, and chapter headings in books." },
      { q: "People also search 'romen numerals converter' — is that this?", a: "Yes, that common misspelling leads here. Type the Arabic number and this page returns the correct Roman numeral breakdown." },
    ],
  },

  "rotation-calculator": {
    description: `Every time a video game character spins or a phone photo rotates 90 degrees, the same two formulas run behind the screen. Rotating a point (x, y) by an angle θ gives a new position: the new x equals x·cos θ minus y·sin θ, and the new y equals x·sin θ plus y·cos θ. The whole rotation is built from four plain multiplications, which is why graphics chips — designed to multiply blindingly fast — handle spinning objects so effortlessly.

Graphic designers rotating a logo, robotics hobbyists turning a robotic arm, and mapmakers reorienting a survey grid all compute those products. This calculator performs each multiplication step: type a coordinate in the Variable A box and the matching cosine or sine value in the Variable B box, and the Result box returns that term. Rotating the point (3, 4) by 90 degrees, for instance, means multiplying 3 by cos 90° (0) and 4 by sin 90° (1) — the products 0 and 4 combine into the new position (−4, 3).`,
    howToSteps: [
      "Look up the cosine and sine of your rotation angle — for 90 degrees, cos = 0 and sin = 1.",
      "Type the point's x-coordinate in the Variable A box and cos θ in the Variable B box — for example, 3 and 0.",
      "Read the Result box: 3 × 0 = 0, the first term of the new x.",
      "Type the y-coordinate in Variable A and sin θ in Variable B — 4 and 1 gives 4 — then compute new x as (x·cos θ) − (y·sin θ).",
      "Repeat the pairings for the new y: (x·sin θ) + (y·cos θ).",
      "Double-check the angle is in the right mode — cos 90° is 0 in degrees but about −0.45 in radians.",
    ],
    faqs: [
      { q: "What is the rotation formula in plain words?", a: "New x = x·cos θ − y·sin θ, and new y = x·sin θ + y·cos θ. This calculator computes each x·cos θ or y·sin θ product; you add or subtract the terms." },
      { q: "When would I rotate a point?", a: "Game development, logo design, robotics arm kinematics, and reorienting survey or map coordinates all rotate points this way." },
      { q: "Why does rotating (1, 0) by 90 degrees give (0, 1)?", a: "Because cos 90° = 0 and sin 90° = 1: new x = 1·0 − 0·1 = 0, new y = 1·1 + 0·0 = 1. The point swings a quarter-turn counterclockwise." },
      { q: "Degrees or radians — which do I use?", a: "Whichever your cosine and sine values assume. Mixing a degree-mode angle with radian-mode trig values is the classic rotation bug." },
      { q: "Does rotation change the point's distance from the origin?", a: "No. Rotation preserves distance — only the direction changes — which is a handy way to sanity-check your answer." },
    ],
  },

  "rounding-calculator": {
    description: `Gas stations price fuel at $3.499 a gallon — a fraction of a cent you never actually pay, because the pump total rounds to the nearest cent at checkout. Rounding is the everyday art of trading unneeded precision for clean numbers: look at the digit just past your cutoff, round up if it is 5 or more, and round down otherwise. The $3.499 price becomes $3.50, a $47.50 restaurant bill split three ways becomes $15.83 each, and a lab report keeps three significant digits instead of twelve.

Teachers grading on whole points, cashiers making change, and analysts tidying spreadsheet exports all round constantly. This tool rounds three ways at once: type the value in the Number box and the precision in the Decimal Places box, then read the Rounded Result (standard half-up), the Rounded Up (Ceiling) value, and the Rounded Down (Floor) value. A contractor billing $1,247.63 at 0 decimal places sees 1248, 1248, and 1247 side by side and picks the rule the contract requires.`,
    howToSteps: [
      "Type the value you want to round in the Number box — for example, 3.499 for a gas price.",
      "Type how many decimal places to keep in the Decimal Places box — for example, 2 for cents.",
      "Read the Rounded Result output: 3.50, the standard half-up rounding.",
      "Compare the Rounded Up (Ceiling) and Rounded Down (Floor) outputs when a contract or tax rule demands one direction.",
      "Use 0 decimal places to round to whole dollars, or a negative-feel large precision to keep extra digits.",
      "Remember the outputs follow the number's sign — ceiling of a negative moves toward zero.",
    ],
    faqs: [
      { q: "How does rounding work in plain words?", a: "Look at the first digit you are dropping: 5 or higher rounds the kept digit up, 4 or lower leaves it. Standard rounding sends 2.5 up to 3." },
      { q: "What is the difference between ceiling and floor?", a: "Ceiling always rounds up toward positive infinity (2.1 → 3), floor always rounds down toward negative infinity (2.9 → 2). Standard rounding goes to the nearest." },
      { q: "When would I use ceiling instead of normal rounding?", a: "When you must cover a quantity: paint cans, shipping boxes, or crew shifts — 2.1 gallons of paint means buying 3 cans." },
      { q: "Why does 2.5 sometimes round to 2?", a: "That is banker's rounding (round-half-to-even), used in finance software to avoid upward bias. This calculator uses the familiar round-half-up rule instead." },
      { q: "People also search 'round off calculator' — is that this?", a: "Yes. 'Round off' is the common phrasing for the same operation this page performs." },
    ],
  },

  "scalar-multiplication-calculator": {
    description: `In animation software, shrinking a character to half size means multiplying every one of its position vectors by 0.5 — and that single operation is scalar multiplication. A scalar is just an ordinary number, and multiplying it through a vector stretches or shrinks the vector without changing its direction (a negative scalar flips it around). Double the scalar and the arrow doubles in length; halve it and the arrow halves. Game engines do this thousands of times a frame every time anything on screen grows, shrinks, or slows down.

Physics students meet the same idea when a 3-newton force vector gets scaled by a time interval, or when a velocity is halved by friction. This calculator performs the core step: type the scalar in the First Number box and the vector component in the Second Number box, and the Product output gives the scaled component. Scaling the velocity component 8 ft/s by a 0.5 slowdown factor, for example, returns 4 ft/s — repeat for each component and the whole vector is scaled.`,
    howToSteps: [
      "Type the scalar (the ordinary number) in the First Number box — for example, 0.5 to halve a size.",
      "Type the vector component in the Second Number box — for example, 8 for an 8 ft/s velocity.",
      "Read the Product output: 0.5 × 8 = 4, the scaled component.",
      "Repeat for every component of the vector — a 2D vector needs two products, a 3D vector needs three.",
      "Use a negative scalar in the First Number box to flip the vector's direction while scaling it.",
      "Keep units attached to the component (ft/s, pixels) so the scaled result stays meaningful.",
    ],
    faqs: [
      { q: "What is scalar multiplication in plain words?", a: "Multiply an ordinary number (the scalar) by each component of a vector. The vector stretches or shrinks; its direction stays the same unless the scalar is negative." },
      { q: "When would I use scalar multiplication?", a: "Resizing graphics, scaling animation speeds, adjusting force vectors in physics, and normalizing data in machine learning all multiply vectors by scalars." },
      { q: "What does multiplying by a negative scalar do?", a: "It scales the length and reverses the direction — multiplying a velocity by −1 sends the object back the way it came." },
      { q: "Is scalar multiplication the same as the dot product?", a: "No. Scalar multiplication takes a number times a vector and returns a vector; the dot product takes two vectors and returns a single number." },
      { q: "What is the most common scalar multiplication mistake?", a: "Scaling only one component of a multi-component vector and forgetting the rest — every component must be multiplied." },
    ],
  },
};

Object.assign(BATCH_12, {
  "scientific-notation-calculator": {
    description: `The US national debt is usually quoted as $34 trillion, but scientists write it as 3.4 × 10¹³ dollars — the same number, freed from a parade of zeros. Scientific notation splits any number into a coefficient between 1 and 10 multiplied by a power of ten: move the decimal point until one non-zero digit remains on the left, and count the moves to get the exponent. Move left and the exponent is positive (3,400,000 = 3.4 × 10⁶); move right and it is negative (0.00034 = 3.4 × 10⁻⁴).

Astronomers describing light-years, chemists counting molecules, and engineers sizing transistors all speak this language. This converter takes any standard number you type in the Standard Number box and reports the Coefficient (a), the Exponent (n), and even log₁₀(n) for scale comparisons. Typing 34000000000000 returns a coefficient of 3.4 with exponent 13 — and the log output tells you at a glance that the debt is thirteen orders of magnitude above a single dollar.`,
    howToSteps: [
      "Type your ordinary number in the Standard Number box — for example, 34000000000000 for the national debt.",
      "Read the Coefficient (a) output: 3.4, the number's significant digits as a value between 1 and 10.",
      "Read the Exponent (n) output: 13, meaning × 10¹³ — the decimal moved 13 places.",
      "Use the log₁₀(n) output to compare scales: a log difference of 3 means a thousand-fold gap.",
      "For tiny numbers like 0.00000052, expect a negative exponent — the decimal moved right 7 places.",
      "Remember the coefficient always keeps the original digits; only the decimal point travels.",
    ],
    faqs: [
      { q: "How do I convert to scientific notation in plain words?", a: "Move the decimal point until one non-zero digit sits left of it, then count the moves — that count is the exponent. Left moves give positive exponents, right moves give negative ones." },
      { q: "When is scientific notation actually used?", a: "Astronomy, chemistry, physics, and engineering use it for very large or very small quantities — distances between stars, molecular counts, and electrical units." },
      { q: "What is the difference between scientific and engineering notation?", a: "Scientific notation uses any exponent with a coefficient from 1 to 10; engineering notation restricts exponents to multiples of 3 (thousands, millions, billions), matching metric prefixes." },
      { q: "Why is the coefficient always between 1 and 10?", a: "Convention — it makes every number's scale readable from the exponent alone. 3.4 × 10¹³ instantly says 'thirteen zeros' without counting digits." },
      { q: "People also search 'scientific notaion calculator' — is that this?", a: "Yes, that misspelling lands here. Enter the standard number and get the coefficient and exponent instantly." },
    ],
  },

  "secant-line-calculator": {
    description: `A road trip's average speed is a secant line in disguise. Plot miles driven against hours on a graph, draw a straight line between the start and end points, and that line's slope — the rise divided by the run — is your average speed for the whole trip. Mathematicians call any line through two points of a curve a secant line, and its slope measures the average rate of change between them: how fast, on average, the quantity was changing. Drive 300 miles in 5 hours and the secant slope is 60 mph, whatever the speedometer did in between.

Economists average growth rates, pharmacologists average drug absorption, and calculus students meet the secant slope as the warm-up for the derivative. Since slope is rise over run, you can compute it as the rise times the reciprocal of the run. This calculator multiplies those two pieces: type the vertical change in the Variable A box and one divided by the horizontal change in the Variable B box, and the Result box returns the secant slope — enter 300 and 0.2 (1/5) for the road trip, and out comes 60.`,
    howToSteps: [
      "Find the vertical change between your two points (the rise) and type it in the Variable A box — for example, 300 for 300 miles.",
      "Compute one divided by the horizontal change and type it in the Variable B box — for example, 0.2 for a 5-hour run.",
      "Read the Result box: 300 × 0.2 = 60, the secant slope — 60 mph average speed.",
      "For a falling quantity, the rise is negative — type −40 for a 40-unit drop and the slope comes out negative.",
      "Compare two trips by running each pair through the boxes; the steeper secant slope is the faster average.",
      "Keep the units paired sensibly — miles with hours gives mph, dollars with years gives dollars per year.",
    ],
    faqs: [
      { q: "What is a secant line in plain words?", a: "A straight line through two points on a curve. Its slope — rise times the reciprocal of run — is the average rate of change between those points." },
      { q: "How is a secant line different from a tangent line?", a: "A secant touches the curve at two points and gives an average rate; a tangent touches at one point and gives the instantaneous rate. Shrink the gap between the secant's points and it becomes the tangent." },
      { q: "When would I compute a secant slope?", a: "Average speed on a trip, average revenue growth between quarters, or average temperature change between two readings — any 'how fast on average' question." },
      { q: "What does a negative secant slope mean?", a: "The quantity fell between the two points — the line tilts downward, like a bank balance dropping from $500 to $460." },
      { q: "What is the most common secant slope mistake?", a: "Dividing run by rise instead of rise by run, which flips the answer into its reciprocal — 5/300 instead of 300/5." },
    ],
  },

  "set-theory-calculator": {
    description: `A marketing survey finds 60% of customers like email offers and 50% like text alerts — but what share likes at least one? You cannot just add the percentages, because the customers who like both get counted twice. Set theory sorts this out: the union (everyone in either group) equals the sum of the groups minus their intersection (the overlap). And when two events are independent, the chance of both happening is beautifully simple: multiply the individual probabilities. A 60% email fan who is also a 50% text fan, independently, has a 30% chance of loving both.

Pollsters, quality-control engineers, and game designers lean on these rules daily. This calculator performs the independence multiplication: type the first probability as a decimal in the Variable A box and the second in the Variable B box, and the Result box gives the joint probability. Enter 0.6 and 0.5 for the survey example and the Result reads 0.3 — a 30% overlap, the number the campaign budget actually depends on.`,
    howToSteps: [
      "Convert each percentage to a decimal and type the first in the Variable A box — for example, 0.6 for 60%.",
      "Type the second probability in the Variable B box — for example, 0.5 for 50%.",
      "Read the Result box: 0.6 × 0.5 = 0.3, the probability of both events happening together.",
      "Multiply the Result by 100 to speak in percentages again — 30% of customers like both channels.",
      "Use this only when the events are independent — if email fans are more likely to want texts, the true overlap differs.",
      "For 'at least one' questions, add the two probabilities and subtract the Result you just found.",
    ],
    faqs: [
      { q: "What is the set theory multiplication rule in plain words?", a: "For independent events, the probability of both occurring is the product of their probabilities: P(A and B) = P(A) × P(B). The calculator multiplies the two decimals you enter." },
      { q: "When are events independent?", a: "When one does not affect the other — two separate coin flips, or two unrelated customer preferences. If one changes the odds of the other, they are dependent and this rule does not apply." },
      { q: "What is the union formula?", a: "P(A or B) = P(A) + P(B) − P(A and B). You add the groups, then subtract the overlap so it is not double-counted." },
      { q: "When would I use set probability?", a: "Survey analysis, A/B test interpretation, quality sampling, and game odds — anywhere groups overlap or compound events occur." },
      { q: "What is the most common set theory mistake?", a: "Adding probabilities for 'both' instead of multiplying — 60% + 50% = 110% is impossible, while 60% × 50% = 30% is the correct overlap." },
    ],
  },

  "sigma-notation-calculator": {
    description: `Sigma notation is mathematics' way of saying 'add up a whole list without writing it all out.' The Greek letter Σ with a rule underneath packs an entire sum into one compact line — Σ from i=1 to 100 of 5 means add the number 5 one hundred times. When every term is identical, the sum collapses to beautifully simple arithmetic: multiply the count of terms by the repeated value. A hundred $5 monthly fees total $500, and the sigma version says the same thing in a single symbol.

Landlords totaling twelve identical rent payments, payroll clerks adding weekly wages, and statistics students computing expected values all evaluate sums like this. This calculator does the core multiplication: type the number of terms in the Variable A box and the repeated value in the Variable B box, and the Result box shows the total. Enter 100 and 5 for the fee example and the Result reads 500 — the sigma sum, no hundred-line addition required.`,
    howToSteps: [
      "Count how many terms your sum has and type the count in the Variable A box — for example, 100 payments.",
      "Type the repeated value in the Variable B box — for example, 5 for five dollars each.",
      "Read the Result box: 100 × 5 = 500, the value of the sigma sum.",
      "Check your count carefully — Σ from i=1 to 100 has 100 terms, but Σ from i=0 to 100 has 101.",
      "For terms that change (like Σi), add them in pairs first — 1+100, 2+99 — then multiply pairs by the pair sum.",
      "Label the Result with the right unit — dollars, items, or points — so the total reads correctly.",
    ],
    faqs: [
      { q: "How do I read Σ notation in plain words?", a: "Σ with 'i=1' below and '100' above means: start i at 1, plug it into the rule, add the result, bump i up, and repeat through 100. The calculator multiplies count × value for the constant-term case." },
      { q: "What is the sum of a constant in sigma notation?", a: "Count times the constant: Σ (i=1 to n) of c = n × c. One hundred 5's sum to 500." },
      { q: "When is sigma notation used?", a: "Statistics formulas, series in calculus, totaling repeated payments, and anywhere a long addition needs a compact written form." },
      { q: "What is the most common sigma mistake?", a: "Miscounting the terms — Σ from i=0 to n has n+1 terms, not n. The starting index matters." },
      { q: "People also search 'summation notation calculator' — is that this?", a: "Yes, summation notation is just the English name for sigma notation, and this page evaluates those sums." },
    ],
  },

  "signal-processing-calculator": {
    description: `Every podcast episode starts as a race between two numbers: the sample rate and the recording length. Digital audio chops sound into tens of thousands of snapshots per second — the standard 44,100 Hz CD rate means 44,100 samples every second — so a one-hour episode holds 44,100 × 3,600 = 158,760,000 samples. Multiply the sample rate by the duration and you know exactly how much data you are storing, which decides file sizes, buffer lengths, and whether your laptop survives the edit.

Musicians, podcasters, and ham radio operators all do this multiplication when planning recordings or sizing memory. This calculator performs it directly: type the sample rate in hertz in the Variable A box and the duration in seconds in the Variable B box, and the Result box shows the total sample count. A podcaster recording 30 minutes at 44,100 Hz enters 44100 and 1800 to get 79,380,000 samples — and multiplying by 2 bytes per sample reveals a roughly 159 MB raw file before compression.`,
    howToSteps: [
      "Type the sample rate in hertz in the Variable A box — for example, 44100 for CD-quality audio.",
      "Type the recording duration in seconds in the Variable B box — for example, 1800 for 30 minutes.",
      "Read the Result box: 44,100 × 1,800 = 79,380,000 total samples.",
      "Multiply the Result by your bytes per sample (usually 2) to estimate the raw file size in bytes.",
      "Divide by 1,048,576 to convert that byte count into megabytes.",
      "For stereo, double the final number — two channels means twice the samples.",
    ],
    faqs: [
      { q: "How do I find total samples in plain words?", a: "Multiply the sample rate (samples per second) by the duration in seconds. 44,100 Hz × 1,800 s = 79,380,000 samples." },
      { q: "Why is 44,100 Hz the standard rate?", a: "It captures frequencies up to about 22 kHz — just above human hearing — per the Nyquist rule that the rate must be at least double the highest frequency recorded." },
      { q: "When would I compute sample counts?", a: "Sizing audio buffers, estimating podcast file sizes, planning memory for embedded recorders, and setting up radio signal captures." },
      { q: "How big is an hour of CD-quality audio?", a: "About 635 MB raw: 44,100 × 3,600 samples × 2 bytes. MP3 compression shrinks it to roughly a tenth of that." },
      { q: "What is the most common sampling mistake?", a: "Entering minutes instead of seconds in the duration — a 30-minute show is 1,800 seconds, and using 30 gives an answer 60 times too small." },
    ],
  },

  "significant-figures": {
    description: `A kitchen scale reads 152.347 grams of flour, but no home baker needs thousandths of a gram — three significant figures, 152 grams, tells the whole story. Significant figures are the digits of a measurement that actually mean something: every non-zero digit counts, zeros between digits count, but leading zeros are just placeholders. The reading 0.00450 has three significant figures (4, 5, and the trailing 0), because the leading zeros only position the decimal point.

Chemistry students, lab technicians, and engineers live by these rules, since reporting more digits than your instrument measured is a quiet form of fiction. This tool rounds any value to the precision you choose: type the measurement in the Number box and the digit count in the Significant Figures box, then read the Rounded Result and the Order of Magnitude outputs. Entering 152.347 with 3 significant figures returns 152, and the magnitude output (2, meaning × 10²) confirms the number's scale at a glance.`,
    howToSteps: [
      "Type your measurement in the Number box — for example, 152.347 from a kitchen scale.",
      "Type how many significant digits to keep in the Significant Figures box — for example, 3.",
      "Read the Rounded Result output: 152, the value trimmed to meaningful precision.",
      "Check the Order of Magnitude output to confirm the scale — 2 means the number sits in the hundreds.",
      "For 0.00450 with 3 figures, expect 0.00450 — the trailing zero is significant and survives.",
      "Never report more digits than your least precise measurement; the extra digits are noise, not information.",
    ],
    faqs: [
      { q: "Which zeros count as significant in plain words?", a: "Zeros between non-zero digits count (101 has three), and trailing zeros after a decimal count (4.50 has three). Leading zeros never count — they only place the decimal point." },
      { q: "When do significant figures matter?", a: "Lab reports, engineering specs, and any calculation where the answer cannot be more precise than the roughest measurement that fed it." },
      { q: "How do significant figures work in multiplication?", a: "The answer keeps as many significant figures as the least-precise input: 12.5 × 3.2 = 40 (two figures), not 40.00." },
      { q: "What is the order of magnitude?", a: "The power of ten nearest the number's scale — 152 has magnitude 2 (× 10²). It is a quick sanity check that your decimal point is in the right place." },
      { q: "People also search 'sig figs calculator' — is that this?", a: "Yes, 'sig figs' is the standard abbreviation for significant figures, and this page rounds to any count you set." },
    ],
  },

  "simple-harmonic-calculator": {
    description: `A playground swing, a guitar string, and the shock absorber on your car all obey the same rhythm: simple harmonic motion, where a restoring force pulls the system back toward center and it overshoots, again and again. The heartbeat of that motion is the angular frequency — how many radians of oscillation happen each second — and it equals two pi times the ordinary frequency (ω = 2πf). A swing completing one back-and-forth trip every 2 seconds has a frequency of 0.5 Hz and an angular frequency of about 3.14 radians per second.

Piano tuners, seismologists, and mechanical engineers all convert between these two views of the same oscillation. This calculator performs the conversion's multiplication: type 2π (about 6.2832) in the Variable A box and the frequency in hertz in the Variable B box, and the Result box shows the angular frequency. A 440 Hz guitar A-string gives 6.2832 × 440 ≈ 2,764.6 rad/s — the number that drops straight into the sine function describing the string's motion.`,
    howToSteps: [
      "Type 6.2832 (two pi) in the Variable A box.",
      "Type your oscillation frequency in hertz in the Variable B box — for example, 440 for a guitar A-string.",
      "Read the Result box: 6.2832 × 440 ≈ 2764.6, the angular frequency in radians per second.",
      "Plug the Result into x = A·sin(ωt) to describe the motion at any time t.",
      "For a playground swing at 0.5 Hz, enter 0.5 in Variable B to get about 3.14 rad/s.",
      "Remember hertz counts full cycles per second while the Result counts radians — 2π radians make one cycle.",
    ],
    faqs: [
      { q: "What is angular frequency in plain words?", a: "How many radians of oscillation occur per second: ω = 2πf. The calculator multiplies 2π by your hertz value to produce it." },
      { q: "When would I use simple harmonic motion math?", a: "Tuning instruments, designing shock absorbers and springs, analyzing earthquake waves, and modeling anything that swings, bounces, or vibrates." },
      { q: "What is the period of an oscillation?", a: "The seconds per full cycle — the reciprocal of frequency. A 0.5 Hz swing has a 2-second period." },
      { q: "How does a stiffer spring change the motion?", a: "It raises the frequency: f = (1/2π)√(k/m). Stiffer spring (bigger k) or lighter mass (smaller m) means faster oscillation." },
      { q: "What is the most common harmonic motion mistake?", a: "Plugging hertz directly into sin(ωt) instead of the angular frequency — the sine function expects radians, so the 2π factor is mandatory." },
    ],
  },

  "simplify-fractions-calculator": {
    description: `A recipe calling for 8/12 cup of sugar is really asking for 2/3 cup — same amount, far easier to measure. Simplifying a fraction means dividing the top and bottom by their greatest common divisor, the largest number that divides both evenly. For 8/12, that divisor is 4: 8 ÷ 4 = 2 and 12 ÷ 4 = 3, leaving the tidy 2/3. The value never changes, only the packaging — which is why carpenters, bakers, and students all reduce before they compute.

This calculator verifies each reduction step. Divide on paper first — 8 ÷ 4 = 2 — then type the reduced numerator in the Variable A box and the divisor in the Variable B box; the Result box should return the original numerator (2 × 4 = 8), confirming the division was exact. Repeat the check for the denominator (3 × 4 = 12), and the fraction stands simplified at 2/3. A woodworker reducing a 16/64-inch measurement divides by 16 to land on the familiar 1/4 inch, then verifies: 1 × 16 = 16.`,
    howToSteps: [
      "Find the greatest common divisor of your numerator and denominator — for 8/12 it is 4.",
      "Divide the numerator by that divisor on paper: 8 ÷ 4 = 2, the reduced top number.",
      "Verify with the calculator: type 2 in the Variable A box and 4 in the Variable B box.",
      "Read the Result box: 2 × 4 = 8 — matching the original numerator confirms your reduction.",
      "Repeat the check for the denominator: 3 in Variable A and 4 in Variable B should give 12.",
      "Write the simplified fraction from your verified numbers: 2/3.",
    ],
    faqs: [
      { q: "How do I simplify a fraction in plain words?", a: "Divide the top and bottom by their greatest common divisor. For 8/12, divide both by 4 to get 2/3. The calculator verifies each step: 2 × 4 should return 8." },
      { q: "What is the greatest common divisor?", a: "The largest whole number dividing both parts evenly. For 8 and 12 it is 4; for 15 and 25 it is 5." },
      { q: "When would I simplify fractions?", a: "Adjusting recipes, reading tape measures, reducing ratios in sports stats, and cleaning up answers in math class." },
      { q: "Does simplifying change the value?", a: "Never. 8/12 and 2/3 are the same amount — simplifying only makes the numbers smaller and easier to work with." },
      { q: "What if the numerator and denominator share no divisor?", a: "Then the fraction is already in lowest terms — 3/7, for example, cannot be reduced." },
    ],
  },
});

Object.assign(BATCH_12, {
  "simplifying-radicals-calculator": {
    description: `The diagonal of a 1-foot square is √2 feet — about 1.414 — but √8 has a cleaner secret hiding inside it. Simplifying a radical means pulling out perfect squares: factor the number under the root, extract the square root of each perfect-square factor, and leave the rest behind. Since √8 = √(4 × 2) = √4 × √2 = 2√2, the messy decimal 2.828 becomes the exact, compact 2√2. Geometry students meet this every time a 45-45-90 triangle appears, because its hypotenuse is always leg × √2.

The key move is choosing the right factorization, and this calculator checks your split. Type the perfect-square factor in the Variable A box and the leftover factor in the Variable B box — the Result box multiplies them back together so you can confirm the product equals your original radicand. For √50, entering 25 and 2 gives 50 in the Result, verifying the split; √25 = 5 pulls out front, leaving the simplified 5√2. A contractor laying out a square patio uses the same check before trusting a diagonal measurement.`,
    howToSteps: [
      "Factor your radicand into a perfect square times a leftover — for √50, that is 25 × 2.",
      "Type the perfect-square factor in the Variable A box — for example, 25.",
      "Type the leftover factor in the Variable B box — for example, 2.",
      "Read the Result box: 25 × 2 = 50, confirming your factorization matches the original number.",
      "Take the square root of the perfect-square factor (√25 = 5) and write it in front: 5√2.",
      "Pick the largest perfect square that divides evenly — using 25 instead of smaller squares keeps the radical fully simplified.",
    ],
    faqs: [
      { q: "How do I simplify a radical in plain words?", a: "Split the number under the root into a perfect square times a remainder, take the square root of the perfect square, and move it outside. √50 = √(25 × 2) = 5√2. The calculator verifies your split multiplies back correctly." },
      { q: "When are simplified radicals used?", a: "Geometry with 45-45-90 and 30-60-90 triangles, diagonal measurements in construction, and exact answers in algebra where decimals would lose precision." },
      { q: "Why not just use the decimal?", a: "Decimals like 7.071 are approximations; 5√2 is exact. Keeping the radical form avoids rounding error stacking up through later steps." },
      { q: "Can every radical be simplified?", a: "No — √7 or √13 have no perfect-square factors, so they are already in simplest form. Only radicands divisible by 4, 9, 16, 25, and so on can shrink." },
      { q: "What is the most common simplifying mistake?", a: "Pulling out a perfect square that is not the largest one — splitting √72 as √(4 × 18) = 2√18 stops early, while √(36 × 2) = 6√2 finishes the job." },
    ],
  },

  "sinusoidal-function-calculator": {
    description: `Ocean tides rise and fall on a sine wave — high water, low water, and back again, roughly every 12 hours and 25 minutes. A sinusoidal function captures any such rhythm with four numbers: y = A·sin(Bx + C) + D, where A is the amplitude (how far it swings), B sets how fast it repeats, C shifts it left or right, and D lifts the whole wave up or down. A tide swinging 3 feet above and below a mean level of 5 feet is y = 3·sin(Bx + C) + 5, and every harbor schedule on the US coast is a dressed-up version of that equation.

The wave's height at any moment comes from multiplying the amplitude by the sine of the angle inside. This calculator performs that multiplication: type the amplitude A in the Variable A box and the sine value in the Variable B box, and the Result box gives the displacement from the midline. For a 3-foot tide amplitude with sin(θ) = 0.5 at some hour, entering 3 and 0.5 returns 1.5 — the water sits 1.5 feet above midline, or 6.5 feet absolute. Add D and you have the reading the tide gauge shows.`,
    howToSteps: [
      "Identify your wave's amplitude A — for example, 3 for a tide swinging 3 feet each way.",
      "Compute the sine of the angle (Bx + C) for your time x — for example, 0.5.",
      "Type the amplitude in the Variable A box and the sine value in the Variable B box.",
      "Read the Result box: 3 × 0.5 = 1.5, the displacement above or below the midline.",
      "Add the vertical shift D to the Result for the absolute value — 1.5 + 5 = 6.5 feet of water.",
      "A negative sine value means the wave is below midline — subtract instead of adding.",
    ],
    faqs: [
      { q: "What does each letter in a sine function mean in plain words?", a: "In y = A·sin(Bx + C) + D: A is the amplitude (swing size), B controls how fast it repeats, C shifts it sideways, and D moves the midline up or down. The calculator multiplies A by the sine value." },
      { q: "How do I find the period of a sine wave?", a: "Divide 2π by B: period = 2π/B. A larger B means more waves packed into the same stretch — a faster oscillation." },
      { q: "When are sinusoidal functions used?", a: "Tide tables, AC electricity (60 Hz in the US), sound waves, seasonal temperature models, and anything that repeats smoothly." },
      { q: "What is the difference between sine and cosine here?", a: "Only the starting phase — cosine is a sine wave shifted by a quarter period. Either one models the same rhythms with a different C value." },
      { q: "People also search 'sine wave calculator' — is that this?", a: "Yes. A sine wave is the graph of a sinusoidal function, and this page computes its height at any point." },
    ],
  },

  "slant-height-of-cone-calculator": {
    description: `A traffic cone's slanted side — the part your eye follows from the tip down to the base — is longer than the cone is tall, and geometry knows exactly how much longer. The slant height s forms a right triangle with the radius r and the vertical height h, so the Pythagorean theorem gives s = √(r² + h²). A cone 12 inches tall with a 5-inch base radius has a slant height of √(25 + 144) = √169 = 13 inches — the same 5-12-13 triple that makes the arithmetic land cleanly.

Party-hat makers, sheet-metal workers cutting conical funnels, and anyone computing a cone's lateral surface area (π × r × s) need that slant height first. This calculator produces the squared terms the formula needs: type the radius in both the Variable A and Variable B boxes and the Result shows r² — 5 twice gives 25. Repeat for the height (12 twice gives 144), add the two Results, and take the square root for s.`,
    howToSteps: [
      "Type the cone's base radius in both the Variable A box and the Variable B box — for example, 5 twice.",
      "Read the Result box: 5 × 5 = 25, the radius squared.",
      "Type the vertical height in both boxes — for example, 12 twice — to get 144 in the Result.",
      "Add the two Results (25 + 144 = 169) and take the square root: 13 inches of slant height.",
      "Use the slant height for lateral area next: multiply π × radius × slant height.",
      "Measure radius and height in the same units, and use the vertical height — not a slanted measurement.",
    ],
    faqs: [
      { q: "What is the slant height formula in plain words?", a: "Take the square root of (radius squared plus height squared): s = √(r² + h²). The calculator gives you each squared term; add them and take the root." },
      { q: "Is slant height the same as the cone's height?", a: "No. The height runs straight down the center; the slant height runs diagonally along the surface and is always longer." },
      { q: "When would I need the slant height?", a: "Cutting fabric for party hats or lampshades, computing a cone's lateral surface area, and sizing sheet-metal funnels or hoppers." },
      { q: "How does slant height relate to surface area?", a: "The lateral (side) area is π × r × s. Add the base area πr² for the total surface of a closed cone." },
      { q: "What is the most common slant height mistake?", a: "Using the diameter instead of the radius — the triangle uses the radius, so halve the diameter first or the answer comes out too long." },
    ],
  },

  "slope-calculator": {
    description: `The Americans with Disabilities Act requires wheelchair ramps to rise no more than 1 inch for every 12 inches of length — a slope of 1/12, about 4.8 degrees. Slope is simply rise over run: the vertical change divided by the horizontal change between two points (m = (y₂ − y₁) / (x₂ − x₁)). Positive slope climbs left to right, negative slope falls, zero slope is flat, and an undefined slope is a vertical wall. Roofers quote pitch as slope (a 6/12 roof rises 6 inches per foot), and highway engineers post grade percentages that are slopes × 100.

This calculator takes two points and returns the full picture. Type the coordinates into the Point 1 — X₁, Point 1 — Y₁, Point 2 — X₂, and Point 2 — Y₂ boxes, then read the Slope (m), Y-Intercept (b), Distance Between Points, and Angle (degrees) outputs. A ramp running from (0, 0) to (12, 1) shows slope 0.0833, intercept 0, distance about 12.04, and angle 4.76° — the numbers an inspector checks before signing off.`,
    howToSteps: [
      "Type the first point's coordinates in the Point 1 — X₁ and Point 1 — Y₁ boxes — for example, 0 and 0.",
      "Type the second point's coordinates in the Point 2 — X₂ and Point 2 — Y₂ boxes — for example, 12 and 1.",
      "Read the Slope (m) output: 0.0833, the rise over run.",
      "Read the Y-Intercept (b) output to see where the line crosses the y-axis.",
      "Check the Distance Between Points and Angle (degrees) outputs for the full geometric picture.",
      "If both x-values match, the slope is undefined — a vertical line, which the formula flags by dividing by zero.",
    ],
    faqs: [
      { q: "What is the slope formula in plain words?", a: "Subtract the y-values, subtract the x-values, and divide: m = (y₂ − y₁) / (x₂ − x₁). Rise over run." },
      { q: "What does a negative slope mean?", a: "The line falls as you move right — like a downhill road or a declining stock price over time." },
      { q: "When is slope used in real life?", a: "Wheelchair ramp codes, roof pitch, highway grades, ski slope ratings, and trend lines in business charts." },
      { q: "How do I convert slope to degrees?", a: "Take the arctangent of the slope: angle = atan(m). The calculator's Angle output does this for you — a 1/12 ramp is about 4.76°." },
      { q: "People also search 'gradient calculator' — is that this?", a: "Yes. Gradient is the term used in the UK and in calculus for exactly what Americans call slope." },
    ],
  },

  "spring-calculator": {
    description: `A garage door that suddenly feels twice as heavy usually has a broken torsion spring — and the physics behind the fix is Hooke's law, one of the simplest formulas in science. The force a spring exerts equals its stiffness times how far it is stretched or compressed: F = k × x. A spring rated at 50 pounds per inch stretched 4 inches pulls back with 200 pounds of force. That linear relationship holds from screen-door springs to car suspensions, right up to the point where the metal permanently deforms.

Homeowners replacing garage springs, engineers sizing suspension coils, and archers choosing bow limbs all multiply stiffness by displacement. This calculator does exactly that: type the spring constant k in the Variable A box and the stretch or compression distance in the Variable B box, and the Result box shows the force. A 30 lb/in screen-door spring pulled 2 inches gives 60 pounds in the Result — the tension the hinge screws must hold.`,
    howToSteps: [
      "Find your spring's stiffness k (force per unit distance) and type it in the Variable A box — for example, 50 for 50 lb/in.",
      "Type the stretch or compression distance in the Variable B box — for example, 4 for 4 inches.",
      "Read the Result box: 50 × 4 = 200 pounds of spring force.",
      "Double the displacement in Variable B to confirm the force doubles too — Hooke's law is linear.",
      "Keep the units consistent: lb/in with inches gives pounds; N/m with meters gives newtons.",
      "Stay within the spring's rated travel — overstretching breaks the linear relationship and the spring.",
    ],
    faqs: [
      { q: "What is Hooke's law in plain words?", a: "Spring force equals stiffness times displacement: F = k × x. Twice the stretch means twice the force, in the opposite direction of the stretch." },
      { q: "When would I calculate spring force?", a: "Replacing garage door springs, choosing mattress or trampoline springs, sizing car suspension coils, and calibrating weighing scales." },
      { q: "What are the units of the spring constant?", a: "Force per distance — pounds per inch in the US, newtons per meter in metric. A bigger k means a stiffer spring." },
      { q: "Why does my garage door feel heavy suddenly?", a: "A broken torsion spring stops counterbalancing the door's weight, so you feel the full 150-plus pounds instead of the usual easy lift." },
      { q: "What is the most common spring calculation mistake?", a: "Mixing unit systems — pairing a k in lb/in with a displacement in centimeters silently corrupts the force." },
    ],
  },

  "square-root-calculator": {
    description: `A square backyard covering 900 square feet has sides of exactly 30 feet — because the square root undoes squaring. The square root of a number is the value that, multiplied by itself, returns the original: √900 = 30, since 30 × 30 = 900. Gardeners converting area to fence length, tilers figuring how many 12-inch squares span a room, and photographers computing f-stops all lean on roots. The symbol √ is really a question: 'what times itself gives this?'

This tool answers that question three ways. Type the number in the Number (x) box and read the Square Root (√x) output, the Rounded (6 decimal places) output for a tidy decimal, and the x² (verification) output that multiplies the root by itself to prove the answer. Entering 2 shows √2 ≈ 1.414214, rounded to 1.414214, with verification returning 2 — the round trip that confirms the math closed the loop.`,
    howToSteps: [
      "Type the number you want the root of in the Number (x) box — for example, 900 for a backyard's area.",
      "Read the Square Root (√x) output: 30, the side length of the square.",
      "Use the Rounded (6 decimal places) output when you need a clean decimal like 1.414214 for √2.",
      "Check the x² (verification) output — it should return your original number, proving the root is correct.",
      "For area-to-side problems, remember the input is the area and the output is the side length.",
      "Roots of negative numbers are not real — the calculator expects zero or positive inputs.",
    ],
    faqs: [
      { q: "What is a square root in plain words?", a: "The number that multiplies by itself to give the original: √900 = 30 because 30 × 30 = 900. It undoes squaring." },
      { q: "When would I need a square root?", a: "Converting a square area to its side length, computing diagonal distances, sizing tiles or fence runs, and the Pythagorean theorem." },
      { q: "What is the square root of 2?", a: "About 1.414214 — an irrational number whose decimals never repeat. It is the diagonal of a 1×1 square." },
      { q: "Why do square roots come in pairs?", a: "Because both 30 × 30 and (−30) × (−30) equal 900. The √ symbol denotes the positive (principal) root." },
      { q: "People also search 'sqrt calculator' — is that this?", a: "Yes. 'sqrt' is the standard abbreviation programmers and mathematicians use for square root." },
    ],
  },

  "square-calculator": {
    description: `Squaring a number — multiplying it by itself — is the engine behind every area calculation on earth. A 12-foot by 12-foot bedroom is 12² = 144 square feet of flooring to buy; a pizza's price-per-square-inch argument rests on radius²; and the x² term dominates every quadratic equation. The square grows fast: 10² is 100, 20² is 400, and that quadratic growth is why doubling a room's side quadruples its area.

This tool computes the three powers people reach for most. Type any value in the Number (x) box and read the x² (Square) output, the √x (Square Root) output, and the x³ (Cube) output together. Entering 12 shows 144, about 3.464, and 1728 in one glance — the area of the bedroom floor, the side of a square with area 12, and the volume of a 12-inch cube, all from a single input.`,
    howToSteps: [
      "Type your number in the Number (x) box — for example, 12 for a 12-foot room side.",
      "Read the x² (Square) output: 144, the floor area in square feet.",
      "Read the √x (Square Root) output: about 3.464, useful for reversing an area.",
      "Read the x³ (Cube) output: 1728, the volume if the shape were a cube.",
      "Compare two room sizes by running each side length through — 12 vs. 15 shows 144 vs. 225 square feet.",
      "Remember squaring erases the sign: (−5)² = 25, the same as 5².",
    ],
    faqs: [
      { q: "What does squaring a number mean in plain words?", a: "Multiply the number by itself: 12² = 12 × 12 = 144. Geometrically, it is the area of a square with that side length." },
      { q: "When is squaring used?", a: "Room areas, the Pythagorean theorem, quadratic equations, circle areas (r²), and anywhere a quantity depends on a length twice over." },
      { q: "What is the difference between x² and 2x?", a: "x² multiplies x by itself (12² = 144); 2x doubles x (2 × 12 = 24). Confusing them is one of algebra's classic slips." },
      { q: "Why does doubling the side quadruple the area?", a: "Because (2x)² = 4x² — the 2 gets squared along with everything else. Area scales with the square of length." },
      { q: "People also search 'x squared calculator' — is that this?", a: "Yes. 'x squared' is how most people say x² aloud, and the x² output here computes it." },
    ],
  },

  "surface-area-cube": {
    description: `Wrapping a gift box means covering six identical square faces — and the paper you need is the cube's surface area: 6 times the side squared (SA = 6a²). A 10-inch gift box needs 6 × 100 = 600 square inches of paper, which is why one standard roll covers only a few large presents. The formula's six comes from the geometry itself: top, bottom, and four sides, each an a-by-a square with nothing hidden.

Painters estimating coverage for cubic planters, shippers calculating cardboard for box orders, and bakers sizing fondant for cube cakes all use the same rule. This calculator needs just one input: type the edge length in the Side Length (a) box, then read the Surface Area output for the wrapping job and the Volume output (a³) as a bonus. A 6-inch cube shows 216 square inches of surface and 216 cubic inches of volume — the charming coincidence where the two numbers match at a = 6.`,
    howToSteps: [
      "Measure one edge of your cube and type it in the Side Length (a) box — for example, 10 for a 10-inch gift box.",
      "Read the Surface Area output: 600 square inches of wrapping paper needed.",
      "Read the Volume output: 1000 cubic inches of space inside the box.",
      "Add 10–15% extra paper in your head for overlaps and folds — the calculator gives the exact minimum.",
      "For painting, divide the Surface Area by your paint's coverage (often 350 sq ft per gallon) to size the can.",
      "Use the same unit for the edge that you want in the answer — inches in gives square inches out.",
    ],
    faqs: [
      { q: "What is the surface area of a cube in plain words?", a: "Six times the side squared: SA = 6a². A cube has six identical square faces, so you find one face's area and multiply by six." },
      { q: "When would I compute a cube's surface area?", a: "Gift wrapping, painting boxes or planters, estimating cardboard for packaging, and heat-loss calculations for cubic tanks." },
      { q: "Why do surface area and volume match at side 6?", a: "Because 6a² = a³ solves to a = 6. It is a numerical coincidence, not a deep truth — the units (square vs. cubic) still differ." },
      { q: "How much extra wrapping paper should I buy?", a: "Add 10–15% over the exact surface area for folds, overlaps, and ribbon. For the 10-inch box, buy about 690 square inches." },
      { q: "Does the formula work for rectangular boxes?", a: "No — that needs 2(lw + lh + wh) since the faces differ. This page is for true cubes with all edges equal." },
    ],
  },
});

Object.assign(BATCH_12, {
  "surface-area-cylinder": {
    description: `The paper label on a soup can is a rectangle in disguise — peel it off and it unrolls into a sheet whose width is the can's circumference. That insight gives the cylinder's lateral area: 2π times radius times height. Add the two circular lids (2πr²) and you have the total surface area: SA = 2πrh + 2πr². A standard 3-inch-diameter, 4.5-inch-tall soup can has about 42.4 square inches of label and 56.5 square inches total — numbers the food industry uses to price every label it prints.

Painters coating water heaters, manufacturers ordering label stock, and plumbers sizing insulation for pipes all run this formula. Type the Radius (r) and Height (h) into their boxes, then read the Total Surface Area, Lateral Surface Area, and Volume outputs together. A 2-foot-radius, 4-foot-tall water heater shows about 75.4 square feet total — the coverage number that decides whether one gallon of paint suffices.`,
    howToSteps: [
      "Measure the radius (half the diameter) and type it in the Radius (r) box — for example, 1.5 for a 3-inch soup can.",
      "Type the height in the Height (h) box — for example, 4.5 inches.",
      "Read the Lateral Surface Area output: about 42.4 square inches — the label size.",
      "Read the Total Surface Area output: about 56.5 square inches including both lids.",
      "Check the Volume output when you also need capacity — about 31.8 cubic inches for the soup can.",
      "Halve the diameter before entering — typing the full diameter as the radius quadruples the area.",
    ],
    faqs: [
      { q: "What is the cylinder surface area formula in plain words?", a: "Lateral area is 2π × radius × height (the unrolled label); add 2π × radius² for the two circular ends. Total: SA = 2πrh + 2πr²." },
      { q: "When is cylinder surface area used?", a: "Ordering can labels, painting tanks and water heaters, insulating pipes, and computing material for cylindrical packaging." },
      { q: "What is lateral surface area?", a: "The curved side only, without the top and bottom — exactly the area a label or a coat of paint on the side covers." },
      { q: "How do I find the radius from the diameter?", a: "Divide by 2. A 3-inch-diameter can has a 1.5-inch radius — the most common input mistake is skipping this step." },
      { q: "People also search 'surface area of a can calculator' — is that this?", a: "Yes. A can is a cylinder, and the Total Surface Area output here is its full outside area." },
    ],
  },

  "surface-area-sphere": {
    description: `Archimedes was so proud of discovering the sphere's surface area that he asked for it on his tombstone: a sphere's surface equals four times the area of its great circle (SA = 4πr²). A basketball with a 4.8-inch radius has about 289 square inches of leather to paint, pebble, or replace — and remarkably, that is exactly the lateral area of the smallest cylinder the ball fits inside, the cylinder-and-sphere carving on Archimedes' grave. The formula's elegance hides real utility: double the radius and the surface quadruples.

Ball manufacturers, painters coating spherical tanks, and anyone estimating the peel on an orange use it. Type the Radius (r) in its box and read the Surface Area output — plus the Volume output ((4/3)πr³) for the ball's capacity. A 6-inch-radius playground ball shows about 452 square inches of surface and 905 cubic inches of air inside, the two numbers a manufacturer needs for material and inflation specs.`,
    howToSteps: [
      "Measure the radius and type it in the Radius (r) box — for example, 4.8 for a basketball.",
      "Read the Surface Area output: about 289 square inches of ball surface.",
      "Read the Volume output: about 463 cubic inches of air inside.",
      "For painting, divide the Surface Area by the paint coverage per coat to find how much paint to buy.",
      "Compare ball sizes by running each radius through — a small radius change moves the area a lot.",
      "Use radius, not diameter or circumference — each needs converting first (halve the diameter; divide circumference by 2π).",
    ],
    faqs: [
      { q: "What is the sphere surface area formula in plain words?", a: "Four times π times the radius squared: SA = 4πr². It is also the lateral area of the tightest cylinder the sphere fits in." },
      { q: "When would I compute a sphere's surface area?", a: "Painting balls or spherical tanks, manufacturing sports equipment, estimating material for domes, and computing heat loss from round vessels." },
      { q: "Why does doubling the radius quadruple the area?", a: "The radius is squared in 4πr², so (2r)² = 4r² — every length-doubling multiplies area by four. Volume, with r³, multiplies by eight." },
      { q: "How is surface area different from volume?", a: "Surface area (square units) measures the skin — paint needed. Volume (cubic units) measures the contents — air or liquid inside." },
      { q: "What did Archimedes prove about spheres?", a: "That a sphere's surface is 4πr² and its volume is (4/3)πr³ — exactly two-thirds the surface and volume of its enclosing cylinder." },
    ],
  },

  "surface-tension-calculator": {
    description: `A water strider walks on ponds without sinking because water's surface behaves like a stretched skin — and surface tension measures exactly how strong that skin is. It is defined as force per unit length: the pull the surface exerts along every inch of contact line (γ = F / L). For water at room temperature that is about 0.073 newtons per meter, enough to float a steel needle laid gently on top but far too weak to hold a fingertip. Soap destroys it, which is why soapy water soaks into fabric that pure water beads up on.

Biologists studying insects, engineers designing inkjet printers, and formulators tuning detergents all quantify this pull. Since tension is force divided by length, you can compute it as force times the reciprocal of the length. Type the measured force in the Variable A box and one divided by the contact length in the Variable B box — for example, 0.073 N and 1 per meter of needle — and the Result box shows the surface tension. A longer contact line with the same force reads lower, exactly as the definition demands.`,
    howToSteps: [
      "Measure the force pulling along the surface line and type it in the Variable A box — for example, 0.073 for newtons.",
      "Compute one divided by the contact length and type it in the Variable B box — for example, 1 for a 1-meter line.",
      "Read the Result box: 0.073 × 1 = 0.073 N/m, water's surface tension at room temperature.",
      "For a 2-meter contact line, enter 0.5 in Variable B — the same force spread over more length.",
      "Compare liquids by running each pair through: soapy water reads far lower than pure water.",
      "Keep force and length in consistent units — newtons with meters, or dynes with centimeters.",
    ],
    faqs: [
      { q: "What is surface tension in plain words?", a: "Force per unit length along a liquid's surface: γ = F / L. It measures how strongly the surface skin pulls — water's is about 0.073 N/m." },
      { q: "Why can insects walk on water?", a: "Their weight is spread over long, waxy legs, so the force per unit length stays below what water's surface skin can support." },
      { q: "Why does soap break surface tension?", a: "Soap molecules wedge between water molecules at the surface, weakening their attraction — which is why soapy water spreads and soaks instead of beading." },
      { q: "When is surface tension calculated?", a: "Designing inkjet nozzles, formulating detergents and coatings, studying insect locomotion, and controlling droplet sizes in sprays." },
      { q: "What are the units of surface tension?", a: "Force per length: newtons per meter (N/m) or dynes per centimeter — 1 N/m equals 1000 dynes/cm." },
    ],
  },

  "synthetic-division-calculator": {
    description: `Dividing a polynomial by (x − 3) the long way fills half a page — synthetic division does it in one compact row of arithmetic. The shortcut works because dividing by a linear factor (x − c) only needs the coefficients and the root c: bring down, multiply, add, repeat. Checking whether x = 2 is a root of x³ − 6x² + 11x − 6, for instance, collapses to a quick cascade that ends in remainder 0 — confirming (x − 2) is a factor and the polynomial equals (x − 2)(x² − 4x + 3).

Algebra students hunting polynomial roots and engineers factoring characteristic equations use it constantly. At its core, each cascade step divides and multiplies running values, and this tool handles the division step: type the running dividend value in the Dividend (Numerator) box and the divisor in the Divisor (Denominator) box, and the Quotient output shows the result. Dividing the leading coefficient 1 by the (x − c) divisor 1 returns 1 — the first coefficient of the quotient row — and each subsequent step follows the same bring-down, multiply, and add rhythm.`,
    howToSteps: [
      "Write your polynomial's coefficients in order, including zeros for missing powers — x³ − 6x² + 11x − 6 gives 1, −6, 11, −6.",
      "Identify c from your divisor (x − c) — for (x − 2), c is 2.",
      "Bring down the leading coefficient; to verify a division step, type the running value in the Dividend (Numerator) box and the divisor in the Divisor (Denominator) box.",
      "Read the Quotient output, multiply it by c on paper, and add the product to the next coefficient.",
      "Repeat across the row — the final value is the remainder; zero means (x − c) is a factor.",
      "Watch the signs: dividing by (x + 3) means c = −3, the most common synthetic division error.",
    ],
    faqs: [
      { q: "What is synthetic division in plain words?", a: "A shortcut for dividing a polynomial by (x − c) using only the coefficients: bring down, multiply by c, add to the next coefficient, repeat. The last number is the remainder." },
      { q: "When can I use synthetic division?", a: "Only when the divisor is linear — (x − c) form. For anything else, like (x² + 1), use polynomial long division instead." },
      { q: "What does a zero remainder mean?", a: "That (x − c) is a factor and c is a root of the polynomial — the whole point of the exercise in most homework problems." },
      { q: "Why include zeros for missing powers?", a: "Because every power needs its column. Skipping the 0x² term in x³ + 5x shifts every coefficient and wrecks the cascade." },
      { q: "People also search 'synthetic devision calculator' — is that this?", a: "Yes, that misspelling points here — the shortcut division method for polynomials." },
    ],
  },

  "systems-of-equations-calculator": {
    description: `Two concert ticket types — $40 adult and $25 student — sell 300 tickets for $9,750 total. How many of each? That is a system of two equations in two unknowns: a + s = 300 and 40a + 25s = 9750. The workhorse solution is Cramer's rule, which builds each answer from products of coefficients: the determinant D = a₁b₂ − a₂b₁ sits underneath, and each variable's numerator is a similar product difference. For the tickets, D = (1)(25) − (1)(40) = −15, and the products unwind to 150 adult and 150 student tickets.

Economists balancing supply and demand, chemists mixing solutions, and electricians solving circuit networks all run 2×2 systems. Each product inside Cramer's rule — a₁ × b₂, c₁ × b₂, and the rest — is a plain multiplication this calculator performs: type the first coefficient in the Variable A box and the second in the Variable B box, and the Result box delivers the term. Compute all four products, assemble the differences, and divide for x and y.`,
    howToSteps: [
      "Write your system in standard form: a₁x + b₁y = c₁ and a₂x + b₂y = c₂.",
      "Type a₁ in the Variable A box and b₂ in the Variable B box — for the tickets, 1 and 25.",
      "Read the Result box: 1 × 25 = 25, the first product of the determinant.",
      "Compute a₂ × b₁ the same way (1 × 40 = 40) and subtract: D = 25 − 40 = −15.",
      "Build each variable's numerator from similar products: x = (c₁b₂ − c₂b₁)/D.",
      "Divide each numerator by D — then plug both answers back into the original equations to verify.",
    ],
    faqs: [
      { q: "What is Cramer's rule in plain words?", a: "Solve a 2×2 system with determinants: x = (c₁b₂ − c₂b₁)/(a₁b₂ − a₂b₁) and y = (a₁c₂ − a₂c₁)/(a₁b₂ − a₂b₁). Each piece is a product difference the calculator can multiply." },
      { q: "When are systems of equations used?", a: "Ticket and mixture problems, supply-demand equilibrium, circuit analysis with two loops, and any situation with two unknowns and two independent facts." },
      { q: "What if the determinant is zero?", a: "Then Cramer's rule fails: the lines are parallel (no solution) or identical (infinitely many solutions). Check whether the equations are multiples of each other." },
      { q: "Is substitution easier than Cramer's rule?", a: "For simple integers, often yes. Cramer's rule shines when coefficients are messy decimals where substitution gets tangled." },
      { q: "How do I verify my answer?", a: "Plug x and y back into both original equations. Both must balance — if either fails, recheck the product terms." },
    ],
  },

  "tangent-line-calculator": {
    description: `A GPS estimating your arrival time draws, in effect, a tangent line: it takes your current position and speed and projects straight ahead, ignoring the curves to come. In calculus, the tangent line to a curve at a point is the best straight-line approximation near that point, built from the function's value and its derivative: y = f(a) + f′(a)·(x − a). Near x = a the curve and the line are nearly indistinguishable — which is how calculators themselves approximate tricky functions internally.

Physics students linearize motion, economists approximate cost curves, and engineers estimate sensor readings with it. The heart of the formula is the product f′(a) × (x − a): the slope times how far you have moved from the touchpoint. Type the derivative value in the Variable A box and the distance (x − a) in the Variable B box, and the Result box gives that rise term. For f(x) = √x at a = 4, f′(4) = 0.25, so at x = 5 the rise is 0.25 × 1 = 0.25 — add f(4) = 2 and the tangent estimates √5 ≈ 2.25, close to the true 2.236.`,
    howToSteps: [
      "Evaluate your function at the touchpoint a to get f(a) — for √x at a = 4, that is 2.",
      "Find the derivative at a: type f′(a) in the Variable A box — for example, 0.25.",
      "Type how far x sits from a in the Variable B box — for example, 1 for x = 5.",
      "Read the Result box: 0.25 × 1 = 0.25, the line's rise from the touchpoint.",
      "Add f(a) to the Result for the approximation: 2 + 0.25 = 2.25 ≈ √5.",
      "Stay close to a — the farther x drifts from the touchpoint, the worse the straight line fits the curve.",
    ],
    faqs: [
      { q: "What is the tangent line formula in plain words?", a: "y = f(a) + f′(a)·(x − a): start at the function's value at a, then add the slope times your distance from a. The calculator multiplies slope × distance." },
      { q: "When is the tangent line approximation used?", a: "Estimating roots, linearizing physics models, GPS arrival projections, and quick mental estimates of complicated functions." },
      { q: "How is this different from the secant line?", a: "The tangent touches at one point and uses the instantaneous slope (derivative); the secant crosses at two points and gives an average slope." },
      { q: "Why do calculators use tangent lines?", a: "Methods like Newton-Raphson repeatedly draw tangent lines to hone in on roots — the line is easy to solve, and each iteration lands closer." },
      { q: "What is the biggest tangent line mistake?", a: "Using it far from the touchpoint. The approximation is local — at a distance, the curve bends away and the line lies." },
    ],
  },

  "tangent-calculator": {
    description: `Stand at the tip of a tree's shadow, measure the shadow's length, and the tree's height is one multiplication away — because tan(θ) = opposite / adjacent. The tangent of an angle in a right triangle is the ratio of the side across from the angle to the side beside it: a 100-foot shadow cast when the sun sits at 35° means the tree is 100 × tan(35°) ≈ 70 feet tall. Surveyors, navigators, and carpenters have estimated heights and distances this way for centuries, long before laser rangefinders.

Since tangent is opposite divided by adjacent, it equals the opposite side times the reciprocal of the adjacent side. To evaluate tan itself, type the opposite side in the Variable A box and one divided by the adjacent side in the Variable B box. With a 70-foot tree and 100-foot shadow, entering 70 and 0.01 gives 0.7 — tan(θ) = 0.7, so θ ≈ 35°. Roofers use the same ratio reading pitch directly off a rafter.`,
    howToSteps: [
      "Identify the side opposite your angle and the side adjacent to it (not the hypotenuse).",
      "Type the opposite side length in the Variable A box — for example, 70 for a 70-foot tree.",
      "Compute one divided by the adjacent side and type it in the Variable B box — for example, 0.01 for a 100-foot shadow.",
      "Read the Result box: 70 × 0.01 = 0.7, the tangent of the sun's angle.",
      "Take the arctangent of the Result for the angle itself: atan(0.7) ≈ 35°.",
      "Reverse it to find a height: multiply the adjacent side by a known tan value instead.",
    ],
    faqs: [
      { q: "What is tangent in plain words?", a: "In a right triangle, tan(θ) = opposite / adjacent — the ratio of the side across from the angle to the side next to it. The calculator multiplies opposite × (1/adjacent)." },
      { q: "When is tangent used?", a: "Estimating tree and building heights from shadows, reading roof pitch, navigation bearings, and converting slope to angle." },
      { q: "How do I get the angle from the tangent?", a: "Use the inverse tangent (arctan): θ = atan(opposite/adjacent). Most calculators have an atan or tan⁻¹ button." },
      { q: "What is tan(45°)?", a: "Exactly 1 — at 45° the opposite and adjacent sides are equal, so their ratio is 1." },
      { q: "People also search 'tan calculator' — is that this?", a: "Yes. 'Tan' is the standard abbreviation for tangent, and this page evaluates the opposite-over-adjacent ratio." },
    ],
  },

  "taylor-series-calculator": {
    description: `Your calculator has no button-shaped brain for sine — when you type sin(0.5), it adds up a Taylor series behind the scenes. A Taylor series rebuilds a function from its derivatives at a single point: f(x) = f(a) + f′(a)(x−a) + f′′(a)(x−a)²/2! + …, with each term's size set by the product of a derivative value and a power term, divided by a factorial. More terms mean a tighter fit — five terms nail sin(0.5) to six decimal places, which is why the chip stops there.

Engineers approximate eˣ, ln(1+x), and cos(x) in embedded systems too small for full math libraries, and physics students linearize pendulums with the first two terms. Each series term is a product at heart: type the derivative value fⁿ(a) in the Variable A box and the power term (x−a)ⁿ/n! in the Variable B box, and the Result box gives that term's contribution. For e⁰·¹'s second term, 1 × (0.01/2) = 0.005 — add the terms up and the approximation emerges.`,
    howToSteps: [
      "Pick your center a and compute the derivatives f(a), f′(a), f′′(a), … on paper.",
      "For each term, form the power piece (x−a)ⁿ/n! — for n=2 at x−a=0.1, that is 0.01/2 = 0.005.",
      "Type the derivative value in the Variable A box — for example, 1.",
      "Type the power piece in the Variable B box — for example, 0.005.",
      "Read the Result box: 1 × 0.005 = 0.005, the term's contribution to the sum.",
      "Add all terms together; include more terms when x sits far from a, where the series converges slowly.",
    ],
    faqs: [
      { q: "What is a Taylor series in plain words?", a: "A polynomial built from a function's derivatives at one point that mimics the function nearby: each term is fⁿ(a)·(x−a)ⁿ/n!. The calculator multiplies the derivative value by the power piece." },
      { q: "When are Taylor series used?", a: "Calculators evaluating trig and exponential functions, physics approximations like the small-angle pendulum, and numerical methods in engineering software." },
      { q: "What is the Maclaurin series?", a: "A Taylor series centered at a = 0 — the special case used for sin(x), cos(x), and eˣ in most textbooks." },
      { q: "How many terms do I need?", a: "It depends on distance from the center and the accuracy wanted. Near a, two or three terms often suffice; far away, you may need dozens." },
      { q: "Why does the factorial appear?", a: "It corrects for overcounting: differentiating xⁿ n times produces n!, so dividing by n! keeps each term at the right size." },
    ],
  },
});

Object.assign(BATCH_12, {
  "temperature-calculator": {
    description: `Every American oven dial speaks Fahrenheit while every science textbook speaks Celsius, so 350°F on the recipe and 175°C on the European conversion chart are the same heat arguing in two languages. The translation is: Celsius = (Fahrenheit − 32) × 5/9. Subtract 32 to align the freezing points, then scale by 5/9 because a Celsius degree is bigger than a Fahrenheit degree. A 72°F living room becomes (72 − 32) × 5/9 = 22.2°C, and a 98.6°F body is 37°C on the nose.

Travelers reading foreign weather, cooks following international recipes, and parents interpreting a thermometer with both scales all convert constantly. This calculator performs the scaling step: type (Fahrenheit − 32) in the Variable A box and 5/9 (about 0.5556) in the Variable B box, and the Result box shows the Celsius temperature. For that 72°F room, entering 40 and 0.5556 returns 22.2 — sweater weather in any language.`,
    howToSteps: [
      "Subtract 32 from your Fahrenheit temperature on paper — for 72°F, that is 40.",
      "Type that result in the Variable A box — for example, 40.",
      "Type 0.5556 (which is 5/9) in the Variable B box.",
      "Read the Result box: 40 × 0.5556 ≈ 22.2°C.",
      "Going the other direction? Multiply Celsius by 1.8 in the boxes, then add 32 to the Result.",
      "Sanity-check with anchors: 32°F → 0°C, 212°F → 100°C, and −40° is the same in both.",
    ],
    faqs: [
      { q: "What is the Fahrenheit to Celsius formula in plain words?", a: "Subtract 32, then multiply by 5/9: C = (F − 32) × 5/9. The calculator does the multiply-by-5/9 step." },
      { q: "What is 350°F in Celsius?", a: "About 177°C — (350 − 32) × 5/9 = 176.7. Most ovens round it to 175°C or 180°C on the dial." },
      { q: "Which countries use Fahrenheit?", a: "The United States, Liberia, and the Bahamas officially. Nearly everywhere else — and all of science — uses Celsius." },
      { q: "At what temperature do the scales meet?", a: "At −40 degrees: −40°F equals −40°C. It is the only point where both readings agree." },
      { q: "What is the most common conversion mistake?", a: "Multiplying by 5/9 before subtracting 32. The subtraction must come first — order matters." },
    ],
  },

  "tensor-calculator": {
    description: `The steel beam holding up a highway overpass does not feel one single force — it feels a whole grid of them: pushes, pulls, and shears in every direction at once. A tensor packages that grid into one mathematical object, and working with tensors means combining matching components. The most common operation, contraction, multiplies paired components and adds the products: it is how stress turns into force, and how Einstein's equations turn curvature into gravity. A 2D stress grid with components 3 and 4 pairing against direction values 2 and 5 contributes 3×2 + 4×5 = 26 to the total.

Civil engineers checking bridge loads, physicists modeling spacetime, and machine-learning researchers transforming data all contract tensors. This calculator performs each component multiplication: type the first component in the Variable A box and its partner in the Variable B box, and the Result box shows the product term. Entering 3 and 2 gives 6; repeat for every pair, add the Results, and the contraction is complete.`,
    howToSteps: [
      "Write out the two component lists you want to contract — for example, stress components and direction values.",
      "Type the first pair's components in the Variable A and Variable B boxes — for example, 3 and 2.",
      "Read the Result box: 3 × 2 = 6, the first product term.",
      "Repeat for every remaining pair — 4 and 5 gives 20 — keeping a running sum of the Results.",
      "Add all the products: 6 + 20 = 26, the contracted value.",
      "Pair components by matching indices carefully — contracting the wrong partners answers a different question.",
    ],
    faqs: [
      { q: "What is a tensor in plain words?", a: "A grid of numbers describing something with magnitude in multiple directions at once — like the full set of pushes and shears inside a steel beam. Contracting one means multiplying matched pairs and adding, which this calculator does term by term." },
      { q: "When are tensors used?", a: "Structural engineering (stress analysis), general relativity, fluid dynamics, computer graphics, and machine learning." },
      { q: "How is a tensor different from a vector?", a: "A vector is a single arrow — one direction. A tensor is the whole grid: a vector is a rank-1 tensor, while stress needs a rank-2 tensor (a matrix)." },
      { q: "What is tensor contraction?", a: "Summing over a pair of indices — multiply each matched pair of components and add the products. It reduces the tensor's rank by two." },
      { q: "What is the most common tensor mistake?", a: "Mismatching indices — contracting component i of one tensor with component j of another instead of the shared index k." },
    ],
  },

  "topology-calculator": {
    description: `A coffee mug and a donut are the same shape — at least to a topologist. Topology studies what survives stretching and squishing without tearing, and its favorite invariant is the Euler characteristic: χ = V − E + F (vertices minus edges plus faces). A cube has 8 − 12 + 6 = 2, and so does a soccer ball, because neither has holes. Punch a hole through and the number drops: for a surface with g holes, χ = 2 − 2g, so a donut (one hole) has χ = 0 and a pretzel (three holes) has χ = −4.

The hole-counting step is a clean multiplication: 2 × g. Type 2 in the Variable A box and the number of holes in the Variable B box, and the Result box shows 2g — subtract it from 2 for the Euler characteristic. A coffee mug (one handle-hole) gives 2 × 1 = 2, so χ = 0, confirming the mug really is a donut. Network designers and 3D modelers use the same invariant to check that a mesh has no rips or unintended tunnels.`,
    howToSteps: [
      "Count the holes (the genus g) in your surface — for example, 1 for a coffee mug's handle.",
      "Type 2 in the Variable A box and the hole count in the Variable B box.",
      "Read the Result box: 2 × 1 = 2, twice the genus.",
      "Subtract the Result from 2: 2 − 2 = 0, the Euler characteristic of the mug.",
      "Verify with a cube: 0 holes gives Result 0, so χ = 2 — matching 8 − 12 + 6.",
      "Remember handles, tunnels, and through-holes all count; dents and dimples do not.",
    ],
    faqs: [
      { q: "What is the Euler characteristic in plain words?", a: "Vertices minus edges plus faces (χ = V − E + F) — a number that stays fixed no matter how you stretch the shape. For a surface with g holes it equals 2 − 2g, and the calculator computes the 2g part." },
      { q: "Why is a mug the same as a donut?", a: "Both have exactly one hole, so both have χ = 0. Topology ignores the stretching that turns one's shape into the other's." },
      { q: "When is topology actually used?", a: "Checking 3D-print meshes for defects, analyzing network layouts, classifying surfaces in geometry, and data analysis (topological data analysis)." },
      { q: "What does a negative Euler characteristic mean?", a: "The surface has more than one hole — a three-hole pretzel has χ = −4. More holes, more negative." },
      { q: "What is the most common topology counting mistake?", a: "Counting indentations as holes. A bowl's dent is not a hole — only a complete tunnel through the surface changes the genus." },
    ],
  },

  "transform-calculator": {
    description: `When a designer rotates a logo 30 degrees in graphics software, every point of the artwork is multiplied by a little 2×2 grid of numbers — a transformation matrix. Linear transforms rebuild coordinates from products: the new x is a·x + b·y, the new y is c·x + d·y, where a, b, c, d are the matrix entries. A rotation matrix is just cosines and sines arranged in that grid; a scaling matrix is stretch factors on the diagonal. Video games apply thousands of these per frame to move every character on screen.

This calculator performs each matrix-times-coordinate multiplication. Type the matrix entry in the Variable A box and the coordinate in the Variable B box — for a 2× stretch applied to x = 5, enter 2 and 5 — and the Result box shows the product term. Compute all four products (a·x, b·y, c·x, d·y), add the pairs, and the point lands in its new position. Robotics programmers rotating a gripper and photographers correcting perspective use the identical steps.`,
    howToSteps: [
      "Write your 2×2 transform matrix entries (a, b, c, d) and your point (x, y).",
      "Type the first matrix entry in the Variable A box and the matching coordinate in the Variable B box — for example, 2 and 5.",
      "Read the Result box: 2 × 5 = 10, the first product term of the new x.",
      "Repeat for the remaining three products: b·y, c·x, and d·y.",
      "Add the pairs: new x = (a·x) + (b·y), new y = (c·x) + (d·y).",
      "Apply transforms in the right order — rotating then scaling differs from scaling then rotating.",
    ],
    faqs: [
      { q: "What is a linear transform in plain words?", a: "A rule that rebuilds each point from products of matrix entries and coordinates: new x = a·x + b·y, new y = c·x + d·y. The calculator multiplies each entry × coordinate pair." },
      { q: "When are transforms used?", a: "Rotating and scaling graphics, robot arm kinematics, camera perspective correction, and physics coordinate changes." },
      { q: "What does a rotation matrix look like?", a: "Rows of (cos θ, −sin θ) and (sin θ, cos θ). For 90°, that is (0, −1) and (1, 0) — sending (x, y) to (−y, x)." },
      { q: "Why does transform order matter?", a: "Matrix multiplication is not commutative. Scale-then-rotate stretches along the original axes; rotate-then-scale stretches along the rotated ones." },
      { q: "What is the most common transform mistake?", a: "Mixing up which coordinate pairs with which matrix entry — a·x pairs a with x, never with y." },
    ],
  },

  "trapezoid-area": {
    description: `A highway median that is wider at one end than the other is a trapezoid — one pair of sides parallel, the other pair slanting. Its area comes from averaging the two parallel sides (the bases) and multiplying by the height between them: A = ((a + b) / 2) × h. A median 200 feet long, 10 feet wide at one end and 14 at the other, covers ((10 + 14) / 2) × 200 = 2,400 square feet of grass to mow or concrete to pour.

Landscapers pricing oddly shaped lawns, roofers measuring trapezoidal sections, and quilters cutting sashing strips all use it. Type the top base in the Base A (top base) box, the bottom base in the Base B (bottom base) box, and the perpendicular height in the Height (h) box. The Area output does the averaging and multiplying in one step — enter 10, 14, and 200 for the median and read 2,400 square feet directly.`,
    howToSteps: [
      "Measure the two parallel sides and type them in the Base A (top base) and Base B (bottom base) boxes — for example, 10 and 14.",
      "Measure the perpendicular distance between them and type it in the Height (h) box — for example, 200.",
      "Read the Area output: 2,400 square feet for the highway median.",
      "Use the perpendicular height, not the slanted side length — the slant is always longer and inflates the answer.",
      "For a lawn estimate, divide the Area by your sod roll coverage to count the rolls.",
      "Double-check which sides are parallel — the formula only works on that pair.",
    ],
    faqs: [
      { q: "What is the trapezoid area formula in plain words?", a: "Average the two parallel sides, then multiply by the height between them: A = ((a + b) / 2) × h." },
      { q: "When is trapezoid area used?", a: "Highway medians, trapezoidal lawn sections, roof planes, table tops wider at one end, and cross-sections of roadbeds." },
      { q: "Which sides are the bases?", a: "The two parallel ones — top and bottom in the usual drawing. The non-parallel legs are just the slanted sides." },
      { q: "Why average the bases?", a: "Because a trapezoid is exactly halfway between the rectangle its average base would make — cutting one end's excess fills the other's shortfall." },
      { q: "People also search 'trapezium area calculator' — is that this?", a: "Yes. 'Trapezium' is the British term for what Americans call a trapezoid." },
    ],
  },

  "triangle-angles-calculator": {
    description: `Every triangle's three angles add to exactly 180 degrees — no exceptions, on any flat surface anywhere. That single fact solves half of all angle problems: know two angles and the third is 180 minus their sum. A roof truss with two 35° base angles leaves a 110° peak, and the carpenter cuts the lumber to match. When sides enter the picture, the law of sines takes over: each side divided by the sine of its opposite angle gives the same constant, so a known side can unlock an unknown angle through a product ratio.

Surveyors laying out property lines and navigators triangulating positions use these relationships daily. This calculator handles the product step inside the law of sines: type the known side length in the Variable A box and the sine ratio (sin unknown / sin known) in the Variable B box, and the Result box gives the unknown side — or rearrange the same products to solve for a missing angle. A 100-foot lot line opposite 50° with a second angle of 60° yields 100 × (sin 60°/sin 50°) ≈ 113 feet of frontage.`,
    howToSteps: [
      "Start with the angle sum: subtract your two known angles from 180 to find the third.",
      "For side work, type the known side length in the Variable A box — for example, 100 for a 100-foot lot line.",
      "Type the sine ratio (sine of the target angle divided by sine of the known angle) in the Variable B box — for example, about 1.13.",
      "Read the Result box: 100 × 1.13 ≈ 113 feet, the unknown side.",
      "Look up sines in degree mode — a radian-mode sine silently gives the wrong ratio.",
      "Verify at the end: all three angles must total exactly 180°.",
    ],
    faqs: [
      { q: "Do triangle angles always add to 180°?", a: "Yes, on a flat surface — always. It is the fastest check on any triangle problem: if your angles sum to anything else, something is wrong." },
      { q: "What is the law of sines in plain words?", a: "Each side over the sine of its opposite angle is constant: a/sin A = b/sin B = c/sin C. The calculator multiplies a known side by the sine ratio to find an unknown side." },
      { q: "When are triangle angles computed?", a: "Roof truss layout, property surveying, navigation triangulation, and ramp or stair angle checks." },
      { q: "What is the ambiguous case?", a: "When given two sides and a non-included angle (SSA), the law of sines can yield two valid triangles — always check whether a second solution fits." },
      { q: "Can a triangle have two right angles?", a: "Not on flat ground — two 90° angles already sum to 180°, leaving nothing for the third side to close with." },
    ],
  },

  "triangle-area-calculator": {
    description: `A triangular sail with a 12-foot foot and an 8-foot hoist catches 48 square feet of wind — because any triangle's area is half its base times its height (A = ½ × b × h). Two copies of the triangle always assemble into a parallelogram, so the triangle owns exactly half that area. The height must be perpendicular to the base: for the sail, it is the vertical hoist, not the slanted leech. Gardeners laying out triangular flower beds and contractors ordering sod for corner lots use the identical arithmetic.

Type the Base (b) and Height (h) into their boxes and read the Area output directly — enter 12 and 8 for the sail and get 48 square feet. The Hypotenuse estimate output ((√(b² + h²))) gives the diagonal for right-triangle layouts, handy when the bed's third side needs edging. A triangular garden 10 feet by 6 feet shows 30 square feet of planting area, the number the mulch bags are counted from.`,
    howToSteps: [
      "Measure the base along one side and type it in the Base (b) box — for example, 12 for a 12-foot sail foot.",
      "Measure the perpendicular height and type it in the Height (h) box — for example, 8.",
      "Read the Area output: 48 square feet of sail.",
      "Use the Hypotenuse estimate output when you need the third side's length for edging or trim.",
      "For mulch or sod, divide the Area by the coverage per bag to count bags.",
      "Confirm the height is truly perpendicular — measuring along a slanted edge overstates the area.",
    ],
    faqs: [
      { q: "What is the triangle area formula in plain words?", a: "Half the base times the height: A = ½ × b × h. The height must be perpendicular to whichever side you call the base." },
      { q: "When is triangle area used?", a: "Sail sizing, triangular garden beds and lawns, gable-end siding estimates, and any three-sided plot." },
      { q: "Does it matter which side is the base?", a: "No — any side can be the base as long as the height is measured perpendicular to it. All three choices give the same area." },
      { q: "What if I know all three sides but no height?", a: "Use Heron's formula: s = (a+b+c)/2, then A = √(s(s−a)(s−b)(s−c)). It needs no height at all." },
      { q: "Why is there a one-half in the formula?", a: "Because two identical triangles form a parallelogram of area b × h — each triangle claims exactly half." },
    ],
  },

  "triangle-height-calculator": {
    description: `A triangular corner lot is listed at 3,000 square feet with 100 feet of street frontage — how deep is it? Rearranging the area formula gives the answer: height = 2 × area ÷ base. Double the area (6,000), divide by the base (100), and the lot runs 60 feet deep. The same rearrangement sizes flagpoles for triangular banners, sets the altitude of roof trusses, and checks whether a triangular garden bed is deep enough for the planned rows.

The doubling step is where this calculator helps: type the area in the Variable A box and 2 in the Variable B box, and the Result box shows twice the area. For the corner lot, entering 3000 and 2 gives 6,000 — divide that by the 100-foot frontage on paper and the 60-foot depth is confirmed. A banner with 24 square feet of fabric on a 6-foot pole needs height 2 × 24 ÷ 6 = 8 feet, the number the print shop asks for.`,
    howToSteps: [
      "Type the triangle's area in the Variable A box — for example, 3000 for the corner lot.",
      "Type 2 in the Variable B box.",
      "Read the Result box: 3000 × 2 = 6000, twice the area.",
      "Divide the Result by the base length on paper: 6000 ÷ 100 = 60 feet deep.",
      "Keep area and base in matching units — square feet with feet gives feet of height.",
      "Remember the answer is the perpendicular height, measured at right angles to the base.",
    ],
    faqs: [
      { q: "How do I find a triangle's height in plain words?", a: "Double the area and divide by the base: h = 2A / b. The calculator doubles the area; you divide by the base." },
      { q: "When would I need a triangle's height?", a: "Lot depth from area and frontage, banner and flag sizing, roof truss altitudes, and garden bed depth planning." },
      { q: "Which base do I divide by?", a: "Whichever side's length you know — the height you get is the one perpendicular to that side." },
      { q: "Can the height fall outside the triangle?", a: "Yes, in obtuse triangles the altitude to one side lands outside it. The formula still works — the length is what matters." },
      { q: "What is the most common height mistake?", a: "Forgetting to double the area first — dividing the plain area by the base gives half the true height." },
    ],
  },
});

Object.assign(BATCH_12, {
  "triangular-prism-calculator": {
    description: `A classic ridge tent is a triangular prism — a triangle stretched into a tunnel — and its volume is the triangle's area times the tunnel's length (V = B × h). A tent with a triangular cross-section of 20 square feet and a 7-foot length holds 140 cubic feet of air, the number that decides whether two campers sleep comfortably or claustrophobically. Toblerone bars, doorstop wedges, and wedge-shaped concrete footings all share the same geometry: an extruded triangle.

The volume is one multiplication once the triangular base area is known. Type the base triangle's area in the Variable A box and the prism's length in the Variable B box, and the Result box shows the volume. For the tent, entering 20 and 7 gives 140 cubic feet. A wedge doorstop with a 3-square-inch triangular face and 4-inch length holds 12 cubic inches — small numbers, same rule, verified the same way.`,
    howToSteps: [
      "Compute your triangle's area first: half the base times the height of the triangular face.",
      "Type that triangular area in the Variable A box — for example, 20 for the tent's cross-section.",
      "Type the prism's length (the extrusion distance) in the Variable B box — for example, 7.",
      "Read the Result box: 20 × 7 = 140 cubic feet of tent volume.",
      "Use consistent units throughout — square feet times feet gives cubic feet.",
      "For a wedge, the 'length' is the direction the triangle was stretched, whichever way it points.",
    ],
    faqs: [
      { q: "What is the triangular prism volume formula in plain words?", a: "Multiply the triangular base area by the prism's length: V = B × h. The calculator multiplies the two once you know the triangle's area." },
      { q: "When is prism volume used?", a: "Tent capacity, wedge and doorstop sizing, concrete footings, Toblerone-style packaging, and attic storage estimates under a pitched roof." },
      { q: "Is the base the triangle or the rectangle?", a: "The triangle — the two congruent triangular faces are the prism's bases, and the length runs between them." },
      { q: "How do I find the triangular base area?", a: "Half × base × height of the triangle: A = ½bh, with the height perpendicular to the base." },
      { q: "What is the most common prism volume mistake?", a: "Multiplying all three triangle dimensions together instead of using the triangle's area — that computes something with the wrong units entirely." },
    ],
  },

  "triangular-pyramid-calculator": {
    description: `The glass pyramid at the Louvre is a square pyramid, but its triangular cousin — the tetrahedron — follows an equally crisp rule: volume equals one-third the base area times the height (V = Bh/3). Three pyramids exactly fill the prism with the same base and height, which is where the one-third comes from. A triangular-pyramid paperweight with a 12-square-inch base and 5-inch height holds 12 × 5 / 3 = 20 cubic inches of glass.

The multiplication at the formula's core is base area times height. Type the triangular base area in the Variable A box and the pyramid's vertical height in the Variable B box, and the Result box shows their product — entering 12 and 5 gives 60. Divide the Result by 3 on paper for the 20-cubic-inch volume. Chemists use the same math for tetrahedral molecular geometry, and jewelers sizing pyramid-cut stones run the identical steps.`,
    howToSteps: [
      "Find your triangular base area: half × base × height of the triangle.",
      "Type the base area in the Variable A box — for example, 12.",
      "Type the pyramid's vertical height in the Variable B box — for example, 5.",
      "Read the Result box: 12 × 5 = 60.",
      "Divide the Result by 3: 20 cubic inches of pyramid volume.",
      "Use the vertical height from base to apex — the slanted edge length gives the wrong answer.",
    ],
    faqs: [
      { q: "What is the triangular pyramid volume formula in plain words?", a: "One-third times base area times height: V = Bh/3. The calculator multiplies B × h; you divide by 3." },
      { q: "Why one-third?", a: "Three pyramids with the same base and height exactly fill their prism — so each pyramid owns one-third of the prism's volume." },
      { q: "When is pyramid volume used?", a: "Paperweight and trophy sizing, pyramid-cut gemstones, concrete pyramid footings, and chemistry's tetrahedral molecules." },
      { q: "What is a regular tetrahedron?", a: "A triangular pyramid whose four faces are all equilateral triangles — the simplest possible 3D shape, with volume a³/(6√2) for edge a." },
      { q: "Pyramid vs. prism volume — what is the difference?", a: "Same base and height: the prism is B × h, the pyramid is B × h / 3. The pyramid tapers to a point; the prism does not." },
    ],
  },

  "trigonometric-identities-calculator": {
    description: `Every trigonometry student eventually faces the demand to 'prove that...' — and the identities are the allowed moves. The most famous, the Pythagorean identity, says sin²θ + cos²θ = 1 for every angle: at 30°, (0.5)² + (0.866)² = 0.25 + 0.75 = 1, exactly. Related identities rewrite tangent as sin/cos, express double angles, and flip between sum and product forms — the toolkit behind simplifying integrals, analyzing AC circuits, and tuning musical instruments.

Verifying the Pythagorean identity is a squaring exercise this calculator handles term by term. Type sin θ in both the Variable A and Variable B boxes and the Result shows sin²θ — 0.5 twice gives 0.25. Repeat for cos θ (0.866 twice gives 0.75), add the two Results, and the sum should be 1. When a homework identity refuses to balance, recomputing each squared term this way pinpoints the arithmetic slip.`,
    howToSteps: [
      "Type sin θ in both the Variable A box and the Variable B box — for example, 0.5 twice for 30°.",
      "Read the Result box: 0.5 × 0.5 = 0.25, which is sin²θ.",
      "Type cos θ in both boxes — for example, 0.866 twice — to get 0.75 in the Result.",
      "Add the two Results: 0.25 + 0.75 = 1, confirming the Pythagorean identity.",
      "Test another angle, like 45° (0.7071 twice each), to see the identity hold universally.",
      "Keep your calculator in the same degree/radian mode as your sine and cosine values.",
    ],
    faqs: [
      { q: "What is the main trig identity in plain words?", a: "sin²θ + cos²θ = 1 — the squares of sine and cosine always sum to one. The calculator squares each term; you add them." },
      { q: "What are trigonometric identities for?", a: "Proving equations, simplifying integrals and derivatives, analyzing alternating current, and solving triangles — anywhere trig expressions need rewriting." },
      { q: "How is tan expressed with sin and cos?", a: "tan θ = sin θ / cos θ. It is a quotient identity — one of the first moves in any trig proof." },
      { q: "What is the double-angle formula for sine?", a: "sin(2θ) = 2 sin θ cos θ — it turns the sine of a doubled angle into a product of the single-angle values." },
      { q: "People also search 'trig identities solver' — is that this?", a: "Yes. This page helps verify the identities numerically, term by term, which is how most students check their proofs." },
    ],
  },

  "trigonometry-calculator": {
    description: `A roofer calling out '6/12 pitch' is speaking trigonometry: for every 12 inches of horizontal run, the roof rises 6 — and the roof's angle is arctan(6/12) ≈ 26.6°. The field's three workhorse ratios — sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent — turn angle-and-side puzzles into arithmetic. SOH-CAH-TOA, the mnemonic every US geometry student learns, packs all three into one chant.

Each ratio is a division, which equals the numerator times the reciprocal of the denominator. Type the opposite side in the Variable A box and one divided by the hypotenuse in the Variable B box, and the Result box gives sin θ. For a 6-inch rise on a 13.4-inch rafter, entering 6 and about 0.0746 returns 0.4476 — sin θ, from which θ ≈ 26.6°. Navigators, surveyors, and game developers solve the same triangle thousands of ways with these three ratios.`,
    howToSteps: [
      "Label your triangle's sides relative to the angle: opposite, adjacent, hypotenuse.",
      "Type the known side (say, opposite) in the Variable A box — for example, 6 for a 6-inch rise.",
      "Type one divided by the other side (1/hypotenuse) in the Variable B box — for example, about 0.0746.",
      "Read the Result box: 6 × 0.0746 ≈ 0.4476, the sine of the roof angle.",
      "Use arcsin on the Result for the angle: about 26.6° for a 6/12 pitch.",
      "Match the ratio to the sides you know — SOH-CAH-TOA tells you which of the three fits.",
    ],
    faqs: [
      { q: "What is SOH-CAH-TOA in plain words?", a: "Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. The calculator multiplies the known side by the reciprocal of the other." },
      { q: "When is trigonometry used?", a: "Roof pitch, navigation, surveying, game physics, construction layout, and anywhere angles meet distances." },
      { q: "How do I find an angle from two sides?", a: "Form the ratio, then apply the inverse function: θ = arcsin(o/h), arccos(a/h), or arctan(o/a)." },
      { q: "What is a 6/12 roof pitch in degrees?", a: "About 26.6° — arctan(6/12). A 12/12 pitch is exactly 45°." },
      { q: "Do I need the hypotenuse for tangent?", a: "No — tangent uses only opposite and adjacent, which is why roofers and surveyors reach for it first." },
    ],
  },

  "turbulence-calculator": {
    description: `Turn a garden hose up slowly and the stream stays glassy-smooth; open it further and the flow suddenly breaks into chaos. The Reynolds number predicts exactly when that happens: Re = (density × velocity × diameter) / viscosity. Below about 2,300 the flow is laminar and orderly; above about 4,000 it is turbulent and churning. A 5/8-inch garden hose at 3 ft/s runs Re ≈ 11,700 — well into turbulence, which is why the stream dances.

Aircraft designers, pipeline engineers, and HVAC technicians all compute Reynolds numbers to predict drag, pressure loss, and mixing. The formula's numerator is a product of grouped terms: type (density × velocity) in the Variable A box and (diameter ÷ viscosity) in the Variable B box, and the Result box gives Re. For water at 62.4 lb/ft³ flowing 3 ft/s through the 5/8-inch hose, the grouped product lands near 11,700 — turbulent, exactly as the dancing stream confirms.`,
    howToSteps: [
      "Gather density, velocity, pipe diameter, and the fluid's viscosity in consistent units.",
      "Multiply density × velocity on paper and type it in the Variable A box — for example, 187.2.",
      "Divide diameter by viscosity and type that in the Variable B box.",
      "Read the Result box: the Reynolds number — near 11,700 for the garden hose example.",
      "Interpret it: under ~2,300 is smooth laminar flow; over ~4,000 is turbulent.",
      "Consistent units are critical — mixing feet with inches here is the classic Reynolds blunder.",
    ],
    faqs: [
      { q: "What is the Reynolds number in plain words?", a: "Density × velocity × diameter ÷ viscosity — a unitless number predicting whether flow is smooth (low Re) or chaotic (high Re). The calculator multiplies the grouped terms." },
      { q: "When is the Reynolds number used?", a: "Aircraft wing design, pipeline sizing, HVAC duct layout, boat hulls, and any flow where drag or mixing matters." },
      { q: "What Reynolds number means turbulent?", a: "Above roughly 4,000 in pipes. Between 2,300 and 4,000 is a transitional zone that can flip either way." },
      { q: "Why does turbulence matter?", a: "It multiplies drag and pressure loss — pipelines pump harder, wings burn more fuel — but it also mixes fluids faster, which chemical engineers want." },
      { q: "Does the Reynolds number have units?", a: "No, it is dimensionless — the units cancel out, which is why it works for garden hoses and jumbo jets alike." },
    ],
  },

  "unit-circle-calculator": {
    description: `The unit circle — a circle of radius 1 centered at the origin — is where sine and cosine live: for any angle θ, the point on the circle is (cos θ, sin θ). Every trig value students memorize, from sin(30°) = 0.5 to the full table of special angles, is a coordinate on this circle. Belt-and-pulley engineers use a close cousin of the same geometry: the belt length wrapping a pulley is radius times angle (s = rθ), arc length from the same circular thinking.

This calculator performs that arc-length multiplication. Type the radius in the Variable A box and the angle in radians in the Variable B box, and the Result box shows the arc length. A 6-inch pulley wrapping a belt through 2 radians needs 6 × 2 = 12 inches of belt contact. For unit-circle coordinates themselves, enter cos θ or sin θ with 1 in the other box to isolate each coordinate value cleanly.`,
    howToSteps: [
      "For arc length, type the radius in the Variable A box — for example, 6 for a 6-inch pulley.",
      "Type the angle in radians in the Variable B box — for example, 2.",
      "Read the Result box: 6 × 2 = 12 inches of belt contact.",
      "Convert degrees to radians first if needed: radians = degrees × π/180.",
      "For a unit-circle coordinate, type cos θ (or sin θ) in Variable A and 1 in Variable B to read it directly.",
      "Remember the unit circle's radius is exactly 1 — scale the coordinates by r for larger circles.",
    ],
    faqs: [
      { q: "What is the unit circle in plain words?", a: "A radius-1 circle where angle θ lands on the point (cos θ, sin θ). Every sine and cosine value is a coordinate on it, and the calculator multiplies radius × angle for arc length." },
      { q: "Why do students memorize the unit circle?", a: "Because it gives exact trig values for 30°, 45°, 60°, and their multiples — sin(30°) = 1/2, cos(45°) = √2/2 — without a calculator." },
      { q: "What is the arc length formula?", a: "s = rθ, with θ in radians. A 6-inch pulley through 2 radians wraps 12 inches of belt." },
      { q: "How do degrees become radians?", a: "Multiply by π/180. So 180° = π radians, 90° = π/2, and 360° = 2π." },
      { q: "People also search 'unit circle chart' — is that related?", a: "Yes. A unit circle chart lists the (cos θ, sin θ) coordinates at every special angle — the same values this page works with." },
    ],
  },

  "unit-converter-calculator": {
    description: `A marathon is 26.2 miles — or 42.195 kilometers, depending on which side of the Atlantic printed the race bib. Every unit conversion is a single multiplication: measurement × conversion factor. Miles to kilometers multiplies by 1.60934, pounds to kilograms by 0.453592, gallons to liters by 3.78541. The factor is exact and fixed; only the input changes. Runners comparing race times, cooks scaling European recipes, and travelers decoding foreign road signs all multiply by the factor.

This calculator is that multiplication. Type your measurement in the Variable A box and the conversion factor in the Variable B box, and the Result box shows the converted value. For the marathon, entering 26.2 and 1.60934 gives 42.16 — within rounding of the official 42.195 km. Flip the factor (1 ÷ 1.60934 ≈ 0.621371) to convert kilometers back to miles with the same two boxes.`,
    howToSteps: [
      "Look up the conversion factor for your units — for example, 1.60934 for miles to kilometers.",
      "Type your measurement in the Variable A box — for example, 26.2 for a marathon.",
      "Type the conversion factor in the Variable B box — for example, 1.60934.",
      "Read the Result box: 26.2 × 1.60934 ≈ 42.16 kilometers.",
      "To convert back, use the reciprocal factor: 1 ÷ 1.60934 ≈ 0.621371 in Variable B.",
      "Double-check the factor's direction — multiplying when you should divide is the classic conversion error.",
    ],
    faqs: [
      { q: "How do unit conversions work in plain words?", a: "Multiply the measurement by the conversion factor: value × factor. The calculator does exactly that multiplication." },
      { q: "What is 26.2 miles in kilometers?", a: "About 42.2 km — 26.2 × 1.60934 = 42.16, the marathon distance." },
      { q: "When would I convert units?", a: "Travel abroad, international recipes, running race distances, science homework, and comparing product specs across unit systems." },
      { q: "How do I convert back?", a: "Use the reciprocal of the factor: divide by 1.60934 (or multiply by 0.621371) to turn kilometers into miles." },
      { q: "What is the most common conversion mistake?", a: "Using the factor upside down — multiplying by 1.60934 when converting km to miles gives an answer 2.6 times too big." },
    ],
  },

  "unit-price-calculator": {
    description: `The 24-ounce cereal box costs $5.99 and the 18-ounce box costs $4.79 — which is the real deal? Divide price by size and the answer is stark: 24.9¢ per ounce versus 26.6¢, so the bigger box wins despite the higher sticker price. Unit pricing strips away packaging games by reducing every option to cost per ounce, per pound, or per item. Grocery stores in most US states print it on the shelf tag, but the small print is easy to miss — and bulk is not always cheaper.

This calculator multiplies directly: type the unit price in the Variable A box and the quantity in the Variable B box, and the Result box shows the total cost. For the cereal, entering $0.249/oz and 24 oz gives $5.98 — matching the shelf price and confirming your per-ounce math. Shoppers comparing warehouse clubs to corner stores, contractors pricing lumber by the board foot, and anyone splitting a restaurant bill proportionally use the same multiply-and-compare rhythm.`,
    howToSteps: [
      "Compute each option's unit price: divide the sticker price by the package size.",
      "Type the unit price in the Variable A box — for example, 0.249 for 24.9¢ per ounce.",
      "Type the quantity in the Variable B box — for example, 24 for 24 ounces.",
      "Read the Result box: 0.249 × 24 ≈ 5.98, confirming the shelf total.",
      "Repeat for the competing product and compare the unit prices — the lower per-unit number is the better deal.",
      "Watch the units: compare per-ounce to per-ounce, never per-ounce to per-pound without converting.",
    ],
    faqs: [
      { q: "How do I find the unit price in plain words?", a: "Divide the total price by the quantity: $5.99 ÷ 24 oz ≈ 24.9¢/oz. The calculator multiplies unit price × quantity to verify totals." },
      { q: "Is the bigger package always cheaper per unit?", a: "No — often, but not always. Manufacturers sometimes price mid-size packages as loss leaders, so always compute instead of assuming." },
      { q: "When is unit pricing used?", a: "Grocery shopping, warehouse club comparisons, contractor material estimates, and any bulk-vs-small purchase decision." },
      { q: "What units should I compare?", a: "Identical ones: ounces to ounces, or convert first. Comparing a per-pound price to a per-ounce price without converting misleads by a factor of 16." },
      { q: "People also search 'price per unit calculator' — is that this?", a: "Yes. Price per unit and unit price are the same comparison, and this page powers it." },
    ],
  },
});

Object.assign(BATCH_12, {
  "unit-rate": {
    description: `A warehouse club sells 36 AA batteries for $14.99 — but is that better than the corner store's 8-pack for $4.49? The unit rate settles it: divide quantity by units and compare. The club's rate is $14.99 ÷ 36 ≈ 41.6¢ per battery; the store's is $4.49 ÷ 8 ≈ 56.1¢. Same batteries, 35% price gap, exposed by one division. Unit rates power every 'which is cheaper' decision in American shopping, from gas priced per gallon to internet billed per megabit.

This tool computes the rate three ways at once. Type the total price or quantity in the Total Quantity box and the count in the Number of Units box, then read the Rate per Unit, Rate per 10 Units, and Rate per 100 Units outputs. Entering 14.99 and 36 shows $0.416 per battery, $4.16 per ten, and $41.63 per hundred — the per-100 view is tailor-made for comparing against bulk listings quoted by the hundred.`,
    howToSteps: [
      "Type the total price in the Total Quantity box — for example, 14.99 for the 36-pack.",
      "Type the package count in the Number of Units box — for example, 36 batteries.",
      "Read the Rate per Unit output: about $0.416 per battery.",
      "Use the Rate per 100 Units output ($41.63) to compare directly with bulk quotes priced per hundred.",
      "Run the competing product through the same two boxes and compare the per-unit rates.",
      "Make sure both products use the same unit — batteries to batteries, ounces to ounces.",
    ],
    faqs: [
      { q: "What is a unit rate in plain words?", a: "Quantity divided by the number of units: $14.99 ÷ 36 batteries ≈ 41.6¢ each. It reduces any deal to a per-one price." },
      { q: "How is unit rate different from unit price?", a: "They are the same idea — cost per single item. 'Unit rate' is the math-class name; 'unit price' is the grocery-aisle name." },
      { q: "When would I compute a unit rate?", a: "Comparing package sizes at the store, judging bulk deals, splitting shared costs fairly, and converting recipes or material estimates." },
      { q: "Why show the rate per 10 and per 100?", a: "Because suppliers often quote by the dozen, ten, or hundred — the scaled outputs let you compare without extra arithmetic." },
      { q: "What is the most common unit rate mistake?", a: "Dividing backwards (units ÷ price), which gives batteries-per-dollar instead of dollars-per-battery — a valid number that answers the wrong question." },
    ],
  },

  "volume-cone": {
    description: `A 2.5-inch-radius, 6-inch-tall sugar cone encloses (1/3)π × 2.5² × 6 ≈ 39 cubic inches of space. The cone's volume is exactly one-third of the cylinder with the same base and height (V = ⅓πr²h) — three cones of sand fill their cylinder precisely, a fact that delights every kid who tries it. The slanted side adds its own number: the slant height s = √(r² + h²) feeds the lateral area πrs, the paper the cone is rolled from.

Type the Radius (r) and Height (h) into their boxes and read the Volume, Slant Height (s), and Total Surface Area outputs together. The sugar cone shows about 39.3 cubic inches of volume, a 6.5-inch slant height, and 90.3 square inches of total surface — the three numbers a packaging engineer needs to size the cone, the wrapper, and the box it ships in. Traffic-cone and funnel manufacturers run the same three outputs.`,
    howToSteps: [
      "Measure the base radius and type it in the Radius (r) box — for example, 2.5 for a sugar cone.",
      "Type the vertical height in the Height (h) box — for example, 6.",
      "Read the Volume output: about 39.3 cubic inches.",
      "Read the Slant Height (s) output: about 6.5 inches — the diagonal side length.",
      "Use the Total Surface Area output for wrapper or material estimates.",
      "Use the vertical height, not the slant height, in the Height box — swapping them breaks the volume.",
    ],
    faqs: [
      { q: "What is the cone volume formula in plain words?", a: "One-third times π times radius squared times height: V = ⅓πr²h. Three cones fill the cylinder with the same base and height." },
      { q: "When is cone volume used?", a: "Ice cream cone capacity, funnel and hopper sizing, traffic cone specs, concrete pile estimates, and party-hat material." },
      { q: "How do I find the slant height?", a: "s = √(r² + h²) — the hypotenuse of the radius-height triangle. The calculator's Slant Height output computes it." },
      { q: "Why one-third?", a: "Because three identical cones exactly fill their enclosing cylinder — you can verify it with sand and a funnel in about a minute." },
      { q: "People also search 'volume of a cone calculator' — is that this?", a: "Yes. 'Volume of a cone' is the full phrasing; this page computes it from radius and height." },
    ],
  },

  "volume-of-cylinder-calculator": {
    description: `A standard 20-pound propane tank — the kind feeding backyard grills across America — is a cylinder about 12 inches across and 18 inches tall, holding roughly 2,036 cubic inches or 8.8 gallons of space. The volume formula is the circle's area stretched along the height: V = πr²h. Compute π × radius² for the base, multiply by height, and the tank's capacity is known — the same arithmetic sizing water heaters, soup cans, and concrete form tubes.

This version gives the full workup. Type the Radius (r) and Height (h) into their boxes, then read the Volume, Total Surface Area, Lateral Surface Area, and Diameter outputs. The propane tank shows about 2,036 cubic inches of volume, 1,131 square inches of total surface (the paint job), 679 square inches of lateral surface (the wrap label), and a 24-inch diameter for the spec sheet — everything a manufacturer or inspector needs from two measurements.`,
    howToSteps: [
      "Measure the radius (half the diameter) and type it in the Radius (r) box — for example, 6 for the propane tank.",
      "Type the height in the Height (h) box — for example, 18.",
      "Read the Volume output: about 2,036 cubic inches — divide by 231 for gallons (≈ 8.8).",
      "Read the Total Surface Area and Lateral Surface Area outputs for paint and label estimates.",
      "Check the Diameter output against your tape measure to catch a radius/diameter mix-up.",
      "Keep units consistent — inches throughout gives cubic inches; convert to gallons only at the end.",
    ],
    faqs: [
      { q: "What is the cylinder volume formula in plain words?", a: "π times radius squared times height: V = πr²h. It is the base circle's area stretched along the height." },
      { q: "How many gallons are in a cubic inch?", a: "Divide cubic inches by 231 — a US gallon is exactly 231 cubic inches. The 2,036-cubic-inch tank holds about 8.8 gallons." },
      { q: "When is cylinder volume used?", a: "Propane and water tanks, soup and paint cans, concrete tubes, pipes, and engine displacement." },
      { q: "What is lateral surface area?", a: "The curved side only — 2πrh — without the top and bottom circles. It is the label or wrap area." },
      { q: "What is the most common cylinder mistake?", a: "Entering the diameter as the radius. Since the radius is squared, the error quadruples the volume." },
    ],
  },

  "volume-of-a-cylinder-calculator": {
    description: `A 12-ounce soda can is a cylinder 2.6 inches across and 4.8 inches tall — and π × 1.3² × 4.8 ≈ 25.5 cubic inches of interior, which is 14 fluid ounces of space for 12 ounces of soda plus the headroom the fizz needs. The volume of any cylinder is the base circle's area times its height (V = πr²h): square the radius, multiply by π, multiply by height. Coffee mugs, paint cans, and candle jars all surrender their capacity to the same three moves.

Type the Radius and Height into their boxes and read the Volume output — enter 1.3 and 4.8 for the soda can and get about 25.5 cubic inches. Divide by 1.8047 for fluid ounces if you are sizing a drink container, or by 231 for gallons on bigger tanks. A homebrewer checking whether a 6-inch-radius, 24-inch-tall fermenter holds a 5-gallon batch enters 6 and 24, reads about 2,714 cubic inches, and divides by 231 to confirm 11.7 gallons of headroom-friendly capacity.`,
    howToSteps: [
      "Halve the diameter to get the radius and type it in the Radius box — for example, 1.3 for a soda can.",
      "Type the height in the Height box — for example, 4.8.",
      "Read the Volume output: about 25.5 cubic inches for the can.",
      "Convert to fluid ounces by dividing by 1.8047, or to gallons by dividing by 231.",
      "For a quick sanity check, compare against a known container — a gallon jug is 231 cubic inches.",
      "Measure the inside dimensions when capacity matters; wall thickness eats a surprising amount of volume.",
    ],
    faqs: [
      { q: "How do I find the volume of a cylinder in plain words?", a: "Square the radius, multiply by π (3.1416), and multiply by the height: V = πr²h." },
      { q: "How many cubic inches in a fluid ounce?", a: "About 1.8047 — divide cubic inches by 1.8047 for fluid ounces. The 25.5-cubic-inch can holds about 14.1 fluid ounces of space." },
      { q: "When would I compute a cylinder's volume?", a: "Soda and paint cans, coffee mugs, candle jars, homebrew fermenters, and small tanks." },
      { q: "Radius or diameter — which does the formula want?", a: "Radius — half the diameter. The soda can's 2.6-inch diameter means r = 1.3." },
      { q: "People also search 'cylinder volume calculator' — is that this?", a: "Yes. This is the streamlined version: radius and height in, volume out." },
    ],
  },

  "volume-of-a-sphere-calculator": {
    description: `A regulation water balloon, filled to a 3-inch radius, holds (4/3)π × 27 ≈ 113 cubic inches of water — about half a gallon of splash per balloon, which is why a bucket fills so few. The sphere's volume grows with the cube of the radius (V = ⁴⁄₃πr³): double the radius and the volume multiplies by eight, the reason a slightly bigger balloon feels enormously heavier. Melon farmers, ball manufacturers, and anyone filling a spherical fishbowl all face the same cubic growth.

Type the Radius in its box and read the Volume output — enter 3 for the water balloon and get about 113 cubic inches. Divide by 231 for gallons when the sphere is a tank: a 12-inch-radius rain barrel sphere holds about 7,238 cubic inches, or 31 gallons. Because the radius is cubed, measure it carefully — a half-inch error on a 3-inch balloon swings the volume by nearly 60%.`,
    howToSteps: [
      "Measure the radius and type it in the Radius box — for example, 3 for a water balloon.",
      "Read the Volume output: about 113 cubic inches.",
      "Divide by 231 to convert cubic inches to gallons for tanks and barrels.",
      "Compare two sizes to feel cubic growth: radius 3 vs. 6 gives 113 vs. 905 cubic inches.",
      "For a hollow ball, measure the inside radius — wall thickness matters at small sizes.",
      "Double-check diameter vs. radius: halving a 6-inch diameter gives the 3-inch radius the formula wants.",
    ],
    faqs: [
      { q: "What is the sphere volume formula in plain words?", a: "Four-thirds times π times the radius cubed: V = ⁴⁄₃πr³. Cube the radius, multiply by π, multiply by 4/3." },
      { q: "Why does doubling the radius multiply volume by 8?", a: "Because (2r)³ = 8r³ — the 2 gets cubed along with the radius. Volume scales with the cube of length." },
      { q: "When is sphere volume used?", a: "Water balloons, ball manufacturing, spherical tanks, fishbowls, and produce sizing." },
      { q: "How many gallons in a spherical tank?", a: "Compute cubic inches and divide by 231. A 12-inch-radius sphere holds about 31 gallons." },
      { q: "People also search 'ball volume calculator' — is that this?", a: "Yes. A ball is a sphere, and this page computes its volume from the radius." },
    ],
  },

  "volume-of-cube-calculator": {
    description: `A standard moving box advertised as '18-inch cube' swallows 18³ = 5,832 cubic inches — about 3.4 cubic feet — of books, dishes, or regrets. The cube's volume is the side length cubed (V = s³): multiply the edge by itself twice. Dice, sugar cubes, and storage ottomans all obey the same rule, and the cubic growth punishes underestimation — a 24-inch cube holds not 33% more than an 18-inch cube but 2.37 times as much.

Type the Side Length in its box and read the Volume output — enter 18 for the moving box and get 5,832 cubic inches. Divide by 1,728 for cubic feet, the unit movers and truck rentals quote: 3.375 cubic feet per box, so ten boxes need about 34 cubic feet of truck. A woodworker sizing a keepsake box and a shipper picking a carton run the identical steps.`,
    howToSteps: [
      "Measure one edge and type it in the Side Length box — for example, 18 for a moving box.",
      "Read the Volume output: 5,832 cubic inches.",
      "Divide by 1,728 to convert cubic inches to cubic feet for truck sizing.",
      "Multiply by your box count to total the truck space needed.",
      "Compare box sizes before buying: 18-inch vs. 24-inch is 5,832 vs. 13,824 cubic inches.",
      "All edges must be equal — for unequal sides, use the cuboid calculator instead.",
    ],
    faqs: [
      { q: "What is the cube volume formula in plain words?", a: "Side length cubed: V = s³. Multiply the edge by itself twice — 18 × 18 × 18 = 5,832." },
      { q: "How many cubic inches in a cubic foot?", a: "1,728 — divide cubic inches by 1,728 for cubic feet. The 18-inch box is 3.375 cubic feet." },
      { q: "When is cube volume used?", a: "Moving boxes, storage cubes, dice and game pieces, concrete cube tests, and packaging." },
      { q: "Why does a slightly bigger box hold so much more?", a: "Cubic growth: (24/18)³ ≈ 2.37. Every dimension grows at once, so volume compounds." },
      { q: "What if the box is not a perfect cube?", a: "Use length × width × height instead — that is the cuboid (rectangular prism) volume on its own page." },
    ],
  },

  "volume-of-cuboid-calculator": {
    description: `A 55-gallon aquarium — the classic American fish tank at 48 × 13 × 21 inches — holds 48 × 13 × 21 = 13,104 cubic inches of water, which is 56.7 gallons of theoretical space before gravel and glass thickness take their cut. The cuboid's volume is length times width times height (V = lwh): three edges, one product. Refrigerators, microwaves, and shipping cartons are all cuboids wearing different costumes, and their capacity is always the same three-number multiply.

Type the Length, Width, and Height into their boxes and read the Volume output — enter 48, 13, and 21 for the aquarium and get 13,104 cubic inches. Divide by 231 for gallons of liquid capacity, or by 1,728 for cubic feet of storage. A renter checking whether a 36 × 24 × 72-inch wardrobe fits a 60-cubic-foot moving allowance enters the three numbers, reads 62,208 cubic inches (36 cubic feet), and breathes easy.`,
    howToSteps: [
      "Measure the three edges and type them in the Length, Width, and Height boxes — for example, 48, 13, and 21.",
      "Read the Volume output: 13,104 cubic inches for the aquarium.",
      "Divide by 231 for gallons (fish tanks) or by 1,728 for cubic feet (storage and moving).",
      "For liquid capacity, subtract space taken by contents — gravel, shelves, or insulation.",
      "Assign length, width, and height consistently; swapping them changes nothing since multiplication commutes.",
      "Measure inside dimensions when capacity is what matters — wall thickness is not water.",
    ],
    faqs: [
      { q: "What is the cuboid volume formula in plain words?", a: "Length × width × height: V = lwh. Multiply the three edge lengths together." },
      { q: "What is the difference between a cube and a cuboid?", a: "A cube has all edges equal; a cuboid (rectangular box) allows different lengths. The cube is a special cuboid." },
      { q: "When is cuboid volume used?", a: "Aquariums, refrigerators, shipping cartons, room volumes, and any rectangular box." },
      { q: "How many gallons does a 55-gallon tank really hold?", a: "About 48–50 usable gallons — the 56.7-gallon theoretical volume loses space to glass thickness, gravel, and the unfilled top inches." },
      { q: "People also search 'rectangular box volume calculator' — is that this?", a: "Yes. A rectangular box is a cuboid, and length × width × height is its volume." },
    ],
  },

  "volume-of-rectangular-prism-calculator": {
    description: `USPS charges by dimensional weight, and the formula starts with the box's volume: a 12 × 9 × 6-inch shipping carton is 648 cubic inches of billable space. The rectangular prism's volume is length × width × height (V = lwh) — the same three-edge multiply as the cuboid, because they are the same shape under two names. 'Rectangular prism' is the geometry-class name; 'box' is what the warehouse calls it. Either way, the arithmetic decides shipping costs, storage fees, and whether the contents fit.

Type the Length, Width, and Height into their boxes and read the Volume output — enter 12, 9, and 6 for the shipping carton and get 648 cubic inches. Divide by 1,728 for cubic feet when a storage unit quotes by the cubic foot: ten such cartons need 3.75 cubic feet. An eBay seller comparing a 12 × 9 × 6 box against a 14 × 10 × 4 mailer runs both through and ships in the smaller-volume winner.`,
    howToSteps: [
      "Measure the box's three sides and type them in the Length, Width, and Height boxes — for example, 12, 9, and 6.",
      "Read the Volume output: 648 cubic inches.",
      "Divide by 1,728 for cubic feet when comparing storage quotes.",
      "For dimensional-weight shipping, divide cubic inches by the carrier's factor (139 for USPS/UPS domestic air).",
      "Run competing box sizes through and pick the smallest volume that still fits the contents.",
      "Measure the outside for shipping cost, the inside for whether contents fit.",
    ],
    faqs: [
      { q: "What is the rectangular prism volume formula in plain words?", a: "Length × width × height: V = lwh. It is the same shape mathematicians call a cuboid." },
      { q: "What is dimensional weight?", a: "Carriers bill by volume when a package is light but bulky: dimensional weight = cubic inches ÷ 139 (domestic US air). A big empty box costs real money." },
      { q: "When is prism volume used?", a: "Shipping costs, storage unit sizing, packaging selection, and warehouse space planning." },
      { q: "Rectangular prism vs. cuboid — different?", a: "No. 'Rectangular prism' is the geometry term; 'cuboid' is the common synonym. Same three edges, same product." },
      { q: "How do I pick the cheapest shipping box?", a: "Compute each candidate's volume and choose the smallest that fits — less volume means lower dimensional weight." },
    ],
  },
});

Object.assign(BATCH_12, {
  "volume-pyramid": {
    description: `The Luxor Hotel in Las Vegas is a square pyramid 350 feet tall on a 620-foot base — and its volume is one-third the base area times the height: (620 × 620 × 350) / 3 ≈ 44.8 million cubic feet of hotel. Every pyramid, from ancient Giza to a tabletop paperweight, follows V = (base area × height) / 3, because three pyramids exactly fill the prism with the same base and height. The base here is a rectangle, so its area is length × width first.

Type the Base Length (l), Base Width (w), and Height (h) into their boxes and read the Volume output — the calculator multiplies all three and divides by 3 in one step. A backyard pyramid planter 4 feet by 4 feet and 3 feet tall shows 16 cubic feet of soil capacity. A camping pyramid tent 7 × 7 feet with a 5-foot peak encloses about 81.7 cubic feet of sleeping space, the number that decides between cozy and cramped.`,
    howToSteps: [
      "Measure the rectangular base sides and type them in the Base Length (l) and Base Width (w) boxes — for example, 4 and 4.",
      "Type the vertical height in the Height (h) box — for example, 3.",
      "Read the Volume output: 16 cubic feet of soil for the planter.",
      "Use the vertical height from base center to apex — the slanted face height gives the wrong volume.",
      "For soil or concrete, add 5–10% over the exact volume for settling and spillage.",
      "Compare with a prism of the same base and height: the pyramid always holds exactly one-third.",
    ],
    faqs: [
      { q: "What is the pyramid volume formula in plain words?", a: "Base area times height, divided by 3: V = (l × w × h) / 3. The rectangular base area is length × width." },
      { q: "Why divide by 3?", a: "Three pyramids with the same base and height exactly fill their prism — each pyramid owns one-third of that volume." },
      { q: "When is pyramid volume used?", a: "Planter and hopper capacity, pyramid tents, concrete footings, decorative obelisks, and material estimates for pyramid roofs." },
      { q: "Square pyramid vs. triangular pyramid — what changes?", a: "Only the base area: square pyramids use side², triangular pyramids use ½bh. The ÷ 3 and the height work identically." },
      { q: "People also search 'how many cubic feet in a pyramid' — is that this?", a: "Yes. Enter the base sides and height, and the Volume output answers in cubic units." },
    ],
  },

  "volume-of-sphere-calculator": {
    description: `A standard basketball (about 4.8-inch radius) holds (4/3)π × 4.8³ ≈ 463 cubic inches of air — and its skin covers 4πr² ≈ 289 square inches of leather. This page reports both numbers plus the diameter from a single radius input: type it in the Radius (r) box and read the Volume, Surface Area, and Diameter outputs together. Ball manufacturers need exactly this trio — material for the cover, air for inflation specs, and diameter for the rulebook.

The volume formula V = ⁴⁄₃πr³ punishes small measurement errors cubically, so measure the radius carefully. A playground ball with a 6-inch radius shows about 905 cubic inches of volume, 452 square inches of surface, and a 12-inch diameter — the full spec line for ordering replacements. A globe maker, a fishbowl filler, and a concrete-sphere yard-art caster all start from the same three outputs.`,
    howToSteps: [
      "Measure the radius and type it in the Radius (r) box — for example, 4.8 for a basketball.",
      "Read the Volume output: about 463 cubic inches of air.",
      "Read the Surface Area output: about 289 square inches of cover material.",
      "Check the Diameter output (about 9.6 inches) against the official spec to validate your radius.",
      "For hollow balls, use the inside radius for volume and the outside radius for surface area.",
      "Convert cubic inches to gallons (÷ 231) when the sphere is a liquid tank.",
    ],
    faqs: [
      { q: "What is the sphere volume formula in plain words?", a: "Four-thirds × π × radius³: V = ⁴⁄₃πr³. This page also returns the surface area (4πr²) and diameter (2r) from the same input." },
      { q: "How big is a basketball in cubic inches?", a: "About 463 cubic inches of volume with 289 square inches of surface — for a 4.8-inch radius." },
      { q: "When would I need all three outputs?", a: "Manufacturing balls (material + inflation), sizing spherical tanks, ordering replacement playground balls, and spec sheets." },
      { q: "Why does the radius matter so much?", a: "Volume grows with r³ — a 10% radius error becomes a 33% volume error. Measure twice." },
      { q: "Sphere vs. circle — what is the difference?", a: "A circle is flat (area = πr²); a sphere is solid (volume = ⁴⁄₃πr³, surface = 4πr²). One is a shape, the other is a ball." },
    ],
  },

  "whole-number-calculator": {
    description: `A cookie recipe makes 24 cookies and 60 guests are coming — scaling by 60/24 = 2.5 gives 2.5 × every ingredient, but nobody measures 2.5 eggs. Whole-number thinking rounds the messy real-world result into something countable: 3 eggs, not 2.5. Whole numbers (0, 1, 2, 3, …) are the counting numbers plus zero — no fractions, no decimals — and half of everyday math is converting a precise answer into a whole one you can actually buy, bake, or seat.

This calculator scales in whole-number steps. Type the base count in the Variable A box — 24 cookies — and the whole-number scale factor in the Variable B box — 3 for tripling — and the Result box shows 72 cookies, with every ingredient tripled to a measurable whole amount. Event planners scaling recipes, teachers splitting classes into equal groups, and contractors ordering whole boxes of tile (never 7.3 boxes) all round life's fractions into whole numbers.`,
    howToSteps: [
      "Type your base whole count in the Variable A box — for example, 24 for the cookie recipe's yield.",
      "Type the whole-number scale factor in the Variable B box — for example, 3 to triple it.",
      "Read the Result box: 24 × 3 = 72 cookies.",
      "Scale each ingredient by the same factor, rounding fractional results (like 2.5 eggs) to whole ones.",
      "When dividing into groups, round up — 25 students into groups of 6 needs 5 groups, not 4.17.",
      "For purchases, always round up to the whole unit: 7.3 boxes of tile means buying 8.",
    ],
    faqs: [
      { q: "What is a whole number in plain words?", a: "0, 1, 2, 3, and onward — counting numbers with no fractions or decimals. The calculator multiplies whole counts by whole scale factors." },
      { q: "When do I round to whole numbers?", a: "Scaling recipes, splitting groups, ordering materials, seating guests — anywhere fractions of an item are meaningless." },
      { q: "Should I round up or down?", a: "For things you need (tile, groups, lifeboats), round up. For things you have (eggs to use), round down. Context decides." },
      { q: "Is zero a whole number?", a: "Yes. Whole numbers start at 0; natural (counting) numbers start at 1. Both exclude fractions." },
      { q: "People also search 'rounding to whole numbers calculator' — is that this?", a: "Yes. Scaling and rounding into countable whole quantities is exactly what this page does." },
    ],
  },

  "x-intercept-calculator": {
    description: `A 500-gallon water tank draining at 25 gallons per hour hits empty when the line 500 − 25x crosses zero — at x = 20 hours. The x-intercept is where a graph crosses the horizontal axis: the moment the quantity runs out, the break-even point on a timeline, the root of the equation. For a line y = mx + b, setting y = 0 gives x = −b/m — the intercept is the starting value divided by the rate, with a sign flip. The tank's −500/−25 = 20 hours is the number the maintenance crew schedules around.

Since the intercept is (−b) × (1/m), this calculator multiplies those two pieces. Type −b (the negated starting value) in the Variable A box — for y = −25x + 500, b is 500, so enter −500 — and 1/m in the Variable B box (−1/25 = −0.04). The Result box shows (−500) × (−0.04) = 20: the tank runs dry at hour 20. Economists finding break-even timelines and chemists reading titration endpoints use the same two-box move.`,
    howToSteps: [
      "Write your line as y = mx + b and identify m (slope) and b (starting value).",
      "Negate b and type it in the Variable A box — for the tank, −500.",
      "Compute 1/m and type it in the Variable B box — for m = −25, that is −0.04.",
      "Read the Result box: (−500) × (−0.04) = 20, the x-intercept.",
      "Interpret it: at x = 20 hours the tank is empty — the line crosses the axis there.",
      "A zero slope (m = 0) means no intercept — a flat line never crosses unless it is the axis itself.",
    ],
    faqs: [
      { q: "How do I find the x-intercept in plain words?", a: "Set y = 0 and solve: x = −b/m for a line y = mx + b. The calculator multiplies (−b) × (1/m)." },
      { q: "When is the x-intercept used?", a: "Drain times, break-even points on timelines, titration endpoints in chemistry, and roots of linear equations." },
      { q: "What does the x-intercept mean on a graph?", a: "Where the line crosses the horizontal axis — the input value that makes the output zero." },
      { q: "Can a line have no x-intercept?", a: "Yes: a horizontal line above or below the axis (m = 0, b ≠ 0) never crosses it." },
      { q: "X-intercept vs. root vs. zero — different?", a: "No. For a function, the x-intercept, the root, and the zero are three names for where the graph hits y = 0." },
    ],
  },

  "y-intercept-calculator": {
    description: `A cell phone plan charging $40 base plus $10 per gigabyte is the line y = 10x + 40 — and the $40 base fee is the y-intercept, the cost at zero usage. The y-intercept is where a graph crosses the vertical axis: the starting value before anything happens, the flat fee before the meter runs, the initial population before growth. From two points it comes from b = y₁ − m·x₁: take a known point's y and subtract the slope's climb to get back to x = 0.

The subtraction needs the product m × x₁ first, which is this calculator's job. Type the slope m in the Variable A box and x₁ in the Variable B box — for a plan where 5 GB costs $90, m = 10 and x₁ = 5 — and the Result box shows 10 × 5 = 50. Subtract from y₁ on paper: 90 − 50 = 40, the base fee. Taxi meters (flag drop + per-mile), landlords (deposit + monthly rent), and any fixed-plus-variable pricing hide their y-intercept the same way.`,
    howToSteps: [
      "Find your line's slope m and one point (x₁, y₁) — for the phone plan, m = 10 and (5, 90).",
      "Type the slope in the Variable A box — for example, 10.",
      "Type x₁ in the Variable B box — for example, 5.",
      "Read the Result box: 10 × 5 = 50, the slope's total climb to x₁.",
      "Subtract the Result from y₁: 90 − 50 = 40, the y-intercept (base fee).",
      "Verify: plug x = 0 into your equation — the output should equal the intercept.",
    ],
    faqs: [
      { q: "How do I find the y-intercept in plain words?", a: "It is b in y = mx + b — the value at x = 0. From a point and slope: b = y₁ − m·x₁. The calculator multiplies m × x₁; you subtract from y₁." },
      { q: "When is the y-intercept used?", a: "Phone plan base fees, taxi flag drops, security deposits, starting populations, and initial equipment readings." },
      { q: "What does the y-intercept mean on a graph?", a: "Where the line crosses the vertical axis — the output when the input is zero." },
      { q: "Can the y-intercept be negative?", a: "Yes — a line crossing below the origin has a negative intercept, like a bank account starting overdrawn." },
      { q: "People also search 'b in y=mx+b calculator' — is that this?", a: "Yes. The letter b in slope-intercept form is the y-intercept, and this page recovers it from a point and slope." },
    ],
  },

  "zero-calculator": {
    description: `A lemonade stand spends $120 on supplies and nets $1.50 per cup — how many cups until it breaks even? Set profit to zero: 120 = 1.50x gives x = 80 cups. The zero of a function is the input that makes the output zero: the break-even point in business, the moment a projectile lands, the root chemists titrate toward. For a line ax + b = 0, the zero is x = −b/a — the starting offset divided by the rate, sign-flipped.

That is (−b) × (1/a), a product this calculator performs. Write profit as 1.50x − 120 = 0, so a = 1.50 and b = −120: type −b = 120 in the Variable A box and 1/a ≈ 0.6667 in the Variable B box. The Result box shows 120 × 0.6667 = 80 cups to break even. Small-business owners, event planners, and anyone asking 'when does this pay for itself' solve for zero the same way.`,
    howToSteps: [
      "Write your situation as ax + b = 0 — for the stand, 1.50x − 120 = 0.",
      "Negate b and type it in the Variable A box — for example, 120.",
      "Compute 1/a and type it in the Variable B box — for example, 0.6667.",
      "Read the Result box: 120 × 0.6667 ≈ 80, the break-even point in cups.",
      "Interpret it: cup 80 is where profit crosses zero — cup 81 is the first real profit.",
      "Double-check the sign of b — misplacing it flips the answer negative.",
    ],
    faqs: [
      { q: "How do I find the zero of a linear function in plain words?", a: "Solve ax + b = 0: x = −b/a. The calculator multiplies (−b) × (1/a)." },
      { q: "When are zeros used?", a: "Business break-even points, projectile landing times, titration endpoints, and anywhere 'when does this hit zero' matters." },
      { q: "What is a break-even point?", a: "The sales volume where revenue exactly covers costs — profit zero. Below it you lose money; above it you earn." },
      { q: "Zero vs. root vs. x-intercept — different?", a: "No — three names for the input that makes a function zero, the point where its graph crosses the x-axis." },
      { q: "People also search 'break even calculator' — is that this?", a: "Yes. Break-even analysis is solving profit = 0, which is exactly finding the function's zero." },
    ],
  },
});
