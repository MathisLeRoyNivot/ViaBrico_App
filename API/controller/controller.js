const Fournisseur = require('../model/model.js');


exports.list_all_fournisseurs = function(req, res) {
  Fournisseur.getAllFournisseur(function(err, fournisseur) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', fournisseur);
    res.send(fournisseur);
  });
};



exports.create_a_fournisseur = function(req, res) {
  const new_fournisseur = new Fournisseur(req.body);

  //handles null error 
   if(!new_fournisseur.name || !new_fournisseur.description){

            res.status(400).send({ error:true, message: 'Please provide name/description' });

        }
else{
  
  Fournisseur.createFournisseur(new_fournisseur, function(err, fournisseur) {
    
    if (err)
      res.send(err);
    res.json(fournisseur);
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


exports.update_a_fournisseur = function(req, res) {
  Fournisseur.updateById(req.params.fournisseurId, new Fournisseur(req.body), function(err, fournisseur) {
    if (err)
      res.send(err);
    res.json(fournisseur);
  });
};


exports.delete_a_fournisseur = function(req, res) {


  Fournisseur.remove( req.params.fournisseurId, function(err, fournisseur) {
    if (err)
      res.send(err);
    res.json({ message: 'Fournisseur successfully deleted' });
  });
};