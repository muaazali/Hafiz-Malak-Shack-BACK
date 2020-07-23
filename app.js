const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

// ! ------------ Database Connection ------------
mongoose.connect(process.env.DB_CONNECTION_STRING, () => console.log('DB: Connected.'), {
    useNewUrlParser: true,
});

// ! ------------ Routing ------------
app.use('/fruits', require('./routes/fruits'));
app.use('/milkshakes', require('./routes/milkshakes'));

app.get('/', (req, res) => {
    res.send('Got to the home.');
});

app.listen(3000);
