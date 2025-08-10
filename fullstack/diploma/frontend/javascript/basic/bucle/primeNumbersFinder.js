/*Statement:
Prime Numbers Finder
Write a program that takes an integer N and prints 
all prime numbers from 2 to N.
    - Use a for loop to check each number.
    - Use nested loops or conditions to test if the 
      number is divisible by any number other than 1 and itself.
    - Output: List of prime numbers separated by spaces. */

const NUMBER = 7;
const BASE_NUMBER=2**NUMBER;

// Function to check if a number is prime
function isPrimeNumber(num) {
    if (num < 2) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

// Function to find and print all prime numbers up to N
function findPrimeNumbers(N) {
    let primes = [];
    for (let i = 2; i <= N; i++) {
        if (isPrimeNumber(i)) {
            primes.push(i);
        }
    }
    console.log(primes.join(' ')); // Print the list of prime numbers
}

findPrimeNumbers(BASE_NUMBER); // Call the function with BASE_NUMBER as input

// Example usage
// findPrimeNumbers(10); // Output: 2 3 5 7

// Additional code to demonstrate the prime number checking
console.log("Checking prime numbers up to " + BASE_NUMBER + ":");   
