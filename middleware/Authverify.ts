import express, { response } from "express";
import jwt from "jsonwebtoken"
import { ModifiedRequest } from "../interface";
import registerModel from "../Model/model";

const Authverify = (req:ModifiedRequest,res:express.Response,next:express.NextFunction) =>{
    let token = req.headers["jwt-token"] as string

    if(token){
        try {
            let verify = jwt.verify(token,"a token for login&**^^%")
            let decode:any = jwt.decode(token)
            if(req.path==='/register' || req.path ==='/login'){
                return res.json({
                    message:"Invalid path"
                })
            }
            
            registerModel.findById(decode._id)
            .then(user=>{
                req.user=user
                next()
            })
            .catch(err=>{
                return res.json({
                    message:"something went wrong"
                })
            })
        } catch (error) {
            if(req.path==='/register' || req.path ==='/login'){
                next()
                return 
            }
           return  res.json({
                message:"Invalid path"
            })
        }
    }
    else{
        if(req.path==='/register' || req.path ==='/login'){
            next()
            return
        }
        return res.json({
            message:"Restricted path"
        })
    }
}
export default Authverify