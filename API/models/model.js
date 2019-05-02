const db = require('./db.js');

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
    console.log(req.body);
    db.connect(function(err) {
        const insertProvider = "INSERT INTO `fournisseur` (`name`,`email`,`phone_number`,`address`,`description`) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.phonenumber + "', '" + req.body.address + "', '" + req.body.description + "')";
        db.query(insertProvider, function(err, result)  {
            if(err) {
                console.log(`\x1b[31m[-] Error when inserted new provider !\x1b[0m`);
                throw err;
            } else console.log(`\x1b[32m[+] New provider inserted !\x1b[0m`);
        });
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