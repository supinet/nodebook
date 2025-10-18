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
    const books = JSON.parse(fs.readFileSync("books.json", "utf-8"));
    const newBooks = [...books, newBook];
    fs.writeFileSync("books.json", JSON.stringify(newBooks));
  }

  updateBook(bookChanges: any, id: string) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json", "utf-8"));
    const indexChange = currentBooks.findIndex((book: any) => book.id === id);
    const currentBookChanged = { ...currentBooks[indexChange], ...bookChanges };
    currentBooks[indexChange] = currentBookChanged;
    fs.writeFileSync("books.json", JSON.stringify(currentBooks));
  }

  deleteBook(id: string) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json", "utf-8"));
    const filteredBooks = currentBooks.filter((book: any) => book.id !== id);
    fs.writeFileSync("books.json", JSON.stringify(filteredBooks));
  }
}

export default new BookService();
