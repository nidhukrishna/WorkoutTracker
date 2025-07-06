const mongoose = require('mongoose');

const UserEntrySchema = new mongoose.Schema({
  mood: String,
  energy: Number,
  sleep: Number,
  soreness: [String],
  primaryMuscle: String,
  secondaryMuscle: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserEntry', UserEntrySchema);
