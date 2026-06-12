---
title: "The Rules of Significant Figures: Precision in Math and Science"
date: "2026-06-12"
excerpt: "Stop losing points on your chemistry homework. Learn the strict mathematical rules for identifying and calculating with Significant Figures."
author: "CalcUnit Math Experts"
toolSlug: "significant-figures-calculator"
toolCategory: "math"
---

Instantly count and round your data to the correct precision using our [Significant Figures Calculator](/math/significant-figures-calculator), or read on to master the strict rules of scientific notation.

In pure mathematics, the number `5` and the number `5.00` are identical. They both have the exact same value.

However, in physics, chemistry, and engineering, `5` and `5.00` are drastically different. This is because numbers in science represent physical measurements made with real-world tools. The concept of **Significant Figures (Sig Figs)** exists to communicate exactly how precise a measurement is. 

If you say a piece of wood is `5` meters long, you are implying you used a rough tape measure. If you say it is `5.00` meters long, you are implying you used a highly calibrated laser tool accurate to the centimeter.

## The Rules for Counting Significant Figures

To perform calculations correctly, you must first know how to count how many significant figures a number has.

1. **Non-zero digits are ALWAYS significant.**
   - `425` has 3 sig figs.
2. **Zeros BETWEEN non-zero digits are ALWAYS significant.** (The "Sandwich" Rule)
   - `4005` has 4 sig figs.
3. **Leading zeros are NEVER significant.** (They are just placeholders).
   - `0.002` has 1 sig fig (the 2).
4. **Trailing zeros are ONLY significant if there is a decimal point.**
   - `45.00` has 4 sig figs (the zeros indicate precision).
   - `4500` has only 2 sig figs (the zeros are ambiguous without a decimal).
   - `4500.` has 4 sig figs (the decimal point proves the zeros were measured).

## Rules for Adding and Subtracting

When adding or subtracting, the number of significant figures in the final answer is determined by the **least precise decimal place** in your starting numbers.

**Example:** `12.11 + 3.0`
- `12.11` is precise to the hundredths place.
- `3.0` is precise only to the tenths place.
- Raw math: `12.11 + 3.0 = 15.11`
- **Correct Sig Fig Answer: `15.1`** (You must round to the tenths place, because your least precise tool only measured to the tenths place).

## Rules for Multiplying and Dividing

When multiplying or dividing, the rule changes entirely. Your final answer must have the exact same total number of significant figures as the starting number with the **fewest total significant figures**.

**Example:** `4.56 × 1.4`
- `4.56` has 3 sig figs.
- `1.4` has 2 sig figs.
- Raw math: `4.56 × 1.4 = 6.384`
- **Correct Sig Fig Answer: `6.4`** (You must round the entire answer so it only contains 2 total significant figures).

You cannot claim an answer is highly precise if one of the measurements used to calculate it was incredibly imprecise! Your chain is only as strong as your weakest link.

## FAQ

**What are Exact Numbers?**
An "exact number" is a number that is counted, not measured. For example, if you have exactly 3 apples, that is an exact number. It has an infinite number of significant figures (`3.0000000...`). Exact numbers are completely ignored when determining the sig figs of your final answer.

---
*Avoid catastrophic rounding errors in your lab reports. Check your work instantly using the [CalcUnit Significant Figures Calculator](/math/significant-figures-calculator).*
