// ==========================================
// 
// Description: Even number counter
//
// File: evenNumberCounter.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statement:
Even Number Counter: Read a series of integers ending with 
a negative number (do not process it). Count how many are even.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function evenNumberCounter() {
    const numberList = [];
    let number;

    // Read numbers until a negative number appears
    do {
        number = parseInt(
            await rl.question("Enter a positive number (negative to stop): "),
            10
        );

        if (number >= 0) numberList.push(number);
    } while (number >= 0);

    // Filter pairs
    const evenNumbers = numberList.filter(n => n % 2 === 0);

    console.log(`You entered ${evenNumbers.length} even numbers.`);
    console.log(`Even numbers: ${evenNumbers.join(", ")}`);

    await rl.close();
}

evenNumberCounter();