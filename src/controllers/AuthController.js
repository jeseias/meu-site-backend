const bcyrpt = require('bcryptjs')
const User = require('../models/User')

module.exports = {
  // Storing the main user
  async store (req, res) { 
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if(!user)
      return res.status(400).send({ error: 'User not found' })

    if(!await bcyrpt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password' })
      
    user.password = undefined  

    res.send(user) 
  }

}