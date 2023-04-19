import { PrismaClient } from "@prisma/client"

export default class User{
    #model = new PrismaClient()["user"]

    async userCreate(user,postId){
        return await this.#model.create({
            data:{
                email : user.email,
                role : user.role,
                posts:{
                    connect:postId
                }
            }
        })
    }

    async userFind(email){
        return await this.#model.findUnique({
            where: email
        })
    }
}