import swaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3001;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    info: {
      title: "nodebooks API",
      version: "1.0.0",
      description: "API documentation for my Express application",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // Replace with your server URL
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to your API route files containing JSDoc comments
};

export const specs = swaggerJsDoc(options);

module.exports = {
  specs: specs,
};
