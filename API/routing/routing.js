const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { fournisseur } = require("../models/fournisseur");
const { db } = require('../db/db');

const app = express();
app.use(bodyParser.json());

const styles = path.join(__dirname, '../../Site Web/' + 'styles');
app.use(express.static(styles));

const mainjs = path.join(__dirname, '../../Site Web/' + 'js');
app.use(express.static(mainjs));

// --------- GET METHODS ---------
// Generating the home page
const getHomePage = app.get("/", (req, res) => {
  const homePage = path.join(__dirname, "../../Site Web/" + "index.html");
  res.sendFile(homePage);
});

const getListPage = app.get("/fournisseurs", (req, res) => {
  const listPage = path.join(__dirname, "../../Site Web/pages/" + "list.html");
  res.sendFile(listPage);
});

const getAddingPage = app.get("/fournisseurs/ajout", (req, res) => {
  const addPage = path.join(__dirname, "../../Site Web/pages/" + "add.html");
  res.sendFile(addPage);
});

// Fournisseurs
const getFournisseurs = app.get("/api/fournisseur", (req, res) => {
  let queryFournisseur = 'SELECT * FROM fournisseur';
  
  db.query(queryFournisseur, (err, rows, fields) => {
    if (err) {
      res.status(500).send({error: 'Request failed !'})
    } 
    res.json(rows)
    rows.forEach(row => {
      console.table(`ID: ${row.id}\nNom: ${row.name}\nTéléphone: ${row.phone_number}\nEmail: ${row.email}\nAdresse: ${row.address}\nDescription ${row.description}\n`);
    });
  });
});

// Fournisseur by ID
const getOneFournisseur = app.get("/api/fournisseur/:id", (req, res) => {
  let queryOneFournisseur = 'SELECT * FROM fournisseur WHERE id = ?';
  
  db.query(queryOneFournisseur, [req.params.id], (err, row, fields) => {
    if (err) {
      res.status(500).send({error: 'Request failed !'})
    } 
    res.json(row)
    console.log(row);
  })
});


// --------- POST METHODS ---------
import { name, email, phoneNumber, address, description } from '../../Site Web/js/add';
// Fournisseurs
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const postNewFournisseur = app.post('/fournisseurs',urlencodedParser, function(req, res, next) {
  console.log(req.body);
  db.connect(function(err) {
    const insertProvider = "INSERT INTO `fournisseur` (`name`,`email`,`phone_number`,`address`,`description`) VALUES ('" + name.value + "', '" + email.value + "', '" + phoneNumber.value + "', '" + address.value + "', '" + description.value + "')";
    db.query(insertProvider, function(err, result)  {
      if(err) {
        console.log(`\x1b[32m[-] Error when inserted new provider !\x1b[0m`);
        throw err;
      } else console.log(`\x1b[32m[+] New provider inserted !\x1b[0m`);
    });
  });
});

// const postFournisseurs = app.post("/api/fournisseur", (req, res) => {
//   const newFournisseur = new fournisseur({
//     id: req.body.id,
//     name: req.body.name,
//     description: req.body.description,
//     address: req.body.address,
//     phone_number: req.body.phone_number,
//     email: req.body.email
//   });
//   newFournisseur.save().then(fournisseur => {
//       res.send(fournisseur);
//       console.log(fournisseur);
//     }).catch(err => {
//       res.status(500).send(err);
//     });
// });


// --------- DELETE METHODS ---------
// Fournisseurs
const deleteFournisseur = app.delete("/api/fournisseur/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    fournisseur.findByIdAndRemove(id).then(fournisseur => {
        if (!fournisseur) {
          res.status(404).send();
        } else {
          res.send("This item has been deleted");
        }
      }).catch(err => {
        res.status(500).send(err);
      });
  }
});


// --------- PUT METHODS ---------
// Fournisseur
const putFournisseur = app.put("/api/fournisseur/:id", function(req, res) {
  const id = req.params.id;
  const editedData = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    phone_number: req.body.phone_number,
    email: req.body.email
  };
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    fournisseur.findByIdAndUpdate(id, editedData)
      .then(fournisseur => {
        if (!fournisseur) {
          res.status(404).send();
        } else {
          res.send(fournisseur);
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
});



// --------- EXPORTING PREVIOUS MODULES ---------
module.exports = {
  app,
  getHomePage,
  getListPage,
  getAddingPage,
  getFournisseurs,
  getOneFournisseur,
  postNewFournisseur,
  deleteFournisseur,
  putFournisseur
};
