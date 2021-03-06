const db = require('./db.js');
const bodyParser = require('body-parser');

//Provider object constructor
const Provider = function (provider) {
    this.name = provider.name;
    this.email = provider.email;
    this.phone_number = provider.phonenumber;
    this.address = provider.address;
    this.description = provider.description;
};

// Function Add Provider
Provider.createProvider = function createProvider(newProvider, result) {
    // Query sql to make an insert with an array of args
    db.query("INSERT INTO fournisseur set ?", [newProvider], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        };
    });
};

// Function Listing Providers
Provider.getAllProvider = function getAllProvider(result) {
    // Query sql to collect all data from "fournisseur" table
    db.query("SELECT * FROM fournisseur", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


Provider.getProviderByName = function getProvider(name, result) {
    db.query("SELECT * FROM fournisseur WHERE name = ? ", [name], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);

        }
    });
};

// Function Update with name
Provider.updateByName = function updateByName(name, description, address, phone_number, email, result) {
    // Query sql to update the table "fournisseur"
    db.query("UPDATE fournisseur SET description = ?, address = ?, phone_number = ?, email = ? WHERE name = ?", [description, address, phone_number, email, name], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// Function delete with namz
Provider.remove = function removeProvider(name, result) {
    // Query sql to delete with "fournisseur"'s name
    db.query("DELETE FROM fournisseur WHERE name = ?", [name], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


//------------------------


//User object constructor

const User = function (user) {
    this.login = user.login;
    this.password = user.password;
};

// Function Get users
User.check = function checkLogin(login, password, result) {
    // Query sql to select all logins and passwords
    db.query("SELECT * FROM compte WHERE login = ? AND password = ?",[login, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Success : ', res);
            result(null, res);
        }
    });
};

module.exports = {
    User,
    Provider
};