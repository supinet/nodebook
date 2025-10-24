// @ts-check
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { booksRouter } from "./src/routes/books";
import { specs } from "./swagger";
import { favoritesRouter } from "./src/routes/favorite";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// Swagger UI endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/books", booksRouter);
app.use("/favorites", favoritesRouter);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World Jupter!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `API documentation available at http://localhost:${PORT}/api-docs`
  );
});
