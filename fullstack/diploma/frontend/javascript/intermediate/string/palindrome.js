/*Statement: 
Palindrome Checker:
Create a program to check whether a word
is a palindrome (e.g., RADAR, ANILINA).
*/

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

async function palindromeChecker() {
    const word = await rl.question("Enter a word: ");

    // Normalize: lowercase + remove accents + remove non-letters
    const cleaned = word
        .toLowerCase()
        .normalize("NFD") // separate accents
        .replace(/[\u0300-\u036f]/g, "") // remove diacritics
        .replace(/[^a-z]/g, ""); // only letters

    const isPalindrome = cleaned === [...cleaned].reverse().join("");

    console.log(
        isPalindrome
            ? `${word} is a palindrome.`
            : `${word} is not a palindrome.`
    );

    rl.close();
}

palindromeChecker();
