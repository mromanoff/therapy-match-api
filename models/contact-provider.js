var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actions = 'REQUEST_CALL SCHEDULE_APPOINTMENT'.split(' ');

var contactProviderSchema = new Schema({
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
    type: String,
    enum: actions
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

module.exports = mongoose.model('ContactProvider', contactProviderSchema);