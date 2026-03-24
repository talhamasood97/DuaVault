import sharp from "sharp";
import { readFileSync } from "fs";
import path from "path";
import { DUAS, getDailyDua } from "@/data/duas";

export const runtime = "nodejs";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatSource(dua: { source_book: string; hadith_number?: string; authenticity_grade: string }): string {
  if (dua.authenticity_grade === "QURAN") {
    return dua.hadith_number ? `Quran ${dua.hadith_number}` : "Quran";
  }
  const grade = dua.authenticity_grade === "SAHIH" ? "Sahih" : "Hasan";
  return dua.hadith_number
    ? `${dua.source_book} \u2022 #${dua.hadith_number} \u2022 ${grade}`
    : `${dua.source_book} \u2022 ${grade}`;
}

function splitLines(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/**
 * Pick Arabic font size so the block fills the available Arabic zone without overflow.
 * Target: no more than 4 lines at full size, scale down if needed.
 */
function pickArabicStyle(charCount: number, maxBlockH: number): {
  fontSize: number; lineH: number; charsPerLine: number; blockH: number;
} {
  const sizes = [50, 44, 38, 32, 28, 24];
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.7)); // Arabic chars are wider
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.9);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= maxBlockH) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  const fs = 22;
  const cpl = Math.floor(900 / (fs * 0.7));
  const nLines = Math.ceil(charCount / cpl);
  const lineH = Math.round(fs * 1.9);
  return { fontSize: fs, lineH, charsPerLine: cpl, blockH: fs + (nLines - 1) * lineH };
}

/**
 * Pick translation font size so the block fills 50–80% of TARGET_TRANSL_H (320px).
 * Uses 1.8× leading. Tries largest font first.
 */
const TARGET_TRANSL_H = 320;
const MIN_TRANSL_H = 60;

function pickTranslStyle(charCount: number): {
  fontSize: number; lineH: number; charsPerLine: number; blockH: number;
} {
  const sizes = [30, 27, 24, 22, 20, 18, 16];
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.55));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.8);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH >= MIN_TRANSL_H && blockH <= TARGET_TRANSL_H) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.55));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.8);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= TARGET_TRANSL_H) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  const fs = 14;
  const cpl = Math.floor(900 / (fs * 0.55));
  const nLines = Math.ceil(charCount / cpl);
  const lineH = Math.round(fs * 1.8);
  return { fontSize: fs, lineH, charsPerLine: cpl, blockH: fs + (nLines - 1) * lineH };
}

let cachedFontB64: string | null = null;
function getFontB64(): string {
  if (!cachedFontB64) {
    cachedFontB64 = readFileSync(
      path.join(process.cwd(), "public/fonts/Amiri-Regular.ttf")
    ).toString("base64");
  }
  return cachedFontB64;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const dua = slug
    ? (DUAS.find((d) => d.slug === slug) ?? getDailyDua())
    : getDailyDua();

  const source = escapeXml(formatSource(dua));
  const title = escapeXml(dua.title.toUpperCase());

  // Layout constants
  const HEADER_BOTTOM = 120;
  const FOOTER_TOP = 984;
  const AVAILABLE = FOOTER_TOP - HEADER_BOTTOM; // 864px

  // Fixed heights
  const TITLE_H = 22 + 36;      // title text + gap below
  const DIV_H = 1 + 28;         // horizontal divider + gap below
  const SOURCE_H = 2 + 16 + 26; // source divider + gap + text
  const GAP_ARA_DIV = 28;
  const GAP_TRL_TR = 22;
  const GAP_TR_SRC = 24;

  // Arabic: mandatory, dynamic font
  const arabicMaxH = 280; // cap Arabic zone
  const { fontSize: arabicFS, lineH: arabicLineH, charsPerLine: arabicCPL, blockH: arabicBlockH } =
    pickArabicStyle(dua.arabic_text.length, arabicMaxH);
  const arabicLines = splitLines(dua.arabic_text, arabicCPL);

  // Translation: mandatory, dynamic font
  const { fontSize: translFS, lineH: translLineH, charsPerLine: translCPL, blockH: translBlockH } =
    pickTranslStyle(dua.translation.length);
  const translLines = splitLines(dua.translation, translCPL);

  // Transliteration: optional, fixed font 22px
  const translitRaw = dua.transliteration.length > 200
    ? dua.transliteration.slice(0, 200).trimEnd() + "\u2026"
    : dua.transliteration;
  const translitLines = splitLines(escapeXml(translitRaw), 60).slice(0, 2);
  const TRANSLIT_H = 22 + (translitLines.length - 1) * 36 + GAP_TRL_TR;

  const neededWithTranslit =
    TITLE_H + arabicBlockH + GAP_ARA_DIV + DIV_H + TRANSLIT_H + translBlockH + GAP_TR_SRC + SOURCE_H;
  const showTranslit = neededWithTranslit <= AVAILABLE - 40;

  const totalH = TITLE_H + arabicBlockH + GAP_ARA_DIV + DIV_H +
    (showTranslit ? TRANSLIT_H : 0) +
    translBlockH + GAP_TR_SRC + SOURCE_H;

  const startY = HEADER_BOTTOM + Math.max(16, Math.round((AVAILABLE - totalH) / 2));

  // Y coordinates
  let y = startY;
  const titleY = y + 22;
  y += TITLE_H;

  const arabicStartY = y + arabicFS;
  y += arabicBlockH + GAP_ARA_DIV;

  const div1Y = y;
  y += DIV_H;

  let translitStartY = 0;
  if (showTranslit) {
    translitStartY = y + 22;
    y += TRANSLIT_H;
  }

  const translStartY = y + translFS;
  y += translBlockH + GAP_TR_SRC;

  const sourceDivY = y;
  const sourceTextY = y + 2 + 16 + 22;

  const fontB64 = getFontB64();

  const svg = `<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'Amiri';
        src: url('data:font/truetype;base64,${fontB64}');
        font-weight: normal;
        font-style: normal;
      }
    </style>
    <linearGradient id="bg" x1="0" y1="0" x2="540" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="50%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="url(#bg)"/>

  <!-- Top accent bar -->
  <rect width="1080" height="6" fill="url(#accent)"/>

  <!-- BookOpen icon -->
  <g transform="translate(80,54) scale(1.333)">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="#818cf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="#818cf8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- "DuaVault" wordmark -->
  <text x="126" y="81" font-family="sans-serif" font-size="30" font-weight="700"><tspan fill="#e0e7ff">Dua</tspan><tspan fill="#818cf8">Vault</tspan></text>

  <!-- "DUA OF THE DAY" badge -->
  <rect x="808" y="54" width="192" height="36" rx="18" fill="rgba(129,140,248,0.12)" stroke="rgba(129,140,248,0.25)" stroke-width="1"/>
  <text x="904" y="78" font-family="sans-serif" font-size="17" font-weight="600" fill="#a5b4fc" text-anchor="middle" letter-spacing="1">DUA OF THE DAY</text>

  <!-- Title (centered) -->
  <text x="540" y="${titleY}" font-family="sans-serif" font-size="22" font-weight="600" fill="#a5b4fc" text-anchor="middle" letter-spacing="1.5">${title}</text>

  <!-- Decorative ornament line -->
  <line x1="300" y1="${titleY + 16}" x2="780" y2="${titleY + 16}" stroke="rgba(129,140,248,0.2)" stroke-width="1"/>

  <!-- Arabic text (right-aligned, Amiri — Pango handles RTL shaping) -->
  ${arabicLines
    .map(
      (line, i) =>
        `<text x="960" y="${arabicStartY + i * arabicLineH}" font-family="Amiri" font-size="${arabicFS}" fill="#c7d2fe" text-anchor="end">${escapeXml(line)}</text>`
    )
    .join("\n  ")}
  <!-- Left accent bar to balance right-aligned Arabic -->
  <line x1="120" y1="${arabicStartY - arabicFS + 6}" x2="120" y2="${arabicStartY + (arabicLines.length - 1) * arabicLineH + 10}" stroke="rgba(129,140,248,0.25)" stroke-width="2"/>

  <!-- Horizontal divider -->
  <line x1="120" y1="${div1Y}" x2="960" y2="${div1Y}" stroke="rgba(129,140,248,0.2)" stroke-width="1"/>

  ${showTranslit
    ? `<!-- Transliteration (centered italic) -->
  ${translitLines
    .map(
      (line, i) =>
        `<text x="540" y="${translitStartY + i * 36}" font-family="serif" font-size="22" font-style="italic" fill="#f8fafc" text-anchor="middle">${line}</text>`
    )
    .join("\n  ")}`
    : `<!-- Transliteration omitted (space constraint) -->`
  }

  <!-- Translation (centered, ${translFS}px, ${translLines.length} lines) -->
  ${translLines
    .map(
      (line, i) =>
        `<text x="540" y="${translStartY + i * translLineH}" font-family="sans-serif" font-size="${translFS}" fill="#94a3b8" text-anchor="middle">${escapeXml(line)}</text>`
    )
    .join("\n  ")}

  <!-- Source divider + text (centered) -->
  <rect x="510" y="${sourceDivY}" width="60" height="2" rx="1" fill="#818cf8"/>
  <text x="540" y="${sourceTextY}" font-family="sans-serif" font-size="19" fill="rgba(165,180,252,0.85)" text-anchor="middle">${source}</text>

  <!-- Bottom separator -->
  <line x1="0" y1="984" x2="1080" y2="984" stroke="rgba(129,140,248,0.15)" stroke-width="1"/>

  <!-- Footer -->
  <text x="80" y="1016" font-family="sans-serif" font-size="20" fill="rgba(129,140,248,0.7)">duavault.com</text>
  <text x="1000" y="1016" font-family="sans-serif" font-size="18" fill="rgba(129,140,248,0.6)" text-anchor="end">#dua #islam #islamicdua</text>

  <!-- Bottom accent bar -->
  <rect y="1074" width="1080" height="6" fill="url(#accent)"/>
</svg>`;

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(pngBuffer as unknown as BodyInit, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=3600" },
  });
}
