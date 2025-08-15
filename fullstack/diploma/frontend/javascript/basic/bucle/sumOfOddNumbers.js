/*Statement:
Sum of Odd Numbers Until Limit

Ask the user for a limit L.
    - Use a while loop to sum all odd numbers starting from 1 until the sum exceeds L.
    - Stop immediately when the sum passes the limit.
    - Output: The total sum and how many odd numbers were added. */

const LIMIT = 37;
let sum = 0;
let count = 0;
let i = 1; // start with the first odd number

while (sum <= LIMIT) {
    sum += i;
    console.log(i); // show the odd number
    count++;
    i += 2; // go to the next odd number
}

console.log("Odd numbers added:", count);
console.log("Final sum:", sum);