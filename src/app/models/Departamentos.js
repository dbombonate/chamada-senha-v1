const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Departamento extends Model {};

Senha.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  depto_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,  
  }
}, {
  sequelize,
  modelName: 'Departamento',
});

module.exports = Departamento;