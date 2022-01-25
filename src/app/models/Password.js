const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Password extends Model {};

Password.init({
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
  dept_key: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: '0',  
  }
}, {
  sequelize,
  modelName: 'Password',
  timestamps: true,
});

module.exports = Password;