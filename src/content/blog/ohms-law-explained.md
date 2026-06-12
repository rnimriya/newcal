---
title: "Ohm's Law Explained: Calculating Voltage, Current, and Resistance"
date: "2026-06-12"
excerpt: "Master the foundational law of electronics. We explain Ohm's Law, how to use the formula triangle, and practical applications in daily circuit design."
author: "CalcUnit Physics Experts"
toolSlug: "ohms-law-calculator"
toolCategory: "physics"
---

Calculate electrical values instantly using our free [Ohm's Law Calculator](/physics/ohms-law-calculator), or read on to understand the fundamental math that powers modern electronics.

Named after the German physicist Georg Simon Ohm, Ohm's Law is the most fundamental relationship in electronics. It describes how voltage, current, and resistance interact within an electrical circuit. Whether you are designing a complex microchip or simply trying to figure out which resistor to use for an LED, Ohm's Law is your starting point.

## The Three Pillars of Electricity

Before understanding the formula, you must understand the components:
1. **Voltage (V or E):** Measured in Volts (V). This is the "pressure" or force that pushes electrons through the circuit. Think of it as water pressure in a pipe.
2. **Current (I):** Measured in Amperes or Amps (A). This is the flow rate of the electrons. Think of it as the amount of water flowing through the pipe.
3. **Resistance (R):** Measured in Ohms (Ω). This is the friction or opposition to the flow of electrons. Think of it as the pipe's diameter—a narrower pipe restricts water flow just as higher resistance restricts current.

## The Formula

Ohm's Law states that the current through a conductor is directly proportional to the voltage across it, and inversely proportional to its resistance.

**V = I × R**

Depending on what you are trying to find, you can rearrange the formula mathematically:
- To find Current: **I = V / R**
- To find Resistance: **R = V / I**

### The Ohm's Law Triangle
Engineers often use a visual aid called the Ohm's Law Triangle. 
Place **V** at the top, and **I** and **R** at the bottom. 
- Cover the letter you want to find.
- If the remaining letters are side-by-side, multiply them.
- If one is over the other, divide the top by the bottom.

## Practical Example: Wiring an LED

Let's say you want to wire a standard Red LED to a 9-volt battery. 
- The battery provides **9V**.
- A typical Red LED requires a forward voltage drop of about **2V** and operates safely at **20mA (0.02A)** of current.

Because the battery provides 9V and the LED only needs 2V, you must use a resistor to drop the remaining **7V** (9V - 2V).

Using Ohm's Law to find the required resistor:
- **R = V / I**
- **R = 7V / 0.02A**
- **R = 350 Ω**

You need a 350-Ohm resistor to safely run the LED without blowing it out.

## FAQ

**Does Ohm's Law apply to all materials?**
No. Ohm's law only applies to "Ohmic" materials, where the resistance remains constant regardless of the voltage or current applied. Components like diodes and transistors are "non-Ohmic" because their resistance changes drastically depending on the voltage applied to them.

**How does electrical power relate to Ohm's Law?**
Power (P), measured in Watts (W), is the rate at which electrical energy is transferred. Watt's Law states that **P = V × I**. You can combine Ohm's Law and Watt's Law to find power if you only know resistance and current: **P = I² × R**.

---
*For quick, error-free circuit calculations without doing the algebra yourself, use the [CalcUnit Ohm's Law Calculator](/physics/ohms-law-calculator).*
