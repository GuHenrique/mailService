const maildb = require('../mail/Maildb')
const { Hermodr } = require('../../utils/hermodr-logger')
let logFile = 'MAIL/ Mail.js'

class Mail {

    constructor({id, from, to, cc, cco, subject, text, mailbox, status, userSend, error, attachment, folder}) {
        this.id = id
        this.from = from
        this.to = to
        this.cc = cc
        this.cco = cco
        this.subject = subject
        this.text = text
        this.mailbox = mailbox
        this.status = status
        this.userSend = userSend
        this.error = error
        this.attachment = attachment
        this.folder = folder
    }

    async create() {
        let mail = {
            from: this.from,
            to: this.to,
            cc: this.cc,
            cco: this.cco,
            subject: this.subject,
            text: this.text,
            mailbox: this.mailbox,
            status: this.status,
            userSend: this.userSend,
            error: this.error,
            attachment: this.attachment,
            folder: this.folder
        }

        try {
            
            return await maildb.insert(mail)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }
        
    async searchById() {

        try {
            return await maildb.searchOne(this.id)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }

    async update() {
        let mail = {
            from: this.from,
            to: this.to,
            cc: this.cc,
            cco: this.cco,
            subject: this.subject,
            text: this.text,
            mailbox: this.mailbox,
            status: this.status,
            userSend: this.userSend,
            error: this.error,
            attachment: this.attachment,
            folder: this.folder
        }

        try {
            
            return await maildb.update({_id: this.id}, mail)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }

    async deleteById() {

        try {
            return await maildb.remove(this.id)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }
}

module.exports = Mail