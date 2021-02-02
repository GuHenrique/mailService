const mailBoxModel = require('../../db/mailBoxModel')

module.exports = {
    async search(pageNumber, nPerPage, data){
        nPerPage = Number(nPerPage)
        pageNumber = pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0
        if(!data) data = {}
        
       return await mailBoxModel.find()
       .skip(pageNumber)
       .limit(nPerPage)
    },

    async searchOne(id){
        return await mailBoxModel.findOne({_id: id})
    },

    async insert(data){
        data.dt_created = new Date()
        return await mailBoxModel.create(data)
    },

    async update(id, data){
        data.dt_updated = new Date()
        return await mailBoxModel.updateOne({_id:id},{
            $set: data
        })
    },

    async remove(id){
        return await mailBoxModel.deleteOne(id)
    }
}