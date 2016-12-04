var express = require('express');
var router = express.Router();
var PlayListController = require('../controllers/playlist-controller.js');
var UserController = require('../controllers/users-controller.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html')
// });

// POST input data
router.post('/submit', PlayListController.handleInput);

// POST access user and save to database
router.post('/users', UserController.create);

// GET all of the users
router.get('/users', UserController.getAllUsers);

module.exports = router;
