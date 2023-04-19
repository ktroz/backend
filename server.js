import dotenv from 'dotenv'
import express from 'express'
import register from './src/services/register.service.js'

dotenv.config()

var app = express()

app.use(express.json())

app.use('/register', register)

app.listen(process.env.APP_PORT, () => {
    console.log(`App listening on ${process.env.APP_PORT}`)
})
