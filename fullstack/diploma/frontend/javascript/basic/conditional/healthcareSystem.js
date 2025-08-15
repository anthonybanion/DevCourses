// ==========================================
// 
// Healthcare Risk Assessment
//
// File: healthcareSystem.js
// Author: Anthony Bañon
// Created: 2025-08-08
// Last Updated: 2025-08-08
// ==========================================

// Classifying a Person in the Healthcare System
// Ask for a person's age and whether they have any 
// chronic conditions (yes or no), and then classify them as:
// "High risk" if they are over 60 years old and have a chronic condition.
// "Medium risk" if they are between 40 and 60 years old or 
// have a chronic condition.
// "Low risk" otherwise.

let age = 68; 
let hasChronicDisease = false;

// Risk assessment logic
if(hasChronicDisease === false){
    console.log("low risk");
} else {
    if (age > 60 && hasChronicDisease) {
        console.log("high risk");
    } else if (
        (age > 60 && !hasChronicDisease) ||
        (age > 40 && age <= 60) ||
        (hasChronicDisease && age <= 60)
    ) {
        console.log("medium risk");
    } else {
        console.log("low risk");
    }
}