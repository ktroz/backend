import Joi from 'joi'

const schema = Joi.object({
    email: Joi.string().email({minDomainSegments:2})
})

export default (req, res, next) => {
    if(schema.validate(req.body).error){
        res.status(400).send('Usuario no valido')
    }else{
        next()
    }
}