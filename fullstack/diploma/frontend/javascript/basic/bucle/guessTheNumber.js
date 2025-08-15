// ==========================================
// 
// A simple number guessing game using a do...while loop.
//
// File: guessTheNumber.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


/*Statement:
Guess the Number Game

Generate a random number between 1 and 100.
    - Use a do...while loop to let the user guess.
    - If the guess is higher, print "Too high".
    - If lower, print "Too low".
    - Stop when guessed correctly and print "Correct! Attempts: X".*/


import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

do {
    guess = parseInt(await rl.question("Guess a number between 1 and 100: "));
    attempts++;
    
    if (guess > randomNumber) {
        console.log("Too high");
    } else if (guess < randomNumber) {
        console.log("Too low");
    } else {
        console.log(`Correct! Attempts: ${attempts}`);
    }
} while (guess !== randomNumber);

rl.close();
