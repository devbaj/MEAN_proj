var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json()); 

app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/routes.js')(app)



app.listen(8000, function() {
    console.log("listening on 8000")
})

sequelize.sync()