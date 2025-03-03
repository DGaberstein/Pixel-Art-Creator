const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const artRoutes = require('./routes/art');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/pixelart', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/art', artRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
