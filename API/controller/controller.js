const { Provider, User } = require('../models/model');

// Use function get Providers
const listAllProviders = function (req, res) {
  Provider.getAllProvider(function (err, fournisseur) {
    if (err) res.send(err);
    console.log('Liste fournisseurs :', fournisseur);
    res.send(fournisseur);
  });
};


const read_a_provider = function (req, res) {
  Provider.getProviderByName(req.params.name, function (err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};



// Use function createProvider
const createProvider = function (req, res) {
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
      if (err) res.send(err);
      res.json(Provider);
    });
  }

};


// Use function Update Provider
const updateProvider = function (req, res) {
  if (req.body.name) {
    Provider.updateByName(req.body.name, req.body.description, req.body.address, req.body.phone_number, req.body.email, function (err, provider) {
      if (err) {
        res.send(err);
      };
      res.json({
        message: 'Provider successfully modified'
      });
    })
  } else if (req.params.name) {
    Provider.updateByName(req.params.name, req.params.description, req.params.address, req.params.phone_number, req.params.email, function (err, provider) {
      if (err) {
        res.send(err);
      };
      res.json({
        message: 'Provider successfully modified'
      });
    })
  }

};



// Use function delete Provider
const deleteProvider = function (req, res) {
  if (req.body.name) {
    Provider.remove(req.body.name, function (err, provider) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Provider successfully deleted'
      });
    });
  } else if (req.params.name) {
    Provider.remove(req.params.name, function (err, provider) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Provider successfully deleted'
      });
    });
  }

};

//Check if username/password couple is in Database
const checkUser = function (req, res) {

  if (req.body.login) {
    User.check(req.body.login, req.body.password, function (err, user) {
      if (err) res.send(err);
      if (user[0]) {
        res.json({
          "login": user[0].login,
          "password": user[0].password
        });
      } else {
        res.json({
          "message": "Incorrect login or password"
        })
      }

    });
  } else if (req.query.login) {
    User.check(req.query.login, req.query.password, function (err, user) {
      if (err) res.send(err);
      if (typeof (user[0]) != 'undefined') {
        res.json({
          "login": user[0].login,
          "password": user[0].password
        });
      } else {
        res.json({
          "message": "Incorrect login or password"
        })
      }

    });
  }

};

// Exportation des méthodes
module.exports = {
  listAllProviders,
  createProvider,
  updateProvider,
  deleteProvider,
  checkUser,
  read_a_provider
}