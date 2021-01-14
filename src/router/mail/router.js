const router = require('express').Router()
const MailBox = require('./MailBox')


router.post('/mailbox', async (req, res) => {

    let data = req.body
    
    try{

        /*
        let mailBox = new MailBox(data)
        mailBox.create()
        */
        res.status(201)
        res.json({"teste":"ok"})
    }catch(error){

    }
})


module.exports =  router