import sharp from "sharp";
import { HADITHS, getDailyHadith } from "@/data/hadiths";

export const runtime = "nodejs";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function extractCoreQuote(translation: string): string {
  const quoted = translation.match(/said[,:]?\s*["\u201C]([\s\S]+)["\u201D]$/);
  if (quoted) return quoted[1].trim();
  const colonIdx = translation.indexOf(": ");
  if (colonIdx > 0 && colonIdx < 80) return translation.slice(colonIdx + 2).trim();
  return translation;
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
 * Pick font size + leading that fits within MAX_QUOTE_H (560px).
 * Uses 1.55× leading — tight enough to look editorial, not double-spaced.
 */
const MAX_QUOTE_H = 560;
const MIN_QUOTE_H = 160;

function pickQuoteStyle(charCount: number): {
  fontSize: number;
  lineH: number;
  charsPerLine: number;
  blockH: number;
} {
  const sizes = [52, 46, 42, 38, 34, 30, 27, 24, 21, 18];
  // First pass: find one in target range [160, 560]
  for (const fs of sizes) {
    const cpl = Math.floor(880 / (fs * 0.54));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.55);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH >= MIN_QUOTE_H && blockH <= MAX_QUOTE_H) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  // Second pass: first that fits
  for (const fs of sizes) {
    const cpl = Math.floor(880 / (fs * 0.54));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.55);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= MAX_QUOTE_H) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  const fs = 16;
  const cpl = Math.floor(880 / (fs * 0.54));
  const nLines = Math.ceil(charCount / cpl);
  const lineH = Math.round(fs * 1.55);
  return { fontSize: fs, lineH, charsPerLine: cpl, blockH: fs + (nLines - 1) * lineH };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const hadith = slug
    ? (HADITHS.find((h) => h.slug === slug) ?? getDailyHadith())
    : getDailyHadith();

  const quote = extractCoreQuote(hadith.translation);
  const { fontSize: qFS, lineH: qLH, charsPerLine, blockH: quoteBlockH } =
    pickQuoteStyle(quote.length);
  const quoteLines = splitLines(escapeXml(quote), charsPerLine);

  const narrator = escapeXml(hadith.narrator);
  const source = escapeXml(
    `${hadith.source_book} \u2022 #${hadith.hadith_number} \u2022 ${hadith.grade}`
  );

  // Layout constants
  const HEADER_BOTTOM = 120;
  const FOOTER_TOP = 984;
  const AVAILABLE = FOOTER_TOP - HEADER_BOTTOM; // 864px

  // Fixed non-quote heights
  const OPEN_QUOTE_H  = 56 + 24;  // large opening " + gap below it
  const CLOSE_GAP     = 20;       // gap after last quote line
  const DIV_H         = 2 + 28;   // divider + gap
  const NARRATOR_H    = 26 + 8;   // narrator text + gap
  const SOURCE_H      = 20;       // source text

  // Transliteration (conditional)
  const translitRaw =
    hadith.transliteration.length > 180
      ? hadith.transliteration.slice(0, 180).trimEnd() + "\u2026"
      : hadith.transliteration;
  const translitLines = splitLines(escapeXml(translitRaw), 68).slice(0, 2);
  const TRANSLIT_H = 22 + (translitLines.length - 1) * 30 + 28;

  const fixedH = OPEN_QUOTE_H + CLOSE_GAP + DIV_H + NARRATOR_H + SOURCE_H;
  const neededWithTranslit = fixedH + quoteBlockH + TRANSLIT_H;
  const showTranslit = neededWithTranslit <= AVAILABLE - 40;

  const totalH = fixedH + quoteBlockH + (showTranslit ? TRANSLIT_H : 0);

  // Vertically center in content zone
  const startY = HEADER_BOTTOM + Math.max(20, Math.round((AVAILABLE - totalH) / 2));

  // Y coordinates
  let y = startY;
  const openQuoteY  = y + 56;          // decorative " baseline
  const quoteStartY = y + OPEN_QUOTE_H + qFS; // first line baseline
  y = quoteStartY + (quoteLines.length - 1) * qLH + CLOSE_GAP;

  let translitStartY = 0;
  if (showTranslit) {
    translitStartY = y + 22;
    y += TRANSLIT_H;
  }

  const dividerY  = y;
  const narratorY = y + DIV_H + 26;
  const sourceY   = narratorY + NARRATOR_H;

  const svg = `<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="540" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#021207"/>
      <stop offset="50%" stop-color="#052e16"/>
      <stop offset="100%" stop-color="#021a0c"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bg)"/>
  <rect width="1080" height="6" fill="url(#accent)"/>

  <!-- BookOpen icon -->
  <g transform="translate(80,54) scale(1.333)">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="126" y="81" font-family="sans-serif" font-size="30" font-weight="700"><tspan fill="#d1fae5">Dua</tspan><tspan fill="#34d399">Vault</tspan></text>
  <rect x="780" y="54" width="220" height="36" rx="18" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.25)" stroke-width="1"/>
  <text x="890" y="78" font-family="sans-serif" font-size="17" font-weight="600" fill="#6ee7b7" text-anchor="middle" letter-spacing="1">HADITH OF THE DAY</text>

  <!-- Decorative opening quotation mark (centered, large, subtle) -->
  <text x="540" y="${openQuoteY}" font-family="serif" font-size="120" fill="rgba(52,211,153,0.12)" text-anchor="middle">\u201C</text>

  <!-- Quote text (centered, ${qFS}px, ${quoteLines.length} lines) -->
  ${quoteLines
    .map(
      (line, i) =>
        `<text x="540" y="${quoteStartY + i * qLH}" font-family="serif" font-size="${qFS}" font-style="italic" fill="#f0fdf4" text-anchor="middle">${line}</text>`
    )
    .join("\n  ")}

  ${showTranslit
    ? `<!-- Transliteration (centered italic) -->
  ${translitLines
    .map(
      (line, i) =>
        `<text x="540" y="${translitStartY + i * 30}" font-family="sans-serif" font-size="20" font-style="italic" fill="rgba(110,231,183,0.75)" text-anchor="middle">${line}</text>`
    )
    .join("\n  ")}`
    : `<!-- Transliteration omitted (space constraint) -->`
  }

  <!-- Divider -->
  <line x1="420" y1="${dividerY}" x2="660" y2="${dividerY}" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>

  <!-- Narrator + source (centered) -->
  <text x="540" y="${narratorY}" font-family="sans-serif" font-size="22" font-weight="600" fill="#a7f3d0" text-anchor="middle">\u2014 ${narrator}</text>
  <text x="540" y="${sourceY}" font-family="sans-serif" font-size="18" fill="rgba(74,222,128,0.75)" text-anchor="middle">${source}</text>

  <line x1="0" y1="984" x2="1080" y2="984" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
  <text x="80" y="1016" font-family="sans-serif" font-size="20" fill="rgba(74,222,128,0.7)">duavault.com</text>
  <text x="1000" y="1016" font-family="sans-serif" font-size="18" fill="rgba(74,222,128,0.6)" text-anchor="end">#hadith #islam #islamicquotes</text>
  <rect y="1074" width="1080" height="6" fill="url(#accent)"/>
</svg>`;

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(pngBuffer as unknown as BodyInit, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=3600" },
  });
}
