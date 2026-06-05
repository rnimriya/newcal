import type { CalculatorSchema } from "@/types/calculator";

// ─── Root schemas ─────────────────────────────────────────────────────────────
import bmiSchema             from "./bmi.json";
import compoundInterest      from "./compound-interest.json";
import pythagorean           from "./pythagorean.json";

// ─── Math schemas ─────────────────────────────────────────────────────────────
import quadraticFormula      from "./math/quadratic-formula.json";
import squareRoot            from "./math/square-root.json";
import percentage            from "./math/percentage.json";
import percentageChange      from "./math/percentage-change.json";
import areaCircle            from "./math/area-circle.json";
import slope                 from "./math/slope.json";
import triangleArea          from "./math/triangle-area.json";
import lcm                   from "./math/lcm.json";
import areaRectangle         from "./math/area-rectangle.json";
import volumeSphere          from "./math/volume-sphere.json";
import linearEquation        from "./math/linear-equation.json";
import gcf                   from "./math/gcf.json";
import factorial             from "./math/factorial.json";
import perimeter             from "./math/perimeter.json";
import fractionToDecimal     from "./math/fraction-to-decimal.json";
import percentError          from "./math/percent-error.json";
import volumeCylinder        from "./math/volume-cylinder.json";
import cubeRoot              from "./math/cube-root.json";
import squarePow             from "./math/square.json";
import absoluteValue         from "./math/absolute-value.json";
import meanCalc              from "./math/mean.json";
import rounding              from "./math/rounding.json";
import modulo                from "./math/modulo.json";
import exponents             from "./math/exponents.json";
import ratio                 from "./math/ratio.json";
import proportion            from "./math/proportion.json";
import longDivision          from "./math/long-division.json";
import fractionToPercent     from "./math/fraction-to-percent.json";
import percentToDecimal      from "./math/percent-to-decimal.json";
import decimalToPercent      from "./math/decimal-to-percent.json";
import decimalToFraction     from "./math/decimal-to-fraction.json";
import primeNumber           from "./math/prime-number.json";
import scientificNotation    from "./math/scientific-notation.json";
import addingMachine         from "./math/adding-machine.json";
import unitRate              from "./math/unit-rate.json";
import romanNumeral          from "./math/roman-numeral.json";
import multiples             from "./math/multiples.json";
import diamondProblem        from "./math/diamond-problem.json";
import longMultiplication    from "./math/long-multiplication.json";
import longAddition          from "./math/long-addition.json";
import longSubtraction       from "./math/long-subtraction.json";
import completingSquare      from "./math/completing-square.json";
import expandedForm          from "./math/expanded-form.json";
import addingFractions       from "./math/adding-fractions.json";
import complexFractions      from "./math/complex-fractions.json";
import exponentialNotation   from "./math/exponential-notation.json";
import significantFigures    from "./math/significant-figures.json";
import placeValue            from "./math/place-value.json";
import equivalentFractions   from "./math/equivalent-fractions.json";
import mixedNumbers          from "./math/mixed-numbers.json";
import commonFactors         from "./math/common-factors.json";
import surfaceAreaSphere      from "./math/surface-area-sphere.json";
import surfaceAreaCylinder    from "./math/surface-area-cylinder.json";
import volumeCone             from "./math/volume-cone.json";
import trapezoidArea          from "./math/trapezoid-area.json";
import ellipseArea            from "./math/ellipse-area.json";
import combinationsCalc       from "./math/combinations-calculator.json";
import permutationsCalc       from "./math/permutations-calculator.json";
import arithmeticSequence     from "./math/arithmetic-sequence.json";
import geometricSequence       from "./math/geometric-sequence.json";
import fibonacciCalc          from "./math/fibonacci-calculator.json";
import crossProductCalc       from "./math/cross-product-calculator.json";
import surfaceAreaCube        from "./math/surface-area-cube.json";
import volumePyramid          from "./math/volume-pyramid.json";
import regularPolygonArea     from "./math/regular-polygon-area.json";

// ─── Algebra schemas ──────────────────────────────────────────────────────────
import polynomial            from "./algebra/polynomial.json";
import factoring             from "./algebra/factoring.json";
import cubicEquation         from "./algebra/cubic-equation.json";
import systemOfEquations     from "./algebra/system-of-equations.json";
import fractionalExponents   from "./algebra/fractional-exponents.json";
import radicals              from "./algebra/radicals.json";
import absoluteDifference    from "./algebra/absolute-difference.json";
import largeExponents        from "./algebra/large-exponents.json";
import simplifyRadical       from "./algebra/simplify-radical.json";
import solveForExponents     from "./algebra/solve-for-exponents.json";
import percentageIncrease    from "./algebra/percentage-increase.json";
import percentageDecrease    from "./algebra/percentage-decrease.json";
import percentageDifference  from "./algebra/percentage-difference.json";
import foilMethod            from "./algebra/foil-method.json";
import differenceOfSquares   from "./algebra/difference-of-squares.json";
import dotProduct            from "./algebra/dot-product.json";
import logarithm             from "./algebra/logarithm.json";
import fourthRoot            from "./algebra/fourth-root.json";
import fifthRoot             from "./algebra/fifth-root.json";

// ─── Converter schemas ────────────────────────────────────────────────────────
// Temperature (additional scales)
import celsiusToRankine      from "./converters/celsius-to-rankine.json";
import rankineToC            from "./converters/rankine-to-celsius.json";
import rankineToF            from "./converters/rankine-to-fahrenheit.json";
import rankineToK            from "./converters/rankine-to-kelvin.json";
import celsiusToDelisle      from "./converters/celsius-to-delisle.json";
import celsiusToNewton       from "./converters/celsius-to-newton.json";
import celsiusToReaumur      from "./converters/celsius-to-reaumur.json";
import celsiusToRomer        from "./converters/celsius-to-romer.json";
import celsiusFahrenheit     from "./converters/celsius-fahrenheit.json";
import fahrenheitCelsius     from "./converters/fahrenheit-celsius.json";
import kmMiles               from "./converters/km-miles.json";
import milesKm               from "./converters/miles-km.json";
import kgPounds              from "./converters/kg-pounds.json";
import poundsKg              from "./converters/pounds-kg.json";
// Temperature
import celsiusToKelvin       from "./converters/celsius-to-kelvin.json";
import kelvinToCelsius       from "./converters/kelvin-to-celsius.json";
import fahrenheitToKelvin    from "./converters/fahrenheit-to-kelvin.json";
import kelvinToFahrenheit    from "./converters/kelvin-to-fahrenheit.json";
// Length
import meterToCentimeter     from "./converters/meter-to-centimeter.json";
import meterToKilometer      from "./converters/meter-to-kilometer.json";
import meterToYard           from "./converters/meter-to-yard.json";
import yardToMeter           from "./converters/yard-to-meter.json";
import kilometerToMile       from "./converters/kilometer-to-mile.json";
import mileToKilometer       from "./converters/mile-to-kilometer.json";
import cmToInch              from "./converters/cm-to-inch.json";
import centimeterToInch      from "./converters/centimeter-to-inch.json";
import inchToCm              from "./converters/inch-to-cm.json";
import meterToFeet           from "./converters/meter-to-feet.json";
import feetToMeter           from "./converters/feet-to-meter.json";
import millimeterToInch      from "./converters/millimeter-to-inch.json";
// Weight
import kgToStone             from "./converters/kg-to-stone.json";
import stoneToKg             from "./converters/stone-to-kg.json";
import gramToOunce           from "./converters/gram-to-ounce.json";
import ounceToGram           from "./converters/ounce-to-gram.json";
import kgToTon               from "./converters/kg-to-ton.json";
import kilogramToGram        from "./converters/kilogram-to-gram.json";
import kilogramToPound       from "./converters/kilogram-to-pound.json";
import tonToKg               from "./converters/ton-to-kg.json";
import caratToGram           from "./converters/carat-to-gram.json";
import tonMetricToPound      from "./converters/ton-metric-to-pound.json";
// Volume
import literToGallon         from "./converters/liter-to-gallon.json";
import gallonToLiter         from "./converters/gallon-to-liter.json";
import cupToMl               from "./converters/cup-to-ml.json";
import mlToCup               from "./converters/ml-to-cup.json";
import mlToOz                from "./converters/ml-to-oz.json";
import ozToMl                from "./converters/oz-to-ml.json";
import pintToLiter           from "./converters/pint-to-liter.json";
import literToPint           from "./converters/liter-to-pint.json";
import cubicMeterToCubicFoot from "./converters/cubic-meter-to-cubic-foot.json";
// Speed
import kmhToMph              from "./converters/kmh-to-mph.json";
import mphToKmh              from "./converters/mph-to-kmh.json";
import kmhToMs               from "./converters/kmh-to-ms.json";
import msToKmh               from "./converters/ms-to-kmh.json";
import kmhToKnot             from "./converters/kmh-to-knot.json";
import knotToKmh             from "./converters/knot-to-kmh.json";
import knotToMph             from "./converters/knot-to-mph.json";
import msToMph               from "./converters/ms-to-mph.json";
import mphToMs               from "./converters/mph-to-ms.json";
// Number systems
import binaryToDecimal        from "./converters/binary-to-decimal.json";
import decimalToBinary        from "./converters/decimal-to-binary.json";
import hexToDecimal           from "./converters/hex-to-decimal.json";
import decimalToHex           from "./converters/decimal-to-hex.json";
import decimalToOctal         from "./converters/decimal-to-octal.json";
import binaryToHex            from "./converters/binary-to-hex.json";
import hexToBinary            from "./converters/hex-to-binary.json";
import octalToDecimal         from "./converters/octal-to-decimal.json";
// Area & pressure & energy
import acreToSqm              from "./converters/acre-to-sqm.json";
import hectareToAcre          from "./converters/hectare-to-acre.json";
import psiToBar               from "./converters/psi-to-bar.json";
import barToPsi               from "./converters/bar-to-psi.json";
import jouleToCalorie         from "./converters/joule-to-calorie.json";
import kwhToJoule             from "./converters/kwh-to-joule.json";
import acreToHectare          from "./converters/acre-to-hectare.json";
import sqftToSqm              from "./converters/sqft-to-sqm.json";
import sqmToSqft              from "./converters/sqm-to-sqft.json";
import sqmToAcre              from "./converters/sqm-to-acre.json";
import squareFootToSqm        from "./converters/square-foot-to-sqm.json";
import squareKmToSqm          from "./converters/square-kilometer-to-sqm.json";
import squareMeterToSqkm      from "./converters/square-meter-to-sqkm.json";
import pascalToPsi            from "./converters/pascal-to-psi.json";
import psiToPascal            from "./converters/psi-to-pascal.json";
import atmToPascal            from "./converters/atm-to-pascal.json";
import pascalToAtm            from "./converters/pascal-to-atm.json";
import atmosphereToPascal     from "./converters/atmosphere-to-pascal.json";
import calorieToJoule         from "./converters/calorie-to-joule.json";
import btuToJoule             from "./converters/btu-to-joule.json";
import jouleToBtu             from "./converters/joule-to-btu.json";
import jouleToKwh             from "./converters/joule-to-kwh.json";
import btuPerHourToWatt       from "./converters/btu-per-hour-to-watt.json";
import wattToHorsepower       from "./converters/watt-to-horsepower.json";
import horsepowerToWatt       from "./converters/horsepower-to-watt.json";
import kilowattToHorsepower   from "./converters/kilowatt-to-horsepower.json";
import minuteToHour           from "./converters/minute-to-hour.json";
import hourToDay              from "./converters/hour-to-day.json";
import secondToMinute         from "./converters/second-to-minute.json";
import dayToWeek              from "./converters/day-to-week.json";
import percentToPpm           from "./converters/percent-to-ppm.json";
import ppmToPercent           from "./converters/ppm-to-percent.json";
import ppmToPpb               from "./converters/ppm-to-ppb.json";
import ppbToPpm               from "./converters/ppb-to-ppm.json";
import ppmToPpt               from "./converters/ppm-to-ppt.json";
import pptToPpm               from "./converters/ppt-to-ppm.json";

// ─── Finance schemas ──────────────────────────────────────────────────────────
import adsense               from "./finance/adsense.json";
import cpv                   from "./finance/cpv.json";
import poshmarkFee           from "./finance/poshmark-fee.json";
import youtubeEarnings       from "./finance/youtube-earnings.json";
import money                 from "./finance/money.json";
import simpleInterest        from "./finance/simple-interest.json";
import discount              from "./finance/discount.json";
import margin                from "./finance/margin.json";
import vat                   from "./finance/vat.json";
import commission            from "./finance/commission.json";
import markup                from "./finance/markup.json";
import energyConsumption     from "./finance/energy-consumption.json";
import tithing               from "./finance/tithing.json";

// ─── Loan schemas ─────────────────────────────────────────────────────────────
import emi                   from "./loans/emi.json";
import epf                   from "./loans/epf.json";
import rd                    from "./loans/rd.json";
import swp                   from "./loans/swp.json";
import mutualFundReturns     from "./loans/mutual-fund-returns.json";
import xirr                  from "./loans/xirr.json";
import loanEmi               from "./loans/loan-emi.json";
import sip                   from "./loans/sip.json";
import ppf                   from "./loans/ppf.json";
import fd                    from "./loans/fd.json";
import gst                   from "./loans/gst.json";
import lumpsum               from "./loans/lumpsum.json";
import incomeTax             from "./loans/income-tax.json";

// ─── Statistics schemas ───────────────────────────────────────────────────────
import meanMedianMode        from "./statistics/mean-median-mode.json";
import quartile              from "./statistics/quartile.json";
import iqr                   from "./statistics/iqr.json";
import normalDistribution    from "./statistics/normal-distribution.json";
import confidenceInterval    from "./statistics/confidence-interval.json";
import sampleSize            from "./statistics/sample-size.json";
import oddsProbability       from "./statistics/odds-probability.json";
import sumCalc               from "./statistics/sum.json";
import average               from "./statistics/average.json";
import standardDeviation     from "./statistics/standard-deviation.json";
import varianceCalc          from "./statistics/variance.json";
import median                from "./statistics/median.json";
import zScore                from "./statistics/z-score.json";
import probability           from "./statistics/probability.json";
import gpa                   from "./statistics/gpa.json";
import percentile            from "./statistics/percentile.json";
import votePercentage        from "./statistics/vote-percentage.json";
import finalExamGrade        from "./statistics/final-exam-grade.json";
import percentErrorStat      from "./statistics/percent-error-stat.json";
import pValue                from "./statistics/p-value.json";
import stemLeafPlot          from "./statistics/stem-leaf-plot.json";
import randomNamePicker      from "./statistics/random-name-picker.json";
import randomCardGenerator   from "./statistics/random-card-generator.json";
import pinGenerator          from "./statistics/pin-generator.json";
import statisticsFormulas    from "./statistics/statistics-formulas.json";

// ─── Time schemas ─────────────────────────────────────────────────────────────
import hoursCalculator       from "./time/hours-calculator.json";
import workHours             from "./time/work-hours.json";
import timeToDecimal         from "./time/time-to-decimal.json";
import decimalToTime         from "./time/decimal-to-time.json";
import hoursMinutes          from "./time/hours-minutes.json";
import dateDifference        from "./time/date-difference.json";
import ageCalculator         from "./time/age-calculator.json";
import grossPay              from "./time/gross-pay.json";
import ageChecker            from "./time/age-checker.json";
import timeHms               from "./time/time-hms.json";
import businessDays          from "./time/business-days.json";
import weekNumber            from "./time/week-number.json";
import timeCard              from "./time/time-card.json";
import timeDateDifference    from "./time/time-date-difference.json";
import countdownTimer        from "./time/countdown-timer.json";
import sunriseSunset         from "./time/sunrise-sunset.json";
import stopwatchLapTimer     from "./time/stopwatch-lap-timer.json";

// ─── Health schemas ───────────────────────────────────────────────────────────
import calorieBurn           from "./health/calorie-burn.json";
import bmr                   from "./health/bmr.json";
import idealWeight           from "./health/ideal-weight.json";
import waterIntake           from "./health/water-intake.json";
import bodySurfaceArea        from "./health/body-surface-area.json";
import smokingCost            from "./health/smoking-cost-calculator.json";
import sleepCalc              from "./health/sleep-calculator.json";
import fiberIntake            from "./health/fiber-intake-calculator.json";

// ─── Physics schemas ──────────────────────────────────────────────────────────
import ohmsLaw                from "./physics/ohms-law-calculator.json";
import kineticEnergy          from "./physics/kinetic-energy-calculator.json";
import potentialEnergy        from "./physics/potential-energy-calculator.json";
import forcePhysics           from "./physics/force-calculator.json";
import velocityPhysics        from "./physics/velocity-calculator.json";
import accelerationPhysics    from "./physics/acceleration-calculator.json";
import workEnergy             from "./physics/work-energy-calculator.json";
import powerPhysics           from "./physics/power-physics-calculator.json";
import pressurePhysics        from "./physics/pressure-physics-calculator.json";
import densityPhysics         from "./physics/density-calculator.json";
import wavelengthPhysics      from "./physics/wavelength-calculator.json";
import torquePhysics          from "./physics/torque-calculator.json";
import momentumPhysics        from "./physics/momentum-calculator.json";
import gravitationalForce     from "./physics/gravitational-force.json";
import electricPower          from "./physics/electric-power-calculator.json";
import resistorsSeries        from "./physics/resistors-series.json";
import resistorsParallel      from "./physics/resistors-parallel.json";
import freeFall               from "./physics/free-fall-calculator.json";
import projectileMotion       from "./physics/projectile-motion.json";
import capacitorCharge        from "./physics/capacitor-charge.json";

// ─── Export all ───────────────────────────────────────────────────────────────
export const schemas: CalculatorSchema[] = [
  // Root
  bmiSchema, compoundInterest, pythagorean,

  // Math
  quadraticFormula, squareRoot, percentage, percentageChange,
  areaCircle, slope, triangleArea, lcm, areaRectangle, volumeSphere, linearEquation,
  gcf, factorial, perimeter, fractionToDecimal, percentError, volumeCylinder,
  cubeRoot, squarePow, absoluteValue, meanCalc, rounding, modulo, exponents,
  ratio, proportion, longDivision, fractionToPercent, percentToDecimal,
  decimalToPercent, decimalToFraction, primeNumber, scientificNotation, addingMachine,
  unitRate, romanNumeral, multiples, diamondProblem, longMultiplication,
  longAddition, longSubtraction, completingSquare, significantFigures, placeValue,
  equivalentFractions, mixedNumbers, commonFactors,
  expandedForm, addingFractions, complexFractions, exponentialNotation,
  surfaceAreaSphere, surfaceAreaCylinder, volumeCone, trapezoidArea, ellipseArea,
  combinationsCalc, permutationsCalc, arithmeticSequence, geometricSequence,
  fibonacciCalc, crossProductCalc, surfaceAreaCube, volumePyramid, regularPolygonArea,

  // Algebra
  polynomial, factoring,
  cubicEquation, systemOfEquations, fractionalExponents, radicals, absoluteDifference,
  largeExponents, simplifyRadical, solveForExponents,
  percentageIncrease, percentageDecrease, percentageDifference,
  foilMethod, differenceOfSquares, dotProduct, logarithm, fourthRoot, fifthRoot,

  // Converters - temperature
  celsiusFahrenheit, fahrenheitCelsius, celsiusToKelvin, kelvinToCelsius,
  fahrenheitToKelvin, kelvinToFahrenheit,
  celsiusToRankine, rankineToC, rankineToF, rankineToK,
  celsiusToDelisle, celsiusToNewton, celsiusToReaumur, celsiusToRomer,
  // Converters - length
  kmMiles, milesKm, cmToInch, centimeterToInch, inchToCm, meterToFeet, feetToMeter, millimeterToInch,
  meterToCentimeter, meterToKilometer, meterToYard, yardToMeter,
  kilometerToMile, mileToKilometer,
  // Converters - weight
  kgPounds, poundsKg, kgToStone, stoneToKg, gramToOunce, ounceToGram,
  kgToTon, kilogramToGram, kilogramToPound, tonToKg, caratToGram, tonMetricToPound,
  // Converters - volume
  literToGallon, gallonToLiter, cupToMl, mlToCup, mlToOz, ozToMl,
  pintToLiter, literToPint, cubicMeterToCubicFoot,
  // Converters - speed
  kmhToMph, mphToKmh, kmhToMs, msToKmh, kmhToKnot,
  knotToKmh, knotToMph, msToMph, mphToMs,
  // Converters - numbers
  binaryToDecimal, decimalToBinary, hexToDecimal, decimalToHex, decimalToOctal,
  binaryToHex, hexToBinary, octalToDecimal,
  // Converters - area
  acreToSqm, hectareToAcre, acreToHectare, sqftToSqm, sqmToSqft, sqmToAcre,
  squareFootToSqm, squareKmToSqm, squareMeterToSqkm,
  // Converters - pressure
  psiToBar, barToPsi, pascalToPsi, psiToPascal, atmToPascal, pascalToAtm, atmosphereToPascal,
  // Converters - energy & power
  jouleToCalorie, kwhToJoule, calorieToJoule, btuToJoule, jouleToBtu, jouleToKwh,
  btuPerHourToWatt, wattToHorsepower, horsepowerToWatt, kilowattToHorsepower,
  // Converters - time units
  minuteToHour, hourToDay, secondToMinute, dayToWeek,
  // Converters - concentration
  percentToPpm, ppmToPercent, ppmToPpb, ppbToPpm, ppmToPpt, pptToPpm,

  // Finance
  simpleInterest, discount, margin, vat, commission, markup, energyConsumption, tithing,
  adsense, cpv, poshmarkFee, youtubeEarnings, money,

  // Loans
  loanEmi, emi, sip, ppf, fd, gst, lumpsum, incomeTax, epf, rd, swp, mutualFundReturns, xirr,

  // Statistics
  average, standardDeviation, varianceCalc, median, zScore, probability,
  gpa, percentile, votePercentage, finalExamGrade,
  meanMedianMode, quartile, iqr, normalDistribution, confidenceInterval,
  sampleSize, oddsProbability, sumCalc,
  percentErrorStat, pValue, stemLeafPlot,
  randomNamePicker, randomCardGenerator, pinGenerator, statisticsFormulas,

  // Time
  hoursCalculator, workHours, timeToDecimal, decimalToTime, hoursMinutes,
  dateDifference, ageCalculator, grossPay, ageChecker, timeHms, businessDays,
  weekNumber, timeCard, timeDateDifference,
  countdownTimer, sunriseSunset, stopwatchLapTimer,

  // Health
  calorieBurn, bmr, idealWeight, waterIntake,
  bodySurfaceArea, smokingCost, sleepCalc, fiberIntake,

  // Physics
  ohmsLaw, kineticEnergy, potentialEnergy, forcePhysics, velocityPhysics,
  accelerationPhysics, workEnergy, powerPhysics, pressurePhysics, densityPhysics,
  wavelengthPhysics, torquePhysics, momentumPhysics, gravitationalForce,
  electricPower, resistorsSeries, resistorsParallel, freeFall, projectileMotion,
  capacitorCharge,
].map((s) => s as unknown as CalculatorSchema);

export const schemaMap: Record<string, CalculatorSchema> = Object.fromEntries(
  schemas.map((s) => [s.slug, s])
);

export { CATEGORIES as categories } from "@/lib/registry/categories";

export function getSchemaBySlug(slug: string): CalculatorSchema | undefined {
  return schemaMap[slug];
}

export function getSchemasByCategory(category: string): CalculatorSchema[] {
  return schemas.filter((s) => s.category === category);
}
