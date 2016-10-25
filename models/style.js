var mongoose = require('mongoose');

var StyleSchema = mongoose.Schema({
  styleDescriptor: {
    type: String,
    required: true
  },
  example: {
    type: String,
    required: true
  },
  weights: {
    type: Array,
    required: true
  }
});


module.exports = mongoose.model('Style', StyleSchema);