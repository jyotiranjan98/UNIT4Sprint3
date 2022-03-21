const express = require("express")
const Book = require("../models/book")

const router =express.Router()

router.post("",async(req,res)=>{
    try{
        const user =await Book.create(req.body)

        return res.status(200).send(book)
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router