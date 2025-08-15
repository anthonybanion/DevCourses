// ==========================================
// 
// This script evaluates a student's academic 
// performance based on their grade and attendance.
//
// File: academicGrading.js
// Author: Anthony Bañon
// Created: 2025-08-08
// Last Updated: 2025-08-08
// ==========================================


// Academic Grading System
// Given:
//     Student's final grade (0 to 100)
//     Attendance (percentage from 0 to 100)
// Rules:
// If the grade is < 40 → "Fail"
// If the grade is between 40 and 59:
//     and attendance < 75 → "Fail due to attendance"
//     and attendance ≥ 75 → "Make-up"
// If the grade is ≥ 60:
//     and attendance ≥ 75 → "Pass"
//     and attendance < 75 → "Conditional pass"


// Constants for grading thresholds
const MIN_GRADE_TO_RECOVER = 40;
const MIN_PASSING_GRADE = 60;
const MIN_ATTENDANCE = 75;

let grade = 70;
let attendance = 78;
let hasEnoughAttendance = attendance >= MIN_ATTENDANCE;

// Determine the student's academic status based on grade and attendance
if(grade < MIN_GRADE_TO_RECOVER) {
    console.log("Fail")
} else if(grade < MIN_PASSING_GRADE) {
    console.log(hasEnoughAttendance ? "Make-up" : "Fail due to attendance");
} else {
    console.log(hasEnoughAttendance ? "Pass" : "Conditional pass");
}