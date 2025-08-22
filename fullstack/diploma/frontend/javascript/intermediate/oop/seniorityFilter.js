// ========================================== //
// Description: Seniority Filter for MZZ Company
// File: seniorityFilter.js
// Author: Anthony Bañon
// Created: 2025-08-21
// Last Updated: 2025-08-21
// ========================================== //

/*
Statement:
Seniority Filter:
In the MZZ company, count how many vendors
have more than 10 years of service.
*/

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

class Vendor {
    #name;
    #years;

    constructor(name, years) {
        this.#name = name;
        this.#years = years;
    }

    getYears() {
        return this.#years;
    }

    getName() {
        return this.#name;
    }
}

async function SeniorityFilter() {
    let vendors = [];

    while (true) {
        const name = await rl.question('Enter vendor name (0 to finish): ');
        if (name === "0") break;

        const years = parseInt(await rl.question('Enter years of service: '), 10);

        if (!isNaN(years)) {
            vendors.push(new Vendor(name, years));
        } else {
            console.log("Invalid number. Try again.");
        }
    }

    // Count vendors with more than 10 years of service
    const count = vendors.filter(v => v.getYears() > 10).length;

    console.log(`\nTotal vendors with more than 10 years of service: ${count}`);

    rl.close();
}

SeniorityFilter();
