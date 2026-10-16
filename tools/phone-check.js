/**
 * Loads every page in the sitemap at phone size (375px) in headless Chrome and
 * reports pages that scroll sideways, have broken images or not exactly one <h1>.
 *
 *   npm run build && npx next start -p 3002 &
 *   node tools/phone-check.js http://localhost:3002            # all pages
 *   node tools/phone-check.js http://localhost:3002 --shots dark /duas-for/rain /   # screenshots
 *
 * Exits 1 if any page fails. Needs Google Chrome in /Applications (macOS).
 */
const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");
const WebSocket = require("ws");

const base = (process.argv[2] || "http://localhost:3002").replace(/\/$/, "");
const shotsIdx = process.argv.indexOf("--shots");
const mode = shotsIdx > 0 ? process.argv[shotsIdx + 1] : null; // "light" | "dark"
const onlyPaths = shotsIdx > 0 ? process.argv.slice(shotsIdx + 2) : [];
const outDir = path.join(os.tmpdir(), "duavault-phone-check");
fs.mkdirSync(outDir, { recursive: true });

const getText = (u) =>
  new Promise((res, rej) => (u.startsWith("https") ? require("https") : http).get(u, (r) => {
    let d = ""; r.on("data", (c) => (d += c)); r.on("end", () => res(d));
  }).on("error", rej));

(async () => {
  const urls = onlyPaths.length
    ? onlyPaths.map((p) => base + p)
    : [...(await getText(`${base}/sitemap.xml`)).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace("https://duavault.com", base));

  const port = 9333;
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${path.join(outDir, "profile")}`, "--no-first-run", "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
  let targets;
  for (let i = 0; i < 50 && !targets; i++) {
    try { targets = JSON.parse(await getText(`http://127.0.0.1:${port}/json`)); } catch { await new Promise((r) => setTimeout(r, 200)); }
  }
  const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl, { perMessageDeflate: false, maxPayload: 1 << 28 });
  await new Promise((r) => ws.on("open", r));
  let id = 0; const pending = {}; const events = [];
  ws.on("message", (m) => { const d = JSON.parse(m); if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; } else if (d.method) events.push(d.method); });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });

  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 375, height: 812, deviceScaleFactor: 2, mobile: true });
  await send("Emulation.setUserAgentOverride", { userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" });
  if (mode === "dark") await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "dark" }] });

  // The mobile layout viewport widens to fit overflowing content, so compare
  // scrollWidth with the device width (375), not with innerWidth.
  const CHECK = `JSON.stringify({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight,
    brokenImg: [...document.images].filter(i => i.complete && i.naturalWidth === 0).length,
    h1: document.querySelectorAll('h1').length,
    wide: [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > 376 && getComputedStyle(e).position !== 'fixed' && !e.closest('.overflow-x-auto,.overflow-hidden'); }).slice(0, 2).map(e => e.tagName + '.' + String(e.className).slice(0, 60)) })`;

  const bad = [];
  for (const [n, u] of urls.entries()) {
    const loaded = new Promise((r) => { const t = setInterval(() => { const i = events.indexOf("Page.loadEventFired"); if (i >= 0) { events.splice(i, 1); clearInterval(t); r(); } }, 50); setTimeout(() => { clearInterval(t); r(); }, 15000); });
    await send("Page.navigate", { url: u }); await loaded; await new Promise((r) => setTimeout(r, mode ? 1200 : 600));
    let v = null;
    for (let t = 0; t < 3 && !v; t++) {
      const r = await send("Runtime.evaluate", { expression: CHECK, returnByValue: true });
      try { v = JSON.parse(r.result.result.value); } catch { await new Promise((z) => setTimeout(z, 1500)); }
    }
    if (!v) { bad.push(`${u}  (could not read page)`); continue; }
    if (v.sw > 375 || v.brokenImg || v.h1 !== 1) bad.push(`${u}  width=${v.sw} brokenImages=${v.brokenImg} h1=${v.h1} ${v.wide.join(" ")}`);
    if (mode) {
      const s = await send("Page.captureScreenshot", { format: "jpeg", quality: 60, clip: { x: 0, y: 0, width: 375, height: Math.min(v.h, 2600), scale: 0.5 }, captureBeyondViewport: true });
      const f = path.join(outDir, `${mode}-${String(n + 1).padStart(2, "0")}.jpg`);
      fs.writeFileSync(f, Buffer.from(s.result.data, "base64"));
      console.log(`screenshot ${f}`);
    }
  }
  ws.close(); chrome.kill();
  console.log(`${urls.length} pages checked at 375px — ${bad.length} problem(s)`);
  bad.forEach((b) => console.log(`❌ ${b}`));
  process.exit(bad.length ? 1 : 0);
})();
