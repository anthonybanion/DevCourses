// ==========================================
// 
// Description: Pyramid Pattern Printing
//
// File: pyramidPatternPrinting.js
// Author: Anthony Bañon
// Created: 2025-08-15
// Last Updated: 2025-08-15
// ==========================================


/*Statement:
Pyramid Pattern Printing

Ask for a height H and print a pyramid of stars (*).
    - Use nested for loops to print spaces and stars in each row.
    - Only print odd numbers of stars per row.
    - Output: A centered pyramid of stars.*/

const height = 5; // You can change this value to set the height of the pyramid

function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        // leading spaces
        const spaces = ' '.repeat(height - i);
        // odd stars
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printPyramid(height);