import fs from "fs";

class BooksController {
  constructor() {}

  getBooks(req: any, res: any): void {
    try {
      const books = fs.readFileSync("books.json", "utf-8");
      res.send(books);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default new BooksController();
