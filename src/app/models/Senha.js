const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Senha extends Model {};

Senha.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  senha_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  depto_key: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: '',  
  }
}, {
  sequelize,
  modelName: 'Senha',
  timestamps: false,
});

module.exports = new Senha();