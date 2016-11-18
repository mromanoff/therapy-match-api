var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    isMemberIdOnRecord: {
      type: Boolean,
      default: false
    }
  },
  {collection: 'user'}
);


module.exports = mongoose.model('User', userSchema);