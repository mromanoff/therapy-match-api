var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var providerSchema = new Schema({
  id: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: 'provider title'
  },
  degree: {
    type: String,
    default: null
  },
  school: {
    type: String,
    default: null
  },
  age: {
    type: Number,
    default: null
  },
  gender: {
    type: String,
    default: null
  },
  photoUrl: {
    type: String,
    default: null
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    default: null
  },
  highlights: {
    type: Array,
    default: []
  },
  statementSentences: {
    type: Array,
    default: []
  },
  priceInformation: {
    type: Object,
    default: {}
  }
});


var providerPageSchema = new Schema({
  page: {
    type: Number,
    default: 1
  },
  itemsCountPerPage: {
    type: Number,
    default: 10
  },
  totalItemsCount: {
    type: Number,
    default: null
  },
  providers: {
    type: [providerSchema]
  }
});


module.exports = mongoose.model('Provider', providerPageSchema);