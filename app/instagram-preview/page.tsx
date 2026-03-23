import { getDailyHadith } from "@/data/hadiths";
import { getDailyDua } from "@/data/duas";

export const dynamic = "force-dynamic";

function formatDuaSource(dua: { source_book: string; hadith_number?: string; authenticity_grade: string }) {
  if (dua.authenticity_grade === "QURAN") {
    return dua.hadith_number ? `Quran ${dua.hadith_number}` : "Quran";
  }
  return dua.hadith_number ? `${dua.source_book} • Hadith #${dua.hadith_number}` : dua.source_book;
}

function extractCoreQuote(translation: string): string {
  const quoted = translation.match(/said[,:]?\s*[\u201c"](.+)[\u201d"]$/);
  if (quoted) return quoted[1].trim();
  const colonIdx = translation.indexOf(": ");
  if (colonIdx > 0 && colonIdx < 80) return translation.slice(colonIdx + 2).trim();
  return translation;
}

function truncate(text: string, max: number) {
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

export default function InstagramPreviewPage() {
  const hadith = getDailyHadith();
  const dua = getDailyDua();
  const coreQuote = truncate(extractCoreQuote(hadith.translation), 280);
  const duaGrade = dua.authenticity_grade === "QURAN" ? "Quran" : dua.authenticity_grade === "SAHIH" ? "Sahih" : "Hasan";

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-6">
      {/* Instructions */}
      <div className="max-w-[1080px] mx-auto mb-10 text-center">
        <h1 className="text-white text-2xl font-bold mb-2">Instagram Post Preview</h1>
        <p className="text-stone-400 text-sm">
          Right-click each card → &quot;Save image as&quot; (if browser supports it), or take a
          screenshot of each card. Use browser zoom to fit your screen.
        </p>
      </div>

      <div className="flex flex-col items-center gap-12">

        {/* ── MORNING HADITH ─────────────────────────────────────── */}
        <div>
          <p className="text-stone-500 text-xs uppercase tracking-widest mb-3 text-center">Morning Hadith — 1080×1080</p>
          {/* Outer wrapper clips to half-size for on-screen preview; full 1080px layout is preserved inside */}
          <div style={{ width: 540, height: 540, overflow: "hidden", borderRadius: 8 }}>
          <div
            style={{
              width: 1080,
              transform: "scale(0.5)",
              transformOrigin: "top left",
              height: 1080,
              background: "linear-gradient(160deg, #021207 0%, #052e16 60%, #021207 100%)",
              display: "flex",
              flexDirection: "column",
              padding: "72px 80px",
              fontFamily: "Inter, sans-serif",
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Corner glow */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "radial-gradient(circle at top right, rgba(16,185,129,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 300, height: 300, background: "radial-gradient(circle at bottom left, rgba(16,185,129,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

            {/* Badge */}
            <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", borderRadius: 100, padding: "10px 24px", marginBottom: 44 }}>
              <span style={{ color: "#a7f3d0", fontSize: 22, fontWeight: 600, letterSpacing: 2 }}>MORNING HADITH</span>
            </div>

            {/* Title */}
            <h2 style={{ color: "#ffffff", fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "0 0 32px", maxWidth: 860 }}>
              {hadith.title}
            </h2>

            {/* Arabic */}
            <p dir="rtl" style={{ fontFamily: "Amiri, serif", color: "#fcd34d", fontSize: 52, fontWeight: 400, lineHeight: 1.8, margin: "0 0 24px", textAlign: "right", width: "100%" }}>
              {truncate(hadith.arabic, 150)}
            </p>

            {/* Transliteration */}
            <p style={{ color: "#6ee7b7", fontSize: 22, fontStyle: "italic", lineHeight: 1.5, margin: "0 0 36px", maxWidth: 880 }}>
              {truncate(hadith.transliteration, 130)}
            </p>

            {/* Divider */}
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(16,185,129,0.5) 0%, rgba(16,185,129,0.05) 100%)", margin: "0 0 32px" }} />

            {/* Core quote */}
            <p style={{ color: "#f0fdf4", fontSize: 30, lineHeight: 1.65, flex: 1, margin: "0 0 32px", maxWidth: 880 }}>
              &ldquo;{coreQuote}&rdquo;
            </p>

            {/* Source row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <span style={{ color: "#a7f3d0", fontSize: 20 }}>{hadith.narrator}</span>
              <span style={{ color: "#4b7a60" }}>•</span>
              <span style={{ color: "#a7f3d0", fontSize: 20 }}>{hadith.source_book}</span>
              <span style={{ color: "#4b7a60" }}>•</span>
              <span style={{ color: "#a7f3d0", fontSize: 20 }}>Hadith #{hadith.hadith_number}</span>
              <span style={{ color: "#4b7a60" }}>•</span>
              <span style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 100, padding: "4px 14px", color: "#6ee7b7", fontSize: 18 }}>{hadith.grade}</span>
            </div>

            {/* Footer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(16,185,129,0.2)", paddingTop: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, background: "#047857", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 22, fontWeight: 700 }}>D</div>
                <span style={{ color: "#ffffff", fontSize: 26, fontWeight: 700 }}>DuaVault</span>
              </div>
              <span style={{ color: "#4b7a60", fontSize: 20 }}>duavault.com</span>
            </div>
          </div>
          </div>{/* end scale wrapper */}
        </div>

        {/* ── EVENING DUA ────────────────────────────────────────── */}
        <div>
          <p className="text-stone-500 text-xs uppercase tracking-widest mb-3 text-center">Evening Dua — 1080×1080</p>
          <div style={{ width: 540, height: 540, overflow: "hidden", borderRadius: 8 }}>
          <div
            style={{
              width: 1080,
              transform: "scale(0.5)",
              transformOrigin: "top left",
              height: 1080,
              background: "linear-gradient(160deg, #060b18 0%, #0d1b3e 55%, #060b18 100%)",
              display: "flex",
              flexDirection: "column",
              padding: "72px 80px",
              fontFamily: "Inter, sans-serif",
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Corner glows */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "radial-gradient(circle at top right, rgba(99,102,241,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 300, height: 300, background: "radial-gradient(circle at bottom left, rgba(99,102,241,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />

            {/* Badges row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}>
              <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.35)", borderRadius: 100, padding: "10px 24px" }}>
                <span style={{ color: "#c4b5fd", fontSize: 22, fontWeight: 600, letterSpacing: 2 }}>EVENING DUA</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 100, padding: "10px 20px" }}>
                <span style={{ color: "#6ee7b7", fontSize: 20, fontWeight: 600 }}>{duaGrade}</span>
              </div>
            </div>

            {/* Title */}
            <h2 style={{ color: "#ffffff", fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "0 0 32px", maxWidth: 860 }}>
              {dua.title}
            </h2>

            {/* Arabic */}
            <p dir="rtl" style={{ fontFamily: "Amiri, serif", color: "#fde68a", fontSize: 56, fontWeight: 400, lineHeight: 1.8, margin: "0 0 24px", textAlign: "right", width: "100%" }}>
              {truncate(dua.arabic_text, 150)}
            </p>

            {/* Transliteration */}
            <p style={{ color: "#a5b4fc", fontSize: 22, fontStyle: "italic", lineHeight: 1.5, margin: "0 0 36px", maxWidth: 880 }}>
              {truncate(dua.transliteration, 130)}
            </p>

            {/* Divider */}
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.05) 100%)", margin: "0 0 32px" }} />

            {/* Translation */}
            <p style={{ color: "#e0e7ff", fontSize: 30, lineHeight: 1.65, flex: 1, margin: "0 0 32px", maxWidth: 880 }}>
              {truncate(dua.translation, 220)}
            </p>

            {/* Source */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
              <span style={{ color: "#a5b4fc", fontSize: 20 }}>{formatDuaSource(dua)}</span>
            </div>

            {/* Footer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(99,102,241,0.2)", paddingTop: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, background: "#4f46e5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 22, fontWeight: 700 }}>D</div>
                <span style={{ color: "#ffffff", fontSize: 26, fontWeight: 700 }}>DuaVault</span>
              </div>
              <span style={{ color: "#3d4b7a", fontSize: 20 }}>duavault.com</span>
            </div>
          </div>
          </div>{/* end scale wrapper */}
        </div>

      </div>

      <p className="text-center text-stone-600 text-xs mt-12 pb-8">
        To screenshot at full 1080×1080: open DevTools → Device toolbar → set 1080×1080 → screenshot each card.
      </p>
    </div>
  );
}
