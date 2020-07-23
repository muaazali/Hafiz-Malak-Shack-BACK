const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('All the users.');
});

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    newUser
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.send('An error occurred.');
        });
});

module.exports = router;
