
class MailBox {

    constructor(id, host, service, port, authUser, authPassword, folders){
        this.id = id
        this.host = host
        this.service = service
        this.port = port
        this.authUser = authUser
        this.authPassword = authPassword
        this.folders = folders
    }

    async create(){
        let mailBox = {
            host: this.host,
            service: this.service,
            port: this.port,
            authUser: this.authUser,
            authPassword: this.authPassword,
            folders: this.folders
        }

        try {
            
            return mailBox
        } catch (error) {
            
        }
    }

    async deleteById(){
        let mailBox = { _id: this.id }

        try {

        } catch (error) {
            
        }
    }
}

module.exports = new MailBox()