const express = require('express')

const commentControlleur = require('../controllers/comment.controlleur')
const{commentRules, validator} = require('../middlewares/validator')
const Router = express.Router()

Router.post('/profile/:userId/post/:postId', commentRules(),validator,  commentControlleur.addComment)
Router.put('/profile/:userId/post/:postId', commentControlleur.editComment)
Router.delete('/profile/:userId/post/:postId/comment', commentControlleur.deleteComment)

module.exports=Router