
const express= require('express')
const router= express.Router()
const usuarios=require('../database/users')



const controler={
        login: (req, res) => {res.render('login')},
        register: (req, res) => { res.render('register') },
        add: (req, res) => {
           /*  let usuario ={
                nombreYapellido=req.body.nombre-apellido,
            } */
            
            
            res.redirect('register')},

        
}

module.exports=controler