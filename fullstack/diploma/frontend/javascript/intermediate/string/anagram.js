// ==========================================
// 
// Description: Anagram Checker
//
// File: anagram.js
// Author: Anthony Bañon
// Created: 2025-08-16
// Last Updated: 2025-08-16
// ==========================================


/*Statement:
Anagram Checker:
 Determine if one string is an anagram of another, 
 ignoring spaces and punctuation.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

// 🔹 Normalizes: lowercase, no accents, only letters
function normalize(word) {
  return word
    .toLowerCase()
    .normalize("NFD")              // separate accents
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z]/g, "");       // letters only
}

async function anagram() {
  const firstWord = await rl.question("Enter first word: ");
  const secondWord = await rl.question("Enter second word: ");

  const cleanFirst = normalize(firstWord);
  const cleanSecond = normalize(secondWord);

  const isAnagram =
    cleanFirst.length === cleanSecond.length &&
    cleanFirst.split("").sort().join("") ===
      cleanSecond.split("").sort().join("");

  console.log(`Is Anagram: ${isAnagram}`);
  rl.close();
}

anagram().catch(console.error);