var mysql = require('mysql');
var db = require('../databases/personal_site');
var bcrypt = require('bcrypt-nodejs');

var User = {
    findByUsername: function(Object, callback) {
        return db.query("select * from ")
    },

    createUser: function(Object, callback) {
        return db.query("select * from ")
    }

}