/*Statemen: 
**Stock Value Calculator:**
    From COST and QUANTITY arrays, calculate the total stock value of a supermarket.*/


const COST = [100, 50, 200];
const QUANTITY = [10, 20, 5];

let totalStockValue = 0;

for (let i = 0; i < COST.length; i++) {
    totalStockValue += COST[i] * QUANTITY[i];
}

console.log("Total Stock Value:", totalStockValue);
