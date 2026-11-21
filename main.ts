import { mkdirSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

// The speaker asks to take the wheel, is given it, and drives.
// Past the last light, taking the turn without asking makes agency an act.
// The ending turns agency from thought into action.
const poem = "I asked if I could take the wheel. You moved to the passenger seat and said, drive. I kept both hands at ten and two until the road stopped being yours and started being the way home — and past the last light I took the turn I'd have asked about, and didn't ask.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
console.log('Unicode code points:', [...poem].length);
console.log('UTF-8 bytes:', Buffer.byteLength(poem, 'utf8'));
