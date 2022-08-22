const express = require('express');
const path = require('path');
const notes = require('./Notes');

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${res.originalUrl}`);
    next();
}

// Init Middleware
app.use(logger);

// Gets Notes
app.get('/public/notes.html')

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));