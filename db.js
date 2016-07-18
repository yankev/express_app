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
	    });
}

function add_pup(req, res, next) {
	p = req.params;
	list = [p.name, p.breed, p.age, p.sex];
	db.none("INSERT INTO pups((name, breed, age, sex) VALUES ($1, $2)", list)
		.then(function () {
	        console.log('successful insert');
	    })
	    .catch(function(err) {
	    	console.log('error: ', err)
	    });
}

module.exports = {
	select_all: select_all,
	add_pup: add_pup
}