// ─── Field Types ───────────────────────────────────────────────────────────────

export type FieldType = "number" | "select" | "slider" | "computed";

export interface UnitOption {
  label: string;          // "Meters", "Feet"
  value: string;          // "m", "ft"
  toBase: string;         // math.js expression to convert to base unit
  fromBase: string;       // math.js expression to convert from base unit
}

export interface FieldConstraint {
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface CalculatorField {
  id: string;             // unique key used in formula references
  label: string;
  type: FieldType;
  defaultValue?: number | string;
  placeholder?: string;
  helpText?: string;
  units?: UnitOption[];
  defaultUnit?: string;
  constraint?: FieldConstraint;
  selectOptions?: SelectOption[];  // for "select" type
  precision?: number;              // decimal places for computed output
  prefix?: string;                 // "$", "%" etc.
  suffix?: string;
}

// ─── Formula Group ─────────────────────────────────────────────────────────────

export interface FormulaGroup {
  id: string;
  label: string;           // e.g. "Outputs" or "Body Metrics"
  fields: string[];        // array of field ids belonging to this group
}

// ─── Chart Config ──────────────────────────────────────────────────────────────

export interface ChartConfig {
  xAxisField: string;     // field id for x-axis
  yAxisField: string;     // field id for y-axis
  xRange?: [number, number];
  points?: number;        // number of sample points (default 50)
  label?: string;
}

// ─── Calculator Schema ─────────────────────────────────────────────────────────

export interface CalculatorSchema {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  icon?: string;
  tags?: string[];
  fields: CalculatorField[];
  groups?: FormulaGroup[];
  formulas: Record<string, string>;  // fieldId -> math.js expression
  explanation?: string;              // markdown rich text
  derivation?: string;               // step-by-step markdown
  examples?: Array<{ label: string; inputs: Record<string, number> }>;
  chart?: ChartConfig;
}

// ─── Engine State ──────────────────────────────────────────────────────────────

export interface FieldState {
  value: string;          // raw input string (empty = unset)
  unit: string;           // active unit value
  computed: boolean;      // true when auto-derived
  error?: string;
}

export interface CalculatorState {
  schema: CalculatorSchema;
  fields: Record<string, FieldState>;     // fieldId -> state
  lastModified?: string;                  // fieldId of last user-typed field
}

// ─── History ───────────────────────────────────────────────────────────────────

export interface HistoryEntry {
  id: string;
  timestamp: number;
  inputs: Record<string, string>;
  outputs: Record<string, string>;
}

// ─── Store Shape ───────────────────────────────────────────────────────────────

export interface CalcStore {
  activeSchema: CalculatorSchema | null;
  fieldStates: Record<string, FieldState>;
  isOffline: boolean;
  unitSystem: "metric" | "imperial";
  savedCalculators: string[];            // array of calculator slugs
  // History
  calcHistory: Record<string, HistoryEntry[]>;
  addHistoryEntry: (slug: string, entry: HistoryEntry) => void;
  // Recently Viewed
  recentlyViewed: string[];
  addRecentlyViewed: (slug: string) => void;

  // Custom Units
  preferredUnits: Record<string, string>;
  setPreferredUnit: (slug: string, fieldId: string, unit: string) => void;
  // Core
  setSchema: (schema: CalculatorSchema) => void;
  setFieldValue: (fieldId: string, value: string) => void;
  setFieldUnit: (fieldId: string, unit: string) => void;
  setUnitSystem: (system: "metric" | "imperial") => void;
  saveCalculator: (slug: string) => void;
  removeCalculator: (slug: string) => void;
  setOffline: (v: boolean) => void;
}

// ─── Category ──────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;          // Tailwind bg class
  description?: string;
  calculators: string[];  // slugs
}

// ─── Search Result ─────────────────────────────────────────────────────────────

export interface SearchResult {
  schema: CalculatorSchema;
  score: number;
}
