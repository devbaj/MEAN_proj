'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;




////////////////////////////
////MODULARIZATION WITH MODELS:
// const Company = require("../models").Company;
// const Customer = require("../models").Customer;
// const Employee = require("../models").Employee;
// const Timecard = require("../models").Timecard;
const User = require("../models").User;
// const Job = require("../models").Job;
// const employees_jobs = require("../models").employees_jobs;



////////////////  NOT-WORKING!!!!!!!!!!!!  /////////////////////////////
//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
//==================   Need to modularize this more ==============================//
module.exports = {
    //User Routes

    users_all: (req, res) => {
        User.findAll({})
        .then( data => res.send({success: true, payload: data}))
        .catch( err => res.send({success: false, error: err}))
        console.log(data)
        },
    }
    


/////////////////// WORKING!!!!!!!!!!!! /////////////////////////////
module.exports = {
  all: (req, res) => {
      User.findAll({})
      .then((foundUser) => {
          res.send({'status':true,'data':foundUser});
          console.log(foundUser)
      })
      .catch((err) => {
          console.log("Error finding user", err)
      })
      },
  }
