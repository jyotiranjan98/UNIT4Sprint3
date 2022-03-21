const mongoose=require("mongoose")
const publicationSchema=new mongoose.Schema({
    name:{type:String, required:true},
    content:{type:String, required:true},
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"book"
    }

},{
    timestamps:{type:String, required:true}
})

const Publication =mongoose.model("publication",publicationSchema)

module.exports=Publication