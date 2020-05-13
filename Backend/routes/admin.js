const express = require('express')

const userControlleur = require('../controllers/user.Controller')
const Router = express.Router()

Router.get('/dashboard', userControlleur.getAllUsers)

module.exports=Router