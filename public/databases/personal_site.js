var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'jakesite',
    password: 'F3d3rat!on',
    database: 'personal_site'
});

module.exports = connection;