import express from "express"

export const validation = (schema) =>
    (req,res,next) => {
        if(schema.safeParse(req.body).error){
            res.locals = {
                errorMessage : "Bad structure",
                code : 404,
                type : schema.error
            }
            throw new Error()
        }        
        return next()
    }
