// Import depedencies
const http = require("http");
const { argv } = require("yargs");
const routing = require("./routing/routing.js");

// Port argument, if nothing entered, default port is 3000
const inputPort = argv.port;
const inputDoc = argv.doc;
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

//Launch server on port given by the user
http.Server(routing.app);
const launchRouting = (inputDoc, callback) => {
  routing.app.listen(port, () => {
    routing.getHomePage;
    if (inputDoc) {
      callback(`\x1b[36mServer is running on port : \x1b[31m ${port} \x1b[36m \nYou can routing to the server at the following address :\x1b[31m http://localhost:${port}/\n \x1b[36m This API contains 3 collections, Characters, Houses and Movies. \n You can perform get, post, put and delete methods on each of those collections. \n If you want more informations, please visit : \x1b[31m https://github.com/MathisLeRoyNivot/NodeJS_Project`);
    } else {
      callback(`\x1b[36mServer is running on port : \x1b[31m ${port} \x1b[36m \nYou can routing to the server at the following address :\x1b[31m http://localhost:${port}/`);
    }
  });

};

launchRouting(inputPort, (err, logPort) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(logPort);
  }
});

module.exports = {};