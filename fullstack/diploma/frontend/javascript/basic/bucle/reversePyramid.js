// ==========================================
// 
// Reverse Pyramid with Characters
//
// File: reversePyramid.js
// Author: Anthony Bañon
// Created: 2025-08-11
// Last Updated: 2025-08-11
// ==========================================


/*Statement: 
Reverse Pyramid with Characters

Ask for a character and a height H.
    - Use nested loops to print a centered pyramid in reverse (largest row first).
    - Output Example for H=4 and *:*/


const height = 5; // You can change this value to set the height of the pyramid

function printReversePyramid(height) {
    /*
     * Prints a reverse pyramid of stars (
     *
     * @param {number} height - The height of the pyramid.
     * @returns {void}
     */
    
    for (let i = height; i >=1; i--) {
        // espacios iniciales
        const spaces = ' '.repeat(height - i);
        // estrellas impares
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printReversePyramid(height);