const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { House } = require("../models/houses");

const app = express();
app.use(bodyParser.json());

// --- STYLES DIRECTORY IMPORTATION ---
const styles = path.join(__dirname, "../" + "styles");
app.use(express.static(styles));

const ObjectId = mongoose.Types.ObjectId;

// --------- GET METHODS ---------
// Generating the home page
const getHomePage = app.get("/", (req, res) => {
  const homePage = path.join(__dirname, "../" + "index.html");
  res.sendFile(homePage);
});

// Houses full
const getHouses = app.get("/api/houses", (req, res) => {
  House.find().then(
    houseList => {
      res.json(houseList);
    },
    err => {
      res.status(500).send(err);
    }
  );
});

// Houses one
const getAHouse = app.get("/api/houses/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send("not found");
  } else {
    House.findById(id)
      .then(house => {
        if (!house) {
          res.status(404).send();
        } else {
          res.send(house);
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
});

// --------- POST METHODS ---------

// Houses
const postHouses = app.post("/api/houses", (req, res) => {
  const newHouse = new House({
    name: req.body.name,
    colors: req.body.colors,
    animal: req.body.animal,
    trait: req.body.trait,
    head: req.body.head,
    ghost: req.body.ghost,
    commom_room: req.body.commom_room
  });
  newHouse
    .save()
    .then(house => {
      res.send(house);
      console.log(house);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// --------- DELETE METHODS ---------

// Houses
const deleteHouse = app.delete("/api/houses/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    House.findByIdAndRemove(id)
      .then(house => {
        if (!house) {
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

// Houses
const putHouse = app.put("/api/houses/:id", function(req, res) {
  const id = req.params.id;
  const editedData = {
    name: req.body.name,
    colors: req.body.colors,
    animal: req.body.animal,
    trait: req.body.trait,
    head: req.body.head,
    ghost: req.body.ghost,
    commom_room: req.body.commom_room
  };
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    House.findByIdAndUpdate(id, editedData)
      .then(house => {
        if (!house) {
          res.status(404).send();
        } else {
          res.send(house);
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
  getHouses,
  getAHouse,
  postHouses,
  deleteHouse,
  putHouse,
  app
};
