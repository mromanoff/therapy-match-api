var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logout = new Schema({
    message: {
      type: String
    },
    loggedOutAt: {
      type: Date,
      default: Date.now()
    }
  },
  {collection: 'logout'}
);


module.exports = mongoose.model('Logout', logout);