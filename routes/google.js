const express = require('express');
const router = express.Router();
const passport = require('passport');
const {connect} = require('../public/js/firestore-connect');
const {userMiddlewareFuncs} = require('./users')
const {genericMid} = require('./generic')
var userProfile;



const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
router.get('/google',
    passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res, next) {
    //console.log(userProfile)
    const db = connect();
    next();
    //console.log(userMiddlewareFuncs)
    //res.json(userProfile).redirect('/success')
    //res.body = userProfile
    //res.redirect(307, '/user/add');
    // Successful authentication, redirect success.
   // res.redirect('/success');
  }, userMiddlewareFuncs.addUser, genericMid.success);





  module.exports = router;