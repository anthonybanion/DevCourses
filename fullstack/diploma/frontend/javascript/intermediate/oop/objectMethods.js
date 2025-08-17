// Define a simple class
class Persona {
  constructor(nombre, edad, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
  }
}

const persona1 = new Persona("Anthony", 25, "12345678");

console.log("========== BASIC INSPECTION ==========");

// Object.keys -> returns own enumerable property names
console.log(Object.keys(persona1)); 
// ["nombre", "edad", "dni"]

// Object.values -> returns values of enumerable properties
console.log(Object.values(persona1)); 
// ["Anthony", 25, "12345678"]

// Object.entries -> returns [key, value] pairs
console.log(Object.entries(persona1)); 
// [["nombre","Anthony"],["edad",25],["dni","12345678"]]

// Object.fromEntries -> creates object from entries
const entries = [["name", "Alice"], ["age", 30]];
console.log(Object.fromEntries(entries));
// { name: "Alice", age: 30 }


console.log("\n========== CREATION & COPYING ==========");

// Object.assign -> copy properties into a new object
const copy = Object.assign({}, persona1);
console.log(copy); 
// { nombre: 'Anthony', edad: 25, dni: '12345678' }

// Object.create -> create object with prototype
const proto = { greet() { return "Hello from prototype!"; } };
const objWithProto = Object.create(proto);
console.log(objWithProto.greet()); 
// "Hello from prototype!"


console.log("\n========== PROPERTY DEFINITIONS ==========");

// Object.defineProperty -> define single property with descriptor
const user = {};
Object.defineProperty(user, "id", { value: 1, writable: false });
console.log(user.id); // 1
user.id = 2; // ignored because writable: false
console.log(user.id); // still 1

// Object.defineProperties -> define multiple properties
Object.defineProperties(user, {
  name: { value: "John", writable: true },
  role: { value: "Admin", writable: false }
});
console.log(user); // { id: 1, name: "John", role: "Admin" }

// Object.getOwnPropertyDescriptor -> inspect one property
console.log(Object.getOwnPropertyDescriptor(user, "id"));
// { value: 1, writable: false, enumerable: false, configurable: false }

// Object.getOwnPropertyDescriptors -> inspect all
console.log(Object.getOwnPropertyDescriptors(user));


// Object.getOwnPropertyNames -> get all property names (including non-enumerable)
console.log(Object.getOwnPropertyNames(user));
// [ 'id', 'name', 'role' ]

// Object.getOwnPropertySymbols -> get symbol properties
const sym = Symbol("secret");
user[sym] = "hidden";
console.log(Object.getOwnPropertySymbols(user));
// [ Symbol(secret) ]


console.log("\n========== PROTOTYPES ==========");

// Object.getPrototypeOf -> get prototype of an object
console.log(Object.getPrototypeOf(persona1)); 
// Persona {}

// Object.setPrototypeOf -> set a new prototype
const newProto = { salute() { return "Hey!"; } };
Object.setPrototypeOf(persona1, newProto);
console.log(persona1.salute()); // "Hey!"


console.log("\n========== COMPARISONS ==========");

// Object.is -> strict comparison (handles NaN and +0/-0)
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(25, 25)); // true


console.log("\n========== EXTENSIBILITY & SEALING ==========");

// Object.isExtensible -> check if we can add properties
console.log(Object.isExtensible(persona1)); // true

// Object.preventExtensions -> block adding new properties
Object.preventExtensions(persona1);
persona1.newProp = "test"; // ignored
console.log(persona1.newProp); // undefined

// Object.seal -> block adding/removing properties, allow changes
Object.seal(persona1);
persona1.nombre = "Lucas"; // allowed
delete persona1.edad;      // ignored
console.log(persona1); // { nombre: "Lucas", edad: 25, dni: "12345678" }

// Object.isSealed -> check if sealed
console.log(Object.isSealed(persona1)); // true

// Object.freeze -> block all modifications
Object.freeze(persona1);
persona1.edad = 99; // ignored
console.log(persona1.edad); // 25

// Object.isFrozen -> check if frozen
console.log(Object.isFrozen(persona1)); // true


