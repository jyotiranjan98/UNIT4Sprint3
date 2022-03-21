const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({

    firstName:{type:string, required:true, minlength:3, maxlength:30 },
    lastName:{type:string, required:false, minlength:3, maxlength:30 },
    age:{type:Number, required:true},
    email:{type:String, required:true, unique:true},
    profileImages:{type:String, required:true}


},{
    timestamps:{type:String, required:true}
})

const User=mongoose.model("user",userSchema)

module.exports=User