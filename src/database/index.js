const mongoose = require('mongoose') 

mongoose.connect('mongodb+srv://jeseias:jeseias4475@cluster0-u6ro4.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}) 

mongoose.connection.once('open', () => console.log('Connection with database successful') )

 