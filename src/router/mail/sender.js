const nodemailer = require('nodemailer');
const maildb = require('./Maildb')
const {
    Hermodr
} = require('../../utils/hermodr-logger')
let logFile = 'MAIL/ router.js'


try {
    let mails = maildb.search({
        status: 'P'
    })

    for (var i in mails) {

        var sender = nodemailer.createTransport({
            host: mails[i]["mailbox"]["host"],
            service: mails[i]["mailbox"]["service"],
            port: mails[i]["mailbox"]["port"],
            secure: true,
            auth: {
                user: mails[i]["mailbox"]["authUser"],
                pass: mails[i]["mailbox"]["authPassword"]
            }
        })

        var mail = {
            from: mails[i]["from"],
            to: mails[i]["to"],
            subject: mails[i]["subject"],
            text: mails[i]["text"]
        }

        sender.sendMail(mail, function (error) {
            if (error) {
                Hermodr.error(logFile, "Erro no envio de E-mail", error)
                throw 'Erro ao enviar e-mail'
            }

        })
    }

} catch (error) {
    Hermodr.error(logFile, error)
}