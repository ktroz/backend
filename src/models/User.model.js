import { Prisma,PrismaClient } from "@prisma/client"

export default class UserModel {
    #client
    constructor(){
        this.#client = new PrismaClient()["user"]
    }
    async createUser(user){
        await this.#client.create({data: user})
    }
}