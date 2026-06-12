---
title: "Binary Math: How to Add, Subtract, and Multiply 1s and 0s"
date: "2026-06-12"
excerpt: "Learn how the CPU in your computer actually does math. We explain the simple rules for carrying 1s when adding and subtracting in Base-2 binary."
author: "CalcUnit Computer Science Experts"
toolSlug: "binary-calculator"
toolCategory: "math"
---

Instantly calculate massive binary equations without manual base-conversion using our [Binary Calculator](/math/binary-calculator), or read on to learn how to do the math on paper.

In the Base-10 decimal system that humans use, we have ten digits (0 through 9). When we add numbers and hit the maximum digit of 9, we carry a "1" over to the next column. 

Computers use the Base-2 binary system, which only has two digits: **0 and 1**. This means the mathematical rules for addition and subtraction trigger the "carrying" rule much faster, but the logic remains exactly the same.

## Binary Addition

There are only four possible combinations when adding two single binary digits (bits):
1. `0 + 0 = 0`
2. `1 + 0 = 1`
3. `0 + 1 = 1`
4. `1 + 1 = 0` (and you carry a 1 to the next column).

Wait, why does `1 + 1` equal `0`? 
Because the number `2` does not exist in binary. In decimal, `1 + 1 = 2`. In binary, the decimal number 2 is written as `10`. Therefore, you write down the 0, and carry the 1.

### Example: Adding 1011 and 1101
Let's add these vertically from right to left.
   `1 0 1 1` (Decimal 11)
`+ 1 1 0 1` (Decimal 13)
------------
**Column 1 (Right):** `1 + 1 = 0` (Carry 1)
**Column 2:** `1 + 0 + (carried 1) = 0` (Carry 1)
**Column 3:** `0 + 1 + (carried 1) = 0` (Carry 1)
**Column 4 (Left):** `1 + 1 + (carried 1) = 1` (Carry 1 to a new 5th column)

Result: **11000** (Decimal 24).

## Binary Subtraction

Binary subtraction is slightly trickier because it requires "borrowing," just like in decimal math when you try to subtract a larger number from a smaller one.

There are four basic rules for subtracting bits:
1. `0 - 0 = 0`
2. `1 - 1 = 0`
3. `1 - 0 = 1`
4. `0 - 1 = 1` (but you must borrow a 1 from the next column to the left).

When you borrow a `1` from the next column, the current column temporarily becomes `10` (which is 2 in decimal). `2 - 1 = 1`. 

### Example: Subtracting 101 from 110
   `1 1 0` (Decimal 6)
`- 1 0 1` (Decimal 5)
------------
**Column 1 (Right):** `0 - 1`. You cannot do this. You borrow from Column 2. The `0` becomes `10` (2). `2 - 1 = 1`.
**Column 2:** The `1` was borrowed, so it is now `0`. `0 - 0 = 0`.
**Column 3 (Left):** `1 - 1 = 0`.

Result: **001** (Decimal 1).

## Binary Multiplication

Binary multiplication is surprisingly easy because you are only ever multiplying by 0 or 1.
- Multiplying by 0 equals 0.
- Multiplying by 1 equals the number itself.

It works exactly like standard long multiplication, but the addition at the end is much simpler!

## FAQ

**How do computers subtract if they only have adding circuits?**
Modern computer processors (CPUs) do not actually have subtract, multiply, or divide circuits. They only have adder circuits. To subtract, the CPU converts the second number into a negative using a method called "Two's Complement," and then simply *adds* the negative number to the first number!

---
*Avoid the headache of borrowing and carrying 1s. Process complex binary, hex, and octal math instantly using the [CalcUnit Binary Calculator](/math/binary-calculator).*
