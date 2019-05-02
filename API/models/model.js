const db = require('./db.js');
const bodyParser = require('body-parser');

//Fournisseur object constructor
const Provider = function (fournisseur) {
    this.name = fournisseur.name;
    this.email = fournisseur.email;
    this.phone_number = fournisseur.phone_number;
    this.address = fournisseur.address;
    this.description = fournisseur.description;
};
const User = function (user) {
    this.login = user.login;
    this.password = user.password;
};

Provider.createProvider = function createUser(newFournisseur, result) {
    db.query("INSERT INTO `fournisseur` (`name`,`email`,`phone_number`,`address`,`description`) VALUES ('" + this.name + "', '" + this.email + "', '" + this.phoneNumber + "', '" + this.address + "', '" + this.description + "')", newFournisseur, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        };
    });
};
// Task.getFournisseurById = function createUser(fournisseurId, result) {
//     sql.query("Select name from fournisseur where id = ? ", fournisseurId, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);

//         }
//     });
// };
Provider.getAllProvider = function getAllProvider(result) {
    db.query("Select * from fournisseur", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('fournisseurs : ', res);
            result(null, res);
        }
    });
};
Provider.updateById = function (id, fournisseur, result) {
    db.query("UPDATE fournisseur SET name = ? WHERE id = ?", [fournisseur.name, id], function (err, res) {
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
    db.query("Select * from compte", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('user : ', res);
            result(null, res);
        }
    });
};

module.exports =  { User, Provider };