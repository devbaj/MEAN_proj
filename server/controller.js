////MODULARIZATION WITH MODELS:
const User = require("../models").User;
const bcrypt = require('bcrypt');
const saltRounds = 10;

//==================   This could get messy, we should modularize it.  I spent time trying to do it but couldn't get it working
//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {


    //Employee Controllers
    company_all: (req, res) => {
        Company.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    company_getOne: (req, res) => {
        Company.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    company_new: (req, res) => {
        Company.create( req.body )
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        //edit needs to be passed in from a form
    // company_edit: (req, res) => {
    //     Company.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    company_deleteOne: (req, res) => {
        Company.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        

    //Employee Controllers
    customer_all: (req, res) => {
        Customer.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    customer_getOne: (req, res) => {
        Customer.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    customer_new: (req, res) => {
        Customer.create( req.body )
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        //edit needs to be passed in from a form
    // customer_edit: (req, res) => {
    //     Customer.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    customer_deleteOne: (req, res) => {
        Customer.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        

    //Employee Controllers
    employee_all: (req, res) => {
        Employee.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    employee_getOne: (req, res) => {
        Employee.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    employee_new: (req, res) => {
        Employee.create( req.body )
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        //edit needs to be passed in from a form
    // employee_edit: (req, res) => {
    //     Employee.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    employee_deleteOne: (req, res) => {
        Employee.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        


    //Employees_jobs Controllers
    employees_jobs_all: (req, res) => {
        employees_jobs.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    employees_jobs_getOne: (req, res) => {
        employees_jobs.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    employees_jobs_new: (req, res) => {
        employees_jobs.create( req.body )
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        //edit needs to be passed in from a form
    // employees_jobs_edit: (req, res) => {
    //     employees_jobs.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    employees_jobs_deleteOne: (req, res) => {
        employees_jobs.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },


    //Job Controllers
    jobs_all: (req, res) => {
        Job.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    jobs_getOne: (req, res) => {
        Job.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    jobs_new: (req, res) => {
        Job.create( req.body )
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        //edit needs to be passed in from a form
    // jobs_edit: (req, res) => {
    //     Job.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    jobs_deleteOne: (req, res) => {
        Job.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },



    //Timecard Controllers
    timecards_all: (req, res) => {
        Timecard.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    timecards_getOne: (req, res) => {
        Timecard.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    timecards_new: (req, res) => {
        Timecard.create( req.body )
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
        //edit needs to be passed in from a form
    // timecards_edit: (req, res) => {
    //     Timecard.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    timecards_deleteOne: (req, res) => {
        Timecard.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },


    //User Controllers
    users_all: (req, res) => {
        User.findAll({})
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    users_getOne: (req, res) => {
        User.findOne({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },
    users_new: (req, res) => {
			console.log( req.body);
			var pwHash;
			bcrypt.hash(req.body.newUser.password, saltRounds, (err, hash) => {
				if (err) {
					console.log(err);
				} else {
					pwHash = hash;
					User.create({
						firstName: req.body.newUser.firstName,
						lastName: req.body.newUser.lastName,
						email: req.body.newUser.email,
						password: pwHash
						})
						.then( data => {
							console.log('dataobject', data);
							res.json({success: true, payload: data})
						})
						.catch( err => res.json({success: false, error: err}));
				}
			})
		},

        //edit needs to be passed in from a form
    // users_edit: (req, res) => {
    //     User.update({ where: { id: req.params.id } })
    //     .then( data => res.json({'success': true, 'payload': data}))
    //     .catch( err => res.json({'success': false, 'error': err}))
    //     },
    users_deleteOne: (req, res) => {
        User.destroy({ where: { id: req.params.id } })
        .then( data => res.json({'success': true, 'payload': data}))
        .catch( err => res.json({'success': false, 'error': err}))
        },

		checkDupes: (req, res) => {
			User.findAll({
				attributes: ['email'],
				where: { email : req.body.input} 
			} )
				.then( data => {
					if (data.length > 0) {
						res.json({success: true, dupes: true});
					} else {
						res.json({success: true, dupes: false});
					}
				})
				.catch( err => res.json({success: false, error: err}));
		},

		attemptLogin: (req, res) => {
			console.log(req.body);
			User.findOne({where: {email: req.body.email}})
			.then(data => {
				bcrypt.compare(req.body.password, data.password, (err, result) => {
					if (result) {
						console.log('login attempted for', data.dataValues.firstName, data.dataValues.lastName);
						res.json( {
							success: true,
							payload: {
								userid: data.dataValues.id,
								name: data.dataValues.firstName + ' ' + data.dataValues.lastName
					}})} else {
						res.json({success: false, error: 'Password incorrect'});
					}
				})
			})
		}

}