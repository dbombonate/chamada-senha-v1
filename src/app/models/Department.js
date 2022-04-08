const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');

class Department extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      dept_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 80],
            msg: 'Department name must have 2 to 80 characters.'
          }
        }
      },
      dept_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    }, {
      sequelize,
    });
    return this;
  }
}

module.exports = Department;
