// ==========================================
// 
// This JavaScript function converts meters to centimeters.
//
// File: metersToCentimeters.js
// Author: Anthony Bañon
// Created: 2025-06-21
// Last Updated: 2025-06-21
// ==========================================

const CONVERSION_FACTOR = 100;

function metersToCentimeters(){
    
    const meters = document.getElementById("meters");
    console.log(meters.value);
    let centimeter = meters.value * CONVERSION_FACTOR;
    const result = document.getElementById("result__centimeters");
    result.textContent= `${centimeter} cm`;
    console.log(centimeter);
}


function centimetersToMeters(){
    
    const centimeters = document.getElementById("centimeters");
    console.log(centimeters.value);
    let meter = centimeters.value / CONVERSION_FACTOR;
    const result = document.getElementById("result__meters");
    result.textContent= `${meter} m`;
    console.log(meter);
}
