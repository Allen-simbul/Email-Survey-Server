const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./RecipientSchema');

const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  recipients: {
    type: [RecipientSchema],
  },
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('Surveys', surveySchema);
