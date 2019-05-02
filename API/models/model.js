const db = require('./db.js');
const bodyParser = require('body-parser');

//Fournisseur object constructor
const Provider = function (provider) {
    this.name = provider.name;
    this.email = provider.email;
    this.phone_number = provider.phonenumber;
    this.address = provider.address;
    this.description = provider.description;
};

const User = function (user) {
    this.login = user.login;
    this.password = user.password;
};

Provider.createProvider = function createProvider(newProvider, result) {
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

Provider.getAllProvider = function getAllProvider(result) {
    db.query("SELECT * FROM fournisseur", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            // console.log('Fournisseurs : ', res);
            result(null, res);
        }
    });
};

Provider.updateById = function (id, fournisseur, result) {
    db.query("UPDATE fournisseur SET name = ? WHERE id = ?", [Provider.name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Provider.remove = function removeProvider(name, result) {
    db.query("DELETE FROM fournisseur WHERE name = ?", [name], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
User.getAllUsers = function getAllUsers(result) {
    db.query("SELECT * FROM compte", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('user : ', res);
            result(null, res);
        }
    });
};

module.exports =  { 
    User, 
    Provider 
};