const express = require('express');
const dotenv = require('dotenv');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./db/mongoose');
require('./services/googleStratOptions');
dotenv.config();

// routes
const googleAuthRoutes = require('./routes/GoogleAuth-Routes');
const billingRoutes = require('./routes/Billing-Routes');
const userRoutes = require('./routes/User-Router');
const surveyRoutes = require('./routes/Survey-Routes');

// express application
const app = express();
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEYS],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(googleAuthRoutes);
app.use(billingRoutes);
app.use(userRoutes);
app.use(surveyRoutes);

// Dynamically changed PORT number
const PORT = process.env.PORT || 5000;
console.log(`Serve is running at port ${PORT}`);
app.listen(PORT);
