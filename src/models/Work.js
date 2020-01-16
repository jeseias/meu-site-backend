const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  type: String,
  link: String
}, {
  toJSON: {
    virtuals: true
  }
})

WorkSchema.virtual('thumbnail_url').get(function(){
  return `https://jmcd.herokuapp/files/${this.thumbnail}`
})

module.exports = mongoose.model('Trabalho', WorkSchema)