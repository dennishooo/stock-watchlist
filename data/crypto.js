/* crypto — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-06-11 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Crypto & Digital Assets — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · digital-asset value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">digital asset</span><br>value chain,<br><span class=\"tnum\">10</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the exchanges and brokers, through the miners (and their AI-compute pivots), the leveraged digital-asset treasuries,\n       the stablecoin and infrastructure issuers, out to the asset managers channeling institutional flows. A volatile, high-beta theme,\n       graded on returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"10\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of 11 Jun 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap and revenue are from public market data and filings <b>as of ~10 Jun 2026</b> and drift as\n      prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Almost every name here is a <b>high-beta proxy for crypto\n      prices</b>: miners and the MSTR treasury vehicle carry negative or n/m earnings and heavy dilution, and are graded on balance-sheet\n      runway and BTC exposure (read MSTR on bitcoin-NAV, not P/E). BlackRock is included only for its dominant spot-BTC ETF (IBIT).</div>",
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
      "price": 153.97,
      "mcap": 40.57,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The blue-chip US crypto exchange — trading, custody, USDC economics and Base L2. BTC's slide to ~$58K (21-month low; $4B June ETF outflows) keeps volumes depressed, yet the stock rallied to ~$166 on cost-cut discipline and a $229 consensus target. Structurally profitable in up-markets; earnings whipsaw with volumes.",
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
        "peTTM": 56.4,
        "peFwd": 31.0,
        "pegFwd": 4.5,
        "evEbitda": 20,
        "evSales": 9,
        "pfcf": 30,
        "fcfYield": 3,
        "revCagrHist": -30.8,
        "epsCagrFwd": 15,
        "gross": 85,
        "op": -7.1,
        "net": 12.7,
        "roic": 12,
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
        "fcfM": 0.30
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
      "price": 86.36,
      "mcap": 77.77,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The retail platform where equities, options and crypto converge — up ~30% since mid-June to ~$112 despite BTC hitting 21-month lows, powered by the Robinhood Chain L2 launch and a Mizuho $130 target. Firmly profitable (~41% net margin) with subscriptions and net interest as ballast, but ~55x trailing earnings discounts flawless execution.",
      "bull": "Crypto, net-interest and subscription engines; Robinhood Chain adds tokenization optionality; high incremental margins.",
      "bear": "Up ~30% in three weeks against a crypto slump; ~55x TTM; consensus target ~$117 sits at the price.",
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
        "peTTM": 41.9,
        "peFwd": 30.8,
        "pegFwd": 1.6,
        "evEbitda": 35,
        "evSales": 18,
        "pfcf": 45,
        "fcfYield": 2.4,
        "revCagrHist": 15.1,
        "epsCagrFwd": 25,
        "gross": 88,
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
      "price": 12.62,
      "mcap": 4.81,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "One of the largest Bitcoin miners — record 72.2 EH/s and ~36,300 BTC held — pivoting to AI/HPC via the Long Ridge Energy acquisition after retiring a third of its converts. Q1 posted a $1.3B net loss and BTC at ~$58K keeps hash economics underwater; a leveraged, dilutive proxy for Bitcoin.",
      "bull": "Record 72 EH/s plus ~36K BTC treasury; converts cut by a third; Long Ridge gives a real AI/HPC path.",
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
        "evSales": 5.6,
        "pfcf": 40,
        "fcfYield": -2,
        "revCagrHist": -18.4,
        "epsCagrFwd": 30,
        "gross": 40,
        "op": -10,
        "net": -15,
        "roic": -3,
        "roe": -67.3,
        "fcfMargin": -15,
        "fcfConv": 30,
        "sbc": 10,
        "netDebtEbitda": 0.5,
        "intCov": 2
      },
      "d": {
        "revPS": 2.38,
        "netCashPS": 3,
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
      "price": 24.08,
      "mcap": 9.11,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A large miner converting power to AI/HPC hosting — the AMD lease at Rockdale doubled to 50MW (up to ~$1B over term) and Corsicana's remaining 600MW is under formal AI/HPC evaluation. Q1 revenue $167M with $33M from data centers; sold 3,778 BTC (~$290M) to fund the build as ~$58K BTC keeps mining loss-making.",
      "bull": "AMD lease doubled to 50MW with ~$1B potential; 600MW Corsicana evaluation; big low-cost power footprint.",
      "bear": "Mining loss-making at ~$58K BTC; selling coins to fund capex; dilution; HPC scale-up unproven.",
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
        "evSales": 14,
        "pfcf": 45,
        "fcfYield": -3,
        "revCagrHist": 3.6,
        "epsCagrFwd": 40,
        "gross": 35,
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
      "price": 14.9,
      "mcap": 3.82,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A low-cost, efficiency-focused Bitcoin miner (~47 EH/s) repositioning toward AI/HPC — but BTC's slide to ~$58K squeezes hash margins and the stock round-tripped from ~$19 to ~$12.6 in a month. Net debt ~$0.8B raises capital-intensity risk; short interest is elevated and Aug 11 earnings are the next catalyst.",
      "bull": "Low energy costs and strong fleet efficiency; HPC optionality and a modest expected FY26 profit.",
      "bear": "Pure mining beta at ~$58K BTC; rising debt and high short interest; HPC pivot still pre-revenue.",
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
        "evSales": 7,
        "pfcf": 35,
        "fcfYield": -1,
        "revCagrHist": -24.9,
        "epsCagrFwd": 30,
        "gross": 42,
        "op": -5,
        "net": -67.7,
        "roic": -2,
        "roe": -34.8,
        "fcfMargin": -12,
        "fcfConv": 30,
        "sbc": 9,
        "netDebtEbitda": 1,
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
      "price": 51.52,
      "mcap": 18.41,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A renewables-powered miner turned AI-cloud builder — the ~$3.4B NVIDIA Blackwell deal and Microsoft-linked contracts stand, but the stock fell ~40% in a month to ~$39 as the market shifted from announcements to delivery. Heavy capex losses continue with ~$2B cash funding the build; execution, not narrative, now sets the price.",
      "bull": "Renewable power plus large contracted AI-cloud buildout; net-cash balance sheet for now.",
      "bear": "Down ~40% in a month; deep losses and multi-billion capex; delivery risk on contracted AI capacity.",
      "r": {
        "val": 4,
        "growth": 10,
        "roic": 3,
        "moat": 5,
        "fcf": 3,
        "bs": 7,
        "scal": 8
      },
      "m": {
        "peTTM": 69.6,
        "peFwd": 999,
        "pegFwd": 1.5,
        "evEbitda": 20,
        "evSales": 30,
        "pfcf": 50,
        "fcfYield": -2,
        "revCagrHist": -0.0,
        "epsCagrFwd": 50,
        "gross": 45,
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
        "netCashPS": 8,
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
      "price": 115.35,
      "mcap": 40.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The original leveraged Bitcoin treasury — ~847K BTC (~$49B at ~$58K) against ~$8-9B converts plus large preferreds, cost basis ~$76K underwater. Still trades below bitcoin NAV; the new Digital Credit framework adds a USD reserve, up to $1B of buybacks and selective BTC monetization to defend the discount. Stock swung from $136 to $82 to ~$101 in three weeks.",
      "bull": "Sub-NAV buyback is mechanically accretive; largest corporate BTC stack gives full torque to any Bitcoin rebound.",
      "bear": "Monetizing BTC to fund buybacks and preferred dividends signals strain; leverage amplifies a break below $58K.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 3,
        "moat": 5,
        "fcf": 3,
        "bs": 4,
        "scal": 8
      },
      "m": {
        "peTTM": 999,
        "peFwd": 25.9,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 113.1,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 11.9,
        "epsCagrFwd": 0,
        "gross": 68.1,
        "op": 50,
        "net": 0.0,
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
      "price": 30.15,
      "mcap": 11.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A diversified crypto merchant bank whose Helios AI pivot is now contracted — CoreWeave committed to the full 800MW (average ~$1B/yr over 15 years), first halls delivered, a $1.4B project-debt facility closed and 1.6GW ERCOT-approved. Crypto beta still bites: the stock fell ~18% since mid-June with BTC near ~$58K. Reported revenue is gross/notional and not comparable.",
      "bull": "CoreWeave leases the full 800MW Helios tranche (~$1B/yr, 15 yrs, ~90% EBITDA margin); 1.6GW approved; buyback live.",
      "bear": "Earnings swing with crypto prices; Helios capex and execution risk; net debt rising.",
      "r": {
        "val": 6,
        "growth": 9,
        "roic": 5,
        "moat": 5,
        "fcf": 5,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 322.2,
        "pegFwd": 1,
        "evEbitda": 12,
        "evSales": 5,
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
        "netDebtEbitda": 1,
        "intCov": 8
      },
      "d": {
        "revPS": 4.2,
        "netCashPS": 1,
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
      "price": 78.93,
      "mcap": 21.1,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The regulated stablecoin pure-play — USDC circulation keeps compounding and Standard Chartered became the first G-SIB to offer institutional USDC minting and redemption. But float economics thin as the Fed cuts and distribution costs bite; at ~$65 the stock sits ~78% below its $299 peak and under IPO-day levels. A direct lever on stablecoin adoption and rates.",
      "bull": "StanChart is the first G-SIB distribution rail; USDC adoption compounding; regulated moat widening; Bernstein Buy.",
      "bear": "Rate cuts squeeze float income; distribution costs eat the margin; Tether still dominates offshore.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 6,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 35.4,
        "pegFwd": 1,
        "evEbitda": 40,
        "evSales": 8,
        "pfcf": 55,
        "fcfYield": 3,
        "revCagrHist": 20.0,
        "epsCagrFwd": 35,
        "gross": 40,
        "op": 6.5,
        "net": -2.8,
        "roic": 12,
        "roe": -3.0,
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
      "price": 1010.68,
      "mcap": 164.59,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The TradFi on-ramp — IBIT (~800K BTC, ~$46B) remains the dominant spot-Bitcoin ETF but led June's record $4B complex outflows (~$3B from IBIT) as BTC hit a 21-month low. Crypto stays a rounding error on $13.9T AUM; the franchise compounds regardless at ~16x forward, with Q2 earnings July 21.",
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
        "peTTM": 25.4,
        "peFwd": 16.6,
        "pegFwd": 1.4,
        "evEbitda": 16,
        "evSales": 7,
        "pfcf": 22,
        "fcfYield": 2.3,
        "revCagrHist": 27.0,
        "epsCagrFwd": 11,
        "gross": 50,
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
