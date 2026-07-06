# Data refresh report

- **As of:** 2026-07-06
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 238 changed · 3 skipped · 0 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 200.42 -> 194.83; mcap: 4854.37 -> 4718.98; m.peTTM: 30.7 -> 29.8; m.peFwd: 15.7 -> 15.3; m.evEbitda: 29.1 -> 28.2; m.evSales: 19 -> 18.4
- `AVGO` Broadcom: price: 372.1 -> 360.45; mcap: 1770.3 -> 1714.87; m.peTTM: 61.7 -> 59.9; m.peFwd: 19.2 -> 18.6; m.evEbitda: 43.3 -> 41.8; m.evSales: 24.1 -> 23.3
- `AMD` AMD: price: 452.4 -> 517.82; mcap: 737.68 -> 844.36; m.peTTM: 151.3 -> 172.6; m.peFwd: 34.6 -> 39.3; m.evEbitda: 98.1 -> 112.5; m.evSales: 19.5 -> 22.3
- `MU` Micron: price: 891.88 -> 975.56; mcap: 1005.8 -> 1101.79; m.peTTM: 42.2 -> 22.1; m.peFwd: 8 -> 6.5; m.evEbitda: 27.2 -> 15.9; m.evSales: 17.2 -> 12.0; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `ANET` Arista Networks: price: 151.76 -> 159.99; mcap: 191.09 -> 201.45; m.peTTM: 52.3 -> 55.0; m.peFwd: 34.1 -> 35.9; m.evEbitda: 42.2 -> 44.6; m.evSales: 18.4 -> 19.5
- `COHR` Coherent: price: 354.77 -> 333.36; mcap: 69.41 -> 65.22; m.peTTM: 169.7 -> 158.7; m.peFwd: 43.8 -> 40.6; m.evEbitda: 53.9 -> 50.7; m.evSales: 10.7 -> 10.1
- `CIEN` Ciena: price: 434.65 -> 422.46; mcap: 61.53 -> 59.8; m.peTTM: 145.4 -> 140.8; m.peFwd: 45.2 -> 43.8; m.evEbitda: 78.8 -> 76.6; m.evSales: 11.1 -> 10.8
- `SMCI` Super Micro: price: 29.27 -> 27.22; mcap: 17.6 -> 17.61; m.peTTM: 21.4 -> 14.3; m.peFwd: 9 -> 8.6; m.evEbitda: 16.1 -> 15.3; m.evSales: 0.8 -> 0.7
- `DELL` Dell Technologies: price: 369.83 -> 394.32; mcap: 239.69 -> 254.79; m.peTTM: 29.5 -> 31.4; m.peFwd: 17.5 -> 18.4; m.evEbitda: 18.7 -> 19.6; m.evSales: 1.9 -> 2.1; m.op: 8.3 -> 8.9
- `VRT` Vertiv: price: 280.98 -> 300.53; mcap: 107.93 -> 115.44; m.peTTM: 70.8 -> 75.7; m.peFwd: 31.7 -> 33.9; m.evEbitda: 45.6 -> 48.8; m.evSales: 10 -> 10.7
- `EQIX` Equinix: price: 1038.33 -> 1002.02; mcap: 102.4 -> 98.82; m.peTTM: 72 -> 69.4; m.peFwd: 54 -> 52.1; m.evEbitda: 29.1 -> 28.2; m.evSales: 13.1 -> 12.7
- `DLR` Digital Realty: price: 180.78 -> 173.3; mcap: 64.66 -> 63.07; m.peTTM: 47.8 -> 45.8; m.peFwd: 63.1 -> 60.5; m.evEbitda: 28.8 -> 27.9; m.evSales: 13.2 -> 12.8
- `MSFT` Microsoft: price: 397.36 -> 390.49; mcap: 2951.76 -> 2900.73; m.peTTM: 23.7 -> 23.3; m.peFwd: 20.5 -> 20.2; m.evEbitda: 16.3 -> 16.0; m.evSales: 9.4 -> 9.3
- `ORCL` Oracle: price: 201.26 -> 140.27; mcap: 578.83 -> 404.04; m.peTTM: 36.1 -> 24.0; m.peFwd: 18.7 -> 12.8; m.evEbitda: 25.8 -> 17.9; m.evSales: 11 -> 8.1; m.gross: 67.1 -> 65.8; m.op: 32.7 -> 36.2; m.net: 25.3 -> 25.4; m.roe: 57.6 -> 53.4; m.revCagrHist: 21.7 -> 20.6; d.revPS: 22.54 -> 23.55
- meta: data-date stamped to 2026-07-06 in hero

## biopharma.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1136.37 -> 1213.91; mcap: 1013.35 -> 1082.49; m.peTTM: 40.3 -> 43.1; m.peFwd: 25.5 -> 27.3; m.evEbitda: 29 -> 30.9; m.evSales: 14.6 -> 15.5
- `NVO` Novo Nordisk: price: 42.81 -> 50.43; mcap: 189.61 -> 223.19; m.peTTM: 10 -> 12.1; m.peFwd: 12.9 -> 15.6; m.evEbitda: 1.8 -> 2.0; m.evSales: 1 -> 1.1
- `VKTX` Viking Therapeutics: price: 27.75 -> 37.44; mcap: 3.22 -> 4.35
- `AMGN` Amgen: price: 337.73 -> 374.15; mcap: 182.28 -> 201.93; m.peTTM: 24 -> 26.0; m.peFwd: 14.4 -> 15.9; m.evEbitda: 13.5 -> 14.6; m.evSales: 6.1 -> 6.6
- `HIMS` Hims & Hers: price: 27.78 -> 36.8; mcap: 6.43 -> 8.52; m.peFwd: 31.2 -> 41.3; m.evEbitda: 81.7 -> 106.7; m.evSales: 2.9 -> 3.8
- `PFE` Pfizer: price: 25.6 -> 24.32; mcap: 145.91 -> 138.61; m.peTTM: 19.5 -> 18.6; m.peFwd: 9 -> 8.6; m.evEbitda: 7.8 -> 7.5; m.evSales: 3.1 -> 3.0
- `MRK` Merck: price: 119.09 -> 129.56; mcap: 294.13 -> 319.99; m.peTTM: 33.5 -> 36.5; m.peFwd: 12.5 -> 13.4; m.evEbitda: 11.4 -> 12.3; m.evSales: 5.1 -> 5.5
- `ABBV` AbbVie: price: 224.95 -> 261.07; mcap: 397.44 -> 461.26; m.peTTM: 111.4 -> 128.0; m.peFwd: 13.8 -> 16.1; m.evEbitda: 15.4 -> 17.5; m.evSales: 7.3 -> 8.4
- `RHHBY` Roche: price: 50.23 -> 53.04; mcap: 323.53 -> 341.62; m.peTTM: 19.9 -> 21.4; m.peFwd: 15.6 -> 16.5; m.evEbitda: 14.3 -> 14.9; m.evSales: 5.4 -> 5.7
- `TMO` Thermo Fisher: price: 482.04 -> 523.44; mcap: 179.14 -> 194.52; m.peTTM: 26.5 -> 28.7; m.peFwd: 17.7 -> 19.2; m.evEbitda: 19.4 -> 20.8; m.evSales: 4.8 -> 5.2
- `DHR` Danaher: price: 183.63 -> 197.93; mcap: 129.97 -> 140.09; m.peTTM: 36.5 -> 38.3; m.peFwd: 20.2 -> 21.5; m.evEbitda: 18.1 -> 19.4; m.evSales: 5.8 -> 6.2
- `ISRG` Intuitive Surgical: price: 412.02 -> 426.01; mcap: 145.92 -> 150.88; m.peTTM: 50 -> 51.8; m.peFwd: 34.9 -> 36.1; m.evEbitda: 36.4 -> 37.7; m.evSales: 13.4 -> 13.8
- `DXCM` Dexcom: price: 74.77 -> 71.25; mcap: 28.85 -> 27.49; m.peTTM: 32.1 -> 30.6; m.peFwd: 24.3 -> 23.1; m.evEbitda: 21.5 -> 20.5; m.evSales: 5.8 -> 5.5
- meta: data-date stamped to 2026-07-06 in hero

## crypto.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 153.97 -> 165.48; mcap: 40.57 -> 43.6; m.peTTM: 56.4 -> 61.1; m.peFwd: 31 -> 34.3; m.evEbitda: 20 -> 41.0; m.evSales: 9 -> 6.5; m.gross: 85 -> 85.5
- `HOOD` Robinhood: price: 86.36 -> 112.73; mcap: 77.77 -> 101.51; m.peTTM: 41.9 -> 54.7; m.peFwd: 30.8 -> 38.0; m.evSales: 18 -> 20.9; m.gross: 88 -> 92.2
- `MARA` MARA Holdings: price: 12.62 -> 12.4; mcap: 4.81 -> 4.73; m.evSales: 5.6 -> 7.8; m.gross: 40 -> 45.3
- `RIOT` Riot Platforms: price: 24.08 -> 22.11; mcap: 9.11 -> 8.36; m.evSales: 14 -> 13.8; m.gross: 35 -> 32.3
- `CLSK` CleanSpark: price: 14.9 -> 12.62; mcap: 3.82 -> 3.24; m.evSales: 7 -> 6.4; m.gross: 42 -> 50.7
- `IREN` IREN Limited: price: 51.52 -> 38.82; mcap: 18.41 -> 13.87; m.peTTM: 69.6 -> 50.4; m.evEbitda: 20 -> 106.2; m.evSales: 30 -> 20.6; m.gross: 45 -> 68.4
- `MSTR` Strategy: price: 115.35 -> 100.77; mcap: 40.76 -> 36.05; m.peFwd: 25.9 -> 22.6; m.evSales: 113.1 -> 102.7
- `GLXY` Galaxy Digital: price: 30.15 -> 24.59; mcap: 11.76 -> 9.59; m.peFwd: 322.2 -> 288.0; m.evEbitda: 12 -> 0.2; m.evSales: 5 -> 0.1
- `CRCL` Circle Internet: price: 78.93 -> 64.62; mcap: 21.1 -> 17.27; m.peFwd: 35.4 -> 28.8; m.evSales: 8 -> 5.1; m.gross: 40 -> 8.1
- `BLK` BlackRock: price: 1010.68 -> 995.73; mcap: 164.59 -> 161.91; m.peTTM: 25.4 -> 25.1; m.peFwd: 16.6 -> 16.3; m.evEbitda: 16 -> 15.8; m.evSales: 7 -> 6.4; m.gross: 50 -> 46.9
- meta: data-date stamped to 2026-07-06 in hero

## cyber.js

- changed: 12 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 263.22 -> 348.06; mcap: 214.52 -> 283.67; m.peTTM: 226.9 -> 302.7; m.peFwd: 63.9 -> 84.5; m.evEbitda: 143.9 -> 190.6; m.evSales: 20.1 -> 26.7
- `CRWD` CrowdStrike: price: 647.74 -> 193.98; mcap: 164.89 -> 197.52; m.peFwd: 103.6 -> 124.2; m.evSales: 31.6 -> 38.0; d.revPS: 20.22 -> 5.06
- `FTNT` Fortinet: price: 138.88 -> 156.25; mcap: 101.75 -> 114.48; m.peTTM: 53.8 -> 60.6; m.peFwd: 40.5 -> 45.6; m.evEbitda: 41.9 -> 47.3; m.evSales: 13.9 -> 15.7
- `ZS` Zscaler: price: 124.73 -> 147.33; mcap: 20.17 -> 23.82; m.peFwd: 27.1 -> 32.0; m.evSales: 5.8 -> 7.0
- `NET` Cloudflare: price: 219.67 -> 242.41; mcap: 77.97 -> 86.04; m.peFwd: 140.8 -> 153.6; m.evSales: 33.1 -> 36.5
- `OKTA` Okta: price: 114.92 -> 141.42; mcap: 19.97 -> 24.58; m.peTTM: 83.3 -> 101.7; m.peFwd: 26.9 -> 33.0; m.evEbitda: 66.7 -> 83.9; m.evSales: 5.9 -> 7.5
- `S` SentinelOne: price: 14.79 -> 17.51; mcap: 5.07 -> 6.0; m.peFwd: 29.9 -> 35.5; m.evSales: 4.2 -> 5.1
- `RPD` Rapid7: price: 7.21 -> 9.29; mcap: 0.48 -> 0.62; m.peTTM: 20.6 -> 26.5; m.peFwd: 4.6 -> 6.0; m.evEbitda: 13.6 -> 16.1; m.evSales: 0.9 -> 1.1
- `QLYS` Qualys: price: 110.2 -> 148.12; mcap: 3.88 -> 5.22; m.peTTM: 19.7 -> 26.6; m.peFwd: 13.3 -> 17.9; m.evEbitda: 14.1 -> 19.6; m.evSales: 5.1 -> 7.0
- `TENB` Tenable: price: 26.8 -> 38.6; mcap: 2.96 -> 4.26; m.peFwd: 12.3 -> 17.8; m.evEbitda: 74.4 -> 106.5; m.evSales: 3 -> 4.2
- `GEN` Gen Digital: price: 24.62 -> 26.67; mcap: 14.83 -> 16.07; m.peTTM: 15.7 -> 17.0; m.peFwd: 7.5 -> 8.1; m.evEbitda: 9.5 -> 10.0; m.evSales: 4.5 -> 4.8
- meta: data-date stamped to 2026-07-06 in hero

## finance.js

- changed: 27 · skipped: 1 · review: 0

**Changed**
- `ICE` Intercontinental Exchange: price: 140.34 -> 132.99; mcap: 79.36 -> 75.21; m.peTTM: 20.6 -> 19.3; m.peFwd: 15.9 -> 15.1; m.evEbitda: 18 -> 14.4; m.evSales: 9.5 -> 9.1
- `CME` CME Group: price: 263.8 -> 236.6; mcap: 95.32 -> 85.49; m.peTTM: 22.5 -> 20.2; m.peFwd: 20.4 -> 18.3; m.evEbitda: 20 -> 18.1; m.evSales: 16 -> 12.9
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 90.14 -> 87.76; mcap: 58.77 -> 57.01; m.peTTM: 38 -> 37.0; m.peFwd: 16.8 -> 16.2; m.evEbitda: 17 -> 15.9; m.evSales: 7.5 -> 5.7; m.gross: 68 -> 88.1
- `SPGI` S&P Global: price: 426.38 -> 439.89; mcap: 126.21 -> 130.21; m.peTTM: 27 -> 27.9; m.peFwd: 19.2 -> 21.5; m.evEbitda: 24 -> 18.7; m.evSales: 12 -> 9.4; m.gross: 73 -> 70.5
- `MSCI` MSCI Inc: price: 608.52 -> 603.11; mcap: 44.26 -> 43.86; m.peTTM: 34.8 -> 34.5; m.peFwd: 27 -> 26.7; m.evEbitda: 28 -> 26.4; m.evSales: 18 -> 15.5; m.gross: 82 -> 82.9
- `MCO` Moody's: price: 450.69 -> 490.51; mcap: 78.72 -> 85.68; m.peTTM: 32.4 -> 35.2; m.peFwd: 24.2 -> 26.4; m.evEbitda: 25 -> 24.0; m.evSales: 13 -> 11.7; m.gross: 72 -> 74.4
- `V` Visa: price: 322.96 -> 362.13; mcap: 614.19 -> 688.68; m.peTTM: 28.2 -> 31.5; m.peFwd: 21.7 -> 24.4; m.evEbitda: 24 -> 23.0; m.evSales: 20 -> 16.1; m.gross: 80 -> 97.8
- `MA` Mastercard: price: 489.08 -> 539.39; mcap: 432.14 -> 476.6; m.peTTM: 28.3 -> 31.3; m.peFwd: 21.5 -> 23.7; m.evEbitda: 28 -> 22.8; m.evSales: 24 -> 14.4
- `PYPL` PayPal: price: 40.7 -> 45.47; mcap: 35.9 -> 40.11; m.peTTM: 7.6 -> 8.5; m.peFwd: 7.1 -> 7.9; m.evEbitda: 9 -> 6.5; m.evSales: 2 -> 1.3; m.gross: 46 -> 40.9
- `JPM` JPMorgan Chase: price: 309.14 -> 334.47; mcap: 828.34 -> 896.22; m.peTTM: 14.8 -> 16.0; m.peFwd: 13.1 -> 14.1; m.evSales: 3.5 -> 3.8
- `BAC` Bank of America: price: 54.54 -> 58.73; mcap: 387.05 -> 416.78; m.peTTM: 13.5 -> 14.6; m.peFwd: 10.8 -> 11.5; m.evSales: 3 -> 3.6
- `WFC` Wells Fargo: price: 81.97 -> 85.51; mcap: 250.84 -> 261.68; m.peTTM: 12.7 -> 13.2; m.peFwd: 10.4 -> 10.8; m.evSales: 3.2 -> 3.5
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 12.93 -> 14.5; mcap: 296.75 -> 331.74; m.peTTM: 14.2 -> 15.8; m.peFwd: 9.1 -> 10.2
- `GS` Goldman Sachs: price: 1001.29 -> 1021.0; mcap: 295.39 -> 301.2; m.peTTM: 18.3 -> 18.7; m.peFwd: 15.3 -> 15.4; m.evSales: 3 -> 0.4; m.gross: 55 -> 82.3
- `MS` Morgan Stanley: price: 206.66 -> 213.93; mcap: 325.96 -> 337.43; m.peTTM: 18.7 -> 19.4; m.peFwd: 16.3 -> 16.6; m.evSales: 3.4 -> 3.6; m.gross: 58 -> 87.4
- `SCHW` Charles Schwab: price: 89.27 -> 97.0; mcap: 155.25 -> 168.7; m.peTTM: 17.7 -> 19.3; m.peFwd: 12.4 -> 13.3; m.evSales: 5 -> 5.6; m.gross: 70 -> 97.5
- `IBKR` Interactive Brokers: price: 85.42 -> 91.33; mcap: 144.89 -> 154.92; m.peTTM: 36.7 -> 39.2; m.peFwd: 29.7 -> 31.5; m.gross: 90 -> 93.0
- `HOOD` Robinhood Markets: price: 86.36 -> 112.73; mcap: 77.77 -> 101.51; m.peTTM: 41.9 -> 54.7; m.peFwd: 30.8 -> 38.0; m.evSales: 18 -> 20.9; m.gross: 88 -> 92.2
- `FUTU` Futu Holdings: price: 92.93 -> 95.04; mcap: 13.03 -> 13.32; m.peTTM: 10.3 -> 10.5; m.peFwd: 7.6 -> 7.8; m.gross: 85 -> 94.4
- `BLK` BlackRock: price: 1010.68 -> 995.73; mcap: 164.59 -> 161.91; m.peTTM: 25.4 -> 25.1; m.peFwd: 16.6 -> 16.3; m.evEbitda: 16 -> 15.8; m.evSales: 7 -> 6.4; m.gross: 50 -> 46.9
- `BX` Blackstone: price: 118.48 -> 122.78; mcap: 144.81 -> 150.07; m.peTTM: 30.4 -> 31.5; m.peFwd: 15.7 -> 16.3; m.evSales: 18 -> 8.5
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 483.68 -> 507.78; mcap: 1043.23 -> 1095.21; m.peTTM: 14.4 -> 15.1; m.peFwd: 22.5 -> 23.6; m.gross: 30 -> 27.8
- `PGR` Progressive: price: 204.2 -> 232.22; mcap: 119.15 -> 135.2; m.peTTM: 10.4 -> 11.8; m.peFwd: 12.6 -> 14.1; m.evEbitda: 12 -> 9.4; m.evSales: 2.2 -> 1.6; m.gross: 30 -> 18.6
- `ALV` Allianz (via `ALV.DE`): price: 381.5 -> 422.5; mcap: 167.13 -> 183.14; m.peTTM: 12.3 -> 13.7; m.peFwd: 11.5 -> 12.9; m.evEbitda: 9 -> 6.9; m.evSales: 1.5 -> 1.2; m.gross: 28 -> 24.3
- `AXP` American Express: price: 313.34 -> 351.96; mcap: 213.8 -> 240.15; m.peTTM: 19.6 -> 22.0; m.peFwd: 15.6 -> 17.4; m.evSales: 3.5 -> 3.6; m.gross: 55 -> 62.8
- `INTU` Intuit: price: 284.22 -> 275.35; mcap: 77.74 -> 75.32; m.peTTM: 17.3 -> 16.8; m.peFwd: 10.4 -> 10.1; m.evEbitda: 12.1 -> 11.8; m.evSales: 3.7 -> 3.6
- meta: data-date stamped to 2026-07-06 in hero/footer

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 15 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 95.03 -> 96.54; mcap: 41.39 -> 42.05; m.peTTM: 96 -> 91.9; m.peFwd: 50 -> 51.6; m.evEbitda: 46.2 -> 46.9; m.evSales: 11.7 -> 11.9
- `UEC` Uranium Energy: price: 9.42 -> 10.77; mcap: 4.66 -> 5.33; m.evSales: 206.7 -> 239.8
- `NXE` NexGen Energy: price: 9.27 -> 9.63; mcap: 6.14 -> 6.37
- `SMR` NuScale Power: price: 9.29 -> 9.76; mcap: 3.22 -> 3.38; m.evSales: 121.8 -> 130.5
- `OKLO` Oklo: price: 54.02 -> 52.36; mcap: 9.4 -> 9.11
- `BWXT` BWX Technologies: price: 183 -> 191.06; mcap: 16.77 -> 17.5; m.peTTM: 48.9 -> 51.1; m.peFwd: 35.2 -> 36.8; m.evEbitda: 39.3 -> 40.9; m.evSales: 5.4 -> 5.6
- `LEU` Centrus Energy: price: 146.61 -> 162.13; mcap: 2.88 -> 3.19; m.peTTM: 53.1 -> 58.7; m.peFwd: 36.9 -> 40.8; m.evEbitda: 64.2 -> 73.1; m.evSales: 4.9 -> 5.5
- `CEG` Constellation Energy: price: 242.3 -> 239.25; mcap: 86.53 -> 85.44; m.peTTM: 21.9 -> 20.8; m.peFwd: 17.8 -> 17.6; m.evEbitda: 13.8 -> 13.6; m.evSales: 3.7 -> 3.6
- `VST` Vistra: price: 138.54 -> 151.05; mcap: 46.71 -> 50.93; m.peTTM: 23.2 -> 25.3; m.peFwd: 12.6 -> 14.0; m.evEbitda: 10.1 -> 10.7; m.evSales: 3.5 -> 3.7
- `GEV` GE Vernova: price: 867.09 -> 1113.11; mcap: 233 -> 299.11; m.peTTM: 25.3 -> 32.6; m.peFwd: 35.4 -> 45.4; m.evEbitda: 66.8 -> 86.2; m.evSales: 5.8 -> 7.5
- `ETN` Eaton: price: 375.46 -> 398.52; mcap: 145.79 -> 154.75; m.peTTM: 36.8 -> 39.1; m.peFwd: 23.9 -> 25.3; m.evEbitda: 26.3 -> 27.7; m.evSales: 5.9 -> 6.2
- `PWR` Quanta Services: price: 650.92 -> 668.31; mcap: 97.68 -> 100.29; m.peTTM: 89.5 -> 91.8; m.peFwd: 39.5 -> 40.6; m.evEbitda: 39 -> 40.0; m.evSales: 3.4 -> 3.5
- `NEE` NextEra Energy: price: 85.12 -> 88.34; mcap: 177.53 -> 184.24; m.peTTM: 21.6 -> 22.4; m.peFwd: 19.4 -> 20.1; m.evEbitda: 20.6 -> 21.0; m.evSales: 10.5 -> 10.7
- `FSLR` First Solar: price: 249.27 -> 224.57; mcap: 26.78 -> 24.13; m.peTTM: 16.1 -> 14.5; m.peFwd: 10.6 -> 9.6; m.evEbitda: 11 -> 9.8; m.evSales: 4.6 -> 4.1
- meta: data-date stamped to 2026-07-06 in hero

## quantum.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 56.63 -> 49.12; mcap: 21.14 -> 18.34; m.peTTM: 145.2 -> 125.9; m.evSales: 102.3 -> 87.4
- `RGTI` Rigetti Computing: price: 19.45 -> 17.94; mcap: 6.46 -> 5.96
- `QBTS` D-Wave Quantum: price: 23.25 -> 22.53; mcap: 8.61 -> 8.35
- `QUBT` Quantum Computing Inc: price: 9.53 -> 9.05; mcap: 2.15 -> 2.04; m.evSales: 269.7 -> 244.7
- `IBM` IBM: price: 272.36 -> 289.52; mcap: 255.99 -> 272.12; m.peTTM: 24.1 -> 25.6; m.peFwd: 20.3 -> 21.5; m.evEbitda: 18.9 -> 19.9; m.evSales: 4.6 -> 4.8
- `GOOGL` Alphabet: price: 356.38 -> 359.91; mcap: 4346.03 -> 4391.83; m.peTTM: 27.2 -> 27.5; m.peFwd: 24.6 -> 24.7; m.evEbitda: 26.6 -> 26.8; m.evSales: 10.1 -> 10.2
- `MSFT` Microsoft: price: 397.36 -> 390.49; mcap: 2951.76 -> 2900.73; m.peTTM: 23.7 -> 23.3; m.peFwd: 20.5 -> 20.2; m.evEbitda: 16.3 -> 16.0; m.evSales: 9.4 -> 9.3
- `HON` Honeywell: price: 205.88 -> 229.86; mcap: 130.46 -> 72.83; m.peTTM: 32.9 -> 18.3; m.peFwd: 18 -> 24.3; m.evEbitda: 18.4 -> 11.6; m.evSales: 4.2 -> 2.6; d.revPS: 59.25 -> 118.5
- `FORM` FormFactor: price: 115.81 -> 123.59; mcap: 9.03 -> 9.63; m.peTTM: 133.1 -> 142.1; m.peFwd: 41.5 -> 44.3; m.evEbitda: 63.7 -> 68.1; m.evSales: 10.4 -> 11.1
- `NVDA` NVIDIA: price: 200.42 -> 194.83; mcap: 4854.37 -> 4718.98; m.peTTM: 30.7 -> 29.8; m.peFwd: 15.7 -> 15.3; m.evEbitda: 29.1 -> 28.2; m.evSales: 19 -> 18.4
- meta: data-date stamped to 2026-07-06 in hero

## robotics.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `TSLA` Tesla: price: 381.59 -> 393.45; mcap: 1433.15 -> 1477.69; m.peTTM: 370.5 -> 357.7; m.peFwd: 152.6 -> 154.5; m.evEbitda: 126.6 -> 130.7; m.evSales: 14.4 -> 14.8
- `SERV` Serve Robotics: price: 6.98 -> 6.31; mcap: 0.59 -> 0.54; m.evSales: 68.7 -> 58.8
- `ABB` ABB Ltd (via `ABBN.SW`): price: 79.6 -> 85.34; mcap: 180.91 -> 192.31; m.peTTM: 37.5 -> 39.7; m.peFwd: 29.2 -> 30.7; m.evEbitda: 21.2 -> 23.2; m.evSales: 4.3 -> 4.7
- `6954` Fanuc (via `6954.T`): price: 6691 -> 7477.0; mcap: 38.9 -> 43.02; m.peTTM: 37.5 -> 41.9; m.peFwd: 38.7 -> 43.2; m.evEbitda: 24.1 -> 26.8; m.evSales: 6.5 -> 7.2
- `6506` Yaskawa Electric (via `6506.T`): price: 5993 -> 7449.0; mcap: 9.68 -> 11.91; m.peTTM: 44.1 -> 55.0; m.peFwd: 29.2 -> 36.4; m.evEbitda: 24.2 -> 30.0; m.evSales: 3 -> 3.7
- `ROK` Rockwell Automation: price: 440.07 -> 471.7; mcap: 48.97 -> 52.49; m.peTTM: 45.7 -> 49.0; m.peFwd: 30.3 -> 32.3; m.evEbitda: 26.7 -> 28.5; m.evSales: 6 -> 6.4
- `EMR` Emerson Electric: price: 137.11 -> 139.05; mcap: 76.8 -> 77.88; m.peTTM: 31.7 -> 32.2; m.peFwd: 19.1 -> 19.4; m.evEbitda: 15.2 -> 15.3
- `SIEGY` Siemens: price: 153.07 -> 158.13; mcap: 235.46 -> 243.25; m.peTTM: 27.5 -> 28.8; m.peFwd: 20.8 -> 23.7; m.evEbitda: 23.9 -> 25.1; m.evSales: 3.6 -> 3.7
- `PH` Parker Hannifin: price: 875.6 -> 962.89; mcap: 110.4 -> 121.41; m.peTTM: 32.3 -> 35.6; m.peFwd: 25.7 -> 28.2; m.evEbitda: 21.8 -> 23.8; m.evSales: 5.7 -> 6.2
- `NOVT` Novanta: price: 154.58 -> 161.72; mcap: 5.51 -> 5.76; m.peTTM: 111.2 -> 116.3; m.peFwd: 37.3 -> 39.0; m.evEbitda: 30.2 -> 31.7; m.evSales: 5.4 -> 5.6
- `CGNX` Cognex: price: 58.69 -> 67.8; mcap: 9.77 -> 11.28; m.peTTM: 69 -> 79.8; m.peFwd: 33.3 -> 38.4; m.evEbitda: 42.1 -> 48.8; m.evSales: 9.1 -> 10.6
- `SYM` Symbotic: price: 41.24 -> 42.74; mcap: 24.89 -> 25.8; m.peFwd: 57.4 -> 59.2; m.evEbitda: 159.3 -> 167.7; m.evSales: 1.4 -> 1.5
- `ZBRA` Zebra Technologies: price: 216.79 -> 267.18; mcap: 10.33 -> 12.73; m.peTTM: 26.2 -> 32.3; m.peFwd: 10.5 -> 12.9; m.evEbitda: 12.7 -> 15.1; m.evSales: 2.3 -> 2.8
- meta: data-date stamped to 2026-07-06 in hero

## semiconductors.js

- changed: 94 · skipped: 2 · review: 0

**Changed**
- `6857` Advantest (via `6857.T`): price: 25010 -> 29565.0; mcap: 113.02 -> 132.13; m.peTTM: 48.8 -> 57.2; m.peFwd: 105.2 -> 124.4; m.evEbitda: 34.3 -> 40.6; m.evSales: 15.9 -> 18.6; m.op: 46.7 -> 45.9
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6733 -> 7415.0; mcap: 78 -> 85.02; m.peTTM: 26.7 -> 29.4; m.peFwd: 20.4 -> 22.5; m.evEbitda: 12.7 -> 13.3; m.evSales: 4.3 -> 4.5
- `6146` Disco (via `6146.T`): price: 68720 -> 78000.0; mcap: 46.43 -> 52.17; m.peTTM: 55.1 -> 62.5; m.peFwd: 50.5 -> 57.3; m.evEbitda: 36.8 -> 40.4; m.evSales: 16.7 -> 18.4; m.roe: 30 -> 25.1; m.revCagrHist: 22 -> 10.2
- `6963` Rohm (via `6963.T`): price: 4679 -> 5782.0; mcap: 11.25 -> 13.76; m.peFwd: 53.8 -> 66.5; m.evEbitda: 26.4 -> 33.3; m.evSales: 3.7 -> 4.7; m.roe: 1.5 -> -19.2; m.revCagrHist: -3 -> 7.5
- `4004` Resonac (via `4004.T`): price: 15820 -> 16750.0; mcap: 17.84 -> 18.69; m.peTTM: 98.2 -> 104.0; m.peFwd: 63.4 -> 67.2; m.evEbitda: 24.1 -> 26.8; m.evSales: 2.6 -> 2.9
- `6861` Keyence (via `6861.T`): price: 71270 -> 80910.0; mcap: 107.68 -> 120.99; m.peTTM: 38.8 -> 44.0; m.peFwd: 38.2 -> 43.3; m.evEbitda: 26.4 -> 29.3; m.evSales: 13.8 -> 15.4; m.roe: 14 -> 13.5
- `6723` Renesas (via `6723.T`): price: 4222 -> 4710.0; mcap: 47.72 -> 52.69; m.peFwd: 16.4 -> 17.3; m.evEbitda: 23.5 -> 26.1; m.evSales: 6.3 -> 6.9
- `8035` Tokyo Electron (via `8035.T`): price: 62780 -> 72320.0; mcap: 177.9 -> 202.83; m.peTTM: 50.3 -> 57.8; m.peFwd: 49 -> 56.5; m.evEbitda: 39.1 -> 46.4; m.evSales: 11.3 -> 13.4
- `7735` SCREEN Holdings (via `7735.T`): price: 12765 -> 17860.0; mcap: 15.04 -> 20.82; m.peTTM: 26.2 -> 36.7; m.peFwd: 14.6 -> 20.4; m.evEbitda: 16.3 -> 24.5; m.evSales: 3.7 -> 5.5
- `ASML` ASML Holding: price: 1734.19 -> 1769.32; mcap: 668.39 -> 681.93; m.peTTM: 59.5 -> 60.2; m.peFwd: 36.2 -> 35.8
- `LRCX` Lam Research: price: 321.8 -> 351.41; mcap: 402.43 -> 439.46; m.peTTM: 60.7 -> 66.2; m.peFwd: 40.4 -> 43.8; m.evEbitda: 51.2 -> 55.9; m.evSales: 18.5 -> 20.2
- `KLAC` KLA Corp: price: 2135.64 -> 235.55; mcap: 278.97 -> 307.69; m.peTTM: 60.6 -> 66.7; m.peFwd: 42.4 -> 46.5; m.evEbitda: 47.9 -> 52.8; m.evSales: 21.4 -> 23.6
- `TSM` TSMC: price: 408.75 -> 434.16; mcap: 2119.97 -> 2251.76; m.peTTM: 35.1 -> 37.7; m.peFwd: 20.9 -> 21.4; m.evEbitda: 5.2 -> 5.5; m.evSales: 3.6 -> 3.8
- `AMAT` Applied Materials: price: 497.01 -> 603.04; mcap: 394.61 -> 478.79; m.peTTM: 46.7 -> 56.8; m.peFwd: 30.6 -> 36.8; m.evEbitda: 42.4 -> 51.5; m.evSales: 13.6 -> 16.5
- `NVDA` NVIDIA: price: 200.42 -> 194.83; mcap: 4854.37 -> 4718.98; m.peTTM: 30.7 -> 29.8; m.peFwd: 15.7 -> 15.3; m.evEbitda: 29.1 -> 28.2; m.evSales: 19 -> 18.4
- `AVGO` Broadcom: price: 372.1 -> 360.45; mcap: 1770.3 -> 1714.87; m.peTTM: 61.7 -> 59.9; m.peFwd: 19.2 -> 18.6; m.evEbitda: 43.3 -> 41.8; m.evSales: 24.1 -> 23.3
- `AMD` AMD: price: 452.4 -> 517.82; mcap: 737.68 -> 844.36; m.peTTM: 151.3 -> 172.6; m.peFwd: 34.6 -> 39.3; m.evEbitda: 98.1 -> 112.5; m.evSales: 19.5 -> 22.3
- `INTC` Intel: price: 107.04 -> 120.35; mcap: 537.98 -> 604.88; m.peFwd: 69.6 -> 77.1; m.evEbitda: 39.8 -> 44.5; m.evSales: 10.5 -> 11.7
- `ARM` Arm Holdings: price: 307.43 -> 315.28; mcap: 328.36 -> 336.74; m.peTTM: 357.5 -> 370.9; m.peFwd: 100.2 -> 102.3; m.evSales: 66.1 -> 67.8
- `005930` Samsung Electronics (via `005930.KS`): price: 296000 -> 318000.0; mcap: 1118.21 -> 1195.47; m.peFwd: 5.2 -> 5.0; m.evEbitda: 13.4 -> 13.8; m.evSales: 4.9 -> 5.0
- `000660` SK Hynix (via `000660.KS`): price: 2064000 -> 2343000.0; mcap: 960.23 -> 1084.71; m.peFwd: 5.1 -> 5.3; m.evEbitda: 15.5 -> 18.4; m.evSales: 10.7 -> 12.8
- `MU` Micron: price: 891.88 -> 975.56; mcap: 1005.8 -> 1101.79; m.peTTM: 42.2 -> 22.1; m.peFwd: 8 -> 6.5; m.evEbitda: 27.2 -> 15.9; m.evSales: 17.2 -> 12.0; m.gross: 58.4 -> 72.6; m.op: 67.6 -> 80.4; m.net: 41.5 -> 55.9; m.roe: 39.8 -> 66.6; m.revCagrHist: 196.3 -> 345.7; d.revPS: 51.8 -> 80.24
- `SNPS` Synopsys: price: 460.54 -> 437.16; mcap: 88.18 -> 83.71; m.peTTM: 105.4 -> 100.0; m.peFwd: 26.7 -> 25.3; m.evEbitda: 56.9 -> 54.3; m.evSales: 11.1 -> 10.6
- `CDNS` Cadence: price: 385.13 -> 373.14; mcap: 106.23 -> 102.92; m.peTTM: 90.2 -> 87.0; m.peFwd: 41 -> 39.7; m.evEbitda: 53.5 -> 51.9; m.evSales: 19.5 -> 18.9
- `QCOM` Qualcomm: price: 191.2 -> 176.25; mcap: 201.52 -> 185.77; m.peTTM: 22.1 -> 18.9; m.peFwd: 17.9 -> 16.1; m.evEbitda: 15.9 -> 14.7; m.evSales: 4.7 -> 4.3
- `GFS` GlobalFoundries: price: 74.82 -> 69.84; mcap: 41.03 -> 38.32; m.peTTM: 50.6 -> 51.0; m.peFwd: 29.7 -> 27.7; m.evEbitda: 19.6 -> 18.2; m.evSales: 5.8 -> 5.4
- `LIN` Linde: price: 509.16 -> 546.64; mcap: 235.41 -> 252.74; m.peTTM: 33.8 -> 36.2; m.peFwd: 25.8 -> 27.7; m.evEbitda: 19.1 -> 20.4; m.evSales: 7.5 -> 8.0
- `AI` Air Liquide (via `AI.PA`): price: 167.72 -> 180.88; mcap: 123.3 -> 131.45; m.peTTM: 30.3 -> 32.6; m.peFwd: 23.7 -> 25.4; m.evEbitda: 15.6 -> 16.7; m.evSales: 4.3 -> 4.6
- `ENTG` Entegris: price: 128.88 -> 146.66; mcap: 19.63 -> 22.34; m.peTTM: 74.5 -> 84.8; m.peFwd: 27.9 -> 31.5; m.evEbitda: 26.1 -> 29.2; m.evSales: 7.1 -> 7.9
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9378 -> 10470.0; mcap: 7.01 -> 7.74; m.peTTM: 33.8 -> 37.7; m.peFwd: 48 -> 53.6; m.evEbitda: 19.2 -> 22.6; m.evSales: 3.1 -> 3.7
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4439 -> 4851.0; mcap: 5.39 -> 5.83; m.peFwd: 16.1 -> 17.6; m.evEbitda: 12.6 -> 13.6; m.evSales: 1.4 -> 1.6; m.op: 3.7 -> 4.8
- `3436` Sumco (via `3436.T`): price: 3275 -> 5171.0; mcap: 7.14 -> 11.15; m.peFwd: 66.5 -> 105.0; m.evEbitda: 13.4 -> 19.5; m.evSales: 3.6 -> 5.2
- `SOI` Soitec (via `SOI.PA`): price: 125.35 -> 114.0; mcap: 5.17 -> 4.65; m.peFwd: 63 -> 58.3; m.evEbitda: 40.4 -> 45.3; m.evSales: 7.6 -> 7.2; m.gross: 16.2 -> 16.3; m.op: -12.5 -> -10.7; m.net: -37.2 -> -37.1; m.revCagrHist: -34.7 -> -34.6
- `4062` Ibiden (via `4062.T`): price: 17755 -> 21390.0; mcap: 30.89 -> 36.83; m.peTTM: 82.3 -> 99.6; m.peFwd: 57.5 -> 69.2; m.evEbitda: 38.3 -> 51.7; m.evSales: 11.4 -> 15.4
- `ASX` ASE Technology: price: 34.3 -> 41.87; mcap: 75.25 -> 91.86; m.peTTM: 53.6 -> 65.4; m.peFwd: 21.6 -> 21.0; m.evEbitda: 2 -> 2.1
- `AMKR` Amkor Technology: price: 69.61 -> 69.65; mcap: 17.25 -> 17.26
- `600584` JCET Group (via `600584.SS`): price: 71.41 -> 95.09; mcap: 18.86 -> 25.05; m.peTTM: 77.6 -> 103.4; m.peFwd: 50.1 -> 64.7; m.evEbitda: 22.6 -> 27.5; m.evSales: 3.6 -> 4.4
- `TXN` Texas Instruments: price: 282.01 -> 293.08; mcap: 256.66 -> 266.73; m.peTTM: 48.3 -> 50.0; m.peFwd: 30 -> 30.6; m.evEbitda: 30.7 -> 31.8; m.evSales: 14.4 -> 15.0
- `ADI` Analog Devices: price: 392.67 -> 377.16; mcap: 191.26 -> 183.71; m.peTTM: 58.5 -> 56.2; m.peFwd: 26.6 -> 25.5; m.evEbitda: 32 -> 30.7; m.evSales: 15.4 -> 14.8
- `IFX` Infineon (via `IFX.DE`): price: 75.1 -> 74.93; mcap: 112.72 -> 111.28; m.peTTM: 91.6 -> 91.4; m.peFwd: 29.1 -> 28.0; m.evEbitda: 25.8 -> 26.6; m.evSales: 6.9 -> 7.1
- `NXPI` NXP Semiconductors: price: 285.56 -> 273.36; mcap: 72.1 -> 69.02; m.peTTM: 28.4 -> 26.1; m.peFwd: 16.2 -> 15.4; m.evEbitda: 19.3 -> 18.6; m.evSales: 6.4 -> 6.1
- `STM` STMicroelectronics: price: 70.74 -> 68.35; mcap: 62.87 -> 60.75; m.peTTM: 442.1 -> 427.2; m.peFwd: 28.8 -> 27.7; m.evEbitda: 24.7 -> 23.8; m.evSales: 5 -> 4.8
- `ON` ON Semiconductor: price: 110.17 -> 91.22; mcap: 42.83 -> 35.5; m.peTTM: 81 -> 67.1; m.peFwd: 25.8 -> 21.1; m.evEbitda: 21.5 -> 17.9; m.evSales: 7.3 -> 6.0
- `MCHP` Microchip: price: 87.91 -> 84.64; mcap: 47.65 -> 45.88; m.peTTM: 399.6 -> 384.7; m.peFwd: 21.5 -> 20.6; m.evEbitda: 43.5 -> 42.1; m.evSales: 11.3 -> 10.9
- `MRVL` Marvell: price: 252.59 -> 245.29; mcap: 220.97 -> 214.58; m.peTTM: 87.1 -> 84.0; m.peFwd: 40.9 -> 39.7; m.evEbitda: 82 -> 79.7; m.evSales: 25.5 -> 24.8
- `AVT` Avnet: price: 85.39 -> 82.18; mcap: 7 -> 6.74; m.peTTM: 33 -> 31.7; m.peFwd: 10.8 -> 10.4; m.evEbitda: 13 -> 12.7
- `ARW` Arrow Electronics: price: 215.49 -> 197.48; mcap: 11.02 -> 10.1; m.peTTM: 15.4 -> 14.1; m.peFwd: 10.1 -> 9.3; m.evEbitda: 10.4 -> 9.6
- `AAPL` Apple: price: 291.58 -> 308.63; mcap: 4282.54 -> 4532.96; m.peTTM: 35.3 -> 37.3; m.peFwd: 30.4 -> 32.1; m.evEbitda: 26.9 -> 28.4; m.evSales: 9.5 -> 10.1
- `MSFT` Microsoft: price: 397.36 -> 390.49; mcap: 2951.76 -> 2900.73; m.peTTM: 23.7 -> 23.3; m.peFwd: 20.5 -> 20.2; m.evEbitda: 16.3 -> 16.0; m.evSales: 9.4 -> 9.3
- `GOOGL` Alphabet: price: 356.38 -> 359.91; mcap: 4346.03 -> 4391.83; m.peTTM: 27.2 -> 27.5; m.peFwd: 24.6 -> 24.7; m.evEbitda: 26.6 -> 26.8; m.evSales: 10.1 -> 10.2
- `AMZN` Amazon: price: 238 -> 242.67; mcap: 2560.19 -> 2610.43; m.peFwd: 24.1 -> 24.5; m.evEbitda: 17 -> 17.3
- `META` Meta Platforms: price: 570.98 -> 582.9; mcap: 1449.39 -> 1479.65; m.peTTM: 20.7 -> 21.2; m.evEbitda: 13.3 -> 13.6; m.evSales: 6.8 -> 6.9
- `TSLA` Tesla: price: 381.59 -> 393.45; mcap: 1433.15 -> 1477.69; m.peTTM: 370.5 -> 357.7; m.peFwd: 152.6 -> 154.5; m.evEbitda: 126.6 -> 130.7; m.evSales: 14.4 -> 14.8
- `SONY` Sony Group: price: 20.76 -> 20.79; mcap: 122.26 -> 122.45; m.peTTM: 19.4 -> 19.6; m.peFwd: 17.4 -> 17.5; m.gross: 30.8 -> 31.2; m.op: 7.6 -> 10.7; m.roe: 12.4 -> 12.3; m.revCagrHist: 15.4 -> 8.3
- `CSCO` Cisco Systems: price: 118.8 -> 112.69; mcap: 468.24 -> 444.16; m.peTTM: 39.5 -> 37.6; m.peFwd: 24.9 -> 23.6; m.evEbitda: 28.5 -> 27.1; m.evSales: 8 -> 7.6
- `DELL` Dell Technologies: price: 369.83 -> 394.32; mcap: 239.69 -> 254.79; m.peTTM: 29.5 -> 31.4; m.peFwd: 17.5 -> 18.4; m.evEbitda: 18.7 -> 19.6; m.evSales: 1.9 -> 2.1; m.op: 8.3 -> 8.9
- `002594` BYD (via `002594.SZ`): price: 89.13 -> 87.54; mcap: 71.5 -> 70.04; m.peTTM: 45.7 -> 44.9; m.peFwd: 15.9 -> 15.6; m.evEbitda: 7.6 -> 7.5
- `APD` Air Products: price: 276.51 -> 314.19; mcap: 61.57 -> 69.96; m.peTTM: 29.2 -> 33.1; m.peFwd: 19.4 -> 22.1; m.evEbitda: 21 -> 23.2; m.evSales: 6.5 -> 7.2
- `4091` Nippon Sanso (via `4091.T`): price: 5265 -> 6312.0; mcap: 14.2 -> 16.85; m.peTTM: 18.4 -> 22.1; m.peFwd: 19 -> 22.8; m.evEbitda: 9.5 -> 10.7; m.evSales: 2.2 -> 2.6; m.op: 14 -> 14.9
- `4901` Fujifilm (via `4901.T`): price: 3489 -> 3622.0; mcap: 26.02 -> 26.7; m.peTTM: 15.5 -> 15.8; m.peFwd: 15 -> 15.6; m.evEbitda: 9.8 -> 10.0; m.evSales: 1.5 -> 1.6
- `MRK.DE` Merck KGaA: price: 136.45 -> 145.75; mcap: 20.37 -> 21.53; m.peTTM: 23.4 -> 25.0; m.peFwd: 15.7 -> 16.8; m.evEbitda: 11.9 -> 12.6; m.evSales: 3.2 -> 3.4
- `4005` Sumitomo Chemical (via `4005.T`): price: 539.7 -> 552.4; mcap: 5.55 -> 5.62; m.peTTM: 14.5 -> 14.9; m.peFwd: 13.9 -> 14.2; m.evEbitda: 6.4 -> 9.2; m.op: -4.6 -> -18.8
- `WAF` Siltronic (via `WAF.DE`): price: 85.5 -> 92.3; mcap: 2.96 -> 3.16; m.evEbitda: 12.3 -> 13.9; m.evSales: 2.8 -> 3.1; m.gross: 8.3 -> 2.3; m.op: -9.7 -> -17.1; m.net: -5.1 -> -9.9; m.roe: -3.7 -> -7.1; m.revCagrHist: 3.1 -> -11.4
- `CEVA` CEVA: price: 41.08 -> 40.42; mcap: 1.14 -> 1.13; m.peFwd: 49.9 -> 49.3; m.evSales: 8.4 -> 8.3
- `2454` MediaTek (via `2454.TW`): price: 3980 -> 4125.0; mcap: 200.41 -> 205.35; m.peTTM: 60.2 -> 62.6; m.peFwd: 33.1 -> 33.0; m.evEbitda: 54.8 -> 55.4; m.evSales: 10.9 -> 11.0
- `0981` SMIC (via `0981.HK`): price: 70.85 -> 75.45; mcap: 54.37 -> 57.86; m.peTTM: 101.2 -> 106.3; m.peFwd: 52.4 -> 53.2; m.evEbitda: 94.5 -> 101.1; m.evSales: 45.2 -> 48.3
- `UMC` UMC: price: 18.9 -> 24.54; mcap: 47.43 -> 61.58; m.peTTM: 30.5 -> 39.6; m.peFwd: 23.5 -> 30.1
- `1347` Hua Hong (via `1347.HK`): price: 133.6 -> 177.8; mcap: 22.67 -> 30.15; m.peTTM: 534.4 -> 711.2; m.peFwd: 111.9 -> 143.8; m.evSales: 95.5 -> 123.5
- `285A` Kioxia (via `285A.T`): price: 74560 -> 81590.0; mcap: 253.66 -> 275.3; m.peTTM: 74 -> 80.9; m.evEbitda: 33.2 -> 40.3; m.evSales: 16.8 -> 19.8; m.op: 59.5 -> 59.4
- `SNDK` SanDisk: price: 1643.23 -> 1745.0; mcap: 243.35 -> 258.42; m.peTTM: 56.2 -> 59.5; m.peFwd: 9 -> 8.5; m.evEbitda: 42.6 -> 45.3; m.evSales: 18.2 -> 19.3
- `6503` Mitsubishi Elec (via `6503.T`): price: 5388 -> 6043.0; mcap: 68.69 -> 76.25; m.peTTM: 27.2 -> 30.4; m.peFwd: 32.6 -> 36.6; m.evEbitda: 16.8 -> 20.9; m.evSales: 1.9 -> 2.0; m.op: 8 -> 6.4
- `WOLF` Wolfspeed: price: 43.42 -> 40.0; mcap: 2.26 -> 2.08; m.evSales: 3.9 -> 3.6
- `6504` Fuji Electric (via `6504.T`): price: 13110 -> 13480.0; mcap: 12.06 -> 12.13; m.peTTM: 19.7 -> 20.3; m.peFwd: 21.6 -> 22.2; m.evEbitda: 10.2 -> 10.3; m.evSales: 1.6 -> 1.7; m.revCagrHist: 8 -> 13.3
- `002371` Naura (via `002371.SZ`): price: 630.58 -> 803.6; mcap: 67.48 -> 85.86; m.peTTM: 82.1 -> 104.8; m.peFwd: 43.5 -> 54.5; m.evEbitda: 61.5 -> 80.9; m.evSales: 10.9 -> 14.4
- `ASM` ASM Intl (via `ASM.AS`): price: 906.6 -> 951.4; mcap: 51.19 -> 53.15; m.peTTM: 45 -> 47.1; m.peFwd: 33.6 -> 34.3; m.evEbitda: 39.8 -> 42.9; m.evSales: 13.6 -> 14.6
- `TER` Teradyne: price: 347.59 -> 369.09; mcap: 54.41 -> 57.78; m.peTTM: 64.5 -> 68.5; m.peFwd: 36.6 -> 37.5; m.evEbitda: 46.7 -> 49.6; m.evSales: 14.3 -> 15.2
- `COHU` Cohu: price: 54.47 -> 59.27; mcap: 2.57 -> 2.8; m.peFwd: 37.4 -> 40.1; m.evSales: 5 -> 5.5
- `2360` Chroma ATE (via `2360.TW`): price: 2125 -> 2180.0; mcap: 28.4 -> 28.8; m.peTTM: 77.6 -> 68.7; m.peFwd: 36.3 -> 34.2; m.evEbitda: 74.6 -> 76.4; m.evSales: 28 -> 28.7
- `0522` ASMPT (via `0522.HK`): price: 173.9 -> 195.8; mcap: 9.31 -> 10.47; m.peTTM: 66.9 -> 75.3; m.peFwd: 33.6 -> 37.5; m.evEbitda: 53.5 -> 62.4; m.evSales: 4.9 -> 5.7
- `BESI` BE Semiconductor (via `BESI.AS`): price: 288.8 -> 255.3; mcap: 26.42 -> 23.1; m.peTTM: 151.2 -> 133.7; m.peFwd: 47.6 -> 40.6; m.evEbitda: 109.2 -> 103.2; m.evSales: 36.1 -> 34.1
- `KLIC` Kulicke & Soffa: price: 102.03 -> 121.33; mcap: 5.34 -> 6.35; m.peTTM: 99.1 -> 117.8; m.peFwd: 24.1 -> 28.6; m.evEbitda: 41.8 -> 66.9; m.evSales: 6.4 -> 7.7; m.gross: 53.6 -> 49.8
- `7729` Tokyo Seimitsu (via `7729.T`): price: 17630 -> 18830.0; mcap: 4.46 -> 4.71; m.peTTM: 29.1 -> 31.1; m.peFwd: 28.9 -> 30.9; m.evEbitda: 16.5 -> 19.0; m.evSales: 3.9 -> 4.5
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89.45 -> 86.1; mcap: 1.97 -> 1.88; m.peTTM: 30.3 -> 46.5; m.peFwd: 26.1 -> 24.2; m.evEbitda: 32 -> 31.7
- `002156` Tongfu (via `002156.SZ`): price: 59.31 -> 66.18; mcap: 13.29 -> 14.79; m.peTTM: 62.4 -> 69.7; m.peFwd: 75.1 -> 83.8; m.evEbitda: 20.6 -> 21.5; m.evSales: 3.8 -> 3.9
- `ATS` AT&S (via `ATS.VI`): price: 136.8 -> 197.4; mcap: 6.14 -> 8.76; m.peTTM: 41.5 -> 999; m.peFwd: 26.5 -> 29.5; m.evEbitda: 9.9 -> 22.5; m.evSales: 3.9 -> 5.1; m.gross: 9.5 -> 11.4; m.op: 7.3 -> 9.4; m.net: 8.5 -> -1.4; m.roe: 14.8 -> -2.4; m.revCagrHist: 17.9 -> 21.3
- `6239` Powertech (via `6239.TW`): price: 309 -> 344.5; mcap: 7.2 -> 7.94; m.peTTM: 41.5 -> 41.1; m.peFwd: 16.4 -> 17.8; m.evEbitda: 11.7 -> 12.9; m.evSales: 3.2 -> 3.5
- `8046` Nan Ya PCB (via `8046.TW`): price: 790 -> 1075.0; mcap: 16.1 -> 21.67; m.peTTM: 259 -> 363.2; m.peFwd: 28.2 -> 35.5; m.evEbitda: 53.6 -> 75.4; m.evSales: 12.6 -> 17.7
- `3036` WT Micro (via `3036.TW`): price: 225 -> 219.0; mcap: 9.04 -> 8.69; m.peTTM: 21.8 -> 19.0; m.peFwd: 7.6 -> 7.4; m.evEbitda: 13.3 -> 12.5; m.evSales: 0.3 -> 0.2
- `3702` WPG Holdings (via `3702.TW`): price: 106.5 -> 110.0; mcap: 5.64 -> 5.76; m.peTTM: 19.1 -> 19.7; m.peFwd: 6.9 -> 7.1; m.evEbitda: 13.7 -> 14.2
- `3132` Macnica (via `3132.T`): price: 3193 -> 3307.0; mcap: 3.55 -> 3.64; m.peTTM: 20.5 -> 21.3; m.peFwd: 11.7 -> 12.1; m.evEbitda: 13.1 -> 12.9
- `0992` Lenovo (via `0992.HK`): price: 22.64 -> 20.34; mcap: 35.84 -> 32.18; m.peTTM: 20.8 -> 18.7; m.peFwd: 13.4 -> 11.5; m.evEbitda: 65.9 -> 57.0; m.evSales: 3.5 -> 3.2; m.op: 4.1 -> 5.6
- `1810` Xiaomi (via `1810.HK`): price: 25.74 -> 23.2; mcap: 70.06 -> 62.98; m.peTTM: 14.2 -> 12.9; m.peFwd: 14.6 -> 13.2; m.evEbitda: 18.3 -> 15.7; m.evSales: 1.4 -> 1.2
- `HPQ` HP Inc.: price: 24.69 -> 21.93; mcap: 22.58 -> 20.06; m.peTTM: 9.1 -> 8.1; m.peFwd: 8.2 -> 7.3; m.evEbitda: 6.3 -> 5.8
- meta: data-date stamped to 2026-07-06 in hero/footer

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 25 · skipped: 0 · review: 0

**Changed**
- `KRMN` Karman Holdings: price: 45.87 -> 56.37; mcap: 6.08 -> 7.47; m.peTTM: 208.5 -> 245.1; m.peFwd: 49.8 -> 60.9; m.evEbitda: 50.4 -> 60.6; m.evSales: 13.2 -> 15.8
- `RKLB` Rocket Lab: price: 105.05 -> 100.46; mcap: 65.64 -> 62.77; m.evSales: 87.6 -> 83.7
- `LMT` Lockheed Martin: price: 525.02 -> 545.91; mcap: 121.05 -> 125.87; m.peTTM: 25.4 -> 26.4; m.peFwd: 16.4 -> 17.0; m.evEbitda: 17.5 -> 18.1
- `NOC` Northrop Grumman: price: 542.14 -> 549.01; mcap: 77 -> 77.98; m.peTTM: 17 -> 17.2; m.peFwd: 18 -> 18.2; m.evEbitda: 12.7 -> 12.8
- `BA` Boeing: price: 209 -> 226.49; mcap: 164.76 -> 178.54; m.peTTM: 82.6 -> 89.2; m.peFwd: 50 -> 54.1; m.evSales: 2.1 -> 2.3
- `RTX` RTX Corp: price: 177.41 -> 199.25; mcap: 238.92 -> 268.33; m.peTTM: 34 -> 37.3; m.peFwd: 23.4 -> 26.3; m.evEbitda: 17.9 -> 19.8; m.evSales: 3 -> 3.3
- `AIR` Airbus (via `AIR.PA`): price: 174.96 -> 208.75; mcap: 159.08 -> 187.81; m.peTTM: 27.6 -> 33.0; m.peFwd: 20.4 -> 24.2; m.evEbitda: 17.8 -> 21.1; m.evSales: 1.9 -> 2.2
- `HEI` Heico: price: 320.88 -> 362.09; mcap: 44.81 -> 50.57; m.peTTM: 57.1 -> 64.5; m.peFwd: 46.9 -> 52.6; m.evEbitda: 34.8 -> 39.0; m.evSales: 9.7 -> 10.9
- `TDG` TransDigm: price: 1212.36 -> 1348.49; mcap: 67.81 -> 75.43; m.peTTM: 37.9 -> 42.0; m.peFwd: 25.8 -> 28.7; m.evEbitda: 19.8 -> 21.3; m.evSales: 10.1 -> 10.9
- `MRCY` Mercury Systems: price: 106.81 -> 126.21; mcap: 6.41 -> 7.58; m.peFwd: 69.7 -> 82.4; m.evEbitda: 70.3 -> 82.5; m.evSales: 7 -> 8.2
- `RDW` Redwire: price: 14.87 -> 11.31; mcap: 2.96 -> 2.25; m.evSales: 8.1 -> 6.2
- `ASTS` AST SpaceMobile: price: 87.32 -> 85.13; mcap: 33.89 -> 33.04
- `IRDM` Iridium: price: 45.61 -> 53.75; mcap: 4.82 -> 5.7; m.peTTM: 46.1 -> 54.3; m.peFwd: 33 -> 45.4; m.evEbitda: 14.8 -> 16.8; m.evSales: 7.4 -> 8.4
- `SATS` EchoStar: price: 115.24 -> 103.92; mcap: 33.4 -> 30.12; m.evEbitda: 38.5 -> 35.7; m.evSales: 4.1 -> 3.8
- `VSAT` Viasat: price: 61.5 -> 83.06; mcap: 8.4 -> 11.34; m.peFwd: 152.5 -> 205.9; m.evEbitda: 9.6 -> 11.7; m.evSales: 2.9 -> 3.6
- `SES` SES S.A. (via `SESG.PA`): price: 7.91 -> 8.05; mcap: 3.15 -> 3.18; m.evEbitda: 7.9 -> 8.0; m.evSales: 3.1 -> 3.2
- `PL` Planet Labs: price: 30.72 -> 31.38; mcap: 10.95 -> 11.18; m.evSales: 31.9 -> 32.6
- `BKSY` BlackSky: price: 31.79 -> 27.88; mcap: 1.18 -> 1.03; m.evSales: 13 -> 11.6
- `SPIR` Spire Global: price: 16.37 -> 18.44; mcap: 0.63 -> 0.71; m.peTTM: 10.3 -> 11.6; m.evSales: 9.4 -> 10.6
- `LHX` L3Harris: price: 303 -> 302.07; mcap: 56.45 -> 56.27; m.peTTM: 32.9 -> 32.8; m.peFwd: 22.2 -> 22.1; m.evEbitda: 34.5 -> 34.4; m.evSales: 5.8 -> 5.7
- `KTOS` Kratos Defense: price: 54.82 -> 55.35; mcap: 10.28 -> 10.38; m.peTTM: 322.5 -> 325.6; m.peFwd: 51.1 -> 51.4; m.evEbitda: 110.8 -> 112.1
- `GRMN` Garmin: price: 231.72 -> 240.02; mcap: 44.69 -> 46.29; m.peTTM: 26.5 -> 26.8; m.peFwd: 22.4 -> 23.2; m.evEbitda: 19.5 -> 20.2; m.evSales: 5.7 -> 5.9
- `LUNR` Intuitive Machines: price: 26.54 -> 19.58; mcap: 4.26 -> 3.14; m.evSales: 16.6 -> 13.3
- `LDOS` Leidos: price: 121.69 -> 108.84; mcap: 15.31 -> 13.69; m.peTTM: 11.1 -> 10.0; m.peFwd: 9.3 -> 8.3; m.evEbitda: 9.1 -> 8.4; m.evSales: 1.3 -> 1.2
- meta: data-date stamped to 2026-07-06 in hero/footer
