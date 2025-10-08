import swaggerJSDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3001;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "nodebooks API",
      version: "1.0.0",
      description: "API documentation for my Express application",
    },
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
