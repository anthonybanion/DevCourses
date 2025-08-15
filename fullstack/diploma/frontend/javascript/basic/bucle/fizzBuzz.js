// ==========================================
// 
// FizzBuzz with a twist that includes prime number detection
//
// File: fizzBuzz.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


/*Statement:
FizzBuzz with a Twist

Print numbers from 1 to 50 using a for loop.
    - If divisible by 3, print "Fizz".
    - If divisible by 5, print "Buzz".
    - If divisible by both, print "FizzBuzz".
    - If the number is prime, print "Prime" instead of the number. */

function isPrime(num) {
    /*
     * Function to check if a number is prime.
     *
     * @param {number} num - The number to check.
     * @returns {boolean} - True if prime, false otherwise.
     */
    
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
        console.log("Prime");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
