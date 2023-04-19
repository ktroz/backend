import express from 'express'
import UserController from '../controllers/User.controller.js'

const router = express.Router()
const userController = new UserController()

router.get('/',(req,res) =>{
    res.send('Hello')
})

router.post('/',(req,res) =>{
    res.send(userController.postUser(req.body))
})

export default router