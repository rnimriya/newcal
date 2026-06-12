---
title: "Understanding Standard Deviation and Z-Scores"
date: "2026-06-12"
excerpt: "How do statisticians determine what is 'normal' and what is an 'outlier'? Learn how to calculate Z-scores and map data onto a normal distribution bell curve."
author: "CalcUnit Statistics Experts"
toolSlug: "z-score-calculator"
toolCategory: "statistics"
---

Calculate precise statistical deviations instantly using our [Z-Score Calculator](/statistics/z-score-calculator), or read on to understand the math behind the famous "bell curve."

If you score an 85 on a difficult math exam, is that a good score or a bad score? 

Without context, an 85 means nothing. If the class average was a 95, you did poorly. If the class average was a 60, you did exceptionally well. In statistics, we don't just look at the raw number; we look at how far that number deviates from the average. This is measured using a **Z-Score**.

## What is a Z-Score?

A Z-Score (also called a Standard Score) is a mathematical metric that tells you exactly how many **Standard Deviations** a specific data point is from the Mean (average) of the dataset.

- A Z-Score of **0** means the data point is exactly average.
- A positive Z-Score (e.g., +1.5) means the data point is *above* average.
- A negative Z-Score (e.g., -2.0) means the data point is *below* average.

## The Z-Score Formula

To calculate a Z-Score, you need three numbers:
1. **X:** The specific data point you are measuring (e.g., your test score).
2. **μ (Mu):** The Mean (average) of the entire population.
3. **σ (Sigma):** The Standard Deviation of the population.

**Z = (X - μ) / σ**

### Example Calculation
You score an 85 on a test. The class average (Mean) was 70. The Standard Deviation was 10.
1. Subtract the Mean from your score: `85 - 70 = 15`
2. Divide by the Standard Deviation: `15 / 10 = 1.5`

Your Z-Score is **1.5**. You scored 1.5 standard deviations above the class average.

## The Empirical Rule (68-95-99.7)

Z-Scores are incredibly powerful because almost all naturally occurring data (like human height, test scores, or blood pressure) follows a "Normal Distribution," which looks like a symmetrical Bell Curve.

Statisticians use the Empirical Rule to quickly analyze data on a bell curve:
- **68%** of all data falls between a Z-Score of **-1.0 and +1.0**. (This is considered "Normal").
- **95%** of all data falls between a Z-Score of **-2.0 and +2.0**.
- **99.7%** of all data falls between a Z-Score of **-3.0 and +3.0**.

Using our test score example above (Z-Score of 1.5), we know that you scored higher than roughly 93% of the entire class.

## Identifying Outliers

In research and data science, Z-Scores are used to identify statistical outliers—data points that are so far from the norm that they might indicate an error or a highly unique event.

A general rule of thumb in statistics is that any data point with a Z-Score greater than **+3.0** or less than **-3.0** is considered an outlier. Less than 0.3% of naturally occurring data should ever land that far from the average.

## FAQ

**Why do we use Z-Scores instead of just looking at the difference from the average?**
Z-Scores standardize data across completely different units of measurement. Because a Z-Score converts raw data into "Standard Deviations," you can use it to mathematically compare apples to oranges (e.g., comparing your SAT score to your friend's ACT score to see who is actually smarter relative to their testing group).

---
*Don't struggle with complex standard deviation formulas by hand. Map your data to the bell curve instantly using the [CalcUnit Z-Score Calculator](/statistics/z-score-calculator).*
