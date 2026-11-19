// Entry program for the make.fun bounty "Post a GTA 6 meme on X"
// (gta6-meme-x-01), Node 22, standard library only.
//
// The entry is the X post itself: a GTA 6 meme with make.fun's ghost in the
// picture, posted from a public X account with make.fun and the account's
// play code in the text. All this program has to do is hand the grader the
// post's address: it copies POST.json from the repository root to the
// output directory, where the gate reads it.
//
// POST.json still holds a placeholder address in this phase; it is replaced
// with the real post address (https://x.com/<handle>/status/<id>) once the
// meme is posted, before the entry is submitted.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const POST_PATH = join(BOT_DIR, 'POST.json');
let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test((post as { url: string }).url)) {
  console.error('POST.json must name the posted X status: {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
