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
    Work.find({}, (err, works) => {
      res.send(works);
    });
  },
  
  async index (req, res) {
    const { _id } = req.params
    Work.find({ _id : _id }, (err, work) => {
      res.send(work)
    })
  }
}