---
title: "Understanding Octal: How to Convert Base-8 to Decimal"
date: "2026-06-12"
excerpt: "Why does the number 8 not exist in Octal? Learn the math behind the Base-8 numbering system used in UNIX file permissions and early computing."
author: "CalcUnit Computer Science Experts"
toolSlug: "octal-to-decimal-converter"
toolCategory: "converters"
---

Instantly translate complex Base-8 strings into readable numbers using our [Octal to Decimal Converter](/converters/octal-to-decimal-converter), or read on to understand the historical mathematics of the Octal system.

We are highly familiar with Base-10 (Decimal) because we have ten fingers. We are familiar with Base-2 (Binary) and Base-16 (Hexadecimal) because they are the foundation of modern computing.

But what about **Base-8 (Octal)**? 

While less common today, the Octal numbering system was a critical tool in early computing, and it is still heavily used today by Linux system administrators to set file permissions. 

## The Rules of Base-8

In the Base-10 decimal system, you count from 0 to 9. When you run out of digits, you carry a 1 to create the number 10.
In the Base-8 Octal system, you only have eight digits: **0, 1, 2, 3, 4, 5, 6, and 7**.

The numbers 8 and 9 literally do not exist in Octal math.

Let's count from zero in Octal:
`0, 1, 2, 3, 4, 5, 6, 7...`
What comes next? You ran out of digits. You must carry a 1.
The next number is **10** (which mathematically equals 8 in decimal).

## The Positional Method (Powers of 8)

To convert an Octal number back into a standard human number, you use the exact same positional logic used in Hexadecimal, but you use powers of 8 instead of 16.

Reading from right to left, the columns in an Octal number are:
- Position 1: `8^0` = The **1s** column
- Position 2: `8^1` = The **8s** column
- Position 3: `8^2` = The **64s** column
- Position 4: `8^3` = The **512s** column

### Example: Converting Octal 142
Convert the Octal number **142** to decimal.
1. Right digit (2): `2 × 1 = 2`
2. Middle digit (4): `4 × 8 = 32`
3. Left digit (1): `1 × 64 = 64`
4. Add them together: `2 + 32 + 64 = 98`.

The Octal number **142** equals exactly **98** in decimal.

## Why Did Programmers Use Octal?

In the 1960s and 70s, computers did not use 8-bit bytes or 64-bit processors. Early mainframe computers (like the PDP-8) used 12-bit, 24-bit, or 36-bit words. 

Because these numbers are perfectly divisible by 3, programmers realized they could perfectly compress long strings of binary into Octal. 
- A single Octal digit (0-7) can be perfectly represented by exactly **three bits** of binary (000 to 111).
- This allowed a programmer to look at a massive 12-bit binary string (`101011000111`) and instantly read it as four simple Octal numbers (`5307`).

When the world eventually standardized on the 8-bit byte (which is not divisible by 3), Octal was largely replaced by Hexadecimal (Base-16), because a Hex digit perfectly maps to exactly four bits.

## Octal in Modern Linux (chmod)

If you have ever managed a web server or used a Linux terminal, you have probably typed a command like `chmod 755 filename.txt`.

You just used Octal!
In UNIX operating systems, file permissions are divided into three groups: Owner, Group, and Public. Each group has three binary switches: Read (4), Write (2), and Execute (1). 

Because `4 + 2 + 1 = 7`, a single Octal digit is the perfect mathematical container to represent the permissions for a group.
- **7 (4+2+1):** The user can Read, Write, and Execute.
- **5 (4+0+1):** The user can Read and Execute, but cannot Write.

So, the Octal code `755` tells the computer: The Owner has full power (7), the Group can only read and execute (5), and the Public can only read and execute (5). 

## FAQ

**Can I convert Octal directly to Hexadecimal?**
While you can, it is mathematically grueling. The most reliable method is a two-step process: First, convert the Octal number into Decimal (or Binary). Second, convert that new number into Hexadecimal. 

---
*Stop doing base-system conversions by hand. Translate legacy computer code instantly using the [CalcUnit Octal to Decimal Converter](/converters/octal-to-decimal-converter).*
