// ==========================================
// 
// Description: Word diamond pattern
//
// File: wordDiamondPattern.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statement:
Word Diamond Pattern: Read a word (up to 21 characters), 
If the number of characters is even, delete the last character; 
and print it in the following pattern:

Input: diamond
Output:
   M
  AMO
DIAMOND
  AMO
   M 
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function wordDiamondPattern() {
    let word = await rl.question("Enter a word, up to 21 characters: ");
    rl.close();

    if (word.length > 21) {
        console.log("Number of characters greater than 21");
        return;
    }

    // if the word has even length → we remove the last character
    if (word.length % 2 === 0) {
        word = word.slice(0, -1);
    }

    const n = word.length;
    const mid = Math.floor(n / 2); // center position

    // line above the entire word
    for (let i = mid; i > 0; i--) {
        const sub = word.slice(i, n - i); // central part
        const spaces = " ".repeat(i);
        console.log(spaces + sub);
    }

   // center line (whole word)
    console.log(word);

   // bottom (mirror top)
    for (let i = 1; i <= mid; i++) {
        const sub = word.slice(i, n - i);
        const spaces = " ".repeat(i);
        console.log(spaces + sub);
    }
}

wordDiamondPattern();