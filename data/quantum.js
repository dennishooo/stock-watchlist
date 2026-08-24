/* quantum — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-08-24 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Quantum Computing — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · quantum-computing value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">quantum</span><br>value chain,<br><span class=\"tnum\">10</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the pure-play quantum hardware names, through the big-tech quantum programs, out to the enabling hardware\n       (cryogenic test, GPU acceleration). The frontier theme of 2026 - mostly optionality, graded on growth, moat direction,\n       balance-sheet runway and what today's price already assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"10\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"3\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 24 Aug 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price and market cap are from public market data <b>as of ~10 Jun 2026</b> and drift as prices move. The\n      pure-plays (IonQ, Rigetti, D-Wave, QCI) are <b>pre-revenue research bets</b> with n/m P/E, tiny sales (EV/Sales reads extreme) and\n      deep losses - graded on cash runway and optionality, not returns. For the big-tech names quantum is a rounding error; they are\n      really valued on AI/cloud. ROIC/FCF and the 0-10 scores are derived estimates.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices and market caps are from public market data <b>as of ~10 Jun 2026</b> and are point-in-time. The pure-play quantum names are pre-revenue: P/E is n/m, EV/Sales is extreme on negligible sales, and they are graded on growth, moat and balance-sheet runway, not current returns. For the big-tech names (IBM, Alphabet, Microsoft, Honeywell, NVIDIA) quantum is immaterial to financials - the figures reflect the whole company. ROIC, FCF and the 0-10 radar scores are the author's estimates. Commercial quantum advantage is still years out.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A pure-play qubit maker and a GPU accelerator can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. The pure-plays show n/m multiples, extreme EV/Sales and deeply negative margins - read them on cash runway and growth, not returns; the big-tech names reflect whole-company AI/cloud economics, not quantum.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate share <b>within each company's served market</b> - grouped by layer, so a modality leader (trapped-ion, GPU acceleration) reads differently from a contested field (superconducting, big-tech programs). Figures are illustrative estimates - confidence is low here."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "pureplay",
      "label": "Pure-play quantum",
      "c": "#C0392B"
    },
    {
      "k": "bigtech",
      "label": "Big-tech quantum",
      "c": "#1B6CA8"
    },
    {
      "k": "enabling",
      "label": "Enabling hardware",
      "c": "#1E8E6B"
    }
  ],
  "data": [
    {
      "tk": "IONQ",
      "nm": "IonQ",
      "bz": "Trapped-ion quantum computers",
      "color": "#0B7DC4",
      "layer": "pureplay",
      "share": {
        "pct": 30,
        "rank": "#1",
        "conf": "low",
        "market": "trapped-ion quantum systems"
      },
      "price": 44.86,
      "mcap": 18.17,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The leading trapped-ion pure-play; Q1 26 revenue $64.7M (+755%), FY26 guide raised to ~$260-270M, but still deeply loss-making with ~$3.1B net cash. At ~$21B cap the valuation is a long-dated option on fault tolerance and quantum networking.",
      "bull": "Highest-profile pure-play; networking optionality and a deep ~$3.1B cash pile.",
      "bear": "~$21B cap on sub-$300M revenue; deep losses; long road to fault tolerance.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 6,
        "fcf": 1,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 61.0,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 286.8,
        "epsCagrFwd": 80,
        "gross": 30.9,
        "op": -99,
        "net": 0.0,
        "roic": -30,
        "roe": -60.5,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 20,
        "netDebtEbitda": -3,
        "intCov": 1
      },
      "d": {
        "revPS": 0.72,
        "netCashPS": 4.5,
        "fcfM": -3
      }
    },
    {
      "tk": "RGTI",
      "nm": "Rigetti Computing",
      "bz": "Superconducting quantum",
      "color": "#6A1B9A",
      "layer": "pureplay",
      "share": {
        "pct": 15,
        "rank": "#3",
        "conf": "low",
        "market": "superconducting quantum processors"
      },
      "price": 17.91,
      "mcap": 5.98,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A vertically integrated superconducting-qubit pure-play; Q1 26 revenue just $4.4M (+193%) with a ~$26M op loss and ~31% gross margin. No debt and a multi-year cash runway, but pre-commercial and dilutive; valued entirely on modality optionality.",
      "bull": "Vertically integrated superconducting stack; improving fidelity, bookings and no debt.",
      "bear": "$4.4M quarterly revenue, cash-burning and dilutive; behind on scale.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 5,
        "fcf": 1,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 250,
        "pfcf": 99,
        "fcfYield": -2,
        "revCagrHist": 185.3,
        "epsCagrFwd": 90,
        "gross": 34.6,
        "op": -99,
        "net": 0,
        "roic": -30,
        "roe": -43.8,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 25,
        "netDebtEbitda": -2,
        "intCov": 1
      },
      "d": {
        "revPS": 0.04,
        "netCashPS": 1.5,
        "fcfM": -8
      }
    },
    {
      "tk": "QBTS",
      "nm": "D-Wave Quantum",
      "bz": "Annealing + gate quantum",
      "color": "#00897B",
      "layer": "pureplay",
      "share": {
        "pct": 10,
        "rank": "#4",
        "conf": "low",
        "market": "quantum annealing systems"
      },
      "price": 20.39,
      "mcap": 7.59,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The commercial-annealing pioneer with a gate-model roadmap; Q1 26 revenue fell to $2.9M (-81% on a prior-year system sale) but record bookings $33.4M and RPO $42.4M with ~$588M cash. Deeply unprofitable; valued on optimization traction and runway.",
      "bull": "Real annealing/optimization use-cases; record $33.4M bookings, ~$588M cash, gate roadmap.",
      "bear": "Revenue lumpy and down YoY; annealing's general-purpose value debated; ongoing losses.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 5,
        "fcf": 1,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 200,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": -0.6,
        "epsCagrFwd": 80,
        "gross": 64.2,
        "op": -99,
        "net": 0,
        "roic": -30,
        "roe": -28.0,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 20,
        "netDebtEbitda": -2,
        "intCov": 1
      },
      "d": {
        "revPS": 0.04,
        "netCashPS": 2,
        "fcfM": -6
      }
    },
    {
      "tk": "QUBT",
      "nm": "Quantum Computing Inc",
      "bz": "Photonic quantum + chips",
      "color": "#C2185B",
      "layer": "pureplay",
      "share": {
        "pct": 5,
        "rank": "#5",
        "conf": "low",
        "market": "photonic quantum / thin-film chips"
      },
      "price": 8.92,
      "mcap": 2.02,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A speculative photonic-quantum and thin-film-chip story; Q1 26 revenue $3.7M (off a $39K base) with negative gross margin and a ~$20.6M op loss, funded by a ~$1.4B cash pile backing a foundry plan. Binary, hype-driven outcomes.",
      "bull": "Photonic approach plus a chip-foundry angle; large ~$1.4B cash cushion and optionality.",
      "bear": "Negative gross margin on negligible revenue; among the most speculative names here.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 4,
        "fcf": 1,
        "bs": 8,
        "scal": 6
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 110.8,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 90,
        "epsCagrFwd": 90,
        "gross": -15.4,
        "op": -99,
        "net": -152.5,
        "roic": -30,
        "roe": -1.5,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 30,
        "netDebtEbitda": -1,
        "intCov": 1
      },
      "d": {
        "revPS": 0.05,
        "netCashPS": 5,
        "fcfM": -8
      }
    },
    {
      "tk": "IBM",
      "nm": "IBM",
      "bz": "Enterprise quantum (Nighthawk/roadmap)",
      "color": "#1F70C1",
      "layer": "bigtech",
      "share": {
        "pct": 25,
        "rank": "#1",
        "conf": "medium",
        "market": "enterprise quantum systems & cloud"
      },
      "price": 235.68,
      "mcap": 222.04,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The enterprise quantum leader by roadmap (Nighthawk 360-qubit target end-2026, $10B/5yr commitment), funded by a profitable software/services base. Q1 26 revenue +9.5%; PE ~22 with ~$58B net debt. A dividend-paying compounder where quantum is upside optionality, not earnings.",
      "bull": "Credible quantum roadmap plus enterprise distribution; cash-generative, dividend-paying base.",
      "bear": "Quantum immaterial to earnings; ~$58B net debt and only modest core growth.",
      "r": {
        "val": 5,
        "growth": 5,
        "roic": 7,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 20.9,
        "peFwd": 17.9,
        "pegFwd": 2.6,
        "evEbitda": 17.0,
        "evSales": 4.0,
        "pfcf": 18,
        "fcfYield": 5,
        "revCagrHist": 1.1,
        "epsCagrFwd": 7,
        "gross": 58.1,
        "op": 16.5,
        "net": 15.5,
        "roic": 12,
        "roe": 34.5,
        "fcfMargin": 16,
        "fcfConv": 90,
        "sbc": 3,
        "netDebtEbitda": 2.2,
        "intCov": 12
      },
      "d": {
        "revPS": 73.7,
        "netCashPS": -25,
        "fcfM": 0.16
      }
    },
    {
      "tk": "GOOGL",
      "nm": "Alphabet",
      "bz": "Quantum (Willow) + AI",
      "color": "#EA4335",
      "layer": "bigtech",
      "share": {
        "pct": 25,
        "rank": "#1",
        "conf": "medium",
        "market": "quantum research (Willow chip)"
      },
      "price": 344.82,
      "mcap": 4217.13,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Willow's error-correction milestones make Alphabet a quantum frontrunner, funded by one of the best cash engines anywhere (Q1 26 revenue +22%, Cloud +63%). Raised ~$85B for AI infrastructure. Net-cash balance sheet; valued on AI/ads/cloud, with quantum as free optionality.",
      "bull": "Leading quantum research plus near-limitless funding; AI/search/cloud cash machine.",
      "bear": "Quantum is a rounding error to the P&amp;L; ~$85B raise signals heavy AI capex.",
      "r": {
        "val": 6,
        "growth": 8,
        "roic": 10,
        "moat": 9,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 17.3,
        "peFwd": 23.3,
        "pegFwd": 1.4,
        "evEbitda": 23.8,
        "evSales": 9.2,
        "pfcf": 26,
        "fcfYield": 3,
        "revCagrHist": 24.2,
        "epsCagrFwd": 14,
        "gross": 60.9,
        "op": 34.0,
        "net": 54.8,
        "roic": 30,
        "roe": 48.7,
        "fcfMargin": 24,
        "fcfConv": 90,
        "sbc": 4,
        "netDebtEbitda": -1,
        "intCov": 999
      },
      "d": {
        "revPS": 36.84,
        "netCashPS": 3,
        "fcfM": 0.24
      }
    },
    {
      "tk": "MSFT",
      "nm": "Microsoft",
      "bz": "Topological quantum (Majorana)",
      "color": "#737373",
      "layer": "bigtech",
      "share": {
        "pct": 20,
        "rank": "#2",
        "conf": "low",
        "market": "topological quantum + Azure Quantum"
      },
      "price": 483.24,
      "mcap": 3588.32,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A differentiated topological-qubit bet (Majorana 1) plus Azure Quantum distribution, atop the enterprise-AI machine (~47% op margin, ~18% revenue growth). Stock down ~19% YTD on AI-capex concerns. Fortress balance sheet; quantum immaterial near-term, valued on Azure/AI.",
      "bull": "Novel topological approach plus Azure Quantum distribution; fortress base, ~47% op margin.",
      "bear": "Topological qubits unproven; heavy AI capex and ~10x EV/Sales leave little margin of safety.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 10,
        "moat": 10,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 27.0,
        "peFwd": 20.5,
        "pegFwd": 2.4,
        "evEbitda": 18.7,
        "evSales": 11.0,
        "pfcf": 40,
        "fcfYield": 2.3,
        "revCagrHist": 17.7,
        "epsCagrFwd": 14,
        "gross": 67.9,
        "op": 45.1,
        "net": 40.3,
        "roic": 28,
        "roe": 34,
        "fcfMargin": 28,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": -0.5,
        "intCov": 999
      },
      "d": {
        "revPS": 44.67,
        "netCashPS": 5,
        "fcfM": 0.3
      }
    },
    {
      "tk": "HON",
      "nm": "Honeywell",
      "bz": "Quantinuum (trapped-ion) parent",
      "color": "#E61E28",
      "layer": "bigtech",
      "share": {
        "pct": 30,
        "rank": "#1",
        "conf": "medium",
        "market": "trapped-ion quantum (Quantinuum)"
      },
      "price": 215.9,
      "mcap": 68.43,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Honeywell holds a majority of Quantinuum, which IPO'd on Nasdaq 5 Jun 2026 (raised $1.68B, ~$15.7B value; HON kept ~48% voting) — a now-public quantum call option inside a diversified industrial. The aerospace spin-off completes 29 Jun 2026, further surfacing value.",
      "bull": "Majority stake in a top trapped-ion player, now public; aerospace spin completes 29 Jun.",
      "bear": "Core Honeywell barely growing (revenue +1%); ~$22B net debt; quantum stake still small.",
      "r": {
        "val": 5,
        "growth": 5,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 8.3,
        "peFwd": 21.6,
        "pegFwd": 2.6,
        "evEbitda": 11.1,
        "evSales": 2.5,
        "pfcf": 22,
        "fcfYield": 4,
        "revCagrHist": 4.3,
        "epsCagrFwd": 8,
        "gross": 36.5,
        "op": 20.2,
        "net": 21.6,
        "roic": 14,
        "roe": 46.6,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 1.8,
        "intCov": 15
      },
      "d": {
        "revPS": 119.9,
        "netCashPS": -15,
        "fcfM": 0.15
      }
    },
    {
      "tk": "FORM",
      "nm": "FormFactor",
      "bz": "Cryogenic test & probe cards",
      "color": "#1E8E6B",
      "layer": "enabling",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "medium",
        "market": "semiconductor probe cards + cryo test"
      },
      "price": 114.16,
      "mcap": 8.9,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A picks-and-shovels enabler — probe cards and cryogenic test for quantum and advanced chips; Q1 26 revenue +32% on AI/HBM demand, net-cash balance sheet. Profitable base under the quantum/cryo optionality, but a June rally pushed it to ~80x trailing earnings.",
      "bull": "Profitable test-equipment franchise riding AI/HBM, with quantum/cryo optionality and net cash.",
      "bear": "Quantum is a small slice; semi-test cyclicality dominates; ~80x trailing PE leaves no cushion.",
      "r": {
        "val": 3,
        "growth": 7,
        "roic": 6,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 7
      },
      "m": {
        "peTTM": 78.7,
        "peFwd": 32.9,
        "pegFwd": 1.7,
        "evEbitda": 46.1,
        "evSales": 9.5,
        "pfcf": 40,
        "fcfYield": 1.5,
        "revCagrHist": 31.9,
        "epsCagrFwd": 15,
        "gross": 46.2,
        "op": 24.1,
        "net": 12.8,
        "roic": 12,
        "roe": 11.0,
        "fcfMargin": 14,
        "fcfConv": 90,
        "sbc": 4,
        "netDebtEbitda": -1.5,
        "intCov": 999
      },
      "d": {
        "revPS": 11.61,
        "netCashPS": 8,
        "fcfM": 0.14
      }
    },
    {
      "tk": "NVDA",
      "nm": "NVIDIA",
      "bz": "Quantum-classical (CUDA-Q + GPUs)",
      "color": "#76B900",
      "layer": "enabling",
      "share": {
        "pct": 80,
        "rank": "#1",
        "conf": "high",
        "market": "GPU-accelerated quantum simulation"
      },
      "price": 214.72,
      "mcap": 5200.73,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The hybrid-quantum kingmaker — GPUs and CUDA-Q simulate and orchestrate quantum systems, so NVIDIA wins regardless of which qubit modality prevails. Q1 FY27 revenue $68.1B (+73%), ~74% gross margin, world's most valuable company at ~$5T. Quantum is optionality on an AI-compute monster.",
      "bull": "Owns the classical-acceleration layer every quantum roadmap leans on; ~74% margin cash machine.",
      "bear": "Quantum immaterial to revenue; entirely an AI-compute bet at a ~$5T cap.",
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
        "peTTM": 32.9,
        "peFwd": 16.5,
        "pegFwd": 0.5,
        "evEbitda": 31.2,
        "evSales": 20.3,
        "pfcf": 30,
        "fcfYield": 2.5,
        "revCagrHist": 85.2,
        "epsCagrFwd": 45,
        "gross": 74.1,
        "op": 65.6,
        "net": 63,
        "roic": 90,
        "roe": 114.3,
        "fcfMargin": 48,
        "fcfConv": 95,
        "sbc": 3.5,
        "netDebtEbitda": -1.5,
        "intCov": 999
      },
      "d": {
        "revPS": 10.42,
        "netCashPS": 1.5,
        "fcfM": 0.48
      }
    }
  ]
};
