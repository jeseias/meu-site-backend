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
  }
})

module.exports = mongoose.model('Message', MessageSchema)