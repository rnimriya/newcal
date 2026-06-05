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
  const displayEndRef = useRef<HTMLDivElement>(null);

  // Compute preview dynamically on render
  const preview = isError ? "Error" : getPreviewResult(expression);

  // Scroll display to right when expression grows
  useEffect(() => {
    displayEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <div className="calc-card p-5 bg-white border border-zinc-200 shadow-md select-none w-full max-w-sm mx-auto dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Scientific Calculator
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
      </div>

      {/* Screen display */}
      <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3.5 mb-4 text-right flex flex-col justify-between h-24 font-mono dark:bg-zinc-950 dark:border-zinc-800/80">
        {/* Active input expression */}
        <div className="text-sm text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none h-6 pr-1 leading-6">
          {expression || "0"}
          <div ref={displayEndRef} />
        </div>
        {/* Dynamic preview or result */}
        <div
          className={`text-2xl font-bold break-all transition-colors ${
            isError ? "text-red-500" : "text-zinc-800 dark:text-zinc-200"
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
              "bg-red-50 border border-red-100 hover:bg-red-100/80 text-red-600 dark:bg-red-950/20 dark:border-red-900/40 dark:text-red-400";
          } else if (btn.type === "equal") {
            btnClass =
              "bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-100 dark:shadow-none";
          } else if (btn.type === "function") {
            btnClass =
              "bg-indigo-50/70 border border-indigo-100/50 hover:bg-indigo-100/80 text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-900/30 dark:text-indigo-400";
          } else if (btn.type === "operator") {
            btnClass =
              "bg-zinc-100/80 border border-zinc-200/50 hover:bg-zinc-200/70 text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300";
          } else {
            btnClass =
              "bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100";
          }

          return (
            <button
              key={btn.label}
              onClick={() => handleKeyPress(btn.value)}
              className={`rounded-xl py-3 text-xs font-semibold active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${btnClass}`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
