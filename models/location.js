var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var locationSchema = new Schema({
//   lat: {
//     type: String,
//     required: true
//   },
//   lng: {
//     type: String,
//     required: true
//   },
//   radius: {
//     type: String,
//     required: true
//   }
// });

var locationSchema = new Schema({
  zipCode: {
    type: String
  }
});


module.exports = mongoose.model('Location', locationSchema);