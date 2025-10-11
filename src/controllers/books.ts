import booksService from "../services/books";

class BooksController {
  constructor() {}

  getBooks(req: any, res: any): void {
    try {
      const books = booksService.getBooks();
      res.send(books);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  getBookById(req: any, res: any) {
    const id = req.params.id;
    const livro = booksService.getBookById(id);
    res.send(livro);
  }
}

export default new BooksController();
