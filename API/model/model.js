const sql = require('./db.js');

//Fournisseur object constructor
const Fournisseur = function (fournisseur) {
    this.name = fournisseur.name;
    this.description = fournisseur.description;
    this.address = fournisseur.address;
    this.phone_number = fournisseur.phone_number;
    this.email = fournisseur.email;
};
Fournisseur.createFournisseur = function createUser(newFournisseur, result) {
    sql.query("INSERT INTO fournisseur set ?", newFournisseur, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
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
Fournisseur.getAllFournisseur = function getAllFournisseur(result) {
    sql.query("Select * from fournisseur", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('fournisseurs : ', res);

            result(null, res);
        }
    });
};
Fournisseur.updateById = function (id, fournisseur, result) {
    sql.query("UPDATE fournisseur SET name = ? WHERE id = ?", [fournisseur.name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Fournisseur.remove = function (id, result) {
    sql.query("DELETE FROM fournisseur WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Fournisseur;