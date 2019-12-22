const Message = require('../models/Message')

module.exports = {
  async store (req, res) {
    try {
      const msg = await Message.create(req.body)
      return res.send(msg)
    } catch (error) {
      return res.status(400).send(msg)
    }
  }
}