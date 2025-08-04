let number1 = 32;
let number2 = 8;

let quotient1 = number1 / number2;

console.log("The quotient of " + number1 + " and " + number2 + " is: " + quotient1);
// Output: The quotient of 32 and 8 is: 4

let number3 = 2;

let quotient2 = number1 / number3;
let quotient3 = number2 / number3;
let quotient4 = number3 / number1;
let quotient5 = number3 / number2;
let quotient6 = number2 / number1;

console.log("The quotients are:");
console.log("A/B: " + quotient1);
console.log("A/C: " + quotient2);
console.log("B/A: " + quotient3);
console.log("B/C: " + quotient4);
console.log("C/A: " + quotient5);
console.log("C/B: " + quotient6);