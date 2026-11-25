// The Robot Pickup Line Championship
// u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
//
// A one-line pickup line, written for a robot to say out loud. The program
// writes it to /output/entry.txt (or $ENTRY_OUTPUT when set, for local
// verification). The gate requires 1-200 UTF-8 characters, a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I ran a simulation of tonight one million times. In every single one, you say yes — so shall we skip to the part where I buy you a drink?";

// Fail loudly rather than ever shipping a line the gate would refuse:
// a single line of 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`pickup line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r") || LINE.trim().length === 0) {
  throw new Error("pickup line must be a single non-blank line");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
