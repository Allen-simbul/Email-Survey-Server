const express = require('express');
require('./db/mongoose');
require('./services/googleStratOptions');

// routes
const googleAuthRoutes = require('./routes/GoogleAuth-Routes');
const userRoutes = require('./routes/User-Router');

// express application
const app = express();

app.use(express.json());
app.use(googleAuthRoutes);
app.use(userRoutes);

// Dynamically changed PORT number
const PORT = process.env.PORT || 5000;
console.log(`Serve is running at port ${PORT}`);
app.listen(PORT);
