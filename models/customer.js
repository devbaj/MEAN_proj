'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerAddress: DataTypes.STRING,
    customerCity: DataTypes.STRING,
    customerState: DataTypes.STRING,
    customerZip: DataTypes.INTEGER
  }, { sequelize, timestamps: true });
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Job, {
      as: 'jobs',
    });
  };
  return Customer;
};