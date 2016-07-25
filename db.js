var pgp = require("pg-promise")();
var db = pgp("postgres://kevin:kevin@localhost:5432/puppies");

function select_all(req, res, next) {

	db.any("SELECT * from pups;")
	    .then(function (data) {
	        console.log("DATA:", data);
	        res.send(data);
	    })
	    .catch(function (error) {
	        console.log("ERROR:", error);
            res.send('An error occurred');
        });
}

function add_pup(req, res, next) {
	p = req.body;
	list = [p.name, p.breed, p.age, p.sex];
	db.none("INSERT INTO pups(name, breed, age, sex) VALUES ($1, $2, $3, $4)", list)
		.then(function () {
	        console.log('successful insert');
            res.end('Successful Insert');
	    })
	    .catch(function(err) {
            console.log('error: ', err)
            res.end('Something went wrong there');
	    });
}

function check(req, res, next) {
    var name = req.body.name,
        color = req.body.color;
    console.log(req.body);
    console.log('Name: ', name, ' Colour: ', color);
}

module.exports = {
    select_all: select_all,
    add_pup: add_pup,
    check: check
}
