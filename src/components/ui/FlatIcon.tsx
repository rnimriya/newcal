"use client";

import React from "react";
import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Category Mapping ─────────────────────────────────────────────────────────
const categoryIconMap: Record<string, LucideIcon> = {
  math:       Lucide.Calculator,
  algebra:    Lucide.Calculator, // Fallback to Calculator if Parentheses not found
  finance:    Lucide.Coins,
  loans:      Lucide.Landmark,
  converters: Lucide.ArrowLeftRight,
  statistics: Lucide.BarChart3,
  health:     Lucide.Activity,
  time:       Lucide.Clock,
  physics:    Lucide.Atom,
};

interface CategoryIconProps {
  id: string;
  className?: string;
  size?: number;
}

export function CategoryIcon({ id, className, size = 20 }: CategoryIconProps) {
  // Try to find Parentheses icon dynamically in Lucide
  const IconComponent = id === "algebra" 
    ? (Lucide.Parentheses || Lucide.Binary || Lucide.Calculator) 
    : (categoryIconMap[id] || Lucide.Calculator);

  return <IconComponent className={className} size={size} strokeWidth={2} />;
}

// ─── Calculator Mapping ───────────────────────────────────────────────────────
interface CalculatorIconProps {
  slug: string;
  category?: string;
  className?: string;
  size?: number;
}

export function CalculatorIcon({ slug, category, className, size = 18 }: CalculatorIconProps) {
  // 1. Specific slug mapping
  let IconComponent: LucideIcon | undefined;

  if (slug.includes("bmi")) IconComponent = Lucide.Scale || Lucide.Activity;
  else if (slug.includes("calorie")) IconComponent = Lucide.Flame;
  else if (slug.includes("water-intake")) IconComponent = Lucide.Droplets;
  else if (slug.includes("sleep")) IconComponent = Lucide.Moon;
  else if (slug.includes("smoking")) IconComponent = Lucide.Ban;
  else if (slug.includes("heart-rate")) IconComponent = Lucide.HeartPulse || Lucide.Activity;
  else if (slug.includes("running-pace") || slug.includes("pace")) IconComponent = Lucide.Activity;
  else if (slug.includes("pregnancy")) IconComponent = Lucide.Baby;
  else if (slug.includes("ohms-law") || slug.includes("voltage") || slug.includes("electric") || slug.includes("capacitor") || slug.includes("resistor")) IconComponent = Lucide.Zap;
  else if (slug.includes("kinetic") || slug.includes("momentum")) IconComponent = Lucide.Flame;
  else if (slug.includes("potential-energy")) IconComponent = Lucide.Mountain;
  else if (slug.includes("force") || slug.includes("velocity") || slug.includes("acceleration") || slug.includes("pressure") || slug.includes("speed")) IconComponent = Lucide.Gauge;
  else if (slug.includes("work-energy")) IconComponent = Lucide.Hammer;
  else if (slug.includes("torque") || slug.includes("wrench")) IconComponent = Lucide.Wrench;
  else if (slug.includes("gravitational") || slug.includes("gravity") || slug.includes("sphere") || slug.includes("globe")) IconComponent = Lucide.Globe;
  else if (slug.includes("free-fall")) IconComponent = Lucide.ArrowDown;
  else if (slug.includes("projectile")) IconComponent = Lucide.Send;
  else if (slug.includes("compound-interest") || slug.includes("simple-interest") || slug.includes("interest")) IconComponent = Lucide.LineChart;
  else if (slug.includes("discount")) IconComponent = Lucide.Tag;
  else if (slug.includes("vat") || slug.includes("gst") || slug.includes("tax")) IconComponent = Lucide.Receipt;
  else if (slug.includes("commission") || slug.includes("margin") || slug.includes("markup") || slug.includes("percent")) IconComponent = Lucide.Percent;
  else if (slug.includes("loan") || slug.includes("emi")) IconComponent = Lucide.CreditCard;
  else if (slug.includes("epf") || slug.includes("work")) IconComponent = Lucide.Briefcase;
  else if (slug.includes("sip") || slug.includes("ppf") || slug.includes("fd")) IconComponent = Lucide.PieChart;
  else if (slug.includes("average") || slug.includes("mean") || slug.includes("median") || slug.includes("mode") || slug.includes("deviation") || slug.includes("variance")) IconComponent = Lucide.BarChart2;
  else if (slug.includes("probability")) IconComponent = Lucide.Dices;
  else if (slug.includes("gpa") || slug.includes("grade")) IconComponent = Lucide.GraduationCap;
  else if (slug.includes("date") || slug.includes("calendar")) IconComponent = Lucide.Calendar;
  else if (slug.includes("countdown")) IconComponent = Lucide.Hourglass;
  else if (slug.includes("stopwatch") || slug.includes("timer")) IconComponent = Lucide.Timer;
  else if (slug.includes("age")) IconComponent = Lucide.Cake;
  else if (slug.includes("hours") || slug.includes("time") || slug.includes("minute") || slug.includes("second")) IconComponent = Lucide.Clock;
  else if (slug.includes("sunrise")) IconComponent = Lucide.Sunrise;
  else if (slug.includes("quadratic") || slug.includes("equation") || slug.includes("algebra") || slug.includes("fibonacci")) IconComponent = Lucide.Infinity;
  else if (slug.includes("square-root") || slug.includes("factorial") || slug.includes("prime") || slug.includes("binary") || slug.includes("hex") || slug.includes("decimal")) IconComponent = Lucide.Binary;
  else if (slug.includes("triangle") || slug.includes("pythagorean")) IconComponent = Lucide.Triangle;
  else if (slug.includes("circle") || slug.includes("ellipse")) IconComponent = Lucide.Circle;
  else if (slug.includes("rectangle") || slug.includes("cube") || slug.includes("box")) IconComponent = Lucide.Box;
  else if (slug.includes("cylinder") || slug.includes("pyramid") || slug.includes("cone") || slug.includes("polygon")) IconComponent = Lucide.Triangle;

  // 2. Fallback to category default icon
  if (!IconComponent && category) {
    IconComponent = category === "algebra"
      ? (Lucide.Parentheses || Lucide.Binary || Lucide.Calculator)
      : (categoryIconMap[category] || Lucide.Calculator);
  }

  // 3. Absolute fallback
  if (!IconComponent) {
    IconComponent = Lucide.Calculator;
  }

  return <IconComponent className={className} size={size} strokeWidth={2} />;
}
