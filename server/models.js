const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('project_week', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });


const User = sequelize.define('user', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.dec,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
            msg: "Must be a valid email address",
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    }, {
    // options
    sequelize, timestamps: true
});

const Customer = sequilize.define('customer', {
    customerName: {
        type: sequelize.STRING,
        allowNull: false
    },
    customerAddress: {
        type: sequilize.STRING
    },
    customerCity: {
        type: sequilize.STRING
    },
    customerState: {
        type: sequilize.STRING
    },
    customerZip: {
        type: sequilize.INT
    }
    //ADD JOBS
    }, {
        // options
        sequelize, timestamps: true
});
    
const Job = sequilize.define('job', {
    jobDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    jobRevenue: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    jobStartTime: {
        type: Sequelize.TIME
    },
    jobEndTime: {
        type: Sequelize.TIME
    },
    jobBudgetedHours: {
        type: Sequelize.DOUBLE
    },
    jobType: {
        type: sequelize.STRING
    },

    //still need Customer, User, crew
}, {
    // options
    sequelize, timestamps: true
});


const Company = sequilize.define('company', {
    companyName: {
        type: sequilize.STRING
    }
});

const Employee = sequilize.define('employee', {
    employeeName: {
        type: sequilize.STRING,
        allowNull: false
    }
})
User.hasMany(Customer);
User.hasMany(Employee);
Customer.hasMany(Job);
Job.belongsToMany(Employee, {through: 'JobEmployee'})
Employee.belongsToMany(Job, {through: 'JobEmployee'})

sequelize.sync({ force: true })
    .then(() => {
    console.log(`Database & tables created!`)
})


module.exports = {
    User,
    Customer,
    Job,
    Company,
    Employee
}