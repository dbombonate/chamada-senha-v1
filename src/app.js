const express = require('express');
const app = express();
const routes = require('./routes');
const database = require('./database');

(async () => {
  database.sync({ alter: true })
  .then((value) => console.log('Models sync OK.'))
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;