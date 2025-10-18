import { Router } from "express";
import booksController from "../controllers/books";

export const booksRouter = Router();

/**
 * @openapi
 * /books:
 *   get:
 *     summary: Retrieve a list of books
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
booksRouter.get("/", booksController.getBooks);

/**
 * @openapi
 * /books/{id}:
 *   get:
 *     summary: Retrieve a book
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: The book ID.
 *     responses:
 *       200:
 *         description: A book.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
booksRouter.get("/:id", booksController.getBookById);

/**
 * @openapi
 * /books:
 *    post:
 *      summary: Creates a new book.
 *      requestBody:
 *        description: Optional description in *Markdown*
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *              description: Creates a new book.
 *      responses:
 *        201:
 *        description: Created
 *
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required: true
 *       properties:
 *         id:
 *           type: integer
 *           description: The book ID.
 *         name:
 *           type: string
 *           description: The book name.
 * */
booksRouter.post("/", (req, res) => {
  booksController.createBook(req, res);
});

/**
 * @openapi
 * /books/{id}:
 *  parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *        type: integer
 *      description: The ID of the book to update.
 *  patch:
 *    summary: Partially update a book
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *            description: update a existing book.
 *    responses:
 *      '200':
 *        description: Book updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      '400':
 *        description: Invalid JSON Patch document or operation
 *      '404':
 *        description: Book not found
 *
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
booksRouter.patch("/:id", (req, res) => {
  booksController.updateBook(req, res);
});

/**
 * @openapi
 * /books/{id}:
 *  parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *        type: integer
 *      description: The ID of the book to update.
 *  delete:
 *    summary: Delete update a book
 *    responses:
 *      '200':
 *        description: Book removed successfully
 *      '404':
 *        description: Book not found
 */
booksRouter.delete("/:id", (req, res) => {
  booksController.deleteBook(req, res);
});

module.exports = { booksRouter: booksRouter };
