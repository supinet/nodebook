import fs from "fs";

export function getBooks(req: any, res: any) {
  try {
    const books = fs.readFileSync("books.json", "utf-8");
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getBooks,
};
