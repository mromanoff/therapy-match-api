var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var styleSchema = new Schema({
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


module.exports = mongoose.model('Style', styleSchema);