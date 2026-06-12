"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="section-title text-xl mb-4 font-bold">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-start justify-between gap-3 p-4 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-foreground text-base leading-snug">
                {faq.q}
              </span>
              <ChevronDown
                size={16}
                className={`shrink-0 mt-0.5 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""
                  }`}
              />
            </button>

            {openIndex === i && (
              <div className="px-4 pb-4">
                <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
