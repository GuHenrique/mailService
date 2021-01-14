require('dotenv').config()
const express = require('express');
const app = express();
const mail = require('./src/router/mail/router')

app.use('/api', mail)

app.listen(process.env.SRV_PORT, () => console.log("api funcionando",));
