const mongoose = require('mongoose');

const mail = {
    from: String,
    to: String,
    subject: String,
    text: String,
    mailBox: Array,
    status: String,
    userSend: String
}
  
const mailSchema = new mongoose.Schema(mail)
const mailModel = mongoose.model('Mail', mailSchema)


module.exports = mailModel