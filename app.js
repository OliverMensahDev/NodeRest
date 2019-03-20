const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});
app.use('/api', bookRouter);

app.listen(port, (err) => {
  if (!err) console.log(err);
  console.log(`Running on port ${port}`);
});
