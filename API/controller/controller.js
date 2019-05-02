const {Provider, User} = require('../models/model');

const listAllProviders = function(req, res) {
  Provider.getAllProvider(function(err, fournisseur) {
    // console.log('controller')
    if (err) res.send(err);
    console.log('Liste fournisseurs :', fournisseur);
    res.send(fournisseur);
  });
};

const createProvider = function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone_number = req.body.phonenumber;
  const address = req.body.address;
  const description = req.body.description;

  console.log("New provider : \nName : " + name + "\nEmail : " + email + "\nPhone number : " + phone_number + "\nAddress : " + address + "\nDescription : " + description);
  
  // Provider.createProvider(function(err, newProvider) {
  //   if (err) res.send(err);
  //   res.json(newProvider);
  // });
  
  var newProvider = new Provider(req.body);
    //handles null error 
    if (!newProvider.name) {
        res.status(400).send({
            error: true,
            message: 'Please provide task/status'
        });
    } else {
        Provider.createProvider(newProvider, function (err, Provider) {
            if (err)res.send(err);
            res.json(Provider);
        });
    }

};

// exports.read_a_fournisseur = function(req, res) {
//   Fournisseur.getFournisseurById(req.params.fournisseurId, function(err, fournisseur) {
//     if (err)
//       res.send(err);
//     res.json(fournisseur);
//   });
// };

const updateProvider = function(req, res) {
  Provider.updateById(req.params.fournisseurId, new Fournisseur(req.body), function(err, fournisseur) {
    if (err) res.send(err);
    res.json(fournisseur);
  });
};

const deleteProvider = function(req, res) {
  Provider.remove( req.params.name, function(err, fournisseur) {
    if (err) res.send(err);
    res.json({ message: 'Fournisseur successfully deleted' });
  });
};

const listAllUsers = function(req, res) {
  User.getAllUsers(function(err, user) {
    console.log('controller')
    if (err) res.send(err);
    console.log('erreur', user);
    res.send(user);
  });
};



module.exports = {
  listAllProviders,
  createProvider,
  updateProvider,
  deleteProvider,
  listAllUsers
}