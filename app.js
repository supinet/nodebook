const express = require('express');
const booksRouter = require('./routes/books');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig'); // Import your Swagger configuration

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World Jupter!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});