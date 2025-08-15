// ==========================================
// 
// This script generates a multiplication table
// for a given number M, with conditions to skip certain results.
//
// File: multiplicationTable.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


/*Statement:
Multiplication Table with Conditions

Ask for a number M and print its multiplication table from 1 to 12.
    - Use a for loop.
    - Skip results where the product is divisible by 5.
    - Output: Each multiplication result on a new line. */

const NUMBER = 6;

for (let i = 1; i <= 12; i++) {
    const product = NUMBER * i;
    if (product % 5 === 0) continue; // skip multiples of 5
    console.log(`${NUMBER} x ${i} = ${product}`);
}