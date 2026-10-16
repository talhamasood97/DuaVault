import { ImageResponse } from "next/og";

// Google Search only shows favicons that are a multiple of 48px; 32px showed a blank globe.
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 96,
          height: 96,
          background: "#047857",
          borderRadius: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 60,
          fontWeight: "bold",
          letterSpacing: "-3px",
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
