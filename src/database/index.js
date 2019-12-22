const mongoose = require('mongoose') 

mongoose.connect('mongodb://localhost:27017/jmcd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}) 

mongoose.connection.once('open', () => console.log('Connection with database successful') )

 