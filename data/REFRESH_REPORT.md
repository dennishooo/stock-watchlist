# Data refresh report

- **As of:** 2026-07-27
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 238 changed · 4 skipped · 0 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 206.84; mcap: 4854.37 -> 5009.87; m.peTTM: 30.7 -> 31.6; m.peFwd: 15.7 -> 16.1; m.evEbitda: 29.1 -> 30.0; m.evSales: 19 -> 19.6
- `AVGO` Broadcom: price: 372.1 -> 381.92; mcap: 1770.3 -> 1817.02; m.peTTM: 61.7 -> 63.7; m.peFwd: 19.2 -> 19.6; m.evEbitda: 43.3 -> 44.3; m.evSales: 24.1 -> 24.7
- `AMD` AMD: price: 452.4 -> 521.95; mcap: 737.68 -> 851.09; m.peTTM: 151.3 -> 175.2; m.peFwd: 34.6 -> 38.2; m.evEbitda: 98.1 -> 113.4; m.evSales: 19.5 -> 22.5
- `MU` Micron: price: 891.88 -> 920.95; mcap: 1005.8 -> 1040.11; m.peTTM: 42.2 -> 20.8; m.peFwd: 8 -> 6.0; m.evEbitda: 27.2 -> 15.0; m.evSales: 17.2 -> 11.3; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 173.99; mcap: 191.09 -> 219.08; m.peTTM: 52.3 -> 59.8; m.peFwd: 34.1 -> 38.9; m.evEbitda: 42.2 -> 48.8; m.evSales: 18.4 -> 21.3
- `COHR` Coherent: price: 354.77 -> 282.39; mcap: 69.41 -> 55.25; m.peTTM: 169.7 -> 135.1; m.peFwd: 43.8 -> 34.1; m.evEbitda: 53.9 -> 43.1; m.evSales: 10.7 -> 8.6
- `CIEN` Ciena: price: 434.65 -> 390.96; mcap: 61.53 -> 55.34; m.peTTM: 145.4 -> 129.9; m.peFwd: 45.2 -> 40.6; m.evEbitda: 78.8 -> 70.9; m.evSales: 11.1 -> 10.0
- `SMCI` Super Micro: price: 29.27 -> 30.1; mcap: 17.6 -> 19.47; m.peTTM: 21.4 -> 15.8; m.peFwd: 9 -> 9.1; m.evEbitda: 16.1 -> 16.4
- `DELL` Dell Technologies: price: 369.83 -> 437.5; mcap: 239.69 -> 282.69; m.peTTM: 29.5 -> 34.8; m.peFwd: 17.5 -> 20.0; m.evEbitda: 18.7 -> 21.6; m.evSales: 1.9 -> 2.3; m.op: 8.3 -> 8.9
- `VRT` Vertiv: price: 280.98 -> 290.36; mcap: 107.93 -> 111.53; m.peTTM: 70.8 -> 73.0; m.peFwd: 31.7 -> 32.9; m.evEbitda: 45.6 -> 47.1; m.evSales: 10 -> 10.4
- `EQIX` Equinix: price: 1038.33 -> 1084.24; mcap: 102.4 -> 106.93; m.peTTM: 72 -> 75.2; m.peFwd: 54 -> 56.1; m.evEbitda: 29.1 -> 30.1; m.evSales: 13.1 -> 13.5
- `DLR` Digital Realty: price: 180.78 -> 199.08; mcap: 64.66 -> 74.91; m.peTTM: 47.8 -> 382.8; m.peFwd: 63.1 -> 67.9; m.evEbitda: 28.8 -> 29.3; m.evSales: 13.2 -> 13.9; m.gross: 55.3 -> 57.0; m.op: 17.2 -> 26.1; m.net: 21.8 -> 11.8; m.roe: 5.7 -> 2.9; m.revCagrHist: 16.7 -> 29.9; d.revPS: 18.47 -> 19.53
- `MSFT` Microsoft: price: 397.36 -> 381.7; mcap: 2951.76 -> 2835.43; m.peTTM: 23.7 -> 22.7; m.peFwd: 20.5 -> 19.7; m.evEbitda: 16.3 -> 15.6; m.evSales: 9.4 -> 9.1
- `ORCL` Oracle: price: 201.26 -> 114.99; mcap: 578.83 -> 331.23; m.peTTM: 36.1 -> 19.7; m.peFwd: 18.7 -> 10.6; m.evEbitda: 25.8 -> 15.5; m.evSales: 11 -> 7.0; m.gross: 67.1 -> 65.8; m.op: 32.7 -> 36.2; m.net: 25.3 -> 25.4; m.roe: 57.6 -> 53.4; m.revCagrHist: 21.7 -> 20.6; d.revPS: 22.54 -> 23.55
- meta: data-date stamped to 2026-07-27 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1196.03; mcap: 1013.35 -> 1066.55; m.peTTM: 40.3 -> 42.5; m.peFwd: 25.5 -> 26.7; m.evEbitda: 29 -> 30.5; m.evSales: 14.6 -> 15.3
- `NVO` Novo Nordisk: price: 42.81 -> 48.77; mcap: 189.61 -> 215.7; m.peTTM: 10 -> 11.7; m.peFwd: 12.9 -> 15.0; m.evEbitda: 1.8 -> 2.0
- `VKTX` Viking Therapeutics: price: 27.75 -> 34.79; mcap: 3.22 -> 4.04
- `AMGN` Amgen: price: 337.73 -> 376.04; mcap: 182.28 -> 202.95; m.peTTM: 24 -> 26.2; m.peFwd: 14.4 -> 16.0; m.evEbitda: 13.5 -> 14.7; m.evSales: 6.1 -> 6.7
- `HIMS` Hims & Hers: price: 27.78 -> 28.09; mcap: 6.43 -> 6.5; m.peFwd: 31.2 -> 21.5; m.evEbitda: 81.7 -> 82.5
- `PFE` Pfizer: price: 25.6 -> 24.54; mcap: 145.91 -> 139.86; m.peTTM: 19.5 -> 18.7; m.peFwd: 9 -> 8.7; m.evEbitda: 7.8 -> 7.5; m.evSales: 3.1 -> 3.0
- `MRK` Merck: price: 119.09 -> 131.07; mcap: 294.13 -> 323.72; m.peTTM: 33.5 -> 36.9; m.peFwd: 12.5 -> 13.6; m.evEbitda: 11.4 -> 12.4; m.evSales: 5.1 -> 5.6
- `ABBV` AbbVie: price: 224.95 -> 259.36; mcap: 397.44 -> 458.24; m.peTTM: 111.4 -> 126.5; m.peFwd: 13.8 -> 15.9; m.evEbitda: 15.4 -> 17.4; m.evSales: 7.3 -> 8.3
- `RHHBY` Roche: price: 50.23 -> 54.7; mcap: 323.53 -> 348.66; m.peTTM: 19.9 -> 23.3; m.peFwd: 15.6 -> 16.2; m.evEbitda: 14.3 -> 15.7; m.evSales: 5.4 -> 6.0; m.gross: 74.5 -> 74.2; m.op: 30 -> 36.2; m.net: 20.3 -> 19.6; m.roe: 37.3 -> 38.1; m.revCagrHist: -0.4 -> -1.2
- `TMO` Thermo Fisher: price: 482.04 -> 568.26; mcap: 179.14 -> 211.18; m.peTTM: 26.5 -> 30.6; m.peFwd: 17.7 -> 20.7; m.evEbitda: 19.4 -> 21.3; m.evSales: 4.8 -> 5.4; m.op: 17.9 -> 18.8; m.net: 15.2 -> 15.0; m.revCagrHist: 6.2 -> 10.5; d.revPS: 120.36 -> 123.89
- `DHR` Danaher: price: 183.63 -> 191.5; mcap: 129.97 -> 134.62; m.peTTM: 36.5 -> 34.1; m.peFwd: 20.2 -> 20.7; m.evEbitda: 18.1 -> 19.7; m.evSales: 5.8 -> 6.3; m.gross: 59 -> 58.8; m.op: 22.9 -> 19.8; m.net: 14.9 -> 15.9; m.roe: 7.1 -> 7.6; m.revCagrHist: 3.7 -> 5.5; d.revPS: 34.87 -> 35.47
- `ISRG` Intuitive Surgical: price: 412.02 -> 337.5; mcap: 145.92 -> 120.92; m.peTTM: 50 -> 38.7; m.peFwd: 34.9 -> 28.1; m.evEbitda: 36.4 -> 27.3; m.evSales: 13.4 -> 10.3; m.gross: 66.3 -> 66.7; m.op: 30.9 -> 33.6; m.net: 28.2 -> 28.4; m.roe: 17.2 -> 17.4; m.revCagrHist: 23 -> 18.5; d.revPS: 29.7 -> 31.07
- `DXCM` Dexcom: price: 74.77 -> 71.54; mcap: 28.85 -> 27.61; m.peTTM: 32.1 -> 30.7; m.peFwd: 24.3 -> 23.2; m.evEbitda: 21.5 -> 20.6; m.evSales: 5.8 -> 5.5
- meta: data-date stamped to 2026-07-27 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 158.29; mcap: 40.57 -> 41.7; m.peTTM: 56.4 -> 58.2; m.peFwd: 31 -> 33.2; m.evEbitda: 20 -> 39.1; m.evSales: 9 -> 6.2; m.gross: 85 -> 85.5
- `HOOD` Robinhood: price: 86.36 -> 94.91; mcap: 77.77 -> 85.47; m.peTTM: 41.9 -> 46.1; m.peFwd: 30.8 -> 30.9; m.evSales: 18 -> 17.4; m.gross: 88 -> 92.2
- `MARA` MARA Holdings: price: 12.62 -> 12.12; mcap: 4.81 -> 4.62; m.evSales: 5.6 -> 7.7; m.gross: 40 -> 45.3
- `RIOT` Riot Platforms: price: 24.08 -> 22.53; mcap: 9.11 -> 8.52; m.evSales: 14 -> 14.1; m.gross: 35 -> 32.3
- `CLSK` CleanSpark: price: 14.9 -> 14.52; mcap: 3.82 -> 3.73; m.evSales: 7 -> 7.1; m.gross: 42 -> 50.7
- `IREN` IREN Limited: price: 51.52 -> 37.07; mcap: 18.41 -> 13.25; m.peTTM: 69.6 -> 48.1; m.evEbitda: 20 -> 101.9; m.evSales: 30 -> 19.8; m.gross: 45 -> 68.4
- `MSTR` Strategy: price: 115.35 -> 91.67; mcap: 40.76 -> 33.49; m.peFwd: 25.9 -> 20.5; m.evSales: 113.1 -> 96.2
- `GLXY` Galaxy Digital: price: 30.15 -> 22.68; mcap: 11.76 -> 8.84; m.peFwd: 322.2 -> 310.6; m.evEbitda: 12 -> 0.1; m.evSales: 5 -> 0.1
- `CRCL` Circle Internet: price: 78.93 -> 62.36; mcap: 21.1 -> 16.67; m.peFwd: 35.4 -> 31.9; m.evSales: 8 -> 4.9; m.gross: 40 -> 8.1
- `BLK` BlackRock: price: 1010.68 -> 1055.67; mcap: 164.59 -> 171.65; m.peTTM: 25.4 -> 25.3; m.peFwd: 16.6 -> 16.4; m.evEbitda: 16 -> 15.5; m.evSales: 7 -> 6.3; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 176.03
- meta: data-date stamped to 2026-07-27 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 323.79; mcap: 214.52 -> 263.89; m.peTTM: 226.9 -> 276.7; m.peFwd: 63.9 -> 78.5; m.evEbitda: 143.9 -> 177.2; m.evSales: 20.1 -> 24.8
- `CRWD` CrowdStrike: price: 647.74 -> 183.28; mcap: 164.89 -> 186.63; m.peFwd: 103.6 -> 117.3; m.evSales: 31.6 -> 35.9; d.revPS: 20.22 -> 5.06
- `FTNT` Fortinet: price: 138.88 -> 152.37; mcap: 101.75 -> 111.63; m.peTTM: 53.8 -> 59.1; m.peFwd: 40.5 -> 44.4; m.evEbitda: 41.9 -> 46.1; m.evSales: 13.9 -> 15.3
- `ZS` Zscaler: price: 124.73 -> 142.32; mcap: 20.17 -> 23.01; m.peFwd: 27.1 -> 31.0; m.evSales: 5.8 -> 6.7
- `NET` Cloudflare: price: 219.67 -> 262.15; mcap: 77.97 -> 93.05; m.peFwd: 140.8 -> 165.7; m.evSales: 33.1 -> 39.5
- `OKTA` Okta: price: 114.92 -> 138.5; mcap: 19.97 -> 24.07; m.peTTM: 83.3 -> 99.6; m.peFwd: 26.9 -> 32.3; m.evEbitda: 66.7 -> 82.0; m.evSales: 5.9 -> 7.3
- `S` SentinelOne: price: 14.79 -> 18.14; mcap: 5.07 -> 6.22; m.peFwd: 29.9 -> 36.8; m.evSales: 4.2 -> 5.3
- `RPD` Rapid7: price: 7.21 -> 9.49; mcap: 0.48 -> 0.63; m.peTTM: 20.6 -> 27.1; m.peFwd: 4.6 -> 6.1; m.evEbitda: 13.6 -> 16.3; m.evSales: 0.9 -> 1.1
- `QLYS` Qualys: price: 110.2 -> 137.48; mcap: 3.88 -> 4.84; m.peTTM: 19.7 -> 24.7; m.peFwd: 13.3 -> 16.6; m.evEbitda: 14.1 -> 18.0; m.evSales: 5.1 -> 6.5
- `TENB` Tenable: price: 26.8 -> 32.25; mcap: 2.96 -> 3.56; m.peFwd: 12.3 -> 14.9; m.evEbitda: 74.4 -> 89.3; m.evSales: 3 -> 3.5
- `GEN` Gen Digital: price: 24.62 -> 25.84; mcap: 14.83 -> 15.57; m.peTTM: 15.7 -> 16.5; m.peFwd: 7.5 -> 7.9; m.evEbitda: 9.5 -> 9.8; m.evSales: 4.5 -> 4.7
- meta: data-date stamped to 2026-07-27 in hero

## finance.js

- changed: 27 · skipped: 2 · review: 0

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 145.79; mcap: 79.36 -> 82.45; m.peTTM: 20.6 -> 21.2; m.peFwd: 15.9 -> 16.7; m.evEbitda: 18 -> 15.5; m.evSales: 9.5 -> 9.8
- `CME` CME Group: price: 263.8 -> 255.31; mcap: 95.32 -> 92.25; m.peTTM: 22.5 -> 21.6; m.peFwd: 20.4 -> 19.7; m.evEbitda: 20 -> 19.6; m.evSales: 16 -> 13.8; m.op: 69.8 -> 65.0; m.net: 63.3 -> 63.4; m.roe: 15.9 -> 15.8; m.revCagrHist: 14.4 -> 0.8; d.revPS: 18.75 -> 18.78
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 87.74; mcap: 58.77 -> 57.01; m.peTTM: 38 -> 37.0; m.peFwd: 16.8 -> 16.2; m.evEbitda: 17 -> 16.0; m.evSales: 7.5 -> 5.8; m.gross: 68 -> 88.1
- `SPGI` S&P Global: price: 426.38 -> 426.4; m.peFwd: 19.2 -> 21.0; m.evEbitda: 24 -> 18.2; m.evSales: 12 -> 9.1; m.gross: 73 -> 70.5
- `MSCI` MSCI Inc: price: 608.52 -> 550.79; mcap: 44.26 -> 40.04; m.peTTM: 34.8 -> 30.1; m.peFwd: 27 -> 24.5; m.evEbitda: 28 -> 23.6; m.evSales: 18 -> 13.9; m.gross: 82 -> 83.0; m.op: 53.7 -> 56.3; m.revCagrHist: 14.1 -> 12.2; d.revPS: 42.95 -> 44.9
- `MCO` Moody's: price: 450.69 -> 471.5; mcap: 78.72 -> 81.65; m.peTTM: 32.4 -> 29.9; m.peFwd: 24.2 -> 25.0; m.evEbitda: 25 -> 21.7; m.evSales: 13 -> 10.8; m.gross: 72 -> 75.0; m.op: 45.7 -> 49.5; m.net: 31.7 -> 34.3; m.roe: 71.4 -> 76.9; m.revCagrHist: 8.1 -> 15.1; d.revPS: 44.16 -> 46.13
- `V` Visa: price: 322.96 -> 355.74; mcap: 614.19 -> 676.53; m.peTTM: 28.2 -> 31.1; m.peFwd: 21.7 -> 23.9; m.evEbitda: 24 -> 22.6; m.evSales: 20 -> 15.8; m.gross: 80 -> 97.8
- `MA` Mastercard: price: 489.08 -> 539.66; mcap: 432.14 -> 476.83; m.peTTM: 28.3 -> 31.2; m.peFwd: 21.5 -> 23.7; m.evEbitda: 28 -> 22.8; m.evSales: 24 -> 14.4
- `PYPL` PayPal: price: 40.7 -> 56.15; mcap: 35.9 -> 49.53; m.peTTM: 7.6 -> 10.5; m.peFwd: 7.1 -> 9.8; m.evEbitda: 9 -> 7.9; m.evSales: 2 -> 1.5; m.gross: 46 -> 40.9
- `JPM` JPMorgan Chase: price: 309.14 -> 353.21; mcap: 828.34 -> 938.9; m.peTTM: 14.8 -> 15.1; m.peFwd: 13.1 -> 14.3; m.evSales: 3.5 -> 2.6; m.op: 43.7 -> 50.4; m.net: 33.9 -> 34.9; m.roe: 16.5 -> 17.8; m.revCagrHist: 12.7 -> 30.4; d.revPS: 63.1 -> 68.35
- `BAC` Bank of America: price: 54.54 -> 62.05; mcap: 387.05 -> 440.34; m.peTTM: 13.5 -> 14.3; m.peFwd: 10.8 -> 11.8; m.evSales: 3 -> 1.6; m.op: 36 -> 38.3; m.net: 29 -> 29.5; m.roe: 10.6 -> 11.2; m.revCagrHist: 8.1 -> 21.4; d.revPS: 14.78 -> 15.59
- `WFC` Wells Fargo: price: 81.97 -> 86.31; mcap: 250.84 -> 264.12; m.peTTM: 12.7 -> 12.5; m.peFwd: 10.4 -> 11.0; m.evSales: 3.2 -> 1.0; m.op: 29.4 -> 37.1; m.net: 26.7 -> 27.2; m.roe: 12 -> 12.6; m.revCagrHist: 5.7 -> 9.5; d.revPS: 25.74 -> 26.74
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 15.53; mcap: 296.75 -> 355.35; m.peTTM: 14.2 -> 17.1; m.peFwd: 9.1 -> 11.0
- `GS` Goldman Sachs: price: 1001.29 -> 1061.23; mcap: 295.39 -> 313.07; m.peTTM: 18.3 -> 16.4; m.peFwd: 15.3 -> 14.5; m.evSales: 3 -> 2.2; m.gross: 55 -> 82.1; m.op: 38.6 -> 42.3; m.net: 29.4 -> 31.0; m.roe: 14.5 -> 17.0; m.revCagrHist: 14.5 -> 42.5; d.revPS: 199.49 -> 221.5
- `MS` Morgan Stanley: price: 206.66 -> 214.48; mcap: 325.96 -> 337.16; m.peTTM: 18.7 -> 17.3; m.peFwd: 16.3 -> 15.8; m.gross: 58 -> 87.6; m.op: 40.6 -> 41.6; m.net: 24.8 -> 25.9; m.revCagrHist: 16.3 -> 28.0; d.revPS: 46.66 -> 49.81
- `SCHW` Charles Schwab: price: 89.27 -> 101.97; mcap: 155.25 -> 177.34; m.peTTM: 17.7 -> 18.6; m.peFwd: 12.4 -> 13.0; m.evSales: 5 -> 5.4; m.gross: 70 -> 97.5; m.op: 49.4 -> 51.9; m.net: 38 -> 38.8; m.roe: 19.1 -> 20.3; m.revCagrHist: 15.8 -> 20.9; d.revPS: 13.89 -> 14.75
- `IBKR` Interactive Brokers: price: 85.42 -> 91.74; mcap: 144.89 -> 155.61; m.peTTM: 36.7 -> 36.4; m.peFwd: 29.7 -> 28.9; m.gross: 90 -> 93.0; m.op: 76.8 -> 76.5; m.net: 16.1 -> 16.5; m.roe: 23.6 -> 24.0; m.revCagrHist: 16.8 -> 22.3; d.revPS: 14.54 -> 15.33
- `HOOD` Robinhood Markets: price: 86.36 -> 94.91; mcap: 77.77 -> 85.47; m.peTTM: 41.9 -> 46.1; m.peFwd: 30.8 -> 30.9; m.evSales: 18 -> 17.4; m.gross: 88 -> 92.2
- `FUTU` Futu Holdings: price: 92.93 -> 99.36; mcap: 13.03 -> 13.93; m.peTTM: 10.3 -> 11.0; m.peFwd: 7.6 -> 8.1; m.gross: 85 -> 94.4
- `BLK` BlackRock: price: 1010.68 -> 1055.67; mcap: 164.59 -> 171.65; m.peTTM: 25.4 -> 25.3; m.peFwd: 16.6 -> 16.4; m.evEbitda: 16 -> 15.5; m.evSales: 7 -> 6.3; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 176.03
- `BX` Blackstone: price: 118.48 -> 130.0; mcap: 144.81 -> 161.8; m.peTTM: 30.4 -> 29.1; m.peFwd: 15.7 -> 17.4; m.evSales: 18 -> 8.3; m.op: 38 -> 54.4; m.net: 21.2 -> 22.7; m.roe: 29.5 -> 31.4; m.revCagrHist: 5.7 -> 28.6; d.revPS: 18.38 -> 19.65
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 494.93; mcap: 1043.23 -> 1067.49; m.peTTM: 14.4 -> 14.7; m.peFwd: 22.5 -> 23.0; m.gross: 30 -> 27.8
- `PGR` Progressive: price: 204.2 -> 213.83; mcap: 119.15 -> 124.32; m.peTTM: 10.4 -> 10.7; m.peFwd: 12.6 -> 13.2; m.evEbitda: 12 -> 8.5; m.evSales: 2.2 -> 1.4; m.gross: 30 -> 18.5; m.op: 16.4 -> 18.2; m.net: 12.9 -> 12.8; m.roe: 37.9 -> 34.9; m.revCagrHist: 8.7 -> 7.3; d.revPS: 152.53 -> 155.48
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 427.1; mcap: 167.13 -> 184.84; m.peTTM: 12.3 -> 13.8; m.peFwd: 11.5 -> 13.0; m.evEbitda: 9 -> 7.0; m.evSales: 1.5 -> 1.2; m.gross: 28 -> 24.3
- `AXP` American Express: price: 313.34 -> 326.17; mcap: 213.8 -> 222.55; m.peTTM: 19.6 -> 19.8; m.peFwd: 15.6 -> 16.2; m.evSales: 3.5 -> 3.3; m.gross: 55 -> 62.3; m.op: 21.2 -> 20.3; m.net: 16.3 -> 16.1; m.revCagrHist: 11.6 -> 12.8; d.revPS: 99.58 -> 103.45
- `INTU` Intuit: price: 284.22 -> 296.33; mcap: 77.74 -> 81.06; m.peTTM: 17.3 -> 18.1; m.peFwd: 10.4 -> 10.8; m.evEbitda: 12.1 -> 12.7; m.evSales: 3.7 -> 3.9
- meta: data-date stamped to 2026-07-27 in hero/footer

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `BK` BNY — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 87.86; mcap: 41.39 -> 38.27; m.peTTM: 96 -> 83.7; m.peFwd: 50 -> 46.1; m.evEbitda: 46.2 -> 42.7; m.evSales: 11.7 -> 10.8
- `UEC` Uranium Energy: price: 9.42 -> 9.51; mcap: 4.66 -> 4.71; m.evSales: 206.7 -> 208.9
- `NXE` NexGen Energy: price: 9.27 -> 9.14; mcap: 6.14 -> 6.05
- `SMR` NuScale Power: price: 9.29 -> 8.09; mcap: 3.22 -> 2.8; m.evSales: 121.8 -> 99.6
- `OKLO` Oklo: price: 54.02 -> 40.25; mcap: 9.4 -> 7.0
- `BWXT` BWX Technologies: price: 183 -> 174.52; mcap: 16.77 -> 15.99; m.peTTM: 48.9 -> 46.5; m.peFwd: 35.2 -> 33.6; m.evEbitda: 39.3 -> 37.7; m.evSales: 5.4 -> 5.2
- `LEU` Centrus Energy: price: 146.61 -> 163.89; mcap: 2.88 -> 3.22; m.peTTM: 53.1 -> 59.6; m.peFwd: 36.9 -> 39.7; m.evEbitda: 64.2 -> 74.1; m.evSales: 4.9 -> 5.6
- `CEG` Constellation Energy: price: 242.3 -> 274.35; mcap: 86.53 -> 97.97; m.peTTM: 21.9 -> 23.8; m.peFwd: 17.8 -> 20.2; m.evEbitda: 13.8 -> 15.2; m.evSales: 3.7 -> 4.1
- `VST` Vistra: price: 138.54 -> 163.38; mcap: 46.71 -> 55.09; m.peTTM: 23.2 -> 27.3; m.peFwd: 12.6 -> 15.1; m.evEbitda: 10.1 -> 11.4; m.evSales: 3.5 -> 4.0
- `GEV` GE Vernova: price: 867.09 -> 1014.75; mcap: 233 -> 270.26; m.peTTM: 25.3 -> 29.1; m.peFwd: 35.4 -> 41.1; m.evSales: 5.8 -> 6.3; m.gross: 20.3 -> 20.6; m.op: 5.5 -> 7.5; m.net: 23.8 -> 23.0; m.roe: 75.7 -> 82.6; m.revCagrHist: 16.3 -> 21.9; d.revPS: 145.56 -> 153.78
- `ETN` Eaton: price: 375.46 -> 404.07; mcap: 145.79 -> 156.9; m.peTTM: 36.8 -> 39.5; m.peFwd: 23.9 -> 25.6; m.evEbitda: 26.3 -> 28.1; m.evSales: 5.9 -> 6.2
- `PWR` Quanta Services: price: 650.92 -> 625.84; mcap: 97.68 -> 93.91; m.peTTM: 89.5 -> 86.2; m.peFwd: 39.5 -> 37.9; m.evEbitda: 39 -> 37.6; m.evSales: 3.4 -> 3.3
- `NEE` NextEra Energy: price: 85.12 -> 89.78; mcap: 177.53 -> 187.25; m.peTTM: 21.6 -> 20.2; m.peFwd: 19.4 -> 20.4; m.evEbitda: 20.6 -> 20.9; m.evSales: 10.5 -> 10.6; m.gross: 61.4 -> 61.0; m.op: 30.2 -> 31.5; m.net: 29.4 -> 32.4; m.roe: 10.3 -> 11.7; m.revCagrHist: 7.3 -> 12.4; d.revPS: 13.45 -> 13.81
- `FSLR` First Solar: price: 249.27 -> 202.82; mcap: 26.78 -> 21.79; m.peTTM: 16.1 -> 131.7; m.peFwd: 10.6 -> 8.7; m.evEbitda: 11 -> 8.8; m.evSales: 4.6 -> 3.7
- meta: data-date stamped to 2026-07-27 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 32.84; mcap: 21.14 -> 12.26; m.peTTM: 145.2 -> 84.2; m.evSales: 102.3 -> 54.9
- `RGTI` Rigetti Computing: price: 19.45 -> 14.15; mcap: 6.46 -> 4.7
- `QBTS` D-Wave Quantum: price: 23.25 -> 16.21; mcap: 8.61 -> 6.0
- `QUBT` Quantum Computing Inc: price: 9.53 -> 7.43; mcap: 2.15 -> 1.68; m.evSales: 269.7 -> 160.4
- `IBM` IBM: price: 272.36 -> 214.19; mcap: 255.99 -> 201.8; m.peTTM: 24.1 -> 19.0; m.peFwd: 20.3 -> 16.2; m.evEbitda: 18.9 -> 15.7; m.evSales: 4.6 -> 3.7; m.gross: 58.4 -> 58.1; m.op: 13.8 -> 16.5; m.net: 15.6 -> 15.5; m.roe: 35.8 -> 34.5; m.revCagrHist: 9.5 -> 1.1; d.revPS: 73.71 -> 73.7
- `GOOGL` Alphabet: price: 356.38 -> 319.74; mcap: 4346.03 -> 3910.4; m.peTTM: 27.2 -> 16.1; m.peFwd: 24.6 -> 21.7; m.evEbitda: 26.6 -> 22.0; m.evSales: 10.1 -> 8.5; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `MSFT` Microsoft: price: 397.36 -> 381.7; mcap: 2951.76 -> 2835.43; m.peTTM: 23.7 -> 22.7; m.peFwd: 20.5 -> 19.7; m.evEbitda: 16.3 -> 15.6; m.evSales: 9.4 -> 9.1
- `HON` Honeywell: price: 205.88 -> 243.15; mcap: 130.46 -> 77.06; m.peTTM: 32.9 -> 9.3; m.peFwd: 18 -> 24.5; m.evEbitda: 18.4 -> 12.1; m.evSales: 4.2 -> 2.7; m.gross: 36.9 -> 36.5; m.op: 21 -> 20.2; m.net: 10.9 -> 21.6; m.roe: 24.3 -> 46.6; m.revCagrHist: 2.4 -> 4.3; d.revPS: 59.25 -> 119.9
- `FORM` FormFactor: price: 115.81 -> 104.04; mcap: 9.03 -> 8.11; m.peTTM: 133.1 -> 119.6; m.peFwd: 41.5 -> 37.3; m.evEbitda: 63.7 -> 57.1; m.evSales: 10.4 -> 9.3
- `NVDA` NVIDIA: price: 200.42 -> 206.84; mcap: 4854.37 -> 5009.87; m.peTTM: 30.7 -> 31.6; m.peFwd: 15.7 -> 16.1; m.evEbitda: 29.1 -> 30.0; m.evSales: 19 -> 19.6
- meta: data-date stamped to 2026-07-27 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 313.03; mcap: 1433.15 -> 1236.33; m.peTTM: 370.5 -> 284.6; m.peFwd: 152.6 -> 141.0; m.evEbitda: 126.6 -> 112.5; m.evSales: 14.4 -> 11.7; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SERV` Serve Robotics: price: 6.98 -> 4.81; mcap: 0.59 -> 0.41; m.evSales: 68.7 -> 36.4
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 80.0; mcap: 180.91 -> 178.19; m.peTTM: 37.5 -> 36.0; m.peFwd: 29.2 -> 27.5; m.evEbitda: 21.2 -> 20.8; m.evSales: 4.3 -> 4.2; m.gross: 40.4 -> 40.2; m.op: 20.6 -> 16.9; m.net: 14.3 -> 14.1; m.roe: 33.6 -> 32.6; m.revCagrHist: 18.3 -> 14.2
- `6954` Fanuc (via `6954.T`): price: 6691 -> 6785.0; mcap: 38.9 -> 38.72; m.peTTM: 37.5 -> 38.1; m.peFwd: 38.7 -> 39.2; m.evEbitda: 24.1 -> 23.5; m.evSales: 6.5 -> 6.3
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 5257.0; mcap: 9.68 -> 8.34; m.peTTM: 44.1 -> 38.8; m.peFwd: 29.2 -> 25.7; m.evEbitda: 24.2 -> 20.8; m.evSales: 3 -> 2.5; m.gross: 35.3 -> 35.0; m.op: 8.8 -> 6.1; m.net: 6.5 -> 6.1; m.roe: 7.8 -> 7.5; m.revCagrHist: 2 -> 10.6
- `ROK` Rockwell Automation: price: 440.07 -> 462.16; mcap: 48.97 -> 51.43; m.peTTM: 45.7 -> 48.1; m.peFwd: 30.3 -> 31.6; m.evEbitda: 26.7 -> 28.0; m.evSales: 6 -> 6.3
- `EMR` Emerson Electric: price: 137.11 -> 147.94; mcap: 76.8 -> 82.86; m.peTTM: 31.7 -> 34.2; m.peFwd: 19.1 -> 20.6; m.evEbitda: 15.2 -> 16.2; m.evSales: 4.9 -> 5.2
- `SIEGY` Siemens: price: 153.07 -> 153.91; mcap: 235.46 -> 236.75; m.peTTM: 27.5 -> 27.9; m.peFwd: 20.8 -> 23.0; m.evEbitda: 23.9 -> 24.6; m.evSales: 3.6 -> 3.7
- `PH` Parker Hannifin: price: 875.6 -> 987.54; mcap: 110.4 -> 124.52; m.peTTM: 32.3 -> 36.5; m.peFwd: 25.7 -> 28.9; m.evEbitda: 21.8 -> 24.4; m.evSales: 5.7 -> 6.4
- `NOVT` Novanta: price: 154.58 -> 141.54; mcap: 5.51 -> 5.04; m.peTTM: 111.2 -> 101.8; m.peFwd: 37.3 -> 34.2; m.evEbitda: 30.2 -> 27.6; m.evSales: 5.4 -> 4.9
- `CGNX` Cognex: price: 58.69 -> 62.05; mcap: 9.77 -> 10.33; m.peTTM: 69 -> 73.0; m.peFwd: 33.3 -> 34.9; m.evEbitda: 42.1 -> 44.6; m.evSales: 9.1 -> 9.7
- `SYM` Symbotic: price: 41.24 -> 40.15; mcap: 24.89 -> 24.24; m.peFwd: 57.4 -> 55.7; m.evEbitda: 159.3 -> 153.1
- `ZBRA` Zebra Technologies: price: 216.79 -> 259.92; mcap: 10.33 -> 12.38; m.peTTM: 26.2 -> 31.4; m.peFwd: 10.5 -> 12.5; m.evEbitda: 12.7 -> 14.7; m.evSales: 2.3 -> 2.7
- meta: data-date stamped to 2026-07-27 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 0

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 28380.0; mcap: 113.02 -> 125.67; m.peTTM: 48.8 -> 55.1; m.peFwd: 105.2 -> 119.4; m.evEbitda: 34.3 -> 40.1; m.evSales: 15.9 -> 18.3; m.op: 46.7 -> 45.9
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 6146.0; mcap: 78 -> 69.91; m.peTTM: 26.7 -> 24.3; m.peFwd: 20.4 -> 18.6; m.gross: 34.2 -> 33.9; m.op: 21.4 -> 26.2; m.roe: 10.7 -> 11.2; m.revCagrHist: 1.3 -> 5.4
- `6146` Disco (via `6146.T`): price: 68720 -> 62650.0; mcap: 46.43 -> 41.56; m.peTTM: 55.1 -> 50.2; m.peFwd: 50.5 -> 46.0; m.evEbitda: 36.8 -> 29.5; m.evSales: 16.7 -> 13.7; m.gross: 70.2 -> 70.8; m.op: 44 -> 42.7; m.net: 31 -> 31.6; m.roe: 30 -> 27.4; m.revCagrHist: 22 -> 27.1
- `6963` Rohm (via `6963.T`): price: 4679 -> 4628.0; mcap: 11.25 -> 10.93; m.peFwd: 53.8 -> 53.3; m.evEbitda: 26.4 -> 26.2; m.roe: 1.5 -> -19.2; m.revCagrHist: -3 -> 7.5
- `4004` Resonac (via `4004.T`): price: 15820 -> 13970.0; mcap: 17.84 -> 15.46; m.peTTM: 98.2 -> 86.8; m.peFwd: 63.4 -> 56.1; m.evEbitda: 24.1 -> 23.1; m.evSales: 2.6 -> 2.5
- `6861` Keyence (via `6861.T`): price: 71270 -> 74170.0; mcap: 107.68 -> 110.02; m.peTTM: 38.8 -> 40.3; m.peFwd: 38.2 -> 39.7; m.evEbitda: 26.4 -> 26.0; m.evSales: 13.8 -> 13.6; m.roe: 14 -> 13.5
- `6723` Renesas (via `6723.T`): price: 4222 -> 3866.0; mcap: 47.72 -> 42.9; m.peFwd: 16.4 -> 14.3; m.evEbitda: 23.5 -> 21.7; m.evSales: 6.3 -> 5.8
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 62800.0; mcap: 177.9 -> 174.63; m.peTTM: 50.3 -> 50.1; m.peFwd: 49 -> 49.1; m.evEbitda: 39.1 -> 39.6; m.evSales: 11.3 -> 11.5
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 15895.0; mcap: 15.04 -> 18.38; m.peTTM: 26.2 -> 32.7; m.peFwd: 14.6 -> 18.2; m.evEbitda: 16.3 -> 20.2; m.evSales: 3.7 -> 4.6
- `ASML` ASML Holding: price: 1734.19 -> 1757.09; mcap: 668.39 -> 674.9; m.peTTM: 59.5 -> 60.6; m.peFwd: 36.2 -> 30.3; m.gross: 52.6 -> 52.7; m.op: 36 -> 37.1; m.net: 29.7 -> 30.1; m.roe: 52.2 -> 53.9; m.revCagrHist: 13.2 -> 21.3
- `LRCX` Lam Research: price: 321.8 -> 305.21; mcap: 402.43 -> 381.69; m.peTTM: 60.7 -> 57.8; m.peFwd: 40.4 -> 37.3; m.evEbitda: 51.2 -> 48.5; m.evSales: 18.5 -> 17.6
- `KLAC` KLA Corp: price: 2135.64 -> 210.52; mcap: 278.97 -> 275.0; m.peTTM: 60.6 -> 59.5; m.peFwd: 42.4 -> 41.0; m.evEbitda: 47.9 -> 47.2; m.evSales: 21.4 -> 21.1
- `TSM` TSMC: price: 408.75 -> 403.41; mcap: 2119.97 -> 2092.28; m.peTTM: 35.1 -> 35.6; m.peFwd: 20.9 -> 18.9; m.evEbitda: 5.2 -> 4.5; m.evSales: 3.6 -> 3.2; m.gross: 61.9 -> 64.2; m.op: 58.1 -> 60.3; m.net: 46.5 -> 49.9; m.roe: 36.2 -> 40.0; m.revCagrHist: 35.1 -> 36.0
- `AMAT` Applied Materials: price: 497.01 -> 536.25; mcap: 394.61 -> 425.76; m.peTTM: 46.7 -> 50.5; m.peFwd: 30.6 -> 31.7; m.evEbitda: 42.4 -> 45.8; m.evSales: 13.6 -> 14.6
- `NVDA` NVIDIA: price: 200.42 -> 206.84; mcap: 4854.37 -> 5009.87; m.peTTM: 30.7 -> 31.6; m.peFwd: 15.7 -> 16.1; m.evEbitda: 29.1 -> 30.0; m.evSales: 19 -> 19.6
- `AVGO` Broadcom: price: 372.1 -> 381.92; mcap: 1770.3 -> 1817.02; m.peTTM: 61.7 -> 63.7; m.peFwd: 19.2 -> 19.6; m.evEbitda: 43.3 -> 44.3; m.evSales: 24.1 -> 24.7
- `AMD` AMD: price: 452.4 -> 521.95; mcap: 737.68 -> 851.09; m.peTTM: 151.3 -> 175.2; m.peFwd: 34.6 -> 38.2; m.evEbitda: 98.1 -> 113.4; m.evSales: 19.5 -> 22.5
- `INTC` Intel: price: 107.04 -> 92.32; mcap: 537.98 -> 465.66; m.peFwd: 69.6 -> 46.5; m.evEbitda: 39.8 -> 29.8; m.evSales: 10.5 -> 8.8; m.gross: 37.2 -> 38.9; m.op: 6.9 -> 12.2; m.net: -5.9 -> -19.8; m.roe: -2.9 -> -10.7; m.revCagrHist: 7.2 -> 25.4; d.revPS: 11.4 -> 11.62
- `ARM` Arm Holdings: price: 307.43 -> 260.01; mcap: 328.36 -> 277.71; m.peTTM: 357.5 -> 302.3; m.peFwd: 100.2 -> 84.5; m.evEbitda: 120 -> 257.9; m.evSales: 66.1 -> 55.8
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 254000.0; mcap: 1118.21 -> 996.27; m.peFwd: 5.2 -> 3.9; m.evEbitda: 13.4 -> 10.9; m.evSales: 4.9 -> 4.0
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 1816000.0; mcap: 960.23 -> 877.19; m.peFwd: 5.1 -> 4.0; m.evEbitda: 15.5 -> 13.2; m.evSales: 10.7 -> 9.2
- `MU` Micron: price: 891.88 -> 920.95; mcap: 1005.8 -> 1040.11; m.peTTM: 42.2 -> 20.8; m.peFwd: 8 -> 6.0; m.evEbitda: 27.2 -> 15.0; m.evSales: 17.2 -> 11.3; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 373.47; mcap: 88.18 -> 71.51; m.peTTM: 105.4 -> 85.5; m.peFwd: 26.7 -> 21.6; m.evEbitda: 56.9 -> 47.1; m.evSales: 11.1 -> 9.2
- `CDNS` Cadence: price: 385.13 -> 326.24; mcap: 106.23 -> 89.98; m.peTTM: 90.2 -> 76.4; m.peFwd: 41 -> 34.7; m.evEbitda: 53.5 -> 45.4; m.evSales: 19.5 -> 16.6
- `QCOM` Qualcomm: price: 191.2 -> 166.97; mcap: 201.52 -> 175.99; m.peTTM: 22.1 -> 18.0; m.peFwd: 17.9 -> 15.2; m.evEbitda: 15.9 -> 14.0; m.evSales: 4.7 -> 4.1
- `GFS` GlobalFoundries: price: 74.82 -> 53.53; mcap: 41.03 -> 29.37; m.peTTM: 50.6 -> 38.5; m.peFwd: 29.7 -> 21.3; m.evEbitda: 19.6 -> 13.8; m.evSales: 5.8 -> 4.1
- `LIN` Linde: price: 509.16 -> 512.28; mcap: 235.41 -> 236.85; m.peTTM: 33.8 -> 34.0; m.peFwd: 25.8 -> 26.1; m.evEbitda: 19.1 -> 19.2
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 176.52; mcap: 123.3 -> 128.07; m.peTTM: 30.3 -> 31.9; m.peFwd: 23.7 -> 24.5; m.evEbitda: 15.6 -> 16.4; m.evSales: 4.3 -> 4.6
- `ENTG` Entegris: price: 128.88 -> 129.15; mcap: 19.63 -> 19.67; m.peTTM: 74.5 -> 74.7; m.peFwd: 27.9 -> 27.7
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 9950.0; mcap: 7.01 -> 7.3; m.peTTM: 33.8 -> 35.7; m.peFwd: 48 -> 51.0; m.evEbitda: 19.2 -> 20.7; m.evSales: 3.1 -> 3.4
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 4363.0; mcap: 5.39 -> 5.2; m.peFwd: 16.1 -> 15.8; m.evEbitda: 12.6 -> 12.2; m.op: 3.7 -> 4.8
- `3436` Sumco (via `3436.T`): price: 3275 -> 3762.0; mcap: 7.14 -> 8.05; m.peFwd: 66.5 -> 76.4; m.evEbitda: 13.4 -> 14.8; m.evSales: 3.6 -> 3.9
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 115.25; mcap: 5.17 -> 4.7; m.peFwd: 63 -> 54.2; m.evEbitda: 40.4 -> 44.5; m.evSales: 7.6 -> 7.0; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 16700.0; mcap: 30.89 -> 28.52; m.peTTM: 82.3 -> 77.5; m.peFwd: 57.5 -> 54.1
- `ASX` ASE Technology: price: 34.3 -> 36.84; mcap: 75.25 -> 80.82; m.peTTM: 53.6 -> 58.5; m.peFwd: 21.6 -> 18.9
- `AMKR` Amkor Technology: price: 69.61 -> 64.96; mcap: 17.25 -> 16.1; m.peTTM: 40 -> 37.3; m.peFwd: 28.4 -> 24.8; m.evEbitda: 14.3 -> 13.3; m.evSales: 2.4 -> 2.2
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 82.5; mcap: 18.86 -> 21.82; m.peTTM: 77.6 -> 89.7; m.peFwd: 50.1 -> 56.1; m.evEbitda: 22.6 -> 25.2; m.evSales: 3.6 -> 4.0
- `TXN` Texas Instruments: price: 282.01 -> 279.58; mcap: 256.66 -> 255.28; m.peTTM: 48.3 -> 42.6; m.peFwd: 30 -> 26.7; m.evEbitda: 30.7 -> 27.6; m.evSales: 14.4 -> 13.5; m.gross: 57.3 -> 58.3; m.op: 37.8 -> 42.6; m.net: 29.1 -> 31.1; m.roe: 32.3 -> 35.2; m.revCagrHist: 18.6 -> 22.8; d.revPS: 20.29 -> 21.38
- `ADI` Analog Devices: price: 392.67 -> 371.86; mcap: 191.26 -> 181.13; m.peTTM: 58.5 -> 55.3; m.peFwd: 26.6 -> 24.7; m.evEbitda: 32 -> 30.3; m.evSales: 15.4 -> 14.6
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 64.41; mcap: 112.72 -> 95.51; m.peTTM: 91.6 -> 78.5; m.peFwd: 29.1 -> 23.6; m.evEbitda: 25.8 -> 22.4; m.evSales: 6.9 -> 5.9
- `NXPI` NXP Semiconductors: price: 285.56 -> 269.24; mcap: 72.1 -> 67.98; m.peTTM: 28.4 -> 256.4; m.peFwd: 16.2 -> 15.0; m.evEbitda: 19.3 -> 18.3; m.evSales: 6.4 -> 6.1
- `STM` STMicroelectronics: price: 70.74 -> 51.54; mcap: 62.87 -> 45.98; m.peTTM: 442.1 -> 101.1; m.peFwd: 28.8 -> 20.1; m.evEbitda: 24.7 -> 16.3; m.evSales: 5 -> 3.4; m.gross: 34 -> 34.3; m.op: 3.7 -> 6.9; m.net: 1.2 -> 3.6; m.roe: 0.9 -> 2.7; m.revCagrHist: 23 -> 26.1; d.revPS: 13.88 -> 14.68
- `ON` ON Semiconductor: price: 110.17 -> 86.81; mcap: 42.83 -> 33.79; m.peTTM: 81 -> 63.8; m.peFwd: 25.8 -> 20.0; m.evEbitda: 21.5 -> 17.0; m.evSales: 7.3 -> 5.8
- `MCHP` Microchip: price: 87.91 -> 78.86; mcap: 47.65 -> 42.82; m.peTTM: 399.6 -> 358.5; m.peFwd: 21.5 -> 18.8; m.evEbitda: 43.5 -> 39.5; m.evSales: 11.3 -> 10.2
- `MRVL` Marvell: price: 252.59 -> 194.23; mcap: 220.97 -> 174.33; m.peTTM: 87.1 -> 66.7; m.peFwd: 40.9 -> 31.1; m.evEbitda: 82 -> 63.2; m.evSales: 25.5 -> 19.7
- `AVT` Avnet: price: 85.39 -> 89.42; mcap: 7 -> 7.33; m.peTTM: 33 -> 34.5; m.peFwd: 10.8 -> 11.2; m.evEbitda: 13 -> 13.5
- `ARW` Arrow Electronics: price: 215.49 -> 212.27; mcap: 11.02 -> 10.85; m.peTTM: 15.4 -> 15.2; m.peFwd: 10.1 -> 9.9; m.evEbitda: 10.4 -> 10.2
- `AAPL` Apple: price: 291.58 -> 333.02; mcap: 4282.54 -> 4891.18; m.peTTM: 35.3 -> 40.3; m.peFwd: 30.4 -> 34.5; m.evEbitda: 26.9 -> 30.7; m.evSales: 9.5 -> 10.9
- `MSFT` Microsoft: price: 397.36 -> 381.7; mcap: 2951.76 -> 2835.43; m.peTTM: 23.7 -> 22.7; m.peFwd: 20.5 -> 19.7; m.evEbitda: 16.3 -> 15.6; m.evSales: 9.4 -> 9.1
- `GOOGL` Alphabet: price: 356.38 -> 319.74; mcap: 4346.03 -> 3910.4; m.peTTM: 27.2 -> 16.1; m.peFwd: 24.6 -> 21.7; m.evEbitda: 26.6 -> 22.0; m.evSales: 10.1 -> 8.5; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `AMZN` Amazon: price: 238 -> 232.11; mcap: 2560.19 -> 2496.83; m.peTTM: 31.6 -> 27.8; m.peFwd: 24.1 -> 23.4; m.evEbitda: 17 -> 16.6; m.evSales: 3.6 -> 3.5
- `META` Meta Platforms: price: 570.98 -> 595.19; mcap: 1449.39 -> 1510.84; m.peTTM: 20.7 -> 21.6; m.peFwd: 15.8 -> 16.1; m.evEbitda: 13.3 -> 13.9; m.evSales: 6.8 -> 7.1
- `TSLA` Tesla: price: 381.59 -> 313.03; mcap: 1433.15 -> 1236.33; m.peTTM: 370.5 -> 284.6; m.peFwd: 152.6 -> 141.0; m.evEbitda: 126.6 -> 112.5; m.evSales: 14.4 -> 11.7; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SONY` Sony Group: price: 20.76 -> 20.98; mcap: 122.26 -> 123.2; m.peTTM: 19.4 -> 20.0; m.peFwd: 17.4 -> 17.6; m.gross: 30.8 -> 31.2; m.op: 7.6 -> 10.7; m.roe: 12.4 -> 12.3; m.revCagrHist: 15.4 -> 8.3
- `CSCO` Cisco Systems: price: 118.8 -> 114.17; mcap: 468.24 -> 449.99; m.peTTM: 39.5 -> 38.1; m.peFwd: 24.9 -> 23.8; m.evEbitda: 28.5 -> 27.4; m.evSales: 8 -> 7.7
- `DELL` Dell Technologies: price: 369.83 -> 437.5; mcap: 239.69 -> 282.69; m.peTTM: 29.5 -> 34.8; m.peFwd: 17.5 -> 20.0; m.evEbitda: 18.7 -> 21.6; m.evSales: 1.9 -> 2.3; m.op: 8.3 -> 8.9
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 92.38; mcap: 71.5 -> 74.19; m.peTTM: 45.7 -> 30.9; m.peFwd: 15.9 -> 16.5; m.evEbitda: 7.6 -> 7.7
- `APD` Air Products: price: 276.51 -> 297.87; mcap: 61.57 -> 66.33; m.peTTM: 29.2 -> 31.4; m.peFwd: 19.4 -> 20.8; m.evEbitda: 21 -> 22.3; m.evSales: 6.5 -> 6.9
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 6087.0; mcap: 14.2 -> 16.11; m.peTTM: 18.4 -> 21.2; m.peFwd: 19 -> 22.0; m.evEbitda: 9.5 -> 10.2; m.evSales: 2.2 -> 2.4; m.op: 14 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3831.0; mcap: 26.02 -> 28.01; m.peTTM: 15.5 -> 16.7; m.peFwd: 15 -> 16.5; m.evEbitda: 9.8 -> 9.9
- `MRK.DE` Merck KGaA: price: 136.45 -> 139.15; mcap: 20.37 -> 20.52; m.peTTM: 23.4 -> 23.9; m.peFwd: 15.7 -> 15.9; m.evEbitda: 11.9 -> 12.1; m.evSales: 3.2 -> 3.3
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 545.0; mcap: 5.55 -> 5.51; m.peTTM: 14.5 -> 14.7; m.peFwd: 13.9 -> 14.0; m.evEbitda: 6.4 -> 9.1; m.op: -4.6 -> -18.8
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 82.95; mcap: 2.96 -> 2.84; m.evEbitda: 12.3 -> 12.9; m.evSales: 2.8 -> 2.9; m.gross: 8.3 -> 2.3; m.op: -9.7 -> -17.1; m.net: -5.1 -> -9.9; m.roe: -3.7 -> -7.1; m.revCagrHist: 3.1 -> -11.4
- `CEVA` CEVA: price: 41.08 -> 36.35; mcap: 1.14 -> 1.01; m.peFwd: 49.9 -> 44.2; m.evSales: 8.4 -> 7.2
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 3680.0; mcap: 200.41 -> 181.81; m.peTTM: 60.2 -> 55.8; m.peFwd: 33.1 -> 28.4; m.evEbitda: 54.8 -> 49.3; m.evSales: 10.9 -> 9.8
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 70.8; mcap: 54.37 -> 54.3; m.peTTM: 101.2 -> 99.7; m.peFwd: 52.4 -> 49.4; m.evEbitda: 94.5 -> 93.3; m.evSales: 45.2 -> 44.6
- `UMC` UMC: price: 18.9 -> 19.48; mcap: 47.43 -> 48.88; m.peTTM: 30.5 -> 31.9; m.peFwd: 23.5 -> 24.1
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 147.8; mcap: 22.67 -> 25.06; m.peTTM: 534.4 -> 591.2; m.peFwd: 111.9 -> 118.3; m.evSales: 95.5 -> 104.1
- `285A` Kioxia (via `285A.T`): price: 74560 -> 54550.0; mcap: 253.66 -> 182.58; m.peTTM: 74 -> 54.1; m.evEbitda: 33.2 -> 27.3; m.evSales: 16.8 -> 13.4; m.op: 59.5 -> 59.4
- `SNDK` SanDisk: price: 1643.23 -> 1436.56; mcap: 243.35 -> 212.74; m.peTTM: 56.2 -> 49.0; m.peFwd: 9 -> 6.7; m.evEbitda: 42.6 -> 37.1; m.evSales: 18.2 -> 15.9
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 5669.0; mcap: 68.69 -> 70.96; m.peTTM: 27.2 -> 28.6; m.peFwd: 32.6 -> 34.3; m.evEbitda: 16.8 -> 19.9; m.op: 8 -> 6.4
- `WOLF` Wolfspeed: price: 43.42 -> 23.09; mcap: 2.26 -> 1.2; m.evSales: 3.9 -> 2.5
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 12985.0; mcap: 12.06 -> 11.59; m.peTTM: 19.7 -> 19.5; m.peFwd: 21.6 -> 21.4; m.evEbitda: 10.2 -> 9.9; m.revCagrHist: 8 -> 13.3
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 768.0; mcap: 67.48 -> 82.38; m.peTTM: 82.1 -> 99.5; m.peFwd: 43.5 -> 52.1; m.evEbitda: 61.5 -> 75.1; m.evSales: 10.9 -> 13.3
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 859.4; mcap: 51.19 -> 47.94; m.peTTM: 45 -> 42.7; m.peFwd: 33.6 -> 30.6; m.evEbitda: 39.8 -> 37.7; m.evSales: 13.6 -> 12.9
- `TER` Teradyne: price: 347.59 -> 349.92; mcap: 54.41 -> 54.78; m.peTTM: 64.5 -> 64.9; m.peFwd: 36.6 -> 34.0; m.evEbitda: 46.7 -> 47.0; m.evSales: 14.3 -> 14.4
- `COHU` Cohu: price: 54.47 -> 50.7; mcap: 2.57 -> 2.39; m.peFwd: 37.4 -> 34.3; m.evSales: 5 -> 4.6
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 2100.0; mcap: 28.4 -> 27.53; m.peTTM: 77.6 -> 66.4; m.peFwd: 36.3 -> 32.9; m.evEbitda: 74.6 -> 70.2; m.evSales: 28 -> 26.3
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 160.2; mcap: 9.31 -> 8.57; m.peTTM: 66.9 -> 61.6; m.peFwd: 33.6 -> 30.7; m.evEbitda: 53.5 -> 49.6; m.evSales: 4.9 -> 4.6
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 227.0; mcap: 26.42 -> 20.51; m.peTTM: 151.2 -> 87.0; m.peFwd: 47.6 -> 35.2; m.evEbitda: 109.2 -> 65.3; m.evSales: 36.1 -> 24.8; m.gross: 63.3 -> 64.1; m.op: 34.6 -> 43.5; m.net: 24 -> 28.4; m.roe: 31.3 -> 44.9; m.revCagrHist: 28.3 -> 68.7
- `KLIC` Kulicke & Soffa: price: 102.03 -> 101.33; mcap: 5.34 -> 5.3; m.peTTM: 99.1 -> 98.4; m.peFwd: 24.1 -> 23.9; m.evEbitda: 41.8 -> 55.0; m.evSales: 6.4 -> 6.3; m.gross: 53.6 -> 49.8
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 17865.0; mcap: 4.46 -> 4.44; m.peTTM: 29.1 -> 29.5; m.peFwd: 28.9 -> 29.3; m.evEbitda: 16.5 -> 17.1; m.evSales: 3.9 -> 4.0
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 79.15; mcap: 1.97 -> 1.73; m.peTTM: 30.3 -> 42.8; m.peFwd: 26.1 -> 22.2; m.evEbitda: 32 -> 28.1; m.evSales: 3.5 -> 3.1
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 75.9; mcap: 13.29 -> 17.02; m.peTTM: 62.4 -> 79.9; m.peFwd: 75.1 -> 96.1; m.evEbitda: 20.6 -> 24.9; m.evSales: 3.8 -> 4.5
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 158.6; mcap: 6.14 -> 7.03; m.peTTM: 41.5 -> 999; m.peFwd: 26.5 -> 23.7; m.evEbitda: 9.9 -> 18.4; m.evSales: 3.9 -> 4.2; m.gross: 9.5 -> 11.4; m.op: 7.3 -> 9.4; m.net: 8.5 -> -1.4; m.roe: 14.8 -> -2.4; m.revCagrHist: 17.9 -> 21.3
- `6239` Powertech (via `6239.TW`): price: 309 -> 279.0; mcap: 7.2 -> 6.38; m.peTTM: 41.5 -> 33.4; m.peFwd: 16.4 -> 15.0; m.evEbitda: 11.7 -> 10.9; m.evSales: 3.2 -> 3.0
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 1075.0; mcap: 16.1 -> 21.5; m.peTTM: 259 -> 225.4; m.peFwd: 28.2 -> 27.4; m.evEbitda: 53.6 -> 70.5; m.evSales: 12.6 -> 16.5
- `3036` WT Micro (via `3036.TW`): price: 225 -> 203.5; mcap: 9.04 -> 8.02; m.peTTM: 21.8 -> 14.4; m.peFwd: 7.6 -> 6.9; m.evEbitda: 13.3 -> 11.8; m.evSales: 0.3 -> 0.2
- `3702` WPG Holdings (via `3702.TW`): price: 106.5 -> 116.0; mcap: 5.64 -> 6.03; m.peTTM: 19.1 -> 20.8; m.peFwd: 6.9 -> 7.5; m.evEbitda: 13.7 -> 14.7
- `3132` Macnica (via `3132.T`): price: 3193 -> 3579.0; mcap: 3.55 -> 3.91; m.peTTM: 20.5 -> 23.0; m.peFwd: 11.7 -> 13.1; m.evEbitda: 13.1 -> 13.7
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 24.26; mcap: 35.84 -> 38.37; m.peTTM: 20.8 -> 22.3; m.peFwd: 13.4 -> 12.9; m.evEbitda: 65.9 -> 65.1; m.evSales: 3.5 -> 3.7; m.op: 4.1 -> 5.6
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 28.88; mcap: 70.06 -> 78.26; m.peTTM: 14.2 -> 16.0; m.peFwd: 14.6 -> 16.6; m.evEbitda: 18.3 -> 18.6
- `HPQ` HP Inc.: price: 24.69 -> 25.75; mcap: 22.58 -> 23.55; m.peTTM: 9.1 -> 9.5; m.peFwd: 8.2 -> 8.6; m.evEbitda: 6.3 -> 6.5
- meta: data-date stamped to 2026-07-27 in hero/footer

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 25 · skipped: 0 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 47.44; mcap: 6.08 -> 6.29; m.peTTM: 208.5 -> 206.3; m.peFwd: 49.8 -> 51.5; m.evEbitda: 50.4 -> 51.9; m.evSales: 13.2 -> 13.5
- `RKLB` Rocket Lab: price: 105.05 -> 63.91; mcap: 65.64 -> 39.93; m.evSales: 87.6 -> 52.6
- `LMT` Lockheed Martin: price: 525.02 -> 582.6; mcap: 121.05 -> 134.46; m.peTTM: 25.4 -> 21.5; m.peFwd: 16.4 -> 17.9; m.evEbitda: 17.5 -> 15.6; m.evSales: 1.9 -> 2.0; m.gross: 9.9 -> 11.8; m.op: 11 -> 12.0; m.net: 6.4 -> 8.2; m.roe: 67.6 -> 89.2; m.revCagrHist: 0.3 -> 10.5; d.revPS: 324.33 -> 333.75
- `NOC` Northrop Grumman: price: 542.14 -> 542.24; mcap: 77 -> 77.03; m.peTTM: 17 -> 17.2; m.peFwd: 18 -> 17.9; m.evSales: 2.2 -> 2.1; m.gross: 20.5 -> 20.1; m.op: 11.7 -> 11.6; m.net: 10.8 -> 10.5; m.roe: 28.5 -> 27.0; m.revCagrHist: 4.4 -> 5.1; d.revPS: 296.53 -> 301.1
- `BA` Boeing: price: 209 -> 209.52; mcap: 164.76 -> 165.17; m.peTTM: 82.6 -> 82.5; m.peFwd: 50 -> 51.2
- `RTX` RTX Corp: price: 177.41 -> 212.79; mcap: 238.92 -> 286.79; m.peTTM: 34 -> 37.5; m.peFwd: 23.4 -> 27.4; m.evEbitda: 17.9 -> 20.1; m.evSales: 3 -> 3.4; m.gross: 20.2 -> 20.3; m.op: 13.2 -> 12.7; m.net: 8 -> 8.3; m.roe: 11.6 -> 12.3; m.revCagrHist: 8.7 -> 14.5; d.revPS: 67.24 -> 69.43
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 206.05; mcap: 159.08 -> 185.08; m.peTTM: 27.6 -> 32.6; m.peFwd: 20.4 -> 24.0; m.evEbitda: 17.8 -> 21.0; m.evSales: 1.9 -> 2.2
- `HEI` Heico: price: 320.88 -> 349.61; mcap: 44.81 -> 48.85; m.peTTM: 57.1 -> 62.5; m.peFwd: 46.9 -> 50.5; m.evEbitda: 34.8 -> 37.7; m.evSales: 9.7 -> 10.6
- `TDG` TransDigm: price: 1212.36 -> 1236.71; mcap: 67.81 -> 69.17; m.peTTM: 37.9 -> 38.6; m.peFwd: 25.8 -> 26.3; m.evEbitda: 19.8 -> 20.1; m.evSales: 10.1 -> 10.2
- `MRCY` Mercury Systems: price: 106.81 -> 103.27; mcap: 6.41 -> 6.2; m.peFwd: 69.7 -> 66.8; m.evEbitda: 70.3 -> 68.1; m.evSales: 7 -> 6.7
- `RDW` Redwire: price: 14.87 -> 8.69; mcap: 2.96 -> 2.08; m.evSales: 8.1 -> 4.8
- `ASTS` AST SpaceMobile: price: 87.32 -> 56.2; mcap: 33.89 -> 21.81; m.evSales: 99 -> 204.1
- `IRDM` Iridium: price: 45.61 -> 45.78; mcap: 4.82 -> 4.85; m.peTTM: 46.1 -> 52.6; m.peFwd: 33 -> 23.2; m.evEbitda: 14.8 -> 15.2; m.evSales: 7.4 -> 7.3; m.gross: 71.6 -> 71.9; m.op: 23.2 -> 15.1; m.net: 12.1 -> 10.5; m.roe: 21.4 -> 19.7; m.revCagrHist: 1.9 -> 3.8; d.revPS: 8.24 -> 8.33
- `SATS` EchoStar: price: 115.24 -> 103.92; mcap: 33.4 -> 30.12; m.evEbitda: 38.5 -> 35.7; m.evSales: 4.1 -> 3.8
- `VSAT` Viasat: price: 61.5 -> 71.7; mcap: 8.4 -> 9.79; m.peFwd: 152.5 -> 177.8; m.evEbitda: 9.6 -> 10.6; m.evSales: 2.9 -> 3.2
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 7.01; mcap: 3.15 -> 2.76; m.evEbitda: 7.9 -> 7.6; m.evSales: 3.1 -> 3.0
- `PL` Planet Labs: price: 30.72 -> 20.47; mcap: 10.95 -> 7.3; m.evSales: 31.9 -> 21.0
- `BKSY` BlackSky: price: 31.79 -> 21.57; mcap: 1.18 -> 0.8; m.evSales: 13 -> 9.2
- `SPIR` Spire Global: price: 16.37 -> 10.99; mcap: 0.63 -> 0.43; m.peTTM: 10.3 -> 6.9; m.evSales: 9.4 -> 6.1
- `LHX` L3Harris: price: 303 -> 300.21; mcap: 56.45 -> 55.93; m.peTTM: 32.9 -> 32.6; m.peFwd: 22.2 -> 22.0; m.evEbitda: 34.5 -> 34.2; m.evSales: 5.8 -> 5.7
- `KTOS` Kratos Defense: price: 54.82 -> 47.35; mcap: 10.28 -> 8.88; m.peTTM: 322.5 -> 278.5; m.peFwd: 51.1 -> 43.4; m.evEbitda: 110.8 -> 93.6; m.evSales: 6.4 -> 5.4
- `GRMN` Garmin: price: 231.72 -> 243.03; mcap: 44.69 -> 46.87; m.peTTM: 26.5 -> 27.1; m.peFwd: 22.4 -> 23.5; m.evEbitda: 19.5 -> 20.5; m.evSales: 5.7 -> 5.9
- `LUNR` Intuitive Machines: price: 26.54 -> 12.92; mcap: 4.26 -> 2.07; m.evSales: 16.6 -> 10.1
- `LDOS` Leidos: price: 121.69 -> 112.14; mcap: 15.31 -> 14.11; m.peTTM: 11.1 -> 10.3; m.peFwd: 9.3 -> 8.6; m.evEbitda: 9.1 -> 8.6; m.evSales: 1.3 -> 1.2
- meta: data-date stamped to 2026-07-27 in hero/footer
