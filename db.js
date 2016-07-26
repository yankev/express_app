var pgp = require("pg-promise")();
var db = pgp("postgres://kevin:kevin@localhost:5432/puppies");
var xml = require('xml');

function select_all(req, res, next) {

    db.any("SELECT * from pups;")
        .then(function(data) {
            console.log("DATA:", data);
            res.send(data);
        })
        .catch(function(error) {
            console.log("ERROR:", error);
            res.send('An error occurred');
        });
}

function add_pup(req, res, next) {
    p = req.body;
    list = [p.name, p.breed, p.age, p.sex];
    db.none("INSERT INTO pups(name, breed, age, sex) VALUES ($1, $2, $3, $4)", list)
        .then(function() {
            console.log('successful insert');
            res.end('Successful Insert');
        })
        .catch(function(err) {
            console.log('error: ', err)
            res.end('Something went wrong there');
        });
}

function delete_entry(req, res, next) {

}

function filter_select(req, res, next) {
    // for now we'll filter by age
    param = req.params.age;
    db.any("select * from pups where age=$1", param)
        .then(function(data) {
            // success;
            console.log('we found matches')
            res.send(data);

        })
        .catch(function(error) {
            // error;
            console.log('most likely no matches were found');
            res.send('An error occured');
        });
}

function filter_select_query(req, res, next) {
    // for now we'll filter by age
    param = req.query.age;
    if (!param) {
        console.log('now age parameter given');
        res.send('error, no age parameter given');
    } else if (req.query.age && req.query.sex) {
        extension = "age=" + req.query.age + " AND " + "sex=" + "'" + req.query.sex + "'";
    } else if (req.query.age) {
        extension = "age=" + req.query.age;
    } else {
        res.send('No support for this query at the moment');
    }
    query_string = "select * from pups where " + extension + ";";
    console.log(query_string);
    db.any(query_string)
        .then(function(data) {
            // success;
            console.log('we found matches');
            res.send(data);

        })
        .catch(function(error) {
            // error;
            console.log('most likely no matches were found')
            res.send('An error occured');
        });
}

function check(req, res, next) {
    var name = req.body.name,
        color = req.body.color;
    console.log(req.body);
    console.log('Name: ', name, ' Colour: ', color);
    res.set('Content-Type', 'text/xml');
    res.send(xml('<tag></tag>'));
}

module.exports = {
    select_all: select_all,
    add_pup: add_pup,
    check: check,
    filter: filter_select,
    filter2: filter_select_query
}
