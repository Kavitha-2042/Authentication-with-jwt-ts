import mongoose from 'mongoose';

interface ITypes {
    name : string,
    email : string,
    password : string
}

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        default:"",
        required : true
    },
    email:{
        type:String,
        default:"",
        required:true
    },
    password:{
        type:String,
        default:"",
        required:true
    }
})

export default mongoose.model("crud",registerSchema)