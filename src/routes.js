const express = require('express');
const routes = express.Router();

const senhaController = require('./app/controllers/senhasController');

routes.get('/', (req,res) => {
  res.send({ message: "Api de Chamada de Senhas"})
});

routes.post('/novaSenha', senhaController.novaSenha );
routes.post('/', senhaController.chamaSenhaDigitada);

routes.get('/proximaSenha', senhaController.chamaNovaSenha);
module.exports = routes;