const Author = require('../models/Author');

const authors = [
  {
    id: 1,
    name: "Valeriia"
  },
  {
    id: 2,
    name: "Jane Smith"
  }
];

exports.renderAuthors = (req, res) => {
  res.render('authors', { authors: authors });
};