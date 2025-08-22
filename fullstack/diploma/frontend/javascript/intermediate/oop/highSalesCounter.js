// ==========================================
// 
// Description: High Sales Counter
//
// File: highSalesCounter.js
// Author: Anthony Bañon
// Created: 2025-08-20
// Last Updated: 2025-08-20
// ==========================================



/*Statement:
High Sales Counter:
Count how many employees made sales 
over 100,000 during the month. 
*/

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Employee class with encapsulation for name and sales
class Employee {
    #name;
    #sales;

    constructor(name, sales) {
        this.#name = name;
        this.#sales = sales;
    }

    getSales() {
        return this.#sales;
    }

    getName() {
        return this.#name;
    }
}

async function highSalesCounter() {
    let count = 0;
    let employees = []; // store employees if you want to use them later

    while (true) {
        const name = await rl.question("Enter employee name: ");
        const salesInput = await rl.question("Enter the employee's sales per month: ");
        const sales = parseFloat(salesInput);

        if (isNaN(sales)) {
            console.log("❌ Invalid number. Please try again.");
            continue; // skip this iteration and re-ask
        }

        const employee = new Employee(name, sales);
        employees.push(employee);

        if (employee.getSales() > 100000) { // fixed number, not 100.000
            count++;
        }

        const respond = await rl.question("Do you want to add another employee? (n to exit): ");
        if (respond.toLowerCase() === 'n') break;
    }

    console.log(`✅ The number of employees with sales over 100,000: ${count}`);
    rl.close();
} 

highSalesCounter();
