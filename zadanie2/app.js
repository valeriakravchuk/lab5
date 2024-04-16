const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
const homeRouter = require("./routes/home");
const authorsRouter = require("./routes/authors");
const booksRouter = require("./routes/books");

app.get('/', (req, res) => {
  res.render('books', { books: yourBooksArray });
});

app.get('/authors', (req, res) => {
  res.render('authors', { authors: yourAuthorsArray });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
