const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;
