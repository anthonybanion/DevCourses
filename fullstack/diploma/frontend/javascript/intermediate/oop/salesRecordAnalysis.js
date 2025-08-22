// ==========================================
// 
// Sales Record Analysis
//
// File: salesRecordAnalysis.js
// Author: Anthony Bañon
// Created: 2025-08-17
// Last Updated: 2025-08-17
// ==========================================


/* Statement: 
Sales Record Analysis:
For 4 vendors, determine who made the highest and lowest sale.
End input when the sale amount is zero.
*/

class Vendor {
    constructor(name) {
        this.name = name;
        this.sales = [];
    }

    addSale(amount) {
        this.sales.push(amount);
    }

    getTotalSales() {
        return this.sales.reduce((acc, sale) => acc + sale, 0);
    }

    getHighestSale() {
        return this.sales.length > 0 ? Math.max(...this.sales) : null;
    }

    getLowestSale() {
        return this.sales.length > 0 ? Math.min(...this.sales) : null;
    }
}

function analyzeSales(vendors) {
    // Filter only those that have sales
    const vendorsWithSales = vendors.filter(vendor => vendor.sales.length > 0);

    // If none have sales, return null
    if (vendorsWithSales.length === 0) {
        return {
            highest: null,
            lowest: null
        };
    }

    let highestSaleVendor = vendorsWithSales[0];
    let lowestSaleVendor = vendorsWithSales[0];

    vendorsWithSales.forEach(vendor => {
        if (vendor.getHighestSale() > highestSaleVendor.getHighestSale()) {
            highestSaleVendor = vendor;
        }
        if (vendor.getLowestSale() < lowestSaleVendor.getLowestSale()) {
            lowestSaleVendor = vendor;
        }
    });

    return {
        highest: {
            vendor: highestSaleVendor.name,
            amount: highestSaleVendor.getHighestSale()
        },
        lowest: {
            vendor: lowestSaleVendor.name,
            amount: lowestSaleVendor.getLowestSale()
        }
    };
}

// Example usage:
const vendors = [
    new Vendor('Alice'),
    new Vendor('Bob'),
    new Vendor('Charlie'),
    new Vendor('Diana')
];

vendors[0].addSale(100);
vendors[0].addSale(200);
vendors[1].addSale(1509);
vendors[2].addSale(300);
vendors[3].addSale(400);
vendors[1].addSale(0); // End input with zero sale

const result = analyzeSales(vendors);

if (result.highest && result.lowest) {
    console.log(`Highest Sale: ${result.highest.vendor} with amount ${result.highest.amount}`);
    console.log(`Lowest Sale: ${result.lowest.vendor} with amount ${result.lowest.amount}`);
} else {
    console.log("No sales recorded for any vendor.");
}