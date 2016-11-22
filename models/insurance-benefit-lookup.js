var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var insuranceBenefitLookupSchema = new Schema({
    explanation: {
      type: Array,
      required: true
    }
  },
  {collection: 'benefitLookup'}
);

module.exports = mongoose.model('InsuranceBenefitLookup', insuranceBenefitLookupSchema);