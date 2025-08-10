// ==========================================
// 
// A simple JavaScript program that greets the user by name.
//
// File: greeting.js
// Author: Anthony Bañon
// Created: 2025-06-20
// Last Updated: 2025-06-20
// ==========================================


// let name = prompt("What is your name: ");
// alert("Hello " + name + "! Welcome to the JavaScript world.");

// function sayHello() {
//     let name = document.getElementById("username").value;
//     document.getElementById("greetingMessage").innerHTML = "Hello, " + name + "!";
// }

// document.addEventListener("keydown", function(event) {
//   console.log("You pressed: " + event.key);
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name) {
  console.log(`Hello, ${name}`);
  rl.close();
});
