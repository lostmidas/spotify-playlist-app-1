var mongoose = require('mongoose');

var dbUri = 'mongodb://localhost/spotify-playlist-app';

mongoose.connect(dbUri);

module.exports = mongoose;

