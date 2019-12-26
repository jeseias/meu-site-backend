const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  type: String,
  link: String
})

WorkSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:2001/files/${this.thumbnail}`
})

module.exports = mongoose.model('Trabalho', WorkSchema)