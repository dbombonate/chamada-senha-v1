const express = require('express');
const routes = express.Router();

const senhaController = require('./app/controllers/senhasController');
const newPasswordController = require('./app/controllers/NewPasswordController');
const callNextPasswordController = require('./app/controllers/CallNextPasswordController');

routes.get('/', (req,res) => {
  res.send({ message: "Password Call API"})
});

routes.post('/api/passwords', newPasswordController.handle);

//routes.get('/api/:id', senhaController.chamaSenhaDigitada);
routes.get('/api/password', callNextPasswordController.handle);

module.exports = routes;