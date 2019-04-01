const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./routes/routes.js'); //importing route

const app = express();
const port = process.env.PORT || 3000;


const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdd-viabrico'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app); //register the route