---
title: "Adding and Subtracting Time: The Math of the 60-Minute Hour"
date: "2026-06-12"
excerpt: "Why is calculating durations so difficult? Learn how to add and subtract hours and minutes using Base-60 math without relying on a calculator."
author: "CalcUnit Time Experts"
toolSlug: "time-calculator"
toolCategory: "time"
---

Instantly add or subtract massive strings of hours, minutes, and seconds using our [Time Calculator](/time/time-calculator), or read on to learn the frustrating rules of Base-60 time arithmetic.

If a movie is 2 hours and 45 minutes long, and it starts at 7:30 PM, what time will it end? 

If you try to type `7.30 + 2.45` into a standard calculator, you will get the answer `9.75`. But there is no such time as "9:75 PM." 

Standard calculators are programmed to use Base-10 math (where numbers roll over at 100). Clocks use Base-60 math (where minutes roll over at 60). To do time arithmetic correctly, you must manually manage the "roll-over" events.

## Adding Time: The Rollover Rule

When adding durations of time together, you must add the hours and the minutes completely separately. 

**Let's solve the movie problem:**
Start Time: 7:30
Duration: 2 hours and 45 minutes

**Step 1: Add the Minutes.**
`30 + 45 = 75 minutes.`

**Step 2: Handle the Base-60 Rollover.**
Because 75 is larger than 60, you must convert those excess minutes into a new hour. 
Subtract 60 from your total minutes: `75 - 60 = 15 minutes left over.`
You now have **1 brand new hour** and **15 minutes**. 

**Step 3: Add the Hours.**
`7 (original hours) + 2 (duration hours) + 1 (new rolled-over hour) = 10 Hours.`

**Final Answer:** The movie ends at exactly **10:15 PM**.

## Subtracting Time: The Borrowing Rule

Subtracting time is much more difficult because it requires "borrowing," which breaks the brains of people used to Base-10 math.

If you have to be at the airport at 3:15 PM, and the drive takes 1 hour and 40 minutes, what time do you need to leave the house?

**Step 1: Set up the subtraction problem.**
  `3 Hours, 15 Minutes (Destination Time)`
`- 1 Hour, 40 Minutes (Drive Time)`
----------------------------------

**Step 2: Subtract the Minutes.**
You cannot subtract 40 from 15. You must "borrow" an hour from the Hours column.
*The Crucial Mistake:* In normal math, when you borrow a 1, you add 10 or 100. In time math, an hour is exactly 60 minutes. Therefore, you must add **60** to the minutes column.

The 3 Hours becomes 2 Hours.
The 15 Minutes becomes `15 + 60 = 75 Minutes`.

Now, run the new subtraction problem:
`75 - 40 = 35 Minutes.`

**Step 3: Subtract the Hours.**
Remember, you only have 2 hours left because you borrowed one!
`2 - 1 = 1 Hour.`

**Final Answer:** You must leave the house at exactly **1:35 PM**.

## The 12-Hour Clock Trap

If you are calculating timelines that cross over the "12:00" threshold (either noon or midnight), standard addition and subtraction will fail entirely.

*Example:* A baking recipe takes 4 hours. You put it in the oven at 10:00 AM. 
`10 + 4 = 14`. The answer is not 14:00 AM. 

Whenever your final hour calculation exceeds 12 on a standard AM/PM clock, you must mathematically subtract 12 to reset the clock face, and flip the AM/PM designation.
`14 - 12 = 2`. The food will be ready at **2:00 PM**.

*(Pro Tip: This is why the military, hospitals, and airlines exclusively use 24-hour time. It entirely eliminates the dangerous 12-hour rollover trap).*

---
*Stop fighting with Base-60 mental math. Calculate massive flight itineraries, payroll durations, and complex schedules instantly using the [CalcUnit Time Calculator](/time/time-calculator).*
