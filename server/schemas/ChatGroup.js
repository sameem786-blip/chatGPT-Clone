const mongoose = require('mongoose');

const chatgroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
    timeStamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }

  // Add other fields as needed for your user schema
});

const ChatGroup = mongoose.model('ChatGroup', chatgroupSchema);

module.exports = ChatGroup;