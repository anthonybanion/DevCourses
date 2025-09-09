// ==========================================
// 
// This script generates 30 random integers, 
// counts how many of them are prime numbers, 
// and stores the prime numbers in a separate array for display.
//
// File: primeNumberAnalyzer.js
// Author: Anthony Bañon
// Created: 2025-08-22
// Last Updated: 2025-08-22
// ==========================================


/* Statement: 
Prime Number Analyzer:

- Generate 30 random integers into an array.
- Count how many are prime numbers.
- Store the prime numbers in a separate array and display them.
*/
const MIN = 1;
const MAX = 100;
const COUNT = 30;



function generateRandomNumbers(count, min, max) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function getPrimeNumbers(list) {
    return list.filter(isPrime);
}


// ========== Main Execution ==========
const randomNumbers = generateRandomNumbers(COUNT, MIN, MAX);
const primeNumbers = getPrimeNumbers(randomNumbers);

console.log("**** Array of 30 Random Numbers ****");
console.log(randomNumbers);

console.log("**** Array of Prime Numbers ****");
console.log(primeNumbers);

console.log(`The number of prime numbers found: ${primeNumbers.length}`);
