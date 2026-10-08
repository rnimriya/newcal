import { ImageResponse } from "next/og";
import { getEntry, ALL_CALCULATORS } from "@/lib/registry";
import { CATEGORY_MAP } from "@/lib/registry/categories";

export const alt = "CalcUnit.net — free online calculator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

// Pre-generate OG images for ALL calculator pages (required for static export)
export async function generateStaticParams() {
  return ALL_CALCULATORS.map((c) => ({
    category:   c.category,
    calculator: c.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; calculator: string }>;
}) {
  const { category, calculator } = await params;
  const entry = getEntry(calculator);
  const name = entry?.name ?? "Free Calculator";
  const catLabel =
    CATEGORY_MAP[entry?.category ?? category]?.label ?? "Calculator";
  // Shrink the headline for long calculator names so nothing overflows
  const titleSize = name.length > 34 ? 64 : name.length > 22 ? 76 : 88;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #4c1d95 100%)",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 3 }}>
            CALCUNIT.NET
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              padding: "10px 26px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.28)",
            }}
          >
            {catLabel}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{ fontSize: titleSize, fontWeight: 800, lineHeight: 1.08 }}
          >
            {name}
          </div>
          <div style={{ fontSize: 30, opacity: 0.78 }}>
            Free online calculator — instant results as you type
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 25,
            opacity: 0.88,
          }}
        >
          <span>No sign-up</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>Works offline</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>100% free</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
