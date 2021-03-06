const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../models/user');
const User = mongoose.model('user')

module.exports = function(passport){
    passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
        console.log("in local startegy")
        User.findOne({
            email: email
        }).then(user=>{
            console.log("here",user);
            if (!user){
                return done(null, false, {message: 'No User Found'})
            }

            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if (err) throw err;
                if (isMatch){
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Incorrect password'})
                }

            })
        })
        //console.log("hi",error)
    }))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}