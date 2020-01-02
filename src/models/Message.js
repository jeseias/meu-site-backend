const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel1: Number,
  tel2: Number,
  msg: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  read: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Message', MessageSchema)