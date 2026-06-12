---
title: "Time Math: How to Calculate Hours Worked and Payroll Timesheets"
date: "2026-06-12"
excerpt: "Calculating hours worked is incredibly frustrating because time is not measured in Base-10. Learn how to convert minutes to decimals for flawless payroll calculation."
author: "CalcUnit Time Experts"
toolSlug: "hours-calculator"
toolCategory: "time"
---

Calculate precise timesheet durations and gross pay instantly using our [Hours Calculator](/time/hours-calculator), or read on to learn the frustrating math of base-60 time conversion.

If you clock in at 8:15 AM and clock out at 4:45 PM, how many hours did you work? What if you took a 30-minute unpaid lunch? 

Calculating hours worked is one of the most common administrative tasks in the world, yet it causes massive confusion. The reason calculating time is so difficult is because our standard math system is **Base-10** (100 pennies in a dollar), but our clocks are **Base-60** (60 minutes in an hour).

You cannot simply subtract 8.15 from 4.45 on a calculator.

## Step 1: Converting to 24-Hour Time (Military Time)

The easiest way to calculate time elapsed over an afternoon is to abandon AM/PM formatting entirely and use a 24-hour clock. This prevents errors when crossing the noon threshold.

To convert PM times to a 24-hour format, simply add 12 to the hour (leave AM times alone).
- 8:15 AM remains **8:15**.
- 4:45 PM becomes `4 + 12 = 16`. It is **16:45**.

Now you can set up a subtraction problem: 
`16:45 (Clock Out) - 8:15 (Clock In)`
- Subtract the hours: `16 - 8 = 8 hours`
- Subtract the minutes: `45 - 15 = 30 minutes`
You were on the clock for exactly **8 hours and 30 minutes**.

## Step 2: The "Borrowing" Problem

What happens if the clock-out minutes are smaller than the clock-in minutes?
You clock in at 9:45 AM and clock out at 5:15 PM (17:15).

`17:15 - 9:45`
You cannot subtract 45 minutes from 15 minutes. You must "borrow" an hour from the 17. 
*Crucial Rule:* When borrowing an hour, you do not add 100. You add 60!
- The 17 hours becomes 16 hours.
- The 15 minutes becomes `15 + 60 = 75 minutes`.

New Equation: `16:75 - 9:45`
- Hours: `16 - 9 = 7 hours`
- Minutes: `75 - 45 = 30 minutes`
You were on the clock for exactly **7 hours and 30 minutes**.

## Step 3: Converting Minutes to Decimals for Payroll

You cannot multiply your hourly wage by "7 hours and 30 minutes." If you make $20 an hour and punch `20 × 7.30` into a calculator, it will output $146. **This is wrong.** Your boss owes you $150.

To calculate pay, you must convert the Base-60 minutes into Base-10 decimals.

**The Formula:** `Minutes / 60 = Decimal`
- 15 minutes: `15 / 60 = 0.25 hours`
- 30 minutes: `30 / 60 = 0.50 hours`
- 45 minutes: `45 / 60 = 0.75 hours`

So, 7 hours and 30 minutes becomes **7.5 hours**.
`20 × 7.5 = $150.00`

## FAQ

**Do employers round timesheet punches?**
Yes. Under the US Fair Labor Standards Act (FLSA), employers are legally allowed to round employee time to the nearest 15-minute increment (often called the 7-minute rule). If you clock in at 8:07, it rounds down to 8:00. If you clock in at 8:08, it rounds up to 8:15. This practice is legal as long as it averages out fairly over time and doesn't explicitly favor the employer.

---
*Stop fighting with Base-60 math and messy 15-minute rounding rules. Generate flawless payroll data instantly using the [CalcUnit Hours Calculator](/time/hours-calculator).*
