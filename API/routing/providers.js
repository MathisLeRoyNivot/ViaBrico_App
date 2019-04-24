const { db } = require('../db/db');
const { app } = require('./routing');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/add',urlencodedParser, function(req, res, next) {
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.phonenumber);
    console.log(req.body.address);
    console.log(req.body.description);
    
    db.connect(function(err) {
        if (err) throw  err;
        console.log("connected");
        var sql = "INSERT INTO `fournisseur` (`name`,`email`,`phone_number`,`address`,`description`) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.phonenumber + "', '" + req.body.address + "', '" + req.body.description + "')";
        con.query(sql, function(err, result)  {
            if(err) throw err;
            console.log("Data inserted !");
        });
    });
    //res.render('index', {title: 'Express'});
});