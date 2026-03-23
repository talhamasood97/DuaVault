import { ImageResponse } from "next/og";
import { DUAS, getDailyDua as staticGetDailyDua } from "@/data/duas";

export const runtime = "edge";

function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const dua = slug
    ? (DUAS.find((d) => d.slug === slug) ?? staticGetDailyDua())
    : staticGetDailyDua();

  const translation = truncate(dua.translation, 200);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1080,
          height: 1080,
          background: "linear-gradient(160deg, #060b18 0%, #0d1b3e 55%, #060b18 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative glows */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 240,
            height: 240,
            background:
              "radial-gradient(circle at top right, rgba(99,102,241,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 240,
            height: 240,
            background:
              "radial-gradient(circle at bottom left, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.35)",
              borderRadius: 100,
              padding: "10px 24px",
            }}
          >
            <div style={{ color: "#c4b5fd", fontSize: 24, fontWeight: 600, letterSpacing: 1 }}>
              EVENING DUA
            </div>
          </div>

          {/* Authenticity badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 100,
              padding: "10px 20px",
              color: "#6ee7b7",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {dua.authenticity_grade === "QURAN" ? "Quran" : dua.authenticity_grade === "SAHIH" ? "Sahih" : "Hasan"}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 44,
            maxWidth: 860,
          }}
        >
          {dua.title}
        </div>

        {/* Transliteration */}
        <div
          style={{
            color: "#a5b4fc",
            fontSize: 26,
            fontStyle: "italic",
            lineHeight: 1.5,
            marginBottom: 40,
            maxWidth: 880,
          }}
        >
          {truncate(dua.transliteration, 140)}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background:
              "linear-gradient(90deg, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.05) 100%)",
            marginBottom: 36,
          }}
        />

        {/* Translation */}
        <div
          style={{
            color: "#e0e7ff",
            fontSize: 32,
            lineHeight: 1.6,
            flex: 1,
            maxWidth: 880,
          }}
        >
          {translation}
        </div>

        {/* Source */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div style={{ color: "#a5b4fc", fontSize: 22 }}>{dua.source_book}</div>
          <div style={{ color: "#3d4b7a", fontSize: 22 }}>•</div>
          <div style={{ color: "#a5b4fc", fontSize: 22 }}>{`Hadith #${dua.hadith_number}`}</div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(99, 102, 241, 0.2)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                background: "#4f46e5",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              D
            </div>
            <div style={{ color: "#ffffff", fontSize: 26, fontWeight: 700 }}>DuaVault</div>
          </div>
          <div style={{ color: "#3d4b7a", fontSize: 22 }}>duavault.com</div>
        </div>
      </div>
    ),
    { width: 1080, height: 1080 }
  );
}
