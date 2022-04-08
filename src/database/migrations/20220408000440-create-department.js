'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('departments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      dept_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dept_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('departments');
  }
};
