const mongoose = require('mongoose');

const HousehelpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  skills: { type: [String], required: true },
  photo: { type: String, required: true }, // Store photo as a base64 string or URL
  username: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Househelp', HousehelpSchema);