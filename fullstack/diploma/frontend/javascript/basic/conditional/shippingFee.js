// ==========================================
// 
// Description: This script calculates the shipping 
// fee based on the user's membership status, 
// purchase total, and location.
//
// File: shippingFee.js
// Author: Anthony Bañon
// Created: 2025-08-08
// Last Updated: 2025-08-08
// ==========================================


// Shipping Rate Calculation
// Given:
//  - Total purchase amount
//  - If the customer is a Premium customer
//  - If the destination is local or international
// Rules:
//  - If the customer is a Premium customer → free shipping.
//  - If the customer is not a Premium customer:
//    - Local:
//      - Purchase < $50 → $10 shipping
//      - Purchase ≥ $50 → free shipping
//    - International:
//      - Always $25 shipping
// ==========================================


// Constants for shipping fees
const Min_PURCHASE_FOR_FREE_SHIPPING = 50;
const LOCAL_SHIPPING_COST = 10;
const INTERNATIONAL_SHIPPING_COST = 25;

// Example variables
let isPremium = true;
let totalPurchase = 100;
let isLocal = true;

// Determine shipping fee based on membership, purchase total, and location
if (isPremium) {
    console.log("Shipping is free for premium members.");
} else {
    if (isLocal) {
        console.log(totalPurchase >= Min_PURCHASE_FOR_FREE_SHIPPING ? "free shipping" : `$${LOCAL_SHIPPING_COST} shipping`);
    } else {
        console.log(`Always $${INTERNATIONAL_SHIPPING_COST} shipping`);
    }
}