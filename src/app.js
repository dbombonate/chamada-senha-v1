const express = require('express');
const app = express();
const routes = require('./routes');
const database = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;