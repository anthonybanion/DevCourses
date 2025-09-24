// ==========================================
//
// Description: Character Replacement Function
//
// File: characterReplacementFunction.js
// Author: Anthony Bañon
// Created: 2025-09-24
// Last Updated: 2025-09-24
// ==========================================

/*Statement:
 Character Replacement Function:

- Accepts a string and two characters.
- Replaces all occurrences of the first character with the second. */

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
let word = [];

async function characterReplacementFunction() {
  word = (await rl.question("Enter a word: ")).split("");
  const charToReplace = await rl.question("Enter the character to replace: ");
  const replacementChar = await rl.question(
    "Enter the replacement character: "
  );

  const replacedWord = word
    .map((char) => (char === charToReplace ? replacementChar : char))
    .join("");
  console.log(`Modified word: ${replacedWord}`);
  rl.close();
}

characterReplacementFunction();
