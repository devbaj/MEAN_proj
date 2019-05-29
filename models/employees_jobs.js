'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees_jobs = sequelize.define('employees_jobs', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, { sequelize, timestamps: true });
  employees_jobs.associate = function(models) {
    // associations can be defined here
  };
  return employees_jobs;
};