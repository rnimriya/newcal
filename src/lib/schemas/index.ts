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
import absoluteMaximum from "./math/absolute-maximum.json";
import absoluteMinimum from "./math/absolute-minimum.json";
import absoluteMiximum from "./math/absolute-miximum.json";
import acidBase from "./math/acid-base.json";
import addingComplexNumbers from "./math/adding-complex-numbers.json";
import addingIntegers from "./math/adding-integers.json";
import addingSubtractingFractions from "./math/adding-subtracting-fractions.json";
import addingSubtractingIntegers from "./math/adding-subtracting-integers.json";
import addingVectors from "./math/adding-vectors.json";
import additiveInverse from "./math/additive-inverse.json";
import algebra from "./algebra/algebra.json";
import algebraicExpression from "./algebra/algebraic-expression.json";
import algebraicFormula from "./algebra/algebraic-formula.json";
import amplitude from "./math/amplitude.json";
import angleBetweenVectors from "./math/angle-between-vectors.json";
import annuity from "./finance/annuity.json";
import antilog from "./math/antilog.json";
import approximation from "./math/approximation.json";
import arcLength from "./math/arc-length.json";
import arctan from "./math/arctan.json";
import areaBetweenCurves from "./math/area-between-curves.json";
import areaOfEllipse from "./math/area-of-ellipse.json";
import areaOfEquilateralTriangle from "./math/area-of-equilateral-triangle.json";
import areaOfKite from "./math/area-of-kite.json";
import areaOfParallelogram from "./math/area-of-parallelogram.json";
import areaOfQuadrilateral from "./math/area-of-quadrilateral.json";
import areaOfSector from "./math/area-of-sector.json";
import areaOfTriangle from "./math/area-of-triangle.json";
import arithmeticProgression from "./math/arithmetic-progression.json";
import arrheniusEquation from "./algebra/arrhenius-equation.json";
import asymptote from "./math/asymptote.json";
import atomicMass from "./math/atomic-mass.json";
import australianDollarToUsd from "./converters/australian-dollar-to-usd.json";
import balanceEquation from "./algebra/balance-equation.json";
import baseConverter from "./math/base-converter.json";
import basicArithmetic from "./math/basic-arithmetic.json";
import bayesTheorem from "./statistics/bayes-theorem.json";
import beam from "./physics/beam.json";
import bearing from "./math/bearing.json";
import bernoulli from "./physics/bernoulli.json";
import betaFunction from "./math/beta-function.json";
import binomialCoefficient from "./math/binomial-coefficient.json";
import binomialExpansion from "./math/binomial-expansion.json";
import blackbodyRadiation from "./physics/blackbody-radiation.json";
import bodmas from "./math/bodmas.json";
import bohrModel from "./physics/bohr-model.json";
import bondAngle from "./physics/bond-angle.json";
import booleanAlgebra from "./algebra/boolean-algebra.json";
import calculus from "./math/calculus.json";
import capacitance from "./physics/capacitance.json";
import carbonDating from "./math/carbon-dating.json";
import cartesianPolar from "./math/cartesian-polar.json";
import catenary from "./math/catenary.json";
import centerMass from "./math/center-mass.json";
import centroid from "./math/centroid.json";
import chainRule from "./math/chain-rule.json";
import circleArea from "./math/circle-area.json";
import circleEquation from "./algebra/circle-equation.json";
import circuitAnalysis from "./math/circuit-analysis.json";
import circumcenter from "./math/circumcenter.json";
import coPrime from "./math/co-prime.json";
import collision from "./physics/collision.json";
import combiningLikeTerms from "./algebra/combining-like-terms.json";
import combustion from "./math/combustion.json";
import comparingFractions from "./math/comparing-fractions.json";
import complexConjugate from "./math/complex-conjugate.json";
import complexModulus from "./math/complex-modulus.json";
import complexNumber from "./math/complex-number.json";
import compoundAngle from "./finance/compound-angle.json";
import congruence from "./math/congruence.json";
import conicSection from "./math/conic-section.json";
import continuity from "./math/continuity.json";
import convolution from "./math/convolution.json";
import correlationCoefficient from "./statistics/correlation-coefficient.json";
import cosine from "./math/cosine.json";
import cosineRule from "./math/cosine-rule.json";
import coulombLaw from "./math/coulomb-law.json";
import crystallography from "./physics/crystallography.json";
import curveFitting from "./math/curve-fitting.json";
import damping from "./physics/damping.json";
import dataAnalysis from "./math/data-analysis.json";
import decay from "./physics/decay.json";
import definiteIntegral from "./math/definite-integral.json";
import determinant from "./math/determinant.json";
import differentialEquation from "./algebra/differential-equation.json";
import diffraction from "./physics/diffraction.json";
import dimensionalAnalysis from "./math/dimensional-analysis.json";
import diode from "./physics/diode.json";
import displacement from "./physics/displacement.json";
import distance from "./physics/distance.json";
import domainRange from "./math/domain-range.json";
import dopplerEffect from "./physics/doppler-effect.json";
import dynamics from "./physics/dynamics.json";
import efficiency from "./math/efficiency.json";
import eigenvalue from "./math/eigenvalue.json";
import elasticCollision from "./physics/elastic-collision.json";
import electricField from "./physics/electric-field.json";
import electromagnetic from "./physics/electromagnetic.json";
import energyConversion from "./converters/energy-conversion.json";
import entropy from "./physics/entropy.json";
import equationSystem from "./algebra/equation-system.json";
import equilibrium from "./math/equilibrium.json";
import errorAnalysis from "./math/error-analysis.json";
import eulerMethod from "./math/euler-method.json";
import faradayLaw from "./math/faraday-law.json";
import fermat from "./math/fermat.json";
import fieldStrength from "./math/field-strength.json";
import finance from "./math/finance.json";
import fluidDynamics from "./physics/fluid-dynamics.json";
import fourier from "./math/fourier.json";
import fourierSeries from "./math/fourier-series.json";
import fractal from "./math/fractal.json";
import fractionalNotation from "./math/fractional-notation.json";
import fractionsComparing from "./math/fractions-comparing.json";
import fractionsSimplifying from "./math/fractions-simplifying.json";
import frequencyResponse from "./math/frequency-response.json";
import friction from "./physics/friction.json";
import functionCalc from "./math/function.json";
import gameTheory from "./math/game-theory.json";
import gammaFunction from "./math/gamma-function.json";
import gasLaw from "./math/gas-law.json";
import gaussian from "./math/gaussian.json";
import gcd from "./math/gcd.json";
import geodesic from "./math/geodesic.json";
import geometry from "./math/geometry.json";
import graph from "./math/graph.json";
import graphing from "./math/graphing.json";
import graphingFunctions from "./math/graphing-functions.json";
import greaterThan from "./math/greater-than.json";
import greaterThanLessThanFraction from "./math/greater-than-less-than-fraction.json";
import greatestCommonDivisor from "./math/greatest-common-divisor.json";
import greenhouse from "./math/greenhouse.json";
import gyroscope from "./math/gyroscope.json";
import halfLife from "./physics/half-life.json";
import heatTransfer from "./physics/heat-transfer.json";
import heightOfAParallelogram from "./math/height-of-a-parallelogram.json";
import heronsFormula from "./algebra/herons-formula.json";
import hexagon from "./math/hexagon.json";
import histogram from "./statistics/histogram.json";
import hydraulic from "./physics/hydraulic.json";
import hyperbola from "./math/hyperbola.json";
import hypothesisTest from "./math/hypothesis-test.json";
import imaginaryNumber from "./math/imaginary-number.json";
import impedance from "./math/impedance.json";
import improperFractionToMixedNumber from "./converters/improper-fraction-to-mixed-number.json";
import impulse from "./math/impulse.json";
import inchToFeet from "./converters/inch-to-feet.json";
import indefiniteIntegral from "./math/indefinite-integral.json";
import inductance from "./physics/inductance.json";
import inequality from "./algebra/inequality.json";
import inertia from "./physics/inertia.json";
import infiniteSeries from "./math/infinite-series.json";
import instantaneousRateOfChange from "./math/instantaneous-rate-of-change.json";
import integerDivision from "./math/integer-division.json";
import interference from "./physics/interference.json";
import interiorAnglesOfPolygon from "./math/interior-angles-of-polygon.json";
import interpolation from "./math/interpolation.json";
import inverseCotangent from "./math/inverse-cotangent.json";
import inverseFunction from "./math/inverse-function.json";
import inverseMatrix from "./algebra/inverse-matrix.json";
import inverseTangent from "./math/inverse-tangent.json";
import isoscelesTriangle from "./math/isosceles-triangle.json";
import isotope from "./math/isotope.json";
import kinematic from "./physics/kinematic.json";
import laplaceTransform from "./math/laplace-transform.json";
import laser from "./physics/laser.json";
import lawOfSines from "./math/law-of-sines.json";
import leapYear from "./time/leap-year.json";
import leastToGreatest from "./converters/least-to-greatest.json";
import lengthConversion from "./converters/length-conversion.json";
import lens from "./math/lens.json";
import lever from "./math/lever.json";
import light from "./math/light.json";
import likeFractions from "./math/like-fractions.json";
import limit from "./math/limit.json";
import lineGraph from "./math/line-graph.json";
import linearApproximation from "./math/linear-approximation.json";
import linearEquationsInTwoVariables from "./math/linear-equations-in-two-variables.json";
import linearGraph from "./math/linear-graph.json";
import linearProgramming from "./math/linear-programming.json";
import litresToGallons from "./converters/litres-to-gallons.json";
import magneticField from "./physics/magnetic-field.json";
import massEnergy from "./physics/mass-energy.json";
import matrix from "./algebra/matrix.json";
import matrixMultiplication from "./algebra/matrix-multiplication.json";
import membrane from "./math/membrane.json";
import midpoint from "./math/midpoint.json";
import mixedNumberFraction from "./math/mixed-number-fraction.json";
import modularArithmetic from "./math/modular-arithmetic.json";
import monomial from "./algebra/monomial.json";
import motor from "./math/motor.json";
import multiplicationSingleDigit from "./math/multiplication-single-digit.json";
import multiplicativeInverse from "./math/multiplicative-inverse.json";
import multiplyingDecimals from "./math/multiplying-decimals.json";
import multiplyingFractions from "./math/multiplying-fractions.json";
import multiplyingIntegers from "./math/multiplying-integers.json";
import nChooseK from "./math/n-choose-k.json";
import naturalLog from "./math/natural-log.json";
import naturalNumbersAddition from "./math/natural-numbers-addition.json";
import nearestWholeNumber from "./math/nearest-whole-number.json";
import negativeExponent from "./algebra/negative-exponent.json";
import negativeNumber from "./math/negative-number.json";
import netIonicEquation from "./algebra/net-ionic-equation.json";
import newtonRaphson from "./physics/newton-raphson.json";
import nonRightTriangle from "./math/non-right-triangle.json";
import normalCurve from "./math/normal-curve.json";
import nthRoot from "./algebra/nth-root.json";
import nthTerm from "./math/nth-term.json";
import nuclear from "./physics/nuclear.json";
import numberLine from "./math/number-line.json";
import numberSequence from "./math/number-sequence.json";
import numeratorAndDenominator from "./math/numerator-and-denominator.json";
import numericalMethods from "./math/numerical-methods.json";
import obliqueAsymptote from "./math/oblique-asymptote.json";
import obtuseTriangle from "./math/obtuse-triangle.json";
import octagon from "./math/octagon.json";
import oddEven from "./math/odd-even.json";
import oneSampleTTest from "./statistics/one-sample-t-test.json";
import optical from "./physics/optical.json";
import optimization from "./math/optimization.json";
import orbital from "./physics/orbital.json";
import orthogonalVectors from "./math/orthogonal-vectors.json";
import oscillator from "./physics/oscillator.json";
import outlier from "./statistics/outlier.json";
import parabola from "./math/parabola.json";
import parabolaVertex from "./algebra/parabola-vertex.json";
import parallelLine from "./math/parallel-line.json";
import parallelLines from "./math/parallel-lines.json";
import parametric from "./math/parametric.json";
import parametricEquation from "./algebra/parametric-equation.json";
import parentheses from "./math/parentheses.json";
import partialFraction from "./math/partial-fraction.json";
import pascalTriangle from "./math/pascal-triangle.json";
import paybackPeriod from "./finance/payback-period.json";
import pearsonCorrelation from "./statistics/pearson-correlation.json";
import pendulum from "./math/pendulum.json";
import pentagonArea from "./math/pentagon-area.json";
import pentagon from "./math/pentagon.json";
import percentChange from "./math/percent-change.json";
import percentDecrease from "./math/percent-decrease.json";
import percentDifference from "./math/percent-difference.json";
import percentIncrease from "./math/percent-increase.json";
import percentOfANumber from "./math/percent-of-a-number.json";
import percentYield from "./finance/percent-yield.json";
import perpendicularLines from "./math/perpendicular-lines.json";
import phase from "./math/phase.json";
import phaseShift from "./math/phase-shift.json";
import photon from "./physics/photon.json";
import piecewiseFunction from "./math/piecewise-function.json";
import piezoelectric from "./physics/piezoelectric.json";
import plasma from "./physics/plasma.json";
import polarization from "./physics/polarization.json";
import populationGrowth from "./math/population-growth.json";
import powerRule from "./physics/power-rule.json";
import presentValue from "./math/present-value.json";
import primeFactor from "./math/prime-factor.json";
import primeFactorization from "./math/prime-factorization.json";
import productRule from "./math/product-rule.json";
import profit from "./finance/profit.json";
import pulley from "./math/pulley.json";
import pythagoreanTriples from "./math/pythagorean-triples.json";
import quadraticInequality from "./algebra/quadratic-inequality.json";
import quadraticVertex from "./algebra/quadratic-vertex.json";
import quadrilateral from "./math/quadrilateral.json";
import quantum from "./physics/quantum.json";
import quotientRule from "./math/quotient-rule.json";
import radian from "./math/radian.json";
import radiansToDegrees from "./converters/radians-to-degrees.json";
import radiation from "./physics/radiation.json";
import radicalEquation from "./algebra/radical-equation.json";
import radicalSimplifier from "./algebra/radical-simplifier.json";
import radioactive from "./physics/radioactive.json";
import radius from "./math/radius.json";
import radiusOfCircle from "./math/radius-of-circle.json";
import randomNumberGenerator from "./math/random-number-generator.json";
import rateOfChange from "./math/rate-of-change.json";
import reactance from "./math/reactance.json";
import reciprocal from "./math/reciprocal.json";
import reciprocalOfAFraction from "./math/reciprocal-of-a-fraction.json";
import rectangularPrism from "./math/rectangular-prism.json";
import rectangularToPolar from "./converters/rectangular-to-polar.json";
import recursiveFormula from "./algebra/recursive-formula.json";
import reducingFractions from "./math/reducing-fractions.json";
import reflection from "./physics/reflection.json";
import refraction from "./physics/refraction.json";
import regressionAnalysis from "./statistics/regression-analysis.json";
import regression from "./statistics/regression.json";
import relativeError from "./math/relative-error.json";
import relativity from "./physics/relativity.json";
import remainder from "./math/remainder.json";
import remainderTheorem from "./math/remainder-theorem.json";
import resistance from "./physics/resistance.json";
import resonance from "./math/resonance.json";
import revenue from "./finance/revenue.json";
import rhombus from "./math/rhombus.json";
import rightAngleTriangle from "./math/right-angle-triangle.json";
import rightTriangle from "./math/right-triangle.json";
import rotation from "./math/rotation.json";
import scalarMultiplication from "./math/scalar-multiplication.json";
import secantLine from "./math/secant-line.json";
import secondsToMinutes from "./converters/seconds-to-minutes.json";
import setTheory from "./math/set-theory.json";
import sigmaNotation from "./math/sigma-notation.json";
import signalProcessing from "./math/signal-processing.json";
import simpleHarmonic from "./math/simple-harmonic.json";
import simplifyFractions from "./math/simplify-fractions.json";
import simplifyingRadicals from "./math/simplifying-radicals.json";
import sinusoidalFunction from "./math/sinusoidal-function.json";
import slantHeightOfCone from "./math/slant-height-of-cone.json";
import solveForY from "./algebra/solve-for-y.json";
import sound from "./physics/sound.json";
import speedDistanceTime from "./physics/speed-distance-time.json";
import spring from "./math/spring.json";
import staticCalc from "./physics/static.json";
import strain from "./physics/strain.json";
import stress from "./physics/stress.json";
import substitution from "./algebra/substitution.json";
import surfaceTension from "./math/surface-tension.json";
import syntheticDivision from "./math/synthetic-division.json";
import systemsOfEquations from "./math/systems-of-equations.json";
import tangent from "./math/tangent.json";
import tangentLine from "./math/tangent-line.json";
import taylorSeries from "./math/taylor-series.json";
import temperature from "./math/temperature.json";
import tensor from "./math/tensor.json";
import thermal from "./physics/thermal.json";
import thermodynamics from "./physics/thermodynamics.json";
import timeCalculatorAdd from "./time/time-calculator-add.json";
import topology from "./math/topology.json";
import transform from "./math/transform.json";
import transformer from "./physics/transformer.json";
import transistor from "./physics/transistor.json";
import transposeMatrix from "./algebra/transpose-matrix.json";
import triangleAngles from "./math/triangle-angles.json";
import triangleHeight from "./math/triangle-height.json";
import triangularPrism from "./math/triangular-prism.json";
import triangularPyramid from "./math/triangular-pyramid.json";
import trigonometricIdentities from "./math/trigonometric-identities.json";
import trigonometry from "./math/trigonometry.json";
import turbulence from "./math/turbulence.json";
import twoSampleTTest from "./statistics/two-sample-t-test.json";
import twoStepEquations from "./algebra/two-step-equations.json";
import unitCircle from "./math/unit-circle.json";
import unitConverter from "./math/unit-converter.json";
import unitPrice from "./math/unit-price.json";
import usingTheDistributiveProperty from "./algebra/using-the-distributive-property.json";
import vectorAnalysis from "./algebra/vector-analysis.json";
import vector from "./algebra/vector.json";
import vectorMagnitude from "./algebra/vector-magnitude.json";
import vectorSubtraction from "./algebra/vector-subtraction.json";
import vertex from "./algebra/vertex.json";
import viscosity from "./physics/viscosity.json";
import volumeOfACylinder from "./math/volume-of-a-cylinder.json";
import volumeOfASphere from "./math/volume-of-a-sphere.json";
import volumeOfCube from "./math/volume-of-cube.json";
import volumeOfCuboid from "./math/volume-of-cuboid.json";
import volumeOfRectangularPrism from "./math/volume-of-rectangular-prism.json";
import waveform from "./physics/waveform.json";
import weeksToMonths from "./converters/weeks-to-months.json";
import wholeNumber from "./math/whole-number.json";
import xIntercept from "./math/x-intercept.json";
import xRay from "./physics/x-ray.json";
import yIntercept from "./math/y-intercept.json";
import yieldCalc from "./finance/yield.json";
import zener from "./physics/zener.json";
import zero from "./math/zero.json";

import megabyte from "./converters/megabyte.json";
import megajoule from "./converters/megajoule.json";
import megapascal from "./converters/megapascal.json";
import micrometer from "./converters/micrometer.json";
import millibar from "./converters/millibar.json";
import mmhg from "./converters/mmhg.json";
import molarFlow from "./physics/molar-flow.json";
import nanometer from "./converters/nanometer.json";
import nauticalMile from "./converters/nautical-mile.json";
import parsec from "./converters/parsec.json";
import percentToFraction from "./math/percent-to-fraction.json";
import permeability from "./physics/permeability.json";
import petabyte from "./converters/petabyte.json";
import poundal from "./math/poundal.json";
import shearModulus from "./physics/shear-modulus.json";
import specificHeatCapacity from "./physics/specific-heat-capacity.json";
import specificVolume from "./physics/specific-volume.json";

import basicStatistics from "./statistics/basic-statistics.json";
import descriptiveStatistics from "./statistics/descriptive-statistics.json";

import technicalAtmosphere from "./converters/technical-atmosphere.json";
import terabyte from "./converters/terabyte.json";
import torr from "./converters/torr.json";
import volumeDry from "./converters/volume-dry.json";
import wattHour from "./converters/watt-hour.json";
import yottabyte from "./converters/yottabyte.json";
import zettabyte from "./converters/zettabyte.json";
import tensileStrength from "./physics/tensile-strength.json";
import volumeLumber from "./physics/volume-lumber.json";

export const schemas: CalculatorSchema[] = [
  technicalAtmosphere, terabyte, torr, volumeDry, wattHour, yottabyte, zettabyte, tensileStrength, volumeLumber,
  basicStatistics, descriptiveStatistics,
  megabyte, megajoule, megapascal, micrometer, millibar, mmhg, molarFlow, nanometer, nauticalMile, parsec, percentToFraction, permeability, petabyte, poundal, shearModulus, specificHeatCapacity, specificVolume,
  absoluteMaximum, absoluteMinimum, absoluteMiximum, acidBase, addingComplexNumbers, addingIntegers, addingSubtractingFractions, addingSubtractingIntegers, addingVectors, additiveInverse, algebra, algebraicExpression, algebraicFormula, amplitude, angleBetweenVectors, annuity, antilog, approximation, arcLength, arctan, areaBetweenCurves, areaOfEllipse, areaOfEquilateralTriangle, areaOfKite, areaOfParallelogram, areaOfQuadrilateral, areaOfSector, areaOfTriangle, arithmeticProgression, arrheniusEquation, asymptote, atomicMass, australianDollarToUsd, balanceEquation, baseConverter, basicArithmetic, bayesTheorem, beam, bearing, bernoulli, betaFunction, binomialCoefficient, binomialExpansion, blackbodyRadiation, bodmas, bohrModel, bondAngle, booleanAlgebra, calculus, capacitance, carbonDating, cartesianPolar, catenary, centerMass, centroid, chainRule, circleArea, circleEquation, circuitAnalysis, circumcenter, coPrime, collision, combiningLikeTerms, combustion, comparingFractions, complexConjugate, complexModulus, complexNumber, compoundAngle, congruence, conicSection, continuity, convolution, correlationCoefficient, cosine, cosineRule, coulombLaw, crystallography, curveFitting, damping, dataAnalysis, decay, definiteIntegral, determinant, differentialEquation, diffraction, dimensionalAnalysis, diode, displacement, distance, domainRange, dopplerEffect, dynamics, efficiency, eigenvalue, elasticCollision, electricField, electromagnetic, energyConversion, entropy, equationSystem, equilibrium, errorAnalysis, eulerMethod, faradayLaw, fermat, fieldStrength, finance, fluidDynamics, fourier, fourierSeries, fractal, fractionalNotation, fractionsComparing, fractionsSimplifying, frequencyResponse, friction, functionCalc, gameTheory, gammaFunction, gasLaw, gaussian, gcd, geodesic, geometry, graph, graphing, graphingFunctions, greaterThan, greaterThanLessThanFraction, greatestCommonDivisor, greenhouse, gyroscope, halfLife, heatTransfer, heightOfAParallelogram, heronsFormula, hexagon, histogram, hydraulic, hyperbola, hypothesisTest, imaginaryNumber, impedance, improperFractionToMixedNumber, impulse, inchToFeet, indefiniteIntegral, inductance, inequality, inertia, infiniteSeries, instantaneousRateOfChange, integerDivision, interference, interiorAnglesOfPolygon, interpolation, inverseCotangent, inverseFunction, inverseMatrix, inverseTangent, isoscelesTriangle, isotope, kinematic, laplaceTransform, laser, lawOfSines, leapYear, leastToGreatest, lengthConversion, lens, lever, light, likeFractions, limit, lineGraph, linearApproximation, linearEquationsInTwoVariables, linearGraph, linearProgramming, litresToGallons, magneticField, massEnergy, matrix, matrixMultiplication, membrane, midpoint, mixedNumberFraction, modularArithmetic, monomial, motor, multiplicationSingleDigit, multiplicativeInverse, multiplyingDecimals, multiplyingFractions, multiplyingIntegers, nChooseK, naturalLog, naturalNumbersAddition, nearestWholeNumber, negativeExponent, negativeNumber, netIonicEquation, newtonRaphson, nonRightTriangle, normalCurve, nthRoot, nthTerm, nuclear, numberLine, numberSequence, numeratorAndDenominator, numericalMethods, obliqueAsymptote, obtuseTriangle, octagon, oddEven, oneSampleTTest, optical, optimization, orbital, orthogonalVectors, oscillator, outlier, parabola, parabolaVertex, parallelLine, parallelLines, parametric, parametricEquation, parentheses, partialFraction, pascalTriangle, paybackPeriod, pearsonCorrelation, pendulum, pentagonArea, pentagon, percentChange, percentDecrease, percentDifference, percentIncrease, percentOfANumber, percentYield, perpendicularLines, phase, phaseShift, photon, piecewiseFunction, piezoelectric, plasma, polarization, populationGrowth, powerRule, presentValue, primeFactor, primeFactorization, productRule, profit, pulley, pythagoreanTriples, quadraticInequality, quadraticVertex, quadrilateral, quantum, quotientRule, radian, radiansToDegrees, radiation, radicalEquation, radicalSimplifier, radioactive, radius, radiusOfCircle, randomNumberGenerator, rateOfChange, reactance, reciprocal, reciprocalOfAFraction, rectangularPrism, rectangularToPolar, recursiveFormula, reducingFractions, reflection, refraction, regressionAnalysis, regression, relativeError, relativity, remainder, remainderTheorem, resistance, resonance, revenue, rhombus, rightAngleTriangle, rightTriangle, rotation, scalarMultiplication, secantLine, secondsToMinutes, setTheory, sigmaNotation, signalProcessing, simpleHarmonic, simplifyFractions, simplifyingRadicals, sinusoidalFunction, slantHeightOfCone, solveForY, sound, speedDistanceTime, spring, staticCalc, strain, stress, substitution, surfaceTension, syntheticDivision, systemsOfEquations, tangent, tangentLine, taylorSeries, temperature, tensor, thermal, thermodynamics, timeCalculatorAdd, topology, transform, transformer, transistor, transposeMatrix, triangleAngles, triangleHeight, triangularPrism, triangularPyramid, trigonometricIdentities, trigonometry, turbulence, twoSampleTTest, twoStepEquations, unitCircle, unitConverter, unitPrice, usingTheDistributiveProperty, vectorAnalysis, vector, vectorMagnitude, vectorSubtraction, vertex, viscosity, volumeOfACylinder, volumeOfASphere, volumeOfCube, volumeOfCuboid, volumeOfRectangularPrism, waveform, weeksToMonths, wholeNumber, xIntercept, xRay, yIntercept, yieldCalc, zener, zero,
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
