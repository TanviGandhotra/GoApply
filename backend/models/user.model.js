import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    //profile mei require true nhi likhna bcz jb tum account bnaoge fir baad mei bio vgrh update kroge 
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, // URL to resume file
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},  //yha hm relation store krenge user or company bhej
        // or ismei hmne ref company daldia ,comany model bnayenge hm or vo refrence hoga iske lie
        profilePhoto:{
            type:String,
            default:""
        }

    },
},{timestamps:true}); //is se time bhi record hota
export const User = mongoose.model('User', userSchema);