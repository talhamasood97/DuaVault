import sharp from "sharp";
import { readFileSync } from "fs";
import path from "path";
import { HADITHS, getDailyHadith } from "@/data/hadiths";

// Cache base64 fonts at module load time
let interRegularB64: string | null = null;
let interBoldB64: string | null = null;
let playfairItalicB64: string | null = null;
let amiriB64: string | null = null;

function getFonts() {
  if (!interRegularB64) {
    const fontsDir = path.join(process.cwd(), "public", "fonts");
    interRegularB64 = readFileSync(path.join(fontsDir, "Inter-Regular.ttf")).toString("base64");
    interBoldB64 = readFileSync(path.join(fontsDir, "Inter-Bold.ttf")).toString("base64");
    playfairItalicB64 = readFileSync(path.join(fontsDir, "PlayfairDisplay-Italic.ttf")).toString("base64");
    amiriB64 = readFileSync(path.join(fontsDir, "Amiri-Regular.ttf")).toString("base64");
  }
  return { interRegularB64, interBoldB64, playfairItalicB64, amiriB64 };
}

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

/** Pick English quote font size. Max 22px, hard cap 5 lines — English is secondary to Arabic. */
function pickQuoteStyle(charCount: number): {
  fontSize: number; lineH: number; charsPerLine: number; blockH: number;
} {
  const sizes = [22, 20, 18, 16];
  for (const fs of sizes) {
    const cpl = Math.floor(880 / (fs * 0.54));
    const nLines = Math.min(Math.ceil(charCount / cpl), 5);
    const lineH = Math.round(fs * 1.55);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= 200) return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
  }
  const fs = 16;
  const cpl = Math.floor(880 / (fs * 0.54));
  const nLines = Math.min(Math.ceil(charCount / cpl), 5);
  const lineH = Math.round(fs * 1.55);
  return { fontSize: fs, lineH, charsPerLine: cpl, blockH: fs + (nLines - 1) * lineH };
}

/** Split Arabic text into lines by word, respecting max pixel width. */
function splitArabicLines(text: string, fontSize: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const charWidth = fontSize * 0.58;
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length * charWidth > maxWidth && current) {
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
 * Pick Arabic font size so text fits in ≤380px height.
 * Hard-caps at 4 lines — long hadiths get truncated with ellipsis so
 * the Arabic always renders large and dominant.
 */
function pickArabicStyle(text: string, maxWidth: number): { fontSize: number; lines: string[]; blockH: number } {
  for (const fs of [72, 64, 56, 48, 42, 36]) {
    let lines = splitArabicLines(text, fs, maxWidth);
    if (lines.length > 4) {
      lines = lines.slice(0, 4);
      lines[3] = lines[3].slice(0, -2) + "\u2026";
    }
    const lineH = Math.round(fs * 1.5);
    const blockH = fs + (lines.length - 1) * lineH;
    if (blockH <= 380) return { fontSize: fs, lines, blockH };
  }
  const fs = 36;
  let lines = splitArabicLines(text, fs, maxWidth);
  if (lines.length > 4) {
    lines = lines.slice(0, 4);
    lines[3] = lines[3].slice(0, -2) + "\u2026";
  }
  const lineH = Math.round(fs * 1.5);
  return { fontSize: fs, lines, blockH: fs + (lines.length - 1) * lineH };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const hadith = slug
    ? (HADITHS.find((h) => h.slug === slug) ?? getDailyHadith())
    : getDailyHadith();

  const arabic = escapeXml(hadith.arabic ?? "");
  const { fontSize: aFS, lines: arabicLines, blockH: arabicBlockH } = pickArabicStyle(arabic, 920);

  const quote = extractCoreQuote(hadith.translation);
  const { fontSize: qFS, lineH: qLH, charsPerLine, blockH: quoteBlockH } =
    pickQuoteStyle(quote.length);
  let quoteLines = splitLines(escapeXml(quote), charsPerLine);
  if (quoteLines.length > 5) {
    quoteLines = quoteLines.slice(0, 5);
    quoteLines[4] = quoteLines[4].slice(0, -1) + "\u2026";
  }

  const narrator = escapeXml(hadith.narrator);
  const source = escapeXml(
    `${hadith.source_book} \u2022 #${hadith.hadith_number} \u2022 ${hadith.grade}`
  );

  // Layout constants
  const HEADER_BOTTOM = 120;
  const FOOTER_TOP = 984;
  const AVAILABLE = FOOTER_TOP - HEADER_BOTTOM; // 864px

  // Fixed heights
  const ARABIC_H      = arabicBlockH + 48;  // arabic block + generous bottom gap
  const SEP_H         = 1 + 28;            // separator line + gap below
  const OPEN_QUOTE_H  = 48 + 10;           // decorative " + gap
  const CLOSE_GAP     = 16;
  const DIV_H         = 2 + 24;
  const NARRATOR_H    = 26 + 8;
  const SOURCE_H      = 20;

  const fixedH = ARABIC_H + SEP_H + OPEN_QUOTE_H + CLOSE_GAP + DIV_H + NARRATOR_H + SOURCE_H;

  // Transliteration always skipped for hadith
  const totalH = fixedH + quoteBlockH;
  const startY = HEADER_BOTTOM + Math.max(16, Math.round((AVAILABLE - totalH) / 2));

  // Y coordinates — top to bottom
  let y = startY;
  const arabicY   = y + arabicBlockH;     // baseline of last Arabic line
  y += ARABIC_H;
  const sepY      = y;
  y += SEP_H;
  const openQuoteY  = y + 48;
  const quoteStartY = y + OPEN_QUOTE_H + qFS;
  y = quoteStartY + (quoteLines.length - 1) * qLH + CLOSE_GAP;

  const dividerY  = y;
  const narratorY = y + DIV_H + 26;
  const sourceY   = narratorY + NARRATOR_H;

  const { interRegularB64, interBoldB64, playfairItalicB64, amiriB64 } = getFonts();

  const svg = `<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family: 'Inter'; font-weight: 400; src: url('data:font/truetype;base64,${interRegularB64}'); }
      @font-face { font-family: 'Inter'; font-weight: 700; src: url('data:font/truetype;base64,${interBoldB64}'); }
      @font-face { font-family: 'Playfair'; font-style: italic; src: url('data:font/truetype;base64,${playfairItalicB64}'); }
      @font-face { font-family: 'Amiri'; src: url('data:font/truetype;base64,${amiriB64}'); }
    </style>
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

  <!-- Header -->
  <g transform="translate(80,54) scale(1.333)">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="126" y="81" font-family="Inter" font-size="30" font-weight="700"><tspan fill="#d1fae5">Dua</tspan><tspan fill="#34d399">Vault</tspan></text>
  <rect x="780" y="54" width="220" height="36" rx="18" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.25)" stroke-width="1"/>
  <text x="890" y="78" font-family="Inter" font-size="17" font-weight="600" fill="#6ee7b7" text-anchor="middle" letter-spacing="1">HADITH OF THE DAY</text>

  <!-- Arabic text -->
  ${arabicLines.map((line, i) => {
    const aLH = Math.round(aFS * 1.5);
    const firstLineY = arabicY - (arabicLines.length - 1) * aLH;
    return `<text x="540" y="${firstLineY + i * aLH}" font-family="Amiri" font-size="${aFS}" fill="#ffffff" text-anchor="middle" direction="rtl">${line}</text>`;
  }).join("\n  ")}

  <!-- Separator -->
  <line x1="300" y1="${sepY}" x2="780" y2="${sepY}" stroke="rgba(52,211,153,0.35)" stroke-width="1.5"/>

  <!-- Decorative opening quotation mark -->
  <text x="540" y="${openQuoteY}" font-family="Playfair" font-size="80" fill="rgba(52,211,153,0.12)" text-anchor="middle">\u201C</text>

  <!-- English quote -->
  ${quoteLines
    .map(
      (line, i) =>
        `<text x="540" y="${quoteStartY + i * qLH}" font-family="Playfair" font-size="${qFS}" font-style="italic" fill="rgba(224,255,244,0.82)" text-anchor="middle">${line}</text>`
    )
    .join("\n  ")}

  <!-- Transliteration skipped for hadith -->

  <!-- Divider -->
  <line x1="420" y1="${dividerY}" x2="660" y2="${dividerY}" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>

  <!-- Narrator + source -->
  <text x="540" y="${narratorY}" font-family="Inter" font-size="22" font-weight="600" fill="#a7f3d0" text-anchor="middle">\u2014 ${narrator}</text>
  <text x="540" y="${sourceY}" font-family="Inter" font-size="18" fill="rgba(74,222,128,0.75)" text-anchor="middle">${source}</text>

  <line x1="0" y1="984" x2="1080" y2="984" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
  <text x="80" y="1016" font-family="Inter" font-size="20" fill="rgba(74,222,128,0.7)">duavault.com</text>
  <text x="1000" y="1016" font-family="Inter" font-size="18" fill="rgba(74,222,128,0.6)" text-anchor="end">#hadith #islam #islamicquotes</text>
  <rect y="1074" width="1080" height="6" fill="url(#accent)"/>
</svg>`;

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(pngBuffer as unknown as BodyInit, {
    headers: { "Content-Type": "image/png", "Cache-Control": "no-store" },
  });
}
