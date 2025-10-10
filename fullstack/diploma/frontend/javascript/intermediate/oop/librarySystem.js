// ==========================================
// 
// Description: Library System using OOP in JavaScript
//
// File: librarySystem.js
// Author: Anthony Bañon
// Created: 2025-10-10
// Last Updated: 2025-10-10
// ==========================================


/*Statement:
Library System (OOP):

- Create a Book class with title, author, and available copies.
- Create a Library class to store books in an array.

Add methods to:
    - Borrow a book (decrease copies)
    - Return a book (increase copies)
    - Display all books with their availability.
*/

class Book{
    constructor(title, author, availableCopies){
        this.title = title;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && book.availableCopies > 0) {
            book.availableCopies--;
            console.log(`You borrowed "${book.title}"`);
        } else {
            console.log(`Sorry, "${title}" is not available.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.availableCopies++;
            console.log(`You returned "${book.title}"`);
        }
    }

    displayBooks() {
        console.log("Library Catalog:");
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author} (${book.availableCopies} copies available)`);
        });
    }
}

// Example usage:

const library = new Library();
const book1 = new Book("1984", "George Orwell", 3);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 2);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 0);
const book4 = new Book("Moby Dick", "Herman Melville", 1);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.displayBooks();

library.borrowBook("1984");
library.displayBooks();

library.returnBook("1984");
library.displayBooks();
