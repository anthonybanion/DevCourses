// ==========================================
// 
// This script handles a form submission to greet 
// the user with their full name.
//
// File: fullName.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;

    alert(`Hello, ${firstName} ${lastName}!`);
    // Clear the form fields
    event.target[0].value = '';
    event.target[1].value = '';
    // Optionally, you can focus on the first input field again
    event.target[0].focus();
}
);