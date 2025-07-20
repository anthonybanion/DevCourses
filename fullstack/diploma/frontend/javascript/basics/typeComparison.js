// ==========================================
// 
// This script demonstrates the comparison of 
// different data types in JavaScript.
//
// File: typeComparison.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================



let number = 12;
let real = 12.0;

if (number == real) {
    console.log("number and real are equal in value");
} else {
    console.log("number and real are not equal in value");
}

let nan = NaN;
if (nan == 0) {
    console.log("NaN is equal to 0");
}
else {
    console.log("NaN is not equal to 0");
}

let isOne = true;
let isOtherOne = 1;

if (isOne == isOtherOne) {
    console.log("isOne and isOtherOne are equal in value");
}
else {
    console.log("isOne and isOtherOne are not equal in value");
}

console.log({}=={});  
// Example of comparing an empty object

empty = {};

if (empty == empty) {
    console.log("empty is equal to itself");
}
else {
    console.log("empty is not equal to itself");
}

let under = undefined;
let nul = null;

if (under == nul) {
    console.log("undefined and null are equal in value");
    console.log("However, they are not equal in type");
}
else {
    console.log("undefined and null are not equal in value");
}

let array = [1];
let set = new Set([1]);
if (array == set) {
    console.log("array and set are equal in value");
}
else {
    console.log("array and set are not equal in value");
}

let symbol = Symbol('a');
let otherSymbol = Symbol('a');
if (symbol === otherSymbol) {
    console.log("Symbol and otherSymbol are equal in value");
}
else {
    console.log("Symbol and otherSymbol are not equal in value");
}