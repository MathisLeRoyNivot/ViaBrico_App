const mysql = require('mysql');
const { dbHost, dbUsername, dbPassword, dbName } = require('./config');

//local mysql db connection
const dbConnection = mysql.createConnection({
    host     : dbHost,
    user     : dbUsername,
    password : dbPassword,
    database : dbName,
    // socketPath: '/Applications/XAMPP/tmp/mysql/mysql.sock'
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log(`\x1b[32m[+]\x1b[0m Successfully connected to the database : \x1b[32m${dbName}\x1b[0m`);
});

module.exports = dbConnection;