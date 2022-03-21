const mongoose=require("mongoose")
const commentSchema = new mongoose.Schema({
    body:{type:String, required:true },
    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    bookId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }

},{
    timestamps:{type:String, required:true}
})

const Book=mongoose.model("comment",commentSchema)

module.exports=Comment