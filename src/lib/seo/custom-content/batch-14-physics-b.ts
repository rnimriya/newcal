import type { SEOContent } from "@/lib/seo/content";

export const BATCH_14: Record<string, Partial<SEOContent>> = {
  "newton-raphson-calculator": {
    description: `Guessing the answer and then fixing the guess sounds sloppy, but it is the fastest way to solve equations that algebra cannot touch. The Newton-Raphson method starts with a rough guess x₀ and refines it with one rule: the next guess equals the current guess minus the function value divided by the derivative, written x_{n+1} = x_n − f(x_n)/f′(x_n). Each round typically doubles the number of correct digits, which is why engineers trust it for problems like finding where a pipeline flow equation balances or at what depth water settles in an irrigation channel.

The method needs two numbers per round: how far off the function is, and how steeply it is changing. This calculator handles the multiplication at the heart of the update — type the function value f(x_n) into Variable A and the reciprocal of the derivative 1/f′(x_n) into Variable B, and the Result box shows the correction to subtract from your guess. A civil engineer in Houston solving a Manning flow equation, for instance, evaluates f and f′ at a guessed depth, multiplies them here, subtracts the Result, and repeats until the correction shrinks to nothing. Start near the true answer and the method converges in a handful of rounds; start far away and it can wander, so sketching the function first is always worth the minute.`,
    howToSteps: [
      "Write your equation in the form f(x) = 0 and pick a starting guess x₀ near the expected root.",
      "Evaluate the function at your guess and type that value into the Variable A box.",
      "Evaluate the derivative at the same guess, take its reciprocal, and type it into the Variable B box.",
      "Read the correction in the Result box and subtract it from your guess to get the next estimate.",
      "Repeat with the new guess until the Result stops changing — that stable value is your root.",
      "If the corrections grow instead of shrinking, choose a closer starting guess and run the rounds again.",
    ],
    faqs: [
      { q: "What is the Newton-Raphson formula in plain words?", a: "New guess = old guess − f(old guess) / f′(old guess). You divide how far off the function is by how steeply it is changing, then subtract that correction from your guess." },
      { q: "When should I use Newton-Raphson instead of algebra?", a: "Use it when the equation cannot be rearranged into a closed form — pipe-flow formulas, beam deflections, and circuit bias points all qualify. It converges in a few rounds once you start near the root." },
      { q: "What units do the inputs use?", a: "None — the method works on pure numbers. Keep x, f(x), and f′(x) in consistent units so the correction comes out in the same units as x." },
      { q: "What is the Newton Raphson method calculator used for?", a: "Finding roots of equations in engineering and physics — channel depths, diode bias points, and orbital transfers are classic cases. It is also searched as the Newton-Raphson iteration calculator." },
      { q: "Why did my Newton-Raphson calculation diverge?", a: "The usual cause is a starting guess too far from the root, or a derivative near zero at the guess. Move the starting point closer to the expected answer and try again." },
    ],
  },

  "nuclear-calculator": {
    description: `A paperclip's worth of mass, fully converted, could power a city — that is the promise Einstein packed into five symbols. When atomic nuclei split or fuse, a tiny bit of mass goes missing, and that missing mass becomes energy according to E = Δm × c²: energy equals the mass defect multiplied by the speed of light squared. Because c² is an enormous number (about 8.988 × 10^16), even a few billionths of a kilogram releases a staggering burst of energy, which is exactly why a uranium pellet the size of a fingertip can replace a ton of coal.

This calculator performs that central multiplication. Type the mass defect in kilograms into Variable A — for one fission of uranium-235 it is roughly 3.2 × 10^-28 kg — and type the value of c² (8.988 × 10^16) into Variable B. The Result box gives the energy in joules; for that single uranium atom it works out to about 3.2 × 10^-11 joules, or 200 MeV, the number printed in every nuclear physics textbook. Scale the mass defect up to grams of fuel and the Result explains why the Palo Verde plant in Arizona runs on truckloads of uranium instead of trainloads of coal.`,
    howToSteps: [
      "Find or compute the mass defect Δm for your reaction, in kilograms, and type it into the Variable A box.",
      "Type 8.988e16 (the value of c² in m²/s²) into the Variable B box.",
      "Read the energy in joules from the Result box.",
      "Divide the Result by 1.602e-13 to convert joules into MeV, the unit nuclear physicists actually quote.",
      "Multiply by the number of atoms reacting to scale from one nucleus to a fuel pellet or a reactor core.",
      "Remember the mass defect is the mass lost, not the total mass — use the before-minus-after difference.",
    ],
    faqs: [
      { q: "What is the E = mc² formula in plain words?", a: "Energy equals mass times the speed of light squared. Multiply the mass that disappears in a nuclear reaction by c² (8.988 × 10^16) to get the energy released in joules." },
      { q: "What units do I use for a nuclear energy calculation?", a: "Kilograms for the mass defect and meters per second for the speed of light give joules out. Physicists usually convert the answer to electronvolts (eV) or MeV afterward." },
      { q: "When would I use a nuclear energy calculator?", a: "Estimating the energy of a fission or fusion reaction, checking textbook binding-energy problems, or grasping why nuclear fuel is millions of times more energy-dense than coal or gas." },
      { q: "What is an e=mc2 calculator?", a: "It is the same tool under a plainer name — a calculator that multiplies a mass by the speed of light squared. Searchers also type 'mass energy equivalence calculator' for the same thing." },
      { q: "How much energy is in one gram of mass?", a: "One gram (0.001 kg) times c² gives about 9 × 10^13 joules — roughly the energy of a small nuclear weapon, which shows why the mass defects involved are so tiny." },
    ],
  },

  "ohms-law-calculator": {
    description: `Every blown fuse in America has the same backstory: too much current met too little resistance. Ohm's Law is the three-way relationship that governs every circuit you will ever touch — voltage equals current times resistance (V = I × R). Rearrange it and you get the other two forms for free: current equals voltage divided by resistance (I = V / R), and resistance equals voltage divided by current (R = V / I). One equation, three tools, and the reason electricians can size a wire or pick a fuse without guessing.

Picture a homeowner in Ohio wiring a 12-volt landscape lighting run. The transformer delivers 12 volts, the fixtures draw 2 amps total, and the question is what the wiring must handle: 12 / 2 = 6 ohms of total load, with the current safely under the wire's rating. This calculator runs any of the three forms — choose Voltage, Current, or Resistance in the Calculate dropdown, fill in the two values you know, and the Computed Value box delivers the third. It is the same math behind sizing a resistor for an LED, checking why a space heater trips a 15-amp breaker, and confirming a car battery can crank a starter motor on a cold Minnesota morning.`,
    howToSteps: [
      "Open the Calculate dropdown and pick what you want to find: Voltage (V = I * R), Current (I = V / R), or Resistance (R = V / I).",
      "Type your first known value — for example, 12 in the Voltage (V) box for a car battery circuit.",
      "Type your second known value — for example, 2 in the Current (I) box for the load's draw.",
      "Read the answer instantly in the Computed Value box — here, 6 ohms in the Resistance (R) field's place.",
      "Flip the Calculate mode to check your work from the other direction.",
      "Keep units consistent: volts with amps gives ohms, never mix millivolts with amps without converting.",
    ],
    faqs: [
      { q: "What is Ohm's Law in plain words?", a: "Voltage equals current times resistance (V = I × R). Push twice the voltage through the same resistance and you get twice the current; double the resistance and the current halves." },
      { q: "What units does Ohm's Law use?", a: "Volts for voltage, amps for current, and ohms for resistance. Milliamps are common in electronics — 500 mA is 0.5 A, so convert before multiplying." },
      { q: "When do I need an Ohm's Law calculator?", a: "Sizing resistors for LEDs, checking whether a circuit will trip a breaker, picking fuse ratings, and troubleshooting why a 12V accessory keeps burning out in a car." },
      { q: "What is the Ohm's Law triangle?", a: "A memory aid: cover V to get I × R, cover I to get V / R, cover R to get V / I. The calculator does the same job without the triangle." },
      { q: "What is an oms law calculator?", a: "Just a common misspelling of Ohm's Law calculator — the tool on this page. It computes voltage, current, or resistance from the other two values." },
    ],
  },

  "optical-calculator": {
    description: `Your eyes do geometry every waking second, and a camera lens just does it with glass. Magnification is the simplest idea in optics: it is the image height divided by the object height (m = h_i / h_o), so the image height equals the magnification times the object height. A 5× magnifier turns a 2 mm watch gear into a 10 mm image on your retina; a 0.5× reducing lens shrinks a document to half size on the sensor. Flip the magnification past 1 and things grow; drop it below 1 and they shrink.

This calculator performs that defining multiplication. Type the magnification into Variable A — for example, 8 for a pair of 8×42 birding binoculars — and the real object height into Variable B, then read the image height in the Result box. A wildlife photographer in Oregon deciding between a 100 mm macro lens and a 180 mm one can compare how large a dragonfly's wing will land on the sensor before spending a dollar. Keep both inputs in the same length units and the Result comes out in those units, ready to compare against a sensor's dimensions or a print size.`,
    howToSteps: [
      "Find your lens or instrument's magnification and type it into the Variable A box — for example, 8 for 8× binoculars.",
      "Measure or look up the real object height in your preferred units and type it into the Variable B box.",
      "Read the image height from the Result box — 8 × 0.5 inches gives a 4-inch image, for example.",
      "Use the same length units in both boxes so the Result needs no conversion.",
      "For a reducing setup like a scanner lens, enter a magnification below 1, such as 0.5.",
      "Compare the Result against your sensor or screen size to see whether the subject fills the frame.",
    ],
    faqs: [
      { q: "What is the magnification formula in plain words?", a: "Magnification equals image height divided by object height (m = h_i / h_o). Multiply the magnification by the object height to get the image height, which is the multiplication this calculator performs." },
      { q: "What units do optical calculations use?", a: "Any length unit works — millimeters, inches, whatever you like — as long as both inputs share it. The result comes out in that same unit." },
      { q: "When would I use an optical magnification calculator?", a: "Choosing camera macro lenses, sizing subjects for binoculars or microscopes, and checking whether a projected image will fill a screen." },
      { q: "What does 10x magnification actually mean?", a: "It means the image appears ten times the object's real size — a 2 mm insect looks 20 mm through the lens. Enter 10 in Variable A to work with that factor." },
      { q: "Is a higher magnification always better?", a: "No. Higher magnification narrows the field of view and magnifies shake, which is why birders often prefer 8× over 10× for handheld use." },
    ],
  },

  "orbital-calculator": {
    description: `The International Space Station circles Earth every 92 minutes because Johannes Kepler said it must, four centuries before it existed. Kepler's third law ties an orbit's period to its size: the period squared equals a constant factor times the orbital radius cubed, written T² = (4π²/GM) × r³, where M is the planet's mass. Double the radius and the period grows by nearly three times — the reason geostationary satellites sit exactly 22,236 miles up, circling once per day in lockstep with Earth's spin.

This calculator handles the multiplication at the core of Kepler's law. Type the orbital factor 4π²/(GM) — for Earth it is about 9.91 × 10^-14 s²/m³ — into Variable A, and the orbital radius cubed into Variable B; the Result box gives the period squared, and one square root later you have the orbital period. A ham-radio operator in Texas planning a contact through a cubesat can check its pass timing, and a student can verify why the Moon takes 27.3 days to circle us. Use meters for the radius and seconds fall out; use miles and the period still works if the factor matches.`,
    howToSteps: [
      "Look up the factor 4π²/(GM) for the body you are orbiting — about 9.91e-14 s²/m³ for Earth — and type it into Variable A.",
      "Compute your orbital radius cubed (radius × radius × radius) in matching units and type it into Variable B.",
      "Read the period squared from the Result box.",
      "Take the square root of the Result to get the orbital period in seconds.",
      "Divide by 3,600 to see the period in hours — about 1.54 hours for the space station's orbit.",
      "Measure the radius from the planet's center, not its surface — forgetting Earth's 3,963-mile radius is the classic error.",
    ],
    faqs: [
      { q: "What is Kepler's third law in plain words?", a: "The square of an orbit's period is proportional to the cube of its radius: T² = (4π²/GM) × r³. Bigger orbits take disproportionately longer — doubling the radius multiplies the period by about 2.83." },
      { q: "What units work for orbital calculations?", a: "Meters for radius with the SI factor give seconds out. Miles work too if you convert the factor consistently — just never mix the two." },
      { q: "When would I use an orbital period calculator?", a: "Predicting satellite passes, checking homework on planetary orbits, sizing a cubesat mission, or understanding why GPS satellites circle twice a day." },
      { q: "What is the orbital velocity formula?", a: "Circular orbital velocity is v = √(GM/r) — faster close in, slower far out. The space station flies near 17,500 mph; the Moon ambles at about 2,300 mph." },
      { q: "Why do geostationary satellites sit so high?", a: "Kepler's law demands a 24-hour period at a radius of about 26,200 miles from Earth's center. Any lower and they would lap the planet's rotation." },
    ],
  },

  "oscillator-calculator": {
    description: `A pickup truck bouncing after a speed bump and a grandfather clock ticking in the hallway obey the same law. A mass on a spring oscillates with a period of T = 2π√(m/k): two pi times the square root of the mass divided by the spring stiffness. Heavier masses swing slower, stiffer springs snap back faster, and the 2π out front is the signature of circular motion hiding inside every vibration. The frequency is simply one over the period — count the swings per second and you have it.

This calculator computes the m/k ratio sitting under the square root. Type the mass in kilograms into Variable A and the reciprocal of the spring constant 1/k into Variable B; the Result box shows m/k, and one square root times 2π gives the period in seconds. A suspension tuner in Detroit testing a 400 kg corner weight against a 30,000 N/m spring, for instance, gets m/k = 0.0133 here, then T ≈ 0.72 seconds per bounce. The same steps size the pendulum of a clock, the vibration of a guitar string's fundamental mode, and the bounce of a pogo stick.`,
    howToSteps: [
      "Weigh or look up your oscillating mass in kilograms and type it into the Variable A box.",
      "Take the reciprocal of your spring constant (1/k) and type it into the Variable B box.",
      "Read the m/k ratio from the Result box.",
      "Take the square root of the Result and multiply by 2π (about 6.2832) to get the period in seconds.",
      "Take one divided by the period if you want the frequency in hertz instead.",
      "Keep mass in kilograms and k in newtons per meter so the period comes out in seconds.",
    ],
    faqs: [
      { q: "What is the spring oscillation formula in plain words?", a: "The period T equals 2π times the square root of mass divided by spring stiffness: T = 2π√(m/k). More mass slows the swing; a stiffer spring speeds it up." },
      { q: "What units do oscillator calculations use?", a: "Kilograms for mass and newtons per meter for stiffness give seconds out. Pounds and pounds-per-inch work if you convert consistently." },
      { q: "When would I use an oscillator calculator?", a: "Tuning car suspensions, designing clock pendulums, analyzing machine vibration, and sizing the springs in anything from pogo sticks to seismometers." },
      { q: "What is the difference between period and frequency?", a: "Period is seconds per swing; frequency is swings per second. They are reciprocals: a 0.5-second period means a 2 Hz frequency." },
      { q: "Does a bigger swing change the period?", a: "For an ideal spring, no — the period is independent of amplitude. Real springs and pendulums drift slightly at large swings, which is why clock pendulums swing narrow." },
    ],
  },

  "permeability-calculator": {
    description: `Pour water through sand and it drains; pour it through clay and it puddles — the difference is permeability, the rock's willingness to let fluid pass. Darcy's law captures it: permeability k equals the flow rate times viscosity times length, divided by area times the pressure difference, written k = (q × μ × L) / (A × ΔP). A high k means an easy path, which is why oil companies pay geologists to map it before drilling a single well.

This calculator runs Darcy's law directly. Type the Flow Rate (q, m³/s) from your pump test, the Fluid Viscosity (μ, Pa·s) — about 0.001 for water at room temperature — the Length of Medium (L, m) of your sample, the Cross-sectional Area (A, m²), and the Pressure Difference (ΔP, Pa) across it. The Permeability (k, m²) box returns the answer; sandstone typically lands near 10^-12 m², while tight shale can be a million times lower. A water-well driller in Arizona uses the same math to predict whether a new well will yield gallons per minute or disappointment, and environmental engineers use it to track how fast a spill migrates through soil.`,
    howToSteps: [
      "Type your measured flow rate in cubic meters per second into the Flow Rate (q, m³/s) box.",
      "Type the fluid's viscosity into the Fluid Viscosity (μ, Pa·s) box — 0.001 for water near room temperature.",
      "Type the sample's length in meters into the Length of Medium (L, m) box.",
      "Type the cross-section in square meters into the Cross-sectional Area (A, m²) box.",
      "Type the pressure drop across the sample into the Pressure Difference (ΔP, Pa) box.",
      "Read the rock's permeability from the Permeability (k, m²) box and compare it against typical sandstone or shale values.",
    ],
    faqs: [
      { q: "What is Darcy's law in plain words?", a: "Flow through rock equals permeability times area times pressure drop, divided by viscosity times length. Rearranged, permeability k = (q × μ × L) / (A × ΔP) — the formula this calculator uses." },
      { q: "What units does permeability use?", a: "Square meters in SI, though the oil field still quotes darcys — one darcy is about 9.87 × 10^-13 m². Keep every input in SI units and k comes out in m²." },
      { q: "When do engineers need permeability?", a: "Siting water wells, predicting oil reservoir output, designing landfill liners, and modeling how contaminants spread through groundwater." },
      { q: "What is the difference between permeability and porosity?", a: "Porosity is how much empty space a rock holds; permeability is how well those spaces connect. Pumice is porous but a poor transmitter — high porosity, low permeability." },
      { q: "Why does viscosity appear in Darcy's law?", a: "Thicker fluids crawl slower through the same rock, so the measured flow must be corrected by viscosity to isolate the rock's own permeability." },
    ],
  },

  "photon-calculator": {
    description: `Every color you have ever seen arrived one photon at a time, each carrying an exact packet of energy. Planck's rule is beautifully simple: a photon's energy equals Planck's constant times its frequency, E = h × f. Double the frequency and you double the energy — which is why ultraviolet light sunburns you while a radio tower bathing you in far more total power does nothing at all. Red photons carry about 1.8 eV each; a dental X-ray photon carries thousands.

This calculator performs that multiplication. Type Planck's constant, 6.626 × 10^-34 joule-seconds, into Variable A and the light's frequency in hertz into Variable B; the Result box gives the energy of a single photon in joules. A fiber-optic engineer in Virginia working at the standard 193 THz telecom wavelength, for instance, finds each photon carries about 1.28 × 10^-19 joules, then divides the laser's wattage by that number to count photons per second. Divide the Result by 1.602 × 10^-19 to speak in electronvolts, the unit every optics datasheet uses.`,
    howToSteps: [
      "Type 6.626e-34 (Planck's constant in joule-seconds) into the Variable A box.",
      "Type your light's frequency in hertz into the Variable B box — 5.66e14 for green light near 530 nm.",
      "Read the single-photon energy in joules from the Result box.",
      "Divide the Result by 1.602e-19 to convert joules into electronvolts.",
      "Divide your source's power in watts by the Result to get photons emitted per second.",
      "If you know wavelength instead of frequency, divide 3e8 by the wavelength in meters first to get f.",
    ],
    faqs: [
      { q: "What is the photon energy formula in plain words?", a: "Energy equals Planck's constant times frequency: E = h × f. Higher frequency means more energy per photon — blue beats red, ultraviolet beats blue." },
      { q: "What units do photon calculations use?", a: "Hertz for frequency with Planck's constant in joule-seconds gives joules out. Divide by 1.602 × 10^-19 to convert to electronvolts." },
      { q: "When would I use a photon energy calculator?", a: "Sizing lasers and LEDs, checking whether photons can trigger a solar cell or a chemical reaction, and working through spectroscopy homework." },
      { q: "What is the energy of a visible light photon?", a: "Roughly 1.8 to 3.1 eV across the visible band — red at the low end, violet at the high end. This calculator gives the exact figure for any frequency you enter." },
      { q: "Why can't radio waves give me a sunburn?", a: "Each radio photon carries roughly a billionth the energy of a UV photon — far too little to break molecular bonds, no matter how many arrive." },
    ],
  },

  "piezoelectric-calculator": {
    description: `Squeeze certain crystals and they spit out electricity — press a barbecue igniter and you have felt it in your thumb. The piezoelectric effect turns force into charge with one tidy rule: the charge generated equals the material's piezoelectric coefficient times the applied force, Q = d × F. Quartz, the crystal in every cheap wristwatch, uses the reverse trick too — feed it voltage and it vibrates at an exact frequency, which is why your watch keeps time.

This calculator runs the charge equation. Type the material's piezoelectric coefficient d₃₃ in coulombs per newton into Variable A — about 2.3 × 10^-12 for quartz, up to 500 × 10^-12 for PZT ceramic — and the applied force in newtons into Variable B. The Result box shows the generated charge in coulombs. A pickup winder in Nashville pressing 10 newtons into a PZT disc, for example, expects about 5 nanocoulombs per squeeze, which the guitar amplifier then turns into sound. Engineers sizing knock sensors, ultrasound probes, and electronic drum triggers all start from this same multiplication.`,
    howToSteps: [
      "Look up your material's piezoelectric coefficient d₃₃ in coulombs per newton and type it into the Variable A box.",
      "Type the mechanical force in newtons into the Variable B box — 10 N is roughly a firm thumb press.",
      "Read the generated electric charge in coulombs from the Result box.",
      "Divide the Result by the crystal's capacitance if you need the voltage the charge will develop.",
      "Stack or wire multiple elements and multiply the Result by the element count for the total charge.",
      "Check whether your datasheet quotes d₃₁ or d₃₃ — the direction of squeeze changes which coefficient applies.",
    ],
    faqs: [
      { q: "What is the piezoelectric formula in plain words?", a: "Generated charge equals the piezoelectric coefficient times the applied force: Q = d × F. A bigger squeeze or a livelier crystal material both raise the charge." },
      { q: "What units do piezoelectric calculations use?", a: "Coulombs per newton for the coefficient and newtons for force give coulombs out. Datasheets often quote picocoulombs per newton — multiply by 10^-12 first." },
      { q: "When would I use a piezoelectric calculator?", a: "Designing guitar pickups, pressure sensors, ultrasound transducers, inkjet nozzles, and vibration energy harvesters." },
      { q: "What is the reverse piezoelectric effect?", a: "Apply voltage to the crystal and it changes shape instead of the other way around — the trick behind quartz watch crystals, ultrasonic cleaners, and precision positioning stages." },
      { q: "Which material has the strongest piezoelectric effect?", a: "PZT (lead zirconate titanate) ceramic, with d₃₃ near 500 pC/N — over two hundred times livelier than natural quartz at about 2.3 pC/N." },
    ],
  },

  "plasma-calculator": {
    description: `Ninety-nine percent of the visible universe is plasma — stars, lightning bolts, and the neon sign outside the diner. A plasma is a gas so hot its electrons tear free, and those free electrons slosh back and forth at one natural rhythm called the plasma frequency: ω_p equals the square root of the electron density times a constant factor, ω_p = √(n × e²/(ε₀m_e)). Push the plasma slower than this frequency and it reflects the wave, which is why shortwave radio bounces off the ionosphere and reaches the other side of the planet.

This calculator computes the quantity under the square root. Type the electron density in electrons per cubic meter into Variable A and the constant e²/(ε₀m_e) — about 3.18 × 10^9 in SI units — into Variable B; the Result box gives ω_p², and one square root yields the plasma frequency in radians per second. A neon sign maker in Las Vegas works with densities near 10^16 per cubic meter, while a fusion researcher at a national lab deals with 10^20 and beyond. Divide the square-rooted Result by 2π if you want the ordinary frequency in hertz.`,
    howToSteps: [
      "Estimate or measure your electron density in electrons per cubic meter and type it into the Variable A box.",
      "Type 3.18e9 (the constant e²/(ε₀m_e) in SI units) into the Variable B box.",
      "Read ω_p² from the Result box.",
      "Take the square root of the Result to get the plasma frequency in radians per second.",
      "Divide by 2π (about 6.2832) to convert radians per second into hertz.",
      "Compare against your signal frequency — waves below the plasma frequency reflect instead of passing through.",
    ],
    faqs: [
      { q: "What is the plasma frequency formula in plain words?", a: "The plasma frequency equals the square root of electron density times a fixed constant: ω_p = √(n × e²/(ε₀m_e)). Denser plasmas oscillate faster." },
      { q: "What units does the plasma frequency use?", a: "Electrons per cubic meter for density gives radians per second out. Divide by 2π to get hertz, the unit radio engineers quote." },
      { q: "When would I use a plasma frequency calculator?", a: "Designing neon signs and plasma TVs, predicting ionosphere radio reflection, and analyzing fusion experiments and semiconductor plasmas." },
      { q: "Why does shortwave radio bounce off the ionosphere?", a: "The ionosphere's plasma frequency sits above shortwave frequencies, so the waves reflect instead of escaping to space — nature's own satellite relay." },
      { q: "What is plasma, exactly?", a: "A gas heated or electrified until electrons break free of their atoms, leaving a soup of charged particles that conducts electricity and responds to magnetic fields." },
    ],
  },

  "polarization-calculator": {
    description: `Fishermen see through water glare and photographers darken skies with the same trick: polarized light. Ordinary light vibrates in every direction at once, but a polarizing filter passes only the waves aligned with its axis. Malus's law says exactly how much gets through: the transmitted intensity equals the incoming intensity times the square of the cosine of the angle between them, I = I₀ × cos²θ. Align the filter with the light and nearly everything passes; rotate it to 90 degrees and the scene goes black.

This calculator runs Malus's law. Type the incoming light intensity into Variable A — use any consistent unit, like lux or milliwatts — and the value of cos²θ for your filter angle into Variable B. The Result box shows the transmitted intensity. A landscape photographer in Colorado rotating a polarizer to 30 degrees off the glare axis, for instance, enters cos²(30°) = 0.75 and learns three-quarters of the light survives. LCD screens, 3D movie glasses, and beekeepers' veil-free observation hives all lean on this same cosine-squared rule.`,
    howToSteps: [
      "Measure or estimate your incoming light intensity and type it into the Variable A box.",
      "Compute cos² of the angle between the light's polarization and your filter axis, and type it into the Variable B box.",
      "Read the transmitted intensity from the Result box.",
      "At 0 degrees enter 1, at 45 degrees enter 0.5, and at 90 degrees enter 0 for the cosine-squared factor.",
      "Stack two filters by feeding the first Result back in as the next Variable A.",
      "Keep the intensity units identical on the way in and out — lux in gives lux out.",
    ],
    faqs: [
      { q: "What is Malus's law in plain words?", a: "Transmitted intensity equals incoming intensity times cos²θ: I = I₀ × cos²θ. Aligned filters pass everything; crossed filters at 90 degrees block it all." },
      { q: "What units does polarization use?", a: "Any intensity unit works — lux, watts per square meter, or a simple 0-to-100 scale — as long as the input and output share it. The angle must be in degrees before you take the cosine." },
      { q: "When would I use a polarization calculator?", a: "Predicting camera filter effects, designing LCD panels and 3D glasses, cutting glare in photography, and analyzing polarized sunglasses." },
      { q: "Why do polarized sunglasses cut road glare?", a: "Reflected glare is mostly horizontally polarized, and the lenses pass only vertical light — Malus's law at work near the 90-degree crossing." },
      { q: "Can two crossed polarizers ever pass light?", a: "Not alone — but slip a third polarizer at 45 degrees between them and some light gets through, a famous quantum-mechanics demonstration." },
    ],
  },

  "potential-energy-calculator": {
    description: `A wrecking ball does no work until it is lifted — height is stored energy waiting for permission. Gravitational potential energy is mass times gravity times height: PE = m × g × h. Lift twice the weight, or lift it twice as high, and you store twice the energy; let it fall and every bit of it converts to motion, which is why pile drivers and roller coasters are the same machine wearing different clothes.

This calculator runs the formula with your numbers. Type the Mass (m) — in slugs if you are working imperial, kilograms for SI — the Height (h) of the lift, and the Gravitational Acceleration (g), which is 32.2 ft/s² on Earth in imperial units or 9.81 m/s² metric. The Potential Energy (PE) box returns the stored energy: foot-pounds in the imperial case, joules in SI. A roofer in Arizona hauling a 50-pound bundle of shingles up a 20-foot ladder, for example, invests 1,000 foot-pounds per trip — energy his legs supply and gravity gladly holds onto until something slips.`,
    howToSteps: [
      "Type the object's mass into the Mass (m) box — use slugs for imperial or kilograms for metric.",
      "Type the vertical lift height into the Height (h) box — feet for imperial, meters for metric.",
      "Check the Gravitational Acceleration (g) box: 32.2 ft/s² imperial or 9.81 m/s² metric on Earth.",
      "Read the stored energy from the Potential Energy (PE) box — foot-pounds or joules depending on your units.",
      "Measure height vertically, not along a ramp — only the vertical rise counts.",
      "Double any one input and watch the Result double: the relationship is perfectly linear.",
    ],
    faqs: [
      { q: "What is the potential energy formula in plain words?", a: "Potential energy equals mass times gravity times height: PE = m × g × h. In imperial units it is simpler still — weight in pounds times height in feet gives foot-pounds directly." },
      { q: "What units does potential energy use?", a: "Joules in SI (kilograms, meters, 9.81 m/s²) and foot-pounds in imperial (slugs, feet, 32.2 ft/s²). A 1-pound weight lifted 1 foot stores 1 foot-pound." },
      { q: "When do I need a potential energy calculator?", a: "Sizing hoists and cranes, estimating roller-coaster speeds, checking dam power output, and figuring the energy cost of lifting anything heavy." },
      { q: "Does the path up matter, or only the height?", a: "Only the vertical height matters. A winding staircase and a straight ladder to the same floor store identical energy — gravity is gloriously indifferent to your route." },
      { q: "Where does the energy go when the object falls?", a: "It converts to kinetic energy — motion. Halfway down, half the potential energy has become speed; at the bottom, essentially all of it has." },
    ],
  },

  "power-physics-calculator": {
    description: `Two people can carry the same piano up the same stairs, but the one who finishes in half the time is twice as powerful. Power is the rate of doing work: power equals work divided by time, P = W / t. The work can be identical — the piano weighs the same, the staircase is the same height — yet the faster mover commands more power, which is why sprinters, tow trucks, and table saws are all rated by it rather than by total work.

This calculator divides your numbers directly. Type the total work into the Work Done (W) box and the elapsed time into the Time (t) box; the Power (P) box returns the rate. A pickup in Colorado winching a 4,000-pound boat up a 30-foot ramp does 120,000 foot-pounds of work — finish in 60 seconds and the Power box shows 2,000 ft-lb/s, which divides by 550 to give about 3.6 horsepower. James Watt defined the horsepower as 550 foot-pounds per second so he could sell steam engines to mine owners, and the unit stuck: your car's rating, your microwave's wattage, and your air conditioner's tons all trace back to this one division.`,
    howToSteps: [
      "Figure your total work — force times distance — and type it into the Work Done (W) box.",
      "Type the time the work took, in seconds, into the Time (t) box.",
      "Read the power from the Power (P) box — watts in SI, foot-pounds per second in imperial.",
      "Divide an imperial result by 550 to convert foot-pounds per second into horsepower.",
      "Halve the time in the Time (t) box and watch the power double: speed is everything here.",
      "Use seconds for time — minutes or hours will shrink the answer by 60 or 3,600 times.",
    ],
    faqs: [
      { q: "What is the power formula in plain words?", a: "Power equals work divided by time: P = W / t. Do the same job twice as fast and you need twice the power." },
      { q: "What units does power use?", a: "Watts in SI (joules per second) and foot-pounds per second in imperial. One horsepower is 550 ft-lb/s, or about 746 watts." },
      { q: "When do I need a physics power calculator?", a: "Sizing motors and engines, comparing winches, estimating workout intensity, and checking whether a generator can start your well pump." },
      { q: "What is the difference between power and energy?", a: "Energy is the total work done; power is how fast you do it. A battery stores energy (watt-hours) and delivers it at some power (watts)." },
      { q: "How many watts are in a horsepower?", a: "About 746. A 2-horsepower shop motor therefore draws roughly 1,500 watts — before efficiency losses push it higher." },
    ],
  },

  "power-rule-calculator": {
    description: `Calculus students memorize dozens of derivative rules, but the power rule does most of the heavy lifting alone. It says the derivative of xⁿ is n times x to the (n−1): d/dx[xⁿ] = n × xⁿ⁻¹. The derivative of x³ is 3x², the derivative of x² is 2x, and the derivative of x itself is 1 — the exponent drops down front and shrinks by one, every single time. Velocity is the derivative of position and acceleration the derivative of velocity, so this one rule unlocks most of first-semester physics.

This calculator performs the rule's multiplication. Type the exponent n into Variable A and the value of xⁿ⁻¹ — x raised to one less than the exponent — into Variable B; the Result box gives the derivative. An engineering sophomore at UT Austin differentiating 4x³, for instance, enters 3 in Variable A and the value of x² in Variable B, then multiplies the Result by 4 for the final 12x². It also runs backward in spirit: seeing n × xⁿ⁻¹ should immediately suggest the original xⁿ, the recognition that makes integration click.`,
    howToSteps: [
      "Identify the exponent n in your xⁿ term and type it into the Variable A box.",
      "Compute x raised to the (n−1) power and type that value into the Variable B box.",
      "Read the derivative n × xⁿ⁻¹ from the Result box.",
      "Multiply the Result by any constant coefficient sitting in front of xⁿ.",
      "For a polynomial, repeat for each term — the derivative of a sum is the sum of the derivatives.",
      "Remember the special cases: the derivative of x is 1, and the derivative of a constant is 0.",
    ],
    faqs: [
      { q: "What is the power rule in plain words?", a: "Bring the exponent down in front and subtract one from it: the derivative of xⁿ is n × xⁿ⁻¹. So x⁴ becomes 4x³." },
      { q: "Does the power rule work for negative exponents?", a: "Yes. The derivative of x⁻² is −2x⁻³ — the same bring-down-and-subtract-one pattern, signs included." },
      { q: "When would I use a power rule calculator?", a: "Differentiating polynomials in calculus homework, finding velocity from a position function, and locating maxima and minima of curves." },
      { q: "What is the derivative of x³?", a: "3x² — bring the 3 down front, reduce the exponent to 2. Enter 3 in Variable A and x² in Variable B to verify any value of x." },
      { q: "What is the power rule for derivatives vs. integrals?", a: "They mirror each other: differentiation drops the exponent by one, integration raises it by one and divides. Master one direction and the other feels familiar." },
    ],
  },

  "pressure-physics-calculator": {
    description: `A 120-pound woman in stilettos dents a wood floor more than a 3,000-pound elephant in sneakers — pressure is force divided by area, P = F / A, and the tiny heel wins by concentrating its load. Spread a force wide and the pressure drops; focus it on a pinpoint and the pressure skyrockets, which is why snowshoes keep you afloat, knives cut, and thumbtacks pierce with a gentle push.

This calculator does the division. Type your force into the Applied Force (F) box — in pounds for imperial — and the contact area into the Area (A) box in square inches; the Pressure (P) box answers in psi. A driver in Michigan checking tires, for example, wants about 35 psi: that is 35 pounds pressing on every square inch of the tire's inner wall. The same math sizes hydraulic jacks — a 2-inch-diameter piston at 3,000 psi lifts over 9,400 pounds — and explains why a pressure washer's narrow nozzle can strip paint while a garden hose just wets it.`,
    howToSteps: [
      "Type the total force in pounds into the Applied Force (F) box.",
      "Type the contact area in square inches into the Area (A) box.",
      "Read the pressure in psi from the Pressure (P) box.",
      "For tire checks, compare the Result against the placard on the driver's door jamb, not the tire's sidewall maximum.",
      "Shrink the Area (A) value and watch the pressure climb — concentration is the whole game.",
      "Convert to other units after: multiply psi by 6.895 for kilopascals.",
    ],
    faqs: [
      { q: "What is the pressure formula in plain words?", a: "Pressure equals force divided by area: P = F / A. The same push over half the area makes twice the pressure." },
      { q: "What units does pressure use?", a: "Psi (pounds per square inch) dominates in the US — tires, hydraulics, water systems. Science uses pascals; weather uses inches of mercury or millibars." },
      { q: "When do I need a pressure calculator?", a: "Checking tire inflation, sizing hydraulic cylinders, specifying pumps, and understanding anything from scuba regulators to espresso machines." },
      { q: "What is normal car tire pressure?", a: "Usually 30–35 psi for sedans — check the sticker inside the driver's door, which beats any generic number." },
      { q: "Why does a sharp knife cut better?", a: "Its edge concentrates force onto a microscopic area, so the pressure at the contact line is enormous even with a light push." },
    ],
  },

  "projectile-motion": {
    description: `Every touchdown pass is a physics problem solved by instinct — launch angle, release speed, and gravity negotiating the rest. A projectile's flight splits cleanly in two: horizontal motion coasts at constant speed while vertical motion rises and falls under gravity. Three numbers describe the whole arc — the Horizontal Range R = v₀²·sin(2θ)/g, the Maximum Height H = v₀²·sin²θ/g·(1/2), and the Total Time of Flight t = 2·v₀·sinθ/g — and 45 degrees gives the longest throw on flat ground because sin(2θ) peaks there.

This calculator takes your launch and returns the arc. Type the release speed into the Launch Velocity (v0) box — a strong NFL throw leaves the hand near 60 mph, about 88 ft/s — the angle above horizontal into the Launch Angle (θ) box, and leave the Gravitational Acceleration (g) box at Earth's 32.2 ft/s². The three result boxes report the Horizontal Range (R), the Maximum Height (H), and the Total Time of Flight (t). Fireworks crews planning a Fourth of July shell, outfielders judging a fly ball, and golfers choosing a club all live inside these three equations.`,
    howToSteps: [
      "Type your launch speed in feet per second into the Launch Velocity (v0) box.",
      "Type the launch angle in degrees above horizontal into the Launch Angle (θ) box.",
      "Leave the Gravitational Acceleration (g) box at 32.2 ft/s² unless you are aiming on another planet.",
      "Read how far it flies in the Horizontal Range (R) box.",
      "Read the peak of the arc in the Maximum Height (H) box.",
      "Read the hang time in the Total Time of Flight (t) box, then try 45 degrees to see the range max out.",
    ],
    faqs: [
      { q: "What is the projectile range formula in plain words?", a: "Range equals velocity squared times sin(2θ), divided by gravity: R = v₀²·sin(2θ)/g. On flat ground, 45 degrees flies farthest." },
      { q: "What units does projectile motion use?", a: "Feet per second and feet in the US, with g = 32.2 ft/s²; meters per second with g = 9.81 m/s² in metric. Keep one system throughout." },
      { q: "When would I use a projectile motion calculator?", a: "Coaching throwing sports, planning fireworks displays, aiming water cannons or sprinklers, and checking physics homework." },
      { q: "Why does 45 degrees give maximum range?", a: "Because sin(2θ) peaks at 1 when θ = 45°. Steeper wastes speed on height; shallower wastes it on a flat, short hop." },
      { q: "Does air resistance change the answer?", a: "Yes — real projectiles fall short of the vacuum formulas, especially light, fast ones like golf balls. These equations assume no air drag." },
    ],
  },

  "quantum-calculator": {
    description: `Heisenberg proved you cannot know everything — pin down a particle's position and its momentum blurs, sharpen the momentum and the position smears. The uncertainty principle draws the line: the position uncertainty times the momentum uncertainty must be at least ħ/2, written Δx × Δp ≥ ħ/2, where ħ is about 5.27 × 10^-35 joule-seconds. This is not a measurement problem to engineer away; it is woven into nature, and it is why electrons never sit still inside atoms.

This calculator evaluates the left side of that inequality. Type your position uncertainty in meters into Variable A and the momentum uncertainty in kilogram-meters per second into Variable B; the Result box shows their product. Compare it against 5.27 × 10^-35 — if the Result is smaller, the pair of uncertainties is physically impossible and one of them must grow. A semiconductor engineer in Oregon modeling an electron confined to a 1-nanometer transistor gate, for instance, finds the momentum must blur by at least 5 × 10^-26 kg·m/s. It is the same trade-off behind the energy-time form that lets particles briefly borrow energy from the vacuum.`,
    howToSteps: [
      "Estimate your position uncertainty Δx in meters and type it into the Variable A box.",
      "Estimate your momentum uncertainty Δp in kg·m/s and type it into the Variable B box.",
      "Read the product Δx × Δp from the Result box.",
      "Compare the Result against 5.27e-35 — nature forbids anything smaller.",
      "If the Result falls short, increase one uncertainty until the product clears the limit.",
      "Shrink the position uncertainty and watch the required momentum blur grow: confinement costs momentum.",
    ],
    faqs: [
      { q: "What is the Heisenberg uncertainty principle in plain words?", a: "Position uncertainty times momentum uncertainty can never drop below ħ/2: Δx × Δp ≥ 5.27 × 10^-35 J·s. Sharpen one measurement and the other necessarily blurs." },
      { q: "What units does the uncertainty principle use?", a: "Meters for position and kg·m/s for momentum give joule-seconds out — the unit of ħ, Planck's reduced constant." },
      { q: "When would I use a quantum uncertainty calculator?", a: "Checking whether a measurement scheme is physically possible, sizing quantum dots and transistors, and working through modern physics homework." },
      { q: "Is the uncertainty principle about bad instruments?", a: "No — it is fundamental. Even a perfect instrument faces the limit, because particles genuinely do not possess exact positions and momenta simultaneously." },
      { q: "What is the energy-time uncertainty relation?", a: "The sibling rule: ΔE × Δt ≥ ħ/2. Short-lived particles have fuzzy energies, which is why some exist only fleetingly yet measurably." },
    ],
  },

  "radiation-calculator": {
    description: `Step back from a campfire and the heat fades fast; step back from a radiation source and the dose fades the same way. For steady exposure the accounting is simple: total dose equals the dose rate multiplied by the time spent, D = rate × t. A dental X-ray delivers its half-millirem in a fraction of a second, while the same dose rate stretched over hours — say, a long flight at altitude — accumulates into something worth tracking. Distance is your other lever, since dose rate itself falls with the square of the distance from the source.

This calculator does the accumulation. Type the dose rate into Variable A — millirem per hour is the everyday US unit — and the exposure time in hours into Variable B; the Result box gives the total dose in millirem. A homeowner in Pennsylvania running a 48-hour radon test at 4 pCi/L, for instance, converts the reading to a dose rate, multiplies by the hours, and compares the Result against the EPA's action guidance. The same multiplication schedules radiology technicians' rotations, plans nuclear plant maintenance shifts, and puts a number on the extra cosmic dose of a cross-country flight.`,
    howToSteps: [
      "Find your dose rate in millirem per hour and type it into the Variable A box.",
      "Type the exposure duration in hours into the Variable B box.",
      "Read the total accumulated dose in millirem from the Result box.",
      "Convert minutes to hours first — 30 minutes is 0.5, not 30.",
      "Double the distance from a point source and quarter the Variable A rate before multiplying: the inverse-square law.",
      "Compare the Result against familiar benchmarks: ~0.5 mrem per dental X-ray, ~300 mrem yearly background in the US.",
    ],
    faqs: [
      { q: "What is the radiation dose formula in plain words?", a: "Total dose equals dose rate times exposure time: D = rate × t. Twice the time at the same rate means twice the dose." },
      { q: "What units does radiation dose use?", a: "The rem (and millirem) in the US; the sievert internationally — 1 sievert equals 100 rem. Dose rate is dose per hour." },
      { q: "When would I use a radiation dose calculator?", a: "Estimating radon exposure, planning radiology workloads, evaluating frequent-flyer cosmic dose, and checking nuclear workplace shift limits." },
      { q: "How much radiation is a dental X-ray?", a: "About 0.5 millirem — roughly a day of natural background. A cross-country flight gives you several times more." },
      { q: "What is the inverse-square law for radiation?", a: "Dose rate drops with the square of distance: double your distance from a point source and the rate falls to one-quarter." },
    ],
  },

  "radioactive-calculator": {
    description: `A banana is radioactive, your smoke detector is radioactive — the difference is only the half-life. Radioactive decay follows one elegant rule: after each half-life, half of what remains is gone, so the amount left equals the starting amount times one-half raised to the number of half-lives elapsed, N = N₀ × (1/2)^(t/T). Ten half-lives leave about a thousandth; twenty leave about a millionth. The atoms do not age or slow down — each nucleus simply rolls the same dice, forever.

This calculator applies the surviving fraction. Type the starting quantity into Variable A — atoms, grams, or becquerels, any unit works — and the remaining fraction (1/2)^(t/T) for your elapsed time into Variable B; the Result box shows what is left. A nuclear-medicine tech in Houston drawing a technetium-99m dose, for instance, enters the 6-hour half-life fraction for the hours until injection and reads the usable activity straight off. Carbon dating runs the same equation backward: measure what remains, and the fraction reveals how many half-lives — 5,730 years each for carbon-14 — have passed.`,
    howToSteps: [
      "Type your starting amount — grams, atoms, or activity — into the Variable A box.",
      "Compute the surviving fraction (1/2)^(elapsed time ÷ half-life) and type it into the Variable B box.",
      "Read the remaining quantity from the Result box.",
      "For one half-life enter 0.5 in Variable B; for two, 0.25; for three, 0.125.",
      "Keep the elapsed time and half-life in the same units before forming the fraction.",
      "Run it backward for dating: divide a measured remainder by the start to find how many half-lives passed.",
    ],
    faqs: [
      { q: "What is the radioactive decay formula in plain words?", a: "Remaining amount equals starting amount times one-half raised to the number of half-lives: N = N₀ × (1/2)^(t/T). Each half-life halves whatever is left." },
      { q: "What units does radioactive decay use?", a: "Any quantity unit — grams, atoms, curies, becquerels — since the fraction is unitless. Time and half-life must share units: hours with hours, years with years." },
      { q: "When would I use a radioactive decay calculator?", a: "Dosing nuclear medicine, dating archaeological samples, planning nuclear waste storage, and checking smoke-detector americium over decades." },
      { q: "What is a half-life, exactly?", a: "The time for half the atoms in a sample to decay — 6 hours for technetium-99m, 5,730 years for carbon-14, 4.5 billion years for uranium-238." },
      { q: "Does the decay rate slow down as atoms run out?", a: "The total decays per second drop, but each surviving atom decays with the same probability as ever — the half-life never changes." },
    ],
  },

  "reflection-calculator": {
    description: `Billiards players are reflection physicists — angle in equals angle out, on every bank shot. But geometry is only half the story; the other half is how much light actually bounces. The reflected intensity equals the incoming intensity times the surface's reflectance, I_reflected = I₀ × R, where R runs from 0 (a black hole of a surface) to 1 (a perfect mirror). Fresh snow reflects about 0.9 of sunlight, which is why skiers sunburn under their chins; asphalt manages only about 0.1, which is why parking lots bake.

This calculator runs the intensity multiplication. Type the incoming light intensity into Variable A — lux, watts per square meter, or any consistent unit — and the surface's reflectance as a decimal into Variable B; the Result box gives the reflected intensity. An architect in Phoenix comparing window glass, for instance, enters the desert sun's 100,000 lux in Variable A and 0.08 for low-E glass in Variable B, reading 8,000 lux of glare off the facade. Photographers balancing bounce cards, highway engineers rating road paint, and greenhouse designers all multiply through this same equation.`,
    howToSteps: [
      "Measure or estimate the incoming light intensity and type it into the Variable A box.",
      "Look up the surface's reflectance as a decimal (0 to 1) and type it into the Variable B box.",
      "Read the reflected intensity from the Result box.",
      "Use 0.9 for snow, 0.8 for white paint, 0.1 for asphalt, and 0.04 for plain glass as starting reflectances.",
      "Keep the intensity units identical going in and out — lux in gives lux out.",
      "Remember the angle rule too: the reflection leaves at the same angle it arrived, measured from the surface normal.",
    ],
    faqs: [
      { q: "What is the reflection intensity formula in plain words?", a: "Reflected light equals incoming light times reflectance: I = I₀ × R. A surface reflecting 30% of the light has R = 0.3." },
      { q: "What units does reflection use?", a: "Any intensity unit — lux, foot-candles, W/m² — as long as input and output match. Reflectance itself is a unitless decimal between 0 and 1." },
      { q: "When would I use a reflection calculator?", a: "Sizing window glare, choosing road and runway paint, balancing photography lighting, and designing greenhouses and solar installations." },
      { q: "What is the law of reflection?", a: "The angle of incidence equals the angle of reflection, both measured from the perpendicular to the surface — the rule behind every mirror and bank shot." },
      { q: "Why is snow blinding but asphalt is not?", a: "Snow's reflectance near 0.9 bounces almost all sunlight back at you, while asphalt's 0.1 swallows most of it as heat." },
    ],
  },

  "refraction-calculator": {
    description: `A straw looks broken in a glass of water because light bends every time it changes speed. Snell's law governs the bend: n₁·sinθ₁ = n₂·sinθ₂, where n is each material's refractive index and θ is measured from the perpendicular. Light sprinting from air (n ≈ 1.00) into water (n ≈ 1.33) slows and swings toward the normal; going the other way past the critical angle, it cannot escape at all and reflects entirely — the trick behind fiber optics and sparkling diamonds alike.

This calculator solves for the unknown index. Rearranged, n₂ = n₁ × (sinθ₁/sinθ₂): type the known material's index into Variable A and the ratio sinθ₁/sinθ₂ for your measured angles into Variable B, and the Result box reports the mystery material's index. An optician in Florida matching a new lens polymer, for instance, shines a laser through a sample, measures the bend, and reads n straight off. Scuba divers see the law every dive — water's index magnifies everything by about a third — and highway engineers fight it when heat shimmer bends light over summer asphalt.`,
    howToSteps: [
      "Type the known material's refractive index into the Variable A box — 1.00 for air, 1.33 for water.",
      "Measure the incident and refracted angles from the surface normal, compute sinθ₁/sinθ₂, and type it into the Variable B box.",
      "Read the unknown material's refractive index from the Result box.",
      "Measure angles from the perpendicular (normal), not from the surface — the classic beginner error.",
      "Expect glass near 1.5, water at 1.33, and diamond at 2.42 as sanity checks.",
      "If sinθ₂ would exceed 1, you have passed the critical angle: total internal reflection takes over.",
    ],
    faqs: [
      { q: "What is Snell's law in plain words?", a: "n₁·sinθ₁ = n₂·sinθ₂ — the index times the sine of the angle stays constant across the boundary. Light bends toward the normal entering denser material." },
      { q: "What units does refraction use?", a: "Refractive index is unitless (1.00 for air, 1.33 for water); angles go in degrees before you take the sine. Both sines must use the same angle unit." },
      { q: "When would I use a refraction calculator?", a: "Identifying unknown glass or gemstones, designing lenses and prisms, troubleshooting fiber-optic coupling, and understanding mirages." },
      { q: "Why does a straw look bent in water?", a: "Light from the submerged straw bends away from the normal as it exits into air, so your brain projects it along a straight line that is not where the straw really is." },
      { q: "What is total internal reflection?", a: "Beyond the critical angle, light cannot leave the denser medium at all — it reflects perfectly inside, which is how fiber optics carry signals for miles." },
    ],
  },

  "relativity-calculator": {
    description: `Your phone's GPS would drift by miles per day if Einstein's relativity were not baked into the satellites. Special relativity says a moving clock ticks slower as seen by a stationary observer: the observed time equals the clock's own proper time multiplied by the Lorentz factor, Δt = Δt₀ × γ, where γ = 1/√(1 − v²/c²). At everyday speeds γ is essentially 1 and nothing looks strange; at 87% of light speed γ hits 2 and the moving clock runs at half rate.

This calculator applies the time-dilation multiplication. Type the proper time — the time measured by the moving clock itself — into Variable A, and the Lorentz factor γ for your velocity into Variable B; the Result box gives the dilated time seen by the stationary observer. GPS engineers live this daily: the satellites' clocks tick faster from weaker gravity and slower from orbital velocity, netting a 38-microsecond-per-day correction without which your position would wander. Particle physicists at Fermilab watch the same effect stretch a muon's 2.2-microsecond life long enough to reach their detectors.`,
    howToSteps: [
      "Type the moving clock's own elapsed time (proper time) into the Variable A box.",
      "Compute the Lorentz factor γ = 1/√(1 − v²/c²) for your speed and type it into the Variable B box.",
      "Read the time measured by the stationary observer from the Result box.",
      "At 0.5c use γ ≈ 1.155; at 0.87c, γ = 2; at 0.99c, γ ≈ 7.09.",
      "Keep both times in the same units — seconds with seconds, microseconds with microseconds.",
      "Remember the effect is symmetric: each observer sees the other's clock running slow.",
    ],
    faqs: [
      { q: "What is the time dilation formula in plain words?", a: "Observed time equals proper time times the Lorentz factor: Δt = Δt₀ × γ. The faster the clock moves past you, the slower it appears to tick." },
      { q: "What units does relativity use?", a: "Any time unit works as long as both times share it; velocity must be a fraction of c, the speed of light, when computing γ." },
      { q: "When does relativity actually matter?", a: "GPS satellites, particle accelerators, cosmic-ray muons reaching the ground, and any clock moving at a serious fraction of light speed." },
      { q: "What is the Lorentz factor?", a: "γ = 1/√(1 − v²/c²) — the multiplier by which time dilates, lengths contract, and masses effectively grow. It equals 1 at rest and explodes near light speed." },
      { q: "Why does GPS need relativity?", a: "Satellite clocks gain about 38 microseconds per day from combined relativistic effects. Uncorrected, that is miles of positioning error within a day." },
    ],
  },

  "resistance-calculator": {
    description: `Long extension cords make power tools sluggish for a reason you can calculate: wire has resistance. A conductor's resistance equals its material resistivity times its length divided by its cross-sectional area, R = ρ × (L/A). Double the length and you double the resistance; double the wire's thickness and you quarter it — which is why the fat cable feeding your house dwarfs the hair-thin wire in your earbuds.

This calculator runs the geometry half of that formula. Type the metal's resistivity ρ in ohm-meters into Variable A — copper is 1.68 × 10^-8, aluminum 2.82 × 10^-8 — and the length-over-area ratio L/A into Variable B, with length in meters and area in square meters; the Result box gives the resistance in ohms. An electrician in Texas running 150 feet of 12-gauge copper to a backyard shed, for instance, computes L/A from the wire tables, multiplies here, and checks the voltage drop stays under the 3% rule. Swap copper for aluminum in Variable A and the same run's resistance jumps by two-thirds — the reason aluminum feeders must be upsized.`,
    howToSteps: [
      "Look up your wire metal's resistivity in ohm-meters and type it into the Variable A box.",
      "Compute length divided by cross-sectional area in consistent units and type it into the Variable B box.",
      "Read the conductor's resistance in ohms from the Result box.",
      "Multiply the Result by your load current to get the voltage drop along the run.",
      "Keep the drop under 3% of the supply voltage for branch circuits — upsize the wire if it exceeds that.",
      "Remember temperature matters: hot copper runs about 20% more resistive than the room-temperature table value.",
    ],
    faqs: [
      { q: "What is the wire resistance formula in plain words?", a: "Resistance equals resistivity times length divided by area: R = ρ × (L/A). Longer or thinner wire means more resistance." },
      { q: "What units does wire resistance use?", a: "Ohm-meters for resistivity with meters and square meters give ohms out. US wire tables quote circular mils — convert before dividing." },
      { q: "When would I use a wire resistance calculator?", a: "Sizing long wire runs, checking voltage drop to sheds and barns, comparing copper vs. aluminum feeders, and winding coils and heaters." },
      { q: "Why does a long extension cord dim my saw?", a: "The cord's resistance steals voltage proportional to current — under heavy load the saw sees far less than 120 volts and bogs down." },
      { q: "Is thicker wire always better?", a: "Electrically yes, but it costs more and is harder to pull — which is why the NEC sizes wire to the load instead of defaulting to the fattest spool." },
    ],
  },

  "resistors-parallel": {
    description: `Wire two lanes of traffic side by side and cars flow faster — resistors in parallel work the same way. Each added branch gives current another path, so the total resistance always drops below the smallest single resistor. The rule: one over the total equals the sum of one over each resistor, 1/R = 1/R₁ + 1/R₂ (+ 1/R₃). Two identical resistors in parallel give exactly half of one alone; a 100-ohm and a 200-ohm in parallel give about 67 ohms, closer to the smaller of the two.

This calculator combines your resistors. Type each value in ohms into the Resistor 1 (R1) and Resistor 2 (R2) boxes, and add a third in the Resistor 3 (R3, optional) box if your circuit has one — leave it at zero for a two-resistor network. The Total Equivalent Resistance (Req) box returns the combined value. A car-audio installer in Florida paralleling two 4-ohm subwoofers, for instance, reads 2 ohms here and then checks the amplifier is rated stable at that load before turning it up. Home wiring uses the same idea: every appliance you plug in parallels another branch across the same 120 volts.`,
    howToSteps: [
      "Type your first resistor's value in ohms into the Resistor 1 (R1) box.",
      "Type your second resistor's value into the Resistor 2 (R2) box.",
      "If you have a third resistor, type it into the Resistor 3 (R3, optional) box; otherwise leave it at zero.",
      "Read the combined resistance from the Total Equivalent Resistance (Req) box.",
      "Sanity-check: the Result must be smaller than your smallest single resistor.",
      "For equal resistors, divide one value by the count — three 300-ohm resistors in parallel give 100 ohms.",
    ],
    faqs: [
      { q: "What is the parallel resistance formula in plain words?", a: "Add the reciprocals: 1/R = 1/R₁ + 1/R₂ + …, then take the reciprocal of the sum. More branches always mean less total resistance." },
      { q: "What units do resistor calculations use?", a: "Ohms throughout — or kilohms, as long as every resistor shares the unit. Mixing ohms and kilohms silently breaks the answer." },
      { q: "When do I need a parallel resistor calculator?", a: "Matching speakers to amplifiers, combining resistors to hit a nonstandard value, and understanding why adding appliances never dims the ones already on." },
      { q: "Can I parallel different resistor values?", a: "Yes — the formula handles any mix. Just know the smallest resistor hogs most of the current, so check its power rating." },
      { q: "Why does the total drop below the smallest resistor?", a: "Each new branch is an additional current path, so the combination always conducts better than any single path alone." },
    ],
  },

  "resistors-series": {
    description: `Old Christmas light strings had one fatal flaw: every bulb depended on all the others — that is series wiring. Resistors in series share a single path, so their resistances simply add: R = R₁ + R₂ + R₃. Current has no alternative route, which means the same current flows through every resistor and the voltages divide among them in proportion to their values. It is the simplest combination rule in electronics and the reason a string of ten 12-ohm bulbs across 120 volts gives each bulb its 12-volt share.

This calculator adds your chain. Type each resistor's value in ohms into the Resistor 1 (R1), Resistor 2 (R2), and Resistor 3 (R3, optional) boxes — leave R3 at zero for a two-resistor string. The Total Equivalent Resistance (Req) box returns the sum. A pedal builder in Austin stacking a 4.7k and a 10k resistor for a voltage divider, for instance, reads 14.7k here and then splits the 9-volt supply proportionally. LED hobbyists use the same addition to size the single current-limiting resistor that protects a whole series string from a 12-volt rail.`,
    howToSteps: [
      "Type your first resistor's value in ohms into the Resistor 1 (R1) box.",
      "Type your second resistor's value into the Resistor 2 (R2) box.",
      "If you have a third resistor, type it into the Resistor 3 (R3, optional) box; otherwise leave it at zero.",
      "Read the chain's total resistance from the Total Equivalent Resistance (Req) box.",
      "Sanity-check: the Result must be larger than your biggest single resistor.",
      "Divide the supply voltage by the Result to get the current flowing through every resistor in the chain.",
    ],
    faqs: [
      { q: "What is the series resistance formula in plain words?", a: "Just add them: R = R₁ + R₂ + R₃. Resistors in a single-file line always total more than any one of them." },
      { q: "What units do series resistor calculations use?", a: "Ohms — or kilohms, as long as every resistor shares the unit. A 4.7k resistor is 4,700 ohms, so convert before adding." },
      { q: "When do I need a series resistor calculator?", a: "Sizing LED current limiters, building voltage dividers, and adding up the total load of daisy-chained components." },
      { q: "What is the difference between series and parallel?", a: "Series adds resistances and shares one current; parallel drops the total below the smallest resistor and shares one voltage. This page covers series." },
      { q: "Why did old Christmas lights all go out together?", a: "One burned-out bulb broke the single series path, killing current to every bulb — modern strings wire bulbs in parallel groups to avoid exactly that." },
    ],
  },

  "shear-modulus-calculator": {
    description: `Twist a rubber eraser and it fights back — how hard it fights is the shear modulus. Shear is the sliding kind of deformation: push the top of a block sideways while the bottom stays put, and the shear modulus G is the shear stress divided by the shear strain, G = τ / γ. Steel's shear modulus sits near 79 GPa, aluminum near 26 GPa, and rubber down around 0.0006 GPa, which is why skyscrapers sway on steel and engine mounts isolate vibration with rubber.

This calculator divides your measurements. Type the applied shear stress in pascals into the Shear Stress (τ, Pa) box and the resulting shear strain — the deformation angle, a unitless decimal — into the Shear Strain (γ) box. The Shear Modulus (G, Pa) box returns the material's stiffness against sliding. A structural engineer in California checking a bridge bearing pad, for instance, enters the earthquake-induced stress and the pad's measured strain to confirm the catalog G value before trusting it under a freeway. Torsion bars, drive shafts, and bolts loaded sideways all answer to this same ratio.`,
    howToSteps: [
      "Type the shear stress in pascals into the Shear Stress (τ, Pa) box.",
      "Type the measured shear strain as a decimal into the Shear Strain (γ) box — 0.002 for 0.2% deformation.",
      "Read the material's shear modulus from the Shear Modulus (G, Pa) box.",
      "Compare the Result against known values: ~79 GPa for steel, ~26 GPa for aluminum.",
      "Keep stress in pascals — if your data is in psi, multiply by 6,895 first.",
      "Remember strain has no units, so the modulus comes out in the same pressure units as the stress.",
    ],
    faqs: [
      { q: "What is the shear modulus formula in plain words?", a: "Shear modulus equals shear stress divided by shear strain: G = τ / γ. It measures how strongly a material resists being twisted or sheared sideways." },
      { q: "What units does shear modulus use?", a: "Pascals (usually gigapascals) in SI; psi in the US — steel is about 11.5 million psi. Strain is unitless, so the modulus inherits the stress unit." },
      { q: "When do engineers need the shear modulus?", a: "Designing shafts, springs, and bolts under torsion, modeling earthquake building sway, and selecting vibration-isolation mounts." },
      { q: "What is the difference between shear modulus and Young's modulus?", a: "Young's modulus resists stretching; shear modulus resists sliding and twisting. Steel's shear modulus is roughly 40% of its Young's modulus." },
      { q: "Why is rubber's shear modulus so low?", a: "Its long polymer chains slide past each other easily — the same molecular looseness that makes rubber stretchy makes it shear-soft." },
    ],
  },

  "sound-calculator": {
    description: `Thunder arrives late because sound is slow — about a mile every five seconds. Every sound wave obeys one relation: wave speed equals frequency times wavelength, v = f × λ. High-pitched sounds pack more waves per second into the same speed, so their wavelengths shrink; a 20 Hz bass note stretches about 56 feet long in air, while a 20 kHz squeal at the edge of hearing squeezes into two-thirds of an inch.

This calculator runs that multiplication. Type the frequency in hertz into Variable A and the wavelength in your chosen length unit into Variable B; the Result box gives the wave speed in that unit per second. A sound engineer in Nashville checking a 440 Hz tuning note with its 2.55-foot wavelength, for instance, reads about 1,122 ft/s — confirming the textbook 1,125 ft/s speed of sound in room-temperature air. Flip it around for lightning: count the seconds between flash and thunder, multiply by roughly 1,100 ft/s here, and you have the storm's distance in feet. Concert-hall designers use the same equation to place reflections within the ear's 50-millisecond fusion window.`,
    howToSteps: [
      "Type the sound's frequency in hertz into the Variable A box — 440 for a tuning A.",
      "Type the wavelength in feet or meters into the Variable B box.",
      "Read the wave speed from the Result box — expect about 1,125 ft/s in room-temperature air.",
      "For lightning distance, enter 5 in Variable A (seconds) and 1,100 in Variable B (ft/s) to get feet per mile-of-delay.",
      "Keep frequency in hertz and wavelength in a length unit — mixing kilohertz with feet breaks the answer.",
      "Remember the speed rises with temperature: about 1,086 ft/s at freezing, 1,165 ft/s on a 100°F day.",
    ],
    faqs: [
      { q: "What is the sound wave formula in plain words?", a: "Wave speed equals frequency times wavelength: v = f × λ. Higher frequency at the same speed means a shorter wavelength." },
      { q: "How fast does sound travel?", a: "About 1,125 ft/s (343 m/s) in 68°F air — roughly a mile every 4.7 seconds. It moves faster in warm air and far faster in water or steel." },
      { q: "When would I use a sound calculator?", a: "Sizing concert-hall acoustics, estimating lightning distance, placing subwoofers, and checking ultrasound or sonar wavelengths." },
      { q: "What is the wavelength of middle C?", a: "Middle C is about 261.6 Hz, so its wavelength in air is roughly 4.3 feet — which is why cellos need big bodies to radiate it well." },
      { q: "Why does thunder rumble instead of crack at a distance?", a: "High frequencies die out faster in air, so distant lightning arrives stripped of its sharp crack — only the long, low rumble survives the trip." },
    ],
  },

  "specific-heat-capacity-calculator": {
    description: `A swimming pool barely warms on a scorching day while a car seat burns you — water's specific heat is the reason. Specific heat capacity is the energy needed to raise one unit of mass by one degree: c = Q / (m × ΔT), where Q is the heat added, m the mass, and ΔT the temperature change. Water's 4,184 J/(kg·K) is enormous — it is why coastal cities have mild climates and why your hot-water tank stores the day's energy so patiently.

This calculator isolates c from your measurements. Type the heat energy in joules into the Heat Added/Removed (Q, J) box — multiply BTUs by 1,055 to convert — the mass in kilograms into the Mass (m, kg) box, and the observed temperature change into the Temperature Change (ΔT, K or °C) box; a degree is a degree on either scale. The Specific Heat (c, J/(kg·K)) box returns the material's value. An HVAC tech in Phoenix testing a new thermal-storage tank, for instance, heats 200 kg of fluid, measures the rise, and checks the Result against water's 4,184 to see if the fancy fluid earns its price.`,
    howToSteps: [
      "Type the heat energy added or removed, in joules, into the Heat Added/Removed (Q, J) box.",
      "Type the sample's mass in kilograms into the Mass (m, kg) box.",
      "Type the measured temperature change in degrees into the Temperature Change (ΔT, K or °C) box.",
      "Read the material's specific heat from the Specific Heat (c, J/(kg·K)) box.",
      "Compare against water's 4,184 — metals land in the hundreds, oils near 2,000.",
      "Insulate the sample well: heat leaking to the room is the biggest source of error.",
    ],
    faqs: [
      { q: "What is the specific heat formula in plain words?", a: "Specific heat equals heat energy divided by mass times temperature change: c = Q / (m × ΔT). It is the energy cost of warming one kilogram by one degree." },
      { q: "What units does specific heat use?", a: "Joules per kilogram-kelvin in SI. In US practice, BTU per pound per °F is common — water is 1 BTU/(lb·°F) by the definition of the BTU." },
      { q: "When do I need a specific heat calculator?", a: "Sizing water heaters and thermal storage, designing cooling systems, cooking at scale, and identifying unknown materials in a lab." },
      { q: "Why does water have such a high specific heat?", a: "Its hydrogen bonds soak up energy before the molecules move faster — the same physics that steadies coastal climates and makes steam burns so nasty." },
      { q: "Is a temperature change in K the same as in °C?", a: "Yes — a one-degree change is identical on both scales. Only absolute temperatures need converting; differences do not." },
    ],
  },

  "specific-volume-calculator": {
    description: `A pound of feathers and a pound of lead weigh the same but fill wildly different boxes — specific volume is that box size per unit mass. It is simply volume divided by mass, v = V / m, the reciprocal of density. Steam engineers live by it: a kilogram of water occupies a liter as liquid but balloons to over 1,600 liters as steam at atmospheric pressure, and every turbine calculation starts from that expansion.

This calculator does the division. Type the total volume in cubic meters into the Volume (V, m³) box and the mass in kilograms into the Mass (m, kg) box; the Specific Volume (v, m³/kg) box returns the answer. A refrigeration tech in Texas charging a system, for instance, looks up the refrigerant's specific volume at the operating pressure, multiplies by the charge weight here in reverse, and knows exactly how much vapor the compressor will swallow per stroke. Scuba shops use the same ratio to state how many cubic feet of air a tank holds per pound of tank weight — the number that decides how long a dive lasts.`,
    howToSteps: [
      "Type the substance's total volume in cubic meters into the Volume (V, m³) box.",
      "Type its mass in kilograms into the Mass (m, kg) box.",
      "Read the specific volume from the Specific Volume (v, m³/kg) box.",
      "Take one divided by the Result to get the density — they are exact reciprocals.",
      "For US customary work, convert cubic feet per pound by multiplying the SI result by about 16.02.",
      "Use the specific volume at your actual temperature and pressure: gases change it dramatically.",
    ],
    faqs: [
      { q: "What is the specific volume formula in plain words?", a: "Specific volume equals volume divided by mass: v = V / m. It tells you how much space each kilogram of a substance occupies." },
      { q: "What units does specific volume use?", a: "Cubic meters per kilogram in SI; cubic feet per pound in US practice. Multiply m³/kg by 16.02 to get ft³/lb." },
      { q: "When do engineers use specific volume?", a: "Sizing steam turbines and boilers, charging refrigeration systems, specifying scuba tanks, and working steam tables." },
      { q: "What is the difference between specific volume and density?", a: "They are reciprocals: density is mass per volume, specific volume is volume per mass. Steam tables tabulate specific volume because it grows handily with expansion." },
      { q: "Why does steam's specific volume matter so much?", a: "Because the thousand-fold expansion from water to steam is what pushes turbine blades — the specific volume quantifies exactly how much push each kilogram delivers." },
    ],
  },

  "speed-distance-time-calculator": {
    description: `Every road-trip argument about arrival time is really a disagreement about one equation: distance equals speed times time, d = v × t. Hold 70 mph for 3 hours and you cover 210 miles; the same 210 miles at 60 mph costs you 3.5 hours. The triangle of three rearrangements — speed = distance/time, time = distance/speed — answers every are-we-there-yet question ever asked.

This calculator runs the core multiplication. Type your speed into Variable A — miles per hour for US highways — and the travel time in hours into Variable B; the Result box gives the distance in miles. A family driving from Dallas to El Paso, for instance, enters 75 in Variable A and 8.5 in Variable B and reads about 638 miles, close enough to plan fuel stops. Flip the thinking for the other forms: divide a known distance by the Result-style product to get time, or divide distance by time for speed. Pilots filing flight plans, truckers logging hours-of-service, and runners pacing marathons all compute inside this same triangle.`,
    howToSteps: [
      "Type your steady speed in miles per hour into the Variable A box.",
      "Type the travel time in hours into the Variable B box — 30 minutes is 0.5.",
      "Read the distance in miles from the Result box.",
      "To find time instead, divide your known distance by the speed and check it against a Result-style product.",
      "To find speed, divide the trip distance by the hours it took.",
      "Pad the time for stops: the equation assumes wheels turning the whole while.",
    ],
    faqs: [
      { q: "What is the speed distance time formula in plain words?", a: "Distance equals speed times time: d = v × t. Rearranged, speed = distance ÷ time and time = distance ÷ speed." },
      { q: "What units work for road-trip math?", a: "Miles per hour with hours gives miles — the natural US trio. Minutes must become fractions of an hour first: 45 minutes is 0.75 hours." },
      { q: "When would I use a speed distance time calculator?", a: "Planning road trips and fuel stops, estimating arrival times, pacing runs and rides, and filing pilot or trucker logs." },
      { q: "How do I calculate arrival time?", a: "Divide the remaining miles by your speed in mph to get hours, then add to the current time — and add a buffer for rest stops." },
      { q: "What is a good average speed for trip planning?", a: "About 5–10 mph under the speed limit on highways once stops are averaged in — 65 mph of progress on a 75-mph interstate is realistic." },
    ],
  },

  "static-calculator": {
    description: `A bookshelf bracket holds because two moments cancel perfectly — statics is the art of balanced forces. The workhorse quantity is the moment (torque): force times the perpendicular distance from the pivot, M = F × d. A 20-pound weight sitting 2 feet from a bracket's screws twists with 40 foot-pounds; move it to 4 feet and the twist doubles to 80. Every shelf, sign, and diving board is a negotiation between loads and the moments they create.

This calculator computes that twist. Type the force in pounds into Variable A and the perpendicular distance in feet into Variable B; the Result box gives the moment in foot-pounds. A DIYer in Ohio mounting a 60-inch TV on a swing arm, for instance, enters the TV's 50-pound weight in Variable A and the arm's 2-foot extension in Variable B, reading 100 ft-lb that the wall anchors must resist. Structural engineers then balance it: the sum of moments about any point must be zero, or the thing rotates. Brackets, cantilevers, and crane loads all get checked this way before anyone hangs weight on them.`,
    howToSteps: [
      "Type the applied force in pounds into the Variable A box.",
      "Type the perpendicular distance from the pivot in feet into the Variable B box.",
      "Read the moment in foot-pounds from the Result box.",
      "Measure the distance perpendicular to the force — angled forces use only the perpendicular component.",
      "Add up all moments about the support: clockwise must equal counterclockwise for balance.",
      "Size anchors and brackets to the largest Result, then add a safety factor on top.",
    ],
    faqs: [
      { q: "What is a moment in statics, in plain words?", a: "A moment is force times distance from the pivot: M = F × d. It measures the twisting effort a load applies to its support." },
      { q: "What units do statics calculations use?", a: "Foot-pounds in the US (pounds × feet); newton-meters in SI. Moments from several loads add together only in matching units." },
      { q: "When would I use a statics calculator?", a: "Mounting TVs and shelves, sizing brackets and anchors, checking crane and hoist loads, and verifying beams balance." },
      { q: "What does 'sum of moments equals zero' mean?", a: "A structure at rest has no net twist — every clockwise moment is canceled by a counterclockwise one. Unbalanced moments mean rotation." },
      { q: "Why does distance matter as much as weight?", a: "Because the moment multiplies them: a light load far from the pivot can out-twist a heavy load close in. Leverage cuts both ways." },
    ],
  },

  "strain-calculator": {
    description: `Stretch a rubber band to twice its length and you have applied 100% strain — engineers just say 1.0. Strain is the fractional change in length: the elongation divided by the original length, ε = ΔL / L₀. Flipped around, the stretch itself equals strain times original length, ΔL = ε × L₀, which is the form that answers the shop-floor question of how many inches a part will actually grow.

This calculator runs that multiplication. Type the strain as a decimal into Variable A — 0.002 for a typical 0.2% steel strain — and the original length into Variable B in inches or feet; the Result box gives the elongation in the same unit. A bridge inspector in summer, for instance, enters the thermal strain of a 500-foot steel span in Variable A and 500 in Variable B, reading the inches of growth the expansion joints must swallow. Concrete cracks near 0.0001 strain while structural steel stretches past 0.2 before breaking — the Result tells you which neighborhood your part lives in.`,
    howToSteps: [
      "Type the strain as a decimal (not a percent) into the Variable A box — 0.5% becomes 0.005.",
      "Type the part's original length into the Variable B box, in inches or feet.",
      "Read the elongation in the same length unit from the Result box.",
      "Convert percent strain to decimal first: divide the percent figure by 100.",
      "Compare the Result against the material's limits — steel yields near 0.002 strain.",
      "Remember thermal strain counts too: hot steel grows whether or not any load pulls it.",
    ],
    faqs: [
      { q: "What is the strain formula in plain words?", a: "Strain equals elongation divided by original length: ε = ΔL / L₀. Multiply strain by the original length to get the actual stretch in inches or feet." },
      { q: "What units does strain use?", a: "None — strain is a pure ratio, often quoted as a percent or in microstrain (millionths). The elongation comes out in whatever length unit you enter." },
      { q: "When would I use a strain calculator?", a: "Sizing expansion joints, checking thermal growth in piping, reading strain-gauge data, and verifying parts stay within elastic limits." },
      { q: "What is the difference between strain and stress?", a: "Strain is how much it stretches (a ratio); stress is how hard the material is being pulled (force per area). Hooke's law ties them together." },
      { q: "How much does steel expand in summer heat?", a: "About 6.5 millionths per °F — a 500-foot bridge span grows roughly 4 inches across a 100°F seasonal swing." },
    ],
  },

  "stress-calculator": {
    description: `A bolt does not care how strong the steel is in the abstract — it cares how many pounds each square inch must carry. Stress is force divided by area, σ = F / A, and its inverse tells you the force a stressed member can deliver: F = σ × A. A half-inch bolt with a 0.2-square-inch cross-section carrying 30,000 psi of stress is holding back 6,000 pounds — the entire logic of structural sizing in one multiplication.

This calculator runs that force equation. Type the stress in psi into Variable A and the cross-sectional area in square inches into Variable B; the Result box gives the force in pounds. A fabricator in Pennsylvania sizing the bolts for a trailer hitch, for instance, enters the allowable 20,000 psi in Variable A and the bolt's 0.3 in² area in Variable B, reading 6,000 pounds of safe capacity per bolt. Compare the Result against the working load, keep a healthy safety factor — bridges use 2 or more — and the steel stays comfortably in its elastic neighborhood.`,
    howToSteps: [
      "Type the material stress in psi into the Variable A box.",
      "Type the cross-sectional area in square inches into the Variable B box.",
      "Read the force capacity in pounds from the Result box.",
      "Use the allowable stress (yield divided by your safety factor), not the ultimate strength.",
      "Measure the area at the thinnest section — threads and holes are where parts actually fail.",
      "Divide the Result by your required load: the answer should be your safety factor or better.",
    ],
    faqs: [
      { q: "What is the stress formula in plain words?", a: "Stress equals force divided by area: σ = F / A. Flip it to get force: F = σ × A, the multiplication this calculator performs." },
      { q: "What units does stress use?", a: "Psi (pounds per square inch) in the US; pascals or megapascals in SI. 1,000 psi is 1 ksi, the unit structural steel grades are quoted in." },
      { q: "When would I use a stress calculator?", a: "Sizing bolts, cables, and columns; checking trailer hitches and hoists; and verifying any part against its material limits." },
      { q: "What is the difference between stress and pressure?", a: "Same units, different setting: pressure pushes on fluids and surfaces from outside, stress acts inside a solid's material." },
      { q: "What is a safety factor?", a: "The margin between a part's rated capacity and its actual load — a factor of 2 means it could theoretically hold twice the working load before yielding." },
    ],
  },

  "tensile-strength-calculator": {
    description: `Climbing ropes and tow straps carry ratings in pounds for one reason: nobody wants to do the math at the edge of a cliff. Tensile strength is the breaking stress — the pulling force at failure divided by the cross-sectional area, strength = F / A. A rope rated at 6,000 pounds breaking strength with a half-square-inch cross-section has a tensile strength of 12,000 psi; structural steel runs about 58,000 psi, which is why a slender cable can hold a bridge deck.

This calculator divides your break test. Type the force at failure in newtons into the Force at Break (F, N) box — multiply pounds by 4.448 to convert — and the specimen's cross-section in square meters into the Cross-sectional Area (A, m²) box. The Tensile Strength (Pa) box returns the material's strength in pascals; divide by a million for megapascals, the unit mill certificates quote. A shop in Ohio testing a batch of tow straps, for instance, breaks samples, enters the numbers, and confirms every strap clears its advertised rating before the shipment goes out.`,
    howToSteps: [
      "Break-test your sample (or take the rated break force) and type it in newtons into the Force at Break (F, N) box.",
      "Measure the narrowest cross-section in square meters and type it into the Cross-sectional Area (A, m²) box.",
      "Read the tensile strength in pascals from the Tensile Strength (Pa) box.",
      "Divide the Result by 1,000,000 to quote megapascals, or by 6,895 for psi.",
      "Convert pounds to newtons first: multiply pounds by 4.448.",
      "Test several samples — published strength is the average minus a safety margin, never the single best pull.",
    ],
    faqs: [
      { q: "What is the tensile strength formula in plain words?", a: "Tensile strength equals breaking force divided by cross-sectional area: strength = F / A. It is the stress at which the material actually snaps." },
      { q: "What units does tensile strength use?", a: "Pascals in SI (usually MPa); psi or ksi in the US — structural steel is rated around 58 ksi ultimate. Convert force and area consistently." },
      { q: "When do I need a tensile strength calculator?", a: "Rating ropes, straps, and cables; verifying mill test reports; sizing tie rods; and checking 3D-printed or welded parts." },
      { q: "What is the difference between tensile strength and yield strength?", a: "Yield is where permanent stretching begins; tensile (ultimate) is where it breaks. Design to yield with a safety factor, never to ultimate." },
      { q: "Why test at the narrowest section?", a: "Because stress concentrates where the area is smallest — a chain breaks at its thinnest link, and a test bar necks down before it snaps." },
    ],
  },

  "thermal-calculator": {
    description: `Heating a swimming pool by one degree takes a staggering amount of energy — hotels pay for it every spring. The heat required equals the mass times the specific heat, all multiplied by the temperature change: Q = (m × c) × ΔT. A 20,000-gallon pool holds about 75,700 kg of water; with water's specific heat of 4,184 J/(kg·K), each degree Celsius of warming demands roughly 317 million joules — about 88 kilowatt-hours, the better part of ten dollars at residential rates.

This calculator performs the final multiplication. Type the mass-times-specific-heat product (m × c) in joules per kelvin into Variable A and the desired temperature change in degrees into Variable B; the Result box gives the heat energy in joules. A hotel engineer in Arizona raising the pool from 70°F to 82°F, for instance, enters the m·c product in Variable A and 6.7 (the Celsius equivalent of 12°F) in Variable B, reading the joules the heater must deliver. Divide the Result by 3.6 million for kilowatt-hours, then by your heater's efficiency — gas heaters waste a third of it up the flue.`,
    howToSteps: [
      "Multiply your mass by the material's specific heat and type the product (J/K) into the Variable A box.",
      "Type the temperature change in degrees into the Variable B box — Celsius or kelvin, they are identical steps.",
      "Read the required heat energy in joules from the Result box.",
      "Divide the Result by 3,600,000 to convert joules into kilowatt-hours.",
      "Divide again by your heater's efficiency — 0.8 for a decent gas heater, near 1.0 for electric resistance.",
      "For Fahrenheit changes, multiply the °F difference by 5/9 before entering it as the Celsius-equivalent ΔT.",
    ],
    faqs: [
      { q: "What is the heat energy formula in plain words?", a: "Heat equals mass times specific heat times temperature change: Q = m × c × ΔT. More mass, a thirstier material, or a bigger warm-up all raise the energy bill." },
      { q: "What units does thermal energy use?", a: "Joules in SI; BTUs in US heating practice — one BTU warms one pound of water by one °F. A kilowatt-hour is 3,412 BTU." },
      { q: "When would I use a thermal calculator?", a: "Sizing pool heaters and water heaters, estimating heating bills, designing thermal storage, and planning industrial process heat." },
      { q: "How much energy heats a swimming pool?", a: "Roughly 88 kWh per °C for a 20,000-gallon pool — which is why solar covers and heat pumps pay for themselves so fast." },
      { q: "Why do heat pumps beat resistance heaters?", a: "They move heat instead of making it, delivering 3–4 joules of warmth per joule of electricity — the calculator's Result is what they must move, not what they consume." },
    ],
  },

  "thermodynamics-calculator": {
    description: `Your car engine is a heat engine doing the same trick as a steam locomotive: expand hot gas, harvest the push. When a gas expands against a piston, the work it delivers equals the pressure times the volume change: W = P × ΔV. High pressure shoving through a large volume change means big work per stroke — the entire reason turbochargers cram more air into the cylinder and why diesel engines squeeze their charge so hard.

This calculator multiplies pressure by expansion. Type the gas pressure into Variable A — in pascals for SI, or psi if you will convert after — and the volume change in cubic meters (or cubic inches, consistently) into Variable B; the Result box gives the expansion work in joules (or inch-pounds). A gearhead in Michigan analyzing a 500 cc cylinder firing at an average 150 psi, for instance, enters the converted values and reads the work each power stroke contributes. Multiply by the strokes per second and you have the engine's indicated power — before friction and heat take their cut, which is why brake horsepower always trails the thermodynamic ideal.`,
    howToSteps: [
      "Type the average gas pressure during expansion into the Variable A box.",
      "Type the volume change — expanded minus compressed volume — into the Variable B box.",
      "Read the work per expansion from the Result box.",
      "Keep pressure and volume units matched: pascals with cubic meters give joules directly.",
      "For psi with cubic inches, divide the Result by about 8.5 to get foot-pounds.",
      "Multiply the Result by power strokes per second to estimate the engine's indicated power.",
    ],
    faqs: [
      { q: "What is the thermodynamic work formula in plain words?", a: "Work equals pressure times volume change: W = P × ΔV. Gas pushing a piston through a volume change delivers exactly this much mechanical work." },
      { q: "What units does expansion work use?", a: "Joules in SI (pascals × cubic meters). In US shop units, psi × cubic inches gives inch-pounds — divide by 12 for foot-pounds." },
      { q: "When would I use a thermodynamics calculator?", a: "Estimating engine power per stroke, sizing air compressors and pneumatic cylinders, and checking steam-plant or HVAC expansion work." },
      { q: "What is the first law of thermodynamics?", a: "Energy is conserved: heat added to a gas becomes internal energy plus the work it does expanding (ΔU = Q − W). The work term is what this calculator computes." },
      { q: "Why is real engine power less than P × ΔV?", a: "Friction, heat loss to the cylinder walls, and pumping losses all skim energy off — brake horsepower is typically 75–85% of the indicated ideal." },
    ],
  },

  "torque-calculator": {
    description: `A cheater bar slipped over a wrench turns a stuck bolt because torque is force times distance from the pivot. The full rule adds the angle: torque equals force times lever-arm radius times the sine of the angle between them, τ = F × r × sinθ. Push perpendicular at the handle's end and you get the maximum twist; push along the wrench toward the bolt and you get nothing at all, which every frustrated mechanic learns by feel.

This calculator runs the formula with your numbers. Type the applied force in pounds into the Applied Force (F) box, the lever length in feet into the Lever Arm Radius (r) box, and the push angle in degrees into the Angle of Application (θ) box — 90 degrees for a square push. The Torque (τ) box answers in foot-pounds. A truck owner in Texas torquing lug nuts, for instance, enters 100 pounds on a 1-foot wrench at 90 degrees and reads 100 ft-lb, right in the spec range for a half-ton pickup. The same equation sets bicycle pedal cranks, sizes impact drivers, and explains why door handles sit far from the hinges.`,
    howToSteps: [
      "Type your push force in pounds into the Applied Force (F) box.",
      "Type the lever length in feet, pivot to push point, into the Lever Arm Radius (r) box.",
      "Type the angle between the force and the lever in degrees into the Angle of Application (θ) box.",
      "Read the twisting force from the Torque (τ) box in foot-pounds.",
      "Use 90 degrees for a perpendicular push — the sine is 1 and the torque is at its maximum.",
      "Lengthen the Lever Arm Radius (r) instead of straining harder: leverage beats muscle.",
    ],
    faqs: [
      { q: "What is the torque formula in plain words?", a: "Torque equals force times lever-arm length times sinθ: τ = F × r × sinθ. Push harder, push farther out, or push squarer — all three raise the twist." },
      { q: "What units does torque use?", a: "Foot-pounds in the US (automotive, construction); newton-meters in SI. 1 ft-lb is about 1.356 N·m." },
      { q: "When do I need a torque calculator?", a: "Torquing lug nuts and head bolts, sizing wrenches and cheater bars, specifying motors and gearboxes, and setting bicycle components." },
      { q: "How tight should lug nuts be?", a: "Typically 80–100 ft-lb for cars and 120–150 ft-lb for trucks — check the owner's manual, since over-torquing warps brake rotors." },
      { q: "Why does pushing at an angle waste effort?", a: "Only the perpendicular component twists the fastener; the rest just shoves sideways. At 30 degrees you get half the torque of a square push." },
    ],
  },

  "transformer-calculator": {
    description: `Your doorbell runs on 16 volts but your house delivers 120 — a small transformer on the wall makes the peace. A transformer trades voltage for current through its turns ratio: the secondary voltage equals the primary voltage times the secondary turns divided by the primary turns, V_s = V_p × (N_s/N_p). More turns on the secondary steps the voltage up; fewer steps it down, which is why the little beige box by your electrical panel hums quietly at 16 volts while the grid roars at thousands upstream.

This calculator applies the turns ratio. Type the primary voltage in volts into Variable A — 120 for a US wall circuit — and the turns ratio N_s/N_p as a decimal into Variable B; the Result box gives the secondary voltage. A homeowner in Ohio replacing a doorbell transformer, for instance, enters 120 in Variable A and 0.133 in Variable B and reads 16 volts, the standard chime voltage. Power is conserved (minus small losses), so halving the voltage doubles the available current — the reason the thin doorbell wire survives while the 120-volt feed needs proper gauge. Model railroads, HVAC control circuits, and phone chargers all hide a transformer doing exactly this.`,
    howToSteps: [
      "Type your primary (input) voltage in volts into the Variable A box — 120 for US mains.",
      "Type the turns ratio N_s/N_p as a decimal into the Variable B box — below 1 steps down, above 1 steps up.",
      "Read the secondary (output) voltage from the Result box.",
      "For a 120V-to-24V HVAC transformer, enter 0.2 in Variable B.",
      "Remember current transforms inversely: step voltage down by 5 and the available current rises about 5 times.",
      "Verify the transformer's VA rating covers your load's volt-amps before wiring it in.",
    ],
    faqs: [
      { q: "What is the transformer formula in plain words?", a: "Secondary voltage equals primary voltage times the turns ratio: V_s = V_p × (N_s/N_p). Twice the secondary turns means twice the voltage." },
      { q: "What units do transformer calculations use?", a: "Volts throughout, with the turns ratio as a unitless decimal. Power handling is quoted in volt-amps (VA), not watts." },
      { q: "When would I use a transformer calculator?", a: "Replacing doorbell and HVAC transformers, designing model-railroad power, sizing low-voltage lighting, and checking step-up/step-down stages." },
      { q: "Why does my doorbell transformer hum?", a: "The 60 Hz alternating magnetic field vibrates the iron core laminations — a faint hum is normal; a loud buzz suggests loose mounting." },
      { q: "Can a transformer change DC voltage?", a: "No — transformers need changing current to induce voltage. DC passes through as a plain wire (and can overheat the core). Use a DC-DC converter instead." },
    ],
  },

  "transistor-calculator": {
    description: `A transistor is an electronic faucet: a trickle at the base controls a flood at the collector. In its amplifying region, the collector current equals the current gain beta times the base current, I_C = β × I_B. A small-signal transistor with β = 200 turns 0.1 mA at the base into 20 mA at the collector — enough to light an LED brightly from a whisper of control current, which is the entire basis of electronic switching and amplification.

This calculator runs the gain multiplication. Type the transistor's current gain β (hFE) from its datasheet into Variable A and the base current in amps into Variable B; the Result box gives the collector current in amps. An Arduino hobbyist in Colorado driving a 12-volt LED strip, for instance, enters β = 100 in Variable A and 0.005 (5 mA) in Variable B, reading 0.5 A of switching capacity — plenty for the strip, with margin to spare. Real designs then add a base resistor to set that current deliberately, and check the transistor's maximum ratings so the faucet never bursts its pipes.`,
    howToSteps: [
      "Look up your transistor's DC current gain β (hFE) and type it into the Variable A box.",
      "Type the base current in amps into the Variable B box — 0.001 for 1 mA.",
      "Read the collector current in amps from the Result box.",
      "Size the base resistor so the base current stays well under the transistor's maximum.",
      "Confirm the Result stays below the transistor's rated collector current — add a bigger transistor or a MOSFET if not.",
      "Remember β varies with temperature and between parts; design with the datasheet minimum, not the typical.",
    ],
    faqs: [
      { q: "What is the transistor current formula in plain words?", a: "Collector current equals current gain times base current: I_C = β × I_B. A gain of 100 means the collector carries a hundred times the base current." },
      { q: "What units do transistor calculations use?", a: "Amps for both currents — convert milliamps first (5 mA = 0.005 A). Beta is a unitless ratio from the datasheet." },
      { q: "When would I use a transistor calculator?", a: "Switching LEDs, relays, and motors from microcontrollers; biasing amplifier stages; and checking whether a transistor can handle a load." },
      { q: "What is beta (hFE)?", a: "The DC current gain — how many times the base current the collector will carry. Small-signal transistors run 100–400; power transistors often lower." },
      { q: "Transistor or MOSFET for switching?", a: "MOSFETs win for heavy loads: they are voltage-controlled, waste less heat, and handle amps where small transistors would melt." },
    ],
  },

  "velocity-calculator": {
    description: `A 95-mph fastball crosses home plate in about four-tenths of a second — velocity is distance over time, and everything else is bookkeeping. The three forms cover every question: velocity equals distance divided by time (v = d / t), distance equals velocity times time (d = v × t), and time equals distance divided by velocity (t = d / v). Commuters live in the third form every morning, dividing the miles to work by their average speed to decide when the alarm must ring.

This calculator runs whichever form you need. Pick Velocity (v = d / t), Distance (d = v * t), or Time (t = d / v) in the Calculate dropdown, then fill in the two values you know — the Distance (d) box in miles, the Time (t) box in hours, the Velocity (v) box in mph for US road math. The Computed Value box delivers the missing one. A sales rep in Georgia checking a 240-mile drive at 65 mph, for instance, picks Time, enters the numbers, and reads about 3.7 hours — 3 hours 42 minutes — before promising a client a meeting slot.`,
    howToSteps: [
      "Open the Calculate dropdown and choose Velocity (v = d / t), Distance (d = v * t), or Time (t = d / v).",
      "Type your first known value — for example, 240 in the Distance (d) box for miles.",
      "Type your second known value — for example, 65 in the Velocity (v) box for mph.",
      "Read the missing quantity from the Computed Value box.",
      "Convert minutes to decimal hours first: 30 minutes is 0.5, 15 minutes is 0.25.",
      "Flip the Calculate mode to cross-check the answer from the other direction.",
    ],
    faqs: [
      { q: "What is the velocity formula in plain words?", a: "Velocity equals distance divided by time: v = d / t. Its siblings are d = v × t and t = d / v — one triangle, three tools." },
      { q: "What units does velocity use?", a: "Miles per hour with miles and hours in the US; meters per second in science. A 60-mph highway speed is 88 ft/s — useful for following-distance math." },
      { q: "When do I need a velocity calculator?", a: "Estimating drive times, checking pitch and serve speeds, pacing workouts, and converting between distance, speed, and time on the fly." },
      { q: "What is the difference between speed and velocity?", a: "Speed is how fast; velocity is how fast in which direction. Road-trip math uses speed, but physics keeps the direction because round trips cancel out." },
      { q: "How fast is a 95-mph fastball in feet per second?", a: "About 139 ft/s — multiply mph by 1.467. It covers the 60.5 feet to home plate in roughly 0.44 seconds." },
    ],
  },

  "viscosity-calculator": {
    description: `Honey pours slowly and water pours fast because of one property: viscosity, the fluid's internal friction. Newton's law of viscosity says the shear stress in a flowing fluid equals the viscosity times the velocity gradient — how quickly the flow speed changes across the gap: τ = μ × (du/dy). A thick oil dragged between engine parts generates far more shear stress than thin water in the same gap, which is exactly why your engine specifies 5W-30 and not maple syrup.

This calculator computes that shear stress. Type the fluid's dynamic viscosity μ into Variable A — about 0.001 Pa·s for water, 0.2 Pa·s for a warm motor oil — and the velocity gradient in (1/s) into Variable B; the Result box gives the shear stress in pascals. A mechanic in Minnesota comparing winter oil grades, for instance, enters each oil's viscosity against the same cranking gradient and sees in the Result why 0W oil turns the engine over on a −20°F morning while 20W barely budges. The same equation sizes pumps, predicts pipeline pressure drops, and explains why ketchup needs a good shake.`,
    howToSteps: [
      "Look up your fluid's dynamic viscosity in pascal-seconds and type it into the Variable A box.",
      "Estimate the velocity gradient — speed difference divided by gap — in 1/s and type it into the Variable B box.",
      "Read the shear stress in pascals from the Result box.",
      "Compare fluids by swapping Variable A: the Result scales directly with viscosity.",
      "Remember viscosity drops with temperature — hot oil can be ten times thinner than cold.",
      "For motor oil grades, the 'W' number rates cold viscosity and the second number rates it at operating temperature.",
    ],
    faqs: [
      { q: "What is the viscosity formula in plain words?", a: "Shear stress equals viscosity times the velocity gradient: τ = μ × (du/dy). Thicker fluid or a steeper speed change both raise the internal friction." },
      { q: "What units does viscosity use?", a: "Pascal-seconds (Pa·s) in SI; centipoise in older US practice — 1 cP equals 0.001 Pa·s, so water is about 1 cP." },
      { q: "When would I use a viscosity calculator?", a: "Choosing motor oil grades, sizing pumps and pipelines, formulating paints and inks, and predicting lubrication film strength." },
      { q: "What do the numbers in 5W-30 mean?", a: "5W rates cold-weather flow (lower is thinner at startup); 30 rates viscosity at operating temperature. Multi-grade oils use additives to span both." },
      { q: "Why does warm honey pour faster?", a: "Heat loosens the molecular tangles that resist flow — most liquids lose roughly half their viscosity every 20–30°F of warming." },
    ],
  },

  "volume-lumber-calculator": {
    description: `Lumber is not sold by the cubic foot — it is sold by the board foot, a unit invented for sawmills. One board foot is a 12-inch by 12-inch by 1-inch slab: 144 cubic inches of wood. The formula folds the dimensions together: board feet = (thickness × width × length / 12) × count, with thickness and width in inches and length in feet. A 2×4 that is 8 feet long holds about 5.33 board feet, and the price tag multiplies from there.

This calculator runs the sawmill math. Type the board's Thickness (in) — use nominal 2 for a 2×4 — the Width (in), the Length (ft), and how many pieces you need into the Number of Boards box. The Board Feet (FBM) box totals your order. A homeowner in Ohio decking a 12×16-foot platform, for instance, enters 2 × 6 × 12 with a count of 40 and reads the board footage to compare quotes per thousand board feet (MBF). Pros then add 10–15% waste for cuts and culls, because real boards have knots and real projects have mistakes.`,
    howToSteps: [
      "Type the board's nominal thickness in inches into the Thickness (in) box — 2 for a 2×4.",
      "Type the nominal width in inches into the Width (in) box — 4 for a 2×4.",
      "Type the board length in feet into the Length (ft) box.",
      "Type how many boards you need into the Number of Boards box.",
      "Read your total lumber volume from the Board Feet (FBM) box.",
      "Add 10–15% extra for waste, miscuts, and knotty rejects before ordering.",
    ],
    faqs: [
      { q: "What is the board foot formula in plain words?", a: "Board feet = (thickness × width × length ÷ 12) × number of boards, with thickness and width in inches and length in feet. One board foot is 144 cubic inches." },
      { q: "What is a board foot?", a: "A volume unit equal to a 1-inch-thick, 12-inch-wide, 12-inch-long slab of wood. Hardwood is priced per thousand board feet (MBF)." },
      { q: "When do I need a lumber volume calculator?", a: "Estimating deck, fence, and framing material; comparing hardwood quotes; and converting a cut list into an order quantity." },
      { q: "Do I use nominal or actual dimensions?", a: "Nominal — a '2×4' counts as 2 × 4 in board-foot math even though it actually measures 1.5 × 3.5 inches. The trade standardized on nominal." },
      { q: "How many board feet are in a 2x4x8?", a: "About 5.33: (2 × 4 × 8 / 12). Ten of them total roughly 53 board feet before waste." },
    ],
  },

  "waveform-calculator": {
    description: `The 120 volts in your wall outlet is a quiet fiction — the peaks actually hit 170 volts. AC voltage swings in a sine wave, and the RMS (root-mean-square) value is the equivalent steady voltage that would deliver the same power: for a sine wave, V_rms = V_peak × 0.7071. Your outlet's 120 V is RMS; the 170 V peak is what the insulation and the surge protector must survive. Audio amplifiers, oscilloscopes, and multimeters all speak RMS because power cares about the average of the squares, not the tip of the wave.

This calculator converts peak to RMS. Type the waveform's peak voltage into Variable A — 170 for US mains — and the sine-wave factor 0.7071 into Variable B; the Result box gives the RMS voltage. A home-theater enthusiast in Denver checking a 40-volt-peak amplifier output, for instance, enters 40 in Variable A and reads about 28.3 V RMS — the number that, squared and divided by the speaker's 8 ohms, gives the real 100-watt rating. Square waves and triangle waves use different factors (1.0 and 0.577), so confirm your waveform is sinusoidal before trusting the 0.7071.`,
    howToSteps: [
      "Type the waveform's peak voltage (zero to tip) into the Variable A box.",
      "Type 0.7071, the sine-wave RMS factor, into the Variable B box.",
      "Read the RMS voltage from the Result box.",
      "Square the Result and divide by the load resistance to get the true average power.",
      "For US mains, enter 170 in Variable A and confirm the Result reads about 120.",
      "Use 1.0 instead of 0.7071 for square waves, or 0.577 for triangle waves.",
    ],
    faqs: [
      { q: "What is the RMS voltage formula in plain words?", a: "For a sine wave, RMS voltage equals peak voltage times 0.7071: V_rms = V_peak × 0.7071. It is the equivalent DC voltage delivering the same power." },
      { q: "Is US wall power really 120 volts?", a: "As RMS, yes — but the sine peaks hit about 170 volts, and peak-to-peak it swings 340 volts. Insulation and surge ratings answer to the peaks." },
      { q: "When would I use a waveform calculator?", a: "Rating audio amplifiers, reading oscilloscopes, sizing surge protectors, and converting between peak and RMS on any AC signal." },
      { q: "What is the difference between peak and RMS?", a: "Peak is the wave's tip; RMS is the heating-equivalent average. A 170 V peak sine wave heats like a steady 120 V DC." },
      { q: "Does 0.7071 work for every waveform?", a: "No — only sine waves. Square waves use 1.0 and triangle waves about 0.577, so identify the shape first." },
    ],
  },

  "wavelength-calculator": {
    description: `Your favorite FM station at 101.1 MHz is really a three-meter wave washing over your car antenna. Frequency and wavelength are two views of the same wave, linked by its speed: wavelength equals wave speed divided by frequency (λ = v / f), frequency equals speed divided by wavelength (f = v / λ), and speed equals their product (v = λ × f). Light always travels at 300 million m/s, so a higher frequency inevitably means a shorter wavelength — blue light's waves are visibly stubbier than red's.

This calculator runs any leg of the triangle. Choose Wavelength (λ = v / f), Frequency (f = v / λ), or Wave Speed (v = λ * f) in the Calculate dropdown, then enter the two knowns — the Wavelength (λ) box, the Frequency (f) box in hertz, the Wave Speed (v) box in m/s. The Computed Value box fills in the missing piece. A ham operator in Kansas checking the 20-meter band, for instance, picks Frequency, enters 20 for wavelength and 300,000,000 for wave speed, and reads 15 MHz — confirming the band plan before transmitting.`,
    howToSteps: [
      "Open the Calculate dropdown and pick Wavelength (λ = v / f), Frequency (f = v / λ), or Wave Speed (v = λ * f).",
      "Type your first known value — for example, the wave speed 300000000 in the Wave Speed (v) box for light.",
      "Type your second known value — for example, 101100000 in the Frequency (f) box for 101.1 MHz.",
      "Read the missing quantity from the Computed Value box.",
      "Convert MHz to hertz first: multiply megahertz by 1,000,000.",
      "For sound waves, use 1125 in the Wave Speed (v) box for feet per second in air.",
    ],
    faqs: [
      { q: "What is the wavelength formula in plain words?", a: "Wavelength equals wave speed divided by frequency: λ = v / f. Faster waves stretch longer; higher frequencies squeeze shorter." },
      { q: "What units do wavelength calculations use?", a: "Meters with m/s and hertz in SI; feet with ft/s for sound in the US. Radio frequencies need converting: 1 MHz = 1,000,000 Hz." },
      { q: "When would I use a wavelength calculator?", a: "Sizing radio antennas, checking Wi-Fi and 5G bands, working optics problems, and placing acoustic treatments." },
      { q: "What is the wavelength of Wi-Fi?", a: "About 12.5 cm (5 inches) at 2.4 GHz and 6 cm at 5 GHz — which is why router antennas are a few inches long." },
      { q: "Why are FM antennas about a meter long?", a: "A quarter-wave antenna for 100 MHz is about 0.75 meters — the station's 3-meter wavelength divided by four, a convenient receiving length." },
    ],
  },

  "work-energy-calculator": {
    description: `Pushing a stalled car across a parking lot is pure physics: force times distance is work. The full rule accounts for the push direction: work equals force times distance times the cosine of the angle between them, W = F × d × cosθ. Shove straight along the motion and cosθ = 1, so every pound counts; push at an angle and only the along-the-motion component earns its keep — the reason movers lean into a dolly rather than lifting it.

This calculator multiplies it out. Type the push force in pounds into the Applied Force (F) box, the distance moved in feet into the Distance (d) box, and the angle between the push and the motion into the Angle (θ) box — 0 degrees for a straight shove. The Work Done (W) box answers in foot-pounds. Someone in Ohio pushing a 200-pound mower 100 feet across the lawn, for instance, enters 200, 100, and 0, reading 20,000 ft-lb of work — about 0.01 kWh, which explains why the chore feels enormous and the electric bill barely notices. The work-energy theorem adds the payoff: that work becomes the object's kinetic energy, speed included.`,
    howToSteps: [
      "Type the force you apply, in pounds, into the Applied Force (F) box.",
      "Type the distance the object moves, in feet, into the Distance (d) box.",
      "Type the angle between your push and the motion into the Angle (θ) box — 0 for a straight push.",
      "Read the mechanical work from the Work Done (W) box in foot-pounds.",
      "Divide the Result by 2,655,000 to see the work in kilowatt-hours.",
      "Push along the motion (θ = 0) whenever possible — angled effort wastes the cosine fraction.",
    ],
    faqs: [
      { q: "What is the work formula in plain words?", a: "Work equals force times distance times cosθ: W = F × d × cosθ. Only the force component along the motion does work." },
      { q: "What units does work use?", a: "Foot-pounds in the US; joules in SI. Lifting one pound one foot is one foot-pound; a joule is about 0.74 ft-lb." },
      { q: "When do I need a work calculator?", a: "Estimating labor and energy for moving loads, sizing winches and hoists, checking workout energy, and working physics problems." },
      { q: "Does carrying a weight horizontally do work?", a: "In physics terms, no — the force is vertical while the motion is horizontal (θ = 90°, cosθ = 0). Your muscles disagree because biology is inefficient." },
      { q: "What is the work-energy theorem?", a: "The net work done on an object equals its change in kinetic energy — push it and the work shows up as speed." },
    ],
  },

  "x-ray-calculator": {
    description: `Dental X-rays see through your cheek because their photons carry thousands of times the energy of visible light. An X-ray photon's energy is Planck's constant times the speed of light divided by its wavelength: E = h × c / λ. With wavelengths a ten-thousandth the width of a human hair, each photon packs roughly 10,000 electronvolts — enough to knock electrons clean out of atoms, which is both why the image forms and why the lead apron exists.

This calculator performs the energy multiplication. Type the constant h·c — 1.986 × 10^-25 joule-meters — into Variable A and the reciprocal of the wavelength (1/λ) in inverse meters into Variable B; the Result box gives the photon energy in joules. A radiology student in Florida studying a 0.1-nanometer dental X-ray, for instance, enters 1e10 in Variable B and reads about 1.99 × 10^-15 joules — divide by 1.602 × 10^-19 to get roughly 12,400 eV. Airport scanners, weld inspectors, and astronomers mapping black holes all calibrate against this same photon energy.`,
    howToSteps: [
      "Type 1.986e-25 (the constant h·c in joule-meters) into the Variable A box.",
      "Compute one divided by your wavelength in meters and type it into the Variable B box.",
      "Read the single-photon energy in joules from the Result box.",
      "Divide the Result by 1.602e-19 to convert joules into electronvolts.",
      "Convert nanometers to meters first: multiply nanometers by 1e-9.",
      "Shorter wavelength means higher energy — halve λ in the math and the Result doubles.",
    ],
    faqs: [
      { q: "What is the X-ray photon energy formula in plain words?", a: "Energy equals Planck's constant times light speed divided by wavelength: E = h·c / λ. Shorter wavelengths pack more energy per photon." },
      { q: "What units do X-ray calculations use?", a: "Meters for wavelength with h·c in joule-meters give joules out; divide by 1.602 × 10^-19 for electronvolts, the unit every X-ray tube is rated in." },
      { q: "When would I use an X-ray calculator?", a: "Checking radiography photon energies, calibrating detectors, estimating shielding needs, and working through atomic physics problems." },
      { q: "How much radiation is a dental X-ray?", a: "About 0.5 millirem of dose — the photon energy is high but the exposure is brief and tightly collimated." },
      { q: "Why do X-rays pass through skin but not bone?", a: "Calcium's heavier atoms absorb X-ray photons far more strongly than soft tissue — the contrast that makes the skeleton visible." },
    ],
  },

  "zener-calculator": {
    description: `A Zener diode is a pressure-relief valve for voltage — it clamps the line exactly where you tell it to. Wire it backward across a supply with a series resistor, and it holds the output at its Zener voltage while burning off the excess as heat. That heat is the design limit: the power dissipated equals the Zener voltage times the Zener current, P = V_z × I_z. Exceed the diode's wattage and the relief valve becomes the failure.

This calculator checks the heat. Type the diode's Zener voltage in volts into Variable A — 5.1 for the classic logic-level regulator — and the current flowing through it in amps into Variable B; the Result box gives the dissipation in watts. An Arduino hobbyist in Oregon regulating a 9-volt battery down for a sensor, for instance, enters 5.1 in Variable A and 0.02 in Variable B, reading 0.102 watts — comfortably inside a standard 0.5-watt Zener's rating. Size the series resistor so the worst-case current keeps the Result under half the diode's rating, and the clamp holds steady for years.`,
    howToSteps: [
      "Type your diode's Zener voltage in volts into the Variable A box — 5.1 is the classic choice.",
      "Type the current through the diode in amps into the Variable B box — 0.02 for 20 mA.",
      "Read the power dissipation in watts from the Result box.",
      "Keep the Result under half the diode's rated wattage for long-term reliability.",
      "Compute the worst-case current at the highest input voltage and re-check the Result there.",
      "If the Result exceeds the rating, pick a higher-wattage Zener or switch to a linear regulator.",
    ],
    faqs: [
      { q: "What is the Zener power formula in plain words?", a: "Power equals Zener voltage times Zener current: P = V_z × I_z. The diode turns excess voltage into exactly this much heat." },
      { q: "What units do Zener calculations use?", a: "Volts and amps give watts out — convert milliamps first (20 mA = 0.02 A). Diode ratings are quoted in watts: 0.5 W, 1 W, 5 W." },
      { q: "When would I use a Zener calculator?", a: "Designing simple voltage clamps and references, protecting microcontroller inputs, and verifying a shunt regulator will not overheat." },
      { q: "What is a Zener diode used for?", a: "Holding a steady reference voltage, clipping signals to safe levels, and making dirt-cheap low-current regulators." },
      { q: "Why does my Zener diode run hot?", a: "It is dissipating (input voltage − Zener voltage) × current as heat. Recheck the Result here — an undersized diode or too-small series resistor is the usual cause." },
    ],
  },
};



