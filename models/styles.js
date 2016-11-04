var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stylesSchema = new Schema({
    clinical: {
      type: Number,
      required: true
    },
    direct: {
      type: Number,
      required: true
    },
    nurturing: {
      type: Number,
      required: true
    }
  },
  {collection: 'styles'}
);


module.exports = mongoose.model('Styles', stylesSchema);