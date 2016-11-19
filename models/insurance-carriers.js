var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var insuranceCarrierSchema = new Schema({
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {collection: 'insuranceCarriers'}
);

module.exports = mongoose.model('InsuranceCarrier', insuranceCarrierSchema);