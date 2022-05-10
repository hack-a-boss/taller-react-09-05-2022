const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sortBy = require('lodash.sortby');

const app = express();

const people = require('./people.json');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
  return res.send({
    status: 'ok',
    data: sortBy(people, 'name'),
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

// Lanzamos el servidor
app.listen(4000, () => {
  console.log('Servidor funcionando! 👻');
});
