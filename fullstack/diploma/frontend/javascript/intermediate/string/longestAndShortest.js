// ==========================================
// 
// Longest and shortest string
//
// File: longestAndShortest.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statement:
Longest and Shortest String: 
    Enter two strings and display the longer 
    one first, then the shorter. */


import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function longestAndShortest() {
    const firstString = await rl.question('Enter first string: ');
    const secondString = await rl.question('Enter second string: ');

    if (firstString.length === secondString.length) {
        console.log('They are equal in length!');
    } else {
        const [longer, shorter] =
            firstString.length > secondString.length
                ? [firstString, secondString]
                : [secondString, firstString];

        console.log(`Longer: ${longer}`);
        console.log(`Shorter: ${shorter}`);
    }

    rl.close();
}

longestAndShortest();