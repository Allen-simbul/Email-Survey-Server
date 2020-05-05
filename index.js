const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

console.log(process.env);

// express application
const app = express();

authRoutes(app);

// Dynamically changed PORT number
const PORT = process.env.PORT || 5000;
console.log(`Serve is running at port ${PORT}`);
app.listen(PORT);
