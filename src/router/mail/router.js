const router = require('express').Router()
const MailBox = require('./MailBox')
const mailboxdb = require('./MailBoxdb')
const Mail = require('./Mail')
const maildb = require('./Maildb')
const { Hermodr } = require('../../utils/hermodr-logger')
let logFile = 'MAIL/ router.js'

/*  ******************** CAIXA DE E-MAIL ********************  */
router.post('/mailbox', async (req, res) => {

    let data = req.body
    
    try{
        
        let mailBox = new MailBox(data)
        res.status(201)
        res.json(await mailBox.create())
    }catch(error){
        Hermodr.error(logFile, error)
    }
})

router.get('/mailbox', async (req, res) => {

    let pageNumber = req.query.page || 0
    let nPerPage = req.query.registers || 10

    try {
        res.status(201)
        res.json(await mailboxdb.search(pageNumber, nPerPage))
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.get('/mailbox/:id', async (req, res) => {
    let id = req.params.id

    try {
        let mailBox = new MailBox({"id":id})
        res.json(await mailBox.searchById())
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.put('/mailbox/:id', async (req, res) => {
    let data = req.body
    data.id = req.params.id

    try {
        let mailBox = new MailBox(data)
        res.json(await mailBox.update())
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.delete('/mailbox/:id', async (req, res) => {
    let id = req.params.id
    
    try {
        let mailBox = new MailBox({"id":id})
        res.json(await mailBox.deleteById())
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

/*  ******************** E-MAIL ********************  */
router.post('/mail', async (req, res) => {
    let data = req.body

    try {

        let mailBox = new MailBox({"id": data.mailbox})
        data.mailbox = await mailBox.searchById()
        data.from = data.mailbox.authUser

        let mail = new Mail(data)

        res.status(201)
        res.json(await mail.create())
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.get('/mail', async (req, res) => {

    let pageNumber = req.query.page || 0
    let nPerPage = req.query.registers || 10

    try {
        res.status(201)
        res.json(await maildb.search(pageNumber, nPerPage))
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.get('/mail/:id', async (req, res) => {

    let id = req.params.id

    try {
        let mail = new Mail({id})
        res.json(await mail.searchById())
        
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.put('/mail/:id', async (req, res) => {
    let data = req.body
    data.id = req.params.id

    try {

        let mailBox = new MailBox({"id": data.mailbox})
        data.mailbox = await mailBox.searchById()
        data.from = data.mailbox.authUser
        let mail = new Mail(data)
        
        res.json(await mail.update())
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

router.delete('/mail/:id', async (req, res) => {
    let id = req.params.id
    
    try {
        let mail = new Mail({"id":id})
        res.json(await mail.deleteById())
    } catch (error) {
        Hermodr.error(logFile, error)
    }
})

module.exports =  router