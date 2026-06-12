---
title: "The Math of Patterns: Finding the Least Common Multiple (LCM)"
date: "2026-06-12"
excerpt: "Learn the formulas for finding the Least Common Multiple (LCM). Essential for adding fractions, scheduling recurring events, and solving cyclical math problems."
author: "CalcUnit Math Experts"
toolSlug: "lcm-calculator"
toolCategory: "math"
---

Instantly find the smallest common denominator for any group of numbers using our [LCM Calculator](/math/lcm-calculator), or read on to learn the manual prime factorization method.

If a train leaves the station every 15 minutes, and a bus leaves the station every 25 minutes, how long will it take before they both leave at the exact same time again?

To answer this question, you must find the **Least Common Multiple (LCM)**. 

A multiple is the result of multiplying a number by an integer (e.g., the multiples of 5 are 5, 10, 15, 20...). The LCM is simply the smallest possible number that exists on the multiple list of *both* numbers. It is the core mathematical concept used to find common denominators when adding fractions.

## Method 1: The List Method

For small numbers, the easiest way to find the LCM is to simply write out the multiples of both numbers until you find a match.

**Find the LCM of 6 and 8:**
- Multiples of 6: 6, 12, 18, **24**, 30, 36...
- Multiples of 8: 8, 16, **24**, 32, 40...

The smallest number that appears on both lists is 24. 
The LCM of 6 and 8 is **24**.

## Method 2: Prime Factorization

Writing out lists takes too long for large numbers. The most efficient mathematical way to find the LCM is to break both numbers down into their prime factors.

**Let's find the LCM of 15 and 25 (our train and bus problem).**

**Step 1: Find the prime factors.**
- Prime factors of 15: **3 × 5**
- Prime factors of 25: **5 × 5** (or 5²)

**Step 2: Multiply the highest powers of all prime factors present.**
Look at the prime factors: we have a 3, and we have 5s.
- The highest number of times '3' appears in any single row is once.
- The highest number of times '5' appears in any single row is twice (5²).

Multiply those together: `3 × 5²` = `3 × 25` = **75**.

The LCM of 15 and 25 is **75**. 
The train and bus will leave the station at the exact same time every 75 minutes.

## The Relationship Between LCM and GCD

There is a fascinating mathematical relationship between the Least Common Multiple (LCM) and the Greatest Common Divisor (GCD). 

If you multiply two numbers together, the result is exactly equal to their LCM multiplied by their GCD.

**Formula: `a × b = LCM(a, b) × GCD(a, b)`**

We can algebraically rearrange this formula to quickly find the LCM if we already know the GCD.

**`LCM = (a × b) / GCD`**

Let's test this with 6 and 8.
- The GCD of 6 and 8 is **2** (the largest number that divides evenly into both).
- Multiply 6 and 8: `6 × 8 = 48`.
- Divide by the GCD: `48 / 2 = 24`.

The LCM is 24! This formula is how computer software instantly calculates LCMs for massive numbers.

## FAQ

**Can I find the LCM of three or more numbers?**
Yes. You can use the Prime Factorization method on as many numbers as you want. Simply break them all down into prime factors, find the highest power of each prime number across all the lists, and multiply them together.

---
*Don't write out massive lists of multiples by hand. Solve complex scheduling and fraction problems instantly using the [CalcUnit LCM Calculator](/math/lcm-calculator).*
