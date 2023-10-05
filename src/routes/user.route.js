import express from "express"
var router = express.Router()
import { signIn } from "../middlewares/signIn.middleware.js"

router.post('/', signIn)

export default router