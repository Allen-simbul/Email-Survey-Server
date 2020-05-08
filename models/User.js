const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    trim: true,
  },
});

mongoose.model('Users', userSchema);
