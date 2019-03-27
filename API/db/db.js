// Connexion
const mongoose = require("mongoose");
const { privateurl } = require("./privateurl");

const url = privateurl;
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

// Exportation
module.exports = { mongoose };
