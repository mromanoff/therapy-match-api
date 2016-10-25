var mongoose = require('mongoose');

var InsuranceCarriersSchema = mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {collection: 'insuranceCarriers'}
);


module.exports = mongoose.model('InsuranceCarrier', InsuranceCarriersSchema);