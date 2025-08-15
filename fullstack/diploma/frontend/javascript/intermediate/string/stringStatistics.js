// ==========================================
// 
// String Statistics
//
// File: stringStatistics.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/* Statement: 
String Statistics: 
Enter a string ending in a period and report:

    - Number of characters
    - Number of vowels
    - Number of spaces
    - Number of words starting with F, f, M, or m
*/


import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function stringStatistics() {
    const phrase = await rl.question("Enter a phrase ending with a period: ");

    if (!phrase.endsWith(".")) {
        console.log("The phrase must end with a period.");
        rl.close();
        return;
    }

    // Remove final period for statistics
    const cleanPhrase = phrase.slice(0, -1);

    // Count characters (excluding the period)
    const numChars = cleanPhrase.length;

    // Count vowels
    const numVowels = (cleanPhrase.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || []).length;
    // Count spaces
    const numSpaces = (cleanPhrase.match(/ /g) || []).length;

    // Count words starting with F, f, M, or m
    const numSpecialWords = (cleanPhrase.match(/\b[fmFM]\w*/g) || []).length;

    console.log(`Number of characters: ${numChars}`);
    console.log(`Number of vowels: ${numVowels}`);
    console.log(`Number of spaces: ${numSpaces}`);
    console.log(`Words starting with F/f or M/m: ${numSpecialWords}`);

    rl.close();
}

stringStatistics();