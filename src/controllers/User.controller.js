import User from '../models/User.model.js'
import PostController from './Post.controller.js'
import ErrorController from './Error.controller.js'

export default class UserController{
    #model = new User()
    #postController = new PostController()
    
    async postUser(payload){
        const {user, post} = payload
        const postId = await this.#postController.postPost(post)
        return await this.#model.userCreate(user,postId)
    }

    async getUser(email){
        const user = await this.#model.userFind(email)
        if(!user){
            throw new ErrorController('NOT_FOUND','Usuario no existente')
        }
        return user
    }
}