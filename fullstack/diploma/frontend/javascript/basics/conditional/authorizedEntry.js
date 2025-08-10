// ==========================================
// 
// This code checks if a person can enter a club based 
// on their entrance permission, legal age, 
// and authorization status.
//
// File: authorizedEntry.js
// Author: Anthony Bañon
// Created: 2025-08-03
// Last Updated: 2025-08-03
// ==========================================


let hasEntrance = true;
let isOfLegalAge = false;
let hasAuthorization = true;


if(hasEntrance){
    console.log("✅ You can enter the club.");
    if(isOfLegalAge){
        console.log("✅ You are of legal age.");
    } else{
        console.log("❌ You are not of legal age.");
        if(hasAuthorization){
            console.log("✅ You have authorization.");
        } else {
            console.log("❌ You do not have authorization.");
        }
    }
} else {
    console.log("❌ You cannot enter the club.");
}
