// Third party imports.
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

// Local imports.
const usersRouter = require('./routes/user');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
    .then(connection => {
        console.log('Connected successully')
    })
    .catch( console.log );

// Routes.
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);

// Add listener.
app.listen(3500, () => {
    console.log('Listening');
});