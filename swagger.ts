import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import YAML from "yamljs";

const PORT = process.env.PORT || 3001;

const swaggerOptions = {
  definition: {
    openapi: "3.0.4",
    info: {
      title: "nodebooks API",
      version: "1.0.0",
      description: "API documentation for my Express application",
    },
    path: path.resolve(__dirname, "docs", "openapi.yaml"),
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJSDoc(swaggerOptions);

module.exports = {
  specs: specs,
};
