const express = require('express')
const router= express.Router()
const controlerUser= require('../controllers/controlerUser')


router.get('/register', controlerUser.register)
router.post('/register',controlerUser.add)
router.get('/login', controlerUser.login)

module.exports=router