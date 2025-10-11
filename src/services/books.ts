import fs from "fs";

class BookService {
  constructor() {}

  getBooks() {
    const books = fs.readFileSync("books.json", "utf-8");
    return books;
  }

  getBookById(id: any) {
    const books = fs.readFileSync("books.json", "utf-8");
    const bookArray = JSON.parse(books);
    const book = bookArray.filter((b: any) => b.id === id);
    return book;
  }

  createBook(newBook: any) {
    const books = fs.readFileSync("books.json", "utf-8");
    const newBooks = [...books, newBook];
    const newBooksDb = fs.writeFileSync("books.json", JSON.stringify(newBooks));
    return newBooksDb;
  }
}

export default new BookService();
