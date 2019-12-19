const User = require('../models/User')

module.exports = {
  // Storing the main user
  async store (req, res) {
    const {email, password, name} = req.body 
    // const { filename } = req.file 

    try {
      if(await User.findOne({ email }))
        return res.status(400).send({ error: 'User already Exists' })
  
      const user = await User.create({ 
        //thumbnail: filename,
        email,
        password,
        name
      })
      user.password = undefined
  
      return res.send(user)
    } catch (error) {
      return res.status(400).send({ error: 'Error registration failed' })
    }
  }

}