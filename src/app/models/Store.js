const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Store extends Model {};

Store.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Department',
});

module.exports = Store;
