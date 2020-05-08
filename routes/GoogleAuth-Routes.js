const express = require('express');
const router = new express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv');

const googleStrategyOptions = require('../services/googleStratOptions');
dotenv.config();

const verifyCallback = async (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
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
