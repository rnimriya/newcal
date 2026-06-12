"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { create, all } from "mathjs/number";

const math = create(all);

interface CalculatorButton {
  label: string;
  value: string;
  type: "digit" | "operator" | "function" | "action" | "equal";
}

const BUTTONS: CalculatorButton[] = [
  // Row 1
  { label: "sin", value: "sin(", type: "function" },
  { label: "cos", value: "cos(", type: "function" },
  { label: "tan", value: "tan(", type: "function" },
  { label: "C", value: "clear", type: "action" },
  { label: "⌫", value: "backspace", type: "action" },

  // Row 2
  { label: "log", value: "log10(", type: "function" },
  { label: "ln", value: "log(", type: "function" },
  { label: "^", value: "^", type: "operator" },
  { label: "(", value: "(", type: "operator" },
  { label: ")", value: ")", type: "operator" },

  // Row 3
  { label: "√", value: "sqrt(", type: "function" },
  { label: "7", value: "7", type: "digit" },
  { label: "8", value: "8", type: "digit" },
  { label: "9", value: "9", type: "digit" },
  { label: "÷", value: "/", type: "operator" },

  // Row 4
  { label: "π", value: "pi", type: "digit" },
  { label: "4", value: "4", type: "digit" },
  { label: "5", value: "5", type: "digit" },
  { label: "6", value: "6", type: "digit" },
  { label: "×", value: "*", type: "operator" },

  // Row 5
  { label: "e", value: "e", type: "digit" },
  { label: "1", value: "1", type: "digit" },
  { label: "2", value: "2", type: "digit" },
  { label: "3", value: "3", type: "digit" },
  { label: "−", value: "-", type: "operator" },

  // Row 6
  { label: "%", value: "%", type: "operator" },
  { label: "0", value: "0", type: "digit" },
  { label: ".", value: ".", type: "digit" },
  { label: "=", value: "equal", type: "equal" },
  { label: "+", value: "+", type: "operator" },
];

// Pure function to evaluate expression for preview (no setState)
function getPreviewResult(expression: string): string {
  if (!expression.trim()) return "";

  try {
    const trimmed = expression.trim();
    const lastChar = trimmed.slice(-1);

    // Don't evaluate if it ends with an unclosed operator or function name
    if (
      ["+", "-", "*", "/", "^", "%", "("].includes(lastChar) ||
      trimmed.endsWith("sin") ||
      trimmed.endsWith("cos") ||
      trimmed.endsWith("tan") ||
      trimmed.endsWith("log10") ||
      trimmed.endsWith("log") ||
      trimmed.endsWith("sqrt")
    ) {
      return "";
    }

    // Try balancing simple parentheses for real-time preview
    let balancedExpr = expression;
    const openParens = (expression.match(/\(/g) || []).length;
    const closeParens = (expression.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      balancedExpr += ")".repeat(openParens - closeParens);
    }

    const evaluated = math.evaluate(balancedExpr);
    if (typeof evaluated === "number" && isFinite(evaluated)) {
      return Number(evaluated.toFixed(8)).toString();
    }
    return "";
  } catch {
    return "";
  }
}

export function ScientificCalculator() {
  const [expression, setExpression] = useState("");
  const [isError, setIsError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Compute preview dynamically on render
  const preview = isError ? "Error" : getPreviewResult(expression);

  // Scroll display to right when expression grows
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [expression]);

  const handleKeyPress = useCallback((val: string) => {
    setIsError(false);

    if (val === "clear") {
      setExpression("");
    } else if (val === "backspace") {
      setExpression((prev) => {
        // If we deleted a function, remove the whole name (e.g. sin(, log10(, etc.)
        if (prev.endsWith("sin(")) return prev.slice(0, -4);
        if (prev.endsWith("cos(")) return prev.slice(0, -4);
        if (prev.endsWith("tan(")) return prev.slice(0, -4);
        if (prev.endsWith("log10(")) return prev.slice(0, -6);
        if (prev.endsWith("log(")) return prev.slice(0, -4);
        if (prev.endsWith("sqrt(")) return prev.slice(0, -5);
        return prev.slice(0, -1);
      });
    } else if (val === "equal") {
      if (!expression.trim()) return;
      try {
        const finalVal = math.evaluate(expression);
        if (finalVal !== undefined && finalVal !== null && !isNaN(finalVal)) {
          const formatted = Number(finalVal.toFixed(8)).toString();
          setExpression(formatted);
        } else {
          setIsError(true);
        }
      } catch {
        setIsError(true);
      }
    } else {
      setExpression((prev) => prev + val);
    }
  }, [expression]);

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      // Skip if typing in another input/textarea
      if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
        return;
      }

      const key = e.key;

      if (key >= "0" && key <= "9") {
        handleKeyPress(key);
      } else if (["+", "-", "*", "/", "(", ")", ".", "%"].includes(key)) {
        handleKeyPress(key);
      } else if (key === "^") {
        handleKeyPress("^");
      } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        handleKeyPress("equal");
      } else if (key === "Backspace") {
        handleKeyPress("backspace");
      } else if (key === "Escape") {
        handleKeyPress("clear");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleKeyPress]);

  return (
    <div className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  p-5 bg-card border border-border shadow-md select-none w-full max-w-sm mx-auto">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
          Scientific Calculator
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
      </div>

      {/* Screen display */}
      <div className="bg-secondary border border-border rounded-xl p-3.5 mb-4 text-right flex flex-col justify-between h-24 font-mono">
        {/* Active input expression */}
        <div ref={scrollContainerRef} className="text-base text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-none h-6 pr-1 leading-6">
          {expression || "0"}
        </div>
        {/* Dynamic preview or result */}
        <div
          className={`text-2xl font-bold break-all transition-colors ${isError ? "text-destructive" : "text-foreground"
            }`}
        >
          {preview}
        </div>
      </div>

      {/* Buttons Pad */}
      <div className="grid grid-cols-5 gap-2">
        {BUTTONS.map((btn) => {
          let btnClass = "";

          if (btn.type === "action") {
            btnClass =
              "bg-destructive/10 border border-destructive/20 hover:bg-destructive/20 text-destructive";
          } else if (btn.type === "equal") {
            btnClass =
              "bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20";
          } else if (btn.type === "function") {
            btnClass =
              "bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary";
          } else if (btn.type === "operator") {
            btnClass =
              "bg-secondary/80 border border-border/50 hover:bg-secondary text-foreground/80";
          } else {
            btnClass =
              "bg-background border border-border hover:bg-muted text-foreground";
          }

          return (
            <button
              key={btn.label}
              onClick={() => handleKeyPress(btn.value)}
              className={`rounded-xl py-3 text-base font-semibold active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${btnClass}`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
