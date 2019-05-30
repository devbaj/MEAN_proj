'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    companyId: {
      type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
            msg: "Must be a valid email address",
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },  
  { sequelize, timestamps: true });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};