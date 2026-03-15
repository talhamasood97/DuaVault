import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #047857 0%, #065f46 100%)",
          borderRadius: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 80,
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          D
        </div>
        <div
          style={{
            color: "#6ee7b7",
            fontSize: 22,
            fontWeight: "600",
            letterSpacing: 2,
          }}
        >
          DUA
        </div>
      </div>
    ),
    { ...size }
  );
}
