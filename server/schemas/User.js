const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
  oAuthId: {

  },
  // Add other fields as needed for your user schema
});

const User = mongoose.model('User', userSchema);

module.exports = User;