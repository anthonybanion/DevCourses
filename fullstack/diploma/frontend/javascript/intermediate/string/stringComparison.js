// ==========================================
// 
// String Comparison
//
// File: stringComparison.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statement:
String Comparison: 
    Enter two strings and determine if they are equal. */


import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function stringComparison() {
    const firstString = await rl.question('Enter first string: ');
    const secondString = await rl.question('Enter second string: ');

    console.log(
        firstString === secondString 
            ? 'Equal' 
            : 'Different'
    );

    rl.close();
}

stringComparison();