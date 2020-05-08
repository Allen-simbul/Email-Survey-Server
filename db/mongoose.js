const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// connects express server with mongodb
mongoose.connect(process.env.MONGOOSE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
