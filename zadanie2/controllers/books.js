const Book = require('../models/Book');
const books = [
  {
    id: 1,
    title: "Example Book 1",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Example Book 2",
    author: "Jane Smith"
  }
];

exports.renderBooks = (req, res) => {
  res.render('books', { books: books });
};
