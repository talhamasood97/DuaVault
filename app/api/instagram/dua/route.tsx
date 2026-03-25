import { createCanvas, GlobalFonts, type SKRSContext2D } from "@napi-rs/canvas";
import path from "path";
import { DUAS, getDailyDua } from "@/data/duas";

export const runtime = "nodejs";

let fontsRegistered = false;
function ensureFonts() {
  if (fontsRegistered) return;
  const d = path.join(process.cwd(), "public", "fonts");
  GlobalFonts.registerFromPath(path.join(d, "Amiri-Regular.ttf"), "Amiri");
  fontsRegistered = true;
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
    if (candidate.length > maxChars && current) { lines.push(current); current = word; }
    else current = candidate;
  }
  if (current) lines.push(current);
  return lines;
}

function pickArabicStyle(charCount: number, maxBlockH: number): { fontSize: number; lineH: number; charsPerLine: number; blockH: number } {
  for (const fs of [50, 44, 38, 32, 28, 24]) {
    const cpl = Math.floor(900 / (fs * 0.7));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.9);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= maxBlockH) return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
  }
  const fs = 22;
  const cpl = Math.floor(900 / (fs * 0.7));
  const nLines = Math.ceil(charCount / cpl);
  const lineH = Math.round(fs * 1.9);
  return { fontSize: fs, lineH, charsPerLine: cpl, blockH: fs + (nLines - 1) * lineH };
}

const TARGET_TRANSL_H = 320;
const MIN_TRANSL_H = 60;

function pickTranslStyle(charCount: number): { fontSize: number; lineH: number; charsPerLine: number; blockH: number } {
  const sizes = [30, 27, 24, 22, 20, 18, 16];
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.55));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.8);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH >= MIN_TRANSL_H && blockH <= TARGET_TRANSL_H) return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
  }
  for (const fs of sizes) {
    const cpl = Math.floor(900 / (fs * 0.55));
    const nLines = Math.ceil(charCount / cpl);
    const lineH = Math.round(fs * 1.8);
    const blockH = fs + (nLines - 1) * lineH;
    if (blockH <= TARGET_TRANSL_H) return { fontSize: fs, lineH, charsPerLine: cpl, blockH };
  }
  const fs = 14;
  const cpl = Math.floor(900 / (fs * 0.55));
  const nLines = Math.ceil(charCount / cpl);
  const lineH = Math.round(fs * 1.8);
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
  const dua = slug ? (DUAS.find((d) => d.slug === slug) ?? getDailyDua()) : getDailyDua();

  ensureFonts();

  const source = formatSource(dua);
  const title = dua.title.toUpperCase();

  const HEADER_BOTTOM = 120;
  const FOOTER_TOP = 984;
  const AVAILABLE = FOOTER_TOP - HEADER_BOTTOM;
  const TITLE_H = 22 + 36;
  const DIV_H = 1 + 28;
  const SOURCE_H = 2 + 16 + 26;
  const GAP_ARA_DIV = 28;
  const GAP_TRL_TR = 22;
  const GAP_TR_SRC = 24;

  const arabicMaxH = 280;
  const { fontSize: arabicFS, lineH: arabicLineH, charsPerLine: arabicCPL, blockH: arabicBlockH } =
    pickArabicStyle(dua.arabic_text.length, arabicMaxH);
  const arabicLines = splitLines(dua.arabic_text, arabicCPL);

  const { fontSize: translFS, lineH: translLineH, charsPerLine: translCPL, blockH: translBlockH } =
    pickTranslStyle(dua.translation.length);
  const translLines = splitLines(dua.translation, translCPL);

  const translitRaw = dua.transliteration.length > 200
    ? dua.transliteration.slice(0, 200).trimEnd() + "\u2026"
    : dua.transliteration;
  const translitLines = splitLines(translitRaw, 60).slice(0, 2);
  const TRANSLIT_H = 22 + (translitLines.length - 1) * 36 + GAP_TRL_TR;

  const neededWithTranslit = TITLE_H + arabicBlockH + GAP_ARA_DIV + DIV_H + TRANSLIT_H + translBlockH + GAP_TR_SRC + SOURCE_H;
  const showTranslit = neededWithTranslit <= AVAILABLE - 40;

  const totalH = TITLE_H + arabicBlockH + GAP_ARA_DIV + DIV_H +
    (showTranslit ? TRANSLIT_H : 0) + translBlockH + GAP_TR_SRC + SOURCE_H;
  const startY = HEADER_BOTTOM + Math.max(16, Math.round((AVAILABLE - totalH) / 2));

  let y = startY;
  const titleY = y + 22; y += TITLE_H;
  const arabicStartY = y + arabicFS; y += arabicBlockH + GAP_ARA_DIV;
  const div1Y = y; y += DIV_H;
  let translitStartY = 0;
  if (showTranslit) { translitStartY = y + 22; y += TRANSLIT_H; }
  const translStartY = y + translFS; y += translBlockH + GAP_TR_SRC;
  const sourceDivY = y;
  const sourceTextY = y + 2 + 16 + 22;

  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext("2d");

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 540, 1080);
  bgGrad.addColorStop(0, "#020617");
  bgGrad.addColorStop(0.5, "#0f172a");
  bgGrad.addColorStop(1, "#020617");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Accent gradient
  const accentGrad = ctx.createLinearGradient(0, 0, 1080, 0);
  accentGrad.addColorStop(0, "#4f46e5");
  accentGrad.addColorStop(0.5, "#818cf8");
  accentGrad.addColorStop(1, "#4f46e5");

  // Top bar
  ctx.fillStyle = accentGrad;
  ctx.fillRect(0, 0, 1080, 6);

  // DuaVault wordmark
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.font = "bold 30px sans-serif";
  ctx.fillStyle = "#e0e7ff";
  ctx.fillText("Dua", 126, 81);
  const duaW = ctx.measureText("Dua").width;
  ctx.fillStyle = "#818cf8";
  ctx.fillText("Vault", 126 + duaW, 81);

  // Badge
  ctx.fillStyle = "rgba(129,140,248,0.12)";
  roundRect(ctx, 808, 54, 192, 36, 18);
  ctx.fill();
  ctx.strokeStyle = "rgba(129,140,248,0.25)";
  ctx.lineWidth = 1;
  roundRect(ctx, 808, 54, 192, 36, 18);
  ctx.stroke();
  ctx.font = "bold 17px sans-serif";
  ctx.fillStyle = "#a5b4fc";
  ctx.textAlign = "center";
  ctx.fillText("DUA OF THE DAY", 904, 78);

  // Title
  ctx.font = "bold 22px sans-serif";
  ctx.fillStyle = "#a5b4fc";
  ctx.textAlign = "center";
  ctx.fillText(title, 540, titleY);

  // Ornament line under title
  ctx.strokeStyle = "rgba(129,140,248,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(300, titleY + 16); ctx.lineTo(780, titleY + 16); ctx.stroke();

  // Arabic text — RTL
  ctx.direction = "rtl";
  ctx.textAlign = "center";
  ctx.fillStyle = "#c7d2fe";
  for (let i = 0; i < arabicLines.length; i++) {
    ctx.font = `${arabicFS}px Amiri`;
    ctx.fillText(arabicLines[i], 540, arabicStartY + i * arabicLineH);
  }

  // Divider
  ctx.direction = "ltr";
  ctx.strokeStyle = "rgba(129,140,248,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(120, div1Y); ctx.lineTo(960, div1Y); ctx.stroke();

  // Transliteration (optional)
  if (showTranslit) {
    ctx.font = "italic 22px sans-serif";
    ctx.fillStyle = "#f8fafc";
    ctx.textAlign = "center";
    for (let i = 0; i < translitLines.length; i++) {
      ctx.fillText(translitLines[i], 540, translitStartY + i * 36);
    }
  }

  // Translation
  ctx.font = `${translFS}px sans-serif`;
  ctx.fillStyle = "#94a3b8";
  ctx.textAlign = "center";
  for (let i = 0; i < translLines.length; i++) {
    ctx.fillText(translLines[i], 540, translStartY + i * translLineH);
  }

  // Source divider + text
  ctx.fillStyle = "#818cf8";
  ctx.fillRect(510, sourceDivY, 60, 2);
  ctx.font = "19px sans-serif";
  ctx.fillStyle = "rgba(165,180,252,0.85)";
  ctx.textAlign = "center";
  ctx.fillText(source, 540, sourceTextY);

  // Footer line
  ctx.strokeStyle = "rgba(129,140,248,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, 984); ctx.lineTo(1080, 984); ctx.stroke();

  ctx.font = "20px sans-serif";
  ctx.fillStyle = "rgba(129,140,248,0.7)";
  ctx.textAlign = "left";
  ctx.fillText("duavault.com", 80, 1016);

  ctx.font = "18px sans-serif";
  ctx.fillStyle = "rgba(129,140,248,0.6)";
  ctx.textAlign = "right";
  ctx.fillText("#dua #islam #islamicdua", 1000, 1016);

  // Bottom bar
  ctx.fillStyle = accentGrad;
  ctx.fillRect(0, 1074, 1080, 6);

  const pngBuffer = await canvas.encode("png");

  return new Response(pngBuffer as unknown as BodyInit, {
    headers: { "Content-Type": "image/png", "Cache-Control": "no-store" },
  });
}
