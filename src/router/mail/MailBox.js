const mailboxdb = require('./MailBoxdb')
const { Hermodr } = require('../../utils/hermodr-logger')
let logFile = 'DB/ MailBox.js'

class MailBox {

    constructor({ id, host, service, port, authUser, authPassword, folders}) {
        this.id = id
        this.host = host
        this.service = service
        this.port = port
        this.authUser = authUser
        this.authPassword = authPassword
        this.folders = folders
    }

    async create() {
        let mailBox = {
            host: this.host,
            service: this.service,
            port: this.port,
            authUser: this.authUser,
            authPassword: this.authPassword,
            folders: this.folders
        }

        try {

            return await mailboxdb.insert(mailBox)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }

    async searchById() {
        let mailBox = {
            _id: this.id
        }

        try {
            return await mailboxdb.searchOne(mailBox)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }

    async deleteById() {
        let mailBox = {
            _id: this.id
        }

        try {
            return await mailboxdb.remove(mailBox)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }

    async update() {
        let mailBox = {
            host: this.host,
            service: this.service,
            port: this.port,
            authUser: this.authUser,
            authPassword: this.authPassword,
            folders: this.folders
        }

        try {
            
            return await mailboxdb.update({_id: this.id}, mailBox)
        } catch (error) {
            Hermodr.error(logFile, error)
        }
    }
}

module.exports = MailBox