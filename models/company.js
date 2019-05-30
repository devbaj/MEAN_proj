'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industryType: {
      type: DataTypes.STRING,
    },
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Employee, {
      as: 'employees',
    });
    Company.hasMany(models.User, {
      as: 'users',
    });
    Company.hasMany(models.Customer, {
      as: 'customers',
    });
  };
  return Company;
};