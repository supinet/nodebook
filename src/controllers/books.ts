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
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        const livro = booksService.getBookById(id);
        res.send(livro);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  createBook(req: any, res: any) {
    try {
      const payload = req.body;
      const book = booksService.createBook(payload);
      res.send(book);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  updateBook(req: any, res: any) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        const bookChanges = req.body;
        booksService.updateBook(bookChanges, id);
        res.status(200).send({ message: "Book updated successfully" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  deleteBook(req: any, res: any) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        booksService.deleteBook(id);
        res.status(200).send({ message: "Book deleted successfully" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default new BooksController();
