import { Router } from "express";
import { getBooks } from "../controllers/books";

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
booksRouter.get("/", getBooks);

/**
 * @openapi
 * /books:
 *   post:
 *     summary: Save a book
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
booksRouter.post("/", (req, res) => {
  res.send("POST request to books endpoint");
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

module.exports = { booksRouter };
