module.exports = function (app) {
    const todoList = require('../controller/controller.js');

    // todoList Routes
    app.route('/fournisseurs')
        .get(todoList.list_all_fournisseurs)
        .post(todoList.create_a_fournisseur);

    app.route('/fournisseurs/:fournisseurId')
        //.get(todoList.read_a_fournisseur)
        .put(todoList.update_a_fournisseur)
        .delete(todoList.delete_a_fournisseur);

};


