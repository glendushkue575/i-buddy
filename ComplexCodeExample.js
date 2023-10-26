/*
Filename: ComplexCodeExample.js
Description: This code demonstrates a complex implementation of a library management system.
*/

// Class representing a library
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.members = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  addMember(member) {
    this.members.push(member);
  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  displayBooks() {
    console.log(`Books available in ${this.name}:`);
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    });
  }
}

// Class representing a book
class Book {
  constructor(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
  }
}

// Class representing a member who can borrow books
class Member {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.borrowedBooks = [];
  }

  borrowBook(book, library) {
    if (this.borrowedBooks.length < 3 && library.books.includes(book)) {
      this.borrowedBooks.push(book);
      library.removeBook(book);
      console.log(`${this.name} has successfully borrowed ${book.title}`);
    } else {
      console.log(`Sorry, ${this.name}, you cannot borrow this book at the moment.`);
    }
  }

  returnBook(book, library) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      library.addBook(book);
      console.log(`${this.name} has successfully returned ${book.title}`);
    } else {
      console.log(`${this.name}, you have not borrowed ${book.title}`);
    }
  }
}

// Create a library object
const myLibrary = new Library("MyLibrary", "123 Main St");

// Create some book objects
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
const book3 = new Book("1984", "George Orwell", "Science Fiction", 1949);
const book4 = new Book("Pride and Prejudice", "Jane Austen", "Romance", 1813);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

// Create some member objects
const member1 = new Member("John Doe", 25, "456 Elm St");
const member2 = new Member("Jane Smith", 30, "789 Oak St");

// Add members to the library
myLibrary.addMember(member1);
myLibrary.addMember(member2);

// Display books available in the library
myLibrary.displayBooks();

// Member borrows a book
member1.borrowBook(book1, myLibrary);

// Display books available in the library after borrowing
myLibrary.displayBooks();

// Member returns a book
member1.returnBook(book1, myLibrary);

// Display books available in the library after returning
myLibrary.displayBooks();
