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
  console.log(profile);
  const user = new User({
    googleId: profile.id,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
  });
  user.save();
};

passport.use(new GoogleStrategy(googleStrategyOptions, verifyCallback));

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/auth/google/callback', passport.authenticate('google'));

module.exports = router;
