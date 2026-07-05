#!/usr/bin/env node
/* CI validation for the dashboard data layer.
   Fails (exit 1) on anything that would ship a broken or self-contradictory page:
     - a data/<x>.js that doesn't evaluate or lacks meta/layers/data
     - records missing required fields, or with out-of-range radar scores / prices
     - a record whose layer key isn't declared in the file's layers list
     - duplicate tickers WITHIN a file
     - the same ticker in DIFFERENT files with a different r.val (same equity,
       same valuation-attractiveness score — theses may legitimately differ per sector)
   Warns (exit 0) on cross-file price/mcap drift >3% (refresh timing skew, not an error). */
import { readFileSync, readdirSync } from "node:fs";

const R_KEYS = ["val", "growth", "roic", "moat", "fcf", "bs", "scal"];
const REQUIRED = ["tk", "nm", "bz", "layer", "price", "mcap", "thesis", "bull", "bear", "r", "m", "d"];

const errors = [], warnings = [];
const byTicker = {}; // tk -> [{file, val, price, mcap}]

const files = readdirSync("data").filter(f => f.endsWith(".js")).sort();
if (files.length === 0) { console.error("no data/*.js found"); process.exit(1); }

for (const f of files) {
  let cfg;
  try {
    const w = {};
    new Function("window", readFileSync(`data/${f}`, "utf8"))(w);
    cfg = w.CONFIG;
  } catch (e) {
    errors.push(`${f}: does not evaluate — ${e.message}`);
    continue;
  }
  if (!cfg?.meta?.title || !Array.isArray(cfg.layers) || !Array.isArray(cfg.data) || cfg.data.length === 0) {
    errors.push(`${f}: missing meta.title / layers / non-empty data`);
    continue;
  }
  const layerKeys = new Set(cfg.layers.map(l => l.k));
  const seen = new Set();
  for (const r of cfg.data) {
    const id = `${f}:${r.tk ?? "?"}`;
    for (const k of REQUIRED) if (r[k] === undefined || r[k] === null || r[k] === "")
      errors.push(`${id}: missing field "${k}"`);
    if (r.tk) { if (seen.has(r.tk)) errors.push(`${id}: duplicate ticker within file`); seen.add(r.tk); }
    if (typeof r.price === "number" && !(r.price > 0)) errors.push(`${id}: price ${r.price} not > 0`);
    if (typeof r.mcap === "number" && !(r.mcap > 0)) errors.push(`${id}: mcap ${r.mcap} not > 0`);
    if (r.layer && !layerKeys.has(r.layer)) errors.push(`${id}: layer "${r.layer}" not in layers list`);
    if (r.r) for (const k of R_KEYS) {
      const v = r.r[k];
      if (typeof v !== "number" || v < 0 || v > 10) errors.push(`${id}: r.${k}=${v} out of 0-10`);
    }
    if (r.r && (!Number.isInteger(r.r.val) || r.r.val < 1)) errors.push(`${id}: r.val=${r.r.val} must be integer 1-10`);
    if (r.tk) (byTicker[r.tk] ??= []).push({ file: f, val: r.r?.val, price: r.price, mcap: r.mcap });
  }
}

for (const [tk, xs] of Object.entries(byTicker)) {
  if (xs.length < 2) continue;
  if (new Set(xs.map(x => x.val)).size > 1)
    errors.push(`${tk}: r.val differs across files — ${xs.map(x => `${x.file}=${x.val}`).join(", ")}`);
  for (const key of ["price", "mcap"]) {
    const vs = xs.map(x => x[key]).filter(v => typeof v === "number");
    if (vs.length < 2) continue;
    const drift = (Math.max(...vs) - Math.min(...vs)) / Math.max(...vs);
    if (drift > 0.03)
      warnings.push(`${tk}: ${key} drifts ${(drift * 100).toFixed(1)}% across files — ${xs.map(x => `${x.file}=${x[key]}`).join(", ")}`);
  }
}

for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
console.log(`\n${files.length} files, ${Object.keys(byTicker).length} unique tickers — ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
