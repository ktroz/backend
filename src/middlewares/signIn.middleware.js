import express from "express"
import UserController from "../controllers/User.controller.js"

const userController = new UserController()
export const signIn = async(req,res,next) => {
    if(await userController.findUser({email: req.body.email})){
        res.locals = {
            errorMessage : "Bad user",
            code : 409,
            type : "User already exists"
        }
        throw new Error()
    }
    if(await userController.createUser(req.body)){
        res.status(204).send()
    }
}

export const findUser = async(req,res) => {
    user = await userController.findUser(req.body)
    if(user){
        res.status(200).send(user)
    }
}