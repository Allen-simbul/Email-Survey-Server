const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('Users');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv');

const googleStrategyOptions = require('../services/googleStratOptions');
dotenv.config();

const verifyCallback = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }

  const user = await new User({
    googleId: profile.id,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
  }).save();
  done(null, user);
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id, '_id credits firstName lastName');
  done(null, user);
});

passport.use(new GoogleStrategy(googleStrategyOptions, verifyCallback));

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/surveys');
  }
);

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
