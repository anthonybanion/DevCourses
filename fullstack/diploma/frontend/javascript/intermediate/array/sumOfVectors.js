// ==========================================
//
// Description: Sum of Vectors (Arrays)
//
// File: sumOfVectors.js
// Author: Anthony Bañon
// Created: 2025-09-24
// Last Updated: 2025-09-24
// ==========================================

/*Statement:
**Sum of Vectors (Arrays):**

- Read two arrays of 20 integers each.
- Create a third array that contains the element-wise sum.
- Display all three arrays. */

function loadNumbers(array) {
  for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }
}

function sunOfvectors() {
  const vectorOne = [];
  const vectorTwo = [];
  const vectorTree = [];
  loadNumbers(vectorOne);
  loadNumbers(vectorTwo);
  console.log(vectorOne);
  console.log(vectorTwo);

  for (let i = 0; i < 20; i++) {
    vectorTree[i] = vectorOne[i] + vectorTwo[i];
  }

  console.log(vectorTree);
}

sunOfvectors();
