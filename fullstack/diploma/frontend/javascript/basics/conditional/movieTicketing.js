// ==========================================
// 
// This script calculates the final price of 
// a movie ticket based on the customer's type, 
// day of the week, and whether the ticket is 
// purchased online.
//
// File: movieTicketing.js
// Author: Anthony Bañon
// Created: 2025-08-09
// Last Updated: 2025-08-09
// ==========================================


const customer = "senior";
const dayOfTheWeek = "Friday";
const isOnline = false;

// Tabla de precios base
const basePrices = {
    student: 350,
    senior: 300,
    regular: 500
};

// Función para calcular el descuento según el día y compra online
function calculateDiscountForDayOfWeek(day, isOnline) {
    let discount = 0;

    switch (day) {
        case "Monday":
            discount = 0.10;
            break;
        case "Wednesday":
            discount = 0.15;
            if (isOnline) {
                discount += 0.05; // Acumulativo especial
            }
            break;
        case "Friday":
            discount = 0.05;
            break;
        // Otros días: descuento 0
        default:
            discount = 0;
            break;
    }
    return discount;
}

// Lógica principal
const basePrice = basePrices[customer] || 0; // Valor por defecto 0 si el cliente no está en la tabla
const discountRate = calculateDiscountForDayOfWeek(dayOfTheWeek, isOnline);
const finalPrice = basePrice - (basePrice * discountRate);

// Salida
console.log(`Base Price: $${basePrice}`);
console.log(`Discount: ${(discountRate * 100).toFixed(0)}%`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);
