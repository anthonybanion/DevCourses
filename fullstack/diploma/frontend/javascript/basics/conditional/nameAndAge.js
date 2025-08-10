// ==========================================
// 
// This JavaScript code listens for a form submission, 
// retrieves the user's name and age from the input fields, 
// and displays an alert with a greeting message. 
// If either field is empty, it prompts the user to fill in both fields.
//
// File: nameAndAge.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================


let form = document.querySelector("form");
 
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = event.target[0].value;
    const age = event.target[1].value;
    console.log("aca");
    if (name && age) {
        alert(`Hello ${name}, you are ${age} years old!`);
        console.log("aca");
    } else {
        alert("Please enter both your name and age.");
    }
});