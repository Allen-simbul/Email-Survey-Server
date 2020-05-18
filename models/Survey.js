const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    type: [String],
  },
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
});

mongoose.model("Surveys", surveySchema);
