// ==========================================
// 
// This script demonstrates the use of JavaScript primitive data types.
//
// File: primitive.js
// Author: Anthony Bañon
// Created: 2025-06-20
// Last Updated: 2025-06-20
// ==========================================


let number = 2.5;
let infinity = Infinity;
let negativeInfinity = -Infinity;
let nan = NaN; // Not a Number
let string = 'Hello, World!';
let boolean = true;
let undefinedValue = undefined;
let nullValue = null;
let symbolValue = Symbol('unique');
let bigintValue = BigInt(1234567890123456789012345678901234567890);
let otherBigintValue = 12n; // BigInt literal

console.log("Primitive Data Types in JavaScript:");
console.log("-------------")
console.log("Type number:")
console.log(typeof number);
console.log("Number:", number);
console.log(typeof infinity);
console.log("Infinity:", infinity);
console.log(typeof negativeInfinity);
console.log("Negative Infinity:", negativeInfinity);
console.log(typeof nan);
console.log("NaN:", nan);
console.log("-------------")

console.log(typeof string);
console.log("String:", string);

console.log(typeof boolean);
console.log("Boolean:", boolean);

console.log(typeof undefinedValue);
console.log("Undefined:", undefinedValue);

console.log(typeof nullValue);
console.log("Null:", nullValue);

console.log(typeof symbolValue);
console.log("Symbol:", symbolValue);

console.log("type of bigintValue:");
console.log("-------------")
console.log(typeof bigintValue); 
console.log("BigInt:", bigintValue);
console.log(typeof otherBigintValue);
console.log("Other BigInt:", otherBigintValue);
console.log("-------------");
let Symbol = Symbol('a');
