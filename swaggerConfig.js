// swaggerConfig.js
const swaggerJsDoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 3001;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Specify the OpenAPI version
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation for my Express application',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`, // Replace with your server URL
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to your API route files containing JSDoc comments
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;