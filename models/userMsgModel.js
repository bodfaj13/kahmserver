const mongoose = require('../config/mongoose');

var userMsgModelSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  sentAt: {
    type: String
  }
});

const UserMsg = mongoose.model('usermessages', userMsgModelSchema);
module.exports = UserMsg;
