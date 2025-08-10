let number1 = 32;
let number2 = 8;


// Output: The quotient of 32 and 8 is: 4

let number3 = 2;
let quotient1 = number1 / number2;  // A/B
let quotient2 = number1 / number3;  // A/C
let quotient3 = number2 / number3;  // B/C
let quotient4 = number3 / number1;  // C/A
let quotient5 = number3 / number2;  // C/B
let quotient6 = number2 / number1;  // B/A

console.log("The quotients are:");
console.log("A/B: " + quotient1);
console.log("A/C: " + quotient2);
console.log("B/C: " + quotient3);
console.log("C/A: " + quotient4);
console.log("C/B: " + quotient5);
console.log("B/A: " + quotient6);