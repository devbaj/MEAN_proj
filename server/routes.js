//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")
const path = require('path');

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/api/all', controller.all);

    app.all("*", (req, res) => {
		return res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};
