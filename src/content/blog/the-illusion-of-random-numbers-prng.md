---
title: "The Illusion of Randomness: How Computers Generate Numbers"
date: "2026-06-12"
excerpt: "Can a computer actually be random? Learn the difference between True Randomness and Pseudo-Random Number Generators (PRNGs) used in video games and cryptography."
author: "CalcUnit Computer Science Experts"
toolSlug: "random-number-generator"
toolCategory: "math"
---

Generate mathematically secure, unbiased sequences instantly using our [Random Number Generator](/math/random-number-generator), or read on to discover why true randomness is scientifically impossible for a computer.

We rely on random numbers every day. They shuffle your Spotify playlists, determine the loot drops in your favorite video games, and generate the cryptographic keys that secure your bank account passwords.

But there is a massive philosophical and mathematical problem: **Computers are deterministic.** A computer is a logic machine designed to follow strict, predictable instructions. Therefore, it is physically impossible for a computer to generate a truly "random" number out of thin air.

So, how do they do it?

## Pseudo-Random Number Generators (PRNGs)

Most applications (like video games or spreadsheet software) use Pseudo-Random Number Generators (PRNGs). 

A PRNG uses a highly complex mathematical algorithm to create a sequence of numbers that *looks* completely random to a human, but is actually entirely predictable if you know the starting variable.

### The "Seed" Value
Every PRNG algorithm requires a starting number, called a **Seed**. 
If you feed the algorithm the exact same Seed, it will always output the exact same sequence of "random" numbers.

To create the illusion of randomness, the computer usually uses the system clock as the Seed. For example, the computer will look at the exact millisecond you clicked the "Generate" button (e.g., 14:32:05:943) and use `943` as the starting seed for the complex math equation. Because humans cannot perfectly time clicks down to the millisecond, the output appears completely unpredictable.

### The Danger of PRNGs
Because PRNGs are deterministic, they are highly dangerous to use for cybersecurity. If a hacker can figure out the algorithm and guess the Seed (by looking at the computer's system clock), they can instantly predict all the "random" passwords or encryption keys the computer is generating.

## True Random Number Generators (TRNGs)

To secure the internet, computer scientists had to figure out how to generate True Random Number Generators (TRNGs). 

Because a computer algorithm cannot be truly random, a TRNG relies on **unpredictable physical phenomena** occurring in the real world to generate the Seed.

Modern TRNGs measure physical entropy (chaos):
- **Atmospheric Noise:** Measuring random radio static from lightning strikes around the world (this is what the famous site Random.org uses).
- **Thermal Noise:** Measuring microscopic fluctuations in temperature on the computer's motherboard.
- **Radioactive Decay:** Measuring the unpredictable timing of subatomic particle decay.
- **Lava Lamps:** The cybersecurity firm Cloudflare famously uses a wall of 100 physical lava lamps in their lobby. A camera records the chaotic movement of the lava blobs and converts those visual pixels into massive strings of truly random cryptographic keys.

## FAQ

**Why does Spotify's 'Shuffle' feel like it's not random?**
Because true randomness often results in "clumping" (e.g., playing three songs from the same artist in a row), which humans perceive as annoying or broken. Spotify actually had to *reduce* the mathematical randomness of their shuffle algorithm, introducing rules to spread artists out evenly, so the playlist would *feel* more random to human psychology!

---
*Need an unbiased result for a giveaway, statistical sample, or tabletop game? Use the [CalcUnit Random Number Generator](/math/random-number-generator) today.*
