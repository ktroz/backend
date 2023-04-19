import express from 'express'
import UserController from '../controllers/User.controller.js'

import wrapper from '../wrapper.js'
import ErrorController from '../controllers/Error.controller.js'


const router = express.Router()
const userController = new UserController()

router.get('/',wrapper(async (req,res,next) =>{
    res.json(await userController.getUser(req.body))
}))

router.post('/',async (req,res) => {
    res.json(await userController.postUser(req.body))
})

export default router