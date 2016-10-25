var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providerSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  photoUrl: {
    type: String
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String
  },
  highlights: {
    type: Array
  },
  statementSentences: {
    type: Array
  },
  priceInformation: {
    type: Object
  }
});


module.exports = mongoose.model('Provider', providerSchema);