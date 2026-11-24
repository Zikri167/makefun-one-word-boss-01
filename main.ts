// One Word for the Boss — entry program.
//
// Writes exactly one word describing the boss to /output/entry.txt.
// The word: "Thermostat" — the boss who sets the temperature of the whole
// room. Everyone checks the thermostat before they speak; one degree of
// mood shift and the entire office, kitchen, or warehouse adjusts.
//
// Deterministic, Node 22 stdlib-only, no network, no input files.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Thermostat";

function validate(word: string): void {
  if (typeof word !== "string") {
    throw new Error("entry must be a string");
  }
  // Count code points, not UTF-16 units, so the 1-30 character gate
  // matches what a reader counts.
  const length = [...word].length;
  if (length < 1 || length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
  if (/[\u0000-\u001f\u007f]/.test(word)) {
    throw new Error("entry must not contain control characters");
  }
}

function main(): void {
  validate(WORD);
  const dir = process.env.OUTPUT_DIR ?? "/output";
  const file = join(dir, "entry.txt");
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, WORD, "utf8");
  // Read back what was written and re-validate: a truncated or
  // re-encoded write must fail loudly instead of passing silently.
  const written = readFileSync(file, "utf8");
  if (written !== WORD) {
    throw new Error(
      `entry.txt round-trip mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(written)}`,
    );
  }
  validate(written);
}

main();
