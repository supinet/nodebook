import favoriteService from "../services/favorite";

class FavoriteController {
  constructor() {}

  getFavorites(req: any, res: any): void {
    try {
      const books = favoriteService.getAllFarovites();
      res.send(books);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  createFavorite(req: any, res: any) {
    try {
      const id = req.params.id;
      const book = favoriteService.createFavorite(id);
      res.send(book).status(201);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  deleteFavorite(req: any, res: any) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        favoriteService.deleteFavorite(id);
        res.status(200).send({ message: "Favorite deleted successfully" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default new FavoriteController();
