require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.STORAGE,
  logging: false,
});

sequelize.authenticate()
.then(() => { console.log('Database Ready')})
.catch((error) => { console.error('Database Error', error)});

module.exports = sequelize;