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
