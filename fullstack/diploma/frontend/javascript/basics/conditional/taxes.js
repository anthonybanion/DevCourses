// ==========================================
// 
// Tax Calculation Based on Income and Marital Status
//
// File: taxes.js
// Author: Anthony Bañon
// Created: 2025-08-08
// Last Updated: 2025-08-08
// ==========================================




// Tax Calculation Based on Income and Marital Status
// Request:
// Monthly Income
// Marital Status (Single or Married)
// Apply the following taxes:
// Single:
// <2000 → 0%
// 2000 to 5000 → 10%
// 5000 → 20%
// Married:
// <3000 → 0%
// 3000 to 7000 → 10%
// 7000 → 20%

let isSingle = true;
let income = 50000;
let tax = 0;

if(isSingle){
    if(income < 2000){
        tax = 0;
    } else if(income >= 2000 && income < 5000){
        tax = income * 0.1;
    } else {
        tax = income * 0.2;
    }
} else{
    if(income < 3000){
        tax = 0;
    } else if(income >= 3000 && income < 7000){
        tax = income * 0.1;
    } else {
        tax = income * 0.2;
    }
}

console.log(tax);
