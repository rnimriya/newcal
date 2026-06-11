import type { JsonLDDocument } from "@/lib/seo/jsonld";

interface Props {
  data: JsonLDDocument | Record<string, unknown>;
}

export function JsonLD({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
    />
  );
}
