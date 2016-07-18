var express = require('express');
var app = express();
var router = require('./routes');

app.set('views', './views');
app.set('view engine', 'pug');
app.use('/', router);

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});