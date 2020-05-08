const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('Users');

// This Routes will handle options for Users than have been logged in and authenticated
router.use('/', async (req, res) => {
  try {
    res.status(201).send('hello world');
  } catch {}
});

module.exports = router;
