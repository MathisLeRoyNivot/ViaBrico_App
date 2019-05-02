const { Strategy } = require("passport-local");

const mysql = require("mysql");
const bcrypt = require("bcrypt-nodejs");
const { dbConnection, dbTableUsers } = require("./db");

dbConnection.query('USE ' + dbTableUsers);

const checkUser = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.desrializeUser((id, done) => {
        dbConnection.query("SELECT * FROM " + dbTableUsers + " WHERE id = ? ", [id], (err, rows) => {
            done(err, rows[0]);
        });
    });

    passport.use("local-signup", new Strategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, username, password, done) => {
        dbConnection.query("SELECT * FROM " + dbTableUsers + " WHERE username = ? ", [username], (err, rows) => {
            if(err) return done(err);
            if(rows.length) {
                return done(null, false, req.flash('SignupMessage', 'Username already taken'));
            } else {
                const newUser = {
                    username: username,
                    password: bcrypt.hashSync(passport, null, null)
                };  
                const insertNewUserQuery = "INSERT INTO " + dbTableUsers + " (username, password) VALUES (?, ?)"

                dbConnection.query(insertNewUserQuery, [newUser.username, newUser.password], (err, rows) => {
                    newUser.id = rows.insertId;
                    return done(null, newUser);
                });
            };
        });
    }));

    passport.use("local-signup", new Strategy({
        usernameField: 'username',
        passwordField: 'password',
         passReqToCallback: true
    }, (req, username, password, done) => {
        dbConnection.query("SELECT * FROM " + dbTableUsers + " WHERE username = ? ", [username], (err, rows) => {
            if(err) return done(err);
            if(!rows.length) return done(null ,false, req.flash('loginMessage', 'No user found'));
            if (!bcrypt.compareSync(passport, rows[0].password)) return done(null, false, req.flash('loginMessage', 'Wrong password'));
            return done(null, rows[0]);
        });
    }));
}

module.exports = {
    checkUser
}