// === Number Casting ===

// Explicit conversion to Number
console.log(Number("42"));       // 42
console.log(parseInt("42.8"));   // 42
console.log(parseFloat("42.8")); // 42.8
console.log(+"123");             // 123
console.log(Boolean(true) ? 1 : 0); // 1

// Implicit conversion to Number
console.log("42" * 1);           // 42
console.log("5" - 1);            // 4
console.log(true + 0);           // 1
console.log(false * 10);         // 0
console.log("10" > 5);           // true


// === String Casting ===

// Explicit conversion to String
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log((123).toString());   // "123"
console.log(true.toString());    // "true"
console.log("" + 123);           // "123"

// Implicit conversion to String
console.log(123 + "abc");        // "123abc"
console.log(true + "!");         // "true!"
console.log(null + "");          // "null"
console.log([1, 2] + "");        // "1,2"


// === Boolean Casting ===

// Explicit conversion to Boolean
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(!!123);              // true

// Implicit conversion to Boolean (in conditions)
if ("hello") console.log("Truthy string");   // This prints
if ([]) console.log("Truthy array");         // This prints
console.log(!0);              // true
console.log(!"");             // true

// ----- Falsy (se convierten a false):
// false 
// 0
// -0
// 0n     // BigInt cero
// NaN
// ""
// null
// undefined
//--- Truthy (todo lo demás):
// "hola"
// []
// {}
// 1
// -3.14
// "0"
// "false"
// [0]
// function() {}


// === Object Wrapping ===

// Wrapping primitives in Object types (not recommended)
const objNum = new Number(123);
console.log(typeof objNum);     // "object"
console.log(objNum == 123);     // true
console.log(objNum === 123);    // false

const objStr = new String("abc");
console.log(typeof objStr);     // "object"
console.log(objStr == "abc");   // true
console.log(objStr === "abc");  // false


// === Object to Primitive Coercion ===

const obj1 = {
  toString() {
    return "custom string";
  }
};
console.log("Result: " + obj1); // "Result: custom string"

const obj2 = {
  valueOf() {
    return 10;
  }
};
console.log(obj2 + 5); // 15


// === Implicit Coercion in Loose Equality (==)

console.log("" == 0);            // true
console.log("1" == true);        // true
console.log(null == undefined);  // true
console.log([] == false);        // true
console.log([] == "");           // true
console.log([0] == 0);           // true
console.log([1] == true);        // true
console.log([null] == 0);        // true
console.log({} == "[object Object]"); // true (string coercion)

// === Safe comparison ===
console.log("1" === true);       // false
console.log(0 === false);        // false
