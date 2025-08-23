// ==========================================
// 
// Description: Employee Payroll System
//
// File: employeePayrollSystem.js
// Author: Anthony Bañon
// Created: 2025-08-23
// Last Updated: 2025-08-23
// ==========================================


/* Statement: 
Employee Payroll System:
- Create an Employee class with name, hourly rate, and hours worked.
- Store multiple employees in an array.
- Calculate weekly salary for each employee.
- Display total payroll for the company.
*/

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const HOURLY_RATE = 30.5;

class Employee {
    #name;
    #hoursWorked;

    constructor(name, hoursWorked) {
        this.#name = name;
        this.#hoursWorked = hoursWorked;
    }

    getName() {
        return this.#name;
    }

    getHoursWorked() {
        return this.#hoursWorked;
    }

    calculateWeeklySalary() {
        return this.#hoursWorked * HOURLY_RATE;
    }
}

async function payrollSystem() {
    const employees = [];
    let totalPayroll = 0;

    while (true) {
        const name = await rl.question('Enter employee name (0 to stop): ');
        if (name === '0') break;

        const hoursWorked = parseFloat(await rl.question('Enter employee hours worked: '));

        const employee = new Employee(name, hoursWorked);
        employees.push(employee);
        totalPayroll += employee.calculateWeeklySalary();
    }

    console.clear();
    console.log("\n=== Payroll Report ===");
    employees.forEach(employee => {
        console.log(
            `Name: ${employee.getName()} | Weekly Salary: $${employee.calculateWeeklySalary().toFixed(2)}`
        );
    });

    console.log("\n===========================");
    console.log(`Total payroll for the company: $${totalPayroll.toFixed(2)}`);
    console.log("===========================\n");

    rl.close();
}

payrollSystem();
