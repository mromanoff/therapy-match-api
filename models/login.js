var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var login = new Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {collection: 'login'}
);


module.exports = mongoose.model('Login', login);