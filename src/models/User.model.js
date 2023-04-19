import { PrismaClient } from "@prisma/client"

export default class User{
    #model = new PrismaClient()["user"]

    async userCreate(user,post){
        return await this.#model.create({
            data:{
                email : user.email,
                role : user.role,
                posts:{
                    create:{ ...post }
                }
            }
        })
    }

    async userObtain(email){
        return await this.#model.findUnique({
            where: email
        })
    }
}