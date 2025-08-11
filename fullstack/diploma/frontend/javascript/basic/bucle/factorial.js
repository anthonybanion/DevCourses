// ==========================================
// 
// Calculate the factorial of a number using a 
// while loop and display each multiplication step.
//
// File: factorial.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


/*Statement:
Factorial with Step Display

Ask for a number N and calculate its factorial.
    - Use a while loop.
    - Show each multiplication step (3! = 3 × 2 × 1).
    - Output: The factorial and the multiplication process. */


let number = 8;
let factorial = 1;
let process = '';

while (number > 0) {
    factorial *= number;
    process += number;

    if (number > 1) {
        process += ' × ';
    }

    number--;
}

console.log(`Factorial: ${factorial}`);
console.log(`Process: ${process}`);