// ==========================================
// 
// Staircase Number Pattern 
//
// File: staircaseNumberPattern.js
// Author: Anthony Bañon
// Created: 2025-08-11
// Last Updated: 2025-08-11
// ==========================================


/*Statement: 
Staircase Number Pattern

Print a right-aligned staircase of numbers from 1 to N.
    - Use nested for loops: one for spaces, one for numbers.
    - Each row starts at 1 and increments up to the row number.
    - Output Example for N=5:*/

    
    const height = 5;

function printPattern(height) {
    /*
     * Prints a right-aligned staircase of numbers from 1 to N.
     *
     * @param {number} height - The height of the staircase.
     * @returns {void}
     */
    
    for (let i = 1; i <= height; i++) {
        // espacios iniciales
        let spaces = '';
        for (let s = 0; s < height - i; s++) {
            spaces += ' ';
        }

        // números de 1 a i
        let numbers = '';
        for (let j = 1; j <= i; j++) {
            numbers += j;
        }

        console.log(spaces + numbers);
    }
}

printPattern(height);
