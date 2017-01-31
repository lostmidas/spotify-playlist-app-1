var mongoose = require('mongoose');

var dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri);

module.exports = mongoose;

