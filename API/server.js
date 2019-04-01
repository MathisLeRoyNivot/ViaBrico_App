const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js'); //importing route
// const mysql = require('mysql');
// const dbConnection = require('./models/db')

const app = express();
const port = process.env.PORT || 3000;

// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bdd-viabrico'
// });

// connect to database
// dbConnection.connect();

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`\x1b[32m[+]\x1b[0m API server started on port : \x1b[32m${port}\x1b[0m`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app); //register the route