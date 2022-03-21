const mongoose=require("mongoose")
const bookSch=new mongoose.Schema({
    likes:{type:Number, min:0 },
    coverImage:{type:String, required:true, max:1},
    content:{type:String, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},{
    timestamps:{type:String, required:true}
})

const Book=mongoose.model("book",bookSch)

module.exports=Book