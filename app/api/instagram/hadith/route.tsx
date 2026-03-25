import { createCanvas, GlobalFonts, type SKRSContext2D } from "@napi-rs/canvas";
import path from "path";
import { HADITHS, getDailyHadith } from "@/data/hadiths";

export const runtime = "nodejs";

let fontsRegistered = false;
function ensureFonts() {
  if (fontsRegistered) return;
  const d = path.join(process.cwd(), "public", "fonts");
  GlobalFonts.registerFromPath(path.join(d, "Amiri-Regular.ttf"), "Amiri");
  GlobalFonts.registerFromPath(path.join(d, "Inter-Regular.ttf"), "Inter");
  GlobalFonts.registerFromPath(path.join(d, "Inter-Bold.ttf"), "Inter");
  GlobalFonts.registerFromPath(path.join(d, "PlayfairDisplay-Italic.ttf"), "Playfair");
  fontsRegistered = true;
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
    if (candidate.length > maxChars && current) { lines.push(current); current = word; }
    else current = candidate;
  }
  if (current) lines.push(current);
  return lines;
}

function splitArabicLines(text: string, fontSize: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const charWidth = fontSize * 0.58;
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length * charWidth > maxWidth && current) { lines.push(current); current = word; }
    else current = candidate;
  }
  if (current) lines.push(current);
  return lines;
}

function pickArabicStyle(text: string, maxWidth: number): { fontSize: number; lines: string[]; blockH: number } {
  for (const fs of [72, 64, 56, 48, 42, 36]) {
    let lines = splitArabicLines(text, fs, maxWidth);
    if (lines.length > 4) { lines = lines.slice(0, 4); lines[3] = lines[3].slice(0, -2) + "\u2026"; }
    const lineH = Math.round(fs * 1.5);
    const blockH = fs + (lines.length - 1) * lineH;
    if (blockH <= 380) return { fontSize: fs, lines, blockH };
  }
  const fs = 36;
  let lines = splitArabicLines(text, fs, maxWidth);
  if (lines.length > 4) { lines = lines.slice(0, 4); lines[3] = lines[3].slice(0, -2) + "\u2026"; }
  const lineH = Math.round(fs * 1.5);
  return { fontSize: fs, lines, blockH: fs + (lines.length - 1) * lineH };
}

function pickQuoteStyle(charCount: number): { fontSize: number; lineH: number; charsPerLine: number; blockH: number } {
  for (const fs of [22, 20, 18, 16]) {
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

function roundRect(ctx: SKRSContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const hadith = slug ? (HADITHS.find((h) => h.slug === slug) ?? getDailyHadith()) : getDailyHadith();

  ensureFonts();

  const arabic = hadith.arabic ?? "";
  const { fontSize: aFS, lines: arabicLines, blockH: arabicBlockH } = pickArabicStyle(arabic, 920);

  const quote = extractCoreQuote(hadith.translation);
  const { fontSize: qFS, lineH: qLH, charsPerLine, blockH: quoteBlockH } = pickQuoteStyle(quote.length);
  let quoteLines = splitLines(quote, charsPerLine);
  if (quoteLines.length > 5) { quoteLines = quoteLines.slice(0, 5); quoteLines[4] = quoteLines[4].slice(0, -1) + "\u2026"; }

  const narrator = `\u2014 ${hadith.narrator}`;
  const source = `${hadith.source_book} \u2022 #${hadith.hadith_number} \u2022 ${hadith.grade}`;

  // Layout
  const HEADER_BOTTOM = 120;
  const FOOTER_TOP = 984;
  const AVAILABLE = FOOTER_TOP - HEADER_BOTTOM;
  const ARABIC_H   = arabicBlockH + 48;
  const SEP_H      = 1 + 28;
  const OPEN_Q_H   = 48 + 10;
  const CLOSE_GAP  = 16;
  const DIV_H      = 2 + 24;
  const NARRATOR_H = 26 + 8;
  const SOURCE_H   = 20;
  const fixedH = ARABIC_H + SEP_H + OPEN_Q_H + CLOSE_GAP + DIV_H + NARRATOR_H + SOURCE_H;
  const totalH = fixedH + quoteBlockH;
  const startY = HEADER_BOTTOM + Math.max(16, Math.round((AVAILABLE - totalH) / 2));

  let y = startY;
  const arabicY     = y + arabicBlockH;
  y += ARABIC_H;
  const sepY        = y;
  y += SEP_H;
  const openQuoteY  = y + 48;
  const quoteStartY = y + OPEN_Q_H + qFS;
  y = quoteStartY + (quoteLines.length - 1) * qLH + CLOSE_GAP;
  const dividerY    = y;
  const narratorY   = y + DIV_H + 26;
  const sourceY     = narratorY + NARRATOR_H;

  // Draw
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext("2d");

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 540, 1080);
  bgGrad.addColorStop(0, "#021207");
  bgGrad.addColorStop(0.5, "#052e16");
  bgGrad.addColorStop(1, "#021a0c");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Accent gradient helper
  const accentGrad = ctx.createLinearGradient(0, 0, 1080, 0);
  accentGrad.addColorStop(0, "#059669");
  accentGrad.addColorStop(0.5, "#34d399");
  accentGrad.addColorStop(1, "#059669");

  // Top bar
  ctx.fillStyle = accentGrad;
  ctx.fillRect(0, 0, 1080, 6);

  // Header — DuaVault text
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.font = "bold 30px Inter";
  ctx.fillStyle = "#d1fae5";
  ctx.fillText("Dua", 126, 81);
  const duaW = ctx.measureText("Dua").width;
  ctx.fillStyle = "#34d399";
  ctx.fillText("Vault", 126 + duaW, 81);

  // Badge
  ctx.fillStyle = "rgba(52,211,153,0.12)";
  roundRect(ctx, 780, 54, 220, 36, 18);
  ctx.fill();
  ctx.strokeStyle = "rgba(52,211,153,0.25)";
  ctx.lineWidth = 1;
  roundRect(ctx, 780, 54, 220, 36, 18);
  ctx.stroke();
  ctx.font = "bold 17px Inter";
  ctx.fillStyle = "#6ee7b7";
  ctx.textAlign = "center";
  ctx.fillText("HADITH OF THE DAY", 890, 78);

  // Arabic text — large, white, RTL
  ctx.direction = "rtl";
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff";
  const aLH = Math.round(aFS * 1.5);
  const firstArabicLineY = arabicY - (arabicLines.length - 1) * aLH;
  for (let i = 0; i < arabicLines.length; i++) {
    ctx.font = `${aFS}px Amiri`;
    ctx.fillText(arabicLines[i], 540, firstArabicLineY + i * aLH);
  }

  // Separator
  ctx.direction = "ltr";
  ctx.strokeStyle = "rgba(52,211,153,0.35)";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(300, sepY); ctx.lineTo(780, sepY); ctx.stroke();

  // Decorative quote mark
  ctx.font = "italic 80px Playfair";
  ctx.fillStyle = "rgba(52,211,153,0.12)";
  ctx.textAlign = "center";
  ctx.fillText("\u201C", 540, openQuoteY);

  // English quote — small, muted italic
  ctx.fillStyle = "rgba(224,255,244,0.82)";
  for (let i = 0; i < quoteLines.length; i++) {
    ctx.font = `italic ${qFS}px Playfair`;
    ctx.fillText(quoteLines[i], 540, quoteStartY + i * qLH);
  }

  // Divider
  ctx.strokeStyle = "rgba(52,211,153,0.3)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(420, dividerY); ctx.lineTo(660, dividerY); ctx.stroke();

  // Narrator
  ctx.font = "bold 22px Inter";
  ctx.fillStyle = "#a7f3d0";
  ctx.textAlign = "center";
  ctx.fillText(narrator, 540, narratorY);

  // Source
  ctx.font = "18px Inter";
  ctx.fillStyle = "rgba(74,222,128,0.75)";
  ctx.fillText(source, 540, sourceY);

  // Footer line
  ctx.strokeStyle = "rgba(52,211,153,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, 984); ctx.lineTo(1080, 984); ctx.stroke();

  ctx.font = "20px Inter";
  ctx.fillStyle = "rgba(74,222,128,0.7)";
  ctx.textAlign = "left";
  ctx.fillText("duavault.com", 80, 1016);

  ctx.font = "18px Inter";
  ctx.fillStyle = "rgba(74,222,128,0.6)";
  ctx.textAlign = "right";
  ctx.fillText("#hadith #islam #islamicquotes", 1000, 1016);

  // Bottom bar
  ctx.fillStyle = accentGrad;
  ctx.fillRect(0, 1074, 1080, 6);

  const pngBuffer = await canvas.encode("png");

  return new Response(pngBuffer as unknown as BodyInit, {
    headers: { "Content-Type": "image/png", "Cache-Control": "no-store" },
  });
}
