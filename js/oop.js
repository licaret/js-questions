class Book {
  #title;
  #author;
  #publicationYear;
  static #counter = 0;

  constructor(title, author, publicationYear) {
    this.#title = title;
    this.#author = author;
    this.#publicationYear = publicationYear;
    Book.#counter++;
  }

  static getCounter() {
    return Book.#counter;
  }

  getTitle() {
    return this.#title;
  }

  toString() {
    return `${this.#title} by ${this.#author} in ${this.#publicationYear}`;
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log(book1.toString());
console.log(book2.toString());

console.log(book2.getTitle());

console.log(Book.getCounter());