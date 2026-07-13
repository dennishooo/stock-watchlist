# Data refresh report

- **As of:** 2026-07-13
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 238 changed · 3 skipped · 0 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 210.96; mcap: 4854.37 -> 5109.66; m.peTTM: 30.7 -> 32.3; m.peFwd: 15.7 -> 16.5; m.evEbitda: 29.1 -> 30.6; m.evSales: 19 -> 20.0
- `AVGO` Broadcom: price: 372.1 -> 399.97; mcap: 1770.3 -> 1902.89; m.peTTM: 61.7 -> 66.7; m.peFwd: 19.2 -> 20.6; m.evEbitda: 43.3 -> 46.3; m.evSales: 24.1 -> 25.8
- `AMD` AMD: price: 452.4 -> 557.89; mcap: 737.68 -> 909.7; m.peTTM: 151.3 -> 185.3; m.peFwd: 34.6 -> 42.0; m.evEbitda: 98.1 -> 121.3; m.evSales: 19.5 -> 24.1
- `MU` Micron: price: 891.88 -> 979.3; mcap: 1005.8 -> 1106.01; m.peTTM: 42.2 -> 22.1; m.peFwd: 8 -> 6.5; m.evEbitda: 27.2 -> 15.9; m.evSales: 17.2 -> 12.0; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 186.96; mcap: 191.09 -> 235.41; m.peTTM: 52.3 -> 64.0; m.peFwd: 34.1 -> 42.0; m.evEbitda: 42.2 -> 52.6; m.evSales: 18.4 -> 23.0
- `COHR` Coherent: price: 354.77 -> 324.5; mcap: 69.41 -> 63.48; m.peTTM: 169.7 -> 153.8; m.peFwd: 43.8 -> 39.5; m.evEbitda: 53.9 -> 49.3; m.evSales: 10.7 -> 9.8
- `CIEN` Ciena: price: 434.65 -> 460.72; mcap: 61.53 -> 65.22; m.peTTM: 145.4 -> 154.1; m.peFwd: 45.2 -> 47.8; m.evEbitda: 78.8 -> 83.5; m.evSales: 11.1 -> 11.8
- `SMCI` Super Micro: price: 29.27 -> 28.31; mcap: 17.6 -> 18.31; m.peTTM: 21.4 -> 14.9; m.peFwd: 9 -> 8.9; m.evEbitda: 16.1 -> 15.8; m.evSales: 0.8 -> 0.7
- `DELL` Dell Technologies: price: 369.83 -> 434.97; mcap: 239.69 -> 281.05; m.peTTM: 29.5 -> 34.6; m.peFwd: 17.5 -> 20.2; m.evEbitda: 18.7 -> 21.5; m.evSales: 1.9 -> 2.3; m.op: 8.3 -> 8.9
- `VRT` Vertiv: price: 280.98 -> 318.86; mcap: 107.93 -> 122.48; m.peTTM: 70.8 -> 79.9; m.peFwd: 31.7 -> 36.0; m.evEbitda: 45.6 -> 51.7; m.evSales: 10 -> 11.4
- `EQIX` Equinix: price: 1038.33 -> 1051.21; mcap: 102.4 -> 103.67; m.peTTM: 72 -> 72.4; m.peFwd: 54 -> 54.7; m.evEbitda: 29.1 -> 29.3; m.evSales: 13.1 -> 13.2
- `DLR` Digital Realty: price: 180.78 -> 180.41; mcap: 64.66 -> 67.88; m.peTTM: 47.8 -> 47.9; m.peFwd: 63.1 -> 63.0
- `MSFT` Microsoft: price: 397.36 -> 385.1; mcap: 2951.76 -> 2860.69; m.peTTM: 23.7 -> 22.9; m.peFwd: 20.5 -> 19.9; m.evEbitda: 16.3 -> 15.8; m.evSales: 9.4 -> 9.1
- `ORCL` Oracle: price: 201.26 -> 140.64; mcap: 578.83 -> 405.11; m.peTTM: 36.1 -> 24.1; m.peFwd: 18.7 -> 12.9; m.evEbitda: 25.8 -> 17.9; m.evSales: 11 -> 8.1; m.gross: 67.1 -> 65.8; m.op: 32.7 -> 36.2; m.net: 25.3 -> 25.4; m.roe: 57.6 -> 53.4; m.revCagrHist: 21.7 -> 20.6; d.revPS: 22.54 -> 23.55
- meta: data-date stamped to 2026-07-13 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1188.58; mcap: 1013.35 -> 1059.91; m.peTTM: 40.3 -> 42.2; m.peFwd: 25.5 -> 26.5; m.evEbitda: 29 -> 30.3; m.evSales: 14.6 -> 15.2
- `NVO` Novo Nordisk: price: 42.81 -> 49.48; mcap: 189.61 -> 218.94; m.peTTM: 10 -> 11.9; m.peFwd: 12.9 -> 15.2; m.evEbitda: 1.8 -> 2.0; m.evSales: 1 -> 1.1
- `VKTX` Viking Therapeutics: price: 27.75 -> 38.86; mcap: 3.22 -> 4.51
- `AMGN` Amgen: price: 337.73 -> 363.39; mcap: 182.28 -> 196.12; m.peTTM: 24 -> 25.3; m.peFwd: 14.4 -> 15.5; m.evEbitda: 13.5 -> 14.3; m.evSales: 6.1 -> 6.5
- `HIMS` Hims & Hers: price: 27.78 -> 34.38; mcap: 6.43 -> 7.96; m.peFwd: 31.2 -> 38.6; m.evEbitda: 81.7 -> 100.0; m.evSales: 2.9 -> 3.5
- `PFE` Pfizer: price: 25.6 -> 24.17; mcap: 145.91 -> 137.76; m.peTTM: 19.5 -> 18.5; m.peFwd: 9 -> 8.5; m.evEbitda: 7.8 -> 7.5; m.evSales: 3.1 -> 3.0
- `MRK` Merck: price: 119.09 -> 123.54; mcap: 294.13 -> 305.12; m.peTTM: 33.5 -> 34.8; m.peFwd: 12.5 -> 12.9; m.evEbitda: 11.4 -> 11.8; m.evSales: 5.1 -> 5.3
- `ABBV` AbbVie: price: 224.95 -> 248.08; mcap: 397.44 -> 438.31; m.peTTM: 111.4 -> 122.2; m.peFwd: 13.8 -> 15.2; m.evEbitda: 15.4 -> 16.8; m.evSales: 7.3 -> 8.0
- `RHHBY` Roche: price: 50.23 -> 51.9; mcap: 323.53 -> 334.28; m.peTTM: 19.9 -> 20.9; m.peFwd: 15.6 -> 16.2; m.evEbitda: 14.3 -> 14.6; m.evSales: 5.4 -> 5.6
- `TMO` Thermo Fisher: price: 482.04 -> 527.05; mcap: 179.14 -> 195.86; m.peTTM: 26.5 -> 29.0; m.peFwd: 17.7 -> 19.3; m.evEbitda: 19.4 -> 20.9; m.evSales: 4.8 -> 5.2
- `DHR` Danaher: price: 183.63 -> 199.05; mcap: 129.97 -> 140.88; m.peTTM: 36.5 -> 38.6; m.peFwd: 20.2 -> 21.5; m.evEbitda: 18.1 -> 19.5; m.evSales: 5.8 -> 6.2
- `ISRG` Intuitive Surgical: price: 412.02 -> 406.78; mcap: 145.92 -> 144.07; m.peTTM: 50 -> 49.5; m.peFwd: 34.9 -> 34.5; m.evEbitda: 36.4 -> 35.9; m.evSales: 13.4 -> 13.2
- `DXCM` Dexcom: price: 74.77 -> 74.96; mcap: 28.85 -> 28.93; m.peTTM: 32.1 -> 32.2; m.peFwd: 24.3 -> 24.4; m.evEbitda: 21.5 -> 21.6
- meta: data-date stamped to 2026-07-13 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 159.07; mcap: 40.57 -> 41.91; m.peTTM: 56.4 -> 58.5; m.peFwd: 31 -> 33.3; m.evEbitda: 20 -> 39.3; m.evSales: 9 -> 6.3; m.gross: 85 -> 85.5
- `HOOD` Robinhood: price: 86.36 -> 111.97; mcap: 77.77 -> 100.83; m.peTTM: 41.9 -> 54.4; m.peFwd: 30.8 -> 36.6; m.evSales: 18 -> 20.7; m.gross: 88 -> 92.2
- `MARA` MARA Holdings: price: 12.62 -> 12.6; mcap: 4.81 -> 4.8; m.evSales: 5.6 -> 7.9; m.gross: 40 -> 45.3
- `RIOT` Riot Platforms: price: 24.08 -> 20.96; mcap: 9.11 -> 7.93; m.evSales: 14 -> 13.2; m.gross: 35 -> 32.3
- `CLSK` CleanSpark: price: 14.9 -> 12.85; mcap: 3.82 -> 3.3; m.evSales: 7 -> 6.5; m.gross: 42 -> 50.7
- `IREN` IREN Limited: price: 51.52 -> 41.14; mcap: 18.41 -> 14.7; m.peTTM: 69.6 -> 53.4; m.evEbitda: 20 -> 111.8; m.evSales: 30 -> 21.7; m.gross: 45 -> 68.4
- `MSTR` Strategy: price: 115.35 -> 94.64; mcap: 40.76 -> 33.86; m.peFwd: 25.9 -> 21.2; m.evSales: 113.1 -> 98.3
- `GLXY` Galaxy Digital: price: 30.15 -> 24.88; mcap: 11.76 -> 9.7; m.peFwd: 322.2 -> 255.9; m.evEbitda: 12 -> 0.2; m.evSales: 5 -> 0.2
- `CRCL` Circle Internet: price: 78.93 -> 66.14; mcap: 21.1 -> 17.68; m.peFwd: 35.4 -> 34.9; m.evSales: 8 -> 5.2; m.gross: 40 -> 8.1
- `BLK` BlackRock: price: 1010.68 -> 1036.11; mcap: 164.59 -> 168.47; m.peTTM: 25.4 -> 26.1; m.peFwd: 16.6 -> 16.7; m.evEbitda: 16 -> 16.4; m.evSales: 7 -> 6.6; m.gross: 50 -> 46.9
- meta: data-date stamped to 2026-07-13 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 325.91; mcap: 214.52 -> 265.62; m.peTTM: 226.9 -> 285.9; m.peFwd: 63.9 -> 79.1; m.evEbitda: 143.9 -> 178.4; m.evSales: 20.1 -> 24.9
- `CRWD` CrowdStrike: price: 647.74 -> 187.18; mcap: 164.89 -> 190.6; m.peFwd: 103.6 -> 119.9; m.evSales: 31.6 -> 36.7; d.revPS: 20.22 -> 5.06
- `FTNT` Fortinet: price: 138.88 -> 157.51; mcap: 101.75 -> 115.4; m.peTTM: 53.8 -> 61.1; m.peFwd: 40.5 -> 46.0; m.evEbitda: 41.9 -> 47.7; m.evSales: 13.9 -> 15.8
- `ZS` Zscaler: price: 124.73 -> 139.27; mcap: 20.17 -> 22.52; m.peFwd: 27.1 -> 30.3; m.evSales: 5.8 -> 6.6
- `NET` Cloudflare: price: 219.67 -> 268.4; mcap: 77.97 -> 95.27; m.peFwd: 140.8 -> 170.0; m.evSales: 33.1 -> 40.5
- `OKTA` Okta: price: 114.92 -> 138.63; mcap: 19.97 -> 24.31; m.peTTM: 83.3 -> 99.7; m.peFwd: 26.9 -> 32.4; m.evEbitda: 66.7 -> 82.1; m.evSales: 5.9 -> 7.3
- `S` SentinelOne: price: 14.79 -> 17.88; mcap: 5.07 -> 6.11; m.peFwd: 29.9 -> 36.2; m.evSales: 4.2 -> 5.2
- `RPD` Rapid7: price: 7.21 -> 11.17; mcap: 0.48 -> 0.75; m.peTTM: 20.6 -> 31.9; m.peFwd: 4.6 -> 7.2; m.evEbitda: 13.6 -> 18.3; m.evSales: 0.9 -> 1.2
- `QLYS` Qualys: price: 110.2 -> 152.69; mcap: 3.88 -> 5.38; m.peTTM: 19.7 -> 27.5; m.peFwd: 13.3 -> 18.5; m.evEbitda: 14.1 -> 20.2; m.evSales: 5.1 -> 7.2
- `TENB` Tenable: price: 26.8 -> 39.78; mcap: 2.96 -> 4.39; m.peFwd: 12.3 -> 18.3; m.evEbitda: 74.4 -> 109.7; m.evSales: 3 -> 4.4
- `GEN` Gen Digital: price: 24.62 -> 25.91; mcap: 14.83 -> 15.61; m.peTTM: 15.7 -> 16.5; m.peFwd: 7.5 -> 7.9; m.evEbitda: 9.5 -> 9.8; m.evSales: 4.5 -> 4.7
- meta: data-date stamped to 2026-07-13 in hero

## finance.js

- changed: 27 · skipped: 1 · review: 0

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 135.26; mcap: 79.36 -> 76.49; m.peTTM: 20.6 -> 19.7; m.peFwd: 15.9 -> 15.4; m.evEbitda: 18 -> 14.6; m.evSales: 9.5 -> 9.3
- `CME` CME Group: price: 263.8 -> 240.27; mcap: 95.32 -> 86.82; m.peTTM: 22.5 -> 20.5; m.peFwd: 20.4 -> 18.6; m.evEbitda: 20 -> 18.4; m.evSales: 16 -> 13.1
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 89.08; mcap: 58.77 -> 58.05; m.peTTM: 38 -> 37.6; m.peFwd: 16.8 -> 16.5; m.evEbitda: 17 -> 16.2; m.evSales: 7.5 -> 5.9; m.gross: 68 -> 88.1
- `SPGI` S&P Global: price: 426.38 -> 430.5; mcap: 126.21 -> 127.43; m.peTTM: 27 -> 27.2; m.peFwd: 19.2 -> 21.2; m.evEbitda: 24 -> 18.4; m.evSales: 12 -> 9.2; m.gross: 73 -> 70.5
- `MSCI` MSCI Inc: price: 608.52 -> 604.71; mcap: 44.26 -> 43.98; m.peTTM: 34.8 -> 34.5; m.peFwd: 27 -> 26.6; m.evEbitda: 28 -> 26.4; m.evSales: 18 -> 15.5; m.gross: 82 -> 82.9
- `MCO` Moody's: price: 450.69 -> 487.28; mcap: 78.72 -> 85.12; m.peTTM: 32.4 -> 35.0; m.peFwd: 24.2 -> 26.2; m.evEbitda: 25 -> 23.9; m.evSales: 13 -> 11.6; m.gross: 72 -> 74.4
- `V` Visa: price: 322.96 -> 348.97; mcap: 614.19 -> 663.65; m.peTTM: 28.2 -> 30.4; m.peFwd: 21.7 -> 23.5; m.evEbitda: 24 -> 22.2; m.evSales: 20 -> 15.5; m.gross: 80 -> 97.8
- `MA` Mastercard: price: 489.08 -> 526.74; mcap: 432.14 -> 465.42; m.peTTM: 28.3 -> 30.5; m.peFwd: 21.5 -> 23.1; m.evEbitda: 28 -> 22.3; m.evSales: 24 -> 14.0
- `PYPL` PayPal: price: 40.7 -> 46.32; mcap: 35.9 -> 40.86; m.peTTM: 7.6 -> 8.7; m.peFwd: 7.1 -> 8.0; m.evEbitda: 9 -> 6.6; m.evSales: 2 -> 1.3; m.gross: 46 -> 40.9
- `JPM` JPMorgan Chase: price: 309.14 -> 336.47; mcap: 828.34 -> 901.58; m.peTTM: 14.8 -> 16.1; m.peFwd: 13.1 -> 14.1; m.evSales: 3.5 -> 3.8
- `BAC` Bank of America: price: 54.54 -> 59.67; mcap: 387.05 -> 423.45; m.peTTM: 13.5 -> 14.8; m.peFwd: 10.8 -> 11.7; m.evSales: 3 -> 3.6
- `WFC` Wells Fargo: price: 81.97 -> 87.16; mcap: 250.84 -> 266.73; m.peTTM: 12.7 -> 13.5; m.peFwd: 10.4 -> 11.0; m.evSales: 3.2 -> 3.6
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 14.71; mcap: 296.75 -> 337.6; m.peTTM: 14.2 -> 16.0; m.peFwd: 9.1 -> 10.4
- `GS` Goldman Sachs: price: 1001.29 -> 1055.18; mcap: 295.39 -> 311.29; m.peTTM: 18.3 -> 19.3; m.peFwd: 15.3 -> 15.7; m.evSales: 3 -> 0.6; m.gross: 55 -> 82.3
- `MS` Morgan Stanley: price: 206.66 -> 222.28; mcap: 325.96 -> 350.6; m.peTTM: 18.7 -> 20.1; m.peFwd: 16.3 -> 17.0; m.evSales: 3.4 -> 3.8; m.gross: 58 -> 87.4
- `SCHW` Charles Schwab: price: 89.27 -> 103.12; mcap: 155.25 -> 179.34; m.peTTM: 17.7 -> 20.5; m.peFwd: 12.4 -> 13.8; m.evSales: 5 -> 6.0; m.gross: 70 -> 97.5
- `IBKR` Interactive Brokers: price: 85.42 -> 94.09; mcap: 144.89 -> 159.6; m.peTTM: 36.7 -> 40.4; m.peFwd: 29.7 -> 31.7; m.gross: 90 -> 93.0
- `HOOD` Robinhood Markets: price: 86.36 -> 111.97; mcap: 77.77 -> 100.83; m.peTTM: 41.9 -> 54.4; m.peFwd: 30.8 -> 36.6; m.evSales: 18 -> 20.7; m.gross: 88 -> 92.2
- `FUTU` Futu Holdings: price: 92.93 -> 96.33; mcap: 13.03 -> 13.5; m.peTTM: 10.3 -> 10.6; m.peFwd: 7.6 -> 7.9; m.gross: 85 -> 94.4
- `BLK` BlackRock: price: 1010.68 -> 1036.11; mcap: 164.59 -> 168.47; m.peTTM: 25.4 -> 26.1; m.peFwd: 16.6 -> 16.7; m.evEbitda: 16 -> 16.4; m.evSales: 7 -> 6.6; m.gross: 50 -> 46.9
- `BX` Blackstone: price: 118.48 -> 123.09; mcap: 144.81 -> 150.45; m.peTTM: 30.4 -> 31.6; m.peFwd: 15.7 -> 16.5; m.evSales: 18 -> 8.5
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 493.71; mcap: 1043.23 -> 1064.86; m.peTTM: 14.4 -> 14.7; m.peFwd: 22.5 -> 22.9; m.gross: 30 -> 27.8
- `PGR` Progressive: price: 204.2 -> 230.72; mcap: 119.15 -> 134.33; m.peTTM: 10.4 -> 11.7; m.peFwd: 12.6 -> 14.0; m.evEbitda: 12 -> 9.3; m.evSales: 2.2 -> 1.6; m.gross: 30 -> 18.6
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 421.6; mcap: 167.13 -> 182.42; m.peTTM: 12.3 -> 13.6; m.peFwd: 11.5 -> 12.9; m.evEbitda: 9 -> 6.9; m.evSales: 1.5 -> 1.2; m.gross: 28 -> 24.3
- `AXP` American Express: price: 313.34 -> 350.58; mcap: 213.8 -> 239.21; m.peTTM: 19.6 -> 21.9; m.peFwd: 15.6 -> 17.4; m.evSales: 3.5 -> 3.6; m.gross: 55 -> 62.8
- `INTU` Intuit: price: 284.22 -> 274.96; mcap: 77.74 -> 75.21; m.peTTM: 17.3 -> 16.8; m.peFwd: 10.4 -> 10.1; m.evEbitda: 12.1 -> 11.8; m.evSales: 3.7 -> 3.6
- meta: data-date stamped to 2026-07-13 in hero/footer

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 95.99; mcap: 41.39 -> 41.81; m.peTTM: 96 -> 91.4; m.peFwd: 50 -> 50.8; m.evEbitda: 46.2 -> 46.7; m.evSales: 11.7 -> 11.8
- `UEC` Uranium Energy: price: 9.42 -> 10.53; mcap: 4.66 -> 5.16; m.evSales: 206.7 -> 233.9
- `NXE` NexGen Energy: price: 9.27 -> 9.67; mcap: 6.14 -> 6.4
- `SMR` NuScale Power: price: 9.29 -> 9.04; mcap: 3.22 -> 3.13; m.evSales: 121.8 -> 117.2
- `OKLO` Oklo: price: 54.02 -> 48.85; mcap: 9.4 -> 8.5
- `BWXT` BWX Technologies: price: 183 -> 186.0; mcap: 16.77 -> 17.04; m.peTTM: 48.9 -> 49.5; m.peFwd: 35.2 -> 35.8; m.evEbitda: 39.3 -> 39.9; m.evSales: 5.4 -> 5.5
- `LEU` Centrus Energy: price: 146.61 -> 171.05; mcap: 2.88 -> 3.37; m.peTTM: 53.1 -> 62.2; m.peFwd: 36.9 -> 43.4; m.evEbitda: 64.2 -> 78.2; m.evSales: 4.9 -> 5.9
- `CEG` Constellation Energy: price: 242.3 -> 251.38; mcap: 86.53 -> 89.77; m.peTTM: 21.9 -> 21.8; m.peFwd: 17.8 -> 18.5; m.evEbitda: 13.8 -> 14.2; m.evSales: 3.7 -> 3.8
- `VST` Vistra: price: 138.54 -> 158.86; mcap: 46.71 -> 53.56; m.peTTM: 23.2 -> 26.6; m.peFwd: 12.6 -> 14.7; m.evEbitda: 10.1 -> 11.1; m.evSales: 3.5 -> 3.9
- `GEV` GE Vernova: price: 867.09 -> 1091.57; mcap: 233 -> 293.33; m.peTTM: 25.3 -> 31.9; m.peFwd: 35.4 -> 44.4; m.evEbitda: 66.8 -> 84.5; m.evSales: 5.8 -> 7.3
- `ETN` Eaton: price: 375.46 -> 407.28; mcap: 145.79 -> 158.15; m.peTTM: 36.8 -> 39.9; m.peFwd: 23.9 -> 25.8; m.evEbitda: 26.3 -> 28.3; m.evSales: 5.9 -> 6.3
- `PWR` Quanta Services: price: 650.92 -> 658.56; mcap: 97.68 -> 98.82; m.peTTM: 89.5 -> 90.1; m.peFwd: 39.5 -> 40.0; m.evEbitda: 39 -> 39.4; m.evSales: 3.4 -> 3.5
- `NEE` NextEra Energy: price: 85.12 -> 87.96; mcap: 177.53 -> 183.45; m.peTTM: 21.6 -> 22.3; m.peFwd: 19.4 -> 20.0; m.evEbitda: 20.6 -> 21.0; m.evSales: 10.5 -> 10.7
- `FSLR` First Solar: price: 249.27 -> 227.83; mcap: 26.78 -> 24.48; m.peTTM: 16.1 -> 14.7; m.peFwd: 10.6 -> 9.7; m.evEbitda: 11 -> 10.0; m.evSales: 4.6 -> 4.2
- meta: data-date stamped to 2026-07-13 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 42.86; mcap: 21.14 -> 16.0; m.peTTM: 145.2 -> 109.9; m.evSales: 102.3 -> 74.9
- `RGTI` Rigetti Computing: price: 19.45 -> 16.54; mcap: 6.46 -> 5.5
- `QBTS` D-Wave Quantum: price: 23.25 -> 20.09; mcap: 8.61 -> 7.44
- `QUBT` Quantum Computing Inc: price: 9.53 -> 8.66; mcap: 2.15 -> 1.95; m.evSales: 269.7 -> 224.4
- `IBM` IBM: price: 272.36 -> 287.56; mcap: 255.99 -> 270.27; m.peTTM: 24.1 -> 25.4; m.peFwd: 20.3 -> 21.4; m.evEbitda: 18.9 -> 19.8; m.evSales: 4.6 -> 4.8
- `GOOGL` Alphabet: price: 356.38 -> 357.18; mcap: 4346.03 -> 4358.51; m.peFwd: 24.6 -> 24.5; m.evSales: 10.1 -> 10.2
- `MSFT` Microsoft: price: 397.36 -> 385.1; mcap: 2951.76 -> 2860.69; m.peTTM: 23.7 -> 22.9; m.peFwd: 20.5 -> 19.9; m.evEbitda: 16.3 -> 15.8; m.evSales: 9.4 -> 9.1
- `HON` Honeywell: price: 205.88 -> 226.42; mcap: 130.46 -> 71.74; m.peTTM: 32.9 -> 18.1; m.peFwd: 18 -> 21.4; m.evEbitda: 18.4 -> 11.5; m.evSales: 4.2 -> 2.6; d.revPS: 59.25 -> 118.5
- `FORM` FormFactor: price: 115.81 -> 117.52; mcap: 9.03 -> 9.16; m.peTTM: 133.1 -> 135.1; m.peFwd: 41.5 -> 42.1; m.evEbitda: 63.7 -> 64.7; m.evSales: 10.4 -> 10.6
- `NVDA` NVIDIA: price: 200.42 -> 210.96; mcap: 4854.37 -> 5109.66; m.peTTM: 30.7 -> 32.3; m.peFwd: 15.7 -> 16.5; m.evEbitda: 29.1 -> 30.6; m.evSales: 19 -> 20.0
- meta: data-date stamped to 2026-07-13 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 407.76; mcap: 1433.15 -> 1531.43; m.peTTM: 370.5 -> 370.7; m.peFwd: 152.6 -> 158.2; m.evEbitda: 126.6 -> 135.5; m.evSales: 14.4 -> 15.4
- `SERV` Serve Robotics: price: 6.98 -> 5.92; mcap: 0.59 -> 0.5; m.evSales: 68.7 -> 53.0
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 83.58; mcap: 180.91 -> 187.43; m.peTTM: 37.5 -> 38.7; m.peFwd: 29.2 -> 29.8; m.evEbitda: 21.2 -> 22.2; m.evSales: 4.3 -> 4.5
- `6954` Fanuc (via `6954.T`): price: 6691 -> 6957.0; mcap: 38.9 -> 40.01; m.peTTM: 37.5 -> 39.0; m.peFwd: 38.7 -> 40.2; m.evEbitda: 24.1 -> 25.7; m.evSales: 6.5 -> 6.9
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 5972.0; mcap: 9.68 -> 9.55; m.peTTM: 44.1 -> 43.9; m.peFwd: 29.2 -> 29.1; m.evEbitda: 24.2 -> 27.9; m.evSales: 3 -> 3.4; m.gross: 35.3 -> 35.0; m.op: 8.8 -> 6.1; m.net: 6.5 -> 6.1; m.roe: 7.8 -> 7.5; m.revCagrHist: 2 -> 10.6
- `ROK` Rockwell Automation: price: 440.07 -> 472.12; mcap: 48.97 -> 52.53; m.peTTM: 45.7 -> 49.0; m.peFwd: 30.3 -> 32.3; m.evEbitda: 26.7 -> 28.6; m.evSales: 6 -> 6.4
- `EMR` Emerson Electric: price: 137.11 -> 138.88; mcap: 76.8 -> 77.79; m.peTTM: 31.7 -> 32.1; m.peFwd: 19.1 -> 19.3; m.evEbitda: 15.2 -> 15.3
- `SIEGY` Siemens: price: 153.07 -> 155.97; mcap: 235.46 -> 239.92; m.peTTM: 27.5 -> 28.3; m.peFwd: 20.8 -> 23.3; m.evEbitda: 23.9 -> 24.9; m.evSales: 3.6 -> 3.7
- `PH` Parker Hannifin: price: 875.6 -> 961.27; mcap: 110.4 -> 121.2; m.peTTM: 32.3 -> 35.5; m.peFwd: 25.7 -> 28.2; m.evEbitda: 21.8 -> 23.8; m.evSales: 5.7 -> 6.2
- `NOVT` Novanta: price: 154.58 -> 156.65; mcap: 5.51 -> 5.58; m.peTTM: 111.2 -> 112.7; m.peFwd: 37.3 -> 37.8; m.evEbitda: 30.2 -> 30.7; m.evSales: 5.4 -> 5.5
- `CGNX` Cognex: price: 58.69 -> 66.8; mcap: 9.77 -> 11.12; m.peTTM: 69 -> 78.6; m.peFwd: 33.3 -> 37.6; m.evEbitda: 42.1 -> 48.1; m.evSales: 9.1 -> 10.4
- `SYM` Symbotic: price: 41.24 -> 43.64; mcap: 24.89 -> 26.34; m.peFwd: 57.4 -> 60.5; m.evEbitda: 159.3 -> 172.8; m.evSales: 1.4 -> 1.6
- `ZBRA` Zebra Technologies: price: 216.79 -> 272.52; mcap: 10.33 -> 12.98; m.peTTM: 26.2 -> 32.9; m.peFwd: 10.5 -> 13.2; m.evEbitda: 12.7 -> 15.3; m.evSales: 2.3 -> 2.8
- meta: data-date stamped to 2026-07-13 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 0

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 28820.0; mcap: 113.02 -> 128.74; m.peTTM: 48.8 -> 55.8; m.peFwd: 105.2 -> 121.2; m.evEbitda: 34.3 -> 41.3; m.evSales: 15.9 -> 18.9; m.op: 46.7 -> 45.9
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 7340.0; mcap: 78 -> 84.13; m.peTTM: 26.7 -> 29.1; m.peFwd: 20.4 -> 22.3; m.evEbitda: 12.7 -> 14.1; m.evSales: 4.3 -> 4.8
- `6146` Disco (via `6146.T`): price: 68720 -> 70870.0; mcap: 46.43 -> 47.38; m.peTTM: 55.1 -> 56.8; m.peFwd: 50.5 -> 52.1; m.evEbitda: 36.8 -> 38.2; m.evSales: 16.7 -> 17.4; m.roe: 30 -> 25.1; m.revCagrHist: 22 -> 10.2
- `6963` Rohm (via `6963.T`): price: 4679 -> 5243.0; mcap: 11.25 -> 12.47; m.peFwd: 53.8 -> 60.3; m.evEbitda: 26.4 -> 31.3; m.evSales: 3.7 -> 4.4; m.roe: 1.5 -> -19.2; m.revCagrHist: -3 -> 7.5
- `4004` Resonac (via `4004.T`): price: 15820 -> 15330.0; mcap: 17.84 -> 17.1; m.peTTM: 98.2 -> 95.9; m.peFwd: 63.4 -> 61.5; m.evEbitda: 24.1 -> 25.1; m.evSales: 2.6 -> 2.7
- `6861` Keyence (via `6861.T`): price: 71270 -> 76700.0; mcap: 107.68 -> 114.64; m.peTTM: 38.8 -> 41.9; m.peFwd: 38.2 -> 41.1; m.evEbitda: 26.4 -> 28.0; m.evSales: 13.8 -> 14.7; m.roe: 14 -> 13.5
- `6723` Renesas (via `6723.T`): price: 4222 -> 4469.0; mcap: 47.72 -> 49.97; m.peFwd: 16.4 -> 16.7; m.evEbitda: 23.5 -> 25.8; m.evSales: 6.3 -> 6.9
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 71300.0; mcap: 177.9 -> 199.87; m.peTTM: 50.3 -> 57.2; m.peFwd: 49 -> 55.7; m.evEbitda: 39.1 -> 46.3; m.evSales: 11.3 -> 13.4
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 17755.0; mcap: 15.04 -> 20.69; m.peTTM: 26.2 -> 36.5; m.peFwd: 14.6 -> 20.3; m.evEbitda: 16.3 -> 23.4; m.evSales: 3.7 -> 5.3
- `ASML` ASML Holding: price: 1734.19 -> 1797.32; mcap: 668.39 -> 692.72; m.peTTM: 59.5 -> 61.0; m.peFwd: 36.2 -> 35.9
- `LRCX` Lam Research: price: 321.8 -> 350.33; mcap: 402.43 -> 438.11; m.peTTM: 60.7 -> 66.2; m.peFwd: 40.4 -> 43.3; m.evEbitda: 51.2 -> 55.7; m.evSales: 18.5 -> 20.2
- `KLAC` KLA Corp: price: 2135.64 -> 231.52; mcap: 278.97 -> 302.43; m.peTTM: 60.6 -> 65.4; m.peFwd: 42.4 -> 45.4; m.evEbitda: 47.9 -> 51.9; m.evSales: 21.4 -> 23.2
- `TSM` TSMC: price: 408.75 -> 434.11; mcap: 2119.97 -> 2251.5; m.peTTM: 35.1 -> 37.7; m.peFwd: 20.9 -> 21.4; m.evEbitda: 5.2 -> 5.5; m.evSales: 3.6 -> 3.8
- `AMAT` Applied Materials: price: 497.01 -> 602.5; mcap: 394.61 -> 478.36; m.peTTM: 46.7 -> 56.8; m.peFwd: 30.6 -> 36.2; m.evEbitda: 42.4 -> 51.5; m.evSales: 13.6 -> 16.4
- `NVDA` NVIDIA: price: 200.42 -> 210.96; mcap: 4854.37 -> 5109.66; m.peTTM: 30.7 -> 32.3; m.peFwd: 15.7 -> 16.5; m.evEbitda: 29.1 -> 30.6; m.evSales: 19 -> 20.0
- `AVGO` Broadcom: price: 372.1 -> 399.97; mcap: 1770.3 -> 1902.89; m.peTTM: 61.7 -> 66.7; m.peFwd: 19.2 -> 20.6; m.evEbitda: 43.3 -> 46.3; m.evSales: 24.1 -> 25.8
- `AMD` AMD: price: 452.4 -> 557.89; mcap: 737.68 -> 909.7; m.peTTM: 151.3 -> 185.3; m.peFwd: 34.6 -> 42.0; m.evEbitda: 98.1 -> 121.3; m.evSales: 19.5 -> 24.1
- `INTC` Intel: price: 107.04 -> 109.84; mcap: 537.98 -> 552.06; m.peFwd: 69.6 -> 69.8; m.evEbitda: 39.8 -> 40.8; m.evSales: 10.5 -> 10.7
- `ARM` Arm Holdings: price: 307.43 -> 323.39; mcap: 328.36 -> 345.41; m.peTTM: 357.5 -> 385.0; m.peFwd: 100.2 -> 105.0; m.evSales: 66.1 -> 69.6
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 254500.0; mcap: 1118.21 -> 976.23; m.peFwd: 5.2 -> 3.9; m.evEbitda: 13.4 -> 12.6; m.evSales: 4.9 -> 4.6
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 1845000.0; mcap: 960.23 -> 871.55; m.peFwd: 5.1 -> 4.1; m.evEbitda: 15.5 -> 16.5; m.evSales: 10.7 -> 11.4
- `MU` Micron: price: 891.88 -> 979.3; mcap: 1005.8 -> 1106.01; m.peTTM: 42.2 -> 22.1; m.peFwd: 8 -> 6.5; m.evEbitda: 27.2 -> 15.9; m.evSales: 17.2 -> 12.0; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 445.5; mcap: 88.18 -> 85.3; m.peTTM: 105.4 -> 101.9; m.peFwd: 26.7 -> 25.8; m.evEbitda: 56.9 -> 55.2; m.evSales: 11.1 -> 10.8
- `CDNS` Cadence: price: 385.13 -> 384.17; mcap: 106.23 -> 105.96; m.peTTM: 90.2 -> 89.3; m.peFwd: 41 -> 40.9; m.evEbitda: 53.5 -> 53.4; m.evSales: 19.5 -> 19.4
- `QCOM` Qualcomm: price: 191.2 -> 189.16; mcap: 201.52 -> 199.37; m.peTTM: 22.1 -> 20.3; m.peFwd: 17.9 -> 17.2; m.evEbitda: 15.9 -> 15.8; m.evSales: 4.7 -> 4.6
- `GFS` GlobalFoundries: price: 74.82 -> 68.97; mcap: 41.03 -> 37.84; m.peTTM: 50.6 -> 49.6; m.peFwd: 29.7 -> 27.3; m.evEbitda: 19.6 -> 18.0; m.evSales: 5.8 -> 5.4
- `LIN` Linde: price: 509.16 -> 529.79; mcap: 235.41 -> 244.95; m.peTTM: 33.8 -> 35.1; m.peFwd: 25.8 -> 26.9; m.evEbitda: 19.1 -> 19.8; m.evSales: 7.5 -> 7.8
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 174.3; mcap: 123.3 -> 126.43; m.peTTM: 30.3 -> 31.5; m.peFwd: 23.7 -> 24.3; m.evEbitda: 15.6 -> 16.2; m.evSales: 4.3 -> 4.5
- `ENTG` Entegris: price: 128.88 -> 145.35; mcap: 19.63 -> 22.14; m.peTTM: 74.5 -> 84.0; m.peFwd: 27.9 -> 31.3; m.evEbitda: 26.1 -> 28.9; m.evSales: 7.1 -> 7.9
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 10350.0; mcap: 7.01 -> 7.65; m.peTTM: 33.8 -> 37.3; m.peFwd: 48 -> 53.0; m.evEbitda: 19.2 -> 21.5; m.evSales: 3.1 -> 3.5
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 4564.0; mcap: 5.39 -> 5.48; m.peFwd: 16.1 -> 16.5; m.evEbitda: 12.6 -> 12.9; m.evSales: 1.4 -> 1.5; m.op: 3.7 -> 4.8
- `3436` Sumco (via `3436.T`): price: 3275 -> 5133.0; mcap: 7.14 -> 11.06; m.peFwd: 66.5 -> 104.3; m.evEbitda: 13.4 -> 20.0; m.evSales: 3.6 -> 5.3
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 98.0; mcap: 5.17 -> 4.0; m.peFwd: 63 -> 50.2; m.evEbitda: 40.4 -> 37.9; m.evSales: 7.6 -> 6.0; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 18690.0; mcap: 30.89 -> 32.17; m.peTTM: 82.3 -> 86.9; m.peFwd: 57.5 -> 60.5; m.evEbitda: 38.3 -> 44.9; m.evSales: 11.4 -> 13.4
- `ASX` ASE Technology: price: 34.3 -> 42.66; mcap: 75.25 -> 93.59; m.peTTM: 53.6 -> 66.7; m.peFwd: 21.6 -> 21.4; m.evEbitda: 2 -> 2.1
- `AMKR` Amkor Technology: price: 69.61 -> 70.47; mcap: 17.25 -> 17.47; m.peTTM: 40 -> 40.5; m.peFwd: 28.4 -> 28.7; m.evEbitda: 14.3 -> 14.5
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 99.73; mcap: 18.86 -> 26.31; m.peTTM: 77.6 -> 108.4; m.peFwd: 50.1 -> 67.8; m.evEbitda: 22.6 -> 30.5; m.evSales: 3.6 -> 4.9
- `TXN` Texas Instruments: price: 282.01 -> 311.46; mcap: 256.66 -> 283.46; m.peTTM: 48.3 -> 53.2; m.peFwd: 30 -> 32.5; m.evEbitda: 30.7 -> 33.7; m.evSales: 14.4 -> 15.9
- `ADI` Analog Devices: price: 392.67 -> 395.65; mcap: 191.26 -> 192.72; m.peTTM: 58.5 -> 58.8; m.peFwd: 26.6 -> 26.8; m.evEbitda: 32 -> 32.2; m.evSales: 15.4 -> 15.5
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 72.48; mcap: 112.72 -> 107.45; m.peTTM: 91.6 -> 88.4; m.peFwd: 29.1 -> 26.8; m.evEbitda: 25.8 -> 25.0; m.evSales: 6.9 -> 6.6
- `NXPI` NXP Semiconductors: price: 285.56 -> 292.26; mcap: 72.1 -> 73.79; m.peTTM: 28.4 -> 27.9; m.peFwd: 16.2 -> 16.5; m.evEbitda: 19.3 -> 19.7; m.evSales: 6.4 -> 6.5
- `STM` STMicroelectronics: price: 70.74 -> 71.46; mcap: 62.87 -> 63.77; m.peTTM: 442.1 -> 446.6; m.peFwd: 28.8 -> 28.6; m.evEbitda: 24.7 -> 25.0
- `ON` ON Semiconductor: price: 110.17 -> 95.96; mcap: 42.83 -> 37.35; m.peTTM: 81 -> 70.6; m.peFwd: 25.8 -> 22.2; m.evEbitda: 21.5 -> 18.8; m.evSales: 7.3 -> 6.3
- `MCHP` Microchip: price: 87.91 -> 88.59; mcap: 47.65 -> 48.11; m.peTTM: 399.6 -> 402.7; m.peFwd: 21.5 -> 21.4; m.evEbitda: 43.5 -> 43.8
- `MRVL` Marvell: price: 252.59 -> 235.81; mcap: 220.97 -> 211.65; m.peTTM: 87.1 -> 81.3; m.peFwd: 40.9 -> 38.2; m.evEbitda: 82 -> 76.6; m.evSales: 25.5 -> 23.8
- `AVT` Avnet: price: 85.39 -> 87.13; mcap: 7 -> 7.15; m.peTTM: 33 -> 33.6; m.peFwd: 10.8 -> 11.0; m.evEbitda: 13 -> 13.2
- `ARW` Arrow Electronics: price: 215.49 -> 206.41; mcap: 11.02 -> 10.55; m.peTTM: 15.4 -> 14.8; m.peFwd: 10.1 -> 9.7; m.evEbitda: 10.4 -> 10.0
- `AAPL` Apple: price: 291.58 -> 315.32; mcap: 4282.54 -> 4631.22; m.peTTM: 35.3 -> 38.2; m.peFwd: 30.4 -> 32.8; m.evEbitda: 26.9 -> 29.1; m.evSales: 9.5 -> 10.3
- `MSFT` Microsoft: price: 397.36 -> 385.1; mcap: 2951.76 -> 2860.69; m.peTTM: 23.7 -> 22.9; m.peFwd: 20.5 -> 19.9; m.evEbitda: 16.3 -> 15.8; m.evSales: 9.4 -> 9.1
- `GOOGL` Alphabet: price: 356.38 -> 357.18; mcap: 4346.03 -> 4358.51; m.peFwd: 24.6 -> 24.5; m.evSales: 10.1 -> 10.2
- `AMZN` Amazon: price: 238 -> 245.34; mcap: 2560.19 -> 2639.15; m.peTTM: 31.6 -> 29.3; m.peFwd: 24.1 -> 24.8; m.evEbitda: 17 -> 17.5; m.evSales: 3.6 -> 3.7
- `META` Meta Platforms: price: 570.98 -> 669.21; mcap: 1449.39 -> 1698.74; m.peTTM: 20.7 -> 24.3; m.peFwd: 15.8 -> 18.4; m.evEbitda: 13.3 -> 15.6; m.evSales: 6.8 -> 7.9
- `TSLA` Tesla: price: 381.59 -> 407.76; mcap: 1433.15 -> 1531.43; m.peTTM: 370.5 -> 370.7; m.peFwd: 152.6 -> 158.2; m.evEbitda: 126.6 -> 135.5; m.evSales: 14.4 -> 15.4
- `SONY` Sony Group: price: 20.76 -> 20.85; mcap: 122.26 -> 122.43; m.peTTM: 19.4 -> 19.7; m.peFwd: 17.4 -> 17.5; m.gross: 30.8 -> 31.2; m.op: 7.6 -> 10.7; m.roe: 12.4 -> 12.3; m.revCagrHist: 15.4 -> 8.3
- `CSCO` Cisco Systems: price: 118.8 -> 121.31; mcap: 468.24 -> 478.14; m.peTTM: 39.5 -> 40.4; m.peFwd: 24.9 -> 25.4; m.evEbitda: 28.5 -> 29.1; m.evSales: 8 -> 8.1
- `DELL` Dell Technologies: price: 369.83 -> 434.97; mcap: 239.69 -> 281.05; m.peTTM: 29.5 -> 34.6; m.peFwd: 17.5 -> 20.2; m.evEbitda: 18.7 -> 21.5; m.evSales: 1.9 -> 2.3; m.op: 8.3 -> 8.9
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 87.09; mcap: 71.5 -> 69.77; m.peTTM: 45.7 -> 29.1; m.peFwd: 15.9 -> 15.6
- `APD` Air Products: price: 276.51 -> 299.53; mcap: 61.57 -> 66.7; m.peTTM: 29.2 -> 31.5; m.peFwd: 19.4 -> 21.0; m.evEbitda: 21 -> 22.4; m.evSales: 6.5 -> 7.0
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 6052.0; mcap: 14.2 -> 16.14; m.peTTM: 18.4 -> 21.2; m.peFwd: 19 -> 21.9; m.evEbitda: 9.5 -> 10.5; m.evSales: 2.2 -> 2.5; m.op: 14 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3566.0; mcap: 26.02 -> 26.28; m.peFwd: 15 -> 15.4; m.evEbitda: 9.8 -> 9.9
- `MRK.DE` Merck KGaA: price: 136.45 -> 139.7; mcap: 20.37 -> 20.6; m.peTTM: 23.4 -> 24.0; m.peFwd: 15.7 -> 16.1; m.evEbitda: 11.9 -> 12.2; m.evSales: 3.2 -> 3.3
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 519.0; mcap: 5.55 -> 5.28; m.peTTM: 14.5 -> 14.0; m.peFwd: 13.9 -> 13.3; m.evEbitda: 6.4 -> 9.0; m.op: -4.6 -> -18.8
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 89.5; mcap: 2.96 -> 3.06; m.evEbitda: 12.3 -> 13.6; m.evSales: 2.8 -> 3.0; m.gross: 8.3 -> 2.3; m.op: -9.7 -> -17.1; m.net: -5.1 -> -9.9; m.roe: -3.7 -> -7.1; m.revCagrHist: 3.1 -> -11.4
- `CEVA` CEVA: price: 41.08 -> 45.54; mcap: 1.14 -> 1.27; m.peFwd: 49.9 -> 55.5; m.evSales: 8.4 -> 9.5
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 3825.0; mcap: 200.41 -> 189.63; m.peTTM: 60.2 -> 58.0; m.peFwd: 33.1 -> 30.6; m.evEbitda: 54.8 -> 51.7; m.evSales: 10.9 -> 10.3
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 77.15; mcap: 54.37 -> 59.19; m.peTTM: 101.2 -> 108.7; m.peFwd: 52.4 -> 53.9; m.evEbitda: 94.5 -> 103.7; m.evSales: 45.2 -> 49.6
- `UMC` UMC: price: 18.9 -> 24.34; mcap: 47.43 -> 61.08; m.peTTM: 30.5 -> 39.3; m.peFwd: 23.5 -> 29.9
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 173.0; mcap: 22.67 -> 29.35; m.peTTM: 534.4 -> 665.4; m.peFwd: 111.9 -> 138.5; m.evSales: 95.5 -> 128.7
- `285A` Kioxia (via `285A.T`): price: 74560 -> 67100.0; mcap: 253.66 -> 226.3; m.peTTM: 74 -> 66.5; m.evEbitda: 33.2 -> 37.3; m.evSales: 16.8 -> 18.3; m.op: 59.5 -> 59.4
- `SNDK` SanDisk: price: 1643.23 -> 1915.92; mcap: 243.35 -> 283.73; m.peTTM: 56.2 -> 65.4; m.peFwd: 9 -> 9.4; m.evEbitda: 42.6 -> 49.8; m.evSales: 18.2 -> 21.3
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 5647.0; mcap: 68.69 -> 71.22; m.peTTM: 27.2 -> 28.5; m.peFwd: 32.6 -> 34.2; m.evEbitda: 16.8 -> 20.5; m.evSales: 1.9 -> 2.0; m.op: 8 -> 6.4
- `WOLF` Wolfspeed: price: 43.42 -> 35.29; mcap: 2.26 -> 1.83; m.evSales: 3.9 -> 3.3
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 12820.0; mcap: 12.06 -> 11.53; m.peTTM: 19.7 -> 19.3; m.peFwd: 21.6 -> 21.1; m.evEbitda: 10.2 -> 9.9; m.revCagrHist: 8 -> 13.3
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 761.65; mcap: 67.48 -> 81.49; m.peTTM: 82.1 -> 99.0; m.peFwd: 43.5 -> 51.7; m.evEbitda: 61.5 -> 79.4; m.evSales: 10.9 -> 14.1
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 910.4; mcap: 51.19 -> 50.77; m.peTTM: 45 -> 45.2; m.peFwd: 33.6 -> 32.8; m.evEbitda: 39.8 -> 40.0
- `TER` Teradyne: price: 347.59 -> 359.6; mcap: 54.41 -> 56.29; m.peTTM: 64.5 -> 66.7; m.evEbitda: 46.7 -> 48.3; m.evSales: 14.3 -> 14.8
- `COHU` Cohu: price: 54.47 -> 56.17; mcap: 2.57 -> 2.65; m.peFwd: 37.4 -> 38.0; m.evSales: 5 -> 5.2
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 1850.0; mcap: 28.4 -> 24.34; m.peTTM: 77.6 -> 58.4; m.peFwd: 36.3 -> 29.0; m.evEbitda: 74.6 -> 61.3; m.evSales: 28 -> 23.0
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 183.9; mcap: 9.31 -> 9.84; m.peTTM: 66.9 -> 71.0; m.peFwd: 33.6 -> 35.2; m.evEbitda: 53.5 -> 57.2; m.evSales: 4.9 -> 5.3
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 255.3; mcap: 26.42 -> 23.06; m.peTTM: 151.2 -> 133.7; m.peFwd: 47.6 -> 40.6; m.evEbitda: 109.2 -> 96.5; m.evSales: 36.1 -> 31.9
- `KLIC` Kulicke & Soffa: price: 102.03 -> 113.41; mcap: 5.34 -> 5.94; m.peTTM: 99.1 -> 110.1; m.peFwd: 24.1 -> 26.8; m.evEbitda: 41.8 -> 62.2; m.evSales: 6.4 -> 7.1; m.gross: 53.6 -> 49.8
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 18815.0; mcap: 4.46 -> 4.71; m.peTTM: 29.1 -> 31.0; m.peFwd: 28.9 -> 30.9; m.evEbitda: 16.5 -> 18.5; m.evSales: 3.9 -> 4.4
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 84.8; mcap: 1.97 -> 1.85; m.peTTM: 30.3 -> 45.8; m.peFwd: 26.1 -> 23.8; m.evEbitda: 32 -> 30.2; m.evSales: 3.5 -> 3.3
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 73.62; mcap: 13.29 -> 16.47; m.peTTM: 62.4 -> 77.5; m.peFwd: 75.1 -> 93.2; m.evEbitda: 20.6 -> 23.2; m.evSales: 3.8 -> 4.2
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 186.8; mcap: 6.14 -> 8.28; m.peTTM: 41.5 -> 999; m.peFwd: 26.5 -> 28.0; m.evEbitda: 9.9 -> 21.0; m.evSales: 3.9 -> 4.8; m.gross: 9.5 -> 11.4; m.op: 7.3 -> 9.4; m.net: 8.5 -> -1.4; m.roe: 14.8 -> -2.4; m.revCagrHist: 17.9 -> 21.3
- `6239` Powertech (via `6239.TW`): price: 309 -> 312.5; mcap: 7.2 -> 7.17; m.peTTM: 41.5 -> 37.3; m.peFwd: 16.4 -> 16.2; m.evEbitda: 11.7 -> 12.3; m.evSales: 3.2 -> 3.3
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 1270.0; mcap: 16.1 -> 25.49; m.peTTM: 259 -> 417.8; m.peFwd: 28.2 -> 39.0; m.evEbitda: 53.6 -> 77.3; m.evSales: 12.6 -> 18.1
- `3036` WT Micro (via `3036.TW`): price: 225 -> 211.0; mcap: 9.04 -> 8.34; m.peTTM: 21.8 -> 18.3; m.peFwd: 7.6 -> 7.2; m.evEbitda: 13.3 -> 12.0; m.evSales: 0.3 -> 0.2
- `3702` WPG Holdings (via `3702.TW`): price: 106.5 -> 117.0; mcap: 5.64 -> 6.1; m.peTTM: 19.1 -> 20.9; m.peFwd: 6.9 -> 7.6; m.evEbitda: 13.7 -> 14.0
- `3132` Macnica (via `3132.T`): price: 3193 -> 3162.0; mcap: 3.55 -> 3.48; m.peTTM: 20.5 -> 20.3; m.peFwd: 11.7 -> 11.6; m.evEbitda: 13.1 -> 13.2
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 23.1; mcap: 35.84 -> 36.56; m.peTTM: 20.8 -> 21.2; m.peFwd: 13.4 -> 12.6; m.evEbitda: 65.9 -> 65.5; m.evSales: 3.5 -> 3.7; m.op: 4.1 -> 5.6
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 25.82; mcap: 70.06 -> 69.86; m.peTTM: 14.2 -> 14.3; m.peFwd: 14.6 -> 14.8; m.evEbitda: 18.3 -> 17.9
- `HPQ` HP Inc.: price: 24.69 -> 24.22; mcap: 22.58 -> 22.15; m.peTTM: 9.1 -> 9.0; m.peFwd: 8.2 -> 8.0; m.evEbitda: 6.3 -> 6.2
- meta: data-date stamped to 2026-07-13 in hero/footer

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 25 · skipped: 0 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 50.01; mcap: 6.08 -> 6.63; m.peTTM: 208.5 -> 217.4; m.peFwd: 49.8 -> 54.0; m.evEbitda: 50.4 -> 54.4; m.evSales: 13.2 -> 14.2
- `RKLB` Rocket Lab: price: 105.05 -> 81.04; mcap: 65.64 -> 50.64; m.evSales: 87.6 -> 67.2
- `LMT` Lockheed Martin: price: 525.02 -> 523.22; mcap: 121.05 -> 120.64; m.peTTM: 25.4 -> 25.3; m.peFwd: 16.4 -> 16.3; m.evEbitda: 17.5 -> 17.4
- `NOC` Northrop Grumman: price: 542.14 -> 539.63; mcap: 77 -> 76.65; m.peTTM: 17 -> 16.9; m.peFwd: 18 -> 17.9; m.evEbitda: 12.7 -> 12.6
- `BA` Boeing: price: 209 -> 222.28; mcap: 164.76 -> 175.22; m.peTTM: 82.6 -> 87.9; m.peFwd: 50 -> 53.1; m.evSales: 2.1 -> 2.2
- `RTX` RTX Corp: price: 177.41 -> 195.93; mcap: 238.92 -> 263.86; m.peTTM: 34 -> 36.8; m.peFwd: 23.4 -> 25.8; m.evEbitda: 17.9 -> 19.5; m.evSales: 3 -> 3.3
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 197.26; mcap: 159.08 -> 177.15; m.peTTM: 27.6 -> 31.2; m.peFwd: 20.4 -> 23.0; m.evEbitda: 17.8 -> 20.1; m.evSales: 1.9 -> 2.1
- `HEI` Heico: price: 320.88 -> 350.92; mcap: 44.81 -> 49.01; m.peTTM: 57.1 -> 62.6; m.peFwd: 46.9 -> 50.9; m.evEbitda: 34.8 -> 37.9; m.evSales: 9.7 -> 10.6
- `TDG` TransDigm: price: 1212.36 -> 1291.35; mcap: 67.81 -> 72.23; m.peTTM: 37.9 -> 40.3; m.peFwd: 25.8 -> 27.5; m.evEbitda: 19.8 -> 20.7; m.evSales: 10.1 -> 10.6
- `MRCY` Mercury Systems: price: 106.81 -> 107.98; mcap: 6.41 -> 6.48; m.peFwd: 69.7 -> 70.5; m.evEbitda: 70.3 -> 71.1
- `RDW` Redwire: price: 14.87 -> 10.18; mcap: 2.96 -> 2.43; m.evSales: 8.1 -> 5.6
- `ASTS` AST SpaceMobile: price: 87.32 -> 73.32; mcap: 33.89 -> 28.46; m.evSales: 99 -> 264.3
- `IRDM` Iridium: price: 45.61 -> 50.06; mcap: 4.82 -> 5.3; m.peTTM: 46.1 -> 50.6; m.peFwd: 33 -> 42.2; m.evEbitda: 14.8 -> 15.9; m.evSales: 7.4 -> 8.0
- `SATS` EchoStar: price: 115.24 -> 103.92; mcap: 33.4 -> 30.12; m.evEbitda: 38.5 -> 35.7; m.evSales: 4.1 -> 3.8
- `VSAT` Viasat: price: 61.5 -> 73.56; mcap: 8.4 -> 10.05; m.peFwd: 152.5 -> 182.4; m.evEbitda: 9.6 -> 10.8; m.evSales: 2.9 -> 3.3
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 7.71; mcap: 3.15 -> 3.03; m.evEbitda: 7.9 -> 7.8
- `PL` Planet Labs: price: 30.72 -> 26.05; mcap: 10.95 -> 9.28; m.evSales: 31.9 -> 26.9
- `BKSY` BlackSky: price: 31.79 -> 25.02; mcap: 1.18 -> 0.93; m.evSales: 13 -> 10.5
- `SPIR` Spire Global: price: 16.37 -> 14.7; mcap: 0.63 -> 0.57; m.peTTM: 10.3 -> 9.2; m.evSales: 9.4 -> 8.4
- `LHX` L3Harris: price: 303 -> 290.77; mcap: 56.45 -> 54.17; m.peTTM: 32.9 -> 31.5; m.peFwd: 22.2 -> 21.3; m.evEbitda: 34.5 -> 33.3; m.evSales: 5.8 -> 5.5
- `KTOS` Kratos Defense: price: 54.82 -> 48.19; mcap: 10.28 -> 9.04; m.peTTM: 322.5 -> 283.5; m.peFwd: 51.1 -> 44.2; m.evEbitda: 110.8 -> 95.5; m.evSales: 6.4 -> 5.5
- `GRMN` Garmin: price: 231.72 -> 243.11; mcap: 44.69 -> 46.89; m.peTTM: 26.5 -> 27.1; m.peFwd: 22.4 -> 23.5; m.evEbitda: 19.5 -> 20.5; m.evSales: 5.7 -> 5.9
- `LUNR` Intuitive Machines: price: 26.54 -> 16.14; mcap: 4.26 -> 2.59; m.evSales: 16.6 -> 11.6
- `LDOS` Leidos: price: 121.69 -> 107.02; mcap: 15.31 -> 13.46; m.peTTM: 11.1 -> 9.8; m.peFwd: 9.3 -> 8.1; m.evEbitda: 9.1 -> 8.3; m.evSales: 1.3 -> 1.2
- meta: data-date stamped to 2026-07-13 in hero/footer
