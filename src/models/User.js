const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  thumbnail: String,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  location: String,
  info1: String,
  info2: String,
  projectos: String,
  experience: {
    type: String,
    default: new Date().getFullYear() - 2017
  }
}, {
  toJSON: {
    virtuals: true
  }
})

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash 
  next()
})

UserSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:2001/files/${this.thumbnail}`
})

module.exports = mongoose.model('User', UserSchema)