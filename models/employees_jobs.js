'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees_jobs = sequelize.define('employees_jobs', {
    employeeId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER
  }, { sequelize, timestamps: true });
  employees_jobs.associate = function(models) {
    // associations can be defined here
  };
  return employees_jobs;
};