/* power — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-07-06 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Nuclear & Power — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · nuclear & power value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">electric power</span><br>value chain,<br><span class=\"tnum\">14</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From uranium and the fuel cycle, through SMR developers and reactor builders, the nuclear utilities and\n       independent power producers, the grid and electrical-equipment makers, out to renewables. The \"AI needs power\" super-cycle,\n       graded on returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"14\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 6 Jul 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, P/E, margins and revenue/guidance are from public market data and filings\n      <b>as of ~10 Jun 2026</b> and drift as prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. The\n      SMR/uranium developers (NuScale, Oklo, NexGen, Uranium Energy) are <b>pre-commercial</b>: trailing P/E is n/m and they are\n      graded on optionality and balance-sheet runway, not current returns - EV/Sales reads extreme on their tiny revenue.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, P/E, margins and revenue/guidance are gathered from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Several uranium/SMR names are pre-commercial, so their forward P/E and EV/Sales are not meaningful; they are graded on growth, moat and balance-sheet runway. Reverse-DCF uses a 10-year FCF-to-equity model and is least reliable for the pre-revenue names.<br><br><b>Verify live before acting.</b> This is an analytical tool, not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A uranium miner and a grid-equipment maker can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, every row color-graded best&#8594;worst within the cohort (green = best). Click a column header to sort. Headline ratios are sourced ~10 Jun 2026; ROIC/FCF rows are estimates. Pre-revenue developers show n/m multiples and negative margins - read them on cash runway, not returns.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a near-monopoly (naval reactors, US nuclear fleet) reads very differently from a contested field (uranium, grid construction). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "uranium",
      "label": "Uranium & fuel",
      "c": "#5B8C5A"
    },
    {
      "k": "smr",
      "label": "SMR & reactors",
      "c": "#7FA650"
    },
    {
      "k": "utilities",
      "label": "Nuclear utilities / IPPs",
      "c": "#1B6CA8"
    },
    {
      "k": "grid",
      "label": "Grid & electrical",
      "c": "#1E8E6B"
    },
    {
      "k": "renewables",
      "label": "Renewables",
      "c": "#C9742B"
    }
  ],
  "data": [
    {
      "tk": "CCJ",
      "nm": "Cameco",
      "bz": "Uranium miner + fuel cycle",
      "color": "#2E7D32",
      "layer": "uranium",
      "share": {
        "pct": 20,
        "rank": "#2",
        "conf": "high",
        "market": "global uranium production"
      },
      "price": 96.54,
      "mcap": 42.05,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The Western uranium major (plus a Westinghouse stake) and the cleanest large-cap lever on the nuclear-fuel up-cycle; TTM revenue ~$3.6B (+35%), trailing P/E ~92x on still-recovering earnings, with EV/EBITDA above 50x pricing a sustained price cycle.",
      "bull": "Tier-1 reserves + Westinghouse fuel/services; contracting cycle and revenue accelerating.",
      "bear": "Uranium-price and contracting volatility; ~92x trailing, ~50x EV/EBITDA.",
      "r": {
        "val": 3,
        "growth": 8,
        "roic": 6,
        "moat": 8,
        "fcf": 6,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 91.9,
        "peFwd": 51.6,
        "pegFwd": 2,
        "evEbitda": 46.9,
        "evSales": 11.9,
        "pfcf": 60,
        "fcfYield": 1.9,
        "revCagrHist": 7.1,
        "epsCagrFwd": 25,
        "gross": 36.8,
        "op": 18.2,
        "net": 18.4,
        "roic": 8,
        "roe": 9.6,
        "fcfMargin": 12,
        "fcfConv": 80,
        "sbc": 1,
        "netDebtEbitda": 0.3,
        "intCov": 15
      },
      "d": {
        "revPS": 5.8,
        "netCashPS": 0.2,
        "fcfM": 0.13
      }
    },
    {
      "tk": "UEC",
      "nm": "Uranium Energy",
      "bz": "US uranium developer (ISR)",
      "color": "#43A047",
      "layer": "uranium",
      "share": {
        "pct": 5,
        "rank": "#5",
        "conf": "low",
        "market": "U.S. in-situ uranium production"
      },
      "price": 10.77,
      "mcap": 5.33,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A US-focused low-cost ISR uranium developer leveraged to domestic-supply security; production ramping but still loss-making (net ~-$88M), with a ~$6B cap on minimal revenue. Debt-free balance sheet funds the restart; earnings multiples are n/m — a pure spot-uranium and execution option.",
      "bull": "Unhedged US production restart into a tight market; debt-light, no debt.",
      "bear": "Loss-making on tiny revenue; fully exposed to spot-uranium swings; richly valued.",
      "r": {
        "val": 2,
        "growth": 8,
        "roic": 1,
        "moat": 5,
        "fcf": 2,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 239.8,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 30,
        "epsCagrFwd": 50,
        "gross": 0,
        "op": -20,
        "net": 0,
        "roic": -3,
        "roe": -9,
        "fcfMargin": -15,
        "fcfConv": 0,
        "sbc": 5,
        "netDebtEbitda": -0.5,
        "intCov": 1
      },
      "d": {
        "revPS": 0.04,
        "netCashPS": 0.5,
        "fcfM": -0.15
      }
    },
    {
      "tk": "NXE",
      "nm": "NexGen Energy",
      "bz": "Uranium developer (Rook I)",
      "color": "#66BB6A",
      "layer": "uranium",
      "share": {
        "pct": 5,
        "rank": "#4",
        "conf": "low",
        "market": "Athabasca Basin uranium (pre-production)"
      },
      "price": 9.63,
      "mcap": 6.37,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A pre-revenue developer of the high-grade Rook I project in Saskatchewan — fully permitted, with construction underway in 2026; a pure construction-and-uranium-price option carrying ~$213M net cash but no earnings. Valued on resource leverage and optionality, not returns.",
      "bull": "World-class high-grade deposit, now permitted; large resource leverage, net cash.",
      "bear": "Pre-revenue and capital-hungry; construction, financing and price risk.",
      "r": {
        "val": 1,
        "growth": 9,
        "roic": 1,
        "moat": 6,
        "fcf": 1,
        "bs": 7,
        "scal": 6
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
        "epsCagrFwd": 80,
        "gross": 0,
        "op": 0,
        "net": 0,
        "roic": -30,
        "roe": -29.6,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 6,
        "netDebtEbitda": -0.5,
        "intCov": 1
      },
      "d": {
        "revPS": 0,
        "netCashPS": 0.3,
        "fcfM": -3
      }
    },
    {
      "tk": "SMR",
      "nm": "NuScale Power",
      "bz": "Small modular reactors",
      "color": "#7CB342",
      "layer": "smr",
      "share": {
        "pct": 30,
        "rank": "#1",
        "conf": "low",
        "market": "licensed SMR designs"
      },
      "price": 9.76,
      "mcap": 3.38,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The first NRC-certified SMR design — a call option on factory-made reactors; revenue fell ~62% YoY in Q1'26 with a ~$386M TTM net loss, against ~$884M net cash. EV/Sales ~144x on negligible revenue; valued on optionality and runway, not returns.",
      "bull": "First-mover certified SMR; data-center and government interest; ~$884M net cash.",
      "bear": "Pre-commercial and cash-burning; Q1'26 revenue down ~62% YoY.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 6,
        "fcf": 1,
        "bs": 5,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 130.5,
        "pfcf": 99,
        "fcfYield": -2,
        "revCagrHist": -95.8,
        "epsCagrFwd": 80,
        "gross": 23.8,
        "op": -99,
        "net": 0,
        "roic": -30,
        "roe": -83,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 9,
        "netDebtEbitda": -1,
        "intCov": 1
      },
      "d": {
        "revPS": 0.09,
        "netCashPS": 2.4,
        "fcfM": -3
      }
    },
    {
      "tk": "OKLO",
      "nm": "Oklo",
      "bz": "Fast-reactor SMR + fuel",
      "color": "#9CCC65",
      "layer": "smr",
      "share": {
        "pct": 20,
        "rank": "#2",
        "conf": "low",
        "market": "microreactor power-as-a-service"
      },
      "price": 52.36,
      "mcap": 9.11,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A fast-reactor microreactor sold as power-as-a-service with a recycled-fuel angle; pre-revenue and pre-licensing, but ~$2.54B cash (after a $1.2B raise) funds a long runway and a large signed pipeline. A $10B+ cap is pure optionality; no earnings multiples apply.",
      "bull": "Power-purchase pipeline + fuel-recycling optionality; ~$2.54B cash.",
      "bear": "Pre-revenue, pre-licensing; aggressive valuation on a long timeline.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 6,
        "fcf": 1,
        "bs": 7,
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
        "roe": -8.9,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 9,
        "netDebtEbitda": -2,
        "intCov": 1
      },
      "d": {
        "revPS": 0,
        "netCashPS": 14.9,
        "fcfM": -4
      }
    },
    {
      "tk": "BWXT",
      "nm": "BWX Technologies",
      "bz": "Naval & SMR reactor components",
      "color": "#558B2F",
      "layer": "smr",
      "share": {
        "pct": 70,
        "rank": "#1",
        "conf": "high",
        "market": "U.S. naval nuclear components"
      },
      "price": 191.06,
      "mcap": 17.5,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The sole maker of US naval nuclear reactors, extending into SMR components and medical isotopes — a profitable, moaty franchise; TTM revenue $3.2B (+18%), with net debt near 2.6x EBITDA funding capacity buildout. Steady FCF but ~43x fwd P/E leaves little margin.",
      "bull": "Monopoly naval-reactor franchise + SMR/isotope optionality; steady FCF.",
      "bear": "Government-budget dependence; ~43x fwd P/E; rising leverage from capex.",
      "r": {
        "val": 3,
        "growth": 7,
        "roic": 8,
        "moat": 9,
        "fcf": 7,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 51.1,
        "peFwd": 36.8,
        "pegFwd": 3.3,
        "evEbitda": 40.9,
        "evSales": 5.6,
        "pfcf": 50,
        "fcfYield": 1.6,
        "revCagrHist": 26.1,
        "epsCagrFwd": 12,
        "gross": 22.7,
        "op": 10.4,
        "net": 10.2,
        "roic": 11,
        "roe": 29,
        "fcfMargin": 9,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 2.6,
        "intCov": 15
      },
      "d": {
        "revPS": 36.87,
        "netCashPS": -16.4,
        "fcfM": 0.09
      }
    },
    {
      "tk": "LEU",
      "nm": "Centrus Energy",
      "bz": "Uranium enrichment (LEU/HALEU)",
      "color": "#33691E",
      "layer": "smr",
      "share": {
        "pct": 15,
        "rank": "#2",
        "conf": "medium",
        "market": "U.S. uranium enrichment / HALEU"
      },
      "price": 162.13,
      "mcap": 3.19,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The only US-owned enricher scaling HALEU production for advanced reactors; profitable with a long backlog and ~$2B net cash, but FY26 revenue growth is modest (~+6%) and consensus EPS was cut to ~$2.85. Strategic optionality at ~56x trailing leaves valuation stretched.",
      "bull": "Strategic US HALEU enrichment with a long backlog; profitable, ~$2B net cash.",
      "bear": "Flat-to-lumpy revenue, EPS estimates cut; ~56x P/E.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 7,
        "moat": 7,
        "fcf": 6,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 58.7,
        "peFwd": 40.8,
        "pegFwd": 1.4,
        "evEbitda": 73.1,
        "evSales": 5.5,
        "pfcf": 40,
        "fcfYield": 2,
        "revCagrHist": 4.9,
        "epsCagrFwd": 15,
        "gross": 25.7,
        "op": -0.3,
        "net": 13.4,
        "roic": 12,
        "roe": 12.3,
        "fcfMargin": 12,
        "fcfConv": 80,
        "sbc": 1,
        "netDebtEbitda": -2,
        "intCov": 99
      },
      "d": {
        "revPS": 24.23,
        "netCashPS": 100,
        "fcfM": 0.12
      }
    },
    {
      "tk": "CEG",
      "nm": "Constellation Energy",
      "bz": "Largest US nuclear fleet",
      "color": "#1565C0",
      "layer": "utilities",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "U.S. carbon-free nuclear generation"
      },
      "price": 239.25,
      "mcap": 85.44,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The largest US nuclear generator — selling firm, carbon-free baseload to data centers; ~22x forward earnings on ~13% EPS growth, with ~$21.6B net debt (~2.8x EBITDA). A scarce 24/7 carbon-free fleet, but the multiple already embeds data-center PPA upside.",
      "bull": "Scarce 24/7 carbon-free baseload with data-center PPAs and price upside.",
      "bear": "Power-price and policy sensitivity; ~22x fwd is above the utility average.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 9,
        "moat": 8,
        "fcf": 8,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 20.8,
        "peFwd": 17.6,
        "pegFwd": 1.7,
        "evEbitda": 13.6,
        "evSales": 3.6,
        "pfcf": 26,
        "fcfYield": 1.3,
        "revCagrHist": 63.8,
        "epsCagrFwd": 13,
        "gross": 23.3,
        "op": 21.9,
        "net": 12.7,
        "roic": 15,
        "roe": 16.1,
        "fcfMargin": 14,
        "fcfConv": 85,
        "sbc": 1,
        "netDebtEbitda": 2.8,
        "intCov": 15
      },
      "d": {
        "revPS": 92.4,
        "netCashPS": -60.5,
        "fcfM": 0.05
      }
    },
    {
      "tk": "VST",
      "nm": "Vistra",
      "bz": "IPP (nuclear + gas + storage)",
      "color": "#13A89E",
      "layer": "utilities",
      "share": {
        "pct": 12,
        "rank": "#2",
        "conf": "high",
        "market": "competitive U.S. power generation"
      },
      "price": 151.05,
      "mcap": 50.93,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A competitive power producer (nuclear + gas + storage) geared to surging power prices and data-center demand; ~17x forward earnings and ~8% FCF yield with aggressive buybacks. Net debt near 3.9x EBITDA is the main offset to an otherwise cheap growth profile.",
      "bull": "Power-price upside + nuclear PTC floor; ~8% FCF yield, aggressive buybacks.",
      "bear": "Commodity/hedge exposure; ~3.9x leverage; merchant volatility.",
      "r": {
        "val": 6,
        "growth": 8,
        "roic": 8,
        "moat": 6,
        "fcf": 8,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 25.3,
        "peFwd": 14.0,
        "pegFwd": 0.4,
        "evEbitda": 10.7,
        "evSales": 3.7,
        "pfcf": 18,
        "fcfYield": 8,
        "revCagrHist": 43.4,
        "epsCagrFwd": 20,
        "gross": 38.6,
        "op": 26.6,
        "net": 11.5,
        "roic": 10,
        "roe": 42.9,
        "fcfMargin": 16,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 3.9,
        "intCov": 8
      },
      "d": {
        "revPS": 57.42,
        "netCashPS": -57.1,
        "fcfM": 0.18
      }
    },
    {
      "tk": "GEV",
      "nm": "GE Vernova",
      "bz": "Grid + power equipment",
      "color": "#1E8E6B",
      "layer": "grid",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "gas turbines + grid equipment"
      },
      "price": 1113.11,
      "mcap": 299.11,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The electrification pure-play spun from GE — gas turbines, grid hardware and nuclear services riding the demand super-cycle; FY26 revenue guided ~$45B (+12%) with record backlog and ~$9-10B net cash. Margin inflection is real, but ~47x forward and ~66x EV/EBITDA price most of it in.",
      "bull": "Turbine and grid backlog at record levels; margin inflection; net cash.",
      "bear": "Execution on a vast backlog; rich multiple (~47x fwd, ~66x EV/EBITDA).",
      "r": {
        "val": 3,
        "growth": 9,
        "roic": 7,
        "moat": 8,
        "fcf": 7,
        "bs": 8,
        "scal": 7
      },
      "m": {
        "peTTM": 32.6,
        "peFwd": 45.4,
        "pegFwd": 1.5,
        "evEbitda": 86.2,
        "evSales": 7.5,
        "pfcf": 45,
        "fcfYield": 3,
        "revCagrHist": 16.3,
        "epsCagrFwd": 20,
        "gross": 20.3,
        "op": 5.5,
        "net": 23.8,
        "roic": 36,
        "roe": 75.7,
        "fcfMargin": 9,
        "fcfConv": 85,
        "sbc": 2,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 145.56,
        "netCashPS": 34,
        "fcfM": 0.19
      }
    },
    {
      "tk": "ETN",
      "nm": "Eaton",
      "bz": "Electrical equipment / grid",
      "color": "#0072CE",
      "layer": "grid",
      "share": {
        "pct": 18,
        "rank": "#2",
        "conf": "high",
        "market": "electrical power-management equipment"
      },
      "price": 398.52,
      "mcap": 154.75,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A wide electrical-equipment franchise levered to electrification and data-center power; TTM revenue up ~17% (~14% net margin), FY26 organic growth guided high-single-digits with segment margins ~24%. High-quality compounder, but ~31x forward earnings on ~12% EPS growth is a full multiple.",
      "bull": "Secular electrification demand; strong margins and capital returns.",
      "bear": "Industrial cyclicality; ~31x fwd P/E for ~12% growth.",
      "r": {
        "val": 4,
        "growth": 7,
        "roic": 9,
        "moat": 8,
        "fcf": 8,
        "bs": 8,
        "scal": 7
      },
      "m": {
        "peTTM": 39.1,
        "peFwd": 25.3,
        "pegFwd": 3.1,
        "evEbitda": 27.7,
        "evSales": 6.2,
        "pfcf": 32,
        "fcfYield": 2,
        "revCagrHist": 16.8,
        "epsCagrFwd": 12,
        "gross": 37.1,
        "op": 16.1,
        "net": 14,
        "roic": 15,
        "roe": 20.8,
        "fcfMargin": 16,
        "fcfConv": 92,
        "sbc": 1,
        "netDebtEbitda": 1.6,
        "intCov": 30
      },
      "d": {
        "revPS": 73.34,
        "netCashPS": -25.5,
        "fcfM": 0.12
      }
    },
    {
      "tk": "PWR",
      "nm": "Quanta Services",
      "bz": "Grid construction & services",
      "color": "#16557B",
      "layer": "grid",
      "share": {
        "pct": 10,
        "rank": "#1",
        "conf": "medium",
        "market": "electric grid construction services"
      },
      "price": 668.31,
      "mcap": 100.29,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The builder of the grid itself — transmission, distribution and renewables construction; revenue up ~26% with a record backlog and ~20% EPS growth guided. But thin ~4% net margins, ~48x forward earnings and net debt ~2.1x EBITDA leave little cushion for project-execution slips.",
      "bull": "Record grid-build backlog; skilled-labor scarcity moat; ~26% revenue growth.",
      "bear": "Thin margins, project-execution risk; ~48x fwd P/E; acquisitive.",
      "r": {
        "val": 3,
        "growth": 8,
        "roic": 7,
        "moat": 7,
        "fcf": 6,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 91.8,
        "peFwd": 40.6,
        "pegFwd": 2.5,
        "evEbitda": 40.0,
        "evSales": 3.5,
        "pfcf": 40,
        "fcfYield": 1.2,
        "revCagrHist": 26.3,
        "epsCagrFwd": 20,
        "gross": 15.1,
        "op": 4.2,
        "net": 3.7,
        "roic": 8,
        "roe": 13.5,
        "fcfMargin": 7,
        "fcfConv": 80,
        "sbc": 1,
        "netDebtEbitda": 2.1,
        "intCov": 15
      },
      "d": {
        "revPS": 201.93,
        "netCashPS": -40,
        "fcfM": 0.03
      }
    },
    {
      "tk": "NEE",
      "nm": "NextEra Energy",
      "bz": "Regulated utility + renewables",
      "color": "#C9742B",
      "layer": "renewables",
      "share": {
        "pct": 15,
        "rank": "#1",
        "conf": "high",
        "market": "U.S. renewable generation capacity"
      },
      "price": 88.34,
      "mcap": 184.24,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The largest US renewables developer wrapped around a premium regulated utility (FPL); ~23x forward earnings with ~10% dividend growth into rising power demand. FCF stays negative on heavy renewables capex and net debt runs ~6x EBITDA — leverage and policy/tax-credit exposure are the key risks.",
      "bull": "Best-in-class renewables pipeline + regulated base; rate-base growth.",
      "bear": "Rate-sensitive; policy/tax-credit exposure; ~6x EBITDA leverage, negative FCF.",
      "r": {
        "val": 5,
        "growth": 7,
        "roic": 6,
        "moat": 8,
        "fcf": 5,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 22.4,
        "peFwd": 20.1,
        "pegFwd": 2.25,
        "evEbitda": 21.0,
        "evSales": 10.7,
        "pfcf": 30,
        "fcfYield": 3,
        "revCagrHist": 7.3,
        "epsCagrFwd": 13,
        "gross": 61.4,
        "op": 30.2,
        "net": 29.4,
        "roic": 3,
        "roe": 10.3,
        "fcfMargin": 10,
        "fcfConv": 40,
        "sbc": 1,
        "netDebtEbitda": 6.3,
        "intCov": 6
      },
      "d": {
        "revPS": 13.45,
        "netCashPS": -44.2,
        "fcfM": 0.1
      }
    },
    {
      "tk": "FSLR",
      "nm": "First Solar",
      "bz": "Thin-film solar manufacturing",
      "color": "#E8A33D",
      "layer": "renewables",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "high",
        "market": "U.S. utility-scale solar modules"
      },
      "price": 224.57,
      "mcap": 24.13,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The US solar champion — domestic thin-film manufacturing with a large contracted backlog and the biggest IRA tax-credit tailwind; TTM revenue $5.4B (+27%), ~30% net margins, ~$2.4B net cash and ~11x forward earnings. The clear value name of the cohort, with policy-credit dependence the main risk.",
      "bull": "US-made modules with multi-year backlog and large 45X credits; net cash.",
      "bear": "Policy-credit dependence; module pricing and trade-case risk.",
      "r": {
        "val": 7,
        "growth": 8,
        "roic": 8,
        "moat": 6,
        "fcf": 6,
        "bs": 9,
        "scal": 7
      },
      "m": {
        "peTTM": 14.5,
        "peFwd": 9.6,
        "pegFwd": 0.4,
        "evEbitda": 9.8,
        "evSales": 4.1,
        "pfcf": 20,
        "fcfYield": 4.2,
        "revCagrHist": 23.6,
        "epsCagrFwd": 15,
        "gross": 41.7,
        "op": 33.1,
        "net": 30.7,
        "roic": 17,
        "roe": 18.4,
        "fcfMargin": 12,
        "fcfConv": 60,
        "sbc": 1,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 50.51,
        "netCashPS": 22,
        "fcfM": 0.22
      }
    }
  ]
};
