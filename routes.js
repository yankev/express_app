var express = require('express');
var db = require('./db');
var router = express.Router();
var path = require('path');


router.use(function(req, res, next) {
    console.log("Got a request, send request off to the next handler");
    next();
});

// All the GETS
// CALLS DEALING WITH TEMPLATES AND HTML

// returns an html file

// serve bootstrap template, NEW MAIN!!
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/', 'new_index.html'));
})

router.get('/rmarkdown', function(req, res) {
    res.sendFile(path.join(__dirname, '/html', '/rmarkdown.html'));
});
// return post form
router.get('/input', function(req, res) {
    res.sendFile(path.join(__dirname, '/views', '/input.html'));
});

// return a page for more db operations
router.get('/db_stuff', function(req, res) {
    res.sendFile(path.join(__dirname, '/views', '/db_stuff.html'));
});

// serve a react app
router.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '/', '/index.html'));
});

// takes in url arguments, and renders are PUG/Jade template
router.get('/index/:message', function(req, res) {
    res.render('index', { title: 'Hey', message: req.params.message});
});

// DATABASE RELATED CALLS

// router call that calls select all from db.js
router.get('/select_all', db.select_all);
//router call that gets filtered data from db
// router.get('/filter/:age', db.filter); //this should be deprecated in favor of the following:

// router.get('/filter', db.filter);
// TESTING
router.get('/filter', db.filter_general);

// POST REQUESTS
// need to edit this to make handle post requests
router.post('/test-page', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    console.log('Name: ', name, ' Colour: ', color);
    res.send('responding to post request');
});

router.post('/add_dog', db.add_pup);
router.post('/check', db.check);

module.exports = router;
