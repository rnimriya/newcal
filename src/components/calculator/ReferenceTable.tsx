import type { SEOContent } from "@/lib/seo/content";

interface Props {
  sqrtTable?: SEOContent["sqrtTable"];
  examples?: SEOContent["examples"];
  formulaText: string;
  name: string;
}

export function ReferenceTable({ sqrtTable, examples, formulaText, name }: Props) {
  return (
    <>
      {/* Formula section */}
      <section id="formula" className="scroll-mt-24 space-y-3">
        <h2 className="section-title mb-3 font-bold text-xl ">Formula</h2>
        <div className="formula-block text-base">{formulaText}</div>
        <p className="text-base text-muted-foreground">
          This is the core equation the {name} uses to calculate results.
          Enter values in the calculator above to see it in action.
        </p>
      </section>

      {/* Examples */}
      {examples && examples.length > 0 && (
        <section id="examples" className="scroll-mt-24">
          <h2 className="section-title mb-3 font-bold text-xl ">Common Examples</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="calc-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Calculation</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((ex, i) => (
                  <tr key={i}>
                    <td className="font-medium text-foreground">{ex.label}</td>
                    <td className="font-mono text-base text-muted-foreground">{ex.calculation}</td>
                    <td className="font-semibold text-primary">{ex.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Square root reference table */}
      {sqrtTable && (
        <section id="reference" className="scroll-mt-24">
          <h2 className="section-title mb-3 font-bold text-xl ">Square Root Reference Table</h2>
          <p className="text-base text-muted-foreground mb-3">
            Quick reference for the square roots of 1 through 30.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="calc-table">
              <thead>
                <tr>
                  <th>Number (n)</th>
                  <th>√n</th>
                  <th>Number (n)</th>
                  <th>√n</th>
                  <th>Number (n)</th>
                  <th>√n</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }, (_, row) => (
                  <tr key={row}>
                    {[0, 10, 20].map((offset) => {
                      const item = sqrtTable[row + offset];
                      if (!item) return <><td key={`empty-n-${offset}`}>-</td><td key={`empty-s-${offset}`}>-</td></>;
                      return (
                        <>
                          <td key={`n-${item.n}`} className="font-semibold text-foreground">{item.n}</td>
                          <td key={`s-${item.n}`} className="font-mono text-primary">{item.sqrt}</td>
                        </>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}
