import User from '../models/User.model.js'

export default class UserController{
    #model = new User()
    
    async postUser(payload){
        const {user, post} = payload
        return await this.#model.userCreate(user,post)
    }

    async getUser(payload){
        const user = await this.#model.userObtain(payload)
        if(user){
            throw new Error("Error generico")
        }
        return user
    }
}