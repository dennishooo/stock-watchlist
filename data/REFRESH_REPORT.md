# Data refresh report

- **As of:** 2026-09-28
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 237 changed · 5 skipped · 1 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 225.07; mcap: 4854.37 -> 5434.77; m.peTTM: 30.7 -> 28.5; m.peFwd: 15.7 -> 14.4; m.evEbitda: 29.1 -> 26.8; m.evSales: 19 -> 17.8; m.gross: 74.1 -> 74.7; m.op: 65.6 -> 66.2; m.net: 63 -> 63.7; m.roe: 114.3 -> 117.2; m.revCagrHist: 85.2 -> 105.9; d.revPS: 10.42 -> 12.48
- `AVGO` Broadcom: price: 372.1 -> 352.81; mcap: 1770.3 -> 1684.18; m.peTTM: 61.7 -> 45.1; m.peFwd: 19.2 -> 18.2; m.evEbitda: 43.3 -> 32.9; m.evSales: 24.1 -> 19.3; m.gross: 76.3 -> 75.5; m.op: 49 -> 54.3; m.net: 38.8 -> 42.9; m.roe: 37.3 -> 44.2; m.revCagrHist: 47.9 -> 85.5; d.revPS: 15.94 -> 18.77
- `AMD` AMD: price: 452.4 -> 630.63; mcap: 737.68 -> 1029.49; m.peTTM: 151.3 -> 161.3; m.peFwd: 34.6 -> 40.5; m.evEbitda: 98.1 -> 106.7; m.evSales: 19.5 -> 24.7; m.gross: 53.1 -> 55.7; m.op: 14.4 -> 17.2; m.net: 13.4 -> 15.6; m.roe: 8.1 -> 10.2; m.revCagrHist: 37.8 -> 50.1; d.revPS: 23.02 -> 25.36
- `MU` Micron: price: 891.88 -> 1082.28; mcap: 1005.8 -> 1222.32; m.peTTM: 42.2 -> 24.4; m.peFwd: 8 -> 6.7; m.evEbitda: 27.2 -> 17.6; m.evSales: 17.2 -> 13.3; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 206.55; mcap: 191.09 -> 260.51; m.peTTM: 52.3 -> 65.6; m.peFwd: 34.1 -> 39.8; m.evEbitda: 42.2 -> 53.3; m.evSales: 18.4 -> 23.4; m.gross: 63.5 -> 63.0; m.op: 42.7 -> 45.4; m.net: 38.3 -> 38.4; m.revCagrHist: 35.1 -> 37.7; d.revPS: 7.72 -> 8.38
- `COHR` Coherent: price: 354.77 -> 295.83; mcap: 69.41 -> 57.93; m.peTTM: 169.7 -> 72.0; m.peFwd: 43.8 -> 21.2; m.evEbitda: 53.9 -> 42.0; m.evSales: 10.7 -> 8.4; m.gross: 37 -> 37.5; m.op: 13.6 -> 11.8; m.net: 7.1 -> 11.3; m.roe: 4.7 -> 8.0; m.revCagrHist: 20.5 -> 33.7; d.revPS: 39.48 -> 40.16
- `CIEN` Ciena: price: 434.65 -> 356.91; mcap: 61.53 -> 50.61; m.peTTM: 145.4 -> 80.0; m.peFwd: 45.2 -> 30.3; m.evEbitda: 78.8 -> 50.0; m.evSales: 11.1 -> 8.5; m.gross: 43 -> 44.1; m.op: 15.2 -> 18.1; m.net: 7.9 -> 10.9; m.roe: 15.5 -> 22.4; m.revCagrHist: 39.5 -> 37.0; d.revPS: 39.28 -> 42.38
- `SMCI` Super Micro: price: 29.27 -> 43.26; mcap: 17.6 -> 28.42; m.peTTM: 21.4 -> 13.3; m.peFwd: 9 -> 8.1; m.evEbitda: 16.1 -> 12.2; m.evSales: 0.8 -> 0.9; m.gross: 8.4 -> 10.8; m.op: 6.1 -> 13.4; m.net: 3.7 -> 5.7; m.roe: 17.9 -> 21.5; m.revCagrHist: 122.7 -> 93.2; d.revPS: 56.37 -> 64.91
- `DELL` Dell Technologies: price: 369.83 -> 562.89; mcap: 239.69 -> 357.89; m.peTTM: 29.5 -> 32.8; m.peFwd: 17.5 -> 19.3; m.evEbitda: 18.7 -> 21.5; m.evSales: 1.9 -> 2.5; m.gross: 19.2 -> 19.9; m.op: 8.3 -> 12.0; m.net: 6.3 -> 7.5; m.revCagrHist: 87.5 -> 57.7; d.revPS: 201.73 -> 230.48
- `VRT` Vertiv: price: 280.98 -> 253.28; mcap: 107.93 -> 97.51; m.peTTM: 70.8 -> 57.2; m.peFwd: 31.7 -> 27.8; m.evEbitda: 45.6 -> 36.5; m.evSales: 10 -> 8.5; m.gross: 37.2 -> 38.0; m.op: 16.4 -> 20.4; m.net: 14.4 -> 15.1; m.roe: 45.1 -> 43.9; m.revCagrHist: 30.1 -> 24.1; d.revPS: 28.37 -> 29.97
- `EQIX` Equinix: price: 1038.33 -> 1008.08; mcap: 102.4 -> 99.47; m.peTTM: 72 -> 65.0; m.peFwd: 54 -> 54.1; m.evEbitda: 29.1 -> 26.8; m.evSales: 13.1 -> 12.3; m.gross: 51.6 -> 52.0; m.op: 24.3 -> 27.0; m.net: 14.9 -> 15.5; m.roe: 10.1 -> 10.7; m.revCagrHist: 12.1 -> 16.7; d.revPS: 97.1 -> 100.75
- `DLR` Digital Realty: price: 180.78 -> 178.61; mcap: 64.66 -> 67.45; m.peTTM: 47.8 -> 87.1; m.peFwd: 63.1 -> 64.7; m.evEbitda: 28.8 -> 27.1; m.evSales: 13.2 -> 12.9; m.gross: 55.3 -> 57.0; m.op: 17.2 -> 25.9; m.net: 21.8 -> 11.8; m.roe: 5.7 -> 2.9; m.revCagrHist: 16.7 -> 29.9; d.revPS: 18.47 -> 19.53
- `MSFT` Microsoft: price: 397.36 -> 516.17; mcap: 2951.76 -> 3832.84; m.peTTM: 23.7 -> 28.7; m.peFwd: 20.5 -> 21.8; m.evEbitda: 16.3 -> 20.0; m.evSales: 9.4 -> 11.7; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `ORCL` Oracle: price: 201.26 -> 137.1; mcap: 578.83 -> 414.55; m.peTTM: 36.1 -> 21.5; m.peFwd: 18.7 -> 12.5; m.evEbitda: 25.8 -> 16.0; m.evSales: 11 -> 7.7; m.gross: 67.1 -> 64.0; m.op: 32.7 -> 35.6; m.net: 25.3 -> 26.4; m.roe: 57.6 -> 41.2; m.revCagrHist: 21.7 -> 29.6; d.revPS: 22.54 -> 24.79
- meta: data-date stamped to 2026-09-28 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1183.46; mcap: 1013.35 -> 1055.34; m.peTTM: 40.3 -> 39.7; m.peFwd: 25.5 -> 25.0; m.evEbitda: 29 -> 26.4; m.evSales: 14.6 -> 13.8; m.gross: 82.8 -> 83.4; m.op: 49.4 -> 54.2; m.net: 35 -> 33.5; m.roe: 107.5 -> 102.3; m.revCagrHist: 55.5 -> 47.7; d.revPS: 80.61 -> 89.02
- `NVO` Novo Nordisk: price: 42.81 -> 38.8; mcap: 189.61 -> 171.37; m.peTTM: 10 -> 9.7; m.peFwd: 12.9 -> 11.6; m.evEbitda: 1.8 -> 1.5; m.evSales: 1 -> 0.8; m.gross: 83.2 -> 82.0; m.op: 61.6 -> 42.5; m.net: 37.2 -> 35.3; m.roe: 71.4 -> 59.8; m.revCagrHist: 24 -> 2.1
- `VKTX` Viking Therapeutics: price: 27.75 -> 35.56; mcap: 3.22 -> 4.43; m.roe: -70 -> -88.9
- `AMGN` Amgen: price: 337.73 -> 414.61; mcap: 182.28 -> 224.15; m.peTTM: 24 -> 25.8; m.peFwd: 14.4 -> 17.0; m.evEbitda: 13.5 -> 15.5; m.evSales: 6.1 -> 7.0; m.gross: 71.4 -> 71.9; m.op: 33.8 -> 35.5; m.net: 21 -> 23.0; m.roe: 101.3 -> 91.5; m.revCagrHist: 5.8 -> 9.5; d.revPS: 69.12 -> 70.68
- `HIMS` Hims & Hers: price: 27.78 -> 29.42; mcap: 6.43 -> 6.86; m.peFwd: 31.2 -> 39.9; m.gross: 72.9 -> 69.5; m.op: -7.9 -> -12.8; m.net: -0.6 -> -5.5; m.roe: -2.7 -> -32.0; m.revCagrHist: 3.8 -> 38.2; d.revPS: 10.46 -> 11.29
- `PFE` Pfizer: price: 25.6 -> 28.67; mcap: 145.91 -> 163.41; m.peTTM: 19.5 -> 37.7; m.peFwd: 9 -> 9.9; m.evEbitda: 7.8 -> 8.5; m.evSales: 3.1 -> 3.4; m.gross: 74.8 -> 74.7; m.op: 31.6 -> 27.9; m.net: 11.8 -> 6.8; m.roe: 8.3 -> 5.0; m.revCagrHist: 5.4 -> 2.6; d.revPS: 11.13 -> 11.19
- `MRK` Merck: price: 119.09 -> 148.78; mcap: 294.13 -> 367.07; m.peTTM: 33.5 -> 119.0; m.peFwd: 12.5 -> 15.6; m.evEbitda: 11.4 -> 14.3; m.evSales: 5.1 -> 6.2; m.gross: 76.7 -> 75.9; m.op: 38.6 -> -0.2; m.net: 13.6 -> 4.8; m.roe: 18.9 -> 7.0; m.revCagrHist: 4.9 -> 5.1; d.revPS: 26.42 -> 26.85
- `ABBV` AbbVie: price: 224.95 -> 264.34; mcap: 397.44 -> 467.12; m.peTTM: 111.4 -> 74.5; m.peFwd: 13.8 -> 16.2; m.evEbitda: 15.4 -> 17.3; m.evSales: 7.3 -> 8.3; m.gross: 72 -> 72.8; m.op: 32.2 -> 40.0; m.net: 5.8 -> 9.8; m.revCagrHist: 12.4 -> 10.2; d.revPS: 35.5 -> 36.39
- `RHHBY` Roche: price: 50.23 -> 54.45; mcap: 323.53 -> 347.07; m.peTTM: 19.9 -> 23.6; m.peFwd: 15.6 -> 16.1; m.evEbitda: 14.3 -> 15.6; m.evSales: 5.4 -> 6.0; m.gross: 74.5 -> 74.2; m.op: 30 -> 36.2; m.net: 20.3 -> 19.6; m.roe: 37.3 -> 38.1; m.revCagrHist: -0.4 -> -1.2
- `TMO` Thermo Fisher: price: 482.04 -> 675.0; mcap: 179.14 -> 249.58; m.peTTM: 26.5 -> 36.4; m.peFwd: 17.7 -> 24.5; m.evEbitda: 19.4 -> 24.6; m.evSales: 4.8 -> 6.2; m.gross: 40.9 -> 41.0; m.op: 17.9 -> 18.8; m.net: 15.2 -> 15.0; m.revCagrHist: 6.2 -> 10.5; d.revPS: 120.36 -> 123.89
- `DHR` Danaher: price: 183.63 -> 224.49; mcap: 129.97 -> 157.81; m.peTTM: 36.5 -> 40.0; m.peFwd: 20.2 -> 24.1; m.evEbitda: 18.1 -> 22.6; m.evSales: 5.8 -> 7.2; m.gross: 59 -> 58.8; m.op: 22.9 -> 19.8; m.net: 14.9 -> 15.9; m.roe: 7.1 -> 7.6; m.revCagrHist: 3.7 -> 5.5; d.revPS: 34.87 -> 35.47
- `ISRG` Intuitive Surgical: price: 412.02 -> 405.18; mcap: 145.92 -> 145.17; m.peTTM: 50 -> 46.5; m.peFwd: 34.9 -> 33.5; m.evEbitda: 36.4 -> 33.0; m.evSales: 13.4 -> 12.5; m.gross: 66.3 -> 66.7; m.op: 30.9 -> 33.6; m.net: 28.2 -> 28.4; m.roe: 17.2 -> 17.4; m.revCagrHist: 23 -> 18.5; d.revPS: 29.7 -> 31.07
- `DXCM` Dexcom: price: 74.77 -> 86.62; mcap: 28.85 -> 32.69; m.peTTM: 32.1 -> 34.2; m.peFwd: 24.3 -> 27.7; m.evEbitda: 21.5 -> 22.9; m.evSales: 5.8 -> 6.5; m.gross: 61.5 -> 62.5; m.op: 21.4 -> 24.3; m.net: 19.3 -> 20.1; m.roe: 35.6 -> 38.5; m.revCagrHist: 15 -> 13.1; d.revPS: 12.39 -> 12.87
- meta: data-date stamped to 2026-09-28 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 195.11; mcap: 40.57 -> 51.48; m.peTTM: 56.4 -> 999; m.peFwd: 31 -> 68.8; m.evEbitda: 20 -> 70.6; m.evSales: 9 -> 8.2; m.gross: 85 -> 85.8; m.op: -7.1 -> -13.9; m.net: 12.7 -> -16.3; m.roe: 6.7 -> -7.8; m.revCagrHist: -30.8 -> -17.3; d.revPS: 23.92 -> 22.82
- `HOOD` Robinhood: price: 86.36 -> 119.4; mcap: 77.77 -> 107.35; m.peTTM: 41.9 -> 52.8; m.peFwd: 30.8 -> 35.3; m.evSales: 18 -> 21.6; m.gross: 88 -> 91.9; m.op: 38.5 -> 43.9; m.net: 41.1 -> 42.0; m.roe: 21.5 -> 23.6; m.revCagrHist: 15.1 -> 32.3; d.revPS: 5.17 -> 5.5
- `MARA` MARA Holdings: price: 12.62 -> 12.55; mcap: 4.81 -> 4.85; m.evSales: 5.6 -> 8.7; m.gross: 40 -> 40.1; m.net: -15 -> 0.0; m.roe: -67.3 -> -105.6; m.revCagrHist: -18.4 -> -26.7; d.revPS: 2.38 -> 2.17
- `RIOT` Riot Platforms: price: 24.08 -> 23.0; mcap: 9.11 -> 8.63; m.evSales: 14 -> 13.4; m.gross: 35 -> 28.3; m.op: -20 -> -122.3; m.net: -132.8 -> -196.3; m.roe: -32.5 -> -48.2; m.revCagrHist: 3.6 -> 13.9; d.revPS: 1.89 -> 1.94
- `CLSK` CleanSpark: price: 14.9 -> 13.95; mcap: 3.82 -> 3.58; m.evSales: 7 -> 7.6; m.gross: 42 -> 47.0; m.op: -5 -> -165.2; m.net: -67.7 -> -146.9; m.roe: -34.8 -> -68.6; m.revCagrHist: -24.9 -> -30.5; d.revPS: 2.66 -> 2.47
- `IREN` IREN Limited: price: 51.52 -> 44.12; mcap: 18.41 -> 17.39; m.peTTM: 69.6 -> 999; m.evSales: 30 -> 27.3; m.gross: 45 -> 68.9; m.op: -64.5 -> -102.5; m.net: 20.9 -> -99.4; m.roe: 7.7 -> -23.4; m.revCagrHist: 0 -> -26.7; d.revPS: 2.65 -> 2.24
- `MSTR` Strategy: price: 115.35 -> 158.61; mcap: 40.76 -> 63.01; m.peFwd: 25.9 -> 3.2; m.evSales: 113.1 -> 159.9; m.gross: 68.1 -> 67.6; m.roe: -30.8 -> -63.6; m.revCagrHist: 11.9 -> 6.9; d.revPS: 1.65 -> 1.57
- `GLXY` Galaxy Digital: price: 30.15 -> 24.24; mcap: 11.76 -> 14.28; m.peFwd: 322.2 -> 999; m.evEbitda: 12 -> 0.2; m.evSales: 5 -> 0.2; m.op: 95.9 -> 96.2; m.net: -0.3 -> -0.4; m.roe: -6.5 -> -10.4; m.revCagrHist: -20.6 -> -3.8
- `CRCL` Circle Internet: price: 78.93 -> 89.0; mcap: 21.1 -> 24.26; m.peTTM: 999 -> 17.8; m.peFwd: 35.4 -> 58.2; m.evEbitda: 40 -> 91.2; m.evSales: 8 -> 7.2; m.gross: 40 -> 22.0; m.op: 6.5 -> 4.9; m.net: -2.8 -> 15.5; m.roe: -3 -> 15.3; m.revCagrHist: 20 -> 6.6; d.revPS: 13.95 -> 12.04
- `BLK` BlackRock: price: 1010.68 -> 1086.31; mcap: 164.59 -> 176.5; m.peTTM: 25.4 -> 26.0; m.peFwd: 16.6 -> 16.9; m.evEbitda: 16 -> 15.9; m.evSales: 7 -> 6.5; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.roe: 11.9 -> 12.3; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 175.98
- meta: data-date stamped to 2026-09-28 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 374.74; mcap: 214.52 -> 306.54; m.peTTM: 226.9 -> 999; m.peFwd: 63.9 -> 76.8; m.evEbitda: 143.9 -> 196.2; m.evSales: 20.1 -> 26.7; m.gross: 72 -> 70.4; m.op: -2.5 -> 5.4; m.net: 7.9 -> 2.7; m.roe: 4.8 -> 1.7; m.revCagrHist: 31.1 -> 34.5; d.revPS: 14.83 -> 15.33
- `CRWD` CrowdStrike: price: 647.74 -> 252.13; mcap: 164.89 -> 258.16; m.peFwd: 103.6 -> 157.0; m.evSales: 31.6 -> 47.1; m.gross: 75.1 -> 75.2; m.op: -2.2 -> -2.3; m.net: -0.6 -> 0.8; m.roe: -0.2 -> 1.5; m.revCagrHist: 25.6 -> 25.8; d.revPS: 20.22 -> 5.33
- `FTNT` Fortinet: price: 138.88 -> 173.46; mcap: 101.75 -> 127.27; m.peTTM: 53.8 -> 61.3; m.peFwd: 40.5 -> 45.9; m.evEbitda: 41.9 -> 47.7; m.evSales: 13.9 -> 16.4; m.gross: 80.3 -> 80.2; m.op: 31.3 -> 33.6; m.net: 27.5 -> 28.2; m.roe: 132.4 -> 117.4; m.revCagrHist: 20.1 -> 25.6; d.revPS: 9.47 -> 10.14
- `ZS` Zscaler: price: 124.73 -> 193.05; mcap: 20.17 -> 31.48; m.peFwd: 27.1 -> 34.5; m.evSales: 5.8 -> 8.9; m.gross: 76.7 -> 76.9; m.op: -3.3 -> -1.0; m.net: -2.4 -> -1.9; m.roe: -3.7 -> -2.9; m.revCagrHist: 25.4 -> 24.9; d.revPS: 19.98 -> 20.93
- `NET` Cloudflare: price: 219.67 -> 349.02; mcap: 77.97 -> 124.28; m.peFwd: 140.8 -> 208.2; m.evSales: 33.1 -> 49.2; m.gross: 73.3 -> 72.6; m.op: -9.7 -> -7.6; m.net: -3.7 -> -8.2; m.roe: -5.9 -> -14.4; m.revCagrHist: 33.5 -> 35.9; d.revPS: 6.65 -> 7.14
- `OKTA` Okta: price: 114.92 -> 195.19; mcap: 19.97 -> 34.12; m.peTTM: 83.3 -> 116.9; m.peFwd: 26.9 -> 44.6; m.evEbitda: 66.7 -> 99.3; m.evSales: 5.9 -> 10.4; m.gross: 77.4 -> 78.1; m.op: 7.3 -> 13.3; m.net: 8.2 -> 9.6; m.roe: 3.7 -> 4.3; m.revCagrHist: 11.2 -> 10.6; d.revPS: 16.99 -> 17.45
- `S` SentinelOne: price: 14.79 -> 22.38; mcap: 5.07 -> 7.79; m.peFwd: 29.9 -> 48.5; m.evSales: 4.2 -> 6.5; m.gross: 73.2 -> 72.5; m.op: -28.8 -> -22.7; m.net: -30.4 -> -31.0; m.roe: -21.4 -> -23.0; m.revCagrHist: 20.8 -> 20.6; d.revPS: 3.16 -> 3.28
- `RPD` Rapid7: price: 7.21 -> 11.62; mcap: 0.48 -> 0.78; m.peTTM: 20.6 -> 37.5; m.peFwd: 4.6 -> 5.7; m.evEbitda: 13.6 -> 17.9; m.evSales: 0.9 -> 1.2; m.gross: 69.7 -> 69.3; m.op: 0 -> 2.3; m.net: 2.6 -> 2.4; m.roe: 19.7 -> 14.0; m.revCagrHist: -0.3 -> -1.5; d.revPS: 13.16 -> 12.98
- `QLYS` Qualys: price: 110.2 -> 172.43; mcap: 3.88 -> 5.97; m.peTTM: 19.7 -> 29.9; m.peFwd: 13.3 -> 20.4; m.evEbitda: 14.1 -> 22.0; m.evSales: 5.1 -> 8.0; m.gross: 83.2 -> 83.4; m.op: 35 -> 34.0; m.roe: 37.7 -> 38.6; m.revCagrHist: 9.8 -> 11.0; d.revPS: 19.06 -> 19.74
- `TENB` Tenable: price: 26.8 -> 33.49; mcap: 2.96 -> 3.69; m.peTTM: 999 -> 558.2; m.peFwd: 12.3 -> 15.4; m.evEbitda: 74.4 -> 71.0; m.evSales: 3 -> 3.7; m.gross: 78.2 -> 78.1; m.op: 4.3 -> 4.8; m.net: -1.2 -> 0.6; m.roe: -3.7 -> 2.5; m.revCagrHist: 9.6 -> 8.6; d.revPS: 8.59 -> 8.96
- `GEN` Gen Digital: price: 24.62 -> 21.62; mcap: 14.83 -> 12.94; m.peTTM: 15.7 -> 12.6; m.peFwd: 7.5 -> 6.5; m.evEbitda: 9.5 -> 8.5; m.evSales: 4.5 -> 4.1; m.gross: 78.5 -> 78.0; m.op: 63.4 -> 35.6; m.net: 19.5 -> 20.7; m.roe: 39.9 -> 41.9; m.revCagrHist: 27 -> 6.3; d.revPS: 8.17 -> 8.36
- meta: data-date stamped to 2026-09-28 in hero

## finance.js

- changed: 27 · skipped: 2 · review: 1

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 154.31; mcap: 79.36 -> 86.63; m.peTTM: 20.6 -> 21.8; m.peFwd: 15.9 -> 17.5; m.evEbitda: 18 -> 15.8; m.evSales: 9.5 -> 10.1; m.op: 57.3 -> 52.6; m.net: 37.7 -> 38.2; m.roe: 13.9 -> 14.1; m.revCagrHist: 20.4 -> 4.8; d.revPS: 18.3 -> 18.59
- `CME` CME Group: price: 263.8 -> 264.48; mcap: 95.32 -> 95.1; m.peTTM: 22.5 -> 22.4; m.peFwd: 20.4 -> 20.5; m.evEbitda: 20 -> 20.3; m.evSales: 16 -> 14.3; m.op: 69.8 -> 65.0; m.net: 63.3 -> 63.4; m.roe: 15.9 -> 15.8; m.revCagrHist: 14.4 -> 0.8; d.revPS: 18.75 -> 18.78
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 82.66; mcap: 58.77 -> 52.83; m.peTTM: 38 -> 29.7; m.peFwd: 16.8 -> 15.3; m.evEbitda: 17 -> 16.7; m.evSales: 7.5 -> 5.4; m.gross: 68 -> 88.7; m.op: 24.9 -> 29.0; m.net: 13.4 -> 14.6; m.roe: 6.4 -> 7.7; m.revCagrHist: 4.6 -> 6.7
- `SPGI` S&P Global: price: 426.38 -> 403.3; mcap: 126.21 -> 118.89; m.peTTM: 27 -> 24.6; m.peFwd: 19.2 -> 19.9; m.evEbitda: 24 -> 16.7; m.evSales: 12 -> 8.4; m.gross: 73 -> 70.9; m.op: 44.3 -> 44.8; m.net: 30.4 -> 30.5; m.roe: 13.9 -> 14.3; d.revPS: 52.03 -> 53.79
- `MSCI` MSCI Inc: price: 608.52 -> 551.36; mcap: 44.26 -> 40.08; m.peTTM: 34.8 -> 30.1; m.peFwd: 27 -> 24.5; m.evEbitda: 28 -> 23.6; m.evSales: 18 -> 13.9; m.gross: 82 -> 83.0; m.op: 53.7 -> 56.3; m.revCagrHist: 14.1 -> 12.2; d.revPS: 42.95 -> 44.9
- `MCO` Moody's: price: 450.69 -> 468.7; mcap: 78.72 -> 81.17; m.peTTM: 32.4 -> 30.1; m.peFwd: 24.2 -> 24.8; m.evEbitda: 25 -> 21.6; m.evSales: 13 -> 10.7; m.gross: 72 -> 75.0; m.op: 45.7 -> 49.5; m.net: 31.7 -> 34.3; m.roe: 71.4 -> 76.9; m.revCagrHist: 8.1 -> 15.1; d.revPS: 44.16 -> 46.13
- `V` Visa: price: 322.96 -> 367.38; mcap: 614.19 -> 689.7; m.peTTM: 28.2 -> 31.2; m.peFwd: 21.7 -> 24.5; m.evEbitda: 24 -> 22.1; m.evSales: 20 -> 15.4; m.gross: 80 -> 97.7; m.op: 67.3 -> 66.1; m.net: 51.7 -> 50.8; m.roe: 60.3 -> 61.2; m.revCagrHist: 17.1 -> 14.4; d.revPS: 22.45 -> 23.4
- `MA` Mastercard: price: 489.08 -> 567.65; mcap: 432.14 -> 497.27; m.peTTM: 28.3 -> 31.3; m.peFwd: 21.5 -> 24.7; m.evEbitda: 28 -> 23.0; m.evSales: 24 -> 14.5; m.op: 60.8 -> 61.1; m.net: 45.9 -> 46.3; m.roe: 232.1 -> 241.2; m.revCagrHist: 15.8 -> 14.1; d.revPS: 37.72 -> 39.27
- `PYPL` PayPal: price: 40.7 -> 55.04; mcap: 35.9 -> 47.08; m.peTTM: 7.6 -> 10.4; m.peFwd: 7.1 -> 9.5; m.evEbitda: 9 -> 7.8; m.evSales: 2 -> 1.5; m.gross: 46 -> 40.5; m.op: 18 -> 17.0; m.net: 15 -> 14.4; m.roe: 25.1 -> 24.5; m.revCagrHist: 7.2 -> 4.8; d.revPS: 35.86 -> 37.18
- `JPM` JPMorgan Chase: price: 309.14 -> 343.06; mcap: 828.34 -> 911.92; m.peTTM: 14.8 -> 14.7; m.peFwd: 13.1 -> 13.7; m.evSales: 3.5 -> 4.0; m.op: 43.7 -> 50.4; m.net: 33.9 -> 34.9; m.roe: 16.5 -> 17.8; m.revCagrHist: 12.7 -> 30.4; d.revPS: 63.1 -> 68.35
- `BAC` Bank of America: price: 54.54 -> 56.7; mcap: 387.05 -> 396.49; m.peTTM: 13.5 -> 13.1; m.peFwd: 10.8 -> 10.7; m.op: 36 -> 38.3; m.net: 29 -> 29.5; m.roe: 10.6 -> 11.2; m.revCagrHist: 8.1 -> 16.8; d.revPS: 14.78 -> 15.59
- `WFC` Wells Fargo: price: 81.97 -> 82.97; mcap: 250.84 -> 250.9; m.peTTM: 12.7 -> 12.1; m.evSales: 3.2 -> 3.0; m.op: 29.4 -> 37.4; m.net: 26.7 -> 27.2; m.roe: 12 -> 12.6; m.revCagrHist: 5.7 -> 9.5; d.revPS: 25.74 -> 26.74
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 15.31; mcap: 296.75 -> 347.26; m.peTTM: 14.2 -> 14.4; m.peFwd: 9.1 -> 10.6; m.op: 50.7 -> 58.8; m.net: 35 -> 37.8; m.roe: 11.6 -> 13.1; m.revCagrHist: 3.3 -> 25.4
- `GS` Goldman Sachs: price: 1001.29 -> 935.45; mcap: 295.39 -> 272.38; m.peTTM: 18.3 -> 14.5; m.peFwd: 15.3 -> 12.7; m.evSales: 3 -> 0.6; m.gross: 55 -> 82.1; m.op: 38.6 -> 42.2; m.net: 29.4 -> 31.0; m.roe: 14.5 -> 16.9; m.revCagrHist: 14.5 -> 42.5; d.revPS: 199.49 -> 221.5
- `MS` Morgan Stanley: price: 206.66 -> 196.31; mcap: 325.96 -> 308.32; m.peTTM: 18.7 -> 15.8; m.peFwd: 16.3 -> 14.4; m.evSales: 3.4 -> 2.4; m.gross: 58 -> 87.6; m.op: 40.6 -> 41.6; m.net: 24.8 -> 25.9; m.roe: 16.4 -> 18.0; m.revCagrHist: 16.3 -> 28.0; d.revPS: 46.66 -> 49.81
- `SCHW` Charles Schwab: price: 89.27 -> 99.03; mcap: 155.25 -> 171.26; m.peTTM: 17.7 -> 18.0; m.peFwd: 12.4 -> 12.6; m.evSales: 5 -> 6.0; m.gross: 70 -> 97.5; m.op: 49.4 -> 52.3; m.net: 38 -> 38.8; m.roe: 19.1 -> 20.3; m.revCagrHist: 15.8 -> 20.9; d.revPS: 13.89 -> 14.75
- `IBKR` Interactive Brokers: price: 85.42 -> 89.24; mcap: 144.89 -> 152.05; m.peTTM: 36.7 -> 35.4; m.peFwd: 29.7 -> 27.9; m.gross: 90 -> 93.0; m.op: 76.8 -> 76.5; m.net: 16.1 -> 16.5; m.roe: 23.6 -> 24.0; m.revCagrHist: 16.8 -> 26.3; d.revPS: 14.54 -> 15.33
- `HOOD` Robinhood Markets: price: 86.36 -> 119.4; mcap: 77.77 -> 107.35; m.peTTM: 41.9 -> 52.8; m.peFwd: 30.8 -> 35.3; m.evSales: 18 -> 21.6; m.gross: 88 -> 91.9; m.op: 38.5 -> 43.9; m.net: 41.1 -> 42.0; m.roe: 21.5 -> 23.6; m.revCagrHist: 15.1 -> 32.3; d.revPS: 5.17 -> 5.5
- `FUTU` Futu Holdings: price: 92.93 -> 111.87; mcap: 13.03 -> 15.68; m.peTTM: 10.3 -> 11.2; m.peFwd: 7.6 -> 9.1; m.gross: 85 -> 94.1; m.op: 64.9 -> 66.7; m.net: 45 -> 46.2; m.roe: 27.8 -> 30.5; m.revCagrHist: 28.8 -> 35.6
- `BLK` BlackRock: price: 1010.68 -> 1086.31; mcap: 164.59 -> 176.5; m.peTTM: 25.4 -> 26.0; m.peFwd: 16.6 -> 16.9; m.evEbitda: 16 -> 15.9; m.evSales: 7 -> 6.5; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.roe: 11.9 -> 12.3; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 175.98
- `BX` Blackstone: price: 118.48 -> 118.42; mcap: 144.81 -> 141.55; m.peTTM: 30.4 -> 26.6; m.peFwd: 15.7 -> 15.8; m.evSales: 18 -> 7.8; m.op: 38 -> 54.4; m.net: 21.2 -> 22.7; m.roe: 29.5 -> 31.4; m.revCagrHist: 5.7 -> 28.6; d.revPS: 18.38 -> 19.65
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 505.48; mcap: 1043.23 -> 1082.09; m.peTTM: 14.4 -> 12.7; m.peFwd: 22.5 -> 22.8; m.gross: 30 -> 30.3; m.op: 14.4 -> 32.6; m.net: 19.3 -> 22.3; m.roe: 10.5 -> 12.1; m.revCagrHist: 4.4 -> 10.0
- `PGR` Progressive: price: 204.2 -> 205.5; mcap: 119.15 -> 119.27; m.peTTM: 10.4 -> 10.3; m.peFwd: 12.6 -> 0.2; m.evEbitda: 12 -> 8.2; m.evSales: 2.2 -> 1.4; m.gross: 30 -> 18.5; m.op: 16.4 -> 18.2; m.net: 12.9 -> 12.8; m.roe: 37.9 -> 34.9; m.revCagrHist: 8.7 -> 7.3; d.revPS: 152.53 -> 155.48
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 424.7; m.peTTM: 12.3 -> 13.9; m.peFwd: 11.5 -> 12.7; m.evEbitda: 9 -> 2.9; m.evSales: 1.5 -> 0.5; m.gross: 28 -> 25.0; m.op: 19.3 -> 13.7; m.net: 10.4 -> 9.9; m.roe: 18.7 -> 19.6; m.revCagrHist: 8.8 -> 12.1
- `AXP` American Express: price: 313.34 -> 308.89; mcap: 213.8 -> 208.6; m.peTTM: 19.6 -> 18.7; m.peFwd: 15.6 -> 15.3; m.evSales: 3.5 -> 3.1; m.gross: 55 -> 62.3; m.op: 21.2 -> 20.3; m.net: 16.3 -> 16.1; m.revCagrHist: 11.6 -> 12.8; d.revPS: 99.58 -> 103.45
- `INTU` Intuit: price: 284.22 -> 275.79; mcap: 77.74 -> 73.7; m.peTTM: 17.3 -> 16.8; m.peFwd: 10.4 -> 10.2; m.evEbitda: 12.1 -> 10.9; m.evSales: 3.7 -> 3.5; m.gross: 80.8 -> 81.0; m.op: 47 -> 17.6; m.net: 21.9 -> 21.3; m.roe: 22.5 -> 23.6; m.revCagrHist: 10.4 -> 13.7; d.revPS: 75.14 -> 77.71
- meta: data-date stamped to 2026-09-28 in hero/footer

**Needs review**
- `ALV` Allianz — currency **EUR**: USD mcap not derivable (missing shares/FX); mcap left unchanged

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `BK` BNY — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 88.07; mcap: 41.39 -> 38.36; m.peTTM: 96 -> 154.5; m.peFwd: 50 -> 48.2; m.evEbitda: 46.2 -> 48.2; m.evSales: 11.7 -> 11.1; m.gross: 36.8 -> 35.1; m.op: 18.2 -> 9.1; m.net: 18.4 -> 10.2; m.roe: 9.6 -> 5.1; m.revCagrHist: 7.1 -> -7.2
- `UEC` Uranium Energy: price: 9.42 -> 9.41; m.evSales: 206.7 -> 206.5
- `NXE` NexGen Energy: price: 9.27 -> 9.19; mcap: 6.14 -> 6.16; m.roe: -29.6 -> -17.7
- `SMR` NuScale Power: price: 9.29 -> 8.42; mcap: 3.22 -> 3.46; m.evSales: 121.8 -> 219.1; m.gross: 23.8 -> 23.5; m.roe: -83 -> -55.2; m.revCagrHist: -95.8 -> -99.1; d.revPS: 0.09 -> 0.04
- `OKLO` Oklo: price: 54.02 -> 38.04; mcap: 9.4 -> 7.08; m.gross: 0 -> 40.4; m.roe: -8.9 -> -7.7; d.revPS: 0 -> 0.01
- `BWXT` BWX Technologies: price: 183 -> 138.47; mcap: 16.77 -> 12.69; m.peTTM: 48.9 -> 35.9; m.peFwd: 35.2 -> 26.4; m.evEbitda: 39.3 -> 29.6; m.evSales: 5.4 -> 4.0; m.gross: 22.7 -> 22.1; m.net: 10.2 -> 10.1; m.roe: 29 -> 28.3; m.revCagrHist: 26.1 -> 18.0; d.revPS: 36.87 -> 38.35
- `LEU` Centrus Energy: price: 146.61 -> 147.07; mcap: 2.88 -> 3.01; m.peTTM: 53.1 -> 79.9; m.peFwd: 36.9 -> 38.5; m.evEbitda: 64.2 -> 222.1; m.evSales: 4.9 -> 4.7; m.gross: 25.7 -> 23.7; m.op: -0.3 -> 5.3; m.net: 13.4 -> 10.2; m.roe: 12.3 -> 8.1; m.revCagrHist: 4.9 -> 14.0; d.revPS: 24.23 -> 24.67
- `CEG` Constellation Energy: price: 242.3 -> 263.27; mcap: 86.53 -> 93.28; m.peTTM: 21.9 -> 25.7; m.peFwd: 17.8 -> 19.8; m.evEbitda: 13.8 -> 14.8; m.evSales: 3.7 -> 3.8; m.gross: 23.3 -> 22.1; m.op: 21.9 -> 8.7; m.net: 12.7 -> 11.1; m.roe: 16.1 -> 15.1; m.revCagrHist: 63.8 -> 23.0; d.revPS: 92.4 -> 93.48
- `VST` Vistra: price: 138.54 -> 138.46; mcap: 46.71 -> 46.47; m.peTTM: 23.2 -> 23.3; m.peFwd: 12.6 -> 13.4; m.evEbitda: 10.1 -> 10.4; m.evSales: 3.5 -> 3.6; m.gross: 38.6 -> 38.3; m.op: 26.6 -> 13.8; m.net: 11.5 -> 11.6; m.roe: 42.9 -> 43.0; m.revCagrHist: 43.4 -> -5.5; d.revPS: 57.42 -> 56.84
- `GEV` GE Vernova: price: 867.09 -> 957.63; mcap: 233 -> 255.05; m.peTTM: 25.3 -> 27.5; m.peFwd: 35.4 -> 38.1; m.evEbitda: 66.8 -> 63.0; m.evSales: 5.8 -> 6.0; m.gross: 20.3 -> 20.6; m.op: 5.5 -> 7.5; m.net: 23.8 -> 23.0; m.roe: 75.7 -> 82.6; m.revCagrHist: 16.3 -> 21.9; d.revPS: 145.56 -> 153.78
- `ETN` Eaton: price: 375.46 -> 439.98; mcap: 145.79 -> 170.89; m.peTTM: 36.8 -> 44.9; m.peFwd: 23.9 -> 27.3; m.evEbitda: 26.3 -> 28.9; m.evSales: 5.9 -> 6.4; m.gross: 37.1 -> 36.0; m.op: 16.1 -> 16.6; m.net: 14 -> 12.8; m.roe: 20.8 -> 19.7; m.revCagrHist: 16.8 -> 21.4; d.revPS: 73.34 -> 77.29
- `PWR` Quanta Services: price: 650.92 -> 649.13; mcap: 97.68 -> 97.59; m.peTTM: 89.5 -> 74.1; m.peFwd: 39.5 -> 32.8; m.evEbitda: 39 -> 34.1; m.evSales: 3.4 -> 3.2; m.gross: 15.1 -> 15.5; m.op: 4.2 -> 7.2; m.net: 3.7 -> 4.0; m.roe: 13.5 -> 15.3; m.revCagrHist: 26.3 -> 41.1; d.revPS: 201.93 -> 219.94
- `NEE` NextEra Energy: price: 85.12 -> 76.08; mcap: 177.53 -> 158.7; m.peTTM: 21.6 -> 17.1; m.peFwd: 19.4 -> 17.3; m.evEbitda: 20.6 -> 19.0; m.evSales: 10.5 -> 9.7; m.gross: 61.4 -> 61.0; m.op: 30.2 -> 31.5; m.net: 29.4 -> 32.4; m.roe: 10.3 -> 11.7; m.revCagrHist: 7.3 -> 12.4; d.revPS: 13.45 -> 13.81
- `FSLR` First Solar: price: 249.27 -> 177.71; mcap: 26.78 -> 19.1; m.peTTM: 16.1 -> 11.0; m.peFwd: 10.6 -> 7.6; m.evEbitda: 11 -> 7.4; m.evSales: 4.6 -> 3.3; m.gross: 41.7 -> 44.0; m.op: 33.1 -> 42.6; m.net: 30.7 -> 32.5; m.roe: 18.4 -> 18.5; m.revCagrHist: 23.6 -> -3.7; d.revPS: 50.51 -> 50.1
- meta: data-date stamped to 2026-09-28 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 45.48; mcap: 21.14 -> 18.43; m.peTTM: 145.2 -> 999; m.evSales: 102.3 -> 62.0; m.gross: 36.1 -> 30.9; m.net: 174.9 -> 0.0; m.roe: 11.3 -> -60.5; m.revCagrHist: 202 -> 286.8; d.revPS: 0.6 -> 0.72
- `RGTI` Rigetti Computing: price: 19.45 -> 16.66; mcap: 6.46 -> 5.56; m.gross: 30 -> 34.6; m.roe: -57.1 -> -43.8; m.revCagrHist: 198.9 -> 185.3; d.revPS: 0.03 -> 0.04
- `QBTS` D-Wave Quantum: price: 23.25 -> 17.41; mcap: 8.61 -> 6.61; m.gross: 66.3 -> 64.2; m.roe: -55.3 -> -28.0; m.revCagrHist: -80.9 -> -0.6
- `QUBT` Quantum Computing Inc: price: 9.53 -> 8.96; mcap: 2.15 -> 2.03; m.evSales: 269.7 -> 111.7; m.net: 0 -> -152.5; m.roe: -4.4 -> -1.5; d.revPS: 0.02 -> 0.05
- `IBM` IBM: price: 272.36 -> 225.51; mcap: 255.99 -> 212.46; m.peTTM: 24.1 -> 20.0; m.peFwd: 20.3 -> 17.2; m.evEbitda: 18.9 -> 16.4; m.evSales: 4.6 -> 3.9; m.gross: 58.4 -> 58.1; m.op: 13.8 -> 16.5; m.net: 15.6 -> 15.5; m.roe: 35.8 -> 34.5; m.revCagrHist: 9.5 -> 1.1; d.revPS: 73.71 -> 73.7
- `GOOGL` Alphabet: price: 356.38 -> 343.92; mcap: 4346.03 -> 4206.12; m.peTTM: 27.2 -> 17.3; m.peFwd: 24.6 -> 22.8; m.evEbitda: 26.6 -> 23.7; m.evSales: 10.1 -> 9.2; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `MSFT` Microsoft: price: 397.36 -> 516.17; mcap: 2951.76 -> 3832.84; m.peTTM: 23.7 -> 28.7; m.peFwd: 20.5 -> 21.8; m.evEbitda: 16.3 -> 20.0; m.evSales: 9.4 -> 11.7; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `HON` Honeywell: price: 205.88 -> 212.55; mcap: 130.46 -> 67.37; m.peTTM: 32.9 -> 8.2; m.peFwd: 18 -> 21.5; m.evEbitda: 18.4 -> 11.0; m.evSales: 4.2 -> 2.5; m.gross: 36.9 -> 36.5; m.op: 21 -> 20.2; m.net: 10.9 -> 21.6; m.roe: 24.3 -> 46.6; m.revCagrHist: 2.4 -> 4.3; d.revPS: 59.25 -> 119.9
- `FORM` FormFactor: price: 115.81 -> 129.69; mcap: 9.03 -> 10.13; m.peTTM: 133.1 -> 89.4; m.peFwd: 41.5 -> 36.6; m.evEbitda: 63.7 -> 52.6; m.evSales: 10.4 -> 10.9; m.gross: 42.2 -> 46.2; m.op: 17.7 -> 24.1; m.net: 8.1 -> 12.8; m.roe: 6.8 -> 11.0; m.revCagrHist: 32 -> 31.9; d.revPS: 10.84 -> 11.61
- `NVDA` NVIDIA: price: 200.42 -> 225.07; mcap: 4854.37 -> 5434.77; m.peTTM: 30.7 -> 28.5; m.peFwd: 15.7 -> 14.4; m.evEbitda: 29.1 -> 26.8; m.evSales: 19 -> 17.8; m.gross: 74.1 -> 74.7; m.op: 65.6 -> 66.2; m.net: 63 -> 63.7; m.roe: 114.3 -> 117.2; m.revCagrHist: 85.2 -> 105.9; d.revPS: 10.42 -> 12.48
- meta: data-date stamped to 2026-09-28 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 372.11; mcap: 1433.15 -> 1469.67; m.peTTM: 370.5 -> 344.5; m.peFwd: 152.6 -> 171.3; m.evEbitda: 126.6 -> 134.2; m.evSales: 14.4 -> 13.9; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SERV` Serve Robotics: price: 6.98 -> 4.45; mcap: 0.59 -> 0.39; m.evSales: 68.7 -> 20.5; m.roe: -52 -> -64.6; d.revPS: 0.08 -> 0.11
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 80.5; mcap: 180.91 -> 175.1; m.peTTM: 37.5 -> 35.8; m.peFwd: 29.2 -> 26.9; m.evEbitda: 21.2 -> 20.9; m.evSales: 4.3 -> 4.2; m.gross: 40.4 -> 40.2; m.op: 20.6 -> 16.9; m.net: 14.3 -> 14.1; m.roe: 33.6 -> 32.6; m.revCagrHist: 18.3 -> 14.2
- `6954` Fanuc (via `6954.T`): price: 6691 -> 5943.0; mcap: 38.9 -> 35.15; m.peTTM: 37.5 -> 33.3; m.peFwd: 38.7 -> 34.3; m.evEbitda: 24.1 -> 19.9; m.evSales: 6.5 -> 5.4; m.gross: 38.3 -> 38.4; m.op: 23.9 -> 23.2; m.net: 19.4 -> 20.1; m.roe: 9.4 -> 10.0; m.revCagrHist: 10.6 -> 17.7
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 4453.0; mcap: 9.68 -> 7.35; m.peTTM: 44.1 -> 32.8; m.peFwd: 29.2 -> 21.7; m.evEbitda: 24.2 -> 18.3; m.evSales: 3 -> 2.2; m.gross: 35.3 -> 35.0; m.op: 8.8 -> 6.1; m.net: 6.5 -> 6.1; m.roe: 7.8 -> 7.5; m.revCagrHist: 2 -> 10.6
- `ROK` Rockwell Automation: price: 440.07 -> 434.15; mcap: 48.97 -> 48.31; m.peTTM: 45.7 -> 40.7; m.peFwd: 30.3 -> 29.2; m.evEbitda: 26.7 -> 24.5; m.evSales: 6 -> 5.7; m.gross: 48.9 -> 49.1; m.op: 20.7 -> 21.0; m.net: 12.4 -> 13.4; m.roe: 27.2 -> 30.6; m.revCagrHist: 11.9 -> 7.9; d.revPS: 78.4 -> 80.15
- `EMR` Emerson Electric: price: 137.11 -> 158.23; mcap: 76.8 -> 88.26; m.peTTM: 31.7 -> 34.6; m.peFwd: 19.1 -> 21.8; m.evEbitda: 15.2 -> 16.5; m.evSales: 4.9 -> 5.4; m.gross: 52.7 -> 53.2; m.op: 24.2 -> 26.9; m.net: 13.4 -> 13.8; m.roe: 12.3 -> 12.8; m.revCagrHist: 2.9 -> 7.0; d.revPS: 32.6 -> 33.22
- `SIEGY` Siemens: price: 153.07 -> 159.65; mcap: 235.46 -> 244.41; m.peTTM: 27.5 -> 28.0; m.peFwd: 20.8 -> 21.3; m.evEbitda: 23.9 -> 23.4; m.gross: 38.8 -> 39.4; m.op: 12.7 -> 14.9; m.net: 9.7 -> 9.8; m.roe: 12.6 -> 12.5; m.revCagrHist: 0 -> 7.3
- `PH` Parker Hannifin: price: 875.6 -> 978.33; mcap: 110.4 -> 123.38; m.peTTM: 32.3 -> 34.4; m.peFwd: 25.7 -> 24.8; m.evEbitda: 21.8 -> 23.2; m.evSales: 5.7 -> 6.1; m.gross: 37.4 -> 37.5; m.op: 21.5 -> 23.5; m.net: 16.6 -> 17.0; m.roe: 24.8 -> 25.1; m.revCagrHist: 10.6 -> 9.8; d.revPS: 165.81 -> 170.22
- `NOVT` Novanta: price: 154.58 -> 143.93; mcap: 5.51 -> 5.44; m.peTTM: 111.2 -> 91.1; m.peFwd: 37.3 -> 33.0; m.evEbitda: 30.2 -> 27.7; m.evSales: 5.4 -> 4.9; m.gross: 44.2 -> 44.5; m.op: 11.7 -> 11.5; m.net: 5.3 -> 6.0; m.roe: 5.2 -> 5.1; m.revCagrHist: 10.4 -> 10.3; d.revPS: 26.66 -> 26.45
- `CGNX` Cognex: price: 58.69 -> 58.66; mcap: 9.77 -> 9.87; m.peTTM: 69 -> 56.4; m.peFwd: 33.3 -> 29.1; m.evEbitda: 42.1 -> 35.7; m.evSales: 9.1 -> 8.8; m.gross: 68 -> 68.9; m.op: 22.3 -> 29.4; m.net: 13.6 -> 16.1; m.roe: 9.7 -> 11.1; m.revCagrHist: 24.3 -> 16.9; d.revPS: 6.25 -> 6.51
- `SYM` Symbotic: price: 41.24 -> 43.47; mcap: 24.89 -> 26.32; m.peFwd: 57.4 -> 56.3; m.evEbitda: 159.3 -> 76.9; m.evSales: 1.4 -> 1.6; m.gross: 20.4 -> 21.3; m.op: 1.1 -> 4.6; m.net: -0.3 -> 0.3; m.roe: -5.7 -> 4.4; m.revCagrHist: 23.1 -> 21.7
- `ZBRA` Zebra Technologies: price: 216.79 -> 370.04; mcap: 10.33 -> 17.51; m.peTTM: 26.2 -> 33.9; m.peFwd: 10.5 -> 16.7; m.evEbitda: 12.7 -> 17.2; m.evSales: 2.3 -> 3.5; m.gross: 48.2 -> 49.6; m.op: 15 -> 21.3; m.net: 7.5 -> 9.2; m.roe: 11.8 -> 15.3; m.revCagrHist: 14.3 -> 20.4; d.revPS: 111.14 -> 118.3
- meta: data-date stamped to 2026-09-28 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 0

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 33730.0; mcap: 113.02 -> 154.99; m.peTTM: 48.8 -> 65.3; m.peFwd: 105.2 -> 141.9; m.evEbitda: 34.3 -> 41.7; m.evSales: 15.9 -> 19.7; m.gross: 64.3 -> 65.7; m.op: 46.7 -> 51.7; m.net: 33.3 -> 37.3; m.roe: 57.6 -> 56.9; m.revCagrHist: 41.2 -> 39.3
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 5814.0; mcap: 78 -> 67.17; m.peTTM: 26.7 -> 23.0; m.peFwd: 20.4 -> 17.6; m.evEbitda: 12.7 -> 11.0; m.evSales: 4.3 -> 3.7; m.gross: 34.2 -> 33.9; m.op: 21.4 -> 26.2; m.roe: 10.7 -> 11.2; m.revCagrHist: 1.3 -> 5.4
- `6146` Disco (via `6146.T`): price: 68720 -> 54400.0; mcap: 46.43 -> 37.56; m.peTTM: 55.1 -> 43.6; m.peFwd: 50.5 -> 40.0; m.evEbitda: 36.8 -> 26.2; m.evSales: 16.7 -> 12.1; m.gross: 70.2 -> 70.8; m.op: 44 -> 42.7; m.net: 31 -> 31.6; m.roe: 30 -> 27.4; m.revCagrHist: 22 -> 27.1
- `6963` Rohm (via `6963.T`): price: 4679 -> 4833.0; mcap: 11.25 -> 11.87; m.peFwd: 53.8 -> 55.6; m.evEbitda: 26.4 -> 22.7; m.evSales: 3.7 -> 3.6; m.gross: 23.9 -> 24.8; m.op: 1 -> 7.1; m.net: -32.9 -> -30.4; m.revCagrHist: -3 -> 16.8
- `4004` Resonac (via `4004.T`): price: 15820 -> 14695.0; mcap: 17.84 -> 17.74; m.peTTM: 98.2 -> 50.4; m.peFwd: 63.4 -> 59.0; m.evEbitda: 24.1 -> 18.2; m.evSales: 2.6 -> 2.5; m.gross: 25.6 -> 27.4; m.op: 7.2 -> 13.9; m.net: 2.7 -> 4.2; m.roe: 5.5 -> 8.1; m.revCagrHist: -4.1 -> 15.0
- `6861` Keyence (via `6861.T`): price: 71270 -> 78500.0; mcap: 107.68 -> 121.17; m.peTTM: 38.8 -> 42.7; m.peFwd: 38.2 -> 42.0; m.evSales: 13.8 -> 14.2; m.gross: 83 -> 83.7; m.op: 53.6 -> 54.0; m.net: 38.1 -> 39.2; m.revCagrHist: 17.9 -> 32.8
- `6723` Renesas (via `6723.T`): price: 4222 -> 3459.0; mcap: 47.72 -> 40.23; m.peTTM: 999 -> 18.6; m.peFwd: 16.4 -> 12.3; m.evEbitda: 23.5 -> 16.0; m.evSales: 6.3 -> 4.8; m.gross: 58.1 -> 58.8; m.op: 24.3 -> 23.9; m.net: -0.7 -> 22.9; m.roe: -0.4 -> 14.0; m.revCagrHist: 23.2 -> 28.5
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 56320.0; mcap: 177.9 -> 162.85; m.peTTM: 50.3 -> 45.1; m.peFwd: 49 -> 44.0; m.evEbitda: 39.1 -> 32.5; m.evSales: 11.3 -> 9.6; m.gross: 45.3 -> 45.6; m.net: 23.5 -> 23.6; m.roe: 29.3 -> 30.9; m.revCagrHist: 8.6 -> 33.3
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 13960.0; mcap: 15.04 -> 16.8; m.peTTM: 26.2 -> 28.7; m.peFwd: 14.6 -> 16.0; m.evEbitda: 16.3 -> 18.7; m.evSales: 3.7 -> 4.0; m.gross: 38.5 -> 38.1; m.op: 25 -> 11.8; m.net: 15.2 -> 14.5; m.roe: 20.3 -> 18.9; m.revCagrHist: 9.1 -> -10.3
- `ASML` ASML Holding: price: 1734.19 -> 1743.94; mcap: 668.39 -> 669.85; m.peTTM: 59.5 -> 60.2; m.peFwd: 36.2 -> 29.6; m.gross: 52.6 -> 52.7; m.op: 36 -> 37.1; m.net: 29.7 -> 30.1; m.roe: 52.2 -> 53.9; m.revCagrHist: 13.2 -> 21.3
- `LRCX` Lam Research: price: 321.8 -> 315.21; mcap: 402.43 -> 394.46; m.peTTM: 60.7 -> 54.6; m.peFwd: 40.4 -> 26.9; m.evEbitda: 51.2 -> 45.5; m.evSales: 18.5 -> 16.9; m.gross: 50 -> 50.5; m.op: 35 -> 37.4; m.net: 30.9 -> 31.3; m.roe: 66.8 -> 65.1; m.revCagrHist: 23.8 -> 30.0; d.revPS: 17.2 -> 18.51
- `KLAC` KLA Corp: price: 2135.64 -> 187.92; mcap: 278.97 -> 245.24; m.peTTM: 60.6 -> 51.3; m.peFwd: 42.4 -> 28.0; m.evEbitda: 47.9 -> 40.8; m.evSales: 21.4 -> 18.2; m.gross: 61.4 -> 61.3; m.op: 41.2 -> 42.5; m.net: 35.7 -> 35.6; m.roe: 95 -> 87.5; m.revCagrHist: 11.5 -> 15.2
- `TSM` TSMC: price: 408.75 -> 450.61; mcap: 2119.97 -> 2337.08; m.peTTM: 35.1 -> 33.6; m.peFwd: 20.9 -> 20.6; m.evEbitda: 5.2 -> 5.1; m.evSales: 3.6 -> 3.7; m.gross: 61.9 -> 64.2; m.op: 58.1 -> 60.3; m.net: 46.5 -> 49.9; m.roe: 36.2 -> 40.0; m.revCagrHist: 35.1 -> 36.0
- `AMAT` Applied Materials: price: 497.01 -> 485.0; mcap: 394.61 -> 384.89; m.peTTM: 46.7 -> 41.8; m.peFwd: 30.6 -> 26.3; m.evEbitda: 42.4 -> 37.7; m.evSales: 13.6 -> 12.4; m.gross: 49 -> 49.4; m.op: 31.9 -> 33.7; m.net: 29.3 -> 30.1; m.roe: 39.7 -> 41.1; m.revCagrHist: 11.4 -> 24.8; d.revPS: 36.48 -> 38.83
- `NVDA` NVIDIA: price: 200.42 -> 225.07; mcap: 4854.37 -> 5434.77; m.peTTM: 30.7 -> 28.5; m.peFwd: 15.7 -> 14.4; m.evEbitda: 29.1 -> 26.8; m.evSales: 19 -> 17.8; m.gross: 74.1 -> 74.7; m.op: 65.6 -> 66.2; m.net: 63 -> 63.7; m.roe: 114.3 -> 117.2; m.revCagrHist: 85.2 -> 105.9; d.revPS: 10.42 -> 12.48
- `AVGO` Broadcom: price: 372.1 -> 352.81; mcap: 1770.3 -> 1684.18; m.peTTM: 61.7 -> 45.1; m.peFwd: 19.2 -> 18.2; m.evEbitda: 43.3 -> 32.9; m.evSales: 24.1 -> 19.3; m.gross: 76.3 -> 75.5; m.op: 49 -> 54.3; m.net: 38.8 -> 42.9; m.roe: 37.3 -> 44.2; m.revCagrHist: 47.9 -> 85.5; d.revPS: 15.94 -> 18.77
- `AMD` AMD: price: 452.4 -> 630.63; mcap: 737.68 -> 1029.49; m.peTTM: 151.3 -> 161.3; m.peFwd: 34.6 -> 40.5; m.evEbitda: 98.1 -> 106.7; m.evSales: 19.5 -> 24.7; m.gross: 53.1 -> 55.7; m.op: 14.4 -> 17.2; m.net: 13.4 -> 15.6; m.roe: 8.1 -> 10.2; m.revCagrHist: 37.8 -> 50.1; d.revPS: 23.02 -> 25.36
- `INTC` Intel: price: 107.04 -> 123.0; mcap: 537.98 -> 650.19; m.peFwd: 69.6 -> 59.6; m.evEbitda: 39.8 -> 39.0; m.evSales: 10.5 -> 11.5; m.gross: 37.2 -> 38.9; m.op: 6.9 -> 12.2; m.net: -5.9 -> -19.8; m.roe: -2.9 -> -10.7; m.revCagrHist: 7.2 -> 25.4; d.revPS: 11.4 -> 11.62
- `ARM` Arm Holdings: price: 307.43 -> 310.32; mcap: 328.36 -> 331.42; m.peTTM: 357.5 -> 313.5; m.peFwd: 100.2 -> 101.6; m.evSales: 66.1 -> 63.6; m.op: 29.5 -> 7.6; m.net: 18.4 -> 20.2; m.roe: 12 -> 13.4; m.revCagrHist: 20.1 -> 22.4; d.revPS: 4.64 -> 4.85
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 270000.0; mcap: 1118.21 -> 1144.13; m.peFwd: 5.2 -> 3.8; m.evEbitda: 13.4 -> 7.6; m.evSales: 4.9 -> 3.5; m.gross: 47.7 -> 57.5; m.op: 42.8 -> 52.2; m.net: 21.5 -> 30.8; m.roe: 18.9 -> 30.8; m.revCagrHist: 69.2 -> 130.0
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 1768000.0; mcap: 960.23 -> 922.62; m.peFwd: 5.1 -> 3.7; m.evEbitda: 15.5 -> 8.8; m.evSales: 10.7 -> 6.6; m.gross: 68.3 -> 76.3; m.op: 71.5 -> 76.3; m.net: 56.9 -> 85.6; m.roe: 61.2 -> 92.7; m.revCagrHist: 198.1 -> 256.8
- `MU` Micron: price: 891.88 -> 1082.28; mcap: 1005.8 -> 1222.32; m.peTTM: 42.2 -> 24.4; m.peFwd: 8 -> 6.7; m.evEbitda: 27.2 -> 17.6; m.evSales: 17.2 -> 13.3; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 425.76; mcap: 88.18 -> 81.59; m.peTTM: 105.4 -> 74.0; m.peFwd: 26.7 -> 24.1; m.evEbitda: 56.9 -> 42.8; m.evSales: 11.1 -> 9.4; m.gross: 82.6 -> 82.9; m.op: 10.4 -> 14.5; m.net: 8.9 -> 11.4; m.roe: 3.8 -> 3.7; m.revCagrHist: 41.9 -> 42.4; d.revPS: 47.72 -> 49.64
- `CDNS` Cadence: price: 385.13 -> 326.13; mcap: 106.23 -> 89.81; m.peTTM: 90.2 -> 65.0; m.peFwd: 41 -> 34.1; m.evEbitda: 53.5 -> 42.2; m.evSales: 19.5 -> 15.6; m.gross: 86.1 -> 85.9; m.op: 29.7 -> 28.6; m.net: 21.2 -> 23.6; m.roe: 20.7 -> 23.2; m.revCagrHist: 18.7 -> 24.2; d.revPS: 20.37 -> 21.46
- `QCOM` Qualcomm: price: 191.2 -> 201.97; mcap: 201.52 -> 215.72; m.peTTM: 22.1 -> 23.1; m.peFwd: 17.9 -> 19.8; m.evEbitda: 15.9 -> 18.3; m.evSales: 4.7 -> 5.0; m.gross: 54.8 -> 54.2; m.op: 22.1 -> 18.5; m.net: 22.3 -> 21.0; m.roe: 36.1 -> 33.8; m.revCagrHist: -3.5 -> -4.0; d.revPS: 41.33 -> 41.28
- `GFS` GlobalFoundries: price: 74.82 -> 49.0; mcap: 41.03 -> 27.31; m.peTTM: 50.6 -> 38.3; m.peFwd: 29.7 -> 18.7; m.evEbitda: 19.6 -> 13.3; m.evSales: 5.8 -> 3.8; m.gross: 26.1 -> 27.1; m.op: 11 -> 9.7; m.net: 11.4 -> 10.3; m.roe: 6.8 -> 6.2; m.revCagrHist: 3.1 -> 5.8; d.revPS: 12.32 -> 12.52
- `LIN` Linde: price: 509.16 -> 469.89; mcap: 235.41 -> 216.61; m.peTTM: 33.8 -> 30.3; m.peFwd: 25.8 -> 24.0; m.evEbitda: 19.1 -> 17.5; m.evSales: 7.5 -> 6.8; m.gross: 48.8 -> 48.3; m.op: 28.5 -> 28.1; m.roe: 18.2 -> 18.4; m.revCagrHist: 8.2 -> 9.3; d.revPS: 74.18 -> 76.2
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 168.12; mcap: 123.3 -> 122.06; m.peTTM: 30.3 -> 30.2; m.peFwd: 23.7 -> 23.5; m.evEbitda: 15.6 -> 16.1; m.evSales: 4.3 -> 4.5; m.gross: 64.2 -> 64.6; m.op: 19.5 -> 20.1; m.roe: 13.4 -> 14.0; m.revCagrHist: -3.4 -> 0.8
- `ENTG` Entegris: price: 128.88 -> 151.89; mcap: 19.63 -> 23.21; m.peTTM: 74.5 -> 75.9; m.peFwd: 27.9 -> 30.3; m.evEbitda: 26.1 -> 28.9; m.evSales: 7.1 -> 7.9; m.gross: 44.8 -> 45.6; m.op: 17.9 -> 19.3; m.net: 8.2 -> 9.2; m.roe: 6.8 -> 7.7; m.revCagrHist: 5 -> 11.5; d.revPS: 21.3 -> 21.85
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 8308.0; mcap: 7.01 -> 6.34; m.peTTM: 33.8 -> 24.9; m.peFwd: 48 -> 42.6; m.evEbitda: 19.2 -> 14.6; m.evSales: 3.1 -> 3.7; m.gross: 31.5 -> 38.6; m.op: 8.3 -> 19.0; m.net: 6.1 -> 15.1; m.roe: 5.5 -> 19.4; m.revCagrHist: 92.9 -> 26.6
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 3819.0; mcap: 5.39 -> 4.74; m.peFwd: 16.1 -> 13.8; m.evEbitda: 12.6 -> 9.3; m.evSales: 1.4 -> 1.2; m.gross: 21.9 -> 22.7; m.op: 3.7 -> 12.4; m.net: -5.5 -> -3.9; m.roe: -5 -> -3.4; m.revCagrHist: -0.9 -> 25.7
- `3436` Sumco (via `3436.T`): price: 3275 -> 3020.0; mcap: 7.14 -> 6.72; m.peFwd: 66.5 -> 61.3; m.evEbitda: 13.4 -> 13.0; m.evSales: 3.6 -> 3.4; m.gross: 10.8 -> 9.3; m.op: -7.3 -> -2.7; m.net: -5.7 -> -6.6; m.roe: -3.5 -> -4.1; m.revCagrHist: -1 -> 10.4
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 144.25; mcap: 5.17 -> 5.87; m.peFwd: 63 -> 43.0; m.evEbitda: 40.4 -> 55.1; m.evSales: 7.6 -> 8.7; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 22310.0; mcap: 30.89 -> 39.91; m.peTTM: 82.3 -> 103.9; m.peFwd: 57.5 -> 72.2; m.evEbitda: 38.3 -> 45.7; m.evSales: 11.4 -> 14.4; m.gross: 31.6 -> 32.0; m.op: 14.1 -> 21.1; m.net: 15.3 -> 15.6; m.roe: 12.2 -> 12.7; m.revCagrHist: 18.6 -> 26.4
- `ASX` ASE Technology: price: 34.3 -> 44.31; mcap: 75.25 -> 115.37; m.peTTM: 53.6 -> 54.0; m.peFwd: 21.6 -> 22.7; m.evEbitda: 2 -> 2.3; m.gross: 18.5 -> 19.5; m.op: 10.1 -> 11.1; m.net: 7 -> 8.5; m.roe: 13.6 -> 17.0; m.revCagrHist: 17.2 -> 26.7
- `AMKR` Amkor Technology: price: 69.61 -> 53.61; mcap: 17.25 -> 13.32; m.peTTM: 40 -> 24.0; m.peFwd: 28.4 -> 19.1; m.evEbitda: 14.3 -> 10.2; m.evSales: 2.4 -> 1.8; m.gross: 14.4 -> 15.5; m.op: 6 -> 10.5; m.net: 6.2 -> 7.4; m.roe: 10 -> 12.5; m.revCagrHist: 27.5 -> 25.6; d.revPS: 28.6 -> 30.14
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 65.43; mcap: 18.86 -> 17.47; m.peTTM: 77.6 -> 60.6; m.peFwd: 50.1 -> 39.8; m.evEbitda: 22.6 -> 20.6; m.evSales: 3.6 -> 3.3; m.gross: 14.4 -> 14.7; m.op: 5.2 -> 6.1; m.net: 4.3 -> 4.9; m.roe: 5.4 -> 6.3; m.revCagrHist: -1.8 -> 11.7
- `TXN` Texas Instruments: price: 282.01 -> 278.07; mcap: 256.66 -> 253.95; m.peTTM: 48.3 -> 42.2; m.peFwd: 30 -> 26.1; m.evEbitda: 30.7 -> 27.4; m.evSales: 14.4 -> 13.4; m.gross: 57.3 -> 58.3; m.op: 37.8 -> 42.6; m.net: 29.1 -> 31.1; m.roe: 32.3 -> 35.2; m.revCagrHist: 18.6 -> 22.8; d.revPS: 20.29 -> 21.38
- `ADI` Analog Devices: price: 392.67 -> 393.6; mcap: 191.26 -> 190.72; m.peTTM: 58.5 -> 46.7; m.peFwd: 26.6 -> 24.1; m.evEbitda: 32 -> 28.5; m.evSales: 15.4 -> 14.2; m.gross: 64.5 -> 65.8; m.op: 38.1 -> 39.5; m.net: 26 -> 29.8; m.roe: 9.6 -> 12.2; m.revCagrHist: 37.2 -> 39.6; d.revPS: 25.98 -> 28.43
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 57.04; mcap: 112.72 -> 84.33; m.peTTM: 91.6 -> 69.6; m.peFwd: 29.1 -> 20.0; m.evEbitda: 25.8 -> 19.0; m.evSales: 6.9 -> 5.1; m.gross: 41.2 -> 41.1; m.op: 46.7 -> 14.2; m.net: 7.2 -> 7.8; m.roe: 6.3 -> 7.0; m.revCagrHist: 5 -> 12.6
- `NXPI` NXP Semiconductors: price: 285.56 -> 238.08; mcap: 72.1 -> 60.04; m.peTTM: 28.4 -> 20.3; m.peFwd: 16.2 -> 13.2; m.evEbitda: 19.3 -> 13.4; m.evSales: 6.4 -> 5.2; m.gross: 55.6 -> 56.1; m.op: 27.7 -> 30.4; m.net: 21 -> 22.6; m.roe: 25.8 -> 27.9; m.revCagrHist: 12.2 -> 19.5; d.revPS: 49.97 -> 52.23
- `STM` STMicroelectronics: price: 70.74 -> 51.93; mcap: 62.87 -> 46.32; m.peTTM: 442.1 -> 999; m.peFwd: 28.8 -> 20.4; m.evEbitda: 24.7 -> 16.1; m.evSales: 5 -> 3.4; m.gross: 34 -> 34.5; m.op: 3.7 -> 6.9; m.net: 1.2 -> 3.6; m.roe: 0.9 -> 2.7; m.revCagrHist: 23 -> 26.1; d.revPS: 13.88 -> 14.71
- `ON` ON Semiconductor: price: 110.17 -> 77.2; mcap: 42.83 -> 30.06; m.peTTM: 81 -> 51.1; m.peFwd: 25.8 -> 17.0; m.evEbitda: 21.5 -> 14.8; m.evSales: 7.3 -> 5.0; m.gross: 42.7 -> 42.8; m.op: 18.2 -> 19.5; m.net: 9.5 -> 10.2; m.roe: 7.5 -> 8.3; m.revCagrHist: 4.7 -> 9.2; d.revPS: 15 -> 15.57
- `MCHP` Microchip: price: 87.91 -> 78.69; mcap: 47.65 -> 42.73; m.peTTM: 399.6 -> 115.7; m.peFwd: 21.5 -> 17.2; m.evEbitda: 43.5 -> 31.8; m.evSales: 11.3 -> 9.3; m.gross: 57.7 -> 60.2; m.op: 17.1 -> 24.0; m.net: 4.9 -> 9.3; m.roe: 3.4 -> 7.2; m.revCagrHist: 35.1 -> 38.0; d.revPS: 8.72 -> 9.46
- `MRVL` Marvell: price: 252.59 -> 261.94; mcap: 220.97 -> 235.4; m.peTTM: 87.1 -> 87.0; m.peFwd: 40.9 -> 38.7; m.evEbitda: 82 -> 81.1; m.evSales: 25.5 -> 24.4; m.gross: 51.5 -> 52.2; m.op: 14.5 -> 16.7; m.net: 29 -> 27.9; m.roe: 16 -> 16.5; m.revCagrHist: 27.6 -> 36.5; d.revPS: 10.07 -> 10.81
- `AVT` Avnet: price: 85.39 -> 103.08; mcap: 7 -> 8.46; m.peTTM: 33 -> 25.7; m.peFwd: 10.8 -> 9.3; m.evEbitda: 13 -> 12.5; m.gross: 10.5 -> 10.4; m.op: 3.1 -> 3.9; m.net: 0.9 -> 1.2; m.roe: 4.3 -> 6.7; m.revCagrHist: 33.9 -> 47.7; d.revPS: 301.97 -> 336.34
- `ARW` Arrow Electronics: price: 215.49 -> 232.8; mcap: 11.02 -> 11.85; m.peTTM: 15.4 -> 14.9; m.peFwd: 10.1 -> 9.7; m.evEbitda: 10.4 -> 9.4; m.op: 4.2 -> 4.0; m.net: 2.2 -> 2.3; m.roe: 11.3 -> 12.0; m.revCagrHist: 39 -> 31.8; d.revPS: 649.87 -> 698.48
- `AAPL` Apple: price: 291.58 -> 341.07; mcap: 4282.54 -> 4977.64; m.peTTM: 35.3 -> 39.1; m.peFwd: 30.4 -> 35.6; m.evEbitda: 26.9 -> 29.8; m.evSales: 9.5 -> 10.7; m.gross: 47.9 -> 48.7; m.op: 32.3 -> 32.6; m.net: 27.2 -> 27.6; m.roe: 141.5 -> 148.8; m.revCagrHist: 16.6 -> 16.4; d.revPS: 30.53 -> 31.71
- `MSFT` Microsoft: price: 397.36 -> 516.17; mcap: 2951.76 -> 3832.84; m.peTTM: 23.7 -> 28.7; m.peFwd: 20.5 -> 21.8; m.evEbitda: 16.3 -> 20.0; m.evSales: 9.4 -> 11.7; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `GOOGL` Alphabet: price: 356.38 -> 343.92; mcap: 4346.03 -> 4206.12; m.peTTM: 27.2 -> 17.3; m.peFwd: 24.6 -> 22.8; m.evEbitda: 26.6 -> 23.7; m.evSales: 10.1 -> 9.2; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `AMZN` Amazon: price: 238 -> 249.67; mcap: 2560.19 -> 2693.02; m.peTTM: 31.6 -> 20.1; m.peFwd: 24.1 -> 23.8; m.evEbitda: 17 -> 16.7; m.gross: 50.6 -> 50.8; m.op: 13.1 -> 13.7; m.net: 12.2 -> 17.4; m.roe: 24.3 -> 30.6; m.revCagrHist: 16.6 -> 19.6; d.revPS: 69.48 -> 72.33
- `META` Meta Platforms: price: 570.98 -> 751.66; mcap: 1449.39 -> 1914.86; m.peTTM: 20.7 -> 28.3; m.peFwd: 15.8 -> 21.5; m.evEbitda: 13.3 -> 17.7; m.evSales: 6.8 -> 8.5; m.gross: 81.9 -> 81.7; m.op: 40.6 -> 34.8; m.net: 32.8 -> 29.8; m.roe: 32.9 -> 29.8; m.revCagrHist: 33.1 -> 28.0; d.revPS: 85.21 -> 90.25
- `TSLA` Tesla: price: 381.59 -> 372.11; mcap: 1433.15 -> 1469.67; m.peTTM: 370.5 -> 344.5; m.peFwd: 152.6 -> 171.3; m.evEbitda: 126.6 -> 134.2; m.evSales: 14.4 -> 13.9; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SONY` Sony Group: price: 20.76 -> 23.55; mcap: 122.26 -> 137.66; m.peTTM: 19.4 -> 20.1; m.peFwd: 17.4 -> 19.8; m.evEbitda: 10 -> 0.1; m.gross: 30.8 -> 32.2; m.op: 7.6 -> 16.7; m.net: -2.6 -> -1.7; m.roe: 12.4 -> 13.2; m.revCagrHist: 15.4 -> 8.2
- `CSCO` Cisco Systems: price: 118.8 -> 106.7; mcap: 468.24 -> 420.67; m.peTTM: 39.5 -> 32.0; m.peFwd: 24.9 -> 19.0; m.evEbitda: 28.5 -> 23.4; m.evSales: 8 -> 6.9; m.gross: 64.3 -> 64.5; m.op: 25 -> 27.7; m.net: 19.7 -> 21.0; m.roe: 25.2 -> 27.3; m.revCagrHist: 12 -> 17.6; d.revPS: 15.36 -> 16.02
- `DELL` Dell Technologies: price: 369.83 -> 562.89; mcap: 239.69 -> 357.89; m.peTTM: 29.5 -> 32.8; m.peFwd: 17.5 -> 19.3; m.evEbitda: 18.7 -> 21.5; m.evSales: 1.9 -> 2.5; m.gross: 19.2 -> 19.9; m.op: 8.3 -> 12.0; m.net: 6.3 -> 7.5; m.revCagrHist: 87.5 -> 57.7; d.revPS: 201.73 -> 230.48
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 83.35; mcap: 71.5 -> 67.6; m.peTTM: 45.7 -> 25.9; m.peFwd: 15.9 -> 14.7; m.evEbitda: 7.6 -> 6.6; m.evSales: 1.1 -> 1.0; m.gross: 17.2 -> 17.9; m.op: 4.8 -> 7.2; m.net: 3.5 -> 3.8; m.roe: 11.1 -> 11.6; m.revCagrHist: -11.8 -> -3.2
- `APD` Air Products: price: 276.51 -> 281.76; mcap: 61.57 -> 62.74; m.peTTM: 29.2 -> 999; m.peFwd: 19.4 -> 19.5; m.evEbitda: 21 -> 17.8; m.evSales: 6.5 -> 6.6; m.gross: 32 -> 32.1; m.op: 23.6 -> 25.5; m.net: 16.9 -> -0.4; m.roe: 12.4 -> 0.0; m.revCagrHist: 8.8 -> 4.6; d.revPS: 55.95 -> 56.57
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 5492.0; mcap: 14.2 -> 15.13; m.peTTM: 18.4 -> 19.2; m.peFwd: 19 -> 19.8; m.evSales: 2.2 -> 2.3; m.gross: 42.8 -> 43.1; m.op: 14 -> 14.6; m.net: 9.1 -> 9.9; m.roe: 11.2 -> 12.1; m.revCagrHist: 7.5 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3355.0; mcap: 26.02 -> 25.54; m.peTTM: 15.5 -> 14.6; m.peFwd: 15 -> 11.2; m.evEbitda: 9.8 -> 10.0; m.gross: 40.8 -> 40.2; m.op: 11 -> 6.2; m.net: 8.2 -> 7.6; m.roe: 7.7 -> 7.1; m.revCagrHist: 6.8 -> 10.3
- `MRK.DE` Merck KGaA: price: 136.45 -> 137.45; mcap: 20.37 -> 20.21; m.peTTM: 23.4 -> 25.2; m.peFwd: 15.7 -> 15.4; m.evEbitda: 11.9 -> 12.1; m.gross: 58.9 -> 59.1; m.op: 18.2 -> 13.9; m.net: 12.1 -> 11.2; m.roe: 8.5 -> 8.1; m.revCagrHist: -2.8 -> 3.4
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 580.2; mcap: 5.55 -> 6.1; m.peTTM: 14.5 -> 15.6; m.peFwd: 13.9 -> 14.9; m.evEbitda: 6.4 -> 6.5; m.gross: 28.7 -> 29.4; m.op: -4.6 -> 8.4; m.net: 2.6 -> 4.5; m.roe: 10 -> 13.2; m.revCagrHist: -11.3 -> 9.9
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 73.05; mcap: 2.96 -> 2.74; m.evEbitda: 12.3 -> 12.5; m.evSales: 2.8 -> 2.5; m.op: -9.7 -> -16.1; m.net: -5.1 -> -14.8; m.roe: -3.7 -> -10.4; m.revCagrHist: 3.1 -> -2.3
- `CEVA` CEVA: price: 41.08 -> 36.2; mcap: 1.14 -> 1.02; m.peFwd: 49.9 -> 45.1; m.evSales: 8.4 -> 7.0; m.gross: 87.2 -> 87.5; m.op: -18.8 -> -7.1; m.net: -10.5 -> -9.5; m.roe: -3.9 -> -3.6; m.revCagrHist: 11.5 -> 13.1; d.revPS: 4.45 -> 4.4
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 5285.0; mcap: 200.41 -> 265.65; m.peTTM: 60.2 -> 87.0; m.peFwd: 33.1 -> 36.3; m.evEbitda: 54.8 -> 73.5; m.evSales: 10.9 -> 13.9; m.gross: 47 -> 46.3; m.op: 15.3 -> 15.0; m.net: 16.9 -> 16.3; m.roe: 25.4 -> 23.9; m.revCagrHist: -2.7 -> 1.2
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 61.05; mcap: 54.37 -> 46.81; m.peTTM: 101.2 -> 59.9; m.peFwd: 52.4 -> 34.1; m.evEbitda: 94.5 -> 105.3; m.evSales: 45.2 -> 53.6; m.gross: 20.4 -> 21.8; m.op: 9.9 -> 17.1; m.net: 7.2 -> 10.0; m.roe: 2.6 -> 4.2; m.revCagrHist: 11.5 -> 36.1
- `UMC` UMC: price: 18.9 -> 24.31; mcap: 47.43 -> 60.97; m.peTTM: 30.5 -> 23.4; m.peFwd: 23.5 -> 27.7; m.gross: 29.6 -> 30.6; m.op: 18.5 -> 21.7; m.net: 20.8 -> 33.3; m.roe: 12.5 -> 21.3; m.revCagrHist: 5.5 -> 17.0
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 105.3; mcap: 22.67 -> 25.89; m.peTTM: 534.4 -> 421.2; m.peFwd: 111.9 -> 73.7; m.evEbitda: 12 -> 257.2; m.evSales: 95.5 -> 72.6; m.gross: 12.6 -> 14.1; m.op: -3 -> 1.3; m.net: 2.9 -> 3.8; m.roe: -0.8 -> -0.4; m.revCagrHist: 22.2 -> 26.8
- `285A` Kioxia (via `285A.T`): price: 74560 -> 53340.0; mcap: 253.66 -> 180.78; m.peTTM: 74 -> 52.8; m.evEbitda: 33.2 -> 12.9; m.evSales: 16.8 -> 8.1; m.gross: 43.3 -> 61.7; m.op: 59.5 -> 71.9; m.net: 23.7 -> 36.6; m.roe: 51.9 -> 87.1
- `SNDK` SanDisk: price: 1643.23 -> 1777.8; mcap: 243.35 -> 260.3; m.peTTM: 56.2 -> 24.1; m.peFwd: 9 -> 6.7; m.evEbitda: 42.6 -> 20.3; m.evSales: 18.2 -> 12.6; m.gross: 56 -> 71.5; m.op: 70 -> 78.5; m.net: 34.2 -> 56.5; m.roe: 39.3 -> 91.6; m.revCagrHist: 251 -> 371.6; d.revPS: 89.99 -> 137.74
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 5213.0; mcap: 68.69 -> 67.9; m.peTTM: 27.2 -> 26.3; m.peFwd: 32.6 -> 31.6; m.evEbitda: 16.8 -> 17.2; m.evSales: 1.9 -> 1.7; m.gross: 32.1 -> 32.5; m.op: 8 -> 9.3; m.net: 6.9 -> 7.0; m.roe: 10 -> 10.3; m.revCagrHist: 10 -> 14.0
- `WOLF` Wolfspeed: price: 43.42 -> 27.57; mcap: 2.26 -> 1.46; m.evSales: 3.9 -> 3.3; m.op: -72 -> -31.6; m.net: -72.9 -> 0.7; m.roe: -84.2 -> 1.8; m.revCagrHist: -19 -> -24.1; d.revPS: 12.96 -> 22.51
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 13705.0; mcap: 12.06 -> 12.73; m.peTTM: 19.7 -> 20.6; m.peFwd: 21.6 -> 22.6; m.evEbitda: 10.2 -> 9.9; m.gross: 28 -> 28.3; m.op: 16.5 -> 9.0; m.net: 8 -> 8.6; m.roe: 12.9 -> 14.3; m.revCagrHist: 8 -> 10.2
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 633.93; mcap: 67.48 -> 68.66; m.peTTM: 82.1 -> 80.9; m.peFwd: 43.5 -> 44.0; m.evEbitda: 61.5 -> 62.2; m.evSales: 10.9 -> 11.0; m.gross: 39.1 -> 38.6; m.op: 18.1 -> 16.7; m.net: 13.4 -> 13.1; m.roe: 13.6 -> 12.5; m.revCagrHist: 25.8 -> 24.0
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 859.8; mcap: 51.19 -> 47.75; m.peTTM: 45 -> 39.3; m.peFwd: 33.6 -> 27.9; m.evEbitda: 39.8 -> 34.9; m.evSales: 13.6 -> 12.0; m.net: 31 -> 31.9; m.roe: 24.9 -> 26.8; m.revCagrHist: 2.8 -> 20.0
- `TER` Teradyne: price: 347.59 -> 398.38; mcap: 54.41 -> 62.28; m.peTTM: 64.5 -> 54.6; m.peFwd: 36.6 -> 34.2; m.evEbitda: 46.7 -> 41.2; m.evSales: 14.3 -> 13.9; m.gross: 58.7 -> 59.2; m.op: 37.6 -> 33.2; m.net: 22.6 -> 25.8; m.roe: 28.7 -> 36.5; m.revCagrHist: 87 -> 103.9; d.revPS: 23.99 -> 28.44
- `COHU` Cohu: price: 54.47 -> 67.0; mcap: 2.57 -> 3.17; m.peFwd: 37.4 -> 36.3; m.evEbitda: 12 -> 238.1; m.evSales: 5 -> 5.8; m.gross: 43.5 -> 44.0; m.op: -8.3 -> 0.6; m.net: -11.5 -> -7.4; m.roe: -7 -> -4.8; m.revCagrHist: 29.3 -> 38.4; d.revPS: 10.28 -> 11.12
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 2295.0; mcap: 28.4 -> 30.59; m.peTTM: 77.6 -> 58.8; m.peFwd: 36.3 -> 34.1; m.evEbitda: 74.6 -> 61.8; m.evSales: 28 -> 23.9; m.gross: 62.2 -> 61.1; m.op: 40.5 -> 38.7; m.net: 40.3 -> 41.1; m.roe: 52.1 -> 58.2; m.revCagrHist: 72.8 -> 109.6
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 158.3; mcap: 9.31 -> 8.46; m.peTTM: 66.9 -> 42.1; m.peFwd: 33.6 -> 27.1; m.evEbitda: 53.5 -> 34.1; m.evSales: 4.9 -> 4.1; m.gross: 38.1 -> 39.1; m.op: 9.7 -> 15.9; m.net: 7.3 -> 7.8; m.roe: 30 -> 9.3; m.revCagrHist: 27 -> 45.1
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 187.15; mcap: 26.42 -> 16.85; m.peTTM: 151.2 -> 71.2; m.peFwd: 47.6 -> 28.4; m.evEbitda: 109.2 -> 53.9; m.evSales: 36.1 -> 20.5; m.gross: 63.3 -> 64.1; m.op: 34.6 -> 43.5; m.net: 24 -> 28.4; m.roe: 31.3 -> 44.9; m.revCagrHist: 28.3 -> 68.7
- `KLIC` Kulicke & Soffa: price: 102.03 -> 91.18; mcap: 5.34 -> 4.77; m.peTTM: 99.1 -> 41.6; m.peFwd: 24.1 -> 15.4; m.evEbitda: 41.8 -> 22.4; m.evSales: 6.4 -> 4.5; m.gross: 53.6 -> 52.6; m.op: 15.9 -> 20.7; m.net: 7.2 -> 12.2; m.roe: 6.4 -> 13.2; m.revCagrHist: 49.8 -> 122.6; d.revPS: 14.68 -> 18.19
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 17755.0; mcap: 4.46 -> 4.59; m.peTTM: 29.1 -> 29.3; m.peFwd: 28.9 -> 29.1; m.gross: 41.3 -> 41.6; m.op: 23.8 -> 16.1; m.net: 14.8 -> 15.2; m.roe: 13.5 -> 14.4; m.revCagrHist: 13.7 -> 18.9
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 67.65; mcap: 1.97 -> 1.47; m.peTTM: 30.3 -> 50.1; m.peFwd: 26.1 -> 17.5; m.evEbitda: 32 -> 29.4; m.evSales: 3.5 -> 2.8; m.gross: 34.8 -> 34.9; m.op: 4.3 -> 9.0; m.net: 6.9 -> 5.8; m.roe: 11.6 -> 8.2; m.revCagrHist: -30.7 -> -18.0
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 58.9; mcap: 13.29 -> 14.01; m.peTTM: 62.4 -> 35.5; m.peFwd: 75.1 -> 74.6; m.evEbitda: 20.6 -> 17.8; m.evSales: 3.8 -> 3.6; m.gross: 14.1 -> 14.5; m.op: 5.8 -> 9.9; m.net: 4.9 -> 8.2; m.roe: 9.7 -> 15.5; m.revCagrHist: 22.8 -> 23.2
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 203.0; mcap: 6.14 -> 8.97; m.peTTM: 41.5 -> 149.3; m.peFwd: 26.5 -> 17.3; m.evEbitda: 9.9 -> 17.7; m.evSales: 3.9 -> 4.6; m.gross: 9.5 -> 15.6; m.op: 7.3 -> 13.4; m.net: 8.5 -> 3.7; m.roe: 14.8 -> 5.9; m.revCagrHist: 17.9 -> 37.5
- `6239` Powertech (via `6239.TW`): price: 309 -> 287.0; mcap: 7.2 -> 6.59; m.peTTM: 41.5 -> 28.5; m.peFwd: 16.4 -> 15.7; m.evEbitda: 11.7 -> 10.1; m.evSales: 3.2 -> 2.8; m.gross: 17.6 -> 19.1; m.op: 13 -> 15.3; m.net: 7.7 -> 8.7; m.roe: 11 -> 13.8; m.revCagrHist: 37.6 -> 28.0
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 1240.0; mcap: 16.1 -> 25.22; m.peTTM: 259 -> 144.9; m.peFwd: 28.2 -> 28.7; m.evEbitda: 53.6 -> 62.5; m.evSales: 12.6 -> 16.9; m.gross: 11.6 -> 16.2; m.op: 12.1 -> 21.4; m.net: 7.1 -> 11.7; m.roe: 6.6 -> 11.9; m.revCagrHist: 32.1 -> 41.7
- `3036` WT Micro (via `3036.TW`): price: 225 -> 207.0; mcap: 9.04 -> 8.28; m.peTTM: 21.8 -> 10.5; m.peFwd: 7.6 -> 6.6; m.evEbitda: 13.3 -> 8.2; m.evSales: 0.3 -> 0.2; m.gross: 3.7 -> 3.5; m.op: 2 -> 2.2; m.net: 1.3 -> 1.4; m.roe: 16.2 -> 24.2; m.revCagrHist: 99.8 -> 127.6
- `3702` WPG Holdings (via `3702.TW`): price: 106.5 -> 117.5; mcap: 5.64 -> 6.39; m.peTTM: 19.1 -> 10.4; m.peFwd: 6.9 -> 6.5; m.evEbitda: 13.7 -> 13.4; m.gross: 4.2 -> 4.3; m.op: 2.7 -> 2.6; m.net: 1.3 -> 1.6; m.roe: 15.9 -> 24.7; m.revCagrHist: 27.2 -> 82.2
- `3132` Macnica (via `3132.T`): price: 3193 -> 4224.0; mcap: 3.55 -> 4.8; m.peTTM: 20.5 -> 27.1; m.peFwd: 11.7 -> 15.5; m.evEbitda: 13.1 -> 15.0; m.evSales: 0.5 -> 0.6; m.gross: 10.7 -> 10.8; m.net: 2.3 -> 2.5; m.roe: 10.4 -> 12.8; m.revCagrHist: 29.2 -> 39.7
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 35.5; mcap: 35.84 -> 56.14; m.peTTM: 20.8 -> 32.6; m.peFwd: 13.4 -> 11.8; m.evEbitda: 65.9 -> 118.1; m.evSales: 3.5 -> 5.1; m.gross: 15.4 -> 15.9; m.op: 4.1 -> 0.1; m.net: 2.3 -> 0.9; m.roe: 28.6 -> 14.7; m.revCagrHist: 27.1 -> 43.1
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 25.86; mcap: 70.06 -> 70.19; m.peTTM: 14.2 -> 18.2; m.peFwd: 14.6 -> 16.7; m.evEbitda: 18.3 -> 20.9; m.evSales: 1.4 -> 1.3; m.gross: 22.1 -> 21.4; m.op: 4.5 -> 4.0; m.net: 8 -> 7.5; m.roe: 14 -> 12.6; m.revCagrHist: -10.9 -> -6.1
- `HPQ` HP Inc.: price: 24.69 -> 31.3; mcap: 22.58 -> 28.23; m.peTTM: 9.1 -> 11.9; m.peFwd: 8.2 -> 10.0; m.evEbitda: 6.3 -> 7.4; m.evSales: 0.5 -> 0.6; m.gross: 20.3 -> 19.7; m.op: 7.1 -> 5.4; m.net: 4.4 -> 4.1; m.revCagrHist: 9 -> 12.5; d.revPS: 61.51 -> 63.85
- meta: data-date stamped to 2026-09-28 in hero/footer

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 24 · skipped: 1 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 35.69; mcap: 6.08 -> 4.73; m.peTTM: 208.5 -> 132.2; m.peFwd: 49.8 -> 37.3; m.evEbitda: 50.4 -> 36.1; m.evSales: 13.2 -> 9.4; m.gross: 41 -> 41.7; m.op: 15.5 -> 20.2; m.net: 5.7 -> 6.3; m.roe: 7.9 -> 9.5; m.revCagrHist: 51 -> 58.2; d.revPS: 3.95 -> 4.45
- `RKLB` Rocket Lab: price: 105.05 -> 73.95; mcap: 65.64 -> 47.28; m.evSales: 87.6 -> 54.7; m.gross: 36.6 -> 37.3; m.op: -22.4 -> -24.6; m.net: -26.9 -> -21.5; m.roe: -13.5 -> -7.9; m.revCagrHist: 63.5 -> 62.0; d.revPS: 1.22 -> 1.32
- `LMT` Lockheed Martin: price: 525.02 -> 519.56; mcap: 121.05 -> 119.91; m.peTTM: 25.4 -> 19.2; m.peFwd: 16.4 -> 15.9; m.evEbitda: 17.5 -> 14.1; m.evSales: 1.9 -> 1.8; m.gross: 9.9 -> 11.8; m.op: 11 -> 12.0; m.net: 6.4 -> 8.2; m.roe: 67.6 -> 89.2; m.revCagrHist: 0.3 -> 10.5; d.revPS: 324.33 -> 333.75
- `NOC` Northrop Grumman: price: 542.14 -> 510.52; mcap: 77 -> 72.53; m.peTTM: 17 -> 16.2; m.peFwd: 18 -> 16.8; m.evEbitda: 12.7 -> 12.0; m.evSales: 2.2 -> 2.0; m.gross: 20.5 -> 20.1; m.op: 11.7 -> 11.6; m.net: 10.8 -> 10.5; m.roe: 28.5 -> 27.0; m.revCagrHist: 4.4 -> 5.1; d.revPS: 296.53 -> 301.1
- `BA` Boeing: price: 209 -> 198.07; mcap: 164.76 -> 156.55; m.peTTM: 82.6 -> 71.5; m.peFwd: 50 -> 47.3; m.evSales: 2.1 -> 2.0; m.gross: 4.8 -> 4.7; m.op: 1.7 -> 0.0; m.net: 2.5 -> 2.6; m.roe: 169.9 -> 173.5; m.revCagrHist: 14 -> 8.0; d.revPS: 119.96 -> 120.99
- `RTX` RTX Corp: price: 177.41 -> 189.4; mcap: 238.92 -> 255.27; m.peTTM: 34 -> 33.3; m.peFwd: 23.4 -> 24.1; m.evEbitda: 17.9 -> 18.1; m.evSales: 3 -> 3.1; m.gross: 20.2 -> 20.3; m.op: 13.2 -> 12.7; m.net: 8 -> 8.3; m.roe: 11.6 -> 12.3; m.revCagrHist: 8.7 -> 14.5; d.revPS: 67.24 -> 69.43
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 193.96; mcap: 159.08 -> 174.65; m.peTTM: 27.6 -> 25.9; m.peFwd: 20.4 -> 22.3; m.evEbitda: 17.8 -> 17.1; m.evSales: 1.9 -> 2.0; m.gross: 15.4 -> 16.3; m.op: 1.5 -> 11.4; m.net: 6.9 -> 7.7; m.roe: 19.7 -> 23.2; m.revCagrHist: -6.6 -> 27.7
- `HEI` Heico: price: 320.88 -> 308.53; mcap: 44.81 -> 43.12; m.peTTM: 57.1 -> 51.5; m.peFwd: 46.9 -> 42.8; m.evEbitda: 34.8 -> 31.3; m.evSales: 9.7 -> 8.9; m.gross: 40.1 -> 40.4; m.op: 25.5 -> 25.1; m.net: 16.1 -> 16.4; m.roe: 17.2 -> 17.7; m.revCagrHist: 25.3 -> 23.1; d.revPS: 35.25 -> 37.12
- `TDG` TransDigm: price: 1212.36 -> 1116.2; mcap: 67.81 -> 61.7; m.peTTM: 37.9 -> 33.9; m.peFwd: 25.8 -> 23.1; m.evEbitda: 19.8 -> 18.2; m.evSales: 10.1 -> 9.2; m.gross: 59.7 -> 59.8; m.op: 46.7 -> 46.0; m.net: 21.9 -> 21.3; m.revCagrHist: 18.3 -> 22.5; d.revPS: 163.28 -> 172.59
- `MRCY` Mercury Systems: price: 106.81 -> 82.18; mcap: 6.41 -> 5.0; m.peFwd: 69.7 -> 36.9; m.evEbitda: 70.3 -> 65.2; m.evSales: 7 -> 5.3; m.gross: 28.7 -> 28.6; m.op: 3.2 -> 1.2; m.net: -1.5 -> -3.0; m.roe: -1 -> -2.0; m.revCagrHist: 11.5 -> 6.1; d.revPS: 16.3 -> 16.54
- `RDW` Redwire: price: 14.87 -> 11.62; mcap: 2.96 -> 2.9; m.evSales: 8.1 -> 5.7; m.gross: 12.9 -> 22.7; m.op: -71.8 -> -18.9; m.net: -80.9 -> -57.3; m.roe: -48.7 -> -18.2; m.revCagrHist: 57.9 -> 89.6; d.revPS: 2.47 -> 2.33
- `ASTS` AST SpaceMobile: price: 87.32 -> 61.81; mcap: 33.89 -> 24.05; m.evSales: 99 -> 171.2; m.gross: 44.8 -> 38.9; m.roe: -37.8 -> -45.6; d.revPS: 0.31 -> 0.4
- `IRDM` Iridium: price: 45.61 -> 48.75; mcap: 4.82 -> 5.17; m.peTTM: 46.1 -> 56.0; m.peFwd: 33 -> 28.4; m.evEbitda: 14.8 -> 16.0; m.evSales: 7.4 -> 7.7; m.gross: 71.6 -> 71.9; m.op: 23.2 -> 15.1; m.net: 12.1 -> 10.5; m.roe: 21.4 -> 19.7; m.revCagrHist: 1.9 -> 3.8; d.revPS: 8.24 -> 8.33
- `VSAT` Viasat: price: 61.5 -> 73.02; mcap: 8.4 -> 10.06; m.peFwd: 152.5 -> 438.1; m.evEbitda: 9.6 -> 11.0; m.evSales: 2.9 -> 3.3; m.gross: 33 -> 33.2; m.op: -1.8 -> 4.4; m.net: -0.7 -> -0.6; m.roe: 0.1 -> 0.2; m.revCagrHist: 2.1 -> -1.2; d.revPS: 34.44 -> 33.98
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 4.38; mcap: 3.15 -> 1.78; m.evEbitda: 7.9 -> 6.3; m.evSales: 3.1 -> 2.5; m.gross: 60.1 -> 70.3; m.op: 11.7 -> -5.6; m.net: -4.7 -> -8.8; m.roe: 8 -> -9.9; m.revCagrHist: 66.4 -> 61.0
- `PL` Planet Labs: price: 30.72 -> 17.43; mcap: 10.95 -> 6.34; m.evSales: 31.9 -> 15.8; m.gross: 55.6 -> 55.5; m.op: -30.5 -> -12.0; m.net: -111.2 -> -95.1; m.roe: -84 -> -72.0; m.revCagrHist: 42.1 -> 58.1; d.revPS: 1.05 -> 1.14
- `BKSY` BlackSky: price: 31.79 -> 23.25; mcap: 1.18 -> 0.95; m.evSales: 13 -> 8.6; m.gross: 69.3 -> 69.9; m.op: -89.2 -> -23.4; m.net: -89.1 -> -61.2; m.roe: -102.7 -> -44.8; m.revCagrHist: -29.7 -> 50.1; d.revPS: 2.8 -> 2.99
- `SPIR` Spire Global: price: 16.37 -> 12.08; mcap: 0.63 -> 0.47; m.peTTM: 10.3 -> 999; m.evSales: 9.4 -> 6.3; m.gross: 42.3 -> 37.9; m.op: -149.5 -> -107.3; m.net: 77.1 -> -145.2; m.roe: 101.2 -> -61.7; m.revCagrHist: -33.7 -> -5.9; d.revPS: 1.95 -> 1.82
- `LHX` L3Harris: price: 303 -> 237.69; mcap: 56.45 -> 44.26; m.peTTM: 32.9 -> 24.0; m.peFwd: 22.2 -> 17.6; m.evEbitda: 34.5 -> 13.4; m.evSales: 5.8 -> 2.4; m.gross: 30.4 -> 25.5; m.op: 9.7 -> 12.6; m.net: 10.4 -> 8.2; m.roe: 12 -> 9.3; m.revCagrHist: 190 -> 8.4; d.revPS: 75.76 -> 122.76
- `KTOS` Kratos Defense: price: 54.82 -> 45.62; mcap: 10.28 -> 8.56; m.peTTM: 322.5 -> 268.4; m.peFwd: 51.1 -> 41.4; m.evEbitda: 110.8 -> 84.1; m.evSales: 6.4 -> 4.8; m.gross: 22.9 -> 23.0; m.op: 1.8 -> -0.2; m.net: 2.1 -> 2.0; m.roe: 1.2 -> 1.1; m.revCagrHist: 22.6 -> 30.5; d.revPS: 8.41 -> 8.62
- `GRMN` Garmin: price: 231.72 -> 294.14; mcap: 44.69 -> 56.73; m.peTTM: 26.5 -> 30.4; m.peFwd: 22.4 -> 26.4; m.evEbitda: 19.5 -> 23.5; m.evSales: 5.7 -> 7.1; m.gross: 59.1 -> 60.1; m.op: 24.6 -> 30.4; m.net: 23.3 -> 24.5; m.roe: 19.9 -> 21.9; m.revCagrHist: 14.2 -> 11.4; d.revPS: 38.77 -> 39.84
- `LUNR` Intuitive Machines: price: 26.54 -> 15.61; mcap: 4.26 -> 2.5; m.evSales: 16.6 -> 8.2; m.gross: 9.7 -> 16.3; m.op: -10.3 -> -18.1; m.net: -32.7 -> -26.6; m.roe: -30.3 -> -30.8; m.revCagrHist: 198.7 -> 309.8; d.revPS: 2.66 -> 3.58
- `LDOS` Leidos: price: 121.69 -> 123.61; mcap: 15.31 -> 15.51; m.peTTM: 11.1 -> 11.6; m.peFwd: 9.3 -> 9.7; m.evEbitda: 9.1 -> 9.0; m.evSales: 1.3 -> 1.2; m.gross: 17.9 -> 17.8; m.op: 12.2 -> 11.7; m.net: 8.2 -> 7.8; m.roe: 30.6 -> 27.8; m.revCagrHist: 3.7 -> 7.2; d.revPS: 136.45 -> 139.4
- meta: data-date stamped to 2026-09-28 in hero/footer

**Skipped (preserved)**
- `SATS` EchoStar — no market data (private/pre-IPO or unresolved symbol); left unchanged
