# GTA 6 meme entry for make.fun

This repository is the make.fun bounty entry `gta6-meme-x-01`: a GTA 6 meme posted publicly on X.

The joke is that, after the long 13-year wait for GTA 6, a dog on a jet ski reached Leonida before everyone else. make.fun's ghost rides along in the picture.

The image stays with the X post and is not part of this repository, which holds only the submission code and the post pointer. The post text names make.fun, tags `@makefunai`, and includes the play code `makefun-rose-swan-cherub`.

After replacing the placeholder in `POST.json` with the real post URL, run the entry from this directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The command copies `POST.json` unchanged to `out/POST.json`.
