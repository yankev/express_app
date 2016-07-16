var pgp = require("pg-promise")();
var db = pgp("postgres://postgres@localhost:5432/puppies");

db.one("SELECT * from pups;")
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
