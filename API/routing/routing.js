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
  })
});



// --------- POST METHODS ---------
// Fournisseurs
const postFournisseurs = app.post("/api/fournisseur", (req, res) => {
  const newFournisseur = new fournisseur({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    phone_number: req.body.phone_number,
    email: req.body.email
  });
  newFournisseur.save().then(fournisseur => {
      res.send(fournisseur);
      console.log(fournisseur);
    }).catch(err => {
      res.status(500).send(err);
    });
});




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
  postFournisseurs,
  deleteFournisseur,
  putFournisseur
};
