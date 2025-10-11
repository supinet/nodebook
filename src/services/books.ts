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
    const book = bookArray.find((b: any) => b.id === id);
    return book;
  }
}

export default new BookService();
