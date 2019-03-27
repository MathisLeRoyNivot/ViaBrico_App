// Connexion
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "bdd-viabrico"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// Exportation
module.exports = { db };
