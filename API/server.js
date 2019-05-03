const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');//importing route

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`\x1b[32m[+]\x1b[0m API server started on port : \x1b[32m${port}\x1b[0m`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./models/connectiontest')(passport);
app.use(session({
    secret: 'justasecret',
    resave:true,
    saveUninitialized: true
   }));
   
   app.use(passport.initialize());
   app.use(passport.session());
   app.use(flash());

routes(app); //register the route