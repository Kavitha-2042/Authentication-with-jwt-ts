import express from "express"

export interface ModifiedRequest extends express.Request{
    user:any
}

export interface ModifiedRouter extends express.IRouter{
    get:(path:string,...middlewares:any)=>void
    post:(path:string,...middlewares:any)=>void
}