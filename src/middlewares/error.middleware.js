import express from "express"

export const errorHandler = (err,req,res,next) => {
    const { errorMessage,code,type } = res.locals
    code ? res.status(code) : res.status(500)
    errorMessage ? res.send(errorMessage) : res.send()
    type ? console.log(errorMessage + code + type) : null
    res.send()
}