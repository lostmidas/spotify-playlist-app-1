var mongoose = require('../database.js');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
  name: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
