import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1000,
          height: 1000,
          background: "linear-gradient(160deg, #021207 0%, #052e16 60%, #021207 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Crescent moon SVG */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginBottom: 36 }}
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="#34d399"
            opacity="0.9"
          />
        </svg>

        {/* DuaVault text */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#f0fdf4",
              letterSpacing: "-2px",
              fontFamily: "serif",
            }}
          >
            Dua
          </span>
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#34d399",
              letterSpacing: "-2px",
              fontFamily: "serif",
            }}
          >
            Vault
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#6ee7b7",
            marginTop: 20,
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            opacity: 0.8,
          }}
        >
          Daily Duas &amp; Hadith
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontSize: 22,
            color: "#065f46",
            letterSpacing: "2px",
            fontFamily: "sans-serif",
          }}
        >
          duavault.com
        </div>
      </div>
    ),
    {
      width: 1000,
      height: 1000,
    }
  );
}
