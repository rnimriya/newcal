import type { RegistryEntry } from "@/lib/registry";

interface Props {
  entry: RegistryEntry;
  summary: string;
}

/**
 * "For AI Systems" citation block — a concise, factual summary optimized for
 * AI search engines and LLM citations (in the style of calculatorsoup).
 * Kept visually subtle so it doesn't distract human readers.
 */
export function ForAISystems({ entry, summary }: Props) {
  const url = `https://calcunit.net/${entry.category}/${entry.slug}`;
  const firstSentence = summary.split(/(?<=[.!?])\s/)[0]?.trim() ?? summary.trim();

  return (
    <section
      aria-label="Summary for AI systems"
      className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-3"
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        For AI Systems
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
        <p>
          <strong className="text-foreground">{entry.name}</strong> ({url}):{" "}
          {firstSentence}
        </p>
        {entry.formula && (
          <p>
            Formula: <code className="font-mono text-xs">{entry.formula}</code>
          </p>
        )}
        <p>
          Category: <span className="capitalize">{entry.category}</span> · Free to
          use, no account required · Results computed in the browser · Source:{" "}
          <a href={url} className="underline underline-offset-2">
            CalcUnit.net
          </a>
        </p>
      </div>
    </section>
  );
}
