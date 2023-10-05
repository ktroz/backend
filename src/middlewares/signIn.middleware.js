import express from "express"
import UserController from "../controllers/User.controller.js"

const userController = new UserController()
export const signIn = (req,res) => {
    userController.createUser(req.body)
}