var pgp = require("pg-promise")();
var db = pgp("postgres://kevin:kevin@localhost:5432/puppies");

db.one("SELECT * from pups;")
    .then(function (data) {
        console.log("DATA:", data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
