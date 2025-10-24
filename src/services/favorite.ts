import fs from "fs";

class FavoriteService {
  constructor() {}

  getAllFarovites() {
    const books = fs.readFileSync("favorites.json", "utf-8");
    return books;
  }

  deleteFavorite(id: string) {
    let currentBooks = JSON.parse(fs.readFileSync("favorites.json", "utf-8"));
    const filteredBooks = currentBooks.filter((book: any) => book.id !== id);
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks));
  }

  createFavorite(id: any) {
    const books = JSON.parse(fs.readFileSync("books.json", "utf-8"));
    const favorites = JSON.parse(fs.readFileSync("favorites.json", "utf-8"));
    const book = books.find((book: any) => book.id === id);
    const newFavorites = [...favorites, book];
    fs.writeFileSync("favorites.json", JSON.stringify(newFavorites));
  }
}

export default new FavoriteService();
