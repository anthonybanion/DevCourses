// ========================================== //
// Description: Sales Totalizer
// File: salesTotalizer.js
// Author: Anthony Bañon
// Created: 2025-08-21
// Last Updated: 2025-08-21
// ========================================== //

/*
Statement:
Sales Totalizer:
Enter prices and quantities for 5 items.
Calculate and print the total sales for each
and the overall total.
*/

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

class Item {
    static counter = 0;
    #id;
    #name;
    #price;
    #quantity;

    constructor(name, price, quantity = 0) {
        this.#id = ++Item.counter;
        this.#name = name;
        this.#price = parseFloat(price);
        this.#quantity = parseInt(quantity);
    }

    setQuantity(quantity) {
        this.#quantity = parseInt(quantity);
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    getQuantity() {
        return this.#quantity;
    }

    getTotal() {
        return this.#price * this.#quantity;
    }
}

// Product catalog
const catalog = [
    new Item("Rice", 200),
    new Item("Sugar", 350),
    new Item("Bread", 150),
    new Item("Coffee", 20),
    new Item("Oil", 450),
];

async function SalesTotalizer() {
    let overallTotal = 0;

    console.log("===== MZZ Store Menu =====");
    catalog.forEach(item => {
        console.log(`${item.getId()}. ${item.getName()} - $${item.getPrice()}`);
    });

    console.log("\nEnter quantities for each product:\n");

    // Order quantities of the 5 products
    for (const item of catalog) {
        const qty = await rl.question(`Quantity for ${item.getName()}: `);
        item.setQuantity(qty);

        const total = item.getTotal();
        console.log(`--> ${item.getName()} total: $${total}`);
        overallTotal += total;
    }

    console.log("\n===========================");
    console.log(`Overall total: $${overallTotal}`);
    console.log("===========================\n");

    rl.close();
}

SalesTotalizer();
