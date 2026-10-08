import type { SEOContent } from "@/lib/seo/content";

export const BATCH_09B: Record<string, Partial<SEOContent>> = {
  "frequency-response-calculator": {
    description: `Crank a bargain Bluetooth speaker to full blast and the bass vanishes while the treble turns shrill — no volume knob explains that, because every speaker treats frequencies unequally. In plain words, frequency response reports what fraction of each tone survives the trip through a system: divide the output amplitude by the input amplitude at every frequency, and the curve of those ratios is the response. A flat line near 1.0 means honest sound; a curve that dives past 5,000 hertz means cymbals and consonants arrive muffled. Audio engineers, hearing-aid fitters, and car-stereo installers all read these curves before trusting their ears, because showroom impressions lie and curves do not.

This calculator evaluates the gain at a single point on a simple low-pass response — the curve followed by basic tone controls and speaker crossovers. Type the test frequency in hertz into the Variable A box, say 1000, and the system's cutoff frequency into the Variable B box, say 500. Read the gain ratio from the Result box: about 0.447, meaning a 1,000-hertz tone emerges at less than half its original strength when the cutoff sits at 500 hertz. Sweep Variable A upward to watch high frequencies fade, or drop it below the cutoff to see the gain settle near 1.`,
    howToSteps: [
      "Type the test frequency in hertz into the Variable A box — for example, 1000.",
      "Type the system's cutoff frequency in hertz into the Variable B box — for example, 500.",
      "Read the Result box for the gain ratio, about 0.447 here, meaning under half the tone survives.",
      "Raise Variable A well above the cutoff to watch the gain collapse toward zero.",
      "Drop Variable A below the cutoff to confirm the gain sits near 1, meaning full volume.",
      "Keep hertz and kilohertz straight — entering 1 instead of 1000 shifts the whole analysis a thousandfold.",
    ],
    faqs: [
      { q: "What is frequency response in simple terms?", a: "It is a report card across frequencies: divide output amplitude by input amplitude at each frequency, and plot those ratios. The curve shows which tones sail through and which get squashed." },
      { q: "When does frequency response matter in real life?", a: "Choosing speakers, fitting hearing aids, setting car-audio crossovers, and mixing music — anywhere the balance between bass, mids, and treble decides quality." },
      { q: "What does a gain of 0.5 actually mean?", a: "The tone emerges at half its original amplitude. On the decibel scale engineers prefer, that is roughly a 6 dB drop — clearly audible, not subtle." },
      { q: "What is frequncy response?", a: "You mean frequency response: the measure of how much of each frequency a system passes, usually drawn as a gain-versus-frequency curve." },
      { q: "Why does my speaker sound fine quietly but harsh when loud?", a: "Small drivers compress bass at high volume and the response curve shifts with level. A curve measured at whisper volume does not describe the speaker at party volume." },
    ],
  },

  "function-calculator": {
    description: `A pizzeria charges $12 plus $2 per topping, so three toppings always cost $18 — that strict input-in, output-out predictability is what mathematicians call a function. In plain words, a function is a rule that assigns exactly one output to each input: feed it a number, follow the rule's arithmetic, and the answer is forced. Substitute 4 into f(x) = 2x and the rule returns 8, every time, with no judgment calls. Temperature conversion works the same way — F = 1.8C + 32 turns 20 degrees Celsius into 68 Fahrenheit — as do phone plans that charge a base fee plus a per-gigabyte rate. Change the input and the output marches along the same track.

This calculator evaluates a straight-line function of the form y = mx, the simplest function that still teaches the whole idea. Type the x value into the Variable A box, say 4, and the slope m into the Variable B box, say 2. Read y from the Result box: 8. Try a negative x to confirm the rule handles negatives, then double the slope and watch every output double — the signature behavior of proportional functions, and the first pattern students must recognize before tackling curves.`,
    howToSteps: [
      "Type the x value you want to evaluate into the Variable A box — for example, 4.",
      "Type the slope m into the Variable B box — for example, 2 for the rule y = 2x.",
      "Read the Result box for the function's output y, which is 8 here.",
      "Try a negative x in Variable A to confirm the rule handles negatives correctly.",
      "Double Variable B and watch the result double, showing how slope scales every output.",
      "Remember that one x always gives one y — if your rule ever returns two answers, it is not a function.",
    ],
    faqs: [
      { q: "How do you evaluate a function at a number?", a: "Substitute the number for every x in the rule and compute in order. For f(x) = 2x at x = 4: 2 times 4 = 8." },
      { q: "Where do functions show up outside math class?", a: "Pizza pricing, temperature conversion, tax tables, shipping rates, and phone plans are all functions: one input, one predictable output." },
      { q: "What disqualifies a rule from being a function?", a: "One input producing two different outputs. A circle fails this vertical-line test because a single x hits two y values." },
      { q: "What is a funtion in math?", a: "You mean a function: a rule assigning exactly one output to each input, like f(x) = 2x." },
      { q: "How is a function different from an equation?", a: "An equation states two things are equal. A function is a specific input-to-output rule — every function can be written as an equation, but not every equation is a function." },
    ],
  },

  "game-theory-calculator": {
    description: `Two lemonade stands on the same block keep matching each other's price cuts until neither makes a profit — that self-destructive spiral has a whole branch of mathematics behind it. In plain words, game theory lists each player's options and payoffs in a grid, then weighs every outcome by its probability and adds the results to get a strategy's expected value. The famous Nash equilibrium is the square where neither player gains by switching alone: both stands holding prices steady, each afraid the other will undercut first. Poker players, merger negotiators, and even biologists studying animal conflicts all think in these grids, because strategy is just arithmetic about other people's choices.

This calculator compares two strategies head to head on expected value. Type the first strategy's expected payoff into the Variable A box, say 500, and the second strategy's into the Variable B box, say 350. Read the advantage from the Result box: 150, meaning strategy one beats strategy two by $150 on average. Flip the entries to confirm the sign flips. Before trusting the verdict, make sure the payoffs you typed are already probability-weighted — game theory punishes wishful thinking harder than any opponent will.`,
    howToSteps: [
      "Estimate each strategy's expected payoff by weighting outcomes with their probabilities.",
      "Type the first strategy's expected payoff into the Variable A box — for example, 500.",
      "Type the second strategy's expected payoff into the Variable B box — for example, 350.",
      "Read the Result box: 150 here means strategy one beats strategy two by $150.",
      "Swap the two entries to confirm the result changes sign, keeping the comparison honest.",
      "Replace gut-feel payoffs with real probabilities before making any decision on the result.",
    ],
    faqs: [
      { q: "How do you compute a strategy's expected value?", a: "Multiply each possible payoff by its probability and add them up. A 50% chance at $1,000 plus a 50% chance at $0 gives an expected value of $500." },
      { q: "Where is game theory actually used?", a: "Pricing wars, auction design, plea-bargain negotiations, poker, military planning, and even the study of how animals compete for mates." },
      { q: "What do beginners get wrong about game theory?", a: "Assuming the opponent is clueless. The framework expects every side to respond intelligently, so 'they will never notice' is not a strategy." },
      { q: "What is game theroy?", a: "You mean game theory: the study of strategic choices where each player's best move depends on what the others do." },
      { q: "What is a Nash equilibrium in plain English?", a: "A standoff where nobody wants to move first. Each player's choice is already the best reply to everyone else's, so switching alone only makes things worse." },
    ],
  },

  "gamma-function-calculator": {
    description: `Factorials hit a wall at whole numbers — 5! is 120, but no elementary arithmetic computes 3.5!, and nature's formulas keep demanding exactly that. In plain words, the gamma function extends factorials to every positive value: for a whole number n it equals (n-1)!, so Γ(5) = 4 × 3 × 2 × 1 = 24, and between the whole numbers it fills the gaps smoothly through an integral. The showpiece is Γ(1/2), which equals the square root of pi — a cameo nobody expects from a factorial. Statistics students meet gamma inside the chi-squared distribution, and physicists meet it in integrals that refuse to resolve any other way. It is the factorial's bigger sibling, defined everywhere the factorial is not.

This calculator evaluates gamma at a point. Type your value n into the Variable A box, say 5 — Variable B accepts a second value for side-by-side comparison. Read Γ(n) from the Result box: 24. Try 6 to watch the factorial pattern continue with 120, and 1 to confirm Γ(1) = 1, matching 0! = 1. The classic trap is the off-by-one shift: Γ(n) equals (n-1)!, so check your n before trusting the answer.`,
    howToSteps: [
      "Type your value n into the Variable A box — for example, 5.",
      "Optionally type a second value into the Variable B box to compare two results side by side.",
      "Read the Result box for Γ(n) — 24 for an input of 5.",
      "Try 6 to confirm the factorial pattern continues: Γ(6) = 120, which is 5!.",
      "Try 1 to confirm Γ(1) equals 1, matching 0! = 1.",
      "Remember the off-by-one shift: Γ(n) = (n-1)!, so Γ(5) is 4!, not 5!.",
    ],
    faqs: [
      { q: "What is the gamma function in plain words?", a: "Factorials extended to non-integers. For whole numbers, Γ(n) = (n-1)! — multiply all whole numbers below n. Between integers it follows a smooth integral curve." },
      { q: "When would I actually need the gamma function?", a: "Probability and statistics courses, physics integrals, and formulas with factorials of fractions — like sphere volumes in higher dimensions." },
      { q: "Is Γ(5) equal to 120?", a: "No, it is 24. The off-by-one shift trips everyone: Γ(5) = 4! = 24, while 5! = 120 is Γ(6)." },
      { q: "What is the gama function?", a: "You mean the gamma function: the extension of factorials to non-integer values, with Γ(n) = (n-1)! for whole numbers." },
      { q: "How is gamma related to factorials?", a: "It generalizes them. Where n! only works for whole numbers, Γ(n+1) = n! carries the same values to decimals and fractions." },
    ],
  },

  "gas-law-calculator": {
    description: `The low-tire warning that greets American drivers every October morning is usually not a leak — it is physics cooling down. In plain words, the gas law says pressure times volume equals the amount of gas times a constant times temperature: PV = nRT. Cool the air inside a tire and the pressure falls with it, about 1 psi for every 10 degrees Fahrenheit. When the amount of gas is fixed, the shortcut P1V1/T1 = P2V2/T2 says pressure and volume trade against temperature in lockstep: squeeze the volume in half and the pressure doubles. SCUBA divers watch tank gauges through this lens, grillers judge propane levels by the tank's chill, and spray cans warn against heat for exactly this reason.

This calculator evaluates the pressure-volume product. Type the pressure into the Variable A box, say 32 for a 32-psi tire, and the volume into the Variable B box, say 2 cubic feet. Read P × V from the Result box: 64, a number proportional to the gas's amount times its absolute temperature. Halve Variable B and watch the product halve — at fixed temperature, the pressure would have to double to compensate, which is the law's whole message in one experiment.`,
    howToSteps: [
      "Type the gas pressure into the Variable A box — for example, 32 for a 32-psi tire.",
      "Type the gas volume into the Variable B box — for example, 2 for two cubic feet.",
      "Read the Result box for the pressure-volume product, 64 here.",
      "Halve the volume in Variable B to see the product halve — at fixed temperature the pressure would double to compensate.",
      "Keep pressure and volume in consistent units on both sides of any comparison.",
      "Convert temperatures to Kelvin before using any full gas-law equation, never Celsius or Fahrenheit.",
    ],
    faqs: [
      { q: "What is the ideal gas law in plain words?", a: "Pressure times volume equals amount times a constant times temperature: PV = nRT. More gas, more heat, or less space all push the pressure up." },
      { q: "When does the gas law matter in daily life?", a: "Tire pressure in winter, spray-can heat warnings, SCUBA tank readings, and bread rising in the oven all follow it." },
      { q: "Why must temperature be in Kelvin?", a: "The law uses ratios, and ratios need a true zero. Twenty degrees Celsius is not twice as hot as ten — but 293 K genuinely is about twice 283 K." },
      { q: "How does a gas law calculater work?", a: "You mean calculator: it applies PV = nRT, or the combined form P1V1/T1 = P2V2/T2, to your pressure, volume, and temperature inputs." },
      { q: "Why does my tire pressure drop in winter?", a: "Colder air means lower temperature, and at fixed volume the pressure falls with it — roughly 1 psi for every 10 degrees Fahrenheit lost." },
    ],
  },

  "gaussian-calculator": {
    description: `Line up a hundred random American adults by height and the lineup bulges in the middle and tapers at both ends — the bell curve appears without anyone planning it. In plain words, the Gaussian or normal distribution is pinned down by two numbers: its average and its spread. The z-score formula z = (x − mean) / standard deviation counts how many spreads a value sits from the center, and the area under the curve up to that z is the probability. About 68% of values land within one standard deviation, 95% within two. Teachers grading on a curve, psychologists reading an IQ of 115 — one spread above the 100 mean — and quality engineers checking part sizes all read this curve. It is the default shape of natural variation, wherever many small random factors add up.

This calculator converts a z-score into a cumulative probability. Compute your z-score on paper as (value − mean) / standard deviation, then type it into the Variable A box — Variable B accepts a second z for comparison — and read the probability from the Result box. Try 1 for about 0.8413, 2 for about 0.9772, and 0 to confirm the center sits exactly at 0.5.`,
    howToSteps: [
      "Compute your z-score on paper as (value − mean) divided by the standard deviation.",
      "Type that z-score into the Variable A box — for example, 1.",
      "Read the Result box for the cumulative probability, about 0.8413 here.",
      "Type 2 into Variable A to see the probability climb to about 0.9772.",
      "Type 0 to confirm the center of the curve sits exactly at 0.5.",
      "Use Variable B for a second z-score when comparing two values head to head.",
    ],
    faqs: [
      { q: "How do you calculate a z-score?", a: "Subtract the mean from the value, then divide by the standard deviation: z = (x − mean) / SD. An IQ of 115 with mean 100 and SD 15 gives z = 1." },
      { q: "Where does the bell curve show up?", a: "Heights, test scores, measurement errors, IQ scores, and manufacturing tolerances — wherever many small random factors add up." },
      { q: "What is the biggest bell-curve mistake?", a: "Assuming every dataset is normal. Income, wait times, and earthquake magnitudes skew heavily — forcing a bell curve onto them gives nonsense probabilities." },
      { q: "What is a gausian distribution?", a: "You mean a Gaussian distribution: the bell-shaped normal curve defined by its mean and standard deviation." },
      { q: "What does a z-score of 2 mean?", a: "The value sits two standard deviations above average — higher than about 97.7% of the population, since the cumulative probability at z = 2 is 0.9772." },
    ],
  },

  "gcd-calculator": {
    description: `A landscaper with 48 square pavers wants the biggest square patio she can lay with none left over — the answer hides in the pavers' shared divisors. In plain words, the greatest common divisor is the largest whole number dividing both numbers evenly, and the Euclidean algorithm finds it fast: divide the larger by the smaller, keep the remainder, then repeat with the smaller number and the remainder until nothing is left. The last nonzero remainder is the GCD. For 48 and 18: 48 ÷ 18 leaves 12, 18 ÷ 12 leaves 6, 12 ÷ 6 leaves 0 — so the GCD is 6, and the patio is 6-by-6 pavers. Tile setters, recipe scalers, and students reducing 18/24 all need this number; it also powers the LCM calculation and simplifies every fraction it touches.

This calculator runs the algorithm for you. Type the first number into the Variable A box, say 48, and the second into the Variable B box, say 18. Read the greatest common divisor from the Result box: 6. Try 7 and 13 to see two primes return 1, meaning they share nothing, or use the result to reduce a fraction — divide 18/24's top and bottom by 6 to get 3/4.`,
    howToSteps: [
      "Type your first whole number into the Variable A box — for example, 48.",
      "Type your second whole number into the Variable B box — for example, 18.",
      "Read the Result box for the greatest common divisor, 6 in this case.",
      "Try 7 and 13 to see two primes return 1, meaning they share no divisors.",
      "Use the result to reduce a fraction: divide 18/24's top and bottom by their GCD of 6 to get 3/4.",
      "Remember the GCD never exceeds either input — if it does, something was mistyped.",
    ],
    faqs: [
      { q: "How does the Euclidean algorithm work?", a: "Divide the larger number by the smaller and keep the remainder. Repeat with the smaller number and the remainder until the remainder is zero — the last nonzero remainder is the GCD." },
      { q: "When would I need a GCD in real life?", a: "Tiling floors without cutting, splitting supplies into equal groups, reducing fractions, and scheduling repeating events all use it." },
      { q: "What is the most common GCD mistake?", a: "Confusing it with the LCM. The GCD divides into both numbers and never exceeds them; the LCM is a multiple of both and never falls below them." },
      { q: "What is the greatest common diviser?", a: "You mean divisor: the largest whole number that divides two numbers evenly, like 6 for 48 and 18." },
      { q: "How do you find the gretest common divisor?", a: "You mean greatest: use the Euclidean algorithm, or list each number's divisors and pick the largest match." },
    ],
  },

  "gcf-calculator": {
    description: `Forty-eight juice boxes and thirty-six granola bars must become identical field-trip bags with nothing left over — the question is simply how many bags. In plain words, list each number's factors and pick the biggest one on both lists. The factors of 48 include 1, 2, 3, 4, 6, 8, 12, 16, 24, and 48; the factors of 36 include 1, 2, 3, 4, 6, 9, 12, 18, and 36. The largest shared factor is 12, so twelve bags each hold 4 juice boxes and 3 granola bars. Parents packing party favors, teachers grouping students evenly, and cooks portioning ingredients all solve this puzzle. It is the same idea as the GCD, wearing the vocabulary most American classrooms use — and this calculator throws in the least common multiple free.

Type the first number into the Number A box, say 48, and the second into the Number B box, say 36. Read the GCF (a, b) box for the greatest common factor: 12. Check the LCM (a, b) box beside it: 144, the smallest number both divide into evenly. Try 100 and 75 to see a GCF of 25 with an LCM of 300.`,
    howToSteps: [
      "Type your first whole number into the Number A box — for example, 48.",
      "Type your second whole number into the Number B box — for example, 36.",
      "Read the GCF (a, b) box for the greatest common factor, 12 in this case.",
      "Check the LCM (a, b) box beside it — 144 here, the smallest number both divide into evenly.",
      "Try 100 and 75 to see a GCF of 25 with an LCM of 300.",
      "Use the GCF to build equal groups and the LCM to schedule repeating events.",
    ],
    faqs: [
      { q: "How do you find the GCF by listing factors?", a: "Write out every factor of each number and pick the largest one they share. For 48 and 36, the shared factors top out at 12." },
      { q: "When is the GCF useful?", a: "Splitting supplies into identical groups, simplifying fractions, and dividing recipes or materials evenly with nothing left over." },
      { q: "What is the difference between GCF and LCM?", a: "The GCF divides into both numbers and is their largest shared factor; the LCM is the smallest number both divide into evenly. For 48 and 36: GCF 12, LCM 144." },
      { q: "What is the greatest common facter?", a: "You mean factor: the largest whole number dividing two numbers evenly — 12 for 48 and 36." },
      { q: "Is GCF the same as GCD?", a: "Yes. Greatest common factor and greatest common divisor are two names for the same number — American classrooms just prefer 'factor.'" },
    ],
  },

  "geodesic-calculator": {
    description: `Watch a flight tracker for New York to Tokyo and the plane seems to wander north over Alaska — the pilots are not lost; they are taking the shortcut. In plain words, the shortest path between two points on a sphere is a great-circle arc, and its length equals Earth's radius times the angle between the points in radians: distance = R × θ. New York to London spans about 0.087 radians of Earth's 3,959-mile radius, giving roughly 3,450 miles — noticeably less than any flat-map guess. Pilots filing flight plans, sailors plotting crossings, and GPS routing engines all compute great-circle distances, because flat maps stretch the poles and only the sphere's own geometry tells the truth.

This calculator evaluates the arc-length formula. Type the central angle in degrees into the Variable A box, say 50, and the sphere's radius into the Variable B box, say 3959 for Earth's miles. Read the geodesic distance from the Result box. Try 90 degrees to confirm a quarter of Earth's circumference — about 6,218 miles — and double-check your angle is in degrees, not radians, before trusting the answer.`,
    howToSteps: [
      "Type the central angle between your two points, in degrees, into the Variable A box — for example, 50.",
      "Type the sphere's radius into the Variable B box — for example, 3959 for Earth's miles.",
      "Read the Result box for the geodesic distance along the surface.",
      "Try 90 degrees to confirm a quarter of Earth's circumference, about 6,218 miles.",
      "Double-check that your angle is in degrees, not radians, before trusting the result.",
      "For kilometers, use 6371 as Earth's radius in Variable B instead of 3959.",
    ],
    faqs: [
      { q: "How do you calculate great-circle distance?", a: "Multiply the sphere's radius by the central angle in radians: d = R × θ. Convert degrees to radians first by multiplying by pi/180." },
      { q: "When do you need a geodesic instead of flat distance?", a: "Flight planning, ocean navigation, satellite coverage, and any long-distance measurement where Earth's curvature stops being negligible." },
      { q: "Why can't I just measure distance on a flat map?", a: "Map projections stretch distances, especially near the poles. A straight line on a Mercator map runs longer than the true great-circle route — that is why flights arc over Alaska." },
      { q: "What is geodesic distence?", a: "You mean distance: the shortest path between two points on a curved surface, like the great-circle route airlines fly." },
      { q: "What is the difference between a geodesic and a straight line?", a: "A straight line is shortest on flat paper. On a sphere, the shortest path curves with the surface — that curved shortest path is the geodesic." },
    ],
  },

  "geometric-sequence": {
    description: `A TikTok clip doubles its views every day — 2,000 on Monday, 4,000 on Tuesday — and by Friday the creator is staring at six figures. In plain words, a geometric sequence multiplies by a fixed ratio each step, so the nth term is the first term times the ratio raised to the n−1 power: an = a1 × r^(n−1). The running total of the first n terms is a1 × (1 − r^n) / (1 − r). Ten doublings from 1,000 views reach 512,000 on the tenth day alone, with over a million views accumulated — the exponent does all the heavy lifting. Investors watching compound growth, biologists modeling bacteria, and marketers projecting viral reach all ride this curve; anything growing by a percentage rather than a fixed amount is geometric.

This calculator finds any term and the running total. Type the starting value into the First Term (a1) box, say 1000, the multiplier into the Common Ratio (r) box, say 2, and how many terms into the Number of Terms (n) box, say 10. Read the Nth Term (an) box for the last value — 512,000 — and the Sum of N Terms (Sn) box for the accumulated total of 1,023,000.`,
    howToSteps: [
      "Type the starting value into the First Term (a1) box — for example, 1000.",
      "Type the multiplier into the Common Ratio (r) box — for example, 2 for doubling.",
      "Type how many terms you want into the Number of Terms (n) box — for example, 10.",
      "Read the Nth Term (an) box for the 10th value, 512,000 here.",
      "Read the Sum of N Terms (Sn) box for the total across all ten terms, 1,023,000.",
      "Watch the off-by-one trap: the exponent is always one less than the term number.",
    ],
    faqs: [
      { q: "What is the formula for the nth term of a geometric sequence?", a: "Multiply the first term by the ratio raised to one less than the term number: an = a1 × r^(n−1). The 10th term of 1000, 2000, 4000, ... is 1000 × 2^9 = 512,000." },
      { q: "Where do geometric sequences appear in real life?", a: "Compound interest, viral spread, bacterial growth, radioactive decay — anything multiplying by a fixed percentage each period." },
      { q: "What is the classic geometric-sequence mistake?", a: "The off-by-one error: using r^n instead of r^(n−1). The first term uses the ratio zero times, so the exponent is always one less than the term number." },
      { q: "What is a geometric sequance?", a: "You mean sequence: a list where each term is the previous one times a fixed ratio, like 1000, 2000, 4000, 8000 with ratio 2." },
      { q: "How is a geometric sequence different from an arithmetic one?", a: "Geometric sequences multiply by a fixed ratio each step (3, 6, 12, 24); arithmetic sequences add a fixed difference (3, 6, 9, 12). One explodes, the other climbs steadily." },
    ],
  },
  "geometry-calculator": {
    description: `A 12-by-15-foot living room needs new carpet, and the installer quotes by the square foot — one multiplication decides the whole bill. In plain words, the area of a rectangle is length times width, and the perimeter is twice the length plus twice the width. Those two formulas quote the flooring, size the paint job, and order the baseboards: a gallon covering 350 square feet turns the walls around a 180-square-foot room into a shopping list. Homeowners measuring rooms, renters checking whether a couch fits a wall, and gardeners ordering mulch by the square yard all run rectangle math. It is the most-used geometry on Earth because rooms, lots, and screens are rectangles.

This calculator evaluates the rectangle area formula. Type the length into the Variable A box, say 12 for twelve feet, and the width into the Variable B box, say 15. Read the Result box for the area: 180 square feet. Measure twice before buying — re-enter your numbers to catch a misread tape — and keep both inputs in the same unit, feet with feet, so the area comes out in square feet instead of a nonsense hybrid.`,
    howToSteps: [
      "Type the rectangle's length into the Variable A box — for example, 12 for twelve feet.",
      "Type the width into the Variable B box — for example, 15 for fifteen feet.",
      "Read the Result box for the area, 180 square feet in this case.",
      "Measure twice before buying: re-enter your numbers to catch a misread tape.",
      "Keep both inputs in the same unit — feet with feet — so the area comes out in square feet.",
    ],
    faqs: [
      { q: "How do you find the area of a rectangle?", a: "Multiply length by width: A = l × w. A 12-by-15-foot room covers 180 square feet." },
      { q: "When does rectangle geometry come up at home?", a: "Flooring, paint, wallpaper, fencing, garden beds, and checking whether furniture fits all start with length times width." },
      { q: "What is the most common area mistake?", a: "Mixing up area and perimeter units — reporting 180 feet instead of 180 square feet, or buying linear feet of trim when you needed square feet of tile." },
      { q: "What is a gemetry calculator?", a: "You mean geometry calculator: a tool that computes measurements like area, perimeter, and volume from the dimensions you enter." },
      { q: "How much paint do I need for a wall?", a: "Multiply the wall's length by its height for square footage, then divide by the paint's coverage — usually about 350 square feet per gallon — and round up." },
    ],
  },

  "graph-calculator": {
    description: `Every seat in a movie theater can be named with two numbers — row and seat — and mathematicians do exactly that for the entire flat plane. In plain words, the coordinate plane is two number lines crossed at zero: walk right for positive x, up for positive y, and the pair (3, 4) names one exact point. The distance from the origin comes from the Pythagorean theorem applied to those coordinates: square each one, add them, and take the square root. For (3, 4) that is the square root of 9 + 16, which is 5. Students plotting homework points, game developers positioning sprites on screen, and warehouse managers mapping bin locations all speak in coordinates. Two numbers replace a whole paragraph of directions.

This calculator finds the origin distance. Type the x-coordinate into the Variable A box, say 3, and the y-coordinate into the Variable B box, say 4. Read the Result box for the straight-line distance from (0, 0): 5. Try −3 and −4 to confirm the distance stays 5, since squaring erases the signs — and remember the order, because (3, 4) and (4, 3) are different points.`,
    howToSteps: [
      "Type your point's x-coordinate into the Variable A box — for example, 3.",
      "Type the y-coordinate into the Variable B box — for example, 4.",
      "Read the Result box for the distance from the origin, 5 in this case.",
      "Try negative coordinates like -3 and -4: the distance stays 5 because squaring erases the signs.",
      "Remember the order — x first, then y — since (3, 4) and (4, 3) are different points.",
    ],
    faqs: [
      { q: "How do you find the distance from the origin?", a: "Square the x and y coordinates, add them, and take the square root: d = sqrt(x² + y²). For (3, 4): sqrt(9 + 16) = 5." },
      { q: "Where are coordinates used outside math class?", a: "Video games, GPS navigation, warehouse layouts, spreadsheets, and seating charts all locate things with coordinate pairs." },
      { q: "Which comes first, x or y?", a: "X always comes first — (3, 4) means 3 right and 4 up. Swapping them lands you at (4, 3), a different point entirely." },
      { q: "What is a cordinate graph?", a: "You mean coordinate graph: a grid formed by horizontal x and vertical y axes, where every point is named by an (x, y) pair." },
      { q: "What is a coordinate plane?", a: "Two perpendicular number lines crossing at zero, dividing the flat surface into four quadrants so any point can be named with two numbers." },
    ],
  },

  "graphing-functions-calculator": {
    description: `Before the graphing calculator arrived in American classrooms, students drew every line by hand, one plotted dot at a time. In plain words, a function's rule turns each chosen x into exactly one y: pick the x values, substitute each into the rule, and plot the resulting (x, y) pairs. Five or six points usually reveal whether the graph is a line, a curve, or something wilder — the table is the bridge between the algebra and the picture. Students preparing graphs for class, teachers demonstrating how slope tilts a line, and anyone checking homework all plot these points. Seeing the numbers become a shape is the moment functions click.

This calculator evaluates points on a straight-line function y = mx. Type an x value into the Variable A box, say 2, and the slope m into the Variable B box, say 3. Read the y value from the Result box: 6, giving the point (2, 6). Repeat with x = −2, −1, 0, and 1 to build a full table, then plot each pair on graph paper and connect them to reveal the line.`,
    howToSteps: [
      "Type an x value into the Variable A box — for example, 2.",
      "Type the slope m of your line into the Variable B box — for example, 3 for y = 3x.",
      "Read the Result box for the y value, 6 in this case, giving the point (2, 6).",
      "Repeat with x = -2, -1, 0, and 1 to build a full table of values.",
      "Plot each (x, y) pair on graph paper and connect them to reveal the line.",
    ],
    faqs: [
      { q: "How do you make a table of values for a function?", a: "Choose several x values, substitute each into the function's rule, and record the outputs. For y = 3x with x = −2..2, you get (−2,−6), (−1,−3), (0,0), (1,3), (2,6)." },
      { q: "When is a table of values actually useful?", a: "Graphing by hand, spotting patterns in data, checking calculator work, and understanding how a function behaves before trusting a plotted curve." },
      { q: "What goes wrong when graphing by hand?", a: "Sign errors on negative x values top the list — squaring −2 gives +4, not −4 — followed by uneven scales that distort the shape." },
      { q: "What is a graphing funtions calculator?", a: "You mean functions: a tool that evaluates a function's rule at values you choose, producing the points you need to draw its graph." },
      { q: "What is the difference between graphing and evaluating?", a: "Evaluating computes one output for one input. Graphing evaluates many inputs and plots all the resulting points to show the function's full shape." },
    ],
  },

  "graphing-calculator": {
    description: `The little gray TI-84 has outlasted smartphones in American backpacks — it remains the one electronic device the SAT still welcomes on the math section. In plain words, a graphing calculator is a scientific calculator with a screen that plots: type an expression and it follows the order of operations (PEMDAS — parentheses, exponents, multiplication and division, addition and subtraction), and type a function to watch it evaluate point after point across a viewing window. Millions of students have met parabolas through that pixelated screen. High schoolers checking homework, SAT takers hunting graph intercepts, and statistics students running regressions all reach for one. It never replaces understanding, but it catches arithmetic slips instantly.

This calculator mirrors the core evaluate step. Type your first value into the Variable A box, say 2, and your second into the Variable B box, say 3, then read the combined Result box — and practice the habit that matters most on the real device: wrap every numerator, denominator, and exponent in parentheses, because 2 + 3 × 4 must give 14, not 20.`,
    howToSteps: [
      "Type your first value into the Variable A box — for example, 2.",
      "Type your second value into the Variable B box — for example, 3.",
      "Read the Result box for the combined value.",
      "Recheck any expression with division by adding parentheses around the top and bottom on paper first.",
      "Switch the real device to degree mode before any trigonometry, and back to radians for calculus.",
      "For 2 + 3 × 4, multiply before adding: the answer is 14, not 20.",
    ],
    faqs: [
      { q: "What is the PEMDAS order of operations?", a: "Parentheses first, then exponents, then multiplication and division left to right, then addition and subtraction left to right. For 2 + 3 × 4, multiply first: 14, not 20." },
      { q: "Can I use a graphing calculator on the SAT?", a: "Yes — the SAT permits most graphing calculators, including the TI-84, on the math section. Devices with computer-style keyboards or internet access are banned." },
      { q: "Why does my calculator give the wrong answer for 1/2x?", a: "Implicit multiplication is ambiguous: some calculators read it as 1/(2x), others as (1/2)x. Add explicit parentheses so the machine cannot guess." },
      { q: "What is a graphing calculater?", a: "You mean calculator: a handheld device that evaluates expressions and plots function graphs on a built-in screen." },
      { q: "Do I still need to learn the math if I have a graphing calculator?", a: "Yes — the calculator only computes what you tell it. Setting up the right expression, choosing the window, and judging whether an answer is reasonable are all human jobs." },
    ],
  },

  "greater-than-less-than-fraction-calculator": {
    description: `A 7/16-inch socket looks bigger than a 3/8-inch one, but the difference is three measly thousandths of an inch — eyes alone cannot settle it. In plain words, comparing fractions means converting both to decimals or cross-multiplying the tops and bottoms, then letting the bigger value take the open mouth of the symbol: 7/16 = 0.4375 beats 3/8 = 0.375, so 7/16 > 3/8. The hungry alligator mouth always opens toward the larger meal — a memory trick American classrooms have used for decades. Mechanics choosing wrench sizes, cooks comparing 2/3 cup to 3/4 cup, and students ordering fractions on a number line all use these symbols. They turn a vague "which is more?" into a precise statement.

This calculator settles the contest numerically. Type the first fraction's decimal value into the Variable A box, say 0.4375 for 7/16, and the second into the Variable B box, say 0.375 for 3/8. Read the Result box: a positive number means the first fraction is greater, a negative number means the second wins, and zero means they are exactly equal.`,
    howToSteps: [
      "Convert your first fraction to a decimal and type it into the Variable A box — for example, 0.4375 for 7/16.",
      "Convert your second fraction to a decimal and type it into the Variable B box — for example, 0.375 for 3/8.",
      "Read the Result box: a positive number means the first fraction is greater.",
      "A negative result means the second fraction wins; zero means they are exactly equal.",
      "Double-check close calls with cross-multiplication on paper: 7×8=56 versus 3×16=48.",
    ],
    faqs: [
      { q: "How do you compare fractions with > and <?", a: "Convert both to decimals or cross-multiply, then point the symbol's open mouth at the larger value. Since 7/16 = 0.4375 exceeds 3/8 = 0.375, write 7/16 > 3/8." },
      { q: "When do > and < matter with fractions?", a: "Picking tool sizes, comparing sale prices per unit, ordering ingredients, and answering 'which is bigger' on tests and in workshops." },
      { q: "Why is 1/3 bigger than 1/4?", a: "Same numerator, but thirds are bigger pieces than fourths. A larger denominator cuts the whole into smaller slices, so each slice is worth less." },
      { q: "How do you compare greater then fractions?", a: "You mean greater than: convert both fractions to decimals and see which is larger — the bigger decimal gets the open end of the > symbol." },
      { q: "What does the alligator mouth rule mean?", a: "The < and > symbols look like an open mouth that always eats the bigger number. The pointy end aims at the smaller value." },
    ],
  },

  "greater-than-calculator": {
    description: `A $68,000 salary in Ohio against $74,000 in Seattle is the classic American dilemma — the bigger number is not automatically the better life. In plain words, deciding which number is greater means subtracting the second from the first: a positive difference crowns the first number, a negative difference crowns the second, and zero declares a tie. Seventy-four thousand minus sixty-eight thousand is 6,000, so the Seattle figure is greater before cost of living enters the chat. Shoppers comparing prices, managers ranking sales figures, and students checking test scores all run this subtraction mentally. Greater-than is the simplest decision in arithmetic, and nearly every harder decision contains one.

This calculator makes the comparison explicit. Type the first number into the Variable A box, say 74000, and the second into the Variable B box, say 68000. Read the Result box: 6000 here means the first number is greater. A negative result would mean the second wins, and zero means they match exactly.`,
    howToSteps: [
      "Type your first number into the Variable A box — for example, 74000.",
      "Type the second number into the Variable B box — for example, 68000.",
      "Read the Result box: 6000 here means the first number is greater.",
      "A negative result means the second number wins instead.",
      "A result of zero means the two numbers are exactly equal.",
    ],
    faqs: [
      { q: "How do you check which number is greater?", a: "Subtract the second from the first. A positive answer means the first is greater; negative means the second is; zero means they are equal." },
      { q: "When is a greater-than check useful?", a: "Comparing salaries, prices, scores, temperatures, and any two measurements where the bigger (or smaller) one wins." },
      { q: "What is the negative-number trap?", a: "With negatives, closer to zero wins: −3 is greater than −8. People who picture 'bigger digits win' get this backwards every time." },
      { q: "Which is greater then: 45 or 54?", a: "You mean greater than: 54. Subtracting gives 54 − 45 = 9, a positive number, so 54 is greater." },
      { q: "What is the difference between > and ≥?", a: "The > symbol means strictly greater — 5 > 5 is false. The ≥ symbol means greater than or equal to, so 5 ≥ 5 is true." },
    ],
  },

  "greatest-common-divisor-calculator": {
    description: `A teacher with 18 red markers and 24 blue markers wants identical supply caddies for each table — the biggest equal split is a divisor hunt. In plain words, a divisor is a whole number that goes in evenly, and the greatest common one is the largest divisor two numbers share. Eighteen's divisors are 1, 2, 3, 6, 9, 18; twenty-four's are 1, 2, 3, 4, 6, 8, 12, 24. The biggest match is 6, so six caddies each get 3 red and 4 blue markers. Students finishing fraction problems, bakers writing clean recipe cards, and anyone simplifying a ratio lean on this divisor. Unreduced fractions are correct but unfinished — like a sentence without a period.

This calculator finds that key divisor. Type the first number into the Variable A box, say 18, and the second into the Variable B box, say 24. Read the Result box for the greatest common divisor: 6. Divide your fraction's top and bottom by it — 18/24 becomes 3/4 in one step — and try 100 and 80 to see a GCD of 20 reduce that pair to 5 and 4.`,
    howToSteps: [
      "Type your first number into the Variable A box — for example, 18.",
      "Type your second number into the Variable B box — for example, 24.",
      "Read the Result box for the greatest common divisor, 6 in this case.",
      "Divide both numbers by the result: 18/6 = 3 and 24/6 = 4, giving the reduced 3/4.",
      "Try 100 and 80 to see a GCD of 20 reduce the pair to 5 and 4.",
    ],
    faqs: [
      { q: "How do you reduce a fraction using the GCD?", a: "Find the greatest common divisor of the numerator and denominator, then divide both by it. For 18/24, the GCD is 6, giving 3/4." },
      { q: "When does the greatest common divisor come in handy?", a: "Reducing fractions, simplifying ratios, dividing things into the largest possible equal shares, and cleaning up any answer with common factors." },
      { q: "What is the difference between a factor and a multiple?", a: "A factor divides into a number (6 is a factor of 18); a multiple is built up from it (36 is a multiple of 18). The GCD works with factors, the LCM with multiples." },
      { q: "What is the greatest common divisir?", a: "You mean divisor: the largest whole number that divides two numbers evenly, like 6 for 18 and 24." },
      { q: "What does 'divides evenly' mean?", a: "It means division with no remainder — 18 divided by 6 is exactly 3. If a remainder appears, like 18 divided by 5, it does not divide evenly." },
    ],
  },

  "greenhouse-calculator": {
    description: `A hobby grower in Minnesota wants fresh tomatoes in March, which means holding a small glass box thirty degrees warmer than a frozen night. In plain words, a greenhouse's heating load grows with two things: its floor area and the temperature gap between inside and outside. Double the area and you double the heat escaping through the glazing; double the gap and you double the rate it escapes. A 120-square-foot hobby house held 30 degrees above a freezing night needs roughly twice the heater of the same house held only 15 degrees above. Backyard growers sizing propane or electric heaters, and homesteaders budgeting winter growing costs, start here. Undersize the heater and a cold snap wipes out the seedlings; oversize it and the electric bill eats the tomato savings.

This calculator estimates the relative heating load. Type the floor area in square feet into the Variable A box, say 120, and the inside-minus-outside temperature difference in Fahrenheit into the Variable B box, say 30. Read the proportional heat requirement from the Result box: 3600. Compare two sizes or two target temperatures to feel the trade-off before buying hardware.`,
    howToSteps: [
      "Type your greenhouse floor area in square feet into the Variable A box — for example, 120.",
      "Type the temperature difference in Fahrenheit into the Variable B box — for example, 30 for thirty degrees above outside.",
      "Read the Result box for the relative heating load, 3600 here.",
      "Double Variable B to 60 and watch the load double, showing how the gap drives cost.",
      "Compare two planned sizes in Variable A to see which fits your heater budget.",
      "Size the heater for the coldest expected night, not the average one.",
    ],
    faqs: [
      { q: "How do you size a greenhouse heater?", a: "Estimate the heat loss from floor area times the inside-outside temperature gap, then choose a heater rated above that load — and add margin for the coldest expected night, not the average one." },
      { q: "When does a greenhouse actually need heat?", a: "Whenever night temperatures fall below what your plants tolerate — for tomatoes, any night under about 50°F calls for supplemental heat." },
      { q: "What is the biggest greenhouse heating mistake?", a: "Ignoring heat loss through single-pane glazing and wind. An uninsulated, drafty house can need twice the calculated heat on a windy night." },
      { q: "How do I heat a green house cheaply?", a: "You mean greenhouse: thermal mass like water barrels, double-layer glazing, and sealing drafts cut the load before you buy a bigger heater." },
      { q: "How warm should a greenhouse be at night?", a: "Most warm-season crops want nights above 50–55°F; cool-season greens tolerate the mid-40s. Match the target to what you are actually growing." },
    ],
  },

  "gyroscope-calculator": {
    description: `Hold a spinning bicycle wheel by its axle and it fights you — the wheel would rather keep its orientation than obey your hands. In plain words, that stubbornness is angular momentum, and it equals the wheel's moment of inertia (how its mass spreads around the axle) multiplied by its spin rate: L = I × ω. Spin faster or spread the mass wider and the resistance to tipping grows. When gravity tugs on that spinning momentum, the axle slowly circles instead of falling — the hypnotic wobble called precession. Drones staying level in wind, ship stabilizers fighting ocean roll, and the Hubble telescope aiming itself all ride this principle. Even the classroom demo that mesmerizes physics students is the same physics.

This calculator evaluates the angular momentum. Type the spin rate in radians per second into the Variable A box, say 20, and the moment of inertia into the Variable B box, say 0.5. Read the angular momentum from the Result box: 10. Double the spin rate and watch the momentum — and the stability — double with it.`,
    howToSteps: [
      "Type the spin rate in radians per second into the Variable A box — for example, 20.",
      "Type the moment of inertia into the Variable B box — for example, 0.5.",
      "Read the Result box for the angular momentum, 10 here.",
      "Double Variable A to see momentum double — faster spin means a steadier gyro.",
      "Spin it slower in your head: as Variable A shrinks, precession wobble grows, which is why tired gyroscopes droop.",
    ],
    faqs: [
      { q: "What is the angular momentum formula?", a: "Multiply the moment of inertia by the spin rate: L = I × ω. A wheel with I = 0.5 spinning at 20 radians per second carries 10 units of angular momentum." },
      { q: "Where are gyroscopes actually used?", a: "Drones, ships, aircraft instruments, spacecraft orientation, smartphones (for screen rotation), and precision surveying tools." },
      { q: "Why does a slow gyroscope wobble?", a: "Precession speeds up as spin decays. A fast wheel's huge angular momentum shrugs off gravity's tug; a slowing wheel cannot, so the axle starts circling visibly." },
      { q: "How does a gyroscpe stay upright?", a: "You mean gyroscope: its spinning mass carries angular momentum, which resists any change to the axle's direction — so it holds its orientation instead of toppling." },
      { q: "What is precession?", a: "The slow circling of a gyroscope's axle under gravity's pull. Instead of falling over, the spinning wheel's axle traces a cone around the vertical." },
    ],
  },

  "height-of-a-parallelogram-calculator": {
    description: `A deck board cut at a slant is a parallelogram, and its area still comes from base times height — but the height is the straight vertical drop, not the slanted edge. In plain words, flip the area formula around: height equals area divided by base. A parallelogram covering 60 square inches on a 12-inch base stands 5 inches tall, no matter how far it slants. The slant changes the look; only the perpendicular height changes the area. Carpenters ripping slanted trim, students finishing geometry worksheets, and quilters cutting slanted fabric blocks all need this height. Measure the wrong edge and the piece comes out short — the classic error is grabbing the slanted side instead of the true perpendicular.

This calculator runs the flipped formula. Type the base length into the Variable A box, say 12, and the area into the Variable B box, say 60. Read the height from the Result box: 5 inches. Double-check by multiplying back — base 12 times height 5 should equal your 60 area — and never enter the slanted side as the base unless it is genuinely the bottom edge.`,
    howToSteps: [
      "Type the parallelogram's base length into the Variable A box — for example, 12.",
      "Type the area into the Variable B box — for example, 60.",
      "Read the Result box for the height, 5 in this case.",
      "Double-check by multiplying back: base 12 times height 5 should equal your 60 area.",
      "Never enter the slanted side as the base unless it is actually the bottom edge.",
    ],
    faqs: [
      { q: "How do you find the height of a parallelogram?", a: "Divide the area by the base: h = Area / base. A 60-square-inch parallelogram on a 12-inch base is 5 inches tall." },
      { q: "When would I need a parallelogram's height?", a: "Cutting slanted trim, solving geometry problems, laying out quilt blocks, and any area calculation on a slanted four-sided shape." },
      { q: "What is the classic parallelogram mistake?", a: "Using the slanted side as the height. Height must be perpendicular to the base — the slanted edge is always longer than the true height." },
      { q: "How do I find the height of a paralellogram?", a: "You mean parallelogram: divide its area by its base length. The result is the perpendicular height, not the slanted side." },
      { q: "Is the height of a parallelogram the same as its side?", a: "Only if the parallelogram is a rectangle. On a slanted parallelogram the side leans, so the perpendicular height is shorter than the side." },
    ],
  },
  "hexagon-calculator": {
    description: `Hexagonal bathroom tile is back in style across American renovations — and the honeycomb pattern is not just pretty, it is ruthlessly efficient. In plain words, a regular hexagon is six equilateral triangles in disguise: its area equals half its perimeter times its apothem (the distance from center to the middle of a side), which simplifies to (3 × √3 / 2) times the side length squared. A 2-inch tile covers about 10.4 square inches. Bees worked this out first — hexagons pack maximum honeycomb storage into minimum wax. Homeowners ordering hex floor tile, quilters cutting honeycomb blocks, and students tackling polygon homework all need this area. Count the tiles, multiply by one tile's area, and add ten percent for cuts.

This calculator evaluates the area from side and apothem. Type the side length into the Variable A box, say 2, and the apothem into the Variable B box, say 1.732. Read the area from the Result box — about 10.39 square inches. If your tile specs list only the side, find the apothem with side × √3 / 2 first.`,
    howToSteps: [
      "Type the hexagon's side length into the Variable A box — for example, 2.",
      "Type the apothem (center to middle of a side) into the Variable B box — for example, 1.732.",
      "Read the Result box for the area, about 10.39 square inches here.",
      "Find the apothem from the side with apothem = side × √3 / 2 if your tile specs only list the side.",
      "Multiply one tile's area by your tile count, then add 10% extra for cutting waste.",
    ],
    faqs: [
      { q: "What is the area formula for a regular hexagon?", a: "Area = (3√3/2) × side², or equivalently half the perimeter times the apothem. A 2-inch-side hexagon covers about 10.39 square inches." },
      { q: "When do you need hexagon math?", a: "Ordering hex tile, cutting quilt blocks, designing honeycomb structures, and solving polygon problems in geometry class." },
      { q: "What is the apothem mix-up?", a: "Confusing the apothem with the side length. The apothem runs from the center perpendicular to a side (shorter); the side is the edge itself. For a 2-inch hexagon the apothem is about 1.732." },
      { q: "How do I find the area of a hexegon?", a: "You mean hexagon: use (3√3/2) times the side squared, or half the perimeter times the apothem." },
      { q: "Why do bees use hexagons?", a: "Hexagons tile a plane with no gaps while using the least wax per unit of storage — the most efficient floor plan in nature." },
    ],
  },

  "hyperbola-calculator": {
    description: `Two Coast Guard radio towers can locate a distressed boat from the difference in signal arrival times — the boat sits somewhere on an invisible hyperbola. In plain words, a hyperbola is the set of points where the difference of the distances to two foci stays constant, and its standard equation is x²/a² − y²/b² = 1. The focal distance comes from c = √(a² + b²): square both semi-axes, add, and take the root. With a = 3 and b = 4, the foci sit 5 units from the center. Students graphing conic sections, navigators using old LORAN signals, and physicists tracing a comet's escape path all meet this curve. It is the ellipse's rebellious sibling — the minus sign between the squares changes everything.

This calculator finds the focal distance. Type the semi-axis a into the Variable A box, say 3, and the semi-axis b into the Variable B box, say 4. Read c from the Result box: 5. Square the result to verify — 25 should equal 9 + 16 — and remember that c is always larger than both a and b on a hyperbola.`,
    howToSteps: [
      "Type the semi-axis a (under the positive square) into the Variable A box — for example, 3.",
      "Type the semi-axis b into the Variable B box — for example, 4.",
      "Read the Result box for the focal distance c, 5 in this case.",
      "Square the result to verify: 25 should equal 9 + 16.",
      "Remember that c is always larger than both a and b on a hyperbola.",
    ],
    faqs: [
      { q: "What is the standard equation of a hyperbola?", a: "x²/a² − y²/b² = 1 opens left and right; y²/a² − x²/b² = 1 opens up and down. The minus sign between the squares is the signature." },
      { q: "Where do hyperbolas appear in real life?", a: "Radio navigation, sonic boom cones, comet trajectories, cooling-tower shapes, and the shadow patterns of lampshades." },
      { q: "How do you tell a hyperbola from an ellipse?", a: "Look at the sign between the squared terms: a minus means hyperbola, a plus means ellipse. One sign flip changes the entire curve." },
      { q: "What is the difference between a hyperbola and hyperbole?", a: "A hyperbola is a mathematical curve. Hyperbole is exaggerated speech, like 'I'm so hungry I could eat a horse.' They share Greek roots but nothing else." },
      { q: "What are the foci of a hyperbola?", a: "Two fixed points, each c = √(a² + b²) from the center along the transverse axis. Every point on the curve keeps a constant difference of distances to them." },
    ],
  },

  "hypothesis-test-calculator": {
    description: `A coffee shop switches its tip-screen layout and tips jump 12% — the owner wants to know whether the change worked or the week was just lucky. In plain words, a hypothesis test starts by assuming nothing changed (the null hypothesis), then computes how surprising the data would be under that assumption. That surprise level is the p-value: the probability of seeing results this extreme if the null were true. A p-value below 0.05 is the conventional signal to declare the effect real. Marketers A/B testing headlines, pharmaceutical companies trialing drugs, and factories checking whether a new process cut defects all run this ritual. It is the gatekeeper between "interesting" and "proven."

This calculator converts a test statistic into a p-value. Compute your z or t statistic from your sample data, then type it into the Variable A box, say 2.1 — Variable B accepts a second statistic for comparison. Read the p-value from the Result box: roughly 0.036, which clears the usual 0.05 bar and counts as statistically significant.`,
    howToSteps: [
      "Compute your test statistic (z or t) from your sample data first.",
      "Type the test statistic into the Variable A box — for example, 2.1.",
      "Read the Result box for the p-value, roughly 0.036 here.",
      "Compare against 0.05: below it, the result counts as statistically significant.",
      "Type a second statistic into Variable B to compare two experiments side by side.",
    ],
    faqs: [
      { q: "What is a p-value in plain English?", a: "The probability of seeing data this extreme if nothing were really happening. A p-value of 0.036 means such results would occur by chance only 3.6% of the time." },
      { q: "When do you run a hypothesis test?", a: "A/B testing websites, clinical trials, quality control, polling analysis — anywhere you must decide if a difference is real or random noise." },
      { q: "What does p < 0.05 actually mean?", a: "Not 'a 95% chance the effect is real' — the classic misreading. It means: if there were no effect, data this extreme would appear less than 5% of the time." },
      { q: "How does a hypothesis test calculater work?", a: "You mean calculator: it turns your test statistic into a p-value using the appropriate distribution, then you compare that p-value to your significance level." },
      { q: "What is the null hypothesis?", a: "The default assumption of 'no effect' or 'no difference' — the new layout does nothing, the drug does nothing. The test measures how hard the data pushes against it." },
    ],
  },

  "imaginary-number-calculator": {
    description: `The equation x² = −1 has no answer on the number line, so mathematicians invented a new number rather than admit defeat. In plain words, i is defined by i² = −1, and a complex number a + bi pairs a real part with an imaginary part. Its magnitude — the distance from zero on the complex plane — is √(a² + b²): for 3 + 4i that is 5. Multiply complex numbers with FOIL and replace every i² with −1 to land back in a + bi form. Electrical engineering students analyzing AC circuits meet complex numbers weekly, since i tracks phase shifts through capacitors and inductors. Algebra students meet them as the "two complex solutions" of x² + 1 = 0. They are called imaginary, but the power grid depends on them.

This calculator finds the magnitude. Type the real part a into the Variable A box, say 3, and the imaginary part b into the Variable B box, say 4. Read the magnitude from the Result box: 5. Verify on paper — √(9 + 16) = √25 = 5 — and remember the magnitude is always a positive real number, never imaginary.`,
    howToSteps: [
      "Type the real part of your complex number into the Variable A box — for example, 3.",
      "Type the imaginary part (the coefficient of i) into the Variable B box — for example, 4.",
      "Read the Result box for the magnitude, 5 in this case.",
      "Verify on paper: √(9 + 16) = √25 = 5.",
      "Remember the magnitude is always a positive real number, never imaginary.",
    ],
    faqs: [
      { q: "What is i in math?", a: "The imaginary unit, defined by i² = −1. It lets equations like x² + 1 = 0 have solutions: x = i and x = −i." },
      { q: "Where are imaginary numbers actually used?", a: "AC circuit analysis, signal processing, quantum mechanics, and control systems — anywhere waves and rotations need compact algebra." },
      { q: "What is the most common i mistake?", a: "Forgetting that i² = −1 when multiplying. (2 + 3i)(1 + i) needs the i² term replaced: it becomes 1 + 5i, not 2 + 5i + 3i² left hanging." },
      { q: "How do you use an imaginery number calculator?", a: "You mean imaginary: enter the real and imaginary parts separately, then compute things like magnitude √(a² + b²) or the result of complex arithmetic." },
      { q: "Are imaginary numbers actually imaginary?", a: "No — the name is a 17th-century insult that stuck. They are as real as negative numbers, and engineers use them to keep the lights on." },
    ],
  },

  "impedance-calculator": {
    description: `Wire a 4-ohm subwoofer to an amp expecting 8 ohms and the music distorts — or worse, the amp gives up in a puff of regret. In plain words, impedance Z combines resistance R (which burns energy as heat) with reactance X (which stores and releases it in coils and capacitors): square both, add them, and take the square root, Z = √(R² + X²). A speaker rated 4 ohms on resistance with 3 ohms of reactance presents 5 ohms of impedance to the amplifier. Car-audio installers matching speakers to an amp, electricians sizing AC circuits, and guitarists choosing a cabinet all check these ohms. Mismatched impedance starves the amp or cooks the speakers — neither is cheap.

This calculator combines the two parts. Type the resistance R in ohms into the Variable A box, say 4, and the reactance X in ohms into the Variable B box, say 3. Read the total impedance from the Result box: 5 ohms. Verify — √(16 + 9) = √25 = 5 — then compare against your amp's rated range, since most car amps expect 2 to 8 ohms.`,
    howToSteps: [
      "Type the resistance R in ohms into the Variable A box — for example, 4.",
      "Type the reactance X in ohms into the Variable B box — for example, 3.",
      "Read the Result box for the impedance, 5 ohms in this case.",
      "Verify: √(16 + 9) = √25 = 5.",
      "Compare your result to your amp's rated range — most car amps expect 2 to 8 ohms.",
    ],
    faqs: [
      { q: "How do you calculate impedance?", a: "Combine resistance and reactance like legs of a right triangle: Z = √(R² + X²). With R = 4 and X = 3, Z = 5 ohms." },
      { q: "When does impedance matter?", a: "Matching speakers to amplifiers, designing AC circuits, choosing guitar cabinets, and any audio setup where power transfer depends on the load." },
      { q: "Is impedance the same as resistance?", a: "No — resistance is only the real part. Impedance adds reactance from inductors and capacitors, which is why a speaker's impedance differs from its DC resistance." },
      { q: "What is electrical impedence?", a: "You mean impedance: the total opposition to alternating current, combining resistance and reactance, measured in ohms." },
      { q: "What happens if speaker impedance is too low?", a: "The amp pushes more current than it is built for, which can trigger protection shutdown or overheat and damage the amplifier." },
    ],
  },

  "impulse-calculator": {
    description: `A major-league catcher does not stab at a 95-mph fastball — he pulls his glove backward as it lands, stretching a violent instant into a gentle one. In plain words, impulse equals the average force multiplied by how long it acts: J = F × Δt, which also equals the change in momentum. A 5,000-newton force lasting 0.2 seconds delivers 1,000 newton-seconds of impulse — the same momentum change as 1,000 newtons over a full second, but far gentler on the hands. Baseball players following through on a swing and engineers designing crumple zones all trade force against time. Same impulse, longer time, smaller peak force — that is why airbags inflate.

This calculator multiplies the pair. Type the average force in newtons into the Variable A box, say 5000, and the contact time in seconds into the Variable B box, say 0.2. Read the impulse in newton-seconds from the Result box: 1000. Halve the time to see the same impulse demand double the force, or double the time to feel why airbags and crumple zones save lives.`,
    howToSteps: [
      "Type the average force in newtons into the Variable A box — for example, 5000.",
      "Type the contact time in seconds into the Variable B box — for example, 0.2.",
      "Read the Result box for the impulse, 1000 newton-seconds here.",
      "Halve the time in Variable B to see the same impulse demand double the force.",
      "Double the time instead to feel why airbags and crumple zones save lives.",
    ],
    faqs: [
      { q: "What is the impulse-momentum theorem?", a: "Impulse equals change in momentum: F × Δt = Δp. The same momentum change can come from a huge force briefly or a small force over a long time." },
      { q: "Where does impulse show up in sports?", a: "Follow-through in baseball and golf, catching a ball with a soft glove, landing with bent knees — all stretch the impact time to cut peak force." },
      { q: "Why does follow-through matter in sports?", a: "It lengthens contact time, letting the same impulse build with lower peak force and more control. The common mistake is thinking only swing speed matters." },
      { q: "How do you calculate impluse?", a: "You mean impulse: multiply the average force by the time it acts — J = F × Δt, measured in newton-seconds." },
      { q: "How do airbags use impulse?", a: "They extend the crash's stopping time from milliseconds to tenths of a second. The passenger's momentum change stays the same, but the peak force drops dramatically." },
    ],
  },

  "indefinite-integral-calculator": {
    description: `A speedometer tells you how fast you are going right now; the odometer tells you how far you have gone — integration is the mathematical odometer. In plain words, the indefinite integral rebuilds the original function from its slope: reverse the power rule by raising the exponent by one, dividing by the new exponent, and never forgetting +C. The integral of 3x² is x³ + C, because differentiating x³ gives back 3x². That +C stands for every constant the derivative erased — the slope alone cannot tell you the curve's height. Calculus students checking homework, physics majors recovering position from velocity, and economists rebuilding total cost from marginal cost all integrate. It is differentiation's undo button, with one free constant attached.

This calculator applies the reverse power rule. Type the exponent n into the Variable A box, say 2, and the coefficient into the Variable B box, say 3 for 3x². Read the Result box for the new coefficient — the old one divided by n+1: 1, giving x³. Then write +C after your answer, because the constant of integration is required, not decoration.`,
    howToSteps: [
      "Type the exponent n of your x^n term into the Variable A box — for example, 2.",
      "Type the term's coefficient into the Variable B box — for example, 3 for 3x².",
      "Read the Result box for the integrated coefficient, 1 here, meaning x³.",
      "Write +C after your answer — the constant of integration is required, not decoration.",
      "Differentiate your answer mentally to check: the derivative of x³ + C is 3x², matching the input.",
    ],
    faqs: [
      { q: "What is the power rule for integrals?", a: "Raise the exponent by one and divide by the new exponent: ∫x^n dx = x^(n+1)/(n+1) + C. So ∫3x² dx = x³ + C." },
      { q: "When do you use indefinite integrals?", a: "Recovering position from velocity, total from marginal rates, and any 'undo the derivative' problem in calculus and physics." },
      { q: "Why do you add +C?", a: "Differentiation erases constants — the derivatives of x³, x³ + 5, and x³ − 2 are all 3x². The +C admits every possible original constant." },
      { q: "How do you solve an indefinte integral?", a: "You mean indefinite: reverse the derivative rules — for powers, raise the exponent by one and divide by it, then add +C." },
      { q: "What is the difference between definite and indefinite integrals?", a: "The indefinite integral gives a family of functions plus +C. The definite integral evaluates between two bounds and gives a single number — the net area." },
    ],
  },

  "infinite-series-calculator": {
    description: `Walk halfway to the wall, then half the remaining distance, then half again — logic insists you never arrive, yet your hand touches the wall. In plain words, an infinite geometric series converges when each term shrinks by a fixed ratio smaller than 1, and the total equals the first term divided by one minus the ratio: S = a / (1 − r). Adding 1 + 1/2 + 1/4 + 1/8 + ... forever never passes 2, because 1 / (1 − 1/2) = 2. Zeno's ancient paradox of the runner halving the distance dissolves into the same arithmetic. Finance students pricing a perpetuity, programmers summing a converging loop, and anyone proving that 0.999... equals 1 use this sum. Infinity is only scary until the ratio drops below one.

This calculator sums the geometric case. Type the first term into the Variable A box, say 1, and the common ratio into the Variable B box, say 0.5. Read the infinite sum from the Result box: 2. Keep the ratio between −1 and 1 — outside that range the series diverges and no finite sum exists.`,
    howToSteps: [
      "Type the series' first term into the Variable A box — for example, 1.",
      "Type the common ratio into the Variable B box — for example, 0.5.",
      "Read the Result box for the infinite sum, 2 in this case.",
      "Try a ratio of 0.25 to see the sum shrink to 1.333..., confirming smaller ratios converge lower.",
      "Keep the ratio between -1 and 1 — outside that range the series diverges and no finite sum exists.",
    ],
    faqs: [
      { q: "How do you sum an infinite geometric series?", a: "Divide the first term by one minus the ratio: S = a/(1−r), valid when |r| < 1. For 1 + 1/2 + 1/4 + ..., S = 1/(1−0.5) = 2." },
      { q: "When do infinite sums matter?", a: "Perpetuity pricing in finance, repeating decimals, fractal lengths, probability over infinite trials, and resolving Zeno-style paradoxes." },
      { q: "Does every infinite series converge?", a: "No — the harmonic series 1 + 1/2 + 1/3 + ... diverges to infinity despite its shrinking terms. Shrinking terms are necessary but not sufficient." },
      { q: "How do I sum an infinite seires?", a: "You mean series: for a geometric one, use S = first term / (1 − ratio), which works when the ratio's absolute value is below 1." },
      { q: "How can 0.999... equal 1?", a: "Write it as 9/10 + 9/100 + 9/1000 + ... — a geometric series with a = 0.9 and r = 0.1. The sum formula gives 0.9/0.9 = 1 exactly." },
    ],
  },

  "instantaneous-rate-of-change-calculator": {
    description: `Your car's speedometer reads 65 mph at the exact moment you glance down — that single number hides an entire branch of calculus. In plain words, the instantaneous rate of change is the average rate over a tiny interval — change in value divided by change in time — with the interval shrunk toward zero. The secant line's slope becomes the tangent line's slope, which is the derivative. Average speed over an hour tells you about the trip; the speedometer tells you about right now. Traders watching a stock's momentum, epidemiologists tracking daily case growth, and drivers glancing at the dash all read instantaneous rates. Averages describe the past; the derivative describes the moment.

This calculator estimates the rate from a small interval. Type the change in the function's value into the Variable A box, say 13, and the tiny interval width into the Variable B box, say 0.2. Read the rate from the Result box: 65. Shrink Variable B toward zero and watch the estimate settle onto the true instantaneous rate — remembering that this is an approximation, since the true rate is the limit as the interval reaches zero.`,
    howToSteps: [
      "Type the change in the function's value over your interval into the Variable A box — for example, 13.",
      "Type the interval width into the Variable B box — for example, 0.2.",
      "Read the Result box for the average rate over that interval, 65 here.",
      "Shrink Variable B to 0.02 (with the matching value change) to see the estimate sharpen.",
      "Remember this is an approximation — the true instantaneous rate is the limit as the interval reaches zero.",
    ],
    faqs: [
      { q: "How is instantaneous rate different from average rate?", a: "Average rate divides total change by total time over an interval. Instantaneous rate is the limit of that ratio as the interval shrinks to zero — the slope at a single point." },
      { q: "When do you need an instantaneous rate?", a: "Reading a speedometer, measuring reaction rates in chemistry, tracking stock momentum, or finding the exact slope of a curve at one point." },
      { q: "Can you just plug in h = 0?", a: "No — that divides by zero. The difference quotient is undefined at h = 0; you must take the limit as h approaches zero instead." },
      { q: "What is instantaneous rate of chnage?", a: "You mean change: the derivative — how fast a quantity is changing at one exact moment, like a speedometer reading." },
      { q: "What does a derivative actually measure?", a: "The slope of the tangent line at a point: how fast the function's output is changing per unit of input, right there and nowhere else." },
    ],
  },

  "integer-division-calculator": {
    description: `One hundred wedding favors and twelve per table — eight tables get full settings, and four favors are left arguing over the leftovers. In plain words, integer division divides as usual, drops the fractional part to get the quotient, and the remainder is whatever is left: remainder = dividend − quotient × divisor. One hundred divided by twelve is 8.333..., so the quotient is 8 and the remainder is 100 − 96 = 4. Teachers packing supply boxes, developers paginating 100 search results at 12 per page, and parents splitting a restaurant bill evenly all do this split. Computers use it constantly — it is how clocks wrap hours and calendars wrap days.

This calculator performs the split. Type the total into the Dividend (Numerator) box, say 100, and the group size into the Divisor (Denominator) box, say 12. Read the whole-number Quotient from the result: 8, with 4 unassigned. Find the remainder yourself — 100 − (8 × 12) = 4 — and use the quotient for full groups and the remainder to decide what happens to the leftovers.`,
    howToSteps: [
      "Type the total you are splitting into the Dividend (Numerator) box — for example, 100.",
      "Type the group size into the Divisor (Denominator) box — for example, 12.",
      "Read the Quotient box for the whole-number result, 8 in this case.",
      "Find the remainder yourself: 100 - (8 × 12) = 4 left over.",
      "Use the quotient for full groups and the remainder to decide what happens to the leftovers.",
    ],
    faqs: [
      { q: "How do you find the quotient and remainder?", a: "Divide and keep the whole part as the quotient; the remainder is dividend minus quotient times divisor. For 100 ÷ 12: quotient 8, remainder 4." },
      { q: "When is integer division used?", a: "Packing boxes, pagination, splitting bills, calendar math, clock arithmetic, and every programming loop that groups items." },
      { q: "What is the negative-number remainder trap?", a: "Languages disagree: −7 divided by 3 gives remainder −1 in some and 2 in others. Check your tool's convention before trusting negative remainders." },
      { q: "How does interger division work?", a: "You mean integer: divide two whole numbers and keep only the whole part of the answer — the fraction is dropped, not rounded." },
      { q: "What is the difference between / and div in programming?", a: "The / operator usually returns the full decimal result, while div (or // in Python) returns only the whole-number quotient, discarding the remainder." },
    ],
  },
  "interior-angles-of-polygon-calculator": {
    description: `Every stop sign in America is an octagon, and every one of its eight corners measures exactly 135 degrees — no sign painter measures that; geometry guarantees it. In plain words, any polygon splits into triangles from one corner, giving n−2 triangles, and each triangle holds 180 degrees: sum = (n − 2) × 180°. A hexagon holds 720 degrees total; a regular one divides that evenly into six 120-degree corners. The Pentagon building's five sides work the same way, and so does every tiled floor pattern. Architects laying out bay windows, quilters piecing hexagonal blocks, and students finishing geometry worksheets all lean on this formula. It turns a protractor chore into one multiplication.

This calculator evaluates the interior-angle formulas. Type the number of sides n into the Variable A box, say 8 — Variable B accepts a second value for comparison. Read the angle sum from the Result box: (8−2) × 180 = 1080 degrees. Divide by 8 yourself to confirm each corner of a regular octagon is 135 degrees, and try n = 5 to see the Pentagon's 540-degree total.`,
    howToSteps: [
      "Type the polygon's number of sides n into the Variable A box — for example, 8 for an octagon.",
      "Optionally type a second side count into the Variable B box to compare two polygons.",
      "Read the Result box for the total interior angle sum, 1080 degrees here.",
      "Divide the sum by n yourself to get one corner of a regular polygon: 1080/8 = 135 degrees.",
      "Try 5 to confirm a pentagon's total of 540 degrees, or 6 for a hexagon's 720.",
      "Remember the formula counts total degrees — each corner only equals sum/n for regular polygons.",
    ],
    faqs: [
      { q: "What is the interior angle sum formula?", a: "Multiply one less than the side count minus one by 180°: sum = (n − 2) × 180°. An octagon holds (8−2) × 180 = 1080 degrees total." },
      { q: "How do you find one angle of a regular polygon?", a: "Divide the total by the number of sides: ((n−2) × 180°) / n. A regular octagon gives 1080/8 = 135 degrees per corner." },
      { q: "When do interior angles matter outside class?", a: "Cutting trim for bay windows, piecing quilt blocks, laying tile patterns, and designing anything with polygonal corners." },
      { q: "What are interior angels of a polygon?", a: "You mean angles: the corners inside a polygon, which always total (n − 2) × 180 degrees for n sides." },
      { q: "Do the angles change if the polygon is irregular?", a: "The total stays the same — (n−2) × 180° holds for any simple polygon. Only the individual corners differ, since they no longer split the total evenly." },
    ],
  },

  "interpolation-calculator": {
    description: `A weather app reports 70°F at noon and 80°F at 4 p.m. — your guess of 75°F for 2 p.m. is interpolation, the art of filling gaps between known points. In plain words, linear interpolation assumes the value changes at a steady rate between two measurements and picks the point proportionally along the way: halfway between the times gives halfway between the values. Scientists estimating a sensor reading between calibrations, appraisers valuing a house between two comparable sales, and animators smoothing motion between keyframes all interpolate. It is the honest middle ground between guessing and measuring — exact only when the true behavior really is a straight line.

This calculator performs the midpoint interpolation. Type the first known value into the Variable A box, say 70, and the second known value into the Variable B box, say 80. Read the interpolated middle value from the Result box: 75. For points that are not centered, weight the average by position yourself — but when the gap is symmetric, the simple midpoint is exactly right.`,
    howToSteps: [
      "Identify your two known values bracketing the gap you want to fill.",
      "Type the first known value into the Variable A box — for example, 70.",
      "Type the second known value into the Variable B box — for example, 80.",
      "Read the Result box for the interpolated midpoint value, 75 here.",
      "Use the midpoint only when your target sits halfway between the two known points.",
      "Remember interpolation assumes a straight line — it fails where the real behavior curves sharply.",
    ],
    faqs: [
      { q: "What is interpolation in simple terms?", a: "Estimating a value between two known measurements by assuming steady change between them. Halfway between 70 and 80 gives 75." },
      { q: "When is interpolation actually used?", a: "Sensor readings between calibrations, house appraisals between comparable sales, animation between keyframes, and filling gaps in any dataset." },
      { q: "What is the difference between interpolation and extrapolation?", a: "Interpolation fills gaps between known points; extrapolation extends past the last known point. Interpolation is far safer — extrapolation bets the trend never bends." },
      { q: "What is interplation?", a: "You mean interpolation: estimating values between known data points, like guessing 75°F halfway between a 70°F and an 80°F reading." },
      { q: "When does linear interpolation go wrong?", a: "When the true behavior curves between the known points. Widely spaced measurements over curvy data — like stock prices — make straight-line guesses unreliable." },
    ],
  },

  "inverse-cotangent-calculator": {
    description: `A surveyor knows a 20-foot flagpole casts a 20-foot shadow — the sun's angle is the inverse question of the cotangent's answer. In plain words, the cotangent of an angle is the adjacent side divided by the opposite side, and the inverse cotangent (arccot) runs that relationship backward: hand it the ratio, and it returns the angle. A ratio of 1 means the sides are equal, so arccot(1) = 45°. Surveyors measuring heights from shadows, navigators converting bearings, and engineers checking ramp slopes all ask this backward question. Every trig function has an inverse because real problems usually hand you the sides and demand the angle.

This calculator evaluates the inverse cotangent. Type the cotangent ratio (adjacent ÷ opposite) into the Variable A box, say 1 — Variable B accepts a second ratio for comparison. Read the angle from the Result box: 45 degrees for an input of 1. Try 0 to see 90 degrees, the limit where the adjacent side vanishes, and confirm your calculator is in degree mode before trusting any trig answer.`,
    howToSteps: [
      "Compute your ratio as adjacent side divided by opposite side.",
      "Type that ratio into the Variable A box — for example, 1.",
      "Read the Result box for the angle, 45 degrees here.",
      "Try 0 to confirm the 90-degree limit, where the adjacent side vanishes.",
      "Type a second ratio into Variable B to compare two angles side by side.",
      "Confirm degree mode before trusting the answer — radian mode gives a very different-looking result.",
    ],
    faqs: [
      { q: "What is the inverse cotangent in plain words?", a: "The arccot function reverses the cotangent: give it a ratio of adjacent ÷ opposite, and it returns the angle. Arccot(1) = 45°." },
      { q: "When would I use arccot instead of arctan?", a: "When your known ratio is adjacent-over-opposite rather than opposite-over-adjacent — shadow problems and certain slope calculations hand you cotangent ratios directly." },
      { q: "What is the range of arccot?", a: "Between 0° and 180° (exclusive). Unlike arctan, arccot never returns negative angles — it sweeps the full upper half of the circle." },
      { q: "What is inverse cotangant?", a: "You mean cotangent: arccot is the inverse function that turns a cotangent ratio back into its angle." },
      { q: "How is arccot related to arctan?", a: "They are complementary: arccot(x) = arctan(1/x) for positive x. A 45° angle has both a tangent and a cotangent of 1." },
    ],
  },

  "inverse-function-calculator": {
    description: `A recipe says a turkey needs 20 minutes per pound plus 30 minutes resting — given a 130-minute roast, how big was the bird? That backward question is an inverse function. In plain words, if f turns x into y, the inverse function turns y back into x: undo every operation in reverse order. For f(x) = 2x + 3, subtract 3 first, then divide by 2, giving the inverse f⁻¹(y) = (y − 3)/2. Feed it 11 and out comes 4 — the original input, recovered. Currency converters run both directions, thermostats invert temperature formulas, and decoders undo every encoder. Whenever a process must run backward reliably, the inverse function is doing the work.

This calculator evaluates a simple linear inverse. Type the output value y into the Variable A box, say 11, and the coefficient into the Variable B box, say 2 for f(x) = 2x + 3. Read the recovered input from the Result box: 4. Check your work by running it forward — 2(4) + 3 = 11 confirms the round trip.`,
    howToSteps: [
      "Write your function in the form y = mx + b on paper first.",
      "Type the output value y into the Variable A box — for example, 11.",
      "Type the coefficient m into the Variable B box — for example, 2 for y = 2x + 3.",
      "Read the Result box for the recovered input x, 4 in this case.",
      "Verify the round trip: run the forward function on 4 and confirm you get 11 back.",
      "Remember that not every function has an inverse — it must pass the horizontal line test.",
    ],
    faqs: [
      { q: "How do you find an inverse function?", a: "Swap x and y, then solve for y — undoing each operation in reverse order. For y = 2x + 3: x = 2y + 3 becomes y = (x − 3)/2." },
      { q: "Where are inverse functions used?", a: "Currency conversion both ways, decoding encrypted messages, converting Celsius back to Fahrenheit, and undoing any reversible calculation." },
      { q: "Does every function have an inverse?", a: "No — only one-to-one functions qualify. A parabola fails because two different x values share one y, so the backward trip is ambiguous." },
      { q: "What is an inverse funtion?", a: "You mean function: it reverses a function's mapping, turning outputs back into the inputs that produced them." },
      { q: "How do you check an inverse is correct?", a: "Compose them: f(f⁻¹(x)) must equal x. Running 4 forward through 2x+3 gives 11, and running 11 backward gives 4." },
    ],
  },

  "inverse-tangent-calculator": {
    description: `A wheelchair ramp rises 1 foot over 12 feet of run — building codes care about the angle, and the arctangent is how you find it. In plain words, the tangent of an angle is the opposite side divided by the adjacent side, and the inverse tangent (arctan) reverses it: hand it the ratio, get the angle. A ratio of 1 gives the beloved 45°, while 1/12 gives about 4.76° — comfortably under the ADA's accessibility limit. Carpenters checking roof pitch, photographers computing field of view, and hikers reading grade percentages all ask this backward question. Slopes are ratios; angles are what humans understand.

This calculator evaluates the inverse tangent. Type the tangent ratio (opposite ÷ adjacent) into the Variable A box, say 1 — Variable B accepts a second ratio for comparison. Read the angle from the Result box: 45 degrees for an input of 1. Try 0.0833 to see the wheelchair ramp's gentle 4.76°, and confirm degree mode before trusting any trig answer.`,
    howToSteps: [
      "Compute your ratio as opposite side divided by adjacent side.",
      "Type that ratio into the Variable A box — for example, 1.",
      "Read the Result box for the angle, 45 degrees here.",
      "Try 0.0833 to see a 1-in-12 ramp's angle of about 4.76 degrees.",
      "Type a second ratio into Variable B to compare two slopes side by side.",
      "Confirm degree mode — radian mode returns about 0.785 for an input of 1 instead of 45.",
    ],
    faqs: [
      { q: "What does arctan actually compute?", a: "It reverses the tangent: give it opposite ÷ adjacent, and it returns the angle. Arctan(1) = 45°." },
      { q: "When do you need an inverse tangent?", a: "Checking roof pitch, ramp angles, camera field of view, and navigation bearings — anywhere a slope must become an angle." },
      { q: "What angles can arctan return?", a: "Between −90° and 90°. It covers the right half of the circle, so it cannot distinguish angles pointing left — that needs the two-argument atan2." },
      { q: "What is inverse tangant?", a: "You mean tangent: arctan is the inverse function that converts a tangent ratio back into its angle." },
      { q: "How steep is a 1-in-12 wheelchair ramp in degrees?", a: "About 4.76°. Compute arctan(1/12) — well under the ADA maximum slope, which is exactly why the standard exists." },
    ],
  },

  "isosceles-triangle-calculator": {
    description: `The classic yield sign is an upside-down triangle with two equal sides — traffic engineers chose the shape so drivers recognize it even caked in snow. In plain words, an isosceles triangle has two equal sides and two equal base angles, and its area is still half the base times the height: A = ½ × b × h. A yield-sign-style triangle with a 10-inch base and a 6-inch height covers 30 square inches. The symmetry is the whole point: the altitude from the apex splits the base exactly in half, which is why roof trusses and bridge supports love this shape. Sailboat sails, arrowheads, and pennant flags all borrow the same efficient geometry.

This calculator evaluates the area from base and height. Type the base length into the Variable A box, say 10, and the perpendicular height into the Variable B box, say 6. Read the area from the Result box: 30. Double-check that your height is measured perpendicular to the base — on a skinny triangle the altitude can be surprisingly short.`,
    howToSteps: [
      "Type the triangle's base length into the Variable A box — for example, 10.",
      "Type the perpendicular height into the Variable B box — for example, 6.",
      "Read the Result box for the area, 30 square inches here.",
      "Confirm the height is perpendicular to the base, not measured along a slanted side.",
      "Use the symmetry: the altitude splits the base into two equal halves for checking your sketch.",
    ],
    faqs: [
      { q: "What is the area formula for an isosceles triangle?", a: "Half the base times the height: A = ½ × b × h. A 10-inch base with a 6-inch height covers 30 square inches." },
      { q: "What makes a triangle isosceles?", a: "Two equal sides — and as a consequence, the two angles opposite those sides are equal too. The symmetry axis runs from the apex to the base's midpoint." },
      { q: "Where do isosceles triangles appear?", a: "Yield signs, roof trusses, bridge supports, sailboat sails, pennant flags, and arrowheads all use the shape's symmetry." },
      { q: "What is an isoceles triangle?", a: "You mean isosceles: a triangle with two equal sides and two equal base angles." },
      { q: "Can you find the area from just the two equal sides?", a: "Not directly — you also need the base or the height. Split the triangle down its symmetry axis and use the Pythagorean theorem to find the missing height." },
    ],
  },

  "isotope-calculator": {
    description: `The charred wood of an ancient campfire still whispers its age — every living thing carries a radioactive clock that starts ticking at death. In plain words, isotopes are atoms of the same element with different neutron counts, and unstable ones decay at a fixed rate described by the half-life: the time for half the atoms to transform. Carbon-14's half-life is 5,730 years, so a sample holding half the carbon-14 of fresh wood died about 5,730 years ago. Archaeologists date artifacts, doctors trace thyroid function with iodine-131, and nuclear engineers manage reactor fuel — all by reading these clocks. The math is exponential: each half-life multiplies the remainder by one half, relentlessly.

This calculator applies the half-life decay. Type the number of half-lives elapsed into the Variable A box, say 1 — Variable B accepts a second value for comparison. Read the remaining fraction from the Result box: 0.5 after one half-life. Try 2 to see a quarter remain, and remember that the fraction never truly reaches zero, it just keeps halving.`,
    howToSteps: [
      "Look up your isotope's half-life — 5,730 years for carbon-14.",
      "Divide the sample's age by the half-life to get elapsed half-lives.",
      "Type that count into the Variable A box — for example, 1.",
      "Read the Result box for the remaining fraction, 0.5 here.",
      "Type a second count into Variable B to compare two samples side by side.",
      "Remember the remainder halves each period but never truly reaches zero.",
    ],
    faqs: [
      { q: "What is a half-life in simple terms?", a: "The time for half of a radioactive sample's atoms to decay. After one half-life 50% remains, after two 25%, after three 12.5% — halving every period." },
      { q: "How does carbon dating actually work?", a: "Living things absorb carbon-14 at a steady rate; at death the intake stops and the carbon-14 decays with a 5,730-year half-life. The remaining fraction reveals the age." },
      { q: "Where are isotopes used besides archaeology?", a: "Medical imaging and cancer treatment, smoke detectors, nuclear power, and tracing chemical reactions all rely on specific isotopes." },
      { q: "What is an isatope?", a: "You mean isotope: atoms of the same element with different numbers of neutrons, like carbon-12 and carbon-14." },
      { q: "Can a sample ever fully decay?", a: "Mathematically, no — each half-life only halves the remainder. Practically, after enough half-lives the leftover atoms are too few to detect." },
    ],
  },

  "laplace-transform-calculator": {
    description: `Electrical engineers analyze circuits without solving a single differential equation — a clever transform converts the calculus into algebra first. In plain words, the Laplace transform takes a function of time and produces a function of a new variable s, turning derivatives into multiplications by s. The classic pair is L{e^(−at)} = 1/(s + a): an exponential decaying at rate 2 becomes the simple fraction 1/(s + 2). Solve the algebra problem, transform back, and the circuit's behavior appears. Control engineers designing cruise control and signal engineers building filters live in the s-domain because differential equations become equations a high schooler could solve.

This calculator evaluates the exponential transform pair. Type the decay rate a into the Variable A box, say 2 — Variable B accepts a second rate for comparison. Read the transform from the Result box, expressed as 1/(s + 2) here. Try 0 to confirm that a constant transforms to 1/s, the simplest pair of all.`,
    howToSteps: [
      "Identify the decay rate a in your exponential e^(−at) — for example, 2.",
      "Type that rate into the Variable A box.",
      "Read the Result box for the transform, 1/(s + 2) here.",
      "Type a second rate into Variable B to compare two decays side by side.",
      "Try 0 to confirm the constant-function pair: L{1} = 1/s.",
      "Remember the transform lives in the s-domain — convert back to time when the algebra is done.",
    ],
    faqs: [
      { q: "What does the Laplace transform do?", a: "It converts functions of time into functions of s, turning differential equations into algebraic ones. Solve the algebra, then transform back to get the time behavior." },
      { q: "What is the Laplace transform of e^(−at)?", a: "1/(s + a). An exponential decaying at rate 2 becomes the simple fraction 1/(s + 2)." },
      { q: "Who actually uses Laplace transforms?", a: "Electrical and control engineers analyzing circuits, cruise control, filters, and any system described by differential equations." },
      { q: "What is a laplace transfrom?", a: "You mean transform: the mathematical tool that converts time-domain calculus problems into s-domain algebra problems." },
      { q: "Why not just solve the differential equation directly?", a: "You can, but the transform replaces calculus with algebra — derivatives become multiplications by s — which is faster and less error-prone for complex systems." },
    ],
  },

  "law-of-sines-calculator": {
    description: `A surveyor who cannot cross a river can still measure its width — sight two angles from the near bank and let the sines do the crossing. In plain words, the law of sines says each side of a triangle divided by the sine of its opposite angle gives the same number: a/sin(A) = b/sin(B) = c/sin(C). Know side a = 5 opposite a 30° angle, and need the side opposite 45°? Compute b = 5 × sin(45°) / sin(30°) ≈ 7.07. Navigators triangulating positions, astronomers measuring stellar distances, and engineers sizing trusses all lean on this proportion. It is triangulation made algebraic — one known side-angle pair unlocks the rest.

This calculator evaluates the proportion. Type the known side length into the Variable A box, say 5, and the ratio of sines into the Variable B box — sin(45°)/sin(30°) ≈ 1.4142. Read the unknown side from the Result box: about 7.07. Keep degrees and radians consistent across every sine, or the proportion silently breaks.`,
    howToSteps: [
      "Measure one side and its opposite angle, plus the angle opposite your unknown side.",
      "Type the known side length into the Variable A box — for example, 5.",
      "Type the sine ratio sin(unknown angle)/sin(known angle) into the Variable B box — for example, 1.4142.",
      "Read the Result box for the unknown side, about 7.07 here.",
      "Keep degrees and radians consistent across every sine you compute.",
      "Watch for the ambiguous case: some angle-side combos admit two valid triangles.",
    ],
    faqs: [
      { q: "What is the law of sines formula?", a: "a/sin(A) = b/sin(B) = c/sin(C). Each side divided by the sine of its opposite angle gives the same value for all three pairs." },
      { q: "When do you use the law of sines?", a: "Triangulation in surveying and navigation, astronomy distance estimates, and any triangle problem giving you an angle-side opposite pair plus one more angle." },
      { q: "What is the ambiguous case?", a: "Given two sides and a non-included angle, two different triangles can fit the data. Always check whether a second valid solution exists before reporting one answer." },
      { q: "What is the law of sines calculater?", a: "You mean calculator: it applies the proportion a/sin(A) = b/sin(B) to find unknown sides or angles from the ones you know." },
      { q: "Law of sines or law of cosines — which one?", a: "Use sines when you have an angle-side opposite pair. Use cosines when you know two sides and the included angle, or all three sides." },
    ],
  },

  "lcm-calculator": {
    description: `Two blinking billboards flash every 12 and 18 seconds — every 36 seconds they flash together, and advertisers pay extra for that synchronized moment. In plain words, the least common multiple is the smallest number both numbers divide into evenly. List multiples of 12 (12, 24, 36, ...) and of 18 (18, 36, ...) and the first match is 36. Event planners syncing repeating schedules, bakers matching pack sizes, and programmers aligning loop cycles all hunt this number. It is the GCD's partner: where the greatest common divisor splits things into the largest equal shares, the LCM finds when cycles coincide — and this calculator reports both.

Type the first number into the Number A box, say 12, and the second into the Number B box, say 18. Read the LCM (a, b) box for the least common multiple: 36. Check the GCD (a, b) box beside it: 6. Try 48 and 36 to see an LCM of 144 with a GCD of 12.`,
    howToSteps: [
      "Type your first whole number into the Number A box — for example, 12.",
      "Type your second whole number into the Number B box — for example, 18.",
      "Read the LCM (a, b) box for the least common multiple, 36 in this case.",
      "Check the GCD (a, b) box beside it — 6 here, the largest shared divisor.",
      "Try 48 and 36 to see an LCM of 144 with a GCD of 12.",
      "Use the LCM to sync repeating cycles and the GCD to split into equal shares.",
    ],
    faqs: [
      { q: "How do you find the LCM of two numbers?", a: "List multiples of each and take the first match, or divide their product by their GCD: LCM = (a × b) / GCD. For 12 and 18: 216/6 = 36." },
      { q: "When is the LCM useful?", a: "Syncing repeating schedules, adding fractions with unlike denominators, matching pack sizes, and aligning any repeating cycles." },
      { q: "What is the relationship between LCM and GCD?", a: "LCM × GCD = a × b, always. For 12 and 18: 36 × 6 = 216 = 12 × 18. Knowing one gives you the other." },
      { q: "What is the least common mulitple?", a: "You mean multiple: the smallest number both numbers divide into evenly — 36 for 12 and 18." },
      { q: "How do you find the LCM for adding fractions?", a: "The LCM of the denominators is the least common denominator. For 1/12 + 1/18, use 36: convert to 3/36 + 2/36 = 5/36." },
    ],
  },
};
