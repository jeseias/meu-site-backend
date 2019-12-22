const Work = require('../models/Work')

module.exports = {
  async store (req, res) {
    try {
      const work = await Work.create(req.body)
      return res.send(work)
    } catch (error) {
      return res.status(400).send({ error })
    }
  }
}