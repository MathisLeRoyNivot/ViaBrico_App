const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { fournisseur } = require("../models/fournisseur");

const app = express();
app.use(bodyParser.json());



// --------- GET METHODS ---------
// Generating the home page
const getHomePage = app.get("/", (req, res) => {
  const homePage = path.join(__dirname, "../" + "index.html");
  res.sendFile(homePage);
});

// Fournisseurs
const getFournisseurs = app.get("/api/fournisseur", (req, res) => {
  fournisseur.find().then(
    fournisseurList => {
      res.json(fournisseurList);
    },
    err => {
      res.status(500).send(err);
    }
  );
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
  newFournisseur
    .save()
    .then(fournisseur => {
      res.send(fournisseur);
      console.log(fournisseur);
    })
    .catch(err => {
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
    fournisseur.findByIdAndRemove(id)
      .then(fournisseur => {
        if (!fournisseur) {
          res.status(404).send();
        } else {
          res.send("This item has been deleted");
        }
      })
      .catch(err => {
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
  getHomePage,
  getFournisseurs,
  postFournisseurs,
  deleteFournisseur,
  putFournisseur,
  app
};
