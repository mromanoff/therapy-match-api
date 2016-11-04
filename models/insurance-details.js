var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var insuranceDetailSchema = new Schema({
    insuranceCarrier: {
      type: String
    },
    memberId: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    dob: {
      type: String
    },
    gender: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    }
  },
  {collection: 'insuranceDetails'}
);


module.exports = mongoose.model('InsuranceDetail', insuranceDetailSchema);