// ==========================================
// 
// This script implements a grading and badge 
// system based on student performance metrics such as grade, 
// attendance, and participation.
//
// File: gradingAndBadgeSystem.js
// Author: Anthony Bañon
// Created: 2025-08-10
// Last Updated: 2025-08-10
// ==========================================


const grade = "D";
const attendance = 0.65;
const participation = "moderate";

const gradeList = {
    A: "excellent",
    B: "good",
    C: "acceptable",
    D: "low performance",
    F: "fail"
};


function getAttendanceMessage(attendance){
    /*
     * Function to determine the attendance message 
     * based on the attendance percentage.
     *
     * @param {number} attendance - The attendance percentage.
     * @returns {string} The attendance message.
     */
    
    let attendanceMessage = "";
    switch(true){
        case attendance >= 0.9 && attendance <= 1.0:
            attendanceMessage = "high";
            break;
        case attendance >= 0.75 && attendance < 0.9:
            attendanceMessage = "average";
            break;
        case attendance > 0 && attendance < 0.75:
            attendanceMessage = "low";
            break;
        default:
            attendanceMessage = "Attendance data not available";
            break;
    }
    return attendanceMessage;
}

const attendanceMessage = getAttendanceMessage(attendance);

let medal = "";


// determining the medal based on grade, attendance, and participation
switch (grade) {
    case "A":
        switch (attendanceMessage) {
            case "high":
                switch (participation) {
                    case "active": medal = "Platinum Medal"; break;
                    case "moderate": medal = "Gold Medal"; break;
                    case "no": medal = "Silver Medal"; break;
                }
                break;   
            case "average":
                switch (participation) {
                    case "active": medal = "Gold Medal"; break;
                    case "moderate": medal = "Gold Medal"; break;
                    case "no": medal = "Silver Medal"; break;
                }
                break;
            case "low":
                switch (participation) {
                    case "active": medal = "Gold Medal"; break;
                    case "moderate": medal = "Silver Medal"; break;
                    case "no": medal = "Bronze Medal"; break;
                }
                break;
        }
        break;
    case "B":
        switch (attendanceMessage) {
            case "high":
                switch (participation) {
                    case "active": medal = "Gold Medal"; break;
                    case "moderate": medal = "Gold Medal"; break;
                    case "no": medal = "Silver Medal"; break;
                }
                break;
            case "average":
                switch (participation) {
                    case "active": medal = "Silver Medal"; break;
                    case "moderate": medal = "Silver Medal"; break;
                    case "no": medal = "Bronze Medal"; break;
                }
                break;
            case "low":
                switch (participation) {
                    case "active": medal = "Silver Medal"; break;
                    case "moderate": medal = "Bronze Medal"; break;
                    case "no": medal = "Bronze Medal"; break;
                }
                break;
        }
        break;
    case "C":
        switch (attendanceMessage) {
            case "high":
                switch (participation) {
                    case "active": medal = "Silver Medal"; break;
                    case "moderate": medal = "Silver Medal"; break;
                    case "no": medal = "Bronze Medal"; break;
                }
                break;
            case "average":
                switch (participation) {
                    case "active": medal = "Silver Medal"; break;
                    case "moderate": medal = "Bronze Medal"; break;
                    case "no": medal = "Bronze Medal"; break;
                }
                break;
            case "low":
                switch (participation) {
                    case "active": medal = "Bronze Medal"; break;
                    case "moderate": medal = "Bronze Medal"; break;
                    case "no": medal = "No Medal"; break;
                }
                break;
        }
        break;
    case "D":
        switch (attendanceMessage) {
            case "high":
                switch (participation) {
                    case "active": medal = "Bronze Medal"; break;
                    case "moderate": medal = "Bronze Medal"; break;
                    case "no": medal = "No Medal"; break;
                }
                break;
            case "average":
                switch (participation) {
                    case "active": medal = "Bronze Medal"; break;
                    case "moderate": medal = "No Medal"; break;
                    case "no": medal = "No Medal"; break;
                }
                break;
            case "low":
                medal = "No Medal";
                break;
        }
        break;
    case "F":
        medal = "No Medal";
        break;
    default:
        console.log("Invalid grade.");
}

console.log(`Grade: ${gradeList[grade]}`);
console.log(`Attendance: ${attendanceMessage}`);
console.log(`Participation: ${participation}`);
console.log(`Medal Awarded: ${medal}`);
