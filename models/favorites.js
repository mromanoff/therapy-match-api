var mongoose = require('mongoose');

var FavoriteSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String
  },
  isFavorite: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);