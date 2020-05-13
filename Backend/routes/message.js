const express = require('express')

const messageControlleur = require('../controllers/message.Controlleur')
const Router = express.Router()

Router.post('/profile/:senderId/post/:reciverId/message', messageControlleur.sendMessage)

module.exports= Router