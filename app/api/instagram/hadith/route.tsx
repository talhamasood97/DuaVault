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
 * Pick font size + leading that fills 60–100% of TARGET_QUOTE_H (640px).
 * Uses generous 2.2× leading so text fills space elegantly.
 * Tries largest font first, returns first that lands in [MIN_H, TARGET_QUOTE_H].
 */
const TARGET_QUOTE_H = 640;
const MIN_QUOTE_H = 300;

function pickQuoteStyle(charCount: number): {
  fontSize: number;
  lineH: number;
  charsPerLine: number;
  blockH: number;
} {
  const sizes = [62, 56, 50, 46, 42, 38, 34, 30, 26, 22, 19, 17];
  // First pass: find one that lands in the target range
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.54));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 2.2);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH >= MIN_QUOTE_H && blockH <= TARGET_QUOTE_H) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  // Second pass: first that simply fits (blockH ≤ TARGET_QUOTE_H)
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.54));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 2.2);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= TARGET_QUOTE_H) {
      return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
    }
  }
  // Minimum fallback
  const fs = 15;
  const cpl = Math.floor(900 / (fs * 0.54));
  const nLines = Math.ceil(charCount / cpl);
  const lineH = Math.round(fs * 2.2);
  return { fontSize: fs, lineH, charsPerLine: cpl, blockH: fs + (nLines - 1) * lineH };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const hadith = slug
    ? (HADITHS.find((h) => h.slug === slug) ?? getDailyHadith())
    : getDailyHadith();

  // Full hadith — never truncated
  const quote = extractCoreQuote(hadith.translation);
  const { fontSize: qFS, lineH: qLH, charsPerLine, blockH: quoteBlockH } =
    pickQuoteStyle(quote.length);
  const quoteLines = splitLines(escapeXml(quote), charsPerLine);

  const narrator = escapeXml(hadith.narrator);
  const source = escapeXml(
    `${hadith.source_book} \u2022 #${hadith.hadith_number} \u2022 ${hadith.grade}`
  );

  // Layout constants
  const HEADER_BOTTOM = 120; // below DuaVault logo area
  const FOOTER_TOP = 984;
  const AVAILABLE = FOOTER_TOP - HEADER_BOTTOM; // 864px

  // Fixed non-quote heights
  const META_H = 2 + 22 + 28 + 10 + 22; // divider + gap + narrator + gap + source = 84
  const QMARK_GAP = 28;

  // Transliteration: include only if it fits without crowding
  const translitRaw =
    hadith.transliteration.length > 180
      ? hadith.transliteration.slice(0, 180).trimEnd() + "\u2026"
      : hadith.transliteration;
  const translitLines = splitLines(escapeXml(translitRaw), 70).slice(0, 2);
  const TRANSLIT_H = 20 + (translitLines.length - 1) * 27 + 36; // ~83px for 2 lines

  const neededWithTranslit = QMARK_GAP + quoteBlockH + 30 + TRANSLIT_H + META_H;
  const showTranslit = neededWithTranslit <= AVAILABLE - 40; // 40px min breathing room

  const totalH = QMARK_GAP + quoteBlockH + 30 + (showTranslit ? TRANSLIT_H : 0) + META_H;

  // Vertically center the whole block
  const startY = HEADER_BOTTOM + Math.max(16, Math.round((AVAILABLE - totalH) / 2));

  // Y coordinates
  let y = startY;
  const quoteMarkY = y + 60; // decorative quote mark baseline
  const quoteStartY = y + QMARK_GAP + qFS; // first quote line baseline
  y = quoteStartY + (quoteLines.length - 1) * qLH + 30;

  let translitStartY = 0;
  if (showTranslit) {
    translitStartY = y + 20;
    y = translitStartY + (translitLines.length - 1) * 27 + 36;
  } else {
    y += 10;
  }

  const dividerY = y;
  const narratorY = y + 22 + 28;
  const sourceY = narratorY + 34;

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

  <!-- Decorative quote mark -->
  <text x="68" y="${quoteMarkY}" font-family="serif" font-size="100" fill="rgba(52,211,153,0.10)">\u201C</text>

  <!-- Full hadith (${qFS}px, ${quoteLines.length} lines) -->
  ${quoteLines
    .map(
      (line, i) =>
        `<text x="80" y="${quoteStartY + i * qLH}" font-family="serif" font-size="${qFS}" font-style="italic" fill="#f0fdf4">${line}</text>`
    )
    .join("\n  ")}

  ${
    showTranslit
      ? `<!-- Transliteration -->
  ${translitLines
    .map(
      (line, i) =>
        `<text x="80" y="${translitStartY + i * 27}" font-family="sans-serif" font-size="20" font-style="italic" fill="rgba(110,231,183,0.8)">${line}</text>`
    )
    .join("\n  ")}`
      : `<!-- Transliteration omitted (space constraint) -->`
  }

  <rect x="80" y="${dividerY}" width="60" height="2" rx="1" fill="#34d399"/>
  <text x="80" y="${narratorY}" font-family="sans-serif" font-size="22" font-weight="600" fill="#a7f3d0">${narrator}</text>
  <text x="80" y="${sourceY}" font-family="sans-serif" font-size="19" fill="rgba(74,222,128,0.8)">${source}</text>

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
