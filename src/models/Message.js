const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel1: Number,
  tel2: Number,
  msg: String
})

module.exports = mongoose.model('Message', MessageSchema)