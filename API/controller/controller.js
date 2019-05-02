const {Provider, User} = require('../models/model');

// Use function get Providers
const listAllProviders = function(req, res) {
  Provider.getAllProvider(function(err, fournisseur) {
    if (err) res.send(err);
    console.log('Liste fournisseurs :', fournisseur);
    res.send(fournisseur);
  });
};


// Use function createProvider
const createProvider = function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone_number = req.body.phonenumber;
  const address = req.body.address;
  const description = req.body.description;

  console.log("New provider : \nName : " + name + "\nEmail : " + email + "\nPhone number : " + phone_number + "\nAddress : " + address + "\nDescription : " + description);
  
  var newProvider = new Provider(req.body);
    //handles null error 
    if (!newProvider.name) {
        res.status(400).send({
            error: true,
            message: 'Please provide name'
        });
    } else {
        Provider.createProvider(newProvider, function (err, Provider) {
            if (err)res.send(err);
            res.json(Provider);
        });
    }

};


// Use function Update Provider
const updateProvider = function(req, res) {
  Provider.updateByName(req.body.name, req.body.description, req.body.address, req.body.phone_number, req.body.email, function(err, provider) {
    if (err) res.send(err);
    res.json({ message: 'Provider successfully modified' });
  });
};


// Use function delete Provider
const deleteProvider = function(req, res) {
  Provider.remove( req.body.name, function(err, provider) {
    if (err) res.send(err);
    res.json({ message: 'Provider successfully deleted' });
  });
};


// Use function get Users
// const listAllUsers = function(req, res) {
//   User.getAllUsers(function(err, user) {
//     console.log('controller')
//     if (err) res.send(err);
//     console.log('erreur', user);
//     res.send(user);
//   });
// };

//Check if username/password couple is in Database
const checkUser = function(req, res) {
  User.check( req.body.login, req.body.password, function(err, user) {
    if (err) res.send(err);
    if (user[0]) {
      res.json(
        {
          "login" : user[0].login,
          "password" : user[0].password
        }
      );
    }
    else {
      res.json({ "message" : "Incorrect login or password"})
    }
    
  });
};


module.exports = {
  listAllProviders,
  createProvider,
  updateProvider,
  deleteProvider,
  checkUser
}