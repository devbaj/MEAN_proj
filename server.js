var express = require("express");
var bodyParser = require("body-parser");
// var cors = require('cors');
// var jwt = require('jsonwebtoken');

var app = express();
app.use(bodyParser.json()); 
// app.use(cors());

//set port
app.set('port', process.env.port||3000)
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/routes.js')(app)

app.get('/',(req,res) => {
    res.send({'status':true,
    'msg':"Server Started"});
});


app.listen(app.get('port'), () => {
    console.log("Server Created in port "+app.get('port'))
})
