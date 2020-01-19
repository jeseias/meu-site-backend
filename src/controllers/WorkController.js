const Work = require('../models/Work')

module.exports = {
  async show (req, res) { 
    Work.find({}, function (err, works) {
      res.send(works);
    }); 
  },

  async index (req, res) { 
    const work = await Work.findById( req.params.id ) 
    return res.send(work)
  },

  async store (req, res) {  
    const {filename} = req.file
    try { 
      const work = await Work.create(req.body)
      work.thumbnail = filename
      work.save()
      return res.send(work)
    } catch (error) {
      return res.status(400).send({ error })
    }   
  },
  
  async delete (req, res) {
    Work.findByIdAndDelete(req.params.id, (err, work) => res.send(work))
  },

  async update (req, res) {
    console.log('update reques mande')
    return res.send({ ok: true })
  }
}