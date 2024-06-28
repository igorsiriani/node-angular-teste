const mongoose = require('mongoose');

const HelpSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  meta: { type: Number, required: true },
  requester: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Help', HelpSchema);
