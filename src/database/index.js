const mongoose = require('mongoose') 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}) 

mongoose.connection.once('open', () => console.log('Connection with database successful') )

 