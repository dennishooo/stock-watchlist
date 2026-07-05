/* cyber — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-06-11 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Cybersecurity — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · cybersecurity value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">cyber security</span><br>value chain,<br><span class=\"tnum\">11</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the consolidating security platforms, through cloud and zero-trust (SASE), identity, detection and SIEM,\n       out to exposure management and consumer safety. A secular-growth software theme sharpened by AI-driven threats, graded on\n       returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"11\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 11 Jun 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, P/E and revenue/growth are from public market data and filings <b>as of ~10 Jun 2026</b>\n      and drift as prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Several high-growth names (CrowdStrike,\n      Zscaler, Cloudflare) are GAAP-unprofitable with heavy stock-based comp - toggle the SBC-adjusted basis and read FCF margin\n      over GAAP P/E. CyberArk has been excluded (acquired by Palo Alto Networks). CrowdStrike splits 4-for-1 on 2 Jul 2026.</div>",
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
      "price": 263.22,
      "mcap": 214.52,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The platformization leader; FQ3 revenue $3.0B (+31%), NGS ARR $8.13B (+60%) with CyberArk folded in. Stock at all-time highs (~$350, $285B cap) after June's sector-wide re-rating on a bank cyber-spend forecast and a White House AI-security directive. ~38% adjusted FCF margin, but now ~85x fwd P/E, ~25x EV/Sales.",
      "bull": "Platform consolidation at scale; NGS ARR $8.1B +60%, ~38% FCF margin, policy tailwinds.",
      "bear": "~85x fwd earnings after a +33% one-month melt-up; CyberArk dilution; organic growth lower-teens.",
      "r": {
        "val": 2,
        "growth": 8,
        "roic": 7,
        "moat": 9,
        "fcf": 9,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 226.9,
        "peFwd": 63.9,
        "pegFwd": 4.5,
        "evEbitda": 143.9,
        "evSales": 20.1,
        "pfcf": 50,
        "fcfYield": 1.5,
        "revCagrHist": 31.1,
        "epsCagrFwd": 18,
        "gross": 72.0,
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
      "price": 647.74,
      "mcap": 164.89,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The cloud-native endpoint leader; ARR $5.51B (+24%), record Q1 net-new ARR $256M (+32%). 4-for-1 split executed 2 Jul 2026; shares hit fresh highs (~$193 post-split, ~$197B cap) into the June cyber melt-up. Now ~150x fwd non-GAAP EPS and ~33x sales — the cohort's richest large-cap.",
      "bull": "Category-defining single-agent platform; module attach, ~34% FCF margin; Wells Fargo lifted target 80%.",
      "bear": "~150x fwd EPS, ~33x sales; mean target below price; split-fueled momentum, not fundamentals.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 6,
        "moat": 9,
        "fcf": 9,
        "bs": 9,
        "scal": 10
      },
      "m": {
        "peTTM": 999,
        "peFwd": 103.6,
        "pegFwd": 6,
        "evEbitda": 80,
        "evSales": 31.6,
        "pfcf": 80,
        "fcfYield": 0.9,
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
        "revPS": 20.22,
        "netCashPS": 3.7,
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
      "price": 138.88,
      "mcap": 101.75,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The margin-and-cash king of firewalls; ASICs drive ~80% gross and ~36% non-GAAP op margin. Q1 revenue $1.85B (+20%), product +41%; FY26 guide $7.71-7.87B, Q2 print 29 Jul. Stock ~$157 ($114B cap) after the June sector rally — ~46x fwd P/E; HSBC cut to Reduce and consensus targets sit well below. Net cash ~$2.1B.",
      "bull": "ASIC cost moat; ~80% gross, ~36% op margin, record FCF, ~23% ROIC, net cash.",
      "bear": "~46x fwd vs mid-teens growth; consensus target ~30% below price; HSBC Reduce; hardware cyclicality.",
      "r": {
        "val": 4,
        "growth": 7,
        "roic": 10,
        "moat": 8,
        "fcf": 10,
        "bs": 9,
        "scal": 8
      },
      "m": {
        "peTTM": 53.8,
        "peFwd": 40.5,
        "pegFwd": 2.9,
        "evEbitda": 41.9,
        "evSales": 13.9,
        "pfcf": 30,
        "fcfYield": 2.6,
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
      "price": 124.73,
      "mcap": 20.17,
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
        "peFwd": 27.1,
        "pegFwd": 1.8,
        "evEbitda": 55,
        "evSales": 5.8,
        "pfcf": 40,
        "fcfYield": 1.5,
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
      "price": 219.67,
      "mcap": 77.97,
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
        "peFwd": 140.8,
        "pegFwd": 5,
        "evEbitda": 90,
        "evSales": 33.1,
        "pfcf": 90,
        "fcfYield": 0.3,
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
      "price": 114.92,
      "mcap": 19.97,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The independent identity platform; Q1 FY27 revenue $765M (+11%), FY27 guide nudged up to ~9.5% growth / 25.5% op margin. GAAP-profitable, ~30% FCF margin, net cash after retiring the 2026 convert. Stock +67% YTD to ~$141 ($24.6B cap) on the June cyber re-rating — now ~33x fwd EPS, ~7x EV/Sales, above the mean target.",
      "bull": "Identity-as-control-plane tailwind; GAAP-profitable, ~30% FCF margin, net cash; UBS lifted target to $150.",
      "bear": "Growth ~10-11% against a re-rated ~33x fwd multiple; mean target ~14% below; Entra competition.",
      "r": {
        "val": 4,
        "growth": 6,
        "roic": 4,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 83.3,
        "peFwd": 26.9,
        "pegFwd": 2.8,
        "evEbitda": 66.7,
        "evSales": 5.9,
        "pfcf": 22,
        "fcfYield": 3.7,
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
        "netCashPS": 14,
        "fcfM": 0.30
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
      "price": 14.79,
      "mcap": 5.07,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The AI-native challenger to CrowdStrike; Q1 FY27 revenue $277M (+21%), ARR $1.16B (+23%), adjusted op margin positive (~4%, +550bps). Won a large US DoD endpoint contract and a sixth straight Gartner MQ Leader nod; shares ~$17.5 ($6B cap), ~4.5x EV/Sales, net cash. Still GAAP loss-making.",
      "bull": "AI-led endpoint share-taker; DoD win, Gartner Leader; ~22% adjusted FCF margin, net cash, ~4.5x EV/Sales.",
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
        "peFwd": 29.9,
        "pegFwd": 4,
        "evEbitda": 60,
        "evSales": 4.2,
        "pfcf": 70,
        "fcfYield": 4,
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
      "price": 7.21,
      "mcap": 0.48,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A consolidated detection-and-response and exposure platform at a distressed multiple; new CEO Wael Mohamed (Corey Thomas to exec chair), FY26 guidance reaffirmed at $836-842M (slight decline), adj EPS $1.52-1.60. Shares rallied ~24% off the lows to ~$8.9 ($0.56B cap) — still ~5.7x fwd P/E, ~23% FCF yield. Net debt from converts; value-trap risk real.",
      "bull": "New-CEO catalyst plus Kenzo AI-SecOps tuck-in; ~5.7x fwd P/E, ~23% FCF yield.",
      "bear": "Revenue guided flat-to-down; CEO-transition execution risk; net debt; competitive displacement continues.",
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
        "peTTM": 20.6,
        "peFwd": 4.6,
        "pegFwd": 1.1,
        "evEbitda": 13.6,
        "evSales": 0.9,
        "pfcf": 6,
        "fcfYield": 23,
        "revCagrHist": -0.3,
        "epsCagrFwd": 5,
        "gross": 69.7,
        "op": 0.0,
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
      "price": 110.2,
      "mcap": 3.88,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A profitable, cash-rich cloud vulnerability and compliance platform; Q1 revenue $176M (+10%), FY26 guide $721-727M. Rare ~31% GAAP op margin, high-30s FCF margin, ~$440M net cash. A seven-day +32% squeeze on JPMorgan's upgrade (PT $87 to $139) lifted shares to ~$139 ($5.1B cap) — now ~17x fwd P/E, above the mean target.",
      "bull": "~31% op margin, high FCF margin, net cash; JPMorgan upgrade validates VM durability.",
      "bear": "Modest ~10% growth; +32% in a week leaves price ~24% above mean target; platform encroachment.",
      "r": {
        "val": 5,
        "growth": 5,
        "roic": 9,
        "moat": 7,
        "fcf": 9,
        "bs": 9,
        "scal": 7
      },
      "m": {
        "peTTM": 19.7,
        "peFwd": 13.3,
        "pegFwd": 1.4,
        "evEbitda": 14.1,
        "evSales": 5.1,
        "pfcf": 18,
        "fcfYield": 6,
        "revCagrHist": 9.8,
        "epsCagrFwd": 12,
        "gross": 83.2,
        "op": 35.0,
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
      "price": 26.8,
      "mcap": 2.96,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The Nessus franchise broadening into unified exposure management; Q1 EPS $0.47 beat, revenue $262M (+10%). Gartner tagged it \"the company to beat\" in AI-powered exposure assessment; FedRAMP High/IL5 secured. Shares +44% since mid-June to ~$38.5 (~$4.3B cap) — now ~18x fwd P/E against JPMorgan's $40 target. ~25% FCF margin.",
      "bull": "Gartner \"company to beat\" in AI exposure; FedRAMP High/IL5; ~25% FCF margin, ~22% EPS CAGR.",
      "bear": "+44% in three weeks to within a dollar of targets; ~7-10% organic growth; crowded exposure market.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 5,
        "moat": 6,
        "fcf": 7,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 12.3,
        "pegFwd": 0.8,
        "evEbitda": 74.4,
        "evSales": 3,
        "pfcf": 20,
        "fcfYield": 6,
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
      "price": 24.62,
      "mcap": 14.83,
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
        "peTTM": 15.7,
        "peFwd": 7.5,
        "pegFwd": 0.5,
        "evEbitda": 9.5,
        "evSales": 4.5,
        "pfcf": 11,
        "fcfYield": 9,
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
        "fcfM": 0.30
      }
    }
  ]
};
