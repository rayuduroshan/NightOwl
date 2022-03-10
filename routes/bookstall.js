const bookstall = require('express').Router();

const booksController = require('../controller/bookstallController');


// heartbeat route
bookstall.get('/heartbeat', (req, res) => {
    res.send('Application is live');
});

// Fetch all books database route
bookstall.get('/books', booksController.getAllBooks);

// Get book by id
bookstall.get('/books/:id', booksController.getBookById);

module.exports = bookstall;