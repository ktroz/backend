export default class ErrorController extends Error{
    #errors ={
        BAD_REQUEST:{
            code: 400
        },
        NOT_FOUND:{
            code:404
        },
        EXIST:{
            code:409
        }
    }
    constructor(type, message = 'Without trace'){
        super(message)
        this.code = this.#errors[type].code
    }
}