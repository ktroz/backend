import express from "express"
var router = express.Router()
import { signIn, findUser } from "../middlewares/signIn.middleware.js"
import wrapper from "../utils/wrapper.js"
import { validation } from "../middlewares/validation.middleware.js"
import { signInSchema } from "../models/schemas/signIn.schema.js"

router.post('/', validation(signInSchema),wrapper(signIn))
router.post('/findUser', wrapper(findUser))

export default router