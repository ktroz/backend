import express from 'express'
import UserController from '../controllers/User.controller.js'
import wrapper from '../wrapper.js'

const router = express.Router()
const userController = new UserController()

router.get('/',wrapper(async (req,res,next) =>{
    res.json(await userController.getUser(req.body))    
}))

router.post('/',(req,res) =>{
    res.json(userController.postUser(req.body)).send()
})

export default router