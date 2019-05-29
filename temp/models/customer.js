'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerAddress: {
        type: DataTypes.STRING
    },
    customerCity: {
        type: DataTypes.STRING
    },
    customerState: {
        type: DataTypes.STRING
    },
    customerZip: {
        type: DataTypes.INT
    },
  },{ sequelize, timestamps: true });
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsTo(models.Company, {
      foreignKey: 'companyID',
      onDelete: 'CASCADE'
    });
  };
  return Customer;
};