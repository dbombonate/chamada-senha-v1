const express = require('express');
const routes = express.Router();

const senhaController = require('./app/controllers/senhasController');
const newPasswordController = require('./app/controllers/NewPasswordController');

routes.get('/', (req,res) => {
  res.send({ message: "Password Call API"})
});

routes.post('/api/passwords', newPasswordController.handle);

routes.get('/api/:password', senhaController.chamaSenhaDigitada);
routes.get('/api/next_password', senhaController.chamaNovaSenha);

module.exports = routes;