// ==========================================
// 
// This script defines a function that prints 
// the first three multiples of a given number.
//
// File: ShowMultiples.js
// Author: Anthony Bañon
// Created: 2025-08-03
// Last Updated: 2025-08-03
// ==========================================


let number = 5;

function showMultiples(num) {
    for (let i = 1; i <= 3; i++) {
        console.log(number * i);
    }
}

showMultiples(number);