// ==========================================
// 
// This script prompts the user to enter two 
// numbers and calculates their product.
//
// File: multiplication.js
// Author: Anthony Bañon
// Created: 2025-06-20
// Last Updated: 2025-06-20
// ==========================================



let number1 = parseFloat(prompt("Enter the first number: "));
let number2 = parseFloat(prompt("Enter the second number: "));
let product = number1 * number2;
let sum = number1 + number2;
let difference = number1 - number2;
let quotient = number1 / number2;
console.log("The product of " + number1 + " and " + number2 + " is: " + product);
console.log("The sum of " + number1 + " and " + number2 + " is: " + sum);
console.log("The difference of " + number1 + " and " + number2 + " is: " + difference);
console.log("The quotient of " + number1 + " and " + number2 + " is: " + quotient);