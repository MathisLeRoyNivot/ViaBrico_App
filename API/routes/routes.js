module.exports = function (app) {
    const todoList = require('../controller/controller.js');

    // todoList Routes
    app.route('/fournisseurs')
        .get(todoList.listAllProviders)
        .post(todoList.createProvider);

    app.route('/fournisseurs/:fournisseurId')
        //.get(todoList.read_a_fournisseur)
        .put(todoList.updateProvider)
        .delete(todoList.deleteProvider);
};


