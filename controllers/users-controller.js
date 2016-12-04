var User = require('../models/user.js');

var create = function(req, res) {
  // get request info from the request object
  // save new user in database
  var data = req.body;
  var newUser = {
    name: data.name,
    email: data.email,
    password: data.password
  };
  User.create(newUser, function(err, savedUser) {
    if (err) console.log("error -->", err);
    console.log(savedUser);
    res.send(savedUser)
  });
};

var getAllUsers = function(req, res) {
  User.find({}, function(err, users){
    if (err) console.log("error -->", err);
    res.send(users)
  });
};

module.exports = {
  create: create,
  getAllUsers: getAllUsers
};
