import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        min : 8,
        max : 20
    }, 
    password : {
        type : String,
        required : true,
        unique : true,
        min : 8
    }
}, {timestamps : true})

export const User = mongoose.model('User', UserSchema)