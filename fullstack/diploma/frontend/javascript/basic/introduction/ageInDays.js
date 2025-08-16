// ==========================================
// 
// This script prompts the user for their age and calculates 
// the number of days they have lived, assuming 365 days per year. 
// It uses Node.js's `readline` module to handle user input 
// from the command line.
//
// File: ageInDays.js
// Author: Anthony Bañon
// Created: 2025-06-22
// Last Updated: 2025-06-22
// ==========================================


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How old are you? ", function(age) {
  console.log(`The number of days lived, ${age*365} days`);
  rl.close();
});