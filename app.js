const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Example data
const books = [
  { title: 'Yash', author: 'Author 1' },
  { title: 'Book 2', author: 'Author 2' },
  { title: 'Book 3', author: 'Author 3' },
];

app.use(bodyParser.json());

app.get('/books', (req, res) => {
  res.json(books);
  console.log(books);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
