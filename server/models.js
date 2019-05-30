// const Sequelize = require('sequelize');

// // Option 1: Passing parameters separately
// const sequelize = new Sequelize('project_week', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize
//     .authenticate()
//     .then(() => {
//     console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//     console.error('Unable to connect to the database:', err);
//     });


// const User = sequelize.define('user', {
//     // attributes
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     firstName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: Sequelize.STRING,
//         allowNull: false
//         // allowNull defaults to true
//     },
//     companyName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: {
//             msg: "Must be a valid email address",
//             }
//         }
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     }, {
//     // options
//     sequelize, timestamps: true
// });

// // const Customer = sequelize.define('customer', {
// //     customerName: {
// //         type: Sequelize.STRING,
// //         allowNull: false
// //     },
// //     customerAddress: {
// //         type: Sequelize.STRING
// //     },
// //     customerCity: {
// //         type: Sequelize.STRING
// //     },
// //     customerState: {
// //         type: Sequelize.STRING
// //     },
// //     customerZip: {
// //         type: Sequelize.INTEGER
// //     }
// //     //ADD JOBS
// //     }, {
// //         // options
// //         sequelize, timestamps: true
// // });
    
// // const Job = sequelize.define('job', {
// //     jobDate: {
// //         type: Sequelize.DATEONLY,
// //         allowNull: false
// //     },
// //     jobRevenue: {
// //         type: Sequelize.DECIMAL,
// //         allowNull: false
// //     },
// //     jobStartTime: {
// //         type: Sequelize.TIME
// //     },
// //     jobEndTime: {
// //         type: Sequelize.TIME
// //     },
// //     jobBudgetedHours: {
// //         type: Sequelize.DOUBLE
// //     },
// //     jobType: {
// //         type: Sequelize.STRING
// //     },

// //     //still need Customer, User, crew
// // }, {
// //     // options
// //     sequelize, timestamps: true
// // });


// // const Company = sequelize.define('company', {
// //     companyName: {
// //         type: Sequelize.STRING
// //     }
// // });

// // const Employee = sequelize.define('employee', {
// //     employeeName: {
// //         type: Sequelize.STRING,
// //         allowNull: false
// //     }
// // })
// // User.hasMany(Customer);
// // User.hasMany(Employee);
// // Customer.hasMany(Job);
// // Job.belongsToMany(Employee, {through: 'JobEmployee'})
// // Employee.belongsToMany(Job, {through: 'JobEmployee'})

// sequelize.sync({ force: true })
//     .then(() => {
//     console.log(`Database & tables created!`)
// })


// // module.exports = {
// //     User,
// //     Customer,
// //     Job,
// //     Company,
// //     Employee
// // }