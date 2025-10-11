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
 *                     type: string
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
 *           type: string
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
 * /books:
 *   patch:
 *     summary: Update a book
 *     responses:
 *       200:
 *         description: A object of book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
booksRouter.patch("/", (req, res) => {
  res.send("PATCH request to books endpoint");
});

/**
 * @openapi
 * /books:
 *   delete:
 *     summary: Delete a book
 *     responses:
 *       200:
 *         description: A object of book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
booksRouter.delete("/", (req, res) => {
  res.send("DELETE request to books endpoint");
});

module.exports = { booksRouter: booksRouter };
