import { Router } from "express";
import favoriteController from "../controllers/favorite";

export const favoritesRouter = Router();

/**
 * @openapi
 * /favorites:
 *   get:
 *     summary: Retrieve a list of favorite books
 *     responses:
 *       200:
 *         description: A list of favorite books.
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
favoritesRouter.get("/", favoriteController.getFavorites);

/**
 * @openapi
 * /favorites/{id}:
 *    post:
 *      summary: Creates a new favorite.
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
favoritesRouter.post("/:id", (req, res) => {
  favoriteController.createFavorite(req, res);
});

/**
 * @openapi
 * /favorites/{id}:
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
favoritesRouter.delete("/:id", (req, res) => {
  favoriteController.deleteFavorite(req, res);
});

module.exports = { favoritesRouter: favoritesRouter };
