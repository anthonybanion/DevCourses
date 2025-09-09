// ==========================================
//
// Description: Above Average Counter
//
// File: aboveAverageCounter.js
// Author: Anthony Bañon
// Created: 2025-09-09
// Last Updated: 2025-09-09
// ==========================================

/* Statement:
Above Average Counter:
- From 50 integers in an array, calculate the average.
- Count how many numbers are above the average.*/

function aboveAverageCouner() {
  //load 50 integers ​​into an array
  const numbers = [];

  for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * 100);
  }
  //calculate average
  const sum = numbers.reduce((acc, item) => acc + item, 0);
  const average = sum / numbers.length;
  console.log("Promedio:", average);
  //count how many number are above the average
  let counter = 0;
  counter = numbers.filter((item) => item > average).length;

  console.log("Cantidad mayores al promedio:", counter);
}

aboveAverageCouner();
