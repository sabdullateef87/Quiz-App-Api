const mongoose = require('mongoose');
const { schema } = require('../test/models');

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  test: {
    type: Schema.Types.ObjectId,
    ref: "Test",
    required: true
  },
  question: {
    type: String, required: [true, "can't be blank"],
  },
  option1: {
    type: String,
    required: [true, "can't be blank"],
  },
  option2: {
    type: String
  },
  option3: {
    type: String,
    required: [true, "can't be blank"],
  },
  option4: {
    type: String,
    required: [true, "can't be blank"],
  },
  answer: {
    type: String,
    required: [true, "can't be blank"],
  },
  deleted: {
    type: Boolean
  },
}, { timestamps: true });

// module.exports = TestSchema;
const TestModel = mongoose.model('Question', QuestionSchema);
module.exports = TestModel