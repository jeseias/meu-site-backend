const Testimonial = require('../models/Testimonial')

module.exports = {
  // Storing the main user
  async store (req, res) {
    const {email} = req.body 
    const { filename } = req.file 

    try {
      if(await Testimonial.findOne({ email }))
        return res.status(400).send({ error: 'This testimonial already exists' })
  
      const testimonial = await Testimonial.create(req.body) 
      testimonial.thumbnail = filename
      testimonial.save() 
      return res.send(testimonial)
    } catch (error) {
      return res.status(400).send({ error: 'Error registration this testimonial failed' })
    }
  },
  
  async show (req, res) {
    Testimonial.find({}, (err, clients) => {
      return res.send(clients)
    })
  }
}