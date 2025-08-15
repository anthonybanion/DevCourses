/*Statement:
Skip Every Third Element

Ask for N numbers.
    - Use a loop to read them into an array.
    - Use another loop to print them, skipping every 3rd element.
    - Output: All numbers except positions 3, 6, 9… */

function skipEveryThirdElement(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if ((i + 1) % 3 !== 0) { // Skip every 3rd element (1-based index)
            result.push(numbers[i]);
        }
    }
    return result;
}

// Example usage:
console.log(skipEveryThirdElement([1, 2, 3, 4, 5, 6, 7])); // Output: [1, 2, 4, 5, 7]
console.log(skipEveryThirdElement([10, 20, 30, 40, 50])); // Output: [10, 20, 40, 50]
console.log(skipEveryThirdElement([5, 15, 25])); // Output: [5, 15]
console.log(skipEveryThirdElement([])); // Output: []
console.log(skipEveryThirdElement([1, 2 ])); // Output: [1, 2]