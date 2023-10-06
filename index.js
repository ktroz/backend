import express from "express"
import 'dotenv/config'
import user from "./src/routes/user.route.js"
import { errorHandler } from "./src/middlewares/error.middleware.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/user',user)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
})
