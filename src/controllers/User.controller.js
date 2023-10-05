import UserModel from "../models/User.model.js";

export default class UserController {
    #model = new UserModel()
    createUser(user){
        return this.#model.createUser(user)
    }
}