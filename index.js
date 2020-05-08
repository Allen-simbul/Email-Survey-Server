const express = require('express');
require('./db/mongoose');
require('./services/passport');

// routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routers/User-Router');

// express application
const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

// Dynamically changed PORT number
const PORT = process.env.PORT || 5000;
console.log(`Serve is running at port ${PORT}`);
app.listen(PORT);
