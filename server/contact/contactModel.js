var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name: {type: String, required: true},
  interval: {type: Number, required: true},
  intervalKey: {type: String, required: true},
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
