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
    crewName: {
      type: DataTypes.STRING
    }
  }, { sequelize, timestamps: true });
  Job.associate = function(models) {
    // associations can be defined here
    Job.belongsToMany(models.Employee, {
      through: 'employees_jobs',
      as: 'employee'
    });
    Job.belongsTo(models.Customer);
  };
  return Job;
};