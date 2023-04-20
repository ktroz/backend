import dotenv from 'dotenv'
import express from 'express'
import register from './src/services/register.service.js'
import errorHandler from './src/middlewares/error.middleware.js'

dotenv.config()

var app = express()

app.use(express.json())

app.use('/register', register)

app.use(errorHandler)

app.listen(process.env.APP_PORT, () => {
    console.log(`App listening on ${process.env.APP_PORT}`)
})
