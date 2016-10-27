var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var styleSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Style', styleSchema);