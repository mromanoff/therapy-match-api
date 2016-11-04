var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var styleDescriptorSchema = new Schema({
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
  },
  {collection: 'styleDescriptors'}
);


module.exports = mongoose.model('StyleDescriptor', styleDescriptorSchema);