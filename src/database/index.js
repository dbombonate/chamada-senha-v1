const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database/db/senhas.db'
});

module.exports = sequelize;