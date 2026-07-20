# Data refresh report

- **As of:** 2026-07-20
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 238 changed · 3 skipped · 0 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 202.81; mcap: 4854.37 -> 4912.26; m.peTTM: 30.7 -> 31.1; m.peFwd: 15.7 -> 15.8; m.evEbitda: 29.1 -> 29.4; m.evSales: 19 -> 19.2
- `AVGO` Broadcom: price: 372.1 -> 370.82; mcap: 1770.3 -> 1764.23; m.peFwd: 19.2 -> 19.1; m.evEbitda: 43.3 -> 43.0; m.evSales: 24.1 -> 24.0
- `AMD` AMD: price: 452.4 -> 495.76; mcap: 737.68 -> 808.39; m.peTTM: 151.3 -> 164.2; m.peFwd: 34.6 -> 36.8; m.evEbitda: 98.1 -> 107.7; m.evSales: 19.5 -> 21.4
- `MU` Micron: price: 891.88 -> 848.95; mcap: 1005.8 -> 958.8; m.peTTM: 42.2 -> 19.2; m.peFwd: 8 -> 5.6; m.evEbitda: 27.2 -> 13.8; m.evSales: 17.2 -> 10.4; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 168.61; mcap: 191.09 -> 212.31; m.peTTM: 52.3 -> 57.7; m.peFwd: 34.1 -> 37.7; m.evEbitda: 42.2 -> 47.2; m.evSales: 18.4 -> 20.6
- `COHR` Coherent: price: 354.77 -> 277.6; mcap: 69.41 -> 54.31; m.peTTM: 169.7 -> 131.6; m.peFwd: 43.8 -> 33.7; m.evEbitda: 53.9 -> 42.4; m.evSales: 10.7 -> 8.4
- `CIEN` Ciena: price: 434.65 -> 374.41; mcap: 61.53 -> 53.0; m.peTTM: 145.4 -> 124.8; m.peFwd: 45.2 -> 38.8; m.evEbitda: 78.8 -> 67.9; m.evSales: 11.1 -> 9.6
- `SMCI` Super Micro: price: 29.27 -> 24.18; mcap: 17.6 -> 15.64; m.peTTM: 21.4 -> 12.7; m.peFwd: 9 -> 7.7; m.evEbitda: 16.1 -> 14.2; m.evSales: 0.8 -> 0.7
- `DELL` Dell Technologies: price: 369.83 -> 396.34; mcap: 239.69 -> 256.09; m.peTTM: 29.5 -> 31.6; m.peFwd: 17.5 -> 18.2; m.evEbitda: 18.7 -> 19.7; m.evSales: 1.9 -> 2.1; m.op: 8.3 -> 8.9
- `VRT` Vertiv: price: 280.98 -> 289.56; mcap: 107.93 -> 111.22; m.peTTM: 70.8 -> 72.9; m.peFwd: 31.7 -> 32.6; m.evEbitda: 45.6 -> 47.0; m.evSales: 10 -> 10.3
- `EQIX` Equinix: price: 1038.33 -> 1020.0; mcap: 102.4 -> 100.6; m.peTTM: 72 -> 70.4; m.peFwd: 54 -> 52.8; m.evEbitda: 29.1 -> 28.6; m.evSales: 13.1 -> 12.9
- `DLR` Digital Realty: price: 180.78 -> 173.88; mcap: 64.66 -> 65.43; m.peTTM: 47.8 -> 46.1; m.peFwd: 63.1 -> 64.4; m.evEbitda: 28.8 -> 28.0; m.evSales: 13.2 -> 12.8
- `MSFT` Microsoft: price: 397.36 -> 393.82; mcap: 2951.76 -> 2925.47; m.peTTM: 23.7 -> 23.5; m.peFwd: 20.5 -> 20.3; m.evEbitda: 16.3 -> 16.1; m.evSales: 9.4 -> 9.3
- `ORCL` Oracle: price: 201.26 -> 126.41; mcap: 578.83 -> 364.12; m.peTTM: 36.1 -> 21.7; m.peFwd: 18.7 -> 11.6; m.evEbitda: 25.8 -> 16.6; m.evSales: 11 -> 7.5; m.gross: 67.1 -> 65.8; m.op: 32.7 -> 36.2; m.net: 25.3 -> 25.4; m.roe: 57.6 -> 53.4; m.revCagrHist: 21.7 -> 20.6; d.revPS: 22.54 -> 23.55
- meta: data-date stamped to 2026-07-20 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1179.11; mcap: 1013.35 -> 1051.46; m.peTTM: 40.3 -> 41.8; m.peFwd: 25.5 -> 26.3; m.evEbitda: 29 -> 30.1; m.evSales: 14.6 -> 15.1
- `NVO` Novo Nordisk: price: 42.81 -> 50.32; mcap: 189.61 -> 222.61; m.peTTM: 10 -> 12.1; m.peFwd: 12.9 -> 14.9; m.evEbitda: 1.8 -> 2.0; m.evSales: 1 -> 1.1
- `VKTX` Viking Therapeutics: price: 27.75 -> 37.08; mcap: 3.22 -> 4.31
- `AMGN` Amgen: price: 337.73 -> 366.29; mcap: 182.28 -> 197.69; m.peTTM: 24 -> 25.5; m.peFwd: 14.4 -> 15.6; m.evEbitda: 13.5 -> 14.4; m.evSales: 6.1 -> 6.5
- `HIMS` Hims & Hers: price: 27.78 -> 32.84; mcap: 6.43 -> 7.6; m.peFwd: 31.2 -> 36.9; m.evEbitda: 81.7 -> 95.7; m.evSales: 2.9 -> 3.4
- `PFE` Pfizer: price: 25.6 -> 25.05; mcap: 145.91 -> 142.77; m.peTTM: 19.5 -> 19.1; m.peFwd: 9 -> 8.8; m.evEbitda: 7.8 -> 7.6
- `MRK` Merck: price: 119.09 -> 127.5; mcap: 294.13 -> 314.9; m.peTTM: 33.5 -> 36.0; m.peFwd: 12.5 -> 13.2; m.evEbitda: 11.4 -> 12.1; m.evSales: 5.1 -> 5.4
- `ABBV` AbbVie: price: 224.95 -> 254.49; mcap: 397.44 -> 449.63; m.peTTM: 111.4 -> 124.8; m.peFwd: 13.8 -> 15.6; m.evEbitda: 15.4 -> 17.2; m.evSales: 7.3 -> 8.2
- `RHHBY` Roche: price: 50.23 -> 51.6; mcap: 323.53 -> 332.35; m.peTTM: 19.9 -> 20.8; m.peFwd: 15.6 -> 16.1; m.evEbitda: 14.3 -> 14.6; m.evSales: 5.4 -> 5.5
- `TMO` Thermo Fisher: price: 482.04 -> 532.48; mcap: 179.14 -> 197.88; m.peTTM: 26.5 -> 29.2; m.peFwd: 17.7 -> 19.5; m.evEbitda: 19.4 -> 21.1; m.evSales: 4.8 -> 5.3
- `DHR` Danaher: price: 183.63 -> 203.83; mcap: 129.97 -> 144.26; m.peTTM: 36.5 -> 39.5; m.peFwd: 20.2 -> 22.1; m.evEbitda: 18.1 -> 19.9; m.evSales: 5.8 -> 6.4
- `ISRG` Intuitive Surgical: price: 412.02 -> 345.42; mcap: 145.92 -> 122.33; m.peTTM: 50 -> 39.7; m.peFwd: 34.9 -> 28.8; m.evEbitda: 36.4 -> 27.3; m.evSales: 13.4 -> 10.3; m.gross: 66.3 -> 66.8; m.op: 30.9 -> 33.7; m.net: 28.2 -> 28.4; m.roe: 17.2 -> 17.4; m.revCagrHist: 23 -> 18.5; d.revPS: 29.7 -> 31.07
- `DXCM` Dexcom: price: 74.77 -> 76.65; mcap: 28.85 -> 29.58; m.peTTM: 32.1 -> 32.9; m.peFwd: 24.3 -> 24.9; m.evEbitda: 21.5 -> 22.1; m.evSales: 5.8 -> 5.9
- meta: data-date stamped to 2026-07-20 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 157.12; mcap: 40.57 -> 41.39; m.peTTM: 56.4 -> 57.8; m.peFwd: 31 -> 33.1; m.evEbitda: 20 -> 38.8; m.evSales: 9 -> 6.2; m.gross: 85 -> 85.5
- `HOOD` Robinhood: price: 86.36 -> 99.96; mcap: 77.77 -> 90.01; m.peTTM: 41.9 -> 48.5; m.peFwd: 30.8 -> 32.5; m.evSales: 18 -> 18.4; m.gross: 88 -> 92.2
- `MARA` MARA Holdings: price: 12.62 -> 10.69; mcap: 4.81 -> 4.08; m.evSales: 5.6 -> 7.1; m.gross: 40 -> 45.3
- `RIOT` Riot Platforms: price: 24.08 -> 18.26; mcap: 9.11 -> 6.91; m.evSales: 14 -> 11.6; m.gross: 35 -> 32.3
- `CLSK` CleanSpark: price: 14.9 -> 13.03; mcap: 3.82 -> 3.34; m.evSales: 7 -> 6.6; m.gross: 42 -> 50.7
- `IREN` IREN Limited: price: 51.52 -> 33.62; mcap: 18.41 -> 12.02; m.peTTM: 69.6 -> 43.7; m.evEbitda: 20 -> 93.5; m.evSales: 30 -> 18.2; m.gross: 45 -> 68.4
- `MSTR` Strategy: price: 115.35 -> 94.85; mcap: 40.76 -> 34.39; m.peFwd: 25.9 -> 21.3; m.evSales: 113.1 -> 98.4
- `GLXY` Galaxy Digital: price: 30.15 -> 21.63; mcap: 11.76 -> 8.43; m.peFwd: 322.2 -> 297.7; m.evEbitda: 12 -> 0.1; m.evSales: 5 -> 0.1
- `CRCL` Circle Internet: price: 78.93 -> 60.46; mcap: 21.1 -> 16.16; m.peFwd: 35.4 -> 31.2; m.evSales: 8 -> 4.7; m.gross: 40 -> 8.1
- `BLK` BlackRock: price: 1010.68 -> 1072.2; mcap: 164.59 -> 174.34; m.peTTM: 25.4 -> 25.7; m.peFwd: 16.6 -> 16.7; m.evEbitda: 16 -> 15.7; m.evSales: 7 -> 6.4; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 176.03
- meta: data-date stamped to 2026-07-20 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 358.68; mcap: 214.52 -> 292.32; m.peTTM: 226.9 -> 311.9; m.peFwd: 63.9 -> 87.0; m.evEbitda: 143.9 -> 196.4; m.evSales: 20.1 -> 27.5
- `CRWD` CrowdStrike: price: 647.74 -> 203.08; mcap: 164.89 -> 206.79; m.peFwd: 103.6 -> 130.0; m.evSales: 31.6 -> 39.9; d.revPS: 20.22 -> 5.06
- `FTNT` Fortinet: price: 138.88 -> 161.61; mcap: 101.75 -> 118.4; m.peTTM: 53.8 -> 62.4; m.peFwd: 40.5 -> 47.2; m.evEbitda: 41.9 -> 49.0; m.evSales: 13.9 -> 16.3
- `ZS` Zscaler: price: 124.73 -> 149.94; mcap: 20.17 -> 24.25; m.peFwd: 27.1 -> 32.6; m.evSales: 5.8 -> 7.1
- `NET` Cloudflare: price: 219.67 -> 277.66; mcap: 77.97 -> 98.55; m.peFwd: 140.8 -> 175.9; m.evSales: 33.1 -> 41.9
- `OKTA` Okta: price: 114.92 -> 149.35; mcap: 19.97 -> 26.19; m.peTTM: 83.3 -> 109.0; m.peFwd: 26.9 -> 34.9; m.evEbitda: 66.7 -> 89.1; m.evSales: 5.9 -> 7.9
- `S` SentinelOne: price: 14.79 -> 19.57; mcap: 5.07 -> 6.68; m.peFwd: 29.9 -> 39.7; m.evSales: 4.2 -> 5.8
- `RPD` Rapid7: price: 7.21 -> 12.2; mcap: 0.48 -> 0.82; m.peTTM: 20.6 -> 34.9; m.peFwd: 4.6 -> 7.9; m.evEbitda: 13.6 -> 19.5; m.evSales: 0.9 -> 1.3
- `QLYS` Qualys: price: 110.2 -> 159.43; mcap: 3.88 -> 5.61; m.peTTM: 19.7 -> 28.7; m.peFwd: 13.3 -> 19.3; m.evEbitda: 14.1 -> 21.2; m.evSales: 5.1 -> 7.6
- `TENB` Tenable: price: 26.8 -> 39.88; mcap: 2.96 -> 4.4; m.peFwd: 12.3 -> 18.4; m.evEbitda: 74.4 -> 110.0; m.evSales: 3 -> 4.4
- `GEN` Gen Digital: price: 24.62 -> 26.74; mcap: 14.83 -> 16.11; m.peTTM: 15.7 -> 17.0; m.peFwd: 7.5 -> 8.1; m.evEbitda: 9.5 -> 10.0; m.evSales: 4.5 -> 4.8
- meta: data-date stamped to 2026-07-20 in hero

## finance.js

- changed: 27 · skipped: 1 · review: 0

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 139.65; mcap: 79.36 -> 78.97; m.peTTM: 20.6 -> 20.3; m.peFwd: 15.9 -> 16.0; m.evEbitda: 18 -> 15.0
- `CME` CME Group: price: 263.8 -> 245.05; mcap: 95.32 -> 88.54; m.peTTM: 22.5 -> 20.9; m.peFwd: 20.4 -> 19.1; m.evEbitda: 20 -> 18.8; m.evSales: 16 -> 13.3
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 89.78; mcap: 58.77 -> 58.87; m.peTTM: 38 -> 37.9; m.peFwd: 16.8 -> 16.6; m.evEbitda: 17 -> 16.3; m.evSales: 7.5 -> 5.9; m.gross: 68 -> 88.1
- `SPGI` S&P Global: price: 426.38 -> 450.84; mcap: 126.21 -> 133.45; m.peTTM: 27 -> 28.5; m.peFwd: 19.2 -> 22.2; m.evEbitda: 24 -> 19.1; m.evSales: 12 -> 9.6; m.gross: 73 -> 70.5
- `MSCI` MSCI Inc: price: 608.52 -> 628.66; mcap: 44.26 -> 45.72; m.peTTM: 34.8 -> 35.8; m.peFwd: 27 -> 27.4; m.evEbitda: 28 -> 27.4; m.evSales: 18 -> 16.0; m.gross: 82 -> 82.9
- `MCO` Moody's: price: 450.69 -> 510.86; mcap: 78.72 -> 89.24; m.peTTM: 32.4 -> 36.6; m.peFwd: 24.2 -> 27.4; m.evSales: 13 -> 12.1; m.gross: 72 -> 74.4
- `V` Visa: price: 322.96 -> 358.56; mcap: 614.19 -> 681.89; m.peTTM: 28.2 -> 31.3; m.peFwd: 21.7 -> 24.1; m.evEbitda: 24 -> 22.8; m.evSales: 20 -> 15.9; m.gross: 80 -> 97.8
- `MA` Mastercard: price: 489.08 -> 543.6; mcap: 432.14 -> 480.32; m.peTTM: 28.3 -> 31.4; m.peFwd: 21.5 -> 23.9; m.evEbitda: 28 -> 23.0; m.evSales: 24 -> 14.5
- `PYPL` PayPal: price: 40.7 -> 56.56; mcap: 35.9 -> 49.89; m.peTTM: 7.6 -> 10.6; m.peFwd: 7.1 -> 9.8; m.evEbitda: 9 -> 7.9; m.evSales: 2 -> 1.5; m.gross: 46 -> 40.9
- `JPM` JPMorgan Chase: price: 309.14 -> 341.1; mcap: 828.34 -> 906.71; m.peTTM: 14.8 -> 14.6; m.peFwd: 13.1 -> 13.9; m.evSales: 3.5 -> 2.4; m.op: 43.7 -> 50.4; m.net: 33.9 -> 34.9; m.roe: 16.5 -> 17.8; m.revCagrHist: 12.7 -> 30.4; d.revPS: 63.1 -> 68.35
- `BAC` Bank of America: price: 54.54 -> 61.27; mcap: 387.05 -> 429.99; m.peTTM: 13.5 -> 14.2; m.peFwd: 10.8 -> 11.7; m.evSales: 3 -> 1.5; m.op: 36 -> 38.3; m.net: 29 -> 29.5; m.roe: 10.6 -> 11.2; m.revCagrHist: 8.1 -> 21.4; d.revPS: 14.78 -> 15.59
- `WFC` Wells Fargo: price: 81.97 -> 87.51; mcap: 250.84 -> 265.03; m.peFwd: 10.4 -> 11.1; m.evSales: 3.2 -> 1.1; m.op: 29.4 -> 37.1; m.net: 26.7 -> 27.2; m.roe: 12 -> 12.6; m.revCagrHist: 5.7 -> 9.5; d.revPS: 25.74 -> 26.74
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 14.92; mcap: 296.75 -> 344.6; m.peTTM: 14.2 -> 16.2; m.peFwd: 9.1 -> 10.6
- `GS` Goldman Sachs: price: 1001.29 -> 1065.22; mcap: 295.39 -> 314.25; m.peTTM: 18.3 -> 16.4; m.peFwd: 15.3 -> 14.7; m.evSales: 3 -> 2.3; m.gross: 55 -> 82.1; m.op: 38.6 -> 42.3; m.net: 29.4 -> 31.0; m.roe: 14.5 -> 17.0; m.revCagrHist: 14.5 -> 42.5; d.revPS: 199.49 -> 221.5
- `MS` Morgan Stanley: price: 206.66 -> 215.5; mcap: 325.96 -> 338.77; m.peTTM: 18.7 -> 17.4; m.peFwd: 16.3 -> 16.0; m.gross: 58 -> 87.6; m.op: 40.6 -> 41.6; m.net: 24.8 -> 25.9; m.revCagrHist: 16.3 -> 28.0; d.revPS: 46.66 -> 49.81
- `SCHW` Charles Schwab: price: 89.27 -> 101.56; mcap: 155.25 -> 176.63; m.peTTM: 17.7 -> 20.2; m.peFwd: 12.4 -> 13.5; m.evSales: 5 -> 5.9; m.gross: 70 -> 97.5
- `IBKR` Interactive Brokers: price: 85.42 -> 90.53; mcap: 144.89 -> 153.56; m.peTTM: 36.7 -> 38.9; m.peFwd: 29.7 -> 30.2; m.gross: 90 -> 93.0
- `HOOD` Robinhood Markets: price: 86.36 -> 99.96; mcap: 77.77 -> 90.01; m.peTTM: 41.9 -> 48.5; m.peFwd: 30.8 -> 32.5; m.evSales: 18 -> 18.4; m.gross: 88 -> 92.2
- `FUTU` Futu Holdings: price: 92.93 -> 95.1; mcap: 13.03 -> 13.33; m.peTTM: 10.3 -> 10.5; m.peFwd: 7.6 -> 7.8; m.gross: 85 -> 94.4
- `BLK` BlackRock: price: 1010.68 -> 1072.2; mcap: 164.59 -> 174.34; m.peTTM: 25.4 -> 25.7; m.peFwd: 16.6 -> 16.7; m.evEbitda: 16 -> 15.7; m.evSales: 7 -> 6.4; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 176.03
- `BX` Blackstone: price: 118.48 -> 126.91; mcap: 144.81 -> 155.12; m.peTTM: 30.4 -> 32.5; m.peFwd: 15.7 -> 17.0; m.evSales: 18 -> 8.7
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 490.91; mcap: 1043.23 -> 1058.82; m.peTTM: 14.4 -> 14.6; m.peFwd: 22.5 -> 22.8; m.gross: 30 -> 27.8
- `PGR` Progressive: price: 204.2 -> 207.95; mcap: 119.15 -> 120.9; m.peFwd: 12.6 -> 12.8; m.evEbitda: 12 -> 8.3; m.evSales: 2.2 -> 1.4; m.gross: 30 -> 18.5; m.op: 16.4 -> 18.2; m.net: 12.9 -> 12.8; m.roe: 37.9 -> 34.9; m.revCagrHist: 8.7 -> 7.3; d.revPS: 152.53 -> 155.48
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 422.9; mcap: 167.13 -> 183.52; m.peTTM: 12.3 -> 13.7; m.peFwd: 11.5 -> 12.9; m.evEbitda: 9 -> 6.9; m.evSales: 1.5 -> 1.2; m.gross: 28 -> 24.3
- `AXP` American Express: price: 313.34 -> 355.35; mcap: 213.8 -> 242.46; m.peTTM: 19.6 -> 22.2; m.peFwd: 15.6 -> 17.6; m.evSales: 3.5 -> 3.6; m.gross: 55 -> 62.8
- `INTU` Intuit: price: 284.22 -> 291.09; mcap: 77.74 -> 79.62; m.peTTM: 17.3 -> 17.8; m.peFwd: 10.4 -> 10.6; m.evEbitda: 12.1 -> 12.4; m.evSales: 3.7 -> 3.8
- meta: data-date stamped to 2026-07-20 in hero/footer

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 85.62; mcap: 41.39 -> 37.29; m.peTTM: 96 -> 81.5; m.peFwd: 50 -> 45.0; m.evEbitda: 46.2 -> 41.6; m.evSales: 11.7 -> 10.5
- `UEC` Uranium Energy: price: 9.42 -> 9.28; mcap: 4.66 -> 4.55; m.evSales: 206.7 -> 203.3
- `NXE` NexGen Energy: price: 9.27 -> 8.8; mcap: 6.14 -> 5.82
- `SMR` NuScale Power: price: 9.29 -> 7.72; mcap: 3.22 -> 2.67; m.evSales: 121.8 -> 92.7
- `OKLO` Oklo: price: 54.02 -> 41.11; mcap: 9.4 -> 7.15
- `BWXT` BWX Technologies: price: 183 -> 171.18; mcap: 16.77 -> 15.68; m.peTTM: 48.9 -> 45.6; m.peFwd: 35.2 -> 33.0; m.evEbitda: 39.3 -> 37.0; m.evSales: 5.4 -> 5.1
- `LEU` Centrus Energy: price: 146.61 -> 156.05; mcap: 2.88 -> 3.07; m.peTTM: 53.1 -> 56.7; m.peFwd: 36.9 -> 39.6; m.evEbitda: 64.2 -> 69.6; m.evSales: 4.9 -> 5.3
- `CEG` Constellation Energy: price: 242.3 -> 252.39; mcap: 86.53 -> 90.13; m.peFwd: 17.8 -> 18.6; m.evEbitda: 13.8 -> 14.2; m.evSales: 3.7 -> 3.8
- `VST` Vistra: price: 138.54 -> 155.44; mcap: 46.71 -> 52.41; m.peTTM: 23.2 -> 26.0; m.peFwd: 12.6 -> 14.4; m.evEbitda: 10.1 -> 11.0; m.evSales: 3.5 -> 3.8
- `GEV` GE Vernova: price: 867.09 -> 1057.84; mcap: 233 -> 284.26; m.peTTM: 25.3 -> 31.0; m.peFwd: 35.4 -> 43.0; m.evEbitda: 66.8 -> 81.8; m.evSales: 5.8 -> 7.1
- `ETN` Eaton: price: 375.46 -> 399.99; mcap: 145.79 -> 155.32; m.peTTM: 36.8 -> 39.1; m.peFwd: 23.9 -> 25.4; m.evEbitda: 26.3 -> 27.8; m.evSales: 5.9 -> 6.2
- `PWR` Quanta Services: price: 650.92 -> 628.53; mcap: 97.68 -> 94.32; m.peTTM: 89.5 -> 86.2; m.peFwd: 39.5 -> 38.2; m.evEbitda: 39 -> 37.7; m.evSales: 3.4 -> 3.3
- `NEE` NextEra Energy: price: 85.12 -> 88.8; mcap: 177.53 -> 185.2; m.peTTM: 21.6 -> 22.5; m.peFwd: 19.4 -> 20.2; m.evEbitda: 20.6 -> 21.1; m.evSales: 10.5 -> 10.7
- `FSLR` First Solar: price: 249.27 -> 211.99; mcap: 26.78 -> 22.78; m.peTTM: 16.1 -> 13.7; m.peFwd: 10.6 -> 9.0; m.evEbitda: 11 -> 9.2; m.evSales: 4.6 -> 3.9
- meta: data-date stamped to 2026-07-20 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 34.78; mcap: 21.14 -> 12.98; m.peTTM: 145.2 -> 89.2; m.evSales: 102.3 -> 58.7
- `RGTI` Rigetti Computing: price: 19.45 -> 14.11; mcap: 6.46 -> 4.69
- `QBTS` D-Wave Quantum: price: 23.25 -> 16.73; mcap: 8.61 -> 6.2
- `QUBT` Quantum Computing Inc: price: 9.53 -> 7.8; mcap: 2.15 -> 1.76; m.evSales: 269.7 -> 179.6
- `IBM` IBM: price: 272.36 -> 212.67; mcap: 255.99 -> 199.89; m.peTTM: 24.1 -> 18.8; m.peFwd: 20.3 -> 16.2; m.evEbitda: 18.9 -> 15.5; m.evSales: 4.6 -> 3.7
- `GOOGL` Alphabet: price: 356.38 -> 346.77; mcap: 4346.03 -> 4231.49; m.peTTM: 27.2 -> 26.5; m.peFwd: 24.6 -> 23.7; m.evEbitda: 26.6 -> 25.9; m.evSales: 10.1 -> 9.9
- `MSFT` Microsoft: price: 397.36 -> 393.82; mcap: 2951.76 -> 2925.47; m.peTTM: 23.7 -> 23.5; m.peFwd: 20.5 -> 20.3; m.evEbitda: 16.3 -> 16.1; m.evSales: 9.4 -> 9.3
- `HON` Honeywell: price: 205.88 -> 225.02; mcap: 130.46 -> 71.29; m.peTTM: 32.9 -> 18.0; m.peFwd: 18 -> 23.0; m.evEbitda: 18.4 -> 11.5; m.evSales: 4.2 -> 2.6; d.revPS: 59.25 -> 118.5
- `FORM` FormFactor: price: 115.81 -> 105.57; mcap: 9.03 -> 8.23; m.peTTM: 133.1 -> 120.0; m.peFwd: 41.5 -> 37.8; m.evEbitda: 63.7 -> 57.9; m.evSales: 10.4 -> 9.5
- `NVDA` NVIDIA: price: 200.42 -> 202.81; mcap: 4854.37 -> 4912.26; m.peTTM: 30.7 -> 31.1; m.peFwd: 15.7 -> 15.8; m.evEbitda: 29.1 -> 29.4; m.evSales: 19 -> 19.2
- meta: data-date stamped to 2026-07-20 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 380.84; mcap: 1433.15 -> 1430.33; m.peTTM: 370.5 -> 346.2; m.peFwd: 152.6 -> 149.1; m.evEbitda: 126.6 -> 126.4; m.evSales: 14.4 -> 14.3
- `SERV` Serve Robotics: price: 6.98 -> 5.09; mcap: 0.59 -> 0.43; m.evSales: 68.7 -> 40.6
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 79.2; mcap: 180.91 -> 178.03; m.peTTM: 37.5 -> 36.0; m.peFwd: 29.2 -> 27.4; m.evEbitda: 21.2 -> 20.6; m.evSales: 4.3 -> 4.1; m.gross: 40.4 -> 40.2; m.op: 20.6 -> 16.9; m.net: 14.3 -> 14.1; m.roe: 33.6 -> 32.6; m.revCagrHist: 18.3 -> 14.2
- `6954` Fanuc (via `6954.T`): price: 6691 -> 6637.0; mcap: 38.9 -> 38.14; m.peTTM: 37.5 -> 37.2; m.peFwd: 38.7 -> 38.3; m.evEbitda: 24.1 -> 23.6; m.evSales: 6.5 -> 6.4
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 5116.0; mcap: 9.68 -> 8.17; m.peTTM: 44.1 -> 37.7; m.peFwd: 29.2 -> 25.0; m.evEbitda: 24.2 -> 20.8; m.evSales: 3 -> 2.5; m.gross: 35.3 -> 35.0; m.op: 8.8 -> 6.1; m.net: 6.5 -> 6.1; m.roe: 7.8 -> 7.5; m.revCagrHist: 2 -> 10.6
- `ROK` Rockwell Automation: price: 440.07 -> 461.85; mcap: 48.97 -> 51.39; m.peTTM: 45.7 -> 47.9; m.peFwd: 30.3 -> 31.6; m.evEbitda: 26.7 -> 28.0; m.evSales: 6 -> 6.3
- `EMR` Emerson Electric: price: 137.11 -> 139.54; mcap: 76.8 -> 78.16; m.peTTM: 31.7 -> 32.2; m.peFwd: 19.1 -> 19.4; m.evEbitda: 15.2 -> 15.4
- `SIEGY` Siemens: price: 153.07 -> 151.56; mcap: 235.46 -> 233.14; m.peTTM: 27.5 -> 27.6; m.peFwd: 20.8 -> 22.7; m.evEbitda: 23.9 -> 24.3
- `PH` Parker Hannifin: price: 875.6 -> 953.21; mcap: 110.4 -> 120.19; m.peTTM: 32.3 -> 35.2; m.peFwd: 25.7 -> 28.0; m.evEbitda: 21.8 -> 23.6; m.evSales: 5.7 -> 6.2
- `NOVT` Novanta: price: 154.58 -> 148.71; mcap: 5.51 -> 5.3; m.peTTM: 111.2 -> 106.2; m.peFwd: 37.3 -> 35.9; m.evEbitda: 30.2 -> 29.1; m.evSales: 5.4 -> 5.2
- `CGNX` Cognex: price: 58.69 -> 64.07; mcap: 9.77 -> 10.66; m.peTTM: 69 -> 75.4; m.peFwd: 33.3 -> 36.0; m.evEbitda: 42.1 -> 46.1; m.evSales: 9.1 -> 10.0
- `SYM` Symbotic: price: 41.24 -> 41.25; mcap: 24.89 -> 24.9; m.peFwd: 57.4 -> 57.2
- `ZBRA` Zebra Technologies: price: 216.79 -> 267.4; mcap: 10.33 -> 12.74; m.peTTM: 26.2 -> 32.3; m.peFwd: 10.5 -> 12.9; m.evEbitda: 12.7 -> 15.1; m.evSales: 2.3 -> 2.8
- meta: data-date stamped to 2026-07-20 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 0

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 27505.0; mcap: 113.02 -> 122.61; m.peTTM: 48.8 -> 53.5; m.peFwd: 105.2 -> 115.7; m.evEbitda: 34.3 -> 38.0; m.evSales: 15.9 -> 17.4; m.op: 46.7 -> 45.9
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 7157.0; mcap: 78 -> 81.95; m.peTTM: 26.7 -> 28.3; m.peFwd: 20.4 -> 21.7; m.evEbitda: 12.7 -> 13.7; m.evSales: 4.3 -> 4.7
- `6146` Disco (via `6146.T`): price: 68720 -> 64780.0; mcap: 46.43 -> 43.27; m.peTTM: 55.1 -> 52.1; m.peFwd: 50.5 -> 47.6; m.evEbitda: 36.8 -> 33.9; m.evSales: 16.7 -> 15.4; m.roe: 30 -> 25.1; m.revCagrHist: 22 -> 10.2
- `6963` Rohm (via `6963.T`): price: 4679 -> 4531.0; mcap: 11.25 -> 10.77; m.peFwd: 53.8 -> 52.1; m.evEbitda: 26.4 -> 25.3; m.evSales: 3.7 -> 3.6; m.roe: 1.5 -> -19.2; m.revCagrHist: -3 -> 7.5
- `4004` Resonac (via `4004.T`): price: 15820 -> 13910.0; mcap: 17.84 -> 15.5; m.peTTM: 98.2 -> 87.0; m.peFwd: 63.4 -> 55.8; m.evEbitda: 24.1 -> 22.3; m.evSales: 2.6 -> 2.4
- `6861` Keyence (via `6861.T`): price: 71270 -> 70880.0; mcap: 107.68 -> 105.85; m.peTTM: 38.8 -> 38.6; m.peFwd: 38.2 -> 38.0; m.evEbitda: 26.4 -> 25.6; m.evSales: 13.8 -> 13.4; m.roe: 14 -> 13.5
- `6723` Renesas (via `6723.T`): price: 4222 -> 3822.0; mcap: 47.72 -> 42.7; m.peFwd: 16.4 -> 14.1; m.evEbitda: 23.5 -> 21.2; m.evSales: 6.3 -> 5.6
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 65100.0; mcap: 177.9 -> 182.25; m.peTTM: 50.3 -> 52.1; m.peFwd: 49 -> 50.9; m.evEbitda: 39.1 -> 41.2; m.evSales: 11.3 -> 11.9
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 16510.0; mcap: 15.04 -> 19.22; m.peTTM: 26.2 -> 33.9; m.peFwd: 14.6 -> 18.9; m.evEbitda: 16.3 -> 21.2; m.evSales: 3.7 -> 4.8
- `ASML` ASML Holding: price: 1734.19 -> 1747.58; mcap: 668.39 -> 671.25; m.peTTM: 59.5 -> 60.2; m.peFwd: 36.2 -> 30.3; m.gross: 52.6 -> 52.7; m.op: 36 -> 37.1; m.net: 29.7 -> 30.1; m.roe: 52.2 -> 53.9; m.revCagrHist: 13.2 -> 21.3
- `LRCX` Lam Research: price: 321.8 -> 313.3; mcap: 402.43 -> 391.8; m.peTTM: 60.7 -> 59.2; m.peFwd: 40.4 -> 38.8; m.evEbitda: 51.2 -> 49.8; m.evSales: 18.5 -> 18.0
- `KLAC` KLA Corp: price: 2135.64 -> 212.75; mcap: 278.97 -> 277.91; m.peTTM: 60.6 -> 60.3; m.peFwd: 42.4 -> 41.5; m.evEbitda: 47.9 -> 47.7; m.evSales: 21.4 -> 21.3
- `TSM` TSMC: price: 408.75 -> 398.37; mcap: 2119.97 -> 2066.14; m.peTTM: 35.1 -> 29.8; m.peFwd: 20.9 -> 18.8; m.evEbitda: 5.2 -> 4.4; m.evSales: 3.6 -> 3.2; m.gross: 61.9 -> 64.2; m.op: 58.1 -> 60.3; m.net: 46.5 -> 49.9; m.roe: 36.2 -> 40.0; m.revCagrHist: 35.1 -> 36.0
- `AMAT` Applied Materials: price: 497.01 -> 529.66; mcap: 394.61 -> 420.53; m.peTTM: 46.7 -> 49.7; m.peFwd: 30.6 -> 31.6; m.evEbitda: 42.4 -> 45.2; m.evSales: 13.6 -> 14.5
- `NVDA` NVIDIA: price: 200.42 -> 202.81; mcap: 4854.37 -> 4912.26; m.peTTM: 30.7 -> 31.1; m.peFwd: 15.7 -> 15.8; m.evEbitda: 29.1 -> 29.4; m.evSales: 19 -> 19.2
- `AVGO` Broadcom: price: 372.1 -> 370.82; mcap: 1770.3 -> 1764.23; m.peFwd: 19.2 -> 19.1; m.evEbitda: 43.3 -> 43.0; m.evSales: 24.1 -> 24.0
- `AMD` AMD: price: 452.4 -> 495.76; mcap: 737.68 -> 808.39; m.peTTM: 151.3 -> 164.2; m.peFwd: 34.6 -> 36.8; m.evEbitda: 98.1 -> 107.7; m.evSales: 19.5 -> 21.4
- `INTC` Intel: price: 107.04 -> 95.04; mcap: 537.98 -> 477.67; m.peFwd: 69.6 -> 58.9; m.evEbitda: 39.8 -> 35.5; m.evSales: 10.5 -> 9.4
- `ARM` Arm Holdings: price: 307.43 -> 267.19; mcap: 328.36 -> 285.38; m.peTTM: 357.5 -> 310.7; m.peFwd: 100.2 -> 86.8; m.evEbitda: 120 -> 265.1; m.evSales: 66.1 -> 57.4
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 244000.0; mcap: 1118.21 -> 950.32; m.peFwd: 5.2 -> 3.7; m.evEbitda: 13.4 -> 11.2; m.evSales: 4.9 -> 4.1
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 1764000.0; mcap: 960.23 -> 846.08; m.peFwd: 5.1 -> 3.9; m.evEbitda: 15.5 -> 13.9; m.evSales: 10.7 -> 9.6
- `MU` Micron: price: 891.88 -> 848.95; mcap: 1005.8 -> 958.8; m.peTTM: 42.2 -> 19.2; m.peFwd: 8 -> 5.6; m.evEbitda: 27.2 -> 13.8; m.evSales: 17.2 -> 10.4; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 384.27; mcap: 88.18 -> 73.58; m.peTTM: 105.4 -> 87.7; m.peFwd: 26.7 -> 22.2; m.evEbitda: 56.9 -> 48.3; m.evSales: 11.1 -> 9.4
- `CDNS` Cadence: price: 385.13 -> 330.11; mcap: 106.23 -> 91.05; m.peTTM: 90.2 -> 76.9; m.peFwd: 41 -> 35.1; m.evEbitda: 53.5 -> 46.0; m.evSales: 19.5 -> 16.7
- `QCOM` Qualcomm: price: 191.2 -> 171.78; mcap: 201.52 -> 181.06; m.peTTM: 22.1 -> 18.5; m.peFwd: 17.9 -> 15.5; m.evEbitda: 15.9 -> 14.3; m.evSales: 4.7 -> 4.2
- `GFS` GlobalFoundries: price: 74.82 -> 57.48; mcap: 41.03 -> 31.54; m.peTTM: 50.6 -> 41.4; m.peFwd: 29.7 -> 22.8; m.evEbitda: 19.6 -> 14.9; m.evSales: 5.8 -> 4.4
- `LIN` Linde: price: 509.16 -> 513.22; mcap: 235.41 -> 237.29; m.peTTM: 33.8 -> 34.0; m.peFwd: 25.8 -> 26.2; m.evEbitda: 19.1 -> 19.2
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 176.46; mcap: 123.3 -> 128.38; m.peTTM: 30.3 -> 32.0; m.peFwd: 23.7 -> 24.7; m.evEbitda: 15.6 -> 16.4; m.evSales: 4.3 -> 4.6
- `ENTG` Entegris: price: 128.88 -> 138.74; mcap: 19.63 -> 21.13; m.peTTM: 74.5 -> 80.2; m.peFwd: 27.9 -> 29.7; m.evEbitda: 26.1 -> 27.8; m.evSales: 7.1 -> 7.6
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 9883.0; mcap: 7.01 -> 7.3; m.peTTM: 33.8 -> 35.5; m.peFwd: 48 -> 50.6; m.evEbitda: 19.2 -> 20.4; m.evSales: 3.1 -> 3.3
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 4331.0; mcap: 5.39 -> 5.2; m.peFwd: 16.1 -> 15.7; m.evEbitda: 12.6 -> 12.1; m.op: 3.7 -> 4.8
- `3436` Sumco (via `3436.T`): price: 3275 -> 3914.0; mcap: 7.14 -> 8.43; m.peFwd: 66.5 -> 79.5; m.evEbitda: 13.4 -> 15.7; m.evSales: 3.6 -> 4.2
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 87.34; mcap: 5.17 -> 3.57; m.peFwd: 63 -> 44.7; m.evEbitda: 40.4 -> 33.9; m.evSales: 7.6 -> 5.4; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 15685.0; mcap: 30.89 -> 26.97; m.peTTM: 82.3 -> 73.0; m.peFwd: 57.5 -> 50.8; m.evEbitda: 38.3 -> 34.5; m.evSales: 11.4 -> 10.3
- `ASX` ASE Technology: price: 34.3 -> 38.41; mcap: 75.25 -> 84.27; m.peTTM: 53.6 -> 60.0; m.peFwd: 21.6 -> 19.7; m.evEbitda: 2 -> 2.1
- `AMKR` Amkor Technology: price: 69.61 -> 62.94; mcap: 17.25 -> 15.6; m.peTTM: 40 -> 36.2; m.peFwd: 28.4 -> 25.7; m.evEbitda: 14.3 -> 12.9; m.evSales: 2.4 -> 2.2
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 78.15; mcap: 18.86 -> 20.65; m.peTTM: 77.6 -> 84.9; m.peFwd: 50.1 -> 53.2; m.evEbitda: 22.6 -> 26.0; m.evSales: 3.6 -> 4.1
- `TXN` Texas Instruments: price: 282.01 -> 284.02; mcap: 256.66 -> 258.48; m.peTTM: 48.3 -> 48.6; m.peFwd: 30 -> 29.7; m.evEbitda: 30.7 -> 30.9; m.evSales: 14.4 -> 14.5
- `ADI` Analog Devices: price: 392.67 -> 375.36; mcap: 191.26 -> 182.83; m.peTTM: 58.5 -> 55.9; m.peFwd: 26.6 -> 25.0; m.evEbitda: 32 -> 30.6; m.evSales: 15.4 -> 14.8
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 63.66; mcap: 112.72 -> 94.65; m.peTTM: 91.6 -> 77.6; m.peFwd: 29.1 -> 23.5; m.evEbitda: 25.8 -> 22.1; m.evSales: 6.9 -> 5.9
- `NXPI` NXP Semiconductors: price: 285.56 -> 266.53; mcap: 72.1 -> 67.29; m.peTTM: 28.4 -> 25.5; m.peFwd: 16.2 -> 14.9; m.evEbitda: 19.3 -> 18.2; m.evSales: 6.4 -> 6.0
- `STM` STMicroelectronics: price: 70.74 -> 62.06; mcap: 62.87 -> 55.38; m.peTTM: 442.1 -> 387.9; m.peFwd: 28.8 -> 24.9; m.evEbitda: 24.7 -> 21.6; m.evSales: 5 -> 4.3
- `ON` ON Semiconductor: price: 110.17 -> 87.37; mcap: 42.83 -> 34.0; m.peTTM: 81 -> 64.2; m.peFwd: 25.8 -> 20.1; m.evEbitda: 21.5 -> 17.1; m.evSales: 7.3 -> 5.8
- `MCHP` Microchip: price: 87.91 -> 80.96; mcap: 47.65 -> 43.96; m.peTTM: 399.6 -> 368.0; m.peFwd: 21.5 -> 19.5; m.evEbitda: 43.5 -> 40.4; m.evSales: 11.3 -> 10.5
- `MRVL` Marvell: price: 252.59 -> 188.68; mcap: 220.97 -> 169.35; m.peTTM: 87.1 -> 64.8; m.peFwd: 40.9 -> 30.4; m.evEbitda: 82 -> 61.4; m.evSales: 25.5 -> 19.1
- `AVT` Avnet: price: 85.39 -> 85.65; mcap: 7 -> 7.03; m.peTTM: 33 -> 33.1; m.peFwd: 10.8 -> 10.9; m.evEbitda: 13 -> 13.1
- `ARW` Arrow Electronics: price: 215.49 -> 206.61; mcap: 11.02 -> 10.56; m.peTTM: 15.4 -> 14.8; m.peFwd: 10.1 -> 9.7; m.evEbitda: 10.4 -> 10.0
- `AAPL` Apple: price: 291.58 -> 333.74; mcap: 4282.54 -> 4901.76; m.peTTM: 35.3 -> 40.5; m.peFwd: 30.4 -> 34.6; m.evEbitda: 26.9 -> 30.7; m.evSales: 9.5 -> 10.9
- `MSFT` Microsoft: price: 397.36 -> 393.82; mcap: 2951.76 -> 2925.47; m.peTTM: 23.7 -> 23.5; m.peFwd: 20.5 -> 20.3; m.evEbitda: 16.3 -> 16.1; m.evSales: 9.4 -> 9.3
- `GOOGL` Alphabet: price: 356.38 -> 346.77; mcap: 4346.03 -> 4231.49; m.peTTM: 27.2 -> 26.5; m.peFwd: 24.6 -> 23.7; m.evEbitda: 26.6 -> 25.9; m.evSales: 10.1 -> 9.9
- `AMZN` Amazon: price: 238 -> 247.23; mcap: 2560.19 -> 2659.48; m.peTTM: 31.6 -> 29.6; m.peFwd: 24.1 -> 24.9; m.evEbitda: 17 -> 17.7; m.evSales: 3.6 -> 3.7
- `META` Meta Platforms: price: 570.98 -> 646.01; mcap: 1449.39 -> 1639.85; m.peTTM: 20.7 -> 23.5; m.peFwd: 15.8 -> 17.8; m.evEbitda: 13.3 -> 15.1; m.evSales: 6.8 -> 7.7
- `TSLA` Tesla: price: 381.59 -> 380.84; mcap: 1433.15 -> 1430.33; m.peTTM: 370.5 -> 346.2; m.peFwd: 152.6 -> 149.1; m.evEbitda: 126.6 -> 126.4; m.evSales: 14.4 -> 14.3
- `SONY` Sony Group: price: 20.76 -> 21.12; mcap: 122.26 -> 124.03; m.peTTM: 19.4 -> 19.9; m.peFwd: 17.4 -> 17.7; m.gross: 30.8 -> 31.2; m.op: 7.6 -> 10.7; m.roe: 12.4 -> 12.3; m.revCagrHist: 15.4 -> 8.3
- `CSCO` Cisco Systems: price: 118.8 -> 111.94; mcap: 468.24 -> 441.2; m.peTTM: 39.5 -> 37.3; m.peFwd: 24.9 -> 23.4; m.evEbitda: 28.5 -> 26.9; m.evSales: 8 -> 7.5
- `DELL` Dell Technologies: price: 369.83 -> 396.34; mcap: 239.69 -> 256.09; m.peTTM: 29.5 -> 31.6; m.peFwd: 17.5 -> 18.2; m.evEbitda: 18.7 -> 19.7; m.evSales: 1.9 -> 2.1; m.op: 8.3 -> 8.9
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 93.85; mcap: 71.5 -> 75.32; m.peTTM: 45.7 -> 31.4; m.peFwd: 15.9 -> 16.7; m.evEbitda: 7.6 -> 7.9
- `APD` Air Products: price: 276.51 -> 295.62; mcap: 61.57 -> 65.83; m.peTTM: 29.2 -> 31.2; m.peFwd: 19.4 -> 20.7; m.evEbitda: 21 -> 22.1; m.evSales: 6.5 -> 6.9
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 6010.0; mcap: 14.2 -> 16.02; m.peTTM: 18.4 -> 21.0; m.peFwd: 19 -> 21.7; m.evEbitda: 9.5 -> 10.4; m.evSales: 2.2 -> 2.5; m.op: 14 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3633.0; mcap: 26.02 -> 26.75; m.peTTM: 15.5 -> 15.8; m.peFwd: 15 -> 15.7; m.evEbitda: 9.8 -> 10.0; m.evSales: 1.5 -> 1.6
- `MRK.DE` Merck KGaA: price: 136.45 -> 136.3; mcap: 20.37 -> 20.16
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 523.7; mcap: 5.55 -> 5.33; m.peTTM: 14.5 -> 14.1; m.peFwd: 13.9 -> 13.4; m.evEbitda: 6.4 -> 8.9; m.op: -4.6 -> -18.8
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 85.8; mcap: 2.96 -> 2.95; m.evEbitda: 12.3 -> 13.2; m.evSales: 2.8 -> 2.9; m.gross: 8.3 -> 2.3; m.op: -9.7 -> -17.1; m.net: -5.1 -> -9.9; m.roe: -3.7 -> -7.1; m.revCagrHist: 3.1 -> -11.4
- `CEVA` CEVA: price: 41.08 -> 37.97; mcap: 1.14 -> 1.06; m.peFwd: 49.9 -> 46.2; m.evSales: 8.4 -> 7.6
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 3340.0; mcap: 200.41 -> 164.86; m.peTTM: 60.2 -> 50.6; m.peFwd: 33.1 -> 26.3; m.evEbitda: 54.8 -> 44.2; m.evSales: 10.9 -> 8.8
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 70.5; mcap: 54.37 -> 54.08; m.peTTM: 101.2 -> 100.7; m.peFwd: 52.4 -> 49.2; m.evEbitda: 94.5 -> 88.7; m.evSales: 45.2 -> 42.4
- `UMC` UMC: price: 18.9 -> 21.25; mcap: 47.43 -> 53.32; m.peTTM: 30.5 -> 34.3; m.peFwd: 23.5 -> 26.3
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 144.3; mcap: 22.67 -> 24.48; m.peTTM: 534.4 -> 577.2; m.peFwd: 111.9 -> 115.5; m.evSales: 95.5 -> 96.4
- `285A` Kioxia (via `285A.T`): price: 74560 -> 52110.0; mcap: 253.66 -> 175.59; m.peTTM: 74 -> 51.5; m.evEbitda: 33.2 -> 25.5; m.evSales: 16.8 -> 12.5; m.op: 59.5 -> 59.4
- `SNDK` SanDisk: price: 1643.23 -> 1354.82; mcap: 243.35 -> 200.63; m.peTTM: 56.2 -> 46.3; m.peFwd: 9 -> 6.4; m.evEbitda: 42.6 -> 35.0; m.evSales: 18.2 -> 14.9
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 5370.0; mcap: 68.69 -> 67.67; m.peTTM: 27.2 -> 27.1; m.peFwd: 32.6 -> 32.5; m.evEbitda: 16.8 -> 18.9; m.evSales: 1.9 -> 1.8; m.op: 8 -> 6.4
- `WOLF` Wolfspeed: price: 43.42 -> 29.89; mcap: 2.26 -> 1.55; m.evSales: 3.9 -> 3.0
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 12110.0; mcap: 12.06 -> 10.89; m.peTTM: 19.7 -> 18.2; m.peFwd: 21.6 -> 19.9; m.evEbitda: 10.2 -> 9.3; m.evSales: 1.6 -> 1.5; m.revCagrHist: 8 -> 13.3
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 675.91; mcap: 67.48 -> 72.44; m.peTTM: 82.1 -> 87.6; m.peFwd: 43.5 -> 45.9; m.evEbitda: 61.5 -> 67.2; m.evSales: 10.9 -> 11.9
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 869.4; mcap: 51.19 -> 48.63; m.peTTM: 45 -> 43.1; m.peFwd: 33.6 -> 31.3; m.evEbitda: 39.8 -> 38.1; m.evSales: 13.6 -> 13.0
- `TER` Teradyne: price: 347.59 -> 322.36; mcap: 54.41 -> 50.46; m.peTTM: 64.5 -> 59.9; m.peFwd: 36.6 -> 32.8; m.evEbitda: 46.7 -> 43.3; m.evSales: 14.3 -> 13.3
- `COHU` Cohu: price: 54.47 -> 51.19; mcap: 2.57 -> 2.41; m.peFwd: 37.4 -> 34.6; m.evSales: 5 -> 4.7
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 1835.0; mcap: 28.4 -> 24.04; m.peTTM: 77.6 -> 58.0; m.peFwd: 36.3 -> 28.8; m.evEbitda: 74.6 -> 62.4; m.evSales: 28 -> 23.4
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 160.5; mcap: 9.31 -> 8.59; m.peTTM: 66.9 -> 61.7; m.peFwd: 33.6 -> 30.7; m.evEbitda: 53.5 -> 48.9; m.evSales: 4.9 -> 4.5
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 225.5; mcap: 26.42 -> 20.43; m.peTTM: 151.2 -> 117.4; m.peFwd: 47.6 -> 35.8; m.evEbitda: 109.2 -> 85.1; m.evSales: 36.1 -> 28.1
- `KLIC` Kulicke & Soffa: price: 102.03 -> 97.22; mcap: 5.34 -> 5.09; m.peTTM: 99.1 -> 94.4; m.peFwd: 24.1 -> 22.9; m.evEbitda: 41.8 -> 52.6; m.evSales: 6.4 -> 6.0; m.gross: 53.6 -> 49.8
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 17055.0; mcap: 4.46 -> 4.26; m.peTTM: 29.1 -> 28.2; m.peFwd: 28.9 -> 28.0; m.evEbitda: 16.5 -> 16.6
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 79.3; mcap: 1.97 -> 1.73; m.peTTM: 30.3 -> 42.9; m.peFwd: 26.1 -> 22.2; m.evEbitda: 32 -> 28.2; m.evSales: 3.5 -> 3.1
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 63.7; mcap: 13.29 -> 14.28; m.peTTM: 62.4 -> 67.1; m.peFwd: 75.1 -> 80.6; m.evEbitda: 20.6 -> 22.5; m.evSales: 3.8 -> 4.1
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 162.0; mcap: 6.14 -> 7.2; m.peTTM: 41.5 -> 999; m.peFwd: 26.5 -> 24.2; m.evEbitda: 9.9 -> 18.7; m.evSales: 3.9 -> 4.3; m.gross: 9.5 -> 11.4; m.op: 7.3 -> 9.4; m.net: 8.5 -> -1.4; m.roe: 14.8 -> -2.4; m.revCagrHist: 17.9 -> 21.3
- `6239` Powertech (via `6239.TW`): price: 309 -> 266.5; mcap: 7.2 -> 6.09; m.peTTM: 41.5 -> 31.8; m.peFwd: 16.4 -> 14.4; m.evEbitda: 11.7 -> 11.2; m.evSales: 3.2 -> 3.0
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 1105.0; mcap: 16.1 -> 22.08; m.peTTM: 259 -> 234.1; m.peFwd: 28.2 -> 29.0; m.evEbitda: 53.6 -> 73.1; m.evSales: 12.6 -> 17.1
- `3036` WT Micro (via `3036.TW`): price: 225 -> 187.0; mcap: 9.04 -> 7.36; m.peTTM: 21.8 -> 16.3; m.peFwd: 7.6 -> 6.4; m.evEbitda: 13.3 -> 11.0; m.evSales: 0.3 -> 0.2
- `3702` WPG Holdings (via `3702.TW`): mcap: 5.64 -> 5.53; m.peTTM: 19.1 -> 19.0; m.evEbitda: 13.7 -> 14.2
- `3132` Macnica (via `3132.T`): price: 3193 -> 3201.0; mcap: 3.55 -> 3.52; m.peTTM: 20.5 -> 20.6; m.evEbitda: 13.1 -> 13.0
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 21.44; mcap: 35.84 -> 33.92; m.peTTM: 20.8 -> 19.7; m.peFwd: 13.4 -> 11.7; m.evEbitda: 65.9 -> 57.4; m.evSales: 3.5 -> 3.2; m.op: 4.1 -> 5.6
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 27.58; mcap: 70.06 -> 74.58; m.peTTM: 14.2 -> 15.3; m.peFwd: 14.6 -> 15.8; m.evEbitda: 18.3 -> 18.7
- `HPQ` HP Inc.: price: 24.69 -> 24.84; mcap: 22.58 -> 22.72; m.peTTM: 9.1 -> 9.2; m.peFwd: 8.2 -> 8.3
- meta: data-date stamped to 2026-07-20 in hero/footer

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 25 · skipped: 0 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 46.17; mcap: 6.08 -> 6.12; m.peTTM: 208.5 -> 200.7; m.peFwd: 49.8 -> 49.9; m.evEbitda: 50.4 -> 50.7
- `RKLB` Rocket Lab: price: 105.05 -> 67.62; mcap: 65.64 -> 42.25; m.evSales: 87.6 -> 55.8
- `LMT` Lockheed Martin: price: 525.02 -> 508.77; mcap: 121.05 -> 117.3; m.peTTM: 25.4 -> 24.6; m.peFwd: 16.4 -> 15.9; m.evEbitda: 17.5 -> 17.0; m.evSales: 1.9 -> 1.8
- `NOC` Northrop Grumman: price: 542.14 -> 521.57; mcap: 77 -> 74.08; m.peTTM: 17 -> 16.3; m.peFwd: 18 -> 17.3; m.evEbitda: 12.7 -> 12.3; m.evSales: 2.2 -> 2.1
- `BA` Boeing: price: 209 -> 214.03; mcap: 164.76 -> 168.72; m.peTTM: 82.6 -> 84.6; m.peFwd: 50 -> 52.7
- `RTX` RTX Corp: price: 177.41 -> 193.51; mcap: 238.92 -> 260.6; m.peTTM: 34 -> 36.4; m.peFwd: 23.4 -> 25.5; m.evEbitda: 17.9 -> 19.3; m.evSales: 3 -> 3.3
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 194.32; mcap: 159.08 -> 175.03; m.peTTM: 27.6 -> 30.7; m.peFwd: 20.4 -> 22.6; m.evEbitda: 17.8 -> 19.8; m.evSales: 1.9 -> 2.1
- `HEI` Heico: price: 320.88 -> 342.66; mcap: 44.81 -> 47.88; m.peTTM: 57.1 -> 61.3; m.peFwd: 46.9 -> 49.5; m.evEbitda: 34.8 -> 37.0; m.evSales: 9.7 -> 10.4
- `TDG` TransDigm: price: 1212.36 -> 1214.43; mcap: 67.81 -> 67.93; m.peFwd: 25.8 -> 25.9
- `MRCY` Mercury Systems: price: 106.81 -> 96.08; mcap: 6.41 -> 5.77; m.peFwd: 69.7 -> 62.2; m.evEbitda: 70.3 -> 63.6; m.evSales: 7 -> 6.3
- `RDW` Redwire: price: 14.87 -> 8.45; mcap: 2.96 -> 2.02; m.evSales: 8.1 -> 4.7
- `ASTS` AST SpaceMobile: price: 87.32 -> 57.8; mcap: 33.89 -> 22.43; m.evSales: 99 -> 209.7
- `IRDM` Iridium: price: 45.61 -> 46.68; mcap: 4.82 -> 4.95; m.peTTM: 46.1 -> 47.2; m.peFwd: 33 -> 39.4; m.evEbitda: 14.8 -> 15.1; m.evSales: 7.4 -> 7.5
- `SATS` EchoStar: price: 115.24 -> 103.92; mcap: 33.4 -> 30.12; m.evEbitda: 38.5 -> 35.7; m.evSales: 4.1 -> 3.8
- `VSAT` Viasat: price: 61.5 -> 71.48; mcap: 8.4 -> 9.76; m.peFwd: 152.5 -> 177.2; m.evEbitda: 9.6 -> 10.6; m.evSales: 2.9 -> 3.2
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 7.37; mcap: 3.15 -> 2.91; m.evEbitda: 7.9 -> 7.7; m.evSales: 3.1 -> 3.0
- `PL` Planet Labs: price: 30.72 -> 22.47; mcap: 10.95 -> 8.01; m.evSales: 31.9 -> 23.1
- `BKSY` BlackSky: price: 31.79 -> 22.19; mcap: 1.18 -> 0.82; m.evSales: 13 -> 9.4
- `SPIR` Spire Global: price: 16.37 -> 12.14; mcap: 0.63 -> 0.47; m.peTTM: 10.3 -> 7.6; m.evSales: 9.4 -> 6.8
- `LHX` L3Harris: price: 303 -> 282.01; mcap: 56.45 -> 52.54; m.peTTM: 32.9 -> 30.6; m.peFwd: 22.2 -> 20.7; m.evEbitda: 34.5 -> 32.3; m.evSales: 5.8 -> 5.4
- `KTOS` Kratos Defense: price: 54.82 -> 46.03; mcap: 10.28 -> 8.63; m.peTTM: 322.5 -> 270.8; m.peFwd: 51.1 -> 42.2; m.evEbitda: 110.8 -> 90.5; m.evSales: 6.4 -> 5.2
- `GRMN` Garmin: price: 231.72 -> 249.56; mcap: 44.69 -> 48.13; m.peTTM: 26.5 -> 27.9; m.peFwd: 22.4 -> 24.2; m.evEbitda: 19.5 -> 21.1; m.evSales: 5.7 -> 6.1
- `LUNR` Intuitive Machines: price: 26.54 -> 13.52; mcap: 4.26 -> 2.17; m.evSales: 16.6 -> 10.3
- `LDOS` Leidos: price: 121.69 -> 106.48; mcap: 15.31 -> 13.39; m.peTTM: 11.1 -> 9.8; m.peFwd: 9.3 -> 8.1; m.evEbitda: 9.1 -> 8.3; m.evSales: 1.3 -> 1.1
- meta: data-date stamped to 2026-07-20 in hero/footer
