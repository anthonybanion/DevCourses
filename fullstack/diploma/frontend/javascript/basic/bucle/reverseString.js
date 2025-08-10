// ==========================================
// 
// This script reverses a given string without 
// using built-in functions like .reverse().
//
// File: reverseString.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


/*Statement
Reverse String Without Built-in Functions
Ask the user for a string and print it in reverse.
    - Use a while loop to iterate from the last index to the first.
    - Do not use .reverse() or other built-in reversing functions.
    - Output: The reversed string. */

const WORD = "hello";

function reverseString(str) {
    let reversed = '';
    let index = str.length - 1; // Start from the last character

    while (index >= 0) {
        reversed += str[index]; // Append the current character to the reversed string
        index--; // Move to the previous character
    }

    return reversed; // Return the reversed string
}

console.log(reverseString(WORD)); // Output: "olleh" 