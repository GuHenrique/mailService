const mailBoxModel = require('../../db/mailBoxModel')

module.exports = {
    search(){
       return mailBoxModel.find()
    },

    searchOne(id){
        return mailBoxModel.find({_id:id})
    },

    insert(mail){
        return mailBoxModel.create(mail)
    },

    update(id, data){
        return mailBoxModel.updateOne({_id:id},{
            $set: data
        })
    },

    remove(id){
        return mailBoxModel.deleteOne({_id:id})
    }
}