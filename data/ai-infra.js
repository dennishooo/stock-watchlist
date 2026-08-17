/* ai-infra — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-08-17 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "AI Infrastructure & Data Centers — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · AI infrastructure value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">AI infrastructure</span><br>value chain,<br><span class=\"tnum\">14</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the silicon and high-bandwidth memory, through networking and optical interconnect, the servers,\n       power and cooling, the data-center REITs that house it all, out to the hyperscalers whose capex pulls the whole chain.\n       Graded on returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"14\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"8\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 17 Aug 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, trailing/forward P/E, gross/operating/net margin and revenue growth are taken\n      from public market data and company filings <b>as of ~10 Jun 2026</b> and will drift as prices move. Derived metrics\n      (ROIC, ROE, FCF margin/conversion, EV/EBITDA, net debt) and the 0-10 radar scores are the author's estimates and\n      normalizations. REIT multiples (Equinix, Digital Realty) are GAAP-P/E-like and read high; judge them on P/FFO and yield.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, trailing/forward P/E, margins and revenue growth are gathered from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time - they drift as markets move. ROIC, ROE, FCF margin/yield/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations, not consensus pulls. Equinix and Digital Realty are REITs: their GAAP P/E reads high, so judge them on P/FFO, AFFO growth and yield. Reverse-DCF uses a transparent 10-year FCF-to-equity model.<br><br><b>Verify live before acting.</b> This is an analytical tool, not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A GPU designer and a data-center REIT can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, every row color-graded best&#8594;worst within the cohort (green = best). Click a column header to sort by that metric. Headline ratios are sourced ~10 Jun 2026; ROIC/FCF rows are estimates. REITs and thin-margin assemblers are not directly comparable to the chip designers - read within each layer.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a near-monopoly (GPUs, cloud networking) reads very differently from a contested field (servers, optics). The denominator is labelled per bar; figures are illustrative estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "silicon",
      "label": "AI silicon",
      "c": "#C0392B"
    },
    {
      "k": "memory",
      "label": "Memory & storage",
      "c": "#16557B"
    },
    {
      "k": "networking",
      "label": "Networking",
      "c": "#1B6CA8"
    },
    {
      "k": "optics",
      "label": "Optical interconnect",
      "c": "#2E86AB"
    },
    {
      "k": "servers",
      "label": "Servers & systems",
      "c": "#D35400"
    },
    {
      "k": "power",
      "label": "Power & thermal",
      "c": "#1E8E6B"
    },
    {
      "k": "reits",
      "label": "Data-center REITs",
      "c": "#8E5DA8"
    },
    {
      "k": "cloud",
      "label": "Hyperscalers / cloud",
      "c": "#6A4C93"
    }
  ],
  "data": [
    {
      "tk": "NVDA",
      "nm": "NVIDIA",
      "bz": "AI accelerators / GPUs",
      "color": "#76B900",
      "layer": "silicon",
      "share": {
        "pct": 88,
        "rank": "#1",
        "conf": "high",
        "market": "data-center AI accelerators"
      },
      "price": 225.16,
      "mcap": 5453.6,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The demand engine of the AI build-out — GPUs plus the CUDA moat define training compute and pull the whole infrastructure chain (TTM revenue ~$253B, Q1 FY27 +85% YoY).",
      "bull": "~88% AI-training share with CUDA lock-in; ~74% gross margin and prodigious FCF.",
      "bear": "Hyperscaler concentration; any AI-capex digestion hits hardest here.",
      "r": {
        "val": 6,
        "growth": 10,
        "roic": 10,
        "moat": 10,
        "fcf": 10,
        "bs": 10,
        "scal": 10
      },
      "m": {
        "peTTM": 34.5,
        "peFwd": 17.6,
        "pegFwd": 0.8,
        "evEbitda": 32.7,
        "evSales": 21.3,
        "pfcf": 30,
        "fcfYield": 1.9,
        "revCagrHist": 85.2,
        "epsCagrFwd": 28,
        "gross": 74.1,
        "op": 65.6,
        "net": 63,
        "roic": 105,
        "roe": 114.3,
        "fcfMargin": 48,
        "fcfConv": 95,
        "sbc": 3.5,
        "netDebtEbitda": -1.5,
        "intCov": 999
      },
      "d": {
        "revPS": 10.42,
        "netCashPS": 3,
        "fcfM": 0.42
      }
    },
    {
      "tk": "AVGO",
      "nm": "Broadcom",
      "bz": "Custom AI silicon + networking",
      "color": "#CC092F",
      "layer": "silicon",
      "share": {
        "pct": 65,
        "rank": "#1",
        "conf": "medium",
        "market": "custom AI accelerator silicon"
      },
      "price": 392.99,
      "mcap": 1869.68,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The hyperscaler-ASIC and networking-silicon winner with a sticky software tail; Q2 FY26 AI semi revenue ~$10.8B, +143% YoY, FY27 AI guide reiterated &gt;$100B.",
      "bull": "Co-leader in custom AI ASICs across 6 hyperscaler customers + DC networking; ~$56B FY26 AI, huge FCF.",
      "bear": "M&amp;A-built portfolio carries ~$45B net debt; ~33x fwd leaves little cushion.",
      "r": {
        "val": 5,
        "growth": 9,
        "roic": 8,
        "moat": 8,
        "fcf": 10,
        "bs": 6,
        "scal": 9
      },
      "m": {
        "peTTM": 65.4,
        "peFwd": 20.1,
        "pegFwd": 1.1,
        "evEbitda": 45.5,
        "evSales": 25.4,
        "pfcf": 35,
        "fcfYield": 1.5,
        "revCagrHist": 47.9,
        "epsCagrFwd": 30,
        "gross": 76.3,
        "op": 49,
        "net": 38.8,
        "roic": 24,
        "roe": 37.3,
        "fcfMargin": 42,
        "fcfConv": 100,
        "sbc": 5,
        "netDebtEbitda": 1,
        "intCov": 9
      },
      "d": {
        "revPS": 15.94,
        "netCashPS": -9.5,
        "fcfM": 0.46
      }
    },
    {
      "tk": "AMD",
      "nm": "AMD",
      "bz": "CPUs + AI accelerators",
      "color": "#ED1C24",
      "layer": "silicon",
      "share": {
        "pct": 29,
        "rank": "#2",
        "conf": "high",
        "market": "x86 CPUs (units)"
      },
      "price": 514.39,
      "mcap": 839.73,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The only credible non-NVIDIA AI-GPU roadmap plus durable server-CPU share gains; Q1 2026 revenue $10.25B (+38%), DC $5.8B (+57%), MI350 shipping with MI400/Helios rack-scale due 2H26.",
      "bull": "Server-CPU share gains + MI-series ramp; net cash, China MI308 export approval restored.",
      "bear": "Fwd P/E ~61 and trailing ~165 price in aggressive, still-unproven AI execution.",
      "r": {
        "val": 2,
        "growth": 9,
        "roic": 5,
        "moat": 6,
        "fcf": 7,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 131.6,
        "peFwd": 33.3,
        "pegFwd": 1.5,
        "evEbitda": 86.9,
        "evSales": 20.1,
        "pfcf": 70,
        "fcfYield": 0.7,
        "revCagrHist": 50.1,
        "epsCagrFwd": 40,
        "gross": 55.7,
        "op": 17.2,
        "net": 15.6,
        "roic": 9,
        "roe": 10.2,
        "fcfMargin": 16,
        "fcfConv": 100,
        "sbc": 6,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 25.36,
        "netCashPS": 5.6,
        "fcfM": 0.13
      }
    },
    {
      "tk": "MU",
      "nm": "Micron",
      "bz": "DRAM / HBM memory",
      "color": "#0073CF",
      "layer": "memory",
      "share": {
        "pct": 23,
        "rank": "#3",
        "conf": "high",
        "market": "DRAM + HBM memory"
      },
      "price": 971.66,
      "mcap": 1005.8,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The Western HBM lever — AI accelerators need ever more high-bandwidth memory, reportedly sold out for 2026 on binding contracts; latest quarter revenue +196% YoY, Q3 FY26 guide ~$33.5B at ~81% gross margin (records).",
      "bull": "HBM sold out with pricing power; ~81% guided gross margin; net cash; cheap on fwd P/E.",
      "bear": "Brutally cyclical commodity memory on peak earnings; heavy capex; stock at ~$1,000 record.",
      "r": {
        "val": 6,
        "growth": 9,
        "roic": 7,
        "moat": 6,
        "fcf": 6,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 22.0,
        "peFwd": 6.3,
        "pegFwd": 0.2,
        "evEbitda": 15.8,
        "evSales": 11.9,
        "pfcf": 14,
        "fcfYield": 0.9,
        "revCagrHist": 345.7,
        "epsCagrFwd": 40,
        "gross": 72.6,
        "op": 80.4,
        "net": 55.9,
        "roic": 37,
        "roe": 66.6,
        "fcfMargin": 18,
        "fcfConv": 75,
        "sbc": 3,
        "netDebtEbitda": -0.3,
        "intCov": 30
      },
      "d": {
        "revPS": 80.24,
        "netCashPS": 5.2,
        "fcfM": 0.17
      }
    },
    {
      "tk": "ANET",
      "nm": "Arista Networks",
      "bz": "Data-center networking",
      "color": "#249FDB",
      "layer": "networking",
      "share": {
        "pct": 45,
        "rank": "#1",
        "conf": "high",
        "market": "high-speed data-center switching"
      },
      "price": 198.82,
      "mcap": 250.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The AI-back-end networking standard — 400/800G Ethernet for the largest AI clusters; TTM revenue ~$11.5B (+31%), ~38% net margin, ~$12B net cash.",
      "bull": "Share leader in cloud/AI Ethernet; ~64% gross margin, ~$12B net cash, exceptional ROIC.",
      "bear": "Hyperscaler customer concentration; ~45x fwd P/E near all-time highs.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 10,
        "moat": 8,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 62.9,
        "peFwd": 38.5,
        "pegFwd": 1.5,
        "evEbitda": 51.2,
        "evSales": 22.5,
        "pfcf": 50,
        "fcfYield": 2.5,
        "revCagrHist": 37.7,
        "epsCagrFwd": 28,
        "gross": 63.0,
        "op": 45.4,
        "net": 38.4,
        "roic": 60,
        "roe": 31.5,
        "fcfMargin": 35,
        "fcfConv": 95,
        "sbc": 3,
        "netDebtEbitda": -2,
        "intCov": 999
      },
      "d": {
        "revPS": 8.38,
        "netCashPS": 9.8,
        "fcfM": 0.46
      }
    },
    {
      "tk": "COHR",
      "nm": "Coherent",
      "bz": "Optical transceivers & lasers",
      "color": "#005EB8",
      "layer": "optics",
      "share": {
        "pct": 35,
        "rank": "#1",
        "conf": "medium",
        "market": "datacom optical transceivers"
      },
      "price": 325.83,
      "mcap": 63.75,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "An optics play levered straight to AI bandwidth — 800G/1.6T transceivers plus co-packaged optics; NVIDIA took a ~$2B stake with a multiyear CPO supply deal, backlog runs into CY2028, and leverage has fallen to ~0.5x EBITDA.",
      "bull": "Leading datacom optics into the AI surge; NVIDIA CPO partnership; rapid deleveraging.",
      "bear": "Still thin GAAP margins; competitive transceiver pricing; ~46x fwd P/E.",
      "r": {
        "val": 5,
        "growth": 9,
        "roic": 4,
        "moat": 6,
        "fcf": 5,
        "bs": 4,
        "scal": 7
      },
      "m": {
        "peTTM": 79.3,
        "peFwd": 23.4,
        "pegFwd": 1.1,
        "evEbitda": 46.2,
        "evSales": 9.2,
        "pfcf": 40,
        "fcfYield": 1,
        "revCagrHist": 33.7,
        "epsCagrFwd": 40,
        "gross": 37.5,
        "op": 11.8,
        "net": 11.3,
        "roic": 6,
        "roe": 8.0,
        "fcfMargin": 8,
        "fcfConv": 70,
        "sbc": 3,
        "netDebtEbitda": 0.5,
        "intCov": 6
      },
      "d": {
        "revPS": 40.16,
        "netCashPS": -5.1,
        "fcfM": 0.08
      }
    },
    {
      "tk": "CIEN",
      "nm": "Ciena",
      "bz": "Coherent optical / DCI",
      "color": "#0091B3",
      "layer": "optics",
      "share": {
        "pct": 25,
        "rank": "#2",
        "conf": "medium",
        "market": "coherent optical networking"
      },
      "price": 428.77,
      "mcap": 60.69,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Coherent optical systems connecting data centers; Q2 FY26 revenue +40% YoY, FY26 guide raised to ~$6.3B (+32%), adj. EBITDA tripled to ~$340M as cloud/DCI demand inflects.",
      "bull": "Hyperscaler DCI demand inflecting; +40% revenue, FY guide raised; margins recovering.",
      "bear": "Lumpy carrier mix; valuation has run hard — ~70x fwd P/E on a recovering base.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 6,
        "moat": 6,
        "fcf": 6,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 142.9,
        "peFwd": 44.5,
        "pegFwd": 1.1,
        "evEbitda": 77.7,
        "evSales": 11.0,
        "pfcf": 40,
        "fcfYield": 1,
        "revCagrHist": 39.5,
        "epsCagrFwd": 35,
        "gross": 43,
        "op": 15.2,
        "net": 7.9,
        "roic": 18,
        "roe": 15.5,
        "fcfMargin": 10,
        "fcfConv": 80,
        "sbc": 3,
        "netDebtEbitda": 1,
        "intCov": 12
      },
      "d": {
        "revPS": 39.28,
        "netCashPS": -5,
        "fcfM": 0.14
      }
    },
    {
      "tk": "SMCI",
      "nm": "Super Micro",
      "bz": "AI servers & liquid-cooled systems",
      "color": "#19A974",
      "layer": "servers",
      "share": {
        "pct": 8,
        "rank": "#2",
        "conf": "low",
        "market": "AI server systems"
      },
      "price": 39.84,
      "mcap": 25.77,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The fastest AI-server assembler, first to scale liquid-cooled racks (~$13B Blackwell backlog) — but \"survival pricing\" gutted gross margin to ~9%, it now carries net debt, and material-weakness/governance scars persist after January's Nasdaq re-compliance.",
      "bull": "First-mover in liquid-cooled AI racks; ~$40B FY26 revenue guide; ramping to ~6,000 racks/month.",
      "bear": "~9% gross margins amid a server price war; net debt; lingering governance discount.",
      "r": {
        "val": 4,
        "growth": 10,
        "roic": 6,
        "moat": 3,
        "fcf": 3,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 21.0,
        "peFwd": 7.5,
        "pegFwd": 0.7,
        "evEbitda": 10.8,
        "evSales": 0.8,
        "pfcf": 18,
        "fcfYield": 2,
        "revCagrHist": 93.2,
        "epsCagrFwd": 20,
        "gross": 10.8,
        "op": 13.4,
        "net": 5.7,
        "roic": 10,
        "roe": 21.5,
        "fcfMargin": 4,
        "fcfConv": 40,
        "sbc": 2,
        "netDebtEbitda": 2.2,
        "intCov": 15
      },
      "d": {
        "revPS": 64.91,
        "netCashPS": -3.4,
        "fcfM": 0.01
      }
    },
    {
      "tk": "DELL",
      "nm": "Dell Technologies",
      "bz": "AI servers + infrastructure",
      "color": "#007DB8",
      "layer": "servers",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "enterprise & AI server shipments"
      },
      "price": 490.81,
      "mcap": 317.13,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The enterprise AI-server share leader riding a record AI-server backlog; LTM revenue ~$134B, FY27 guide ~$140B, ~$11B annual cash flow and ROIC above WACC.",
      "bull": "#1 AI-server backlog + scale; strong FCF and capital returns; ROIC &gt; WACC.",
      "bear": "A server price war (partly SMCI-driven) pressures already-thin margins; ~$20B net debt.",
      "r": {
        "val": 6,
        "growth": 7,
        "roic": 9,
        "moat": 5,
        "fcf": 8,
        "bs": 4,
        "scal": 6
      },
      "m": {
        "peTTM": 39.1,
        "peFwd": 22.2,
        "pegFwd": 1.2,
        "evEbitda": 24.1,
        "evSales": 2.5,
        "pfcf": 14,
        "fcfYield": 3.5,
        "revCagrHist": 87.5,
        "epsCagrFwd": 14,
        "gross": 19.2,
        "op": 8.9,
        "net": 6.3,
        "roic": 15,
        "roe": 150,
        "fcfMargin": 6,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 1.5,
        "intCov": 12
      },
      "d": {
        "revPS": 201.73,
        "netCashPS": -31,
        "fcfM": 0.07
      }
    },
    {
      "tk": "VRT",
      "nm": "Vertiv",
      "bz": "Power & thermal management",
      "color": "#00857D",
      "layer": "power",
      "share": {
        "pct": 22,
        "rank": "#1",
        "conf": "high",
        "market": "data-center power & cooling systems"
      },
      "price": 293.84,
      "mcap": 113.12,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The pure-play on data-center power and liquid cooling — Q1 26 net sales +30% (+23% organic), FY26 guide $13.25-13.75B (~+28%), adj. op margin ~21%, ~32% ROIC, modest net debt.",
      "bull": "Leader in DC power/thermal with surging orders and margin expansion; less exposed to the box price war.",
      "bear": "Cyclical capex exposure; ~44x fwd P/E leaves little room for error.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 9,
        "moat": 7,
        "fcf": 8,
        "bs": 6,
        "scal": 8
      },
      "m": {
        "peTTM": 66.6,
        "peFwd": 32.3,
        "pegFwd": 1.6,
        "evEbitda": 42.3,
        "evSales": 9.9,
        "pfcf": 45,
        "fcfYield": 2.3,
        "revCagrHist": 24.1,
        "epsCagrFwd": 28,
        "gross": 38.0,
        "op": 20.4,
        "net": 15.1,
        "roic": 32,
        "roe": 43.9,
        "fcfMargin": 14,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 0.3,
        "intCov": 20
      },
      "d": {
        "revPS": 29.97,
        "netCashPS": -2,
        "fcfM": 0.17
      }
    },
    {
      "tk": "EQIX",
      "nm": "Equinix",
      "bz": "Data-center REIT (colocation)",
      "color": "#ED1C24",
      "layer": "reits",
      "share": {
        "pct": 12,
        "rank": "#1",
        "conf": "high",
        "market": "retail colocation / interconnection"
      },
      "price": 1102.1,
      "mcap": 108.75,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The interconnection-dense colocation REIT with a global network-effect moat; FY26 revenue guide ~+9-10%, ~51% adj-EBITDA margin, AFFO/sh +10-12%, record Q1'26 bookings ~60% AI-linked. Judge on ~25x P/AFFO and ~2% yield, not GAAP P/E.",
      "bull": "Interconnection moat and pricing power; record bookings, ~60% AI-linked.",
      "bear": "~$4.1B growth capex keeps FCF thin; AI training favors hyperscale over retail colo; ~25x P/AFFO.",
      "r": {
        "val": 4,
        "growth": 7,
        "roic": 6,
        "moat": 9,
        "fcf": 7,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 70.9,
        "peFwd": 58.4,
        "pegFwd": 4,
        "evEbitda": 28.9,
        "evSales": 13.2,
        "pfcf": 40,
        "fcfYield": 1.9,
        "revCagrHist": 16.7,
        "epsCagrFwd": 11,
        "gross": 52.0,
        "op": 27.0,
        "net": 15.5,
        "roic": 5,
        "roe": 10.7,
        "fcfMargin": 20,
        "fcfConv": 80,
        "sbc": 1,
        "netDebtEbitda": 4.2,
        "intCov": 8
      },
      "d": {
        "revPS": 100.75,
        "netCashPS": -221,
        "fcfM": 0.2
      }
    },
    {
      "tk": "DLR",
      "nm": "Digital Realty",
      "bz": "Hyperscale data-center REIT",
      "color": "#0061A0",
      "layer": "reits",
      "share": {
        "pct": 10,
        "rank": "#2",
        "conf": "high",
        "market": "hyperscale data-center capacity"
      },
      "price": 200.15,
      "mcap": 75.4,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Scaled hyperscale-capacity landlord; 2026 core FFO/sh guide $8.00-8.10 (~+13%), ~2.6% yield, with a record $16.5B development pipeline (61% pre-leased) and a 200MW single AI-inference lease. Judge on ~26x P/FFO.",
      "bull": "Record hyperscale leasing and a $16.5B development pipeline; FFO guide raised.",
      "bear": "Development capex keeps FCF negative; rate-sensitive; ~4.7x net debt/EBITDA.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 5,
        "moat": 8,
        "fcf": 6,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 256.6,
        "peFwd": 69.2,
        "pegFwd": 3.5,
        "evEbitda": 29.6,
        "evSales": 14.1,
        "pfcf": 45,
        "fcfYield": 2.6,
        "revCagrHist": 29.9,
        "epsCagrFwd": 13,
        "gross": 57.0,
        "op": 25.9,
        "net": 11.8,
        "roic": 5,
        "roe": 2.9,
        "fcfMargin": 18,
        "fcfConv": 70,
        "sbc": 1,
        "netDebtEbitda": 4.7,
        "intCov": 5
      },
      "d": {
        "revPS": 19.53,
        "netCashPS": -48,
        "fcfM": 0.16
      }
    },
    {
      "tk": "MSFT",
      "nm": "Microsoft",
      "bz": "Hyperscaler (Azure + OpenAI)",
      "color": "#737373",
      "layer": "cloud",
      "share": {
        "pct": 24,
        "rank": "#2",
        "conf": "high",
        "market": "public cloud (IaaS+PaaS)"
      },
      "price": 495.4,
      "mcap": 3678.62,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The enterprise AI distribution machine — Azure re-accelerated to ~+40% cc with an AI run-rate ~$37B (+123%) and capacity-constrained; ~47% operating margin. Stock de-rated ~19% YTD to near a 52-week low on capex fears.",
      "bull": "Azure AI re-acceleration + Copilot attach across a vast install base; fortress balance sheet; cheapest fwd P/E in years.",
      "bear": "~$190B FY26 capex compresses FCF (~$73B vs ~$170B OCF); growth still capacity-gated.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 10,
        "moat": 10,
        "fcf": 9,
        "bs": 10,
        "scal": 9
      },
      "m": {
        "peTTM": 27.6,
        "peFwd": 21.0,
        "pegFwd": 1.3,
        "evEbitda": 19.2,
        "evSales": 11.2,
        "pfcf": 40,
        "fcfYield": 2.6,
        "revCagrHist": 17.7,
        "epsCagrFwd": 16,
        "gross": 67.9,
        "op": 45.1,
        "net": 40.3,
        "roic": 27,
        "roe": 34,
        "fcfMargin": 28,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 0.3,
        "intCov": 999
      },
      "d": {
        "revPS": 44.67,
        "netCashPS": -6.4,
        "fcfM": 0.23
      }
    },
    {
      "tk": "ORCL",
      "nm": "Oracle",
      "bz": "Cloud infrastructure (OCI)",
      "color": "#C74634",
      "layer": "cloud",
      "share": {
        "pct": 6,
        "rank": "#4",
        "conf": "medium",
        "market": "public cloud infrastructure (OCI)"
      },
      "price": 150.52,
      "mcap": 433.57,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The surprise AI-cloud share-taker — RPO backlog ~$638B (+363% YoY) as AI labs rent OCI (+93% YoY), but FY26 revenue grew only ~17% and FCF turned deeply negative (~-$24B) on ~$50B debt-funded GPU/datacenter capex.",
      "bull": "Explosive OCI/RPO backlog; differentiated AI-cluster economics; Stargate-scale contracts.",
      "bear": "Negative FCF and rising debt fund the buildout; backlog conversion and GPU returns are the open question.",
      "r": {
        "val": 3,
        "growth": 9,
        "roic": 7,
        "moat": 6,
        "fcf": 5,
        "bs": 4,
        "scal": 8
      },
      "m": {
        "peTTM": 25.8,
        "peFwd": 13.8,
        "pegFwd": 1.1,
        "evEbitda": 18.8,
        "evSales": 8.5,
        "pfcf": 45,
        "fcfYield": 1.5,
        "revCagrHist": 20.6,
        "epsCagrFwd": 20,
        "gross": 65.8,
        "op": 36.2,
        "net": 25.4,
        "roic": 15,
        "roe": 53.4,
        "fcfMargin": 8,
        "fcfConv": 40,
        "sbc": 3,
        "netDebtEbitda": 4,
        "intCov": 8
      },
      "d": {
        "revPS": 23.55,
        "netCashPS": -44,
        "fcfM": -0.35
      }
    }
  ]
};
