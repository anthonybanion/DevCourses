// ==========================================
// 
// Description: Word with three distinct vowels 
//
// File: threeDistinctVowels.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statement: 
Words with Three Distinct Vowels: 
Read several strings and display words with 
at least three different vowels.
*/


import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

async function threeDistinctVowels() {
    const phrase = await rl.question("Enter a phrase: ");
    const words = phrase.trim().split(/\s+/); // separate by spaces
    console.log(words);
    // Filter words with at least 3 different vowels
    const result = words.filter((word) => {
        const vowels = word  
            .toLowerCase()
            .match(/[aeiouáéíóú]/g); // extract all vowels
        if (!vowels) return false;  // if there are no vowels, discard
        const distinctVowels = new Set(vowels);  // remove repeated
        return distinctVowels.size >= 3;  // only accept if there are 3+ different ones
    });

    console.log("Words with at least 3 distinct vowels:", result);

    rl.close();
}

threeDistinctVowels();
