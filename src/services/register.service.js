import express from 'express'
import UserController from '../controllers/User.controller.js'
import ErrorController from '../controllers/Error.controller.js'
import postValidator from '../middlewares/validators/register/post.middleware.js'
import getValidator from '../middlewares/validators/register/get.middleware.js'

import wrapper from '../wrapper.js'

const router = express.Router()
const userController = new UserController()
 
router.get('/',
    getValidator,
    wrapper(async (req,res) =>{
    const user = await userController.getUser(req.body)
    if(!user){
        throw new ErrorController('NOT_FOUND','Usuario no existente')
    }
    res.json(user)
}))

router.post('/',
    postValidator, 
    wrapper(async (req,res) => {
    const { email } = req.body.user
    const user = await userController.getUser({email})
    if(user){
        throw new ErrorController('EXIST','Duplicate user')
    }
    res.json(await userController.postUser(req.body))
}))

export default router