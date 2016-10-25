var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
  radius: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Location', LocationSchema);