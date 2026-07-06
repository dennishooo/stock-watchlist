/* robotics — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-07-06 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Robotics & Automation — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · robotics & automation value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">robotics</span><br>value chain,<br><span class=\"tnum\">13</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From humanoid and physical-AI bets, through industrial robots and factory automation, the motion components and machine\n       vision that make them work, out to AI-driven warehouse automation. The reshoring-and-physical-AI theme, graded on returns vs.\n       cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"13\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"3\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 6 Jul 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, P/E and revenue/growth are from public market data and filings <b>as of ~10 Jun 2026</b>\n      and drift as prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Tesla and Serve are <b>physical-AI options</b>\n      priced far above current fundamentals (n/m forward earnings). Fanuc and Yaskawa show price in JPY, ABB in CHF; market caps are\n      normalized to USD billions. ABB is spinning its robotics unit off to SoftBank.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, P/E and revenue/growth are from public market data and SEC/exchange filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Tesla and Serve are valued on physical-AI optionality, not current earnings. Fanuc/Yaskawa price in JPY, ABB in CHF, Siemens via US ADR; market caps normalized to USD billions. Reverse-DCF uses a 10-year FCF-to-equity model.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A humanoid-robot bet and a machine-vision leader can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. Headline ratios sourced ~10 Jun 2026; ROIC/FCF rows are estimates. The physical-AI names (Tesla, Serve, Symbotic) carry huge multiples or n/m earnings - read them on growth and backlog, not current returns.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a leader (CNC/robots, machine vision) reads differently from a contested field (factory automation, motion). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "humanoid",
      "label": "Humanoid / physical AI",
      "c": "#C0392B"
    },
    {
      "k": "industrial",
      "label": "Industrial robots",
      "c": "#D35400"
    },
    {
      "k": "automation",
      "label": "Factory automation",
      "c": "#1B6CA8"
    },
    {
      "k": "motion",
      "label": "Motion & components",
      "c": "#1E8E6B"
    },
    {
      "k": "vision",
      "label": "Machine vision",
      "c": "#8E5DA8"
    },
    {
      "k": "logistics",
      "label": "Warehouse automation",
      "c": "#C9742B"
    }
  ],
  "data": [
    {
      "tk": "TSLA",
      "nm": "Tesla",
      "bz": "EVs + Optimus humanoid",
      "color": "#CC0000",
      "layer": "humanoid",
      "share": {
        "pct": 15,
        "rank": "#1",
        "conf": "low",
        "market": "humanoid robots (pre-commercial)"
      },
      "price": 393.45,
      "mcap": 1477.69,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The market's favorite physical-AI call option — Optimus and FSD carry a ~317x trailing P/E untethered from the current auto business (2025 revenue $94.8B).",
      "bull": "Optimus + FSD optionality at scale; manufacturing and data advantages.",
      "bear": "Auto margins compressed; robot timeline and valuation are speculative.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 5,
        "moat": 7,
        "fcf": 6,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 357.7,
        "peFwd": 154.5,
        "pegFwd": 7,
        "evEbitda": 130.7,
        "evSales": 14.8,
        "pfcf": 90,
        "fcfYield": 1,
        "revCagrHist": 15.8,
        "epsCagrFwd": 25,
        "gross": 19.1,
        "op": 4.2,
        "net": 3.9,
        "roic": 8,
        "roe": 4.9,
        "fcfMargin": 8,
        "fcfConv": 70,
        "sbc": 4,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 30.31,
        "netCashPS": 10,
        "fcfM": 0.05
      }
    },
    {
      "tk": "SERV",
      "nm": "Serve Robotics",
      "bz": "Autonomous delivery robots",
      "color": "#E8590C",
      "layer": "humanoid",
      "share": {
        "pct": 20,
        "rank": "#2",
        "conf": "low",
        "market": "autonomous sidewalk delivery"
      },
      "price": 6.31,
      "mcap": 0.54,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A pure-play on autonomous last-mile delivery robots — Q1 26 revenue +578% (to ~$3M) but only ~$26M guided for the full year; early-stage and cash-burning.",
      "bull": "First-mover sidewalk-delivery fleet + Nvidia/Uber backing; Diligent buy.",
      "bear": "Tiny revenue, heavy losses; unproven unit economics at scale.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 4,
        "fcf": 1,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 58.8,
        "pfcf": 99,
        "fcfYield": -2,
        "revCagrHist": 80,
        "epsCagrFwd": 90,
        "gross": 0,
        "op": -99,
        "net": 0,
        "roic": -30,
        "roe": -52,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 15,
        "netDebtEbitda": -2,
        "intCov": 1
      },
      "d": {
        "revPS": 0.08,
        "netCashPS": 2,
        "fcfM": -3
      }
    },
    {
      "tk": "ABB",
      "nm": "ABB Ltd",
      "bz": "Industrial robots + electrification",
      "color": "#FF000F",
      "layer": "industrial",
      "share": {
        "pct": 15,
        "rank": "#2",
        "conf": "high",
        "market": "industrial robotics + electrification"
      },
      "price": 85.34,
      "mcap": 192.31,
      "cur": "CHF",
      "mcapUSD": true,
      "thesis": "A robotics-and-electrification major (spinning its robotics division off to SoftBank) levered to factory automation and data-center power; 2025 revenue $33.2B (+9%), ~38x P/E.",
      "bull": "#2 industrial robotics + electrification scale; high returns, cash-rich.",
      "bear": "Cyclical short-cycle demand; spin-off execution; European exposure.",
      "r": {
        "val": 4,
        "growth": 7,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 8,
        "scal": 7
      },
      "m": {
        "peTTM": 39.7,
        "peFwd": 30.7,
        "pegFwd": 2,
        "evEbitda": 23.2,
        "evSales": 4.7,
        "pfcf": 30,
        "fcfYield": 3,
        "revCagrHist": 18.3,
        "epsCagrFwd": 12,
        "gross": 40.4,
        "op": 20.6,
        "net": 14.3,
        "roic": 18,
        "roe": 33.6,
        "fcfMargin": 14,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 0.3,
        "intCov": 30
      },
      "d": {
        "revPS": 18.5,
        "netCashPS": -2,
        "fcfM": 0.14
      }
    },
    {
      "tk": "6954",
      "nm": "Fanuc",
      "bz": "CNC + industrial robots",
      "color": "#FFD400",
      "layer": "industrial",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "factory automation (CNC + robots)"
      },
      "price": 7477.0,
      "mcap": 43.02,
      "cur": "¥",
      "mcapUSD": true,
      "thesis": "The Japanese automation bellwether — CNC controls and robots with a fortress net-cash balance sheet; FY26 revenue ¥858B (+7.6%), geared to a capex recovery.",
      "bull": "Dominant CNC/robot franchise; huge net cash and through-cycle margins.",
      "bear": "China/short-cycle weakness; mature growth; yen sensitivity.",
      "r": {
        "val": 5,
        "growth": 5,
        "roic": 7,
        "moat": 9,
        "fcf": 8,
        "bs": 10,
        "scal": 6
      },
      "m": {
        "peTTM": 41.9,
        "peFwd": 43.2,
        "pegFwd": 4,
        "evEbitda": 26.8,
        "evSales": 7.2,
        "pfcf": 28,
        "fcfYield": 3,
        "revCagrHist": 10.6,
        "epsCagrFwd": 9,
        "gross": 38.3,
        "op": 23.9,
        "net": 19.4,
        "roic": 12,
        "roe": 9.4,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": -3,
        "intCov": 999
      },
      "d": {
        "revPS": 912,
        "netCashPS": 3000,
        "fcfM": 0.18
      }
    },
    {
      "tk": "6506",
      "nm": "Yaskawa Electric",
      "bz": "Robots + motion (servo/drives)",
      "color": "#1B5E9C",
      "layer": "industrial",
      "share": {
        "pct": 12,
        "rank": "#3",
        "conf": "medium",
        "market": "industrial robots + servo motors"
      },
      "price": 7449.0,
      "mcap": 11.91,
      "cur": "¥",
      "mcapUSD": true,
      "thesis": "A robot-and-motion specialist (servo drives, inverters, robots) and a core physical-AI enabler; revenue ~¥570B, geared to an automation up-cycle off a soft patch.",
      "bull": "Strong servo/robot franchise with motion-control content per robot.",
      "bear": "Short-cycle and China exposure; mid-pack margins; yen sensitivity.",
      "r": {
        "val": 6,
        "growth": 5,
        "roic": 6,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 6
      },
      "m": {
        "peTTM": 55.0,
        "peFwd": 36.4,
        "pegFwd": 2,
        "evEbitda": 30.0,
        "evSales": 3.7,
        "pfcf": 28,
        "fcfYield": 3,
        "revCagrHist": 2,
        "epsCagrFwd": 9,
        "gross": 35.3,
        "op": 8.8,
        "net": 6.5,
        "roic": 10,
        "roe": 7.8,
        "fcfMargin": 10,
        "fcfConv": 85,
        "sbc": 1,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 2192,
        "netCashPS": 1000,
        "fcfM": 0.1
      }
    },
    {
      "tk": "ROK",
      "nm": "Rockwell Automation",
      "bz": "Factory automation (PLCs)",
      "color": "#CC0000",
      "layer": "automation",
      "share": {
        "pct": 15,
        "rank": "#1",
        "conf": "high",
        "market": "discrete factory automation (PLCs)"
      },
      "price": 471.7,
      "mcap": 52.49,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The US pure-play in factory automation — PLCs, software and the reshoring tailwind; FQ2 26 sales +12%, ~$8.8B TTM revenue, ~33.6x fwd P/E with raised guidance.",
      "bull": "US reshoring + automation demand; high-margin installed base and software.",
      "bear": "Short-cycle volatility; orders-recovery timing; full multiple.",
      "r": {
        "val": 4,
        "growth": 6,
        "roic": 9,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 49.0,
        "peFwd": 32.3,
        "pegFwd": 2.6,
        "evEbitda": 28.5,
        "evSales": 6.4,
        "pfcf": 28,
        "fcfYield": 3,
        "revCagrHist": 11.9,
        "epsCagrFwd": 12,
        "gross": 48.9,
        "op": 20.7,
        "net": 12.4,
        "roic": 20,
        "roe": 27.2,
        "fcfMargin": 16,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 1.2,
        "intCov": 15
      },
      "d": {
        "revPS": 78.4,
        "netCashPS": -12,
        "fcfM": 0.15
      }
    },
    {
      "tk": "EMR",
      "nm": "Emerson Electric",
      "bz": "Process automation",
      "color": "#00467F",
      "layer": "automation",
      "share": {
        "pct": 12,
        "rank": "#2",
        "conf": "high",
        "market": "process automation systems"
      },
      "price": 139.05,
      "mcap": 77.88,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A process-automation pure-play (post-portfolio reshaping, plus AspenTech software) levered to industrial capex and energy/LNG; ~$18B TTM revenue, ~21.6x fwd P/E.",
      "bull": "Focused process-automation + software; strong FCF and capital returns.",
      "bear": "Cyclical capex exposure; integration of software assets.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 32.2,
        "peFwd": 19.4,
        "pegFwd": 2.2,
        "evEbitda": 15.3,
        "evSales": 4.9,
        "pfcf": 20,
        "fcfYield": 4,
        "revCagrHist": 2.9,
        "epsCagrFwd": 9,
        "gross": 52.7,
        "op": 24.2,
        "net": 13.4,
        "roic": 12,
        "roe": 12.3,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 1.5,
        "intCov": 15
      },
      "d": {
        "revPS": 32.6,
        "netCashPS": -10,
        "fcfM": 0.16
      }
    },
    {
      "tk": "SIEGY",
      "nm": "Siemens",
      "bz": "Automation + digital industries",
      "color": "#009999",
      "layer": "automation",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "industrial automation + software"
      },
      "price": 158.13,
      "mcap": 243.25,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The breadth play — factory and process automation plus the Xcelerator digital-twin software stack, a European industrial compounder; FQ2 26 EPS $1.65 (US-listed ADR).",
      "bull": "Automation scale + digital-twin software; large installed base.",
      "bear": "Conglomerate complexity; European cyclicality; FX.",
      "r": {
        "val": 6,
        "growth": 5,
        "roic": 7,
        "moat": 8,
        "fcf": 7,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 28.8,
        "peFwd": 23.7,
        "pegFwd": 2.2,
        "evEbitda": 25.1,
        "evSales": 3.7,
        "pfcf": 20,
        "fcfYield": 4,
        "revCagrHist": 0,
        "epsCagrFwd": 8,
        "gross": 38.8,
        "op": 12.7,
        "net": 9.7,
        "roic": 12,
        "roe": 12.6,
        "fcfMargin": 14,
        "fcfConv": 85,
        "sbc": 1,
        "netDebtEbitda": 1,
        "intCov": 20
      },
      "d": {
        "revPS": 57,
        "netCashPS": -5,
        "fcfM": 0.14
      }
    },
    {
      "tk": "PH",
      "nm": "Parker Hannifin",
      "bz": "Motion & control systems",
      "color": "#0033A0",
      "layer": "motion",
      "share": {
        "pct": 12,
        "rank": "#1",
        "conf": "high",
        "market": "motion & control components"
      },
      "price": 962.89,
      "mcap": 121.41,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The motion-and-control compounder — hydraulics, pneumatics and actuation across industrial and aerospace; ~$20.5B TTM revenue, FY27 consensus EPS ~$32.50, a serial margin-improver.",
      "bull": "Diversified motion/control + aerospace; consistent margin expansion and FCF.",
      "bear": "Industrial cyclicality; leverage from acquisitions.",
      "r": {
        "val": 4,
        "growth": 6,
        "roic": 8,
        "moat": 8,
        "fcf": 9,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 35.6,
        "peFwd": 28.2,
        "pegFwd": 2.7,
        "evEbitda": 23.8,
        "evSales": 6.2,
        "pfcf": 28,
        "fcfYield": 3,
        "revCagrHist": 10.6,
        "epsCagrFwd": 10,
        "gross": 37.4,
        "op": 21.5,
        "net": 16.6,
        "roic": 12,
        "roe": 24.8,
        "fcfMargin": 18,
        "fcfConv": 95,
        "sbc": 1,
        "netDebtEbitda": 1.7,
        "intCov": 15
      },
      "d": {
        "revPS": 165.81,
        "netCashPS": -50,
        "fcfM": 0.18
      }
    },
    {
      "tk": "NOVT",
      "nm": "Novanta",
      "bz": "Photonics & precision motion",
      "color": "#1E8E6B",
      "layer": "motion",
      "share": {
        "pct": 8,
        "rank": "#3",
        "conf": "medium",
        "market": "photonics + precision motion components"
      },
      "price": 161.72,
      "mcap": 5.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A niche enabler of lasers, photonics and precision motion designed into medical, robotics and automation OEMs; ~$1B revenue with only mid-single-digit organic growth, yet trades ~41x forward and ~100x trailing (depressed by a one-off charge); net cash supports bolt-on M&amp;A.",
      "bull": "Sticky design-in components for robotics/medical; recurring content.",
      "bear": "Small; OEM demand cyclicality; ~3% organic growth; ~41x fwd P/E.",
      "r": {
        "val": 3,
        "growth": 7,
        "roic": 7,
        "moat": 7,
        "fcf": 7,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 116.3,
        "peFwd": 39.0,
        "pegFwd": 2.9,
        "evEbitda": 31.7,
        "evSales": 5.6,
        "pfcf": 40,
        "fcfYield": 2,
        "revCagrHist": 10.4,
        "epsCagrFwd": 14,
        "gross": 44.2,
        "op": 11.7,
        "net": 5.3,
        "roic": 10,
        "roe": 5.2,
        "fcfMargin": 15,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": -0.5,
        "intCov": 12
      },
      "d": {
        "revPS": 26.66,
        "netCashPS": -5,
        "fcfM": 0.14
      }
    },
    {
      "tk": "CGNX",
      "nm": "Cognex",
      "bz": "Machine vision",
      "color": "#0098DB",
      "layer": "vision",
      "share": {
        "pct": 35,
        "rank": "#1",
        "conf": "high",
        "market": "industrial machine vision"
      },
      "price": 67.8,
      "mcap": 11.28,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The machine-vision leader — the 'eyes' of automation and robotics; Q1 26 revenue +24% with seven straight quarters of growth, net cash, geared to logistics/EV/semi capex.",
      "bull": "Vision-systems share leader; net cash; operating leverage on recovery.",
      "bear": "Highly cyclical end-markets; China; lumpy logistics orders; ~74x P/E.",
      "r": {
        "val": 3,
        "growth": 7,
        "roic": 7,
        "moat": 8,
        "fcf": 7,
        "bs": 9,
        "scal": 7
      },
      "m": {
        "peTTM": 79.8,
        "peFwd": 38.4,
        "pegFwd": 2,
        "evEbitda": 48.8,
        "evSales": 10.6,
        "pfcf": 50,
        "fcfYield": 1.5,
        "revCagrHist": 24.3,
        "epsCagrFwd": 18,
        "gross": 68,
        "op": 22.3,
        "net": 13.6,
        "roic": 15,
        "roe": 9.7,
        "fcfMargin": 16,
        "fcfConv": 90,
        "sbc": 3,
        "netDebtEbitda": -2,
        "intCov": 999
      },
      "d": {
        "revPS": 6.25,
        "netCashPS": 1.3,
        "fcfM": 0.16
      }
    },
    {
      "tk": "SYM",
      "nm": "Symbotic",
      "bz": "AI warehouse automation",
      "color": "#E8590C",
      "layer": "logistics",
      "share": {
        "pct": 15,
        "rank": "#2",
        "conf": "medium",
        "market": "AI-driven warehouse automation systems"
      },
      "price": 42.74,
      "mcap": 25.8,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "AI-robotics warehouse systems with a ~$22B backlog — Q2 FY26 revenue +23% and a first GAAP profit ($9M), but EV/sales ~12x prices in flawless execution; deployment margins still thin and customer-concentrated.",
      "bull": "Huge contracted backlog; differentiated AI/robotics warehouse platform.",
      "bear": "Customer concentration (Walmart/GreenBox); thin margins; restatement history.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 4,
        "moat": 6,
        "fcf": 4,
        "bs": 7,
        "scal": 8
      },
      "m": {
        "peTTM": 999,
        "peFwd": 59.2,
        "pegFwd": 0.8,
        "evEbitda": 167.7,
        "evSales": 1.5,
        "pfcf": 60,
        "fcfYield": 1.5,
        "revCagrHist": 23.1,
        "epsCagrFwd": 40,
        "gross": 20.4,
        "op": 1.1,
        "net": -0.3,
        "roic": 8,
        "roe": -5.7,
        "fcfMargin": 5,
        "fcfConv": 60,
        "sbc": 5,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 3.9,
        "netCashPS": 1.5,
        "fcfM": 0.04
      }
    },
    {
      "tk": "ZBRA",
      "nm": "Zebra Technologies",
      "bz": "Scanning & RFID / enterprise asset",
      "color": "#000000",
      "layer": "logistics",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "high",
        "market": "barcode scanning + RFID"
      },
      "price": 267.18,
      "mcap": 12.73,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The data-capture layer of logistics and warehousing — scanners, RFID and machine vision tying physical goods to automated systems; Q1 26 sales +14%, FY guide +10-14%, ~12.6x fwd P/E.",
      "bull": "Scanning/RFID share leader with recovering demand; strong FCF.",
      "bear": "Cyclical enterprise hardware; consumer/retail capex sensitivity.",
      "r": {
        "val": 6,
        "growth": 6,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 32.3,
        "peFwd": 12.9,
        "pegFwd": 1,
        "evEbitda": 15.1,
        "evSales": 2.8,
        "pfcf": 14,
        "fcfYield": 4,
        "revCagrHist": 14.3,
        "epsCagrFwd": 12,
        "gross": 48.2,
        "op": 15,
        "net": 7.5,
        "roic": 15,
        "roe": 11.8,
        "fcfMargin": 16,
        "fcfConv": 95,
        "sbc": 2,
        "netDebtEbitda": 1.5,
        "intCov": 12
      },
      "d": {
        "revPS": 111.14,
        "netCashPS": -20,
        "fcfM": 0.15
      }
    }
  ]
};
