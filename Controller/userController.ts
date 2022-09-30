import express from "express";
import mongoose from "mongoose";
import joi, { valid } from "joi";
import registerModel from "../Model/model";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import { ModifiedRouter, ModifiedRequest } from '../interface';


export const register = (req:express.Request,res:express.Response, next:express.NextFunction)=>{
    const {name,email,password} = req.body;

    const validation = joi.object({
        name:joi.string().alphanum().required(),
        email:joi.string().email().required(),
        password:joi.string().required()
    })

    console.log(req.body);

    validation.validateAsync({name,email,password})
    .then((result)=>{
        
        registerModel.find({email})
        .then((findResponse)=>{
            if(findResponse.length>0){
                return res.json({message:"User already exist"})
                
            }
            

            bcryptjs.hash(password,10)
            .then((hashPassword)=>{
                registerModel.create({name,email,password:hashPassword})
                .then((data)=>{
                    const token = jwt.sign({_id:data._id},"A token for the register")

                    res.json({
                        message:"Registration successful",
                        User:{
                            data,
                            token
                        }
                    })
                })
                .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))

        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
}

export const login = (req:express.Request, res:express.Response, next:express.NextFunction)=>{
    const {email,password} = req.body;

    const validation = joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    })

    validation.validateAsync({email,password})
    .then((result)=>{
        registerModel.findOne({email})
        .then((findResult)=>{
            if(!findResult){
                return res.json({message:"Invalid user"})
            }

            bcryptjs.compare(password,findResult.password)
            .then((isValid)=>{
                if(!isValid){
                    return res.json({
                        message:"Incorrect password"
                    })
                }

                const token = jwt.sign({_id:String(findResult._id)},"a token for login&**^^%")
                findResult.password= "";

                res.json({
                    message:"Login successful",
                    user:findResult,
                    token
                })
               
                console.log(token)

                return token;
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
}

export const home = (req:ModifiedRequest,res:express.Response,next:express.NextFunction) =>{
    res.json({
        message:"accessible",
        user:req.user
    })
}