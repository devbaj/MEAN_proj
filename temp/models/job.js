'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    jobType: {
      type: DataTypes.STRING
    },
    jobDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    qty: {
      type: DataTypes.DOUBLE
    },
    rate: {
      type: DataTypes.DECIMAL
    },
    discounts: {
      type: DataTypes.DECIMAL
    },
  }, { sequelize, timestamps: true });
  Job.associate = function(models) {
    // associations can be defined here
    Job.belongsTo(models.Customer, {
      foreignKey: 'customerID',
      as: 'jobs'
    });
    Job.hasMany(models.Employee, {
      foreignKey: 'employeeID',
      as: 'employees',
    });
  };
  return Job;
};