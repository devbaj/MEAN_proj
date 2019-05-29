'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    employeeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    position: {
      type: DataTypes.STRING,
    },
    hourlyPay: {
      type: DataTypes.DOUBLE,
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
  }, { sequelize, timestamps: true });
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.hasMany(models.Timecard, {
      as: 'timecards',
    });
    Employee.belongsToMany(models.Job, {
      through: 'employees_jobs',
      as: 'job'
    });
  };
  return Employee;
};
