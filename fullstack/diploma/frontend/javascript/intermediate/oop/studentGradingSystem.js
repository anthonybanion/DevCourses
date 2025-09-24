// ==========================================
//
// Description: Student Grading System (OOP)
//
// File: studentGradingSystem.js
// Author: Anthony Bañon
// Created: 2025-09-24
// Last Updated: 2025-09-24
// ==========================================

/*Statement:
Student Grading System (OOP):

- Create a Student class with name and an array of grades.
- Calculate the average grade for each student.
- Count how many students passed (average ≥ 60). */

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Create an interface for reading user input from console
const rl = readline.createInterface({ input, output });

class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades; // store the array of grades
  }

  // Return student's name
  getName() {
    return this.name;
  }

  // Calculate and return the average grade
  getAverage() {
    if (this.grades.length === 0) return 0; // safeguard
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / this.grades.length).toFixed(2);
  }

  // Check if student passed (average >= 60)
  hasPassed() {
    return this.getAverage() >= 60;
  }
}

async function studentGradingSystem() {
  const students = [];
  let totalGrades = 0;
  let totalStudents = 0;

  while (true) {
    // Ask for student's name
    const name = await rl.question(
      "Enter student name (or 'exit' to finish): "
    );
    if (name.toLowerCase() === "exit") break;

    // Collect 3 grades for this student
    const grades = [];
    for (let i = 1; i <= 3; i++) {
      const grade = parseFloat(
        await rl.question(`Enter grade ${i} for ${name}: `)
      );
      grades.push(grade);
      totalGrades += grade;
    }

    // Create new student and add to list
    const student = new Student(name, grades);
    students.push(student);
    totalStudents++;
  }

  console.log("\nStudent Averages:");
  students.forEach((student) => {
    console.log(
      `${student.getName()}: ${student.getAverage()} ${
        student.hasPassed() ? "(Passed)" : "(Failed)"
      }`
    );
  });

  // Calculate overall average of all grades
  const overallAverage = (totalGrades / (totalStudents * 3)).toFixed(2);
  console.log(`\nOverall Average: ${overallAverage}`);

  // Count how many students passed
  const passedCount = students.filter((s) => s.hasPassed()).length;
  console.log(`Students Passed: ${passedCount}`);

  rl.close();
}

// Run the grading system
studentGradingSystem();
