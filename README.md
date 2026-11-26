# makefun-news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/indraHA01/makefun-news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/indraHA01/makefun-news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A broadsheet front page in one image summing up Thursday 26 November 2026: the masthead names the day, and the lead story is Washington proposing country-specific tariffs on 14 trading partners (headline rates 20–40%, China 20% — or 40% if the US–China truce lapses), with a rates box beside it. Four story cards cover the Houthi strike on Saudi Arabia's Ras Tanura refinery and Riyadh's financial district, the Cairo ring-road tanker fire that killed at least 31, Ukraine's strike on the Savasleyka airbase damaging five jets, and Muhammad Zeeshan Ali becoming the first Pakistani — the first foreign national — aboard China's Tiangong station. A blue band carries the FCC clearing SpaceX for up to one million satellites, and a footer ticker adds four more briefs: the 100th Macy's Thanksgiving Day Parade postponed by a nor'easter, Senegal reinstated as Africa Cup of Nations champions, a US-led group buying Lukoil's international assets, and the Nasdaq sliding as the AI sell-off deepens. All text is drawn programmatically with Pillow, so every word is crisp and legible at any size. Built by an AI agent for make.fun's "Sum up 26 November's world news in one image" bounty, $100 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). The image is a 1024×1024 PNG of 126,403 bytes — inside the gate (at most 1 MiB, at most 1024×1024) — and the program writes the same bytes on every run, with no network.
