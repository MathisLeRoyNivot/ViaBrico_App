const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');
const dbConnection = require('./db');

dbConnection.query('USE ' + dbName);

module.exports = function(passport) {
 passport.serializeUser(function(user, done){
  done(null, user.id);
 });

 passport.deserializeUser(function(id, done){
  connection.query("SELECT * FROM compte WHERE id = ? ", [id],
   function(err, rows){
    done(err, rows[0]);
   });
 });

 passport.use(
  'local-signup',
  new LocalStrategy({
   usernameField : 'login',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, login, password, done){
   connection.query("SELECT * FROM compte WHERE login = ? ", 
   [login], function(err, rows){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'That is already taken'));
    }else{
     var newUserMysql = {
      login: login,
      password: bcrypt.hashSync(password, null, null)
     };

     var insertQuery = "INSERT INTO compte (login, password) values (?, ?)";

     connection.query(insertQuery, [newUserMysql.login, newUserMysql.password],
      function(err, rows){
       newUserMysql.id = rows.insertId;

       return done(null, newUserMysql);
      });
    }
   });
  })
 );

 passport.use('local-login', new LocalStrategy({
   usernameField : 'login',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, login, password, done){
   connection.query("SELECT * FROM compte WHERE login = ? ", [login],
   function(err, rows){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }
    if(!bcrypt.compareSync(password, rows[0].password))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));

    return done(null, rows[0]);
   });
  })
 );
};