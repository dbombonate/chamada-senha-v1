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