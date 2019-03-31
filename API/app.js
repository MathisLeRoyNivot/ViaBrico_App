// Import depedencies
const http = require("http");
const { argv } = require("yargs");
const routing = require("./routing/routing.js");

// Port argument, if nothing entered, default port is 3000
const inputPort = argv.port;
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

//Launch server on port given by the user
http.Server(routing.app);

routing.app.listen(port, () => {
    routing.getHomePage;
    console.log(`\x1b[32m[+]\x1b[0m Server is running on port : \x1b[36m${port}\x1b[0m\n\x1b[32m[+]\x1b[0m You can routing to the server at the following address : \x1b[36mhttp://localhost:${port}/\x1b[0m `);
});

module.exports = {};