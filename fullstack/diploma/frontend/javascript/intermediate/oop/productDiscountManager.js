// ==========================================
//
// A JavaScript program that defines a Product
//  class to manage products with discounts.
//
// File: productDiscountManager.js
// Author: Anthony Bañon
// Created: 2025-09-09
// Last Updated: 2025-09-09
// ==========================================

/*Statement:
**Product Discount Manager (OOP):**

- Create a Product class with name, price, and discount.
- Store multiple products in an array.
- Apply the discount to each product and calculate the final price.
- Show which product has the highest discount.*/

// Product class
class Product {
  #name;
  #price;
  #discount; // corrected typo
  constructor(name, price, discount) {
    this.#name = name;
    this.#price = price;
    this.#discount = discount;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getDiscount() {
    return this.#discount;
  }

  calculateDiscountAmount() {
    return this.#price * this.#discount;
  }

  calculateFinalPrice() {
    return this.#price - this.calculateDiscountAmount();
  }
}

// Create multiple products
const products = [
  new Product("Papa", 200, 0.25),
  new Product("Leche", 150, 0.1),
  new Product("Pan", 50, 0.3),
];

// Show info and calculate final price
products.forEach((product) => {
  console.log(`Product: ${product.getName()}`);
  console.log(`Original Price: $${product.getPrice().toFixed(2)}`);
  console.log(`Discount: $${product.calculateDiscountAmount().toFixed(2)}`);
  console.log(`Final Price: $${product.calculateFinalPrice().toFixed(2)}`);
  console.log("-------------------------");
});

// Find product with the highest discount
let maxDiscountProduct = products[0];
products.forEach((product) => {
  if (
    product.calculateDiscountAmount() >
    maxDiscountProduct.calculateDiscountAmount()
  ) {
    maxDiscountProduct = product;
  }
});

console.log(
  `✅ Product with highest discount: ${maxDiscountProduct.getName()} ($${maxDiscountProduct
    .calculateDiscountAmount()
    .toFixed(2)})`
);
