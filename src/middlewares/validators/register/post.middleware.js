import Joi from 'joi'
import ErrorController from '../../../controllers/Error.controller.js'

const schema = Joi.object({
    user: Joi.object({
        email: Joi.string().email({minDomainSegments:2}),
        role: Joi.string().valid('USER','ADMIN')
    }),
    post: Joi.object({
        title: Joi.string()
    })
})

export default (req, res, next) => {
    if(schema.validate(req.body).error){
        res.status(400).send('Estructura no valida')
    }else{
        next()
    }
}