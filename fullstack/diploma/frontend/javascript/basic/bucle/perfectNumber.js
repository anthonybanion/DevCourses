// ==========================================
// 
// Find and print all perfect numbers up to a given limit.
//
// File: perfectNumber.js
// Author: Anthony Bañon
// Created: 2025-08-11
// Last Updated: 2025-08-11
// ==========================================


/*Statement:
Perfect Numbers Finder

Ask for a limit L and print all perfect numbers from 1 to L.
    - A perfect number is equal to the sum of its divisors excluding itself.
    - Use nested loops: outer for the number, inner to find divisors.
    - Output: All perfect numbers separated by commas.

*/

function findPerfectNumbers(limit) {
    /*
     * Function: findPerfectNumbers
     *
     * @param {number} limit - The upper limit to search for perfect numbers.
     * @returns {void}
     */
    
    let perfectNumbers = [];

    for (let num = 1; num <= limit; num++) {
        let sumOfDivisors = 0;

        // Find divisors of num
        for (let divisor = 1; divisor < num; divisor++) {
            if (num % divisor === 0) {
                sumOfDivisors += divisor;
            }
        }

        // Check if num is a perfect number
        if (sumOfDivisors === num) {
            perfectNumbers.push(num);
        }
    }

    console.log("Perfect numbers up to " + limit + ": " + perfectNumbers.join(", "));
}

// Example usage:
let limit = 1000;
findPerfectNumbers(limit);


