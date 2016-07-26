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
            console.log('Successful insert');
            res.end('Successful Insert');
        })
        .catch(function(err) {
            console.log('error: ', err)
            res.end('Something went wrong there');
        });
}

function delete_entry(req, res, next) {

}

// this will be DEPRECATED (but keeping because it's a basic example)
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
            res.send('An error occurred');
        });
}

// This took over for filter_select
function filter_select_query(req, res, next) {
    // for now we'll filter by age
    console.log(req.query);
    if (req.query.age && req.query.sex) {
        extension = " where "+ "age=" + req.query.age + " AND " + "sex=" + "'" + req.query.sex + "'";
    } else if (req.query.age) {
        extension = " where " + "age=" + req.query.age;
    } else {
        extension = "";
    }
    query_string = "select * from pups" + extension + ";";
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
            res.send('An error occurred');
        });
}

// Trying to write an even more general version of 'filter_select_query'
function filter_general(req, res) {

    extension = [];
    for(var key in req.query) {
        console.log(req.query[key]);
        temp = key + "=" + "'" + req.query[key] + "'";
        extension.push(temp);
    }
    extension = extension.join(" and ");
    query_string = "select * from pups where " + extension + ";";
    db.any(query_string)
        .then(function(data) {
            // success;
            console.log('we found matches');
            res.send(data);

        })
        .catch(function(error) {
            // error;
            res.send('Didn\'t work! Need a better error msg tho');
        });
    // res.send(query_string);
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
    filter_general: filter_general,
    filter: filter_select_query
}
