'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyIndustry: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { sequelize, timestamps: true });
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Employee, {
      foreignKey: 'companyID',
      as: 'employees',
    });
    Company.hasMany(models.User, {
      foreignKey: 'companyID',
      as: 'users',
    });
    Company.hasMany(models.Customer, {
      foreignKey: 'companyID',
      as: 'customers',
    });
  };
  return Company;
};