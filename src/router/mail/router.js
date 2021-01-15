const router = require('express').Router()
const MailBox = require('./MailBox')
const Mail = require('./Mail')
const { Hermodr } = require('../../utils/hermodr-logger')
let logFile = 'MAIL/ router.js'

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
        Hermodr.error(logFile, error)
    }
})

router.get('/mailbox', async (req, res) => {

    try {
        let mailbox = new MailBox()
        mailbox.search()
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.get('/mailbox/:id', async (req, res) => {
    let id = req.params.id

    try {
        let mailbox = new MailBox({id})
        mailbox.searchById()
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.delete('/mailbox/:id', async (req, res) => {
    let id = req.params.id
    
    try {
        let mailBox = new MailBox({id})
        mailBox.deleteById()
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.put('/mailbox', async (req, res) => {
    let data = req.body
    
    try {
        let mailBox = new MailBox(data)
        mailbox.update()
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})


router.post('/mail', async (req, res) => {
    let data = req.body

    try {
        let mail = new Mail(data)
        mail.create()
    } catch (error) {
        
    }
})
router.get('/mail', async (req, res) => {
    let data = req.body

    try {
        let mail = new Mail(data)
        
    } catch (error) {
        
    }
})

router.get('/mail/:id', async (req, res) => {

    let id = req.params.id

    try {
        let mail = new Mail({id})
        
    } catch (error) {
        
    }
})

router.delete('/mail/:id', async (req, res) => {

    let id = req.params.id

    try {
        let mail = new Mail({id})
        mail.delete()
    } catch (error) {
        
    }
})

module.exports =  router