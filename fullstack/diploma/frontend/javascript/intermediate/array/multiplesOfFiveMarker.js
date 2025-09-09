// ==========================================
//
// Description: Multiples of 5 Marker
//
// File: multiplesOfFiveMarker.js
// Author: Anthony Bañon
// Created: 2025-09-09
// Last Updated: 2025-09-09
// ==========================================

/*Statement: 
**Multiples of 5 Marker:**

- Read integers into an array.
- Display each number, and if it’s a multiple of 5, append "###".
- Stop when the total number of multiples of 5 reaches 20.*/

function multiplesOfFiveMarker() {
  const numbers = [];
  let multiplesOfFiveCount = 0;

  while (multiplesOfFiveCount < 20) {
    const number = Math.floor(Math.random() * 100); // Simulating user input with random numbers
    if (isNaN(number)) {
      console.log("Please enter a valid integer.");
      continue;
    }

    numbers.push(number);

    if (number % 5 === 0) {
      multiplesOfFiveCount++;
      console.log(`${number} ###`);
    } else {
      console.log(number);
    }
  }

  console.log("Final array of numbers:", numbers);
}

multiplesOfFiveMarker();
