import type { SEOContent } from "@/lib/seo/content";

export const BATCH_13: Record<string, Partial<SEOContent>> = {
  "acceleration-calculator": {
    description: `The 0-to-60 time on a car commercial is really an acceleration story wearing a stopwatch. Average acceleration answers one question: how quickly did velocity change? The recipe is plain — subtract the starting velocity from the ending velocity, then divide by the time the change took. A car that goes from 0 to 60 mph in 6 seconds averages 10 mph of extra speed every second, which is about 14.7 feet per second squared.

That number shows up everywhere once you look. Roller coasters advertise g-force, which is just acceleration measured against gravity. Quarterbacks throw receivers open by judging how fast a defender can change speed. Even a braking distance estimate starts here, because stopping is acceleration pointed the other way.

This calculator runs the (final velocity minus initial velocity) divided by time formula. Type your starting speed in the Initial Velocity (vi) box and your ending speed in the Final Velocity (vf) box — use miles per hour for both, and the math stays clean. Put the elapsed time in the Time (t) box, then read the Average Acceleration (a) result. Negative answers are fine; they mean the object slowed down.`,
    howToSteps: [
      "Type your starting speed in the Initial Velocity (vi) box — for example, 0 for a standing start.",
      "Type your ending speed in the Final Velocity (vf) box — for example, 60 for 60 mph.",
      "Type the elapsed time in seconds in the Time (t) box — for example, 6 for a 6-second sprint.",
      "Read the Average Acceleration (a) box: (60 − 0) ÷ 6 = 10 mph per second in this example.",
      "For braking, swap the values — a higher starting speed than ending speed gives a negative acceleration, which means deceleration.",
      "Keep both velocities in the same units (both mph or both ft/s) so the division is meaningful.",
    ],
    faqs: [
      { q: "What is the acceleration formula in plain words?", a: "Average acceleration equals the change in velocity divided by the time it took. In symbols: a = (vf − vi) / t, where vf is final velocity, vi is initial velocity, and t is time." },
      { q: "What units does acceleration use?", a: "Any velocity unit per time unit works — feet per second squared (ft/s²) and meters per second squared (m/s²) are standard. Car fans often use mph per second, which this calculator accepts as long as both speeds match." },
      { q: "When would I use an acceleration calculator?", a: "Comparing 0-to-60 times, estimating stopping distances, sizing motors for robotics projects, and checking whether a ride's g-forces are safe all start with this formula." },
      { q: "What is the difference between acceleration and velocity?", a: "Velocity is how fast something moves; acceleration is how fast that speed changes. A car cruising at a steady 70 mph has velocity but zero acceleration." },
      { q: "How do you calculate aceleration?", a: "Subtract the starting velocity from the final velocity and divide by the time in seconds. For example, (60 − 0) ÷ 6 = 10 mph per second." },
    ],
  },

  "beam-calculator": {
    description: `Every floor joist holding up a living room is a beam doing quiet math. When a load presses on a beam, the beam bends — and engineers need to know exactly how much, because a floor that sags half an inch feels bouncy while a floor that sags two inches feels broken. The classic case is a simply supported beam with a load in the middle: maximum deflection equals the load times the span cubed, divided by 48 times the stiffness term (elastic modulus times moment of inertia). In symbols: δ = PL³ / (48EI).

Notice the span is cubed. Doubling the distance between supports makes the beam sag eight times more under the same load, which is why a 2×10 joist that feels rock solid across 10 feet feels like a trampoline across 16. The P × L part — load times span — sits at the heart of every version of this formula, and that is the product this calculator handles.

A homeowner sizing a deck, a contractor checking a header over a garage door, and a student working a statics problem all reach for the same idea. Type the total load in pounds in the Variable A box and the span in feet in the Variable B box. The Result box gives you the load-times-span product — the starting ingredient for bending moment and deflection checks.`,
    howToSteps: [
      "Type the total load on the beam in the Variable A box — for example, 2000 for a 2,000-pound load.",
      "Type the beam's span in the Variable B box — for example, 12 for a 12-foot span.",
      "Read the Result box: 2000 × 12 = 24,000, the load-times-span product behind the bending formulas.",
      "Remember the span hurts cubically — a 16-foot span is far more than a third worse than a 12-foot span under the same load.",
      "Keep load and span in consistent unit families (pounds with feet, or newtons with meters) before comparing with code tables.",
      "Use the product alongside your beam's stiffness (EI) value to estimate deflection with the full formula.",
    ],
    faqs: [
      { q: "What is the beam deflection formula in plain words?", a: "For a simply supported beam with a center load, maximum deflection equals load times span cubed divided by 48 times stiffness. In symbols: δ = PL³ / (48EI), where E is elastic modulus and I is the moment of inertia." },
      { q: "What units do beam calculations use?", a: "US practice uses pounds for load, feet or inches for span, and inches for deflection. Keep load and length in matching families so the product means what the formula expects." },
      { q: "When would I need a beam calculator?", a: "Sizing deck joists, checking headers over doors and windows, laying out floor framing, and verifying shelf brackets all use beam math." },
      { q: "Why does span length matter so much?", a: "Because deflection grows with the cube of the span. Doubling the span makes the same load cause eight times the sag." },
      { q: "How do you calculate beam deflecion?", a: "Multiply load by span cubed, then divide by 48 times the beam's stiffness (E × I). This tool computes the load-times-span product at the center of that formula." },
    ],
  },

  "bernoulli-calculator": {
    description: `An airplane wing stays up because air rushing faster over the curved top pushes down less than the slower air under the flat bottom. That trade — speed up, pressure down — is Bernoulli's principle, and it governs far more than wings. Perfume atomizers, carburetors, shower curtains that billow inward, and the curveball's wicked break all run on the same deal.

The full Bernoulli equation says the total energy along a streamline stays constant: static pressure plus dynamic pressure plus elevation pressure never changes. In symbols: P + ½ρv² + ρgh = constant. The ½ρv² term is the dynamic pressure — the pressure equivalent of the fluid's motion — and it is the piece pilots and plumbers actually compute.

A private pilot checking true airspeed with a pitot tube is measuring dynamic pressure directly. A homeowner sizing a venturi pump for a pond is doing the same math in reverse. This calculator handles the key multiplication: type the dynamic-pressure factor (one-half times the fluid density) in the Variable A box, and the velocity squared in the Variable B box. The Result box returns the dynamic pressure — the number that tells you how much pressure speed is "spending" at that point in the flow.`,
    howToSteps: [
      "Look up your fluid's density — air at sea level is about 0.002377 slugs per cubic foot.",
      "Halve the density and type it in the Variable A box — for example, 0.0011885 for air.",
      "Square your flow velocity and type it in the Variable B box — for example, 176² = 30,976 for 120 mph in ft/s.",
      "Read the Result box: it shows the dynamic pressure in pounds per square foot.",
      "Compare dynamic pressure at two points along the flow — where velocity rises, static pressure falls by the same amount.",
      "Keep density and velocity in consistent units (slugs/ft³ with ft/s, or kg/m³ with m/s) so the pressure units work out.",
    ],
    faqs: [
      { q: "What is Bernoulli's equation in plain words?", a: "Static pressure plus dynamic pressure (½ρv²) plus elevation pressure (ρgh) stays constant along a streamline — when velocity rises, static pressure falls to keep the total fixed." },
      { q: "What is dynamic pressure?", a: "It is the pressure equivalent of a fluid's motion, equal to one-half times density times velocity squared (½ρv²). This calculator multiplies the ½ρ factor by v² to produce it." },
      { q: "When would I use Bernoulli's principle?", a: "Estimating lift on wings, reading pitot-tube airspeed, sizing venturi meters, and understanding why shower curtains billow inward all use it." },
      { q: "Does Bernoulli's principle explain all wing lift?", a: "Most of it at normal speeds — the faster-over-the-top pressure difference is real. At high angles of attack, airflow separation and Newton's third law matter too." },
      { q: "What is the formular for Bernoulli's equation?", a: "Add the static pressure to the dynamic pressure (½ρv²) and the elevation pressure (ρgh) — along any streamline, that total never changes." },
    ],
  },

  "blackbody-radiation-calculator": {
    description: `A blacksmith judges steel temperature by color alone — dull red, cherry red, orange, then white-hot — and that trick is blackbody radiation at work. Any hot object glows, and the total power it radiates follows a beautifully simple rule: power per square meter equals the Stefan-Boltzmann constant times the absolute temperature raised to the fourth power. In symbols: E = σT⁴, where σ is 5.67 × 10⁻⁸.

The fourth power is what makes this dramatic. Doubling the absolute temperature multiplies the radiated power by sixteen. That is why a kiln at 2,000°F throws off vastly more heat than an oven at 500°F, and why the Sun — about 10,000°F at its surface — can warm the Earth from 93 million miles away.

This calculator handles the core multiplication. First raise your temperature to the fourth power (remember: absolute temperature — add 460 to Fahrenheit to get Rankine, or use kelvin). Type the Stefan-Boltzmann constant in the Variable A box and your T⁴ value in the Variable B box. The Result box gives watts per square meter — the raw thermal firepower leaving every square meter of that glowing surface. Furnace operators, kiln hobbyists, and solar panel installers estimating panel heat all use this number.`,
    howToSteps: [
      "Convert your temperature to an absolute scale — add 460 to Fahrenheit to get Rankine, or use kelvin directly.",
      "Raise the absolute temperature to the fourth power with a calculator — for example, 2000⁴.",
      "Type 0.0000000567 (the Stefan-Boltzmann constant) in the Variable A box.",
      "Type your T⁴ value in the Variable B box.",
      "Read the Result box: watts per square meter radiated by the surface.",
      "Remember real surfaces radiate a bit less than a perfect blackbody — multiply by the material's emissivity for a practical answer.",
    ],
    faqs: [
      { q: "What is the Stefan-Boltzmann law in plain words?", a: "The power a hot surface radiates equals a constant times the absolute temperature to the fourth power. In symbols: E = σT⁴, with σ = 5.67 × 10⁻⁸ W/m²K⁴." },
      { q: "Why must temperature be absolute?", a: "Because the formula uses T⁴, and zero must mean zero thermal motion. Add 460 to Fahrenheit to get Rankine, or use kelvin — never plug in plain °F or °C." },
      { q: "When would I use a blackbody radiation calculator?", a: "Estimating kiln and furnace heat output, sizing cooling for electronics, understanding why the Sun feels so powerful, and analyzing infrared camera readings." },
      { q: "What is Wien's displacement law?", a: "It gives the peak glow color: peak wavelength equals a constant divided by temperature. Hotter objects peak toward blue; cooler ones toward red and infrared." },
      { q: "How do you calculate blackbody radiaton?", a: "Convert temperature to kelvin or Rankine, raise it to the fourth power, and multiply by 5.67 × 10⁻⁸. The answer is watts per square meter." },
    ],
  },

  "bohr-model-calculator": {
    description: `A neon sign glows red-orange for one reason: its electrons can only fall between fixed energy rungs, and each fall spits out a photon of one exact color. The Bohr model pictures the hydrogen atom as a tiny solar system — one electron circling the nucleus in shells numbered 1, 2, 3, and so on — and it nails the two numbers that matter. The radius of shell n equals the Bohr radius times n squared (r = a₀n², with a₀ ≈ 5.29 × 10⁻¹¹ meters), and the energy of shell n equals negative 13.6 electron-volts divided by n squared.

Because radius grows with n², the shells spread out fast: shell 2 sits four times farther out than shell 1, shell 3 nine times farther. That spreading is why hydrogen's spectral lines crowd together toward the blue end — the famous Balmer series that makes nebulae glow pink in telescope photos.

This calculator handles the radius multiplication at the model's heart. Type the Bohr radius (0.0000000000529 meters, or 0.529 angstroms) in the Variable A box, and the shell number squared in the Variable B box — for example, 9 for the third shell. The Result box gives the orbit radius, the actual size of that electron shell in meters.`,
    howToSteps: [
      "Pick the electron shell number n — for example, 3 for the third shell.",
      "Square it and type the result in the Variable B box — 9 for shell 3.",
      "Type 0.0000000000529 (the Bohr radius in meters) in the Variable A box.",
      "Read the Result box: the orbit radius of that shell in meters.",
      "Notice how fast shells grow — shell 4 is sixteen times the Bohr radius, not four.",
      "For energy instead, remember E = −13.6 / n² electron-volts: shell 1 sits at −13.6 eV and shell 2 at −3.4 eV.",
    ],
    faqs: [
      { q: "What is the Bohr radius formula in plain words?", a: "The radius of electron shell n equals the Bohr radius times n squared: r = a₀n², where a₀ is 5.29 × 10⁻¹¹ meters." },
      { q: "What is the Bohr energy level formula?", a: "Energy of shell n equals negative 13.6 eV divided by n squared: E = −13.6/n² eV. A fall from shell 3 to shell 2 releases 1.89 eV — a red photon." },
      { q: "When would I use the Bohr model?", a: "Predicting hydrogen's spectral lines, explaining neon sign and flame-test colors, and building intuition before tackling full quantum mechanics in chemistry class." },
      { q: "Is the Bohr model actually correct?", a: "Not exactly — electrons live in fuzzy orbitals, not neat circles. But for hydrogen's energy levels and spectral lines, its answers are exactly right." },
      { q: "How do you calculate Bohr model raduis?", a: "Square the shell number and multiply by the Bohr radius (5.29 × 10⁻¹¹ m). Shell 2 gives 4 × a₀, shell 3 gives 9 × a₀." },
    ],
  },

  "bond-angle-calculator": {
    description: `Water is bent, carbon dioxide is straight, and that single geometric difference decides boiling points, solubility, and much of biochemistry. A bond angle is simply the angle between two chemical bonds meeting at one atom — 104.5 degrees in water, 180 in carbon dioxide, 109.5 in methane's perfect tetrahedron. Chemists predict these angles with VSEPR theory, then verify them with X-ray crystallography.

The working math behind any angle measurement is the dot product. For two bond vectors A and B, the cosine of the angle between them equals their dot product divided by the product of their lengths: cos θ = (A·B) / (|A| × |B|). Take the inverse cosine and you have the angle in degrees.

This calculator handles the denominator's key step. Type the first bond vector's length in the Variable A box and the second's in the Variable B box — for example, two 1.0-angstrom O–H bonds in water. The Result box gives the |A| × |B| product. Divide your measured dot product by this Result, take the arccosine, and you have the bond angle — the number that tells you whether your molecule is bent, linear, or tetrahedral.`,
    howToSteps: [
      "Type the first bond's length in the Variable A box — for example, 1.0 for a 1.0-angstrom O–H bond.",
      "Type the second bond's length in the Variable B box — for example, 1.0 again for water's second O–H bond.",
      "Read the Result box: the |A| × |B| magnitude product, the denominator of the angle formula.",
      "Divide the vectors' dot product by the Result to get cos θ.",
      "Take the arccosine (inverse cosine) of that value to get the angle in degrees — about 104.5° for water.",
      "Keep both bond lengths in the same units (both angstroms or both picometers).",
    ],
    faqs: [
      { q: "What is the bond angle formula in plain words?", a: "The cosine of the angle equals the dot product of the two bond vectors divided by the product of their lengths: cos θ = (A·B) / (|A||B|). Take the arccosine for the angle." },
      { q: "What are common bond angles?", a: "Linear molecules like CO₂ sit at 180°, trigonal planar at 120°, tetrahedral like methane at 109.5°, and bent water at 104.5°." },
      { q: "When would I calculate a bond angle?", a: "Predicting molecular shape in chemistry class, interpreting X-ray crystal structures, and understanding why water dissolves salt but oil does not." },
      { q: "What units do bond angles use?", a: "Degrees for the angle itself; bond lengths in angstroms or picometers cancel out in the formula, so any consistent length unit works." },
      { q: "How do you find bond angel?", a: "Compute the dot product of the two bond vectors, divide by the product of their lengths (which this tool calculates), then take the arccosine." },
    ],
  },

  "bulk-modulus-calculator": {
    description: `Squeeze a block of steel and it barely notices; squeeze a sponge and it collapses. The bulk modulus measures exactly that stubbornness — how much pressure it takes to shrink a material's volume by a given fraction. The formula is direct: bulk modulus equals the initial volume times the pressure change, divided by the volume change (K = V₀ × ΔP / ΔV). Bigger K means stiffer: steel sits near 160 GPa, water around 2.2 GPa, and air a mere 0.0001 GPa.

Engineers meet this number in surprising places. Deep-sea submersibles diving to the Titanic's 12,500-foot depth face over 5,500 psi of crushing pressure, and every seal and viewport must survive the squeeze. Hydraulic systems depend on oil being nearly incompressible — if brake fluid compressed like air, your brake pedal would feel like stepping on a marshmallow.

This calculator runs the full formula from your four inputs. Type the pressure change in pascals in the Pressure Change (ΔP, Pa) box, the starting volume in cubic meters in the Initial Volume (V₀, m³) box, and the measured volume change in the Volume Change (ΔV, m³) box. The Bulk Modulus (K, GPa) box reports the answer in gigapascals — compare it against published tables to identify or verify your material.`,
    howToSteps: [
      "Type the applied pressure change in pascals in the Pressure Change (ΔP, Pa) box.",
      "Type the sample's starting volume in cubic meters in the Initial Volume (V₀, m³) box.",
      "Type the measured volume shrinkage in the Volume Change (ΔV, m³) box.",
      "Read the Bulk Modulus (K, GPa) box: V₀ × ΔP ÷ ΔV, reported in gigapascals.",
      "Sanity-check the answer — water should land near 2.2 GPa, steel near 160 GPa.",
      "Remember the sign convention: volume decreases under pressure, so use the magnitude of the change.",
    ],
    faqs: [
      { q: "What is the bulk modulus formula in plain words?", a: "Bulk modulus equals initial volume times pressure change divided by volume change: K = V₀ × ΔP / ΔV. It measures resistance to uniform squeezing." },
      { q: "What units does bulk modulus use?", a: "Pascals or gigapascals. Enter pressure in pascals and volumes in cubic meters; the result reads out in GPa." },
      { q: "When would I use a bulk modulus calculator?", a: "Designing deep-sea equipment, checking hydraulic fluid stiffness, modeling shock absorbers, and identifying materials from compression tests." },
      { q: "What is the difference between bulk modulus and Young's modulus?", a: "Bulk modulus resists uniform squeezing from all sides; Young's modulus resists stretching in one direction. Both measure stiffness, in different loading styles." },
      { q: "What is the formular for bulk modulas?", a: "K = V₀ × ΔP / ΔV — multiply the starting volume by the pressure change, then divide by the volume change." },
    ],
  },

  "capacitance-calculator": {
    description: `Two metal plates facing each other across a thin gap can store electric charge — that is a capacitor, and capacitance measures how much charge it holds per volt. The design formula for a parallel-plate capacitor is beautifully physical: capacitance equals the permittivity of the insulating material times the plate area, divided by the separation between the plates. In symbols: C = εA / d. Bigger plates or a thinner gap mean more storage.

This is the math behind the start capacitor in a home air conditioner. When the compressor motor kicks on, that little can-shaped component delivers the phase-shifted jolt that gets the motor spinning. If it fails on a 95-degree July afternoon in Texas, the AC just hums — and the replacement capacitor must match the original's microfarad rating.

This calculator handles the numerator's key multiplication. Type the material's permittivity in the Variable A box (8.85 × 10⁻¹² farads per meter for air or vacuum) and the plate area in square meters in the Variable B box. The Result box gives the ε × A product — divide it by the plate separation in meters and you have the capacitance in farads.`,
    howToSteps: [
      "Type the insulator's permittivity in the Variable A box — 0.00000000000885 for air or vacuum.",
      "Type the plate area in square meters in the Variable B box — for example, 0.01 for a 10 cm × 10 cm plate.",
      "Read the Result box: the ε × A product at the top of the capacitance formula.",
      "Divide the Result by the plate separation in meters to get capacitance in farads.",
      "Convert to microfarads by multiplying by 1,000,000 — real capacitors are rated in µF, nF, or pF.",
      "Keep permittivity and area in SI units (F/m and m²) so the division by meters gives farads.",
    ],
    faqs: [
      { q: "What is the parallel-plate capacitance formula in plain words?", a: "Capacitance equals permittivity times plate area divided by plate separation: C = εA / d. Larger area or smaller gap increases capacitance." },
      { q: "What units does capacitance use?", a: "Farads, with practical capacitors rated in microfarads (µF), nanofarads (nF), or picofarads (pF). Enter permittivity in F/m and area in m²." },
      { q: "When would I calculate capacitance?", a: "Designing filter circuits, replacing AC motor start capacitors, building timing circuits, and sizing energy-storage banks." },
      { q: "What does the dielectric do?", a: "The insulating material between plates multiplies capacitance by its relative permittivity — ceramic can boost it hundreds of times over air." },
      { q: "How do you calculate capcitance?", a: "Multiply the material's permittivity by the plate area, then divide by the gap between plates: C = εA / d." },
    ],
  },

  "capacitor-charge": {
    description: `A camera flash is a capacitor showing off. It sips charge from the battery for a few seconds, stores it, then dumps everything in a millisecond — a burst far brighter than the battery alone could ever produce. The charge sitting on a capacitor follows one clean rule: charge equals capacitance times voltage. In symbols: Q = C × V. Double the voltage and you double the stored charge; double the capacitance and you double it again.

This is the same math inside a defibrillator's charging cycle and the power supply of every desktop computer. It also explains capacitor safety ratings: a capacitor charged to 300 volts holds far more punch than its size suggests, which is why technicians short them with a resistor before handling.

This calculator works all three directions. Pick what to solve for in the Calculate dropdown — charge, capacitance, or voltage. Type the two values you know: capacitance in farads in the Capacitance (C) box and voltage in volts in the Voltage (V) box, or charge in coulombs in the Charge (Q) box. The Computed Value box shows the answer instantly, so you can check a flash circuit's stored charge or verify a replacement capacitor's rating before you buy.`,
    howToSteps: [
      "Choose what to solve for in the Calculate dropdown — Charge (Q), Capacitance (C), or Voltage (V).",
      "Type your capacitance in farads in the Capacitance (C) box — for example, 0.001 for 1000 µF.",
      "Type your voltage in volts in the Voltage (V) box — for example, 300 for a flash circuit.",
      "Read the Computed Value box: 0.001 × 300 = 0.3 coulombs of stored charge in this example.",
      "To solve for voltage instead, enter charge in the Charge (Q) box and capacitance in the Capacitance (C) box.",
      "Remember stored energy too: E = ½CV² joules — that is what makes charged capacitors dangerous to handle.",
    ],
    faqs: [
      { q: "What is the capacitor charge formula in plain words?", a: "Charge equals capacitance times voltage: Q = C × V. A 1000 µF capacitor at 300 V holds 0.3 coulombs." },
      { q: "What units do capacitor calculations use?", a: "Coulombs for charge, farads for capacitance, volts for voltage. Convert microfarads to farads (divide by 1,000,000) before multiplying." },
      { q: "When would I calculate capacitor charge?", a: "Designing camera flashes, checking defibrillator charge cycles, verifying replacement capacitor ratings, and estimating shock hazard." },
      { q: "How much energy does a charged capacitor store?", a: "Energy equals one-half times capacitance times voltage squared (E = ½CV²) in joules — that is the number behind the safety warnings." },
      { q: "How do you calculate capacitor chrage?", a: "Multiply capacitance in farads by voltage in volts: Q = C × V gives charge in coulombs." },
    ],
  },

  "collision-calculator": {
    description: `A fender bender is a momentum accounting problem. Momentum — mass times velocity — cannot be created or destroyed in a collision, only transferred between the vehicles. That single conservation law lets crash investigators work backward: from the crumpled final positions, they reconstruct how fast each car was moving before impact. Insurance adjusters, auto safety engineers, and physics students all balance the same books.

In plain words, the momentum before equals the momentum after: m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′. For each vehicle, its momentum is just its mass times its velocity — and that product is exactly what this calculator computes.

Picture a 3,000-pound sedan rear-ending a 4,000-pound SUV at a stoplight. Type the sedan's mass in the Variable A box and its speed in the Variable B box; the Result box gives its momentum. Repeat for the SUV, then compare the totals before and after — conservation says they must match, and any mismatch points to energy lost crumpling metal. That lost energy is precisely what modern crumple zones are designed to absorb instead of your body.`,
    howToSteps: [
      "Type the first object's mass in the Variable A box — for example, 1360 for a 3,000-pound car in kilograms.",
      "Type its velocity in the Variable B box in matching units — meters per second if mass is in kilograms.",
      "Read the Result box: the object's momentum (mass × velocity).",
      "Repeat for the second object and add the two momenta for the system's total before impact.",
      "Compare with the total after impact — conservation of momentum says the two totals must be equal.",
      "Keep mass and velocity in consistent families (kg with m/s, or slugs with ft/s) on both sides.",
    ],
    faqs: [
      { q: "What is the conservation of momentum formula in plain words?", a: "Total momentum before a collision equals total momentum after: m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′. Each term is one object's mass times its velocity." },
      { q: "What units work for collision math?", a: "Kilogram-meters per second (kg·m/s) in metric, or slug-feet per second in imperial. Mass and velocity units must match on both sides of the equation." },
      { q: "When would I use collision math?", a: "Reconstructing car crashes, designing crumple zones and airbags, analyzing sports impacts, and solving physics homework." },
      { q: "What is the difference between elastic and inelastic collisions?", a: "In elastic collisions kinetic energy is conserved too (billiard balls); in inelastic ones some energy becomes heat and deformation (car crashes)." },
      { q: "How do you calculate colision momentum?", a: "Multiply each object's mass by its velocity, then add the results. This tool computes the mass-times-velocity product for one object at a time." },
    ],
  },
};

Object.assign(BATCH_13, {
  "compressive-strength-calculator": {
    description: `Before a concrete truck pours your new driveway, somebody crushed a cylinder of that exact mix in a lab press. Compressive strength is the maximum squeezing stress a material survives before it fails, and the formula is refreshingly direct: strength equals the failure load divided by the cross-sectional area. In symbols: σ = F / A. A bigger column or a stronger mix pushes the number up.

Residential concrete in the US typically tests around 3,000 to 4,000 psi (about 20 to 28 MPa), while high-rise columns can demand 10,000 psi or more. The lab test is standardized: a 6-by-12-inch cylinder cured for 28 days, then crushed. If it fails below spec, the whole pour is suspect — which is why contractors watch these numbers like hawks.

This calculator runs the σ = F/A formula from your test data. Type the load at which the sample failed, in newtons, in the Failure Load (F, N) box, and the sample's cross-section in square millimeters in the Cross-sectional Area (A, mm²) box. The Compressive Strength box reports megapascals — multiply by 145 to speak psi with your contractor.`,
    howToSteps: [
      "Type the crushing load in newtons in the Failure Load (F, N) box — for example, 500000 for a 500 kN press reading.",
      "Type the sample's cross-sectional area in the Cross-sectional Area (A, mm²) box — about 18,241 mm² for a 6-inch cylinder.",
      "Read the Compressive Strength box: 500,000 ÷ 18,241 ≈ 27.4 MPa in this example.",
      "Convert to psi by multiplying by 145 — 27.4 MPa is roughly 4,000 psi, a solid residential mix.",
      "Compare against your spec: below-spec cylinders mean the pour needs investigation before building continues.",
      "Measure the actual failed area, not the mold size, if the sample barrelled or sheared unevenly.",
    ],
    faqs: [
      { q: "What is the compressive strength formula in plain words?", a: "Compressive strength equals the failure load divided by the cross-sectional area: σ = F / A. A 500 kN load on an 18,241 mm² cylinder gives about 27.4 MPa." },
      { q: "How do I convert MPa to psi?", a: "Multiply megapascals by 145. Standard 4,000-psi residential concrete is about 27.6 MPa." },
      { q: "When would I test compressive strength?", a: "Verifying concrete pours for driveways and foundations, checking masonry units, and qualifying structural columns all require it." },
      { q: "What is a standard concrete test cylinder?", a: "In the US, a 6-inch diameter by 12-inch tall cylinder, cured 28 days, then crushed in a calibrated press." },
      { q: "How do you calculate compressive strenth?", a: "Divide the load at failure (newtons) by the cross-sectional area (mm²). The answer comes out in megapascals." },
    ],
  },

  "creep-rate-calculator": {
    description: `Leave a plastic lawn chair in the Arizona sun long enough and it slowly sags — even though the load never changes. That slow, permanent stretch under constant stress is creep, and engineers quantify it with the creep rate: the change in strain divided by the elapsed time. In symbols: rate = (εₜ − ε₀) / t. Strain itself is just fractional stretch, so the rate tells you how fast the material is giving up, per hour.

Creep is why solder joints in a hot attic can fail years after installation, why plastic pipes under constant water pressure eventually bulge, and why jet engine turbine blades — spinning at full throttle in 2,000-degree gas — are made from single-crystal superalloys. Room-temperature steel barely creeps, but polymers and high-temperature metals creep enough to matter over months and years.

This calculator turns two strain readings into a rate. Type the earlier strain measurement in the Initial Strain (ε₀) box and the later one in the Final Strain (εₜ) box — as decimals, so 2% stretch is 0.02. Type the hours between readings in the Time Elapsed (hours) box. The Creep Rate (per hour) box reports how fast the material is deforming, the number that decides whether a part lasts decades or months.`,
    howToSteps: [
      "Type the first strain reading as a decimal in the Initial Strain (ε₀) box — for example, 0.02 for 2% stretch.",
      "Type the later strain reading in the Final Strain (εₜ) box — for example, 0.023 for 2.3% stretch.",
      "Type the hours between the two readings in the Time Elapsed (hours) box — for example, 720 for 30 days.",
      "Read the Creep Rate (per hour) box: (0.023 − 0.02) ÷ 720 ≈ 0.00000417 per hour in this example.",
      "Compare the rate against the material's allowable creep for your design life — turbine specs often demand rates below 10⁻⁸ per hour.",
      "Keep temperature constant during the test, since creep accelerates dramatically with heat.",
    ],
    faqs: [
      { q: "What is the creep rate formula in plain words?", a: "Creep rate equals the change in strain divided by the time elapsed: (εₜ − ε₀) / t. It measures how fast a material keeps stretching under steady load." },
      { q: "What units does creep rate use?", a: "Strain per unit time — typically per hour or per second. Strain itself is unitless (a fraction), so enter it as a decimal like 0.02." },
      { q: "When would I calculate creep rate?", a: "Qualifying plastics for long-term loads, predicting solder joint life in hot environments, and designing turbine blades and pressure vessels." },
      { q: "What are the stages of creep?", a: "Primary (slowing), secondary (steady — the rate this calculator finds), and tertiary (accelerating to failure). Most design uses the secondary rate." },
      { q: "How do you calculate creep rtae?", a: "Subtract the initial strain from the final strain and divide by the elapsed hours. Enter strains as decimals, not percentages." },
    ],
  },

  "crystallography-calculator": {
    description: `X-rays bounce off the atomic layers inside a crystal the way light bounces off a CD's grooves — and the angles where the reflections line up reveal the spacing between atoms. That is Bragg's law, the founding equation of crystallography: nλ = 2d sin θ. In plain words, the path difference between X-rays reflecting off neighboring atomic planes (2d sin θ) must equal a whole number of wavelengths (nλ) for a bright spot to appear.

From those bright spots, scientists reverse-engineer the crystal: table salt's cubic lattice, diamond's tetrahedral network, and the double helix of DNA — famously photographed as "Photo 51" — were all decoded this way. Pharmaceutical companies use the same technique to verify that every batch of a drug crystallized in the correct form, since the wrong crystal shape can make a pill dissolve too fast or too slow.

This calculator handles the path-difference multiplication at Bragg's law's core. Type twice the interplanar spacing (2d) in the Variable A box and the sine of the reflection angle in the Variable B box — for example, sin 15° ≈ 0.2588. The Result box gives the path difference 2d sin θ. Divide it by your X-ray wavelength λ to find n, the reflection order — whole numbers confirm a genuine crystal reflection.`,
    howToSteps: [
      "Type twice the atomic plane spacing in the Variable A box — for example, 0.4 for 2d = 0.4 nanometers.",
      "Type the sine of the measured reflection angle in the Variable B box — sin 15° is about 0.2588.",
      "Read the Result box: 0.4 × 0.2588 ≈ 0.1035 nm, the path difference between reflections.",
      "Divide the Result by your X-ray wavelength — a whole-number answer (1, 2, 3…) confirms a valid Bragg reflection.",
      "Work in nanometers or angstroms throughout; 1 nm equals 10 angstroms.",
      "Remember n = 1 gives the strongest spot — higher orders appear at steeper angles and fainter intensity.",
    ],
    faqs: [
      { q: "What is Bragg's law in plain words?", a: "X-rays reflecting off crystal planes reinforce when the path difference equals a whole number of wavelengths: nλ = 2d sin θ, where d is the plane spacing and θ the reflection angle." },
      { q: "What units does crystallography use?", a: "Atomic spacings in angstroms or nanometers, X-ray wavelengths in the same units, and angles in degrees (take the sine before multiplying)." },
      { q: "When would I use Bragg's law?", a: "Identifying unknown minerals, verifying drug crystal forms, measuring thin-film thickness, and the famous DNA structure work all use it." },
      { q: "What is n in Bragg's law?", a: "The reflection order — a whole number (1, 2, 3…). It counts how many wavelengths fit in the path difference." },
      { q: "How do you calculate Braggs law?", a: "Multiply 2d by sin θ, then divide by the wavelength λ. Whole-number results mark real crystal reflections." },
    ],
  },

  "damping-calculator": {
    description: `Push a child on a swing and let go — the arcs shrink with every pass until the swing hangs still. That dying-out is damping: a force that opposes motion and drains energy from every oscillation. For the common viscous case, the damping force is simply the damping coefficient times the velocity, pointing the opposite way: F = −c × v. Double the speed, double the resisting force.

Your car's shock absorbers are damping in action. Without them, every pothole would set the springs bouncing for a minute; with them, one controlled rebound and done. Screen door closers, earthquake dampers in skyscrapers, and the suspension on a mountain bike all tune the same trade: too little damping and things oscillate forever, too much and the system feels dead and sluggish. Engineers even name the sweet spot — critical damping — where the system settles fastest without overshooting.

This calculator computes the damping force from its two ingredients. Type the damping coefficient in the Variable A box (in newton-seconds per meter, from your damper's spec sheet) and the current velocity in the Variable B box in meters per second. The Result box gives the resisting force in newtons — the push your damper is exerting at that instant to calm the motion down.`,
    howToSteps: [
      "Type the damping coefficient in the Variable A box — for example, 500 for a damper rated 500 N·s/m.",
      "Type the velocity in meters per second in the Variable B box — for example, 2 for 2 m/s.",
      "Read the Result box: 500 × 2 = 1000 newtons of damping force in this example.",
      "Remember the force always opposes the motion — flip the sign if your convention needs direction.",
      "Faster motion means proportionally more force, which is why dampers calm big bounces quickly and small ones gently.",
      "Keep the coefficient in N·s/m and velocity in m/s so the Result reads in newtons.",
    ],
    faqs: [
      { q: "What is the damping force formula in plain words?", a: "Damping force equals the damping coefficient times velocity, opposing the motion: F = −c × v. A 500 N·s/m damper at 2 m/s pushes back with 1000 N." },
      { q: "What is critical damping?", a: "The exact damping level where a disturbed system returns to rest fastest without oscillating. Car suspensions aim near it — controlled, with no endless bouncing." },
      { q: "When would I calculate damping?", a: "Sizing shock absorbers, tuning screen door closers, designing earthquake dampers for buildings, and silencing vibrating machinery." },
      { q: "What units does the damping coefficient use?", a: "Newton-seconds per meter (N·s/m) — force per unit velocity. Multiply by m/s and the seconds cancel, leaving newtons." },
      { q: "How do you calculate dampnig force?", a: "Multiply the damping coefficient by the velocity: F = c × v, acting opposite to the direction of motion." },
    ],
  },

  "decay-calculator": {
    description: `The radon seeping into basements across the American Midwest is decaying right now — every atom with a fixed probability of breaking apart each second, no exceptions, no slowdown. Radioactive decay follows one exponential rule: the amount remaining equals the starting amount times e raised to negative lambda times time. In symbols: N = N₀ × e^(−λt). The decay constant λ sets the pace, and the half-life — the time for half the atoms to decay — is just ln(2)/λ.

Because the rule is exponential, the drops come in clean fractions: after one half-life half remains, after two a quarter, after three an eighth. Smoke detectors exploit a 432-year half-life isotope (americium-241) so steady the current barely changes over the device's life. Doctors use iodine-131's 8-day half-life the opposite way — hot enough to treat thyroid tissue, gone fast enough to be safe within weeks.

This calculator multiplies out the decay formula's two parts. Type the starting quantity in the Variable A box — atoms, grams, or becquerels — and the decay factor e^(−λt) in the Variable B box (compute it first: raise e to the power of −λt). The Result box gives what remains. A radon test kit reading, a carbon-dating sample, and a nuclear medicine dose all answer the same multiplication.`,
    howToSteps: [
      "Type the starting amount in the Variable A box — for example, 100 for 100 grams.",
      "Compute the decay factor e^(−λt) with a scientific calculator — for one half-life it is exactly 0.5.",
      "Type that factor in the Variable B box.",
      "Read the Result box: 100 × 0.5 = 50 grams remaining after one half-life in this example.",
      "For two half-lives use 0.25, for three 0.125 — each half-life halves whatever is left.",
      "Find λ from the half-life with λ = 0.693 / t½ when you only know the half-life.",
    ],
    faqs: [
      { q: "What is the radioactive decay formula in plain words?", a: "Remaining amount equals starting amount times e to the power of negative lambda times time: N = N₀ × e^(−λt). After each half-life, half of what was there is gone." },
      { q: "What is the relationship between half-life and the decay constant?", a: "Half-life = ln(2) / λ, about 0.693/λ. A larger λ means faster decay and a shorter half-life." },
      { q: "When would I calculate radioactive decay?", a: "Interpreting home radon tests, carbon-dating artifacts, dosing nuclear medicine like iodine-131, and dating rocks with uranium-lead methods." },
      { q: "Can anything speed up or slow down decay?", a: "No — temperature, pressure, and chemistry have no measurable effect. Each isotope decays on its own fixed schedule." },
      { q: "How do you calculate radioactive deacy?", a: "Multiply the starting amount by e^(−λt), where λ is the decay constant and t is the elapsed time. This tool does the final multiplication." },
    ],
  },

  "density-calculator": {
    description: `Archimedes reportedly leapt from his bath shouting "Eureka!" when he realized a crown's density would expose it as fake gold — same weight, wrong volume, case closed. Density is still the quickest identity check in materials science: mass divided by volume. In symbols: ρ = m / V. Gold packs 19.3 grams into every cubic centimeter; aluminum manages only 2.7, which is why a "gold" bar that feels suspiciously light probably is.

The formula runs in three directions, and each one earns its keep. Jewelers and pawn shops check density to spot counterfeits. Homebrewers measure wort density to track fermentation. Truckers live by it — freight is billed by weight, but a trailer fills by volume, so knowing a cargo's density decides how many pallets fit before the axles max out.

This calculator solves whichever variable you need. Choose it in the Calculate dropdown, then type the known values: mass in the Mass (m) box and volume in the Volume (V) box, or density in the Density (ρ) box. The Computed Value box answers instantly — grams per cubic centimeter, pounds per gallon, or whatever consistent family you feed it. Just keep mass and volume in matching units and the density unit follows automatically.`,
    howToSteps: [
      "Choose the unknown in the Calculate dropdown — Density (ρ), Mass (m), or Volume (V).",
      "Type the mass in the Mass (m) box — for example, 193 for 193 grams.",
      "Type the volume in the Volume (V) box — for example, 10 for 10 cubic centimeters.",
      "Read the Computed Value box: 193 ÷ 10 = 19.3 g/cm³ — genuine gold territory in this example.",
      "To find a missing mass instead, enter density in the Density (ρ) box and volume in the Volume (V) box.",
      "Keep units matched: grams with cm³ gives g/cm³; pounds with gallons gives lb/gal.",
    ],
    faqs: [
      { q: "What is the density formula in plain words?", a: "Density equals mass divided by volume: ρ = m / V. A 193-gram bar occupying 10 cm³ has a density of 19.3 g/cm³ — the signature of gold." },
      { q: "What units does density use?", a: "Grams per cubic centimeter in the lab, pounds per gallon or pounds per cubic foot in US industry. Matched mass and volume units produce the density unit automatically." },
      { q: "When would I calculate density?", a: "Spotting fake gold and silver, tracking homebrew fermentation, loading freight trucks, and mixing concrete all depend on it." },
      { q: "What is the density of water?", a: "Exactly 1 g/cm³ (8.34 lb/gal). Objects denser than water sink; less dense ones float — the whole principle behind the crown test." },
      { q: "How do you calculate denisty?", a: "Divide mass by volume: ρ = m / V. Use grams and cubic centimeters for g/cm³, or pounds and gallons for lb/gal." },
    ],
  },

  "diffraction-calculator": {
    description: `Shine a laser pointer through a narrow slit and the spot on the wall is not a clean dot — it spreads into a bright central band flanked by fading stripes. Light bends around obstacles, and the first dark stripe in a single slit obeys a crisp rule: the slit width times the sine of the angle equals the wavelength times the stripe number. In symbols: a sin θ = mλ. Wider slit, tighter pattern; longer wavelength, wider spread.

The CD on your shelf is a diffraction grating doing the same trick in reverse — its microscopic tracks split white light into the rainbow shimmer you see when you tilt it. Engineers use precision gratings to split starlight into spectra, identifying the elements in distant galaxies from the dark lines in their rainbows.

This calculator handles the path-difference product at the formula's heart. Type the slit (or grating) width in the Variable A box — in the same units as your wavelength — and the sine of the measured angle in the Variable B box. The Result box gives a sin θ, the path difference. Divide it by your light's wavelength λ to find m, the stripe number — whole numbers mark exactly where the dark fringes fall.`,
    howToSteps: [
      "Type the slit width in the Variable A box — for example, 0.0001 for a 0.1 mm slit in meters.",
      "Type the sine of the measured angle in the Variable B box — sin 0.3° is about 0.00524.",
      "Read the Result box: the a sin θ path difference in meters.",
      "Divide the Result by your light's wavelength — a 650 nm red laser is 0.00000065 m — to get the fringe number m.",
      "Whole-number answers mark dark fringes; half-integers mark bright ones between them.",
      "Keep slit width and wavelength in the same units (both meters or both nanometers).",
    ],
    faqs: [
      { q: "What is the single-slit diffraction formula in plain words?", a: "Dark fringes appear where slit width times sine of the angle equals a whole number of wavelengths: a sin θ = mλ." },
      { q: "Why does a narrower slit make a wider pattern?", a: "Because the angle grows as wavelength divided by slit width — squeezing the slit spreads the light more, a direct trade of the formula." },
      { q: "When would I calculate diffraction?", a: "Designing laser optics, reading CD and grating spectra, analyzing X-ray crystal patterns, and predicting telescope resolution limits." },
      { q: "What units does diffraction use?", a: "Slit widths and wavelengths in matching length units — meters, millimeters, or nanometers — with the angle's sine being unitless." },
      { q: "How do you calculate difraction minima?", a: "Multiply slit width by sin θ and divide by the wavelength. Whole-number results locate the dark fringes." },
    ],
  },

  "diode-calculator": {
    description: `An LED is a diode that spends its forward voltage making light instead of heat — and the current through any diode follows the Shockley equation, one of electronics' most lopsided formulas: current equals the saturation current times (e raised to voltage over thermal voltage, minus one). In symbols: I = Iₛ(e^(V/(nVₜ)) − 1). Below about 0.7 volts a silicon diode passes almost nothing; a hair above, current explodes exponentially.

That cliff edge is why every LED needs a current-limiting resistor. Hook a red LED straight to a 5-volt Arduino pin and the exponential takes over — amps surge, the LED flashes once, and it is dead. Size the resistor from the diode's forward voltage (about 2 V for red, 3.3 V for blue-white) and the remaining voltage drops harmlessly across the resistor instead.

This calculator evaluates the Shockley equation's core multiplication. Type the diode's saturation current in the Variable A box (often around 10⁻¹² amps for small-signal diodes) and the exponential factor (e^(V/(nVₜ)) − 1) in the Variable B box — compute it first with your forward voltage. The Result box gives the forward current in amps, the number that tells you whether your resistor choice keeps the LED happy or lets the magic smoke out.`,
    howToSteps: [
      "Type the diode's saturation current in the Variable A box — for example, 0.000000000001 for 10⁻¹² A.",
      "Compute (e^(V/(nVₜ)) − 1) with your forward voltage — thermal voltage Vₜ is about 0.02585 V at room temperature.",
      "Type that exponential factor in the Variable B box.",
      "Read the Result box: the diode's forward current in amps.",
      "Compare with the LED's rated current (often 20 mA) — higher means you need a bigger series resistor.",
      "Remember the exponential is brutal: 0.1 V more forward voltage can multiply current tenfold.",
    ],
    faqs: [
      { q: "What is the Shockley diode equation in plain words?", a: "Diode current equals saturation current times (e to the power of voltage over thermal voltage, minus one): I = Iₛ(e^(V/(nVₜ)) − 1). Current explodes exponentially past ~0.7 V." },
      { q: "Why do LEDs need resistors?", a: "Because the diode's exponential curve passes destructive current with only a small voltage rise. The resistor drops the excess voltage and sets a safe current, usually 20 mA." },
      { q: "When would I calculate diode current?", a: "Sizing LED series resistors, designing rectifier circuits, checking solar cell behavior, and analyzing transistor base currents." },
      { q: "What is thermal voltage?", a: "About 25.85 mV at room temperature (kT/q). It sets the steepness of the diode's exponential curve." },
      { q: "How do you calculate diode curent?", a: "Multiply the saturation current by (e^(V/(nVₜ)) − 1) using your diode's forward voltage. This tool performs that multiplication." },
    ],
  },

  "displacement-calculator": {
    description: `A dragster launching down the quarter mile covers distance according to one of motion's greatest hits: displacement equals initial velocity times time, plus one-half times acceleration times time squared. In symbols: s = ut + ½at². The first term is the coasting distance — how far you would roll at your starting speed — and the second is the bonus distance the acceleration piles on.

Watch a jet take off and you see both terms working. The plane rolls at increasing speed down the runway, and the ½at² term dominates because the engines pour on constant thrust. Accident investigators run the same formula backward: from skid-mark length and estimated deceleration, they recover how fast a car was moving when the brakes locked.

This calculator evaluates the full equation from three inputs. Type the starting velocity in the Initial Velocity (u) box, the elapsed time in the Time (t) box, and the steady acceleration in the Acceleration (a) box — feet per second and seconds keep the answer in feet. The Displacement (s) box reports how far the object traveled. A car accelerating from rest at 15 ft/s² for 10 seconds covers 750 feet — most of a quarter mile before the second term finishes its work.`,
    howToSteps: [
      "Type the starting velocity in the Initial Velocity (u) box — for example, 0 for a standing start.",
      "Type the elapsed time in seconds in the Time (t) box — for example, 10.",
      "Type the constant acceleration in the Acceleration (a) box — for example, 15 for 15 ft/s².",
      "Read the Displacement (s) box: 0×10 + ½×15×100 = 750 feet in this example.",
      "Use a negative acceleration for braking — the formula handles slowing down naturally.",
      "Keep all three inputs in matching units (ft/s, s, ft/s²) so the answer reads in feet.",
    ],
    faqs: [
      { q: "What is the displacement formula in plain words?", a: "Displacement equals initial velocity times time plus one-half acceleration times time squared: s = ut + ½at². It gives distance traveled under constant acceleration." },
      { q: "What is the difference between distance and displacement?", a: "Distance counts every step of the path; displacement measures the straight-line change from start to finish. For straight-line motion with no U-turns, they match." },
      { q: "When would I calculate displacement?", a: "Estimating takeoff roll, reconstructing crashes from skid marks, sizing drag strips, and solving projectile motion problems." },
      { q: "What units does displacement use?", a: "Feet or meters for the answer, with velocity in ft/s (or m/s), time in seconds, and acceleration in ft/s² (or m/s²)." },
      { q: "How do you calculate displacment?", a: "Multiply initial velocity by time, add half the acceleration times time squared: s = ut + ½at²." },
    ],
  },

  "distance-calculator": {
    description: `Every road trip runs on the oldest formula in physics: distance equals speed times time. Sixty miles per hour for three hours is 180 miles — no GPS required. Truckers planning fuel stops, pilots filing flight plans, and EV owners sweating the next charger all multiply the same two numbers, because range anxiety is just distance math with consequences.

The formula also runs backward beautifully. Need to cover 300 miles in 4 hours? Divide: you must average 75 mph. Wondering if you can make the airport? Divide the miles by your realistic speed and compare with the clock. Cyclists, runners, and delivery dispatchers live in this equation's rearranged forms all day.

This calculator performs the core multiplication. Type your speed in the Variable A box — miles per hour works perfectly for US driving — and your travel time in hours in the Variable B box. The Result box gives the distance in miles. A 65-mph cruise for 2.5 hours covers 162.5 miles; at that pace you will want a charging stop before the third hour if your EV's real-world range is 200 miles.`,
    howToSteps: [
      "Type your speed in the Variable A box — for example, 65 for 65 mph.",
      "Type your travel time in hours in the Variable B box — for example, 2.5 for two and a half hours.",
      "Read the Result box: 65 × 2.5 = 162.5 miles in this example.",
      "To find a required speed instead, divide your distance by the available time before using the tool.",
      "Add a buffer for traffic and stops — real trip time always exceeds the pure formula.",
      "Keep speed and time in matched families (mph with hours, or ft/s with seconds).",
    ],
    faqs: [
      { q: "What is the distance formula in plain words?", a: "Distance equals speed multiplied by time: d = v × t. At 65 mph for 2.5 hours, you cover 162.5 miles." },
      { q: "How do I find speed or time instead?", a: "Rearrange the same formula: speed = distance ÷ time, and time = distance ÷ speed. All three forms describe the same relationship." },
      { q: "When would I calculate travel distance?", a: "Planning road trips and fuel stops, estimating EV range, filing flight plans, and pacing runners and cyclists." },
      { q: "What units work with this formula?", a: "Any matched pair: mph with hours gives miles; ft/s with seconds gives feet; km/h with hours gives kilometers." },
      { q: "How do you calculate travle distance?", a: "Multiply your average speed by the travel time in hours. For 65 mph over 2.5 hours, the distance is 162.5 miles." },
    ],
  },
});

Object.assign(BATCH_13, {
  "doppler-effect-calculator": {
    description: `An ambulance siren sounds higher-pitched as it races toward you and drops the moment it passes — the Doppler effect, and it is pure relative motion. Sound waves bunch up ahead of a moving source and stretch out behind it, so a listener hears a shifted frequency. The rule: observed frequency equals the source frequency times the speed-of-sound factor, (v ± v₀)/(v ∓ vₛ), where plus signs apply when source and observer move toward each other.

Police radar guns are Doppler machines: they bounce microwaves off your car and read the frequency shift as speed. Astronomers use the same effect on starlight — redshifted galaxies are racing away, the observation that revealed the expanding universe. Even weather radar maps storm winds by the Doppler shift of raindrops.

This calculator performs the final multiplication. Type the source frequency in hertz in the Variable A box — for example, 700 for a 700 Hz siren — and the Doppler factor (the (v ± v₀)/(v ∓ vₛ) ratio, computed from the speeds) in the Variable B box. The Result box gives the observed frequency. A siren approaching at 60 mph in 70-degree air (sound speed ~1,128 ft/s) pushes that 700 Hz tone up to about 756 Hz — the rise your ears catch before the rig passes.`,
    howToSteps: [
      "Type the source frequency in hertz in the Variable A box — for example, 700 for a siren.",
      "Compute the Doppler factor from the speeds: (v + v₀)/(v − vₛ) for motion toward each other.",
      "Type that factor in the Variable B box — about 1.08 for a 60-mph approach in warm air.",
      "Read the Result box: 700 × 1.08 ≈ 756 Hz, the pitch you actually hear.",
      "Flip the signs for a receding source — the factor drops below 1 and the pitch falls.",
      "Use the speed of sound for your conditions: about 1,128 ft/s at 70°F, slower when cold.",
    ],
    faqs: [
      { q: "What is the Doppler effect formula in plain words?", a: "Observed frequency equals source frequency times (v ± v₀)/(v ∓ vₛ). Use plus when moving toward each other, minus when moving apart." },
      { q: "What is the speed of sound in air?", a: "About 1,128 ft/s at 70°F (343 m/s at 20°C). It rises with temperature and barely changes with humidity." },
      { q: "When would I calculate the Doppler shift?", a: "Understanding siren pitch changes, calibrating radar guns, interpreting weather radar winds, and measuring galaxy redshifts." },
      { q: "Does the Doppler effect work for light too?", a: "Yes — approaching sources shift blue, receding ones shift red. Astronomers measured the universe's expansion this way." },
      { q: "How do you calculate doppler shfit?", a: "Multiply the source frequency by the ratio (v ± v₀)/(v ∓ vₛ) using the speed of sound and the two speeds." },
    ],
  },

  "dynamics-calculator": {
    description: `A pickup towing a boat trailer up a launch ramp is a dynamics problem wearing work boots. Dynamics is the study of forces and the motion they cause, and its workhorse is Newton's second law: force equals mass times acceleration. In symbols: F = m × a. Push twice as hard and the acceleration doubles; double the mass and the same push achieves half.

US customary units make this interesting, because the pound is a force, not a mass. The matching mass unit is the slug: one slug accelerated at one ft/s² needs one pound of force. A 150-pound person has a mass of about 4.66 slugs. Get this conversion wrong and your rocket, trebuchet, or go-kart math lands an order of magnitude off.

This calculator performs the defining multiplication. Type the mass in the Variable A box — in slugs for pound-force answers, or kilograms for newton answers — and the acceleration in the Variable B box (ft/s² with slugs, m/s² with kilograms). The Result box gives the force: pound-force or newtons depending on your family. A 100-slug go-kart accelerating at 10 ft/s² needs 1,000 pounds of thrust — now you know what the engine must deliver.`,
    howToSteps: [
      "Type the mass in the Variable A box — for example, 100 for a 100-slug vehicle.",
      "Type the acceleration in the Variable B box — for example, 10 for 10 ft/s².",
      "Read the Result box: 100 × 10 = 1000 pounds of force in this example.",
      "Convert pounds-mass to slugs by dividing by 32.2 before using the tool — 150 lb of person is about 4.66 slugs.",
      "Include every force for net acceleration: thrust minus drag minus rolling resistance, then divide by mass.",
      "Keep families matched: slugs with ft/s² gives pound-force; kilograms with m/s² gives newtons.",
    ],
    faqs: [
      { q: "What is Newton's second law in plain words?", a: "Force equals mass times acceleration: F = m × a. It tells you the push needed to achieve a given acceleration for a given mass." },
      { q: "What is a slug?", a: "The imperial unit of mass. One slug accelerated at 1 ft/s² requires 1 pound of force. Divide pounds-mass by 32.2 to get slugs." },
      { q: "When would I calculate force from mass and acceleration?", a: "Sizing engines and motors, designing tow hitches, analyzing sports collisions, and checking whether a structure survives an earthquake's shaking." },
      { q: "What is the difference between mass and weight?", a: "Mass (slugs or kg) measures matter and never changes; weight (pounds or newtons) is gravity's pull on that mass and changes with location." },
      { q: "How do you calculate force from mass?", a: "Multiply mass by acceleration: F = m × a. Use slugs with ft/s² for pound-force, or kilograms with m/s² for newtons." },
    ],
  },

  "elastic-collision-calculator": {
    description: `The crack of a pool break is an elastic collision announcing itself. In a perfectly elastic collision, two things survive the impact: total momentum and total kinetic energy. Real collisions always lose a little energy to heat and sound — that is the click you hear — but steel ball bearings, billiard balls, and the molecules in the air you breathe come remarkably close to the ideal.

The one-dimensional formulas look intimidating but say something simple: the lighter object bounces back faster, and equal masses trade velocities like relay batons. After a head-on elastic hit, the new velocities are v₁′ = ((m₁−m₂)v₁ + 2m₂v₂)/(m₁+m₂) and the mirror for v₂′. When a cue ball strikes a stationary eight ball dead center, the cue ball nearly stops and the eight ball inherits almost the full speed — mass traded for motion.

This calculator computes the momentum ingredient each formula needs. Type one ball's mass in the Variable A box and its velocity in the Variable B box; the Result box gives its momentum. Do it for both balls before and after — momentum conservation demands the totals match — then check that ½mv² totals match too. That double bookkeeping is what separates the elastic break from a fender bender.`,
    howToSteps: [
      "Type the first ball's mass in the Variable A box — for example, 0.17 for a 170-gram pool ball in kilograms.",
      "Type its velocity in meters per second in the Variable B box — for example, 5 for a firm break shot.",
      "Read the Result box: the ball's momentum before impact.",
      "Repeat for the second ball, then add both momenta for the system's conserved total.",
      "Verify kinetic energy too — compute ½mv² for each ball and confirm the totals match before and after.",
      "Keep mass and velocity in matched units (kg with m/s) for both balls.",
    ],
    faqs: [
      { q: "What is conserved in an elastic collision?", a: "Both total momentum and total kinetic energy. That double conservation is what defines elastic — billiard balls approximate it well." },
      { q: "What happens when equal masses collide head-on?", a: "They trade velocities. A moving cue ball striking a stationary identical ball stops dead while the target takes off at the original speed." },
      { q: "When would I calculate an elastic collision?", a: "Predicting billiard shots, modeling gas molecule behavior, designing Newton's cradle toys, and analyzing particle accelerator events." },
      { q: "What is the difference between elastic and perfectly inelastic collisions?", a: "Elastic conserves kinetic energy; perfectly inelastic sticks the objects together and loses the maximum energy to deformation." },
      { q: "How do you calculate elastic collison velocities?", a: "Use v₁′ = ((m₁−m₂)v₁ + 2m₂v₂)/(m₁+m₂) and its mirror. This tool computes the momentum terms the formulas are built from." },
    ],
  },

  "elastic-modulus-calculator": {
    description: `A fishing rod bends deep and springs back; a steel rebar barely flexes at all. Young's modulus — the elastic modulus — puts a number on that personality: it is the tensile stress divided by the tensile strain. In symbols: E = σ / ε. Stress is force per area, strain is fractional stretch, and their ratio tells you how stiff the material is. Steel sits near 200 GPa, aluminum around 69 GPa, and rubber down near 0.01 GPa.

Engineers reach for E constantly. Sizing a cable for a deck railing, checking whether a 3D-printed bracket will hold its shape, or choosing between oak and pine for a workbench — stiffness decides, and E quantifies it. Because the modulus is a material property, one published number covers every shape: a steel wire and a steel I-beam share the same E, even though the beam is vastly harder to bend.

This calculator divides your test data into the modulus. Type the measured tensile stress in pascals in the Tensile Stress (σ, Pa) box and the measured strain as a decimal in the Tensile Strain (ε) box — 0.001 for a tenth of a percent stretch. The Young's Elastic Modulus (E, GPa) box reports gigapascals. A steel sample stressed to 200 MPa at 0.001 strain returns 200 GPa, right on the textbook value.`,
    howToSteps: [
      "Type the tensile stress in pascals in the Tensile Stress (σ, Pa) box — for example, 200000000 for 200 MPa.",
      "Type the strain as a decimal in the Tensile Strain (ε) box — for example, 0.001.",
      "Read the Young's Elastic Modulus (E, GPa) box: 200,000,000 ÷ 0.001 = 200 GPa in this example.",
      "Sanity-check against known values: steel ~200 GPa, aluminum ~69 GPa, concrete ~30 GPa.",
      "Measure strain in the elastic region only — past the yield point the ratio stops being the modulus.",
      "Keep stress in pascals and strain unitless so the result reads correctly in GPa.",
    ],
    faqs: [
      { q: "What is Young's modulus in plain words?", a: "Stiffness as a number: tensile stress divided by tensile strain (E = σ / ε). Steel's 200 GPa means it takes enormous stress to stretch it slightly." },
      { q: "What is the difference between stress and strain?", a: "Stress is force per unit area (pascals); strain is fractional stretch (unitless, like 0.001). Their ratio is the modulus." },
      { q: "When would I calculate elastic modulus?", a: "Sizing cables and beams, comparing materials for a project, verifying 3D-print filaments, and checking that a part springs back instead of staying bent." },
      { q: "What units does Young's modulus use?", a: "Pascals, almost always gigapascals. Enter stress in pascals and strain as a decimal; the answer reads in GPa." },
      { q: "How do you calculate youngs modulus?", a: "Divide tensile stress by tensile strain: E = σ / ε, staying within the material's elastic region." },
    ],
  },

  "electric-field-calculator": {
    description: `The zap when you touch a doorknob on a dry winter day is an electric field discharging through you. An electric field is the invisible push that a charged object exerts on the space around it, measured in newtons per coulomb — the force each coulomb of charge would feel there. The force on any charge sitting in a field is simply charge times field strength: F = q × E. Double the charge, double the yank.

Fields also radiate from charges themselves: a point charge Q creates a field of kQ/r² at distance r, falling off with the square of the distance — which is why static cling is fierce up close and negligible across the room. Photocopiers and laser printers choreograph these fields to steer toner with exquisite precision, and the field between storm clouds and ground is what finally rips the air apart as lightning.

This calculator computes the force-on-a-charge product. Type the charge in coulombs in the Variable A box — static charges are tiny, like 0.000001 for a microcoulomb — and the field strength in newtons per coulomb in the Variable B box. The Result box gives the force in newtons. A microcoulomb in a 1,000 N/C field feels a millinewton — small, but plenty to lift a dust mote or snap a spark across a fingertip.`,
    howToSteps: [
      "Type the charge in coulombs in the Variable A box — for example, 0.000001 for one microcoulomb.",
      "Type the field strength in newtons per coulomb in the Variable B box — for example, 1000.",
      "Read the Result box: 0.000001 × 1000 = 0.001 newtons of force in this example.",
      "Remember the force points along the field for positive charges and opposite for negative ones.",
      "For a point charge's own field, compute E = kQ/r² first (k = 9 × 10⁹), then use it here.",
      "Keep charge in coulombs and field in N/C so the Result reads in newtons.",
    ],
    faqs: [
      { q: "What is the electric force formula in plain words?", a: "Force equals charge times electric field strength: F = q × E. A microcoulomb in a 1000 N/C field feels 0.001 newtons." },
      { q: "What is electric field strength?", a: "Force per unit charge (N/C) at a point in space. It describes how strongly the field pushes any charge placed there." },
      { q: "When would I calculate electric field force?", a: "Analyzing static shocks, designing photocopier drums, estimating lightning risk, and sizing electrostatic precipitators." },
      { q: "What units do electric field calculations use?", a: "Coulombs for charge, newtons per coulomb (or volts per meter) for field, newtons for the resulting force." },
      { q: "How do you calculate electric feild force?", a: "Multiply the charge in coulombs by the field strength in N/C: F = q × E gives newtons." },
    ],
  },

  "electric-power-calculator": {
    description: `A 1,500-watt space heater plugged into a standard US outlet draws 12.5 amps — uncomfortably close to the 15-amp breaker guarding that circuit. Plug in a hair dryer too and the breaker does its job: darkness. Electric power is the rate energy flows, and the master formula is power equals voltage times current: P = V × I. Two rearrangements cover every other case: P = V²/R and P = I²R.

This one formula prices your electric bill. Utilities charge by the kilowatt-hour — 1,000 watts for one hour — so that space heater costs about 18 cents an hour at typical US rates. It also sizes every circuit in your house: watts divided by 120 volts gives the amps, and the amps pick the breaker and the wire gauge. Electricians do this math before breakfast.

This calculator works in whichever mode you need. Pick the formula in the Formula Mode dropdown, then type voltage in the Voltage (V) box, current in the Current (I) box, or resistance in the Resistance (R) box as the mode requires. The Electric Power (P) box reports watts instantly — check that heater-plus-dryer combo before the breaker checks it for you.`,
    howToSteps: [
      "Choose your formula in the Formula Mode dropdown — V×I, V²/R, or I²R.",
      "Type the voltage in the Voltage (V) box — for example, 120 for a standard US outlet.",
      "Type the current in amps in the Current (I) box — for example, 12.5.",
      "Read the Electric Power (P) box: 120 × 12.5 = 1500 watts in this example.",
      "To size a breaker instead, divide your watts by 120 V and pick the next standard breaker above the amps.",
      "Estimate cost by multiplying kilowatts by hours used and your utility's per-kWh rate.",
    ],
    faqs: [
      { q: "What is the electric power formula in plain words?", a: "Power equals voltage times current: P = V × I. A 120 V outlet delivering 12.5 A supplies 1,500 watts." },
      { q: "What are the other power formulas?", a: "P = V²/R when you know voltage and resistance, and P = I²R when you know current and resistance — all three are the same law rearranged." },
      { q: "When would I calculate electric power?", a: "Sizing breakers and wire, estimating appliance energy cost, checking whether two heaters share one circuit safely, and specifying solar panels." },
      { q: "What is a kilowatt-hour?", a: "1,000 watts used for one hour — the unit on your electric bill. A 1,500 W heater running an hour uses 1.5 kWh." },
      { q: "How do you calculate electirc power?", a: "Multiply volts by amps: P = V × I gives watts. For a 120 V, 12.5 A heater, that is 1,500 watts." },
    ],
  },

  "electromagnetic-calculator": {
    description: `Your favorite FM station at 101.5 MHz broadcasts waves about nine and a half feet long — because every electromagnetic wave obeys one elegant rule: the speed of light equals wavelength times frequency. In symbols: c = λ × f. Light, radio, microwaves, X-rays — the whole spectrum — all travel at 299,792,458 meters per second in vacuum, so wavelength and frequency are locked in a perfect trade: higher frequency means shorter wavelength.

This one relation organizes the entire dial. AM radio's long waves (hundreds of meters) hug the ground and travel far at night; FM's meter-scale waves give better fidelity but need line of sight; your microwave oven's 12-centimeter waves are sized to slosh water molecules. Antenna builders use it directly: a quarter-wave antenna for 101.5 MHz is about 29 inches of wire.

This calculator multiplies the relation's two sides. Type the wavelength in meters in the Variable A box and the frequency in hertz in the Variable B box. The Result box should read the speed of light — 299,792,458 — confirming your numbers describe a real wave. Or work backward: type a target speed of light and a known frequency to solve for the wavelength your antenna needs.`,
    howToSteps: [
      "Type the wavelength in meters in the Variable A box — for example, 2.95 for an FM wave.",
      "Type the frequency in hertz in the Variable B box — for example, 101500000 for 101.5 MHz.",
      "Read the Result box: it should land at 299,792,458 — the speed of light, confirming a valid wave.",
      "To design an antenna, divide the speed of light by your station's frequency to get the full wavelength.",
      "Take a quarter of that wavelength for a classic quarter-wave whip antenna length.",
      "Keep wavelength in meters and frequency in hertz so the product reads in m/s.",
    ],
    faqs: [
      { q: "What is the electromagnetic wave formula in plain words?", a: "Speed of light equals wavelength times frequency: c = λ × f. A 101.5 MHz FM signal has a wavelength of about 2.95 meters." },
      { q: "Do all EM waves travel at the same speed?", a: "In vacuum, yes — exactly 299,792,458 m/s, from radio waves to gamma rays. Materials like glass slow them slightly." },
      { q: "When would I calculate wavelength?", a: "Cutting antenna wire, understanding the radio dial, sizing microwave oven cavities, and matching Wi-Fi channels to room layouts." },
      { q: "What is the wavelength of visible light?", a: "Roughly 400 to 700 nanometers — violet is shortest, red longest. Radio waves are millions of times longer." },
      { q: "How do you calculate wavelenght from frequency?", a: "Divide the speed of light by the frequency: λ = c / f. For 101.5 MHz, that is 299,792,458 ÷ 101,500,000 ≈ 2.95 meters." },
    ],
  },

  "entropy-calculator": {
    description: `Your bedroom drifts toward mess on its own, and physics has a name for that drift: entropy. In thermodynamics, entropy measures disorder — and for a reversible heat transfer, the change is simply the heat energy divided by the absolute temperature: ΔS = Q / T. Add heat at high temperature and entropy barely budges; dump the same heat into something cold and entropy jumps.

The second law of thermodynamics says the universe's total entropy never decreases, which is why heat flows from hot to cold and never the reverse on its own. Your refrigerator fights this law around the clock, spending electrical work to pump heat from the cold interior to the warm kitchen — and the entropy math sets the minimum energy that fight must cost. Power plants live by the same accounting: the bigger the temperature gap between boiler and cooling tower, the more useful work each joule of heat can do.

This calculator performs the entropy division's core step. Type the heat energy in joules in the Variable A box and the reciprocal of the absolute temperature (1/T, using kelvin) in the Variable B box. The Result box gives the entropy change in joules per kelvin — the disorder price tag of that heat transfer.`,
    howToSteps: [
      "Type the heat energy in joules in the Variable A box — for example, 1000.",
      "Compute 1/T with absolute temperature in kelvin — for 300 K that is about 0.00333 — and type it in the Variable B box.",
      "Read the Result box: 1000 × 0.00333 ≈ 3.33 joules per kelvin of entropy change.",
      "Notice the temperature effect: the same 1000 J at 600 K produces half the entropy change.",
      "Always use kelvin (Celsius + 273.15) — the formula breaks with ordinary temperature scales.",
      "Compare hot-to-cold transfers: entropy gained by the cold side always exceeds entropy lost by the hot side.",
    ],
    faqs: [
      { q: "What is the entropy change formula in plain words?", a: "Entropy change equals heat transferred divided by absolute temperature: ΔS = Q / T, in joules per kelvin." },
      { q: "What is the second law of thermodynamics?", a: "Total entropy of an isolated system never decreases. It is why heat flows hot to cold, why engines waste heat, and why time has a direction." },
      { q: "When would I calculate entropy?", a: "Analyzing refrigerator and heat pump efficiency, sizing power plant cooling, and understanding the theoretical limits of engines." },
      { q: "What units does entropy use?", a: "Joules per kelvin (J/K). Enter heat in joules and temperature in kelvin." },
      { q: "How do you calculate entrophy change?", a: "Divide the heat in joules by the absolute temperature in kelvin: ΔS = Q / T." },
    ],
  },

  "fatigue-strength-calculator": {
    description: `Bend a paperclip back and forth and it snaps long before its rated strength — that is fatigue, the silent killer of axles, wings, and bridges. Materials survive far fewer stress cycles than their single-pull strength suggests, so engineers derate the tensile strength with a fatigue limit factor to get the safe cyclic stress: fatigue strength equals the factor times the ultimate tensile strength. In symbols: S_e = factor × S_ut. For polished steel the factor hovers near 0.5; for rough, notched, or corroded parts it drops much lower.

Airplane fuselages live this math every flight — each pressurization is one more cycle on the aluminum skin, which is why jets retire after a rated number of flights, not years. Truck axles, crankshafts, and even the wire in a repeatedly flexed phone charger fail the same way: not from one big load, but from thousands of small ones.

This calculator applies the derating. Type the material's ultimate tensile strength in megapascals in the Tensile Strength (S_ut, MPa) box and your combined fatigue factor — accounting for surface finish, size, and stress concentrations — in the Fatigue limit factor box. The Fatigue Limit / Strength (MPa) box reports the safe cyclic stress. Design below it, and the part theoretically lasts forever; design above it, and you are counting cycles until the crack wins.`,
    howToSteps: [
      "Type the ultimate tensile strength in the Tensile Strength (S_ut, MPa) box — for example, 800 for a steel alloy.",
      "Type your combined fatigue factor in the Fatigue limit factor box — for example, 0.4 for a machined part with a notch.",
      "Read the Fatigue Limit / Strength (MPa) box: 800 × 0.4 = 320 MPa of safe cyclic stress in this example.",
      "Keep operating stresses below this number for theoretically infinite life in steel.",
      "Lower the factor for rough surfaces, corrosion, or sharp corners — each concentrates stress and shortens life.",
      "Remember aluminum has no true fatigue limit: it eventually fails at any cyclic stress, so design uses a finite-life rating instead.",
    ],
    faqs: [
      { q: "What is the fatigue strength formula in plain words?", a: "Fatigue strength equals a derating factor times the ultimate tensile strength: S_e = factor × S_ut. Polished steel uses about 0.5; real parts use less." },
      { q: "What is the fatigue limit?", a: "The cyclic stress below which steel can survive essentially infinite cycles. Stay under it and the part never fails from fatigue." },
      { q: "When would I calculate fatigue strength?", a: "Designing axles, crankshafts, aircraft structures, bridges, and anything else loaded repeatedly." },
      { q: "Why do parts fail below their rated strength?", a: "Microscopic cracks grow a tiny bit with each cycle. One big pull never starts them, but thousands of small pulls finish the job." },
      { q: "How do you calculate fatigue strenght?", a: "Multiply the ultimate tensile strength by the fatigue limit factor covering surface, size, and notch effects." },
    ],
  },

  "flexural-strength-calculator": {
    description: `Stand on the middle of a deck board spanning two joists and it bends — the top surface squeezes, the bottom surface stretches, and the board's flexural strength decides whether it holds you or snaps. The standard three-point bend test loads a small beam dead center until it breaks, and the breaking stress is: flexural strength equals 3 times load times span, divided by 2 times width times thickness squared. In symbols: σ = 3FL / (2bd²).

The thickness-squared term is the story. Doubling a board's thickness quadruples its bending strength, which is why a 2×8 joist so thoroughly outperforms a 2×4. Ceramic tile, concrete pavers, and composite decking are all qualified this way — brittle materials that would be awkward to pull in tension get bent instead, and the formula converts the breaking load into a proper stress.

This calculator runs the full test formula. Type the breaking load in newtons in the Failure Load (F, N) box, the support spacing in millimeters in the Support Span Length (L, mm) box, and the specimen's width and thickness in the Specimen Width (b, mm) and Specimen Thickness (d, mm) boxes. The Flexural Strength box reports megapascals — compare it with the manufacturer's rating before you trust that span with a hot tub.`,
    howToSteps: [
      "Type the load at failure in newtons in the Failure Load (F, N) box.",
      "Type the distance between the two supports in the Support Span Length (L, mm) box.",
      "Type the specimen width in the Specimen Width (b, mm) box and thickness in the Specimen Thickness (d, mm) box.",
      "Read the Flexural Strength box: 3×F×L ÷ (2×b×d²), reported in megapascals.",
      "Remember thickness matters most — a slightly thicker board beats a slightly wider one by a squared margin.",
      "Test and compare in consistent units: newtons with millimeters gives N/mm², which equals MPa directly.",
    ],
    faqs: [
      { q: "What is the flexural strength formula in plain words?", a: "Flexural strength equals 3 × load × span divided by 2 × width × thickness²: σ = 3FL/(2bd²). It is the bending stress at failure in a three-point test." },
      { q: "Why is thickness squared in the formula?", a: "Because bending stiffness grows with the square of depth. Doubling thickness quadruples strength — the single biggest lever in beam design." },
      { q: "When would I test flexural strength?", a: "Qualifying deck boards, ceramic tile, concrete pavers, and composite lumber — especially brittle materials tested in bending rather than tension." },
      { q: "What is the difference between flexural and tensile strength?", a: "Flexural measures breaking under bending; tensile measures breaking under straight pulling. Brittle materials often test higher in bending." },
      { q: "How do you calculate flexural strenth?", a: "Use σ = 3FL/(2bd²) with load in newtons and all dimensions in millimeters for a direct megapascal answer." },
    ],
  },
});

Object.assign(BATCH_13, {
  "fluid-dynamics-calculator": {
    description: `Put your thumb over a garden hose and the water jets farther — the same flow squeezing through a smaller opening must speed up. That is the continuity equation, fluid dynamics' simplest conservation law: volume flow rate equals cross-sectional area times velocity, Q = A × v, and that rate stays constant along a pipe. Halve the area, double the speed. Municipal water systems, fire hoses, and IV drips all obey it without exception.

US plumbing speaks gallons per minute, and the formula translates directly: a 5/8-inch garden hose flowing at 4 ft/s delivers about 3.8 gallons per minute through its 0.0021-square-foot opening. Crank the nozzle and the area shrinks, velocity climbs, and the stream reaches the far flower bed. The same math sizes culverts under highways and predicts how fast a draining water heater empties.

This calculator performs that core multiplication. Type the pipe or nozzle's cross-sectional area in the Variable A box — in square feet for US plumbing — and the flow velocity in feet per second in the Variable B box. The Result box gives the volume flow rate in cubic feet per second; multiply by 448.8 to speak gallons per minute with your plumber.`,
    howToSteps: [
      "Type the flow area in square feet in the Variable A box — for example, 0.0021 for a 5/8-inch hose.",
      "Type the flow velocity in feet per second in the Variable B box — for example, 4.",
      "Read the Result box: 0.0021 × 4 ≈ 0.0084 cubic feet per second in this example.",
      "Multiply by 448.8 to convert to gallons per minute — about 3.8 GPM here.",
      "Remember the trade: shrinking the area raises velocity for the same flow rate, which is how nozzles work.",
      "Keep area in ft² and velocity in ft/s so the Result reads in ft³/s.",
    ],
    faqs: [
      { q: "What is the continuity equation in plain words?", a: "Volume flow rate equals area times velocity (Q = A × v) and stays constant along a pipe. Smaller opening, faster flow." },
      { q: "How do I convert cubic feet per second to GPM?", a: "Multiply by 448.8. A flow of 0.0084 ft³/s is about 3.8 gallons per minute." },
      { q: "When would I calculate flow rate?", a: "Sizing garden hoses and nozzles, designing culverts and drains, checking fire-hose reach, and specifying pumps." },
      { q: "What is the difference between laminar and turbulent flow?", a: "Laminar flow glides in smooth layers; turbulent flow churns and mixes. The Reynolds number predicts which one you get." },
      { q: "How do you calculate flow rte?", a: "Multiply the cross-sectional area by the flow velocity: Q = A × v, in matching length and time units." },
    ],
  },

  "force-calculator": {
    description: `A linebacker meeting a running back at full speed is Newton's second law with shoulder pads. Force equals mass times acceleration — F = m × a — the three-word sentence that built the modern world. It tells you the shove needed to change any motion: the thrust to launch a rocket, the grip to stop a car, the hit to move a line of scrimmage.

The units tell their own story. In metric, one newton accelerates one kilogram at one meter per second squared — about the weight of an apple in your hand. In imperial, the pound-force does the same job for slugs and feet per second squared, which is why engineers still convert pounds-mass to slugs (divide by 32.2) before the formula behaves.

This calculator works the law in every direction. Pick your unknown in the Calculate dropdown — force, mass, or acceleration. Type mass in the Mass (m) box and acceleration in the Acceleration (a) box to find force, or fill any other two to solve the third. The Computed Value box answers instantly: a 100-kg linebacker accelerating at 4 m/s² delivers 400 newtons of hit — now multiply by the whole defensive line.`,
    howToSteps: [
      "Choose the unknown in the Calculate dropdown — Force (F), Mass (m), or Acceleration (a).",
      "Type the mass in the Mass (m) box — for example, 100 for 100 kg.",
      "Type the acceleration in the Acceleration (a) box — for example, 4 for 4 m/s².",
      "Read the Computed Value box: 100 × 4 = 400 newtons in this example.",
      "To find acceleration instead, enter force in the Force (F) box and mass in the Mass (m) box.",
      "Keep families matched: kilograms with m/s² gives newtons; slugs with ft/s² gives pound-force.",
    ],
    faqs: [
      { q: "What is the formula for force?", a: "Multiply mass by acceleration: F = m × a. A 100-kg player accelerating at 4 m/s² delivers 400 newtons of force." },
      { q: "What is a newton?", a: "The force that accelerates 1 kg at 1 m/s² — roughly the weight of an apple. About 4.45 newtons make one pound-force." },
      { q: "When would I calculate force?", a: "Analyzing sports impacts, sizing motors and actuators, designing restraints and padding, and checking structural loads." },
      { q: "What is net force?", a: "The vector sum of all forces on an object. Only the net force causes acceleration — balanced forces cancel out." },
      { q: "How do you calculate froce?", a: "Multiply mass by acceleration: F = m × a, with matched units — kg with m/s² for newtons." },
    ],
  },

  "fracture-toughness-calculator": {
    description: `A tiny crack in a gas pipeline is a loaded gun — and fracture toughness measures how big the bullet can get before it fires. When a crack sits in stressed material, the stress concentrates at its tip, and the stress intensity is: K = Y × σ × √(πa), where σ is the applied stress, a is the crack length, and Y is a geometry factor near 1. If K exceeds the material's fracture toughness K_Ic, the crack runs catastrophically.

This is the math behind pipeline inspection schedules and bridge weld checks. Inspectors hunt cracks with ultrasound, measure them, and compute K against the steel's rated toughness — the calculation decides whether the line keeps running, gets a repair sleeve, or shuts down today. The square root matters enormously: doubling the crack length raises K by only 41%, but doubling the stress doubles it outright.

This calculator evaluates the full stress-intensity formula. Type the applied stress in megapascals in the Applied Stress (σ, MPa) box, the crack length in millimeters in the Crack Length (a, mm) box, and the geometry factor — typically 1.0 to 1.2 for surface cracks — in the Geometry Factor (Y) box. The Fracture Toughness (K_Ic, MPa·m^0.5) box reports K. Compare it with the material's rated K_Ic: margin means sleep well; none means call the repair crew.`,
    howToSteps: [
      "Type the applied stress in the Applied Stress (σ, MPa) box — for example, 200.",
      "Type the measured crack length in the Crack Length (a, mm) box — for example, 5.",
      "Type the geometry factor in the Geometry Factor (Y) box — for example, 1.12 for a surface crack.",
      "Read the Fracture Toughness (K_Ic, MPa·m^0.5) box: 1.12 × 200 × √(π × 0.005) ≈ 28 MPa·m^0.5 in this example.",
      "Convert crack length to meters inside the square root — 5 mm is 0.005 m.",
      "Compare the result against the material's rated K_Ic from its mill certificate or handbook.",
    ],
    faqs: [
      { q: "What is the stress intensity formula in plain words?", a: "K equals geometry factor times stress times the square root of pi times crack length: K = Yσ√(πa). It measures how hard a crack's tip is being driven." },
      { q: "What is fracture toughness?", a: "A material's rated resistance to crack growth (K_Ic). When the computed K exceeds K_Ic, the crack propagates catastrophically." },
      { q: "When would I calculate stress intensity?", a: "Scheduling pipeline inspections, evaluating bridge weld cracks, qualifying aircraft structures, and deciding repair-vs-replace on pressure vessels." },
      { q: "What units does fracture toughness use?", a: "MPa·m^0.5 (megapascal root-meters). Enter stress in MPa and crack length converted to meters." },
      { q: "How do you calculate fracture toughnes?", a: "Multiply the geometry factor by the stress and by the square root of (π × crack length in meters)." },
    ],
  },

  "free-fall-calculator": {
    description: `A skydiver stepping out at 13,000 feet accelerates at 32.2 ft/s² — until air resistance catches up and terminal velocity caps the fall around 120 mph belly-down. Free fall is motion under gravity alone, and two formulas tell the whole story: distance fallen equals one-half times gravity times time squared (d = ½gt²), and velocity equals gravity times time (v = gt). Double the fall time and you fall four times farther but only twice as fast.

Galileo's famous insight was that mass cancels out — a bowling ball and a feather fall together in a vacuum, as Apollo 15's hammer-and-feather drop proved on the Moon. On Earth, air drag spoils the purity, which is why the calculator's Terminal Velocity (v) field matters: it is the speed where drag balances weight and acceleration stops.

This calculator runs both fall formulas from your inputs. Type the fall time in seconds in the Fall Time (t) box and gravity — 32.2 ft/s² on Earth, or 9.8 m/s² — in the Gravitational Acceleration (g) box. The Fall Distance (d) box reports how far the object dropped and the Terminal Velocity (v) box the speed reached. Three seconds of true free fall covers 145 feet and reaches 97 ft/s — about 66 mph, roughly a highway-speed plunge.`,
    howToSteps: [
      "Type the fall time in seconds in the Fall Time (t) box — for example, 3.",
      "Type gravity in the Gravitational Acceleration (g) box — 32.2 for ft/s² on Earth.",
      "Read the Fall Distance (d) box: ½ × 32.2 × 9 = 145 feet in this example.",
      "Read the Terminal Velocity (v) box: 32.2 × 3 ≈ 97 ft/s, about 66 mph.",
      "Remember air drag: real falls approach a terminal velocity where these vacuum formulas overestimate.",
      "Keep time in seconds with g in ft/s² for feet, or g in m/s² for meters.",
    ],
    faqs: [
      { q: "What is the free fall distance formula in plain words?", a: "Distance equals one-half times gravity times time squared: d = ½gt². Three seconds of falling covers about 145 feet on Earth." },
      { q: "What is terminal velocity?", a: "The steady speed where air drag equals weight and acceleration stops — about 120 mph for a belly-down skydiver, 200 mph head-down." },
      { q: "When would I calculate free fall?", a: "Estimating drop times for construction, analyzing skydiving and BASE jumps, sizing elevator safety systems, and solving projectile problems." },
      { q: "Do heavier objects fall faster?", a: "In a vacuum, no — Galileo proved mass cancels out. In air, heavier objects reach higher terminal velocities because drag matters less." },
      { q: "How do you calculate free fall distnace?", a: "Use d = ½gt² with g = 32.2 ft/s² and time in seconds. Velocity at any moment is v = gt." },
    ],
  },

  "friction-calculator": {
    description: `A car sliding on black ice is friction failing at its one job. Friction force equals the coefficient of friction times the normal force pressing the surfaces together: F = μ × N. The coefficient μ is pure personality — about 0.7 for rubber on dry asphalt, 0.3 on wet roads, and a treacherous 0.1 on ice. The normal force is usually just the weight, which is why heavier cars grip better but also need more distance to stop.

Tires are a friction compromise engineered to the decimal. Racing slicks maximize μ on dry tracks; winter tires stay soft in the cold to claw ice; and every ABS system modulates braking to hover at peak μ instead of locking into a skid. Even walking depends on it — try crossing a polished floor in socks and μ announces itself immediately.

This calculator multiplies the friction law's two terms. Type the coefficient of friction in the Variable A box — 0.7 for dry asphalt, 0.1 for ice — and the normal force in pounds or newtons in the Variable B box. The Result box gives the friction force: the maximum grip available before sliding starts. A 3,000-pound car on dry asphalt commands about 2,100 pounds of grip; on ice, barely 300 — which is exactly why stopping distances multiply tenfold.`,
    howToSteps: [
      "Type the friction coefficient in the Variable A box — for example, 0.7 for rubber on dry asphalt.",
      "Type the normal force in the Variable B box — for example, 3000 for a 3,000-pound car on level ground.",
      "Read the Result box: 0.7 × 3000 = 2100 pounds of available grip in this example.",
      "On a slope, use only the perpendicular component of weight — multiply by the cosine of the slope angle.",
      "Compare required vs. available: if braking demands more force than μN, the wheels lock and slide.",
      "Keep the normal force in pounds for pound-force answers, or newtons for newton answers.",
    ],
    faqs: [
      { q: "What is the friction formula in plain words?", a: "Friction force equals the coefficient of friction times the normal force: F = μ × N. Rubber on dry asphalt (μ ≈ 0.7) on a 3,000-lb car gives ~2,100 lb of grip." },
      { q: "What is the difference between static and kinetic friction?", a: "Static friction holds things still and is stronger; kinetic friction acts during sliding and is weaker — which is why it is harder to start pushing furniture than to keep it moving." },
      { q: "When would I calculate friction?", a: "Estimating stopping distances, sizing conveyor drives, designing brakes and clutches, and checking whether a slope is walkable." },
      { q: "What are typical friction coefficients?", a: "Rubber on dry asphalt ~0.7, on wet ~0.4, on ice ~0.1; steel on steel ~0.6; Teflon on steel ~0.04." },
      { q: "How do you calculate friciton force?", a: "Multiply the friction coefficient μ by the normal force N pressing the surfaces together: F = μN." },
    ],
  },

  "gravitational-force": {
    description: `The Moon tugs on the oceans and raises the tides, and Newton's law of universal gravitation prices that pull exactly: gravitational force equals G times both masses divided by the distance squared. In symbols: F = G × m₁ × m₂ / r², with G ≈ 6.674 × 10⁻¹¹. The inverse square is the drama — double the distance, quarter the force — which is why the Sun, despite its enormity, tugs Earth's oceans less than half as hard as the nearby Moon.

Satellite engineers live inside this equation. A GPS satellite at 12,550 miles up must travel about 8,700 mph or gravity wins and it falls; go faster and it escapes into a higher orbit. The same formula weighed the Earth itself — Cavendish's 1798 torsion-balance experiment measured G in a London shed, and from it came our planet's 5.97 × 10²⁴ kg mass.

This calculator evaluates the full law from your four inputs. Type the two masses in kilograms in the Mass 1 (m1) and Mass 2 (m2) boxes and their center-to-center separation in meters in the Distance (r) box. The Gravitational Force (F) box reports newtons. Try Earth and a 150-pound person at Earth's radius: about 667 newtons — your weight, derived from first principles.`,
    howToSteps: [
      "Type the first mass in kilograms in the Mass 1 (m1) box — for example, 5970000000000000000000000 for Earth.",
      "Type the second mass in the Mass 2 (m2) box — for example, 68 for a 150-pound person.",
      "Type the center-to-center distance in meters in the Distance (r) box — 6371000 for Earth's radius.",
      "Read the Gravitational Force (F) box: about 667 newtons — your weight on Earth in this example.",
      "Remember the inverse square: moving twice as far cuts the force to one quarter.",
      "Use center-to-center distances and kilograms throughout so the answer reads in newtons.",
    ],
    faqs: [
      { q: "What is Newton's law of gravitation in plain words?", a: "Every mass attracts every other mass with force G×m₁×m₂/r². Double the distance and the force drops to a quarter." },
      { q: "What is the gravitational constant G?", a: "6.674 × 10⁻¹¹ N·m²/kg² — the universe's weakest coupling, which is why gravity only matters for planet-sized masses." },
      { q: "When would I calculate gravitational force?", a: "Plotting satellite orbits, estimating tides, weighing planets from moon orbits, and checking escape velocities." },
      { q: "Why does the Moon affect tides more than the Sun?", a: "Tides respond to the gravity gradient, which falls off with distance cubed. The Moon's closeness beats the Sun's mass." },
      { q: "How do you calculate gravitational focre?", a: "Multiply G by both masses and divide by the distance squared: F = Gm₁m₂/r², with masses in kg and distance in meters." },
    ],
  },

  "half-life-calculator": {
    description: `The iodine-131 a doctor gives a thyroid patient is half gone in 8 days — hot enough to treat, short-lived enough to be safe within weeks. That predictable halving is the half-life: the time for half the atoms in any sample to decay. The remaining amount follows N = N₀ × (1/2)^(t / t½) — after one half-life half remains, after two a quarter, after three an eighth, marching down the powers of two.

Half-lives span the absurd. Francium-223 lasts 22 minutes; carbon-14 lasts 5,730 years, which is why archaeologists date ancient charcoal with it; uranium-238 lasts 4.5 billion years, which is why the Earth is still warm inside. Smoke detectors cheat beautifully with americium-241's 432-year half-life — so long the radiation barely changes over the device's life.

This calculator multiplies out the decay. Type the starting amount in the Variable A box — grams, atoms, or becquerels — and the remaining fraction (1/2)^(t/t½) in the Variable B box: 0.5 after one half-life, 0.25 after two, 0.125 after three. The Result box gives what is left. A 100-microcurie iodine dose is down to 12.5 microcuries after 24 days — three half-lives, three halvings.`,
    howToSteps: [
      "Type the starting amount in the Variable A box — for example, 100 for 100 microcuries.",
      "Count the elapsed half-lives and pick the fraction: 0.5 for one, 0.25 for two, 0.125 for three.",
      "Type that fraction in the Variable B box.",
      "Read the Result box: 100 × 0.125 = 12.5 microcuries left after three half-lives in this example.",
      "For partial half-lives, compute (1/2)^(t/t½) with a scientific calculator first.",
      "Remember each half-life halves whatever remains — the drops get smaller but never quite reach zero.",
    ],
    faqs: [
      { q: "What is the half-life formula in plain words?", a: "Remaining amount equals starting amount times one-half raised to the number of elapsed half-lives: N = N₀ × (1/2)^(t/t½)." },
      { q: "What are some common half-lives?", a: "Iodine-131: 8 days; carbon-14: 5,730 years; uranium-238: 4.5 billion years; americium-241 (smoke detectors): 432 years." },
      { q: "When would I calculate half-life decay?", a: "Dosing nuclear medicine, carbon-dating artifacts, interpreting radon tests, and managing nuclear waste storage." },
      { q: "Does a half-life ever reach zero?", a: "Mathematically never — it halves forever. Practically, after about 10 half-lives less than a tenth of a percent remains." },
      { q: "How do you calculate half life remaning?", a: "Raise one-half to the power of (elapsed time ÷ half-life), then multiply by the starting amount — enter that fraction in Variable B and the calculator finishes the arithmetic." },
    ],
  },

  "heat-transfer-calculator": {
    description: `A Minnesota homeowner's January gas bill is heat transfer itemized. Heat escapes through walls by conduction, and the rate follows Fourier's law: heat flow equals thermal conductivity times area times temperature difference, divided by thickness. In symbols: Q = k × A × ΔT / L. Double the insulation thickness and the loss halves; double the wall area and it doubles — which is why big drafty houses cost a fortune to heat.

US insulation speaks R-value, the flip side of conductivity: higher R means slower heat flow. An R-13 wall batt in a 2×4 stud wall leaks heat about three times faster than an R-38 attic blanket. Furnaces are sized from this math too — contractors total up every wall, window, and ceiling loss to pick the BTU rating, because an undersized furnace runs forever and an oversized one short-cycles itself to an early grave.

This calculator handles the area-times-temperature core of the formula. Type the surface area in square feet in the Variable A box and the indoor-outdoor temperature difference in Fahrenheit degrees in the Variable B box. The Result box gives A × ΔT — multiply by your material's k and divide by thickness (in consistent units) for the heat loss rate that sizes insulation and furnaces.`,
    howToSteps: [
      "Type the wall or surface area in square feet in the Variable A box — for example, 400 for a 20×20 wall.",
      "Type the indoor-minus-outdoor temperature difference in the Variable B box — for example, 50 for 70°F inside and 20°F outside.",
      "Read the Result box: 400 × 50 = 20,000, the area-temperature product driving heat loss.",
      "Multiply by the material's conductivity k and divide by thickness (in matching units) for the heat flow rate.",
      "Compare assemblies by R-value — double the R-value halves the heat loss for the same product.",
      "Keep area and thickness in the same length family (both feet or both meters) before the final division.",
    ],
    faqs: [
      { q: "What is Fourier's law of heat conduction in plain words?", a: "Heat flow equals conductivity times area times temperature difference divided by thickness: Q = kAΔT/L. Thicker insulation or smaller ΔT means less loss." },
      { q: "What is R-value?", a: "A US insulation rating — thermal resistance. Higher R means slower heat flow; R-38 attic insulation loses heat about three times slower than R-13 walls." },
      { q: "When would I calculate heat transfer?", a: "Sizing furnaces and AC units, choosing insulation, estimating heating bills, and designing electronics cooling." },
      { q: "What are the three types of heat transfer?", a: "Conduction (through solids, like walls), convection (by moving fluids, like drafts), and radiation (infrared, like sunshine through windows)." },
      { q: "How do you calculate heat transer?", a: "Multiply conductivity × area × temperature difference, then divide by thickness: Q = kAΔT/L." },
    ],
  },

  "hydraulic-calculator": {
    description: `The lift hoisting a pickup at the auto shop runs on Pascal's law: pressure applied to a confined fluid transmits undiminished everywhere. Push a small piston with a small force and the big piston pushes back with a force multiplied by the area ratio — F = P × A on each piston, so F₁/A₁ = F₂/A₂. A 10-square-inch master piston at 1,000 psi delivers 10,000 pounds of lift at the 100-square-inch ram: a hundred-to-one mechanical advantage with no gears.

The trade is distance — the small piston must travel a hundred times farther than the big one rises, which is why the shop tech pumps the jack handle so many times. Brakes exploit the same law in reverse: your foot's modest force becomes thousands of pounds clamping the rotors, with brake fluid's near-incompressibility keeping the pedal firm instead of spongy.

This calculator computes the force side of Pascal's law. Type the system pressure in psi in the Variable A box and the piston area in square inches in the Variable B box. The Result box gives pounds of force — 1,000 psi on 10 in² is 10,000 pounds of push. Size the small piston from the big one with the area ratio, and remember every seal must hold that pressure without weeping.`,
    howToSteps: [
      "Type the hydraulic pressure in psi in the Variable A box — for example, 1000.",
      "Type the piston area in square inches in the Variable B box — for example, 10.",
      "Read the Result box: 1000 × 10 = 10,000 pounds of force in this example.",
      "Find the area ratio for mechanical advantage: big piston area ÷ small piston area multiplies your input force.",
      "Remember the distance trade — the small piston travels farther by the same ratio the force multiplies.",
      "Keep pressure in psi with area in in² so the Result reads directly in pounds.",
    ],
    faqs: [
      { q: "What is Pascal's law in plain words?", a: "Pressure in a confined fluid transmits equally everywhere, so force scales with piston area: F₁/A₁ = F₂/A₂. A 10× bigger piston gives 10× the force." },
      { q: "How does a hydraulic jack multiply force?", a: "Your small input force creates pressure that acts on a much larger piston. A 100:1 area ratio turns 100 pounds of pumping into 10,000 pounds of lift." },
      { q: "When would I calculate hydraulic force?", a: "Sizing shop lifts and jacks, designing brake systems, specifying excavator cylinders, and checking press tonnage." },
      { q: "Why must hydraulic fluid be incompressible?", a: "Because any compression soaks up the piston travel as sponginess instead of motion — the reason air in brake lines makes the pedal sink." },
      { q: "How do you calculate hydraulic foce?", a: "Multiply pressure by piston area: F = P × A. With psi and square inches, the answer is pounds of force." },
    ],
  },

  "impact-strength-calculator": {
    description: `A football helmet's job is measured in a single violent instant — the Charpy impact test. A weighted pendulum swings down, smashes a notched sample, and the energy it loses breaking the piece is the absorbed energy. Impact strength is that energy divided by the specimen's thickness at the notch: I = E / t, in joules per meter. It answers the question padding designers ask daily: how much punishment can this material swallow per inch?

The notch is the point — real parts have scratches, holes, and sharp corners, and the test's machined notch simulates the worst of them. A steel that bends gracefully at room temperature can shatter like glass at −40°F, which is exactly what sank the Titanic's riveted hull: the North Atlantic cold pushed the steel below its ductile-to-brittle transition. Modern specs demand Charpy testing at service temperature for exactly this reason.

This calculator converts absorbed energy into impact strength. Type the pendulum's absorbed energy in joules in the Absorbed Energy (E, J) box and the specimen thickness at the notch in millimeters in the Specimen Thickness at Notch (mm) box. The Impact Strength (J/m) box reports joules per meter — compare it against the material spec at your service temperature before trusting it in the cold.`,
    howToSteps: [
      "Type the energy absorbed breaking the sample in the Absorbed Energy (E, J) box — for example, 45.",
      "Type the thickness at the notch in millimeters in the Specimen Thickness at Notch (mm) box — for example, 10.",
      "Read the Impact Strength (J/m) box: 45 ÷ 0.01 = 4500 J/m in this example.",
      "Convert thickness to meters first — 10 mm is 0.01 m — since the answer is joules per meter.",
      "Test at your service temperature: cold can collapse a steel's impact strength tenfold.",
      "Compare against the spec minimum; below-spec means a different alloy or a warmer operating envelope.",
    ],
    faqs: [
      { q: "What is the impact strength formula in plain words?", a: "Impact strength equals absorbed energy divided by specimen thickness at the notch: I = E / t, in joules per meter." },
      { q: "What is the Charpy test?", a: "A pendulum hammer breaks a notched sample; the energy lost is the absorbed energy. It measures toughness — resistance to sudden fracture." },
      { q: "When would I test impact strength?", a: "Qualifying helmet foams, bumper plastics, structural steels for cold climates, and pipeline alloys." },
      { q: "Why does cold make steel brittle?", a: "Below the ductile-to-brittle transition temperature, cracks race instead of blunting. The Titanic's steel failed this way in icy water." },
      { q: "How do you calculate impact stregth?", a: "Divide the absorbed energy in joules by the notch thickness in meters: I = E / t gives J/m." },
    ],
  },
});

Object.assign(BATCH_13, {
  "inductance-calculator": {
    description: `The crossover inside a speaker cabinet is an inductor doing traffic control — it blocks high frequencies from the woofer while letting bass through. An inductor fights changes in current, and its opposition to alternating current is the inductive reactance: X = 2πfL, ohms of resistance that grow with frequency. Double the frequency, double the blocking; double the inductance, same deal.

Guitar amplifiers, wireless phone chargers, and power supplies all tune with this formula. A 1 mH choke at 60 Hz presents just 0.38 ohms — nearly invisible to wall power — but at 10 kHz it looms at 63 ohms, which is exactly how it strips switching noise from a DC rail. Motor starters use the same trick: the inductor's reactance limits the inrush current until the motor gets spinning.

This calculator multiplies out the reactance formula. Type 2π times your frequency in the Variable A box — for 60 Hz that is about 377 — and the inductance in henries in the Variable B box. The Result box gives the reactance in ohms. A 0.001 H choke at 60 Hz reads 0.377 ohms: confirm it is negligible at line frequency, then watch it climb as you raise f for your filter design.`,
    howToSteps: [
      "Type 2π times your frequency in the Variable A box — for example, 377 for 60 Hz.",
      "Type the inductance in henries in the Variable B box — for example, 0.001 for 1 mH.",
      "Read the Result box: 377 × 0.001 ≈ 0.377 ohms of reactance in this example.",
      "Raise the frequency to see filtering action — at 10 kHz the same choke presents about 63 ohms.",
      "Pair with a capacitor for an LC filter: the inductor blocks highs while the capacitor shunts them.",
      "Keep frequency in hertz and inductance in henries so the Result reads in ohms.",
    ],
    faqs: [
      { q: "What is the inductive reactance formula in plain words?", a: "Reactance equals 2π times frequency times inductance: X = 2πfL. Higher frequency or bigger inductance means more opposition to AC." },
      { q: "What is inductance?", a: "A coil's tendency to oppose current changes, measured in henries. It stores energy in a magnetic field, the dual of a capacitor's electric field." },
      { q: "When would I calculate inductive reactance?", a: "Designing speaker crossovers, filtering power supplies, sizing motor chokes, and tuning wireless chargers." },
      { q: "What is the difference between reactance and resistance?", a: "Resistance burns power as heat at any frequency; reactance opposes AC without dissipating power — it just shifts the phase." },
      { q: "How do you calculate inductive reactence?", a: "Multiply 2π × frequency × inductance: X = 2πfL, with f in hertz and L in henries for ohms." },
    ],
  },

  "inertia-calculator": {
    description: `A figure skater pulls her arms in and spins into a blur — same angular momentum, smaller radius, furious speed. The quantity that resists that spin-up is the moment of inertia: for a point mass, mass times radius squared, I = m × r². Double the distance from the axis and the inertia quadruples, which is why the skater's outstretched arms are so hard to get moving and so easy to fold in.

Flywheels exploit this ruthlessly. A heavy rim at a large radius stores enormous rotational energy — old steam engines, pottery wheels, and modern grid-scale flywheel batteries all bank energy in spinning inertia. Car designers fight it instead: lighter wheels with mass near the hub accelerate faster because less inertia stands between the engine and the road.

This calculator evaluates the point-mass formula. Type the mass in the Variable A box — kilograms for metric, slugs for imperial — and the radius squared in the Variable B box (square your radius first: a 0.5 m radius gives 0.25). The Result box gives the moment of inertia in kg·m² or slug·ft². Real shapes use cousins of this formula — ½mr² for a solid disk, ⅔mr² for a hollow sphere — but every one of them scales with mass times radius squared.`,
    howToSteps: [
      "Type the mass in the Variable A box — for example, 10 for 10 kg.",
      "Square the radius and type it in the Variable B box — for example, 0.25 for a 0.5 m radius.",
      "Read the Result box: 10 × 0.25 = 2.5 kg·m² of moment of inertia in this example.",
      "Notice the radius dominates — doubling it quadruples the inertia for the same mass.",
      "For extended shapes, multiply by the shape factor: ½ for a solid disk, ⅔ for a hollow sphere.",
      "Keep mass in kg with radius in meters for kg·m², or slugs with feet for slug·ft².",
    ],
    faqs: [
      { q: "What is the moment of inertia formula in plain words?", a: "For a point mass, inertia equals mass times radius squared: I = mr². It measures resistance to rotational acceleration, like mass does for linear." },
      { q: "Why does radius matter more than mass?", a: "Because it is squared — moving mass twice as far from the axis quadruples the inertia. Flywheels put their weight in the rim for this reason." },
      { q: "When would I calculate moment of inertia?", a: "Sizing flywheels, designing car wheels, analyzing figure-skater spins, and specifying motors that must accelerate rotating loads." },
      { q: "What is the difference between inertia and moment of inertia?", a: "Inertia (mass) resists linear acceleration; moment of inertia resists angular acceleration. Both quantify stubbornness against motion changes." },
      { q: "How do you calculate moment of intertia?", a: "Multiply mass by radius squared: I = mr² for a point mass, then apply the shape factor (½, ⅔, etc.) for extended objects." },
    ],
  },

  "interference-calculator": {
    description: `Noise-cancelling headphones are interference you can wear. When two waves meet, they add crest-to-crest or cancel crest-to-trough — constructive and destructive interference. The double-slit rule locates the bright fringes: slit separation times sine of the angle equals a whole number of wavelengths, d sin θ = mλ. Where the path difference is a full wavelength, the waves arrive in step and the spot blazes; at half a wavelength, they annihilate into darkness.

Anti-reflective coatings on eyeglasses use destructive interference on purpose: the coating thickness is tuned so reflections from its two surfaces cancel, letting more light through instead of bouncing glare into your eyes. Radio engineers fight the same physics when signals bounce off buildings and cancel at the antenna — the dreaded multipath fade.

This calculator handles the path-difference product. Type the slit (or source) separation in the Variable A box — in the same units as your wavelength — and the sine of the measured angle in the Variable B box. The Result box gives d sin θ. Divide by the wavelength λ to find m: whole numbers mark bright constructive fringes, half-integers the dark destructive ones.`,
    howToSteps: [
      "Type the separation between the two sources in the Variable A box — in meters, millimeters, or nanometers.",
      "Type the sine of the measured angle in the Variable B box — for example, 0.01 for a small angle.",
      "Read the Result box: the d sin θ path difference in your length units.",
      "Divide the Result by the wavelength — whole numbers mark bright fringes, half-integers mark dark ones.",
      "Keep separation and wavelength in identical units so the division is clean.",
      "Remember headphone cancellation is the same math: the anti-wave is timed for a half-wavelength path difference.",
    ],
    faqs: [
      { q: "What is the double-slit interference formula in plain words?", a: "Bright fringes appear where slit separation times sine of the angle equals whole wavelengths: d sin θ = mλ. Half-integer values give dark fringes." },
      { q: "How do noise-cancelling headphones work?", a: "They generate an anti-wave timed for destructive interference — crest meets trough — cancelling ambient sound before it reaches your ear." },
      { q: "When would I calculate interference?", a: "Designing anti-reflective coatings, analyzing headphone cancellation, predicting radio multipath fade, and measuring with interferometers." },
      { q: "What is constructive vs destructive interference?", a: "Constructive: waves arrive in step and amplify (bright fringes). Destructive: they arrive out of step and cancel (dark fringes)." },
      { q: "How do you calculate interferance fringes?", a: "Multiply slit separation by sin θ, then divide by the wavelength. Whole numbers locate bright fringes." },
    ],
  },

  "kinematic-calculator": {
    description: `A drag racer watching the Christmas tree is doing kinematics — the geometry of motion without asking what causes it. The workhorse equation, s = ut + ½at², splits any trip into two legs: the coasting leg (initial velocity times time) and the acceleration bonus (half a t squared). A car launching at 20 ft/s and accelerating at 30 ft/s² covers 20 feet in the first second from coasting — plus 15 from acceleration — and the acceleration leg grows quadratically from there.

Traffic engineers use the same split to set yellow-light timing: the coasting leg covers the driver's reaction distance, the braking leg (negative acceleration) covers the stop. Accident reconstruction runs it backward from skid marks to pre-braking speed. The equation never asks about mass, force, or engines — only the shape of the motion.

This calculator evaluates the coasting leg, the foundation of every kinematics problem. Type the initial velocity in the Variable A box — feet per second for US work — and the time in seconds in the Variable B box. The Result box gives u × t, the distance covered at the starting speed alone. Add ½at² for the acceleration bonus and you have the full displacement.`,
    howToSteps: [
      "Type the initial velocity in feet per second in the Variable A box — for example, 20.",
      "Type the elapsed time in seconds in the Variable B box — for example, 3.",
      "Read the Result box: 20 × 3 = 60 feet of coasting distance in this example.",
      "Add the acceleration bonus ½at² — for 30 ft/s² over 3 s that is another 135 feet.",
      "Use negative acceleration for braking — the bonus term subtracts from the coasting leg.",
      "Keep velocity in ft/s with time in seconds so the Result reads in feet.",
    ],
    faqs: [
      { q: "What is the kinematic displacement formula in plain words?", a: "Displacement equals initial velocity times time plus half acceleration times time squared: s = ut + ½at². It describes motion under constant acceleration." },
      { q: "What does kinematics study?", a: "The geometry of motion — position, velocity, acceleration, time — without considering the forces causing it. Dynamics adds the forces back in." },
      { q: "When would I use kinematics?", a: "Timing traffic lights, reconstructing crashes, planning drag races, and solving projectile motion in physics class." },
      { q: "What are the SUVAT equations?", a: "The five constant-acceleration relations linking displacement (s), initial/final velocity (u/v), acceleration (a), and time (t) — s = ut + ½at² is the most used." },
      { q: "How do you calculate kinematic displacment?", a: "Multiply initial velocity by time for the coasting leg, then add ½at² for the acceleration bonus: s = ut + ½at²." },
    ],
  },

  "kinetic-energy-calculator": {
    description: `A 90-mph fastball carries about 120 foot-pounds of energy — and a 3,000-pound car at 60 mph carries over 360,000. Kinetic energy is the energy of motion, and the formula is: KE equals one-half times mass times velocity squared. In symbols: KE = ½mv². The squared velocity is the headline — doubling speed quadruples the energy, which is why a 10-mph fender tap is a joke and a 60-mph crash is a catastrophe.

That square explains highway design. Guardrails, crumple zones, and runaway truck ramps are all sized for v², not v. It also explains sports: a home run ball leaves the bat near 110 mph carrying four times the energy of a 55-mph grounder, which is why outfield walls are padded and infielders wear cups.

This calculator runs the full formula. Type the mass in the Mass (m) box — kilograms for joules, slugs for foot-pounds — and the velocity in the Velocity (v) box in matching units (m/s or ft/s). The Kinetic Energy (KE) box reports the answer. A 0.145-kg baseball at 40 m/s (about 90 mph) holds roughly 116 joules — enough to sting through a glove, delivered by half of m times v squared.`,
    howToSteps: [
      "Type the mass in the Mass (m) box — for example, 0.145 for a baseball in kilograms.",
      "Type the velocity in the Velocity (v) box — for example, 40 for 40 m/s (about 90 mph).",
      "Read the Kinetic Energy (KE) box: ½ × 0.145 × 1600 ≈ 116 joules in this example.",
      "Remember the square: doubling speed quadruples energy, so small speed changes matter enormously.",
      "For foot-pounds, use slugs for mass and ft/s for velocity — 1 joule is about 0.738 ft-lb.",
      "Convert mph to ft/s by multiplying by 1.467 before entering highway speeds.",
    ],
    faqs: [
      { q: "What is the kinetic energy formula in plain words?", a: "Kinetic energy equals one-half times mass times velocity squared: KE = ½mv². A 90-mph fastball carries about 116 joules." },
      { q: "Why does doubling speed quadruple energy?", a: "Because velocity is squared in the formula. This is why crash severity climbs so much faster than the speedometer." },
      { q: "When would I calculate kinetic energy?", a: "Sizing guardrails and crumple zones, analyzing sports impacts, specifying brakes, and estimating projectile damage." },
      { q: "What units does kinetic energy use?", a: "Joules (kg with m/s) or foot-pounds (slugs with ft/s). One joule equals about 0.738 ft-lb." },
      { q: "How do you calculate kinetic enrgy?", a: "Use KE = ½mv²: halve the mass, multiply by velocity squared, in matched units." },
    ],
  },

  "laser-calculator": {
    description: `The red dot of a laser pointer is a stream of identical photons, each carrying energy set by a single rule: photon energy equals Planck's constant times frequency. In symbols: E = h × f, with h ≈ 6.626 × 10⁻³⁴ joule-seconds. Higher frequency means bluer light and more energetic photons — which is why a blue laser diode can do jobs a red one cannot, from Blu-ray data density to curing dental fillings.

LASIK eye surgery is applied photon energy: ultraviolet laser pulses vaporize microscopic layers of cornea, each photon packing enough punch to break molecular bonds. Barcode scanners, fiber-optic internet, and laser levels all tune the same trade — pick the wavelength for the job, and the photon energy follows automatically since E = hc/λ says the same thing in wavelength language.

This calculator multiplies out the photon energy. Type Planck's constant (0.0000000000000000000000000000000006626) in the Variable A box and the light's frequency in hertz in the Variable B box. The Result box gives joules per photon. A 650-nm red pointer (about 4.6 × 10¹⁴ Hz) yields roughly 3 × 10⁻¹⁹ joules per photon — trillions per second make the dot you see.`,
    howToSteps: [
      "Type Planck's constant in the Variable A box — 6.626 × 10⁻³⁴ joule-seconds.",
      "Type the light's frequency in hertz in the Variable B box — for example, 460000000000000 for red light.",
      "Read the Result box: about 3.05 × 10⁻¹⁹ joules per photon in this example.",
      "Convert wavelength to frequency first with f = c/λ if you only know the color — 650 nm gives ~4.6 × 10¹⁴ Hz.",
      "Remember bluer means more energetic: violet photons carry nearly twice the energy of red ones.",
      "For electron-volts, divide the joule answer by 1.602 × 10⁻¹⁹ — red photons are about 1.9 eV.",
    ],
    faqs: [
      { q: "What is the photon energy formula in plain words?", a: "Photon energy equals Planck's constant times frequency: E = hf. A red laser photon carries about 3 × 10⁻¹⁹ joules." },
      { q: "What is Planck's constant?", a: "6.626 × 10⁻³⁴ J·s — the quantum of action linking a photon's frequency to its energy. It is one of nature's fundamental constants." },
      { q: "When would I calculate photon energy?", a: "Sizing laser diodes, planning LASIK pulse energy, designing solar cells, and matching light sources to chemical reactions." },
      { q: "How are wavelength and photon energy related?", a: "Inversely: E = hc/λ. Shorter wavelength means higher frequency and more energy per photon." },
      { q: "How do you calculate laser photon enrgy?", a: "Multiply Planck's constant by the frequency in hertz: E = hf gives joules per photon." },
    ],
  },

  "magnetic-field-calculator": {
    description: `Slide a compass near a power line and the needle twitches — current makes magnetism, and the field circling a straight wire follows Ampere's law: field strength equals the permeability constant times current, divided by 2π times distance. In symbols: B = μ₀I / (2πr), with μ₀ = 4π × 10⁻⁷. Double the current, double the field; double the distance, halve it.

MRI machines are this formula industrialized: superconducting coils carry enormous currents to forge fields 60,000 times Earth's, aligning hydrogen nuclei in your body for imaging. On a smaller scale, every electric motor spins because current-carrying wires push against magnetic fields, and every clamp meter reads current by sensing the field around the wire — no circuit cutting required.

This calculator evaluates the field formula's core multiplication. Type μ₀ times your current (μ₀ × I) in the Variable A box — for 100 amps that is about 0.0001257 — and the reciprocal factor 1/(2πr) in the Variable B box for your distance in meters. The Result box gives the field in teslas. At 10 cm from a 100-amp cable the field is about 200 microteslas — four times Earth's field, plenty to swing a compass needle.`,
    howToSteps: [
      "Type μ₀ × current in the Variable A box — for example, 0.0001257 for 100 amps.",
      "Compute 1/(2πr) with your distance in meters — about 1.59 at 0.1 m — and type it in the Variable B box.",
      "Read the Result box: about 0.0002 teslas (200 microteslas) in this example.",
      "Remember the field circles the wire — use the right-hand rule: thumb along current, fingers curl with the field.",
      "Double the distance to halve the field — the 1/r falloff is gentler than a point charge's 1/r².",
      "Keep current in amps and distance in meters so the Result reads in teslas.",
    ],
    faqs: [
      { q: "What is the magnetic field of a wire in plain words?", a: "Field strength equals μ₀ times current divided by 2π times distance: B = μ₀I/(2πr). It circles the wire and weakens with distance." },
      { q: "What is a tesla?", a: "The unit of magnetic field strength. Earth's field is about 50 microteslas; an MRI runs 1.5 to 3 teslas — tens of thousands of times stronger." },
      { q: "When would I calculate magnetic fields?", a: "Designing motors and MRI coils, checking compass interference near power lines, and specifying magnetic shielding." },
      { q: "What is the right-hand rule?", a: "Point your thumb along the current; your curled fingers show the magnetic field's circular direction around the wire." },
      { q: "How do you calculate magnetic feild strength?", a: "Multiply μ₀ × current, then multiply by 1/(2πr) for your distance in meters — the result is in teslas." },
    ],
  },

  "mass-energy-calculator": {
    description: `One gram of matter holds the energy of a 21-kiloton bomb — Einstein's E = mc² says mass is frozen energy, and the speed of light squared is the exchange rate. In plain words: energy equals mass times the speed of light squared, with c² ≈ 9 × 10¹⁶. Because that multiplier is astronomically huge, even dust-speck masses convert to staggering joules.

Nuclear power plants cash this in daily: each fission splits a uranium nucleus into slightly lighter fragments, and the missing mass — less than a gram per day in a big reactor — becomes the heat that powers a city. PET scans run the reverse at body scale: a tracer's positrons annihilate electrons, and the mass vanishes into the gamma rays the scanner detects. The Sun does it wholesale, converting 4 million tons of mass to energy every single second.

This calculator performs the famous multiplication. Type the mass in kilograms in the Variable A box and c² (90,000,000,000,000,000) in the Variable B box. The Result box gives joules — 0.001 kg returns 9 × 10¹³ J, roughly the Hiroshima yield from a single gram. It is the most disproportionate formula in physics: tiny mass in, civilization-scale energy out.`,
    howToSteps: [
      "Type the mass in kilograms in the Variable A box — for example, 0.001 for one gram.",
      "Type 90000000000000000 (c²) in the Variable B box.",
      "Read the Result box: 0.001 × 9 × 10¹⁶ = 9 × 10¹³ joules in this example.",
      "Grasp the scale: that gram holds about 25 million kWh — a lifetime of household electricity.",
      "Remember only nuclear reactions unlock it — chemical burning releases a billion times less per gram.",
      "Keep mass in kilograms so the Result reads in joules; divide by 3.6 × 10⁶ for kWh.",
    ],
    faqs: [
      { q: "What is E = mc² in plain words?", a: "Energy equals mass times the speed of light squared. One gram of mass converts to 9 × 10¹³ joules — about a 21-kiloton explosion's worth." },
      { q: "Why is c squared?", a: "It falls out of special relativity's geometry of spacetime. The huge value is why tiny masses hold enormous energy." },
      { q: "When would I calculate mass-energy?", a: "Estimating nuclear reactor output, understanding PET scan gamma rays, and grasping stellar energy production." },
      { q: "Does E = mc² mean mass becomes energy?", a: "Mass is a form of energy — the equation is a conversion rate, like an exchange rate between two currencies of the same account." },
      { q: "How do you calculate mass enrgy?", a: "Multiply mass in kilograms by 9 × 10¹⁶ (c²). The answer is in joules." },
    ],
  },

  "molar-flow-calculator": {
    description: `A natural gas processing plant does not think in tons — it thinks in moles, because chemistry counts molecules, not weight. Molar flow rate converts a mass flow into a molecule flow: moles per second equals mass flow rate times 1000 divided by molar mass. In symbols: ṅ = ṁ × 1000 / M, with ṁ in kg/s and M in g/mol. The 1000 bridges kilograms to grams so the units cancel to mol/s.

Breweries use the same conversion carbonating beer — CO₂ dosed by moles dissolves predictably regardless of tank size. Semiconductor fabs meter silane and other process gases in moles per second because film growth is molecule-by-molecule. Even car engines are molar machines: the stoichiometric air-fuel ratio is really a mole ratio wearing a mass disguise.

This calculator runs the conversion from your plant data. Type the mass flow rate in kilograms per second in the Mass Flow Rate (kg/s) box and the substance's molar mass in grams per mole in the Molar Mass (g/mol) box — 44.01 for CO₂, 16.04 for methane. The Molar Flow Rate (mol/s) box reports moles per second. One kg/s of methane (M = 16.04) flows at about 62.3 mol/s — the molecule count your reaction stoichiometry actually needs.`,
    howToSteps: [
      "Type the mass flow in kilograms per second in the Mass Flow Rate (kg/s) box — for example, 1.",
      "Type the molar mass in grams per mole in the Molar Mass (g/mol) box — for example, 16.04 for methane.",
      "Read the Molar Flow Rate (mol/s) box: 1 × 1000 ÷ 16.04 ≈ 62.3 mol/s in this example.",
      "Look up molar masses from the formula — H₂O is 18.02, CO₂ is 44.01, air averages 28.97.",
      "Use the mole flow directly in reaction stoichiometry — balanced equations speak moles, not kilograms.",
      "Keep mass flow in kg/s and molar mass in g/mol; the built-in 1000 handles the unit bridge.",
    ],
    faqs: [
      { q: "What is the molar flow formula in plain words?", a: "Molar flow equals mass flow times 1000 divided by molar mass: ṅ = ṁ × 1000 / M. One kg/s of methane (M = 16.04) is about 62.3 mol/s." },
      { q: "What is a mole?", a: "6.022 × 10²³ particles — Avogadro's number. It lets chemists count molecules by weighing them." },
      { q: "When would I calculate molar flow?", a: "Metering process gases, dosing brewery CO₂, balancing chemical reactor feeds, and converting engine air-fuel ratios." },
      { q: "What units does molar flow use?", a: "Moles per second (mol/s). Enter mass flow in kg/s and molar mass in g/mol." },
      { q: "How do you calculate molar flow rte?", a: "Multiply mass flow (kg/s) by 1000 and divide by the molar mass (g/mol)." },
    ],
  },

  "momentum-calculator": {
    description: `A freight train rolling at 10 mph is effectively unstoppable — not because of speed, but because momentum is mass times velocity, and 10,000 tons times anything is enormous. In symbols: p = m × v. The train's momentum dwarfs a sports car's at 100 mph, which is why the train wins every argument at a crossing and why engineers quote stopping distances in miles.

Football coaches preach the same physics without the symbols. A 250-pound linebacker at full sprint carries momentum that a 180-pound receiver cannot match head-on — so the receiver jukes instead, changing the collision geometry rather than contesting the momentum. Rocket scientists spend it deliberately: throwing mass out the back (exhaust) gives the ship momentum forward, the purest transaction in mechanics.

This calculator multiplies the two ingredients. Type the mass in the Mass (m) box — kilograms for metric, slugs for imperial — and the velocity in the Velocity (v) box in matching units (m/s or ft/s). The Momentum (p) box reports kg·m/s or slug·ft/s. A 113-kg linebacker at 9 m/s carries about 1,017 kg·m/s — and stopping him means something must absorb every bit of it.`,
    howToSteps: [
      "Type the mass in the Mass (m) box — for example, 113 for a 250-pound linebacker in kilograms.",
      "Type the velocity in the Velocity (v) box — for example, 9 for 9 m/s.",
      "Read the Momentum (p) box: 113 × 9 ≈ 1017 kg·m/s in this example.",
      "Compare two objects by momentum, not speed — the slower but heavier one usually wins.",
      "For imperial answers, convert pounds-mass to slugs (divide by 32.2) and use ft/s for velocity.",
      "Remember momentum is a vector — opposite directions cancel, which is why head-on totals can be near zero.",
    ],
    faqs: [
      { q: "What is the momentum formula in plain words?", a: "Momentum equals mass times velocity: p = mv. A 113-kg linebacker at 9 m/s carries about 1,017 kg·m/s." },
      { q: "What is the difference between momentum and kinetic energy?", a: "Momentum (mv) governs collisions and stopping; kinetic energy (½mv²) governs damage. Heavy and slow can out-momentum light and fast while carrying less energy." },
      { q: "When would I calculate momentum?", a: "Analyzing vehicle crashes, coaching tackling physics, sizing rocket propellant, and designing anything that must stop a moving mass." },
      { q: "What units does momentum use?", a: "Kilogram-meters per second (kg·m/s) metric, or slug-feet per second imperial. Mass and velocity units must match." },
      { q: "How do you calculate momemtum?", a: "Multiply mass by velocity: p = mv, with kilograms and m/s for kg·m/s." },
    ],
  },
});
