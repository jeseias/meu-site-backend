const Work = require('../models/Work')

module.exports = {
  async show (req, res) {
    try {
      const works = Work.find({})
      return res.send(works)
    } catch (error) {
      
    }
  },

  async store (req, res) {
    try {
      const work = await Work.create(req.body)
      return res.send(work)
    } catch (error) {
      return res.status(400).send({ error })
    }
  }
}