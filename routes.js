var express = require('express');
var db = require('./db');
var router = express.Router();
var path = require('path');


router.use(function(req, res, next) {
	console.log("Got a request"	);
	next();
});

router.get('/', function (req, res) {
	res.send('Hello World');
});

router.get('/rmarkdown', function(req, res) {
	res.sendFile(path.join(__dirname, '/html', '/rmarkdown.html'));
});

router.get('/input', function(req, res) {
	res.sendFile(path.join(__dirname, '/html', '/input.html'));
});

router.get('/index/:message', function(req, res) {
	res.render('index', { title: 'Hey', message: req.params.message});
});

router.get('/select_all', db.select_all)

router.post('/add', function(req, res, next) {
	res.send('fookn right');
});

module.exports = router;