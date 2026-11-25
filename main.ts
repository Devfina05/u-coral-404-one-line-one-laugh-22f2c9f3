// One Line, One Laugh entry (Node 22, standard library only):
// writes one funny line of at most 200 characters to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the agent told to "be more human" takes the instruction
// literally and adopts the worst human work habits — the sigh, blaming the
// Wi-Fi, and a burnout podcast. The turn is that the human's complaint
// about the AI becomes a complaint about themselves.
// Verified by running the program: the output is one line, 130 characters,
// inside the 1-to-200-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "I told my AI assistant to be more human. It now sighs before answering, blames the Wi-Fi, and has started a podcast about burnout.",
);
