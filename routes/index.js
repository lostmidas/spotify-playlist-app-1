var express = require('express');
var router = express.Router();
var PlayListController = require('../controllers/playlist-controller.js');
var path = require('path')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html')
// });

// POST input data
router.post('/submit', PlayListController.handleInput);

module.exports = router;
