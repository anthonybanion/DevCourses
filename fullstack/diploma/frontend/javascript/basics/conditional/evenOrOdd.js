// ==========================================
// 
// This script checks if a number entered by the user is even or odd.
//
// File: evenOrOdd.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================


// Import the readline module for input/output
const readline = require('readline');  


const rl = readline.createInterface({
    // Create an interface for reading input and writing output
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a number and check if it's even or odd
rl.question("Enter a number: ", function(number) {  
    //async function to handle user input
  const num = parseInt(number);
  if (isNaN(num)) {
    console.log("That's not a valid number.");
  } else {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
  rl.close();
});