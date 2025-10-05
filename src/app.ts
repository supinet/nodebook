// @ts-check
import express from "express";
import { booksRouter } from "./routes/books";
import swaggerUi from "swagger-ui-express";
import { specs } from "../swaggerConfig";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/books", booksRouter);

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
