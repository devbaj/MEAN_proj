//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")
const path = require('path');

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){

  // /// probably need to modularize this into separate files

    //CRUD Companies
    app.get('/api/company/all', controller.company_all);
    app.get('/api/company/:id', controller.company_getOne);
    app.post('/api/company/new', controller.company_new);
    // app.patch('/api/company/edit/:id', controller.company_edit);
    app.delete('/api/company/:id', controller.company_deleteOne);
    
    //CRUD Customers
    app.get('/api/customer/all', controller.customer_all);
    app.get('/api/customer/:id', controller.customer_getOne);
    app.post('/api/customer/new', controller.customer_new);
    // app.patch('/api/customer/edit/:id', controller.customer_edit);
    app.delete('/api/customer/:id', controller.customer_deleteOne);
    
    //CRUD Employees
    app.get('/api/employee/all', controller.employee_all);
    app.get('/api/employee/:id', controller.employee_getOne);
    app.post('/api/employee/new', controller.employee_new);
    // app.patch('/api/employee/edit/:id', controller.employee_edit);
    app.delete('/api/employee/:id', controller.employee_deleteOne);
    
    //CRUD Employees_Jobs join table
    app.get('/api/employees_jobs/all', controller.employees_jobs_all);
    app.get('/api/employees_jobs/:id', controller.employees_jobs_getOne);
    app.post('/api/employees_jobs/new', controller.employees_jobs_new);
    app.get('/api/employees_jobs/all/withassociations', controller.employees_jobs_with_associations);

    // app.patch('/api/employees_jobs/edit/:id', controller.employees_jobs_edit);
    app.delete('/api/employees_jobs/:id', controller.employees_jobs_deleteOne);
    
    //CRUD Jobs
    app.get('/api/jobs/all', controller.jobs_all);
    app.get('/api/jobs/:id', controller.jobs_getOne);
    app.post('/api/jobs/new', controller.jobs_new);
    app.get('/api/jobs/all/withassociations', controller.jobs_with_associations);
    // app.patch('/api/jobs/edit/:id', controller.jobs_edit);
    app.delete('/api/jobs/:id', controller.jobs_deleteOne);
    
  //   //CRUD Timecards
    app.get('/api/timecards/all', controller.timecards_all);
    app.get('/api/timecards/:id', controller.timecards_getOne);
    app.post('/api/timecards/new', controller.timecards_new);
    // app.patch('/api/timecards/edit/:id', controller.timecards_edit);
    app.delete('/api/timecards/:id', controller.timecards_deleteOne);
    
    //CRUD Users
    app.get('/api/users/all', controller.users_all);
    app.get('/api/users/:id', controller.users_getOne);
    app.post('/api/users/new', controller.users_new);
    // app.patch('/api/users/edit/:id', controller.users_edit);
    app.delete('/api/users/delete/:id', controller.users_deleteOne);
    
    
    
    app.all("*", (req, res) => {
		return res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};

