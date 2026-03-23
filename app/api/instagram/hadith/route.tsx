import { ImageResponse } from "next/og";
import { HADITHS, getDailyHadith } from "@/data/hadiths";

export const runtime = "edge";

function extractCoreQuote(translation: string): string {
  // Extract just the quoted speech, strip narrator prefix
  const quoted = translation.match(/said[,:]?\s*[""](.+)[""]$/s);
  if (quoted) return quoted[1].trim();
  const colonIdx = translation.indexOf(": ");
  if (colonIdx > 0 && colonIdx < 80) return translation.slice(colonIdx + 2).trim();
  return translation;
}

function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const hadith = slug
    ? (HADITHS.find((h) => h.slug === slug) ?? getDailyHadith())
    : getDailyHadith();

  const coreQuote = truncate(extractCoreQuote(hadith.translation), 220);
  const arabic = truncate(hadith.arabic, 160);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1080,
          height: 1080,
          background: "linear-gradient(160deg, #021207 0%, #052e16 60%, #021207 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle at top right, rgba(16,185,129,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle at bottom left, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              borderRadius: 100,
              padding: "10px 24px",
            }}
          >
            <div style={{ color: "#f59e0b", fontSize: 22 }}>✦</div>
            <div style={{ color: "#a7f3d0", fontSize: 24, fontWeight: 600, letterSpacing: 1 }}>
              MORNING HADITH
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 40,
            maxWidth: 860,
          }}
        >
          {hadith.title}
        </div>

        {/* Arabic text */}
        <div
          style={{
            color: "#fcd34d",
            fontSize: 52,
            fontWeight: 700,
            textAlign: "right",
            direction: "rtl",
            lineHeight: 1.7,
            marginBottom: 28,
            width: "100%",
          }}
        >
          {arabic}
        </div>

        {/* Transliteration */}
        <div
          style={{
            color: "#6ee7b7",
            fontSize: 26,
            fontStyle: "italic",
            lineHeight: 1.5,
            marginBottom: 40,
            maxWidth: 880,
          }}
        >
          {truncate(hadith.transliteration, 140)}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "linear-gradient(90deg, rgba(16,185,129,0.5) 0%, rgba(16,185,129,0.05) 100%)",
            marginBottom: 36,
          }}
        />

        {/* Core quote */}
        <div
          style={{
            color: "#f0fdf4",
            fontSize: 32,
            lineHeight: 1.6,
            flex: 1,
            maxWidth: 880,
          }}
        >
          "{coreQuote}"
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
          <div style={{ color: "#a7f3d0", fontSize: 22 }}>
            {hadith.narrator}
          </div>
          <div style={{ color: "#4b7a60", fontSize: 22 }}>•</div>
          <div style={{ color: "#a7f3d0", fontSize: 22 }}>
            {hadith.source_book}
          </div>
          <div style={{ color: "#4b7a60", fontSize: 22 }}>•</div>
          <div style={{ color: "#a7f3d0", fontSize: 22 }}>
            Hadith #{hadith.hadith_number}
          </div>
          <div style={{ color: "#4b7a60", fontSize: 22 }}>•</div>
          <div
            style={{
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 100,
              padding: "4px 14px",
              color: "#6ee7b7",
              fontSize: 20,
            }}
          >
            {hadith.grade}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(16, 185, 129, 0.2)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                background: "#047857",
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
          <div style={{ color: "#4b7a60", fontSize: 22 }}>duavault.com</div>
        </div>
      </div>
    ),
    { width: 1080, height: 1080 }
  );
}
