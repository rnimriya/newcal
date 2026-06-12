---
title: "Understanding Binary: How to Convert Base-2 to Decimal"
date: "2026-06-12"
excerpt: "Learn how to read the language of computers. We explain the Base-2 binary numbering system and the mathematical algorithm to convert 1s and 0s into human numbers."
author: "CalcUnit Computer Science Experts"
toolSlug: "binary-to-decimal-converter"
toolCategory: "converters"
---

Instantly translate computer code into readable numbers using our [Binary to Decimal Converter](/converters/binary-to-decimal-converter), or read on to learn how to do the math yourself.

Every video you watch, song you stream, and text message you send is ultimately broken down into a series of 1s and 0s. This is the **Binary Numeral System** (Base-2). 

Unlike humans, who count using 10 digits (Base-10), computers rely on millions of microscopic transistors. A transistor only has two physical states: **Off (0)** or **On (1)**. Therefore, computers must use a counting system that relies entirely on two digits.

## The Difference Between Base-10 and Base-2

In the human Base-10 system, each position in a number represents a power of 10.
In the number **345**:
- The right slot is the "1s" column (10^0). `5 × 1 = 5`
- The middle slot is the "10s" column (10^1). `4 × 10 = 40`
- The left slot is the "100s" column (10^2). `3 × 100 = 300`
- Total: 300 + 40 + 5 = **345**

In the computer Base-2 system, each position represents a **power of 2**.
Reading from right to left, the column values are: `1, 2, 4, 8, 16, 32, 64, 128...`

## How to Convert Binary to Decimal

To convert a binary number to a human number, simply look at every "1" in the binary string and add its corresponding column value. You ignore all the "0"s.

**Example 1: Convert the binary number `1011`**
1. Write the column values above the binary numbers from right to left:
   *(8) (4) (2) (1)*
   `1   0   1   1`
2. Add the column values where there is a "1":
   `8 + 2 + 1 = 11`
   The binary number **1011** equals **11** in decimal.

**Example 2: Convert an 8-bit byte `11001000`**
1. Write the 8 column values:
   *(128) (64) (32) (16) (8) (4) (2) (1)*
   `1     1    0    0    1   0   0   0`
2. Add the values where there is a "1":
   `128 + 64 + 8 = 200`
   The binary number **11001000** equals **200** in decimal.

## Bits and Bytes

- A **Bit** is a single binary digit (a single 0 or 1).
- A **Byte** is a grouping of exactly 8 bits (e.g., `11111111`).
- The maximum decimal number a single Byte can hold is **255** (128+64+32+16+8+4+2+1).

This is why old 8-bit video games like Pac-Man or The Legend of Zelda often had maximum limits of 255 for things like rupees, items, or levels. The computer literally ran out of 1s and 0s to represent the number 256!

## FAQ

**Can binary represent negative numbers?**
Yes. Programmers use a system called "Two's Complement." In a signed binary number, the very first bit on the left is used to indicate the sign (0 for positive, 1 for negative), rather than representing a value.

---
*Translate massive binary strings instantly without manual calculation using the [CalcUnit Binary Converter](/converters/binary-to-decimal-converter).*
