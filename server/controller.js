////MODULARIZATION WITH MODELS:
const User = require("../models").User;


//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {
    all: (req, res) => {
        console.log("hi")
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
