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
    done(null, existingUser);
  } else {
    const user = new User({
      googleId: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
    });
    await user.save().then((user) => {
      done(null, user);
    });
  }
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  await User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy(googleStrategyOptions, verifyCallback));

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
