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

module.exports = {
	select_all: select_all
}