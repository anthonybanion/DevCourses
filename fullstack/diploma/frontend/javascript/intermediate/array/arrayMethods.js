// =====================
// 🔤 Array Methods Demo
// =====================

// 1. 🔄 Adding and Removing Elements
let arr = [1, 2];
arr.push(3); // Adds element to the end -> [1, 2, 3]
console.log("push:", arr);

arr.pop(); // Removes last element -> [1, 2]
console.log("pop:", arr);

arr.unshift(0); // Adds element to the beginning -> [0, 1, 2]
console.log("unshift:", arr);

arr.shift(); // Removes first element -> [1, 2]
console.log("shift:", arr);

arr.splice(1, 1, "x"); // Removes 1 element at index 1, inserts "x" -> [1, "x"]
console.log("splice:", arr);

// ----------------------------------

// 2. 🔍 Searching & Checking
let nums = [1, 2, 3, 2];

console.log("indexOf:", nums.indexOf(2)); // First index of 2 -> 1
console.log("lastIndexOf:", nums.lastIndexOf(2)); // Last index of 2 -> 3
console.log("includes:", nums.includes(3)); // true, because 3 exists

console.log("find:", nums.find(x => x > 2)); // Finds first > 2 -> 3
console.log("findIndex:", nums.findIndex(x => x > 2)); // Index of first > 2 -> 2

console.log("some:", nums.some(x => x > 3)); // false, no element > 3
console.log("every:", nums.every(x => x > 0)); // true, all positive

// ----------------------------------

// 3. 🔁 Iteration
let base = [1, 2, 3];

base.forEach(x => console.log("forEach element:", x)); // Logs each element

let doubled = base.map(x => x * 2); // Creates [2,4,6]
console.log("map:", doubled);

let filtered = base.filter(x => x > 1); // Keeps [2,3]
console.log("filter:", filtered);

let sum = base.reduce((a, b) => a + b, 0); // Adds all -> 6
console.log("reduce:", sum);

let reduceR = base.reduceRight((a, b) => a - b); // Right to left ((3-2)-1) -> 0
console.log("reduceRight:", reduceR);

let flatMapped = ["a b", "c"].flatMap(x => x.split(" ")); // Split and flatten -> ["a","b","c"]
console.log("flatMap:", flatMapped);

// ----------------------------------

// 4. 📐 Sorting & Rearranging
let sortArr = [3, 1, 2];
sortArr.sort(); // Sorts ascending -> [1,2,3]
console.log("sort:", sortArr);

sortArr.reverse(); // Reverses -> [3,2,1]
console.log("reverse:", sortArr);

// ----------------------------------

// 5. ✂️ Slicing & Copying
let copyArr = [1, 2, 3, 4];

console.log("slice:", copyArr.slice(1, 3)); // [2,3]
console.log("concat:", [1, 2].concat([3, 4])); // [1,2,3,4]

let flatArr = [1, [2, [3]]].flat(2); // Flattens nested arrays -> [1,2,3]
console.log("flat:", flatArr);

console.log("copyWithin:", [1, 2, 3, 4].copyWithin(0, 2)); // [3,4,3,4]
console.log("fill:", [1, 2, 3].fill(0)); // [0,0,0]

console.log("toSpliced:", [1, 2, 3].toSpliced(1, 1)); // New array [1,3]

// ----------------------------------

// 6. 📏 Information & Conversion
let infoArr = [1, 2, 3];

console.log("length:", infoArr.length); // 3
console.log("join:", infoArr.join("-")); // "1-2-3"
console.log("toString:", infoArr.toString()); // "1,2,3"
console.log("toLocaleString:", [123456].toLocaleString("de-DE")); // "123.456"

console.log("Array.isArray:", Array.isArray(infoArr)); // true
console.log("Array.from:", Array.from("abc")); // ["a","b","c"]
console.log("Array.of:", Array.of(1, 2, 3)); // [1,2,3]
