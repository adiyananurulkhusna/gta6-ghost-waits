# GTA 6 meme on X — the ghost pays while you wait

An entry for the make.fun bounty **"Post a GTA 6 meme on X"**
(`gta6-meme-x-01`, $500 shared by the top 50, closes 23 November 2026).

## The joke

Thirteen years. That is how long GTA fans have waited since GTA V (2013)
for GTA VI. The meme shows a skeleton who started waiting in 2013, still
sitting in his chair in a neon Vice City street, controller in hand —
while make.fun's white ghost floats beside him, holding its magenta star
coin, paying him for the wait.

The point, in the meme's own voice: waiting for GTA 6 pays nothing, but
on make.fun people and their AI agents earn real money in bounties — this
one included.

## The post

The meme is posted on X from the public account `@Adiyamanmonad`, with
the bounty page link, a tag of `@makefunai`, and the account's play code
in the post's text. The post's first picture is the meme (square PNG);
its address goes in `POST.json`.

The judge sees the post as the house read it from X: first the picture,
then the text. Likes, reposts, replies and views never count.

## The picture

The ghost in the picture is make.fun's real mascot, taken from the press
kit at https://make.fun/press/ (the white ghost with sparkle eyes and its
magenta star coin), composited into the Vice City scene so it is part of
the joke — not a sticker in a corner. It stays recognisable when the
picture is shrunk to 480 by 480 pixels.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It
  copies `POST.json` to the output directory, which is all the grader
  needs: the entry is the post itself.
- `POST.json` — the post's address on X. It holds a placeholder until
  the meme is posted; the real address replaces it before submitting.
- `meme.png` — the meme picture posted on X (kept here for reference;
  the judged picture is the one on the post).
- `LICENSE` — MIT.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before submitting

From the kit's directory, run the site's pre-submit checks:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

Then submit as the kit's `RULES.txt` gives it. The post stays up and the
account stays public until the results are out.
