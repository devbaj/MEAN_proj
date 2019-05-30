'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timecard = sequelize.define('Timecard', {
    punchDate: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endtime: DataTypes.TIME,
    lunch: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, { sequelize, timestamps: true });
  Timecard.associate = function(models) {
    // associations can be defined here
  };
  return Timecard;
};