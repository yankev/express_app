var express = require('express');
var app = express();
var router = require('./routes');
var bodyParser = require('body-parser')

app.set('views', './views');
app.set('view engine', 'pug')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/', router);


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
