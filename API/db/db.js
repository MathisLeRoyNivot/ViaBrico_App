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
    console.log(`\x1b[32m[+] Connection established with the database.\x1b[0m`);
});


// Exportation
module.exports = { db };
