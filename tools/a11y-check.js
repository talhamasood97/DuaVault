/**
 * Accessibility audit with axe-core on the main page types, light and dark.
 *   node tools/a11y-check.js http://localhost:3002
 * Downloads axe-core from cdnjs on first run (cached in the OS temp dir).
 * Exits 1 if any violation is found. Needs Google Chrome in /Applications.
 */
const { spawn } = require("child_process");
const fs = require("fs"), os = require("os"), path = require("path"), http = require("http"), https = require("https");
const WebSocket = require("ws");

const base = (process.argv[2] || "http://localhost:3002").replace(/\/$/, "");
const paths = ["/", "/duas/dua-before-sleeping", "/hadith/hadith-on-controlling-anger", "/duas-for/the-sick", "/duas-for",
  "/category/daily-life", "/emotion/sad", "/hadith", "/daily-dua", "/daily-hadith", "/search?q=sleep", "/saved", "/about"];
const dir = path.join(os.tmpdir(), "duavault-a11y"); fs.mkdirSync(dir, { recursive: true });
const axePath = path.join(dir, "axe-4.10.2.min.js");
const fetchText = (u) => new Promise((res, rej) => (u.startsWith("https") ? https : http).get(u, (r) => { let d = ""; r.on("data", (c) => (d += c)); r.on("end", () => res(d)); }).on("error", rej));

(async () => {
  if (!fs.existsSync(axePath)) fs.writeFileSync(axePath, await fetchText("https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js"));
  const axe = fs.readFileSync(axePath, "utf8");
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["--headless=new", "--remote-debugging-port=9334", `--user-data-dir=${path.join(dir, "profile")}`, "about:blank"], { stdio: "ignore" });
  let t; for (let i = 0; i < 50 && !t; i++) { try { t = JSON.parse(await fetchText("http://127.0.0.1:9334/json")); } catch { await new Promise((r) => setTimeout(r, 200)); } }
  const ws = new WebSocket(t.find((x) => x.type === "page").webSocketDebuggerUrl, { maxPayload: 1 << 28 });
  await new Promise((r) => ws.on("open", r));
  let id = 0; const pend = {}; ws.on("message", (m) => { const d = JSON.parse(m); if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; } });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send("Page.enable"); await send("Page.setBypassCSP", { enabled: true });
  let total = 0;
  for (const scheme of ["light", "dark"]) {
    await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: scheme }] });
    for (const p of paths) {
      await send("Page.navigate", { url: base + p }); await new Promise((r) => setTimeout(r, 2500));
      await send("Runtime.evaluate", { expression: axe });
      const r = await send("Runtime.evaluate", { expression: `axe.run(document,{resultTypes:['violations']}).then(r=>JSON.stringify(r.violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,ex:(v.nodes[0].html||'').slice(0,100)}))))`, awaitPromise: true, returnByValue: true });
      for (const v of JSON.parse(r.result.result.value)) { total++; console.log(`❌ [${scheme}] ${p} ${v.id} (${v.impact}, ${v.n}x) e.g. ${v.ex}`); }
    }
  }
  ws.close(); chrome.kill();
  console.log(`${paths.length} pages × light/dark — ${total} violation group(s)`);
  process.exit(total ? 1 : 0);
})();
