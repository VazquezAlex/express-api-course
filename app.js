// Third party imports.
const express = require('express');

// Local imports.
const usersRouter = require('./routes/user');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());

// Routes.
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);

// Add listener.
app.listen(3500, () => {
    console.log('Listening');
});