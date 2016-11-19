var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
      type: String,
      default: null
    },
    lastName: {
      type: String,
      default: null
    },
    dob: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null
    },
    carrierId: {
      type: Number,
      default: null
    }
  },
  {collection: 'user'}
);


module.exports = mongoose.model('User', userSchema);