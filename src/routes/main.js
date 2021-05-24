const express=require('express');
const router=express.Router();
const controlerMain=require('../controllers/controlerMain')

router.get('/', controlerMain.index)
router.get('/register', controlerMain.register)
router.get('/login', controlerMain.login)


module.exports=router;