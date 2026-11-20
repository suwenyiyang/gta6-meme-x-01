// make.fun gta6-meme-x-01 entrypoint.
//
// The entry itself is the public X post described by POST.json. The grader
// mounts the repository at /bot and reads the submitted pointer from /output.
// Copying the pointer byte for byte is the whole job: no network, clock, image,
// or generated metadata is involved.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POST.json");
const destination = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`Unable to copy ${source} to ${destination}: ${reason}`);
  process.exitCode = 1;
}
