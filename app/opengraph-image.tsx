import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            background: "#047857",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>D</div>
        </div>

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Dua Companion
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#6ee7b7",
            fontSize: 30,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Authentic Islamic Duas with Arabic, Transliteration &amp; Verified Sources
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Sahih al-Bukhari", "Sahih Muslim", "Holy Quran"].map((source) => (
            <div
              key={source}
              style={{
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: 100,
                padding: "8px 20px",
                color: "#a7f3d0",
                fontSize: 18,
              }}
            >
              {source}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
