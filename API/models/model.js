const db = require('./db');

//Fournisseur object constructor
const Provider = function (provider) {
    this.name = provider.name;
    this.email = provider.email;
    this.phone_number = provider.phonenumber;
    this.address = provider.address;
    this.description = provider.description;
};

Provider.createProvider = function createProvider(newProvider, result) {
    db.query("INSERT INTO fournisseur set ?", [newProvider], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
    // db.connect(function(err) {
    //     const insertProvider = "INSERT INTO `fournisseur` (`name`,`email`,`phone_number`,`address`,`description`) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.phonenumber + "', '" + req.body.address + "', '" + req.body.description + "')";
    //     db.query(insertProvider, function(err, result)  {
    //         if(err) {
    //             console.log(`\x1b[31m[-] Error when inserted new provider !\x1b[0m`);
    //             throw err;
    //         } else console.log(`\x1b[32m[+] New provider inserted !\x1b[0m`);
    //     });
    // });
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