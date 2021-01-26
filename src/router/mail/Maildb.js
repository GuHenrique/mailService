const mailModel = require('../../db/mailModel')

module.exports = {
    async search(pageNumber, nPerPage){
        nPerPage = Number(nPerPage)
        pageNumber = pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0
        
       return await mailModel.find()
       .skip(pageNumber)
       .limit(nPerPage)
    },

    async searchOne(id){                                             
        return await mailModel.findOne({_id:id})
    },

    async insert(mail){
        return await mailModel.create(mail)
    },

    async update(id, data){
        return await mailModel.updateOne({_id:id},{
            $set: data
        })
    },

    async remove(id){
        return await mailModel.deleteOne({_id:id})
    }
}