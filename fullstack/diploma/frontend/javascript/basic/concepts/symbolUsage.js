// ==========================================
// 
// This script demonstrates various usages of 
// Symbols in JavaScript, including creation, 
// property keys, iteration, global symbol registry, 
// and well-known symbols.
//
// File: symbolUsage.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================


// symbol-usage.js
// Demonstrates all major usages of Symbol in JavaScript

// 1. Basic Symbol creation
const sym1 = Symbol("mySymbol");
const sym2 = Symbol("mySymbol");

console.log("Are symbols unique?", sym1 === sym2); // false - each Symbol is unique

// 2. Using Symbol as a property key
const SECRET = Symbol("secret");
const user = {
  name: "Anthony",
  age: 30,
  [SECRET]: "This is hidden"
};

console.log("\nAccessing symbol property directly:");
console.log(user[SECRET]); // "This is hidden"

// 3. Iterating object with for...in (symbol keys are not shown)
console.log("\nIterating with for...in:");
for (const key in user) {
  console.log(key); // Outputs: name, age (NOT the symbol)
}

// 4. Object.keys (symbol keys are excluded)
console.log("\nUsing Object.keys:");
console.log(Object.keys(user)); // ["name", "age"]

// 5. Object.getOwnPropertySymbols (to access symbol keys)
console.log("\nUsing Object.getOwnPropertySymbols:");
const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols); // [Symbol(secret)]
console.log(user[symbols[0]]); // "This is hidden"

// 6. Using Symbol.for and Symbol.keyFor (global symbol registry)
const globalSym = Symbol.for("shared");
const sameGlobalSym = Symbol.for("shared");

console.log("\nUsing Symbol.for:");
console.log(globalSym === sameGlobalSym); // true

console.log("Key for symbol:", Symbol.keyFor(globalSym)); // "shared"

// 7. Symbol.toStringTag - Customizing Object.prototype.toString
const car = {
  brand: "Toyota",
  model: "Corolla",
  [Symbol.toStringTag]: "CustomCar"
};

console.log("\nUsing Symbol.toStringTag:");
console.log(Object.prototype.toString.call(car)); // [object CustomCar]

// 8. Symbol.iterator - Making an object iterable
const range = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
};

console.log("\nUsing Symbol.iterator:");
for (const number of range) {
  console.log(number); // 1, 2, 3
}

// 9. Well-known Symbol: Symbol.toPrimitive - Custom type conversion
const money = {
  amount: 100,
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return this.amount;
    if (hint === "string") return "$" + this.amount;
    return null;
  }
};

console.log("\nUsing Symbol.toPrimitive:");
console.log(+money); // 100 (number conversion)
console.log(`${money}`); // "$100" (string conversion)
