module.exports = function (app) {
    const todoList = require('../controller/controller.js');

    // todoList Routes
    app.route('/providers')
        .get(todoList.listAllProviders)
        .post(todoList.createProvider);

    app.route('/providers/:name')
        .get(todoList.read_a_provider)
        .post(todoList.updateProvider)
        .delete(todoList.deleteProvider);
    
    app.route('/users')
        .post(todoList.checkUser);
};


