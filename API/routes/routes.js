module.exports = function (app) {
    const todoList = require('../controller/controller.js');

    // todoList Routes
    app.route('/providers')
        .get(todoList.listAllProviders)
        .post(todoList.createProvider);

    app.route('/providers/:name')
        .get(todoList.read_a_provider)
        .post(todoList.updateProvider)
        .put(todoList.updateProvider)
        .delete(todoList.deleteProvider);
    
    app.route('/users')
        .post(todoList.checkUser);

        module.exports = function(app, passport) {
            // app.get('/', function(req, res){
            //  res.render('index.ejs');
            // });
           
            // app.get('/login', function(req, res){
            //  res.render('login.ejs', {message:req.flash('loginMessage')});
            // });
           
            app.post('/login', passport.authenticate('local-login', {
             successRedirect: '/profile',
             failureRedirect: '/login',
             failureFlash: true
            }),
             function(req, res){
              if(req.body.remember){
               req.session.cookie.maxAge = 1000 * 60 * 3;
              }else{
               req.session.cookie.expires = false;
              }
              res.redirect('./pages/list.html');
             });
           
            app.get('/signup', function(req, res){
             res.render('signup.ejs', {message: req.flash('signupMessage')});
            });
           
            app.post('/signup', passport.authenticate('local-signup', {
             successRedirect: '/profile',
             failureRedirect: '/signup',
             failureFlash: true
            }));
           
            // app.get('/profile', isLoggedIn, function(req, res){
            //  res.render('profile.ejs', {
            //   user:req.user
            //  });
            // });
           
            app.get('/logout', function(req,res){
             req.logout();
             res.redirect('/');
            })
           };
           
           function isLoggedIn(req, res, next){
            if(req.isAuthenticated())
             return next();
           
            res.redirect('/');
           }
};


