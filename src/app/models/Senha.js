const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Senha extends Model {};

Senha.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  senha_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  senha_priority: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  depto_key: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: '0',  
  }
}, {
  sequelize,
  modelName: 'Senha',
  timestamps: true,
});

module.exports = Senha;