import Post from "../models/Post.model.js"

export default class PostController{
    #post = new Post()

    async postPost(title){
        return await this.#post.postCreate(title)
    }
}