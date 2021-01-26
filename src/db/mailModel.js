const mongoose = require('mongoose');

const mail = {
    from: String,
    to: String,
    cc: String,
    cco: String,
    subject: String,
    text: String,
    mailbox: Object,
    status: String,
    userSend: String,
    error: String,
    attachment: String,
    folder: String
}
  /*
    - Possiveis Status
        - READ
        - UNREAD
        - Draft - Rascunho
        - Sent
        - Pending
    - Possiveis Attachments
        - Yes
        - No
  */

const mailSchema = new mongoose.Schema(mail)
const mailModel = mongoose.model('Mail', mailSchema)


module.exports = mailModel