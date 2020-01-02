const Message = require('../models/Message')

module.exports = {
  async store (req, res) {
    try { 
      const msg = await Message.create(req.body)
      return res.send(msg)
    } catch (error) {
      return res.status(400).send(msg)
    }
  },

  async show (req, res) {
    Message.find({}, (err, msgs) => {
      return res.send(msgs)
    })
  },
  
  async index (req, res) {
    const { id } = req.params
    const msg = await Message.findById( id ) 
    return res.send(msg)
  },

  async update (req, res) {
    const { id } = req.params
    Message.findOne( id, (err, msg) => {
      msg.read = true
      msg.save()
      return res.send(msg)
    })
  },

  async delete (req, res) {
    const { id } = req.params
    Message.findOneAndDelete( id )
  }
}