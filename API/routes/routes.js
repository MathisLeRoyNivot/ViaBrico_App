module.exports = function (app) {
    const todoList = require('../controller/controller.js');

    // todoList Routes
    app.route('/fournisseurs')
        .get(todoList.listAllProviders)
        .post(todoList.createProvider);

    app.route('/fournisseurs/:name')
        .put(todoList.updateProvider)
        .delete(todoList.deleteProvider);
    
    app.route('/users')
        .get(todoList.listAllUsers);
};


