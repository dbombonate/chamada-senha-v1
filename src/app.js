const express = require('express');
const app = express();
const routes = require('./routes');
const database = require('./database');

database.sync()
.then((value) => console.log(value.options));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;