class NotFound extends Error {
 
    constructor(){
        super('Data Not Found')
        this.name = 'Not Found'
        this.idErro = 1
    }
}


module.exports = NotFound