const express = require('express')

const userController = require('../controllers/user.Controller')
const {registerRules, validator, authType} = require('../middlewares/validator')
const isAuth = require('../middlewares/passport-setup')
const Router = express.Router()

Router.post('/register', registerRules(), validator, userController.register)
Router.post('/login', userController.login)
Router.get('/profile', isAuth(), (req, res)=> res.json(req.user))
Router.get('/admin', isAuth(), authType())

module.exports = Router