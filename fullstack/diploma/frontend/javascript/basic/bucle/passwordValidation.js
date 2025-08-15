// ==========================================
// 
// Password validation script that prompts the user to enter a password
//
// File: passwordValidation.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


/*Statement:
Password Validation with Retry

Ask the user to enter a password.
    - Use a do...while loop to keep asking until the password 
    matches "OpenSesame".
    - Allow a maximum of 5 attempts.
    - If correct, print "Access granted", 
    otherwise "Access denied". */


import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const PASSWORD = 'OpenSesame';
const MAX_ATTEMPTS = 5;

const rl = readline.createInterface({ input, output });

async function askPassword() {
    /*
     * This function prompts the user to enter a password
     *
     * @param {readline.Interface} rl - The readline interface for user input
     * @returns {Promise<string>} - The entered password
     */
    let counter = 0;
    let answer;

    do {
        answer = await rl.question('Enter your Password: ');
        counter++;

        if (answer === PASSWORD) {
            console.log('Access granted');
            break;
        } else {
            console.log('Access denied');
        }

    } while (counter < MAX_ATTEMPTS);

    if (answer !== PASSWORD) {
        console.log('Maximum attempts reached. Access denied.');
    }

    rl.close();
}

askPassword();
