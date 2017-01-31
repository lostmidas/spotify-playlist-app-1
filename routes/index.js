var PlayListController = require('../controllers/playlist-controller.js');
var UserController = require('../controllers/users-controller.js');

module.exports = function(app) {
  // POST input data
  app.post('/submit', PlayListController.handleInput);

  // POST access user and save to database
  app.post('/users', UserController.create);

  // GET all of the users
  app.get('/users', UserController.getAllUsers);

  // GET auth
  app.get('/auth', function(req, res, next){
    var clientSecret = process.env.CLIENT_SECRET;
    var clientId = 'client_id=' + process.env.CLIENT_ID;
    var responseType = 'response_type=code';
    var redirectUri = 'redirect_uri=' + process.env.REDIERCT_URI;
    var baseUri = 'https://accounts.spotify.com/authorize?';
    var url = baseUri + clientId + '&' + responseType + '&' + redirectUri;
    res.send(url);
  });

  app.get('/success', function(req, res, next) {
    console.log("query -->", req.query);
    res.redirect('/');
  });
};


