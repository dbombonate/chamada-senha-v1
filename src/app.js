require('express-async-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const database = require('./database');

(async () => {
  database.sync({ alter: true })
  .then((value) => console.log('Models sync OK.'))
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(routes);

app.use((err, req, res, next) => {

  if(err instanceof Error){
    return res.status(400).send({
      error: err.message
    })
  }

  return res.status(500).send({
    status: "error",
    message: "Internal Server Error"
  })

});

module.exports = app;
