# Data refresh report

- **As of:** 2026-08-03
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 238 changed · 4 skipped · 3 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 200.75; mcap: 4854.37 -> 4862.37; m.peTTM: 30.7 -> 30.8; m.peFwd: 15.7 -> 15.6
- `AVGO` Broadcom: price: 372.1 -> 389.28; mcap: 1770.3 -> 1852.03; m.peTTM: 61.7 -> 65.0; m.peFwd: 19.2 -> 20.0; m.evEbitda: 43.3 -> 45.1; m.evSales: 24.1 -> 25.1
- `AMD` AMD: price: 452.4 -> 476.15; m.peTTM: 151.3 -> 158.7; m.peFwd: 34.6 -> 34.3; m.evEbitda: 98.1 -> 103.4; m.evSales: 19.5 -> 20.5
- `MU` Micron: price: 891.88 -> 823.03; m.peTTM: 42.2 -> 18.6; m.peFwd: 8 -> 5.3; m.evEbitda: 27.2 -> 13.3; m.evSales: 17.2 -> 10.1; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 180.35; mcap: 191.09 -> 227.09; m.peTTM: 52.3 -> 62.2; m.peFwd: 34.1 -> 40.4; m.evEbitda: 42.2 -> 50.7; m.evSales: 18.4 -> 22.1
- `COHR` Coherent: price: 354.77 -> 262.89; mcap: 69.41 -> 51.43; m.peTTM: 169.7 -> 125.2; m.peFwd: 43.8 -> 31.7; m.evEbitda: 53.9 -> 40.2; m.evSales: 10.7 -> 8.0
- `CIEN` Ciena: price: 434.65 -> 377.05; mcap: 61.53 -> 53.37; m.peTTM: 145.4 -> 124.9; m.peFwd: 45.2 -> 39.1; m.evEbitda: 78.8 -> 68.4; m.evSales: 11.1 -> 9.7
- `SMCI` Super Micro: price: 29.27 -> 28.4; mcap: 17.6 -> 18.37; m.peTTM: 21.4 -> 14.9; m.peFwd: 9 -> 8.6; m.evEbitda: 16.1 -> 15.8; m.evSales: 0.8 -> 0.7
- `DELL` Dell Technologies: price: 369.83 -> 405.37; mcap: 239.69 -> 261.93; m.peTTM: 29.5 -> 32.2; m.peFwd: 17.5 -> 18.6; m.evEbitda: 18.7 -> 20.1; m.evSales: 1.9 -> 2.1; m.op: 8.3 -> 8.9
- `VRT` Vertiv: price: 280.98 -> 241.57; mcap: 107.93 -> 93.0; m.peTTM: 70.8 -> 54.7; m.peFwd: 31.7 -> 26.7; m.evEbitda: 45.6 -> 34.8; m.evSales: 10 -> 8.1; m.gross: 37.2 -> 38.0; m.op: 16.4 -> 20.4; m.net: 14.4 -> 15.1; m.roe: 45.1 -> 43.9; m.revCagrHist: 30.1 -> 24.1; d.revPS: 28.37 -> 29.97
- `EQIX` Equinix: price: 1038.33 -> 1019.28; mcap: 102.4 -> 100.57; m.peTTM: 72 -> 65.8; m.peFwd: 54 -> 54.7; m.evEbitda: 29.1 -> 27.1; m.evSales: 13.1 -> 12.4; m.gross: 51.6 -> 52.0; m.op: 24.3 -> 27.0; m.net: 14.9 -> 15.5; m.roe: 10.1 -> 10.7; m.revCagrHist: 12.1 -> 16.7; d.revPS: 97.1 -> 100.75
- `DLR` Digital Realty: price: 180.78 -> 188.52; mcap: 64.66 -> 70.93; m.peTTM: 47.8 -> 238.6; m.peFwd: 63.1 -> 64.3; m.evEbitda: 28.8 -> 28.3; m.evSales: 13.2 -> 13.4; m.gross: 55.3 -> 57.0; m.op: 17.2 -> 25.9; m.net: 21.8 -> 11.8; m.roe: 5.7 -> 2.9; m.revCagrHist: 16.7 -> 29.9; d.revPS: 18.47 -> 19.53
- `MSFT` Microsoft: price: 397.36 -> 464.72; mcap: 2951.76 -> 3450.8; m.peTTM: 23.7 -> 25.9; m.peFwd: 20.5 -> 20.0; m.evEbitda: 16.3 -> 18.0; m.evSales: 9.4 -> 10.6; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `ORCL` Oracle: price: 201.26 -> 129.87; mcap: 578.83 -> 374.09; m.peTTM: 36.1 -> 22.3; m.peFwd: 18.7 -> 11.9; m.evEbitda: 25.8 -> 16.9; m.evSales: 11 -> 7.6; m.gross: 67.1 -> 65.8; m.op: 32.7 -> 36.2; m.net: 25.3 -> 25.4; m.roe: 57.6 -> 53.4; m.revCagrHist: 21.7 -> 20.6; d.revPS: 22.54 -> 23.55
- meta: data-date stamped to 2026-08-03 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1148.84; m.peTTM: 40.3 -> 40.8; m.evEbitda: 29 -> 29.3; m.evSales: 14.6 -> 14.7
- `NVO` Novo Nordisk: price: 42.81 -> 47.08; mcap: 189.61 -> 208.18; m.peTTM: 10 -> 11.2; m.peFwd: 12.9 -> 14.4; m.evEbitda: 1.8 -> 1.9
- `VKTX` Viking Therapeutics: price: 27.75 -> 31.74; mcap: 3.22 -> 3.7; m.roe: -70 -> -88.9
- `AMGN` Amgen: price: 337.73 -> 385.16; mcap: 182.28 -> 207.87; m.peTTM: 24 -> 26.8; m.peFwd: 14.4 -> 16.4; m.evEbitda: 13.5 -> 15.0; m.evSales: 6.1 -> 6.8
- `HIMS` Hims & Hers: price: 27.78 -> 27.77; m.peFwd: 31.2 -> 21.3; m.evEbitda: 81.7 -> 81.6
- `PFE` Pfizer: price: 25.6 -> 25.01; m.peTTM: 19.5 -> 19.1; m.peFwd: 9 -> 8.8; m.evEbitda: 7.8 -> 7.6
- `MRK` Merck: price: 119.09 -> 130.2; m.peTTM: 33.5 -> 36.7; m.peFwd: 12.5 -> 13.5; m.evEbitda: 11.4 -> 12.4; m.evSales: 5.1 -> 5.5
- `ABBV` AbbVie: price: 224.95 -> 250.94; mcap: 397.44 -> 443.36; m.peTTM: 111.4 -> 70.9; m.peFwd: 13.8 -> 15.4; m.evEbitda: 15.4 -> 16.5; m.evSales: 7.3 -> 7.9; m.gross: 72 -> 72.8; m.op: 32.2 -> 39.6; m.net: 5.8 -> 9.8; m.revCagrHist: 12.4 -> 10.2; d.revPS: 35.5 -> 36.39
- `RHHBY` Roche: price: 50.23 -> 54.67; mcap: 323.53 -> 348.47; m.peTTM: 19.9 -> 23.2; m.peFwd: 15.6 -> 16.4; m.evEbitda: 14.3 -> 15.7; m.evSales: 5.4 -> 6.0; m.gross: 74.5 -> 74.2; m.op: 30 -> 36.2; m.net: 20.3 -> 19.6; m.roe: 37.3 -> 38.1; m.revCagrHist: -0.4 -> -1.2
- `TMO` Thermo Fisher: price: 482.04 -> 574.3; m.peTTM: 26.5 -> 30.9; m.peFwd: 17.7 -> 20.9; m.evEbitda: 19.4 -> 21.4; m.evSales: 4.8 -> 5.4; m.gross: 40.9 -> 41.0; m.op: 17.9 -> 18.8; m.net: 15.2 -> 15.0; m.revCagrHist: 6.2 -> 10.5; d.revPS: 120.36 -> 123.89
- `DHR` Danaher: price: 183.63 -> 194.98; mcap: 129.97 -> 137.07; m.peTTM: 36.5 -> 34.7; m.peFwd: 20.2 -> 21.0; m.evEbitda: 18.1 -> 20.0; m.evSales: 5.8 -> 6.4; m.gross: 59 -> 58.8; m.op: 22.9 -> 19.8; m.net: 14.9 -> 15.9; m.roe: 7.1 -> 7.6; m.revCagrHist: 3.7 -> 5.5; d.revPS: 34.87 -> 35.47
- `ISRG` Intuitive Surgical: price: 412.02 -> 353.33; mcap: 145.92 -> 126.59; m.peTTM: 50 -> 40.5; m.peFwd: 34.9 -> 29.3; m.evEbitda: 36.4 -> 28.6; m.evSales: 13.4 -> 10.9; m.gross: 66.3 -> 66.7; m.op: 30.9 -> 33.6; m.net: 28.2 -> 28.4; m.roe: 17.2 -> 17.4; m.revCagrHist: 23 -> 18.5; d.revPS: 29.7 -> 31.07
- `DXCM` Dexcom: price: 74.77 -> 83.45; mcap: 28.85 -> 31.49; m.peTTM: 32.1 -> 33.0; m.peFwd: 24.3 -> 26.8; m.evEbitda: 21.5 -> 22.1; m.evSales: 5.8 -> 6.2; m.gross: 61.5 -> 62.5; m.op: 21.4 -> 24.3; m.net: 19.3 -> 20.1; m.roe: 35.6 -> 38.5; m.revCagrHist: 15 -> 13.1; d.revPS: 12.39 -> 12.87
- meta: data-date stamped to 2026-08-03 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 146.26; mcap: 40.57 -> 38.59; m.peTTM: 56.4 -> 999; m.peFwd: 31 -> 43.1; m.evEbitda: 20 -> 52.1; m.evSales: 9 -> 6.0; m.gross: 85 -> 85.8; m.op: -7.1 -> -13.9; m.net: 12.7 -> -16.3; m.roe: 6.7 -> -7.8; m.revCagrHist: -30.8 -> -17.3; d.revPS: 23.92 -> 22.82
- `HOOD` Robinhood: price: 86.36 -> 86.56; mcap: 77.77 -> 77.82; m.peTTM: 41.9 -> 38.3; m.peFwd: 30.8 -> 27.5; m.evSales: 18 -> 15.6; m.gross: 88 -> 91.9; m.op: 38.5 -> 43.9; m.net: 41.1 -> 42.0; m.roe: 21.5 -> 23.6; m.revCagrHist: 15.1 -> 32.3; d.revPS: 5.17 -> 5.5
- `MARA` MARA Holdings: price: 12.62 -> 11.32; mcap: 4.81 -> 4.32; m.evSales: 5.6 -> 7.3; m.gross: 40 -> 45.3
- `RIOT` Riot Platforms: price: 24.08 -> 20.17; mcap: 9.11 -> 7.63; m.evSales: 14 -> 12.7; m.gross: 35 -> 32.3
- `CLSK` CleanSpark: price: 14.9 -> 13.76; mcap: 3.82 -> 3.53; m.evSales: 7 -> 6.8; m.gross: 42 -> 50.7
- `IREN` IREN Limited: price: 51.52 -> 36.8; mcap: 18.41 -> 13.15; m.peTTM: 69.6 -> 47.8; m.evEbitda: 20 -> 101.3; m.evSales: 30 -> 19.7; m.gross: 45 -> 68.4
- `MSTR` Strategy: price: 115.35 -> 93.28; mcap: 40.76 -> 34.08; m.peFwd: 25.9 -> 20.9; m.evSales: 113.1 -> 107.2; m.gross: 68.1 -> 67.6; m.roe: -30.8 -> -63.6; m.revCagrHist: 11.9 -> 6.9; d.revPS: 1.65 -> 1.57
- `GLXY` Galaxy Digital: price: 30.15 -> 21.01; mcap: 11.76 -> 8.19; m.peFwd: 322.2 -> 999; m.evEbitda: 12 -> 0.1; m.evSales: 5 -> 0.1
- `CRCL` Circle Internet: price: 78.93 -> 62.61; mcap: 21.1 -> 16.74; m.peFwd: 35.4 -> 32.0; m.evSales: 8 -> 4.9; m.gross: 40 -> 8.1
- `BLK` BlackRock: price: 1010.68 -> 1090.39; m.peTTM: 25.4 -> 26.1; m.peFwd: 16.6 -> 16.9; m.evSales: 7 -> 6.5; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 176.03
- meta: data-date stamped to 2026-08-03 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 331.83; mcap: 214.52 -> 270.44; m.peTTM: 226.9 -> 286.1; m.peFwd: 63.9 -> 80.4; m.evEbitda: 143.9 -> 181.6; m.evSales: 20.1 -> 25.4
- `CRWD` CrowdStrike: price: 647.74 -> 190.86; mcap: 164.89 -> 194.34; m.peFwd: 103.6 -> 122.1; m.evSales: 31.6 -> 37.4; d.revPS: 20.22 -> 5.06
- `FTNT` Fortinet: price: 138.88 -> 161.95; mcap: 101.75 -> 118.82; m.peTTM: 53.8 -> 57.2; m.peFwd: 40.5 -> 43.2; m.evEbitda: 41.9 -> 44.4; m.evSales: 13.9 -> 15.3; m.gross: 80.3 -> 80.2; m.op: 31.3 -> 33.6; m.net: 27.5 -> 28.2; m.roe: 132.4 -> 117.4; m.revCagrHist: 20.1 -> 25.6; d.revPS: 9.47 -> 10.14
- `ZS` Zscaler: price: 124.73 -> 151.2; mcap: 20.17 -> 24.45; m.peFwd: 27.1 -> 32.9; m.evSales: 5.8 -> 7.2
- `NET` Cloudflare: price: 219.67 -> 278.98; mcap: 77.97 -> 99.02; m.peFwd: 140.8 -> 176.5; m.evSales: 33.1 -> 42.1
- `OKTA` Okta: price: 114.92 -> 141.93; mcap: 19.97 -> 24.67; m.peTTM: 83.3 -> 102.8; m.peFwd: 26.9 -> 33.2; m.evEbitda: 66.7 -> 84.2; m.evSales: 5.9 -> 7.5
- `S` SentinelOne: price: 14.79 -> 19.06; mcap: 5.07 -> 6.53; m.peFwd: 29.9 -> 38.6; m.evSales: 4.2 -> 5.6
- `RPD` Rapid7: price: 7.21 -> 9.65; mcap: 0.48 -> 0.64; m.peTTM: 20.6 -> 27.6; m.peFwd: 4.6 -> 6.2; m.evEbitda: 13.6 -> 16.5; m.evSales: 0.9 -> 1.1
- `QLYS` Qualys: price: 110.2 -> 144.75; mcap: 3.88 -> 5.1; m.peTTM: 19.7 -> 25.9; m.peFwd: 13.3 -> 17.5; m.evEbitda: 14.1 -> 19.1; m.evSales: 5.1 -> 6.8
- `TENB` Tenable: price: 26.8 -> 32.64; mcap: 2.96 -> 3.6; m.peTTM: 999 -> 544.0; m.peFwd: 12.3 -> 14.9; m.evEbitda: 74.4 -> 61.4; m.evSales: 3 -> 3.6; m.gross: 78.2 -> 78.1; m.op: 4.3 -> 4.9; m.net: -1.2 -> 0.6; m.roe: -3.7 -> 2.5; m.revCagrHist: 9.6 -> 8.6; d.revPS: 8.59 -> 8.96
- `GEN` Gen Digital: price: 24.62 -> 27.45; mcap: 14.83 -> 16.43; m.peTTM: 15.7 -> 17.5; m.peFwd: 7.5 -> 8.4; m.evEbitda: 9.5 -> 10.2; m.evSales: 4.5 -> 4.9
- meta: data-date stamped to 2026-08-03 in hero

## finance.js

- changed: 27 · skipped: 2 · review: 1

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 152.48; mcap: 79.36 -> 85.6; m.peTTM: 20.6 -> 21.5; m.peFwd: 15.9 -> 17.4; m.evEbitda: 18 -> 15.7; m.evSales: 9.5 -> 10.0; m.op: 57.3 -> 52.6; m.net: 37.7 -> 38.2; m.roe: 13.9 -> 14.1; m.revCagrHist: 20.4 -> 4.8; d.revPS: 18.3 -> 18.59
- `CME` CME Group: price: 263.8 -> 267.79; mcap: 95.32 -> 96.29; m.peTTM: 22.5 -> 22.7; m.peFwd: 20.4 -> 20.7; m.evEbitda: 20 -> 20.5; m.evSales: 16 -> 14.5; m.op: 69.8 -> 65.0; m.net: 63.3 -> 63.4; m.roe: 15.9 -> 15.8; m.revCagrHist: 14.4 -> 0.8; d.revPS: 18.75 -> 18.78
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 83.98; mcap: 58.77 -> 55.03; m.peTTM: 38 -> 1.9; m.peFwd: 16.8 -> 15.4; m.evSales: 7.5 -> 5.5; m.gross: 68 -> 88.7; m.op: 24.9 -> 29.0; m.net: 13.4 -> 14.6; m.roe: 6.4 -> 7.7; m.revCagrHist: 4.6 -> 6.7
- `SPGI` S&P Global: price: 426.38 -> 411.93; mcap: 126.21 -> 121.44; m.peTTM: 27 -> 25.1; m.peFwd: 19.2 -> 20.4; m.evEbitda: 24 -> 17.0; m.evSales: 12 -> 8.6; m.gross: 73 -> 70.9; m.op: 44.3 -> 44.8; m.net: 30.4 -> 30.5; m.roe: 13.9 -> 14.3; d.revPS: 52.03 -> 53.79
- `MSCI` MSCI Inc: price: 608.52 -> 572.24; mcap: 44.26 -> 41.6; m.peTTM: 34.8 -> 31.3; m.peFwd: 27 -> 25.5; m.evEbitda: 28 -> 24.4; m.evSales: 18 -> 14.3; m.gross: 82 -> 83.0; m.op: 53.7 -> 56.3; m.revCagrHist: 14.1 -> 12.2; d.revPS: 42.95 -> 44.9
- `MCO` Moody's: price: 450.69 -> 478.38; mcap: 78.72 -> 82.85; m.peTTM: 32.4 -> 30.4; m.peFwd: 24.2 -> 25.3; m.evEbitda: 25 -> 22.0; m.evSales: 13 -> 10.9; m.gross: 72 -> 75.0; m.op: 45.7 -> 49.5; m.net: 31.7 -> 34.3; m.roe: 71.4 -> 76.9; m.revCagrHist: 8.1 -> 15.1; d.revPS: 44.16 -> 46.13
- `V` Visa: price: 322.96 -> 366.13; mcap: 614.19 -> 683.58; m.peTTM: 28.2 -> 31.2; m.peFwd: 21.7 -> 24.5; m.evEbitda: 24 -> 22.0; m.evSales: 20 -> 15.4; m.gross: 80 -> 97.7; m.op: 67.3 -> 66.1; m.net: 51.7 -> 50.8; m.roe: 60.3 -> 61.2; m.revCagrHist: 17.1 -> 14.4; d.revPS: 22.45 -> 23.4
- `MA` Mastercard: price: 489.08 -> 573.1; mcap: 432.14 -> 502.04; m.peTTM: 28.3 -> 31.5; m.peFwd: 21.5 -> 25.0; m.evEbitda: 28 -> 23.2; m.evSales: 24 -> 14.7; m.op: 60.8 -> 61.1; m.net: 45.9 -> 46.3; m.roe: 232.1 -> 241.2; m.revCagrHist: 15.8 -> 14.1; d.revPS: 37.72 -> 39.27
- `PYPL` PayPal: price: 40.7 -> 57.21; mcap: 35.9 -> 48.94; m.peTTM: 7.6 -> 10.8; m.peFwd: 7.1 -> 9.9; m.evEbitda: 9 -> 8.0; m.evSales: 2 -> 1.5; m.gross: 46 -> 40.5; m.op: 18 -> 17.0; m.net: 15 -> 14.4; m.roe: 25.1 -> 24.5; m.revCagrHist: 7.2 -> 4.8; d.revPS: 35.86 -> 37.18
- `JPM` JPMorgan Chase: price: 309.14 -> 351.79; m.peTTM: 14.8 -> 15.1; m.peFwd: 13.1 -> 14.2; m.evSales: 3.5 -> 2.5; m.op: 43.7 -> 50.4; m.net: 33.9 -> 34.9; m.roe: 16.5 -> 17.8; m.revCagrHist: 12.7 -> 30.4; d.revPS: 63.1 -> 68.35
- `BAC` Bank of America: price: 54.54 -> 61.95; m.peTTM: 13.5 -> 14.3; m.peFwd: 10.8 -> 11.7; m.evSales: 3 -> 3.3; m.op: 36 -> 38.3; m.net: 29 -> 29.5; m.roe: 10.6 -> 11.2; m.revCagrHist: 8.1 -> 16.8; d.revPS: 14.78 -> 15.59
- `WFC` Wells Fargo: price: 81.97 -> 86.45; mcap: 250.84 -> 261.42; m.peTTM: 12.7 -> 12.6; m.peFwd: 10.4 -> 11.0; m.evSales: 3.2 -> 3.1; m.op: 29.4 -> 37.4; m.net: 26.7 -> 27.2; m.roe: 12 -> 12.6; m.revCagrHist: 5.7 -> 9.5; d.revPS: 25.74 -> 26.74
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 15.76; mcap: 296.75 -> 363.72; m.peTTM: 14.2 -> 17.5; m.peFwd: 9.1 -> 11.3
- `GS` Goldman Sachs: price: 1001.29 -> 1018.38; m.peTTM: 18.3 -> 15.7; m.peFwd: 15.3 -> 13.8; m.evSales: 3 -> 2.1; m.gross: 55 -> 82.1; m.op: 38.6 -> 42.3; m.net: 29.4 -> 31.0; m.roe: 14.5 -> 17.0; m.revCagrHist: 14.5 -> 42.5; d.revPS: 199.49 -> 221.5
- `MS` Morgan Stanley: price: 206.66 -> 210.42; mcap: 325.96 -> 330.78; m.peTTM: 18.7 -> 17.0; m.peFwd: 16.3 -> 15.4; m.evSales: 3.4 -> 3.3; m.gross: 58 -> 87.6; m.op: 40.6 -> 41.6; m.net: 24.8 -> 25.9; m.revCagrHist: 16.3 -> 28.0; d.revPS: 46.66 -> 49.81
- `SCHW` Charles Schwab: price: 89.27 -> 105.24; mcap: 155.25 -> 183.03; m.peTTM: 17.7 -> 19.2; m.peFwd: 12.4 -> 13.4; m.evSales: 5 -> 5.6; m.gross: 70 -> 97.5; m.op: 49.4 -> 51.9; m.net: 38 -> 38.8; m.roe: 19.1 -> 20.3; m.revCagrHist: 15.8 -> 20.9; d.revPS: 13.89 -> 14.75
- `IBKR` Interactive Brokers: price: 85.42 -> 87.99; mcap: 144.89 -> 149.25; m.peTTM: 36.7 -> 34.9; m.peFwd: 29.7 -> 27.6; m.gross: 90 -> 93.0; m.op: 76.8 -> 76.5; m.net: 16.1 -> 16.5; m.roe: 23.6 -> 24.0; m.revCagrHist: 16.8 -> 22.3; d.revPS: 14.54 -> 15.33
- `HOOD` Robinhood Markets: price: 86.36 -> 86.56; mcap: 77.77 -> 77.82; m.peTTM: 41.9 -> 38.3; m.peFwd: 30.8 -> 27.5; m.evSales: 18 -> 15.6; m.gross: 88 -> 91.9; m.op: 38.5 -> 43.9; m.net: 41.1 -> 42.0; m.roe: 21.5 -> 23.6; m.revCagrHist: 15.1 -> 32.3; d.revPS: 5.17 -> 5.5
- `FUTU` Futu Holdings: price: 92.93 -> 105.12; mcap: 13.03 -> 14.74; m.peTTM: 10.3 -> 11.6; m.peFwd: 7.6 -> 8.6; m.gross: 85 -> 94.4
- `BLK` BlackRock: price: 1010.68 -> 1090.39; m.peTTM: 25.4 -> 26.1; m.peFwd: 16.6 -> 16.9; m.evSales: 7 -> 6.5; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 176.03
- `BX` Blackstone: price: 118.48 -> 127.75; mcap: 144.81 -> 159.0; m.peTTM: 30.4 -> 28.6; m.peFwd: 15.7 -> 17.1; m.evSales: 18 -> 8.2; m.op: 38 -> 54.4; m.net: 21.2 -> 22.7; m.roe: 29.5 -> 31.4; m.revCagrHist: 5.7 -> 28.6; d.revPS: 18.38 -> 19.65
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 511.54; mcap: 1043.23 -> 1103.32; m.peTTM: 14.4 -> 15.2; m.peFwd: 22.5 -> 23.7; m.gross: 30 -> 27.8
- `PGR` Progressive: price: 204.2 -> 211.42; mcap: 119.15 -> 122.92; m.peTTM: 10.4 -> 10.6; m.peFwd: 12.6 -> 13.0; m.evEbitda: 12 -> 8.4; m.evSales: 2.2 -> 1.4; m.gross: 30 -> 18.5; m.op: 16.4 -> 18.2; m.net: 12.9 -> 12.8; m.roe: 37.9 -> 34.9; m.revCagrHist: 8.7 -> 7.3; d.revPS: 152.53 -> 155.48
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 432.5; m.peTTM: 12.3 -> 14.0; m.peFwd: 11.5 -> 13.2; m.evEbitda: 9 -> 7.1; m.evSales: 1.5 -> 1.2; m.gross: 28 -> 24.3
- `AXP` American Express: price: 313.34 -> 336.25; mcap: 213.8 -> 227.07; m.peTTM: 19.6 -> 20.4; m.peFwd: 15.6 -> 16.7; m.evSales: 3.5 -> 3.4; m.gross: 55 -> 62.3; m.op: 21.2 -> 20.3; m.net: 16.3 -> 16.1; m.revCagrHist: 11.6 -> 12.8; d.revPS: 99.58 -> 103.45
- `INTU` Intuit: price: 284.22 -> 316.07; mcap: 77.74 -> 86.46; m.peTTM: 17.3 -> 19.3; m.peFwd: 10.4 -> 11.6; m.evEbitda: 12.1 -> 13.5; m.evSales: 3.7 -> 4.1
- meta: data-date stamped to 2026-08-03 in hero/footer

**Needs review**
- `ALV` Allianz — currency **EUR**: USD mcap not derivable (missing shares/FX); mcap left unchanged

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `BK` BNY — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 86.38; m.peTTM: 96 -> 81.5; m.peFwd: 50 -> 45.1; m.evEbitda: 46.2 -> 47.3; m.evSales: 11.7 -> 10.9; m.gross: 36.8 -> 35.1; m.op: 18.2 -> 9.1; m.net: 18.4 -> 10.2; m.roe: 9.6 -> 5.1; m.revCagrHist: 7.1 -> -7.2
- `UEC` Uranium Energy: price: 9.42 -> 9.6; m.evSales: 206.7 -> 211.1
- `NXE` NexGen Energy: price: 9.27 -> 9.15; mcap: 6.14 -> 6.06
- `SMR` NuScale Power: price: 9.29 -> 8.42; mcap: 3.22 -> 2.91; m.evSales: 121.8 -> 105.7
- `OKLO` Oklo: price: 54.02 -> 38.83; mcap: 9.4 -> 6.76
- `BWXT` BWX Technologies: price: 183 -> 168.7; mcap: 16.77 -> 15.46; m.peTTM: 48.9 -> 45.0; m.peFwd: 35.2 -> 32.5; m.evEbitda: 39.3 -> 36.5; m.evSales: 5.4 -> 5.0
- `LEU` Centrus Energy: price: 146.61 -> 176.93; mcap: 2.88 -> 3.48; m.peTTM: 53.1 -> 64.6; m.peFwd: 36.9 -> 39.2; m.evEbitda: 64.2 -> 81.6; m.evSales: 4.9 -> 6.2
- `CEG` Constellation Energy: price: 242.3 -> 262.75; mcap: 86.53 -> 93.83; m.peTTM: 21.9 -> 22.8; m.peFwd: 17.8 -> 19.6; m.evEbitda: 13.8 -> 14.7; m.evSales: 3.7 -> 3.9
- `VST` Vistra: price: 138.54 -> 148.19; mcap: 46.71 -> 49.97; m.peTTM: 23.2 -> 24.7; m.peFwd: 12.6 -> 14.3; m.evEbitda: 10.1 -> 10.7; m.evSales: 3.5 -> 3.7
- `GEV` GE Vernova: price: 867.09 -> 990.29; mcap: 233 -> 263.75; m.peTTM: 25.3 -> 28.4; m.peFwd: 35.4 -> 39.8; m.evEbitda: 66.8 -> 65.2; m.evSales: 5.8 -> 6.2; m.gross: 20.3 -> 20.6; m.op: 5.5 -> 7.5; m.net: 23.8 -> 23.0; m.roe: 75.7 -> 82.6; m.revCagrHist: 16.3 -> 21.9; d.revPS: 145.56 -> 153.78
- `ETN` Eaton: price: 375.46 -> 415.2; m.peTTM: 36.8 -> 40.7; m.peFwd: 23.9 -> 26.2; m.evEbitda: 26.3 -> 27.4; m.evSales: 5.9 -> 6.1; m.gross: 37.1 -> 36.0; m.op: 16.1 -> 16.6; m.net: 14 -> 12.8; m.roe: 20.8 -> 19.7; m.revCagrHist: 16.8 -> 21.4; d.revPS: 73.34 -> 77.29
- `PWR` Quanta Services: price: 650.92 -> 667.36; mcap: 97.68 -> 100.33; m.peTTM: 89.5 -> 76.4; m.peFwd: 39.5 -> 36.2; m.evEbitda: 39 -> 35.0; m.evSales: 3.4 -> 3.2; m.gross: 15.1 -> 15.5; m.op: 4.2 -> 7.2; m.net: 3.7 -> 4.0; m.roe: 13.5 -> 15.3; m.revCagrHist: 26.3 -> 41.1; d.revPS: 201.93 -> 219.94
- `NEE` NextEra Energy: price: 85.12 -> 86.92; mcap: 177.53 -> 181.31; m.peTTM: 21.6 -> 19.5; m.peFwd: 19.4 -> 19.7; m.evEbitda: 20.6 -> 20.5; m.evSales: 10.5 -> 10.4; m.gross: 61.4 -> 61.0; m.op: 30.2 -> 31.5; m.net: 29.4 -> 32.4; m.roe: 10.3 -> 11.7; m.revCagrHist: 7.3 -> 12.4; d.revPS: 13.45 -> 13.81
- `FSLR` First Solar: price: 249.27 -> 211.03; mcap: 26.78 -> 22.68; m.peTTM: 16.1 -> 21.6; m.peFwd: 10.6 -> 9.2; m.evEbitda: 11 -> 8.9; m.evSales: 4.6 -> 3.9; m.gross: 41.7 -> 44.0; m.op: 33.1 -> 42.6; m.net: 30.7 -> 32.5; m.roe: 18.4 -> 18.5; m.revCagrHist: 23.6 -> -3.7; d.revPS: 50.51 -> 50.1
- meta: data-date stamped to 2026-08-03 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 36.44; mcap: 21.14 -> 13.6; m.peTTM: 145.2 -> 93.4; m.evSales: 102.3 -> 62.1
- `RGTI` Rigetti Computing: price: 19.45 -> 14.95; mcap: 6.46 -> 4.97
- `QBTS` D-Wave Quantum: price: 23.25 -> 18.08; mcap: 8.61 -> 6.7
- `QUBT` Quantum Computing Inc: price: 9.53 -> 8.1; mcap: 2.15 -> 1.83; m.evSales: 269.7 -> 195.2
- `IBM` IBM: price: 272.36 -> 223.65; mcap: 255.99 -> 210.71; m.peTTM: 24.1 -> 19.9; m.peFwd: 20.3 -> 17.0; m.evEbitda: 18.9 -> 16.3; m.evSales: 4.6 -> 3.9; m.gross: 58.4 -> 58.1; m.op: 13.8 -> 16.5; m.net: 15.6 -> 15.5; m.roe: 35.8 -> 34.5; m.revCagrHist: 9.5 -> 1.1; d.revPS: 73.71 -> 73.7
- `GOOGL` Alphabet: price: 356.38 -> 356.13; mcap: 4346.03 -> 4355.45; m.peTTM: 27.2 -> 17.9; m.peFwd: 24.6 -> 24.2; m.evEbitda: 26.6 -> 24.6; m.evSales: 10.1 -> 9.5; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `MSFT` Microsoft: price: 397.36 -> 464.72; mcap: 2951.76 -> 3450.8; m.peTTM: 23.7 -> 25.9; m.peFwd: 20.5 -> 20.0; m.evEbitda: 16.3 -> 18.0; m.evSales: 9.4 -> 10.6; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `HON` Honeywell: price: 205.88 -> 243.05; mcap: 130.46 -> 77.03; m.peTTM: 32.9 -> 9.3; m.peFwd: 18 -> 24.3; m.evEbitda: 18.4 -> 12.1; m.evSales: 4.2 -> 2.7; m.gross: 36.9 -> 36.5; m.op: 21 -> 20.2; m.net: 10.9 -> 21.6; m.roe: 24.3 -> 46.6; m.revCagrHist: 2.4 -> 4.3; d.revPS: 59.25 -> 119.9
- `FORM` FormFactor: price: 115.81 -> 106.2; mcap: 9.03 -> 8.28; m.peTTM: 133.1 -> 73.2; m.peFwd: 41.5 -> 30.6; m.evEbitda: 63.7 -> 43.2; m.evSales: 10.4 -> 8.8; m.gross: 42.2 -> 46.2; m.op: 17.7 -> 24.0; m.net: 8.1 -> 12.8; m.roe: 6.8 -> 11.0; m.revCagrHist: 32 -> 31.9; d.revPS: 10.84 -> 11.61
- `NVDA` NVIDIA: price: 200.42 -> 200.75; mcap: 4854.37 -> 4862.37; m.peTTM: 30.7 -> 30.8; m.peFwd: 15.7 -> 15.6
- meta: data-date stamped to 2026-08-03 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 311.21; mcap: 1433.15 -> 1229.14; m.peTTM: 370.5 -> 285.5; m.peFwd: 152.6 -> 140.2; m.evEbitda: 126.6 -> 111.8; m.evSales: 14.4 -> 11.6; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SERV` Serve Robotics: price: 6.98 -> 4.78; mcap: 0.59 -> 0.41; m.evSales: 68.7 -> 36.0
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 79.52; mcap: 180.91 -> 178.23; m.peTTM: 37.5 -> 36.0; m.peFwd: 29.2 -> 27.7; m.evEbitda: 21.2 -> 20.7; m.evSales: 4.3 -> 4.1; m.gross: 40.4 -> 40.2; m.op: 20.6 -> 16.9; m.net: 14.3 -> 14.1; m.roe: 33.6 -> 32.6; m.revCagrHist: 18.3 -> 14.2
- `6954` Fanuc (via `6954.T`): price: 6691 -> 6114.0; mcap: 38.9 -> 36.4; m.peTTM: 37.5 -> 34.3; m.peFwd: 38.7 -> 35.3; m.evEbitda: 24.1 -> 24.3; m.evSales: 6.5 -> 6.6; m.gross: 38.3 -> 38.4; m.op: 23.9 -> 23.2; m.net: 19.4 -> 20.1; m.roe: 9.4 -> 10.0; m.revCagrHist: 10.6 -> 17.7
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 4935.0; mcap: 9.68 -> 8.17; m.peTTM: 44.1 -> 36.3; m.peFwd: 29.2 -> 24.1; m.evEbitda: 24.2 -> 19.8; m.evSales: 3 -> 2.4; m.gross: 35.3 -> 35.0; m.op: 8.8 -> 6.1; m.net: 6.5 -> 6.1; m.roe: 7.8 -> 7.5; m.revCagrHist: 2 -> 10.6
- `ROK` Rockwell Automation: price: 440.07 -> 480.08; mcap: 48.97 -> 53.42; m.peTTM: 45.7 -> 49.7; m.peFwd: 30.3 -> 32.8; m.evEbitda: 26.7 -> 29.0; m.evSales: 6 -> 6.5
- `EMR` Emerson Electric: price: 137.11 -> 149.82; mcap: 76.8 -> 83.91; m.peTTM: 31.7 -> 34.8; m.peFwd: 19.1 -> 20.9; m.evEbitda: 15.2 -> 16.4; m.evSales: 4.9 -> 5.3
- `SIEGY` Siemens: price: 153.07 -> 162.9; mcap: 235.46 -> 250.58; m.peTTM: 27.5 -> 29.4; m.peFwd: 20.8 -> 24.4; m.evEbitda: 23.9 -> 25.8; m.evSales: 3.6 -> 3.8
- `PH` Parker Hannifin: price: 875.6 -> 976.53; mcap: 110.4 -> 123.13; m.peTTM: 32.3 -> 36.0; m.peFwd: 25.7 -> 28.6; m.evEbitda: 21.8 -> 24.1; m.evSales: 5.7 -> 6.3
- `NOVT` Novanta: price: 154.58 -> 142.55; mcap: 5.51 -> 5.08; m.peTTM: 111.2 -> 101.8; m.peFwd: 37.3 -> 34.4; m.evEbitda: 30.2 -> 27.8; m.evSales: 5.4 -> 5.0
- `CGNX` Cognex: price: 58.69 -> 65.24; mcap: 9.77 -> 10.86; m.peTTM: 69 -> 76.8; m.peFwd: 33.3 -> 36.6; m.evEbitda: 42.1 -> 47.0; m.evSales: 9.1 -> 10.2
- `SYM` Symbotic: price: 41.24 -> 43.05; mcap: 24.89 -> 25.99; m.peFwd: 57.4 -> 59.7; m.evEbitda: 159.3 -> 169.4; m.evSales: 1.4 -> 1.5
- `ZBRA` Zebra Technologies: price: 216.79 -> 293.82; mcap: 10.33 -> 14.0; m.peTTM: 26.2 -> 35.4; m.peFwd: 10.5 -> 14.2; m.evEbitda: 12.7 -> 16.3; m.evSales: 2.3 -> 3.0
- meta: data-date stamped to 2026-08-03 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 2

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 31430.0; mcap: 113.02 -> 145.17; m.peTTM: 48.8 -> 60.8; m.peFwd: 105.2 -> 132.2; m.evEbitda: 34.3 -> 39.8; m.evSales: 15.9 -> 18.8; m.gross: 64.3 -> 65.7; m.op: 46.7 -> 51.7; m.net: 33.3 -> 37.3; m.roe: 57.6 -> 56.9; m.revCagrHist: 41.2 -> 39.3
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 5845.0; mcap: 78 -> 69.35; m.peTTM: 26.7 -> 23.2; m.peFwd: 20.4 -> 17.7; m.evEbitda: 12.7 -> 10.8; m.evSales: 4.3 -> 3.7; m.gross: 34.2 -> 33.9; m.op: 21.4 -> 26.2; m.roe: 10.7 -> 11.2; m.revCagrHist: 1.3 -> 5.4
- `6146` Disco (via `6146.T`): price: 68720 -> 60520.0; mcap: 46.43 -> 41.88; m.peTTM: 55.1 -> 48.6; m.peFwd: 50.5 -> 44.5; m.evEbitda: 36.8 -> 28.3; m.evSales: 16.7 -> 13.1; m.gross: 70.2 -> 70.8; m.op: 44 -> 42.7; m.net: 31 -> 31.6; m.roe: 30 -> 27.4; m.revCagrHist: 22 -> 27.1
- `6963` Rohm (via `6963.T`): price: 4679 -> 4328.0; mcap: 11.25 -> 10.66; m.peFwd: 53.8 -> 49.8; m.evEbitda: 26.4 -> 24.1; m.evSales: 3.7 -> 3.4; m.roe: 1.5 -> -19.2; m.revCagrHist: -3 -> 7.5
- `4004` Resonac (via `4004.T`): price: 15820 -> 14060.0; mcap: 17.84 -> 16.23; m.peTTM: 98.2 -> 87.6; m.peFwd: 63.4 -> 56.4; m.evEbitda: 24.1 -> 22.1; m.evSales: 2.6 -> 2.4
- `6861` Keyence (via `6861.T`): price: 71270 -> 80610.0; mcap: 107.68 -> 124.73; m.peTTM: 38.8 -> 44.0; m.peFwd: 38.2 -> 43.2; m.evSales: 13.8 -> 14.5; m.gross: 83 -> 83.7; m.op: 53.6 -> 54.0; m.net: 38.1 -> 39.2; m.revCagrHist: 17.9 -> 32.8
- `6723` Renesas (via `6723.T`): price: 4222 -> 3905.0; mcap: 47.72 -> 45.2; m.peFwd: 16.4 -> 14.9; m.evEbitda: 23.5 -> 16.7; m.evSales: 6.3 -> 4.7; m.gross: 58.1 -> 58.8; m.op: 24.3 -> 24.8; m.net: -0.7 -> 22.9; m.roe: -0.4 -> 14.0; m.revCagrHist: 23.2 -> 28.5
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 54990.0; mcap: 177.9 -> 159.51; m.peTTM: 50.3 -> 44.0; m.peFwd: 49 -> 43.0; m.evEbitda: 39.1 -> 31.9; m.evSales: 11.3 -> 9.5; m.gross: 45.3 -> 45.6; m.net: 23.5 -> 23.6; m.roe: 29.3 -> 30.9; m.revCagrHist: 8.6 -> 33.3
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 12350.0; mcap: 15.04 -> 14.9; m.peTTM: 26.2 -> 25.4; m.peFwd: 14.6 -> 14.1; m.evEbitda: 16.3 -> 17.1; m.gross: 38.5 -> 38.1; m.op: 25 -> 11.8; m.net: 15.2 -> 14.5; m.roe: 20.3 -> 18.9; m.revCagrHist: 9.1 -> -10.3
- `ASML` ASML Holding: price: 1734.19 -> 1629.0; mcap: 668.39 -> 625.7; m.peTTM: 59.5 -> 55.9; m.peFwd: 36.2 -> 27.6; m.gross: 52.6 -> 52.7; m.op: 36 -> 37.1; m.net: 29.7 -> 30.1; m.roe: 52.2 -> 53.9; m.revCagrHist: 13.2 -> 21.3
- `LRCX` Lam Research: price: 321.8 -> 293.02; mcap: 402.43 -> 366.65; m.peTTM: 60.7 -> 50.8; m.peFwd: 40.4 -> 25.3; m.evEbitda: 51.2 -> 42.2; m.evSales: 18.5 -> 15.7; m.gross: 50 -> 50.5; m.op: 35 -> 37.4; m.net: 30.9 -> 31.3; m.roe: 66.8 -> 65.1; m.revCagrHist: 23.8 -> 30.0; d.revPS: 17.2 -> 18.51
- `KLAC` KLA Corp: price: 2135.64 -> 182.82; mcap: 278.97 -> 238.81; m.peTTM: 60.6 -> 50.0; m.peFwd: 42.4 -> 27.9; m.evEbitda: 47.9 -> 39.6; m.evSales: 21.4 -> 17.7; m.gross: 61.4 -> 61.3; m.op: 41.2 -> 42.5; m.net: 35.7 -> 35.6; m.roe: 95 -> 87.5; m.revCagrHist: 11.5 -> 15.2
- `TSM` TSMC: price: 408.75 -> 404.25; mcap: 2119.97 -> 2096.63; m.peTTM: 35.1 -> 35.6; m.peFwd: 20.9 -> 18.7; m.evEbitda: 5.2 -> 4.5; m.evSales: 3.6 -> 3.2; m.gross: 61.9 -> 64.2; m.op: 58.1 -> 60.3; m.net: 46.5 -> 49.9; m.roe: 36.2 -> 40.0; m.revCagrHist: 35.1 -> 36.0
- `AMAT` Applied Materials: price: 497.01 -> 507.67; mcap: 394.61 -> 403.07; m.peTTM: 46.7 -> 47.8; m.peFwd: 30.6 -> 30.0; m.evEbitda: 42.4 -> 43.4; m.evSales: 13.6 -> 13.9
- `NVDA` NVIDIA: price: 200.42 -> 200.75; mcap: 4854.37 -> 4862.37; m.peTTM: 30.7 -> 30.8; m.peFwd: 15.7 -> 15.6
- `AVGO` Broadcom: price: 372.1 -> 389.28; mcap: 1770.3 -> 1852.03; m.peTTM: 61.7 -> 65.0; m.peFwd: 19.2 -> 20.0; m.evEbitda: 43.3 -> 45.1; m.evSales: 24.1 -> 25.1
- `AMD` AMD: price: 452.4 -> 476.15; m.peTTM: 151.3 -> 158.7; m.peFwd: 34.6 -> 34.3; m.evEbitda: 98.1 -> 103.4; m.evSales: 19.5 -> 20.5
- `INTC` Intel: price: 107.04 -> 90.2; mcap: 537.98 -> 454.97; m.peFwd: 69.6 -> 44.3; m.evEbitda: 39.8 -> 29.2; m.evSales: 10.5 -> 8.6; m.gross: 37.2 -> 38.9; m.op: 6.9 -> 12.2; m.net: -5.9 -> -19.8; m.roe: -2.9 -> -10.7; m.revCagrHist: 7.2 -> 25.4; d.revPS: 11.4 -> 11.62
- `ARM` Arm Holdings: price: 307.43 -> 239.69; mcap: 328.36 -> 255.99; m.peTTM: 357.5 -> 244.6; m.peFwd: 100.2 -> 78.1; m.evEbitda: 120 -> 237.5; m.evSales: 66.1 -> 49.0; m.op: 29.5 -> 7.6; m.net: 18.4 -> 20.2; m.roe: 12 -> 13.4; m.revCagrHist: 20.1 -> 22.4; d.revPS: 4.64 -> 4.85
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 239500.0; mcap: 1118.21 -> 965.08; m.peFwd: 5.2 -> 3.6; m.evEbitda: 13.4 -> 6.9; m.evSales: 4.9 -> 3.2; m.gross: 47.7 -> 57.5; m.op: 42.8 -> 52.2; m.net: 21.5 -> 30.9; m.roe: 18.9 -> 30.8; m.revCagrHist: 69.2 -> 129.9
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 1567000.0; mcap: 960.23 -> 777.61; m.peFwd: 5.1 -> 3.5; m.evEbitda: 15.5 -> 8.0; m.evSales: 10.7 -> 6.1; m.gross: 68.3 -> 70.2; m.op: 71.5 -> 76.3; m.net: 56.9 -> 85.7; m.roe: 61.2 -> 92.7; m.revCagrHist: 198.1 -> 256.8
- `MU` Micron: price: 891.88 -> 823.03; m.peTTM: 42.2 -> 18.6; m.peFwd: 8 -> 5.3; m.evEbitda: 27.2 -> 13.3; m.evSales: 17.2 -> 10.1; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 388.76; mcap: 88.18 -> 74.44; m.peTTM: 105.4 -> 89.4; m.peFwd: 26.7 -> 22.5; m.evEbitda: 56.9 -> 48.8; m.evSales: 11.1 -> 9.5
- `CDNS` Cadence: price: 385.13 -> 340.02; mcap: 106.23 -> 93.64; m.peTTM: 90.2 -> 67.6; m.peFwd: 41 -> 35.7; m.evEbitda: 53.5 -> 44.0; m.evSales: 19.5 -> 16.2; m.gross: 86.1 -> 85.9; m.op: 29.7 -> 28.6; m.net: 21.2 -> 23.6; m.roe: 20.7 -> 23.2; m.revCagrHist: 18.7 -> 24.2; d.revPS: 20.37 -> 21.46
- `QCOM` Qualcomm: price: 191.2 -> 147.61; mcap: 201.52 -> 154.99; m.peTTM: 22.1 -> 16.9; m.peFwd: 17.9 -> 14.3; m.evEbitda: 15.9 -> 13.5; m.evSales: 4.7 -> 3.7; m.gross: 54.8 -> 54.2; m.op: 22.1 -> 18.5; m.net: 22.3 -> 21.0; m.roe: 36.1 -> 33.8; m.revCagrHist: -3.5 -> -4.0; d.revPS: 41.33 -> 41.28
- `GFS` GlobalFoundries: price: 74.82 -> 49.99; mcap: 41.03 -> 27.43; m.peTTM: 50.6 -> 36.0; m.peFwd: 29.7 -> 19.9; m.evEbitda: 19.6 -> 12.9; m.evSales: 5.8 -> 3.8
- `LIN` Linde: price: 509.16 -> 478.38; mcap: 235.41 -> 221.18; m.peTTM: 33.8 -> 30.9; m.peFwd: 25.8 -> 24.4; m.evEbitda: 19.1 -> 17.7; m.evSales: 7.5 -> 6.9; m.gross: 48.8 -> 48.3; m.op: 28.5 -> 28.1; m.roe: 18.2 -> 18.4; m.revCagrHist: 8.2 -> 9.3; d.revPS: 74.18 -> 76.2
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 170.72; mcap: 123.3 -> 125.14; m.peTTM: 30.3 -> 30.6; m.peFwd: 23.7 -> 23.6; m.evEbitda: 15.6 -> 16.3; m.evSales: 4.3 -> 4.6; m.gross: 64.2 -> 64.6; m.op: 19.5 -> 20.1; m.roe: 13.4 -> 14.0; m.revCagrHist: -3.4 -> 0.8
- `ENTG` Entegris: price: 128.88 -> 119.05; mcap: 19.63 -> 18.13; m.peTTM: 74.5 -> 68.8; m.peFwd: 27.9 -> 25.3; m.evEbitda: 26.1 -> 24.4; m.evSales: 7.1 -> 6.6
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 8872.0; mcap: 7.01 -> 6.79; m.peTTM: 33.8 -> 31.9; m.peFwd: 48 -> 45.5; m.evEbitda: 19.2 -> 18.1; m.evSales: 3.1 -> 3.0
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 4207.0; mcap: 5.39 -> 5.23; m.peFwd: 16.1 -> 15.2; m.evEbitda: 12.6 -> 11.8; m.op: 3.7 -> 4.8
- `3436` Sumco (via `3436.T`): price: 3275 -> 3457.0; mcap: 7.14 -> 7.71; m.peFwd: 66.5 -> 70.2; m.evEbitda: 13.4 -> 13.9; m.evSales: 3.6 -> 3.7
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 104.0; m.peFwd: 63 -> 38.0; m.evEbitda: 40.4 -> 40.2; m.evSales: 7.6 -> 6.4; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 15535.0; mcap: 30.89 -> 27.7; m.peTTM: 82.3 -> 72.3; m.peFwd: 57.5 -> 50.3; m.evEbitda: 38.3 -> 36.7; m.evSales: 11.4 -> 11.0
- `ASX` ASE Technology: price: 34.3 -> 35.17; mcap: 75.25 -> 77.33; m.peTTM: 53.6 -> 43.4; m.peFwd: 21.6 -> 19.1; m.evEbitda: 2 -> 2.2; m.gross: 18.5 -> 19.5; m.op: 10.1 -> 11.1; m.net: 7 -> 8.5; m.roe: 13.6 -> 17.0; m.revCagrHist: 17.2 -> 26.7
- `AMKR` Amkor Technology: price: 69.61 -> 49.87; mcap: 17.25 -> 12.39; m.peTTM: 40 -> 22.4; m.peFwd: 28.4 -> 17.7; m.evEbitda: 14.3 -> 9.5; m.evSales: 2.4 -> 1.7; m.gross: 14.4 -> 15.5; m.op: 6 -> 10.5; m.net: 6.2 -> 7.4; m.roe: 10 -> 12.5; m.revCagrHist: 27.5 -> 25.6; d.revPS: 28.6 -> 30.14
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 60.91; mcap: 18.86 -> 16.14; m.peTTM: 77.6 -> 66.2; m.peFwd: 50.1 -> 41.4; m.evEbitda: 22.6 -> 20.2; m.evSales: 3.6 -> 3.2
- `TXN` Texas Instruments: price: 282.01 -> 275.74; mcap: 256.66 -> 251.82; m.peTTM: 48.3 -> 41.8; m.peFwd: 30 -> 26.5; m.evEbitda: 30.7 -> 27.2; m.evSales: 14.4 -> 13.3; m.gross: 57.3 -> 58.3; m.op: 37.8 -> 42.6; m.net: 29.1 -> 31.1; m.roe: 32.3 -> 35.2; m.revCagrHist: 18.6 -> 22.8; d.revPS: 20.29 -> 21.38
- `ADI` Analog Devices: price: 392.67 -> 367.41; m.peTTM: 58.5 -> 54.7; m.peFwd: 26.6 -> 24.4; m.evEbitda: 32 -> 30.0; m.evSales: 15.4 -> 14.5
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 61.67; mcap: 112.72 -> 92.38; m.peTTM: 91.6 -> 75.2; m.peFwd: 29.1 -> 22.6; m.evEbitda: 25.8 -> 21.5; m.evSales: 6.9 -> 5.7
- `NXPI` NXP Semiconductors: price: 285.56 -> 229.16; mcap: 72.1 -> 57.79; m.peTTM: 28.4 -> 45.6; m.peFwd: 16.2 -> 12.6; m.evEbitda: 19.3 -> 13.0; m.evSales: 6.4 -> 5.0; m.gross: 55.6 -> 56.1; m.op: 27.7 -> 30.4; m.net: 21 -> 22.6; m.roe: 25.8 -> 27.9; m.revCagrHist: 12.2 -> 19.5; d.revPS: 49.97 -> 52.23
- `STM` STMicroelectronics: price: 70.74 -> 52.39; mcap: 62.87 -> 46.73; m.peTTM: 442.1 -> 102.7; m.peFwd: 28.8 -> 20.5; m.evEbitda: 24.7 -> 16.4; m.evSales: 5 -> 3.5; m.gross: 34 -> 34.3; m.op: 3.7 -> 6.9; m.net: 1.2 -> 3.6; m.roe: 0.9 -> 2.7; m.revCagrHist: 23 -> 26.1; d.revPS: 13.88 -> 14.71
- `ON` ON Semiconductor: price: 110.17 -> 81.61; mcap: 42.83 -> 31.76; m.peTTM: 81 -> 60.0; m.peFwd: 25.8 -> 18.8; m.evEbitda: 21.5 -> 16.0; m.evSales: 7.3 -> 5.4
- `MCHP` Microchip: price: 87.91 -> 74.29; mcap: 47.65 -> 40.34; m.peTTM: 399.6 -> 337.7; m.peFwd: 21.5 -> 17.7; m.evEbitda: 43.5 -> 37.5; m.evSales: 11.3 -> 9.7
- `MRVL` Marvell: price: 252.59 -> 187.56; mcap: 220.97 -> 168.34; m.peTTM: 87.1 -> 64.5; m.peFwd: 40.9 -> 30.1; m.evEbitda: 82 -> 61.0; m.evSales: 25.5 -> 19.0
- `AVT` Avnet: price: 85.39 -> 88.84; mcap: 7 -> 7.29; m.peTTM: 33 -> 34.3; m.peFwd: 10.8 -> 11.1; m.evEbitda: 13 -> 13.4
- `ARW` Arrow Electronics: price: 215.49 -> 216.57; mcap: 11.02 -> 11.07; m.peTTM: 15.4 -> 15.5
- `AAPL` Apple: price: 291.58 -> 308.91; mcap: 4282.54 -> 4537.07; m.peTTM: 35.3 -> 35.5; m.peFwd: 30.4 -> 32.5; m.evEbitda: 26.9 -> 27.0; m.evSales: 9.5 -> 9.7; m.gross: 47.9 -> 48.7; m.op: 32.3 -> 32.6; m.net: 27.2 -> 27.6; m.roe: 141.5 -> 148.8; m.revCagrHist: 16.6 -> 16.4; d.revPS: 30.53 -> 31.71
- `MSFT` Microsoft: price: 397.36 -> 464.72; mcap: 2951.76 -> 3450.8; m.peTTM: 23.7 -> 25.9; m.peFwd: 20.5 -> 20.0; m.evEbitda: 16.3 -> 18.0; m.evSales: 9.4 -> 10.6; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `GOOGL` Alphabet: price: 356.38 -> 356.13; mcap: 4346.03 -> 4355.45; m.peTTM: 27.2 -> 17.9; m.peFwd: 24.6 -> 24.2; m.evEbitda: 26.6 -> 24.6; m.evSales: 10.1 -> 9.5; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `AMZN` Amazon: price: 238 -> 271.58; mcap: 2560.19 -> 2921.42; m.peTTM: 31.6 -> 21.8; m.peFwd: 24.1 -> 26.5; m.evEbitda: 17 -> 18.1; m.evSales: 3.6 -> 3.9; m.gross: 50.6 -> 50.8; m.op: 13.1 -> 13.7; m.net: 12.2 -> 17.4; m.roe: 24.3 -> 30.6; m.revCagrHist: 16.6 -> 19.6; d.revPS: 69.48 -> 72.33
- `META` Meta Platforms: price: 570.98 -> 556.71; mcap: 1449.39 -> 1418.22; m.peTTM: 20.7 -> 21.0; m.evEbitda: 13.3 -> 13.1; m.evSales: 6.8 -> 6.3; m.gross: 81.9 -> 81.7; m.op: 40.6 -> 30.9; m.net: 32.8 -> 29.8; m.roe: 32.9 -> 29.8; m.revCagrHist: 33.1 -> 28.0; d.revPS: 85.21 -> 90.25
- `TSLA` Tesla: price: 381.59 -> 311.21; mcap: 1433.15 -> 1229.14; m.peTTM: 370.5 -> 285.5; m.peFwd: 152.6 -> 140.2; m.evEbitda: 126.6 -> 111.8; m.evSales: 14.4 -> 11.6; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SONY` Sony Group: price: 20.76 -> 23.26; mcap: 122.26 -> 136.59; m.peTTM: 19.4 -> 20.4; m.peFwd: 17.4 -> 19.5; m.evEbitda: 10 -> 0.1; m.gross: 30.8 -> 32.2; m.op: 7.6 -> 16.7; m.net: -2.6 -> -1.7; m.roe: 12.4 -> 13.2; m.revCagrHist: 15.4 -> 8.2
- `CSCO` Cisco Systems: price: 118.8 -> 115.99; mcap: 468.24 -> 457.17; m.peTTM: 39.5 -> 38.7; m.peFwd: 24.9 -> 24.2; m.evEbitda: 28.5 -> 27.8; m.evSales: 8 -> 7.8
- `DELL` Dell Technologies: price: 369.83 -> 405.37; mcap: 239.69 -> 261.93; m.peTTM: 29.5 -> 32.2; m.peFwd: 17.5 -> 18.6; m.evEbitda: 18.7 -> 20.1; m.evSales: 1.9 -> 2.1; m.op: 8.3 -> 8.9
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 94.17; mcap: 71.5 -> 75.78; m.peTTM: 45.7 -> 31.5; m.peFwd: 15.9 -> 16.8; m.evEbitda: 7.6 -> 8.1
- `APD` Air Products: price: 276.51 -> 294.89; mcap: 61.57 -> 65.67; m.peTTM: 29.2 -> 999; m.peFwd: 19.4 -> 20.4; m.evEbitda: 21 -> 83.2; m.evSales: 6.5 -> 6.8; m.gross: 32 -> 32.1; m.op: 23.6 -> 25.5; m.net: 16.9 -> -0.4; m.roe: 12.4 -> 0.0; m.revCagrHist: 8.8 -> 4.6; d.revPS: 55.95 -> 56.57
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 5656.0; mcap: 14.2 -> 15.62; m.peTTM: 18.4 -> 19.8; m.peFwd: 19 -> 20.4; m.evEbitda: 9.5 -> 9.7; m.evSales: 2.2 -> 2.3; m.gross: 42.8 -> 43.1; m.op: 14 -> 14.6; m.net: 9.1 -> 9.9; m.roe: 11.2 -> 12.1; m.revCagrHist: 7.5 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3778.0; mcap: 26.02 -> 28.83; m.peTTM: 15.5 -> 16.5; m.peFwd: 15 -> 16.3; m.evEbitda: 9.8 -> 10.3; m.evSales: 1.5 -> 1.6
- `MRK.DE` Merck KGaA: price: 136.45 -> 143.15; m.peTTM: 23.4 -> 24.6; m.peFwd: 15.7 -> 16.3; m.evEbitda: 11.9 -> 12.4; m.evSales: 3.2 -> 3.4
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 512.6; mcap: 5.55 -> 5.4; m.peTTM: 14.5 -> 13.8; m.peFwd: 13.9 -> 13.2; m.evEbitda: 6.4 -> 8.9; m.op: -4.6 -> -18.8
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 76.1; mcap: 2.96 -> 2.89; m.evEbitda: 12.3 -> 12.8; m.evSales: 2.8 -> 2.5; m.op: -9.7 -> -16.1; m.net: -5.1 -> -14.8; m.roe: -3.7 -> -10.4; m.revCagrHist: 3.1 -> -2.3
- `CEVA` CEVA: price: 41.08 -> 32.65; mcap: 1.14 -> 0.91; m.peFwd: 49.9 -> 39.7; m.evSales: 8.4 -> 6.3
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 3910.0; mcap: 200.41 -> 192.2; m.peTTM: 60.2 -> 62.1; m.peFwd: 33.1 -> 28.8; m.evEbitda: 54.8 -> 49.0; m.evSales: 10.9 -> 9.3; m.gross: 47 -> 46.3; m.op: 15.3 -> 15.0; m.net: 16.9 -> 16.3; m.roe: 25.4 -> 23.9; m.revCagrHist: -2.7 -> 1.2
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 62.0; mcap: 54.37 -> 47.54; m.peTTM: 101.2 -> 87.3; m.peFwd: 52.4 -> 43.3; m.evEbitda: 94.5 -> 83.1; m.evSales: 45.2 -> 39.7
- `UMC` UMC: price: 18.9 -> 19.03; mcap: 47.43 -> 47.73; m.peTTM: 30.5 -> 18.7; m.peFwd: 23.5 -> 21.7; m.gross: 29.6 -> 30.6; m.op: 18.5 -> 21.7; m.net: 20.8 -> 33.3; m.roe: 12.5 -> 21.3; m.revCagrHist: 5.5 -> 17.0
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 126.8; mcap: 22.67 -> 21.5; m.peTTM: 534.4 -> 487.7; m.peFwd: 111.9 -> 101.9; m.evSales: 95.5 -> 89.3
- `285A` Kioxia (via `285A.T`): price: 74560 -> 49160.0; mcap: 253.66 -> 171.64; m.peTTM: 74 -> 48.7; m.evEbitda: 33.2 -> 10.8; m.evSales: 16.8 -> 6.8; m.gross: 43.3 -> 61.7; m.op: 59.5 -> 71.9; m.net: 23.7 -> 36.6; m.roe: 51.9 -> 87.1
- `SNDK` SanDisk: price: 1643.23 -> 1214.83; mcap: 243.35 -> 179.9; m.peTTM: 56.2 -> 41.5; m.peFwd: 9 -> 5.7; m.evEbitda: 42.6 -> 31.3; m.evSales: 18.2 -> 13.4
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 5536.0; mcap: 68.69 -> 72.28; m.peTTM: 27.2 -> 28.0; m.peFwd: 32.6 -> 33.5; m.evEbitda: 16.8 -> 19.5; m.gross: 32.1 -> 32.5; m.op: 8 -> 9.3; m.net: 6.9 -> 7.0; m.roe: 10 -> 10.3; m.revCagrHist: 10 -> 14.0
- `WOLF` Wolfspeed: price: 43.42 -> 23.62; mcap: 2.26 -> 1.23; m.evSales: 3.9 -> 2.5
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 14130.0; mcap: 12.06 -> 13.16; m.peTTM: 19.7 -> 21.2; m.peFwd: 21.6 -> 23.3; m.evEbitda: 10.2 -> 10.4; m.evSales: 1.6 -> 1.7; m.gross: 28 -> 28.3; m.op: 16.5 -> 9.0; m.net: 8 -> 8.6; m.roe: 12.9 -> 14.3; m.revCagrHist: 8 -> 10.2
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 640.0; mcap: 67.48 -> 68.78; m.peTTM: 82.1 -> 83.2; m.peFwd: 43.5 -> 43.4; m.evEbitda: 61.5 -> 68.2; m.evSales: 10.9 -> 12.1
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 801.2; mcap: 51.19 -> 45.24; m.peTTM: 45 -> 36.6; m.peFwd: 33.6 -> 26.7; m.evEbitda: 39.8 -> 33.0; m.evSales: 13.6 -> 11.3; m.net: 31 -> 31.9; m.roe: 24.9 -> 26.8; m.revCagrHist: 2.8 -> 20.0
- `TER` Teradyne: price: 347.59 -> 367.69; m.peTTM: 64.5 -> 50.5; m.peFwd: 36.6 -> 31.8; m.evEbitda: 46.7 -> 38.1; m.evSales: 14.3 -> 12.8; m.gross: 58.7 -> 59.2; m.op: 37.6 -> 33.2; m.net: 22.6 -> 25.8; m.roe: 28.7 -> 36.5; m.revCagrHist: 87 -> 103.9; d.revPS: 23.99 -> 28.44
- `COHU` Cohu: price: 54.47 -> 47.99; mcap: 2.57 -> 2.26; m.peFwd: 37.4 -> 26.0; m.evEbitda: 12 -> 166.8; m.evSales: 5 -> 4.0; m.gross: 43.5 -> 44.0; m.op: -8.3 -> 0.6; m.net: -11.5 -> -7.4; m.roe: -7 -> -4.8; m.revCagrHist: 29.3 -> 38.4; d.revPS: 10.28 -> 11.12
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 1960.0; mcap: 28.4 -> 25.57; m.peTTM: 77.6 -> 62.2; m.peFwd: 36.3 -> 29.4; m.evEbitda: 74.6 -> 56.9; m.evSales: 28 -> 21.9; m.gross: 62.2 -> 61.1; m.op: 40.5 -> 38.7; m.net: 40.3 -> 41.1; m.revCagrHist: 72.8 -> 109.6
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 148.6; mcap: 9.31 -> 7.95; m.peTTM: 66.9 -> 38.5; m.peFwd: 33.6 -> 25.4; m.evEbitda: 53.5 -> 31.5; m.evSales: 4.9 -> 3.8; m.gross: 38.1 -> 39.1; m.op: 9.7 -> 15.9; m.net: 7.3 -> 7.8; m.roe: 30 -> 9.3; m.revCagrHist: 27 -> 45.1
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 198.25; mcap: 26.42 -> 18.1; m.peTTM: 151.2 -> 75.7; m.peFwd: 47.6 -> 30.6; m.evEbitda: 109.2 -> 57.0; m.evSales: 36.1 -> 21.6; m.gross: 63.3 -> 64.1; m.op: 34.6 -> 43.5; m.net: 24 -> 28.4; m.roe: 31.3 -> 44.9; m.revCagrHist: 28.3 -> 68.7
- `KLIC` Kulicke & Soffa: price: 102.03 -> 89.2; mcap: 5.34 -> 4.67; m.peTTM: 99.1 -> 86.6; m.peFwd: 24.1 -> 21.1; m.evEbitda: 41.8 -> 47.8; m.evSales: 6.4 -> 5.5; m.gross: 53.6 -> 49.8
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 17235.0; m.peTTM: 29.1 -> 28.5; m.peFwd: 28.9 -> 28.3; m.evEbitda: 16.5 -> 16.8; m.evSales: 3.9 -> 4.0
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 74.4; mcap: 1.97 -> 1.64; m.peTTM: 30.3 -> 40.2; m.peFwd: 26.1 -> 20.9; m.evEbitda: 32 -> 26.4; m.evSales: 3.5 -> 2.9
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 51.35; mcap: 13.29 -> 11.54; m.peTTM: 62.4 -> 54.1; m.peFwd: 75.1 -> 65.0; m.evEbitda: 20.6 -> 19.2; m.evSales: 3.8 -> 3.5
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 130.8; mcap: 6.14 -> 5.86; m.peTTM: 41.5 -> 999; m.peFwd: 26.5 -> 19.6; m.evEbitda: 9.9 -> 15.7; m.evSales: 3.9 -> 3.6; m.gross: 9.5 -> 11.4; m.op: 7.3 -> 9.4; m.net: 8.5 -> -1.4; m.roe: 14.8 -> -2.4; m.revCagrHist: 17.9 -> 21.3
- `6239` Powertech (via `6239.TW`): price: 309 -> 238.5; mcap: 7.2 -> 5.43; m.peTTM: 41.5 -> 28.5; m.peFwd: 16.4 -> 12.9; m.evEbitda: 11.7 -> 9.4; m.evSales: 3.2 -> 2.6
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 953.0; mcap: 16.1 -> 18.97; m.peTTM: 259 -> 203.2; m.peFwd: 28.2 -> 24.3; m.evEbitda: 53.6 -> 58.3; m.evSales: 12.6 -> 13.7
- `3036` WT Micro (via `3036.TW`): price: 225 -> 204.5; mcap: 9.04 -> 8.02; m.peTTM: 21.8 -> 14.4; m.peFwd: 7.6 -> 7.0; m.evEbitda: 13.3 -> 11.3; m.evSales: 0.3 -> 0.2
- `3702` WPG Holdings (via `3702.TW`): price: 106.5 -> 116.0; mcap: 5.64 -> 6.0; m.peTTM: 19.1 -> 20.8; m.peFwd: 6.9 -> 7.5; m.evEbitda: 13.7 -> 14.4
- `3132` Macnica (via `3132.T`): price: 3193 -> 3262.0; mcap: 3.55 -> 3.72; m.peTTM: 20.5 -> 21.0; m.peFwd: 11.7 -> 11.9; m.evEbitda: 13.1 -> 11.8; m.gross: 10.7 -> 10.8; m.net: 2.3 -> 2.5; m.roe: 10.4 -> 12.8; m.revCagrHist: 29.2 -> 39.7
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 24.48; mcap: 35.84 -> 38.72; m.peTTM: 20.8 -> 22.5; m.peFwd: 13.4 -> 12.8; m.evEbitda: 65.9 -> 63.9; m.evSales: 3.5 -> 3.6; m.op: 4.1 -> 5.6
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 27.74; mcap: 70.06 -> 75.16; m.peTTM: 14.2 -> 15.3; m.peFwd: 14.6 -> 16.1; m.evEbitda: 18.3 -> 20.2; m.evSales: 1.4 -> 1.5
- `HPQ` HP Inc.: price: 24.69 -> 27.27; m.peTTM: 9.1 -> 10.1; m.peFwd: 8.2 -> 9.1; m.evEbitda: 6.3 -> 6.8; m.evSales: 0.5 -> 0.6
- meta: data-date stamped to 2026-08-03 in hero/footer

**Needs review**
- `SOI` Soitec — currency **EUR**: USD mcap not derivable (missing shares/FX); mcap left unchanged
- `MRK.DE` Merck KGaA — currency **EUR**: USD mcap not derivable (missing shares/FX); mcap left unchanged

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 25 · skipped: 0 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 48.15; mcap: 6.08 -> 6.38; m.peTTM: 208.5 -> 209.3; m.peFwd: 49.8 -> 52.3; m.evEbitda: 50.4 -> 52.6; m.evSales: 13.2 -> 13.7
- `RKLB` Rocket Lab: price: 105.05 -> 64.95; mcap: 65.64 -> 40.58; m.evSales: 87.6 -> 53.5
- `LMT` Lockheed Martin: price: 525.02 -> 582.74; mcap: 121.05 -> 134.49; m.peTTM: 25.4 -> 21.5; m.peFwd: 16.4 -> 17.8; m.evEbitda: 17.5 -> 15.6; m.evSales: 1.9 -> 2.0; m.gross: 9.9 -> 11.8; m.op: 11 -> 12.0; m.net: 6.4 -> 8.2; m.roe: 67.6 -> 89.2; m.revCagrHist: 0.3 -> 10.5; d.revPS: 324.33 -> 333.75
- `NOC` Northrop Grumman: price: 542.14 -> 542.48; mcap: 77 -> 77.07; m.peTTM: 17 -> 17.2; m.peFwd: 18 -> 17.9; m.evSales: 2.2 -> 2.1; m.gross: 20.5 -> 20.1; m.op: 11.7 -> 11.6; m.net: 10.8 -> 10.5; m.roe: 28.5 -> 27.0; m.revCagrHist: 4.4 -> 5.1; d.revPS: 296.53 -> 301.1
- `BA` Boeing: price: 209 -> 216.14; mcap: 164.76 -> 170.83; m.peTTM: 82.6 -> 77.5; m.peFwd: 50 -> 52.2; m.gross: 4.8 -> 4.7; m.op: 1.7 -> 0.0; m.net: 2.5 -> 2.6; m.roe: 169.9 -> 173.5; m.revCagrHist: 14 -> 8.0; d.revPS: 119.96 -> 120.99
- `RTX` RTX Corp: price: 177.41 -> 215.22; mcap: 238.92 -> 290.06; m.peTTM: 34 -> 37.9; m.peFwd: 23.4 -> 27.5; m.evEbitda: 17.9 -> 20.3; m.evSales: 3 -> 3.4; m.gross: 20.2 -> 20.3; m.op: 13.2 -> 12.7; m.net: 8 -> 8.3; m.roe: 11.6 -> 12.3; m.revCagrHist: 8.7 -> 14.5; d.revPS: 67.24 -> 69.43
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 202.2; mcap: 159.08 -> 183.49; m.peTTM: 27.6 -> 27.0; m.peFwd: 20.4 -> 23.3; m.evEbitda: 17.8 -> 17.9; m.evSales: 1.9 -> 2.1; m.gross: 15.4 -> 16.3; m.op: 1.5 -> 11.4; m.net: 6.9 -> 7.7; m.roe: 19.7 -> 23.2; m.revCagrHist: -6.6 -> 27.7
- `HEI` Heico: price: 320.88 -> 356.36; m.peTTM: 57.1 -> 63.7; m.peFwd: 46.9 -> 51.4; m.evEbitda: 34.8 -> 38.4; m.evSales: 9.7 -> 10.7
- `TDG` TransDigm: price: 1212.36 -> 1254.38; m.peTTM: 37.9 -> 39.2; m.peFwd: 25.8 -> 26.7; m.evEbitda: 19.8 -> 20.3; m.evSales: 10.1 -> 10.3
- `MRCY` Mercury Systems: price: 106.81 -> 97.1; mcap: 6.41 -> 5.83; m.peFwd: 69.7 -> 62.8; m.evEbitda: 70.3 -> 64.3; m.evSales: 7 -> 6.4
- `RDW` Redwire: price: 14.87 -> 8.62; mcap: 2.96 -> 2.06; m.evSales: 8.1 -> 4.8
- `ASTS` AST SpaceMobile: price: 87.32 -> 58.98; mcap: 33.89 -> 22.89; m.evSales: 99 -> 213.8
- `IRDM` Iridium: price: 45.61 -> 47.34; mcap: 4.82 -> 5.02; m.peTTM: 46.1 -> 54.4; m.peFwd: 33 -> 24.0; m.evEbitda: 14.8 -> 15.6; m.evSales: 7.4 -> 7.5; m.gross: 71.6 -> 71.9; m.op: 23.2 -> 15.1; m.net: 12.1 -> 10.5; m.roe: 21.4 -> 19.7; m.revCagrHist: 1.9 -> 3.8; d.revPS: 8.24 -> 8.33
- `SATS` EchoStar: price: 115.24 -> 103.92; mcap: 33.4 -> 30.12; m.evEbitda: 38.5 -> 35.7; m.evSales: 4.1 -> 3.8
- `VSAT` Viasat: price: 61.5 -> 76.93; mcap: 8.4 -> 10.6; m.peFwd: 152.5 -> 190.7; m.evEbitda: 9.6 -> 11.1; m.evSales: 2.9 -> 3.4
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 5.75; mcap: 3.15 -> 2.29; m.evEbitda: 7.9 -> 6.7; m.evSales: 3.1 -> 2.7; m.gross: 60.1 -> 70.3; m.op: 11.7 -> -5.6; m.net: -4.7 -> -8.8; m.roe: 8 -> -9.9; m.revCagrHist: 66.4 -> 61.0
- `PL` Planet Labs: price: 30.72 -> 20.48; mcap: 10.95 -> 7.3; m.evSales: 31.9 -> 21.0
- `BKSY` BlackSky: price: 31.79 -> 23.05; mcap: 1.18 -> 0.94; m.evSales: 13 -> 9.7
- `SPIR` Spire Global: price: 16.37 -> 11.46; mcap: 0.63 -> 0.44; m.peTTM: 10.3 -> 7.2; m.evSales: 9.4 -> 6.4
- `LHX` L3Harris: price: 303 -> 277.06; mcap: 56.45 -> 51.59; m.peTTM: 32.9 -> 28.0; m.peFwd: 22.2 -> 20.4; m.evEbitda: 34.5 -> 31.8; m.evSales: 5.8 -> 5.3
- `KTOS` Kratos Defense: price: 54.82 -> 46.6; mcap: 10.28 -> 8.74; m.peTTM: 322.5 -> 274.1; m.peFwd: 51.1 -> 42.7; m.evEbitda: 110.8 -> 91.9; m.evSales: 6.4 -> 5.3
- `GRMN` Garmin: price: 231.72 -> 293.78; mcap: 44.69 -> 56.66; m.peTTM: 26.5 -> 30.3; m.peFwd: 22.4 -> 27.0; m.evEbitda: 19.5 -> 23.5; m.evSales: 5.7 -> 7.1; m.gross: 59.1 -> 60.1; m.op: 24.6 -> 30.4; m.net: 23.3 -> 24.5; m.roe: 19.9 -> 21.9; m.revCagrHist: 14.2 -> 11.4; d.revPS: 38.77 -> 39.84
- `LUNR` Intuitive Machines: price: 26.54 -> 12.34; mcap: 4.26 -> 1.98; m.evSales: 16.6 -> 9.8
- `LDOS` Leidos: price: 121.69 -> 115.6; mcap: 15.31 -> 14.54; m.peTTM: 11.1 -> 10.6; m.peFwd: 9.3 -> 8.8; m.evEbitda: 9.1 -> 8.8; m.evSales: 1.3 -> 1.2
- meta: data-date stamped to 2026-08-03 in hero/footer
