// ==========================================
// 
// This script determines the grade, attendance, 
// participation, and corresponding medal for a student 
// based on their performance metrics.
//
// File: gradingAndBadge.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


const grade = "A";
const attendancePercent = 0.92;
const participation = "active";

const gradeList = {
  A: "excellent",
  B: "good",
  C: "acceptable",
  D: "low performance",
  F: "fail"
};

function getAttendanceLabel(percent) {
    /*
     * Function to determine the attendance label
     *
     * @param {number} percent - The attendance percentage.
     * @returns {string} The attendance label.
     */
    
  if (percent >= 0.9) return "high";
  if (percent >= 0.75) return "average";
  return "low";
}

const attendance = getAttendanceLabel(attendancePercent);


// Mapping the grade, attendance, and participation to a medal
const medalMap = {
  "A-high-active": "Platinum Medal",
  "A-high-moderate": "Gold Medal",
  "A-high-no": "Silver Medal",
  "A-average-active": "Gold Medal",
  "A-average-moderate": "Gold Medal",
  "A-average-no": "Silver Medal",
  "A-low-active": "Gold Medal",
  "A-low-moderate": "Gold Medal",
  "A-low-no": "Silver Medal",

  "B-high-active": "Gold Medal",
  "B-high-moderate": "Gold Medal",
  "B-high-no": "Silver Medal",
  "B-average-active": "Silver Medal",
  "B-average-moderate": "Silver Medal",
  "B-average-no": "Bronze Medal",
  "B-low-active": "Bronze Medal",
  "B-low-moderate": "Bronze Medal",
  "B-low-no": "Bronze Medal",

  "C-high-active": "Silver Medal",
  "C-high-moderate": "Silver Medal",
  "C-high-no": "Bronze Medal",
  "C-average-active": "Bronze Medal",
  "C-average-moderate": "Bronze Medal",
  "C-average-no": "Bronze Medal",
  "C-low-active": "Bronze Medal",
  "C-low-moderate": "Bronze Medal",
  "C-low-no": "Bronze Medal"
};

// 🗝 Key format
const key = `${grade}-${attendance}-${participation}`;
const medal = medalMap[key] || "No Medal";

console.log(`Grade: ${gradeList[grade]} (${grade})`);
console.log(`Attendance: ${attendance} (${attendancePercent * 100}%)`);
console.log(`Participation: ${participation}`);
console.log(`Medal: ${medal}`);
