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

router.get('/mailbox', async (req, res) => {
    let id = req.params.id

    try {
        let mailbox = new MailBox({id})
        mailbox.search()
    } catch (error) {
        
    }
})

router.get('/mailbox/:id', async (req, res) => {
    let id = req.params.id

    try {
        let mailbox = new MailBox({id})
        mailbox.searchById()
    } catch (error) {
        
    }
})

router.delete('/mailbox/:id', async (req, res) => {
    let id = req.params.id
    
    try {
        let mailBox = new MailBox({id})
        mailBox.deleteById()
    } catch (error) {
        
    }
})


module.exports =  router