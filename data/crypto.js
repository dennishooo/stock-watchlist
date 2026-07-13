/* crypto — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-07-13 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Crypto & Digital Assets — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · digital-asset value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">digital asset</span><br>value chain,<br><span class=\"tnum\">10</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the exchanges and brokers, through the miners (and their AI-compute pivots), the leveraged digital-asset treasuries,\n       the stablecoin and infrastructure issuers, out to the asset managers channeling institutional flows. A volatile, high-beta theme,\n       graded on returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"10\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 13 Jul 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap and revenue are from public market data and filings <b>as of ~10 Jun 2026</b> and drift as\n      prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Almost every name here is a <b>high-beta proxy for crypto\n      prices</b>: miners and the MSTR treasury vehicle carry negative or n/m earnings and heavy dilution, and are graded on balance-sheet\n      runway and BTC exposure (read MSTR on bitcoin-NAV, not P/E). BlackRock is included only for its dominant spot-BTC ETF (IBIT).</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps and revenue are from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Every name is a high-beta crypto proxy; miners are typically loss-making at lower BTC prices, and MSTR is best read on bitcoin net-asset-value per share rather than earnings. Galaxy's reported \"revenue\" is gross/notional and not comparable. Reverse-DCF is unreliable for the pre-profit names.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A crypto exchange and a Bitcoin miner can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. Headline figures sourced ~10 Jun 2026; ROIC/FCF rows are estimates. Miners and treasuries show negative/n/m multiples - read them on Bitcoin exposure and cash runway, not GAAP returns.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a leader (US exchange, USDC, spot-ETF) reads differently from a contested field (miners, treasuries). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "exchange",
      "label": "Exchanges & brokers",
      "c": "#C0392B"
    },
    {
      "k": "miner",
      "label": "Miners & compute",
      "c": "#D35400"
    },
    {
      "k": "treasury",
      "label": "Digital-asset treasuries",
      "c": "#1B6CA8"
    },
    {
      "k": "stablecoin",
      "label": "Stablecoin & infrastructure",
      "c": "#1E8E6B"
    },
    {
      "k": "services",
      "label": "Asset mgmt & ETF",
      "c": "#8E5DA8"
    }
  ],
  "data": [
    {
      "tk": "COIN",
      "nm": "Coinbase",
      "bz": "Crypto exchange + custody",
      "color": "#0052FF",
      "layer": "exchange",
      "share": {
        "pct": 50,
        "rank": "#1",
        "conf": "high",
        "market": "U.S. regulated crypto exchange"
      },
      "price": 159.07,
      "mcap": 41.91,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The blue-chip US crypto exchange — trading, custody, USDC economics and Base L2. Q1 26 revenue $1.41B fell ~30% YoY (-21% Q/Q) as BTC slid toward ~$64K; swung to a net loss. Profitable in up-markets but earnings whipsaw with volumes.",
      "bull": "Dominant US exchange + USDC/Base optionality; structurally profitable when crypto volumes recover.",
      "bear": "Revenue down 30% YoY; fwd PE ~70 prices a recovery; fee compression, regulation.",
      "r": {
        "val": 3,
        "growth": 8,
        "roic": 7,
        "moat": 8,
        "fcf": 7,
        "bs": 7,
        "scal": 9
      },
      "m": {
        "peTTM": 58.5,
        "peFwd": 33.3,
        "pegFwd": 3.3,
        "evEbitda": 39.3,
        "evSales": 6.3,
        "pfcf": 30,
        "fcfYield": 4,
        "revCagrHist": -30.8,
        "epsCagrFwd": 15,
        "gross": 85.5,
        "op": -7.1,
        "net": 12.7,
        "roic": 18,
        "roe": 6.7,
        "fcfMargin": 35,
        "fcfConv": 95,
        "sbc": 8,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 23.92,
        "netCashPS": 10,
        "fcfM": 0.35
      }
    },
    {
      "tk": "HOOD",
      "nm": "Robinhood",
      "bz": "Retail brokerage + crypto",
      "color": "#00C805",
      "layer": "exchange",
      "share": {
        "pct": 15,
        "rank": "#3",
        "conf": "medium",
        "market": "retail brokerage + crypto trading"
      },
      "price": 111.97,
      "mcap": 100.83,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The retail platform where equities, options and crypto converge — Q1 26 revenue $1.1B, +15% YoY, now firmly profitable with net margin ~41%. A high-beta proxy for retail risk appetite; growth decelerated as crypto cooled but subscriptions and net interest provide ballast.",
      "bull": "Crypto + net-interest + subscriptions; high incremental margins; consensus PT lagging the rally.",
      "bear": "Growth slowed to ~15%; EV/Sales ~15x and fwd PE ~42 leave no margin for a retail downturn.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 6,
        "moat": 6,
        "fcf": 8,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 54.4,
        "peFwd": 36.6,
        "pegFwd": 1,
        "evEbitda": 35,
        "evSales": 20.7,
        "pfcf": 45,
        "fcfYield": 3.1,
        "revCagrHist": 15.1,
        "epsCagrFwd": 25,
        "gross": 92.2,
        "op": 38.5,
        "net": 41.1,
        "roic": 10,
        "roe": 21.5,
        "fcfMargin": 40,
        "fcfConv": 110,
        "sbc": 8,
        "netDebtEbitda": -3,
        "intCov": 999
      },
      "d": {
        "revPS": 5.17,
        "netCashPS": 6,
        "fcfM": 0.64
      }
    },
    {
      "tk": "MARA",
      "nm": "MARA Holdings",
      "bz": "Bitcoin miner + treasury",
      "color": "#FF6B00",
      "layer": "miner",
      "share": {
        "pct": 15,
        "rank": "#1",
        "conf": "medium",
        "market": "Bitcoin hash-rate"
      },
      "price": 12.6,
      "mcap": 4.8,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "One of the largest Bitcoin miners and a top corporate BTC holder (~38,700 BTC after a March sale to cut convertible debt to ~$2.3B); Q1 26 revenue $174.6M with deeply negative margins as BTC fell toward ~$64K. A leveraged, dilutive proxy for Bitcoin and hash-price.",
      "bull": "Scaled hash-rate plus large BTC treasury; energy-cost discipline and an AI-pivot option.",
      "bear": "GAAP losses, post-halving economics, dilution and full Bitcoin-price beta.",
      "r": {
        "val": 3,
        "growth": 8,
        "roic": 2,
        "moat": 4,
        "fcf": 3,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 2,
        "evEbitda": 15,
        "evSales": 7.9,
        "pfcf": 40,
        "fcfYield": -2,
        "revCagrHist": -18.4,
        "epsCagrFwd": 30,
        "gross": 45.3,
        "op": -10,
        "net": -15,
        "roic": -3,
        "roe": -67.3,
        "fcfMargin": -15,
        "fcfConv": 30,
        "sbc": 10,
        "netDebtEbitda": 1,
        "intCov": 2
      },
      "d": {
        "revPS": 2.38,
        "netCashPS": 9,
        "fcfM": -0.2
      }
    },
    {
      "tk": "RIOT",
      "nm": "Riot Platforms",
      "bz": "Bitcoin miner + AI/HPC pivot",
      "color": "#F7931A",
      "layer": "miner",
      "share": {
        "pct": 10,
        "rank": "#2",
        "conf": "low",
        "market": "Bitcoin hash-rate + HPC hosting"
      },
      "price": 20.96,
      "mcap": 7.93,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A large miner converting power capacity to AI/HPC hosting — FY25 revenue $647M (+72%), and data-center hosting already $33M (20% of Q1 26 revenue) under a 10-yr AMD lease. Controls ~1.7GW; mining still loss-making but the HPC narrative is furthest along among peers.",
      "bull": "Big low-cost power footprint with revenue-generating AI/HPC hosting already ramping.",
      "bear": "Mining losses, dilution and EV/Sales ~17x discount large unproven HPC buildout.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 1,
        "moat": 4,
        "fcf": 2,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 2,
        "evEbitda": 18,
        "evSales": 13.2,
        "pfcf": 45,
        "fcfYield": -3,
        "revCagrHist": 3.6,
        "epsCagrFwd": 40,
        "gross": 32.3,
        "op": -20,
        "net": -132.8,
        "roic": -5,
        "roe": -32.5,
        "fcfMargin": -20,
        "fcfConv": 20,
        "sbc": 12,
        "netDebtEbitda": -0.5,
        "intCov": 2
      },
      "d": {
        "revPS": 1.89,
        "netCashPS": -1.8,
        "fcfM": -0.25
      }
    },
    {
      "tk": "CLSK",
      "nm": "CleanSpark",
      "bz": "Bitcoin miner (low-cost power)",
      "color": "#0AC18E",
      "layer": "miner",
      "share": {
        "pct": 8,
        "rank": "#3",
        "conf": "low",
        "market": "Bitcoin hash-rate"
      },
      "price": 12.85,
      "mcap": 3.3,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A low-cost, efficiency-focused Bitcoin miner (~47 EH/s) pivoting toward AI/HPC; Q2 FY26 revenue $136M fell ~25% YoY on lower BTC (~$64K) and a $224M fair-value loss, though mining gross margin held near 47%. Net debt ~$783M raises capital-intensity risk.",
      "bull": "Low energy costs and strong fleet efficiency; HPC optionality and a modest expected FY26 profit.",
      "bear": "Pure mining beta to Bitcoin; revenue -25% YoY, rising debt, HPC pivot pre-revenue.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 2,
        "moat": 3,
        "fcf": 3,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 1.5,
        "evEbitda": 12,
        "evSales": 6.5,
        "pfcf": 35,
        "fcfYield": -1,
        "revCagrHist": -24.9,
        "epsCagrFwd": 30,
        "gross": 50.7,
        "op": -5,
        "net": -67.7,
        "roic": -2,
        "roe": -34.8,
        "fcfMargin": -12,
        "fcfConv": 30,
        "sbc": 9,
        "netDebtEbitda": 0.5,
        "intCov": 2
      },
      "d": {
        "revPS": 2.66,
        "netCashPS": -3.06,
        "fcfM": -0.15
      }
    },
    {
      "tk": "IREN",
      "nm": "IREN Limited",
      "bz": "Bitcoin miner + AI cloud",
      "color": "#5B2A86",
      "layer": "miner",
      "share": {
        "pct": 8,
        "rank": "#4",
        "conf": "low",
        "market": "Bitcoin hash-rate + AI cloud"
      },
      "price": 41.14,
      "mcap": 14.7,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A renewables-powered miner aggressively building GPU/AI-cloud capacity — signed a ~$3.4B 5-yr NVIDIA Blackwell deal plus $1.6B Dell purchase, targeting multi-billion AI ARR by end-2026. FY25 revenue +168%, but Q3 FY26 swung to a $248M loss on heavy capex; ~$2.6B cash funds the build. An AI-data-center story wearing a mining jacket.",
      "bull": "Renewable power plus large contracted AI-cloud buildout; net-cash balance sheet for now.",
      "bear": "Deep losses, execution/funding risk, and EV/EBITDA ~36x on two volatile businesses.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 3,
        "moat": 5,
        "fcf": 3,
        "bs": 7,
        "scal": 8
      },
      "m": {
        "peTTM": 53.4,
        "peFwd": 999,
        "pegFwd": 1.5,
        "evEbitda": 111.8,
        "evSales": 21.7,
        "pfcf": 50,
        "fcfYield": -2,
        "revCagrHist": 0,
        "epsCagrFwd": 50,
        "gross": 68.4,
        "op": -64.5,
        "net": 20.9,
        "roic": 2,
        "roe": 7.7,
        "fcfMargin": -15,
        "fcfConv": 30,
        "sbc": 8,
        "netDebtEbitda": 0.5,
        "intCov": 3
      },
      "d": {
        "revPS": 2.65,
        "netCashPS": 11,
        "fcfM": -0.1
      }
    },
    {
      "tk": "MSTR",
      "nm": "Strategy",
      "bz": "Bitcoin treasury (leveraged)",
      "color": "#FF9900",
      "layer": "treasury",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "medium",
        "market": "public Bitcoin treasury holdings"
      },
      "price": 94.64,
      "mcap": 33.86,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The original leveraged Bitcoin treasury — ~847,000 BTC (~$54B at ~$64K BTC) against ~$8-9B convertibles plus large preferreds. Average cost basis ~$75.7K leaves the stack underwater, and the stock now trades at ~0.8x bitcoin NAV — a discount, reversing its historic premium.",
      "bull": "Largest corporate BTC stack with a capital-markets machine; discount to NAV offers leverage to a BTC rebound.",
      "bear": "NAV discount signals lost premium; convertible and preferred leverage amplify BTC drawdowns.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 3,
        "moat": 5,
        "fcf": 3,
        "bs": 4,
        "scal": 8
      },
      "m": {
        "peTTM": 999,
        "peFwd": 21.2,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 98.3,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 11.9,
        "epsCagrFwd": 0,
        "gross": 68.1,
        "op": 50,
        "net": 0,
        "roic": 3,
        "roe": -30.8,
        "fcfMargin": -5,
        "fcfConv": 0,
        "sbc": 5,
        "netDebtEbitda": 3,
        "intCov": 2
      },
      "d": {
        "revPS": 1.65,
        "netCashPS": -59,
        "fcfM": -0.05
      }
    },
    {
      "tk": "GLXY",
      "nm": "Galaxy Digital",
      "bz": "Crypto financial services + AI",
      "color": "#1B6CA8",
      "layer": "treasury",
      "share": {
        "pct": 10,
        "rank": "#3",
        "conf": "medium",
        "market": "crypto trading, asset mgmt & data centers"
      },
      "price": 24.88,
      "mcap": 9.7,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A diversified crypto merchant bank — trading, asset management and the Helios data-center pivot bridging crypto and AI. Q1 26 posted a $216M net loss as digital assets fell ~20%, but Helios delivered its first hall to CoreWeave under a 15-yr/526MW lease, with &gt;1.6GW ERCOT-approved. Reported revenue is gross/notional and not comparable.",
      "bull": "Diversified crypto franchise plus a contracted, scaling AI data-center build (Helios/CoreWeave).",
      "bear": "Earnings swing with crypto prices; Helios capex and execution risk; net debt rising.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 5,
        "moat": 5,
        "fcf": 5,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 255.9,
        "pegFwd": 1,
        "evEbitda": 0.2,
        "evSales": 0.2,
        "pfcf": 20,
        "fcfYield": 3,
        "revCagrHist": -20.6,
        "epsCagrFwd": 20,
        "gross": 60,
        "op": 95.9,
        "net": -0.3,
        "roic": 8,
        "roe": -6.5,
        "fcfMargin": 15,
        "fcfConv": 90,
        "sbc": 6,
        "netDebtEbitda": 0.5,
        "intCov": 8
      },
      "d": {
        "revPS": 4.2,
        "netCashPS": 4,
        "fcfM": 0.12
      }
    },
    {
      "tk": "CRCL",
      "nm": "Circle Internet",
      "bz": "USDC stablecoin issuer",
      "color": "#1E8E6B",
      "layer": "stablecoin",
      "share": {
        "pct": 80,
        "rank": "#1",
        "conf": "high",
        "market": "fiat-backed stablecoins (USDC)"
      },
      "price": 66.14,
      "mcap": 17.68,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The regulated stablecoin pure-play — USDC reached ~$77B in circulation (+28% YoY), and reserves earn the float. Q1 26 revenue $694M (+20% YoY) but the company was barely profitable as distribution costs and a Fed at ~3.5% pressure margins. Direct lever on stablecoin adoption and rates; stock has fallen back near its IPO-day level from a ~$299 peak.",
      "bull": "Dominant regulated stablecoin with rising circulation and onchain volume; reserve-income engine.",
      "bear": "Earnings are rate-dependent and barely positive; Tether dominance; rich fwd PE ~70+.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 6,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 34.9,
        "pegFwd": 1,
        "evEbitda": 40,
        "evSales": 5.2,
        "pfcf": 55,
        "fcfYield": 2.4,
        "revCagrHist": 20,
        "epsCagrFwd": 35,
        "gross": 8.1,
        "op": 6.5,
        "net": -2.8,
        "roic": 12,
        "roe": -3,
        "fcfMargin": 30,
        "fcfConv": 100,
        "sbc": 6,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 13.95,
        "netCashPS": 6,
        "fcfM": 0.17
      }
    },
    {
      "tk": "BLK",
      "nm": "BlackRock",
      "bz": "Crypto asset mgmt (IBIT ETF)",
      "color": "#000000",
      "layer": "services",
      "share": {
        "pct": 50,
        "rank": "#1",
        "conf": "high",
        "market": "spot crypto ETF assets (IBIT)"
      },
      "price": 1036.11,
      "mcap": 168.47,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The TradFi on-ramp — BlackRock's IBIT (~$55B AUM, &gt;800k BTC) is the dominant spot-Bitcoin ETF, channeling institutional flows for a fee atop $13.9T total AUM. Q1 26 revenue +27% YoY with ~$130B net inflows. Crypto is a tiny slice, but the franchise is a high-quality compounder at a fair ~19x forward.",
      "bull": "Dominant crypto-ETF franchise on the largest asset-management platform; fair multiple, durable inflows.",
      "bear": "Crypto is a tiny slice of BLK; fee-rate and market-level sensitivity cap upside.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 8,
        "moat": 9,
        "fcf": 9,
        "bs": 9,
        "scal": 8
      },
      "m": {
        "peTTM": 26.1,
        "peFwd": 16.7,
        "pegFwd": 1.4,
        "evEbitda": 16.4,
        "evSales": 6.6,
        "pfcf": 22,
        "fcfYield": 2.3,
        "revCagrHist": 27,
        "epsCagrFwd": 11,
        "gross": 46.9,
        "op": 35.6,
        "net": 24.4,
        "roic": 11,
        "roe": 11.9,
        "fcfMargin": 33,
        "fcfConv": 95,
        "sbc": 2,
        "netDebtEbitda": 0.3,
        "intCov": 40
      },
      "d": {
        "revPS": 165.35,
        "netCashPS": 5,
        "fcfM": 0.32
      }
    }
  ]
};
