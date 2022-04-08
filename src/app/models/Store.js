const { Sequelize, DataTypes, Model } = require('sequelize');

class Store extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      store_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate:
        {
          len: {
            args: [2, 80],
            msg: 'Store name must have between 2 to 80 characters.'
          }
        }
      }
    }, {
      sequelize,
    });
    return this;
  }
};

module.exports = Store;
