var mongoose = require('mongoose');

var ContactProviderSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  notes: {
    type: String
  },
  type: {
    type: String
  },
  providerId: {
    type: String,
    required: true
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ContactProvider', ContactProviderSchema);