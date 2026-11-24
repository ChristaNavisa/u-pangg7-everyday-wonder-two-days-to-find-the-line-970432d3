// Everyday Wonder, Two Days to Find the Line
// (make.fun bounty u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
//
// Writes one sentence — at most 200 characters — about a small moment of
// wonder in everyday life to /output/entry.txt. The sentence is the entry.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The escalator's handrail ran a fraction faster than the steps, and my hand kept arriving before I did.";

function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  // One sentence: exactly one sentence-ending mark, at the end.
  const terminators = text.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
}

validateEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} characters to /output/entry.txt`);
