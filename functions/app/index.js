const express = require('express');

const mongoConn = require('./common/mongo_conn');

const module1Router = require('./module_1/router');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(async (req, res, next, error) => {
  if (error) {
    console.log('app.use error', error);
  }

  await mongoConn()
    .then((x) => {
      console.log('app.use mongo', x);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/module_1', module1Router);

module.exports = app;
