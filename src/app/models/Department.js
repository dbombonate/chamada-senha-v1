const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Department extends Model {};

Department.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dept_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,  
  }
}, {
  sequelize,
  modelName: 'Department',
});

module.exports = Department;