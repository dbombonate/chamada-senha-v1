const express = require('express');
const routes = express.Router();

//const senhaController = require('./app/controllers/senhasController');
const newPasswordController = require('./app/controllers/NewPasswordController');
const callNextPasswordController = require('./app/controllers/CallNextPasswordController');
const listPasswordController = require('./app/controllers/ListPasswordsController');

routes.get('/', (req,res) => {
  res.send({ message: "Password Call API"})
});

routes.post('/api/passwords', newPasswordController.handle);

//routes.get('/api/password/:id', senhaController.chamaSenhaDigitada);
routes.get('/api/password', callNextPasswordController.handle);
routes.get('/api/password/list/:option', listPasswordController.handle);

module.exports = routes;