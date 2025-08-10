// ==========================================
// 
// Entry system for a venue based on age and membership status
//
// File: entrySystem.js
// Author: Anthony Bañon
// Created: 2025-08-08
// Last Updated: 2025-08-08
// ==========================================


// Exercise 2: Event Entry System
// Request:
// User's Age
// If they have a VIP ticket
// If they are on the guest list
// And only allow entry if:
// They are over 18 and have a ticket,
// Or they have a VIP ticket,
// Or they are on the guest list and are at least 16 years old.

let isOnTheList = false;
let hasEntry = true;
let hasVipEntry = false;
let age = 20;
let isUser= hasEntry||hasVipEntry||isOnTheList;
let canEnter = false;

// if(age<=0){
//     console.log("Invalid age");
// }else{
//     if(age<16){
//         console.log("Does not enter");
//     } else if(age>=16 && age<18){
//         console.log(isOnTheList ? "Enter" : "Does not enter");
//     } else if(age>18) {
//         console.log(isUser ? "Enter" : "Does not enter");

//     }
// }



if (age <= 0) {
    console.log("Invalid age");

} else if (age < 16) {
    canEnter = false;

} else if (age >= 16 && age < 18) {
    canEnter = isOnTheList;

} else if (age > 18) {
    canEnter = hasEntry || hasVipEntry || isOnTheList;
}

if (age > 0) {
    console.log(canEnter ? "Enter" : "Does not enter");
}