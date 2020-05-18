const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

router.get('/api/surveys', requireLogin, (req, res) => {});

module.exports = router;
