import { ImageResponse } from "next/og";

export const alt = "CalcUnit.net — 1,000+ free online calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
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
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 3 }}>
          CALCUNIT.NET
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.08 }}>
            1,000+ Free Online Calculators
          </div>
          <div style={{ fontSize: 32, opacity: 0.78 }}>
            Math · Finance · Health · Physics · Unit Converters
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
          <span>Instant results as you type</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>No sign-up</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>Works offline</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
