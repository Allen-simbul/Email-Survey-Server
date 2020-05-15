const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO: make a different file for the repeating options
const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  credits: {
    type: Number,
    default: 0,
  },
});

mongoose.model('Users', userSchema);
