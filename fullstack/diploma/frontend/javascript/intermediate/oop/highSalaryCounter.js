// ==========================================
// 
// Description: High Salary Counter
//
// File: highSalaryCounter.js
// Author: Anthony Bañon
// Created: 2025-08-18
// Last Updated: 2025-08-18
// ==========================================


/*Statement:
High Salary Counter:
Count how many employees have a salary over $25,000. 
End input when the employee ID is zero.
*/


import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

class Employee {
    #id;
    #name;
    #salary;
    constructor(id, name, salary) {
        this.#id = id;
        this.#name = name;
        this.#salary = salary;
    }

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }

    addSalary(salary) {
        this.#salary = salary;
    }
}

async function highSalaryCounter() {
    let count = 0;

    while (true) {
        const id = parseInt(await rl.question("Enter employee ID (0 to stop): "));

        if (id === 0) break;

        const name = await rl.question("Enter employee name: ");
        const salary = parseFloat(await rl.question("Enter employee salary: "));

        const employee = new Employee(id, name, salary);

        if (employee.getSalary() > 25000) {
            count++;
        }
    }

    console.log(`Number of employees with salary over $25,000: ${count}`);
    rl.close();
}

highSalaryCounter();