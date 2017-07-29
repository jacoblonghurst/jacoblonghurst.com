var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var db = require('../../public/databases/personal_site');

router.post('/api/login/createUser', function(req, res) {
    var Object = req.body;
    var username = Object.username;


});

router.post('/api/login/authenticate', function(req, res) {
    var Object = req.body;
    var password = Object.password;
    var username = Object.username;
    return db.query('select * from users where username = ?', [username], function(err, rows) {
        bcrypt.compare(password, rows[0], function(err, response) {
            if (response === true) {
                res.json('This was verified as true');
            } else {
                res.json("Jk this wouldn't work");
            }
        })
    })
});
// passport.use(new LocalStategy({
//     username: username
//
//     function(username, password, done) {
//     }
// }))

