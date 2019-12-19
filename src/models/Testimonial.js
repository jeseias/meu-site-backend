const mongoose = require('mongoose')

const TesttimonialSchema = new mongoose.Schema({
  thumbnail: String,
  name: {
    type: String,
    required: true
  },
  work: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  saying: {
    type: String,
    required: true
  }
})

TesttimonialSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:2001/files/${this.thumbnail}`
})

module.exports = mongoose.model('Testimonial', TesttimonialSchema)