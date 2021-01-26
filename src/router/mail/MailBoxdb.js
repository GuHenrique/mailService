const mailBoxModel = require('../../db/mailBoxModel')

module.exports = {
    async search(pageNumber, nPerPage){
        nPerPage = Number(nPerPage)
        pageNumber = pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0
        
       return await mailBoxModel.find()
       .skip(pageNumber)
       .limit(nPerPage)
    },

    async searchOne(id){
        return await mailBoxModel.findOne({_id: id})
    },

    async insert(mail){
        return await mailBoxModel.create(mail)
    },

    async update(id, data){
        return await mailBoxModel.updateOne({_id:id},{
            $set: data
        })
    },

    async remove(id){
        return await mailBoxModel.deleteOne(id)
    }
}