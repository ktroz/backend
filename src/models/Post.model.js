import { PrismaClient } from "@prisma/client"

export default class Post{
    #post = new PrismaClient()["post"]

    async postCreate(title){
        return await this.#post.create({
            data: title,
            select:{
                id: true
            }
        })
    }
}