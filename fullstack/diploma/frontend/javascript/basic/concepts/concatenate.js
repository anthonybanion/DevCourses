// ==========================================
// 
// Demonstrates type coercion and concatenation in JavaScript
//
// File: concatenate.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================


let numberOne = 1.0;
let numberTwo = "2";

console.log(typeof(numberOne + numberTwo)); // Output: "string"
console.log(typeof(numberTwo + numberOne)); // Output: "string"

console.log(typeof(numberOne + numberTwo + 3)); // Output: "string"
console.log(typeof(3 + numberOne + numberTwo)); // Output: "string"

console.log(String(23)+String(1.2));
console.log(typeof(String(23)+String(1.2))); // Output: "string"


console.log(typeof(""));  // Output: "string"
console.log(typeof('')); // Output: "string"
console.log(typeof(``)); // Output: "string"

// Because '' is converted to 0 and true is converted to 1
console.log(""==''==``);  // Output: false