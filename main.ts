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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
