var express = require('express');
var db = require('./db');
var router = express.Router();
var path = require('path');


router.use(function(req, res, next) {
	console.log("Got a request, send request off to the next handler");
	next();
});

router.get('/', function (req, res) {
	res.send('Hello World');
});

// returns an html file
router.get('/rmarkdown', function(req, res) {
	res.sendFile(path.join(__dirname, '/html', '/rmarkdown.html'));
});

// takes in url arguments
router.get('/index/:message', function(req, res) {
	res.render('index', { title: 'Hey', message: req.params.message});
});

// router call that calls select all from db.js
router.get('/select_all', db.select_all)

// need to edit this to make handle post requests
router.post('/test-page', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    console.log('Name: ', name, ' Colour: ', color);
});

module.exports = router;

