const mongoose = require('mongoose');
const { Hermodr } = require('../utils/hermodr-logger')
let logFile = 'mongodb.js'

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    Hermodr.log(logFile, "Banco Conectado")
  }).catch((error) => {

    Hermodr.error(logFile, error)
  })
