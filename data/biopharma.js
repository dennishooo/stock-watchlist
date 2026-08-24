/* biopharma — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-08-24 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Obesity & Biopharma (GLP-1) — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · obesity & biopharma value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">obesity drug</span><br>value chain,<br><span class=\"tnum\">13</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the GLP-1 leaders and clinical-stage obesity challengers, through diversified big pharma, the life-science tools\n       and CDMOs that manufacture the drugs, out to the med-tech and devices benefiting from the metabolic-health wave. Graded on\n       returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"13\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 24 Aug 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, P/E, margins and revenue/guidance are from public market data and filings <b>as of\n      ~10 Jun 2026</b> and drift as prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Viking is a\n      <b>pre-revenue</b> clinical biotech: trailing P/E is n/m and it is graded on trial data and buyout optionality. Novo Nordisk and\n      Roche are US-listed ADRs (native DKK/CHF). For ABBV the GAAP P/E reads high on acquisition amortization - read it on ~14x fwd EPS.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, P/E, margins and revenue/guidance are from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Viking is pre-revenue (forward P/E n/m). Novo Nordisk and Roche are US-listed ADRs; AbbVie's GAAP P/E is inflated by acquisition amortization, so read forward EPS. Reverse-DCF uses a 10-year FCF-to-equity model.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A GLP-1 maker and a surgical-robotics firm can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. Headline ratios sourced ~10 Jun 2026; ROIC/FCF rows are estimates. Pre-revenue biotech shows n/m multiples; some pharma GAAP P/Es read high on amortization - cross-check the forward column.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a near-monopoly (GLP-1 incretins, surgical robotics) reads very differently from a contested field (diversified pharma, tools). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "glp1",
      "label": "GLP-1 leaders",
      "c": "#C0392B"
    },
    {
      "k": "challenger",
      "label": "Obesity challengers",
      "c": "#D35400"
    },
    {
      "k": "pharma",
      "label": "Diversified pharma",
      "c": "#1B6CA8"
    },
    {
      "k": "tools",
      "label": "Life-science tools",
      "c": "#1E8E6B"
    },
    {
      "k": "devices",
      "label": "Med-tech & devices",
      "c": "#8E5DA8"
    }
  ],
  "data": [
    {
      "tk": "LLY",
      "nm": "Eli Lilly",
      "bz": "GLP-1 leader (tirzepatide)",
      "color": "#D52B1E",
      "layer": "glp1",
      "share": {
        "pct": 50,
        "rank": "#1",
        "conf": "high",
        "market": "incretin / GLP-1 obesity & diabetes"
      },
      "price": 1255.4,
      "mcap": 1119.01,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The franchise of the decade — tirzepatide (Mounjaro/Zepbound) plus oral orforglipron and next-gen pipeline; Q1 26 revenue +56%, FY26 guide raised to $82-85B, ~82% gross margin. Trades ~30x fwd on ~22% EPS CAGR — premium but PEG ~1.4 with fortress returns (ROIC ~42%).",
      "bull": "Best-in-class incretin efficacy, oral optionality and deep pipeline; vast volume/pricing runway, ROIC &gt;40%.",
      "bear": "~30x fwd and net debt; manufacturing scale-up, oral competition and pricing risk.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 9,
        "moat": 10,
        "fcf": 8,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 42.2,
        "peFwd": 26.6,
        "pegFwd": 1.4,
        "evEbitda": 27.9,
        "evSales": 14.6,
        "pfcf": 55,
        "fcfYield": 1.2,
        "revCagrHist": 47.7,
        "epsCagrFwd": 22,
        "gross": 83.4,
        "op": 54.2,
        "net": 33.5,
        "roic": 42,
        "roe": 102.3,
        "fcfMargin": 22,
        "fcfConv": 80,
        "sbc": 2,
        "netDebtEbitda": 1.2,
        "intCov": 40
      },
      "d": {
        "revPS": 89.02,
        "netCashPS": -49,
        "fcfM": 0.15
      }
    },
    {
      "tk": "NVO",
      "nm": "Novo Nordisk",
      "bz": "GLP-1 co-leader (semaglutide)",
      "color": "#001965",
      "layer": "glp1",
      "share": {
        "pct": 45,
        "rank": "#2",
        "conf": "high",
        "market": "incretin / GLP-1 obesity & diabetes"
      },
      "price": 46.74,
      "mcap": 206.69,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Semaglutide's originator (Ozempic/Wegovy) — the value side of the GLP-1 duopoly. Q1 26 revenue +17% reaccelerating on the oral Wegovy launch and raised guidance; ROIC ~40%, ~83% gross margin. Trades ~13x fwd / EV-EBITDA ~8, cheap for the quality despite US share pressure.",
      "bull": "Entrenched franchise plus oral Wegovy/amycretin; growth reaccelerating, still cheap at ~13x fwd.",
      "bear": "US share erosion vs Lilly; pricing and compounding pressure; pipeline execution.",
      "r": {
        "val": 7,
        "growth": 6,
        "roic": 10,
        "moat": 9,
        "fcf": 9,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 11.4,
        "peFwd": 13.6,
        "pegFwd": 1,
        "evEbitda": 1.7,
        "evSales": 0.9,
        "pfcf": 15,
        "fcfYield": 4.8,
        "revCagrHist": 2.1,
        "epsCagrFwd": 8,
        "gross": 82.0,
        "op": 42.5,
        "net": 35.3,
        "roic": 40,
        "roe": 59.8,
        "fcfMargin": 25,
        "fcfConv": 85,
        "sbc": 1,
        "netDebtEbitda": 0.7,
        "intCov": 99
      },
      "d": {
        "revPS": 10,
        "netCashPS": -4.3,
        "fcfM": 0.18
      }
    },
    {
      "tk": "VKTX",
      "nm": "Viking Therapeutics",
      "bz": "Obesity biotech (VK2735)",
      "color": "#E8590C",
      "layer": "challenger",
      "share": {
        "pct": 5,
        "rank": "#5",
        "conf": "low",
        "market": "next-gen incretin obesity drugs"
      },
      "price": 33.89,
      "mcap": 3.95,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The premier clinical-stage obesity challenger — dual GLP-1/GIP VK2735 in injectable and oral forms. Phase 3 VANQUISH-1/2 fully enrolled; pre-revenue with ~$600M cash (runway into 2027). Valued on trial data and buyout optionality, not multiples; consensus PT well above spot.",
      "bull": "Competitive efficacy plus oral optionality; prime buyout candidate with ~$600M cash runway.",
      "bear": "No revenue; binary Phase 3 risk; eventual partner or raise needed to commercialize.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 1,
        "moat": 5,
        "fcf": 1,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 99,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 0,
        "epsCagrFwd": 90,
        "gross": 0,
        "op": 0,
        "net": 0,
        "roic": -30,
        "roe": -88.9,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 15,
        "netDebtEbitda": -0.5,
        "intCov": 1
      },
      "d": {
        "revPS": 0,
        "netCashPS": 5.2,
        "fcfM": -3
      }
    },
    {
      "tk": "AMGN",
      "nm": "Amgen",
      "bz": "Biotech + obesity (MariTide)",
      "color": "#0063C3",
      "layer": "challenger",
      "share": {
        "pct": 8,
        "rank": "#4",
        "conf": "medium",
        "market": "biologics + monthly incretin"
      },
      "price": 439.33,
      "mcap": 237.52,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A diversified biotech with a differentiated monthly obesity injectable (MariTide, Phase III readout early 2027) as call-option upside; FY26 guide revenue $37-38.4B and EPS $21.60-23.00, ~15.6x fwd. Cash-rich biologics base but heavy Horizon debt (ND/EBITDA ~2.8) caps the balance-sheet score.",
      "bull": "MariTide monthly-dosing optionality on a cash-generative biologics base; ~4% FCF yield.",
      "bear": "MariTide data risk; legacy maturation; heavy debt from Horizon, modest growth.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 8,
        "moat": 8,
        "fcf": 9,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 27.3,
        "peFwd": 18.0,
        "pegFwd": 2.2,
        "evEbitda": 16.3,
        "evSales": 7.4,
        "pfcf": 16,
        "fcfYield": 4.3,
        "revCagrHist": 9.5,
        "epsCagrFwd": 7,
        "gross": 71.9,
        "op": 35.5,
        "net": 23.0,
        "roic": 18,
        "roe": 91.5,
        "fcfMargin": 30,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 2.8,
        "intCov": 9
      },
      "d": {
        "revPS": 70.68,
        "netCashPS": -85,
        "fcfM": 0.22
      }
    },
    {
      "tk": "HIMS",
      "nm": "Hims & Hers",
      "bz": "Telehealth + GLP-1 distribution",
      "color": "#0F7C5A",
      "layer": "challenger",
      "share": {
        "pct": 10,
        "rank": "#3",
        "conf": "low",
        "market": "D2C telehealth & weight-loss"
      },
      "price": 33.78,
      "mcap": 7.88,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The consumer front-end of the obesity wave — telehealth subscriptions distributing weight-loss and other therapies. After exiting compounded GLP-1, Q1 26 revenue grew only ~4% YoY with a $92M loss as it pivots to branded (Novo partnership); FY26 guide raised to 19-28%. High multiple on a now-volatile growth story.",
      "bull": "Reaccelerating guidance, branded-GLP-1 attach via Novo deal; high-margin consumer platform.",
      "bear": "Growth slammed to +4% post-compounding exit; regulatory and access dependence; thin margins.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 6,
        "moat": 4,
        "fcf": 7,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 30.3,
        "pegFwd": 0.7,
        "evEbitda": 81.7,
        "evSales": 3.3,
        "pfcf": 45,
        "fcfYield": 2,
        "revCagrHist": 38.2,
        "epsCagrFwd": 40,
        "gross": 69.5,
        "op": -12.8,
        "net": -5.5,
        "roic": 12,
        "roe": -32.0,
        "fcfMargin": 8,
        "fcfConv": 90,
        "sbc": 6,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 11.29,
        "netCashPS": -1.1,
        "fcfM": 0.08
      }
    },
    {
      "tk": "PFE",
      "nm": "Pfizer",
      "bz": "Diversified pharma + oral obesity",
      "color": "#0093D0",
      "layer": "pharma",
      "share": {
        "pct": 6,
        "rank": "#5",
        "conf": "medium",
        "market": "diversified branded pharmaceuticals"
      },
      "price": 28.07,
      "mcap": 159.99,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Deep-value big pharma — ~9x fwd P/E and a high yield, with oncology (Seagen) and an oral-obesity lottery ticket. FY26 guide revenue $59.5-62.5B and adj EPS $2.80-3.00, roughly flat growth. Cheap, but 2028+ patent cliffs and an unproven pipeline cap quality (ROIC ~7%).",
      "bull": "Cheap, high-yield, with oncology pipeline and oral-obesity optionality; ~6.6% FCF yield.",
      "bear": "2028+ patent cliffs; pipeline must replace COVID revenue; flat growth, low ROIC.",
      "r": {
        "val": 8,
        "growth": 3,
        "roic": 6,
        "moat": 6,
        "fcf": 7,
        "bs": 5,
        "scal": 5
      },
      "m": {
        "peTTM": 36.9,
        "peFwd": 9.7,
        "pegFwd": 1.5,
        "evEbitda": 8.4,
        "evSales": 3.3,
        "pfcf": 11,
        "fcfYield": 6.6,
        "revCagrHist": 2.6,
        "epsCagrFwd": 6,
        "gross": 74.7,
        "op": 27.9,
        "net": 6.8,
        "roic": 7,
        "roe": 5.0,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 2.1,
        "intCov": 9
      },
      "d": {
        "revPS": 11.19,
        "netCashPS": -9.1,
        "fcfM": 0.15
      }
    },
    {
      "tk": "MRK",
      "nm": "Merck",
      "bz": "Pharma (Keytruda) + cardio-metabolic",
      "color": "#00857C",
      "layer": "pharma",
      "share": {
        "pct": 10,
        "rank": "#3",
        "conf": "high",
        "market": "oncology + diversified pharma"
      },
      "price": 152.55,
      "mcap": 376.37,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Keytruda's cash engine funding a pipeline pivot ahead of the 2028 patent cliff; subcutaneous reformulation extends the franchise. ~18x fwd / EV-EBITDA ~11 with ~21% ROIC and ~5% FCF yield; the spread between trailing (~31x) and forward reflects discounted post-LOE earnings.",
      "bull": "Keytruda cash flow plus broad pipeline; subcutaneous reformulation extends the franchise.",
      "bear": "Keytruda concentration into 2028 LOE; pipeline must deliver; growth modest near-term.",
      "r": {
        "val": 7,
        "growth": 5,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 122.0,
        "peFwd": 16.0,
        "pegFwd": 1.6,
        "evEbitda": 14.7,
        "evSales": 6.4,
        "pfcf": 14,
        "fcfYield": 5,
        "revCagrHist": 5.1,
        "epsCagrFwd": 9,
        "gross": 75.9,
        "op": -0.2,
        "net": 4.8,
        "roic": 21,
        "roe": 7.0,
        "fcfMargin": 25,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 1.5,
        "intCov": 30
      },
      "d": {
        "revPS": 26.85,
        "netCashPS": -17,
        "fcfM": 0.21
      }
    },
    {
      "tk": "ABBV",
      "nm": "AbbVie",
      "bz": "Immunology + diversified pharma",
      "color": "#071D49",
      "layer": "pharma",
      "share": {
        "pct": 12,
        "rank": "#2",
        "conf": "high",
        "market": "immunology biologics"
      },
      "price": 264.96,
      "mcap": 468.22,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Past the Humira cliff with Skyrizi/Rinvoq growing strongly; Q1 26 revenue +12% to ~$15B, FY26 adj EPS guide raised to $14.08-14.28 (~15x fwd). Strong FCF (~34% margin) and dividend, ~13% EPS CAGR; heavy leverage (ND/EBITDA ~2.4) is the main caveat.",
      "bull": "Skyrizi/Rinvoq durable double-digit growth replacing Humira; strong FCF and dividend.",
      "bear": "Large debt load (GAAP P/E inflated by amortization); pipeline must keep filling.",
      "r": {
        "val": 6,
        "growth": 7,
        "roic": 7,
        "moat": 8,
        "fcf": 9,
        "bs": 4,
        "scal": 6
      },
      "m": {
        "peTTM": 74.6,
        "peFwd": 16.3,
        "pegFwd": 1.1,
        "evEbitda": 17.3,
        "evSales": 8.3,
        "pfcf": 17,
        "fcfYield": 5.9,
        "revCagrHist": 10.2,
        "epsCagrFwd": 13,
        "gross": 72.8,
        "op": 40.0,
        "net": 9.8,
        "roic": 14,
        "roe": 80,
        "fcfMargin": 30,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 2.4,
        "intCov": 9
      },
      "d": {
        "revPS": 36.39,
        "netCashPS": -36,
        "fcfM": 0.34
      }
    },
    {
      "tk": "RHHBY",
      "nm": "Roche",
      "bz": "Pharma + diagnostics (CH)",
      "color": "#0066CC",
      "layer": "pharma",
      "share": {
        "pct": 11,
        "rank": "#2",
        "conf": "medium",
        "market": "oncology + diagnostics"
      },
      "price": 58.1,
      "mcap": 370.34,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The world's leading oncology and diagnostics franchise (US-listed ADR, CHF underlying). FY25 sales +7% CER and core EPS +11% CER; ~17.6x fwd / EV-EBITDA ~13, a steady dividend-rich compounder. Biosimilar erosion and FX translation temper the case but the pipeline is delivering.",
      "bull": "Oncology plus diagnostics leadership; durable cash generation and dividend; FY25 core EPS +11% CER.",
      "bear": "Biosimilar erosion; pipeline dependence; CHF translation; full-ish multiple.",
      "r": {
        "val": 6,
        "growth": 5,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 24.2,
        "peFwd": 17.2,
        "pegFwd": 2.2,
        "evEbitda": 16.6,
        "evSales": 6.3,
        "pfcf": 18,
        "fcfYield": 4.8,
        "revCagrHist": -1.2,
        "epsCagrFwd": 8,
        "gross": 74.2,
        "op": 36.2,
        "net": 19.6,
        "roic": 15,
        "roe": 38.1,
        "fcfMargin": 22,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 1,
        "intCov": 30
      },
      "d": {
        "revPS": 21,
        "netCashPS": -3.5,
        "fcfM": 0.2
      }
    },
    {
      "tk": "TMO",
      "nm": "Thermo Fisher",
      "bz": "Life-science tools & CDMO",
      "color": "#E1251B",
      "layer": "tools",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "life-science tools + bioprocessing"
      },
      "price": 629.27,
      "mcap": 232.67,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The picks-and-shovels giant of biopharma — instruments, bioprocessing and CDMO. Q1 26 beat, FY26 EPS guide raised to $24.64-25.12 on 6-8% reported growth; ~18.6x fwd. Stock down ~17% over six months. Recovery underway but EV/EBITDA ~19 and elevated leverage (ND/EBITDA ~3.5) keep it fair, not cheap.",
      "bull": "Scaled tools plus CDMO levered to obesity-drug manufacturing; guidance raised, recovery underway.",
      "bear": "Cyclical bioprocessing recovery; China and academic-funding exposure; ND/EBITDA ~3.5.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 7,
        "moat": 9,
        "fcf": 8,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 33.9,
        "peFwd": 22.9,
        "pegFwd": 2.1,
        "evEbitda": 23.1,
        "evSales": 5.9,
        "pfcf": 26,
        "fcfYield": 3.9,
        "revCagrHist": 10.5,
        "epsCagrFwd": 9,
        "gross": 41.0,
        "op": 18.8,
        "net": 15.0,
        "roic": 9,
        "roe": 13.5,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 3.5,
        "intCov": 15
      },
      "d": {
        "revPS": 123.89,
        "netCashPS": -107,
        "fcfM": 0.14
      }
    },
    {
      "tk": "DHR",
      "nm": "Danaher",
      "bz": "Bioprocessing & diagnostics tools",
      "color": "#0067B1",
      "layer": "tools",
      "share": {
        "pct": 18,
        "rank": "#2",
        "conf": "high",
        "market": "bioprocessing + diagnostics tools"
      },
      "price": 218.85,
      "mcap": 153.85,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A premium tools compounder centered on high-margin bioprocessing consumables. Q1 26 revenue $5.95B missed with only ~0.5% core organic growth; stock down ~24% YTD. Still ~24x fwd / EV-EBITDA ~20 with PEG ~2.8 — quality franchise, but the multiple prices a recovery not yet visible.",
      "bull": "High-margin recurring bioprocessing consumables; disciplined capital allocation; ~4% FCF yield.",
      "bear": "Bioprocessing normalization stalled (Q1 +0.5% organic); China; full multiple at ~24x fwd.",
      "r": {
        "val": 4,
        "growth": 6,
        "roic": 7,
        "moat": 9,
        "fcf": 8,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 39.1,
        "peFwd": 23.5,
        "pegFwd": 2.8,
        "evEbitda": 22.1,
        "evSales": 7.1,
        "pfcf": 30,
        "fcfYield": 4,
        "revCagrHist": 5.5,
        "epsCagrFwd": 8,
        "gross": 58.8,
        "op": 19.8,
        "net": 15.9,
        "roic": 7,
        "roe": 7.6,
        "fcfMargin": 20,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 1.9,
        "intCov": 20
      },
      "d": {
        "revPS": 35.47,
        "netCashPS": -21.5,
        "fcfM": 0.24
      }
    },
    {
      "tk": "ISRG",
      "nm": "Intuitive Surgical",
      "bz": "Robotic surgery (da Vinci)",
      "color": "#7A2E8E",
      "layer": "devices",
      "share": {
        "pct": 80,
        "rank": "#1",
        "conf": "high",
        "market": "soft-tissue surgical robotics"
      },
      "price": 378.81,
      "mcap": 135.72,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The robotic-surgery near-monopoly — da Vinci 5 install base compounding. Q1 26 revenue +23% to $2.77B, procedures up ~16%, Ion +39%; fortress ~$8B net cash. Exceptional franchise but ~46x fwd / EV-Sales ~16 leaves little margin of safety against capital-equipment cyclicality and eventual competition.",
      "bull": "~80% share plus recurring instrument/service revenue; ~68% gross margin, net cash, +23% growth.",
      "bear": "~46x fwd P/E; capital-equipment cyclicality; eventual competition; thin FCF yield.",
      "r": {
        "val": 2,
        "growth": 8,
        "roic": 9,
        "moat": 10,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 43.5,
        "peFwd": 31.4,
        "pegFwd": 2.6,
        "evEbitda": 30.8,
        "evSales": 11.7,
        "pfcf": 55,
        "fcfYield": 1.6,
        "revCagrHist": 18.5,
        "epsCagrFwd": 18,
        "gross": 66.7,
        "op": 33.6,
        "net": 28.4,
        "roic": 18,
        "roe": 17.4,
        "fcfMargin": 28,
        "fcfConv": 90,
        "sbc": 4,
        "netDebtEbitda": -3,
        "intCov": 999
      },
      "d": {
        "revPS": 31.07,
        "netCashPS": 22.5,
        "fcfM": 0.28
      }
    },
    {
      "tk": "DXCM",
      "nm": "Dexcom",
      "bz": "Continuous glucose monitoring",
      "color": "#9C4DCC",
      "layer": "devices",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "high",
        "market": "continuous glucose monitors"
      },
      "price": 92.34,
      "mcap": 34.85,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A CGM leader riding metabolic-health awareness (GLP-1 co-use and the OTC Stelo launch). Q1 26 revenue +15% to $1.19B with operating margin expanding ~850bps to 21.4% and EPS up 75%. ~25x fwd / EV-Sales ~5 with ~20% EPS CAGR (PEG ~1.2) — reasonable for the growth but not cheap given Abbott competition.",
      "bull": "CGM secular growth plus OTC Stelo expansion; margins inflecting, EPS +75% in Q1.",
      "bear": "GLP-1 net impact on diabetes volumes debated; Abbott competition; ~25x fwd.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 7,
        "moat": 7,
        "fcf": 7,
        "bs": 7,
        "scal": 8
      },
      "m": {
        "peTTM": 36.5,
        "peFwd": 29.6,
        "pegFwd": 1.2,
        "evEbitda": 24.4,
        "evSales": 6.9,
        "pfcf": 35,
        "fcfYield": 4.4,
        "revCagrHist": 13.1,
        "epsCagrFwd": 20,
        "gross": 62.5,
        "op": 24.3,
        "net": 20.1,
        "roic": 14,
        "roe": 38.5,
        "fcfMargin": 18,
        "fcfConv": 95,
        "sbc": 5,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 12.87,
        "netCashPS": 1.6,
        "fcfM": 0.18
      }
    }
  ]
};
