// ==========================================
// 
// This script prompts the user to enter two 
// numbers and then calculates and displays their sum.
//
// File: sum.js
// Author: Anthony Bañon
// Created: 2025-06-20
// Last Updated: 2025-06-20
// ==========================================


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(number) {
  console.log(`You entered: ${number}`);
rl.question("Enter another number: ", function(anotherNumber) {
  const sum = parseFloat(number) + parseFloat(anotherNumber);
  console.log(`The sum is: ${sum}`);        
  rl.close();
}); 
});
