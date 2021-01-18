require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const { Hermodr, HermodrRoutes} = require('./src/utils/hermodr-logger')
const mail = require('./src/router/mail/router')
require('./src/db/mongodb')
let logFile = 'Server.js'


app.use(bodyParser.json())

app.use('/api', mail)
app.use('/api',HermodrRoutes)


app.listen(process.env.SRV_PORT, () => Hermodr.log(logFile, 'api funcionando',));
