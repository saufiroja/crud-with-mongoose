require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// DATABASE
require('./database/config');

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`connect on port ${PORT}`);
});
