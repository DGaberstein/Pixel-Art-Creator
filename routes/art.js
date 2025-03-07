const express = require('express');
const router = express.Router();
const Art = require('../models/art');

router.post('/save', async (req, res) => {
    const { email, artData } = req.body;
    const art = new Art({ email, artData });
    await art.save();
    res.status(201).send('Art saved');
});

router.get('/load', async (req, res) => {
    const { email } = req.query;
    const art = await Art.find({ email });
    res.status(200).json(art);
});

module.exports = router;
