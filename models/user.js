var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
      type: String,
      //default: null,
      required: true
    },
    lastName: {
      type: String,
      //default: null,
      required: true
    },
    dob: {
      type: String,
      //default: null,
      required: true
    },
    state: {
      type: String,
      //default: null,
      required: true
    },
    carrierId: {
      type: Number,
      //default: null,
      required: true
    }
  },
  {collection: 'user'}
);


module.exports = mongoose.model('User', userSchema);