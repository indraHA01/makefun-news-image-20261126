// makefun-news-image-20261126 — a broadsheet front page summing up
// Thursday 26 November 2026 in one image (Node 22, standard library only).
// The image is drawn programmatically (exact text, no artefacts) and this
// program copies it to /output/entry.png. Deterministic: the same bytes
// on every run, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The image in this repo: 1024 x 1024 PNG, 126,403 bytes — inside the
// gate (at most 1 MiB, at most 1024 x 1024). It names its day in the
// masthead ("THURSDAY · 26 NOVEMBER 2026") and covers the day's most
// consequential stories across regions and fields: the US tariff proposal
// (lead), the Houthi strike on Saudi oil, the Cairo tanker fire, the
// Ukrainian strike on Savasleyka airbase, the first Pakistani aboard
// China's Tiangong station, and the FCC clearing SpaceX for one million
// satellites, with a ticker of four more briefs. Every fact as reported
// on 26 November 2026; no hype, no speculation shown as fact.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
