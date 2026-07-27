/* cyber — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-07-27 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Cybersecurity — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · cybersecurity value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">cyber security</span><br>value chain,<br><span class=\"tnum\">11</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the consolidating security platforms, through cloud and zero-trust (SASE), identity, detection and SIEM,\n       out to exposure management and consumer safety. A secular-growth software theme sharpened by AI-driven threats, graded on\n       returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"11\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 27 Jul 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, P/E and revenue/growth are from public market data and filings <b>as of ~10 Jun 2026</b>\n      and drift as prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Several high-growth names (CrowdStrike,\n      Zscaler, Cloudflare) are GAAP-unprofitable with heavy stock-based comp - toggle the SBC-adjusted basis and read FCF margin\n      over GAAP P/E. CyberArk has been excluded (acquired by Palo Alto Networks). CrowdStrike splits 4-for-1 on 2 Jul 2026.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, P/E and revenue/growth are from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Many security names are GAAP-unprofitable while strongly FCF-positive, so judge them on FCF margin and the SBC-adjusted basis rather than GAAP P/E. CyberArk is excluded (acquired by Palo Alto Networks). Reverse-DCF uses a 10-year FCF-to-equity model.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A firewall maker and a cloud zero-trust vendor can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. Headline ratios sourced ~10 Jun 2026; ROIC/FCF rows are estimates. SBC is large for the high-growth names - the SBC-adjusted basis matters, and several show n/m GAAP P/E, so read FCF margin instead.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a leader (endpoint, firewalls) reads differently from a contested field (cloud security, exposure). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "platform",
      "label": "Platforms",
      "c": "#C0392B"
    },
    {
      "k": "cloud",
      "label": "Cloud & SASE",
      "c": "#1B6CA8"
    },
    {
      "k": "identity",
      "label": "Identity",
      "c": "#8E5DA8"
    },
    {
      "k": "detect",
      "label": "Detection & SIEM",
      "c": "#1E8E6B"
    },
    {
      "k": "exposure",
      "label": "Exposure & consumer",
      "c": "#C9742B"
    }
  ],
  "data": [
    {
      "tk": "PANW",
      "nm": "Palo Alto Networks",
      "bz": "Security platform (all-domain)",
      "color": "#FA582D",
      "layer": "platform",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "enterprise network security"
      },
      "price": 323.79,
      "mcap": 263.89,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The platformization leader; closed the $25B CyberArk identity deal (Feb 2026) plus Chronosphere, pushing FY26 revenue to ~$11.4B (+24%; Q3 +31% incl M&amp;A). GAAP loss on deal costs; ~38% adjusted FCF margin. Now ~72x fwd P/E, ~19x EV/Sales.",
      "bull": "Platform-consolidation scale + identity via CyberArk; ~38% FCF margin, ~$8B NGS ARR.",
      "bear": "Rich ~72x fwd multiple; CyberArk integration/dilution drag; net cash erased; organic growth lower-teens.",
      "r": {
        "val": 3,
        "growth": 8,
        "roic": 7,
        "moat": 9,
        "fcf": 9,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 276.7,
        "peFwd": 78.5,
        "pegFwd": 3.5,
        "evEbitda": 177.2,
        "evSales": 24.8,
        "pfcf": 50,
        "fcfYield": 1.9,
        "revCagrHist": 31.1,
        "epsCagrFwd": 18,
        "gross": 72,
        "op": -2.5,
        "net": 7.9,
        "roic": 4,
        "roe": 4.8,
        "fcfMargin": 37,
        "fcfConv": 110,
        "sbc": 8,
        "netDebtEbitda": 0.2,
        "intCov": 99
      },
      "d": {
        "revPS": 14.83,
        "netCashPS": -1,
        "fcfM": 0.38
      }
    },
    {
      "tk": "CRWD",
      "nm": "CrowdStrike",
      "bz": "Endpoint + cloud (Falcon)",
      "color": "#E01F3D",
      "layer": "platform",
      "share": {
        "pct": 25,
        "rank": "#1",
        "conf": "high",
        "market": "modern endpoint protection"
      },
      "price": 183.28,
      "mcap": 186.63,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The cloud-native endpoint leader; Q1 FY27 revenue $1.39B (+26%), ARR ~$5.5B (+24%), record $256M net-new ARR. Non-GAAP op margin ~24%, net cash ~$3.7B. 4-for-1 split effective Jul 2 2026. Premium ~106x fwd P/E, 30x EV/Sales.",
      "bull": "Category-defining single-agent platform; module attach, ~81% non-GAAP gross margin, ~34% FCF.",
      "bear": "GAAP breakeven; ~106x fwd P/E and 30x EV/Sales leave no room; 2024-outage overhang.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 6,
        "moat": 9,
        "fcf": 9,
        "bs": 9,
        "scal": 10
      },
      "m": {
        "peTTM": 999,
        "peFwd": 117.3,
        "pegFwd": 4,
        "evEbitda": 80,
        "evSales": 35.9,
        "pfcf": 80,
        "fcfYield": 0.6,
        "revCagrHist": 25.6,
        "epsCagrFwd": 25,
        "gross": 75.1,
        "op": -2.2,
        "net": -0.6,
        "roic": 8,
        "roe": -0.2,
        "fcfMargin": 30,
        "fcfConv": 120,
        "sbc": 9,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 5.06,
        "netCashPS": 15,
        "fcfM": 0.34
      }
    },
    {
      "tk": "FTNT",
      "nm": "Fortinet",
      "bz": "Network security (firewall ASIC)",
      "color": "#EE3124",
      "layer": "platform",
      "share": {
        "pct": 18,
        "rank": "#2",
        "conf": "high",
        "market": "network firewall appliances"
      },
      "price": 152.37,
      "mcap": 111.63,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The margin-and-cash king of firewalls; proprietary ASICs underpin an ~80% gross margin and ~36% non-GAAP op margin. Q1 2026 revenue $1.85B (+20%), product +41%, billings +31%; raised FY26 guide to $7.71-7.87B. Net cash ~$2.1B; ~29x fwd P/E.",
      "bull": "ASIC cost moat; ~80% gross, ~36% op margin, record FCF, ~23% ROIC, net cash.",
      "bear": "~29x fwd vs lower-teens-to-20% growth; consensus targets sit below market price; hardware cyclicality.",
      "r": {
        "val": 5,
        "growth": 7,
        "roic": 10,
        "moat": 8,
        "fcf": 10,
        "bs": 9,
        "scal": 8
      },
      "m": {
        "peTTM": 59.1,
        "peFwd": 44.4,
        "pegFwd": 1.8,
        "evEbitda": 46.1,
        "evSales": 15.3,
        "pfcf": 30,
        "fcfYield": 3,
        "revCagrHist": 20.1,
        "epsCagrFwd": 16,
        "gross": 80.3,
        "op": 31.3,
        "net": 27.5,
        "roic": 22,
        "roe": 132.4,
        "fcfMargin": 32,
        "fcfConv": 110,
        "sbc": 4,
        "netDebtEbitda": -1,
        "intCov": 999
      },
      "d": {
        "revPS": 9.47,
        "netCashPS": 2.8,
        "fcfM": 0.32
      }
    },
    {
      "tk": "ZS",
      "nm": "Zscaler",
      "bz": "Cloud security / SASE (ZTNA)",
      "color": "#0075C9",
      "layer": "cloud",
      "share": {
        "pct": 25,
        "rank": "#1",
        "conf": "high",
        "market": "secure web gateway / ZTNA"
      },
      "price": 142.32,
      "mcap": 23.01,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The zero-trust cloud-proxy pioneer; Q3 FY26 revenue $850M (+25%), ARR $3.5B, record ~23% non-GAAP op margin. Shares fell ~32% in May on abrupt sales-leader exits, a cut to ~23% FCF-margin guide and soft FY27 ARR outlook (16-17%). GAAP-unprofitable.",
      "bull": "Zero-trust secular shift; high retention, ~23% non-GAAP op margin, net cash.",
      "bear": "GAAP loss-making; decelerating FY27 ARR (16-17%); leadership exits; still ~15x EV/sales.",
      "r": {
        "val": 2,
        "growth": 8,
        "roic": 5,
        "moat": 8,
        "fcf": 8,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 31.0,
        "pegFwd": 2,
        "evEbitda": 55,
        "evSales": 6.7,
        "pfcf": 40,
        "fcfYield": 1.8,
        "revCagrHist": 25.4,
        "epsCagrFwd": 18,
        "gross": 76.7,
        "op": -3.3,
        "net": -2.4,
        "roic": 6,
        "roe": -3.7,
        "fcfMargin": 25,
        "fcfConv": 120,
        "sbc": 18,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 19.98,
        "netCashPS": 11,
        "fcfM": 0.23
      }
    },
    {
      "tk": "NET",
      "nm": "Cloudflare",
      "bz": "Edge network + security",
      "color": "#F38020",
      "layer": "cloud",
      "share": {
        "pct": 15,
        "rank": "#2",
        "conf": "medium",
        "market": "edge network & application security"
      },
      "price": 262.15,
      "mcap": 93.05,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The programmable edge - security, performance and AI inference at the network layer; Q1 2026 revenue $640M (+34%), FY26 guide ~30%. Announced a ~20% workforce reduction alongside the print. GAAP-unprofitable, ~13% FCF margin, ~34x EV/Sales - among the richest multiples in software.",
      "bull": "Vast edge footprint plus AI-inference optionality; ~34% growth, broad product surface.",
      "bear": "~34x EV/Sales, thin GAAP profitability and a 20% layoff signal margin pressure.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 4,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 10
      },
      "m": {
        "peTTM": 999,
        "peFwd": 165.7,
        "pegFwd": 5,
        "evEbitda": 90,
        "evSales": 39.5,
        "pfcf": 90,
        "fcfYield": 0.4,
        "revCagrHist": 33.5,
        "epsCagrFwd": 30,
        "gross": 73.3,
        "op": -9.7,
        "net": -3.7,
        "roic": 5,
        "roe": -5.9,
        "fcfMargin": 12,
        "fcfConv": 110,
        "sbc": 12,
        "netDebtEbitda": -0.3,
        "intCov": 99
      },
      "d": {
        "revPS": 6.65,
        "netCashPS": 1.8,
        "fcfM": 0.13
      }
    },
    {
      "tk": "OKTA",
      "nm": "Okta",
      "bz": "Workforce & customer identity",
      "color": "#00297A",
      "layer": "identity",
      "share": {
        "pct": 20,
        "rank": "#2",
        "conf": "medium",
        "market": "workforce identity & access mgmt"
      },
      "price": 138.5,
      "mcap": 24.07,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The independent identity platform; Q1 FY27 revenue $765M (+11%), FY guide ~$3.2B. Now GAAP-profitable with ~30% FCF margin and ~$2.6B cash; the $350M 2026 convert matured/retired Jun 2026. A security-reinvestment turnaround at ~6x EV/Sales.",
      "bull": "Identity-as-control-plane tailwind; GAAP-profitable, ~30% FCF margin, ~4.6% FCF yield, net cash.",
      "bear": "Growth decelerated to ~11%; Microsoft Entra competition; trust rebuild ongoing.",
      "r": {
        "val": 6,
        "growth": 6,
        "roic": 4,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 99.6,
        "peFwd": 32.3,
        "pegFwd": 2.6,
        "evEbitda": 82.0,
        "evSales": 7.3,
        "pfcf": 22,
        "fcfYield": 4.6,
        "revCagrHist": 11.2,
        "epsCagrFwd": 12,
        "gross": 77.4,
        "op": 7.3,
        "net": 8.2,
        "roic": 6,
        "roe": 3.7,
        "fcfMargin": 25,
        "fcfConv": 110,
        "sbc": 14,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 16.99,
        "netCashPS": 11,
        "fcfM": 0.3
      }
    },
    {
      "tk": "S",
      "nm": "SentinelOne",
      "bz": "Autonomous endpoint + AI SecOps",
      "color": "#6B2F91",
      "layer": "detect",
      "share": {
        "pct": 8,
        "rank": "#3",
        "conf": "medium",
        "market": "modern endpoint protection"
      },
      "price": 18.14,
      "mcap": 6.22,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The AI-native challenger to CrowdStrike; Q1 FY27 revenue $277M (+21%), ARR $1.16B (+23%), now non-GAAP-profitable with ~22% adjusted FCF margin. Announced ~8% workforce cut. Still GAAP loss-making (op margin ~-29%); ~4.5x EV/Sales, net cash.",
      "bull": "AI-led endpoint plus data analytics; share-taker, ~22% adjusted FCF margin, net cash.",
      "bear": "Distant #2 to CrowdStrike; GAAP op margin ~-29%; pricing pressure; recent layoffs.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 2,
        "moat": 6,
        "fcf": 5,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 36.8,
        "pegFwd": 4,
        "evEbitda": 60,
        "evSales": 5.3,
        "pfcf": 70,
        "fcfYield": 5,
        "revCagrHist": 20.8,
        "epsCagrFwd": 30,
        "gross": 73.2,
        "op": -28.8,
        "net": -30.4,
        "roic": -12,
        "roe": -21.4,
        "fcfMargin": 5,
        "fcfConv": 60,
        "sbc": 18,
        "netDebtEbitda": -1.5,
        "intCov": 99
      },
      "d": {
        "revPS": 3.16,
        "netCashPS": 2.5,
        "fcfM": 0.22
      }
    },
    {
      "tk": "RPD",
      "nm": "Rapid7",
      "bz": "SIEM + vulnerability management",
      "color": "#1E8E6B",
      "layer": "detect",
      "share": {
        "pct": 6,
        "rank": "#4",
        "conf": "low",
        "market": "vulnerability management + SIEM"
      },
      "price": 9.49,
      "mcap": 0.63,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A consolidated detection-and-response and exposure platform at a distressed multiple; Q1 2026 revenue $210M (roughly flat YoY), FY26 guide $836-842M implies a decline. FCF guide $125-135M (~15.5% margin) against a $0.48B cap. Net debt from convert notes; the value-trap risk is real.",
      "bull": "Integrated VM + SIEM/MDR at ~4.5x fwd P/E; ~27% FCF yield; ARR ~$830M.",
      "bear": "Revenue flat-to-down with FY26 guide implying decline; net debt; competitive displacement.",
      "r": {
        "val": 7,
        "growth": 2,
        "roic": 5,
        "moat": 5,
        "fcf": 7,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 27.1,
        "peFwd": 6.1,
        "pegFwd": 1,
        "evEbitda": 16.3,
        "evSales": 1.1,
        "pfcf": 6,
        "fcfYield": 27,
        "revCagrHist": -0.3,
        "epsCagrFwd": 5,
        "gross": 69.7,
        "op": 0,
        "net": 2.6,
        "roic": 8,
        "roe": 19.7,
        "fcfMargin": 18,
        "fcfConv": 100,
        "sbc": 8,
        "netDebtEbitda": 2.5,
        "intCov": 8
      },
      "d": {
        "revPS": 13.16,
        "netCashPS": -4,
        "fcfM": 0.16
      }
    },
    {
      "tk": "QLYS",
      "nm": "Qualys",
      "bz": "Cloud vulnerability & compliance",
      "color": "#ED2E26",
      "layer": "exposure",
      "share": {
        "pct": 8,
        "rank": "#3",
        "conf": "medium",
        "market": "cloud vulnerability management"
      },
      "price": 137.48,
      "mcap": 4.84,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A profitable, cash-rich cloud vulnerability and compliance platform; Q1 2026 revenue $176M (+10%), FY26 guide raised to $721-727M. Rare ~31% GAAP operating margin and high-30s FCF margin for security software, with ~$440M net cash and no debt. Now ~12x fwd P/E.",
      "bull": "~31% op margin, high FCF margin and net cash; sticky compliance use-cases; ~12x fwd P/E.",
      "bear": "Modest ~10% growth; broader platforms encroach on exposure management.",
      "r": {
        "val": 6,
        "growth": 5,
        "roic": 9,
        "moat": 7,
        "fcf": 9,
        "bs": 9,
        "scal": 7
      },
      "m": {
        "peTTM": 24.7,
        "peFwd": 16.6,
        "pegFwd": 1.2,
        "evEbitda": 18.0,
        "evSales": 6.5,
        "pfcf": 18,
        "fcfYield": 8,
        "revCagrHist": 9.8,
        "epsCagrFwd": 12,
        "gross": 83.2,
        "op": 35,
        "net": 29.4,
        "roic": 29,
        "roe": 37.7,
        "fcfMargin": 38,
        "fcfConv": 110,
        "sbc": 5,
        "netDebtEbitda": -2,
        "intCov": 999
      },
      "d": {
        "revPS": 19.06,
        "netCashPS": 12,
        "fcfM": 0.38
      }
    },
    {
      "tk": "TENB",
      "nm": "Tenable",
      "bz": "Exposure management (Nessus)",
      "color": "#00558C",
      "layer": "exposure",
      "share": {
        "pct": 10,
        "rank": "#2",
        "conf": "medium",
        "market": "vulnerability / exposure management"
      },
      "price": 32.25,
      "mcap": 3.56,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The Nessus franchise broadening into unified exposure management across cloud, OT and identity (Vulcan, Apex tuck-ins); Q1 2026 revenue +10%, FY26 guide ~7% with lifted outlook. Slight GAAP loss, ~25% FCF margin, ~8.6% FCF yield. Modest net debt from convert notes; ~14x fwd P/E.",
      "bull": "Trusted VM brand plus exposure-management expansion; ~25% FCF margin, ~8.6% FCF yield.",
      "bear": "Crowded exposure market; ~7-10% growth and thin GAAP margin both middling.",
      "r": {
        "val": 6,
        "growth": 6,
        "roic": 5,
        "moat": 6,
        "fcf": 7,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 14.9,
        "pegFwd": 0.6,
        "evEbitda": 89.3,
        "evSales": 3.5,
        "pfcf": 20,
        "fcfYield": 8.6,
        "revCagrHist": 9.6,
        "epsCagrFwd": 22,
        "gross": 78.2,
        "op": 4.3,
        "net": -1.2,
        "roic": 8,
        "roe": -3.7,
        "fcfMargin": 20,
        "fcfConv": 100,
        "sbc": 8,
        "netDebtEbitda": 0.9,
        "intCov": 10
      },
      "d": {
        "revPS": 8.59,
        "netCashPS": -0.56,
        "fcfM": 0.25
      }
    },
    {
      "tk": "GEN",
      "nm": "Gen Digital",
      "bz": "Consumer cyber-safety (Norton)",
      "color": "#FDB511",
      "layer": "exposure",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "high",
        "market": "consumer cybersecurity subscriptions"
      },
      "price": 25.84,
      "mcap": 15.57,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The consumer cyber-safety roll-up (Norton, Avast, LifeLock + MoneyLion); FY26 revenue ~$5.0B (+27% reported, ~9% organic), ~50% GAAP operating margin, ~30% FCF margin. New Norton Neo AI browser; ~$2.1B buyback authorization. ~8x forward P/E but carries ~$7B net debt (~3.85x EBITDA).",
      "bull": "Scaled consumer subscriptions, ~50% op margin and ~8x P/E; big buybacks, ~10% FCF yield.",
      "bear": "Mature market with ~9% organic growth; ~3.85x net-debt/EBITDA leverage from M&amp;A.",
      "r": {
        "val": 7,
        "growth": 5,
        "roic": 8,
        "moat": 6,
        "fcf": 9,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 16.5,
        "peFwd": 7.9,
        "pegFwd": 0.5,
        "evEbitda": 9.8,
        "evSales": 4.7,
        "pfcf": 11,
        "fcfYield": 10,
        "revCagrHist": 27,
        "epsCagrFwd": 15,
        "gross": 78.5,
        "op": 63.4,
        "net": 19.5,
        "roic": 9,
        "roe": 39.9,
        "fcfMargin": 40,
        "fcfConv": 100,
        "sbc": 3,
        "netDebtEbitda": 3.85,
        "intCov": 8
      },
      "d": {
        "revPS": 8.17,
        "netCashPS": -11,
        "fcfM": 0.3
      }
    }
  ]
};
