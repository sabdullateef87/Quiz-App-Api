const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestSchema = new Schema({
  title: {
    type: String, required: [true, "can't be blank"],
  },
  details: {
    type: String, required: [true, "can't be blank"],
  },
  instructions: {
    type: String,
    required: [true, "can't be blank"],
  },
  active: {
    type: Boolean
  },
  deleted: {
    type: Boolean
  },
}, { timestamps: true });

// module.exports = TestSchema;
const TestModel = mongoose.model('Test', TestSchema);
module.exports = TestModel