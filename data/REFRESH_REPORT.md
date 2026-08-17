# Data refresh report

- **As of:** 2026-08-17
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 238 changed · 4 skipped · 1 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 225.16; mcap: 4854.37 -> 5453.6; m.peTTM: 30.7 -> 34.5; m.peFwd: 15.7 -> 17.6; m.evEbitda: 29.1 -> 32.7; m.evSales: 19 -> 21.3
- `AVGO` Broadcom: price: 372.1 -> 392.99; mcap: 1770.3 -> 1869.68; m.peTTM: 61.7 -> 65.4; m.peFwd: 19.2 -> 20.1; m.evEbitda: 43.3 -> 45.5; m.evSales: 24.1 -> 25.4
- `AMD` AMD: price: 452.4 -> 514.39; mcap: 737.68 -> 839.73; m.peTTM: 151.3 -> 131.6; m.peFwd: 34.6 -> 33.3; m.evEbitda: 98.1 -> 86.9; m.evSales: 19.5 -> 20.1; m.gross: 53.1 -> 55.7; m.op: 14.4 -> 17.2; m.net: 13.4 -> 15.6; m.roe: 8.1 -> 10.2; m.revCagrHist: 37.8 -> 50.1; d.revPS: 23.02 -> 25.36
- `MU` Micron: price: 891.88 -> 971.66; m.peTTM: 42.2 -> 22.0; m.peFwd: 8 -> 6.3; m.evEbitda: 27.2 -> 15.8; m.evSales: 17.2 -> 11.9; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 198.82; mcap: 191.09 -> 250.76; m.peTTM: 52.3 -> 62.9; m.peFwd: 34.1 -> 38.5; m.evEbitda: 42.2 -> 51.2; m.evSales: 18.4 -> 22.5; m.gross: 63.5 -> 63.0; m.op: 42.7 -> 45.4; m.net: 38.3 -> 38.4; m.revCagrHist: 35.1 -> 37.7; d.revPS: 7.72 -> 8.38
- `COHR` Coherent: price: 354.77 -> 325.83; mcap: 69.41 -> 63.75; m.peTTM: 169.7 -> 79.3; m.peFwd: 43.8 -> 23.4; m.evEbitda: 53.9 -> 46.2; m.evSales: 10.7 -> 9.2; m.gross: 37 -> 37.5; m.op: 13.6 -> 11.8; m.net: 7.1 -> 11.3; m.roe: 4.7 -> 8.0; m.revCagrHist: 20.5 -> 33.7; d.revPS: 39.48 -> 40.16
- `CIEN` Ciena: price: 434.65 -> 428.77; mcap: 61.53 -> 60.69; m.peTTM: 145.4 -> 142.9; m.peFwd: 45.2 -> 44.5; m.evEbitda: 78.8 -> 77.7; m.evSales: 11.1 -> 11.0
- `SMCI` Super Micro: price: 29.27 -> 39.84; mcap: 17.6 -> 25.77; m.peTTM: 21.4 -> 21.0; m.peFwd: 9 -> 7.5; m.evEbitda: 16.1 -> 10.8; m.gross: 8.4 -> 10.8; m.op: 6.1 -> 13.4; m.net: 3.7 -> 5.7; m.roe: 17.9 -> 21.5; m.revCagrHist: 122.7 -> 93.2; d.revPS: 56.37 -> 64.91
- `DELL` Dell Technologies: price: 369.83 -> 490.81; mcap: 239.69 -> 317.13; m.peTTM: 29.5 -> 39.1; m.peFwd: 17.5 -> 22.2; m.evEbitda: 18.7 -> 24.1; m.evSales: 1.9 -> 2.5; m.op: 8.3 -> 8.9
- `VRT` Vertiv: price: 280.98 -> 293.84; mcap: 107.93 -> 113.12; m.peTTM: 70.8 -> 66.6; m.peFwd: 31.7 -> 32.3; m.evEbitda: 45.6 -> 42.3; m.evSales: 10 -> 9.9; m.gross: 37.2 -> 38.0; m.op: 16.4 -> 20.4; m.net: 14.4 -> 15.1; m.roe: 45.1 -> 43.9; m.revCagrHist: 30.1 -> 24.1; d.revPS: 28.37 -> 29.97
- `EQIX` Equinix: price: 1038.33 -> 1102.1; mcap: 102.4 -> 108.75; m.peTTM: 72 -> 70.9; m.peFwd: 54 -> 58.4; m.evEbitda: 29.1 -> 28.9; m.evSales: 13.1 -> 13.2; m.gross: 51.6 -> 52.0; m.op: 24.3 -> 27.0; m.net: 14.9 -> 15.5; m.roe: 10.1 -> 10.7; m.revCagrHist: 12.1 -> 16.7; d.revPS: 97.1 -> 100.75
- `DLR` Digital Realty: price: 180.78 -> 200.15; mcap: 64.66 -> 75.4; m.peTTM: 47.8 -> 256.6; m.peFwd: 63.1 -> 69.2; m.evEbitda: 28.8 -> 29.6; m.evSales: 13.2 -> 14.1; m.gross: 55.3 -> 57.0; m.op: 17.2 -> 25.9; m.net: 21.8 -> 11.8; m.roe: 5.7 -> 2.9; m.revCagrHist: 16.7 -> 29.9; d.revPS: 18.47 -> 19.53
- `MSFT` Microsoft: price: 397.36 -> 495.4; mcap: 2951.76 -> 3678.62; m.peTTM: 23.7 -> 27.6; m.peFwd: 20.5 -> 21.0; m.evEbitda: 16.3 -> 19.2; m.evSales: 9.4 -> 11.2; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `ORCL` Oracle: price: 201.26 -> 150.52; mcap: 578.83 -> 433.57; m.peTTM: 36.1 -> 25.8; m.peFwd: 18.7 -> 13.8; m.evEbitda: 25.8 -> 18.8; m.evSales: 11 -> 8.5; m.gross: 67.1 -> 65.8; m.op: 32.7 -> 36.2; m.net: 25.3 -> 25.4; m.roe: 57.6 -> 53.4; m.revCagrHist: 21.7 -> 20.6; d.revPS: 22.54 -> 23.55
- meta: data-date stamped to 2026-08-17 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1180.16; mcap: 1013.35 -> 1052.4; m.peTTM: 40.3 -> 39.7; m.peFwd: 25.5 -> 24.9; m.evEbitda: 29 -> 26.3; m.evSales: 14.6 -> 13.8; m.gross: 82.8 -> 83.4; m.op: 49.4 -> 54.2; m.net: 35 -> 33.5; m.roe: 107.5 -> 102.3; m.revCagrHist: 55.5 -> 47.7; d.revPS: 80.61 -> 89.02
- `NVO` Novo Nordisk: price: 42.81 -> 45.89; mcap: 189.61 -> 201.05; m.peTTM: 10 -> 11.3; m.peFwd: 12.9 -> 13.6; m.evEbitda: 1.8 -> 1.7; m.evSales: 1 -> 0.9; m.gross: 83.2 -> 82.0; m.op: 61.6 -> 42.5; m.net: 37.2 -> 35.3; m.roe: 71.4 -> 59.8; m.revCagrHist: 24 -> 2.1
- `VKTX` Viking Therapeutics: price: 27.75 -> 33.19; mcap: 3.22 -> 3.87; m.roe: -70 -> -88.9
- `AMGN` Amgen: price: 337.73 -> 415.21; mcap: 182.28 -> 224.63; m.peTTM: 24 -> 25.8; m.peFwd: 14.4 -> 17.1; m.evEbitda: 13.5 -> 15.5; m.evSales: 6.1 -> 7.0; m.gross: 71.4 -> 71.9; m.op: 33.8 -> 35.5; m.net: 21 -> 23.0; m.roe: 101.3 -> 91.5; m.revCagrHist: 5.8 -> 9.5; d.revPS: 69.12 -> 70.68
- `HIMS` Hims & Hers: price: 27.78 -> 28.15; mcap: 6.43 -> 6.57; m.peFwd: 31.2 -> 22.3; m.evSales: 2.9 -> 2.8; m.gross: 72.9 -> 69.5; m.op: -7.9 -> -12.8; m.net: -0.6 -> -5.5; m.roe: -2.7 -> -32.0; m.revCagrHist: 3.8 -> 38.2; d.revPS: 10.46 -> 11.29
- `PFE` Pfizer: price: 25.6 -> 26.79; mcap: 145.91 -> 152.69; m.peTTM: 19.5 -> 35.2; m.peFwd: 9 -> 9.3; m.evEbitda: 7.8 -> 8.1; m.evSales: 3.1 -> 3.2; m.gross: 74.8 -> 74.7; m.op: 31.6 -> 27.9; m.net: 11.8 -> 6.8; m.roe: 8.3 -> 5.0; m.revCagrHist: 5.4 -> 2.6; d.revPS: 11.13 -> 11.19
- `MRK` Merck: price: 119.09 -> 135.84; mcap: 294.13 -> 335.14; m.peTTM: 33.5 -> 108.7; m.peFwd: 12.5 -> 14.2; m.evEbitda: 11.4 -> 13.2; m.evSales: 5.1 -> 5.7; m.gross: 76.7 -> 75.9; m.op: 38.6 -> -0.2; m.net: 13.6 -> 4.8; m.roe: 18.9 -> 7.0; m.revCagrHist: 4.9 -> 5.1; d.revPS: 26.42 -> 26.85
- `ABBV` AbbVie: price: 224.95 -> 249.46; mcap: 397.44 -> 440.83; m.peTTM: 111.4 -> 70.5; m.peFwd: 13.8 -> 15.3; m.evEbitda: 15.4 -> 16.4; m.evSales: 7.3 -> 7.8; m.gross: 72 -> 72.8; m.op: 32.2 -> 40.0; m.net: 5.8 -> 9.8; m.revCagrHist: 12.4 -> 10.2; d.revPS: 35.5 -> 36.39
- `RHHBY` Roche: price: 50.23 -> 54.52; mcap: 323.53 -> 347.52; m.peTTM: 19.9 -> 23.1; m.peFwd: 15.6 -> 16.1; m.evEbitda: 14.3 -> 15.7; m.evSales: 5.4 -> 6.0; m.gross: 74.5 -> 74.2; m.op: 30 -> 36.2; m.net: 20.3 -> 19.6; m.roe: 37.3 -> 38.1; m.revCagrHist: -0.4 -> -1.2
- `TMO` Thermo Fisher: price: 482.04 -> 588.29; mcap: 179.14 -> 217.52; m.peTTM: 26.5 -> 31.6; m.peFwd: 17.7 -> 21.4; m.evEbitda: 19.4 -> 21.8; m.evSales: 4.8 -> 5.5; m.gross: 40.9 -> 41.0; m.op: 17.9 -> 18.8; m.net: 15.2 -> 15.0; m.revCagrHist: 6.2 -> 10.5; d.revPS: 120.36 -> 123.89
- `DHR` Danaher: price: 183.63 -> 202.45; mcap: 129.97 -> 142.32; m.peTTM: 36.5 -> 36.1; m.peFwd: 20.2 -> 21.8; m.evEbitda: 18.1 -> 20.7; m.evSales: 5.8 -> 6.6; m.gross: 59 -> 58.8; m.op: 22.9 -> 19.8; m.net: 14.9 -> 15.9; m.roe: 7.1 -> 7.6; m.revCagrHist: 3.7 -> 5.5; d.revPS: 34.87 -> 35.47
- `ISRG` Intuitive Surgical: price: 412.02 -> 394.51; mcap: 145.92 -> 141.34; m.peTTM: 50 -> 45.2; m.peFwd: 34.9 -> 32.7; m.evEbitda: 36.4 -> 32.1; m.evSales: 13.4 -> 12.2; m.gross: 66.3 -> 66.7; m.op: 30.9 -> 33.6; m.net: 28.2 -> 28.4; m.roe: 17.2 -> 17.4; m.revCagrHist: 23 -> 18.5; d.revPS: 29.7 -> 31.07
- `DXCM` Dexcom: price: 74.77 -> 89.75; mcap: 28.85 -> 33.87; m.peTTM: 32.1 -> 35.5; m.peFwd: 24.3 -> 28.7; m.evEbitda: 21.5 -> 23.7; m.evSales: 5.8 -> 6.7; m.gross: 61.5 -> 62.5; m.op: 21.4 -> 24.3; m.net: 19.3 -> 20.1; m.roe: 35.6 -> 38.5; m.revCagrHist: 15 -> 13.1; d.revPS: 12.39 -> 12.87
- meta: data-date stamped to 2026-08-17 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 148.47; mcap: 40.57 -> 39.17; m.peTTM: 56.4 -> 999; m.peFwd: 31 -> 49.1; m.evEbitda: 20 -> 53.0; m.evSales: 9 -> 6.1; m.gross: 85 -> 85.8; m.op: -7.1 -> -13.9; m.net: 12.7 -> -16.3; m.roe: 6.7 -> -7.8; m.revCagrHist: -30.8 -> -17.3; d.revPS: 23.92 -> 22.82
- `HOOD` Robinhood: price: 86.36 -> 95.56; mcap: 77.77 -> 85.92; m.peTTM: 41.9 -> 42.3; m.peFwd: 30.8 -> 29.8; m.evSales: 18 -> 17.2; m.gross: 88 -> 91.9; m.op: 38.5 -> 43.9; m.net: 41.1 -> 42.0; m.roe: 21.5 -> 23.6; m.revCagrHist: 15.1 -> 32.3; d.revPS: 5.17 -> 5.5
- `MARA` MARA Holdings: price: 12.62 -> 9.2; mcap: 4.81 -> 3.55; m.evSales: 5.6 -> 7.1; m.gross: 40 -> 40.1; m.net: -15 -> 0.0; m.roe: -67.3 -> -105.6; m.revCagrHist: -18.4 -> -26.7; d.revPS: 2.38 -> 2.17
- `RIOT` Riot Platforms: price: 24.08 -> 19.02; mcap: 9.11 -> 7.14; m.evSales: 14 -> 11.2; m.gross: 35 -> 28.3; m.op: -20 -> -122.3; m.net: -132.8 -> -196.3; m.roe: -32.5 -> -48.2; m.revCagrHist: 3.6 -> 13.9; d.revPS: 1.89 -> 1.94
- `CLSK` CleanSpark: price: 14.9 -> 12.09; mcap: 3.82 -> 3.1; m.evSales: 7 -> 6.9; m.gross: 42 -> 47.0; m.op: -5 -> -165.2; m.net: -67.7 -> -146.9; m.roe: -34.8 -> -68.6; m.revCagrHist: -24.9 -> -30.5; d.revPS: 2.66 -> 2.47
- `IREN` IREN Limited: price: 51.52 -> 44.06; mcap: 18.41 -> 15.75; m.peTTM: 69.6 -> 57.2; m.evEbitda: 20 -> 118.9; m.evSales: 30 -> 23.1; m.gross: 45 -> 68.4
- `MSTR` Strategy: price: 115.35 -> 93.04; mcap: 40.76 -> 36.64; m.peFwd: 25.9 -> 1.9; m.evSales: 113.1 -> 109.4; m.gross: 68.1 -> 67.6; m.roe: -30.8 -> -63.6; m.revCagrHist: 11.9 -> 6.9; d.revPS: 1.65 -> 1.57
- `GLXY` Galaxy Digital: price: 30.15 -> 21.66; mcap: 11.76 -> 12.76; m.peFwd: 322.2 -> 999; m.evEbitda: 12 -> 0.2; m.evSales: 5 -> 0.1; m.op: 95.9 -> 96.2; m.net: -0.3 -> -0.4; m.roe: -6.5 -> -10.4; m.revCagrHist: -20.6 -> -3.8
- `CRCL` Circle Internet: price: 78.93 -> 71.6; mcap: 21.1 -> 19.52; m.peTTM: 999 -> 14.3; m.peFwd: 35.4 -> 44.3; m.evEbitda: 40 -> 71.9; m.evSales: 8 -> 5.7; m.gross: 40 -> 22.0; m.op: 6.5 -> 4.9; m.net: -2.8 -> 15.5; m.roe: -3 -> 15.3; m.revCagrHist: 20 -> 6.6; d.revPS: 13.95 -> 12.04
- `BLK` BlackRock: price: 1010.68 -> 1173.73; mcap: 164.59 -> 190.7; m.peTTM: 25.4 -> 28.1; m.peFwd: 16.6 -> 18.3; m.evEbitda: 16 -> 17.1; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.roe: 11.9 -> 12.3; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 175.98
- meta: data-date stamped to 2026-08-17 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 384.27; mcap: 214.52 -> 313.18; m.peTTM: 226.9 -> 334.1; m.peFwd: 63.9 -> 93.3; m.evEbitda: 143.9 -> 210.4; m.evSales: 20.1 -> 29.4
- `CRWD` CrowdStrike: price: 647.74 -> 216.95; mcap: 164.89 -> 220.91; m.peFwd: 103.6 -> 138.5; m.evSales: 31.6 -> 42.6; d.revPS: 20.22 -> 5.06
- `FTNT` Fortinet: price: 138.88 -> 160.01; mcap: 101.75 -> 117.4; m.peTTM: 53.8 -> 56.5; m.peFwd: 40.5 -> 42.6; m.evEbitda: 41.9 -> 43.9; m.evSales: 13.9 -> 15.1; m.gross: 80.3 -> 80.2; m.op: 31.3 -> 33.6; m.net: 27.5 -> 28.2; m.roe: 132.4 -> 117.4; m.revCagrHist: 20.1 -> 25.6; d.revPS: 9.47 -> 10.14
- `ZS` Zscaler: price: 124.73 -> 183.6; mcap: 20.17 -> 29.69; m.peFwd: 27.1 -> 39.9; m.evSales: 5.8 -> 8.8
- `NET` Cloudflare: price: 219.67 -> 315.78; mcap: 77.97 -> 112.44; m.peFwd: 140.8 -> 189.0; m.evSales: 33.1 -> 44.5; m.gross: 73.3 -> 72.6; m.op: -9.7 -> -7.9; m.net: -3.7 -> -8.2; m.roe: -5.9 -> -14.4; m.revCagrHist: 33.5 -> 35.9; d.revPS: 6.65 -> 7.14
- `OKTA` Okta: price: 114.92 -> 147.43; mcap: 19.97 -> 25.62; m.peTTM: 83.3 -> 106.1; m.peFwd: 26.9 -> 34.4; m.evEbitda: 66.7 -> 87.8; m.evSales: 5.9 -> 7.8
- `S` SentinelOne: price: 14.79 -> 23.11; mcap: 5.07 -> 7.92; m.peFwd: 29.9 -> 46.8; m.evSales: 4.2 -> 6.9
- `RPD` Rapid7: price: 7.21 -> 13.0; mcap: 0.48 -> 0.88; m.peTTM: 20.6 -> 41.9; m.peFwd: 4.6 -> 6.4; m.evEbitda: 13.6 -> 19.5; m.evSales: 0.9 -> 1.3; m.gross: 69.7 -> 69.3; m.op: 0 -> 2.3; m.net: 2.6 -> 2.4; m.roe: 19.7 -> 14.0; m.revCagrHist: -0.3 -> -1.5; d.revPS: 13.16 -> 12.98
- `QLYS` Qualys: price: 110.2 -> 186.05; mcap: 3.88 -> 6.44; m.peTTM: 19.7 -> 32.2; m.peFwd: 13.3 -> 22.1; m.evEbitda: 14.1 -> 23.8; m.evSales: 5.1 -> 8.6; m.gross: 83.2 -> 83.4; m.op: 35 -> 34.0; m.roe: 37.7 -> 38.6; m.revCagrHist: 9.8 -> 11.0; d.revPS: 19.06 -> 19.74
- `TENB` Tenable: price: 26.8 -> 38.33; mcap: 2.96 -> 4.22; m.peTTM: 999 -> 638.8; m.peFwd: 12.3 -> 17.5; m.evEbitda: 74.4 -> 80.9; m.evSales: 3 -> 4.2; m.gross: 78.2 -> 78.1; m.op: 4.3 -> 4.8; m.net: -1.2 -> 0.6; m.roe: -3.7 -> 2.5; m.revCagrHist: 9.6 -> 8.6; d.revPS: 8.59 -> 8.96
- `GEN` Gen Digital: price: 24.62 -> 28.48; mcap: 14.83 -> 17.05; m.peTTM: 15.7 -> 16.7; m.peFwd: 7.5 -> 8.6; m.evEbitda: 9.5 -> 10.2; m.evSales: 4.5 -> 4.9; m.gross: 78.5 -> 78.0; m.op: 63.4 -> 35.6; m.net: 19.5 -> 20.7; m.roe: 39.9 -> 41.9; m.revCagrHist: 27 -> 6.3; d.revPS: 8.17 -> 8.36
- meta: data-date stamped to 2026-08-17 in hero

## finance.js

- changed: 27 · skipped: 2 · review: 1

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 154.73; mcap: 79.36 -> 86.86; m.peTTM: 20.6 -> 21.8; m.peFwd: 15.9 -> 17.6; m.evEbitda: 18 -> 15.9; m.evSales: 9.5 -> 10.1; m.op: 57.3 -> 52.6; m.net: 37.7 -> 38.2; m.roe: 13.9 -> 14.1; m.revCagrHist: 20.4 -> 4.8; d.revPS: 18.3 -> 18.59
- `CME` CME Group: price: 263.8 -> 269.8; mcap: 95.32 -> 97.01; m.peTTM: 22.5 -> 22.9; m.peFwd: 20.4 -> 20.9; m.evEbitda: 20 -> 20.7; m.evSales: 16 -> 14.6; m.op: 69.8 -> 65.0; m.net: 63.3 -> 63.4; m.roe: 15.9 -> 15.8; m.revCagrHist: 14.4 -> 0.8; d.revPS: 18.75 -> 18.78
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 85.36; mcap: 58.77 -> 56.16; m.peTTM: 38 -> 30.7; m.peFwd: 16.8 -> 15.8; m.evEbitda: 17 -> 17.2; m.evSales: 7.5 -> 5.6; m.gross: 68 -> 88.7; m.op: 24.9 -> 29.0; m.net: 13.4 -> 14.6; m.roe: 6.4 -> 7.7; m.revCagrHist: 4.6 -> 6.7
- `SPGI` S&P Global: price: 426.38 -> 418.8; mcap: 126.21 -> 123.46; m.peTTM: 27 -> 25.5; m.peFwd: 19.2 -> 20.7; m.evEbitda: 24 -> 17.2; m.evSales: 12 -> 8.7; m.gross: 73 -> 70.9; m.op: 44.3 -> 44.8; m.net: 30.4 -> 30.5; m.roe: 13.9 -> 14.3; d.revPS: 52.03 -> 53.79
- `MSCI` MSCI Inc: price: 608.52 -> 569.13; mcap: 44.26 -> 41.38; m.peTTM: 34.8 -> 31.2; m.peFwd: 27 -> 25.3; m.evEbitda: 28 -> 24.2; m.evSales: 18 -> 14.3; m.gross: 82 -> 83.0; m.op: 53.7 -> 56.3; m.revCagrHist: 14.1 -> 12.2; d.revPS: 42.95 -> 44.9
- `MCO` Moody's: price: 450.69 -> 484.96; mcap: 78.72 -> 83.99; m.peTTM: 32.4 -> 30.8; m.peFwd: 24.2 -> 25.6; m.evEbitda: 25 -> 22.3; m.evSales: 13 -> 11.1; m.gross: 72 -> 75.0; m.op: 45.7 -> 49.5; m.net: 31.7 -> 34.3; m.roe: 71.4 -> 76.9; m.revCagrHist: 8.1 -> 15.1; d.revPS: 44.16 -> 46.13
- `V` Visa: price: 322.96 -> 364.15; mcap: 614.19 -> 679.89; m.peTTM: 28.2 -> 31.0; m.peFwd: 21.7 -> 24.3; m.evEbitda: 24 -> 21.9; m.evSales: 20 -> 15.3; m.gross: 80 -> 97.7; m.op: 67.3 -> 66.1; m.net: 51.7 -> 50.8; m.roe: 60.3 -> 61.2; m.revCagrHist: 17.1 -> 14.4; d.revPS: 22.45 -> 23.4
- `MA` Mastercard: price: 489.08 -> 569.29; mcap: 432.14 -> 498.7; m.peTTM: 28.3 -> 31.3; m.peFwd: 21.5 -> 24.7; m.evEbitda: 28 -> 23.1; m.evSales: 24 -> 14.6; m.op: 60.8 -> 61.1; m.net: 45.9 -> 46.3; m.roe: 232.1 -> 241.2; m.revCagrHist: 15.8 -> 14.1; d.revPS: 37.72 -> 39.27
- `PYPL` PayPal: price: 40.7 -> 61.66; mcap: 35.9 -> 52.75; m.peTTM: 7.6 -> 11.7; m.peFwd: 7.1 -> 10.6; m.evEbitda: 9 -> 8.6; m.evSales: 2 -> 1.6; m.gross: 46 -> 40.5; m.op: 18 -> 17.0; m.net: 15 -> 14.4; m.roe: 25.1 -> 24.5; m.revCagrHist: 7.2 -> 4.8; d.revPS: 35.86 -> 37.18
- `JPM` JPMorgan Chase: price: 309.14 -> 362.84; mcap: 828.34 -> 964.5; m.peTTM: 14.8 -> 15.6; m.peFwd: 13.1 -> 14.5; m.evSales: 3.5 -> 4.3; m.op: 43.7 -> 50.4; m.net: 33.9 -> 34.9; m.roe: 16.5 -> 17.8; m.revCagrHist: 12.7 -> 30.4; d.revPS: 63.1 -> 68.35
- `BAC` Bank of America: price: 54.54 -> 64.49; mcap: 387.05 -> 450.96; m.peTTM: 13.5 -> 14.9; m.peFwd: 10.8 -> 12.2; m.evSales: 3 -> 3.5; m.op: 36 -> 38.3; m.net: 29 -> 29.5; m.roe: 10.6 -> 11.2; m.revCagrHist: 8.1 -> 16.8; d.revPS: 14.78 -> 15.59
- `WFC` Wells Fargo: price: 81.97 -> 88.82; mcap: 250.84 -> 268.59; m.peTTM: 12.7 -> 12.9; m.peFwd: 10.4 -> 11.2; m.op: 29.4 -> 37.4; m.net: 26.7 -> 27.2; m.roe: 12 -> 12.6; m.revCagrHist: 5.7 -> 9.5; d.revPS: 25.74 -> 26.74
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 15.28; mcap: 296.75 -> 354.99; m.peTTM: 14.2 -> 14.7; m.peFwd: 9.1 -> 10.8; m.op: 50.7 -> 58.8; m.net: 35 -> 37.8; m.roe: 11.6 -> 13.1; m.revCagrHist: 3.3 -> 25.4
- `GS` Goldman Sachs: price: 1001.29 -> 1039.42; mcap: 295.39 -> 302.65; m.peTTM: 18.3 -> 16.1; m.peFwd: 15.3 -> 14.0; m.evSales: 3 -> 1.0; m.gross: 55 -> 82.1; m.op: 38.6 -> 42.2; m.net: 29.4 -> 31.0; m.roe: 14.5 -> 16.9; m.revCagrHist: 14.5 -> 42.5; d.revPS: 199.49 -> 221.5
- `MS` Morgan Stanley: price: 206.66 -> 217.36; mcap: 325.96 -> 341.69; m.peTTM: 18.7 -> 17.5; m.peFwd: 16.3 -> 15.9; m.evSales: 3.4 -> 2.8; m.gross: 58 -> 87.6; m.op: 40.6 -> 41.6; m.net: 24.8 -> 25.9; m.roe: 16.4 -> 18.0; m.revCagrHist: 16.3 -> 28.0; d.revPS: 46.66 -> 49.81
- `SCHW` Charles Schwab: price: 89.27 -> 111.09; mcap: 155.25 -> 192.11; m.peTTM: 17.7 -> 20.2; m.peFwd: 12.4 -> 14.2; m.evSales: 5 -> 6.8; m.gross: 70 -> 97.5; m.op: 49.4 -> 52.3; m.net: 38 -> 38.8; m.roe: 19.1 -> 20.3; m.revCagrHist: 15.8 -> 20.9; d.revPS: 13.89 -> 14.75
- `IBKR` Interactive Brokers: price: 85.42 -> 92.06; mcap: 144.89 -> 156.85; m.peTTM: 36.7 -> 36.5; m.peFwd: 29.7 -> 28.9; m.gross: 90 -> 93.0; m.op: 76.8 -> 76.5; m.net: 16.1 -> 16.5; m.roe: 23.6 -> 24.0; m.revCagrHist: 16.8 -> 26.3; d.revPS: 14.54 -> 15.33
- `HOOD` Robinhood Markets: price: 86.36 -> 95.56; mcap: 77.77 -> 85.92; m.peTTM: 41.9 -> 42.3; m.peFwd: 30.8 -> 29.8; m.evSales: 18 -> 17.2; m.gross: 88 -> 91.9; m.op: 38.5 -> 43.9; m.net: 41.1 -> 42.0; m.roe: 21.5 -> 23.6; m.revCagrHist: 15.1 -> 32.3; d.revPS: 5.17 -> 5.5
- `FUTU` Futu Holdings: price: 92.93 -> 105.23; mcap: 13.03 -> 14.75; m.peTTM: 10.3 -> 11.6; m.peFwd: 7.6 -> 8.6; m.gross: 85 -> 94.4
- `BLK` BlackRock: price: 1010.68 -> 1173.73; mcap: 164.59 -> 190.7; m.peTTM: 25.4 -> 28.1; m.peFwd: 16.6 -> 18.3; m.evEbitda: 16 -> 17.1; m.gross: 50 -> 47.2; m.op: 35.6 -> 35.1; m.net: 24.4 -> 24.1; m.roe: 11.9 -> 12.3; m.revCagrHist: 27 -> 30.6; d.revPS: 165.35 -> 175.98
- `BX` Blackstone: price: 118.48 -> 143.93; mcap: 144.81 -> 172.04; m.peTTM: 30.4 -> 32.1; m.peFwd: 15.7 -> 19.2; m.evSales: 18 -> 9.1; m.op: 38 -> 54.4; m.net: 21.2 -> 22.7; m.roe: 29.5 -> 31.4; m.revCagrHist: 5.7 -> 28.6; d.revPS: 18.38 -> 19.65
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 504.03; mcap: 1043.23 -> 1078.98; m.peTTM: 14.4 -> 12.7; m.peFwd: 22.5 -> 22.9; m.gross: 30 -> 30.3; m.op: 14.4 -> 32.6; m.net: 19.3 -> 22.3; m.roe: 10.5 -> 12.1; m.revCagrHist: 4.4 -> 10.0
- `PGR` Progressive: price: 204.2 -> 209.6; mcap: 119.15 -> 121.86; m.peTTM: 10.4 -> 10.5; m.peFwd: 12.6 -> 12.9; m.evEbitda: 12 -> 8.3; m.evSales: 2.2 -> 1.4; m.gross: 30 -> 18.5; m.op: 16.4 -> 18.2; m.net: 12.9 -> 12.8; m.roe: 37.9 -> 34.9; m.revCagrHist: 8.7 -> 7.3; d.revPS: 152.53 -> 155.48
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 442.7; m.peTTM: 12.3 -> 14.5; m.peFwd: 11.5 -> 13.2; m.evEbitda: 9 -> 3.2; m.evSales: 1.5 -> 0.6; m.gross: 28 -> 25.0; m.op: 19.3 -> 13.7; m.net: 10.4 -> 9.9; m.roe: 18.7 -> 19.6; m.revCagrHist: 8.8 -> 12.1
- `AXP` American Express: price: 313.34 -> 342.48; mcap: 213.8 -> 231.28; m.peTTM: 19.6 -> 20.8; m.peFwd: 15.6 -> 17.0; m.gross: 55 -> 62.3; m.op: 21.2 -> 20.3; m.net: 16.3 -> 16.1; m.revCagrHist: 11.6 -> 12.8; d.revPS: 99.58 -> 103.45
- `INTU` Intuit: price: 284.22 -> 345.66; mcap: 77.74 -> 94.55; m.peTTM: 17.3 -> 21.1; m.peFwd: 10.4 -> 12.7; m.evEbitda: 12.1 -> 14.8; m.evSales: 3.7 -> 4.5
- meta: data-date stamped to 2026-08-17 in hero/footer

**Needs review**
- `ALV` Allianz — currency **EUR**: USD mcap not derivable (missing shares/FX); mcap left unchanged

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `BK` BNY — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 97.74; mcap: 41.39 -> 42.57; m.peTTM: 96 -> 168.5; m.peFwd: 50 -> 52.0; m.evEbitda: 46.2 -> 53.5; m.evSales: 11.7 -> 12.3; m.gross: 36.8 -> 35.1; m.op: 18.2 -> 9.1; m.net: 18.4 -> 10.2; m.roe: 9.6 -> 5.1; m.revCagrHist: 7.1 -> -7.2
- `UEC` Uranium Energy: price: 9.42 -> 11.21; m.evSales: 206.7 -> 250.6
- `NXE` NexGen Energy: price: 9.27 -> 10.39; mcap: 6.14 -> 6.97; m.roe: -29.6 -> -17.7
- `SMR` NuScale Power: price: 9.29 -> 9.39; mcap: 3.22 -> 3.85; m.evSales: 121.8 -> 256.4; m.gross: 23.8 -> 23.5; m.roe: -83 -> -55.2; m.revCagrHist: -95.8 -> -99.1; d.revPS: 0.09 -> 0.04
- `OKLO` Oklo: price: 54.02 -> 44.38; mcap: 9.4 -> 8.26; m.gross: 0 -> 40.4; m.roe: -8.9 -> -7.7; d.revPS: 0 -> 0.01
- `BWXT` BWX Technologies: price: 183 -> 173.22; mcap: 16.77 -> 15.87; m.peTTM: 48.9 -> 44.9; m.peFwd: 35.2 -> 33.0; m.evEbitda: 39.3 -> 36.3; m.evSales: 5.4 -> 4.9; m.gross: 22.7 -> 22.1; m.net: 10.2 -> 10.1; m.roe: 29 -> 28.3; m.revCagrHist: 26.1 -> 18.0; d.revPS: 36.87 -> 38.35
- `LEU` Centrus Energy: price: 146.61 -> 190.15; mcap: 2.88 -> 3.79; m.peTTM: 53.1 -> 101.1; m.peFwd: 36.9 -> 50.8; m.evSales: 4.9 -> 6.5; m.gross: 25.7 -> 23.7; m.op: -0.3 -> 5.3; m.net: 13.4 -> 10.2; m.roe: 12.3 -> 8.1; m.revCagrHist: 4.9 -> 14.0; d.revPS: 24.23 -> 24.67
- `CEG` Constellation Energy: price: 242.3 -> 282.5; mcap: 86.53 -> 100.09; m.peTTM: 21.9 -> 27.6; m.peFwd: 17.8 -> 21.2; m.evEbitda: 13.8 -> 15.6; m.evSales: 3.7 -> 4.0; m.gross: 23.3 -> 22.1; m.op: 21.9 -> 8.7; m.net: 12.7 -> 11.1; m.roe: 16.1 -> 15.1; m.revCagrHist: 63.8 -> 23.0; d.revPS: 92.4 -> 93.48
- `VST` Vistra: price: 138.54 -> 148.13; mcap: 46.71 -> 49.72; m.peTTM: 23.2 -> 25.0; m.peFwd: 12.6 -> 14.3; m.evEbitda: 10.1 -> 10.9; m.evSales: 3.5 -> 3.8; m.gross: 38.6 -> 38.3; m.op: 26.6 -> 13.8; m.net: 11.5 -> 11.6; m.roe: 42.9 -> 43.0; m.revCagrHist: 43.4 -> -5.5; d.revPS: 57.42 -> 56.84
- `GEV` GE Vernova: price: 867.09 -> 1063.25; mcap: 233 -> 283.18; m.peTTM: 25.3 -> 30.5; m.peFwd: 35.4 -> 42.3; m.evEbitda: 66.8 -> 70.1; m.evSales: 5.8 -> 6.7; m.gross: 20.3 -> 20.6; m.op: 5.5 -> 7.5; m.net: 23.8 -> 23.0; m.roe: 75.7 -> 82.6; m.revCagrHist: 16.3 -> 21.9; d.revPS: 145.56 -> 153.78
- `ETN` Eaton: price: 375.46 -> 451.51; mcap: 145.79 -> 175.37; m.peTTM: 36.8 -> 46.1; m.peFwd: 23.9 -> 28.2; m.evEbitda: 26.3 -> 29.5; m.evSales: 5.9 -> 6.5; m.gross: 37.1 -> 36.0; m.op: 16.1 -> 16.6; m.net: 14 -> 12.8; m.roe: 20.8 -> 19.7; m.revCagrHist: 16.8 -> 21.4; d.revPS: 73.34 -> 77.29
- `PWR` Quanta Services: price: 650.92 -> 685.78; mcap: 97.68 -> 103.1; m.peTTM: 89.5 -> 78.7; m.peFwd: 39.5 -> 34.9; m.evEbitda: 39 -> 35.9; m.evSales: 3.4 -> 3.3; m.gross: 15.1 -> 15.5; m.op: 4.2 -> 7.2; m.net: 3.7 -> 4.0; m.roe: 13.5 -> 15.3; m.revCagrHist: 26.3 -> 41.1; d.revPS: 201.93 -> 219.94
- `NEE` NextEra Energy: price: 85.12 -> 86.19; mcap: 177.53 -> 179.79; m.peTTM: 21.6 -> 19.4; m.peFwd: 19.4 -> 19.5; m.evEbitda: 20.6 -> 20.4; m.evSales: 10.5 -> 10.4; m.gross: 61.4 -> 61.0; m.op: 30.2 -> 31.5; m.net: 29.4 -> 32.4; m.roe: 10.3 -> 11.7; m.revCagrHist: 7.3 -> 12.4; d.revPS: 13.45 -> 13.81
- `FSLR` First Solar: price: 249.27 -> 225.56; mcap: 26.78 -> 24.24; m.peTTM: 16.1 -> 23.0; m.peFwd: 10.6 -> 9.7; m.evEbitda: 11 -> 9.5; m.evSales: 4.6 -> 4.2; m.gross: 41.7 -> 44.0; m.op: 33.1 -> 42.6; m.net: 30.7 -> 32.5; m.roe: 18.4 -> 18.5; m.revCagrHist: 23.6 -> -3.7; d.revPS: 50.51 -> 50.1
- meta: data-date stamped to 2026-08-17 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 46.26; mcap: 21.14 -> 18.74; m.peTTM: 145.2 -> 999; m.evSales: 102.3 -> 63.2; m.gross: 36.1 -> 30.9; m.net: 174.9 -> 0.0; m.roe: 11.3 -> -60.5; m.revCagrHist: 202 -> 286.8; d.revPS: 0.6 -> 0.72
- `RGTI` Rigetti Computing: price: 19.45 -> 18.82; mcap: 6.46 -> 6.28; m.gross: 30 -> 34.6; m.roe: -57.1 -> -43.8; m.revCagrHist: 198.9 -> 185.3; d.revPS: 0.03 -> 0.04
- `QBTS` D-Wave Quantum: price: 23.25 -> 21.17; mcap: 8.61 -> 7.88; m.gross: 66.3 -> 64.2; m.roe: -55.3 -> -28.0; m.revCagrHist: -80.9 -> -0.6
- `QUBT` Quantum Computing Inc: price: 9.53 -> 9.01; mcap: 2.15 -> 2.04; m.evSales: 269.7 -> 112.8; m.net: 0 -> -152.5; m.roe: -4.4 -> -1.5; d.revPS: 0.02 -> 0.05
- `IBM` IBM: price: 272.36 -> 234.32; mcap: 255.99 -> 220.76; m.peTTM: 24.1 -> 20.8; m.peFwd: 20.3 -> 17.8; m.evEbitda: 18.9 -> 16.9; m.evSales: 4.6 -> 4.0; m.gross: 58.4 -> 58.1; m.op: 13.8 -> 16.5; m.net: 15.6 -> 15.5; m.roe: 35.8 -> 34.5; m.revCagrHist: 9.5 -> 1.1; d.revPS: 73.71 -> 73.7
- `GOOGL` Alphabet: price: 356.38 -> 345.9; mcap: 4346.03 -> 4230.33; m.peTTM: 27.2 -> 17.4; m.peFwd: 24.6 -> 23.5; m.evEbitda: 26.6 -> 23.8; m.evSales: 10.1 -> 9.3; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `MSFT` Microsoft: price: 397.36 -> 495.4; mcap: 2951.76 -> 3678.62; m.peTTM: 23.7 -> 27.6; m.peFwd: 20.5 -> 21.0; m.evEbitda: 16.3 -> 19.2; m.evSales: 9.4 -> 11.2; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `HON` Honeywell: price: 205.88 -> 233.96; mcap: 130.46 -> 74.15; m.peTTM: 32.9 -> 9.0; m.peFwd: 18 -> 23.4; m.evEbitda: 18.4 -> 11.8; m.evSales: 4.2 -> 2.6; m.gross: 36.9 -> 36.5; m.op: 21 -> 20.2; m.net: 10.9 -> 21.6; m.roe: 24.3 -> 46.6; m.revCagrHist: 2.4 -> 4.3; d.revPS: 59.25 -> 119.9
- `FORM` FormFactor: price: 115.81 -> 131.6; mcap: 9.03 -> 10.28; m.peTTM: 133.1 -> 90.8; m.peFwd: 41.5 -> 37.9; m.evEbitda: 63.7 -> 53.4; m.evSales: 10.4 -> 11.0; m.gross: 42.2 -> 46.2; m.op: 17.7 -> 24.1; m.net: 8.1 -> 12.8; m.roe: 6.8 -> 11.0; m.revCagrHist: 32 -> 31.9; d.revPS: 10.84 -> 11.61
- `NVDA` NVIDIA: price: 200.42 -> 225.16; mcap: 4854.37 -> 5453.6; m.peTTM: 30.7 -> 34.5; m.peFwd: 15.7 -> 17.6; m.evEbitda: 29.1 -> 32.7; m.evSales: 19 -> 21.3
- meta: data-date stamped to 2026-08-17 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 342.27; mcap: 1433.15 -> 1351.81; m.peTTM: 370.5 -> 311.2; m.peFwd: 152.6 -> 157.0; m.evEbitda: 126.6 -> 123.2; m.evSales: 14.4 -> 12.8; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SERV` Serve Robotics: price: 6.98 -> 4.99; mcap: 0.59 -> 0.43; m.evSales: 68.7 -> 26.5; m.roe: -52 -> -64.6; d.revPS: 0.08 -> 0.11
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 82.78; mcap: 180.91 -> 185.1; m.peFwd: 29.2 -> 28.2; m.evEbitda: 21.2 -> 21.6; m.gross: 40.4 -> 40.2; m.op: 20.6 -> 16.9; m.net: 14.3 -> 14.1; m.roe: 33.6 -> 32.6; m.revCagrHist: 18.3 -> 14.2
- `6954` Fanuc (via `6954.T`): price: 6691 -> 6516.0; mcap: 38.9 -> 38.23; m.peTTM: 37.5 -> 36.6; m.peFwd: 38.7 -> 37.6; m.evEbitda: 24.1 -> 21.7; m.evSales: 6.5 -> 5.9; m.gross: 38.3 -> 38.4; m.op: 23.9 -> 23.2; m.net: 19.4 -> 20.1; m.roe: 9.4 -> 10.0; m.revCagrHist: 10.6 -> 17.7
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 5468.0; mcap: 9.68 -> 8.92; m.peTTM: 44.1 -> 40.3; m.peFwd: 29.2 -> 26.7; m.evEbitda: 24.2 -> 22.0; m.evSales: 3 -> 2.7; m.gross: 35.3 -> 35.0; m.op: 8.8 -> 6.1; m.net: 6.5 -> 6.1; m.roe: 7.8 -> 7.5; m.revCagrHist: 2 -> 10.6
- `ROK` Rockwell Automation: price: 440.07 -> 449.37; mcap: 48.97 -> 50.0; m.peTTM: 45.7 -> 42.0; m.evEbitda: 26.7 -> 25.4; m.evSales: 6 -> 5.9; m.gross: 48.9 -> 49.1; m.op: 20.7 -> 21.0; m.net: 12.4 -> 13.4; m.roe: 27.2 -> 30.6; m.revCagrHist: 11.9 -> 7.9; d.revPS: 78.4 -> 80.15
- `EMR` Emerson Electric: price: 137.11 -> 163.17; mcap: 76.8 -> 91.02; m.peTTM: 31.7 -> 35.7; m.peFwd: 19.1 -> 22.6; m.evEbitda: 15.2 -> 16.9; m.evSales: 4.9 -> 5.5; m.gross: 52.7 -> 53.2; m.op: 24.2 -> 26.9; m.net: 13.4 -> 13.8; m.roe: 12.3 -> 12.8; m.revCagrHist: 2.9 -> 7.0; d.revPS: 32.6 -> 33.22
- `SIEGY` Siemens: price: 153.07 -> 164.25; mcap: 235.46 -> 252.66; m.peTTM: 27.5 -> 28.5; m.peFwd: 20.8 -> 22.2; m.evEbitda: 23.9 -> 24.0; m.evSales: 3.6 -> 3.7; m.gross: 38.8 -> 39.4; m.op: 12.7 -> 14.9; m.net: 9.7 -> 9.8; m.roe: 12.6 -> 12.5; m.revCagrHist: 0 -> 7.3
- `PH` Parker Hannifin: price: 875.6 -> 1055.85; mcap: 110.4 -> 133.13; m.peTTM: 32.3 -> 37.0; m.peFwd: 25.7 -> 27.2; m.evEbitda: 21.8 -> 25.3; m.evSales: 5.7 -> 6.6; m.gross: 37.4 -> 37.7; m.op: 21.5 -> 23.9; m.net: 16.6 -> 17.0; m.roe: 24.8 -> 25.1; m.revCagrHist: 10.6 -> 9.8; d.revPS: 165.81 -> 170.22
- `NOVT` Novanta: price: 154.58 -> 166.58; mcap: 5.51 -> 6.3; m.peTTM: 111.2 -> 105.4; m.peFwd: 37.3 -> 38.1; m.evEbitda: 30.2 -> 32.4; m.evSales: 5.4 -> 5.7; m.gross: 44.2 -> 44.5; m.op: 11.7 -> 11.5; m.net: 5.3 -> 6.0; m.roe: 5.2 -> 5.1; m.revCagrHist: 10.4 -> 10.3; d.revPS: 26.66 -> 26.45
- `CGNX` Cognex: price: 58.69 -> 65.63; mcap: 9.77 -> 11.04; m.peTTM: 69 -> 63.1; m.peFwd: 33.3 -> 32.4; m.evEbitda: 42.1 -> 40.0; m.evSales: 9.1 -> 9.8; m.gross: 68 -> 68.9; m.op: 22.3 -> 29.4; m.net: 13.6 -> 16.1; m.roe: 9.7 -> 11.1; m.revCagrHist: 24.3 -> 16.9; d.revPS: 6.25 -> 6.51
- `SYM` Symbotic: price: 41.24 -> 42.7; mcap: 24.89 -> 25.85; m.peFwd: 57.4 -> 55.1; m.evEbitda: 159.3 -> 75.2; m.evSales: 1.4 -> 1.6; m.gross: 20.4 -> 21.3; m.op: 1.1 -> 4.6; m.net: -0.3 -> 0.3; m.roe: -5.7 -> 4.4; m.revCagrHist: 23.1 -> 21.7
- `ZBRA` Zebra Technologies: price: 216.79 -> 376.03; mcap: 10.33 -> 17.79; m.peTTM: 26.2 -> 34.5; m.peFwd: 10.5 -> 16.9; m.evEbitda: 12.7 -> 17.4; m.evSales: 2.3 -> 3.5; m.gross: 48.2 -> 49.6; m.op: 15 -> 21.3; m.net: 7.5 -> 9.2; m.roe: 11.8 -> 15.3; m.revCagrHist: 14.3 -> 20.4; d.revPS: 111.14 -> 118.3
- meta: data-date stamped to 2026-08-17 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 0

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 37700.0; mcap: 113.02 -> 171.64; m.peTTM: 48.8 -> 73.0; m.peFwd: 105.2 -> 158.6; m.evEbitda: 34.3 -> 45.3; m.evSales: 15.9 -> 21.4; m.gross: 64.3 -> 65.7; m.op: 46.7 -> 51.7; m.net: 33.3 -> 37.3; m.roe: 57.6 -> 56.9; m.revCagrHist: 41.2 -> 39.3
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 6385.0; mcap: 78 -> 74.26; m.peTTM: 26.7 -> 25.3; m.peFwd: 20.4 -> 19.4; m.evEbitda: 12.7 -> 12.0; m.evSales: 4.3 -> 4.1; m.gross: 34.2 -> 33.9; m.op: 21.4 -> 26.2; m.roe: 10.7 -> 11.2; m.revCagrHist: 1.3 -> 5.4
- `6146` Disco (via `6146.T`): price: 68720 -> 65780.0; mcap: 46.43 -> 44.86; m.peTTM: 55.1 -> 52.9; m.peFwd: 50.5 -> 48.3; m.evEbitda: 36.8 -> 31.9; m.evSales: 16.7 -> 14.8; m.gross: 70.2 -> 70.8; m.op: 44 -> 42.7; m.net: 31 -> 31.6; m.roe: 30 -> 27.4; m.revCagrHist: 22 -> 27.1
- `6963` Rohm (via `6963.T`): price: 4679 -> 5201.0; mcap: 11.25 -> 12.62; m.peFwd: 53.8 -> 59.9; m.evEbitda: 26.4 -> 23.8; m.gross: 23.9 -> 24.8; m.op: 1 -> 7.1; m.net: -32.9 -> -30.4; m.revCagrHist: -3 -> 16.8
- `4004` Resonac (via `4004.T`): price: 15820 -> 17225.0; mcap: 17.84 -> 20.55; m.peTTM: 98.2 -> 59.1; m.peFwd: 63.4 -> 69.1; m.evEbitda: 24.1 -> 20.2; m.gross: 25.6 -> 27.4; m.op: 7.2 -> 13.9; m.net: 2.7 -> 4.2; m.roe: 5.5 -> 8.1; m.revCagrHist: -4.1 -> 15.0
- `6861` Keyence (via `6861.T`): price: 71270 -> 87000.0; mcap: 107.68 -> 132.67; m.peTTM: 38.8 -> 47.5; m.peFwd: 38.2 -> 46.6; m.evSales: 13.8 -> 15.8; m.gross: 83 -> 83.7; m.op: 53.6 -> 54.0; m.net: 38.1 -> 39.2; m.revCagrHist: 17.9 -> 32.8
- `6723` Renesas (via `6723.T`): price: 4222 -> 3890.0; mcap: 47.72 -> 44.7; m.peTTM: 999 -> 20.9; m.peFwd: 16.4 -> 14.0; m.evEbitda: 23.5 -> 18.0; m.evSales: 6.3 -> 5.1; m.gross: 58.1 -> 58.8; m.op: 24.3 -> 24.8; m.net: -0.7 -> 22.9; m.roe: -0.4 -> 14.0; m.revCagrHist: 23.2 -> 28.5
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 60080.0; mcap: 177.9 -> 171.75; m.peTTM: 50.3 -> 47.9; m.peFwd: 49 -> 46.9; m.evEbitda: 39.1 -> 34.0; m.evSales: 11.3 -> 10.1; m.gross: 45.3 -> 45.6; m.net: 23.5 -> 23.6; m.roe: 29.3 -> 30.9; m.revCagrHist: 8.6 -> 33.3
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 14620.0; mcap: 15.04 -> 17.38; m.peTTM: 26.2 -> 30.0; m.peFwd: 14.6 -> 16.7; m.evEbitda: 16.3 -> 19.5; m.evSales: 3.7 -> 4.2; m.gross: 38.5 -> 38.1; m.op: 25 -> 11.8; m.net: 15.2 -> 14.5; m.roe: 20.3 -> 18.9; m.revCagrHist: 9.1 -> -10.3
- `ASML` ASML Holding: price: 1734.19 -> 1844.08; mcap: 668.39 -> 708.31; m.peTTM: 59.5 -> 62.9; m.peFwd: 36.2 -> 31.0; m.gross: 52.6 -> 52.7; m.op: 36 -> 37.1; m.net: 29.7 -> 30.1; m.roe: 52.2 -> 53.9; m.revCagrHist: 13.2 -> 21.3
- `LRCX` Lam Research: price: 321.8 -> 332.36; mcap: 402.43 -> 415.89; m.peTTM: 60.7 -> 57.8; m.peFwd: 40.4 -> 28.8; m.evEbitda: 51.2 -> 48.0; m.evSales: 18.5 -> 17.8; m.gross: 50 -> 50.5; m.op: 35 -> 37.4; m.net: 30.9 -> 31.3; m.roe: 66.8 -> 65.1; m.revCagrHist: 23.8 -> 30.0; d.revPS: 17.2 -> 18.51
- `KLAC` KLA Corp: price: 2135.64 -> 203.72; mcap: 278.97 -> 266.17; m.peTTM: 60.6 -> 55.5; m.peFwd: 42.4 -> 31.0; m.evEbitda: 47.9 -> 44.2; m.evSales: 21.4 -> 19.7; m.gross: 61.4 -> 61.3; m.op: 41.2 -> 42.5; m.net: 35.7 -> 35.6; m.roe: 95 -> 87.5; m.revCagrHist: 11.5 -> 15.2
- `TSM` TSMC: price: 408.75 -> 426.35; mcap: 2119.97 -> 2211.25; m.peTTM: 35.1 -> 32.2; m.peFwd: 20.9 -> 19.6; m.evEbitda: 5.2 -> 4.8; m.evSales: 3.6 -> 3.4; m.gross: 61.9 -> 64.2; m.op: 58.1 -> 60.3; m.net: 46.5 -> 49.9; m.roe: 36.2 -> 40.0; m.revCagrHist: 35.1 -> 36.0
- `AMAT` Applied Materials: price: 497.01 -> 507.18; mcap: 394.61 -> 402.68; m.peTTM: 46.7 -> 43.7; m.peFwd: 30.6 -> 27.9; m.evEbitda: 42.4 -> 39.4; m.evSales: 13.6 -> 13.0; m.gross: 49 -> 49.4; m.op: 31.9 -> 33.7; m.net: 29.3 -> 30.1; m.roe: 39.7 -> 41.1; m.revCagrHist: 11.4 -> 24.8; d.revPS: 36.48 -> 38.83
- `NVDA` NVIDIA: price: 200.42 -> 225.16; mcap: 4854.37 -> 5453.6; m.peTTM: 30.7 -> 34.5; m.peFwd: 15.7 -> 17.6; m.evEbitda: 29.1 -> 32.7; m.evSales: 19 -> 21.3
- `AVGO` Broadcom: price: 372.1 -> 392.99; mcap: 1770.3 -> 1869.68; m.peTTM: 61.7 -> 65.4; m.peFwd: 19.2 -> 20.1; m.evEbitda: 43.3 -> 45.5; m.evSales: 24.1 -> 25.4
- `AMD` AMD: price: 452.4 -> 514.39; mcap: 737.68 -> 839.73; m.peTTM: 151.3 -> 131.6; m.peFwd: 34.6 -> 33.3; m.evEbitda: 98.1 -> 86.9; m.evSales: 19.5 -> 20.1; m.gross: 53.1 -> 55.7; m.op: 14.4 -> 17.2; m.net: 13.4 -> 15.6; m.roe: 8.1 -> 10.2; m.revCagrHist: 37.8 -> 50.1; d.revPS: 23.02 -> 25.36
- `INTC` Intel: price: 107.04 -> 102.5; mcap: 537.98 -> 541.83; m.peFwd: 69.6 -> 50.2; m.evEbitda: 39.8 -> 32.9; m.evSales: 10.5 -> 9.7; m.gross: 37.2 -> 38.9; m.op: 6.9 -> 12.2; m.net: -5.9 -> -19.8; m.roe: -2.9 -> -10.7; m.revCagrHist: 7.2 -> 25.4; d.revPS: 11.4 -> 11.62
- `ARM` Arm Holdings: price: 307.43 -> 279.44; mcap: 328.36 -> 298.44; m.peTTM: 357.5 -> 285.1; m.peFwd: 100.2 -> 91.4; m.evEbitda: 120 -> 277.4; m.evSales: 66.1 -> 57.2; m.op: 29.5 -> 7.6; m.net: 18.4 -> 20.2; m.roe: 12 -> 13.4; m.revCagrHist: 20.1 -> 22.4; d.revPS: 4.64 -> 4.85
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 274500.0; mcap: 1118.21 -> 1120.11; m.peFwd: 5.2 -> 4.1; m.evEbitda: 13.4 -> 7.2; m.evSales: 4.9 -> 3.4; m.gross: 47.7 -> 57.5; m.op: 42.8 -> 52.2; m.net: 21.5 -> 30.9; m.roe: 18.9 -> 30.8; m.revCagrHist: 69.2 -> 129.9
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 1645000.0; mcap: 960.23 -> 826.64; m.peFwd: 5.1 -> 3.6; m.evEbitda: 15.5 -> 7.7; m.evSales: 10.7 -> 5.8; m.gross: 68.3 -> 70.2; m.op: 71.5 -> 76.3; m.net: 56.9 -> 85.7; m.roe: 61.2 -> 92.7; m.revCagrHist: 198.1 -> 256.8
- `MU` Micron: price: 891.88 -> 971.66; m.peTTM: 42.2 -> 22.0; m.peFwd: 8 -> 6.3; m.evEbitda: 27.2 -> 15.8; m.evSales: 17.2 -> 11.9; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 421.5; mcap: 88.18 -> 80.71; m.peTTM: 105.4 -> 96.2; m.peFwd: 26.7 -> 24.4; m.evEbitda: 56.9 -> 52.5; m.evSales: 11.1 -> 10.3
- `CDNS` Cadence: price: 385.13 -> 324.82; mcap: 106.23 -> 89.45; m.peTTM: 90.2 -> 64.6; m.peFwd: 41 -> 34.1; m.evEbitda: 53.5 -> 42.0; m.evSales: 19.5 -> 15.5; m.gross: 86.1 -> 85.9; m.op: 29.7 -> 28.6; m.net: 21.2 -> 23.6; m.roe: 20.7 -> 23.2; m.revCagrHist: 18.7 -> 24.2; d.revPS: 20.37 -> 21.46
- `QCOM` Qualcomm: price: 191.2 -> 165.79; mcap: 201.52 -> 174.08; m.peTTM: 22.1 -> 18.9; m.peFwd: 17.9 -> 16.3; m.evEbitda: 15.9 -> 15.1; m.evSales: 4.7 -> 4.1; m.gross: 54.8 -> 54.2; m.op: 22.1 -> 18.5; m.net: 22.3 -> 21.0; m.roe: 36.1 -> 33.8; m.revCagrHist: -3.5 -> -4.0; d.revPS: 41.33 -> 41.28
- `GFS` GlobalFoundries: price: 74.82 -> 54.58; mcap: 41.03 -> 29.95; m.peTTM: 50.6 -> 42.6; m.peFwd: 29.7 -> 20.8; m.evEbitda: 19.6 -> 14.8; m.evSales: 5.8 -> 4.2; m.gross: 26.1 -> 27.1; m.op: 11 -> 9.7; m.net: 11.4 -> 10.3; m.roe: 6.8 -> 6.2; m.revCagrHist: 3.1 -> 5.8; d.revPS: 12.32 -> 12.52
- `LIN` Linde: price: 509.16 -> 482.74; mcap: 235.41 -> 222.53; m.peTTM: 33.8 -> 31.1; m.peFwd: 25.8 -> 24.7; m.evEbitda: 19.1 -> 17.9; m.evSales: 7.5 -> 7.0; m.gross: 48.8 -> 48.3; m.op: 28.5 -> 28.1; m.roe: 18.2 -> 18.4; m.revCagrHist: 8.2 -> 9.3; d.revPS: 74.18 -> 76.2
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 168.26; mcap: 123.3 -> 124.15; m.peFwd: 23.7 -> 23.3; m.evEbitda: 15.6 -> 16.1; m.evSales: 4.3 -> 4.5; m.gross: 64.2 -> 64.6; m.op: 19.5 -> 20.1; m.roe: 13.4 -> 14.0; m.revCagrHist: -3.4 -> 0.8
- `ENTG` Entegris: price: 128.88 -> 161.76; mcap: 19.63 -> 24.72; m.peTTM: 74.5 -> 80.5; m.peFwd: 27.9 -> 32.3; m.evEbitda: 26.1 -> 30.5; m.evSales: 7.1 -> 8.4; m.gross: 44.8 -> 45.6; m.op: 17.9 -> 19.3; m.net: 8.2 -> 9.2; m.roe: 6.8 -> 7.7; m.revCagrHist: 5 -> 11.5; d.revPS: 21.3 -> 21.85
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 9604.0; mcap: 7.01 -> 7.25; m.peTTM: 33.8 -> 28.7; m.peFwd: 48 -> 49.2
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 4202.0; mcap: 5.39 -> 5.15; m.peFwd: 16.1 -> 15.2; m.evEbitda: 12.6 -> 9.6; m.evSales: 1.4 -> 1.2; m.gross: 21.9 -> 22.7; m.op: 3.7 -> 12.4; m.net: -5.5 -> -3.9; m.roe: -5 -> -3.4; m.revCagrHist: -0.9 -> 25.7
- `3436` Sumco (via `3436.T`): price: 3275 -> 4058.0; mcap: 7.14 -> 8.92; m.peFwd: 66.5 -> 82.4; m.evEbitda: 13.4 -> 15.0; m.evSales: 3.6 -> 4.1; m.gross: 10.8 -> 9.3; m.op: -7.3 -> -2.7; m.net: -5.7 -> -6.6; m.roe: -3.5 -> -4.1; m.revCagrHist: -1 -> 10.4
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 129.2; mcap: 5.17 -> 5.35; m.peFwd: 63 -> 45.6; m.evEbitda: 40.4 -> 49.8; m.evSales: 7.6 -> 7.9; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 21475.0; mcap: 30.89 -> 37.74; m.peTTM: 82.3 -> 100.3; m.peFwd: 57.5 -> 69.5; m.evEbitda: 38.3 -> 40.5; m.evSales: 11.4 -> 12.8; m.gross: 31.6 -> 32.0; m.op: 14.1 -> 21.1; m.net: 15.3 -> 15.6; m.roe: 12.2 -> 12.7; m.revCagrHist: 18.6 -> 26.4
- `ASX` ASE Technology: price: 34.3 -> 39.54; mcap: 75.25 -> 102.95; m.peTTM: 53.6 -> 48.8; m.peFwd: 21.6 -> 21.5; m.evEbitda: 2 -> 2.2; m.gross: 18.5 -> 19.5; m.op: 10.1 -> 11.1; m.net: 7 -> 8.5; m.roe: 13.6 -> 17.0; m.revCagrHist: 17.2 -> 26.7
- `AMKR` Amkor Technology: price: 69.61 -> 58.99; mcap: 17.25 -> 14.66; m.peTTM: 40 -> 26.5; m.peFwd: 28.4 -> 20.9; m.evEbitda: 14.3 -> 11.2; m.evSales: 2.4 -> 2.0; m.gross: 14.4 -> 15.5; m.op: 6 -> 10.5; m.net: 6.2 -> 7.4; m.roe: 10 -> 12.5; m.revCagrHist: 27.5 -> 25.6; d.revPS: 28.6 -> 30.14
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 85.24; mcap: 18.86 -> 22.63; m.peTTM: 77.6 -> 92.7; m.peFwd: 50.1 -> 58.0; m.evEbitda: 22.6 -> 24.0; m.evSales: 3.6 -> 3.8
- `TXN` Texas Instruments: price: 282.01 -> 279.58; mcap: 256.66 -> 255.33; m.peTTM: 48.3 -> 42.6; m.peFwd: 30 -> 26.9; m.evEbitda: 30.7 -> 27.6; m.evSales: 14.4 -> 13.5; m.gross: 57.3 -> 58.3; m.op: 37.8 -> 42.6; m.net: 29.1 -> 31.1; m.roe: 32.3 -> 35.2; m.revCagrHist: 18.6 -> 22.8; d.revPS: 20.29 -> 21.38
- `ADI` Analog Devices: price: 392.67 -> 389.39; m.peTTM: 58.5 -> 57.8; m.peFwd: 26.6 -> 25.9; m.evEbitda: 32 -> 31.7; m.evSales: 15.4 -> 15.3
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 61.73; mcap: 112.72 -> 93.0; m.peTTM: 91.6 -> 75.3; m.peFwd: 29.1 -> 22.3; m.evEbitda: 25.8 -> 20.5; m.evSales: 6.9 -> 5.5; m.gross: 41.2 -> 41.1; m.op: 46.7 -> 14.2; m.net: 7.2 -> 7.8; m.roe: 6.3 -> 7.0; m.revCagrHist: 5 -> 12.6
- `NXPI` NXP Semiconductors: price: 285.56 -> 234.71; mcap: 72.1 -> 59.19; m.peTTM: 28.4 -> 46.8; m.peFwd: 16.2 -> 13.0; m.evEbitda: 19.3 -> 13.3; m.evSales: 6.4 -> 5.1; m.gross: 55.6 -> 56.1; m.op: 27.7 -> 30.4; m.net: 21 -> 22.6; m.roe: 25.8 -> 27.9; m.revCagrHist: 12.2 -> 19.5; d.revPS: 49.97 -> 52.23
- `STM` STMicroelectronics: price: 70.74 -> 54.29; mcap: 62.87 -> 48.46; m.peTTM: 442.1 -> 106.5; m.peFwd: 28.8 -> 21.3; m.evEbitda: 24.7 -> 17.0; m.evSales: 5 -> 3.6; m.gross: 34 -> 34.3; m.op: 3.7 -> 6.9; m.net: 1.2 -> 3.6; m.roe: 0.9 -> 2.7; m.revCagrHist: 23 -> 26.1; d.revPS: 13.88 -> 14.71
- `ON` ON Semiconductor: price: 110.17 -> 82.66; mcap: 42.83 -> 32.18; m.peTTM: 81 -> 54.0; m.peFwd: 25.8 -> 18.3; m.evEbitda: 21.5 -> 15.8; m.evSales: 7.3 -> 5.3; m.gross: 42.7 -> 42.8; m.op: 18.2 -> 19.5; m.net: 9.5 -> 10.2; m.roe: 7.5 -> 8.3; m.revCagrHist: 4.7 -> 9.2; d.revPS: 15 -> 15.57
- `MCHP` Microchip: price: 87.91 -> 79.17; mcap: 47.65 -> 42.99; m.peTTM: 399.6 -> 116.4; m.peFwd: 21.5 -> 17.3; m.evEbitda: 43.5 -> 31.9; m.evSales: 11.3 -> 9.4; m.gross: 57.7 -> 60.2; m.op: 17.1 -> 24.0; m.net: 4.9 -> 9.3; m.roe: 3.4 -> 7.2; m.revCagrHist: 35.1 -> 38.0; d.revPS: 8.72 -> 9.46
- `MRVL` Marvell: price: 252.59 -> 222.02; mcap: 220.97 -> 199.27; m.peTTM: 87.1 -> 76.3; m.peFwd: 40.9 -> 35.6; m.evEbitda: 82 -> 72.1; m.evSales: 25.5 -> 22.4
- `AVT` Avnet: price: 85.39 -> 95.71; mcap: 7 -> 7.86; m.peTTM: 33 -> 23.9; m.peFwd: 10.8 -> 8.7; m.evEbitda: 13 -> 11.8; m.gross: 10.5 -> 10.4; m.op: 3.1 -> 3.9; m.net: 0.9 -> 1.2; m.roe: 4.3 -> 6.7; m.revCagrHist: 33.9 -> 47.7; d.revPS: 301.97 -> 336.34
- `ARW` Arrow Electronics: price: 215.49 -> 213.99; mcap: 11.02 -> 10.89; m.peTTM: 15.4 -> 13.7; m.peFwd: 10.1 -> 8.9; m.evEbitda: 10.4 -> 8.8; m.op: 4.2 -> 4.0; m.net: 2.2 -> 2.3; m.roe: 11.3 -> 12.0; m.revCagrHist: 39 -> 31.8; d.revPS: 649.87 -> 698.48
- `AAPL` Apple: price: 291.58 -> 305.93; mcap: 4282.54 -> 4464.8; m.peTTM: 35.3 -> 35.1; m.peFwd: 30.4 -> 32.2; m.evEbitda: 26.9 -> 26.7; m.evSales: 9.5 -> 9.6; m.gross: 47.9 -> 48.7; m.op: 32.3 -> 32.6; m.net: 27.2 -> 27.6; m.roe: 141.5 -> 148.8; m.revCagrHist: 16.6 -> 16.4; d.revPS: 30.53 -> 31.71
- `MSFT` Microsoft: price: 397.36 -> 495.4; mcap: 2951.76 -> 3678.62; m.peTTM: 23.7 -> 27.6; m.peFwd: 20.5 -> 21.0; m.evEbitda: 16.3 -> 19.2; m.evSales: 9.4 -> 11.2; m.gross: 68.3 -> 67.9; m.op: 46.3 -> 45.1; m.net: 39.3 -> 40.3; m.revCagrHist: 18.3 -> 17.7; d.revPS: 42.84 -> 44.67
- `GOOGL` Alphabet: price: 356.38 -> 345.9; mcap: 4346.03 -> 4230.33; m.peTTM: 27.2 -> 17.4; m.peFwd: 24.6 -> 23.5; m.evEbitda: 26.6 -> 23.8; m.evSales: 10.1 -> 9.3; m.gross: 60.4 -> 60.9; m.op: 36.1 -> 34.0; m.net: 37.9 -> 54.8; m.roe: 38.9 -> 48.7; m.revCagrHist: 21.8 -> 24.2; d.revPS: 34.93 -> 36.84
- `AMZN` Amazon: price: 238 -> 262.65; mcap: 2560.19 -> 2833.03; m.peTTM: 31.6 -> 21.1; m.peFwd: 24.1 -> 25.2; m.evEbitda: 17 -> 17.5; m.evSales: 3.6 -> 3.8; m.gross: 50.6 -> 50.8; m.op: 13.1 -> 13.7; m.net: 12.2 -> 17.4; m.roe: 24.3 -> 30.6; m.revCagrHist: 16.6 -> 19.6; d.revPS: 69.48 -> 72.33
- `META` Meta Platforms: price: 570.98 -> 589.85; mcap: 1449.39 -> 1502.65; m.peTTM: 20.7 -> 22.2; m.peFwd: 15.8 -> 16.9; m.evEbitda: 13.3 -> 13.9; m.evSales: 6.8 -> 6.7; m.gross: 81.9 -> 81.7; m.op: 40.6 -> 34.8; m.net: 32.8 -> 29.8; m.roe: 32.9 -> 29.8; m.revCagrHist: 33.1 -> 28.0; d.revPS: 85.21 -> 90.25
- `TSLA` Tesla: price: 381.59 -> 342.27; mcap: 1433.15 -> 1351.81; m.peTTM: 370.5 -> 311.2; m.peFwd: 152.6 -> 157.0; m.evEbitda: 126.6 -> 123.2; m.evSales: 14.4 -> 12.8; m.gross: 19.1 -> 18.9; m.op: 4.2 -> 1.4; m.net: 3.9 -> 3.7; m.roe: 4.9 -> 4.7; m.revCagrHist: 15.8 -> 25.5; d.revPS: 30.31 -> 32.05
- `SONY` Sony Group: price: 20.76 -> 24.29; mcap: 122.26 -> 142.19; m.peTTM: 19.4 -> 20.8; m.peFwd: 17.4 -> 20.4; m.evEbitda: 10 -> 0.1; m.gross: 30.8 -> 32.2; m.op: 7.6 -> 16.7; m.net: -2.6 -> -1.7; m.roe: 12.4 -> 13.2; m.revCagrHist: 15.4 -> 8.2
- `CSCO` Cisco Systems: price: 118.8 -> 111.68; mcap: 468.24 -> 440.18; m.peTTM: 39.5 -> 33.5; m.peFwd: 24.9 -> 20.6; m.evEbitda: 28.5 -> 24.4; m.evSales: 8 -> 7.2; m.gross: 64.3 -> 64.6; m.op: 25 -> 27.7; m.net: 19.7 -> 21.0; m.roe: 25.2 -> 27.3; m.revCagrHist: 12 -> 17.6; d.revPS: 15.36 -> 16.02
- `DELL` Dell Technologies: price: 369.83 -> 490.81; mcap: 239.69 -> 317.13; m.peTTM: 29.5 -> 39.1; m.peFwd: 17.5 -> 22.2; m.evEbitda: 18.7 -> 24.1; m.evSales: 1.9 -> 2.5; m.op: 8.3 -> 8.9
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 89.89; mcap: 71.5 -> 72.48; m.peTTM: 45.7 -> 30.1; m.peFwd: 15.9 -> 15.7; m.evEbitda: 7.6 -> 7.5
- `APD` Air Products: price: 276.51 -> 308.97; mcap: 61.57 -> 68.8; m.peTTM: 29.2 -> 999; m.peFwd: 19.4 -> 21.4; m.evEbitda: 21 -> 86.3; m.evSales: 6.5 -> 7.0; m.gross: 32 -> 32.1; m.op: 23.6 -> 25.5; m.net: 16.9 -> -0.4; m.roe: 12.4 -> 0.0; m.revCagrHist: 8.8 -> 4.6; d.revPS: 55.95 -> 56.57
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 6070.0; mcap: 14.2 -> 16.52; m.peTTM: 18.4 -> 21.2; m.peFwd: 19 -> 21.9; m.evEbitda: 9.5 -> 10.2; m.evSales: 2.2 -> 2.4; m.gross: 42.8 -> 43.1; m.op: 14 -> 14.6; m.net: 9.1 -> 9.9; m.roe: 11.2 -> 12.1; m.revCagrHist: 7.5 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3231.0; mcap: 26.02 -> 24.3; m.peTTM: 15.5 -> 14.1; m.peFwd: 15 -> 13.9; m.evEbitda: 9.8 -> 9.7; m.evSales: 1.5 -> 1.4; m.gross: 40.8 -> 40.2; m.op: 11 -> 6.2; m.net: 8.2 -> 7.6; m.roe: 7.7 -> 7.1; m.revCagrHist: 6.8 -> 10.3
- `MRK.DE` Merck KGaA: price: 136.45 -> 136.3; mcap: 20.37 -> 20.42; m.peFwd: 15.7 -> 15.5; m.evEbitda: 11.9 -> 12.2; m.gross: 58.9 -> 59.1; m.op: 18.2 -> 13.9; m.net: 12.1 -> 11.2; m.roe: 8.5 -> 8.1; m.revCagrHist: -2.8 -> 3.4
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 529.8; mcap: 5.55 -> 5.5; m.peTTM: 14.5 -> 14.3; m.peFwd: 13.9 -> 13.6; m.evEbitda: 6.4 -> 6.2; m.gross: 28.7 -> 29.4; m.op: -4.6 -> 8.4; m.net: 2.6 -> 4.5; m.roe: 10 -> 13.2; m.revCagrHist: -11.3 -> 9.9
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 87.7; mcap: 2.96 -> 3.36; m.evEbitda: 12.3 -> 14.2; m.op: -9.7 -> -16.1; m.net: -5.1 -> -14.8; m.roe: -3.7 -> -10.4; m.revCagrHist: 3.1 -> -2.3
- `CEVA` CEVA: price: 41.08 -> 33.28; mcap: 1.14 -> 0.94; m.peFwd: 49.9 -> 41.8; m.evSales: 8.4 -> 6.3; m.gross: 87.2 -> 87.5; m.op: -18.8 -> -7.1; m.net: -10.5 -> -9.5; m.roe: -3.9 -> -3.6; m.revCagrHist: 11.5 -> 13.1; d.revPS: 4.45 -> 4.4
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 4050.0; mcap: 200.41 -> 203.05; m.peTTM: 60.2 -> 64.6; m.peFwd: 33.1 -> 29.4; m.evEbitda: 54.8 -> 58.3; m.evSales: 10.9 -> 11.0; m.gross: 47 -> 46.3; m.op: 15.3 -> 15.0; m.net: 16.9 -> 16.3; m.roe: 25.4 -> 23.9; m.revCagrHist: -2.7 -> 1.2
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 75.05; mcap: 54.37 -> 57.53; m.peTTM: 101.2 -> 105.7; m.peFwd: 52.4 -> 46.2; m.evEbitda: 94.5 -> 79.0; m.evSales: 45.2 -> 40.6; m.gross: 20.4 -> 21.8; m.op: 9.9 -> 17.8; m.net: 7.2 -> 10.0; m.roe: 2.6 -> 4.2; m.revCagrHist: 11.5 -> 36.1
- `UMC` UMC: price: 18.9 -> 19.15; mcap: 47.43 -> 48.03; m.peTTM: 30.5 -> 18.8; m.peFwd: 23.5 -> 21.8; m.gross: 29.6 -> 30.6; m.op: 18.5 -> 21.7; m.net: 20.8 -> 33.3; m.roe: 12.5 -> 21.3; m.revCagrHist: 5.5 -> 17.0
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 139.4; mcap: 22.67 -> 23.63; m.peTTM: 534.4 -> 557.6; m.peFwd: 111.9 -> 97.3; m.evSales: 95.5 -> 85.5; m.gross: 12.6 -> 14.1; m.op: -3 -> 1.3; m.net: 2.9 -> 3.8; m.roe: -0.8 -> -0.4; m.revCagrHist: 22.2 -> 26.8
- `285A` Kioxia (via `285A.T`): price: 74560 -> 61800.0; mcap: 253.66 -> 212.65; m.peTTM: 74 -> 61.2; m.evEbitda: 33.2 -> 12.5; m.evSales: 16.8 -> 7.8; m.gross: 43.3 -> 61.7; m.op: 59.5 -> 71.9; m.net: 23.7 -> 36.6; m.roe: 51.9 -> 87.1
- `SNDK` SanDisk: price: 1643.23 -> 1641.11; mcap: 243.35 -> 239.6; m.peTTM: 56.2 -> 22.3; m.peFwd: 9 -> 6.2; m.evEbitda: 42.6 -> 19.0; m.evSales: 18.2 -> 11.8; m.gross: 56 -> 71.5; m.op: 70 -> 78.5; m.net: 34.2 -> 56.5; m.roe: 39.3 -> 91.6; m.revCagrHist: 251 -> 371.6; d.revPS: 89.99 -> 137.74
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 6155.0; mcap: 68.69 -> 79.2; m.peTTM: 27.2 -> 31.1; m.peFwd: 32.6 -> 37.3; m.evEbitda: 16.8 -> 20.3; m.evSales: 1.9 -> 2.0; m.gross: 32.1 -> 32.5; m.op: 8 -> 9.3; m.net: 6.9 -> 7.0; m.roe: 10 -> 10.3; m.revCagrHist: 10 -> 14.0
- `WOLF` Wolfspeed: price: 43.42 -> 31.79; mcap: 2.26 -> 1.65; m.evSales: 3.9 -> 3.1
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 14960.0; mcap: 12.06 -> 13.73; m.peTTM: 19.7 -> 22.5; m.peFwd: 21.6 -> 24.6; m.evEbitda: 10.2 -> 10.8; m.evSales: 1.6 -> 1.8; m.gross: 28 -> 28.3; m.op: 16.5 -> 9.0; m.net: 8 -> 8.6; m.roe: 12.9 -> 14.3; m.revCagrHist: 8 -> 10.2
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 760.16; mcap: 67.48 -> 81.86; m.peTTM: 82.1 -> 99.0; m.peFwd: 43.5 -> 51.6; m.evEbitda: 61.5 -> 73.2; m.evSales: 10.9 -> 13.0
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 893.8; mcap: 51.19 -> 50.75; m.peTTM: 45 -> 41.0; m.peFwd: 33.6 -> 29.7; m.evEbitda: 39.8 -> 37.0; m.evSales: 13.6 -> 12.7; m.net: 31 -> 31.9; m.roe: 24.9 -> 26.8; m.revCagrHist: 2.8 -> 20.0
- `TER` Teradyne: price: 347.59 -> 418.79; mcap: 54.41 -> 65.47; m.peTTM: 64.5 -> 57.4; m.peFwd: 36.6 -> 36.2; m.evEbitda: 46.7 -> 43.4; m.evSales: 14.3 -> 14.6; m.gross: 58.7 -> 59.2; m.op: 37.6 -> 33.2; m.net: 22.6 -> 25.8; m.roe: 28.7 -> 36.5; m.revCagrHist: 87 -> 103.9; d.revPS: 23.99 -> 28.44
- `COHU` Cohu: price: 54.47 -> 59.3; mcap: 2.57 -> 2.81; m.peFwd: 37.4 -> 32.1; m.evEbitda: 12 -> 209.2; m.evSales: 5 -> 5.1; m.gross: 43.5 -> 44.0; m.op: -8.3 -> 0.6; m.net: -11.5 -> -7.4; m.roe: -7 -> -4.8; m.revCagrHist: 29.3 -> 38.4; d.revPS: 10.28 -> 11.12
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 2360.0; mcap: 28.4 -> 31.4; m.peTTM: 77.6 -> 74.9; m.peFwd: 36.3 -> 35.1; m.evEbitda: 74.6 -> 61.9; m.evSales: 28 -> 23.9; m.gross: 62.2 -> 61.1; m.op: 40.5 -> 38.7; m.net: 40.3 -> 41.1; m.roe: 52.1 -> 58.2; m.revCagrHist: 72.8 -> 109.6
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 181.6; mcap: 9.31 -> 9.71; m.peTTM: 66.9 -> 47.2; m.peFwd: 33.6 -> 31.1; m.evEbitda: 53.5 -> 36.8; m.evSales: 4.9 -> 4.4; m.gross: 38.1 -> 39.1; m.op: 9.7 -> 15.9; m.net: 7.3 -> 7.8; m.roe: 30 -> 9.3; m.revCagrHist: 27 -> 45.1
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 233.5; mcap: 26.42 -> 21.43; m.peTTM: 151.2 -> 89.1; m.peFwd: 47.6 -> 35.9; m.evEbitda: 109.2 -> 67.2; m.evSales: 36.1 -> 25.5; m.gross: 63.3 -> 64.1; m.op: 34.6 -> 43.5; m.net: 24 -> 28.4; m.roe: 31.3 -> 44.9; m.revCagrHist: 28.3 -> 68.7
- `KLIC` Kulicke & Soffa: price: 102.03 -> 99.09; mcap: 5.34 -> 5.19; m.peTTM: 99.1 -> 45.5; m.peFwd: 24.1 -> 16.8; m.evEbitda: 41.8 -> 24.5; m.evSales: 6.4 -> 5.0; m.gross: 53.6 -> 52.6; m.op: 15.9 -> 20.7; m.net: 7.2 -> 12.2; m.roe: 6.4 -> 13.2; m.revCagrHist: 49.8 -> 122.6; d.revPS: 14.68 -> 18.19
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 19365.0; mcap: 4.46 -> 4.94; m.peTTM: 29.1 -> 31.9; m.peFwd: 28.9 -> 31.8; m.evEbitda: 16.5 -> 17.9; m.evSales: 3.9 -> 4.2; m.gross: 41.3 -> 41.6; m.op: 23.8 -> 16.1; m.net: 14.8 -> 15.2; m.roe: 13.5 -> 14.4; m.revCagrHist: 13.7 -> 18.9
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 83.5; mcap: 1.97 -> 1.85; m.peTTM: 30.3 -> 61.9; m.peFwd: 26.1 -> 21.6; m.evEbitda: 32 -> 36.9; m.gross: 34.8 -> 34.9; m.op: 4.3 -> 9.0; m.net: 6.9 -> 5.8; m.roe: 11.6 -> 8.2; m.revCagrHist: -30.7 -> -18.0
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 69.26; mcap: 13.29 -> 15.6; m.peTTM: 62.4 -> 72.9; m.peFwd: 75.1 -> 87.7; m.evEbitda: 20.6 -> 21.0
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 173.2; mcap: 6.14 -> 7.8; m.peTTM: 41.5 -> 126.4; m.peFwd: 26.5 -> 20.3; m.evEbitda: 9.9 -> 15.3; m.evSales: 3.9 -> 4.0; m.gross: 9.5 -> 15.6; m.op: 7.3 -> 13.4; m.net: 8.5 -> 3.7; m.roe: 14.8 -> 5.9; m.revCagrHist: 17.9 -> 37.5
- `6239` Powertech (via `6239.TW`): price: 309 -> 278.0; mcap: 7.2 -> 6.44; m.peTTM: 41.5 -> 33.2; m.peFwd: 16.4 -> 15.2; m.evEbitda: 11.7 -> 9.8; m.evSales: 3.2 -> 2.7; m.gross: 17.6 -> 19.1; m.op: 13 -> 15.3; m.net: 7.7 -> 8.7; m.roe: 11 -> 13.8; m.revCagrHist: 37.6 -> 28.0
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 1295.0; mcap: 16.1 -> 26.29; m.peTTM: 259 -> 275.5; m.peFwd: 28.2 -> 31.5; m.evEbitda: 53.6 -> 65.8; m.evSales: 12.6 -> 17.8; m.gross: 11.6 -> 16.2; m.op: 12.1 -> 21.4; m.net: 7.1 -> 11.7; m.roe: 6.6 -> 11.9; m.revCagrHist: 32.1 -> 41.7
- `3036` WT Micro (via `3036.TW`): price: 225 -> 204.0; mcap: 9.04 -> 8.14; m.peTTM: 21.8 -> 14.4; m.peFwd: 7.6 -> 6.6; m.evEbitda: 13.3 -> 8.3; m.evSales: 0.3 -> 0.2; m.gross: 3.7 -> 3.5; m.op: 2 -> 2.2; m.net: 1.3 -> 1.4; m.roe: 16.2 -> 24.2; m.revCagrHist: 99.8 -> 127.6
- `3702` WPG Holdings (via `3702.TW`): price: 106.5 -> 111.0; mcap: 5.64 -> 5.85; m.peTTM: 19.1 -> 14.5; m.peFwd: 6.9 -> 7.2; m.evEbitda: 13.7 -> 12.4; m.gross: 4.2 -> 4.3; m.op: 2.7 -> 2.6; m.net: 1.3 -> 1.6; m.roe: 15.9 -> 24.7; m.revCagrHist: 27.2 -> 82.2
- `3132` Macnica (via `3132.T`): price: 3193 -> 3759.0; mcap: 3.55 -> 4.22; m.peTTM: 20.5 -> 24.1; m.peFwd: 11.7 -> 13.8; m.evEbitda: 13.1 -> 13.4; m.evSales: 0.5 -> 0.6; m.gross: 10.7 -> 10.8; m.net: 2.3 -> 2.5; m.roe: 10.4 -> 12.8; m.revCagrHist: 29.2 -> 39.7
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 33.06; mcap: 35.84 -> 52.27; m.peTTM: 20.8 -> 30.3; m.peFwd: 13.4 -> 11.2; m.evEbitda: 65.9 -> 106.9; m.evSales: 3.5 -> 4.6; m.gross: 15.4 -> 15.9; m.op: 4.1 -> 0.1; m.net: 2.3 -> 0.9; m.roe: 28.6 -> 14.7; m.revCagrHist: 27.1 -> 43.1
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 26.06; mcap: 70.06 -> 70.79; m.peTTM: 14.2 -> 14.4; m.peFwd: 14.6 -> 15.9; m.evEbitda: 18.3 -> 17.7; m.evSales: 1.4 -> 1.3
- `HPQ` HP Inc.: price: 24.69 -> 30.11; m.peTTM: 9.1 -> 11.2; m.peFwd: 8.2 -> 10.0; m.evEbitda: 6.3 -> 7.4; m.evSales: 0.5 -> 0.6
- meta: data-date stamped to 2026-08-17 in hero/footer

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 25 · skipped: 0 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 62.01; mcap: 6.08 -> 8.22; m.peTTM: 208.5 -> 229.7; m.peFwd: 49.8 -> 66.1; m.evEbitda: 50.4 -> 58.7; m.evSales: 13.2 -> 15.3; m.gross: 41 -> 41.7; m.op: 15.5 -> 20.2; m.net: 5.7 -> 6.3; m.roe: 7.9 -> 9.5; m.revCagrHist: 51 -> 58.2; d.revPS: 3.95 -> 4.45
- `RKLB` Rocket Lab: price: 105.05 -> 80.25; mcap: 65.64 -> 51.31; m.evSales: 87.6 -> 59.6; m.gross: 36.6 -> 37.3; m.op: -22.4 -> -24.6; m.net: -26.9 -> -21.5; m.roe: -13.5 -> -7.9; m.revCagrHist: 63.5 -> 62.0; d.revPS: 1.22 -> 1.32
- `LMT` Lockheed Martin: price: 525.02 -> 608.68; mcap: 121.05 -> 140.48; m.peTTM: 25.4 -> 22.4; m.peFwd: 16.4 -> 18.6; m.evEbitda: 17.5 -> 16.2; m.evSales: 1.9 -> 2.0; m.gross: 9.9 -> 11.8; m.op: 11 -> 12.0; m.net: 6.4 -> 8.2; m.roe: 67.6 -> 89.2; m.revCagrHist: 0.3 -> 10.5; d.revPS: 324.33 -> 333.75
- `NOC` Northrop Grumman: price: 542.14 -> 585.87; mcap: 77 -> 83.23; m.peTTM: 17 -> 18.6; m.peFwd: 18 -> 19.3; m.evEbitda: 12.7 -> 13.5; m.evSales: 2.2 -> 2.3; m.gross: 20.5 -> 20.1; m.op: 11.7 -> 11.6; m.net: 10.8 -> 10.5; m.roe: 28.5 -> 27.0; m.revCagrHist: 4.4 -> 5.1; d.revPS: 296.53 -> 301.1
- `BA` Boeing: price: 209 -> 231.67; mcap: 164.76 -> 183.11; m.peTTM: 82.6 -> 83.3; m.peFwd: 50 -> 56.2; m.evSales: 2.1 -> 2.3; m.gross: 4.8 -> 4.7; m.op: 1.7 -> 0.0; m.net: 2.5 -> 2.6; m.roe: 169.9 -> 173.5; m.revCagrHist: 14 -> 8.0; d.revPS: 119.96 -> 120.99
- `RTX` RTX Corp: price: 177.41 -> 222.97; mcap: 238.92 -> 300.51; m.peTTM: 34 -> 39.2; m.peFwd: 23.4 -> 28.4; m.evEbitda: 17.9 -> 20.9; m.evSales: 3 -> 3.6; m.gross: 20.2 -> 20.3; m.op: 13.2 -> 12.7; m.net: 8 -> 8.3; m.roe: 11.6 -> 12.3; m.revCagrHist: 8.7 -> 14.5; d.revPS: 67.24 -> 69.43
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 215.4; mcap: 159.08 -> 197.64; m.peTTM: 27.6 -> 28.6; m.peFwd: 20.4 -> 24.8; m.evEbitda: 17.8 -> 19.1; m.evSales: 1.9 -> 2.2; m.gross: 15.4 -> 16.3; m.op: 1.5 -> 11.4; m.net: 6.9 -> 7.7; m.roe: 19.7 -> 23.2; m.revCagrHist: -6.6 -> 27.7
- `HEI` Heico: price: 320.88 -> 374.67; m.peTTM: 57.1 -> 67.1; m.peFwd: 46.9 -> 54.0; m.evEbitda: 34.8 -> 40.3; m.evSales: 9.7 -> 11.3
- `TDG` TransDigm: price: 1212.36 -> 1256.9; mcap: 67.81 -> 69.48; m.peTTM: 37.9 -> 38.2; m.peFwd: 25.8 -> 26.0; m.evEbitda: 19.8 -> 19.7; m.evSales: 10.1 -> 10.0; m.gross: 59.7 -> 59.8; m.op: 46.7 -> 46.0; m.net: 21.9 -> 21.3; m.revCagrHist: 18.3 -> 22.5; d.revPS: 163.28 -> 172.59
- `MRCY` Mercury Systems: price: 106.81 -> 111.12; mcap: 6.41 -> 6.67; m.peFwd: 69.7 -> 73.8; m.evEbitda: 70.3 -> 73.0; m.evSales: 7 -> 7.2
- `RDW` Redwire: price: 14.87 -> 13.58; mcap: 2.96 -> 3.39; m.evSales: 8.1 -> 6.8; m.gross: 12.9 -> 22.7; m.op: -71.8 -> -18.9; m.net: -80.9 -> -57.3; m.roe: -48.7 -> -18.2; m.revCagrHist: 57.9 -> 89.6; d.revPS: 2.47 -> 2.33
- `ASTS` AST SpaceMobile: price: 87.32 -> 70.98; mcap: 33.89 -> 27.62; m.evSales: 99 -> 195.0; m.gross: 44.8 -> 38.9; m.roe: -37.8 -> -45.6; d.revPS: 0.31 -> 0.4
- `IRDM` Iridium: price: 45.61 -> 50.2; mcap: 4.82 -> 5.32; m.peTTM: 46.1 -> 57.7; m.peFwd: 33 -> 25.5; m.evEbitda: 14.8 -> 16.4; m.evSales: 7.4 -> 7.8; m.gross: 71.6 -> 71.9; m.op: 23.2 -> 15.1; m.net: 12.1 -> 10.5; m.roe: 21.4 -> 19.7; m.revCagrHist: 1.9 -> 3.8; d.revPS: 8.24 -> 8.33
- `SATS` EchoStar: price: 115.24 -> 103.92; mcap: 33.4 -> 30.12; m.evEbitda: 38.5 -> 35.7; m.evSales: 4.1 -> 3.8
- `VSAT` Viasat: price: 61.5 -> 82.87; mcap: 8.4 -> 11.42; m.peFwd: 152.5 -> 497.2; m.evEbitda: 9.6 -> 12.0; m.evSales: 2.9 -> 3.6; m.gross: 33 -> 33.2; m.op: -1.8 -> 4.4; m.net: -0.7 -> -0.6; m.roe: 0.1 -> 0.2; m.revCagrHist: 2.1 -> -1.2; d.revPS: 34.44 -> 33.98
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 5.43; mcap: 3.15 -> 2.17; m.evEbitda: 7.9 -> 6.6; m.evSales: 3.1 -> 2.6; m.gross: 60.1 -> 70.3; m.op: 11.7 -> -5.6; m.net: -4.7 -> -8.8; m.roe: 8 -> -9.9; m.revCagrHist: 66.4 -> 61.0
- `PL` Planet Labs: price: 30.72 -> 24.69; mcap: 10.95 -> 8.8; m.evSales: 31.9 -> 25.5
- `BKSY` BlackSky: price: 31.79 -> 30.92; mcap: 1.18 -> 1.27; m.evSales: 13 -> 11.5; m.gross: 69.3 -> 69.9; m.op: -89.2 -> -23.4; m.net: -89.1 -> -61.2; m.roe: -102.7 -> -44.8; m.revCagrHist: -29.7 -> 50.1; d.revPS: 2.8 -> 2.99
- `SPIR` Spire Global: price: 16.37 -> 13.95; mcap: 0.63 -> 0.54; m.peTTM: 10.3 -> 999; m.evSales: 9.4 -> 7.4; m.gross: 42.3 -> 37.9; m.op: -149.5 -> -107.3; m.net: 77.1 -> -145.2; m.roe: 101.2 -> -61.7; m.revCagrHist: -33.7 -> -5.9; d.revPS: 1.95 -> 1.82
- `LHX` L3Harris: price: 303 -> 291.82; mcap: 56.45 -> 54.34; m.peTTM: 32.9 -> 29.5; m.peFwd: 22.2 -> 21.7; m.evEbitda: 34.5 -> 33.4; m.evSales: 5.8 -> 5.6
- `KTOS` Kratos Defense: price: 54.82 -> 64.58; mcap: 10.28 -> 12.12; m.peTTM: 322.5 -> 379.9; m.peFwd: 51.1 -> 58.0; m.evEbitda: 110.8 -> 125.0; m.evSales: 6.4 -> 7.1; m.gross: 22.9 -> 23.0; m.op: 1.8 -> -0.2; m.net: 2.1 -> 2.0; m.roe: 1.2 -> 1.1; m.revCagrHist: 22.6 -> 30.5; d.revPS: 8.41 -> 8.62
- `GRMN` Garmin: price: 231.72 -> 310.2; mcap: 44.69 -> 59.82; m.peTTM: 26.5 -> 32.0; m.peFwd: 22.4 -> 28.2; m.evEbitda: 19.5 -> 24.8; m.evSales: 5.7 -> 7.5; m.gross: 59.1 -> 60.1; m.op: 24.6 -> 30.4; m.net: 23.3 -> 24.5; m.roe: 19.9 -> 21.9; m.revCagrHist: 14.2 -> 11.4; d.revPS: 38.77 -> 39.84
- `LUNR` Intuitive Machines: price: 26.54 -> 19.01; mcap: 4.26 -> 3.05; m.evSales: 16.6 -> 9.4; m.gross: 9.7 -> 16.3; m.op: -10.3 -> -25.8; m.net: -32.7 -> -26.6; m.roe: -30.3 -> -30.8; m.revCagrHist: 198.7 -> 309.8; d.revPS: 2.66 -> 3.58
- `LDOS` Leidos: price: 121.69 -> 143.83; mcap: 15.31 -> 18.05; m.peTTM: 11.1 -> 13.4; m.peFwd: 9.3 -> 11.3; m.evEbitda: 9.1 -> 10.0; m.evSales: 1.3 -> 1.4; m.gross: 17.9 -> 17.8; m.op: 12.2 -> 11.7; m.net: 8.2 -> 7.8; m.roe: 30.6 -> 27.8; m.revCagrHist: 3.7 -> 7.2; d.revPS: 136.45 -> 139.4
- meta: data-date stamped to 2026-08-17 in hero/footer
