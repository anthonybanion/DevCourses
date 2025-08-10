// ==========================================
// 
// This script demonstrates various non-primitive types in JavaScript.
//
// File: nonPrimitiveType.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================


// Tipos No Primitivos en JavaScript

// 1. Object
const person = { name: "John", age: 30 };
console.log("Object:", person);
console.log("typeof:", typeof person); // object

// 2. Array
const numbers = [1, 2, 3];
console.log("\nArray:", numbers);
console.log("typeof:", typeof numbers); // object
console.log("Array.isArray:", Array.isArray(numbers)); // true

// 3. Function
const greet = () => "Hello!";
console.log("\nFunction:", greet);
console.log("typeof:", typeof greet); // function

// 4. Date
const today = new Date();
console.log("\nDate:", today);
console.log("typeof:", typeof today); // object
console.log("instanceof Date:", today instanceof Date); // true

// 5. RegExp
const pattern = /abc/i;
console.log("\nRegExp:", pattern);
console.log("typeof:", typeof pattern); // object
console.log("instanceof RegExp:", pattern instanceof RegExp); // true

// 6. Map
const map = new Map();
map.set("key", "value");
console.log("\nMap:", map);
console.log("typeof:", typeof map); // object
console.log("instanceof Map:", map instanceof Map); // true

// 7. Set
const set = new Set([1, 2, 3]);
console.log("\nSet:", set);
console.log("typeof:", typeof set); // object
console.log("instanceof Set:", set instanceof Set); // true

// 8. WeakMap
const weakMap = new WeakMap();
const obj1 = {};
weakMap.set(obj1, "value");
console.log("\nWeakMap: (no visible data)");
console.log("typeof:", typeof weakMap); // object
console.log("instanceof WeakMap:", weakMap instanceof WeakMap); // true

// 9. WeakSet
const weakSet = new WeakSet();
const obj2 = {};
weakSet.add(obj2);
console.log("\nWeakSet: (no visible data)");
console.log("typeof:", typeof weakSet); // object
console.log("instanceof WeakSet:", weakSet instanceof WeakSet); // true

// 10. Promise
const promise = new Promise(resolve => resolve("Done"));
console.log("\nPromise:", promise);
console.log("typeof:", typeof promise); // object
console.log("instanceof Promise:", promise instanceof Promise); // true

// 11. Error
const error = new Error("Something went wrong");
console.log("\nError:", error);
console.log("typeof:", typeof error); // object
console.log("instanceof Error:", error instanceof Error); // true

// 12. Typed Array
const intArray = new Int8Array([10, 20, 30]);
console.log("\nTypedArray (Int8Array):", intArray);
console.log("typeof:", typeof intArray); // object
console.log("instanceof Int8Array:", intArray instanceof Int8Array); // true

// 13. ArrayBuffer
const buffer = new ArrayBuffer(8);
console.log("\nArrayBuffer:", buffer);
console.log("typeof:", typeof buffer); // object
console.log("instanceof ArrayBuffer:", buffer instanceof ArrayBuffer); // true

// 14. DataView
const view = new DataView(buffer);
console.log("\nDataView:", view);
console.log("typeof:", typeof view); // object
console.log("instanceof DataView:", view instanceof DataView); // true

// 15. Class (como objeto)
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const dog = new Animal("Fido");
console.log("\nClass instance:", dog);
console.log("typeof:", typeof dog); // object
console.log("instanceof Animal:", dog instanceof Animal); // true

// 16. Proxy
const target = { msg: "hello" };
const proxy = new Proxy(target, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : "not found";
  }
});
console.log("\nProxy:", proxy);
console.log("typeof:", typeof proxy); // object

// 17. Generator Function
function* generator() {
  yield 1;
  yield 2;
}
const gen = generator();
console.log("\nGenerator:", gen);
console.log("typeof:", typeof gen); // object
console.log("instanceof Generator:", gen instanceof Object); // true

// 18. Async Function
async function fetchData() {
  return "data";
}
const asyncFunc = fetchData();
console.log("\nAsync Function result (Promise):", asyncFunc);
console.log("typeof:", typeof asyncFunc); // object
console.log("instanceof Promise:", asyncFunc instanceof Promise); // true
