const express = require('express');
const routes = express.Router();

routes.get('/', (req,res) => {
  res.send({ message: "Api de Chamada de Senhas"})
});

module.exports = routes;