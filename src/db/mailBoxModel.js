const mongoose = require('mongoose');

const mailBox = {
    host: String,
    service: String,
    port: Number,
    authUser: String,
    authPassword: String,
    folders: Array
}

const mailBoxSchema = new mongoose.Schema(mailBox)

const mailBoxModel = mongoose.model('MailBox', mailBoxSchema)


module.exports = mailBoxModel