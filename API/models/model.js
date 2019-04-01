const db = require('./db.js');

//Fournisseur object constructor
const Provider = function (fournisseur) {
    this.name = fournisseur.name;
    this.email = fournisseur.email;
    this.phone_number = fournisseur.phone_number;
    this.address = fournisseur.address;
    this.description = fournisseur.description;
};

Provider.createProvider = function createUser(newFournisseur, result) {
    db.query("INSERT INTO fournisseur set ?", newFournisseur, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
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
Provider.remove = function (id, result) {
    db.query("DELETE FROM fournisseur WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Provider;