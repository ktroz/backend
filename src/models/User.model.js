import { Prisma,PrismaClient } from "@prisma/client"

export default class UserModel {
    #client
    constructor(){
        this.#client = new PrismaClient()["user"]
    }
    async createUser(user){
        return await this.#client.create({data: user})
    }
    
    async findUser(email){
        return await this.#client.findUnique({where: email})
    }
}