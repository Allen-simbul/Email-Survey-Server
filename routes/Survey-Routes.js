const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
require('../models/Survey');
const Survey = mongoose.model('Surveys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

router.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
  console.log('req.body ', req.body);
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title: title,
    subject: subject,
    body: body,
    recipients: recipients.split(',').map((email) => {
      email.trim();
    }),
    _user: req.user._id,
    dateSent: Date.now(),
  });
});

module.exports = router;
