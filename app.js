const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');

// ! ------------ Database Connection ------------
mongoose.connect(process.env.DB_CONNECTION_STRING, () => console.log('DB: Connected.'), {
    useNewUrlParser: true,
});

// ! ------------ Middlewares ------------
app.use(bodyParser.json());

// ! ------------ Models ------------
const User = require('./models/user');

// ! ------------ Routing ------------
app.use('/fruits', require('./routes/fruits'));
app.use('/milkshakes', require('./routes/milkshakes'));
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.send('Got to the home.');
});

app.listen(3000);
