import type { SEOContent } from "@/lib/seo/content";

export const BATCH_16: Record<string, Partial<SEOContent>> = {
  "average-calculator": {
    description: `An average is the most quoted number in American life — batting averages, grade point averages, average commute times — and one of the least understood. The arithmetic mean, the kind this calculator computes, comes from a simple recipe: add every value together, then divide by how many values you have. A Little League coach with five game scores of 2, 4, 1, 3, and 5 runs adds them to 15 and divides by 5, giving an average of 3 runs per game.

The mean has a weakness: one extreme value drags it around. If that same coach's team scored 30 runs in one blowout, the average would jump even though most games looked the same — which is why the tool also shows the range, the gap between the biggest and smallest values, as a quick honesty check on your average.

Using it takes seconds. Pick your count in the Number of Values dropdown, type each number into its Value box, and the Mean (Average) result appears alongside the Sum and Range, updating as you edit. Grocery budgets, weekly mileage, quiz scores — whenever several numbers need one representative voice, this is the tool that gives it to them.`,
    howToSteps: [
      "Choose 3, 4, 5, or 6 from the Number of Values dropdown to match how many numbers you are averaging.",
      "Type each number into its own Value 1, Value 2, and so on box — decimals are fine.",
      "Read the Mean (Average) result, which is the sum divided by the count.",
      "Glance at the Sum box if you also need the raw total.",
      "Check the Range box (max minus min) to see whether one extreme value is skewing your average.",
      "Change any value and watch the mean update instantly.",
    ],
    faqs: [
      { q: "How is the mean different from the median?", a: "The mean adds everything and divides by the count, so outliers pull it; the median is the middle value, so outliers cannot move it. For 2, 3, 3, 9, the mean is 4.25 while the median is 3." },
      { q: "Why is my average higher than most of my numbers?", a: "A single large outlier pulls the mean up. The Range box shows the gap between extremes — a big range with a high mean usually means one value is doing the pulling." },
      { q: "Is an 'averge calculator' the same thing?", a: "Yes — 'averge' is a common misspelling of 'average'. This tool computes the arithmetic mean, which is what most people mean by average." },
      { q: "When should I use the median instead of the mean?", a: "Use the median for skewed data like home prices or incomes, where a few huge values distort the mean. For symmetric data like test scores, the mean is fine." },
      { q: "Can I average percentages with this calculator?", a: "Yes, as long as the percentages share the same base. Averaging 10% off and 20% off two different-priced items will not give the true overall discount, though." },
    ],
  },

  "basic-statistics-calculator": {
    description: `Five well-chosen numbers can tell you almost everything about a dataset. This calculator takes up to five values and returns the essential summary statistics — the center, the spread, and the total — in one pass, so you do not need a separate tool for each. A teacher with quiz scores of 78, 85, 92, 70, and 88, for example, can see the class average, the highest and lowest scores, and the full spread without touching a spreadsheet.

Basic statistics answer three questions: where is the middle, how spread out are the values, and how many are there. The mean locates the balance point, the range shows the span from lowest to highest, and the sum gives the raw total that everything else is built from. Together they turn a raw list into a story you can actually use — whether that story is about quiz scores, daily step counts, or a week's worth of coffee spending.

The tool works live: type each value into Value 1 through Value 5, and the outputs update with every keystroke. Students checking homework, fantasy football managers comparing player scores, and small business owners totaling weekly sales all get instant answers without formulas or sign-ups.`,
    howToSteps: [
      "Type your first number into the Value 1 box.",
      "Fill in Value 2 through Value 5 with the rest of your dataset.",
      "Leave any unused Value boxes at their defaults or zero them out.",
      "Read the outputs panel for the mean, sum, range, and other summary statistics.",
      "Edit any value to watch every statistic recalculate instantly.",
    ],
    faqs: [
      { q: "What counts as 'basic statistics'?", a: "The fundamentals: mean, median, mode, range, and sum. These five describe a dataset's center, spread, and total — enough for most everyday decisions." },
      { q: "My range is huge but my mean looks normal — what does that mean?", a: "Your data is spread wide around the middle. A big range with a middling mean usually signals outliers on both ends, like a class with both perfect scores and near-zeroes." },
      { q: "When is a basic statistics calculator enough?", a: "For quick everyday summaries — grading quizzes, comparing weekly sales, tracking workouts. Reach for deeper tools when you need confidence intervals or significance tests." },
      { q: "What is a 'basic statstics calculator'?", a: "'Statstics' is a misspelling of 'statistics'. This tool is exactly what you are looking for: enter values, get the fundamental stats." },
    ],
  },

  "bayes-theorem-calculator": {
    description: `A positive medical test does not always mean you are sick — Bayes' theorem is the math that explains why. It updates a starting belief (the prior probability) with new evidence to produce a revised belief (the posterior probability). If a disease affects 1 in 1,000 people and a test is 99% accurate, a positive result still leaves your chance of actually having the disease under 10%, because the disease is so rare that false positives outnumber true ones.

The formula looks intimidating — P(A|B) = P(B|A) × P(A) / P(B) — but each piece is plain language: how likely the evidence is if your belief is true, times how likely your belief was to begin with, divided by how likely the evidence is overall. Spam filters, weather models, and courtroom DNA arguments all run on this same update rule.

This calculator performs the core multiplication at the heart of the formula. Enter your two probability components into the Variable A and Variable B boxes — for example, the prior and the likelihood — and the Result box shows their product, the numerator of Bayes' rule, which you then divide by the overall evidence probability.`,
    howToSteps: [
      "Decide which two Bayes components to multiply: typically the prior probability goes in Variable A.",
      "Type the prior — your starting belief before the evidence — in the Variable A box (e.g., 0.001 for a 1-in-1000 disease).",
      "Type the likelihood — how probable the evidence is if your belief is true — in the Variable B box (e.g., 0.99 for a 99% accurate test).",
      "Read the Result box: Variable A × Variable B, the numerator of Bayes' theorem.",
      "Divide the Result by the overall probability of the evidence to get the updated posterior probability.",
      "Try a higher prior in Variable A and watch the posterior climb — rare conditions stay unlikely even after positive tests.",
    ],
    faqs: [
      { q: "What is Bayes' theorem in plain English?", a: "A rule for updating beliefs: new probability = (how likely the evidence is if you are right × your original belief) ÷ how likely the evidence is overall." },
      { q: "Why is my posterior probability so much lower than the test accuracy?", a: "Base rates. A 99% accurate test for a 1-in-1000 disease still yields mostly false positives, because healthy people outnumber sick people 999 to 1." },
      { q: "When should I use Bayes' theorem?", a: "Whenever new evidence should change an existing belief: medical screening, spam filtering, quality-control sampling, and legal reasoning about evidence." },
      { q: "Is this the same as a Bayesian probability calculator?", a: "Essentially, yes. 'Bayesian' describes the whole approach of updating probabilities with evidence; Bayes' theorem is the formula that does the updating." },
    ],
  },

  "confidence-interval": {
    description: `A poll that reports "47% approve, margin of error ±3 points" is really making two claims: a best guess and an honesty zone around it. That zone is the confidence interval — the range where the true value probably sits. A 95% confidence interval means that if you repeated the poll 100 times, about 95 of those intervals would capture the real number. It does not mean there is a 95% chance the truth is inside this particular interval, though that is how most people read it.

The width comes from three ingredients: the sample mean, the sample standard deviation, and the sample size, combined as x̄ ± z* × (s / √n). Bigger samples shrink the interval — quadrupling respondents halves the margin — while more confidence (99% instead of 95%) widens it, because you need a bigger net to be surer of the catch.

This calculator builds the interval from your four inputs: the Sample Mean (x̄), the Sample Standard Deviation (s), the Sample Size (n), and your chosen Z* critical value (1.96 for 95% confidence, 2.576 for 99%). A restaurant owner who surveyed 64 customers with an average rating of 4.2 and a standard deviation of 0.8 gets 4.2 ± 0.196 — a true rating plausibly between 4.0 and 4.4.`,
    howToSteps: [
      "Type your sample's average into the Sample Mean (x̄) box.",
      "Type the spread of your sample into the Sample Standard Deviation (s) box.",
      "Type how many observations you collected into the Sample Size (n) box.",
      "Enter your critical value in the Z* box — 1.96 for 95% confidence or 2.576 for 99%.",
      "Read the lower and upper bounds of your confidence interval from the results.",
      "Increase the Sample Size (n) and watch the interval narrow — more data means more precision.",
    ],
    faqs: [
      { q: "What is a confidence interval, really?", a: "A range of plausible values for an unknown population number, built from sample data. '4.0 to 4.4' says the true average rating is probably in there — probably, not certainly." },
      { q: "What does '95% confident' actually mean?", a: "If you repeated the study 100 times, about 95 of the resulting intervals would contain the true value. It describes the method's reliability, not the odds for one specific interval." },
      { q: "When do I need a confidence interval instead of just an average?", a: "Whenever you generalize from a sample to a bigger group — poll results, product ratings, medical trial outcomes. Averages alone hide how shaky the estimate is." },
      { q: "Is the margin of error the same as a confidence interval?", a: "Nearly — the margin of error is half the interval's width. An estimate of 47% ± 3 points is a confidence interval from 44% to 50%." },
    ],
  },

  "correlation-coefficient-calculator": {
    description: `Ice cream sales and drowning deaths climb together every summer, yet nobody blames the ice cream. The correlation coefficient — usually written r — measures how tightly two variables move together, on a scale from −1 to +1. A value near +1 means they rise and fall in lockstep, near −1 means one rises as the other falls, and near 0 means no linear relationship at all. Ice cream and drownings correlate near +0.9, but the real driver is a third variable: hot weather.

Squaring r gives r², the share of one variable's movement explained by the other. An r of 0.8 means 64% of the variation is shared — impressive, but it still says nothing about cause. That is the famous trap: correlation is a measure of co-movement, not a license to claim one thing causes another.

This calculator evaluates the key pairwise computation behind the coefficient. Enter the two quantities you are relating into the Variable A and Variable B boxes — say, monthly ad spend and monthly revenue — and the Result box returns their product, the building block that the full correlation formula sums across every data pair before standardizing.`,
    howToSteps: [
      "Pick the two variables you suspect move together — for example, study hours and test scores.",
      "Type the first variable's summary value in the Variable A box.",
      "Type the second variable's summary value in the Variable B box.",
      "Read the Result box for the pairwise product used in the correlation calculation.",
      "Repeat for each data pair and sum the products — the full formula then divides by the standardized spreads.",
      "Remember: a strong Result pattern means co-movement, not proof that one variable causes the other.",
    ],
    faqs: [
      { q: "What does the correlation coefficient actually measure?", a: "How closely two variables follow a straight-line relationship, from −1 (perfect opposite) through 0 (none) to +1 (perfect lockstep). It says nothing about curves or causes." },
      { q: "My correlation is 0.7 — is that strong?", a: "Moderately strong. Square it: 0.49, so about half the variation is shared. In social sciences that is respectable; in physics it would be weak." },
      { q: "When should I check correlation?", a: "When exploring whether two measurements move together — ad spend vs. sales, temperature vs. energy use — before building any prediction model." },
      { q: "What is a 'corelation coefficient'?", a: "'Corelation' is a misspelling of 'correlation'. This calculator covers the concept: enter your two variables and evaluate their co-movement." },
    ],
  },

  "descriptive-statistics-calculator": {
    description: `Raw data is a pile of bricks; descriptive statistics is the blueprint that shows what the pile could become. Instead of staring at fifty home prices, you read five numbers: the average price, the middle price, the most common price band, the cheapest and priciest extremes, and how far apart they sit. A Phoenix real estate agent quoting a neighborhood, for instance, can say the average listing is $485,000, the median is $460,000, and prices range from $310,000 to $720,000 — a complete picture in one sentence.

Descriptive statistics split into three jobs. Measures of center (mean, median, mode) find the typical value. Measures of spread (range, variance, standard deviation) show how scattered things are. And the count plus the sum anchor everything to real quantities. When the mean sits well above the median, as it often does with home prices, you instantly know a few luxury listings are pulling the average up.

This tool computes the full summary from up to five values. Type each into Value 1 through Value 5, and the outputs update live — mean, median, mode, range, sum, and more — so a quick dataset never needs a spreadsheet.`,
    howToSteps: [
      "Type your first data point into the Value 1 box.",
      "Continue with Value 2, Value 3, Value 4, and Value 5.",
      "Scan the outputs for the mean, median, and mode — the three measures of center.",
      "Check the range and spread figures to see how scattered your data is.",
      "Compare mean vs. median: a big gap means outliers are pulling the average.",
      "Edit any value to watch the whole summary recalculate instantly.",
    ],
    faqs: [
      { q: "What is the difference between descriptive and inferential statistics?", a: "Descriptive statistics summarize the data you have — means, ranges, charts. Inferential statistics use a sample to make claims about a bigger population, like polls predicting elections." },
      { q: "Why do mean and median disagree in my data?", a: "Skew. A few extreme values drag the mean toward them while the median stays put. Home prices almost always show mean above median because of luxury listings." },
      { q: "When is descriptive statistics enough?", a: "When you only need to describe what you measured — summarizing sales, reporting survey results, grading a class. You need inferential tools only when generalizing beyond your data." },
      { q: "Do I need the mode for numbers?", a: "Rarely for continuous data, but it is gold for categories — the most common shoe size, the most frequent survey answer. This tool reports it alongside the mean and median." },
    ],
  },
  "final-exam-grade": {
    description: `Finals week is arithmetic as much as studying. Most US college courses weight the final exam at 20 to 40 percent of the grade, which means a student sitting at 82% with a 30%-weighted final faces a very specific question: what score keeps the A, or at least saves the B? Guessing wastes study hours on the wrong target; the math gives an exact one.

The formula is a weighted-average reversal: required score = (target − current × (1 − weight)) ÷ weight. A student with an 82% current grade, a final worth 30%, and a target of 90% needs (90 − 82 × 0.7) ÷ 0.3 = 108.7% — mathematically impossible, which is itself useful news: it says aim for the B, where the required score is a manageable 75.3%.

This calculator runs that reversal for you. Enter your Current Grade (%), the Final Exam Weight (%), and your Target Grade (%), and it returns the exact final-exam score you need. Run it once for your dream grade and once for your safety grade, then split your study time accordingly.`,
    howToSteps: [
      "Type your current course grade as a percentage in the Current Grade (%) box — for example, 82.",
      "Type how much the final counts in the Final Exam Weight (%) box — check your syllabus; 25 to 30 is typical.",
      "Type the overall grade you are aiming for in the Target Grade (%) box.",
      "Read the required final-exam score from the results.",
      "If the required score is over 100%, lower the Target Grade (%) until it becomes achievable.",
      "Re-run the numbers after each midterm or project grade posts, since your Current Grade (%) keeps moving.",
    ],
    faqs: [
      { q: "How is a final exam grade calculated?", a: "Your course grade is a weighted average: (current grade × (1 − final weight)) + (final score × final weight). This tool solves that equation backwards for the final score you need." },
      { q: "The calculator says I need 112% — what now?", a: "Your target is mathematically out of reach. Drop the Target Grade (%) to the next letter grade down and recalculate for a realistic goal." },
      { q: "When should I use a final exam grade calculator?", a: "Mid-semester, when you know your current standing and the final's weight. It tells you exactly how hard to study instead of guessing." },
      { q: "What if my final is worth points, not percent?", a: "Convert first: divide the final's points by total course points and multiply by 100. A 200-point final in a 1000-point course is a 20% weight." },
    ],
  },

  "gpa-calculator": {
    description: `American colleges compress four years of effort into a single number between 0 and 4, and that number opens or closes doors — scholarships, internships, graduate school. The GPA is a weighted average: each course grade (A = 4, B = 3, C = 2, D = 1, F = 0) multiplied by its credit hours, summed, then divided by total credits. A 4-credit chemistry A outweighs a 1-credit lab B, which is exactly why credit hours exist in the formula.

Consider a semester with three courses: an A in 4-credit calculus (16 grade points), a B in 3-credit history (9 points), and a C in 3-credit chemistry (6 points). That is 31 points over 10 credits — a 3.1 GPA. The same grades with different credit splits would give a different GPA, so the weights matter as much as the letters.

This calculator handles up to three courses per run. Enter each Grade (0–4) and its Credits, and the GPA result appears instantly. Pre-med students tracking the 3.7+ their programs expect, or freshmen checking whether they are still above a scholarship's 3.0 cutoff, get the answer in seconds.`,
    howToSteps: [
      "Type your first course grade on the 4.0 scale in the Grade 1 (0-4) box — 4 for A, 3 for B, 2 for C.",
      "Type that course's credit hours in the Credits 1 box.",
      "Repeat with Grade 2 (0-4) / Credits 2 and Grade 3 (0-4) / Credits 3 for your other courses.",
      "Read your GPA from the results — grade points divided by total credits.",
      "Change a grade to see how much one course moves the needle; heavy-credit courses swing it most.",
      "For more than three courses, run the calculator in batches and combine, weighting each batch GPA by its credits.",
    ],
    faqs: [
      { q: "How is college GPA actually calculated?", a: "Multiply each grade's point value (A=4, B=3, C=2, D=1, F=0) by its credit hours, add those products, and divide by total credit hours." },
      { q: "Is a 3.1 GPA good?", a: "It is a B average — solid but below the 3.5+ many scholarships and competitive programs want. Context matters: a 3.1 in engineering reads differently than a 3.1 in communications." },
      { q: "When should I calculate my GPA?", a: "After final grades post each semester, before scholarship applications, and any time you are deciding whether to retake a course." },
      { q: "What about plus/minus grades like A− or B+?", a: "Most schools assign them fractional values (A− = 3.7, B+ = 3.3). Check your school's scale, then enter the decimal in the Grade boxes." },
    ],
  },

  "histogram-calculator": {
    description: `A list of 200 customer ages is noise; a histogram turns it into a skyline you can read at a glance. Histograms group values into bins — say, ages 20–29, 30–39, 40–49 — and draw one bar per bin whose height equals the count inside it. The shape of that skyline reveals what tables hide: a bell shape means most values cluster in the middle, a long tail to the right means a few huge values stretch the data, and two humps hint that two different groups got mixed together.

Choosing bin width is the craft. Too few bins and real patterns drown; too many and random noise looks meaningful. A common starting rule takes the data's range and divides by the square root of the sample size — 100 values with a range of 50 suggests bins about 5 units wide.

This calculator handles the core arithmetic behind bin planning. Enter your two key numbers — for example, the data range in Variable A and the bin count in Variable B — and the Result box returns their computed combination, letting you size bins that reveal the shape instead of hiding it.`,
    howToSteps: [
      "Decide what two numbers your bin calculation needs — commonly the data range and the number of bins.",
      "Type the first number (e.g., the range of your data) in the Variable A box.",
      "Type the second number (e.g., your chosen bin count) in the Variable B box.",
      "Read the Result box for the computed combination of the two.",
      "Divide your data range by the bin width implied by the Result to sanity-check your bin count.",
      "Adjust the bin count in Variable B up or down until the histogram shape stops changing much — that is the stable view.",
    ],
    faqs: [
      { q: "What is a histogram, exactly?", a: "A bar chart of frequencies: the x-axis is split into ranges (bins) and each bar's height shows how many data values fall in that range. It reveals the distribution's shape." },
      { q: "What shapes should I look for?", a: "Bell (normal), right-skewed (tail toward big values, like incomes), left-skewed, uniform (flat), or bimodal (two humps — usually two groups mixed together)." },
      { q: "Histogram vs. bar chart — when does it matter?", a: "Use a histogram for continuous numbers grouped into ranges (ages, prices). Use a bar chart for separate categories (states, brands) where the bars do not touch." },
      { q: "How many bins should a histogram have?", a: "A rule of thumb: about the square root of your sample size. 100 data points → roughly 10 bins. Too few hides detail; too many shows noise." },
    ],
  },

  "interquartile-range": {
    description: `Averages hide how bunched the middle of your data is — the interquartile range, or IQR, exposes it. Sort your values, find the median of the bottom half (Q1, the 25th percentile) and the median of the top half (Q3, the 75th percentile), and the IQR is simply Q3 minus Q1. It measures the spread of the middle 50% of your data, ignoring the extremes entirely. In a Dallas suburb where Q1 home price is $320,000 and Q3 is $480,000, the IQR of $160,000 tells buyers what a typical home actually costs, undistorted by the odd mansion or foreclosure.

The IQR's real power is outlier detection. Anything below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR counts as an outlier by the standard rule — the fences that box plots draw as whiskers. A $95,000 water bill in a neighborhood with an IQR of $40 around a $120 median would trip the upper fence instantly.

This calculator takes your Q1 (25th percentile) and Q3 (75th percentile) and returns the IQR plus the outlier fences, so one quick entry flags the suspicious values.`,
    howToSteps: [
      "Sort your data and find Q1, the median of the lower half — type it in the Q1 (25th percentile) box.",
      "Find Q3, the median of the upper half — type it in the Q3 (75th percentile) box.",
      "Read the IQR result: Q3 minus Q1, the spread of the middle half of your data.",
      "Check the lower fence (Q1 − 1.5 × IQR): anything below it is an outlier.",
      "Check the upper fence (Q3 + 1.5 × IQR): anything above it is an outlier.",
      "Investigate flagged values before deleting them — an outlier is sometimes the most interesting data point you have.",
    ],
    faqs: [
      { q: "What is the interquartile range in simple terms?", a: "The distance between the 25th and 75th percentiles — how spread out the middle half of your data is. IQR = Q3 − Q1." },
      { q: "My IQR is tiny but my range is huge — what gives?", a: "Most values cluster tightly while a few extremes stretch the range. Classic with incomes: the middle class bunches together while billionaires pull the max upward." },
      { q: "When is IQR better than standard deviation?", a: "With skewed data or outliers. Standard deviation gets dragged by extremes; the IQR ignores them and describes the typical spread." },
      { q: "What does 'IQR' stand for?", a: "Interquartile range — 'inter' (between) + 'quartile' (quarter marks). It is the range covering the middle two quartiles of your data." },
    ],
  },

  "mean-median-mode-calculator": {
    description: `Three different "averages" can tell three different stories about the same list, and picking the wrong one misleads everyone. The mean adds everything and divides by the count. The median sorts the values and takes the middle one. The mode picks the most frequent value. On a used-car lot in Ohio with prices of $9,000, $11,000, $11,000, $12,000, and $45,000, the mean says $17,600, the median says $11,000, and the mode says $11,000 — and only the last two describe a car a normal buyer will actually see.

Each measure has a home turf. The mean shines with symmetric data like adult heights, where every value deserves equal weight. The median rules skewed data like home prices and salaries. The mode owns categories: the most common shoe size to stock, the most frequent customer complaint, the winning vote-getter.

This calculator reports all three from up to five values. Enter your numbers in the Value boxes under Data Values, and the mean, median, and mode appear side by side — disagreement between them is itself a finding, a fingerprint of skew or clusters in your data.`,
    howToSteps: [
      "Type your numbers into the Value 1 through Value 5 boxes under Data Values.",
      "Read the mean — the total divided by how many values you entered.",
      "Read the median — the middle value after sorting.",
      "Read the mode — the value that appears most often (there may be none, or more than one).",
      "Compare the three: if the mean sits far from the median, outliers are skewing your data.",
      "Add or change a value to watch which measure moves most — usually the mean.",
    ],
    faqs: [
      { q: "What is the difference between mean, median, and mode?", a: "Mean = sum ÷ count. Median = middle value when sorted. Mode = most frequent value. For 4, 7, 7, 9: mean 6.75, median 7, mode 7." },
      { q: "Which average should I report?", a: "Median for skewed data (prices, incomes), mean for symmetric data (heights, test scores), mode for categories (most popular choice)." },
      { q: "When do I need all three at once?", a: "When first exploring data. Agreement means a well-behaved symmetric dataset; disagreement reveals skew, outliers, or clusters worth investigating." },
      { q: "Can a dataset have no mode?", a: "Yes — if every value appears once, there is no mode. It can also have two or more (bimodal), which often signals two mixed groups." },
    ],
  },

  "median-calculator": {
    description: `Put Bill Gates in a room with nine baristas and the average income in that room is enormous — but the median, the income of the person in the middle, still describes a barista. That is the median's superpower: sort the values, take the middle one, and extreme outliers lose their vote. It is why journalists quote median home prices instead of average ones — one $20 million mansion should not redefine what a "typical" house costs in the neighborhood.

With an odd count, the median is the exact middle value; with an even count, it is the average of the two middle values. For 3, 7, 9, 12 the median is (7 + 9) ÷ 2 = 8. Either way, half your data sits above it and half below, which makes the median the natural dividing line for "above typical" versus "below typical."

This calculator finds it from up to five values. Type your numbers into the Value boxes under Data Values — no sorting needed, the tool handles that — and the median appears instantly. Compare it against the mean whenever outliers might be lurking.`,
    howToSteps: [
      "Type your numbers into the Value 1 through Value 5 boxes under Data Values — any order is fine.",
      "Read the median result: the middle value of your sorted data.",
      "With an even count of values, the tool averages the two middle ones automatically.",
      "Compare the median to the mean — a gap means skew or outliers.",
      "Try replacing your largest value with something extreme and watch the median barely move.",
      "Use the median as your 'typical value' whenever reporting prices, incomes, or wait times.",
    ],
    faqs: [
      { q: "What is the median, exactly?", a: "The middle value when data is sorted smallest to largest. Half the values are above it, half below. For an even count, it is the average of the two middle values." },
      { q: "Why is median home price more useful than average?", a: "Luxury listings drag the average up but cannot move the median. The median tells a buyer what a normal house costs; the average tells a story distorted by mansions." },
      { q: "When should I use median instead of mean?", a: "For skewed data — incomes, home prices, company sizes — or any dataset where a few extreme values should not dominate the summary." },
      { q: "What is a 'meadian'?", a: "'Meadian' is a misspelling of 'median'. You are in the right place: enter your values and this calculator finds the middle one." },
    ],
  },
  "normal-distribution": {
    description: `Heights, SAT scores, and manufacturing errors all pile up in the same bell shape — most values near the middle, fewer toward the edges, in a pattern so universal that statisticians named it "normal." The normal distribution is fully described by two numbers: the mean (μ), which centers the bell, and the standard deviation (σ), which sets its width. Move the mean and the bell slides; shrink the standard deviation and it gets tall and narrow.

The famous 68-95-99.7 rule falls straight out of the shape: about 68% of values land within one standard deviation of the mean, 95% within two, and 99.7% within three. On the SAT, with a mean near 1050 and a standard deviation near 200, roughly 95% of test-takers score between 650 and 1450.

This calculator evaluates the distribution at any point you choose. Enter the Mean (μ), the Standard Deviation (σ), and your Value (x), and it returns where that value sits in the distribution — for instance, how unusual a 1400 SAT score really is.`,
    howToSteps: [
      "Type the center of your bell curve in the Mean (μ) box — e.g., 1050 for SAT scores.",
      "Enter the bell curve's width in the Standard Deviation (σ) box — e.g., 200 for the SAT.",
      "Type the value you are curious about in the Value (x) box — e.g., 1400.",
      "Read the result to see how that value compares to the distribution.",
      "Try x one standard deviation above the mean and confirm it lands near the 84th percentile.",
      "Use the 68-95-99.7 rule as a sanity check: values beyond μ ± 3σ are genuinely rare.",
    ],
    faqs: [
      { q: "What is a normal distribution?", a: "A symmetric bell-shaped pattern where most values cluster near the average and fewer appear farther out. It is defined entirely by its mean and standard deviation." },
      { q: "What does the 68-95-99.7 rule tell me?", a: "About 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. It is a quick rarity gauge for any normal-ish data." },
      { q: "When can I assume data is normal?", a: "For large natural measurements — heights, test scores, measurement errors. Check with a histogram first; income and wait times are usually skewed, not normal." },
      { q: "Is 'bell curve' the same as normal distribution?", a: "Yes — 'bell curve' is the casual name for the normal distribution's shape. Grading 'on a curve' usually means mapping scores to this pattern." },
    ],
  },

  "odds-probability": {
    description: `A sportsbook lists a longshot at 3-to-1 — three parts against to one part for — and casual bettors hear "decent chance." The real win probability is 1 ÷ (1 + 3) = 25%. Odds and probability describe the same uncertainty in different dialects: odds compare wins to losses (1 to 3), while probability compares wins to all outcomes (1 in 4). The conversion is division, not intuition: probability = odds-for ÷ (odds-for + odds-against).

The confusion costs real money. Bettors in Las Vegas see +300 on a moneyline and must translate it to a 25% break-even win rate before deciding the bet has value. Raffle organizers face the same math from the other side: selling 200 tickets with 5 prizes means each ticket's odds are 5 to 195, a probability of about 2.6%.

This calculator does the translation both ways. Enter your Odds For and Odds Against values, and it returns the probability as a decimal and a percentage — the number your gut was trying to estimate.`,
    howToSteps: [
      "Type the number of favorable outcomes in the Odds For box — e.g., 1 for a 3-to-1 longshot.",
      "Type the number of unfavorable outcomes in the Odds Against box — e.g., 3.",
      "Read the probability: 1 ÷ (1 + 3) = 0.25, or 25%.",
      "Flip it for favorites: Odds For 3, Odds Against 1 gives 75%.",
      "For a raffle, enter prizes as Odds For and non-winning tickets as Odds Against.",
      "Compare the probability to the price — a bet is only 'value' if your estimated chance beats this number.",
    ],
    faqs: [
      { q: "What is the difference between odds and probability?", a: "Odds compare wins to losses (1 to 3); probability compares wins to total outcomes (1 in 4, or 25%). Same situation, different framing." },
      { q: "What do 3-to-1 odds mean as a percentage?", a: "It depends on direction. 3-to-1 against means 25% (1 in 4). 3-to-1 on (a favorite) means 75% (3 in 4). Always clarify which side the 3 is on." },
      { q: "When do I need to convert odds to probability?", a: "Sports betting, poker pot odds, raffles, and any gamble quoted in odds format — convert to probability before comparing against the price or your own estimate." },
      { q: "What are 'odds against'?", a: "The losing side of the ratio. In 'Odds (For : Against)' format, 1:3 means one win for every three losses — a 25% probability." },
    ],
  },

  "one-sample-t-test-calculator": {
    description: `A soda bottling plant claims each can holds 12 ounces, but your sample of 30 cans averages 11.8 — is the machine underfilling, or is that just random wobble? The one-sample t-test answers exactly this: it compares a sample's average against a known or claimed value and tells you whether the gap is statistically meaningful. Small samples get special handling through the t-distribution, which has fatter tails than the normal curve to reflect the extra uncertainty.

The test produces a t-statistic — the gap between your sample mean and the claimed value, measured in standard errors — and from it a p-value. A tiny p-value (below your significance level, often 5%) says the gap is too big to be chance, so you reject the claim. Quality engineers, drug-dosage checkers, and pollsters validating census figures all run this test weekly.

This calculator performs the core arithmetic of the comparison. Enter your sample's summary value in Variable A and the claimed or target value in Variable B, and the Result box combines them — the first step toward the t-statistic that decides whether the difference is real.`,
    howToSteps: [
      "Collect your sample and compute its average — type it in the Variable A box.",
      "Type the claimed or target value you are testing against in the Variable B box (e.g., 12 for 12-ounce cans).",
      "Read the Result box for the combined value at the heart of the comparison.",
      "Divide the gap between the values by the standard error (sample SD ÷ √n) to get the t-statistic.",
      "Look up the t-statistic's p-value for your sample size minus one degrees of freedom.",
      "If the p-value is below 0.05, the difference is statistically significant — the claim does not hold.",
    ],
    faqs: [
      { q: "What is a one-sample t-test?", a: "A test comparing one sample's average to a known value — like checking whether cans really average 12 ounces. It accounts for small-sample uncertainty via the t-distribution." },
      { q: "What does a significant result actually prove?", a: "Only that the gap is unlikely to be random noise. It does not prove why the gap exists — a miscalibrated scale and a real underfill look identical to the test." },
      { q: "t-test vs. z-test — which one?", a: "Use the t-test when your sample is small (under ~30) or the population standard deviation is unknown — which is nearly always in practice." },
      { q: "What is a 'one sample t test' (no hyphens)?", a: "Same test, different punctuation. Search engines treat 'one sample t test', 'one-sample t-test', and 'single sample t test' as the same query." },
    ],
  },

  "outlier-calculator": {
    description: `One broken thermometer can drag a whole week's temperature average down — and unless you spot it, every conclusion you draw inherits the lie. An outlier is a value so far from the rest that it probably comes from a different process: a mistyped digit, a failed sensor, a fraudster's transaction hiding among honest ones. The standard rule flags anything below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR, the fences that box plots draw as their whiskers.

Spotting outliers matters because they hijack the mean and standard deviation while barely touching the median. A neighborhood's average utility bill of $400 might really be $180 for everyone plus one $3,000 mansion with a heated pool — remove the mansion and the "typical" bill halves. Analysts either investigate outliers (the mansion is real) or exclude them (the thermometer was broken), but they never ignore them.

This calculator runs the core fence arithmetic. Enter your quartile-based inputs in the Variable A and Variable B boxes — for example, Q1 and the IQR — and the Result box returns the computed fence value you compare each data point against.`,
    howToSteps: [
      "Sort your data and identify Q1 (25th percentile) and Q3 (75th percentile).",
      "Type Q1 into the Variable A box.",
      "Type the IQR (Q3 − Q1) into the Variable B box.",
      "Read the Result box: the fence offset used to flag extreme values.",
      "Compute the fences: lower = Q1 − 1.5 × IQR, upper = Q3 + 1.5 × IQR.",
      "Flag any value outside the fences, then investigate before deleting — outliers are sometimes the discovery.",
    ],
    faqs: [
      { q: "What exactly counts as an outlier?", a: "A value far enough from the rest to be suspicious — commonly anything beyond 1.5 × IQR past the quartiles. Distance alone defines it; the cause needs investigating." },
      { q: "Should I delete outliers from my data?", a: "Only if you can prove they are errors — a broken sensor, a typo. A real but extreme value (a billionaire's income) is legitimate data; deleting it is cherry-picking." },
      { q: "When should I check for outliers?", a: "Before trusting any average or running any model. One bad value can flip a conclusion, and the check takes seconds." },
      { q: "Outlier vs. anomaly — different?", a: "Mostly synonyms. 'Outlier' is the statistics term for an extreme data point; 'anomaly' is the machine-learning term for unusual patterns. Both mean 'look closer.'" },
    ],
  },

  "p-value-calculator": {
    description: `A p-value is not the probability that your result is true — it is the probability of seeing data this extreme if nothing were actually going on. That single misunderstanding has sunk a thousand research conclusions. The p-value starts from the null hypothesis (the boring claim that nothing changed) and asks: if the boring claim were true, how surprising would my data be? A p-value of 0.03 says "this surprising or more happens 3% of the time under the boring claim" — surprising enough that most fields reject the boring claim at the standard 5% significance level.

Website A/B tests live on this logic. A startup tests a new checkout button on 10,000 visitors, computes a z-score of 2.1 from the conversion difference, and gets a p-value near 0.036 — below 0.05, so the new button ships. The same z-score with a stricter 1% level would not ship; the significance level is a policy choice, not a law of nature.

This calculator converts your test statistic into p-values. Enter the Z-Score and your Significance Level α, and it returns the one- and two-tailed p-values plus whether the result clears your significance bar.`,
    howToSteps: [
      "Type your test statistic in the Z-Score box — e.g., 2.1 from your A/B test.",
      "Type your significance threshold in the Significance Level α box — 0.05 is the common default.",
      "Read the one-tailed p-value: the chance of results this extreme in your predicted direction.",
      "Read the two-tailed p-value: the chance in either direction (roughly double the one-tailed).",
      "Compare the p-value to α: below α means statistically significant.",
      "Check the significance verdict, then remember — significant means 'unlikely to be noise,' not 'important.'",
    ],
    faqs: [
      { q: "What is a p-value in plain English?", a: "The probability of getting results at least this extreme if nothing were really happening. Small p = surprising under the 'nothing happened' story, so you doubt that story." },
      { q: "Does p = 0.03 mean there's a 97% chance my hypothesis is true?", a: "No — that is the classic mistake. It means: if your hypothesis were false, you would still see results like this 3% of the time. It says nothing direct about your hypothesis being true." },
      { q: "When do I need a p-value?", a: "When testing a claim with data: A/B tests, drug trials, quality checks. If you are just describing data (averages, charts), you do not need one." },
      { q: "What is a 'pvalue'?", a: "'Pvalue' is just 'p-value' without the hyphen — same thing. Enter your Z-Score above and this calculator returns it." },
    ],
  },

  "pearson-correlation-calculator": {
    description: `Two datasets can move in perfect lockstep, wander independently, or mirror each other — the Pearson correlation coefficient, r, puts a number on which. It measures the strength of a straight-line relationship between two variables, from −1 (perfect opposite movement) through 0 (no linear link) to +1 (perfect togetherness). Study hours and exam scores in a college class might correlate at +0.72: not perfect, but a clear uphill slope.

Pearson only sees straight lines. A perfect U-shaped relationship — say, stress versus performance, where both very low and very high stress hurt — scores near zero despite being a strong pattern. That is why wise analysts plot the scatterplot before quoting r: the number summarizes the line, but the plot reveals the truth.

The formula standardizes both variables (subtract the mean, divide by the standard deviation), multiplies the paired standardized values, and averages. This calculator performs the core pairwise multiplication: enter the standardized values of your two variables in Variable A and Variable B, and the Result box returns their product — the building block summed across every pair to produce r.`,
    howToSteps: [
      "Standardize your first variable: subtract its mean and divide by its standard deviation.",
      "Type a standardized value in the Variable A box.",
      "Standardize your second variable the same way and type the paired value in the Variable B box.",
      "Read the Result box: the product of the paired standardized values.",
      "Repeat for every data pair, sum the products, and divide by (n − 1) to get Pearson's r.",
      "Plot your data first — a near-zero r can hide a strong curved relationship.",
    ],
    faqs: [
      { q: "What is Pearson correlation?", a: "A number from −1 to +1 measuring how closely two variables follow a straight-line relationship. +1 is a perfect uphill line, −1 a perfect downhill line, 0 no linear pattern." },
      { q: "My r is 0.85 — does X cause Y?", a: "Not necessarily. Strong correlation never proves causation — a third variable (like study habits driving both sleep and grades) could explain it." },
      { q: "Pearson vs. Spearman — which correlation?", a: "Pearson for straight-line relationships between continuous numbers. Spearman for ranked or curved-but-monotonic relationships, like race finishing positions." },
      { q: "Is Pearson's r the same as the correlation coefficient?", a: "Usually, yes. 'Correlation coefficient' without qualification means Pearson's r — the most common of several correlation measures." },
    ],
  },
  "percent-error-stat": {
    description: `Your chemistry lab measured water's density as 1.08 g/mL, but the accepted value is 1.00 — you missed by 0.08, but is that good or bad? Percent error answers in relative terms: the absolute difference divided by the true value, times 100. Here that is 8% — a respectable result for a high school lab, where anything under 5% is excellent and over 10% suggests rechecking your technique.

The formula deliberately uses the actual (theoretical) value in the denominator, not your measurement. That keeps the error anchored to reality: missing by 0.08 on a true value of 1.00 is 8%, but the same 0.08 miss on a true value of 50.00 would be a trivial 0.16%. Absolute error alone cannot tell you which miss matters.

This calculator needs just two numbers. Type your measurement in the Observed (Experimental) Value box and the accepted value in the Actual (Theoretical) Value box, and it returns the percent error — the standard way science grades its own aim.`,
    howToSteps: [
      "Type what you measured in the Observed (Experimental) Value box — e.g., 1.08.",
      "Type the accepted or true value in the Actual (Theoretical) Value box — e.g., 1.00.",
      "Read the percent error: |observed − actual| ÷ actual × 100.",
      "Under 5% is generally excellent for school labs; check your teacher's rubric.",
      "A direction-free result is normal — the absolute value means over vs. under does not matter.",
      "If the error is huge, recheck units first: mixing grams and kilograms is the classic lab mistake.",
    ],
    faqs: [
      { q: "What is percent error?", a: "How far your measurement missed the true value, expressed as a percentage of the true value: |experimental − actual| ÷ actual × 100." },
      { q: "Is 8% percent error good?", a: "For a school lab, yes — decent. Under 5% is excellent, over 10% usually means technique or equipment issues worth investigating." },
      { q: "When do scientists use percent error?", a: "Whenever a measurement can be checked against a known value: lab experiments, manufacturing quality checks, forecasting accuracy." },
      { q: "Percent error vs. percent difference — same?", a: "No. Percent error divides by the true value; percent difference divides by the average of the two values and is used when neither value is 'correct.'" },
    ],
  },

  "percentile-calculator": {
    description: `Scoring in the 90th percentile sounds impressive until someone asks what it actually means — and the answer is simpler than the jargon. A percentile tells you what share of the group you beat: 90th percentile means you outscored 90% of test-takers. It says nothing about how many questions you got right, only where you stand in the crowd. A 90th-percentile SAT score in a strong year could be 1350; in a weaker year, 1290 — same standing, different raw score.

Under the bell curve, percentiles come from z-scores: subtract the mean, divide by the standard deviation, and look up the position. A z-score of 1.28 lands at the 90th percentile, which is why "top 10%" has a precise statistical address.

This calculator does the conversion directly. Enter Your Score (x), the group's Mean (μ), and the Standard Deviation (σ), and it returns your percentile rank — the number college brochures quote and employers quietly respect.`,
    howToSteps: [
      "Type your test score in the Your Score (x) box.",
      "Type the group's average in the Mean (μ) box — e.g., 1050 for the SAT.",
      "Enter the group's spread in the Standard Deviation (σ) box — e.g., 200 for the SAT.",
      "Read your percentile: the percentage of the group you scored above.",
      "A z-score of 0 puts you at the 50th percentile — exactly average.",
      "Compare percentiles across different tests instead of raw scores — a 90th percentile is a 90th percentile anywhere.",
    ],
    faqs: [
      { q: "What does '90th percentile' mean?", a: "You scored better than 90% of the group. It is a ranking, not a grade — it tells you where you stand, not how many answers were right." },
      { q: "Is the 99th percentile twice as good as the 50th?", a: "No — percentiles are not evenly spaced. Moving from the 50th to the 60th takes a small score gain; moving from the 90th to the 99th takes a much bigger one." },
      { q: "When are percentiles more useful than raw scores?", a: "When comparing across different tests or years — SAT vs. ACT, this year's exam vs. last year's — because percentiles adjust for difficulty automatically." },
      { q: "What is a 'persentile'?", a: "'Persentile' is a misspelling of 'percentile'. Enter your score above and this calculator finds what share of the group you beat." },
    ],
  },

  "pin-generator": {
    description: `Your four-digit bank PIN has 10,000 possible combinations, which sounds like plenty — until you learn how fast computers guess. A thief's software trying 1,000 combinations per second cracks the average 4-digit PIN in about 5 seconds. Stretch that PIN to 6 digits and the combinations jump to a million; at the same guessing speed, the average crack time grows to over 8 minutes. Every extra digit multiplies the attacker's work tenfold.

The math is combinations = (character set size)^(PIN length), and expected crack time is half the combinations divided by guesses per second — half, because on average the attacker finds it midway. Expanding the character set helps even more: a 4-character code using digits plus letters (36 options per slot) has over 1.6 million combinations, dwarfing a 4-digit numeric PIN.

This calculator quantifies your code's strength. Set the PIN Length (digits), the Character Set Size (10 for digits, 26 for letters, 36 for both), and the attacker's Brute-Force Attempts / Second, and it reports total combinations and estimated crack time — the numbers behind every "choose a strong PIN" warning.`,
    howToSteps: [
      "Type how many characters your code has in the PIN Length (digits) box — e.g., 4.",
      "Type the pool size in the Character Set Size box: 10 for digits only, 26 for letters, 36 for both.",
      "Type the attacker's guessing speed in the Brute-Force Attempts / Second box — 1000 is a modest estimate.",
      "Read the total combinations: character set raised to the PIN length.",
      "Read the estimated crack time — the average, assuming the attacker gets lucky halfway through.",
      "Add one digit or widen the character set and watch the crack time multiply — length beats complexity.",
    ],
    faqs: [
      { q: "How many possible 4-digit PINs exist?", a: "10,000 — from 0000 to 9999. That is 10^4. A 6-digit PIN has a million, which is why banks moved to longer codes." },
      { q: "How long would my PIN survive a brute-force attack?", a: "Divide half the combinations by guesses per second. A 4-digit PIN at 1,000 guesses/second falls in ~5 seconds on average; a 6-digit one lasts ~8 minutes." },
      { q: "When does PIN math actually matter?", a: "Choosing phone passcodes, safe combinations, and any numeric code — longer beats 'clever' every time, since birthdays and patterns shrink the real search space." },
      { q: "Is a longer PIN better than a complex password?", a: "Length usually wins. An 8-digit PIN (100 million combos) outlasts a 4-character alphanumeric code (1.6 million) against pure brute force — though lockout policies matter more than either." },
    ],
  },

  "probability-calculator": {
    description: `Every weather forecast, dice roll, and lottery ticket is a probability problem wearing casual clothes. The basic rule never changes: probability equals favorable outcomes divided by total outcomes. A standard deck holds 52 cards with 4 aces, so drawing an ace is 4 ÷ 52, about 7.7%. Roll a die hoping for a six: 1 favorable outcome out of 6, about 16.7%.

Probabilities always live between 0 (impossible) and 1 (certain), often shown as percentages. Two rules keep the arithmetic honest: the chance of something NOT happening is 1 minus the chance it happens, and for independent events — like consecutive coin flips — you multiply the individual chances. Three heads in a row is ½ × ½ × ½ = 12.5%, which is why "due for heads" after two tails is a fallacy.

This calculator handles the fundamental case. Enter the count of outcomes you want in Favorable Outcomes and the count of all possible outcomes in Total Outcomes, and it returns the probability as a decimal and a percentage.`,
    howToSteps: [
      "Count the outcomes you are hoping for and type the number in the Favorable Outcomes box.",
      "Count every possible outcome and type it in the Total Outcomes box.",
      "Read the probability: favorable ÷ total, shown as a decimal and a percentage.",
      "For 'at least one' problems, compute 1 minus the probability of none — it is usually easier.",
      "For multi-step events, multiply the step probabilities — but only if the steps are independent.",
      "Sanity-check: the answer must sit between 0% and 100%; anything else means a counting mistake.",
    ],
    faqs: [
      { q: "What is the basic probability formula?", a: "Favorable outcomes divided by total outcomes. Drawing an ace from a full deck: 4 ÷ 52 ≈ 7.7%." },
      { q: "What does a 7.7% chance feel like?", a: "About 1 in 13. It will happen regularly over many tries but you should not count on any single attempt — that is the gap between odds and guarantees." },
      { q: "When is simple probability enough?", a: "For single random draws with equally likely outcomes: cards, dice, raffles, lottery balls. Multi-stage or conditional problems need fancier tools." },
      { q: "What is the probability of NOT drawing an ace?", a: "1 minus the probability of drawing one: 1 − 4/52 ≈ 92.3%. The complement rule — P(not A) = 1 − P(A) — answers every 'not' question." },
    ],
  },

  "quartile-calculator": {
    description: `Cut a sorted list into four equal pieces and you get a map of its spread — that is all quartiles are. The second quartile (Q2) is the median, splitting the data in half. The first quartile (Q1) marks the 25% line and the third (Q3) the 75% line, so the middle half of your data sits between them. A hiring manager reviewing five final-round salary offers of $68K, $72K, $75K, $80K, and $95K sees Q1 at $70K, the median at $75K, and Q3 at $87.5K — an instant picture of the offer landscape.

Quartiles feed directly into the box plot, the five-number summary's visual form: minimum, Q1, median, Q3, maximum. The box itself spans Q1 to Q3, so its width shows where the typical half of the data lives, and the whiskers stretch to the extremes. A wide box means a spread-out middle; a median line off-center means skew.

This calculator works from five sorted values. Enter them smallest to largest in Value 1 (smallest) through Value 5 (largest) — the labels keep the order honest — and it returns Q1, the median, and Q3.`,
    howToSteps: [
      "Sort your five values from smallest to largest.",
      "Type the smallest in the Value 1 (smallest) box.",
      "Fill in Value 2, Value 3 (median), and Value 4 in ascending order.",
      "Type the largest in the Value 5 (largest) box.",
      "Read Q1 (25th percentile), the median (50th), and Q3 (75th) from the results.",
      "Subtract Q3 − Q1 for the IQR, and check 1.5 × IQR fences for outliers.",
    ],
    faqs: [
      { q: "What are quartiles?", a: "The three cut points dividing sorted data into four equal quarters: Q1 (25% below), Q2 the median (50%), Q3 (75% below)." },
      { q: "What does it mean if Q3 is far from the median?", a: "The top quarter stretches wide — some high values pull away from the pack, like a few big salaries in a pay band." },
      { q: "When should I use quartiles?", a: "To summarize spread without distortion from extremes: salary bands, housing prices, test score distributions — anywhere the median beats the mean." },
      { q: "Quartile vs. percentile — what's the link?", a: "Quartiles are just named percentiles: Q1 is the 25th percentile, the median is the 50th, Q3 the 75th." },
    ],
  },

  "random-card-generator": {
    description: `Poker night arguments usually start with someone misjudging the odds — "there's no way you hit that flush." The math of card draws is the hypergeometric distribution in disguise: you are drawing without putting cards back, so every draw changes the odds for the next one. Your chance of being dealt two aces from a 52-card deck is (4/52) × (3/51), about 0.45% — roughly 1 in 221 hands, which is why pocket aces feel so special.

The "without replacement" part is what trips people up. Drawing a heart first leaves 12 hearts among 51 cards, so the second-draw probability drops from 13/52 to 12/51. Combinations count the possible hands: the number of distinct 5-card hands from 52 cards is 2,598,960, which is why every poker hand you have ever held was essentially unique.

This calculator explores draw scenarios. Set the Cards in Deck and the Cards Drawn, and it reports the draw probabilities and combination counts — the numbers that settle poker-night debates before they start.`,
    howToSteps: [
      "Type the total deck size in the Cards in Deck box — 52 for a standard deck.",
      "Type how many cards you are drawing in the Cards Drawn box — 5 for a poker hand, 2 for hole cards.",
      "Read the draw probabilities for the scenario.",
      "Check the combination count: how many distinct hands the draw can produce.",
      "For 'at least one' questions, compute 1 minus the probability of drawing none.",
      "Remember draws are without replacement — each card taken changes the odds for the next.",
    ],
    faqs: [
      { q: "What are the odds of being dealt pocket aces?", a: "About 0.45%, or 1 in 221 hands: (4/52) × (3/51). Rare enough to celebrate, common enough to see regularly." },
      { q: "Why do odds change as cards are dealt?", a: "No replacement. Every card removed shrinks the deck and shifts the remaining mix — unlike dice, cards have memory." },
      { q: "When does card-draw math apply?", a: "Poker, blackjack, bridge — any game dealing from a finite deck. It also models quality-control sampling: defective items drawn from a production batch." },
      { q: "How many possible 5-card poker hands exist?", a: "2,598,960. That number is why 'I have never seen this hand before' is almost always true." },
    ],
  },
  "random-name-picker": {
    description: `A classroom raffle should feel fair — and fairness can be calculated before a single name is drawn. With 30 students and 3 prizes drawn without replacement, each student's chance of winning something is 3 ÷ 30 = 10%, but the chance of winning a specific first prize is 1 ÷ 30 ≈ 3.3%. The order of drawing matters for individual prizes even though every name starts equal.

Running multiple rounds complicates the picture in a predictable way. If names go back in the hat between rounds (with replacement), one lucky student could win twice; if they stay out, each round's winners are distinct and later rounds draw from a smaller pool. Office holiday raffles usually keep winners out — nobody wants the same person taking home both the TV and the gift card.

This calculator models the drawing. Enter the Total Names in List, how many Names to Pick, and the Number of Rounds, and it returns each entrant's probability of being picked — the fairness audit for your raffle, Secret Santa, or team draft.`,
    howToSteps: [
      "Count every eligible name and type it in the Total Names in List box.",
      "Type how many winners each round produces in the Names to Pick box.",
      "Type how many drawing rounds you will run in the Number of Rounds box.",
      "Read each entrant's probability of being picked from the results.",
      "Decide the replacement rule: winners stay out for distinct prizes, go back in for independent rounds.",
      "Publish the setup before drawing — transparency is what makes a random draw feel fair.",
    ],
    faqs: [
      { q: "What is each person's chance of winning a raffle?", a: "Prizes divided by entrants, when each entrant holds one ticket: 3 prizes among 30 people = 10% each." },
      { q: "Does drawing order change anyone's odds?", a: "For a single prize pool drawn fairly, no — first drawn and last drawn have identical chances. Order only matters psychologically." },
      { q: "When should names be replaced between rounds?", a: "Replace them (draw with replacement) when rounds are independent events. Keep winners out when each prize must go to a different person." },
      { q: "Is a random name picker truly random?", a: "A good one uses proper randomization, giving every name an equal shot. The math above lets you verify the picker is not favoring anyone." },
    ],
  },

  "regression-analysis-calculator": {
    description: `A marketing team spends $50,000 on ads and revenue jumps $200,000 — but how much of that jump did the ads actually cause, and what would $60,000 buy? Regression analysis turns paired observations into that kind of answer. It finds the line (or curve) that best fits the cloud of data points, then reports how much of the outcome's movement the inputs explain. The headline number is R²: the share of variation accounted for by the model, from 0 (explains nothing) to 1 (explains everything).

Real analysis goes beyond the line itself. Analysts check residuals — the gaps between actual points and the line — for patterns that signal a bad fit, test whether each input's effect is statistically significant, and watch for multicollinearity, where two inputs move together so tightly the model cannot tell their effects apart. A model claiming each ad dollar returns exactly $4.00 deserves all three checks before anyone budgets on it.

This calculator performs the core paired computation behind the analysis. Enter the two variables under study in the Variable A and Variable B boxes — say, ad spend and revenue — and the Result box returns their combined product, the building block summed across observations to estimate the relationship's slope.`,
    howToSteps: [
      "Gather paired observations of your two variables — e.g., monthly ad spend and monthly revenue.",
      "Type the first variable's value in the Variable A box.",
      "Type the paired second variable's value in the Variable B box.",
      "Read the Result box: the product feeding the slope calculation.",
      "Repeat across all observations and sum the products to estimate the regression slope.",
      "Check R² and residuals before trusting the line — a high R² with patterned residuals is still a bad model.",
    ],
    faqs: [
      { q: "What is regression analysis?", a: "A method for modeling how an outcome changes with one or more inputs — finding the best-fit line through data and measuring how much of the outcome it explains." },
      { q: "What does R² = 0.8 mean?", a: "Your model explains 80% of the outcome's variation. Strong, but the remaining 20% is noise or missing factors — and R² never proves causation." },
      { q: "When should I run a regression?", a: "When you have paired numeric data and a 'how much does X move Y' question: pricing, forecasting, marketing mix, salary modeling." },
      { q: "Regression analysis vs. correlation — different?", a: "Related but distinct. Correlation measures how tightly two variables move together (−1 to +1); regression builds an actual prediction equation from the relationship." },
    ],
  },

  "regression-calculator": {
    description: `A scatterplot shows a cloud of points; regression draws the straight line through its middle — and that line is a prediction machine. The least-squares regression line, y = mx + b, is the unique line minimizing the total squared distance to every point. Its slope m says how much y changes per unit of x; its intercept b says where the line crosses the y-axis. For Texas homes, a regression of price on square footage might give price = 120 × sqft + 40,000: each extra square foot adds about $120, and the $40,000 intercept roughly captures the land value.

The line is only as honest as its fit. Extrapolating far beyond the data — predicting a 10,000-square-foot mansion's price from a model built on 1,500-square-foot homes — is where regression goes to embarrass people. And a line through curved data lies systematically, which is why checking the scatterplot first is non-negotiable.

This calculator evaluates the fundamental paired computation. Enter your x and y values in the Variable A and Variable B boxes, and the Result box returns their product — the term summed across all points to compute the slope m = Σ((x−x̄)(y−ȳ)) / Σ((x−x̄)²).`,
    howToSteps: [
      "Collect paired (x, y) observations — e.g., square footage and sale price.",
      "Type an x-value in the Variable A box.",
      "Type its paired y-value in the Variable B box.",
      "Read the Result box: the product used in the slope formula.",
      "Sum these products across all points, then divide by the sum of squared x-deviations for the slope.",
      "Plot the line over your scatterplot — if the cloud curves, a straight line is the wrong tool.",
    ],
    faqs: [
      { q: "What is the regression line equation?", a: "y = mx + b, where m is the slope (change in y per unit of x) and b is the intercept (y's value when x is zero). Least squares picks the m and b minimizing total squared error." },
      { q: "What does the slope tell me?", a: "The expected change in y for a one-unit change in x. A slope of 120 on home price vs. square footage means ~$120 more per extra square foot." },
      { q: "When is linear regression appropriate?", a: "When the scatterplot looks roughly straight, you need numeric predictions, and you are staying within the data's range. Curves and far extrapolation break it." },
      { q: "What is the 'line of best fit'?", a: "The regression line — 'line of best fit' is the informal name for the least-squares line this calculator helps you build." },
    ],
  },

  "sample-size-calculator": {
    description: `Polling 1,000 likely voters costs a small fortune; polling 100 gives mush — the sample size calculator finds the sweet spot in between. The formula, n = (z* × σ ÷ E)², balances three demands: how confident you want to be (z*, 1.96 for 95%), how spread out the population is (σ, your standard deviation estimate), and how precise the answer must be (E, the margin of error). Halve your acceptable error and the required sample quadruples — precision is expensive.

Campaign pollsters live by this equation. Wanting ±3 points at 95% confidence with maximum-variability responses (σ ≈ 0.5 for proportions) demands about 1,067 respondents — which is why serious national polls hover near 1,000 interviews. A local business survey tolerating ±5 points needs only about 384.

This calculator takes your three inputs — the Z* critical value, your Population SD Estimate (σ), and the Margin of Error (E) — and returns the minimum sample size. Round up, since you cannot survey a fraction of a person, and then add a cushion for non-responses.`,
    howToSteps: [
      "Type your confidence level's critical value in the Z* box — 1.96 for 95%, 2.576 for 99%.",
      "Type your best guess of the population spread in the Population SD Estimate (σ) box — use 0.5 for proportions when unsure.",
      "Type the largest error you can tolerate in the Margin of Error (E) box — e.g., 0.03 for ±3 points.",
      "Read the required sample size from the results.",
      "Round up to a whole person, then inflate by your expected non-response rate.",
      "If the number is unaffordable, loosen the Margin of Error (E) — doubling E quarters the sample.",
    ],
    faqs: [
      { q: "How is sample size calculated?", a: "n = (z* × σ ÷ E)². Pick a confidence level (z*), estimate the population spread (σ), choose your tolerable error (E), and the formula gives the headcount." },
      { q: "Why does halving the margin of error quadruple the sample?", a: "The error sits in the denominator and the whole thing is squared. Precision has quadratic cost — the last few points of accuracy are the priciest." },
      { q: "When must I calculate sample size in advance?", a: "Before any survey, poll, or experiment where data collection costs money or time. Guessing the sample size risks an underpowered study that answers nothing." },
      { q: "What is the 'magic' poll number 1,000 about?", a: "It is the sample giving roughly ±3 points at 95% confidence for proportions — the industry's cost-precision compromise, straight from this formula." },
    ],
  },

  "standard-deviation-calculator": {
    description: `Two mutual funds can both average 8% annual returns and feel completely different — one glides, the other lurches. Standard deviation measures that lurch: the typical distance of values from their average. A fund returning 7%, 8%, 9% has a small standard deviation; one returning −10%, 8%, 26% has a huge one, even though both average 8%. Investors call it volatility; teachers call it consistency; quality engineers call it process control. It is the same number everywhere.

The recipe: subtract the mean from each value, square those gaps (so negatives do not cancel), average the squares to get variance, then take the square root to return to the original units. That last step matters — variance speaks in squared dollars or squared points, which nobody can picture, while standard deviation speaks plain dollars.

This calculator takes up to five values plus their Count (n). Type each number into Value 1 through Value 5, confirm the Count (n), and it returns the standard deviation — the single number that turns "how spread out" into something comparable.`,
    howToSteps: [
      "Type your data points into the Value 1 through Value 5 boxes.",
      "Confirm how many values you entered in the Count (n) box.",
      "Read the mean to see the center your spread is measured from.",
      "Read the standard deviation: the typical distance from that center.",
      "Compare two datasets' standard deviations directly — bigger means more spread, regardless of the averages.",
      "Roughly 68% of bell-shaped data falls within one standard deviation of the mean — use it as a quick check.",
    ],
    faqs: [
      { q: "What is standard deviation in simple words?", a: "The average distance of data points from the mean. Small = values cluster near average; large = values scatter widely." },
      { q: "My two datasets have the same mean but different standard deviations — so what?", a: "The high-SD one is riskier or less consistent: investment returns swing harder, test scores vary more, manufacturing tolerances are looser." },
      { q: "When should I look at standard deviation?", a: "Whenever consistency matters as much as the average: investments, product quality, exam reliability, sports performance." },
      { q: "What is 'standard diviation'?", a: "'Diviation' is a misspelling of 'deviation'. This is the right tool — enter your values and it computes the spread." },
    ],
  },

  "statistics-formulas": {
    description: `Every statistics formula is built from the same few raw ingredients — and this tool cooks them into finished results. Give it the sample size (n), the sum of values (Σx), the sum of squared values (Σx²), and a single observed value, and it derives the mean, the variance, and the z-score without needing the original dataset. A student who summarized 40 quiz scores as Σx = 3,200 and Σx² = 262,000 can recover the mean (80), the variance, and how unusual any single score was, all from two totals.

These summary statistics are the compressed form of data. Pollsters publish them, textbooks tabulate them, and calculators accept them because the full list of values is often long gone. The mean is Σx ÷ n; the variance uses Σx² to avoid re-summing squared deviations; the z-score places any observed value on the standard scale.

Enter your Sample Size (n), Sum of Values (Σx), Sum of Squares (Σx²), and the Observed Value (for z), and the tool returns the computed formulas' results — mean, variance, standard deviation, and z-score — ready to drop into homework or reports.`,
    howToSteps: [
      "Count your observations and type the total in the Sample Size (n) box.",
      "Add up all values and type the total in the Sum of Values (Σx) box.",
      "Square each value, add those squares, and type the total in the Sum of Squares (Σx²) box.",
      "Type the individual value you want standardized in the Observed Value (for z) box.",
      "Read the mean (Σx ÷ n) and variance from the computed outputs.",
      "Read the z-score to see how many standard deviations your observed value sits from the mean.",
    ],
    faqs: [
      { q: "What are Σx and Σx²?", a: "Σx is the sum of all values; Σx² is the sum of each value squared. Together with n they can rebuild the mean, variance, and standard deviation without the raw data." },
      { q: "Why square the values for Σx²?", a: "Because variance needs squared deviations from the mean, and Σx² lets you compute them from totals alone: variance = (Σx² − (Σx)²/n) ÷ (n−1)." },
      { q: "When do I only have summary statistics?", a: "Working from published tables, textbook problems, or survey reports that give totals instead of raw data — common in homework and research appendices." },
      { q: "Mean from Σx and n — how?", a: "Divide: mean = Σx ÷ n. It is the definition of the average, just written in summary-statistic form." },
    ],
  },
  "stem-leaf-plot": {
    description: `Before computers, statisticians sketched data distributions by hand — and the stem-and-leaf plot was their pencil of choice. It splits each number into a "stem" (the leading digits) and a "leaf" (the final digit), then stacks the leaves in rows. Sprint times of 11.2, 11.5, 11.7, 12.1, and 12.4 seconds become two rows — stem 11 with leaves 2, 5, 7, and stem 12 with leaves 1, 4 — a histogram you can read the original values back out of. No information is lost, which is its charm and its limit.

Coaches, teachers, and quality inspectors still reach for it with small datasets because it shows shape and values simultaneously. A track coach sees at a glance that most sprinters cluster at 11 seconds with a couple trailing at 12 — the distribution's story and every data point in one sketch.

This calculator builds the plot from up to five values. Type each into Value 1 through Value 5 under Dataset, and it returns the stems with their leaves plus summary statistics — the quick hand-drawn view, computed instantly.`,
    howToSteps: [
      "Type your first measurement in the Value 1 box under Dataset.",
      "Continue with Value 2 through Value 5.",
      "Read the Stems & Leaves output: each stem row with its leaves in order.",
      "Check the shape — leaves piling on one stem means clustering; a lone leaf far away is an outlier.",
      "Read the summary statistics for the mean and spread alongside the plot.",
      "For two-digit numbers, the stem is the tens digit and each leaf is the ones digit.",
    ],
    faqs: [
      { q: "What is a stem-and-leaf plot?", a: "A chart splitting each number into leading digits (stem) and the last digit (leaf), stacking leaves in rows. It works like a histogram that keeps every original value visible." },
      { q: "How do I read the shape?", a: "Like a sideways histogram: long rows are where data clusters, short rows are sparse zones, and a lone leaf far from the rest flags an outlier." },
      { q: "When is a stem-and-leaf plot better than a histogram?", a: "For small datasets (under ~50 values) where you want the distribution's shape without losing the actual numbers. Big datasets need real histograms." },
      { q: "What is the 'key' on a stem-and-leaf plot?", a: "The legend explaining the split, e.g., '11 | 2 means 11.2'. Always include one — without it, readers cannot reconstruct the values." },
    ],
  },

  "sum-calculator": {
    description: `Adding a column of numbers sounds trivial until the column is long and the stakes are real. A freelancer totaling eight monthly expense categories, a teacher adding six quiz scores, a road-tripper summing fuel stops across eight states — each faces the same risk: one mental-math slip and the total is wrong. The sum, written Σx, is also the foundation every other statistic stands on: means divide it, variances square deviations from it.

Estimation is the human backup. Before trusting any total, round each value and add roughly — $47 + $83 + $129 becomes $50 + $80 + $130 = $260, so a calculator answer of $2,590 is obviously a typo'd entry, not a surprise. The habit catches the fat-fingered extra zero that ruins budgets.

This calculator adds up to eight values cleanly. Type each number into Value 1 through Value 8 under Values, and the running total appears in the Results — no spreadsheet, no phone calculator, no arithmetic drift.`,
    howToSteps: [
      "Type your first number in the Value 1 box.",
      "Continue filling Value 2 through Value 8 with the rest of your list.",
      "Leave unused boxes at zero so they do not affect the total.",
      "Read the sum from the Results panel.",
      "Rough-estimate by rounding each value first — if the calculator's total is far off, recheck your entries.",
      "Use the total as Σx for further statistics like the mean (divide by your count).",
    ],
    faqs: [
      { q: "What is the Σ symbol in statistics?", a: "Sigma — it means 'add everything up.' Σx is the sum of all x values, the starting point for means, variances, and most other statistics." },
      { q: "My total looks way too big — what went wrong?", a: "Almost always a data-entry slip: an extra zero, a value typed twice, or a decimal point in the wrong place. Estimate by rounding to find the culprit." },
      { q: "When do I need a dedicated sum calculator?", a: "For quick totals of short lists — expenses, scores, measurements — where opening a spreadsheet is overkill but mental math is risky." },
      { q: "Can I sum negative numbers too?", a: "Yes — type them with a minus sign. The total correctly nets positives against negatives, like income minus expenses." },
    ],
  },

  "two-sample-t-test-calculator": {
    description: `A farmer tries a new fertilizer on one field and keeps the old one on another; harvest comes in 8% higher on the new field — did the fertilizer work, or did the weather just cooperate? The two-sample t-test settles it. It compares the averages of two independent groups and asks whether their gap is bigger than random variation can explain. Drug trials (new pill vs. placebo), website tests (red button vs. blue button), and manufacturing comparisons (Supplier A vs. Supplier B) all run on this test.

The mechanics extend the one-sample idea: compute each group's mean and spread, combine the spreads into a standard error for the difference, and form a t-statistic from the gap between means. A large t (small p-value) says the groups genuinely differ; a small t says the gap could be noise. The test assumes roughly normal data and independent samples — paired measurements (before/after on the same subjects) need the paired version instead.

This calculator handles the core paired computation. Enter the two groups' summary values in the Variable A and Variable B boxes, and the Result box combines them — the first step toward the t-statistic comparing the groups.`,
    howToSteps: [
      "Compute each group's average separately from your raw data.",
      "Type the first group's summary value in the Variable A box.",
      "Type the second group's summary value in the Variable B box.",
      "Read the Result box for the combined comparison value.",
      "Divide the mean difference by the pooled standard error to get the t-statistic.",
      "Check the p-value: below 0.05 means the groups differ significantly — the fertilizer (probably) worked.",
    ],
    faqs: [
      { q: "What is a two-sample t-test?", a: "A test comparing the averages of two independent groups — treatment vs. control, old vs. new — to decide whether their difference is real or random noise." },
      { q: "What does a non-significant result mean?", a: "Not 'the groups are equal' — just 'this data cannot prove they differ.' Small samples often miss real differences; absence of evidence is not evidence of absence." },
      { q: "Two-sample vs. paired t-test — which?", a: "Two-sample for independent groups (different people, different fields). Paired for before/after measurements on the same subjects, where each pair is linked." },
      { q: "What are 'independent samples'?", a: "Groups with no meaningful pairing between members — different customers, different plots of land. If each member of one group matches one in the other, use the paired test." },
    ],
  },

  "variance-calculator": {
    description: `Variance is the number that standard deviation is afraid to show in public — the same spread information, but in squared units nobody can picture. Square the distances of each value from the mean, average those squares, and you get variance: squared dollars, squared points, squared inches. A dataset of 2, 4, 6 has a variance of 4 (square units), which becomes a friendly standard deviation of 2 once you take the square root.

So why does variance exist at all? Because it has beautiful math. Variances of independent quantities add together — the variance of a sum is the sum of the variances — which makes it the workhorse of probability theory, finance, and quality engineering. A bolt manufacturer in Michigan tracking diameter variance of 0.0004 mm² knows instantly whether the process is drifting, long before any single bolt looks wrong.

This calculator computes it from up to five values. Enter your numbers in the Value boxes under Data Values, and it returns the variance — the squared spread that statisticians actually compute with, even when they report its square root.`,
    howToSteps: [
      "Enter your data points in the Value 1 through Value 5 boxes under Data Values.",
      "Read the mean first — variance measures spread around it.",
      "Read the variance result: the average of the squared deviations from the mean.",
      "Take the square root of the variance to get the standard deviation in original units.",
      "Compare variances across datasets only when the units match — squared units do not mix.",
      "Remember variance uses n−1 (sample) vs. n (population) — check which your context needs.",
    ],
    faqs: [
      { q: "What is variance?", a: "The average of squared distances from the mean. It measures spread in squared units — take its square root to get the standard deviation in normal units." },
      { q: "Why are the units squared — what does 4 'square points' mean?", a: "Nothing intuitive — that is the point. Squared units are a mathematical convenience; always take the square root (standard deviation) when explaining results to humans." },
      { q: "When do I report variance instead of standard deviation?", a: "In technical work where variances add up — combining independent risks, portfolio math, ANOVA. For general audiences, report the standard deviation." },
      { q: "Sample vs. population variance — which is this?", a: "Sample variance divides by n−1 (correcting for estimation bias); population variance divides by n. Use n−1 unless you measured literally everyone." },
    ],
  },

  "vote-percentage": {
    description: `Election night coverage is one long exercise in dividing votes by totals — and getting the denominator right is where amateurs stumble. A candidate's vote percentage is their votes divided by all valid votes cast, times 100. In a school board race with 4,200 total votes, a candidate with 1,890 has exactly 45%. Simple — until you decide whether blank ballots, spoiled ballots, and write-ins belong in the total, because each choice moves every percentage.

Thresholds give percentages their drama. Many US local measures need a simple majority (50% + 1 vote); some bond issues require a supermajority of 55% or two-thirds. A proposition at 54.7% fails under a 55% rule while passing under a majority rule — same votes, opposite outcomes, which is why the percentage matters more than the raw count.

This calculator handles up to four candidates or options. Enter each contender's votes in the Candidate 1 Votes through Candidate 4 Votes boxes, and it returns every share of the total — the numbers behind the winner's speech and the loser's concession.`,
    howToSteps: [
      "Type the first candidate's vote total in the Candidate 1 Votes box.",
      "Fill in Candidate 2 Votes, Candidate 3 Votes, and Candidate 4 Votes.",
      "Leave unused candidate boxes at zero.",
      "Read each candidate's percentage: their votes ÷ total votes × 100.",
      "Check the percentages sum to 100% — a shortfall means votes are missing from the total.",
      "Compare the leader's share against the required threshold (majority, 55%, two-thirds) for the actual verdict.",
    ],
    faqs: [
      { q: "How is vote percentage calculated?", a: "Candidate's votes ÷ total valid votes × 100. With 1,890 of 4,200 votes, that is exactly 45%." },
      { q: "Do blank or spoiled ballots count in the total?", a: "It depends on the race's rules. Most US elections count only valid votes for candidates; some measures include blanks in the denominator, which raises the bar." },
      { q: "When does vote percentage matter more than vote count?", a: "Whenever thresholds apply — majority rules, supermajorities for bonds, primary runoff cutoffs — and when comparing races with different turnouts." },
      { q: "What is a 'supermajority'?", a: "A threshold above half: commonly 55%, 60%, or two-thirds (66.7%). Many tax and bond measures require one, so 54% can be a loss." },
    ],
  },

  "z-score-calculator": {
    description: `A 1300 SAT and a 31 ACT both sound good — but which is more impressive? Raw scores from different tests cannot be compared until they are translated onto one scale, and the z-score is that translator. It measures how many standard deviations a value sits from its group's mean: z = (x − μ) ÷ σ. A 1300 SAT (mean 1050, SD 200) is z = 1.25; a 31 ACT (mean 21, SD 5) is z = 2.0 — the ACT score is the stronger performance, despite the smaller-looking number.

Z-scores also power the bell-curve lookup: a z of 1.0 is roughly the 84th percentile, 1.65 the 95th, 2.0 the 97.7th. Quality engineers use them to flag defects (anything beyond ±3 is suspect), teachers to curve grades fairly across sections, and doctors to interpret growth charts.

This calculator does the standardization directly. Enter your Data Point (x), the Population Mean (μ), and the Standard Deviation (σ), and it returns the z-score — the universal coordinate for "how unusual is this value."`,
    howToSteps: [
      "Type the value you are evaluating in the Data Point (x) box — e.g., 1300.",
      "Type the group's average in the Population Mean (μ) box — e.g., 1050.",
      "Enter how spread out the group is in the Standard Deviation (σ) box — e.g., 200.",
      "Read the z-score: (x − μ) ÷ σ, in standard-deviation units.",
      "Positive z means above average, negative means below; beyond ±2 is notably unusual.",
      "Convert to a percentile with the normal table: z = 1.25 ≈ 89th percentile.",
    ],
    faqs: [
      { q: "What is a z-score?", a: "How many standard deviations a value is from the mean: (x − μ) ÷ σ. It puts any measurement on a universal scale." },
      { q: "What does z = −1.5 mean?", a: "The value sits 1.5 standard deviations below average — roughly the 7th percentile. Below average, but not shockingly rare." },
      { q: "When should I standardize with z-scores?", a: "Comparing scores across different tests or groups, spotting outliers, or feeding data into models that assume standardized inputs." },
      { q: "What is a 'zscore'?", a: "'Zscore' is 'z-score' without the hyphen — same thing. Enter your data point above and this calculator standardizes it." },
    ],
  },
};
