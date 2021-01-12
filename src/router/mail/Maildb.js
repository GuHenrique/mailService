const mailModel = require('../../db/mailModel')

module.exports = {
    search(){
       return mailModel.find()
    },

    searchOne(id){
        return mailModel.find({_id:id})
    },

    insert(mail){
        return mailModel.create(mail)
    },

    update(){
        //return mailModel.updateOne({},{})
    },

    remove(id){
        return mailModel.deleteOne({_id:id})
    }
}