// ==========================================
// 
// This script prompts the user to enter a 
// string that ends with a period.
//
// File: stringLength.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statemenet:
String Length and Uppercase:
    Enter a string ending in a period and display its character count.
    Also, output the string in uppercase.*/



import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function stringLengthAndUppercase() {
    // Prompt the user for a string
    const inputString = await rl.question('Enter a string ending with a period: ');

    // Check if the string ends with a period
    if (inputString.endsWith('.')) {
        // Calculate the length excluding the final period
        const length = inputString.length - 1;
        console.log(`Character count (excluding the period): ${length}`);
        
        // Convert the string to uppercase
        console.log(`Uppercase string: ${inputString.toUpperCase()}`);
    } else {
        console.log('The string must end with a period.');
    }

    await rl.close();
}

// Execute the function
stringLengthAndUppercase();