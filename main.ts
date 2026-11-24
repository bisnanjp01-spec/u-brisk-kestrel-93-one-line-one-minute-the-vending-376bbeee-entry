// One Line, One Minute: The Vending Machine Pickup Line Contest.
// The program writes a single pickup line, spoken by the vending machine
// itself, to /output/entry.txt. Node 22, stdlib only, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, composed for this contest: first-person machine voice, the
// machine's own world (its coil), a crush pun, and the punch lands in the
// last few words. Short, speakable, charming rather than creepy.
// (Coil: the spiral that holds and drops the snacks — the machine's own
// way of saying it cannot keep it together around you.)
const LINE =
  "My coil's had a crush on you for weeks \u2014 it drops everything the second you walk by.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and a single line. Refuse rather than write an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
