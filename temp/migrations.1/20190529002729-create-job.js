'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jobDate: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.DOUBLE
      },
      rate: {
        type: Sequelize.DECIMAL
      },
      discounts: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};